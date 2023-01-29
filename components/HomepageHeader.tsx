import Image from 'next/image'
import ContactButton from './Button/Contact'

interface Props {
}

export default function HomepageHeader(props: Props) {
    return (
        <>
            <div>
                <Image src={'/images/rohit_lakhotia.jpeg'} className="rounded-full mx-auto" width={150} height={120} alt={''} />
                <p className='text-center pt-4 font-clashDisplay font-medium text-xl'>Hey, I&apos;m Rohit</p>
                <h2 className='text-center text-6xl font-clashDisplay font-bold pt-8'>Building digital products <br />one bit at a time.</h2>

                <p className='text-center font-manrope pt-8'>A <b>full stack developer</b> who also loves <b>design</b></p>

                <div className='text-center pt-6'>
                    <ContactButton link='asd' cta="LET'S CONNECT" />
                </div>
            </div>
        </>
    )
}