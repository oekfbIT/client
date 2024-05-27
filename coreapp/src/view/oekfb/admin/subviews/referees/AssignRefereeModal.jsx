import React from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { RiCloseFill } from 'react-icons/ri';

const AssignRefereeModal = ({ visible, onCancel }) => {
    const [form] = Form.useForm();

    const handleSave = async () => {
        try {
            const values = await form.validateFields();
            console.log(JSON.stringify(values)); // Simulate POST request
            alert('Assignment submitted!');
            form.resetFields();
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    return (
        <Modal
            title="Schriedrichter Zuweisen"
            width={400}
            visible={visible}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={handleSave}>
                    Assign
                </Button>,
            ]}
            closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
        >
            <Form form={form} layout="vertical" name="assignRefereeForm">
                <Form.Item
                    label="Match ID"
                    name="matchID"
                    rules={[{ required: true, message: 'Please input the Match ID!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Referee ID"
                    name="refereeID"
                    rules={[{ required: true, message: 'Please input the Referee ID!' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AssignRefereeModal;
