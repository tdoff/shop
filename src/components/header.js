import React from "react"
import { FiMenu, FiBookmark, FiShoppingBag, FiArrowLeft } from "react-icons/fi"
import { Link } from "gatsby"

const Header = () => {
  try {
    const isMainPage = window.location.pathname === "/"
    return (
      <header>
        <div>
          {isMainPage ? (
            <FiMenu className="icon" />
          ) : (
            <FiArrowLeft
              className="icon"
              onClick={() => window.history.back()}
            />
          )}
          <Link className="brand-name" to="/">
            White Cat
          </Link>
        </div>
        <div>
          <FiBookmark className="icon" />
          <FiShoppingBag className="icon" />
        </div>
      </header>
    )
  } catch {
    return null
  }
}

export default Header
