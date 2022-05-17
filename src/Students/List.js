import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Navbar, Nav, Button, Modal, ModalBody, ModalFooter} from 'react-bootstrap';

const List = () => {


    const [students, setStudents] = useState([]);
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);


    useEffect(() => {
        getAllStudent();
    }, []);

    const getAllStudent = async () => {
        axios.get("http://localhost:1111/student").then((response) => {
            // console.log(response)
            setStudents(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleDelete = (id) => {

        const confirm = window.confirm("Are you sure delete", id);
        if(confirm) {
            axios.delete(`http://localhost:1111/student/${id}`);
            let newStudent = students.filter((item) => {
                console.log(item);
                return item.id !== id;
            })
            setStudents(newStudent);
        }
    }

    return (
        <>
            <h2>STUDENT LIST</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student, i) => {
                            return (
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{student.stuname}</td>
                                    <td>{student.email}</td>
                                    <td>
                                        <nav>
                                            <Link to={`/view/${student.id}`}>View</Link> |{" "}
                                            <Link to={`/edit/${student.id}`}>Edit</Link> |{" "}
                                            <button onClick={() => {handleDelete(student.id)}}>Delete</button>
                                        </nav>
                                    </td>
                                </tr>
                            )
                        })
                    }



                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </tbody>
            </table>
        </>
    )
}

export default List