import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Auth from "./pages/auth/Auth";
import { memo } from "react";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Auth />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default memo(App);
