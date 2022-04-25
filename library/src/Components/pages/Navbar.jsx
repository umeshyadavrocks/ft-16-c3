import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";


const Nav = styled.nav`

display: flex;
justify-content: space-evenly;
background-color: #fd9b95;
padding: 10px 0;
font-weight: bold;

`
const Snav  = styled(NavLink)`
text-decoration: none;
width: 200px;
&:focus{
  color: red;
}
`

export const Navbar = () => {
  const { token,handleLogout } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully

  return (
    <>
      <Nav>
        {/* keep all the NavLinks here */}
        <Snav to="/">Home</Snav>
        <Snav to="/about">About</Snav>
        <Snav to="/books">Books</Snav>
        {token?<div onClick={handleLogout}>logout</div>:<Snav to="/login">Login</Snav>}
      </Nav>
    </>
  );
};