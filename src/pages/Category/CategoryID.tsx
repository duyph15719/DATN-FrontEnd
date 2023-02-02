// import React, { useEffect, useState } from 'react'
// import { Space, Table, Tag } from 'antd';
// import type { ColumnsType } from 'antd/es/table';
// import './Category.css'
// import { useAppDispatch, useAppSelector } from '../../redux/hook';
// import { categoriesList, categoriesRead } from '../../redux/slice/categoriesSlice';
// import { productList } from '../../redux/slice/productSlice';
// import { Link, useParams } from 'react-router-dom';

// type Props = {}

// const CategoryID = (props: Props) => {
//     const dispatch = useAppDispatch()
//     const { id } = useParams()
//     const { categories } = useAppSelector((state: any) => state.CategoriesReducer)
//     const { products } = useAppSelector(state => state.ProductReducer)
//     const [product, setProduct] = useState([]);
//     useEffect(() => {

//         dispatch(categoriesList())
//         dispatch(productList())
//     }, [dispatch])
//     const productByCate = products.filter((item: any) => item.categoryId._id === id)
//     console.log(productByCate);
//     return (
//         <div className="max-w-7xl mx-auto text-white grid md:grid-cols-3 grid-cols-1 gap-4 pt-10  ">
//             {productByCate?.map((item: any) => (
//                 <>
//                     <Link to={`/products/${item.slug}`}>
//                         <div className="box1  text-center">
//                             <div className="flex justify-center">
//                                 <img
//                                     className=""
//                                     src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/title_block_05.png"
//                                     alt=""
//                                 />
//                             </div>
//                             <div className="flex justify-center">
//                                 <img
//                                     src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/product_block_03.jpg"
//                                     alt=""
//                                 />
//                             </div>
//                             <button className="xemthem">Xem Sản Phẩm</button>
//                             <div className="showbox slideright">{item.name}</div>
//                         </div>
//                     </Link>

//                 </>
//             ))}


//         </div>
//     );
// };

// export default CategoryID;
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { listProduct } from '../../api/product'
import Paginate from '../../components/Paginate'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { categoriesList } from '../../redux/slice/categoriesSlice'
import { filterProductS, productList } from '../../redux/slice/productSlice'

type Props = {}

