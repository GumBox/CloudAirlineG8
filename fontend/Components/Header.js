import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/Logo.png';




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
                        <Link to="/">
                            <img src={logo} className="" width="20%" />
                        </Link>
                    </div>

                    <div class="collapse navbar-collapse" id="right-top-nav">
                        <ul class="navbar-nav ms-auto">
                            <li>
                                <Link to="endow" className="nav-link active header-link">
                                    Ưu đãi
                                </Link>
                            </li>

                            <li>
                                <Link to="#" className="nav-link header-link">
                                    Thông tin hành trình
                                </Link>
                            </li>
                            <li>
                                <Link to="customer_care" className="nav-link header-link">
                                    Dịch vụ
                                </Link>
                            </li>
                            <li>
                                <Link to="company" className="nav-link header-link">
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





        </>


    )

}

