import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function StudentShow() {
  const [student, setStudent] = useState({});
  const {id} = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/students/${id}`)
        .then(response => response.json())
        .then(data => setStudent(data))
        .catch(error => console.log(error));
  }, [id]);

  return (
      <div className="m-5">
        <h3 className="m-5">Student Show</h3>
        <div className="m-5" v>
          <p><strong>ID:</strong> {student.id}</p>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Roll Number:</strong> {student.rollnumber}</p>
          <Link to="/students/index">Back to Home</Link>
        </div>
      </div>
  );
}