const CategoryID = (props: Props) => {
    const dispatch = useAppDispatch()
    const { slug } = useParams()
    const { categories } = useAppSelector((state: any) => state.CategoriesReducer)
    const { products } = useAppSelector(state => state.ProductReducer)
    const [product, setProduct] = useState([]);
    const productByCate = products.filter((item: any) => item.categoryId.slug === slug)
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        const getPro = async () => {
            const data = await listProduct();
            console.log(data);
            setProduct(data)
        }
        getPro()

        dispatch(categoriesList())
        dispatch(productList())

    }, [dispatch])
    const handleFiler = () => {
        const getChooseFilter = document.querySelectorAll("#filter")
        console.log(product);
        let productFilter: any = []
        let flag = false
        getChooseFilter.forEach((current: any) => {
            if (current.checked === true) {
                flag = true

                products?.forEach((cur: any) => {
                    if (cur.categoryId._id == current.getAttribute("data")) {

                        productFilter.push(cur)

                    }
                })
            }
        })
        if (flag == false) {

            dispatch(filterProductS(products));
            dispatch(productList())
        } else {

            dispatch(filterProductS(productFilter));


        }
    }

    const handleDeleteFilter = () => {
        const getChooseFilter = document.querySelectorAll("#filter")
        console.log(getChooseFilter);
        getChooseFilter.forEach((item: any) => {
            item.checked = false
            dispatch(productList())
        })
    }
    const postPerPage = 9;
    const totalPosts = products.length;
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const filterPosts = products.slice(indexOfFirstPost, indexOfLastPost);

    const postPerPage1 = 5;
    const totalPosts1 = products.length;
    const indexOfLastPost1 = currentPage * postPerPage1;
    const indexOfFirstPost1 = indexOfLastPost1 - postPerPage1;
    const filterPosts1 = products.slice(indexOfFirstPost1, indexOfLastPost1);
    return (
        <div>
            <div className="nav-product max-w-7xl mx-auto ">
                <div className='flex flex-col md:flex-row'>

                    <div className="nav-product-left  md:w-[329px]  ">
                        <div className=" mx-auto">
                            <p className=" mx-auto">TRANG CHỦ / NAM</p></div>
                    </div>
                    <div className="nav-product-right w-[100%] md:w-[70%] ">

                    </div>
                </div>
                <div className='flex flex-col md:flex-row ' >
                    <div className="product-aside-left md:w-[329px] w-[100%] md:block	 hidden mr-10	">
                        <div className="filter-price">
                            <div className="block border-b border-gray-300 pb-7 mb-7">
                                <div className="flex items-center justify-between mb-2.5">
                                    <h2 className="font-semibold text-heading text-xl md:text-2xl">
                                        Danh mục
                                    </h2>
                                    <button
                                        onClick={() => handleDeleteFilter()}
                                        className="flex-shrink text-xs mt-0.5 transition duration-150 ease-in focus:outline-none hover:text-heading"
                                        aria-label="Clear All"
                                    >
                                        Xoá hết
                                    </button>
                                </div>
                                <div className="mt-2 flex flex-col space-y-4">

                                    {categories?.map((item: any) => (
                                        <>

                                            <Link to={`/categories/${item.slug}`}>
                                                <input type="radio" name="" id="" /> {item.name}

                                            </Link>

                                        </>
                                    ))}

                                </div>
                            </div>

                        </div>

                        <div className="mt-5">
                            <h2 className="uppercase font-bold pb-2 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">Sản phẩm yêu thích</h2>
                            <ul className="grid grid-cols-1 divide-y mt-2">

                                {filterPosts1?.map((item: any) => (
                                    <>
                                        <li className="py-3 flex">
                                            <a className="block bg-[#f7f7f7]" href="">
                                                <img className="w-16 h-16 object-cover block" src={item.image} />
                                            </a>
                                            <div className="ml-3 flex-1">
                                                <a className="uppercase transition duration-300 ease-linear hover:text-black block text-[#D9A953] text-sm" href="/san-pham/tra-djao-cam-sa">
                                                    Chuck 70 Psy-Kicks Ox
                                                </a>
                                                <span className="font-semibold">2,800,000&nbsp;VND</span>
                                            </div>
                                        </li>
                                    </>

                                ))}




                            </ul>
                        </div>
                    </div>
                    <div className="product-aside-right w-[100%] md:w-[70%] grid md:grid-cols-3 grid-cols-2 gap-4 pt-10 ">
                        {productByCate?.map((item: any) => (
                            <>
                                <Link to={`/products/${item.slug}`}>
                                    <div className="group  border-slate-300 shadow">
                                        <div className="relative bg-[#f7f7f7] overflow-hidden">
                                            <Link className="bg-cover pt-[80%] bg-center block" to={`/products/${item.slug}`} style={{ backgroundImage: `url(${item.image})` }} />
                                            <button className="absolute w-full bottom-0 h-9 bg-[#5c3f0a] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                                            <button className="btn-heart absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" /></svg></button>
                                        </div>
                                        <div className="text-center py-3"><p className="uppercase text-xs text-gray-400"> {item.categoryId?.name}</p>
                                            <Link className="block font-semibold text-lg" to={`/products/${item.slug}`}>{item.name}</Link>
                                            <ul className="flex text-yellow-500 text-xs justify-center pt-1">
                                                <div className="text-yellow-400">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" /></svg></div><div className="text-yellow-400"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" /></svg></div><div className="text-yellow-400"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" /></svg></div><div className="text-yellow-400"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" /></svg></div><div className="text-yellow-400"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" /></svg></div></ul>
                                            <div className="text-sm pt-1 text-black font-bold">
                                                {new Intl.NumberFormat().format(item.price)}&nbsp;VND
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                            </>

                        ))}





                    </div>
                </div>
                <ul className="flex justify-center mt-5">
                    {totalPosts > postPerPage && (
                        <Paginate
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            totalPosts={totalPosts}
                            postPerPage={postPerPage}
                        />
                    )}
                </ul>

            </div>
        </div >
    )
}

export default CategoryID