import React, { memo, useState } from "react";
import { Button, Form, Input } from "antd";
import axios from "@/api/index";
import Register from "@/components/register/Register";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = (values) => {
        setLoading(true);
        axios
            .post("/admins/sign-in", values)
            .then((res) => {
                console.log(res.data.payload.token);
                dispatch({ type: "LOGIN", payload: res.data.payload.token });
                navigate("/");
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <React.Fragment>
            <div className="flex h-screen items-center justify-center ">
                <Form
                    className="w-[400px] bg-zinc-600 p-2 rounded-md"
                    layout="vertical"
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off">
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}>
                        <Input className="bg-gray-600" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}>
                        <Input.Password className="bg-gray-600" />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            disabled={loading}
                            className="w-full"
                            type="primary"
                            htmlType="submit">
                            Submit
                        </Button>
                        <Button
                            danger
                            className="mt-2 bg-zinc-800"
                            onClick={() => setShow(true)}>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <Register show={show} setShow={setShow} />
        </React.Fragment>
    );
};

export default memo(Login);
