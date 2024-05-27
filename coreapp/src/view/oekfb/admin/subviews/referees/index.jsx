import React from 'react';
import { Breadcrumb, Card } from 'antd';

export default function AdminLeagueIndex() {
    return (
        <div style={{ padding: 24 }}>
            <Breadcrumb>
                <Breadcrumb.Item>Administration</Breadcrumb.Item>
                <Breadcrumb.Item>Schiedrichter</Breadcrumb.Item>
                <Breadcrumb.Item>Schiedrichter Index</Breadcrumb.Item>
            </Breadcrumb>

            <Card title="Schiedrichter Index" style={{ marginTop: 16 }}>
                <p>Subtitle placeholder</p>
                {/* You can add more content here as needed */}
            </Card>
        </div>
    );
}
