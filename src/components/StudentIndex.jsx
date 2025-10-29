import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentList() {
 const [students, setStudents] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");
 const navigate = useNavigate();

 useEffect(() => {
  fetch("http://localhost:5000/api/v1/students")
   .then((response) => response.json())
   .then((data) => setStudents(data))
   .catch((error) => console.log(error));
 }, []);

 function handleDelete(id) {
  fetch(`http://localhost:5000/api/v1/students/${id}`, {
   method: "DELETE",
   headers: { "Content-Type": "application/json" },
  })
  .then((response) => response.json())
  .then(() => { setStudents(students.filter((student) => student.id !== id));})
  .catch((error) => console.log(error));
 }

 const handleShow = (id) => {
  navigate(`/students/${id}/show`);
 };

 const handleCreate = () => {
  navigate(`/students/create`);
 };

 const handleEdit = (id) => {
  navigate(`/students/${id}/edit`);
 };

 const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
 );

 return (
  <section className='m-5'>
   <h1 className='h1 text-center m-5'>Student Info</h1>

   <div className="d-flex justify-content-between mb-4">
    <input
      type="text"
      className="form-control w-25"
      placeholder="Filter by name or email..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button className='btn btn-dark' onClick={handleCreate}>Create New Student</button>
   </div>

   <table className='table table-striped'>
    <thead>
     <tr>
      <th scope='col'>ID</th>
      <th scope='col'>Name</th>
      <th scope='col'>Email</th>
      <th scope='col'>Roll Number</th>
      <th scope='col'>Actions</th>
     </tr>
    </thead>
    <tbody>
     {filteredStudents.map((student) => (
      <tr key={student.id}>
       <th scope='row'>{student.id}</th>
       <td className="fw-bold">{student.name}</td>
       <td>{student.email}</td>
       <td>{student.rollnumber}</td>
       <td>
        <button className='btn btn-primary mx-2' onClick={() => handleShow(student.id)}>Show</button>
        <button className='btn btn-success mx-2' onClick={() => handleEdit(student.id)}>Edit</button>
        <button className='btn btn-danger mx-2' onClick={() => handleDelete(student.id)}>Delete</button>
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </section>
 );
}