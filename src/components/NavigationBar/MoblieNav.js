import React from "react";
import styled from "styled-components";
import { Home, Send } from "react-feather";

function MobileNav() {
  return (
    <MobileNavbar.Wrapper>
      <MobileNavbar.Items>
        <a href="#home">
          <MobileNavbar.Item>
            <MobileNavbar.Icon>
              <Home size={16} />
            </MobileNavbar.Icon>
            Home
          </MobileNavbar.Item>
        </a>
        <a href="#contactus">
          <MobileNavbar.Item>
            <MobileNavbar.Icon>
              <Send size={16} />
            </MobileNavbar.Icon>
            Contact Us
          </MobileNavbar.Item>
        </a>
      </MobileNavbar.Items>
    </MobileNavbar.Wrapper>
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

    background-color: white;
  `,
  Logo: styled.h1`
    border: 1px solid gray;
    padding: 0.5rem 1rem;
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
    a {
      text-decoration: none;
    }
  `,
  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;
    font-family: "Staatliches", cursive;
    color: #033fb4;
  `,
};

const MobileNavbar = {
  Wrapper: styled(Navbar.Wrapper)`
    position: fixed;
    width: 100vw;
    bottom: 0;
    overflow-y: scroll;
    justify-content: center;
    -webkit-overflow-scrolling: touch;
  `,
  Items: styled(Navbar.Items)`
    flex: 1;
    padding: 0 2rem;

    justify-content: space-around;
  `,
  Item: styled(Navbar.Item)`
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 1.2rem;
  `,
  Icon: styled.span``,
};

export default MobileNav;
