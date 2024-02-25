import React from 'react';
import Myimage from '../images/image1.jpeg';

function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-gray-200">
      <div className="max-w-md p-6 bg-white mb-6 md:mb-0 md:mr-6">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MarieLyne Beainy</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A driven and passionate individual embarking on a journey to become a skilled developer, eager to innovate and create impactful solutions in the realm of technology.</p>
        <a href="marielynebeainiCV.pdf" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Download CV
        </a>
      </div>
      <div className="flex justify-center items-center">
        <img className="h-auto max-w-md transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src={Myimage} alt="image description" width="300px" />
      </div>
    </div>
  );
}

export default Home;
