import React from 'react'

const Header = ({children}) => {
  return (
    <div className="bg-linear-to-b from-primary-1500 to-primary-1300 ">
        {children}
    </div>
  )
}

export default Header