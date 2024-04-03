import Link from "next/link";

export default function Navbar() {
  return (
          <nav className="bg-slate-400 flex items-center justify-between box py-8 px-20">
              <ul to="/" className="font-medium text-3xl ">
                  <li>
                      <Link href='/'>PR Progress</Link>
                  </li>
              </ul>
              <ul className="flex list-none p-0 text-xl">
                  <li>
                      <Link href="/Profile" className="px-0 ml-5">
                        Profile
                      </Link>
                  </li>
                  <li>
                      <Link href="/StartWorkout" className="px-6 py-5 ml-5">
                        Start Workout
                      </Link>
                  </li>
                  <li>
                      <Link href="/Register" className="px-0 ml-5">
                        Create an Account/Login
                      </Link>
                  </li>
              </ul>
          </nav>
  );
}
