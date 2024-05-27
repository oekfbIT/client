import React from 'react';
import { Modal, Form, Input, Select, Checkbox, Button } from 'antd';
import { RiCloseFill } from 'react-icons/ri';

const { Option } = Select;

const ManualRegistrationModal = ({ visible, onCancel }) => {
    const [form] = Form.useForm();

    const handleCreate = async () => {
        try {
            const values = await form.validateFields();
            console.log(JSON.stringify(values)); // Simulate POST request
            alert('Registration submitted!');
            form.resetFields();
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    return (
        <Modal
            title="Manual Registration"
            width={600}
            visible={visible}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={handleCreate}>
                    Submit
                </Button>,
            ]}
            closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
        >
            <Form form={form} layout="vertical" name="manualRegistrationForm">
                <h3>Contact Information</h3>
                <Form.Item
                    label="Primary Contact Name"
                    name={['primaryContact', 'name']}
                    rules={[{ required: true, message: 'Please input the primary contact name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Primary Contact Phone"
                    name={['primaryContact', 'phone']}
                    rules={[{ required: true, message: 'Please input the primary contact phone!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Primary Contact Email"
                    name={['primaryContact', 'email']}
                    rules={[{ required: true, message: 'Please input the primary contact email!' }]}
                >
                    <Input type="email" />
                </Form.Item>
                <Form.Item
                    label="Secondary Contact Name"
                    name={['secondaryContact', 'name']}
                    rules={[{ required: true, message: 'Please input the secondary contact name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Secondary Contact Phone"
                    name={['secondaryContact', 'phone']}
                    rules={[{ required: true, message: 'Please input the secondary contact phone!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Secondary Contact Email"
                    name={['secondaryContact', 'email']}
                    rules={[{ required: true, message: 'Please input the secondary contact email!' }]}
                >
                    <Input type="email" />
                </Form.Item>

                <h3>Registration Details</h3>
                <Form.Item
                    label="Company Name"
                    name="company"
                >
                    <Input placeholder="Optional" />
                </Form.Item>
                <Form.Item
                    label="Verein Name"
                    name="verein"
                >
                    <Input placeholder="Optional" />
                </Form.Item>
                <Form.Item
                    label="Bundesland"
                    name="bundesland"
                    rules={[{ required: true, message: 'Please select the Bundesland!' }]}
                >
                    <Select placeholder="Select a Bundesland">
                        <Option value="wien">Wien</Option>
                        <Option value="niederoesterreich">Niederösterreich</Option>
                        {/* Add other Bundesländer here */}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Club Type"
                    name="type"
                    rules={[{ required: true, message: 'Please select the club type!' }]}
                >
                    <Select placeholder="Select a club type">
                        <Option value="amateur">Amateur</Option>
                        <Option value="professional">Professional</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="acceptedAGB"
                    valuePropName="checked"
                    rules={[{ required: true, message: 'You must accept the AGB!' }]}
                >
                    <Checkbox>I accept the AGB.</Checkbox>
                </Form.Item>
                <Form.Item
                    label="Initial Contact"
                    name="initialContact"
                    rules={[{ required: true, message: 'Please input the initial contact method!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Refer Code"
                    name="referCode"
                    rules={[{ required: true, message: 'Please input the refer code!' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ManualRegistrationModal;
