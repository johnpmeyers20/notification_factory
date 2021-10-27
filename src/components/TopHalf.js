import React from 'react'
import SendButton from './SendButton';
import DataDropTarget from './DataDropTarget';

const TopHalf = () => {
  return (
    <div className="top-half-container">
      <div className="left">
        <DataDropTarget id='data-top'/>
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