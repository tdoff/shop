import React from "react"
import { FiMenu, FiBookmark, FiShoppingBag } from "react-icons/fi"

const Header = () => (
  <header>
    <div>
      <FiMenu className="icon" />
      <span className="brand-name">White Cat</span>
    </div>
    <div>
      <FiBookmark className="icon" />
      <FiShoppingBag className="icon" />
    </div>
  </header>
)

export default Header
