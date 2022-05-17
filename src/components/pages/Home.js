import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import List from '../../Students/List'
import {useForm} from 'react-hook-form'

const Home = () => {
    const [student, setStudent] = useState({
        stuname: "",
        email: ""
    });
    const [errorName, setErrorName] = useState("");
    const [errorPsw, setErrorPsw] = useState("");

    const [status, setStatus] = useState(false);
    const onChangeInputField = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value,
        })

        // console.log(student)
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();
        if(student.stuname === "" && student.email === "" ) 
        {alert("Please fill all fields")}
         else if(student.email === "") {
            alert("Email is required");
        } else if (student.stuname === ""){
            alert("Name is required");
        }else {
            axios.post(`http://localhost:1111/student`, student).then((response) => {
                console.log(response);

            })

            setStatus(true);
        }

    }

    if(status) {
        return <Home />
    }

    return (
        <>
            <p className="h1 text-align-center">React CURD with API calls</p>
            <div className='container'>

                <div className='row'>
                    <div className='col-6'>
                        <h2>ADD STUDENT</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="stuname" value={student.stuname} onChange={e => onChangeInputField(e)} />
                                <span>{errorName}</span>
                            </div>



                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="exampleInputPassword1" name='email' value={student.email} onChange={e => onChangeInputField(e)} />
                            </div>

                            <button type="submit" className="btn btn-primary" onClick={e => onFormSubmit(e)}>ADD</button>
                        </form>
                    </div>
                    {/* ------------STUDENT LIST------------- */}

                    <div className='col-6'>
                        <List />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home