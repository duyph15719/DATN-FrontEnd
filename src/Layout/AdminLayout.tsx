import React, { useState } from "react";

import {
  MailOutlined,
  LaptopOutlined,
  AndroidFilled,
  UnorderedListOutlined,
  CustomerServiceFilled,
  ApiFilled,
  SearchOutlined,
  ShoppingCartOutlined,
  FileImageOutlined,
  PieChartOutlined,
  TeamOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Input, MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
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
  getItem(
    <Link to="/admin">Thống Kê</Link>,
    "1",
    <PieChartOutlined />
  ),

  getItem(
    <Link to="/admin/product">Danh sách Sản Phẩm</Link>,
    "2",
    <ShopOutlined />
  ),


  getItem(
    <Link to="/admin/categories">Danh sách danh mục</Link>,
    "3",
    <UnorderedListOutlined />
  ),



  getItem(
    <Link to="/admin/banner">Danh sách Banner</Link>,
    "4",
    <FileImageOutlined />
  ),



  getItem(
    <Link to="/admin/orders">Quản lý Hóa Đớn</Link>,
    "5",
    <ShoppingCartOutlined />
  ),


  getItem(
    <Link to="/admin/user">Danh sách tài khoản</Link>,
    "6",
    <TeamOutlined />
  )

];

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const AdminLayout = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <div>
      <Layout>
        <HeaderCustom>
          <b style={{ float: "right", margin: "auto" }}></b>
          <div style={{ margin: "auto 0" }}>
            <div>
              <Input
                size="large"
                placeholder=" Search here..."
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
        </HeaderCustom>
        <Layout>
          <Sider
            collapsible={true}
            width={200}
            className="site-layout-background"
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              items={items}
            />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <ContentCustom>
              <Outlet />
            </ContentCustom>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

const HeaderCustom = styled(Header)`
  background-color: #00b0d7;
  height: 64px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 64px;
  height: auto;
`;

const ContentCustom = styled(Content)`
  min-height: 100vh;
`;

export default AdminLayout;
