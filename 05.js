// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

const Box = function ({
  className,
  style,
  size = 'default',
  children,
  ...props
}) {
  const sizes = {
    small: 'box--small',
    medium: 'box--medium',
    large: 'box--large',
    default: 'box--default',
  }
  const classNames = ['box', sizes[size], className].join(' ').trimEnd()
  const styles = {
    fontStyle: 'italic',
    ...style,
  }

  return (
    <div className={classNames} style={styles} {...props}>
      {children}
    </div>
  )
}

const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
