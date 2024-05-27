import React, { useState } from 'react';
import { Modal, Form, Input, Button, Select } from 'antd';
import { RiCloseFill } from 'react-icons/ri';

const { Option } = Select;

const AddRefereeModal = ({ visible, onCancel }) => {
    const [form] = Form.useForm();

    const handleCreate = async () => {
        try {
            const values = await form.validateFields();
            console.log(JSON.stringify(values)); // Mock API call: Logging the form data
            alert('Referee created successfully!');
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    return (
        <Modal
            title="Referee hinzufügen"
            width={600}
            visible={visible}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel}>
                    Abbrechen
                </Button>,
                <Button key="submit" type="primary" onClick={handleCreate}>
                    Speichern
                </Button>,
            ]}
            closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
        >
            <Form form={form} layout="vertical" name="addRefereeForm">
                {/* User Section */}
                <h5>User Details</h5>
                <Form.Item
                    label="User ID"
                    name="userID"
                    rules={[{ required: true, message: 'Please input the user ID!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[{ required: true, message: 'Please input the first name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[{ required: true, message: 'Please input the last name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input the email address!' }]}
                >
                    <Input type="email" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="passwordHash"
                    rules={[{ required: true, message: 'Please input the password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                {/* Referee Section */}
                <h5>Referee Details</h5>
                <Form.Item
                    label="User ID for Referee"
                    name="refereeUserId"
                    dependencies={['userID']}
                    rules={[
                        { required: true, message: 'Please input the User ID for the Referee!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('userID') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('User ID does not match the entered User ID!'));
                            },
                        }),
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddRefereeModal;
