import React, { useState } from 'react'
import './Nav.css'
import IMG1 from '../../assets/forgery.png'



// import { FaHome } from 'react-icons/fa'
// import { AiOutlineUserAdd } from 'react-icons/ai'
// import { FcAbout } from 'react-icons/fc'
// import { BiConversation } from 'react-icons/bi'
// import { AiFillContacts } from 'react-icons/ai'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';



// ===generating navbar Items from Array using map method===

// const data = [
//   {
//     id: 1,
//     title: 'Home',
//     icon: <FaHome />,
//     url: '#'
//   },
//   {
//     id: 2,
//     title: 'About',
//     icon: <FcAbout />,
//     url: '#About'
//   },
//   {
//     id: 3,
//     title: 'Services',
//     icon: <BiConversation />,
//     url: '#services'
//   },
//   {
//     id: 4,
//     title: 'Contact',
//     icon: <AiFillContacts />,
//     url: '#contact'
//   },
//   {
//     id: 5,
//     title: 'SignUp',
//     icon: <AiOutlineUserAdd />,
//     url: '#signup'
//   }
// ]

// const Nav = () => {
//   return (
//     <section id='navbar'>
//       <nav className='container container_navbar'>
//         <img src="" alt="logo_img" className="navbar_logo" />
//         <ul className="container navbar_menu">
//           {
//             data.map(({ id, title, icon, url }) => {
//               return (
//                 <li key={id}>
//                   <a href={url} className="navbar_menu-items">{icon}{title}</a>
//                 </li>
//               )
//             })
//           }
//         </ul>
//       </nav>
//     </section>
//   )
// }


// =====NAVBAR USING BOOTSTRAP===

// function Navbr() {
//   return (
//     <Navbar expand="lg">
//       <Container fluid>
//         <Navbar.Brand href="#">
//           <img src={IMG1} alt="logo_img" className='logo' />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >

//           </Nav>
//           {
//             data.map(({ id, title, icon, url }) => {
//               return (
//           <Nav.Link key={id} href={url}>{icon}{title}</Nav.Link>
//           )
//                       })
//                     }
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }


const Nav = () => {

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 110) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)
  return (
    <header className={color ? 'navbar1 navbar2' : 'navbar1'}>
      <img src={IMG1} alt="logo_img1" className='logo_img1' />
      <div className="navbar_options">
        <ul className='navbar_menu'>
          <li><a href="#" className='btns'>Home</a></li>
          <li><a href="#about" className='btns'>About</a></li>
          {/* Add more language buttons as needed */}
        </ul>
      </div>
    </header>
  )
}

export default Nav;