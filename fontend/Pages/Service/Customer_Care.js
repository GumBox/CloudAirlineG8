import React from "react";
import vidcloud from "../../images/cloudVideo.mp4"
import "../../Css/Service_Contact.css"


function Customer_Care() {
    return (
        <>
            <div className="container-fluid" >
                <video width="100%" autoPlay muted>
                    <source src={vidcloud} type="video/mp4" />

                </video>
                <div className="col-md-5 alooo" >
                    <p className="h1 text-center text-white " >
                        HỆ THỐNG CHĂM SÓC KHÁCH HÀNG CỦA CLOUD AIRLINE
                    </p>
                    <div className="card" style={{}}>
                        <div className="mtheader">
                            <p className="text-success text-center h3">
                               <br/> 
                            </p>
                            <div class="card" >
                                <div className="text-center row" >
                                <div className=" col-md-6">
                                    <div class="img-hover-zoom1 master-card">
                                    <img
                                        src="https://www.vietnamairlines.com/~/media/Images/VNANew/Landingpage%20Mega%20Menu/Customer%20Care/faqs.jpg"
                                        alt=""
                                        class="img-fluid"
                                        style={{ width: '100%' }}
                                    />
                                    <div class="card-body" style={{backgroundColor: "#f8f3e7"}}>
                                        <a href="/question" class="card-button">
                                            <span class="title">Câu hỏi thường gặp</span>
                                        </a>
                                    </div></div>
                                    <br/>
                                
                            
                                </div>
                                <div className=" col-md-6">
                                    <div class="img-hover-zoom1 master-card">
                                    <img
                                        src="https://www.vietnamairlines.com/~/media/Images/VNANew/Landingpage%20Mega%20Menu/Customer%20Care/social-care.jpg"
                                        alt=""
                                        class="img1"
                                        style={{ width: '100%' }}
                                    />
                                    <div class="card-body" style={{backgroundColor: "#f8f3e7"}}>
                                        <a href="socialnetwork" class="card-button">
                                            <span class="title">Mạng xã hội</span>
                                        </a>
                                    </div></div><br/>
                                </div>
                                <div className=" col-md-6">
                                    <div class="img-hover-zoom1 master-card">
                                    <img
                                        src="https://www.vietnamairlines.com/~/media/Images/VNANew/Landingpage%20Mega%20Menu/Customer%20Care/email-us.jpg"
                                        alt=""
                                        class="img1"
                                        style={{ width: '100%' }}
                                    />
                                    <div class="card-body" style={{backgroundColor: "#f8f3e7"}}>
                                        <a href="service_contact" class="card-button">
                                            <span class="title">Gửi thư cho Cloud Airline </span>
                                        </a>
                                    </div></div>
                                </div>
                                <div className=" col-md-6">
                                    <div class="img-hover-zoom1 master-card">
                                    <img
                                        src="https://www.vietnamairlines.com/~/media/Images/VNANew/Landingpage%20Mega%20Menu/Customer%20Care/contact-us.jpg"
                                        alt=""
                                        class="img1"
                                        style={{ width: '100%' }}
                                    />
                                    <div class="card-body" style={{backgroundColor: "#f8f3e7"}}>
                                        <a href="contact" class="card-button">
                                            <span class="title">Liên hệ</span>
                                        </a>
                                    </div></div><br/>
                                </div>
                                    <br/>
                                
                                
                                </div>
                                
                            </div>

                        </div>
                        
                    </div>

                </div>
                
            </div>













        </>
    )
    

}
export default Customer_Care