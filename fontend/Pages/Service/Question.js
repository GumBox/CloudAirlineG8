import React from "react";
import vidcloud from "../../images/cloudVideo.mp4"
import "../../Css/Service_Contact.css"





function Question() {
    return (
        <>
            <div className="container-fluid" >
                <video width="100%" autoPlay muted>
                    <source src={vidcloud} type="video/mp4" />

                </video>
                <div className="col-md-5 alooo" >
                    <p className="h1 text-center text-white " >
                        HỆ THỐNG CHĂM SÓC KHÁCH HÀNG CỦA CLOUD AIRLINE
                    </p>
                    <div className="card" >
                        <div className="card-body m-3">
                            <p >
                            <h4> NHỮNG CÂU HỎI THƯỜNG GẶP NHẤT </h4><br/>
<p>  Thanh toán khi lựa chọn chức năng Giữ giá tốt như thế nào?<br/>
Ngoài tiêu chuẩn hành lý miễn cước trên vé, tôi có thể mua thêm hành lý trên Website/Ứng dụng di động của Vietnam Airlines không?<br/>
Tôi có thể đặt trước vị trí ngồi trên chuyến bay được không?<br/>
Tôi có thể lấy mã khuyến mại ở đâu?<br/>
Tôi không hoàn tất được giao dịch do hệ thống báo lỗi trong quá trình đặt chỗ, tôi phải làm gì?<br/>
Sau khi mua vé trên website/ứng dụng của Vietnam Airlines, tôi muốn có hóa đơn thanh toán thì phải làm thủ tục như thế nào?<br/>
Thủ tục thay đổi đặt chỗ, thay đổi hành trình vé máy bay đã mua trên website/ứng dụng di động của Vietnam Airlines như thế nào?<br/>
Thủ tục hoàn vé máy bay đã mua trên website/ứng dụng di động của Vietnam Airlines như thế nào?<br/>
Sau khi thanh toán thành công trên website/ứng dụng di động của Vietnam Airlines, tôi sẽ nhận vé máy bay như thế nào?<br/>
Tiền & Dặm là gì?<br/></p>
                            </p>
                           
                    </div>

                </div>
                
            </div></div>


        </>
    )
    

}
export default Question