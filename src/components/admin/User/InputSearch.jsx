import React from "react";
import { Button, Col, Form, Input, Row, theme } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};

const AdvancedSearchForm = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();

  const formStyle = {
    maxWidth: "none",
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      style={formStyle}
      onFinish={onFinish}
    >
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item label="Name" name="fullName" labelCol={{ span: 24 }}>
            <Input placeholder="Nhập fullName" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Email" name="email" labelCol={{ span: 24 }}>
            <Input placeholder="Nhập email" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Số điện thoại" name="phone" labelCol={{ span: 24 }}>
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            style={{ margin: "0 8px" }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
const InputSearch = () => {
  return (
    <div>
      <AdvancedSearchForm />
    </div>
  );
};

export default InputSearch;
