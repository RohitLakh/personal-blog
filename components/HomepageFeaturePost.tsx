import { FiArrowUpRight } from "react-icons/fi";
import Link from 'next/link';

interface Props {
}

export default function HomepageFeaturePost(props: Props) {
    const DATA = [
        {
            title: 'asd',
            id: 1,
        },
        {
            title: 'asddd',
            id: 12,
        }
    ]

    return (
        <>
            <div className='flex gap-4'>
                <h4 className='font-clashDisplay font-medium text-2xl underline'>Latest from my blog</h4>
                <Link className='flex font-manrope flex-wrap content-center text-sm' href={'blog'}>
                    View all
                    <FiArrowUpRight />
                </Link>
            </div>
        </>
    )
}