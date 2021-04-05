import React from "react";
import "./App.css";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {BrowserRouter, NavLink, Route, withRouter} from "react-router-dom";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/App-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/Redux-store";
import {Redirect, Switch} from "react-router";
import 'antd/dist/antd.css';
import {Breadcrumb, Layout, Menu} from 'antd';
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import navbar from "./components/Navbar/Navbar.module.css";
import {Header} from "./components/Header/Header";

const {SubMenu} = Menu;
const {Content, Footer, Sider} = Layout;

const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
  catchAllUnhandledErrors = (reason, promise) => {debugger
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
        <Layout>
            <Header/>
          <Content style={{padding: '0 50px'}}>
            <Layout className="site-layout-background" style={{padding: '24px 0'}}>
              <Sider className="site-layout-background" width={200}>
                <Menu
                    mode="inline"
                    //defaultSelectedKeys={['1']}
                    //defaultOpenKeys={['sub1']}
                    style={{height: '100%'}}
                >
                  <SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">
                    <Menu.Item key="1"> <NavLink to="/profile" activeClassName={navbar.activeLink}>Profile</NavLink></Menu.Item>
                    <Menu.Item key="2"><NavLink to="/dialogs" activeClassName={navbar.activeLink}>Dialogs</NavLink></Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Developers">
                    <Menu.Item key="5"><NavLink to="/users" activeClassName={navbar.activeLink}>Users</NavLink></Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Content style={{padding: '0 24px', minHeight: 280}}>
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
              </Content>
            </Layout>
          </Content>
          <Footer style={{textAlign: 'center'}}>Social NetWork ©2021 Created by Pranik Vladimir</Footer>
        </Layout>



     /*    <div className="app-wraper">
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
*/
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