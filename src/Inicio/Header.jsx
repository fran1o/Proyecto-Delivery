import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import styles from '../CSS/containerNavbar.module.css'
import { Link } from 'react-router-dom'


const Header = () => {

  return (


    <Navbar className={styles.containerNavbar}>
    <Container>
      Delivery Pepote
      <Nav className="me-auto">
        <Link to='/crearpedidos'>
            <Button variant="warning">Hacer Pedidos</Button>
        </Link>
        <Link to='/historialpedidos'>
        <Button variant="warning">Historial de pedidos</Button>
        </Link>

      </Nav>
    </Container>
  </Navbar>

  )
}

export default Header