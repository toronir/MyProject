import React from "react";
import {Button, Col, Layout, Menu, Row} from "antd";
import Avatar from "antd/es/avatar";
import {UserOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {selectAuthUserProfile, selectCurrentUserLogin, selectIsAuth} from "../../Redux/Auth-selectors";
import {getAuthUserProfile, logout} from "../../Redux/Auth-reducer";
import {Link} from "react-router-dom";

export const Header = (props) => {


  const isAuth = useSelector(selectIsAuth)
  const login = useSelector(selectCurrentUserLogin)
  const profile = useSelector(selectAuthUserProfile)

  const dispatch = useDispatch()


  const logoutCallback = () => {
    dispatch(logout())
  }

  const {Header} = Layout;

  return (
      <Header className="header">
        <div className="logo"/>
        <Row>
          <Col span={18}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">LOGO</Menu.Item>
            </Menu>
          </Col>
          {isAuth
              ?
              <>
                <Col span={1}>
                  <Avatar src={!profile ? <></> : profile.photos.small} alt={login || ''} style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                </Col>
                <Col span={5}>
                  <Button onClick={logoutCallback} to={'/login'}>Log out</Button>
                </Col>
              </>
              : <Col span={6}>
                <Button>
                  <Link to={"/login"}>Login</Link>
                </Button>
              </Col>
          }
        </Row>
      </Header>
  )

  /*<header className={header.header}>
     <img src="https://www.sdsd.com/wp-content/uploads/2020/01/fi.png" />
     <div className={header.loginBlock}>
       {props.isAuth
           ? <div>{props.login} - <button onClick={props.logout} to={'/login'}>Log out</button></div>
           : <NavLink to={"/login"}>Login</NavLink>}
     </div>
   </header>
 );*/
};


