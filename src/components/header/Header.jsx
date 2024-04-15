import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
import logo from '../../assets/logo.png'

const Header = () =>{
    return <Container> <Image src={logo} width={100}/> <br/>
     <h1 className='my-2 title' >Country App</h1>
     </Container>
}

export default Header