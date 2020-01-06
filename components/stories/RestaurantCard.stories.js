import React from 'react'
import { addParameters, storiesOf } from '@storybook/react'
import { themes } from '@storybook/theming'
import RestaurantCard from '../RestaurantCard'

storiesOf('RestaurantCard', module)
.add("Default", () => {
  return (
    <RestaurantCard
      name="Mister X"
      itemsQuantity="4"
    />
  )
})