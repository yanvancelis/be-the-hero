import { BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react'
import Profile from './Profile'
import Logon from './Logon'
import Register from './Register'
import NewIncident from './NewIncident'

export default function Router () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/incidents/new" component={NewIncident}></Route>

            </Switch>
        </BrowserRouter>
    )
}