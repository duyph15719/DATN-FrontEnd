import React, { useState } from 'react'

import { MailOutlined, LaptopOutlined, AndroidFilled, UnorderedListOutlined, CustomerServiceFilled, ApiFilled, SearchOutlined } from '@ant-design/icons';
import { Input, MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';


const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Sản phẩm', 'sub1', <AndroidFilled />, [
    getItem(<Link to="/admin/user">Danh sách</Link>, '1', <UnorderedListOutlined />),


  ]),
  getItem('Danh mục 1', 'sub2', <MailOutlined />, [
    getItem(<Link to="/admin">Loại Hàng A</Link>, '5', <LaptopOutlined />),
    getItem(<Link to="/admin/categories">Loại Hàng B</Link>, '2', <CustomerServiceFilled />),
    getItem(<Link to="/admin/user">Loại Hàng C</Link>, '3', <ApiFilled />),
  ]),
  getItem('Danh mục 2', 'sub3', <AndroidFilled />, [
    getItem(<Link to="/admin">Danh sách</Link>, '6', <UnorderedListOutlined />),
    getItem(<Link to="/admin">Danh sách</Link>, '6', <UnorderedListOutlined />),
    getItem(<Link to="/admin">Danh sách</Link>, '6', <UnorderedListOutlined />),
  ]),
  getItem('Danh mục 3', 'sub4', <AndroidFilled />, [
    getItem(<Link to="/admin">Danh sách</Link>, '6', <UnorderedListOutlined />),
    getItem(<Link to="/admin">Danh sách</Link>, '6', <UnorderedListOutlined />),
    getItem(<Link to="/admin">Danh sách</Link>, '6', <UnorderedListOutlined />),
  ]),
  getItem('Danh mục 4', 'sub4', <AndroidFilled />, [
    getItem(<Link to="/admin">Danh sách</Link>, '6', <UnorderedListOutlined />),
    getItem(<Link to="/admin">Danh sách</Link>, '6', <UnorderedListOutlined />),
    getItem(<Link to="/admin">Danh sách</Link>, '6', <UnorderedListOutlined />),
  ]),
  getItem('Danh mục 5', 'sub4', <AndroidFilled />, [
    getItem(<Link to="/admin">Danh sách</Link>, '6', <UnorderedListOutlined />),
    getItem(<Link to="/admin">Danh sách</Link>, '6', <UnorderedListOutlined />),
    getItem(<Link to="/admin">Danh sách</Link>, '6', <UnorderedListOutlined />),
  ]),
  getItem('Danh mục 6', 'sub4', <AndroidFilled />, [
    getItem(<Link to="/admin">Danh sách</Link>, '6', <UnorderedListOutlined />),
    getItem(<Link to="/admin">Danh sách</Link>, '6', <UnorderedListOutlined />),
    getItem(<Link to="/admin">Danh sách</Link>, '6', <UnorderedListOutlined />),
  ]),
  
  

];
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const AdminLayout = () => {

  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  }
  return (
    <div>
      <Layout>
        <HeaderCustom>

          <b style={{ float: "right", margin: "auto", }}></b>
          <div style={{ margin: "auto 0" }}>
            <div>
              <Input size="large" placeholder=" Search here..." style={{ borderRadius: "10px" }} />
            </div>
          </div>

        </HeaderCustom>
        <Layout>
          <Sider
            collapsible={true}
            width={200}
            className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              items={items}
            />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <ContentCustom>
              <Outlet />
            </ContentCustom>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

const HeaderCustom = styled(Header)`
    background-color: #00B0D7;
    height: 64px;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 64px;
    height: auto;
`

const ContentCustom = styled(Content)`
  min-height: 100vh;
`

export default AdminLayout