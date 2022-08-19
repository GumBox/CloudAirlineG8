import React from "react";
import cloud from "../../images/cloud.jpg";


function Partner() {



    return (
        <>
            <div className="row ">
                <img src={cloud} />
                <p className="h1 py-3 text-primary text-center introduce col-md-5">
                    Đối tác
                </p>
            </div>
            <div className="container-fluid partner-bg">
                <div className=" container py-5">
                    <p className="h2 text-success text-center">
                        ĐỐI TÁC VÀNG CỦA CLOUD AIRLINE
                    </p>

                    <div className="card">
                        <div className="row">
                            <p className="col-md-6">
                                <p className="h4 text-center">
                                    Huyndai
                                </p>
                                <p className=" h6">
                                    Hệ thống của hàng lớn nhất Việt Nam, cho thuê xe du lịch  và hỗ trợ dịch vụ xe đưa đón từ sân bay tới khách sạn.
                                    Hoặc bất cứ nơi đâu bạn muốn.
                                </p>
                                <p className="h6">
                                    Mọi thông tin chi tiết liên hệ <a href="https://react-3c2gxk.stackblitz.io/" target="blank"> tại đây</a>.
                                </p>
                            </p>
                            <p className="col-md-6 text-center">
                                <img src="https://xeotogiadinh.com/wp-content/uploads/2017/05/logo-hyundai-300x281.png" alt="không có ảnh đâu" className=" w-25">
                                </img>
                            </p>
                            <p className="col-md-12">
                                <img src="https://hyundai-api.thanhcong.vn/storage/uploads/slider/Accent.jpg" alt="Không có ảnh đâu" className="w-100">
                                </img>
                            </p>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}
export default Partner;