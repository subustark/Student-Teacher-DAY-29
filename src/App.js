

import "./sb-admin-2.min.css"
import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Login from './Login';
import Portal from "./Components/Portal";
import Dashboard from "./Components/Dashboard";
import { UserProvider } from "./UserContext";
import { useState } from "react";
import AddStudent from "./Components/AddStudent";
import View from "./Components/View";
import Edit from "./Components/Edit";

function App() {
  const [Student,setStudent]=useState([
    {
      id:'1',
      name:"Subu",
      gender:"Male",
      gpa:"8.3",
     dob:"25/05/1998",
      average:"93%",
      father:"Elumalai",
      mother:"Sheela",
      number:"8098099259",
      job:"Private Job",
    },
    {
      id:'2',
      name:"Rakesh",
      gender:"Male",
      gpa:"8.1",
     dob:"10/12/1997",
      average:"81%",
      father:"Ramesh",
      mother:"Raji",
      num:"9123531318",
      job:"Building Contractor",
    },
    {
      id:'3',
      name:"Dev",
      gender:"Male",
      gpa:"8.7",
     dob:"11/11/1997",
      average:"87%",
      father:"Sekar",
      mother:"uma",
      num:"9444407950",
      job:"Real Estate",
    },
    {
      id:'4',
      name:"Benita",
      gender:"Female",
      gpa:"8.4",
     dob:"15/06/1998",
      average:"84%",
      father:"Zachariah",
      mother:"shagila",
      num:"9790795195",
      job:"Head Master",
    },
    {
      id:'5',
      name:"Betina",
      gender:"Female",
      gpa:"8.6",
     dob:"15/06/1999",
      average:"86%",
      father:"Zachariah",
      mother:"Shagila",
      num:"7305151571",
      job:"Govt Job",
    },
    {
      id:'6',
      name:"Bhuvi",
      gender:"Female",
      gpa:"8.1",
     dob:"10/10/1998",
      average:"81%",
      father:"Guna",
      mother:"Anjali",
      num:"9003492282",
      job:"Business",
    },
   
      ])
  
  return (
    <div className="App">
      <BrowserRouter>
      <UserProvider>
      <Routes>
        <Route path='/' element={<Login/>} style={{backgroundColor:"#DBF477"}}/>
        <Route path='/portal' element={<Portal/>}>
    
<Route path='dashboard' element={<Dashboard  Student={Student} setStudent={setStudent}/>}/>
<Route path='add' element={<AddStudent  Student={Student} setStudent={setStudent}/> }/>
<Route path="view/:id" element={<View Student={Student}/>}/>
<Route path="edit/:id" element={<Edit   Student={Student} />}/>
</Route>
      </Routes>
      </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
