import { Container } from "react-bootstrap";
import {Image} from "react-bootstrap"; //! bu yöntem diğer yönteme göre daha az tavsiye edilen
import logo from "../assets/nba-logo.png";

const Header = () => {
  return (
   <Container>
    <Image src={logo} width="200px" />
    <h1 className="my-2">NBN LEGENDS</h1>
   </Container>
  )
}

export default Header;
