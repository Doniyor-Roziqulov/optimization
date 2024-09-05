import React, { memo } from "react";
import Modal from "../model/Modal";
import { Button, Form, Input, message } from "antd";
import axios from "@/api";

const Register = ({ show, setShow }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const onFinish = (values) => {
        axios
            .post("/sign-up", values)
            .then((res) => {
                console.log(res);
                setShow(false);
            })
            .catch((res) => {
                console.log(res);
                messageApi.error(res.response.data.msg);
            });
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div>
            {contextHolder}
            {show && (
                <Modal close={() => setShow(false)}>
                    <Form
                        className="bg-white p-3 w-[400px]"
                        layout="vertical"
                        name="register"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off">
                        <h3 className="text-2xl">Sign up</h3>
                        <Form.Item
                            label="First name"
                            name="fname"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your first name!",
                                },
                            ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Last name" name="lname">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Phone number"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your phone number!",
                                },
                            ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}>
                            <Input />
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
                            <Input.Password />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                className="w-full"
                                type="primary"
                                htmlType="submit">
                                Sign up
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            )}
        </div>
    );
};

export default memo(Register);
