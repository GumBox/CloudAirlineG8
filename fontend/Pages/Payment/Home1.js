import React from 'react';

import CustomerTable from "../Components/List_Customers";
import { useState } from 'react';
import { useEffect } from 'react';
import "../../Css/Info.css"
// import vidcloud from "../../images/cloudVideo.mp4"
import { Link } from 'react-router-dom';

function Home1() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);


  useEffect(() => {
    console.log('app useeffect!!');
    let url = 'https://62b41523530b26da4cb5ec39.mockapi.io/students';
    if (searchTerm.length > 0) {
      url = url + '?search=' + searchTerm;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [searchTerm]);


  return (
    <>

      <div className="tab-header bg-warning">
        <div className="container">
          <ul class="nav nav-pills nav-justified bg-warning">
            <Link to='/ticket/'>
              <li class="nav-link" aria-current="page">

                <i class="fa-solid fa-plane-circle-check me-2" />
                <small>Xem lại chuyến bay</small>
              </li>
            </Link>
            <li className="nav-link ">
              <Link to="/ticket/infcustomer">
                <i class="fa-solid fa-person-walking-luggage me-2" ><sub><i class="fa-solid fa-circle-check"></i></sub></i>
                <small>Thông tin khách</small>
              </Link>
            </li>
            <li className="nav-link ">
              <Link to="/ticket/spServices/">
                <i class="fa-solid fa-cart-flatbed-suitcase me-2"><sub><i class="fa-solid fa-circle-check"></i></sub></i>
                <small>Dịch vụ hỗ trợ</small>
              </Link>
            </li>
            <li className="nav-link ">
              <i class="fa-solid fa-couch me-2"><sub><i class="fa-solid fa-circle-check"></i></sub></i>
              Chọn chỗ ngồi
            </li>
            <li className="nav-link active">
              <i class="fa-solid fa-money-check-dollar me-2"></i>
              Thanh toán

            </li>
            <li className="nav-link" ><i class="fa-solid fa-cart-arrow-down"></i></li>
            <li className="nav-link" ></li>


          </ul>
        </div>
      </div>
      <div className='img-bg'>
        <div className="container py-3">
          <h2>THÔNG TIN THANH TOÁN</h2>
          <br />
          <div class="row">
            <div class="col-sm-6">
              <div className="input-group">
                <div className="input-group-append">
                </div>
              </div>
              <p>
                <Link to={'/useredit/new'}>
                  <button
                    className="btn btn-primary"
                    type="button">
                    Thêm thẻ thanh toán
                  </button>
                </Link>
              </p>
            </div>
          </div>

          <CustomerTable data={data} />
          <Link to={'/confirmpayment'}>
            <button
              className="btn btn-success"
              type="button">
              Xác nhận thanh toán
            </button>
          </Link>
        </div>
      </div>

    </>

  );
}

export default Home1;
