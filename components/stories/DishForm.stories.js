import React from 'react'
import { addParameters, storiesOf } from '@storybook/react'
import { themes } from '@storybook/theming'
import DishForm from '../DishForm'

storiesOf('DishForm', module)
.add("Default", () => {
  return (
    <DishForm />
  )
})