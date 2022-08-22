import React from "react";
import vidcloud from "../../images/cloudVideo.mp4"
import "../../Css/Service_Contact.css"





function Socialnetwork() {
    return (
        <>
            <div className="container-fluid" >
                <video width="100%" autoPlay muted>
                    <source src={vidcloud} type="video/mp4" />
                </video>
                <div className="col-md-5 alooo" >
                    <p className="h1 text-center text-white " >
                        MẠNG XÃ HỘI CLOUD AIRLINE
                    </p>
                    <div className="card" >
                        <div className="card-body m-3">
                        <div className=" co">
                                    <div class="master card">
                                    <img
                                        src="https://www.vietnamairlines.com/~/media/ContentImage/PlanBook/PlanBookThuePhi.jpg?la=vi-VN"
                                        alt=""
                                        class="img1"
                                        style={{ width: '100%' }}
                                    />
                                    <div class="card-body" style={{backgroundColor: "#f8f3e7"}}>
                                       
                                        <p>
                                        Vé máy bay của Vietnam Airlines đã bao gồm mọi khoản thuế, phí và phụ phí(*) như sau:<br/>

Giá dịch vụ phục vụ hành khách, giá dịch vụ soi chiếu an ninh và thuế giá trị gia tăng<br/>
Phụ thu do Vietnam Airlines ban hành<br/>
Thuế, phí, lệ phí và phụ thu do chính phủ và hãng hàng không khác ban hành<br/>
Phụ thu do Đại lý của Vietnam Airlines thu <br/>

(*) trừ trường hợp một số nước quy định thu một số loại thuế, phí hoặc lệ phí tại sân bay.
                                        </p>
                                        
                                    </div></div><br/>
                                </div>
                          
                        </div>

                    </div>

                </div></div>


        </>
    )


}
export default Socialnetwork