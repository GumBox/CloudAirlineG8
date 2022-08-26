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
    // <div className="container-fluid" >
    //             <video width="100%" autoPlay muted>
    //                 <source src={vidcloud} type="video/mp4" />
    //             </video>
    <div className="container img-bg">
      <h2>THÔNG TIN THANH TOÁN</h2>
      <br/>
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
    // </div>
  );
}

export default Home1;
