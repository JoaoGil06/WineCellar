import styled from "styled-components";

export const Container = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem 0 5rem;
  background: #fff;
`;
export const NavbarLogo = styled.div`
  font-size: 2rem;
  font-weight: bold;

  a {
    color: #828282;
  }
`;
export const NavbarMenu = styled.div`
  ul {
    display: flex;
    list-style-type: none;
  }

  ul li {
    font-size: 1.5rem;

    &:not(:last-child) {
      margin-right: 5rem;
    }

    a {
      color: #828282;
      font-weight: 400;
    }
  }
`;
