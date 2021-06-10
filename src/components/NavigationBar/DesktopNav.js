import React from "react";
import "./NavigationBar.css";
import styled from "styled-components";
const greenPackage = require("../Logos/logo.png");

function DesktopNav() {
  return (
    <Navbar.Wrapper>
      <Navbar.Logo src={greenPackage.default}></Navbar.Logo>
      <Navbar.Items>
        <Navbar.Item>
          <a href="#home">Home</a>
        </Navbar.Item>
        <Navbar.Item>
          <a href="#contactus">Contact Us</a>
        </Navbar.Item>
      </Navbar.Items>
    </Navbar.Wrapper>
  );
}

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;

    align-self: flex-start;

    padding: 1rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background-color: white;
  `,
  Logo: styled.img`
    padding: 0.5rem 1rem;
    height: 10%;
    width: 10%;
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
  `,
  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;
    color: #033fb4;
    font-family: "Staatliches", cursive;
    font-size: 2rem;
    a {
      text-decoration: none;
      color: #033fb4;
    }
  `,
};

export default DesktopNav;
