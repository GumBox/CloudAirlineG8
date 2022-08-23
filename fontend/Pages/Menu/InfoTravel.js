import React from "react";
import "../../Css/Info.css"

function InfoTravel() {
    return (
        <>
            <div className="container-fluid img-bg" >
                <div className="col-md-5 aloo1" >
                    <p className="h1 text-center text-dark " >
                    THÔNG TIN HÀNH TRÌNH
                    </p>
                    <div className="card" style={{}}>
                        <div className="mtheader">
                            <p className="text-success text-center h3">
                               <br/> 
                            </p>
                            <div class="card" >
                                <div className="text-center row" >
                                <div className=" col-md-6">
                                    <div class="img-hover-zoom master-card">
                                    <img
                                        src="https://www.vietnamairlines.com/~/media/Images/VNANew/Landingpage%20Mega%20Menu/Travel%20Information/travel-information_1.jpg"
                                        alt=""
                                        class="img-fluid"
                                        style={{ width: '100%' }}
                                    />
                                    <div class="card-body" style={{backgroundColor: "#f8f3e7"}}>
                                        <a href="/checkin" class="card-button">
                                            <span class="title">LÀM THỦ TỤC</span>
                                        </a>
                                    </div></div>
                                    <br/>
                                </div>
                                <div className=" col-md-6">
                                    <div class="img-hover-zoom master-card">
                                    <img
                                        src="https://www.vietnamairlines.com/~/media/Images/VNANew/Landingpage%20Mega%20Menu/Travel%20Information/travel-information_2.jpg"
                                        alt=""
                                        class="img1"
                                        style={{ width: '100%' }}
                                    />
                                    <div class="card-body" style={{backgroundColor: "#f8f3e7"}}>
                                        <a href="/baggage" class="card-button">
                                            <span class="title">THÔNG TIN HÀNH LÝ</span>
                                        </a>
                                    </div></div><br/>
                                </div>
                                    <div className=" col-md-6">
                                    <div class="img-hover-zoom master-card">
                                    <img
                                        src="https://www.vietnamairlines.com/~/media/Images/VNANew/Landingpage%20Mega%20Menu/Travel%20Information/travel-information_5.jpg"
                                        alt=""
                                        class="img1"
                                        style={{ width: '100%' }}
                                    />
                                    <div class="card-body" style={{backgroundColor: "#f8f3e7"}}>
                                        <a href="/airport" class="card-button">
                                            <span class="title">YÊU CẦU GIẤY TỜ</span>
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
export default InfoTravel