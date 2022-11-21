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
    getItem(<Link to="/admin/product">Danh sách</Link>, '1', <UnorderedListOutlined />),


  ]),
  getItem('Danh sách danh mục', 'sub2', <MailOutlined />, [
    getItem(<Link to="/admin/categories">Danh sách danh mục</Link>, '2', <LaptopOutlined />),
    getItem(<Link to="/admin/categories/add">Thêm danh mục</Link>, '3', <CustomerServiceFilled />),

  ]),

  getItem('Color', 'sub3', <AndroidFilled />, [
    getItem(<Link to="/admin/color">Danh sách</Link>, '5', <UnorderedListOutlined />),
    getItem(<Link to="/admin/color/add">Add Color</Link>, '6', <UnorderedListOutlined />),
  ]),
  getItem('Quản Lý Banner', 'sub10', <AndroidFilled />, [
    getItem(<Link to="/admin/banner">Danh sách Banner</Link>, '5', <UnorderedListOutlined />),
    getItem(<Link to="/admin/add">Thêm Banner</Link>, '6', <UnorderedListOutlined />),


  ]),
  getItem('Quản lý Size', 'sub15', <AndroidFilled />, [
    getItem(<Link to="/admin/size">Danh sách size</Link>, '8', <UnorderedListOutlined />),
    getItem(<Link to="/admin/size/add">Thêm Size</Link>, '9', <UnorderedListOutlined />),

  ]),
  getItem('Số Lượng sản phẩm', 'sub20', <AndroidFilled />, [
    getItem(<Link to="/admin/quanlyty">Danh sách</Link>, '11', <UnorderedListOutlined />),
    getItem(<Link to="/admin">Danh sách</Link>, '12', <UnorderedListOutlined />),
    getItem(<Link to="/admin">Danh sách</Link>, '13', <UnorderedListOutlined />),
  ]),
  getItem('Danh mục 5', 'sub4', <AndroidFilled />, [
    getItem(<Link to="/admin">Danh sách</Link>, '14', <UnorderedListOutlined />),
    getItem(<Link to="/admin">Danh sách</Link>, '15', <UnorderedListOutlined />),
    getItem(<Link to="/admin">Danh sách</Link>, '16', <UnorderedListOutlined />),
  ]),
  getItem('Danh mục 6', 'sub4', <AndroidFilled />, [
    getItem(<Link to="/admin">Danh sách</Link>, '17', <UnorderedListOutlined />),
    getItem(<Link to="/admin">Danh sách</Link>, '18', <UnorderedListOutlined />),
    getItem(<Link to="/admin">Danh sách</Link>, '19', <UnorderedListOutlined />),
  ]),




]
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