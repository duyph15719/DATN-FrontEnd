
// import React from 'react'
// import '../pages/detail/detail.css'
// import './detail/star.js'
// import './detail/detail.js'
// import { BiChevronsLeft,BiChevronsRight } from "react-icons/bi";
// type Props = {}

// const DetailProduct = (props: Props) => {
//   return (
//     <>
//       <div className="product-container">
//         <div className="product-main">
//           <div className="row content-row mb-0">
//             <div className="product-gallery large-6 col"> tối code lại ở trong này và dưới
//               <div>
//                 <div className="main2">
//                     <img className='img-feature' src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vcb.jpg" alt="" />
//                     <div className='control prev'><BiChevronsLeft /></div>
//                     <div className='control next'> 
//                     <i className='bx bxs-chevrons-right'><BiChevronsRight /></i>
//                     </div>
//                 </div>
//                 <div className="list-image">
//                   <div><img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-6-100x100.jpg" alt="" /></div>
//                   <div><img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-6-100x100.jpg" alt="" /></div>
//                   <div><img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-6-100x100.jpg" alt="" /></div>
//                   <div><img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-6-100x100.jpg" alt="" /></div>
//                   <div><img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-6-100x100.jpg" alt="" /></div>
//                   </div>
//               </div>
//               {/* .product-thumbnails */}
//             </div>
//             <div className="product-info summary col-fit col entry-summary product-summary">
//               <nav className="woocommerce-breadcrumb breadcrumbs"><a href="http://mauweb.monamedia.net/converse">Trang chủ</a> <span className="divider">/</span> <a href="http://mauweb.monamedia.net/converse/danh-muc/tre-em/">Trẻ em</a>
//               </nav>
//               <h1 className="product-title product_title entry-title">
//                 Chuck Taylor All Star Creatures Boston x London Transport</h1>
//               <div className="is-divider small" />
//               <ul className="next-prev-thumbs is-small show-for-medium">
//                 <li className="prod-dropdown has-dropdown">
//                   <a className="button icon is-outline circle" href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-all-star-simple-step-boston-x-london-transport/" rel="next">
//                     <i className="icon-angle-left" /> </a>
//                   <div className="nav-dropdown">
//                     <a title="Chuck Taylor All Star Simple Step Boston x London Transport" href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-all-star-simple-step-boston-x-london-transport/">
//                       <img width={100} height={100} className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail wp-post-image" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-6-100x100.jpg" sizes="(max-width: 100px) 100vw, 100px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-6-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-6-150x150.jpg 150w" /></a>
//                   </div>
//                 </li>
//                 <li className="prod-dropdown has-dropdown">
//                   <a className="button icon is-outline circle" href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-all-star-simple-step-summer-fundamentals-2/" rel="next">
//                     <i className="icon-angle-right" /> </a>
//                   <div className="nav-dropdown">
//                     <a title="Chuck Taylor All Star Simple Step Summer Fundamentals" href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-all-star-simple-step-summer-fundamentals-2/">
//                       <img width={100} height={100} className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail wp-post-image" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-4-100x100.jpg" sizes="(max-width: 100px) 100vw, 100px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-4-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-4-150x150.jpg 150w" /></a>
//                   </div>
//                 </li>
//               </ul>
//               <div className="price-wrapper">
//                 <p className="price product-page-price ">
//                   <span className="woocommerce-Price-amount amount">800,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span>
//                 </p>
//               </div>
//               <form className="cart" action="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-all-star-creatures-boston-x-london-transport/" encType="multipart/form-data" method="post">
//                 <div className="quantity buttons_added">
//                   <input className="minus button is-form" type="button" defaultValue="-" /> <label className="screen-reader-text" htmlFor="quantity_634f7c60ba53f">Số lượng</label>
//                   <input name="quantity" title="SL" className="input-text qty text" id="quantity_634f7c60ba53f" type="number" size={4} min={1} max={9999} step={1} pattern="[0-9]*" defaultValue={1} inputMode="numeric" />
//                   <input className="plus button is-form" type="button" defaultValue="+" />
//                 </div>
//                 <button name="add-to-cart" className="single_add_to_cart_button button alt" type="submit" value={629}>Thêm vào giỏ</button>
//               </form>
//               <div className="row row-small" id="row-76643244">
//                 <div className="col medium-6 small-12 large-6">
//                   <div className="col-inner">
//                     <p><strong>Tính phí ship tự động</strong></p>
//                     <div className="row large-columns-3 medium-columns- small-columns-2 row-xsmall">
//                       <div className="gallery-col col">
//                         <div className="col-inner">
//                           <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghn.jpg">
//                             <div className="box has-hover gallery-box box-overlay dark">
//                               <div className="box-image">
//                                 <img width={400} height={200} className="attachment-original size-original" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghn.jpg" sizes="(max-width: 400px) 100vw, 400px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghn.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghn-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghn-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghn-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghn-48x24.jpg 48w" />
//                                 <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                 </div>
//                               </div>{/* .image */}
//                               <div className="box-text text-left">
//                                 <p />
//                               </div>{/* .text */}
//                             </div>{/* .box */}
//                           </a>
//                         </div>{/* .col-inner */}
//                       </div>{/* .col */}
//                       <div className="gallery-col col">
//                         <div className="col-inner">
//                           <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghtk.jpg">
//                             <div className="box has-hover gallery-box box-overlay dark">
//                               <div className="box-image">
//                                 <img width={400} height={200} className="attachment-original size-original" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghtk.jpg" sizes="(max-width: 400px) 100vw, 400px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghtk.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghtk-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghtk-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghtk-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghtk-48x24.jpg 48w" />
//                                 <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                 </div>
//                               </div>{/* .image */}
//                               <div className="box-text text-left">
//                                 <p />
//                               </div>{/* .text */}
//                             </div>{/* .box */}
//                           </a>
//                         </div>{/* .col-inner */}
//                       </div>{/* .col */}
//                       <div className="gallery-col col">
//                         <div className="col-inner">
//                           <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ninja-van.jpg">
//                             <div className="box has-hover gallery-box box-overlay dark">
//                               <div className="box-image">
//                                 <img width={400} height={200} className="attachment-original size-original" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ninja-van.jpg" sizes="(max-width: 400px) 100vw, 400px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ninja-van.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ninja-van-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ninja-van-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ninja-van-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ninja-van-48x24.jpg 48w" />
//                                 <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                 </div>
//                               </div>{/* .image */}
//                               <div className="box-text text-left">
//                                 <p />
//                               </div>{/* .text */}
//                             </div>{/* .box */}
//                           </a>
//                         </div>{/* .col-inner */}
//                       </div>{/* .col */}
//                       <div className="gallery-col col">
//                         <div className="col-inner">
//                           <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-shipchung.jpg">
//                             <div className="box has-hover gallery-box box-overlay dark">
//                               <div className="box-image">
//                                 <img width={400} height={200} className="attachment-original size-original" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-shipchung.jpg" sizes="(max-width: 400px) 100vw, 400px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-shipchung.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-shipchung-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-shipchung-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-shipchung-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-shipchung-48x24.jpg 48w" />
//                                 <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                 </div>
//                               </div>{/* .image */}
//                               <div className="box-text text-left">
//                                 <p />
//                               </div>{/* .text */}
//                             </div>{/* .box */}
//                           </a>
//                         </div>{/* .col-inner */}
//                       </div>{/* .col */}
//                       <div className="gallery-col col">
//                         <div className="col-inner">
//                           <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-viettle-post.jpg">
//                             <div className="box has-hover gallery-box box-overlay dark">
//                               <div className="box-image">
//                                 <img width={400} height={200} className="attachment-original size-original" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-viettle-post.jpg" sizes="(max-width: 400px) 100vw, 400px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-viettle-post.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-viettle-post-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-viettle-post-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-viettle-post-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-viettle-post-48x24.jpg 48w" />
//                                 <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                 </div>
//                               </div>{/* .image */}
//                               <div className="box-text text-left">
//                                 <p />
//                               </div>{/* .text */}
//                             </div>{/* .box */}
//                           </a>
//                         </div>{/* .col-inner */}
//                       </div>{/* .col */}
//                       <div className="gallery-col col">
//                         <div className="col-inner">
//                           <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vn-post.jpg">
//                             <div className="box has-hover gallery-box box-overlay dark">
//                               <div className="box-image">
//                                 <img width={400} height={200} className="attachment-original size-original" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vn-post.jpg" sizes="(max-width: 400px) 100vw, 400px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vn-post.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vn-post-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vn-post-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vn-post-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vn-post-48x24.jpg 48w" />
//                                 <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                 </div>
//                               </div>{/* .image */}
//                               <div className="box-text text-left">
//                                 <p />
//                               </div>{/* .text */}
//                             </div>{/* .box */}
//                           </a>
//                         </div>{/* .col-inner */}
//                       </div>{/* .col */}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col medium-6 small-12 large-6">
//                   <div className="col-inner">
//                     <p><strong>Thanh toán</strong></p>
//                     <div className="row large-columns-3 medium-columns- small-columns-2 row-xsmall">
//                       <div className="gallery-col col">
//                         <div className="col-inner">
//                           <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-acb.jpg">
//                             <div className="box has-hover gallery-box box-overlay dark">
//                               <div className="box-image">
//                                 <img width={400} height={200} className="attachment-original size-original" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-acb.jpg" sizes="(max-width: 400px) 100vw, 400px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-acb.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-acb-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-acb-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-acb-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-acb-48x24.jpg 48w" />
//                                 <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                 </div>
//                               </div>{/* .image */}
//                               <div className="box-text text-left">
//                                 <p />
//                               </div>{/* .text */}
//                             </div>{/* .box */}
//                           </a>
//                         </div>{/* .col-inner */}
//                       </div>{/* .col */}
//                       <div className="gallery-col col">
//                         <div className="col-inner">
//                           <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-techcombank.jpg">
//                             <div className="box has-hover gallery-box box-overlay dark">
//                               <div className="box-image">
//                                 <img width={400} height={200} className="attachment-original size-original" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-techcombank.jpg" sizes="(max-width: 400px) 100vw, 400px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-techcombank.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-techcombank-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-techcombank-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-techcombank-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-techcombank-48x24.jpg 48w" />
//                                 <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                 </div>
//                               </div>{/* .image */}
//                               <div className="box-text text-left">
//                                 <p />
//                               </div>{/* .text */}
//                             </div>{/* .box */}
//                           </a>
//                         </div>{/* .col-inner */}
//                       </div>{/* .col */}
//                       <div className="gallery-col col">
//                         <div className="col-inner">
//                           <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vib.jpg">
//                             <div className="box has-hover gallery-box box-overlay dark">
//                               <div className="box-image">
//                                 <img width={400} height={200} className="attachment-original size-original" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vib.jpg" sizes="(max-width: 400px) 100vw, 400px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vib.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vib-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vib-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vib-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vib-48x24.jpg 48w" />
//                                 <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                 </div>
//                               </div>{/* .image */}
//                               <div className="box-text text-left">
//                                 <p />
//                               </div>{/* .text */}
//                             </div>{/* .box */}
//                           </a>
//                         </div>{/* .col-inner */}
//                       </div>{/* .col */}
//                       <div className="gallery-col col">
//                         <div className="col-inner">
//                           <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vcb.jpg">
//                             <div className="box has-hover gallery-box box-overlay dark">
//                               <div className="box-image">
//                                 <img width={400} height={200} className="attachment-original size-original" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vcb.jpg" sizes="(max-width: 400px) 100vw, 400px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vcb.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vcb-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vcb-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vcb-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vcb-48x24.jpg 48w" />
//                                 <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                 </div>
//                               </div>{/* .image */}
//                               <div className="box-text text-left">
//                                 <p />
//                               </div>{/* .text */}
//                             </div>{/* .box */}
//                           </a>
//                         </div>{/* .col-inner */}
//                       </div>{/* .col */}
//                       <div className="gallery-col col">
//                         <div className="col-inner">
//                           <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-paypal.jpg">
//                             <div className="box has-hover gallery-box box-overlay dark">
//                               <div className="box-image">
//                                 <img width={400} height={200} className="attachment-original size-original" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-paypal.jpg" sizes="(max-width: 400px) 100vw, 400px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-paypal.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-paypal-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-paypal-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-paypal-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-paypal-48x24.jpg 48w" />
//                                 <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                 </div>
//                               </div>{/* .image */}
//                               <div className="box-text text-left">
//                                 <p />
//                               </div>{/* .text */}
//                             </div>{/* .box */}
//                           </a>
//                         </div>{/* .col-inner */}
//                       </div>{/* .col */}
//                       <div className="gallery-col col">
//                         <div className="col-inner">
//                           <a className="image-lightbox lightbox-gallery" href="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-mastercard.jpg">
//                             <div className="box has-hover gallery-box box-overlay dark">
//                               <div className="box-image">
//                                 <img width={400} height={200} className="attachment-original size-original" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-mastercard.jpg" sizes="(max-width: 400px) 100vw, 400px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-mastercard.jpg 400w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-mastercard-300x150.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-mastercard-24x12.jpg 24w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-mastercard-36x18.jpg 36w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-mastercard-48x24.jpg 48w" />
//                                 <div className="overlay fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//                                 </div>
//                               </div>{/* .image */}
//                               <div className="box-text text-left">
//                                 <p />
//                               </div>{/* .text */}
//                             </div>{/* .box */}
//                           </a>
//                         </div>{/* .col-inner */}
//                       </div>{/* .col */}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col small-12 large-12">
//                   <div className="col-inner">
//                     <p><strong>"Hãy trở thành Affilicate của chúng tôi để tìm thêm thu nhập
//                       thụ động, kiếm tiền online"</strong></p>
//                     <a className="button primary lowercase" href="http://mauweb.monamedia.net/converse/dang-ky-affilicate/" target="_self">
//                       <span>Đăng ký Affilicate</span>
//                     </a>
//                   </div>
//                 </div>
//                 <style dangerouslySetInnerHTML={{ __html: "\n\n                                     " }} />
//               </div>
//               <div className="product_meta">
//                 <span className="sku_wrapper">Mã: <span className="sku">758189V</span></span>
//                 <span className="posted_in">Danh mục: <a href="http://mauweb.monamedia.net/converse/danh-muc/tre-em/" rel="tag">Trẻ em</a></span>
//               </div>
//             </div>{/* .summary */}
//             <div className="mfp-hide" id="product-sidebar">
//               <div className="sidebar-inner">
//                 <div className="hide-for-off-canvas" style={{ width: '100%' }}>
//                   <ul className="next-prev-thumbs is-small nav-right text-right">
//                     <li className="prod-dropdown has-dropdown">
//                       <a className="button icon is-outline circle" href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-all-star-simple-step-boston-x-london-transport/" rel="next">
//                         <i className="icon-angle-left" /> </a>
//                       <div className="nav-dropdown">
//                         <a title="Chuck Taylor All Star Simple Step Boston x London Transport" href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-all-star-simple-step-boston-x-london-transport/">
//                           <img width={100} height={100} className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail wp-post-image" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-6-100x100.jpg" sizes="(max-width: 100px) 100vw, 100px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-6-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-6-150x150.jpg 150w" /></a>
//                       </div>
//                     </li>
//                     <li className="prod-dropdown has-dropdown">
//                       <a className="button icon is-outline circle" href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-all-star-simple-step-summer-fundamentals-2/" rel="next">
//                         <i className="icon-angle-right" /> </a>
//                       <div className="nav-dropdown">
//                         <a title="Chuck Taylor All Star Simple Step Summer Fundamentals" href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-all-star-simple-step-summer-fundamentals-2/">
//                           <img width={100} height={100} className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail wp-post-image" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-4-100x100.jpg" sizes="(max-width: 100px) 100vw, 100px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-4-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-4-150x150.jpg 150w" /></a>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//                 <aside className="widget woocommerce widget_products" id="woocommerce_products-2">
//                   <span className="widget-title shop-sidebar">Sản phẩm</span>
//                   <div className="is-divider small" />
//                   <ul className="product_list_widget">
//                     <li>
//                       <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-70-psy-kicks-ox-4/">
//                         <img width={100} height={100} className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/men-psy-1-100x100.jpg" sizes="(max-width: 100px) 100vw, 100px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/men-psy-1-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/men-psy-1-150x150.jpg 150w" />
//                         <span className="product-title">Chuck 70 Psy-Kicks Ox</span>
//                       </a>
//                       <span className="woocommerce-Price-amount amount">2,800,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span>
//                     </li>
//                     <li>
//                       <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-70-psy-kicks-ox-3/">
//                         <img width={100} height={100} className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-2-100x100.jpg" sizes="(max-width: 100px) 100vw, 100px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-2-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-2-150x150.jpg 150w" />
//                         <span className="product-title">Chuck 70 Psy-Kicks Ox</span>
//                       </a>
//                       <span className="woocommerce-Price-amount amount">1,800,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span>
//                     </li>
//                     <li>
//                       <a href="http://mauweb.monamedia.net/converse/san-pham/one-star-sunbaked-8/">
//                         <img width={100} height={100} className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-1-100x100.jpg" sizes="(max-width: 100px) 100vw, 100px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-1-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-1-150x150.jpg 150w" />
//                         <span className="product-title">One Star Sunbaked</span>
//                       </a>
//                       <span className="woocommerce-Price-amount amount">1,600,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span>
//                     </li>
//                     <li>
//                       <a href="http://mauweb.monamedia.net/converse/san-pham/one-star-sunbaked-7/">
//                         <img width={100} height={100} className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-2-100x100.jpg" sizes="(max-width: 100px) 100vw, 100px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-2-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-2-150x150.jpg 150w" />
//                         <span className="product-title">One Star Sunbaked</span>
//                       </a>
//                       <span className="woocommerce-Price-amount amount">1,600,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span>
//                     </li>
//                     <li>
//                       <a href="http://mauweb.monamedia.net/converse/san-pham/one-star-sunbaked-6/">
//                         <img width={100} height={100} className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-3-100x100.jpg" sizes="(max-width: 100px) 100vw, 100px" srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-3-100x100.jpg 100w, http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-3-150x150.jpg 150w" />
//                         <span className="product-title">One Star Sunbaked</span>
//                       </a>
//                       <span className="woocommerce-Price-amount amount">1,600,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span>
//                     </li>
//                   </ul>
//                 </aside>
//                 <aside className="widget flatsome_recent_posts" id="flatsome_recent_posts-3"> <span className="widget-title shop-sidebar">Bài viết mới nhất</span>
//                   <div className="is-divider small" />
//                   <ul>
//                     <li className="recent-blog-posts-li">
//                       <div className="flex-row recent-blog-posts align-top pt-half pb-half">
//                         <div className="flex-col mr-half">
//                           <div className="badge post-date  badge-circle">
//                             <div className="badge-inner bg-fill" style={{ background: 'url("http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-150x150.jpg")', border: '0px currentColor', borderImage: 'none' }}>
//                             </div>
//                           </div>
//                         </div>{/* .flex-col */}
//                         <div className="flex-col flex-grow">
//                           <a title="Converse sẽ mang Golf le Fleur* Chuck 70 về Việt Nam?" href="http://mauweb.monamedia.net/converse/duis-luctus-elit-nisi-et-cursus-magna-pellentesque-non/">Converse
//                             sẽ mang Golf le Fleur* Chuck 70 về Việt Nam?</a>
//                           <span className="post_comments op-7 block is-xsmall"><a href="http://mauweb.monamedia.net/converse/duis-luctus-elit-nisi-et-cursus-magna-pellentesque-non/#respond" /></span>
//                         </div>
//                       </div>{/* .flex-row */}
//                     </li>
//                     <li className="recent-blog-posts-li">
//                       <div className="flex-row recent-blog-posts align-top pt-half pb-half">
//                         <div className="flex-col mr-half">
//                           <div className="badge post-date  badge-circle">
//                             <div className="badge-inner bg-fill" style={{ background: 'url("http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-2-150x150.jpg")', border: '0px currentColor', borderImage: 'none' }}>
//                             </div>
//                           </div>
//                         </div>{/* .flex-col */}
//                         <div className="flex-col flex-grow">
//                           <a title="Xinh xắn nhất những ngày này là những mẫu giày của các chàng trai BTS hợp tác cùng Converse" href="http://mauweb.monamedia.net/converse/mauris-tristique-pretium-tempus-vestibulum-et-accumsan-magna/">Xinh
//                             xắn nhất những ngày này là những mẫu giày của các chàng
//                             trai BTS hợp tác cùng Converse</a>
//                           <span className="post_comments op-7 block is-xsmall"><a href="http://mauweb.monamedia.net/converse/mauris-tristique-pretium-tempus-vestibulum-et-accumsan-magna/#respond" /></span>
//                         </div>
//                       </div>{/* .flex-row */}
//                     </li>
//                     <li className="recent-blog-posts-li">
//                       <div className="flex-row recent-blog-posts align-top pt-half pb-half">
//                         <div className="flex-col mr-half">
//                           <div className="badge post-date  badge-circle">
//                             <div className="badge-inner bg-fill" style={{ background: 'url("http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-3-150x150.jpg")', border: '0px currentColor', borderImage: 'none' }}>
//                             </div>
//                           </div>
//                         </div>{/* .flex-col */}
//                         <div className="flex-col flex-grow">
//                           <a title="Fashionista Việt đua nhau sống “ngược” theo trào lưu “ChucksFirst? Bạn dám không?”" href="http://mauweb.monamedia.net/converse/aliquam-placerat-nisl-nec-imperdiet-vehicula-phasellus-tempus-ligula-id-orci-finibus-feugiat/">Fashionista
//                             Việt đua nhau sống “ngược” theo trào lưu “ChucksFirst?
//                             Bạn dám không?”</a>
//                           <span className="post_comments op-7 block is-xsmall"><a href="http://mauweb.monamedia.net/converse/aliquam-placerat-nisl-nec-imperdiet-vehicula-phasellus-tempus-ligula-id-orci-finibus-feugiat/#respond" /></span>
//                         </div>
//                       </div>{/* .flex-row */}
//                     </li>
//                     <li className="recent-blog-posts-li">
//                       <div className="flex-row recent-blog-posts align-top pt-half pb-half">
//                         <div className="flex-col mr-half">
//                           <div className="badge post-date  badge-circle">
//                             <div className="badge-inner bg-fill" style={{ background: 'url("http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-4-150x150.jpg")', border: '0px currentColor', borderImage: 'none' }}>
//                             </div>
//                           </div>
//                         </div>{/* .flex-col */}
//                         <div className="flex-col flex-grow">
//                           <a title="Comme des Garçons Play x Converse nhá hàng mẫu giày mới, dự kiến ra mắt vào cuối tháng này" href="http://mauweb.monamedia.net/converse/in-rutrum-tempus-purus-ut-euismod-dui-facilisis-ac-fusce-semper-dignissim-diam-a-egestas/">Comme
//                             des Garçons Play x Converse nhá hàng mẫu giày mới, dự
//                             kiến ra mắt vào cuối tháng này</a>
//                           <span className="post_comments op-7 block is-xsmall"><a href="http://mauweb.monamedia.net/converse/in-rutrum-tempus-purus-ut-euismod-dui-facilisis-ac-fusce-semper-dignissim-diam-a-egestas/#respond" /></span>
//                         </div>
//                       </div>{/* .flex-row */}
//                     </li>
//                     <li className="recent-blog-posts-li">
//                       <div className="flex-row recent-blog-posts align-top pt-half pb-half">
//                         <div className="flex-col mr-half">
//                           <div className="badge post-date  badge-circle">
//                             <div className="badge-inner bg-fill" style={{ background: 'url("http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-5-150x150.png")', border: '0px currentColor', borderImage: 'none' }}>
//                             </div>
//                           </div>
//                         </div>{/* .flex-col */}
//                         <div className="flex-col flex-grow">
//                           <a title="Hội Thần Kinh Giày xôn xao với hình ảnh 18 ngàn lượt like của nhóc tì mẫu giáo" href="http://mauweb.monamedia.net/converse/donec-tempus-eu-ligula-sed-blandit-vivamus-vel-enim-ac-quam-iaculis-rutrum/">Hội
//                             Thần Kinh Giày xôn xao với hình ảnh 18 ngàn lượt like
//                             của nhóc tì mẫu giáo</a>
//                           <span className="post_comments op-7 block is-xsmall"><a href="http://mauweb.monamedia.net/converse/donec-tempus-eu-ligula-sed-blandit-vivamus-vel-enim-ac-quam-iaculis-rutrum/#respond" /></span>
//                         </div>
//                       </div>{/* .flex-row */}
//                     </li>
//                   </ul>
//                 </aside>
//               </div>{/* .sidebar-inner */}
//             </div>
//           </div>{/* .row */}
//         </div>
//         <div className="product-footer">
//           <div className="container">
//             <div className="woocommerce-tabs container tabbed-content">
//               <ul className="product-tabs small-nav-collapse tabs nav nav-uppercase nav-tabs nav-normal nav-left">
//                 <li className="additional_information_tab active">
//                   <a href="#tab-additional_information">Thông tin bổ sung</a>
//                 </li>
//               </ul>
//               <div className="panel entry-content active" id="tab-additional_information">
//                 <table className="shop_attributes">
//                   <tbody><tr>
//                     <th>SKU</th>
//                     <td><p>163406C</p>
//                     </td>
//                   </tr>
//                     <tr>
//                       <th>Chất liệu</th>
//                       <td><p>Textile</p>
//                       </td>
//                     </tr>
//                     <tr>
//                       <th>Giới tính</th>
//                       <td><p>Women</p>
//                       </td>
//                     </tr>
//                   </tbody></table>
//               </div>
//               <div className="tab-panels">


