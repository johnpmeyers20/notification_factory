import React from 'react'
import SendButton from './SendButton';
import DataDropTarget from './DataDropTarget';

const TopHalf = (props) => {
  return (
    <div className="top-half-container">
      <div className="left">
        <DataDropTarget
          id='data-top'
          value="Drop the lucky ones here!"
          handleDragStart={props.handleDragStart}
          handleDragEnterLeave={props.handleDragEnterLeave}
          handleOverDrop={props.handleOverDrop}
        />
      </div>
      <div className="right">
        <div className='button-container'>
          <SendButton />
          <SendButton />
          <SendButton />
        </div>
      </div>
    </div>
  )
}

export default TopHalf;