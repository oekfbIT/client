import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Col, Form, Input, Button, Checkbox, message } from "antd";
import LeftContent from "../leftContent";
import Footer from "../footer";
import AuthService from "../../../../networking/AuthService";

const authService = new AuthService();

export default function Login() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleLogin = async (values) => {
    setLoading(true);
    const { username, password } = values;

    const result = await authService.login(username, password);
    setLoading(false);

    if (result.success) {
      const userType = result.user.type;
      message.success('Login successful');

      switch (userType) {
        case 'admin':
          history.push('/admin/'); // Redirect to admin dashboard
          break;
        case 'referee':
          history.push('/referee-dashboard'); // Redirect to referee dashboard
          break;
        case 'team':
          history.push('/team-dashboard'); // Redirect to team dashboard
          break;
        default:
          history.push('/'); // Redirect to home or another default page
      }
    } else {
      message.error(result.message);
    }
  };

  return (
      <Row gutter={[32, 0]} className="hp-authentication-page">
        <LeftContent />

        <Col lg={12} span={24} className="hp-py-sm-0 hp-py-md-64">
          <Row className="hp-h-100" align="middle" justify="center">
            <Col
                xxl={11}
                xl={15}
                lg={20}
                md={20}
                sm={24}
                className="hp-px-sm-8 hp-pt-24 hp-pb-48"
            >
              <h1 className="hp-mb-sm-0">Login</h1>
              <p className="hp-mt-sm-0 hp-mt-8 hp-text-color-black-60">
                Welcome back, please login to your account.
              </p>

              <Form
                  layout="vertical"
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={handleLogin}
                  className="hp-mt-sm-16 hp-mt-32"
              >
                <Form.Item
                    label="Username :"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    className="hp-mb-16"
                >
                  <Input />
                </Form.Item>

                <Form.Item
                    label="Password :"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    className="hp-mb-8"
                >
                  <Input.Password />
                </Form.Item>

                <Row align="middle" justify="space-between">
                  <Form.Item name="remember" valuePropName="checked" className="hp-mb-0">
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Link
                      className="hp-button hp-text-color-black-80 hp-text-color-dark-40"
                      to="/pages/authentication/recover-password"
                  >
                    Forgot Password?
                  </Link>
                </Row>

                <Form.Item className="hp-mt-16 hp-mb-8">
                  <Button block type="primary" htmlType="submit" loading={loading}>
                    Sign in
                  </Button>
                </Form.Item>
              </Form>

              <Col className="hp-form-info hp-text-center">
              <span className="hp-text-color-black-80 hp-text-color-dark-40 hp-caption hp-font-weight-400 hp-mr-4">
                Don’t you have an account?
              </span>

                <Link
                    className="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-caption"
                    to="/pages/authentication/register"
                >
                  Create an account
                </Link>
              </Col>

              <Footer />
            </Col>
          </Row>
        </Col>
      </Row>
  );
}