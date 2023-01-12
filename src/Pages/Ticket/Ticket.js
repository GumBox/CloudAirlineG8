import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../../Css/Tickets.css";


function Ticket() {

    const [flightDate, setFlightDate] = useState(null);
    const [flightTime, setFlightTime] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8080/mainticket/ticket/')
            .then((response) => response.json())
            .then((response) => {
                setFlightDate(response)
                setFlightTime(response)
                console.log(response)
            });

    }, [])
    var flightDates = []
    if (flightDate != null) {

        flightDates = flightDate.map((item) => {
            return (
                <button className="date-flight">
                    {item.flightDate}
                </button>
            )

        })
    }
    var flightTimes = []
    if (flightTime != null) {

        flightTimes = flightTime.map((item) => {
            return (
                <div className="card card-body  m-2">
                    <div className="row">
                        <p className="h5 col-sm-12 col-md-1"> {item.flight.timeFrom}</p>
                        <p className="h4 col-sm-12 col-md-1"> <i class="fa-solid fa-plane text-warning"></i></p>
                        <p className="h5 col-sm-12 col-md-1"> {item.flight.timeTo}</p>
                        <p className="col-sm-12 col-md-3">{item.flight.plane.planeBrand} {item.flight.plane.planeCode} </p>
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
                                                {item.ticketPrice} <sup>VND</sup>
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
                                                {item.ticketPrice} <sup>VND</sup>
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
            )
        })
    }





    return (
        <>

            {/* HEADER & CAROUSEL */}
            <div className="bg-warning">

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

                        {flightTimes}
                    </div>

                </div>
            </div>

        </>
    )

}
export default Ticket;