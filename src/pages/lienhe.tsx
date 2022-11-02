import React from 'react'
import {WhatsAppOutlined,FacebookOutlined,InstagramOutlined,TwitterOutlined,WeiboCircleOutlined,WifiOutlined} from '@ant-design/icons';
import '../lienhe.css'
type Props = {}
const Lienhe = (props: Props) => {

  return (<>
    <div className="row" style={{ backgroundColor: "white" }}>
      <div className="col medium-6 small-12 large-6" data-animate="fadeInLeft" data-animated="true">
        <div className="col-inner">
          <h3 style={{ color: "red" }}>THÔNG TIN LIÊN HỆ </h3>
          <div className="icon-box featured-box icon-box-left text-left" style={{ margin: '0px 0px 10px' }}>
            <div className="icon-box-img" style={{ width: 20 }}>
              <div className="icon">
                <div className="icon-inner">
                  <svg id="Layer_1" style={{}} viewBox="0 0 440 440" x="0px" y="0px" xmlSpace="preserve" version="1.1">
                    <g>
                      <path d="M 340.57 241.141 c -54.826 0 -99.429 44.604 -99.429 99.43 c 0 54.825 44.604 99.429 99.429 99.429 S 440 395.396 440 340.571 C 440 285.745 395.396 241.141 340.57 241.141 Z M 328.122 395.104 l -58.807 -58.807 l 21.213 -21.213 l 37.594 37.594 l 56.035 -56.034 l 21.213 21.213 L 328.122 395.104 Z" />
                      <path d="M 166.62 119.397 c -24.813 0 -45 20.187 -45 45 s 20.187 45 45 45 c 24.813 0 45 -20.187 45 -45 S 191.433 119.397 166.62 119.397 Z" />
                      <path d="M 326.984 211.853 c 4.067 -14.39 6.256 -29.559 6.256 -45.234 C 333.24 74.745 258.494 0 166.62 0 C 74.746 0 0 74.745 0 166.619 c 0 38.93 13.421 74.781 35.878 103.177 L 166.62 434.174 l 48.641 -61.155 c -2.688 -10.373 -4.12 -21.247 -4.12 -32.448 C 211.141 273.791 261.978 218.665 326.984 211.853 Z M 91.62 164.397 c 0 -41.355 33.645 -75 75 -75 c 41.355 0 75 33.645 75 75 s -33.645 75 -75 75 C 125.265 239.397 91.62 205.752 91.62 164.397 Z" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="icon-box-text last-reset">
                <p>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
              </div>
            </div>
            {/* .icon-box */}
            <div
              className="icon-box featured-box icon-box-left text-left"
              style={{ margin: "0px 0px 10px" }}
            >
              <div className="icon-box-img" style={{ width: 20 }}>
                <div className="icon">
                  <div className="icon-inner">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Capa_1"
                      style={{}}
                      viewBox="0 0 612 612"
                      x="0px"
                      y="0px"
                      width="612px"
                      height="612px"
                      xmlSpace="preserve"
                      version="1.1"
                    >
                      <g>
                        <path d="M 586.923 256.013 c -7.959 -8.24 -16.655 -13.074 -24.53 -15.916 c 10.798 -62.807 8.812 -97.901 -246.643 -178.322 C 55.771 -20.07 26.688 13.85 5.274 81.869 L 1.622 93.471 c -5.794 18.406 4.43 38.025 22.836 43.82 l 83.405 26.257 c 18.407 5.794 38.025 -4.43 43.82 -22.836 l 3.652 -11.602 c 16.587 -52.69 97.773 -28.905 143.76 -14.428 c 45.986 14.477 126.155 41.49 109.568 94.18 l -3.653 11.601 c -5.794 18.406 4.43 38.025 22.836 43.82 l 83.405 26.257 c 18.406 5.795 38.025 -4.429 43.82 -22.835 l 2.369 -8.038 c 4.933 2.036 10.229 5.149 15.123 10.215 c 17.553 18.182 23.378 53.308 16.842 101.589 c -11.335 83.657 -44.21 113.537 -79.221 123.481 v -14.553 c 0 -14.775 -3.693 -29.4 -11.181 -42.179 c -34.94 -59.797 -84.556 -112.856 -147.598 -159.626 v -35.34 c 0 -2.745 -2.246 -4.992 -4.991 -4.992 h -51.862 c -2.795 0 -4.992 2.247 -4.992 4.992 v 35.139 h -59.199 v -35.139 c 0 -2.745 -2.246 -4.992 -4.992 -4.992 H 173.46 c -2.746 0 -4.992 2.247 -4.992 4.992 v 35.139 C 105.326 325.264 55.661 378.322 20.67 438.22 C 13.183 450.998 9.49 465.623 9.49 480.397 v 32.894 c 0 46.87 37.985 84.855 84.854 84.855 h 330.984 c 46.136 0 83.581 -36.824 84.745 -82.679 c 56.115 -13.143 87.95 -58.928 99.111 -141.316 C 616.681 318.816 609.189 279.069 586.923 256.013 Z M 346.544 481.271 l -33.304 -11.858 c 3.533 -7.12 5.57 -15.115 5.57 -23.606 c 0 -29.35 -23.809 -53.159 -53.208 -53.159 c -29.35 0 -53.209 23.81 -53.209 53.159 c 0 29.4 23.859 53.21 53.209 53.21 c 10.87 0 20.965 -3.271 29.386 -8.859 l 18.266 30.026 c -13.76 8.835 -30.087 14.022 -47.652 14.022 c -48.817 0 -88.349 -39.582 -88.349 -88.398 c 0 -48.767 39.533 -88.349 88.349 -88.349 c 48.816 0 88.399 39.583 88.399 88.349 C 354.001 458.429 351.311 470.408 346.544 481.271 Z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="icon-box-text last-reset">
                <p>1900106688</p>
              </div>
            </div>
            <div className="icon-box-text last-reset">
              <p>1900106688</p>
            </div>
          </div>{/* .icon-box */}
          <div className="icon-box featured-box icon-box-left text-left" style={{ margin: '0px 0px 10px' }}>
            <div className="icon-box-img" style={{ width: 20 }}>
              <div className="icon">
                <div className="icon-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" style={{}} viewBox="0 0 308.728 308.728" x="0px" y="0px" width="308.728px" height="308.728px" xmlSpace="preserve" version="1.1">
            

                      <g>
                        <path d="M 340.57 241.141 c -54.826 0 -99.429 44.604 -99.429 99.43 c 0 54.825 44.604 99.429 99.429 99.429 S 440 395.396 440 340.571 C 440 285.745 395.396 241.141 340.57 241.141 Z M 328.122 395.104 l -58.807 -58.807 l 21.213 -21.213 l 37.594 37.594 l 56.035 -56.034 l 21.213 21.213 L 328.122 395.104 Z" />
                        <path d="M 166.62 119.397 c -24.813 0 -45 20.187 -45 45 s 20.187 45 45 45 c 24.813 0 45 -20.187 45 -45 S 191.433 119.397 166.62 119.397 Z" />
                        <path d="M 326.984 211.853 c 4.067 -14.39 6.256 -29.559 6.256 -45.234 C 333.24 74.745 258.494 0 166.62 0 C 74.746 0 0 74.745 0 166.619 c 0 38.93 13.421 74.781 35.878 103.177 L 166.62 434.174 l 48.641 -61.155 c -2.688 -10.373 -4.12 -21.247 -4.12 -32.448 C 211.141 273.791 261.978 218.665 326.984 211.853 Z M 91.62 164.397 c 0 -41.355 33.645 -75 75 -75 c 41.355 0 75 33.645 75 75 s -33.645 75 -75 75 C 125.265 239.397 91.62 205.752 91.62 164.397 Z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="icon-box-text last-reset">
                <p>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
              </div>
            </div>{/* .icon-box */}
            <div className="icon-box featured-box icon-box-left text-left" style={{ margin: '0px 0px 10px' }}>
              <div className="icon-box-img" style={{ width: 20 }}>
                <div className="icon">
                  <div className="icon-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" style={{}} viewBox="0 0 612 612" x="0px" y="0px" width="612px" height="612px" xmlSpace="preserve" version="1.1">
                      <g>
                        <path d="M 586.923 256.013 c -7.959 -8.24 -16.655 -13.074 -24.53 -15.916 c 10.798 -62.807 8.812 -97.901 -246.643 -178.322 C 55.771 -20.07 26.688 13.85 5.274 81.869 L 1.622 93.471 c -5.794 18.406 4.43 38.025 22.836 43.82 l 83.405 26.257 c 18.407 5.794 38.025 -4.43 43.82 -22.836 l 3.652 -11.602 c 16.587 -52.69 97.773 -28.905 143.76 -14.428 c 45.986 14.477 126.155 41.49 109.568 94.18 l -3.653 11.601 c -5.794 18.406 4.43 38.025 22.836 43.82 l 83.405 26.257 c 18.406 5.795 38.025 -4.429 43.82 -22.835 l 2.369 -8.038 c 4.933 2.036 10.229 5.149 15.123 10.215 c 17.553 18.182 23.378 53.308 16.842 101.589 c -11.335 83.657 -44.21 113.537 -79.221 123.481 v -14.553 c 0 -14.775 -3.693 -29.4 -11.181 -42.179 c -34.94 -59.797 -84.556 -112.856 -147.598 -159.626 v -35.34 c 0 -2.745 -2.246 -4.992 -4.991 -4.992 h -51.862 c -2.795 0 -4.992 2.247 -4.992 4.992 v 35.139 h -59.199 v -35.139 c 0 -2.745 -2.246 -4.992 -4.992 -4.992 H 173.46 c -2.746 0 -4.992 2.247 -4.992 4.992 v 35.139 C 105.326 325.264 55.661 378.322 20.67 438.22 C 13.183 450.998 9.49 465.623 9.49 480.397 v 32.894 c 0 46.87 37.985 84.855 84.854 84.855 h 330.984 c 46.136 0 83.581 -36.824 84.745 -82.679 c 56.115 -13.143 87.95 -58.928 99.111 -141.316 C 616.681 318.816 609.189 279.069 586.923 256.013 Z M 346.544 481.271 l -33.304 -11.858 c 3.533 -7.12 5.57 -15.115 5.57 -23.606 c 0 -29.35 -23.809 -53.159 -53.208 -53.159 c -29.35 0 -53.209 23.81 -53.209 53.159 c 0 29.4 23.859 53.21 53.209 53.21 c 10.87 0 20.965 -3.271 29.386 -8.859 l 18.266 30.026 c -13.76 8.835 -30.087 14.022 -47.652 14.022 c -48.817 0 -88.349 -39.582 -88.349 -88.398 c 0 -48.767 39.533 -88.349 88.349 -88.349 c 48.816 0 88.399 39.583 88.399 88.349 C 354.001 458.429 351.311 470.408 346.544 481.271 Z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="icon-box-text last-reset">
               
                <p> <WhatsAppOutlined style={{fontSize:"20px"}}/>1900106688</p>
              </div>
            </div>{/* .icon-box */}
            <div className="icon-box featured-box icon-box-left text-left" style={{ margin: '0px 0px 10px' }}>
              <div className="icon-box-img" style={{ width: 20 }}>
                <div className="icon">
                  <div className="icon-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" style={{}} viewBox="0 0 308.728 308.728" x="0px" y="0px" width="308.728px" height="308.728px" xmlSpace="preserve" version="1.1">
                      <g>
                        <g>
                          <path d="M 153.188 27.208 c -37.562 1.134 -130 55.057 -144.495 63.65 l -7.981 32.664 l 40.236 28.809 l -7.733 -27.01 l 189.62 -54.288 l 26.895 93.949 l 58.098 -41.331 l -10.004 -32.698 C 283.848 82.656 190.877 28.342 153.188 27.208 Z" />
                          <polygon points="308.728,281.52 308.728,195.199 308.728,160.289 308.728,136.255 306.809,137.621 252.882,175.988 222.101,197.888 226.557,202.27 231.942,207.581 237.326,212.886 243.833,219.288 307.02,281.52" />
                          <polygon points="0,137.415 0,150.224 0,281.52 1.479,281.52 60.832,221.766 66.667,215.892 72.127,210.391 77.588,204.891 85.158,197.271 45.731,169.042 8.147,142.135 0,136.299" />
                          <path d="M 231.905 222.705 l -9.692 -9.545 l -5.39 -5.311 l -5.39 -5.31 l -1.382 -1.366 l -5.489 -5.4 l -0.954 -0.938 c -1.599 -1.576 -3.27 -3.053 -4.989 -4.461 c -12.777 -10.457 -28.655 -16.158 -45.399 -16.158 c -16.767 0 -32.616 5.69 -45.394 16.137 c -1.938 1.582 -3.813 3.265 -5.598 5.058 l -0.334 0.338 l -5.363 5.399 l -3.452 3.48 l -5.458 5.495 l -5.46 5.495 l -17.921 18.046 l -47.276 47.593 h 274.396 L 231.905 222.705 Z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="icon-box-text last-reset">
                <p>vietan@gmail.com</p>
              </div>
            </div>{/* .icon-box */}
            <div className="icon-box featured-box icon-box-left text-left" style={{ margin: '0px 0px 10px' }}>
              <div className="icon-box-img" style={{ width: 20 }}>
                <div className="icon">
                  <div className="icon-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" style={{}} viewBox="0 0 430.123 430.123" x="0px" y="0px" width="430.123px" height="430.123px" xmlSpace="preserve" version="1.1">
                      <g>
                        <path id="Skype" d="M 412.164 246.198 c 1.605 -10.155 2.45 -20.544 2.45 -31.148 c 0 -110.215 -89.342 -199.555 -199.56 -199.555 c -10.576 0 -20.995 0.871 -31.141 2.458 C 165.534 6.581 143.842 0 120.595 0 C 53.996 0 0.005 53.984 0.005 120.59 c 0 23.242 6.585 44.916 17.952 63.332 c -1.573 10.172 -2.439 20.528 -2.439 31.132 c 0 110.223 89.34 199.536 199.532 199.536 c 10.585 0 21.007 -0.816 31.152 -2.417 c 18.398 11.35 40.072 17.949 63.314 17.949 c 66.617 0 120.602 -53.998 120.602 -120.602 C 430.123 286.269 423.542 264.6 412.164 246.198 Z M 309.801 305.81 c -8.442 12.153 -20.843 21.65 -37.047 28.479 c -16.237 6.847 -35.428 10.254 -57.59 10.254 c -26.562 0 -48.554 -4.648 -65.913 -14.034 c -12.305 -6.721 -22.313 -15.737 -30.007 -26.98 c -7.71 -11.252 -11.619 -22.271 -11.619 -33.015 c 0 -6.338 2.417 -11.85 7.122 -16.344 c 4.754 -4.527 10.877 -6.796 18.104 -6.796 c 5.92 0 11.005 1.783 15.145 5.316 c 4.109 3.532 7.556 8.667 10.375 15.443 c 3.379 7.85 7.049 14.412 10.954 19.648 c 3.881 5.171 9.343 9.488 16.417 12.867 c 6.996 3.388 16.307 5.082 27.958 5.082 c 15.945 0 28.831 -3.449 38.693 -10.253 c 9.912 -6.866 14.673 -15.22 14.673 -25.314 c 0 -8.051 -2.567 -14.445 -7.831 -19.43 c -5.312 -5.05 -12.172 -8.896 -20.685 -11.579 c -8.546 -2.711 -20.02 -5.586 -34.399 -8.615 c -19.308 -4.214 -35.456 -9.119 -48.533 -14.752 c -13.094 -5.654 -23.522 -13.383 -31.251 -23.146 c -7.745 -9.859 -11.607 -22.113 -11.607 -36.627 c 0 -13.84 4.077 -26.217 12.239 -36.989 c 8.158 -10.802 19.961 -19.07 35.351 -24.829 c 15.336 -5.757 33.391 -8.637 54.075 -8.637 c 16.541 0 30.849 1.914 42.96 5.722 c 12.078 3.836 22.146 8.898 30.196 15.25 c 7.999 6.338 13.885 13.023 17.613 20.038 c 3.725 7.036 5.601 13.908 5.601 20.614 c 0 6.235 -2.417 11.89 -7.127 16.846 c -4.709 4.963 -10.733 7.493 -17.768 7.47 c -6.342 0 -11.317 -1.463 -14.767 -4.56 c -3.36 -2.996 -6.889 -7.766 -10.706 -14.414 c -4.825 -9.276 -10.604 -16.503 -17.324 -21.672 c -6.543 -5.073 -17.338 -7.714 -32.359 -7.682 c -13.898 0 -25.018 2.84 -33.411 8.394 c -8.445 5.643 -12.482 12.19 -12.501 19.861 c 0.014 4.807 1.396 8.86 4.177 12.326 c 2.824 3.498 6.753 6.529 11.803 9.084 c 5.052 2.595 10.191 4.602 15.355 6.046 c 5.225 1.481 13.894 3.622 25.944 6.457 c 15.112 3.257 28.819 6.896 41.136 10.862 c 12.293 3.986 22.784 8.793 31.451 14.52 c 8.736 5.71 15.564 12.99 20.438 21.783 c 4.909 8.807 7.354 19.564 7.354 32.222 C 322.509 279.968 318.263 293.676 309.801 305.81 Z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="icon-box-text last-reset">
                <p>Việt anh </p>
              </div>
            </div>{/* .icon-box */}
            <div className="social-icons follow-icons">
            <FacebookOutlined style={{fontSize:"30px",padding:"20px"}}/>
            <InstagramOutlined style={{fontSize:"30px"}}/>
            <TwitterOutlined style={{fontSize:"30px",padding:"20px"}}/>
            <WeiboCircleOutlined style={{fontSize:"30px"}}/>
            <WifiOutlined style={{fontSize:"30px",padding:"20px"}}/></div>
          </div>
        </div>
        <div className="col medium-6 small-12 large-6" data-animate="fadeInRight" data-animated="true">
          <div className="col-inner">
            <div className="wpcf7" id="wpcf7-f43-p20-o1" role="form" lang="vi" dir="ltr">
              <div className="screen-reader-response" />
              <form className="wpcf7-form" method="post">
                <div style={{ display: 'none' }}>
                  <input name="_wpcf7" type="hidden" defaultValue={43} />
                  <input name="_wpcf7_version" type="hidden" defaultValue="5.0.5" />
                  <input name="_wpcf7_locale" type="hidden" defaultValue="vi" />
                  <input name="_wpcf7_unit_tag" type="hidden" defaultValue="wpcf7-f43-p20-o1" />
                  <input name="_wpcf7_container_post" type="hidden" defaultValue={20} />
                </div>
                <div className="form-ct clear">
                  <div className="form-row w50">
                    <span className="wpcf7-form-control-wrap text-name"><input name="text-name" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form_lien_he" id="text-name" aria-invalid="false" aria-required="true" type="text" size={40} placeholder="Họ và tên" /></span>
                  </div>
                  <div className="form-row w50">
                    <span className="wpcf7-form-control-wrap email-contact"><input name="email-contact" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form_lien_he" id="email-contact" aria-invalid="false" aria-required="true" type="email" size={40} placeholder="Email" /></span>
                  </div>
                  <div className="form-row w50">
                    <span className="wpcf7-form-control-wrap tel-contact"><input name="tel-contact" className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form_lien_he" id="tel-contact" aria-invalid="false" aria-required="true" type="tel" size={40} placeholder="Số điện thoại" /></span>
                  </div>
                  <div className="form-row w50">
                    <span className="wpcf7-form-control-wrap text-address"><input name="text-address" className="wpcf7-form-control wpcf7-text form_lien_he" id="text-address" aria-invalid="false" type="text" size={40} placeholder="Địa chỉ" /></span>
                  </div>
                  <div className="form-row">
                    <span className="wpcf7-form-control-wrap textarea-noidung"><textarea name="textarea-noidung" className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form_lien_he" id="textarea-noidung" aria-invalid="false" aria-required="true" placeholder="Lời nhắn" rows={10} cols={40} /></span>
                  </div>
                  <div className="form-row center-txt">
                    <input className="wpcf7-form-control wpcf7-submit form_lien_he" id="bt-gui" type="submit" defaultValue="Gửi" /><span className="ajax-loader" />
                  </div>
                </div>
                <div className="wpcf7-response-output wpcf7-display-none" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="col small-12 large-12">
        <div className="col-inner" style={{ margin: '0px 0px -25px' }}>
          <p><iframe width="100%" height={400} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4478791335196!2d106.65261921472937!3d10.77696826213081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed189fa855d%3A0xf63e15bfce46baef!2sC%C3%B4ng+ty+TNHH+-+MONA+MEDIA!5e0!3m2!1svi!2s!4v1524639789314" frameBorder={0} allowFullScreen style={{ border: '0px currentColor', borderImage: 'none' }} /></p>
        </div>
      </div>

      <div>
      </div>
    </>


  )
}

export default Lienhe;
