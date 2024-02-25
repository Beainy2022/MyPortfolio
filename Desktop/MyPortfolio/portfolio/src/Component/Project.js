import React from 'react'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'

const Project = () => {
  return (
    <div class="flex justify-center h-full gap-6 bg-gray-200 mt-0 " >
        
        <div class="max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src={image3} alt=""  />
    <div class="p-5">
       
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Travel Website</h5>
       
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A website that gives the user the chance to see different packages and book them.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             
        </a>
    </div>
</div>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
        <img class="rounded-t-lg" src={image5} alt="" />
   
    <div class="p-5">
        
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Restaurant Website</h5>
      
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A website that gives the user the chance to see the menu and order food online.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
           
        </a>
    </div>
</div>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
    <a href="#">
        <img class="rounded-t-lg" src={image4} alt="" width=" 200px" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Construction Website</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A website that gives the user the chance to see the constructing buildings.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            
        </a>
    </div>
</div>








    </div>
  )
}

export default Project