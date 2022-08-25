import React from "react";
import pay from '../images/Pay.png';
import Homecss from '../Css/Home.css';
import sv from '../images/service.jpg';
import sv1 from '../images/service.png';
import sv2 from '../images/service1.jpg';
import logo from '../images/Logo.png';
import banner from '../images/banner.png';
import banner02 from '../images/Banner02.png';
import banner03 from '../images/Banner03.png';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm, Controller } from 'react-hook-form';

export default function Home() {


    const [placeName, setPlaceName] = useState(null)
    const onSubmit = (data) => console.log(data);
    const {
        register,
        handleSubmit,
        watch,
        label,
        required,


    } = useForm();

    const handleChange = (event) => {
        console.log(event);
        const target = event.target;
        const value = target.value;
        const name = target.name;

        console.log(name);
        let data = { ...placeName };
        data[name] = value;
    };


    useEffect(() => {

        fetch('http://localhost:8080/mainticket/ticket')
            .then((response) => response.json())
            .then((response) => {
                setPlaceName(response)
                console.log(response)
            });
    }, [])


    var placesFrom = []
    if (placeName != null) {

        placesFrom = placeName.map((item) => {
            return (

                <option value={item.placeTo.place}>
                    {item.placeFrom.place}
                </option>
            )

        })
    }

    var placesTo = []
    if (placeName !== null) {
        placesTo = placeName.map((item) => {

            return (

                <option >
                    {item.placeTo.place}
                </option>
            )
        })
    }







    return (

        <>
            <div>
                {/* Banner */}


                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src={banner} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5></h5>
                                <p></p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={banner02} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5></h5>
                                <p></p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={banner03} class="d-block w-100 mx-auto" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5></h5>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>

                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>

                    </button>
                </div>
                {/* END banner */}





            </div>
            {/* Menu */}
            <div className="container" id="menu-header">

                {/* MENU-HEADER */}

                <ul className="list-group list-group-horizontal"  >
                    <li class="list-group-item pill active" data-bs-toggle="collapse" data-bs-target="#buyTicket"  >
                        <i class="fa-solid fa-plane me-2 " />
                        Mua vé</li>
                    <li class="list-group-item " data-bs-toggle="collapse" data-bs-target="#locationManagement" >
                        <i class="fa-solid fa-book me-2" />
                        Quản lý đặt chỗ
                    </li>
                    <li class="list-group-item" data-bs-toggle="collapse" data-bs-target="#service" >
                        <i class="fa-solid fa-bag-shopping me-2" />
                        Dịch vụ hỗ trợ
                    </li>
                    <li class="list-group-item" data-bs-toggle="collapse" data-bs-target="#procedure" >
                        <i class="fa-solid fa-credit-card me-2" />
                        Làm thủ tục
                    </li>
                    <li class="list-group-item" data-bs-toggle="collapse" data-bs-target="#statusFlight" >
                        <i class="fa-regular fa-clock me-2" />
                        Tình trạng chuyến bay
                    </li>
                </ul>
                {/* END */}

                {/* MENU FOOTER */}
                <div class="collapse show" id="buyTicket" data-bs-toggle="collapse" data-bs-parent="#menu-header">
                    <div class="card card-header">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <p class="nav-link active" data-bs-toggle="collapse" data-bs-target="#plane">Chuyến bay</p>
                            </li>
                            <li class="nav-item">
                                <p class="nav-link " data-bs-toggle="collapse" data-bs-target="#fly-hotel"> Chuyến bay+Khách sạn</p>
                            </li>
                            <li class="nav-item">
                                <p class="nav-link" data-bs-toggle="collapse" data-bs-target="#buyTicket">Khách sạn</p>
                            </li>
                            <li class="nav-item">
                                <p class="nav-link" data-bs-toggle="collapse" data-bs-target="#buyTicket">Chuyến bay</p>
                            </li>
                        </ul>


                        {/* BUY TICKET */}
                        <div class="collapse show" id="plane" data-bs-parent="#buyTicket">
                            <form className="row card-body" action="https://62bafae8573ca8f832901b9c.mockapi.io/user" method="GET"
                                onSubmit={handleSubmit(onSubmit)}
                            >

                                <p className="col-sm-10  col-md-3 ">
                                    Điểm đi

                                    <select className="form-control "
                                        {...register('ticketType', { required: true })} onChange={(e) => handleChange(e)} >
                                        {placesFrom}
                                    </select>
                                </p>
                                <p className="col-sm-10  col-md-3 ">
                                    Điểm đến

                                    <select name="ticketType" className="form-control "  >
                                        {placesTo}

                                    </select>
                                </p>

                                <p className="col-sm-10  col-md-2   ">
                                    Ngày đi
                                    <input type="date" className="form-control" name="" />
                                </p>

                                <p className="col-sm-10  col-md-2   ">
                                    Ngày về
                                    <input type="date" className="form-control" name="" />
                                </p>

                                <p className="col-sm-10  col-md-2  ">
                                    Số lượng hành khách
                                    <input type="number" className="form-control" placeholder="1" />
                                </p>
                                <Link to='ticket'>
                                    <input type="button" value="Tìm chuyến bay" className="btn btn-warning col-md-2" />
                                </Link>
                                <p className="mt-3 row">
                                    Các hình thức thanh toán:

                                    <img src={pay} className='col-sm-1 col-md-12 ms-3'>
                                    </img>
                                </p>

                                <p class="alert alert-warning alert-dismissible fade show " role="alert">
                                    <strong>THÔNG TIN QUAN TRỌNG:</strong>
                                    <br />
                                    Quý khách đang sử dụng website tại thị trường <strong>Việt Nam </strong>và đồng tiền thanh toán là <strong> Đồng Việt Nam (VNĐ)</strong>.
                                    <br />
                                    Theo quy định của Bộ Tài chính thì chỉ các giao dịch thanh toán bằng Đồng Việt Nam (VNĐ) mới được xuất hóa đơn GTGT điện tử.
                                    Nếu cần thanh toán bằng đồng tiền khác, Quý khách vui lòng đổi Quốc gia/Vùng (tại đây).

                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" />

                                </p>


                            </form>
                        </div>
                        <div className="collapse" id="fly-hotel" data-bs-parent="#buyTicket">
                            alo
                        </div>

                    </div>
                </div>
                {/* locationManagement */}
                <div className="collapse" id="locationManagement" data-bs-toggle="collapse" data-bs-parent="#menu-header" >
                    <div className="card card-header">

                        <ul class="list-group">
                            <li class="list-group-item">
                                <p class=" collapse-header active my-auto" data-bs-toggle="collapse" data-bs-target="#flightSelection">
                                    <i class="fa-regular fa-circle-play play-icon h5 me-2" />
                                    CÁC LỰA CHỌN CHO CHUYẾN BAY
                                </p>
                                <div className="collapse show " id="flightSelection" data-bs-parent="#locationManagement" >
                                    <br />
                                    <span class="badge rounded-pill bg-primary opacity-75">Số vé điện tử</span>
                                    <form className="card-body row">
                                        <p className="col-sm-10 col-md-5">
                                            <input type="text" className="form-control" name="" placeholder="Số vé điện tử (738xxxxx)" />
                                        </p>
                                        <p className="col-sm-10 col-md-5">
                                            <input type="text" className="form-control" name="" placeholder="Họ" />
                                        </p>
                                        <p className="col-sm-10 col-md-2">
                                            <input type="submit" className="btn btn-warning" name="" value="Tìm kiếm" />
                                        </p>
                                    </form>
                                    <span class="badge rounded-pill bg-primary opacity-75">Mã đặt chỗ</span>
                                    <form className="card-body row">

                                        <p className="col-sm-10 col-md-3">
                                            <input type="text" name='' className="form-control" placeholder="Mã đặt chỗ (PNR)" />
                                        </p>
                                        <p className="col-sm-10 col-md-3">
                                            <input type="text" className="form-control" name='' placeholder="Họ" />
                                        </p>
                                        <p className="col-sm-10 col-md-3">
                                            <input type="email" name='' className="form-control" placeholder="Email" />
                                        </p>
                                        <p className="col-sm-10 col-md-3">
                                            <input type="submit" className="btn btn-warning" name='' value="Tìm kiến" />
                                        </p>
                                    </form>

                                </div>

                            </li>
                            <li class="list-group-item">
                                <p class="my-auto " data-bs-toggle="collapse" data-bs-target="#pay">
                                    <i class="fa-regular fa-circle-play play-icon h5 me-2" />
                                    THANH TOÁN MÃ ĐẶT CHỖ TRẢ SAU
                                </p>
                                <div className="collapse" id="pay" data-bs-parent="#locationManagement" >

                                    <p>
                                        Lựa chọn các hình thức thanh toán:
                                    </p>
                                    <img src={pay} className="col-md-12" />
                                    <p>
                                        * Chỉ áp dụng các mã đặt chỗ trả sau được đặt tại website www.cloudairlines.com hoặc ứng dụng di động Cloud Airlines.
                                    </p>


                                </div>


                            </li>
                            <li class="list-group-item">
                                <p className="my-auto" data-bs-toggle="collapse" data-bs-target="#FlightChange">
                                    <i class="fa-regular fa-circle-play play-icon h5 me-2" />
                                    ĐỔI CHUYẾN BAY
                                </p>
                                <div className="collapse" id="FlightChange" data-bs-parent="#locationManagement" >
                                    <br />
                                    <span class="badge rounded-pill bg-primary opacity-75">Vé của bạn</span>
                                    <form className="row card-body" >
                                        <p className="col-sm-12 col-md-1  ">
                                            Loại vé
                                            <select name="ticketType" className="form-control"  >
                                                <option name=" ">
                                                    Một chiều
                                                </option>

                                                <option name=" ">
                                                    Khứ hồi
                                                </option>

                                                <option name=" ">
                                                    Nhiều chặng
                                                </option>


                                            </select>
                                        </p>
                                        <p className="col-sm-10  col-md-3 ">
                                            Điểm đi

                                            <select name="ticketType" className="form-control "  >
                                                <option name=" ">
                                                    Hà Nội
                                                </option>

                                                <option name=" ">
                                                    TP.HCM
                                                </option>

                                                <option name=" ">
                                                    Vinh
                                                </option>


                                            </select>
                                        </p>
                                        <p className="col-sm-10  col-md-3 ">
                                            Điểm đến

                                            <select name="ticketType" className="form-control "  >
                                                <option name=" ">
                                                    Hà Nội
                                                </option>

                                                <option name=" ">
                                                    TP.HCM
                                                </option>

                                                <option name=" ">
                                                    Vinh
                                                </option>


                                            </select>
                                        </p>

                                        <p className="col-sm-10  col-md-3   ">
                                            Mã số vé/ Mã đặt chỗ
                                            <input type="text" className="form-control" name="" />
                                        </p>

                                        <p className="col-sm-10  col-md-2  ">
                                            Số lượng hành khách
                                            <input type="number" className="form-control" placeholder="1" />
                                        </p>
                                        <p className="row">
                                            <span class="badge rounded-pill bg-primary opacity-75 col-md-1">Vé của bạn</span>
                                        </p>
                                        <p className="col-sm-12 col-md-2  ">
                                            Loại vé
                                            <select name="ticketType" className="form-control"  >
                                                <option name=" ">
                                                    Một chiều
                                                </option>

                                                <option name=" ">
                                                    Khứ hồi
                                                </option>

                                                <option name=" ">
                                                    Nhiều chặng
                                                </option>


                                            </select>
                                        </p>

                                        <p className="col-sm-10  col-md-2 ">
                                            Điểm đi

                                            <select name="ticketType" className="form-control "  >
                                                <option name=" ">
                                                    Hà Nội
                                                </option>

                                                <option name=" ">
                                                    TP.HCM
                                                </option>

                                                <option name=" ">
                                                    Vinh
                                                </option>


                                            </select>
                                        </p>
                                        <p className="col-sm-10  col-md-2 ">
                                            Điểm đến

                                            <select name="ticketType" className="form-control "  >
                                                <option name=" ">
                                                    Hà Nội
                                                </option>

                                                <option name=" ">
                                                    TP.HCM
                                                </option>

                                                <option name=" ">
                                                    Vinh
                                                </option>


                                            </select>
                                        </p>

                                        <p className="col-sm-10  col-md-2   ">
                                            Ngày đi
                                            <input type="date" className="form-control" name="" />
                                        </p>

                                        <p className="col-sm-10  col-md-2   ">
                                            Ngày về
                                            <input type="date" className="form-control" name="" />
                                        </p>

                                        <p className="col-sm-10  col-md-2  ">
                                            Số lượng hành khách
                                            <input type="number" className="form-control" placeholder="1" />
                                        </p>
                                        <p className="card">
                                            <span>

                                                <strong>Điều khoản và điều kiện:</strong><br />
                                                Chức năng đổi chuyến bay chỉ áp dụng cho hành khách mua vé <strong>trực tuyến</strong>, không áp dụng cho vé mua tại <strong>phòng vé</strong> hoặc đại lý.<br />
                                                Quý khách hàng vui lòng kiểm tra chính xác thông tin khi xác nhận đổi chuyến bay, hạn chế thông tin sai lệch có thể đổi chuyến không thành công. <br />
                                                Quá trình thực hiện đổi chuyến bay có thể <strong>phát sinh thêm phí</strong> quý khách hàng vui lòng xem kĩ thông tin.
                                            </span>
                                        </p>
                                        <p>
                                            <input type="checkbox" name="" className="form-check-input me-2" required />Tôi đồng ý
                                        </p>
                                        <input type="submit" value="Tìm chuyến bay" className="btn btn-warning col-md-2" />
                                    </form>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <p className="my-auto" data-bs-toggle="collapse" data-bs-target="#electronicBill">
                                    <i class="fa-regular fa-circle-play play-icon h5 me-2" />
                                    XUẤT HÓA ĐƠN ĐIỆN TỬ
                                </p>
                                <div className="collapse" id="electronicBill" data-bs-parent="#locationManagement" >
                                    <form action="#" className="row card-body">
                                        <p className="col-sm-12 col-md-3">
                                            Họ tên:
                                            <input type="text" className="form-control" name="" placeholder="Họ tên" required />
                                        </p>
                                        <p className="col-sm-12 col-md-3">
                                            Số điện thoại:
                                            <input type="text" className="form-control" name="" placeholder="Số điện thoại" required />
                                        </p>
                                        <p className="col-sm-12 col-md-3">
                                            Email:
                                            <input type="email" className="form-control" name="" placeholder="Email" required />
                                        </p>
                                        <p className="col-sm-12 col-md-3">
                                            <input type="submit" className="btn btn-warning mt-4" name="" />
                                        </p>

                                    </form>
                                    <p>
                                        Trong vòng 72 giờ sau khi nhận được email thông báo hoàn thành mua vé máy bay và dịch vụ bổ trợ trên website và ứng dụng di động của Cloud Airlines.<br />
                                        Quý khách vui lòng truy cập tại đây để khai báo thông tin xuất hóa đơn.
                                    </p>


                                </div>




                            </li>
                        </ul>


                    </div>

                </div>

            </div>
            {/* END menu */}

            <div className="container-fluid">
                <p className="text-center h4 mt-3">
                    CÁC CHUYẾN BAY ĐƯỢC YÊU THÍCH

                </p>

                <div className="container">
                    <hr />

                    <p className="mx-auto text-center h4 mt-4">
                        CÁC DỊCH VỤ BỔ TRỢ

                    </p>
                    <hr />


                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <a href="#">
                                <img src={sv} alt="" className="w-25 img-service"></img>
                                <span className="ms-3 h5">
                                    Hành lý trả trước
                                </span>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <a href="#">
                                <img src={sv1} alt="" className="w-25 img-service"></img>
                                <span className="ms-3 h5">
                                    Chọn trước chỗ ngồi
                                </span>
                            </a>

                        </div>
                        <div className="col-sm-12 col-md-4">
                            <a href="#">
                                <img src={sv2} alt="" className="w-25 img-service"></img>
                                <span className="ms-3 h5">
                                    Đặt trước món ăn
                                </span>
                            </a>
                        </div>

                    </div>


                </div>

                {/* CALL MESSAGE */}

                <a href="tel:010021235">
                    <button type="button" class="contact btn btn-primary rounded-circle"><i class="fa-solid fa-phone"></i></button>
                </a>

            </div>

        </>
    )

}
// export default Home