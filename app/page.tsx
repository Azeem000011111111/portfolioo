
import Flex from '@/components/custom/Flex'
import Footer from '@/components/custom/Footer'
import Hero from '@/components/custom/Hero'
import MenubarDemo from '@/components/custom/Nav'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='h-20 '>
      <section >
        <MenubarDemo  />
        </section>
      </div>
      <br />
      <hr />
      <div >
      <section >
        <Hero />
        </section>
        
        </div>
        <hr />
        <div className='h-96' >
        <section >
        <Image
                className="absolute top-0 left-0 w-full h-full object-cover -z-30"
                src="/stars.png" alt="bg" layout="fill"
            />
        <Flex />
        <Image
                className="absolute top-0 left-0 w-full h-full object-cover -z-30"
                src="/stars.png" alt="bg" layout="fill"
            />
        </section>
        <hr />
        <Footer />
        </div>
    </div>
  )
}
