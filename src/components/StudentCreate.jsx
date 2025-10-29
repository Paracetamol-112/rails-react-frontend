import { useNavigate } from "react-router-dom";
import StudentBatchForm from "./StudentBatchForm";

export default function StudentCreate() {
  const navigate = useNavigate();

  function handleSubmit(students) {
    console.log(students)
    fetch("http://localhost:5000/api/v1/students/batch_create", {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({students}),
    })
    .then((response) => {
      if (response.ok) {
        navigate(`/students/index`);
        return response.json();
      }
    })
    .then((data) => console.log(data.message))
    .catch((error) => console.error(error));
  };

  return (
    <StudentBatchForm handleSubmit={handleSubmit} />
  );
}








// import { useNavigate } from "react-router-dom";
// import StudentForm from "./StudentForm";

// export default function StudentCreate() {
//   const navigate = useNavigate();

//   function handleSubmit(formData) {
//     fetch("http://localhost:5000/api/v1/students", {
//       method: "POST",
//       headers: { "Content-Type": "application/json", },
//       body: JSON.stringify(formData),
//     })
//     .then((response) => {
//       if (response.ok) {
//         navigate(`/students/index`);
//         return response.json();
//       }
//     })
//     .then((data) => console.log(data.message))
//     .catch((error) => console.error(error));
//   };

//   return (
//     <StudentForm student={{}} handleSubmit={handleSubmit} />
//   );
// }