import React from 'react';
import { Modal, Form, Input, Button, Switch, DatePicker } from 'antd';
import { RiCloseFill } from 'react-icons/ri';

const AddStadiumModal = ({ visible, onCancel }) => {
    const [form] = Form.useForm();

    const handleCreate = async () => {
        try {
            const values = await form.validateFields();
            console.log(JSON.stringify(values)); // Log the form data as a mock API call
            alert('Stadium created successfully!');
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    return (
        <Modal
            title="Neues Stadium Erstellen"
            width={416}
            visible={visible}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel}>
                    Cancel
                </Button>,
                <Button key="Speichern" type="primary" onClick={handleCreate}>
                    Submit
                </Button>,
            ]}
            closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
        >
            <Form form={form} layout="vertical" name="addStadiumForm">
                <Form.Item
                    label="Code"
                    name="code"
                    rules={[{ required: true, message: 'Bitte geben Sie den Code ein!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Type"
                    name="type"
                    rules={[{ required: true, message: 'Bitte geben Sie den Typ ein!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Address"
                    name="address"
                    rules={[{ required: true, message: 'Bitte geben Sie die Adresse ein!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Schuhwerk"
                    name="schuhwerk"
                    rules={[{ required: true, message: 'Bitte geben Sie das Schuhwerk ein!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Parking Available"
                    name="parking"
                    valuePropName="checked"
                >
                    <Switch />
                </Form.Item>
                <Form.Item
                    label="Flutlicht Available"
                    name="flutlicht"
                    valuePropName="checked"
                >
                    <Switch />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Bitte geben Sie den Namen ein!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Partner Since"
                    name="partnerSince"
                >
                    <DatePicker format="YYYY/MM" picker="month" />
                </Form.Item>
                <Form.Item
                    label="Home Team"
                    name="homeTeam"
                    rules={[{ required: true, message: 'Bitte geben Sie das Heimteam ein!' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddStadiumModal;
