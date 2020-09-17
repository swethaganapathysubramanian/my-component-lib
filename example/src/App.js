import React from 'react'

import {
  ExampleComponent,
  ExampleButton,
  ExampleText,
  Input
} from 'my-component-lib'
import 'my-component-lib/dist/index.css'

const App = () => {
  return (
    <div>
      <ExampleButton label='This is the Example button' />
      <ExampleComponent text='Create React Library Example 😄' />{' '}
      <ExampleText text='This is the example text' color='blue' />
      <Input placeholder='Hello' label='This' background='blue' color='red' />
    </div>
  )
}

export default App
