import Link from 'next/link'

export default function Navbar() {
    return (
    <nav className="box-border m-0 bg-slate-600 text-white flex justify-between items-center gap-8 px-8 py-10%"> 
        <Link href="/" className="text-inherit text-4xl no-underline cursor-pointer">PR Progress</Link>
        <ul className='list-none px-0 py-5 m-0 flex gap-4 '>
                <li>
                    <Link href="./Profile" className="text-inherit no-underline hover:text-slate-400 cursor-pointer ml-5">Profile</Link>
                </li>
                <li>
                    <Link href="./StartWorkout" className="text-inherit no-underline hover:text-slate-400 cursor-pointer ml-5">Start Workout</Link>
                </li>
                <li>
                    <Link href="./Exercises" className="text-inherit no-underline  hover:text-slate-400 cursor-pointer ml-5">Exercises</Link>
                </li>
        </ul>
    </nav>
    );
}