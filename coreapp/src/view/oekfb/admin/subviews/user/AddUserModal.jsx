import React, { useState } from 'react';
import { Modal, Form, Input, Checkbox, Button } from 'antd';
import { RiCloseFill } from 'react-icons/ri';

const AddUserModal = ({ visible, onCancel, onCreate }) => {
    const [form] = Form.useForm();

    return (
        <Modal
            title="Neuer Admin User"
            width={416}
            visible={visible}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel}>
                    Cancel
                </Button>,
                <Button key="Speichern" type="primary" onClick={onCreate}>
                    Submit
                </Button>,
            ]}
            closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
        >
            <Form form={form} layout="vertical" name="addUserForm" initialValues={{ remember: true }}>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input user email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[{ required: true, message: 'Please input user first name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[{ required: true, message: 'Please input user last name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input user password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                {/*<Form.Item name="remember" valuePropName="checked">*/}
                {/*    <Checkbox>Remember me</Checkbox>*/}
                {/*</Form.Item>*/}
            </Form>
        </Modal>
    );
};

export default AddUserModal;
