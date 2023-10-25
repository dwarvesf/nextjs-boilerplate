/* eslint-disable react/jsx-no-bind */
import { useRef, useState, useEffect } from 'react'
import { Chessboard } from 'react-chessboard'
import { Chess } from 'chess.js'
import { OpenAIMessage } from 'api'
import { getChatCompletions } from '../api/chat/chat'

export default function Home() {
  const [game, setGame] = useState(new Chess())

  const msgs = useRef([] as OpenAIMessage[])
  const botPossibleMoves = useRef([] as string[])
  const recentMove = useRef('')

  useEffect(() => {
    msgs.current.push({
      role: 'system',
      content: `You are playing a game of chess against a user. Please tell me your move in algebraic notation (eg: e2-e4, eg: Be7, eg: Nxc4) and nothing else. Do not mention my moves.`,
    })
  }, [])

  useEffect(() => {
    if (game.turn() === 'b') {
      botPossibleMoves.current = game.moves()
      makeBOTMove()
    }
  }, [game, makeBOTMove])

  function safeGameMutate(modify: (game: Chess) => void) {
    setGame((g) => {
      const update = new Chess(g.fen())
      modify(update)
      return update
    })
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function makeBOTMove() {
    if (
      game.isGameOver() ||
      game.isDraw() ||
      botPossibleMoves.current.length === 0
    )
      return

    const botPossibleMovesString = botPossibleMoves.current.join(' or ')
    msgs.current.push({
      role: 'user',
      content: `I play ${recentMove.current}. Your turn with the black side; and you must choose only one best move from the following available moves: ${botPossibleMovesString}.`,
    })

    // Use the OpenAI API to get the best move
    const openAIResponse = await getChatCompletions({
      model: 'openai/gpt-3.5-turbo',
      messages: msgs.current,
    })

    if (openAIResponse && openAIResponse.choices) {
      const responseContent = openAIResponse.choices[0].message.content

      if (responseContent !== '') {
        const bestMoves: string[] = responseContent.split(',')
        if (bestMoves.length > 0) {
          safeGameMutate((game) => {
            game.move(bestMoves[0])
          })
          msgs.current.push({ role: 'assistant', content: `${bestMoves[0]}` })
        }
      }
    }
  }

  function onDrop(source: string, target: string, piece: string) {
    let move = null
    recentMove.current = `${piece[1]}${source}-${target}` // from-to
    safeGameMutate((game) => {
      try {
        move = game.move({
          from: source,
          to: target,
          promotion: piece[1].toLowerCase() ?? 'q',
        })
      } catch (error) {
        return 'snapback'
      }
    })

    if (move === null) return false

    return true
  }

  return (
    <div className="app">
      <Chessboard position={game.fen()} onPieceDrop={onDrop} />
    </div>
  )
}
