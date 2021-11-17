import React from 'react'
import DataDropTarget from './DataDropTarget'

const BottomHalf = (props) => {
  return (
    <div className="bottom-half-container">
      <DataDropTarget
        id="usual-suspects"
        data={props.data}
        handleDragStart={props.handleDragStart}
        handleDragEnterLeave={props.handleDragEnterLeave}
        handleOverDrop={props.handleOverDrop}
      />
      <DataDropTarget
        id="everyone-else"
        handleDragStart={props.handleDragStart}
        handleDragEnterLeave={props.handleDragEnterLeave}
        handleOverDrop={props.handleOverDrop}
      />
    </div>
  )
}

export default BottomHalf