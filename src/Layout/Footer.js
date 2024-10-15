import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const PageFooter = () => {



  return (
    <footer id="footer" className='p-4 shadow md:flex md:items-center md:justify-between md:p-6 '>
    <span className="text-md text-gray-500 sm:text-center">© 2023 <a href="https://www.startproject.gr/school-of-code/" className="hover:underline hover:text-red-600">Start School Of Code</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-gray-500 sm:mt-0">
    <h3 className='text-gray-500'>TEAM PROJECT BY:</h3> 
  
     </ul>
     </footer>
  )
}

export default PageFooter