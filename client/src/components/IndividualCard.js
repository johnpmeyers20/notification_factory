import React from 'react'

const IndividualCard = (props) => {
  return (
    <div
      className="card-container"
      draggable='true'
      key={props.id}
      id={props.id}
      onDragStart={props.handleDragStart}
    >
      <strong><em>{props.name}</em></strong>
    </div>
  )
}

export default IndividualCard