/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')

const {
  getSvgInfos,
  generateFileBasedOnSvgInfo,
  // generateIndexFileContent,
  // generateStoryBookContent,
} = require('./utils')

const iconsPath = path.resolve(__dirname, '../components/icons/components/')
// recreate icon folder, clear possible stale file
rimraf.sync(iconsPath)
fs.mkdirSync(iconsPath)

const svgInfos = getSvgInfos()
// generate icons in parallel
Promise.all(svgInfos.map(generateFileBasedOnSvgInfo))
  .then(() => {
    // fs.writeFileSync(
    //   path.resolve(__dirname, "../components/icons/index.ts"),
    //   generateIndexFileContent(svgInfos),
    // )
    // fs.writeFileSync(
    //   path.resolve(__dirname, '../components/icons/Icons.stories.tsx'),
    //   generateStoryBookContent(svgInfos),
    // );

    console.log('generate svg components successfully')
  })
  .catch((err) =>
    console.error('error happened during generate svg components', err),
  )
