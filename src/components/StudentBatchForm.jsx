import { useState } from 'react';

export default function StudentBatchForm({ handleSubmit }) {
  const [students, setStudents] = useState([
    { name: '', email: '', rollnumber: '' },
  ]);

  const handleChange = (index, event) => {
    const updatedStudents = [...students];
    updatedStudents[index][event.target.name] = event.target.value;
    setStudents(updatedStudents);
  };

  const addStudent = () => {
    setStudents([...students, { name: '', email: '', rollnumber: '' }]);
  };

  const removeStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const formattedData = students.map((s) => ({
      ...s,
      rollnumber: parseInt(s.rollnumber, 10),
    }));
    handleSubmit(formattedData);
  };

  return (
    <section className="m-5">
      <h3 className="m-5">Batch Student Form</h3>
      <form onSubmit={formSubmit} className="m-5">
        {students.map((student, index) => (
          <div key={index} className="border p-3 mb-3 rounded">
            <h5>Student {index + 1}</h5>
            <div className="form-group my-2">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter name"
                value={student.name}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            <div className="form-group my-2">
              <label>Email:</label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={student.email}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            <div className="form-group my-2">
              <label>Roll Number:</label>
              <input
                type="text"
                name="rollnumber"
                className="form-control"
                placeholder="Enter Roll Number"
                value={student.rollnumber}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            {students.length > 1 && (
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => removeStudent(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className="btn btn-secondary"
          onClick={addStudent}
        >
          + Add Another Student
        </button>

        <button type="submit" className="btn btn-primary my-3">
          Submit All
        </button>
      </form>
    </section>
  );
}
