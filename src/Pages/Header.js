import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/Logo.png';
import pay from '../images/Pay.png';
import banner from '../images/banner.png';
import banner02 from '../images/Banner02.png';
import banner03 from '../images/Banner03.png';




export default function Header() {



    return (
        <>

            {/* Header */}
            <nav id="top-nav" class="navbar navbar-expand-lg">
                <div class="container">

                    <button class="navbar-toggler bg-secondary" type="button"
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
                            <img src={banner} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={banner02} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={banner03} class="d-block w-100 mx-auto" alt="..." />
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





            </div>

        </>


    )

}

