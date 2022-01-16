import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./Navbar.module.scss";


export default function NavBar(props) {

    
    const closeNavbar =() =>{
        if (window.matchMedia("screen and (max-width: 991px)").matches) {
            document.getElementById("collaspe-btn").click();
        }
    }
    return (
        <div className={`navbar-wrapper ${styles.navBarWrapper}`}>
        <Navbar sticky="top" id="navbar" className={`navbar-expand-lg ${styles.navBar}`} collapseOnSelect={true} expand="lg">
            <Container className={styles.navBarContainer}>
                <Navbar.Brand className={styles.navBarBrand}>
                    <a href="https://www.jobsity.com/" className={styles.linkBrand} aria-label="Logo" target="_blank" rel="noopener noreferrer">
                        <img src={props.logo} alt="Coffe Make" className={`logo ${styles.logo}`} />
                        <img src={props.logo_sticky} alt="Coffe Make" className={`logo-sticky ${styles.logo_sticky}`}/>
                    </a>
                </Navbar.Brand>
                <div className={`toggle-button ${styles.toggleButton}`}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" id="collaspe-btn"/>
                </div>
                
                <Navbar.Collapse id="basic-navbar-nav" className={styles.navBarCollapse}>
                    <div className={styles.closeButton}>
                        <button type="button" onClick={closeNavbar}><span></span></button>
                    </div>
                    <Nav className={`ml-auto ${styles.nav}`}>
                        <Nav.Item className={styles.navItem}>
                            <a href="https://www.jobsity.com/"  className={styles.navLink} aria-label="Program" target="_blank" rel="noopener noreferrer">
                                Program
                            </a>
                        </Nav.Item>
                        <Nav.Item className={styles.navItem}>
                            <a href="https://www.jobsity.com/" className={styles.navLink} aria-label="Gallery" target="_blank" rel="noopener noreferrer">
                                Gallery
                            </a>
                        </Nav.Item>
                        <Nav.Item className={styles.navItem}>
                            <a href="https://www.jobsity.com/" className={styles.navLink} aria-label="Reviews" target="_blank" rel="noopener noreferrer">
                                Reviews
                            </a>
                        </Nav.Item>
                        <Nav.Item className={styles.navItem}>
                            <a  href="https://www.jobsity.com/" className={styles.navLink} aria-label="Partners" target="_blank" rel="noopener noreferrer">
                                Partners
                            </a>
                        </Nav.Item>
                        <Nav.Item className={styles.navItem}>
                            <a href="https://www.jobsity.com/" className={styles.navLink} aria-label="Contact" target="_blank" rel="noopener noreferrer">
                                Contact
                            </a>
                        </Nav.Item>
                        <div className={styles.contentPhone}>
                            <a href="tel:+38 (099) 66-11-730" className={styles.phone} aria-label="Phone" target="_blank" rel="noopener noreferrer">
                                +38 (099) 66-11-730
                            </a>
                        </div>
                    </Nav>  
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    </div> 
    )
}


NavBar.defaultProps = {
    logo: require("../../../resources/images/logo.png"),
    logo_sticky: require("../../../resources/images/logo_sticky.png")
}
