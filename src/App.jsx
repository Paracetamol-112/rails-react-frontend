import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentIndex from "./components/StudentIndex";
import StudentShow from "./components/StudentShow";
import StudentCreate from "./components/StudentCreate";
import StudentEdit from "./components/StudentEdit";

export default function App() {
 return (
  <BrowserRouter>
   <div>
    <Routes>
     <Route path='/' exact element={<StudentIndex />} />
     <Route path='/students/index' exact element={<StudentIndex />} />
     <Route path='/students/:id/show' exact element={<StudentShow />} />
     <Route path='/students/create' exact element={<StudentCreate />} />
     <Route path='/students/:id/edit' exact element={<StudentEdit />} />
    </Routes>
   </div>
  </BrowserRouter>
 );
}