//               </div>{/* .tab-panels */}
//             </div>{/* .tabbed-content */}
//             <ul className="product-tabs small-nav-collapse tabs nav nav-uppercase nav-tabs nav-normal nav-left">

//               <li className="reviews_tab additional_information_tab active">
//                 <a href="#tab-additional_information">Đánh giá (0)</a>
//               </li>
//             </ul>
//             <div className="panel entry-content " id="tab-reviews">
//               <div className="row" id="reviews">
//                 <div className="col large-12" id="comments">
//                   <h3 className="normal">Đánh giá</h3>
//                   <p className="woocommerce-noreviews">Chưa có đánh giá nào.</p>
//                 </div>
//                 <div id="review_form_wrapper" className="large-12 col">
//                   <div id="review_form" className="col-inner">
//                     <div className="review-form-inner has-border">
//                       <div id="respond" className="comment-respond">
//                         <h3 id="" className="comment-reply-title">Hãy là người đầu tiên nhận xét “Chuck 70 Archive Prints Hi” <small><a rel="nofollow" id="cancel-comment-reply-link" href="" style={{ display: 'none' }}>Hủy</a></small></h3>			<form method="post" id="commentform" className="comment-form" noValidate>
//                           <div>
//                             <h1 className="rating_heading">đánh giá</h1>
//                             <div className="star_-rating">
//                               <button className="star">☆</button>
//                               <button className="star">☆</button>
//                               <button className="star">☆</button>
//                               <button className="star">☆</button>
//                               <button className="star">☆</button>
//                               <button className="star">☆</button>
//                               <p className="current_rating">0 of 5</p>
//                             </div>
//                           </div>
//                           <p className="comment-form-comment"><label htmlFor="comment">Nhận xét của bạn&nbsp;<span className="required">*</span></label><textarea id="comment" name="comment" cols={45} rows={8} required defaultValue={""} /></p><p className="comment-form-author"><label htmlFor="author">Tên&nbsp;<span className="required">*</span></label> <input id="author" name="author" type="text" size={30} required /></p>
//                           <p className=""><label htmlFor="email">Email</label> <input id="" name="email" type="email" size={50} required /></p>
//                           <p className="form-submit"><input name="submit" type="submit" id="submit" className="submit" defaultValue="Gửi đi" /> <input type="hidden" name="comment_post_ID" defaultValue={897} id="comment_post_ID" />
//                             <input type="hidden" name="comment_parent" id="comment_parent" defaultValue={0} />
//                           </p>			</form>
//                       </div>{/* #respond */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="related related-products-wrapper product-section">
//               <h3 className="product-section-title container-width product-section-title-related pt-half pb-half uppercase">
//                 Sản phẩm tương tự  </h3>
//               <div className=" large-columns-5 medium-columns-3 small-columns-2 row-small slider row-slider slider-nav-reveal slider-nav-push flickity-enabled is-draggable" data-flickity-options="{&quot;imagesLoaded&quot;: true, &quot;groupCells&quot;: &quot;100%&quot;, &quot;dragThreshold&quot; : 5, &quot;cellAlign&quot;: &quot;left&quot;,&quot;wrapAround&quot;: true,&quot;prevNextButtons&quot;: true,&quot;percentPosition&quot;: true,&quot;pageDots&quot;: false, &quot;rightToLeft&quot;: false, &quot;autoPlay&quot; : false}" tabIndex={0}>
//                 <div className="flickity-viewport" style={{ height: '310.05px', touchAction: 'pan-y' }}><div className="flickity-slider" style={{ left: 0, transform: 'translateX(-100%)' }}><div className="product-small col has-hover post-897 product type-product status-publish has-post-thumbnail product_cat-chuck-07s-nu product_cat-nu instock shipping-taxable purchasable product-type-simple" aria-selected="false" style={{ position: 'absolute', left: '160%' }}>
//                   <div className="col-inner">
//                     <div className="badge-container absolute left top z-1">
//                     </div>
//                     <div className="product-small box ">
//                       <div className="box-image">
//                         <div className="image-fade_in_back">
//                           <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-70-archive-prints-hi-2/">
//                             <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" />				</a>
//                         </div>
//                       </div>{/* box-image */}
//                       <div className="box-text box-text-products text-center grid-style-2">
//                         <div className="title-wrapper"><p className="name product-title"><a href="http://mauweb.monamedia.net/converse/san-pham/chuck-70-archive-prints-hi-2/">Chuck 70 Archive Prints Hi</a></p></div><div className="price-wrapper">
//                           <span className="price"><span className="woocommerce-Price-amount amount">1,800,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></span>
//                         </div><div className="add-to-cart-button"><a href="/converse/san-pham/chuck-taylor-all-star-70-full-gator-hi-2/?add-to-cart=897" rel="nofollow" data-product_id={897} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small">Thêm vào giỏ</a></div>		</div>{/* box-text */}
//                     </div>{/* box */}
//                   </div>{/* .col-inner */}
//                 </div>
//                   <div className="product-small col has-hover post-904 product type-product status-publish has-post-thumbnail product_cat-classic-nu product_cat-nu instock shipping-taxable purchasable product-type-simple" aria-selected="false" style={{ position: 'absolute', left: '180%' }}>
//                     <div className="col-inner">
//                       <div className="badge-container absolute left top z-1">
//                       </div>
//                       <div className="product-small box ">
//                         <div className="box-image">
//                           <div className="image-fade_in_back">
//                             <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-classic-13/">
//                               <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-4-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" /><img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-4-1-300x225.jpg" className="show-on-hover absolute fill hide-for-small back-image" />				</a>
//                           </div>
//                           <div className="image-tools is-small top right show-on-hover">
//                           </div>
//                           <div className="image-tools is-small hide-for-small bottom left show-on-hover">
//                           </div>
//                           <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
//                           </div>
//                         </div>{/* box-image */}
//                         <div className="box-text box-text-products text-center grid-style-2">
//                           <div className="title-wrapper"><p className="name product-title"><a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-classic-13/">Chuck Taylor Classic</a></p></div><div className="price-wrapper">
//                             <span className="price"><span className="woocommerce-Price-amount amount">1,250,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></span>
//                           </div><div className="add-to-cart-button"><a href="/converse/san-pham/chuck-taylor-all-star-70-full-gator-hi-2/?add-to-cart=904" rel="nofollow" data-product_id={904} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small">Thêm vào giỏ</a></div>		</div>{/* box-text */}
//                       </div>{/* box */}
//                     </div>{/* .col-inner */}
//                   </div><div className="product-small col has-hover post-903 product type-product status-publish has-post-thumbnail product_cat-classic-nu product_cat-nu last instock shipping-taxable purchasable product-type-simple" aria-selected="false" style={{ position: 'absolute', left: '40%' }}>
//                     <div className="col-inner">
//                       <div className="badge-container absolute left top z-1">
//                       </div>
//                       <div className="product-small box ">
//                         <div className="box-image">
//                           <div className="image-fade_in_back">
//                             <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-classic-12/">
//                               <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-5-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" /><img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-5-1-300x225.jpg" className="show-on-hover absolute fill hide-for-small back-image" />				</a>
//                           </div>
//                           <div className="image-tools is-small top right show-on-hover">
//                           </div>
//                           <div className="image-tools is-small hide-for-small bottom left show-on-hover">
//                           </div>
//                           <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
//                           </div>
//                         </div>{/* box-image */}
//                         <div className="box-text box-text-products text-center grid-style-2">
//                           <div className="title-wrapper"><p className="name product-title"><a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-classic-12/">Chuck Taylor Classic</a></p></div><div className="price-wrapper">
//                             <span className="price"><span className="woocommerce-Price-amount amount">1,250,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></span>
//                           </div><div className="add-to-cart-button"><a href="/converse/san-pham/chuck-taylor-all-star-70-full-gator-hi-2/?add-to-cart=903" rel="nofollow" data-product_id={903} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small">Thêm vào giỏ</a></div>		</div>{/* box-text */}
//                       </div>{/* box */}
//                     </div>{/* .col-inner */}
//                   </div><div className="product-small col has-hover post-916 product type-product status-publish has-post-thumbnail product_cat-nu product_cat-sunbaked-nu first instock shipping-taxable purchasable product-type-simple" aria-selected="false" style={{ position: 'absolute', left: '60%' }}>
//                     <div className="col-inner">
//                       <div className="badge-container absolute left top z-1">
//                       </div>
//                       <div className="product-small box ">
//                         <div className="box-image">
//                           <div className="image-fade_in_back">
//                             <a href="http://mauweb.monamedia.net/converse/san-pham/one-star-sunbaked-5/">
//                               <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-4-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" /><img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-4-1-300x225.jpg" className="show-on-hover absolute fill hide-for-small back-image" />				</a>
//                           </div>
//                           <div className="image-tools is-small top right show-on-hover">
//                           </div>
//                           <div className="image-tools is-small hide-for-small bottom left show-on-hover">
//                           </div>
//                           <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
//                           </div>
//                         </div>{/* box-image */}
//                         <div className="box-text box-text-products text-center grid-style-2">
//                           <div className="title-wrapper"><p className="name product-title"><a href="http://mauweb.monamedia.net/converse/san-pham/one-star-sunbaked-5/">One Star Sunbaked</a></p></div><div className="price-wrapper">
//                             <span className="price"><span className="woocommerce-Price-amount amount">1,600,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></span>
//                           </div><div className="add-to-cart-button"><a href="/converse/san-pham/chuck-taylor-all-star-70-full-gator-hi-2/?add-to-cart=916" rel="nofollow" data-product_id={916} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small">Thêm vào giỏ</a></div>		</div>{/* box-text */}
//                       </div>{/* box */}
//                     </div>{/* .col-inner */}
//                   </div><div className="product-small col has-hover post-923 product type-product status-publish has-post-thumbnail product_cat-nu product_cat-psy-kicks-nu instock shipping-taxable purchasable product-type-simple" aria-selected="false" style={{ position: 'absolute', left: '80%' }}>
//                     <div className="col-inner">
//                       <div className="badge-container absolute left top z-1">
//                       </div>
//                       <div className="product-small box ">
//                         <div className="box-image">
//                           <div className="image-fade_in_back">
//                             <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-70-psy-kicks-ox-4/">
//                               <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/men-psy-1-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" /><img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-1-1-300x225.jpg" className="show-on-hover absolute fill hide-for-small back-image" />				</a>
//                           </div>
//                           <div className="image-tools is-small top right show-on-hover">
//                           </div>
//                           <div className="image-tools is-small hide-for-small bottom left show-on-hover">
//                           </div>
//                           <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
//                           </div>
//                         </div>{/* box-image */}
//                         <div className="box-text box-text-products text-center grid-style-2">
//                           <div className="title-wrapper"><p className="name product-title"><a href="http://mauweb.monamedia.net/converse/san-pham/chuck-70-psy-kicks-ox-4/">Chuck 70 Psy-Kicks Ox</a></p></div><div className="price-wrapper">
//                             <span className="price"><span className="woocommerce-Price-amount amount">2,800,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></span>
//                           </div><div className="add-to-cart-button"><a href="/converse/san-pham/chuck-taylor-all-star-70-full-gator-hi-2/?add-to-cart=923" rel="nofollow" data-product_id={923} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small">Thêm vào giỏ</a></div>		</div>{/* box-text */}
//                       </div>{/* box */}
//                     </div>{/* .col-inner */}
//                   </div><div className="product-small col has-hover post-902 product type-product status-publish has-post-thumbnail product_cat-classic-nu product_cat-nu instock shipping-taxable purchasable product-type-simple is-selected" aria-selected="true" style={{ position: 'absolute', left: '100%' }}>
//                     <div className="col-inner">
//                       <div className="badge-container absolute left top z-1">
//                       </div>
//                       <div className="product-small box ">
//                         <div className="box-image">
//                           <div className="image-fade_in_back">
//                             <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-classic-11/">
//                               <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-6-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" /><img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-6-1-300x225.jpg" className="show-on-hover absolute fill hide-for-small back-image" />				</a>
//                           </div>
//                           <div className="image-tools is-small top right show-on-hover">
//                           </div>
//                           <div className="image-tools is-small hide-for-small bottom left show-on-hover">
//                           </div>
//                           <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
//                           </div>
//                         </div>{/* box-image */}
//                         <div className="box-text box-text-products text-center grid-style-2">
//                           <div className="title-wrapper"><p className="name product-title"><a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-classic-11/">Chuck Taylor Classic</a></p></div><div className="price-wrapper">
//                             <span className="price"><span className="woocommerce-Price-amount amount">1,250,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></span>
//                           </div><div className="add-to-cart-button"><a href="/converse/san-pham/chuck-taylor-all-star-70-full-gator-hi-2/?add-to-cart=902" rel="nofollow" data-product_id={902} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small">Thêm vào giỏ</a></div>		</div>{/* box-text */}
//                       </div>{/* box */}
//                     </div>{/* .col-inner */}
//                   </div><div className="product-small col has-hover post-901 product type-product status-publish has-post-thumbnail product_cat-classic-nu product_cat-nu last instock shipping-taxable purchasable product-type-simple is-selected" aria-selected="true" style={{ position: 'absolute', left: '120%' }}>
//                     <div className="col-inner">
//                       <div className="badge-container absolute left top z-1">
//                       </div>
//                       <div className="product-small box ">
//                         <div className="box-image">
//                           <div className="image-fade_in_back">
//                             <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-classic-10/">
//                               <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-7-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" /><img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-7-1-300x225.jpg" className="show-on-hover absolute fill hide-for-small back-image" />				</a>
//                           </div>
//                           <div className="image-tools is-small top right show-on-hover">
//                           </div>
//                           <div className="image-tools is-small hide-for-small bottom left show-on-hover">
//                           </div>
//                           <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
//                           </div>
//                         </div>{/* box-image */}
//                         <div className="box-text box-text-products text-center grid-style-2">
//                           <div className="title-wrapper"><p className="name product-title"><a href="http://mauweb.monamedia.net/converse/san-pham/chuck-taylor-classic-10/">Chuck Taylor Classic</a></p></div><div className="price-wrapper">
//                             <span className="price"><span className="woocommerce-Price-amount amount">1,250,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></span>
//                           </div><div className="add-to-cart-button"><a href="/converse/san-pham/chuck-taylor-all-star-70-full-gator-hi-2/?add-to-cart=901" rel="nofollow" data-product_id={901} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small">Thêm vào giỏ</a></div>		</div>{/* box-text */}
//                       </div>{/* box */}
//                     </div>{/* .col-inner */}
//                   </div><div className="product-small col has-hover post-922 product type-product status-publish has-post-thumbnail product_cat-nu product_cat-psy-kicks-nu first instock shipping-taxable purchasable product-type-simple is-selected" aria-selected="true" style={{ position: 'absolute', left: '140%' }}>
//                     <div className="col-inner">
//                       <div className="badge-container absolute left top z-1">
//                       </div>
//                       <div className="product-small box ">
//                         <div className="box-image">
//                           <div className="image-fade_in_back">
//                             <a href="http://mauweb.monamedia.net/converse/san-pham/chuck-70-psy-kicks-ox-3/">
//                               <img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-2-300x225.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" /><img width={300} height={225} src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-2-1-300x225.jpg" className="show-on-hover absolute fill hide-for-small back-image" />				</a>
//                           </div>
//                           <div className="image-tools is-small top right show-on-hover">
//                           </div>
//                           <div className="image-tools is-small hide-for-small bottom left show-on-hover">
//                           </div>
//                           <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
//                           </div>
//                         </div>{/* box-image */}
//                         <div className="box-text box-text-products text-center grid-style-2">
//                           <div className="title-wrapper"><p className="name product-title"><a href="http://mauweb.monamedia.net/converse/san-pham/chuck-70-psy-kicks-ox-3/">Chuck 70 Psy-Kicks Ox</a></p></div><div className="price-wrapper">
//                             <span className="price"><span className="woocommerce-Price-amount amount">1,800,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></span>
//                           </div><div className="add-to-cart-button"><a href="/converse/san-pham/chuck-taylor-all-star-70-full-gator-hi-2/?add-to-cart=922" rel="nofollow" data-product_id={922} className="ajax_add_to_cart add_to_cart_button product_type_simple button primary is-flat mb-0 is-small">Thêm vào giỏ</a></div>		</div>{/* box-text */}
//                       </div>{/* box */}
//                     </div>{/* .col-inner */}
//                   </div>
//                 </div>
//                 </div>
//               </div>
//             </div>

//           </div>{/* container */}
//         </div>{/* product-footer */}
//       </div>



//     </>
//   )
// }

// export default DetailProduct
import React from 'react'

type Props = {}

const detailProduct = (props: Props) => {
  return (
    <div>detailProduct</div>
  )
}

export default detailProduct