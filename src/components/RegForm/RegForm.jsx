import { Button, Input, Form, } from 'antd';

export function RegForm({ onFinish }) {

  return <Form
    name="basic"
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      label="Group"
      name="group"
      rules={[
        {
          required: true,
          message: 'Please input your group!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
      SignUp
      </Button>
    </Form.Item>
  </Form>
}