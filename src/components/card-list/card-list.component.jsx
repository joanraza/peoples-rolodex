import React from "react"

import "./card-list.styles.css"
import { Card } from "../card/card.component"

export const CardList = props => (
  <div className='card-list'>
    {props.peoples.map(people => (
      <Card key={people.id} people={people} />
    ))}
  </div>
)
