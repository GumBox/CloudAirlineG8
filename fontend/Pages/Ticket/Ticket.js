import React from "react";
import { Link } from 'react-router-dom';
import "../../Css/Tickets.css";


function Ticket() {



    return (
        <>
            {/* HEADER & CAROUSEL */}
            <div className="tab-header">

                <div className="container">
                    <ul class="nav nav-pills nav-justified ">
                        <Link to='ticket'>
                            <li class="nav-link active" aria-current="page">
                                <i class="fa-solid fa-plane-up me-2"></i>
                                <small>Chọn chuyến bay</small>
                            </li>
                        </Link>
                        <li className="nav-link ">
                            <i class="fa-solid fa-person-walking-luggage me-2" />
                            <small>Thông tin khách </small>
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


            <div className="container">
                <div className="row">
                    <p className="h4 mt-4 title-header-flight">
                        Chọn chuyến bay
                    </p>
                    <p>
                        Chọn chuyến bay Đà Nẵng (DAD) - Hải Phòng (HPH), Việt Nam
                    </p>
                    <div className="card">
                        <p className="mt-1">
                            Tra cứu thông tin hành lý <a href="#">tại đây</a>
                        </p >
                        <p className="text-danger m-0 ">
                            Lưu ý: Giá dưới đây đã bao gồm thuế, phí
                        </p>
                        <p className="text-primary m-0">
                            + Phí Dịch Vụ Đặc Biệt<br />
                            + Thuế, Phí, Lệ phí & Phụ thu
                        </p>
                        <p>
                            Đồng tiền thanh toán hiển thị theo "Quốc gia/Vùng" đã chọn, Quý khách kiểm tra kỹ đồng tiền trước khi thanh toán
                        </p>
                    </div>

                    <p className="h4 my-4 title-header-flight">
                        Chuyến bay chiều đi
                    </p>
                    <div>
                        <div id="flightDate" class="carousel slide  " >
                            <div class="carousel-inner bg-danger ">
                                <div class="carousel-item active">

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            01 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            2 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            02 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            03 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            04 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            05 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            06 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                </div>
                                <div class="carousel-item">

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            07 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            8 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            09 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            10 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            11 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            12 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            13 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>
                                </div>

                                <div class="carousel-item">

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            14 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            15 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            16 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            17 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            18 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            19 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            20 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>
                                </div>

                                <div class="carousel-item">

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            21 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            22 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            23 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            24 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            25 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            26 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>

                                    <button type="button" className="col-md-1 date-flight">
                                        <p className="text-center time-ticket">
                                            27 Thg 09
                                        </p>
                                        <p className="text-center price-ticket">
                                            1,477,000 <small><sup>VND</sup></small>
                                        </p>
                                    </button>
                                </div>
                            </div>
                            <button class="carousel-prev" type="button" data-bs-target="#flightDate" data-bs-slide="prev">
                                <span class="carousel-button-prev" ><i class="fa-solid fa-chevron-left"></i></span>

                            </button>
                            <button class="carousel-next float-end " type="button" data-bs-target="#flightDate" data-bs-slide="next">
                                <span className="carousel-button-next" ><i class="fa-solid fa-chevron-right"></i></span>

                            </button>
                        </div>
                    </div>
                    {/* END */}

                    {/* TICKET */}
                    <div className="card">
                        <div className="card-header row">
                            <p className="col-sm-12 col-md-6">
                                20 kết quả
                            </p>
                            <p className="col-sm-12 col-md-3">
                                <button className="common h5 text-white">
                                    PHỔ THÔNG
                                </button>
                            </p>
                            <p className="col-sm-12 col-md-3">
                                <button className="trader h5 ">
                                    THƯƠNG GIA
                                </button>
                            </p>
                        </div>
                        <div className="row card-title ">
                            <small className="col-sm-12 col-md-8">
                                THỜI GIAN
                            </small>
                            <small className="col-sm-12 col-md-4">
                                Giá bằng VND và một chiều/ hai chiều
                                (theo hành khách).
                            </small>
                        </div>


                        <div className="card card-body  m-2">
                            <div className="row">
                                <p className="h4 col-sm-12 col-md-1"> 04:30</p>
                                <p className="h4 col-sm-12 col-md-1"> <i class="fa-solid fa-plane text-warning"></i></p>
                                <p className="h4 col-sm-12 col-md-1"> 04:30</p>
                                <p className="col-sm-12 col-md-3">VN 6033 - Airbus A320 </p>
                                <div class=" col-sm-12 col-md-3">
                                    <div className="card">

                                        <div class="card-header">
                                            <p className="text-center h4">
                                                PHỔ THÔNG
                                            </p>
                                        </div>

                                        <div class=" card-body">
                                            <p className="text-center">
                                                <Link to="/ticket/infcustomer">
                                                    <button className="btn btn-warning ">
                                                        1,7000,000 <sup>VND</sup>
                                                    </button>
                                                </Link>
                                            </p>
                                            <p className="text-center" data-bs-toggle="collapse" href="#show-table-common" aria-expanded="false" >
                                                <i class="fa-solid fa-chevron-down"></i>
                                            </p>
                                            <div className="collapse" id="show-table-common">
                                                <table className="table table-hover " >
                                                    <tbody>
                                                        <tr>
                                                            <td scope="row">Hành Lý Xách Tay</td>
                                                            <td>:17kg</td>

                                                        </tr>
                                                        <tr>
                                                            <td scope="row">Hành Lý Kí Gửi</td>
                                                            <td>:23kg</td>

                                                        </tr>
                                                        <tr>
                                                            <td scope="row">Hoàn Vé</td>
                                                            <td>:Không áp dụng</td>

                                                        </tr>
                                                        <tr>
                                                            <td scope="row">Đổi Vé</td>
                                                            <td>:Miễn phí</td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class=" col-sm-12 col-md-3 ">
                                    <div className="card">
                                        <div class="card-header">
                                            <p className="text-center h4">
                                                THƯƠNG GIA
                                            </p>
                                        </div>
                                        <div class=" card-body">
                                            <p className="text-center">
                                                <Link to="/ticket/infcustomer">
                                                    <button className="btn btn-warning ">
                                                        1,7000,000 <sup>VND</sup>
                                                    </button>
                                                </Link>
                                            </p>

                                            <p className="text-center" data-bs-toggle="collapse" href="#show-table-trader" aria-expanded="false" >
                                                <i class="fa-solid fa-chevron-down"></i>
                                            </p>
                                            <div className="collapse" id="show-table-trader">
                                                <table className="table table-hover">
                                                    <tbody>
                                                        <tr>
                                                            <td scope="row">Hành Lý Xách Tay</td>
                                                            <td>:17kg</td>

                                                        </tr>
                                                        <tr>
                                                            <td scope="row">Hành Lý Kí Gửi</td>
                                                            <td>:23kg</td>

                                                        </tr>
                                                        <tr>
                                                            <td scope="row">Hoàn Vé</td>
                                                            <td>:Không áp dụng</td>

                                                        </tr>
                                                        <tr>
                                                            <td scope="row">Đổi Vé</td>
                                                            <td>:Miễn phí</td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )

}
export default Ticket;