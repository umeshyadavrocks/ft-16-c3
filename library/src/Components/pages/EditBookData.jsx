// import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Input } from "./Login";
// import { Link, useParams } from "react-router-dom";


// add style for form
export const Form = styled.form`
`;
// add style for text area
export const Textarea = styled.textarea`

`;

export const EditBookData = () => {

  const [pl, setPl] = useState({
    thumbnailUrl:"",
    longDescription:"",
  })
  const handleChange=(e) => {
    setPl({...pl,
      [e.target.name]: e.target.value
    })
    console.log(pl)
  }

  const { id } = useParams();
  const navigate = useNavigate()
  const handleUpdate = (e) => {
    
    e.preventDefault();
    fetch(`http://localhost:8080/books/${id}`,{
      method:"PATCH",
      body:JSON.stringify(pl),
      headers: { "Content-Type": "application/json" },
    })
    navigate(`/books/${id}`)
  };

  return (
    <>
      <Form onSubmit={handleUpdate}>
        <Input
          name="thumbnailUrl"
          data-testid="update-form-thumbnail"
          placeholder="Enter updated thumbnail url"
          onChange={handleChange}
        />
        <Textarea
          name="longDescription"
          data-testid="update-form-description"
          placeholder="Update long Description"
          onChange={handleChange}

        />
        <Input dat-testid="update-form-submit" type="submit" value="Update" />
      </Form>
    </>
  );
};