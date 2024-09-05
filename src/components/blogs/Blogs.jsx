import axios from "@/api";
import React, { memo, useEffect, useState } from "react";
import { Button } from "antd";
import Create from "../create/Create";
import { useSelector } from "react-redux";

const Blogs = () => {
    const [data, setData] = useState(null);
    const [show, setShow] = useState(false);
    const [reload, setReload] = useState(false);
    const profile = useSelector((state) => state.profile);

    const handleCreate = (value) => {
        let blog = {
            title: value.title,
            desc: value.desc,
        };
        axios
            .post("/blogs", blog)

            .then((res) => {
                setBlogs([...blogs, res.data.payload]);
            })
            .finally(() => setShow(false));
    };
    useEffect(() => {
        axios
            .get("/blogs", { params: { limit: 12 } })
            .then((res) => setData(res.data.payload))
            .catch((err) => console.log(err));
    }, [reload]);
    const handleDelete = (id) => {
        axios.delete(`/blogs/${id}`).then((res) => setReload((p) => !p));
    };

    const lists = data?.map((blog) => (
        <div
            className="w-80 p-4 border rounded-lg bg-neutral-900 hover:scale-105 transition-all"
            key={blog._id}>
            <h3 className="text-center  text-xl font-semibold text-white">
                {blog.title}
            </h3>
            <p className="text-center italic text-white">{blog.desc}</p>
            <p className="text-lg text-white">Creator: {blog.userId.fname}</p>
            {profile?._id === blog.userId._id && (
                <div>
                    <button
                        className="bg-slate-900 border rounded-lg py-1 text-red-600 px-3"
                        danger
                        onClick={() => handleDelete(blog._id)}>
                        Delete
                    </button>
                    <Button
                        className="bg-stone-800 text-white ml-2"
                        onClick={() => setShow(true)}>
                        Edit
                    </Button>
                </div>
            )}
        </div>
    ));
    return (
        <div className="container mx-auto px-14">
            <Button
                className="bg-stone-800 text-white"
                onClick={() => setShow(true)}>
                Create
            </Button>
            <Create show={show} setShow={setShow} handleCreate={handleCreate} />
            <div className="flex gap-3  justify-between  mt-3 flex-wrap">
                {lists}
            </div>
        </div>
    );
};

export default memo(Blogs);
