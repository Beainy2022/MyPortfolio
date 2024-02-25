import React, { useState } from 'react';
import Image2 from '../images/image2.webp';

const About = () => {
  const [activeTab, setActiveTab] = useState('background');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col bg-gray-200">
      <div className="flex justify-center bg-grey border border-black-300 rounded-t-lg shadow dark:bg-black-800 dark:border-black-700">
        <button
          className={`w-full p-4 ${
            activeTab === 'background' ? 'bg-gray-50' : 'bg-gray-200'
          } hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600`}
          onClick={() => handleTabChange('background')}
        >
          Background
        </button>
        <button
          className={`w-full p-4 ${
            activeTab === 'skills' ? 'bg-gray-50' : 'bg-gray-200'
          } hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600`}
          onClick={() => handleTabChange('skills')}
        >
          Skills
        </button>
        <button
          className={`w-full p-4 ${
            activeTab === 'experience' ? 'bg-gray-50' : 'bg-gray-200'
          } hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600`}
          onClick={() => handleTabChange('experience')}
        >
          Experience
        </button>
      </div>
      <div className="flex items-center bg-grey border border-t-0 border-black-300 rounded-b-lg shadow dark:bg-black-800 dark:border-black-700 mt-5">
        <div className="flex items-center justify-between w-full p-4 bg-white rounded-lg dark:bg-gray-800">
          <div className="w-1/3">
            <img src={Image2} alt="Image" className="w-full" />
          </div>
          <div className="w-2/3 px-4">
            {activeTab === 'background' && (
              <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                <div className="pb-5">
                  <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Bachelor Degree</dt>
                  <dd className="text-lg font-semibold">Graduated from LIU in 2023 with a bachelor degree in computer science.</dd>
                </div>
                <div className="py-3">
                  <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">T-SQL</dt>
                  <dd className="text-lg font-semibold">Certificate from Formatech for completing T-SQL course</dd>
                </div>
                <div className="pt-3">
                  <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">FrontEnd course</dt>
                  <dd className="text-lg font-semibold">Took advanced course that covers most of the frontend basics.</dd>
                </div>
              </dl>
            )}
            {activeTab === 'skills' && (
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements:</h2>
                <ul className="space-y-1 text-gray-500 list-inside dark:text-gray-400">
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    HTML
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    CSS
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    JavaScript
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    php
                  </li>
                </ul>
              </div>
            )}
           {activeTab === 'experience' && (
  <div className="p-4 bg-white rounded-lg dark:bg-gray-800">
    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Work Experience:</h2>
    <div className="space-y-3">
      <div>
        <h3 className="text-gray-700 dark:text-gray-300 font-semibold"> Coding teacher At BrightChamps</h3>
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Teaching kids between 6 to 15 years old.</li>
            <li>Students see their progress in every step.</li>
            
        </ol>
      </div>
      <div>
        <h3 className="text-gray-700 dark:text-gray-300 font-semibold">Private Teacher</h3>
        <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Aiming to help students be more productive.</li>
            <li>Progress noticed from the first month.</li>
            <li>Making study much easier and more fun.</li>
        </ul>
      </div>
      {/* Add more experiences as needed */}
    </div>
  </div>
)}

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
