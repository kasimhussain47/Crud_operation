import React, { useEffect , useState} from 'react'
import {Button, Table , } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useNavigate} from 'react-router-dom';
import Employees from './Employees';


export default function Edit() {

    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [id,setId] = useState("");

    let history = useNavigate();
    
    var index = Employees.map(function(e){
        return e.id 
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();
      
       let a = Employees[index];
       a.Name = name;
       a.Age = age;
        
      
        history("/");
      }

      useEffect(() => {
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setId(localStorage.getItem('Id'))
      },[])
  return (
    <div>
          <section>
    {/* <div style={{marginTop:"25%"}}>
        ID : &nbsp;&nbsp;
      <input  type="text" style={{borderColor:"gray" , borderRadius:"5px"}} />
    </div> */}
    <div style={{margin:"20px 0px 0px -27px"}}>
        Name : &nbsp;&nbsp;
      <input  type="text" value={name} style={{borderColor:"gray" , borderRadius:"5px"}} onChange={(e)=>(setName(e.target.value))} />
    </div>
    <div style={{margin:"20px 0px 0px -13px" , }}>
        Age : &nbsp;&nbsp;
      <input  type="number" value={age} style={{borderColor:"gray" , borderRadius:"5px"}} onChange={(e)=>(setAge(e.target.value))} />
    </div>
    <div>
    <Link className='d-grid gap-3' to={'/Home'}>
            <Button size='1g' onClick={handleSubmit}>Update</Button>
        </Link>
        </div>
    </section>
    </div>
  )
}
