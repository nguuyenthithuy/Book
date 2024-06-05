import React from "react";
import { Button, Checkbox, Divider, Form, Input } from "antd";
import "./Register.scss";
const onFinish = (values) => {
  console.log("Success:", values);
};

const Register = () => {
  return (
    <>
      <div className="register__page">
        <main className="main">
          <section className="wrapper">
            <div className="heading">
              <h2 className="text text-large">Đăng Kí Tài Khoản</h2>
              <Divider />
            </div>
            <Form
              name="basic"
              labelCol={{ span: 6 }}
              // wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600, margin: "0 auto" }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                labelCol={{ span: 24 }}
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }}
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }}
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }}
                label="Phone"
                name="phone"
                rules={[
                  { required: true, message: "Please input your phone!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" loading={false}>
                  Đăng kí
                </Button>
              </Form.Item>
            </Form>
          </section>
        </main>
      </div>
    </>
  );
};
export default Register;
