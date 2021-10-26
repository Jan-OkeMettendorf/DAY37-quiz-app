import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

function Navbar() {
    return (
        <NavBarContainer>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/add-question">Add Question</NavItem>
            <NavItem to="/play">Play</NavItem>
            <NavItem to="/login">Login</NavItem>
        </NavBarContainer>
    )
}

export default Navbar

const NavBarContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 40px;
`
const NavItem = styled(NavLink)`
  color: white;

  &hover {
    color: #aec5eb;
  }

  &visited {
    color: white;
    text-decoration: none;
  }
`
