import Navbar from "./components/Navbar"

export default function Home() 
{
	return (
		<main className='h-screen bg-grey-100 w-full'>
			<Navbar/> 
			<h1>PR Progress</h1>
			<p>Track your progress through progressive overload.</p>
		</main>
	);
}
