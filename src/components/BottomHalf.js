import React from 'react'
import DataDropTarget from './DataDropTarget'

const BottomHalf = (props) => {
  return (
    <div className="bottom-half-container">
      <DataDropTarget id="usual-suspects" data={props.data} />
      <DataDropTarget id="everyone-else"/>
    </div>
  )
}

export default BottomHalf