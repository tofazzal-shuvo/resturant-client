import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../store/modules/auth";
import { Sidebar, StaffSidebar } from "./Sidebar";

const Layout = ({ ...props }) => {

  const user = useSelector(state=> state.auth.staff)

  // dispatch
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutUser());
  };

  const side = user ? StaffSidebar: Sidebar;

  return (
    <div className="wrapper overflow-hidden d-flex align-items-stretch">
      <nav id="sidebar" className="active">
        <h1>
          <Link to="/" className="logo">
            M.
          </Link>
        </h1>
        <ul className="list-unstyled components mb-5">
          {side.map((item, index) => (
            <li key={index} className="">
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
          <li>
            <a onClick={onLogout} href="##">
              Logout
            </a>
          </li>
        </ul>
      </nav>

      <div id="content" className="p-2">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
