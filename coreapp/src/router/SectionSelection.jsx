import React from 'react';
import { Button, Space } from 'antd';

export default function SectionSelection() {
    const handleSectionClick = (section) => {
        sessionStorage.setItem('current_section', section);

        // Map section names to specific paths
        const sectionPaths = {
            admin: '/admin/',
            team: '/team/dashboard/',
            referee: '/referee/dashboard/'
        };

        // Navigate to the desired path using window.location.href
        window.location.href = sectionPaths[section];
    };


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Space direction="vertical" size="middle">
                <Button type="primary" onClick={() => handleSectionClick('admin')}>
                    Admin Section
                </Button>
                <Button type="primary" onClick={() => handleSectionClick('team')}>
                    Team Section
                </Button>
                <Button type="primary" onClick={() => handleSectionClick('referee')}>
                    Schiedrichter Section
                </Button>
            </Space>
        </div>
    );
}
