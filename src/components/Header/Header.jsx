import * as React from "react";
import styled from "styled-components";

const navItems = [
  { label: "Home", url: "/" },
  { label: "Find Doctors", url: "/find-doctors" },
  { label: "About Us", url: "/about-us" },
];

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <LogoAndNav>
          <Logo
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/90be0f447220294bda95799dc50881203c46da486e51f33fb11c9539124252fc?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
            alt="Logo"
          />
          <Nav >
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                isActive={item.label === "Find Doctors"}
              >
                {item.label}
              </NavItem>
            ))}
          </Nav>
        </LogoAndNav>
        <AuthButtons>
          <LoginButton>Login</LoginButton>
          <SignupButton>Sign-up</SignupButton>
        </AuthButtons>
      </HeaderContent>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background-color: #fff7e2;
  padding: 19px 60px;

  @media (max-width: 991px) {
    padding: 19px 20px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1232px;
  margin: 0 auto;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const LogoAndNav = styled.div`
  display: flex;
  align-items: center;
  gap: 82px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled.img`
  width: 259px;
  aspect-ratio: 5.26;
  object-fit: contain;
`;

const Nav = styled.nav`
  display: flex;
  gap: 50px;
  font-size: 20px;
  color: #474747;
  text-transform: capitalize;
  line-height: 140%;

  :hover {
    color: #3a643b;
    font-weight: 700;
    font-family: DINPro-Bold, sans-serif;
  }
`;

const NavItem = styled.a`
  font-family: ${(props) => (props.isActive ? "DINPro-Bold" : "DINPro")},
    sans-serif;
  font-weight: ${(props) => (props.isActive ? "700" : "500")};
  color: ${(props) => (props.isActive ? "#3a643b" : "inherit")};
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 16px;
  font-size: 24px;
  white-space: nowrap;
  :hover {
    cursor: pointer;
    background-color: #3a643b;
    color: #fff;
  }

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const LoginButton = styled.button`
  font-family: DINPro, sans-serif;
  border-radius: 11px;
  border: 1px solid #3a643b;
  background-color: #fff7e2;
  color: #3a643b;
  padding: 11px 29px 16px;

  @media (max-width: 991px) {
    padding: 11px 20px 16px;
  }
`;

const SignupButton = styled.button`
  font-family: DINPro, sans-serif;
  border-radius: 11px;
  background-color: #3a643b;
  color: #fff;
  padding: 16px 39px 20px;

  @media (max-width: 991px) {
    padding: 16px 20px 20px;
  }
`;

export default Header;
