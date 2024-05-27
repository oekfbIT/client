import React from 'react';
import { Breadcrumb, Card } from 'antd';
import { Table } from 'antd';

export default function UserIndex() {
    const dataSource = [
        {
            key: '1',
            team: {
                image: 'https://www.oekfb.com/images/logo/final/1660393116.png',
                name: 'BIDA United',
            },
            id: '355862',
            kontaktName: 'Eden Biniaurishvili',
            email: 'eden.biniaurishvili@gmail.com',
            phone: '067655545555',
            registeredDate: 'IMS. 2020/2021',
        },
        {
            key: '2',
            team: {
                image: 'https://www.oekfb.com/images/logo/final/1660393116.png',
                name: 'BIDA United',
            },
            id: '885685',
            kontaktName: 'Avi Biniaurishvili',
            email: 'avi.biniaurishvili@gmail.com',
            phone: '067655545555',
            registeredDate: 'IMS. 2020/2021',
        },
        {
            key: '3',
            team: {
                image: 'https://www.oekfb.com/images/logo/final/1660393116.png',
                name: 'BIDA United',
            },
            id: '115762',
            kontaktName: 'Patrik Morak',
            email: 'patrik.morak@gmail.com',
            phone: '067655545555',
            registeredDate: 'IMS. 2020/2021',
        },
        {
            key: '4',
            team: {
                image: 'https://www.oekfb.com/images/logo/final/1660393116.png',
                name: 'BIDA United',
            },
            id: '475114',
            kontaktName: 'Danell Daral',
            email: 'danell.daral@gmail.com',
            phone: '067655545555',
            registeredDate: 'IMS. 2020/2021',
        },
        // Add more data as needed
    ];

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Kontakt Name',
            dataIndex: 'kontaktName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Registered Date',
            dataIndex: 'registeredDate',
        },
    ];

    return (
        <div style={{ padding: 24 }}>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <a href="/admin/">Administration</a>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                    <a href="/admin/user">User</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>User Index</Breadcrumb.Item>
            </Breadcrumb>

            <Card title="User Index" style={{ marginTop: 16 }}>
                <Table dataSource={dataSource} columns={columns} />
            </Card>
        </div>
    );
}
