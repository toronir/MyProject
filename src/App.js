import React from "react";
import "./App.css";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/App-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/Redux-store";
import {Provider} from "react-redux";
import {Redirect, Switch} from "react-router";

const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
    catchAllUnhandledErrors = (reason,promise) =>{
        alert("Some error occurred")
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className="app-wraper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wraper-content">
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to={"/profile"}/>}/>
                        <Route path="/dialogs" render={() => {
                            return <React.Suspense fallback={<div>Loading...</div>}>
                                <DialogsContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </Switch>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}),
)(App);
const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default MainApp;