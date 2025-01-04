import React, { useState, useEffect, useRef } from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router'
import style from './style.module.css'
import PrintTest from '../../components/PrintTest';

const Login: React.FC = () => {
    const [register, setRegister] = useState(false)
    const [rotationClass, setRotationClass] = useState('')
    const [isRotating, setIsRotating] = useState(false)

    const [isHovered, setIsHovered] = useState(false)
    const [progress, setProgress] = useState(0)

    const toggleRotation = () => setIsRotating(!isRotating)

    const animationRef = useRef<number | null>(null);

    const handleRotateX = () => setRotationClass(style.rotateX);
    const handleRotateY = () => setRotationClass(style.rotateY);
    const handleRotateZ = () => setRotationClass(style.rotateZ);

    const navigate = useNavigate()

    const onFinish = (values: any) => {
        if (values.username === 'admin' && values.password === 'admin') {
            navigate('/groupIntro/cscecInter')
        } else {
            alert('账户或密码错误，请重试！')
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const showRigister = () => {
        setRegister(true)
    }

    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
    };

    // 动画帧推进
    useEffect(() => {
        console.log(isHovered, '----', progress)
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }

        const animate = () => {
            if (isHovered) {
                setProgress(prev => Math.min(prev + 0.05, 1)); // 前进动画
            } else {
                setProgress(prev => Math.max(prev - 0.05, 0)); // 后退动画
            }

            if ((isHovered && progress < 1) || (!isHovered && progress > 0)) {
                animationRef.current = requestAnimationFrame(animate);
            }
        }

        animationRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [isHovered, progress]);

    return (
        <>
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
                    <div className={style.buttonBox}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                        <Button type="default" onClick={() => showRigister()}>
                            注册
                        </Button>
                        <Button type="default">
                            <PrintTest />
                        </Button>
                    </div>
                </Form.Item>
            </Form>
            <div className={style.popup} style={{ display: register ? 'flex' : 'none' }}>
                <div className={style.container}>
                    <div style={{ transform: `rotateY(${progress * 360}deg)` }} className={`${style.registerPanel} ${isRotating ? style.autoRotate : ''}`}>
                        <div className={style.reginame}>

                        </div>

                        <div style={{ marginTop: 'auto' }}>
                            <button onClick={toggleRotation}>
                                {isRotating ? 'Stop Rotation' : 'Start Rotation'}
                            </button>
                            <button onClick={handleRotateX}>Rotate X</button>
                            <button onClick={handleRotateY}>Rotate Y</button>
                            <button onClick={handleRotateZ}>Rotate Z</button>
                            <div>{rotationClass}</div>
                        </div>
                    </div>
                </div>
                <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={style.testButton}>测试按钮</div>
            </div>
        </>
    )
}

export default Login;