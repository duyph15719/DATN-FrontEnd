import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

import "antd/dist/antd.css";
import About from "./pages/About/About";
import Lienhe from "./pages/Lienhe/lienhe";



import Cart from "./pages/Website/Cart/Cart";
import Pay from "./pages/Website/Pay/Pay";
import ErrorsWeb from "./pages/404/errorsWeb";

import Layoutclient from "./Layout/Layoutclient";
import AdminLayout from "./Layout/AdminLayout";
import Categories from "./pages/admin/Categories/Categories";


import Users from "./pages/admin/User/User";
import CommentEdit from "./pages/admin/Comment/CommentEdit";
import CommentAdd from "./pages/admin/Comment/CommentAdd";
import BlogAdd from "./pages/admin/Blog/BlogAdd";
import BlogEdit from "./pages/admin/Blog/BlogEdit";
import Blog from "./pages/admin/Blog/Blog";


import NewsDetail from "./pages/News/Newsdetail";
import NewsPage from "./pages/News/News";
import UserEdit from "./pages/admin/User/UserEdit";
import UserAdd from "./pages/admin/User/UserAdd";
import DetailProduct from "./pages/ProductList/detailProduct";
import ProductList from "./pages/admin/Product/AddProduct";
import ListProduct from "./pages/admin/Product/ListProduct";
import CategoriesAdd from "./pages/admin/Categories/CategoriesAdd";
import CategoriesEdit from "./pages/admin/Categories/CategoriesEdit";
import EditProduct from "./pages/admin/Product/EditProducts";
import BannerAdd from "./pages/admin/Banner/BannerAdd";
import ListBanner from "./pages/admin/Banner/ListProduct";
import EditBanner from "./pages/admin/Banner/EditBanner";

import Color from "./pages/admin/Color/Color";
import ColorAdd from "./pages/admin/Color/ColorAdd";
import ColorEdit from "./pages/admin/Color/ColorEdit";

import SizeList from "./pages/admin/Size/SizeList";
import SizeAdd from "./pages/admin/Size/SizeAdd";
import SizeEdit from "./pages/admin/Size/SizeEdit";
import ProductsList from "./pages/ProductList/products";
import Listquanlyty from "./pages/admin/Quanlyty/Listquanlyty";
import OrderManager from "./pages/admin/receipt/list";
import OrderDetail from "./pages/admin/receipt/detail";




function App() {


  return (
    <Routes>
      <Route path={"/"} element={<Layoutclient />}>
        <Route index element={<Homepage />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/products"} element={<ProductsList />} />
        <Route path={"/lienhe"} element={<Lienhe />} />
        <Route path={"/products/:id"} element={<DetailProduct />} />
        <Route path={"/NewsPage"} element={<NewsPage />} />
        <Route path="news" >
          <Route index element={<NewsPage />} />

        </Route>
        <Route path={"/a"} element={< NewsDetail />} />
        <Route path={"/newsdetail"} element={<NewsDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pay" element={<Pay />} />

      </Route>
      <Route path="admin" element={<AdminLayout />}>
        {/* <Route index element={<Dashbroad />} /> */}
        <Route path="product">
          <Route index element={<ListProduct />} />
          <Route path='add' element={<ProductList />} />
          <Route path='edit/:id' element={<EditProduct />} />
        </Route>
        <Route path="categories">
          <Route index element={<Categories />} />
          <Route path='add' element={<CategoriesAdd />} />
          <Route path='edit/:id' element={<CategoriesEdit />} />
        </Route>
        <Route path="color">
          <Route index element={<Color />} />
          <Route path='add' element={<ColorAdd />} />
          <Route path='edit/:id' element={<ColorEdit />} />
        </Route>
        <Route path="user">
          <Route index element={<Users />} />
          <Route path='add' element={<UserAdd />} />
          <Route path='edit/:id' element={<UserEdit />} />
        </Route>
        <Route path='Blog'>
          <Route index element={<Blog />} />
          <Route path='add' element={<BlogAdd />} />
          <Route path='edit/:id' element={<BlogEdit />} />
        </Route>
        <Route path='Banner'>
          <Route index element={<ListBanner />} />
          <Route path='add' element={<BannerAdd />} />
          <Route path='edit/:id' element={<EditBanner />} />
        </Route>
        <Route path='Size'>
          <Route index element={<SizeList />} />
          <Route path='add' element={<SizeAdd />} />
          <Route path='edit/:id' element={<SizeEdit />} />
        </Route>
        <Route path='quanlyty'>
          <Route index element={<Listquanlyty />} />
          <Route path='add' element={<CommentAdd />} />
          <Route path='edit/:id' element={<CommentEdit />} />
        </Route>
        <Route path='orders'>
          <Route index element={<OrderManager />} />
          <Route path='edit/:id' element={<OrderDetail />} />
        </Route>

      </Route>
      <Route path="*" element={<ErrorsWeb />} />
    </Routes>
  );
}

export default App;
