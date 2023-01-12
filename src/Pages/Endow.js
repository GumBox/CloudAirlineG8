import { Link } from "react-router-dom";
import React from "react";
import banner04 from "../images/banner04.png"
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";
import "../Css/Endow.css";


const Endow = () => {

    return (
        <>

            <img src={banner04} className="w-100" ></img>
            <div>


                <div className="container">
                    <p className="h1 text-center endow-title">
                        DEAL HOT MÙA HÈ
                    </p>
                    <div className="row">
                        <img src={img1} className="col-md-4"></img>
                        <img src={img2} className="col-md-4"></img>
                        <img src={img3} className="col-md-4"></img>
                    </div>
                    <div className="    bgr-enrow">
                        <div className="row my-5">
                            <div className="text-center col-md-3 item-enrow">
                                <div className="card">
                                    <i class=" pt-3 fa-solid fa-calendar-check"></i>
                                    <br />   Tín đồ "xê dịch"</div>
                            </div>
                            <div className="text-center col-md-3 item-enrow">
                                <div className="card">
                                    <i class=" pt-3 fa-solid fa-cart-plus"></i>
                                    <br />     Tín đồ mua sắm</div>
                            </div>
                            <div className="text-center col-md-3 item-enrow">
                                <div className="card">
                                    <i class=" pt-3 fa-solid fa-mountain-city"></i>
                                    <br />    Tín đồ khám phá</div>
                            </div>
                            <div className="text-center col-md-3 item-enrow">
                                <div className="card">
                                    <i class=" pt-3 fa-solid fa-hotel"></i>
                                    <br />  Tín đồ nghỉ dưỡng</div>
                            </div>
                        </div>

                        <div className="row mb-5">
                            <div className="calendar">
                                <br />
                                <br />

                                <table cellPadding={8} class="table text-center table-bordered border-primary ">
                                    <thead >
                                        <th className="border border-1 h5 border-primary" >Thứ 2</th>
                                        <th className="border border-1 h5 border-primary">Thứ 3</th>
                                        <th className="border border-1 h5 border-primary">Thứ 4</th>
                                        <th className="border border-1 h5 border-primary">Thứ 5</th>
                                        <th className="border border-1 h5 border-primary">Thứ 6</th>
                                        <th className="h5">Thứ 7</th>
                                        <th className="h5">Chủ Nhật</th>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr>
                                            <td colSpan="2" className="h6 text-primary">
                                                Midnight Sale
                                            </td>
                                            <td className="h6 text-primary">
                                                Quick Sale App
                                            </td>
                                            <td className="h6 text-primary">
                                                Thứ 5 rực rỡ
                                            </td>
                                            <td className="h6 text-primary">
                                                Thứ 6 máu chảy về "TEAM"
                                            </td>
                                            <td colSpan="2" className="h6 text-primary">
                                                Week-end Sale-start
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <p className="h6">
                                                    Ưu đãi nửa đêm - Càng thêm hấp dẫn!
                                                </p>
                                                Giảm đến 20% toàn bộ hành trình nội địa!
                                            </td>
                                            <td>
                                                Săn ngay ưu đãi chỉ có trên App!
                                            </td>
                                            <td>
                                                Ưu đãi hết cỡ với giá vé <br />
                                                chỉ từ 99K
                                            </td>
                                            <td>
                                                Giảm tới 15% giá vé khi mua theo NHÓM
                                            </td>
                                            <td colSpan="2">
                                                <p className="h6">
                                                    Cuối tuần thảnh thơi - Deal bay phấp phới!
                                                </p>
                                                Tặng bạn ưu đãi giảm đến 40% giá vé - Cùng tận hưởng niềm vui cuối tuần thật trọn vẹn!
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="h1 text-center endow-title my-5">
                            LỢI ÍCH CỦA VIỆC ĐẶT VÉ TRỰC TUYẾN
                        </p>
                        <div className="row text-center">
                            <div className="col-md-4 bgr-icon-endow">
                                <p>
                                    <i class="icon-endow fa-solid fa-plane-up rounded-circle border border-primary"></i>
                                </p>
                                <p className="h5">
                                    Miễn phí xuất vé
                                </p>
                                <p>
                                    Miễn phí hoàn toàn xuất vé khi đặt mua trên website và ứng dụng di động
                                </p>
                            </div>
                            <div className="col-md-4 bgr-icon-endow">
                                <p>
                                    <i class="icon-endow fa-solid fa-mobile-button rounded-circle border border-primary"></i>
                                </p>
                                <p className="h5">
                                    Hỗ trợ 24/7
                                </p>
                                <p>
                                    Chatbot luôn sẵn sàng hỗ trợ bạn mọi lúc mọi nơi
                                </p>
                            </div>
                            <div className="col-md-4 bgr-icon-endow">
                                <p>
                                    <i class="icon-endow fa-solid fa-gift rounded-circle border border-primary"></i>
                                </p>
                                <p className="h5">
                                    Giá vé tốt nhất
                                </p>
                                <p>
                                    Giá tốt kèm nhiều ưu đãi đặc biệt chỉ có trên kênh đặt vé trực tuyến Cloud Airline
                                </p>
                            </div>
                        </div>




                    </div>
                </div>
            </div>


        </>
    )

}
export default Endow