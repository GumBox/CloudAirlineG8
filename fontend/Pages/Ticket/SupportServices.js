import React from "react";
import { Link } from "react-router-dom";




function SupportServices() {


    return (
        <>

            <div className="tab-header bg-warning">
                <div className="container">
                    <ul class="nav nav-pills nav-justified bg-warning">
                        <Link to='ticket'>
                            <li class="nav-link" aria-current="page">
                                <i class="fa-solid fa-plane-circle-check me-2" />
                                <small>Xem lại chuyến bay</small>
                            </li>
                        </Link>
                        <li className="nav-link ">
                            <i class="fa-solid fa-person-walking-luggage me-2" ><sub><i class="fa-solid fa-circle-check"></i></sub></i>
                            <small>Thông tin khách</small>
                        </li>
                        <li className="nav-link active">
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
                        <li className="nav-link" ><i class="fa-solid fa-cart-arrow-down"></i></li>
                        <li className="nav-link" ></li>


                    </ul>
                </div>
            </div>


            <div className="container">

                <div className="card row mt-4">
                    <div className="card-header">
                        DỊCH VỤ ĐÓN TIỄN TẠI SÂN BAY
                    </div>
                    <form className="row ">
                        <p style={{ opacity: .75 }}>
                            Quý khách có thể mua Hành lý trả trước 6 tiếng trước giờ khởi hành chuyến bay
                            <br />
                            Quý khách nhập một trong các dữ liệu sau:</p>
                        <div className="card-body col-sm-12 col-md-3">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="electronicTicket" placeholder="Số vé điện tử" />
                                <label for="electronicTicket" style={{ opacity: .75 }}>Số vé điện tử (738xxxxxxxxxx) </label>
                            </div>
                        </div>
                        <div className="card-body col-sm-12 col-md-3">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="electronicTicket" placeholder="Số vé điện tử" />
                                <label for="electronicTicket" style={{ opacity: .75 }}>Số vé điện tử (738xxxxxxxxxx) </label>
                            </div>
                        </div>
                        <div className="card-body col-sm-12 col-md-3">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="electronicTicket" placeholder="Số vé điện tử" />
                                <label for="electronicTicket" style={{ opacity: .75 }}>Số vé điện tử (738xxxxxxxxxx) </label>
                            </div>
                        </div>
                        <div className="card-body col-sm-12 col-md-3">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="electronicTicket" placeholder="Số vé điện tử" />
                                <label for="electronicTicket" style={{ opacity: .75 }}>Số vé điện tử (738xxxxxxxxxx) </label>
                            </div>
                        </div>
                        <div>
                            <input type="submit" className="btn btn-warning col-md-2 float-end mb-3" value="Tìm kiếm" />
                        </div>
                    </form>
                </div>


                <div className="card row mt-4">
                    <div className="card-header">
                        HÀNH LÝ TRẢ TRƯỚC
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <p className=" col-md-9">
                                Dịch vụ đón tiễn nhanh tại sân bay, hỗ trợ các thủ tục liên quan đến hành khách, hành lý <br />
                                trước khi bay/sau khi đáp chuyến bay, giúp rút ngắn tối đa thời gian chờ đợi/làm thủ tục tại sân bay.<br />
                                Dịch vụ có xe đưa đón từ sân bay đến khách sạn, hoặc dịch vụ thuê xe du lịch từ đối tác của Cloud Airline.
                            </p>
                            <p className="float-end col-md-3 my-auto">
                                <a href="https://react-3c2gxk.stackblitz.io/testdrive/" target="_blank" title="Đặt dịch vụ">
                                    <button className="btn btn-warning">Đặt dịch vụ</button>
                                </a>
                            </p>
                        </div>
                    </div>

                </div>

                <div className="card row mt-4">
                    <div className="card-header">
                        Dịch vụ đặc biệt
                    </div>
                    <div className="card-body">
                        <p className="mx-auto">
                            Vietnam Airlines không ngừng cải thiện chất lượng phục vụ các dịch vụ đặc biệt với mong muốn đem đến trải nghiệm tốt nhất cho mọi khách hàng.<br />
                            Vui lòng xem thông tin chi tiết về
                            <Link to="#"> dịch vụ đặc biệt.</Link>
                            <p className="mt-4">
                                Để đăng ký dịch vụ đặc biệt, Quý khách vui lòng khai báo thông tin
                                <Link to="#"> tại đây.</Link>
                            </p>
                        </p>
                    </div>


                </div>


                <div className=" mt-5 text-end  ">
                    <Link to="#">
                        <button className="btn btn-outline-primary back-button me-4">
                            <i class="fa-solid fa-arrow-left-long text-black"></i>
                        </button>
                    </Link>
                    <Link to="/ticket/seat">
                        <button className="btn btn-outline-warning back-button text-warning">
                            Tiếp tục
                        </button>
                    </Link>

                </div>
            </div>

        </>
    )
}
export default SupportServices;