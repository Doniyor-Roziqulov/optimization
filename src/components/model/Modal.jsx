import { Button } from "antd";
import React, { memo } from "react";

const Modal = ({ close, children }) => {
    return (
        <>
            <div
                onClick={close}
                className="fixed top-0 left-0 w-full h-screen bg-[#0005]"></div>
            <div className="bg-neutral-500 border p-3 rounded-lg fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                {children}
                <Button className="bg-black text-white" onClick={close}>
                    Close
                </Button>
            </div>
        </>
    );
};

export default memo(Modal);
