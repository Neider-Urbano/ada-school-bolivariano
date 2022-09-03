import React from 'react'
import {Li, A} from "../../style-components/NavBar/style"

const OptionsNavBar = ({textLi,href}) => {
  return (
    <Li className="nav-item">
        <A href={href} className="nav-link">
            {textLi}
        </A>
    </Li>
  )
}
export default OptionsNavBar