import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/Logo.png';
import pay from '../images/Pay.png';





export default function Header() {



    return (
        <>

            {/* Header */}
            <nav id="top-nav" class="navbar navbar-expand-lg">
                <div class="container">

                    <button class="navbar-toggler" type="button"
                        data-bs-toggle="collapse" data-bs-target="#right-top-nav"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="left-top-nav">
                        <img src={logo} className="" width="20%"></img>

                    </div>

                    <div class="collapse navbar-collapse" id="right-top-nav">
                        <ul class="navbar-nav ms-auto">
                            <li>
                                <Link to="#" className="nav-link active header-link">
                                    Ưu đãi
                                </Link>
                            </li>

                            <li>
                                <Link to="#" className="nav-link header-link">
                                    Thông tin hành trình
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link header-link">
                                    Dịch vụ
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link header-link">
                                    Giới thiệu
                                </Link>
                            </li>

                            <li>
                                <Link to="#" className="nav-link header-link">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </Link>
                            </li>
                            <li className="nav-link">
                                |
                            </li>
                            <li>
                                <Link to="#" className="nav-link header-link">
                                    VN
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link header-link">
                                    EN
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* END Header */}



            <div className="container-fluid">
                {/* Banner */}


                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src={logo} class="d-block w-50 mx-auto" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={logo} class="d-block w-50 mx-auto" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={logo} class="d-block w-50 mx-auto" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>

                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>

                    </button>
                </div>
                {/* END banner */}


                {/* Menu */}
                <div className="container" id="menu-header">

                    {/* MENU-HEADER */}

                    <ul className="list-group list-group-horizontal"  >
                        <li class="list-group-item pill active" data-bs-toggle="collapse" data-bs-target="#buyTicket"  >
                            <i class="fa-solid fa-plane " />
                            Mua vé</li>
                        <li class="list-group-item " data-bs-toggle="collapse" data-bs-target="#locationManagement" >
                            <i class="fa-solid fa-book" />
                            Quản lý đặt chỗ
                        </li>
                        <li class="list-group-item" data-bs-toggle="collapse" data-bs-target="#service" >
                            <i class="fa-solid fa-bag-shopping" />
                            Dịch vụ hỗ trợ
                        </li>
                        <li class="list-group-item" data-bs-toggle="collapse" data-bs-target="#procedure" >
                            <i class="fa-solid fa-credit-card" />
                            Làm thủ tục
                        </li>
                        <li class="list-group-item" data-bs-toggle="collapse" data-bs-target="#statusFlight" >
                            <i class="fa-regular fa-clock" />
                            Tình trạng chuyến bay
                        </li>
                    </ul>
                    {/* END */}

                    {/* MENU FOOTER */}
                    <div class="collapse show" id="buyTicket" data-bs-toggle="collapse" data-bs-parent="#menu-header">
                        <div class="card card-body">
                            <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <p class="nav-link active" data-bs-toggle="collapse" data-bs-target="#plane">Chuyến bay</p>
                                </li>
                                <li class="nav-item">
                                    <p class="nav-link " data-bs-toggle="collapse" data-bs-target="#fly-hotel"> Chuyến bay+Khách sạn</p>
                                </li>
                                <li class="nav-item">
                                    <p class="nav-link" data-bs-toggle="collapse" data-bs-target="#buyTicket">Khách sạn</p>
                                </li>
                                <li class="nav-item">
                                    <p class="nav-link" data-bs-toggle="collapse" data-bs-target="#buyTicket">Chuyến bay</p>
                                </li>
                            </ul>

                            {/* BUY TICKET */}
                            <div class="collapse show" id="plane" data-bs-parent="#buyTicket">
                                <form className="row" >
                                    <p className="col-sm-12 col-md-2  ">
                                        Loại vé
                                        <select name="ticketType" className="form-control"  >
                                            <option name=" ">
                                                Một chiều
                                            </option>

                                            <option name=" ">
                                                Khứ hồi
                                            </option>

                                            <option name=" ">
                                                Nhiều chặng
                                            </option>


                                        </select>
                                    </p>
                                    <p className="col-sm-10  col-md-2 ">
                                        Điểm đi

                                        <select name="ticketType" className="form-control "  >
                                            <option name=" ">
                                                Hà Nội
                                            </option>

                                            <option name=" ">
                                                TP.HCM
                                            </option>

                                            <option name=" ">
                                                Vinh
                                            </option>


                                        </select>
                                    </p>
                                    <p className="col-sm-10  col-md-2 ">
                                        Điểm đến

                                        <select name="ticketType" className="form-control "  >
                                            <option name=" ">
                                                Hà Nội
                                            </option>

                                            <option name=" ">
                                                TP.HCM
                                            </option>

                                            <option name=" ">
                                                Vinh
                                            </option>


                                        </select>
                                    </p>

                                    <p className="col-sm-10  col-md-2   ">
                                        Ngày đi
                                        <input type="date" className="form-control" name="" />
                                    </p>

                                    <p className="col-sm-10  col-md-2   ">
                                        Ngày về
                                        <input type="date" className="form-control" name="" />
                                    </p>

                                    <p className="col-sm-10  col-md-2  ">
                                        Số lượng hành khách
                                        <input type="number" className="form-control" value="1" />
                                    </p>
                                    <input type="submit" value="Tìm chuyến bay" className="btn btn-warning col-md-2" />

                                    <p className="mt-3 row">
                                        Các hình thức thanh toán:

                                        <img src={pay} className='col-sm-1 col-md-12 ms-3'>
                                        </img>
                                    </p>

                                    <p class="alert alert-warning alert-dismissible fade show " role="alert">
                                        <strong>THÔNG TIN QUAN TRỌNG:</strong>
                                        <br />
                                        Quý khách đang sử dụng website tại thị trường <strong>Việt Nam </strong>và đồng tiền thanh toán là <strong> Đồng Việt Nam (VNĐ)</strong>.
                                        <br />
                                        Theo quy định của Bộ Tài chính thì chỉ các giao dịch thanh toán bằng Đồng Việt Nam (VNĐ) mới được xuất hóa đơn GTGT điện tử.
                                        Nếu cần thanh toán bằng đồng tiền khác, Quý khách vui lòng đổi Quốc gia/Vùng (tại đây).
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </p>


                                </form>
                            </div>
                            <div className="collapse" id="fly-hotel" data-bs-parent="#buyTicket">
                                alo
                            </div>

                        </div>
                    </div>
                    {/* locationManagement */}
                    <div className="collapse" id="locationManagement" data-bs-toggle="collapse" data-bs-parent="#menu-header" >


                    </div>

                </div>
                {/* END menu */}


            </div>

        </>


    )

}

