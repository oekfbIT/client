import React from "react";
import { Card, Col, Row } from "antd";

const Layout1 = ({
    pageTitle,
    subtitle,
    leftContent,
    rightContent,
    rowSpacing = [16, 16]
  }) => {
    return (
      <Row gutter={rowSpacing}>  
        {/* Left Column (2/3 for larger screens, full width for small screens) */}
        <Col xs={24} sm={24} md={16}>
          {leftContent.map((content, index) => (
            <div style={{ marginBottom: rowSpacing[1] }} key={index}>
              {content}
            </div>
          ))}
        </Col>
  
        {/* Right Column (1/3 for larger screens, full width for small screens) */}
        <Col xs={24} sm={24} md={8}>
          {rightContent.map((content, index) => (
            <div style={{ marginBottom: rowSpacing[1] }} key={index}>
              {content}
            </div>
          ))}
        </Col>
      </Row>
    );
  };

export default Layout1;
