import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home.js';
import Layout from './hoc/layout.js';
import BookView from './components/Books';
import Login from './containers/admin/login'
import Auth from './hoc/auth';
import User from './components/Admin';


const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Auth(Home,null)}/>
                <Route path="/login" exact component={Auth(Login,false)}/>
                <Route path="/user" exact component={Auth(User, true)} />
                <Route path="/books/:id" exact component={Auth(BookView)} />
                
            </Switch>
        </Layout>
    )
}

export default Routes;