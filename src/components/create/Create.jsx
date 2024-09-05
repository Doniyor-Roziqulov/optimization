import React, { memo } from "react";
import Modal from "../model/Modal";
import { Button, Form, Input } from "antd";

const Create = ({ show, setShow, handleCreate }) => {
    // const onFinish = (values) => {
    //     setShow(false);
    // };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div>
            {show && (
                <Modal close={() => setShow(false)}>
                    <Form
                        className="bg-neutral-500 text-white p-3 w-[400px]"
                        layout="vertical"
                        name="register"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={handleCreate}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off">
                        <Form.Item
                            label="Title"
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: "Title",
                                },
                            ]}>
                            <Input className="bg-zinc-400" />
                        </Form.Item>
                        <Form.Item
                            label="Desc"
                            name="desc"
                            rules={[
                                {
                                    required: true,
                                    message: "Desc",
                                },
                            ]}>
                            <Input className="bg-zinc-400" />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                // disabled={() => values === ""}
                                className="w-full"
                                type="primary"
                                htmlType="submit">
                                Create
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            )}
        </div>
    );
};

export default memo(Create);
