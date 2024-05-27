import React from 'react';
import { Breadcrumb, Card } from 'antd';

export default function AdminRegistrationIndex() {
    return (
        <div style={{ padding: 24 }}>
            <Breadcrumb>
                <Breadcrumb.Item>Administration</Breadcrumb.Item>
                <Breadcrumb.Item>Anmeldungen</Breadcrumb.Item>
                <Breadcrumb.Item>Anmeldungen Index</Breadcrumb.Item>
            </Breadcrumb>

            <Card title="Anmeldungen Index" style={{ marginTop: 16 }}>
                <p>Subtitle placeholder</p>
                {/* You can add more content here as needed */}
            </Card>
        </div>
    );
}
