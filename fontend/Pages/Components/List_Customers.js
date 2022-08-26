import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function CustomerTable(props) {
  const [students, setStudents] = useState(null);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    setStudents(props.data);
  }, [props.data]);

  const sortColumn = (field, type) => {
    const sortData = [...students]; 
    if (type == 'string') {
      sortData.sort((a, b) => direction * a[field].localeCompare(b[field]));
    } else if (type == 'number') {
      sortData.sort((a, b) => direction * (a[field] - b[field]));
    }
    setDirection(direction * -1);
    setStudents(sortData);
  };

  const deleteUser = (id) => {
    fetch('https://62b41523530b26da4cb5ec39.mockapi.io/students/' + id, {
      method: 'DELETE',
    }).then(() => {
      console.log('delete successful!!');
      let result = [...students];
      result = result.filter((item) => {
        return item.id != id;
      });
      setStudents(result);
    });
  };

  console.log('student table main');
  var student_list = [];
  if (students != null) {
    student_list = students.map((item) => (
      
      <tr
        key={item.id}>
        <td>{item.id}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.home.address}</td>
        <td>
          <Link to={'/user/' + item.id}>Xem lại thông tin</Link>
        </td>
        <td>
          <Link to={'/useredit/' + item.id}>
            <button type="button" className="btn btn-primary">
              Edit
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteUser(item.id)}
          >
            <i className="fa fa-trash text-danger" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    ));
  }

  return (
    <table className="table">
      <tr>
        <th>ID</th>
        <th onClick={() => sortColumn('firstName', 'string')}>Họ tên</th>

        <th onClick={() => sortColumn('lastName', 'string')}>
          Ngân hàng <span> </span>
          
        </th>
        <th>Số thẻ ngân hàng</th>
        <th onClick={() => sortColumn('mark', 'number')}> Số tài khoản </th>
        <th>Thông tin thẻ</th>
      </tr>
      {student_list}
    </table>
  );
}

export default CustomerTable;
