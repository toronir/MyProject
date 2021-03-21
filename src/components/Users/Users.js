import React, {useState} from "react";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import cn from "classnames";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++)
    {
        pages.push(i);
    }
    debugger
    let portionCount = Math.ceil(pagesCount/props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize +1;
    let rightPortionPageNumber = portionNumber * props.portionSize;


    return (
        <div>
            <div className={styles.paginator}>
                {portionNumber > 1 &&
                <button onClick={()=> {setPortionNumber(portionNumber-1)}}>PREV</button>}
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                    return  <span className={ cn({
                    [styles.selectedPage]: props.currentPage === p
                    },styles.pageNumber ) }
                            key={p}
                            onClick={(e) => {
                                props.onPageChanged(p);
                            }}> {p} </span>



                })}
                {portionCount > portionNumber &&
                <button onClick={() =>{ setPortionNumber(portionNumber+1)}}>NEXT</button> }
            </div>
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
