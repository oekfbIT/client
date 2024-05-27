import React from 'react';
import { Breadcrumb, Card } from 'antd';

export default function AdminStadionIndex() {
    return (
        <div style={{ padding: 24 }}>
            <Breadcrumb>
                <Breadcrumb.Item>Administration</Breadcrumb.Item>
                <Breadcrumb.Item>Stadion</Breadcrumb.Item>
                <Breadcrumb.Item>Stadion Index</Breadcrumb.Item>
            </Breadcrumb>

            <Card title="Stadion Index" style={{ marginTop: 16 }}>
                <p>Subtitle placeholder</p>
                {/* You can add more content here as needed */}
            </Card>
        </div>
    );
}
