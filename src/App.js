import React from 'react';
import User from './components/user/User'
import {Layout, Menu} from "antd";
import 'antd/dist/antd.css';

const {Header} = Layout;

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header className="header">
                        <div className="logo"/>
                        <Menu
                            theme="light"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{lineHeight: '64px'}}
                        >
                            <Menu.Item key="1">首页</Menu.Item>
                            <Menu.Item key="2">数据字典</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                </Layout>
                <User></User>
            </div>
        );
    }
}
