import React from "react";
import vidcloud from "../../images/cloudVideo.mp4"
import "../../Css/Service_Contact.css"
import { Link } from 'react-router-dom';





function Confirm_Payment() {


    return (
        <>
            <div className="container-fluid img-bg">
                <video width="100%" autoPlay muted>
                    <source src={vidcloud} type="video/mp4" />
                </video>
                <div className="col-md-5 alooo">
                    <p className="h1 text-center text-white ">
                        <img src="https://aogdesign.com.au/wp-content/uploads/2019/02/checkmark.gif"></img>
                    </p>
                    <div className="card">
                        <div className="card-header">
                            

                            <div className="card-body">
                                <form>
                                    <table >

                                    </table>
                                      <Link to="/">
                                    <input type="submit" className="btn btn-danger float-center" value=" Về trang chủ " ></input>
                                    </Link>
                                    
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div >

        </>
    )

}
export default Confirm_Payment