import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { MdFacebook } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <Navbar className="bg-nav" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
              <NavDropdown
                title="Portfolio"
                id="basic-nav-dropdown"
                to="./pages/portfolio"
              >
                <NavDropdown.Item as={NavLink} to="/portfolio">
                  Portfolio
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/portfolio/category1">
                  Category 1
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/portfolio/category2">
                  Category 2
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/portfolio/category3">
                  Category 3
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/blog">
                  Blog
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/blog/latest">
                  Latest posts
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/blog/submit">
                  Submit to blog
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/blog/featured">
                  Featured posts
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/blog/popular">
                  Most Popular
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact & FAQ
              </NavLink>
              <NavLink className="nav-link" to="/careers">
                Careers
              </NavLink>
              <NavDropdown title="Webshop" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/shop">
                  Webshop
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/shop/category1">
                  Category 1
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/shop/category2">
                  Category 2
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/shop/category3">
                  Category 3
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/shop/category4">
                  Category 4
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand>
            <div className="logo-container">
              <div className="logo">
                <img
                  src="/img/logo-gobbo.png"
                  alt="Inner Goblin Logo"
                  className="logo-img"
                />
              </div>
              <div className="social-icons">
                <a href="https://www.facebook.com" className="social-icon">
                  <MdFacebook />
                </a>
                <a href="https://www.twitter.com" className="social-icon">
                  <BsTwitter />
                </a>
                <a href="https://www.instagram.com" className="social-icon">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </Navbar.Brand>
        </Navbar>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
      <section>
        <Footer />
      </section>
    </div>
  );
}
