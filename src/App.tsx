import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

import "antd/dist/antd.css";
import About from "./pages/About/About";
import Products from "./pages/ProductList/products";
import Lienhe from "./pages/lienhe";



import Cart from "./pages/Website/Cart/Cart";
import Pay from "./pages/Website/Pay/Pay";
import ErrorsWeb from "./pages/404/errorsWeb";

import Layoutclient from "./Layout/Layoutclient";
import AdminLayout from "./Layout/AdminLayout";
import Categories from "./pages/admin/Categories/Categories";


import Users from "./pages/admin/User/User";
import CommentEdit from "./pages/admin/Comment/CommentEdit";
import CommentAdd from "./pages/admin/Comment/CommentAdd";
import Comment from "./pages/admin/Comment/Comment";
import BlogAdd from "./pages/admin/Blog/BlogAdd";
import BlogEdit from "./pages/admin/Blog/BlogEdit";
import Blog from "./pages/admin/Blog/Blog";


import NewsDetail from "./pages/News/Newsdetail";
import NewsPage from "./pages/News/News";
import UserEdit from "./pages/admin/User/UserEdit";
import UserAdd from "./pages/admin/User/UserAdd";
import DetailProduct from "./pages/detailProduct";



function App() {


  return (
    <Routes>
      <Route path={"/"} element={<Layoutclient />}>
        <Route index element={<Homepage />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/lienhe"} element={<Lienhe />} />
        <Route path={"/detailProduct"} element={<DetailProduct />} />
        <Route path="news" >
          <Route index element={<NewsPage  />} />
      
        </Route>
        <Route path={"/a"} element={< NewsDetail/>} />
        <Route path={"/newsdetail"} element={<NewsDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pay" element={<Pay />} />

      </Route>
      <Route path="admin" element={<AdminLayout />}>
        {/* <Route index element={<Dashbroad />} /> */}
        <Route path="categories">
          <Route index element={<Categories />} />
        
     
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
        <Route path='comment'>
          <Route index element={<Comment />} />
          <Route path='add' element={<CommentAdd />} />
          <Route path='edit/:id' element={<CommentEdit />} />
        </Route>
        </Route>
      <Route path="*" element={<ErrorsWeb />} />
    </Routes>
  );
}

export default App;
