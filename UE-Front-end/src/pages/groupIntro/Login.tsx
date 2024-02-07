import React from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router'

const Login: React.FC = () => {

    const navigate = useNavigate()
    
    const onFinish = (values: any) => {
        if(values.username === 'admin' && values.password === 'admin') {
            navigate('/groupIntro/cscecInter')
        } else {
            alert('账户或密码错误，请重试！')
        }
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    
    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="账户"
                name="username"
                rules={[{ required: true, message: '请输入正确的账户!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入正确的密码!' }]}
            >
                <Input.Password />
            </Form.Item>

            {/* <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
            >
                <Checkbox>记住我</Checkbox>
            </Form.Item> */}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    登录
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Login;