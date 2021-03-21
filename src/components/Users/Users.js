import React from "react";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";


let Users = (props) => {
    return (
        <div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize} portionSize={props.portionSize}/>


            {props.users.map((u) => (
                <div key={u.id}>
          <span>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img
                    src={
                        u.photos.small != null
                            ? u.photos.small
                            : "https://yt3.ggpht.com/a/AATXAJw_UO-dG3sgFQWu5ZQGMJqHteGHDstG3ushN3iJDg=s100-c-k-c0xffffffff-no-rj-mo"
                    }
                    className={styles.userPhoto}
                    alt=""
                />
              </NavLink>
            </div>
            <div>

              {u.followed
                  ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                      props.getFollow(u.id);
                  }}>Unfollow</button>
                  : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                      props.getUnfollow(u.id);
                  }}>Follow</button>}
            </div>
          </span>
                    <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.city"}</div>
              <div>{"u.location.photos"}</div>
            </span>
          </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
