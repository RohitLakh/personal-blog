import { HiArrowDown } from 'react-icons/hi2'

interface Props {
    link: string,
    cta: string
}

export default function ContactButton(props: Props) {
    return (
        <a className="bg-black px-6 py-3 font-clashDisplay font-medium rounded-full text-white" href={props.link}>
            {props.cta}
        </a>
    )
}