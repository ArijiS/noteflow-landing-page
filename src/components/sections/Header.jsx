import React from 'react'

const Header = ({children}) => {
  return (
    <div className="py-10 px-25 bg-linear-to-b from-primary-1500 to-primary-1300 ">
        {children}
    </div>
  )
}

export default Header