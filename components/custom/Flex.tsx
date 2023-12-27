"use client"
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

const Flex = () => {
    return (
        <div className='m-14 relative'>
            {/* Flex with hobbies */}
            <motion.div 
                className='flex flex-col mb-4 text-white justify-start border ml-3 h-auto w-64 rounded-lg p-4 bg-slate-700'
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
            >
                <div className='flex justify-center flex-col'>
                    <h1 className='text-2xl font-bold mb-4'>Hobbies</h1>
                    <div className='bg-gray-800 p-4 rounded-lg'>
                        <ul className='text-white'>
                            <li>Reading</li>
                            <li>Writing</li>
                            <li>Swimming</li>
                            <li>Travelling</li>
                            <li>Music</li>
                            <li>Photography</li>
                            <li>Art</li>
                            <li>Design</li>
                            <li>Programming</li>
                            <li>Video Games</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                className='flex flex-col mb-4 text-white justify-start border ml-3 sm:ml-72 h-auto w-64 rounded-lg p-4 bg-slate-700'
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
            >
                <div className='flex justify-center flex-col'>
                    <h1 className='text-2xl font-bold mb-4'>Experience</h1>
                    <div className='bg-gray-800 p-4 rounded-lg'>
                        <ul className='text-white'>
                            <li>C++</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                className='flex flex-col mb-4 text-white justify-start border  lg:ml-[35rem] sm:ml-3 h-auto w-64 rounded-lg p-4 bg-slate-700'
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
            >
                <div className='flex justify-center flex-col'>
                    <h1 className='text-2xl font-bold mb-4'>Education</h1>
                    <div className='bg-gray-800 p-4 rounded-lg'>
                        <ul className='text-white'>
                            <h1 className='text-bold text-orange-600 pl-14'>School</h1>
                            <p>St Mary&apos;s Academy</p>
                            <p>2014-2019</p>
                            <h1 className='text-bold text-orange-600 pl-14'>University</h1>
                            <p>University of Manitoba</p>
                            <p>2019-2023</p>
                            <h1 className='text-bold text-orange-600 pl-14'>College</h1>
                            <p>Red River College</p>
                            <p>2021-2023</p>
                        </ul>
                    </div>
                </div>
            </motion.div>
            <Image
                className="absolute top-0 left-0 w-full h-full object-cover -z-30"
                src="/stars.png" alt="bg" layout="fill"
            />
        </div>
    )
}

export default Flex