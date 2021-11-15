import React from 'react'
import DataDropTarget from './DataDropTarget'

const BottomHalf = (props) => {
  return (
    <div className="bottom-half-container">
      <DataDropTarget
        id="usual-suspects"
        data={props.data}
        handleDragStart={props.handleDragStart}
      />
      <DataDropTarget
        id="everyone-else"
        handleDragStart={props.handleDragStart}
      />
    </div>
  )
}

export default BottomHalf