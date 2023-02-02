import React,{useEffect,useState} from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import Employees from './Employees';
import {Link} from 'react-router-dom';

export default function Home() {
    const [values, setValues] = useState([])

    useEffect(()=>{
        const values =localStorage.getItem("values")
        setValues(JSON.parse(values))
    },[])

    let history = useNavigate();

    const handleEdit = (id , name , age , image) => {
        localStorage.setItem('Name' , name);
        localStorage.setItem('Age' ,age);
        localStorage.setItem('Id' , id);
        localStorage.setItem('file' , image);
    }

    const handleDelete = (id)=> {

        var index = Employees.map(function(e){
            return e.id 
        }).indexOf(id);
        Employees.splice(index,1);

        history('/');
    }
   
    

  return (
    <>
        <div style={{margin:"10rem"}}>
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
                {/* <th>
                    id
                </th> */}
                <th>
                    Name
                </th>
                <th>
                    Age
                </th>
                <th>
                    Image
                </th>
                <th>
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
           {
              Employees.length > 0
              ?

              Employees.map((item) => {
                return(
                    <tr>
                        {/* <td>
                            {item.id}
                        </td> */}
                        <td>
                            {item.Name}
                        </td>
                        <td>
                            {item.Age}
                        </td>
                        <td>
                            {/* <img  style={{width:"100px",height:"100px"}}/> */}
                            {item.file}
                        </td>
                        <td>
                            <Link to={'/edit'}>
                        <Button onClick={() => handleEdit(item.id , item.Name , item.Age , item.click)} style={{backgroundColor:"gray"}}>Edit</Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => handleDelete(item.id)} style={{backgroundColor:"gray"}}>Delete</Button>
                        </td>
                    </tr>
                
                    )
                    })
                    :
                    "No Data Available Here Fill "
              
            }
            
        </tbody>
        </Table>
        <br/>
        <Link className='d-grid gap-2' to={'/create'}>
            <Button size='1g'>Create</Button>
        </Link>
        </div>
    </>
  )
}
