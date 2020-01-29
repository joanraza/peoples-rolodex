import React from "react"

import "./card.styles.css"

export const Card = props => (
  <div className='card-container'>
    <img
      alt='prople'
      src={`https://robohash.org/${props.people.id}?set=set5&size=200x200`}
    />
    <h2>{props.people.name}</h2>
    <p>{props.people.phone}</p>
    <p>{props.people.email}</p>
  </div>
)
