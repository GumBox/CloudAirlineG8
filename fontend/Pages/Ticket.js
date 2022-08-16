import React from "react";




function Ticket() {


    
    return (
        <>
            <div className="tab-header bg-warning">
                <div className="container">
                    <i class="fa-solid fa-plane-departure me-2" />
                    CHỌN CHUYẾN BAY
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <p className="h4 mt-4">
                        Chọn chuyến bay
                    </p>
                    <p>
                        Chọn chuyến bay Đà Nẵng (DAD) - Hải Phòng (HPH), Việt Nam
                    </p>
                    <div className="card">
                        <p className="mt-1">
                            Tra cứu thông tin hành lý <a href="#">tại đây</a>
                        </p >
                        <p className="text-danger m-0 ">
                            Lưu ý: Giá dưới đây đã bao gồm thuế, phí
                        </p>
                        <p className="text-primary m-0">
                            + Phí Dịch Vụ Đặc Biệt<br />
                            + Thuế, Phí, Lệ phí & Phụ thu
                        </p>
                        <p>
                            Đồng tiền thanh toán hiển thị theo "Quốc gia/Vùng" đã chọn, Quý khách kiểm tra kỹ đồng tiền trước khi thanh toán
                        </p>
                    </div>
                    <div>
                        <div id="carouselExampleControls" class="carousel slide bg-danger" >
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <span className="border">
                                        31 Thg 08
                                        1,477,000
                                    </span>

                                    <span>
                                        31 Thg 08
                                        1,477,000
                                    </span>

                                    <span>
                                        31 Thg 08
                                        1,477,000
                                    </span>

                                    <span>
                                        31 Thg 08
                                        1,477,000
                                    </span>

                                    <span>
                                        31 Thg 08
                                        1,477,000
                                    </span>


                                </div>
                                <div class="carousel-item">

                                </div>
                                <div class="carousel-item">

                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>

                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>

                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )

}
export default Ticket;