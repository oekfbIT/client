import React from 'react';
import { Modal, Form, Input, InputNumber, Select, Button } from 'antd';
import { RiCloseFill } from 'react-icons/ri';

const { Option } = Select;

// Define Bundesland statically
const Bundesland = {
    wien: 'Wien',
    niederoesterreich: 'Niederösterreich',
    oberoesterreich: 'Oberösterreich',
    steiermark: 'Steiermark',
    kaernten: 'Kärnten',
    salzburg: 'Salzburg',
    tirol: 'Tirol',
    vorarlberg: 'Vorarlberg',
    burgenland: 'Burgenland',
    ausgetreten: 'Ausgetreten'
};

const AddLeagueModal = ({ visible, onCancel }) => {
    const [form] = Form.useForm();

    const handleCreate = async () => {
        try {
            const values = await form.validateFields();
            console.log(JSON.stringify(values)); // Log the form data as a mock API call
            alert('League created successfully!');
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    return (
        <Modal
            title="Neue Liga Erstellen"
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
            <Form form={form} layout="vertical" name="addLeagueForm">
                <Form.Item
                    label="Name der Liga"
                    name="name"
                    rules={[{ required: true, message: 'Bitte geben Sie den Namen der Liga ein!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Neues Feld Zum Hochladen"
                    name="name"
                    rules={[{ required: true, message: 'Bitte geben Sie den Namen der Liga ein!' }]}
                >
                    <Input />
                </Form.Item>



                <Form.Item
                    label="Bundesland"
                    name="state"
                    rules={[{ required: true, message: 'Bitte wählen Sie ein Bundesland!' }]}
                >
                    <Select placeholder="Select a state">
                        {Object.entries(Bundesland).map(([key, name]) => (
                            <Option key={key} value={key}>{name}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Level"
                    name="level"
                    rules={[{ required: true, message: 'Bitte geben Sie das Level ein!' }]}
                >
                    <InputNumber min={1} max={10} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddLeagueModal;
