import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/signin-and-signup/signin-and-signup.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
    state = { currentUser: null };
    unsubscribeFromAuth = null;

    componentDidMount() {
        // firebase provides persistance user session
        // open subscribtion between firebase and the app
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInSignUp} />
                </Switch>
            </div>
        );
    }
}

export default App;
