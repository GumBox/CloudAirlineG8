import React from 'react';

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const User1 = () => {
  const params = useParams();
  const [student, setStudent] = useState(null);
  useEffect(() => {

    let url =
      'https://62b41523530b26da4cb5ec39.mockapi.io/students/' + params.id;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.dob = new Date(data.dob);
        setStudent(data); 
      });
  }, []);

  const formatDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getYear();
    return day + '-' + month + '-' + year;
  };

  return (
    <>
      {student != null ? (
        <div class="container bootstrap snippets bootdey">
          <div class="panel-body inf-content">
            <div class="row">
              <div class="col-md-6">
                <strong>Information</strong>
                <br />
                <div class="table-responsive">
                  <table class="table table-user1User1-information">
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
                        <td class="text-primary">{student.firstName}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Tên ngân hàng</strong>
                        </td>
                        <td class="text-primary">{student.lastName}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Số thẻ ngân hàng</strong>
                        </td>
                        <td class="text-primary">{student.email}</td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Số tài khoản ngân hàng</strong>
                        </td>
                        <td class="text-primary">
                          {student.home.address}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Số CVV mặt sau</strong>
                        </td>
                        <td class="text-primary">
                          {student.home.country}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Có thời hạn đến</strong>
                        </td>
                        <td class="text-primary">{formatDate(student.dob)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="text-center">
          <div class="spinner-grow" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default User1;
