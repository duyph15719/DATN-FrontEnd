import React from "react";
import NavBarNews from "../../components/navbarnews/navbarnews";

import "./News.css";

const NewsDetail = () => {
  return (
    <div className="news__page">
      <NavBarNews />
      <div className="content__news">
        <div className="header__content__news">
          <div className="category__news">
            <a href="">tin tức</a>
          </div>
          <h3 className="title__content__news">
            Converse sẽ mang Golf le Fleur* Chuck 70 về Việt Nam?
          </h3>
        </div>
        <div className="content__item__news">
          <img
            src="https://drake.vn/image/catalog/H%C3%ACnh%20content/Converse-Chuck-70-Rivals/converse-chuck-70-rivals-04.jpg"
            alt=""
          />
          <h4 className="title__item__news__content">
            Nhờ cú leak vừa rồi từ nơi sản sinh ra các thành phẩm của Converse –
            nhà máy Converse và ngay sau đó là màn đính chính từ tài khoản IG
            hãng thời trang danh tiếng của rapper Tyler huyền thoại @golfwang
            với cái nhìn tận mắt qua các hình ảnh items thuộc BST và chỉ vài
            tiếng sau đã nhận được hơn 10.000 lượt like
          </h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            nostrum delectus maxime, neque quos minima reiciendis, corrupti quae
            ducimus, rerum ipsam quas voluptatibus odit facilis corporis!
            Tempore pariatur repellendus recusandae.
          </p>
          <img
            src="https://drake.vn/image/catalog/H%C3%ACnh%20content/Converse-Chuck-70-Rivals/converse-chuck-70-rivals-04.jpg"
            alt=""
          />{" "}
          <br />
          <img
            src="https://drake.vn/image/catalog/H%C3%ACnh%20content/Converse-Chuck-70-Rivals/converse-chuck-70-rivals-04.jpg"
            alt=""
          />{" "}
          <br />
          <img
            src="https://drake.vn/image/catalog/H%C3%ACnh%20content/Converse-Chuck-70-Rivals/converse-chuck-70-rivals-04.jpg"
            alt=""
          />{" "}
          <br />
          <img
            src="https://drake.vn/image/catalog/H%C3%ACnh%20content/Converse-Chuck-70-Rivals/converse-chuck-70-rivals-04.jpg"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            distinctio sequi numquam? Nisi corporis, illum deleniti tempore
            ratione minima eveniet quas illo voluptas exercitationem recusandae.
            Distinctio explicabo sed libero provident.
          </p>
        </div>

        <div className="comment__news">
          <h3 className="title__comment__news">Tra loi</h3>
          <p>
            Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc
            được đánh dấu *
          </p>
          <div className="item__form__comment">
            <label htmlFor="">Binh luan</label>
            <textarea name="" id=""></textarea>
          </div>
          <div className="list__form__inp">
            <div className="item__form__inp">
              <label htmlFor="">Ten</label>
              <input type="text" />
            </div>
            <div className="item__form__inp">
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <div className="item__form__inp">
              <label htmlFor="">Trang Web</label>
              <input type="text" />
            </div>
          </div>
          <div>
            <button className="btn__comment">phan hoi</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
