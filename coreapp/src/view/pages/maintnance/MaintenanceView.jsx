import React, { useEffect, useState } from 'react';
import { Card, Progress, Typography } from 'antd';
import moment from 'moment';

const { Title, Text } = Typography;

const MaintenanceView = () => {
    const [progress, setProgress] = useState(0);
    const [remainingTime, setRemainingTime] = useState('');

    const deadline = moment().day(4).hour(20).minute(11).second(0); // Thursday 20:11 PM

    const calculateProgress = () => {
        const now = moment();
        const total = deadline.diff(moment().startOf('week'), 'seconds');
        const elapsed = now.diff(moment().startOf('week'), 'seconds');
        return Math.min((elapsed / total) * 100, 100);
    };

    const calculateRemainingTime = () => {
        const now = moment();
        const duration = moment.duration(deadline.diff(now));
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();
        return `${hours}h ${minutes}m ${seconds}s`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(calculateProgress());
            setRemainingTime(calculateRemainingTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [deadline]);

    return (
        <Card>
            <Title level={2}>Initialization</Title>
            <Text>Setting up Football database.</Text>
            <br />
            <Text>Synchronizing 11604 Players, 11 Leagues, 1503 Teams.</Text>
            <br /><br />
            <Title level={2}>Progress</Title>
            <Progress percent={progress} />
            <Text>{`Time to completion: ${remainingTime}`}</Text>
            <br />
        </Card>
    );
};

export default MaintenanceView;
