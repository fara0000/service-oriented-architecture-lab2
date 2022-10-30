import React, { useEffect, useState } from 'react';
import {BrowserRouter, Redirect, Route, Switch, useHistory} from 'react-router-dom';
import { RedirectWithQuery } from './core/router/redirectWithQuery';
import { Path } from './core/router/paths';
import { observer } from 'mobx-react-lite';
import {MainPage} from "./views/main/MainPage";

export const App = observer(() => {
    const history = useHistory();


    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <RedirectWithQuery to={Path.CITIES} children={MainPage}/>
                </Route>
                <Route path="/cities" exact>
                    <MainPage />
                </Route>
                <Route path="*">
                    <Redirect to={Path.NOTFOUND} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
});