import { useState } from 'react';

export default function StudentForm({ student, handleSubmit }) {
  const [formData, setFormData] = useState({
    name: student.name || '',
    email: student.email || '',
    rollnumber: student.rollnumber || '',
  });


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  }


  const formSubmit = (event) => {
    event.preventDefault();
    const formattedData = {
      ...formData,
      rollnumber: parseInt(formData.rollnumber, 10),
    };
    handleSubmit(formattedData);
  };

  return (
      <section className="m-5">
        <h3 className="m-5">Student Form</h3>
        <form onSubmit={formSubmit} className="m-5">
          <div className="form-group my-2">
            <label>Name:</label>
            <input type="text" name="name" className="form-control" placeholder="Enter name" value={formData.name} onChange={handleChange}/>
          </div>
          <div className="form-group my-2">
            <label>Email:</label>
            <input type="text" name="email" className="form-control" placeholder="Enter email" value={formData.email} onChange={handleChange}/>
          </div>
          <div className="form-group my-2">
            <label>Roll Number:</label>
            <input type="text" name="rollnumber" className="form-control" placeholder="Enter Roll Number" value={formData.rollnumber} onChange={handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary my-2">Submit</button>
        </form>
      </section>
  );
}