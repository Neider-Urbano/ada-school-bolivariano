import React from 'react'
import { Link } from 'react-router-dom'
import {Li, A} from "../../style-components/NavBar/style"

const OptionsNavBar = ({textLi,href}) => {
  return (
    <Li className="nav-item">
      <Link to={href}>
        <A className="nav-link">
            {textLi}
        </A>
        </Link>
    </Li>
  )
}
export default OptionsNavBar