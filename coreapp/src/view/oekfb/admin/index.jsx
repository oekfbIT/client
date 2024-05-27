import React, { useState } from "react";
import { Row, Col, Card } from "antd";

import AddUserModal from "./subviews/user/AddUserModal";
import AddTeamPlayerModal from "./subviews/teams/AddTeamPlayerModal";
import AddRefereeModal from "./subviews/referees/AddRefereeModal";
import AddLeagueModal from "./subviews/leagues/AddLeagueModal";
import ManualRegistrationModal from "./subviews/registrations/ManualRegistrationModal";
import AssignRefereeModal from "./subviews/referees/AssignRefereeModal";
import AddStadiumModal from "./subviews/stadium/AddStadiumModal";

export default function AdminPanel() {
    const [isAddUserModalVisible, setAddUserModalVisible] = useState(false);
    const [isAddTeamModalVisible, setAddTeamModalVisible] = useState(false);
    const [isAddRefereeModalVisible, setAddRefereeModalVisible] = useState(false);
    const [isAddLeagueModalVisible, setAddLeagueModalVisible] = useState(false);
    const [isAddRegistrationModalVisible, setAddRegistrationModalVisible] = useState(false);
    const [isAddAssignRefereeModalVisible, setAddAssignRefereeModalVisible] = useState(false);
    const [isAddStadiumModalVisible, setAddStadiumModalVisible] = useState(false);

    // USER Registration
    const showAddUserModal = () => {
        setAddUserModalVisible(true);
    };

    const handleAddUserModalCancel = () => {
        setAddUserModalVisible(false);
    };

    const handleAddUserModalCreate = () => {
        // Handle user creation logic here
        setAddUserModalVisible(false);
    };

    // Registration
    const showAddRegistrationModal = () => {
        setAddRegistrationModalVisible(true);
    };

    const handleAddRegistrationModalCancel = () => {
        setAddRegistrationModalVisible(false);
    };

    const handleAddRegistrationModalCreate = () => {
        // Handle user creation logic here
        setAddRegistrationModalVisible(false);
    };
    // Team
    const showAddTeamModal = () => {
        setAddTeamModalVisible(true);
    };

    const handleAddTeamModalCancel = () => {
        setAddTeamModalVisible(false);
    };

    const handleAddTeamModalCreate = () => {
        // Handle user creation logic here
        setAddTeamModalVisible(false);
    };

    // Referee
    const showAddRefereeModal = () => {
        setAddRefereeModalVisible(true);
    };

    const handleAddRefereeModalCancel = () => {
        setAddRefereeModalVisible(false);
    };

    const handleAddRefereeModalCreate = () => {
        // Handle user creation logic here
        setAddRefereeModalVisible(false);
    };

    // Assign Referee
    const showAddAssignRefereeModal = () => {
        setAddAssignRefereeModalVisible(true);
    };

    const handleAddAssignRefereeModalCancel = () => {
        setAddAssignRefereeModalVisible(false);
    };

    // League
    const showAddLeagueModal = () => {
        setAddLeagueModalVisible(true);
    };

    const handleAddLeagueModalCancel = () => {
        setAddLeagueModalVisible(false);
    };

    const handleAddLeagueModalCreate = () => {
        // Handle user creation logic here
        setAddLeagueModalVisible(false);
    };

    // Stadium
    const showAddStadiumModal = () => {
        setAddStadiumModalVisible(true);
    };

    const handleAddStadiumModalCancel = () => {
        setAddStadiumModalVisible(false);
    };


    return (
        <div>
            <Row gutter={[32, 32]} className="hp-mb-32">
                <Col xl={8} md={12} xs={24}>
                    <Card className="hp-knowledge-basic-card" style={{ minHeight: '230px'}}>
                        <h4>Admin User</h4>
                        <p className="hp-mb-4">
                            <a href="/admin/user">User Index</a>
                        </p>
                        <p className="hp-mb-4">
                            <a href="#" onClick={showAddUserModal}>Add New User</a>
                        </p>
                    </Card>
                </Col>

                <Col xl={8} md={12} xs={24}>
                    <Card className="hp-knowledge-basic-card" style={{ minHeight: '230px'}}>
                        <h4>Mannschaften</h4>
                        <p className="hp-mb-4">
                            <a href="/admin/team">Team Index</a>
                        </p>
                        <p className="hp-mb-4">
                            <a href="#" onClick={showAddTeamModal}>Spieler zu Team Hinzufügen</a>
                        </p>
                    </Card>
                </Col>

                <Col xl={8} md={12} xs={24}>
                    <Card className="hp-knowledge-basic-card" style={{ minHeight: '230px'}}>
                        <h4>Schiedrichter</h4>
                        <p className="hp-mb-4">
                            <a href="/admin/referee">Schiedrichter Index</a>
                        </p>
                        <p className="hp-mb-4">
                            <a href="#" onClick={showAddRefereeModal}>Neuer Schriedrichter</a>
                        </p>
                        <p className="hp-mb-4">
                        <a href="#" onClick={showAddAssignRefereeModal}>Schriedrichter Zuweisen</a>
                        </p>
                    </Card>
                </Col>

                <Col xl={8} md={12} xs={24}>
                    <Card className="hp-knowledge-basic-card" style={{ minHeight: '230px'}}>
                        <h4>Ligen</h4>
                        <p className="hp-mb-4">
                            <a href="/admin/referee">Referee Index</a>
                        </p>
                        <p className="hp-mb-4">
                            <a href="#" onClick={showAddLeagueModal}>Add New Liga</a>
                        </p>
                        <p className="hp-mb-4">
                            <a href="/admin/league">Ligen und Spielplan</a>
                        </p>
                        <p className="hp-mb-4">
                            <a href="/admin/stadiums">Stadium Index</a>
                        </p>
                        <p className="hp-mb-4">
                            <a href="#" onClick={showAddStadiumModal}>Add New Stadium</a>
                        </p>
                    </Card>
                </Col>

                <Col xl={8} md={12} xs={24}>
                    <Card className="hp-knowledge-basic-card" style={{ minHeight: '230px'}}>
                        <h4>Neue Anmeldungen</h4>
                        <p className="hp-mb-4">
                            <a href="/admin/registrations">Registration Index</a>
                        </p>
                        <p className="hp-mb-4">
                            <a href="#" onClick={showAddRegistrationModal}>Manuelle Registrierung Starten</a>
                        </p>
                    </Card>
                </Col>
            </Row>

            <AddUserModal
                visible={isAddUserModalVisible}
                onCancel={handleAddUserModalCancel}
                onCreate={handleAddUserModalCreate}
            />
            <AddTeamPlayerModal
                visible={isAddTeamModalVisible}
                onCancel={handleAddTeamModalCancel}
                onCreate={handleAddTeamModalCreate}
            />
            <AddRefereeModal
                visible={isAddRefereeModalVisible}
                onCancel={handleAddRefereeModalCancel}
                onCreate={handleAddRefereeModalCreate}
            />
            <AddLeagueModal
                visible={isAddLeagueModalVisible}
                onCancel={handleAddLeagueModalCancel}
            />

            <ManualRegistrationModal
                visible={isAddRegistrationModalVisible}
                onCancel={handleAddRegistrationModalCancel}
            />

            <AssignRefereeModal
                visible={isAddAssignRefereeModalVisible}
                onCancel={handleAddAssignRefereeModalCancel}
            />
            <AddStadiumModal
                visible={isAddStadiumModalVisible}
                onCancel={handleAddStadiumModalCancel}
            />

        </div>
    );
}
