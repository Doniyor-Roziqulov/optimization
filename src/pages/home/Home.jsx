import Blogs from "@/components/blogs/Blogs";
import { Button } from "antd";
import axios from "@/api";
import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        axios
            .get("/admin/profile")
            .then((res) => {
                console.log(res.data.payload);
                dispatch({ type: "SET_PROFILE", payload: res.data.payload });
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            <div className="container mx-auto px-14 pt-4 pb-4 flex justify-end">
                <Button
                    danger
                    className=" bg-stone-900 text-white"
                    onClick={() => dispatch({ type: "LOGOUT" })}>
                    Log Out
                </Button>
            </div>
            <Blogs />
        </div>
    );
};

export default memo(Home);
