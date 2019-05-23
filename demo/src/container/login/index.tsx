import * as React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { saveItem } from '../../util'

import { Button, Form, Input } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'

const FormItem = Form.Item


function Login(props: any & FormComponentProps) {

    useEffect(() => {
        if (props.initialReducer.paths.indexOf('/home') !== -1) {
            props.history.push('/home')
        }
    })
  
    const { getFieldDecorator } = props.form
    const handlerClick = (e: React.FormEvent) => {


        e.preventDefault();
        props.form.validateFields((err: any, values: any) => {
            if (!err) {

                // tslint:disable-next-line:no-console
                console.log('Received values of form: ', values);

                props.dispatch({
                    payload: ['/home'],
                    type: 'logged'
                })
                saveItem('user', ['/home'])

            }
        });


    }


    return <div>
        登录
       

        <Form onSubmit={handlerClick}>
            <FormItem label="用户名" wrapperCol={{ span: 8 }} labelCol={{ span: 8 }}>
                {
                    getFieldDecorator('username', {})(
                        <Input />
                    )
                }
            </FormItem>
            <FormItem label="密码" wrapperCol={{ span: 8 }} labelCol={{ span: 8 }}>
                {
                    getFieldDecorator('password', {})(
                        <Input />
                    )
                }
            </FormItem>
            <FormItem wrapperCol={{ offset: 8 }} labelCol={{ span: 8 }}>
                <Button htmlType='submit'>登录</Button>
            </FormItem>
        </Form>


    </div>
}

export default Form.create()(connect(state => state)(Login))