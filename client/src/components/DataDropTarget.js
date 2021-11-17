import React from 'react'
import IndividualCard from './IndividualCard'

const DataDropTarget = (props) => {
  const idGen = name => name.replace(/\s/g, '').toLowerCase();
  const cards = props.data ?
    props.data.map(i =>
      <IndividualCard
        name={i.name}
        id={idGen(i.name)}
        key={idGen(i.name)}
        handleDragStart={props.handleDragStart}
      />) :
    null;
  return (
    <div className="data-drop-target"
      data-drop-target='true'
      id={props.id}
      onDragOver={props.handleOverDrop}
      onDrop={props.handleOverDrop}
      onDragEnter={props.handleDragEnterLeave}
      onDragLeave={props.handleDragEnterLeave}
      >
      {cards}
    </div>
  )
}

export default DataDropTarget
