import React, {useEffect, useState} from 'react'
import {useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const View = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  console.log(id);

  const [student, setStudent] = useState([]);


  useEffect(() => {
    getStudent();
  },[]);

  const getStudent = async () => {
    axios.get(`http://localhost:1111/student/${id}`).then((response) => {
     // console.log(response)
      setStudent(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }

  const useClick =() => {
    navigate('/');
  }

  return (
    <>
      <h2>STUDENT Details</h2>
      <table className='table'>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{student.id}</th>
            <td>{student.stuname}</td>
            <td>{student.email}</td>

          </tr>
        </tbody>
      </table>
      <button onClick={useClick}>Back to Home</button>
    </>
  )
}

export default View