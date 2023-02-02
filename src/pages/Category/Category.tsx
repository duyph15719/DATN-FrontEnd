import React, { useEffect } from 'react'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './Category.css'
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { categoriesList } from '../../redux/slice/categoriesSlice';
import { productList } from '../../redux/slice/productSlice';
import { Link } from 'react-router-dom';

type Props = {}

const Category = (props: Props) => {
  const dispatch = useAppDispatch()
  const { categories } = useAppSelector(state => state.CategoriesReducer)
  useEffect(() => {
    dispatch(categoriesList())


  }, [dispatch])


  return (
    <div className="max-w-7xl mx-auto text-white grid md:grid-cols-3 grid-cols-1 gap-4 pt-10  ">
      {categories?.map((item: any) => (
        <>
          <Link to={`/categories/${item.slug}`}>
            <div className="box1  text-center">
              <div className="flex justify-center">
                <img
                  className=""
                  src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/title_block_05.png"
                  alt=""
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/product_block_03.jpg"
                  alt=""
                />
              </div>
              <button className="xemthem">Xem Sản Phẩm</button>
              <div className="showbox slideright">box 1</div>
            </div>
          </Link>

        </>
      ))}


    </div>
  );
};

export default Category;
