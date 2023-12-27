import Image from 'next/image'

import React from 'react'

export function MenubarDemo() {
    return (
        <>
         {/*Nav bar with logo and title on left side and pages on right side  */}
            <div className="flex flex-row justify-between items-center text-white p-9 border rounded-lg ">
                <div className="flex flex-row items-center">
                    <div className="flex flex-row items-center ">
                        <Image src="/dribbble.png" width={30} height={30} alt='logo' className='rounded-full ' />
                        <p className="text-2xl font-bold ml-3 text-teal-800">Azeem</p>
                    </div>
                </div>
                <div className="flex flex-row items-center text-pink-600">
                    <p className="text-lg font-bold">Home</p>
                    <p className="text-lg font-bold ml-4">About</p>
                    <p className="text-lg font-bold  ml-4">Contact</p>
                </div>
            </div>

        </>
    )
}

export default MenubarDemo