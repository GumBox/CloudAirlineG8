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
                                            <td className="col-md-4">Thông tin liên hệ</td>
                                            <td className="col-md-4">
                                                <input className="form-control"></input>
                                            </td>
                                            <td className="col-md-4">
                                                <input className="form-control"></ input>
                                            </td>
                                        </tr>
                                    </table>
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