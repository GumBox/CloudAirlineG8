import React from "react";
import vidcloud from "../../images/cloudVideo.mp4"
import "../../Css/Service_Contact.css"





function Service_Contact() {


    return (
        <>
            <div className="container-fluid">
                <video width="100%" autoPlay muted>
                    <source src={vidcloud} type="video/mp4" />

                </video>
                <div className="col-md-5 alooo">
                    <p className="h1 text-center ">
                        GỬI THƯ ĐIỆN TỬ CHO CLOUD AIRLINE
                    </p>
                    <div className="card">
                        <div className="card-header">
                            <p className="text-success text-center h3">
                                Gửi Thư Cho Cloud Airline
                            </p>

                            <div className="card-body">
                                <form>
                                    <table >
                                        <tr className="row">
                                            <td className="col-md-4 my-3">Thông tin liên hệ</td>

                                            <td className="col-md-4 my-3">
                                                <input type="text" className="form-control"></input>
                                            </td>
                                            <td className="col-md-4 my-3">
                                                <input type="text" className="form-control" placeholder="Mã quốc gia" />
                                            </td>


                                            <td className="col-md-4 my-3"></td>
                                            <td className="col-md-4 my-3">
                                                <input type="text" className="form-control" placeholder="Họ*" />
                                            </td>

                                            <td className="col-md-4 my-3">
                                                <input type="text" className="form-control" placeholder="Tên *"></ input>
                                            </td>
                                            <td className="col-md-4 my-3"></td>
                                            <td className="col-md-4 my-3">
                                                <input type="text" className="form-control" placeholder="Số điện thoại *"></ input>
                                            </td>
                                            <td className="col-md-4 my-3">
                                                <input type="text" className="form-control" placeholder="Địa chỉ Email *" />
                                            </td>
                                        </tr>

                                        <tr className="row">
                                            <td className="col-md-4 my-3">
                                                Yêu cầu
                                            </td>
                                            <td className="col-md-4 my-3">
                                                <input type="text" className="form-control" placeholder="Mã đặt chỗ *" name="">
                                                </input>
                                            </td>

                                            <td className="col-md-4 my-3">
                                                <input type="date" className="form-control" name="">
                                                </input>
                                            </td>
                                        </tr>
                                        <tr className="row">
                                            <td className="col-md-4 my-3">
                                                Yêu cầu của quý khách
                                            </td>
                                            <td className="col-md-8 my-3" >
                                                <textarea className="col-md-12 form-control" rows="7" placeholder="Quý khách vui lòng nhập tại đây">
                                                </textarea>
                                            </td>
                                            <td className="col-md-4"></td>
                                            <td className="col-md-8">Các trường đánh dấu (*) là bắt buộc</td>
                                        </tr>
                                    </table>
                                                                                            <input type="submit" className="btn btn-danger float-end" value="Gửi">
                                    </input>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div >

        </>
    )

}
export default Service_Contact
