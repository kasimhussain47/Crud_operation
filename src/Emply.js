import React, { useState, useEffect } from "react";
import { Button, Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Employees from "./Employees";

export default function Emply() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  // const [file, setFile] = useState("");


  let history = useNavigate();
//   function handleChange(e) {
//     console.log(e.target.files);
//     setFile(URL.createObjectURL(e.target.files[0]));
// }
const [click, setClick] = useState("");

// const handleClick=(e)=>
// {
//     var values=JSON.parse(localStorage.getItem("values")||"[]")

//     var kush={
//         name:name,click:file
//     }
//     values.push(kush)
//     localStorage.setItem("values",JSON.stringify(values))
//     sessionStorage.setItem("values",JSON.stringify(values))

//     alert("image uploaded")
// }
const [file, setFile] = useState();
function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}
  const handleSubmit = (e) => {
    e.preventDefault();
    var values = JSON.parse(localStorage.getItem("values") || "[]");
      var kush = {
        name:name,click:file
      };
      values.push(kush);
      localStorage.setItem("values", JSON.stringify(values));
    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = age;

    Employees.push({ id: uniqueId, Name: a, Age: b });

    history("/");
  };
  // useEffect(() => {
  //   localStorage.setItem("Name", JSON.stringify(name));
  //   localStorage.setItem("Age", JSON.stringify(age));
  //   localStorage.setItem("Image", JSON.stringify(click));
  //   localStorage.getItem('Id' , JSON.stringify(id))
  // }, [name, age]);
  // const handleOn = () => {
  //   var values = JSON.parse(localStorage.getItem("values") || "[]");
  //   var kush = {
  //     name: name,
  //     age: age,
  //   };
  //   values.push(kush);
  //   localStorage.setItem("values", JSON.stringify(values));

  //   //this is used for sessionstorage

  //   sessionStorage.setItem("values", JSON.stringify(values));
  // };
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: "#3e5679",
          width: "600px",
          height: "400px",
          // marging: "-50px 50px 50px 50px ",
          marginTop: "100px",
          borderRadius: "10px",
          boxShadow: "5px 5px 7px 7px",
        }}
      >
        <Form
          // onSubmit={handleOn}
          style={{
            paddingTop: "100px",
            backgroundColor: "#d7d7d7",
            width: "500px",
            height: "300px",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            display: "static",
            borderRadius: "10px",
          }}
        >
          {/* <div style={{marginTop:"25%"}}>
        ID : &nbsp;&nbsp;
      <input  type="text" style={{borderColor:"gray" , borderRadius:"5px"}} />
    </div> */}
          <div style={{ padding: "60px 0px 0px -27px" }}>
            <b>Name :</b> &nbsp;&nbsp;
            <input
              type="text"
              style={{ borderColor: "gray", borderRadius: "5px" }}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div style={{ margin: "20px 0px 20px 11px" }}>
            <b>Age :</b> &nbsp;&nbsp;&nbsp;
            <input
              value={age}
              type="number"
              style={{ borderColor: "gray", borderRadius: "5px" }}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div style={{ margin: "0px 0px 30px 46px" }}>
            <b>Image :</b> &nbsp;&nbsp;&nbsp;
            <input
              value={age}
              type="file"
              accept="image/*"
              style={{ borderColor: "gray", borderRadius: "5px" }}
              // onChange={(e) => setFile(e.target.value)}
            />
            {/* <input type="file" onChange={handleChange} accept="image/*" value={click} style={{cursor:"pointer"}} />
            <img src={file} alt="" onChange={(event)=>{setClick(event.target.value)}} 
          style={{height:"300px",width:"500px"}}
        /> */}
            <input type="file" accept="image/*" onChange={handleChange} value={click}></input>
            <img src={file}  onChange={(event)=>{setClick(event.target.value)}} />
          </div>
          <div>
            <Link className="d-grid gap-3" to={"/"}>
              <Button
                size="1g"
                onClick={handleSubmit}
                style={{
                  marginTop: "35px",
                  width: "auto",
                  justifyContent: "center",
                  margin: "auto",
                  backgroundColor: "#3e5679",
                  borderColor:"black",
                  borderWidth:"3px",
                }}
              >
                Submit
              </Button>
            </Link>
            {/* <button></button> */}
          </div>
        </Form>
      </div>
    </>
  );
}
