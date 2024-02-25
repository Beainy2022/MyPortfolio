import React from 'react'
import  { Link } from "react-router-dom"
const Footer = () => {
  return (

<footer class="bg-black rounded-lg shadow m-4 dark:bg-gray-800 mt-0 ml-0 mr-0 mb-0">
    <div class="container-fluid  mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">MyPortfolio™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
        <Link to ='/' class="hover:underline me-4 md:me-6">Home</Link>
        </li>
        <li>
        <Link to ='/About' class="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
        <Link to ='/Project' class="hover:underline me-4 md:me-6">Project</Link>
        </li>
        <li>
        <Link to ='/Contact' class="hover:underline me-4 md:me-6">Contact</Link>
        </li>
    </ul>
    </div>
</footer>


  )
}

export default Footer