import React from 'react';
import { Breadcrumb, Card } from 'antd';

export default function AdminTeamIndex() {
    return (
        <div style={{ padding: 24 }}>
            <Breadcrumb>
                <Breadcrumb.Item>Administration</Breadcrumb.Item>
                <Breadcrumb.Item>Team</Breadcrumb.Item>
                <Breadcrumb.Item>Team Index</Breadcrumb.Item>
            </Breadcrumb>

            <Card title="Team Index" style={{ marginTop: 16 }}>
                <p>Subtitle placeholder</p>
                {/* You can add more content here as needed */}
            </Card>
        </div>
    );
}
