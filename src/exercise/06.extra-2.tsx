// Styling
// http://localhost:3000/isolated/exercise/06.tsx

import React from 'react'
import '../box-styles.css'

function Box({
  style = {},
  className = '',
  size,
  ...otherProps
}: React.HTMLAttributes<HTMLDivElement> & {
  size?: 'small' | 'medium' | 'large'
}) {
  const sizeName = size ? `box--${size}`: '';
  return (
    <div
      className={`box ${className} ${sizeName}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
};

function App() {
  return (
    <div>
      <Box size='small' style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size='medium' style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size='large' style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>
        sizeless colorless box
      </Box>
    </div>
  )
}

export {App}
