import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserEdit1 = () => {
  const params = useParams();
  const [student, setStudent] = useState(null);
  const [countries, setCountries] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    console.log('user use effect!!');

    if (params.id != 'new') {
      let student_url =
        'https://62b41523530b26da4cb5ec39.mockapi.io/students/' + params.id;

      console.log(student_url);
      fetch(student_url)
        .then((response) => response.json())
        .then((data) => {
          var date = new Date(data.dob);
          data.dob = date.toISOString().slice(0, 10);
          setStudent(data);
        });
    } else {
      let initData = {};

      initData.home = {};
      setStudent(initData);
    }

    let country_url =
      'https://60efed10f587af00179d3b82.mockapi.io/api/countries/';

    console.log(country_url);
    fetch(country_url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, []);

  const handleChange = (event) => {
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name);
    let data = { ...student };
    data[name] = value;

    if (name == 'gender') {
      data[name] = str2bool(value);
    }
    setStudent(data);
  };

  const handleChangeHome = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let data = { ...student };
    data.home[name] = value;

    setStudent(data);
  };

  const saveUser = () => {
    let method = 'POST';
    let id = '';
    if (student.id) {
      method = 'PUT';
      id = student.id;
    }

    const requestOptions = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    };
    fetch(
      'https://62b41523530b26da4cb5ec39.mockapi.io/students/' + id,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        navigate(-1);
      });
  };

  var str2bool = (value) => {
    if (value && typeof value === 'string') {
      if (value.toLowerCase() === 'true') return true;
      if (value.toLowerCase() === 'false') return false;
    }
    return value;
  };

  return (
    <>
      {student != null ? (
        <div class="container bootstrap snippets bootdey img-bg">
          <div class="panel-body inf-content">
            <div class="row">
              <div class="col-md-6">
                <strong>Sửa thông tin thẻ của bạn</strong>
                <br />
                <div class="table-responsive">
                  <table class="table table-user-information">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Số</strong>
                        </td>
                        <td class="text-primary">{student.id}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Họ tên trên thẻ</strong>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={student.firstName}
                            name="firstName"
                            onChange={(e) => handleChange(e)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Tên ngân hàng</strong>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={student.lastName}
                            name="lastName"
                            onChange={(e) => handleChange(e)}
                          ></input>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Số thẻ ngân hàng</strong>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={student.email}
                            name="email"
                            onChange={(e) => handleChange(e)}
                          ></input>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Số tài khoản</strong>
                        </td>
                        <td class="text-primary">
                          <input
                            type="text"
                            className="form-control"
                            value={student.home.address}
                            name="address"
                            onChange={(e) => handleChangeHome(e)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Số CVV mặt sau</strong>
                        </td>
                        <td class="text-primary">
                          <input
                            type="text"
                            className="form-control"
                            value={student.home.address}
                            name="address"
                            onChange={(e) => handleChangeHome(e)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Có thời hạn đến</strong>
                        </td>
                        <td>
                          <input
                            type="date"
                            id="birthday"
                            name="dob"
                            value={student.dob}
                            onChange={(e) => handleChange(e)}
                          ></input>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => saveUser()}
                    >
                      Save
                    </button>
                    <span> </span>
                    <Link to="/home1">
                      <button type="button" class="btn btn-secondary">
                        Cancel
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="text-center">
          <button class="btn btn-primary" type="button" disabled>
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </div>
      )}
    </>
  );
};

export default UserEdit1;
