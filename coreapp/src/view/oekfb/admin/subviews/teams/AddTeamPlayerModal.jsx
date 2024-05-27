import React from 'react';
import { Modal, Form, Input, InputNumber, DatePicker, Select, Button } from 'antd';
import { RiCloseFill } from 'react-icons/ri';
import moment from 'moment';

const { Option } = Select;

const AddTeamPlayerModal = ({ visible, onCancel }) => {
    const [form] = Form.useForm();

    const handleCreate = async () => {
        try {
            const values = await form.validateFields();
            // Serialize and log the form data as JSON for the mock API call
            const serializedData = JSON.stringify({
                ...values,
                birthday: values.birthday ? values.birthday.format('YYYY-MM-DD') : null,
                registerDate: values.registerDate ? values.registerDate.format('YYYY-MM-DD') : null,
            });
            console.log(serializedData); // Simulate POST request
            alert('Player data submitted!');
            form.resetFields();
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    return (
        <Modal
            title="Add New Player"
            width={600}
            visible={visible}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel}>
                    Cancel
                </Button>,
                <Button key="save" type="primary" onClick={handleCreate}>
                    Submit
                </Button>,
            ]}
            closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
        >
            <Form form={form} layout="vertical" name="addPlayerForm">
                <Form.Item
                    label="Team ID"
                    name="teamID"
                    rules={[{ required: true, message: 'Please input the team ID!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input the player name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Number"
                    name="number"
                    rules={[{ required: true, message: 'Please input the player number!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Birthday"
                    name="birthday"
                    rules={[{ required: true, message: 'Please input the player birthday!' }]}
                >
                    <DatePicker format="YYYY-MM-DD" />
                </Form.Item>
                <Form.Item
                    label="Nationality"
                    name="nationality"
                    rules={[{ required: true, message: 'Please input the player nationality!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Position"
                    name="position"
                    rules={[{ required: true, message: 'Please input the player position!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Eligibility"
                    name="eligibility"
                    rules={[{ required: true, message: 'Please select the player eligibility status!' }]}
                >
                    <Select placeholder="Select eligibility">
                        <Option value="eligible">Eligible</Option>
                        <Option value="ineligible">Ineligible</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Register Date"
                    name="registerDate"
                    rules={[{ required: true, message: 'Please input the register date!' }]}
                >
                    <DatePicker format="YYYY-MM-DD" />
                </Form.Item>
                <Form.Item
                    label="Matches Played"
                    name="matchesPlayed"
                >
                    <InputNumber min={0} />
                </Form.Item>
                <Form.Item
                    label="Goals"
                    name="goals"
                >
                    <InputNumber min={0} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddTeamPlayerModal;
