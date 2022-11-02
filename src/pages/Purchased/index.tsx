/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./styles.module.css";
type Props = {};

const Purchased = (props: Props) => {
  return (
    <div>
      <div id="main" className="">
        <div id="content" className="blog-wrapper blog-archive page-wrapper">
          <header className="archive-page-header">
            <div className="row">
              <div className="large-12 text-center col">
                <h1 className="page-title is-large uppercase">
                  <span className="bg-white">Sản Phẩm đã mua: </span>{" "}
                </h1>
              </div>
            </div>
          </header>
          {/* .page-header */}

          <div className="row row-large row-divided ">
            <div className="post-sidebar large-3 col">
              <div id="secondary" className="widget-area " role="complementary">
                <aside id="search-2" className="widget widget_search">
                  <form
                    method="get"
                    className="searchform"
                    action="#"
                    role="search"
                  >
                    <div className="flex-row relative">
                      <div className="flex-col flex-grow">
                        <input
                          type="search"
                          className="search-field mb-0"
                          name="s"
                          value=""
                          id="s"
                          placeholder="Tìm kiếm&hellip;"
                        />
                      </div>
                      {/* .flex-col */}
                      <div className="flex-col">
                        <button
                          type="submit"
                          className="ux-search-submit submit-button secondary button icon mb-0"
                        >
                          <i className="icon-search"></i>{" "}
                        </button>
                      </div>
                      {/* .flex-col */}
                    </div>
                    {/* .flex-row */}
                    <div className="live-search-results text-left z-top"></div>
                  </form>
                </aside>
                <aside
                  id="flatsome_recent_posts-4"
                  className="widget flatsome_recent_posts"
                >
                  <span className="widget-title bg-white ">
                    <span className="bg-white">Lịch sử mua hàng</span>
                  </span>
                  <div className="is-divider small"></div>{" "}
                  <ul>
                    <li className="recent-blog-posts-li">
                      <div className="flex-row recent-blog-posts align-top pt-half pb-half">
                        <div className="flex-col flex-grow">
                          <a href="#" title="#">
                            Ngày 2/10/2022
                          </a>
                        </div>
                      </div>
                      {/* .flex-row */}
                    </li>

                    <li className="recent-blog-posts-li">
                      <div className="flex-row recent-blog-posts align-top pt-half pb-half">
                        <div className="flex-col flex-grow">
                          <a href="#" title="#">
                            Ngày 3/10/2022
                          </a>
                        </div>
                      </div>
                    </li>

                    <li className="recent-blog-posts-li">
                      <div className="flex-row recent-blog-posts align-top pt-half pb-half">
                        <div className="flex-col flex-grow">
                          <a href="#" title="#">
                            Ngày 5/10/2022
                          </a>
                        </div>
                      </div>
                    </li>

                    <li className="recent-blog-posts-li">
                      <div className="flex-row recent-blog-posts align-top pt-half pb-half">
                        <div className="flex-col flex-grow">
                          <a href="#" title="#">
                            Ngày 7/10/2022
                          </a>
                        </div>
                      </div>
                    </li>

                    <li className="recent-blog-posts-li">
                      <div className="flex-row recent-blog-posts align-top pt-half pb-half">
                        <div className="flex-col flex-grow">
                          <a href="#" title="#">
                            Ngày 10/10/2022
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </aside>
              </div>
              {/* #secondary */}
            </div>
            {/* .post-sidebar */}
            <div className="large-9 col medium-col-first">
              <div
                id="row-285670635"
                className="row large-columns-3 medium-columns- small-columns-1 has-shadow row-box-shadow-1 row-box-shadow-2-hover row-masonry"
                data-packery-options='{"itemSelector": ".col", "gutter": 0, "presentageWidth" : true}'
              >
                <div className="col post-item" style={{ maxWidth: 400 }}>
                  <div className="col-inner">
                    <a href="#" className="plain">
                      <div className="box box-text-bottom box-blog-post has-hover">
                        <div className="box-image">
                          <div
                            className="image-cover"
                            style={{ paddingTop: "56%" }}
                          >
                            <img
                              width="300"
                              height="225"
                              src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-300x225.jpg"
                              className="attachment-medium size-medium wp-post-image"
                              alt=""
                              srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-300x225.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-600x449.jpg 600w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1.jpg 624w"
                              sizes="(max-width: 300px) 100vw, 300px"
                            />
                          </div>
                        </div>
                        {/* .box-image */}
                        <div className="box-text text-left">
                          <div className="box-text-inner blog-post-inner">
                            <h5 className="post-title is-large ">
                              Converse 123
                            </h5>
                            <div className="is-divider"></div>
                            <p className="from_the_blog_excerpt ">
                              Price: 200.000
                            </p>
                            <p className="from_the_blog_excerpt ">
                              Quantity: 2
                            </p>
                            <p className="from_the_blog_excerpt ">
                              Total: 400.000
                            </p>
                          </div>
                          {/* .box-text-inner */}
                        </div>
                        {/* .box-text */}
                        <div className="badge absolute top post-date badge-circle">
                          <div
                            className="badge-inner"
                            style={{
                              color: "white",
                              padding: 10,
                              borderRadius: 20,
                              fontWeight: "bold",
                            }}
                          >
                            <span className="post-date-day bg-white">02</span>
                            <br />
                            <span className="post-date-month is-xsmall bg-white">
                              Th10
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* .box */}
                    </a>
                    {/* .link */}
                  </div>
                  {/* .col-inner */}
                </div>
                {/* .col */}
                <div className="col post-item" style={{ maxWidth: 400 }}>
                  <div className="col-inner">
                    <a href="#" className="plain">
                      <div className="box box-text-bottom box-blog-post has-hover">
                        <div className="box-image">
                          <div
                            className="image-cover"
                            style={{ paddingTop: "56%" }}
                          >
                            <img
                              width="300"
                              height="225"
                              src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-300x225.jpg"
                              className="attachment-medium size-medium wp-post-image"
                              alt=""
                              srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-300x225.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-600x449.jpg 600w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1.jpg 624w"
                              sizes="(max-width: 300px) 100vw, 300px"
                            />
                          </div>
                        </div>
                        {/* .box-image */}
                        <div className="box-text text-left">
                          <div className="box-text-inner blog-post-inner">
                            <h5 className="post-title is-large ">
                              Converse 123
                            </h5>
                            <div className="is-divider"></div>
                            <p className="from_the_blog_excerpt ">
                              Price: 200.000
                            </p>
                            <p className="from_the_blog_excerpt ">
                              Quantity: 2
                            </p>
                            <p className="from_the_blog_excerpt ">
                              Total: 400.000
                            </p>
                          </div>
                          {/* .box-text-inner */}
                        </div>
                        {/* .box-text */}
                        <div className="badge absolute top post-date badge-circle">
                          <div
                            className="badge-inner"
                            style={{
                              color: "white",
                              padding: 10,
                              borderRadius: 20,
                              fontWeight: "bold",
                            }}
                          >
                            <span className="post-date-day bg-white">02</span>
                            <br />
                            <span className="post-date-month is-xsmall bg-white">
                              Th10
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* .box */}
                    </a>
                    {/* .link */}
                  </div>
                  {/* .col-inner */}
                </div>
                {/* .col */}
                <div className="col post-item" style={{ maxWidth: 400 }}>
                  <div className="col-inner">
                    <a href="#" className="plain">
                      <div className="box box-text-bottom box-blog-post has-hover">
                        <div className="box-image">
                          <div
                            className="image-cover"
                            style={{ paddingTop: "56%" }}
                          >
                            <img
                              width="300"
                              height="225"
                              src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-300x225.jpg"
                              className="attachment-medium size-medium wp-post-image"
                              alt=""
                              srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-300x225.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-600x449.jpg 600w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1.jpg 624w"
                              sizes="(max-width: 300px) 100vw, 300px"
                            />
                          </div>
                        </div>
                        {/* .box-image */}
                        <div className="box-text text-left">
                          <div className="box-text-inner blog-post-inner">
                            <h5 className="post-title is-large ">
                              Converse 123
                            </h5>
                            <div className="is-divider"></div>
                            <p className="from_the_blog_excerpt ">
                              Price: 200.000
                            </p>
                            <p className="from_the_blog_excerpt ">
                              Quantity: 2
                            </p>
                            <p className="from_the_blog_excerpt ">
                              Total: 400.000
                            </p>
                          </div>
                          {/* .box-text-inner */}
                        </div>
                        {/* .box-text */}
                        <div className="badge absolute top post-date badge-circle">
                          <div
                            className="badge-inner"
                            style={{
                              color: "white",
                              padding: 10,
                              borderRadius: 20,
                              fontWeight: "bold",
                            }}
                          >
                            <span className="bg-white post-date-day">02</span>
                            <br />
                            <span className="bg-white post-date-month is-xsmall">
                              Th10
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* .box */}
                    </a>
                    {/* .link */}
                  </div>
                  {/* .col-inner */}
                </div>
                {/* .col */}
                <div className="col post-item" style={{ maxWidth: 400 }}>
                  <div className="col-inner">
                    <a href="#" className="plain">
                      <div className="box box-text-bottom box-blog-post has-hover">
                        <div className="box-image">
                          <div
                            className="image-cover"
                            style={{ paddingTop: "56%" }}
                          >
                            <img
                              width="300"
                              height="225"
                              src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-300x225.jpg"
                              className="attachment-medium size-medium wp-post-image"
                              alt=""
                              srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-300x225.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-600x449.jpg 600w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1.jpg 624w"
                              sizes="(max-width: 300px) 100vw, 300px"
                            />
                          </div>
                        </div>
                        {/* .box-image */}
                        <div className="box-text text-left">
                          <div className="box-text-inner blog-post-inner">
                            <h5 className="post-title is-large ">
                              Converse 123
                            </h5>
                            <div className="is-divider"></div>
                            <p className="from_the_blog_excerpt ">
                              Price: 200.000
                            </p>
                            <p className="from_the_blog_excerpt ">
                              Quantity: 2
                            </p>
                            <p className="from_the_blog_excerpt ">
                              Total: 400.000
                            </p>
                          </div>
                          {/* .box-text-inner */}
                        </div>
                        {/* .box-text */}
                        <div className="badge absolute top post-date badge-circle">
                          <div
                            className="badge-inner"
                            style={{
                              color: "white",
                              padding: 10,
                              borderRadius: 20,
                              fontWeight: "bold",
                            }}
                          >
                            <span className="post-date-day bg-white">02</span>
                            <br />
                            <span className="post-date-month is-xsmall bg-white">
                              Th10
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* .box */}
                    </a>
                    {/* .link */}
                  </div>
                  {/* .col-inner */}
                </div>
                {/* .col */}
                <div className="col post-item" style={{ maxWidth: 400 }}>
                  <div className="col-inner">
                    <a href="#" className="plain">
                      <div className="box box-text-bottom box-blog-post has-hover">
                        <div className="box-image">
                          <div
                            className="image-cover"
                            style={{ paddingTop: "56%" }}
                          >
                            <img
                              width="300"
                              height="225"
                              src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-300x225.jpg"
                              className="attachment-medium size-medium wp-post-image"
                              alt=""
                              srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-300x225.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-600x449.jpg 600w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1.jpg 624w"
                              sizes="(max-width: 300px) 100vw, 300px"
                            />
                          </div>
                        </div>
                        {/* .box-image */}
                        <div className="box-text text-left">
                          <div className="box-text-inner blog-post-inner">
                            <h5 className="post-title is-large ">
                              Converse 123
                            </h5>
                            <div className="is-divider"></div>
                            <p className="from_the_blog_excerpt ">
                              Price: 200.000
                            </p>
                            <p className="from_the_blog_excerpt ">
                              Quantity: 2
                            </p>
                            <p className="from_the_blog_excerpt ">
                              Total: 400.000
                            </p>
                          </div>
                          {/* .box-text-inner */}
                        </div>
                        {/* .box-text */}
                        <div className="badge absolute top post-date badge-circle">
                          <div
                            className="badge-inner"
                            style={{
                              color: "white",
                              padding: 10,
                              borderRadius: 20,
                              fontWeight: "bold",
                            }}
                          >
                            <span className="post-date-day bg-white">02</span>
                            <br />
                            <span className="post-date-month is-xsmall bg-white">
                              Th10
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* .box */}
                    </a>
                    {/* .link */}
                  </div>
                  {/* .col-inner */}
                </div>
                {/* .col */}
                <div className="col post-item" style={{ maxWidth: 400 }}>
                  <div className="col-inner">
                    <a href="#" className="plain">
                      <div className="box box-text-bottom box-blog-post has-hover">
                        <div className="box-image">
                          <div
                            className="image-cover"
                            style={{ paddingTop: "56%" }}
                          >
                            <img
                              width="300"
                              height="225"
                              src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-300x225.jpg"
                              className="attachment-medium size-medium wp-post-image"
                              alt=""
                              srcSet="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-300x225.jpg 300w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-600x449.jpg 600w, http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1.jpg 624w"
                              sizes="(max-width: 300px) 100vw, 300px"
                            />
                          </div>
                        </div>
                        {/* .box-image */}
                        <div className="box-text text-left">
                          <div className="box-text-inner blog-post-inner">
                            <h5 className="post-title is-large ">
                              Converse 123
                            </h5>
                            <div className="is-divider"></div>
                            <p className="from_the_blog_excerpt ">
                              Price: 200.000
                            </p>
                            <p className="from_the_blog_excerpt ">
                              Quantity: 2
                            </p>
                            <p className="from_the_blog_excerpt ">
                              Total: 400.000
                            </p>
                          </div>
                          {/* .box-text-inner */}
                        </div>
                        {/* .box-text */}
                        <div className="badge absolute top post-date badge-circle">
                          <div
                            className="badge-inner"
                            style={{
                              color: "white",
                              padding: 10,
                              borderRadius: 20,
                              fontWeight: "bold",
                            }}
                          >
                            <span className="post-date-day bg-white">02</span>
                            <br />
                            <span className="post-date-month is-xsmall bg-white">
                              Th10
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* .box */}
                    </a>
                    {/* .link */}
                  </div>
                  {/* .col-inner */}
                </div>
                {/* .col */}
              </div>
            </div>{" "}
            {/* .large-9 */}
          </div>
          {/* .row */}
        </div>
        {/* .page-wrapper .blog-wrapper */}
      </div>
      {/* #main */}
    </div>
  );
};

export default Purchased;
