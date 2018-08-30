import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Chicken from './Pages/Chicken'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Chicken} />
      
    </Switch>
  </main>
)

export default Main