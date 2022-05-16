import React from 'react'
import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Edit = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    stuname: "",
    email: ""
  })

  useEffect(() => {
    getStudent();
  }, []);

  const getStudent = async () => {
    axios.get(`http://localhost:1111/student/${id}`).then((response) => {
      // console.log(response)
      setStudent(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }
  const onChangeInputField = (e) => {
    setStudent({
        ...student,
        [e.target.name] : e.target.value,
    })

    // console.log(student)
}
  const onFormSubmit = async (e) => {
    e.preventDefault();
    axios.put(`http://localhost:1111/student/${id}`, student).then((response) => {
      console.log(response);
    })
    navigate('/')
  }
  const useClick =() => {
    navigate('/');
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <h2>EDIT STUDENT</h2>
            <form>
              <div className="mb-3">

                <label htmlFor="exampleInputEmail1" className="form-label">ID</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={student.id} />
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='stuname' value={student.stuname} onChange={e=> onChangeInputField(e)}/>


                <label htmlFor="exampleInputPassword1" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="exampleInputPassword1" name='email' value={student.email}  onChange={e=> onChangeInputField(e)}/>

              </div>

              <div className="mb-3">
                <button type="submit" className="btn btn-primary" onClick={e=>onFormSubmit(e) }>UPDATE</button>
              </div>

              <div className='mb-3'>
                <button type="submit" className="btn btn-primary" onClick={useClick}>BACK TO HOME</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Edit