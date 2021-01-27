import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AuthPage } from '../components/Auth/AuthPage.js'
import { CreatePage } from '../components/Create Page/CrearePage.js'
import { DetailPage } from '../components/Detail/DetailPage.js'
import { LinksPage } from '../components/Links/LinksPage.js'



export const UseRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/links" exact><LinksPage /></Route>
                <Route path="/create" ><CreatePage /></Route>
                <Route path="/detail/:id" ><DetailPage /></Route>
                <Redirect to="/create" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact><AuthPage /></Route>

        </Switch>
    )
}

