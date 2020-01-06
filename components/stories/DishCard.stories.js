import React from 'react'
import { addParameters, storiesOf } from '@storybook/react'
import { themes } from '@storybook/theming'
import DishCard from '../DishCard'

storiesOf('DishCard', module)
.add("Default", () => {
  return (
    <DishCard
      description="Hamburguer, maionese de soja, alface, tomate, milho e ervilha"
      name="Xis vegano de lentilha"
      price={ 17.0 }
    />
  )
})