import React from 'react'

const Header = ({children}) => {
  return (
    <div className="noise-bg-dark-to-light">
        {children}
    </div>
  )
}

export default Header;