import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home.js';
import Layout from './hoc/layout.js';
import BookView from './components/Books';
import Login from './containers/admin/login'
import Auth from './hoc/auth';
import User from './components/Admin';
import AddReview from './containers/admin/add'
import userPosts from './components/Admin/userPosts'
import editPost from './containers/admin/edit'
import logout from './components/Admin/logout'
import Register from './containers/admin/register'

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Auth(Home,null)}/>
                <Route path="/login" exact component={Auth(Login,false)}/>
                <Route path="/user" exact component={Auth(User, true)} />
                <Route path="/user/logout" exact component={Auth(logout, true)} />
                <Route path="/user/add" exact component={Auth(AddReview, true)} />
                <Route path="/user/register" exact component={Auth(Register, true)} />
                <Route path="/user/edit-post/:id" exact component={Auth(editPost, true)} />
                <Route path="/books/:id" exact component={Auth(BookView,null)} />
                <Route path="/user/user-posts" exact component={Auth(userPosts, true)} />
                
            </Switch>
        </Layout>
    )
}

export default Routes;