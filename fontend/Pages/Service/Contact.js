import React from "react";
import vidcloud from "../../images/cloudVideo.mp4"
import "../../Css/Service_Contact.css"





function Contact() {
    return (
        <>
            <div className="container-fluid" >
                <video width="100%" autoPlay muted>
                    <source src={vidcloud} type="video/mp4" />
                </video>
                <div className="col-md-5 alooo" >
                    <p className="h1 text-center text-white " >
                        CÁC CHI NHÁNH CLOUD AIRLINE
                    </p>
                    <div className="card" >
                        <div className="card-body m-3">
                            <div class="master card">
                                <div class="card-body" style={{ backgroundColor: "#f8f3e7" }}>
                                    <a href="/Contact" class="card-button">
                                        <span class="title">
                                            <p>
                                                Tổng Công ty Hàng không Việt Nam - CTCP<br />
                                                200 Nguyễn Sơn, Quận Long Biên,<br />
                                                Hà Nội, Việt Nam 	Trung tâm chăm sóc khách hàng tại Việt Nam: giờ hoạt động: 24/7 <br />
                                                Gọi trong lãnh thổ Việt Nam: 1900 1100    <br />
                                                Gọi từ nước ngoài về Việt Nam: +84 24 38320320 <br />
                                                Email: Telesales@cloudairlines.com
                                            </p>
                                        </span>
                                    </a>
                                </div></div>
                            <div class="master card">
                                <div class="card-body" style={{ backgroundColor: "#f8f3e7" }}>
                                    <a href="/Contact" class="card-button">
                                        <span class="title">
                                            <p>
                                                Chương trình Bông Sen Vàng<br />
                                                Trụ sở chính: <br />
                                                Địa chỉ: 200/10 Nguyễn Sơn, Quận Long Biên, Hà Nội, VIỆT NAM <br />
                                                Điện thoại: (+84-24) 38732732 <br />

                                                Trung tâm chăm sóc Hội viên Bông Sen Vàng<br />
                                                Thời gian phục vụ: 24/7 <br />
                                                Tổng đài: <br />
                                                Gọi trong lãnh thổ Việt Nam: 1900 1800 <br />
                                                Gọi từ nước ngoài về Việt Nam: +84 24 38320320 <br />
                                                Email: vip.lotusmiles@cloudairlines.com  (Hội viên Bạch Kim, Vàng) <br />
                                                lotusmiles@cloudairlines.com  (Hội viên Titan, Bạc, Đăng ký) <br />
                                                Fax: (+84-24) 38273003
                                            </p>
                                        </span>
                                    </a>
                                </div></div>
                            <div class="master card">
                                <div class="card-body" style={{ backgroundColor: "#f8f3e7" }}>
                                    <a href="/Contact" class="card-button">
                                        <span class="title">
                                            <p>
                                                Trợ giúp vé mua trên website và các dịch vụ khác: giờ hoạt động 24/7<br />
                                                Gọi trong lãnh thổ Việt Nam: 1900 1100<br />
                                                Gọi từ nước ngoài về Việt Nam: +84 24 38320320<br />
                                                Email:<br />
                                                Hành trình đi/đến Mỹ: onlinesupport.us@cloudairlines.com<br />
                                                Hành trình khác: onlinesupport@cloudairlines.com
                                            </p>
                                        </span>
                                    </a>
                                </div></div>
                            <div class="master card">
                                <div class="card-body" style={{ backgroundColor: "#f8f3e7" }}>
                                    <a href="/Contact" class="card-button">
                                        <span class="title">
                                            <p>
                                                Trợ giúp gói VNAHolidays (giờ hoạt động 24/7)<br />
                                                Gọi trong lãnh thổ Việt Nam: 19001100 <br />
                                                Gọi từ nước ngoài về Việt Nam: +84 24 38320320<br />
                                                Email: vnaholidays.helpdesk@cloudairlines.com
                                            </p>
                                        </span>
                                    </a>
                                </div></div>


                        </div>

                    </div>

                </div></div>


        </>
    )


}
export default Contact