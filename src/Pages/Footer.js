import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import logo from '../images/Logo.png';
import footercss from '../Css/Footer.css';
import pay from '../images/Pay.png'
import certification1 from '../images/certification1.png'
import certification from '../images/certification.png'


const Footer = () => {
    return (
        <footer className="container-fluid mt-3">
            <div className='row footter-header'>
                <img src={logo} alt=".." className='logo-footer col-md-3 '>
                </img>
                <p className='col-md-9 mt-3'>
                    <p className='h4 text-primary'>Cloud Airline</p>

                    <span className='h6 '>Xin trân trọng cảm ơn sự đồng hành của quý khách hàng</span>
                </p>
            </div>
            <div className=" footer-body">
                <div className="container">



                    <div className='row' >
                        <div className="col-md-3 col-sm-6">


                            <li className="menu-item-title h4 ">Cloud Airline</li>
                            <li className="menu-item"><Link to='products'>Giới Thiệu Công Ty </Link></li>
                            <li className="menu-item"><Link to='products'>Đội Bay </Link></li>
                            <li className="menu-item"><Link to='products'>Đối Tác </Link></li>
                            <li className="menu-item"><Link to='products'>Thông Tin Truyền Thông </Link></li>
                            <li className="menu-item"><Link to='products'>Việc Làm Với Cloud Airline </Link></li>
                        </div>
                        <div className="col-md-3 col-sm-6">

                            <li className="menu-item-title h4 ">Pháp Lý</li>
                            <li className="menu-item"><Link to='testdrive'>Các Điều Khoản & Điều Kiện </Link></li>
                            <li className="menu-item"><Link to='products'>Diều Lệ Vận Chuyển</Link></li>
                            <li className="menu-item"><Link to='service'>Bảo Mật Thông Tin </Link></li>
                        </div>
                        <div className="col-md-3 col-sm-6">

                            <li className="menu-item-title h4">Hỗ Trợ</li>
                            <li className="menu-item"><Link to='baohanh'>Góp Ý Dịch Vụ</Link></li>
                            <li className="menu-item"><Link to='baohiem'>Chăm Sóc Khách Hàng</Link></li>
                            <li className="menu-item"><Link to='baoduongsuachua'>Chính Sách Bảo Vệ Khách Hàng</Link></li>

                        </div>
                        <div className="col-md-3 col-sm-6">

                            <li className="menu-item-title h4">Thông Tin Hưu Ích</li>
                            <li className="menu-item"><Link to='customercare'>Thông Tin Hành Lý</Link></li>
                            <li className="menu-item"><Link to='tablestore'>Cẩm Nang Mua Vé</Link></li>
                            <li className="menu-item"><Link to='baoduongsuachua'>Thuế phí, Lệ Phí & Phụ Thu</Link></li>
                        </div>

                    </div>
                    <div className='row mt-3'>
                        <div className='footer-contact-icon col-sm-10 col-md-3'>
                            <a href='https://www.facebook.com/groups/9999999999999z' title="Facebook" >
                                <i class="fa-brands fa-facebook h3"></i>
                            </a>
                            <a href="https://www.youtube.com/c/RaspoMusic" title="Youtube" className='ms-3'>
                                <i class="fa-brands fa-youtube h3"></i>
                            </a>
                            <a href="https://www.youtube.com/c/RaspoMusic" title="instagram" className='ms-3'>
                                <i class="fa-brands fa-instagram h3"></i>
                            </a>
                        </div>
                        <div className='col-sm-10 col-md-6 text-white'>
                            <i class="fa-solid fa-phone me-2" />
                            <span className='footer-contact-link'>
                                Trung tâm chăm sóc khách hàng (24/7):<a href='tel: 010021235'>
                                    010021235
                                </a>
                            </span>
                            <br />
                            <i class="fa-solid fa-envelope me-2"></i>
                            <span className='footer-contact-link'>
                                Email: <a href='mailto: phuonghoanglong2001@gmail.com'>
                                    phuonghoanglong2001@gmail.com
                                </a>
                            </span>
                        </div>
                        <div className='col-sm-10 col-md-3 text-white'>
                            Các hình thức hỗ trợ thanh toán:
                            <img src={pay} className="w-100" />
                        </div>
                    </div>

                    <hr className='text-white' />
                    <div className='row'>
                        <div className='text-center text-white'>

                            <small>
                                Tổng công ty Hàng không Việt Nam - CTCP. Số 200 Nguyễn Sơn, P.Bồ Đề, Q.Long Biên, Hà Nội.<br />
                                Điện thoại: (+84-24) 38272289. Fax: (+84-24) 38722375.<br />

                                Giấy chứng nhận đăng ký doanh nghiệp, mã số doanh nghiệp: 0100107518, đăng ký lần đầu ngày 30/6/2010, đăng ký thay đổi lần thứ 7 ngày 01/01/2021, cấp bởi Sở KHĐT thành phố Hà Nội.<br />
                            </small>

                        </div>
                        <div className='col-md-12 mt-3 text-center'>

                            <img className='w-25' src={certification} />

                            <img className='w-25 ms-3' src={certification1} />

                        </div>
                    </div>
                </div>
            </div>






        </footer>
    );
};


export default Footer;