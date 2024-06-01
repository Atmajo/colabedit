import React from 'react'
import { Terminal } from '@xterm/xterm';

const RunTab = () => {
  const terminal = new Terminal();
  return (
    <div>
      { terminal }
    </div>
  )
}

export default RunTab