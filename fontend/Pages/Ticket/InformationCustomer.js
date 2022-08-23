import React from "react";
import { Link } from "react-router-dom";
import '../../Css/InfomationCustomer.css';




function InfomationCustomer() {


    return (
        <>
            <div className="tab-header bg-warning">
                <div className="container">
                    <ul class="nav nav-pills nav-justified bg-warning">
                        <Link to='/ticket/'>
                            <li class="nav-link" aria-current="page">
                                <i class="fa-solid fa-plane-circle-check me-2" />
                                <small>Xem lại chuyến bay</small>
                            </li>
                        </Link>
                        <li className="nav-link active ">
                            <i class="fa-solid fa-person-walking-luggage me-2" />
                            <small>Thông tin khách</small>
                        </li>
                        <li className="nav-link">
                            <i class="fa-solid fa-cart-flatbed-suitcase me-2"></i>
                            <small>Dịch vụ hỗ trợ</small>
                        </li>
                        <li className="nav-link">
                            <i class="fa-solid fa-couch me-2"></i>
                            Chọn chỗ ngồi
                        </li>
                        <li className="nav-link">
                            <i class="fa-solid fa-money-check-dollar me-2"></i>
                            Thanh toán

                        </li>
                        <li className="nav-link"><i class="fa-solid fa-cart-arrow-down"></i></li>
                        <li className="nav-link"></li>

                    </ul>
                </div>
            </div>

            <div className="container mt-4">
                <div className="card" id="oke">
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
                        <div className="card " id="oke">
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
                                        <select class="form-select" id="nickName" placeholder="Danh xưng">
                                            <option value="0">Anh/Chị</option>
                                            <option value="1">Cô/Chú</option>
                                            <option value="2">Ông/Bà</option>
                                        </select>
                                        <label className="ms-2" for="nickName" style={{ opacity: .75 }}>Danh xưng *</label>
                                    </div>
                                    <div class="form-floating col-sm-12 col-md-5">
                                        <input type="text" class="form-control" id="lastName" placeholder="Tên Đệm và Tên" required />
                                        <label className="ms-2" for="lastName" style={{ opacity: .75 }}>Tên Đệm và Tên *</label>
                                    </div>
                                    <div class="form-floating col-sm-12 col-md-5">
                                        <input type="text" class="form-control" id="firstName" placeholder="Họ" required />
                                        <label className="ms-2" for="firstName" style={{ opacity: .75 }}>Họ *</label>
                                    </div>
                                    <div class="form-floating col-sm-12 col-md-6">
                                        <input type="text" class="form-control" id="dob" placeholder="Giới tính" required />
                                        <label className="ms-2" for="dob" style={{ opacity: .75 }}>Ngày Tháng Năm sinh *</label>
                                    </div>
                                    <div class="form-floating col-sm-12 col-md-6">
                                        <input type="text" class="form-control" id="sex" placeholder="Giới tính" required />
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
                                        <input type="text" class="form-control" id="numberPhone" placeholder="Sos điện thoại " required />
                                        <label className="ms-2" for="numberPhone" style={{ opacity: .75 }}>Số điện thoại *</label>
                                    </div>
                                    <div class="form-floating col-sm-12 col-md-6 mb-3">
                                        <input type="text" class="form-control" id="numberPhone" placeholder="Sos điện thoại " required />
                                        <label className="ms-2" for="numberPhone" style={{ opacity: .75 }}>Số điện thoại 2 </label>
                                    </div>
                                    <div class="form-floating col-sm-12 col-md-6 mb-3">
                                        <input type="email" class="form-control" id="email" placeholder="Email " required />
                                        <label className="ms-2" for="email" style={{ opacity: .75 }}>Email *</label>
                                    </div>
                                    <div class="form-floating col-sm-12 col-md-6 mb-3">
                                        <input type="email" class="form-control" id="email" placeholder="Email " required />
                                        <label className="ms-2" for="email" style={{ opacity: .75 }}>Email </label>
                                    </div>
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" id="ckeck" required />
                                        <label class="form-check-label" for="check">
                                            <small>
                                                Tôi đồng ý nhận các thông ti quảng cáo qua email được nêu chi tiết trong
                                                <Link to="#"> Chính sách bảo mật </Link>
                                                (như thông báo, bản tin, khuyến mãi, các ưu đãi khác liên quan đebé sản phẩm và dịch vụ
                                                của Cloud Airline và các đối tác của Cloud Airline)
                                            </small>
                                        </label>
                                    </div>
                                    <div className="mt-3 ">
                                        <input type="submit" value="Hoàn thành" className="float-end btn btn-danger"></input>
                                    </div>

                                </form>


                            </div>

                        </div>
                        <div className="col-md-12 mt-5 text-end">
                            <Link to="">
                                <button className="btn btn-outline-primary back-button me-4">
                                    <i class="fa-solid fa-arrow-left-long text-black"></i>
                                </button>
                            </Link>
                            <Link to="/ticket/spServices">
                                <input type="submit" className="btn btn-outline-warning next-button text-warning " value="Tiếp tục" />
                            </Link>
                        </div>
                    </div>
                    <div className=" col-md-4">
                        <div className="card" id="oke">
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
                                    <div id="ticket" class="accordion-collapse collapse show" aria-labelledby="headingOne" >
                                        <div className="card-body" >
                                            <p className="h5">
                                                Hà Nội(HAN)
                                                Đà Nẵng(DAD)
                                            </p>
                                            <p>
                                                VN 151 Airbus A321
                                            </p>
                                            <small style={{ opacity: .75 }}>
                                                Hãng hàng không Cloud Airline
                                            </small>

                                        </div>
                                        <p className="bg-warning">
                                            Trở về 08:30, 21 Thg 9 2022
                                        </p>
                                        <div className="card-body" >
                                            <p className="h5">
                                                Hà Nội(HAN)
                                                Đà Nẵng(DAD)
                                            </p>
                                            <p>
                                                VN 151 Airbus A321
                                            </p>
                                            <small style={{ opacity: .75 }}>
                                                Hãng hàng không Cloud Airline
                                            </small>

                                        </div>
                                        <p className="bg-warning ">
                                            <p className="row">
                                                <small className="col-md-8 my-auto">Số vé</small>
                                                <p className="col-md-4 h5 text-success my-auto">5,396,000<sup>VND</sup></p>
                                            </p>
                                        </p>


                                    </div>
                                </div>
                                <div>

                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#discount" aria-expanded="false" aria-controls="collapseTwo">
                                            Giảm giá
                                        </button>
                                    </h2>
                                    <div id="discount" class="accordion-collapse collapse" aria-labelledby="headingTwo" >
                                        <div class="accordion-body">
                                            <div className="row">
                                                <p className="col-md-10">
                                                    Giảm giá
                                                </p>
                                                <p className="col-md-2">
                                                    0 <sup>VND</sup>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#VAT" aria-expanded="false" aria-controls="collapseThree">
                                            Thuế, phí và các khoản thu
                                        </button>
                                    </h2>
                                    <div id="VAT" class="accordion-collapse collapse" aria-labelledby="headingThree" >
                                        <div class="accordion-body">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <small>Thuế giá trị gia tăng</small><br />
                                                    <small>Phí soi chiếu an ninh hành khách, hành lý</small><br />
                                                    <small>Phí dịch vụ khách hàng</small><br />
                                                    <small>Phụ thu quản trị hệ thống</small><br />

                                                </div>
                                                <div className="col-md-3 text-center">
                                                    <small>300,000<sup>VND</sup></small><br />
                                                    <small>100,000<sup>VND</sup></small><br />
                                                    <small>200,000<sup>VND</sup></small><br />
                                                    <small>900,000<sup>VND</sup></small><br />

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="card-body row">
                                        <p className="h4 col-md-6">
                                            Tổng số tiền
                                        </p>
                                        <p className="h4 col-md-6 text-center">
                                            7,250,555<sup>VND</sup>
                                        </p>
                                    </div>
                                    <hr></hr>
                                    <p className="ms-2">
                                        Xem
                                        <Link to="#"> Quy định về giá vé </Link>
                                        ,
                                        <Link to='#'>Thông tin hành lý
                                        </Link> hiện đang áp dụng.
                                    </p>
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