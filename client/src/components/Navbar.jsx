import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSearch,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100vw;
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Left = styled.div`
  flex: 1;
`;

const Logo = styled.p`
  font-size: 45px;
  margin-left: 25%;
  color: black;
  font-family: "Dancing Script", cursive;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 0.7;
  color: #575050;
  font-family: "Nanum Gothic", sans-serif;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.a`
  line-height: 4;
  transition: all .2s ease-in;

  &:hover {
    cursor: pointer;
    font-size: 22px;
  }
`;

const Right = styled.div`
  flex: 1;
  color: #575050;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  cursor: pointer;
  margin-right: 35px;
  font-size: 20px;
  transition: all .05s ease-in;

  &:hover{
    padding: 15px;
    background-color: #ccc;
    border: 1px solid #ccc;
    border-radius: 100%;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Logo>D-Store</Logo>
      </Left>

      <Center>
        <LinkWrapper>
          <Link>HOME</Link>
          <Link>SHOP</Link>
          <Link>WOMEN'S</Link>
          <Link>MEN'S</Link>
          <Link>BROWSE</Link>
          <Link>BLOG</Link>
        </LinkWrapper>
      </Center>

      <Right>
        <IconWrapper>
          <Icon>
            <FontAwesomeIcon icon={faSearch} />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faUser} />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faBars} />
          </Icon>
        </IconWrapper>
      </Right>
    </Container>
  );
};

export default Navbar;
