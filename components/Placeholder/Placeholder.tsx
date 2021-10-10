import cx from 'classnames'

interface Props {
  className?: string
}
export const Placeholder = ({ className }: Props) => {
  return (
    <div
      className={cx(
        'flex justify-center items-center rounded text-gray-400',
        className,
      )}
      style={{
        backgroundImage:
          'linear-gradient(45deg, #eee 8.33%, #ffffff 8.33%, #ffffff 50%, #eee 50%, #eee 58.33%, #ffffff 58.33%, #ffffff 100%)',
        backgroundSize: '8.49px 8.49px',
      }}
    >
      Placeholder
    </div>
  )
}
