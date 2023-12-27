import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='relative'>
            <div className='flex justify-center items-center flex-col p-4 sm:text-center'>
                <h1 className='text-9xl text-red-600 pb-9 font-mono sm:text-6xl'><span className='text-purple-800'>I am</span> John Doe</h1>
                <span className='text-7xl text-blue-500 pb-10 font-extralight sm:text-4xl'>Software Engineer</span>
            </div>
            {/* Links svg */}
            <div className='flex justify-center items-center flex-col p-4 sm:text-center'>
                <div className='flex justify-center items-center flex-row space-x-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-600 hover:text-red-800 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v2a1 1 0 11-2 0V4a1 1 0 011-1zM7 5a1 1 0 100 2H5a1 1 0 110-2h2zm6 0a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1zM7 9a1 1 0 100 2H5a1 1 0 110-2h2zm6 0a1 1 0 011 1v2a1 1 0 11-2 0V10a1 1 0 011-1zM7 13a1 1 0 100 2H5a1 1 0 110-2h2z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500 hover:text-blue-600 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v2a1 1 0 11-2 0V4a1 1 0 011-1zM7 5a1 1 0 100 2H5a1 1 0 110-2h2zm6 0a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1zM7 9a1 1 0 100 2H5a1 1 0 110-2h2zm6 0a1 1 0 011 1v2a1 1 0 11-2 0V10a1 1 0 011-1zM7 13a1 1 0 100 2H5a1 1 0 110-2h2z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-500 hover:text-yellow-600 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v2a1 1 0 11-2 0V4a1 1 0 011-1zM7 5a1 1 0 100 2H5a1 1 0 110-2h2zm6 0a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1zM7 9a1 1 0 100 2H5a1 1 0 110-2h2zm6 0a1 1 0 011 1v2a1 1 0 11-2 0V10a1 1 0 011-1zM7 13a1 1 0 100 2H5a1 1 0 110-2h2z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 hover:text-green-600 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v2a1 1 0 11-2 0V4a1 1 0 011-1zM7 5a1 1 0 100 2H5a1 1 0 110-2h2zm6 0a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1zM7 9a1 1 0 100 2H5a1 1 0 110-2h2zm6 0a1 1 0 011 1v2a1 1 0 11-2 0V10a1 1 0 011-1zM7 13a1 1 0 100 2H5a1 1 0 110-2h2z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-500 hover:text-purple-600 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v2a1 1 0 11-2 0V4a1 1 0 011-1zM7 5a1 1 0 100 2H5a1 1 0 110-2h2zm6 0a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1zM7 9a1 1 0 100 2H5a1 1 0 110-2h2zm6 0a1 1 0 011 1v2a1 1 0 11-2 0V10a1 1 0 011-1zM7 13a1 1 0 100 2H5a1 1 0 110-2h2z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            
        </div>
    )
}

export default Hero