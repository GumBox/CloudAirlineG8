import React from "react";
import { Link } from "react-router-dom";



function Seat() {


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
                        <li className="nav-link ">
                            <Link to="/ticket/infcustomer">
                                <i class="fa-solid fa-person-walking-luggage me-2" ><sub><i class="fa-solid fa-circle-check"></i></sub></i>
                                <small>Thông tin khách</small>
                            </Link>
                        </li>
                        <li className="nav-link ">
                            <Link to="/ticket/spServices/">
                                <i class="fa-solid fa-cart-flatbed-suitcase me-2"><sub><i class="fa-solid fa-circle-check"></i></sub></i>
                                <small>Dịch vụ hỗ trợ</small>
                            </Link>
                        </li>
                        <li className="nav-link active">
                            <i class="fa-solid fa-couch me-2"></i>
                            Chọn chỗ ngồi
                        </li>
                        <li className="nav-link">
                            <i class="fa-solid fa-money-check-dollar me-2"></i>
                            Thanh toán

                        </li>
                        <li className="nav-link" ><i class="fa-solid fa-cart-arrow-down"></i></li>
                        <li className="nav-link" ></li>


                    </ul>
                </div>
            </div>

        </>

    )

}
export default Seat;