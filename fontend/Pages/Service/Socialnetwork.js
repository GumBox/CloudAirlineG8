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
                                        src="https://www.vietnamairlines.com/~/media/Images/VNANew/Landingpage%20Mega%20Menu/Customer%20Care/social-care.jpg"
                                        alt=""
                                        class="img1"
                                        style={{ width: '100%' }}
                                    />
                                    <div class="card-body" style={{backgroundColor: "#f8f3e7"}}>
                                        <a href="https://www.facebook.com/C%E1%BB%A5c-An-Ninh-M%E1%BA%A1ng-108159034429902/?ref=py_c">
                                            <span class="title">Hãy kết nối với Cloud Airlines qua facebook</span>
                                        </a><br/>
                                        <a href="https://zalo.me/g/gvlkcg647">
                                            <span class="title">Hãy kết nối với Cloud Airlines qua zalo</span>
                                        </a>
                                    </div></div><br/>
                                </div>
                          
                        </div>

                    </div>

                </div></div>


        </>
    )


}
export default Socialnetwork