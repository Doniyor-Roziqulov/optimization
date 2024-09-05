import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
    let user = useSelector((state) => state.token);
    return user ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default memo(Auth);
