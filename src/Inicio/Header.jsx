import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import styles from '../CSS/containerNavbar.module.css'
import { Link } from 'react-router-dom'


const Header = () => {

  return (


    <Navbar className={styles.containerNavbar}>
      <Container className={styles.containerNav}>
          Delivery Pepote
        <Link to='/crearpedidos'>
            <Button className={styles.buttonsNav} variant="warning">Hacer Pedidos</Button>
        </Link>
        <Link to='/'>
          <Button className={styles.buttonsNav} variant="warning">Historial de pedidos</Button>
        </Link>

    </Container>
  </Navbar>

  )
}

export default Header