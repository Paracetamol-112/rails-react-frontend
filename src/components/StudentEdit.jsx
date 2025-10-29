import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StudentForm from "./StudentForm";

export default function StudentEdit() {
  const [student, setStudent] = useState({});
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/students/${id}`)
      .then((response) => response.json())
      .then((data) => setStudent(data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (formData) => {
    fetch(`http://localhost:5000/api/v1/students/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify(formData),
    })
    .then((response) => {
      if (response.ok) {
        navigate(`/students/index`);
        return response.json()
      }
    })
    .then((data) => console.log(data.message))
    .catch((error) => console.error(error));
  };

  return (
    <>
      {student.id ? (<StudentForm student={student} handleSubmit={handleSubmit} />) :(<div>Loading...</div>)}
    </>
  );
};