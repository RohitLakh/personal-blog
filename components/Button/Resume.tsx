import { HiArrowDown } from 'react-icons/hi2'

interface Props {
    link: string
}

export default function ResumeButton(props: Props) {
    return (
        <a className="bg-black flex items-center gap-1 rounded-full font-inter text-white px-6 py-2" href={props.link} target="_blank" rel="noreferrer">
            <div className="content-center">
                <HiArrowDown />
            </div>
            <div>Resume</div>
        </a>
    )
}