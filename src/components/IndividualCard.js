import React from 'react'

const IndividualCard = (props) => {
  return (
    <div className="card-container" draggable='true' key={props.name} id={props.id}>
      <strong><em>{props.name}</em></strong>
    </div>
  )
}

export default IndividualCard