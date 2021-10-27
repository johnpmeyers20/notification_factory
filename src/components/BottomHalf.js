import React from 'react'
import DataDropTarget from './DataDropTarget'

 function BottomHalf() {
  return (
    <div class="bottom-half-container">
      <DataDropTarget id="usual-suspects"/>
      <DataDropTarget id="everyone-else"/>
    </div>
  )
}

export default BottomHalf