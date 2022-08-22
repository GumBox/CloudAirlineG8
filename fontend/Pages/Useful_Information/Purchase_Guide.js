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
                <div className="col-md-4 alooo" >
                    <p className="h1 text-center text-white " >
                    CẨM NANG MUA VÉ ONLINE
                    </p>
                    <div className="card" style={{}}>
                        <div className="mtheader">
                            <p className="text-success text-center h3">
                               <br/> 
                            </p>
                            <div class="card" >
                                <div className="text-center row" >
                                <div className=" col-md-6">
                                    <div class="master card">
                                    <img
                                        src="https://www.vietnamairlines.com/~/media/Images/HeroBanner/Trung-Diem-2020/Info-tra-cuu-gia-ve.jpg"
                                        alt=""
                                        class="img1"
                                        style={{ width: '100%' }}
                                    />
                                    <div class="card-body" style={{backgroundColor: "#f8f3e7"}}>
                                        <a href="/question" class="card-button">
                                            <span class="title">3 Cách Tra Cứu Giá Vé Tối Ưu Nhất</span>
                                        </a>
                                    </div></div>
                                    <br/>
                                
                            
                                </div>
                                <div className=" col-md-6">
                                    <div class="master card">
                                    <img
                                        src="https://www.vietnamairlines.com/~/media/Images/HeroBanner/Trung-Diem-2020/Info-Phuong-thuc-mua-ve.jpg"
                                        alt=""
                                        class="img1"
                                        style={{ width: '100%' }}
                                    />
                                    <div class="card-body" style={{backgroundColor: "#f8f3e7"}}>
                                        <a href="socialnetwork" class="card-button">
                                            <span class="title">Các Phương Thức Mua Vé</span>
                                        </a>
                                    </div></div><br/>
                                </div>
                                <div className=" col-md-6">
                                    <div class="master card">
                                    <img
                                        src="https://www.vietnamairlines.com/~/media/Images/HeroBanner/Trung-Diem-2020/Info-tien-ich-mua-ve.jpg"
                                        alt=""
                                        class="img1"
                                        style={{ width: '100%' }}
                                    />
                                    <div class="card-body" style={{backgroundColor: "#f8f3e7"}}>
                                        <a href="service_contact" class="card-button">
                                            <span class="title">Tiện Ích Mua Vé Online </span>
                                        </a>
                                    </div></div>
                                </div>
                                <div className=" col-md-6">
                                    <div class="master card">
                                    <img
                                        src="https://www.vietnamairlines.com/~/media/Images/HeroBanner/Trung-Diem-2020/Info-cash-miles.jpg"
                                        alt=""
                                        class="img1"
                                        style={{ width: '100%' }}
                                    />
                                    <div class="card-body" style={{backgroundColor: "#f8f3e7"}}>
                                        <a href="contact" class="card-button">
                                            <span class="title">Hướng Dẫn Hội Viên Lấy Vé Thưởng
</span>
                                        </a>
                                    </div></div><br/>
                                    
                                </div>
                                    <br/>
                                    <div className=" col-md-6">
                                    <div class="master card">
                                    <img
                                        src="https://www.vietnamairlines.com/~/media/Images/HeroBanner/Trung-Diem-2020/Info-App.jpg"
                                        alt=""
                                        class="img1"
                                        style={{ width: '100%' }}
                                    />
                                    <div class="card-body" style={{backgroundColor: "#f8f3e7"}}>
                                        <a href="contact" class="card-button">
                                            <span class="title">Hướng Dẫn Mua Vé Qua App Cloud Airlines
</span>
                                        </a>
                                    </div></div><br/>
                                    
                                </div>
                                    <br/>
                                    <div className=" col-md-6">
                                    <div class="master card">
                                    <img
                                        src="https://www.vietnamairlines.com/~/media/Images/HeroBanner/Trung-Diem-2020/Info-Web.jpg"
                                        alt=""
                                        class="img1"
                                        style={{ width: '100%' }}
                                    />
                                    <div class="card-body" style={{backgroundColor: "#f8f3e7"}}>
                                        <a href="contact" class="card-button">
                                            <span class="title">Hướng Dẫn Mua Vé Qua Website Cloud Airlines

</span>
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