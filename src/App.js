import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Import Components
import Home from './screens/Home'
import Login from './screens/auth/Login'
import InviteMember from './screens/auth/InviteMember'
import CreateYourTeam from './screens/auth/CreateYourTeam'
import Register from './screens/auth/Register'
import Dashboard from './screens/accounts/Dashboard'
import Settings from './screens/accounts/Settings'
import TeamSettings from './screens/accounts/TeamSettings'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={CreateYourTeam} exact path='/create-team' />
        <Route component={Login} exact path='/login' />
        <Route component={InviteMember} exact path='/invite-member' />
        <Route component={Register} exact path='/register' />
        <Route component={Dashboard} exact path='/dashboard' />
        <Route component={Settings} exact path='/settings' />
        <Route component={TeamSettings} exact path='/team-settings' />
      </Switch>
    </Router>
  )
}

export default App
