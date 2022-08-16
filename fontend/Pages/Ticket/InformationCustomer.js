import React from "react";
import { Link } from "react-router-dom";




function InfomationCustomer() {


    return (
        <>
            <div className="tab-header bg-warning">
                <div className="container">
                    <ul class="nav nav-pills nav-justified bg-warning">
                        <Link to='ticket'>
                            <li class="nav-link" aria-current="page">
                                <i class="fa-solid fa-plane-circle-check me-2"></i>
                                <small>Xem lại chuyến bay</small>
                            </li>
                        </Link>
                        <li className="nav-link active">
                            <i class="fa-solid fa-person-walking-luggage me-2" ></i>
                            <small>Thông tin khách</small>
                        </li>
                        <li className="nav-link"></li>
                        <li className="nav-link"></li>
                        <li className="nav-link"></li>
                        <li className="nav-link"><i class="fa-solid fa-cart-arrow-down"></i></li>
                        <li className="nav-link"></li>

                    </ul>
                </div>
            </div>

            <div className="container mt-4">
                <div className="card">
                    <p className="card-body">
                        Dữ liệu cá nhân của Quý khách thu thập trên trang này được xử lý và lưu trữ bởi Cloud Airline cho mục đích và theo điều kiện đã được công bố tại Chính sách bảo mật thông tin của Cloud Airlines.<br />
                        Để tìm hiểu thêm về việc cách thức xử lý dữ liệu cá nhân của Quý khách và về các quyền của Quý khách (Quyền yêu cầu cung cấp thông tin, Quyền sửa đổi thông tin…), vui lòng đọc và chấp nhận
                        <Link to='#'>
                            Chính sách bảo mật thông tin
                        </Link> của chúng tôi.

                    </p>
                </div>

                <p className="h4 text-success mt-3">
                    Thông tin Hành khách
                </p>
                <p className="col-md-8">
                    Quý Khách vui lòng sử dụng tiếng Việt không dấu và không sử dụng các ký tự đặc biệt. Vui lòng nhập đầy đủ tên hành khách và những thông tin khác xuất hiện trên (các) giấy tờ tùy thân do chính phủ cấp của hành khách.
                </p>

                <div className="row">
                    <div className="col-md-8">
                        <div className="card ">
                            <div className="card-header">
                                Hành Khách
                            </div>
                            <div className="card-body">
                                <p>
                                    <i class="fa-solid fa-circle-exclamation me-2"></i>
                                    Lưu ý: * Trường bắt buộc nhập thông tin
                                </p>

                                <form className="row" >
                                    <p className="h5 mb-4">
                                        Thông tin cơ bản
                                    </p>
                                    <div class="form-floating mb-3 col-sm-12 col-md-2">
                                        <input type="text" class="form-control" id="nickName" placeholder="Danh xưng" />
                                        <label className="ms-2" for="nickName" style={{ opacity: .75 }}>Danh xưng *</label>
                                    </div>
                                    <div class="form-floating col-sm-12 col-md-5">
                                        <input type="text" class="form-control" id="lastName" placeholder="Tên Đệm và Tên" />
                                        <label className="ms-2" for="lastName" style={{ opacity: .75 }}>Tên Đệm và Tên *</label>
                                    </div>
                                    <div class="form-floating col-sm-12 col-md-5">
                                        <input type="text" class="form-control" id="firstName" placeholder="Họ" />
                                        <label className="ms-2" for="firstName" style={{ opacity: .75 }}>Họ *</label>
                                    </div>
                                    <div class="form-floating col-sm-12 col-md-6">
                                        <input type="text" class="form-control" id="dob" placeholder="Giới tính" />
                                        <label className="ms-2" for="dob" style={{ opacity: .75 }}>Ngày Tháng Năm sinh *</label>
                                    </div>
                                    <div class="form-floating col-sm-12 col-md-6">
                                        <input type="text" class="form-control" id="sex" placeholder="Giới tính" />
                                        <label className="ms-2" for="sex" style={{ opacity: .75 }}>Giới tính *</label>
                                    </div>
                                    <div class="form-check mt-2 ms-3">
                                        <input class="form-check-input" type="checkbox" value="" id="ckeck" />
                                        <label class="form-check-label" for="check">
                                            Lưu thông tin đăng nhập
                                        </label>
                                    </div>

                                    <hr className="text-success my-3"></hr>

                                    <p className="h5 mb-4">
                                        Thông tin liên hệ
                                    </p>

                                    <div class="form-floating col-sm-12 col-md-6 mb-3">
                                        <input type="text" class="form-control" id="numberPhone" placeholder="Sos điện thoại " />
                                        <label className="ms-2" for="numberPhone" style={{ opacity: .75 }}>Số điện thoại *</label>
                                    </div>
                                    <div class="form-floating col-sm-12 col-md-6 mb-3">
                                        <input type="text" class="form-control" id="numberPhone" placeholder="Sos điện thoại " />
                                        <label className="ms-2" for="numberPhone" style={{ opacity: .75 }}>Số điện thoại 2 </label>
                                    </div>
                                    <div class="form-floating col-sm-12 col-md-6 mb-3">
                                        <input type="email" class="form-control" id="email" placeholder="Email " />
                                        <label className="ms-2" for="email" style={{ opacity: .75 }}>Email *</label>
                                    </div>
                                    <div class="form-floating col-sm-12 col-md-6 mb-3">
                                        <input type="email" class="form-control" id="email" placeholder="Email " />
                                        <label className="ms-2" for="email" style={{ opacity: .75 }}>Email </label>
                                    </div>
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" id="ckeck" />
                                        <label class="form-check-label" for="check">
                                            <small>
                                                Tôi đồng ý nhận các thông ti quảng cáo qua email được nêu chi tiết trong
                                                <Link to="#"> Chính sách bảo mật </Link>
                                                (như thông báo, bản tin, khuyến mãi, các ưu đãi khác liên quan đebé sản phẩm và dịch vụ
                                                của Cloud Airline và các đối tác của Cloud Airline)
                                            </small>
                                        </label>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                    <div className=" col-md-4">
                        <div className="card">
                            <div className="card-header">
                                Chi tiết chuyến bay
                            </div>


                            <div class="accordion" id="flightInf">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#ticket" aria-expanded="true" aria-controls="collapseOne">
                                            HAN
                                            <i class="fa-solid fa-arrow-right-arrow-left mx-2"></i>
                                            SGN
                                        </button>
                                    </h2>
                                    <div id="ticket" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#flightInf">
                                        <div class="">
                                            <p className="bg-warning">
                                                <span className="text-success h6">Trở về</span>
                                                <span className="h6"> 05:00, 22 Thg 9 2022</span>
                                            </p>



                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#flightInf">
                                        <div class="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#flightInf">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div >

        </>


    )


}
export default InfomationCustomer