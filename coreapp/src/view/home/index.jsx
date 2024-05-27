import React, { useState } from "react";
import {
  Card,
  Col,
  Row,
  Tabs,
  Steps,
  Button,
  message,
  notification,
  Drawer,
} from "antd";
import PageTitle from "../../layout/components/content/page-title";

import Layout1 from "../../developer/page-templates/layout1";
import HorizontalLayout from "../../layout/HorizontalLayout";
import { RiCloseFill } from "react-icons/ri";

export default function Home() {
  const { TabPane } = Tabs;
  const { Step } = Steps;

  function callback(key) {
    console.log(key);
  }

  const defaultCard = (
    <Card title="Default size card" extra={<a href="www.google.com">More</a>}>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </Card>
  );

  const browseComponentsCard = (
    <Card className="hp-border-color-black-40">
      <h4>Would you like to browse the components? 👀</h4>
      
      <p className="hp-p1-body">
        Everything is in the details. So why wouldn't you want to take a look at
        the
        <a
          className="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-hover-text-color-primary-3 hp-hover-text-color-dark-0 hp-transition"
          href="http://localhost:3000core-admin-template/react/components/components-page"
          target="_blank"
        >
          components
        </a>{" "}
        from the preview page? Enjoy!
      </p> 
      
      <Button type="primary" size="small" className="hp-bg-danger-1 hp-border-color-danger-1 hp-hover-bg-danger-2 hp-hover-border-color-danger-2">
      Danger
      </Button>

    </Card>
  );

  const stepsCard = (
    <div className="hp-overflow-scroll hp-scrollbar-x-hidden">
      <Card className="hp-border-color-black-40 hp-border-color-dark-80">
        <Steps size="small" current={1}>
          <Step title="Finished" />
          <Step title="In Progress" />
          <Step title="Waiting" />
        </Steps>
      </Card>
    </div>
  );

  const getStartedCard = (
    <Card className="hp-border-color-black-40 hp-border-color-dark-80">
      <h4>Let's get started 🚀</h4>
      <p className="hp-p1-body">
        Are you ready? Please read our
        <a
          className="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-hover-text-color-primary-3 hp-hover-text-color-dark-0 hp-transition"
          href="http://localhost:3000/yohp-admin-template/"
          target="_blank"
        >
          Documentation
        </a>{" "}
        to understand the technical details of the project to use the template.
      </p>
    </Card>
  );

  const openNotification = () => {
    notification.open({
      message: "Primary",
      description: "Primary message.",
      closeIcon: (
        <RiCloseFill className="remix-icon hp-text-color-black-80" size={24} />
      ),
    });
  };

  const action = () => {
    const hide = message.loading("Action in progress..", 0);
    setTimeout(hide, 250);
    const Done = message.loading("Done..", 0);
    setTimeout(hide, 500);
  };

  const notificationCard = (
    <Card className="hp-border-color-black-40 hp-border-color-dark-80">
      <h4>Let's test Notifications 🚀</h4>
      <p className="hp-p1-body">
        Are you ready? Click the Button
        <a
          className="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-hover-text-color-primary-3 hp-hover-text-color-dark-0 hp-transition"
          href="http://localhost:3000/yohp-admin-template/"
          target="_blank"
        >
          Documentation
        </a>{" "}
        to understand the technical details of the project to use the template.
      </p>

      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </Card>
  );

  const actionInProgressCard = (
    <Card className="hp-border-color-black-40 hp-border-color-dark-80">
      <h4>Let's test Notifications 🚀</h4>
      <p className="hp-p1-body">
        Action In Progress, Async!
        <a
          className="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-hover-text-color-primary-3 hp-hover-text-color-dark-0 hp-transition"
          href="http://localhost:3000/yohp-admin-template/"
          target="_blank"
        >
          Documentation
        </a>{" "}
        to understand the technical details of the project to use the template.
      </p>

      <Button type="primary" ghost onClick={action}>
        Display a loading indicator
      </Button>
    </Card>
  );

  const [visible, setVisible] = useState(false);

  // DRAWER
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const drawerCard = (
    <Card className="hp-border-color-black-40 hp-border-color-dark-80">
      <h4>Let's Open Drawer 🚀</h4>
      <p className="hp-p1-body">
        New Window should Pop Up!
        <a
          className="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-hover-text-color-primary-3 hp-hover-text-color-dark-0 hp-transition"
          href="http://localhost:3000/yohp-admin-template/"
          target="_blank"
        >
          Documentation
        </a>{" "}
        to understand the technical details of the project to use the template.
      </p>

      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>

      <Drawer
        title={<h5 className="hp-mb-0">Basic Drawer</h5>}
        placement="right"
        width={346}
        closable={false}
        onClose={onClose}
        visible={visible}
        className="hp-drawer-mobile"
      >
        <p className="hp-p1-body">Some contents...</p>
        <p className="hp-p1-body">Some contents...</p>
        <p className="hp-p1-body">Some contents...</p>
      </Drawer>
    </Card>
  );

  return (
    <Layout1
      pageTitle={<PageTitle />}
      subtitle="Subtitle here"
      leftContent={[defaultCard, browseComponentsCard, stepsCard]}
      rightContent={[
        getStartedCard,
        notificationCard,
        actionInProgressCard,
        drawerCard,
      ]}
      rowSpacing={[16, 16]}
    />
  );
}
