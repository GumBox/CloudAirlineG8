import React from "react";
import cloud from "../../images/cloud.jpg";
import logo from "../../images/Logo.png"
import cloud1 from "../../images/cloudBackgroud.jpg";
import "../../Css/Company.css";


function Company() {


    return (

        <>

            <div className="row ">
                <img src={cloud} />
                <p className="h1 py-3 text-center text-primary introduce col-md-5">
                    Giới Thiệu Công Ty
                </p>
            </div>
            <div className="container-fluid bd-boss">

                <div className="container">
                    <div className="row pb-5">
                        <p className="h1 py-3 text-white">
                            BAN LÃNH ĐẠO
                        </p>
                        <div className="card text-center boss-opc mt-4 pb-5" >
                            <p className="h3 mt-5">
                                Ban Lãnh Đạo Tổng Công Ty Hàng Không Việt Nam - CTCP</p>

                            <div className="card bg-warning col-md-5 mx-auto mt-3">
                                <div className="card-header">
                                    CHỦ TỊCH HỘI ĐỒNG QUẢN TRỊ:<br></br>
                                    ÔNG ĐẶNG NGỌC HÒA
                                </div>

                                <p className="card-body">
                                    <p className="h5">Thành viên<br />
                                        Hội đồng Quản trị:</p>

                                    <p>Ông Lê Hồng Hà</p>
                                    <p>
                                        Ông Lê Trường Giang
                                    </p><p>
                                        Ông Tạ Mạnh Hùng
                                    </p><p>
                                        Ông Đinh Việt Tùng
                                    </p><p>
                                        Ông Trương Văn Phước
                                    </p><p>
                                        Ông Tomoji Ishii</p>
                                </p>
                            </div>



                        </div>
                    </div>
                </div>

            </div>



            <div className="container-fluid history-bg ">
                <div className="container pb-5 ">
                    <p className="h1 py-3 text-white">
                        LỊCH SỬ HÌNH THÀNH
                    </p>

                    <div className="row ">
                        <div className="card history-opc">
                            <p className="text-center mt-4 h2">
                                Lịch sử phát triển
                            </p>

                            <div className="card-body mx-auto">
                                <p className="h5 col-md-7 mx-auto">
                                    <p>
                                        CLoud Airline là thương hiệu hàng không mới start up.
                                        Được lên ý tưởng và phát triển bởi ông TRẦN RUY HÀ.
                                        Là một thương hiệu mới cạnh tranh với thị trường trong nước, CLoud Airline đã
                                        nhận được sự ủng hộ tích cực với đông đảo các thượng khách tin dùng.
                                    </p><p>
                                        Trong suốt các quá trình phát triển, để phục vụ nhu cầu du lịch tăng cao của khách hàng và tính tiện nghi về dịch vụ
                                        Cloud Airline đã bắt tay hợp tác thành công với hãng xe du lịch nổi tiếng Huyndai, Với các chuỗi của hàng lớn và hệ thống
                                        cho thuê xe du lịch và thuê xe có người lái.
                                    </p>
                                    Ngày 27/6/2022 Cloud Airline chính thức thực hiện chuyến bay đầu tiên của mình để chạm cánh tới bầu trời
                                    Đánh dấu sự hình thành của một thương hiệu lớn mạnh không thua kém những thương hiệu hàng khong khác.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid brand" >
                <div className="container pb-5">
                    <p className="h1 py-3 text-white">
                        NHẬN DIỆN THƯƠNG HIỆU
                    </p>

                    <div className="row">
                        <div className="card brand-opc">
                            <p className="text-center mt-4 h2">
                                Hệ Thống Nhận Diện Thương Hiệu Cloud Airline
                            </p>

                            <div className="card-body mx-auto">
                                <p className="h5 col-md-7 mx-auto">
                                    <p className="row">
                                        <p className="col-md-6">
                                            <img src={logo} className="w-100" ></img>
                                        </p>
                                        <p className="col-md-6 my-auto">
                                            Biểu tượng của cloud Airline
                                        </p>

                                    </p>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}
export default Company