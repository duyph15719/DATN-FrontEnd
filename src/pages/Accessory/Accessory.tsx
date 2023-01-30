import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Paginate from "../../components/Paginate";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { categoriesList } from "../../redux/slice/categoriesSlice";
import { productList } from "../../redux/slice/productSlice";

type Props = {};

const Accessory = (props: Props) => {
  const dispatch = useAppDispatch()

  const { products } = useAppSelector(state => state.ProductReducer)

  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {


    dispatch(categoriesList())
    dispatch(productList())

  }, [dispatch])



  const postPerPage = 8;
  const totalPosts = products.length;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const filterPosts = products.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center mt-10">PHỤ KIỆN KHÁC</h1>
        <hr />
      </div>
      <div className="max-w-7xl mx-auto text-white ">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 pt-10  pb-3 mb-5">
          {filterPosts.map((item: any) => (
            <>
              <Link to={`/products/${item.slug}`}>
                <div className="boxproduct  text-center">
                  <div className="flex justify-center">
                    <img
                      className=""
                      src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/jogger.jpg"
                      alt=""
                    />
                  </div>

                  <button className="title">{item.name}</button>
                  <p className="price">   {new Intl.NumberFormat().format(item.price)}&nbsp;VND</p>
                  <button className="Xemproduct">Xem Sản Phẩm</button>
                </div>
              </Link>

            </>
          ))}







        </div>

        <div className="flex justify-center text-black">
          {totalPosts > postPerPage && (
            <Paginate
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPosts={totalPosts}
              postPerPage={postPerPage}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Accessory;
