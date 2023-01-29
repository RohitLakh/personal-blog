import Image from "next/image";
import Link from "next/link";
import ResumeButton from "./Button/Resume";

interface Props {
    home?: boolean
}

export default function Navbar(props: Props) {
    return (
        <nav className="px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex items-center justify-between mx-auto">
                <div className="font-clashDisplay">
                    <Link href="/" className="flex items-center">
                        Rohit Lakhotia
                    </Link>
                </div>
                <div>
                    <ResumeButton link="https://www.google.com" />
                </div>
            </div>
        </nav>
    )
}