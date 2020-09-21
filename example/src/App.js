import React from 'react'

import {
  ExampleComponent,
  ExampleButton,
  ExampleText,
  Input,
  Card
} from 'my-component-lib'
import 'my-component-lib/dist/index.css'

const App = () => {
  return (
    <div>
      <ExampleButton label='This is the Example button' />
      <ExampleComponent text='Create React Library Example 😄' />{' '}
      <ExampleText text='This is the example text' color='blue' />
      <Input placeholder='Hello' label='This' background='blue' color='red' />
      <Card
        alt='Cherry Blossoms'
        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.'
        image='https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/1581019741/header-mt-fuji-cherry-blossoms-JPCHERRYBLOSSOM0220.jpg?itok=HQVBDkju'
        tags={['flowers', 'travel', 'japan', 'spring']}
        title='Cherry Blossoms'
      />
    </div>
  )
}

export default App
