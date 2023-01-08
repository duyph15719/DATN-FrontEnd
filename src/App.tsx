import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";

import "antd/dist/antd.css";
import About from "./pages/About/About";
import Lienhe from "./pages/Lienhe/lienhe";

import ErrorsWeb from "./pages/404/errorsWeb";
import Cart from "./pages/Website/Cart/Cart";
import Pay from "./pages/Website/Pay/Pay";

import AdminLayout from "./Layout/AdminLayout";
import Layoutclient from "./Layout/Layoutclient";
import Categories from "./pages/admin/Categories/Categories";

import Blog from "./pages/admin/Blog/Blog";

import BlogAdd from "./pages/admin/Blog/BlogAdd";
import BlogEdit from "./pages/admin/Blog/BlogEdit";
import CommentAdd from "./pages/admin/Comment/CommentAdd";
import CommentEdit from "./pages/admin/Comment/CommentEdit";
import Users from "./pages/admin/User/User";

import BannerAdd from "./pages/admin/Banner/BannerAdd";
import EditBanner from "./pages/admin/Banner/EditBanner";
import ListBanner from "./pages/admin/Banner/ListProduct";
import CategoriesAdd from "./pages/admin/Categories/CategoriesAdd";
import CategoriesEdit from "./pages/admin/Categories/CategoriesEdit";
import ProductList from "./pages/admin/Product/AddProduct";
import EditProduct from "./pages/admin/Product/EditProducts";
import ListProduct from "./pages/admin/Product/ListProduct";
import UserAdd from "./pages/admin/User/UserAdd";
import UserEdit from "./pages/admin/User/UserEdit";
import NewsPage from "./pages/News/News";
import NewsDetail from "./pages/News/Newsdetail";
import DetailProduct from "./pages/ProductList/detailProduct";

import ProductsList from "./pages/ProductList/products";

import OrderManager from "./pages/admin/receipt/list";
import OrderDetail from "./pages/admin/receipt/detail";

import { PrivateRouter } from "./ultils/PrivateRouter";

import Signin from "./pages/SingInUp/Signin/Signin";
import Signup from "./pages/SingInUp/Signup/Signup";
import Chart from "./pages/admin/Chart/Chart";

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
        <Route path="news">
          <Route index element={<NewsPage />} />
        </Route>
        <Route path={"/a"} element={<NewsDetail />} />
        <Route path={"/newsdetail"} element={<NewsDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pay" element={<Pay />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route
        path="admin"
        element={
          <PrivateRouter>
            <AdminLayout />
          </PrivateRouter>
        }
      >
        {/* <Route index element={<Dashbroad />} /> */}
        <Route path="product">
          <Route index element={<ListProduct />} />
          <Route path="add" element={<ProductList />} />
          <Route path="edit/:id" element={<EditProduct />} />
        </Route>
        <Route path="categories">
          <Route index element={<Categories />} />
          <Route path="add" element={<CategoriesAdd />} />
          <Route path="edit/:id" element={<CategoriesEdit />} />
        </Route>

        <Route path="user">
          <Route index element={<Users />} />
          <Route path="add" element={<UserAdd />} />
          <Route path="edit/:id" element={<UserEdit />} />
        </Route>
        <Route path="Blog">
          <Route index element={<Blog />} />
          <Route path="add" element={<BlogAdd />} />
          <Route path="edit/:id" element={<BlogEdit />} />
        </Route>
        <Route path="Banner">
          <Route index element={<ListBanner />} />
          <Route path="add" element={<BannerAdd />} />
          <Route path="edit/:id" element={<EditBanner />} />
        </Route>

        <Route path="orders">
          <Route index element={<OrderManager />} />
          <Route path="edit/:id" element={<OrderDetail />} />
        </Route>
        <Route path="chart">
          <Route index element={<Chart />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorsWeb />} />
    </Routes>
  );
}

export default App;
