import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home.js';
import Layout from './hoc/layout.js';
import BookView from './components/Books';


const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/:id" exact component={BookView} />
            </Switch>
        </Layout>
    )
}

export default Routes;