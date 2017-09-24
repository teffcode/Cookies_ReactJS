import React from 'react';
import { Form, Input, Button, Row, Col, DatePicker } from 'antd';

import 'antd/dist/antd.css';
import './Form.css';

const FormItem = Form.Item;
const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

const FormUser = ({ onSubmit, setFieldValueFirstName, setFieldValueLastName, onChangeFirstName, onChangeLastName }) => (

    <Form onSubmit={onSubmit} className="ant-advanced-search-form">
    
        <Row gutter={20}>
            <Col span={8}>
                <FormItem label="FirstName" {...formItemLayout}>             
                    <Input 
                        type="text" 
                        setFieldValue={setFieldValueFirstName} 
                        onChange={onChangeFirstName} 
                    />  
                </FormItem>
                <FormItem label="Birth" {...formItemLayout}>  
                    <DatePicker />
                </FormItem>
            </Col>
            <Col span={8}>
                <FormItem label="LastName" {...formItemLayout}>             
                    <Input 
                        type="text" 
                        setFieldValue={setFieldValueLastName} 
                        onChange={onChangeLastName} 
                    />  
                </FormItem>
                <FormItem label="Email" {...formItemLayout}>             
                    <Input 
                        type="text" 
                        setFieldValue={setFieldValueLastName} 
                        onChange={onChangeLastName} 
                    />  
                </FormItem>
            </Col>
            <Col span={8}>
                <FormItem label="Document" {...formItemLayout}>             
                    <Input 
                        type="text" 
                        setFieldValue={setFieldValueLastName} 
                        onChange={onChangeLastName} 
                    />  
                </FormItem>
                <FormItem label="User" {...formItemLayout}>             
                    <Input 
                        type="text" 
                        setFieldValue={setFieldValueLastName} 
                        onChange={onChangeLastName} 
                    />  
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
                <Button type="primary" htmlType="submit" style={{width:'100px'}}>
                    Save
                </Button>
            </Col>
        </Row>

    </Form>
);

export default FormUser;