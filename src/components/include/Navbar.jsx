import styled from "styled-components";
import Logo from "../../assets/Logo.svg";
import WishList from "../../assets/wishlist.svg";
import account from "../../assets/account.svg";
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import menuIcon from "../../assets/menu-dot.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 4% 1% 0;
  position: relative;
  @media (max-width: 900px) {
    padding: 1% 2%;
  }
`;

const Logoimg = styled.img`
pddding-left:10px;
  width: 100px;
  @media(max-width:400px){
  width:70px;
  }
`;

const NavUl = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 700px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: absolute;
    width: 250px;
    height: 50vh;
    top: 50px;
    right: 0;
    flex-direction: column;
    background-color: #fff;
    padding: 1rem;
    z-index: 1000;
  }
`;

const NavList = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: .9rem;
  padding: 1% 2%;
  &:hover {
    font-weight: bold;
  }
    @media(max-width:800px){
    padding:1%;
    font-size:.8rem;
    }
  @media (max-width: 700px) {
    padding: 0% 2%;
  }
`;

const SearchDiv = styled.div`
  padding: 0.6% 1%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background: rgba(246, 246, 246, 1);
  @media(max-width:400px){
  width:50vw;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  border: none;
  background: transparent;
  
`;

const SearchImg = styled.img`
  width: 20px;
  @media(max-width:400px){
  width:15px;
  }
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  @media (max-width: 1100px) {
    gap: 0;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const RightLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(246, 246, 246, 1);
  padding: 15% 10%;
  border-radius: 5px;
  @media (max-width: 1100px) {
    border-radius: 0px;
  }
`;

const Rightimg = styled.img`
  width: 18px;
  height:19px;
`;

const MenuIcon = styled.img`
  display: none;
  width: 5px;
  // margin-right:5px;
  cursor: pointer;
  @media (max-width: 700px) {
    display: block;
  }
`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarDiv>
      <Logoimg src={Logo} alt="Logo" />
      <NavUl isOpen={menuOpen}>
        <NavList to="/">Shop</NavList>
        <NavList to="/men">Men</NavList>
        <NavList to="/women">Women</NavList>
        <NavList to="/combos">Combos</NavList>
        <NavList to="/jogger">Jogger</NavList>
      </NavUl>
      <SearchDiv>
        <SearchInput type="text" placeholder="Search" />
        <SearchImg src={search} alt="search" />
      </SearchDiv>
      <RightDiv>
        <RightLink to="/wishlist" aria-label="Wishlist">
          <Rightimg src={WishList} alt="Wishlist" />
        </RightLink>
        <RightLink to="/account" aria-label="Account">
          <Rightimg src={account} alt="account" />
        </RightLink>
        <RightLink to="/cart" aria-label="Cart">
          <Rightimg src={cart} alt="cart" />
        </RightLink>
      </RightDiv>
      <MenuIcon src={menuIcon} onClick={toggleMenu} alt="menu" />
    </NavbarDiv>
  );
}

export default Navbar;
