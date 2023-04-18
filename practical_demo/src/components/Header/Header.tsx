import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

type Props = {}

const Header = (props: Props) => {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="#home">Simform Practicals</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header