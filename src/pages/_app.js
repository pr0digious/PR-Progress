import "@/styles/globals.css";
import { useState } from 'react';
import Navbar from "./components/Navbar"
import Profile from "./Profile"
import StartWorkout from "./StartWorkout"
import Exercises from "./Exercises"
import Home from "./index"


export default function App({ Component, pageProps }) {
	const [currentPage, setCurrentPage] = useState("Home");

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	switch(currentPage) 
	{
		case "/":
			Component = <Home/>
			break;

		case "/Profile":
			Component = <Profile/>
			break;

		case "/StartWorkout":
			Component = <StartWorkout/>
			break;

		case "/Exercises":
			Component = <Exercises/>
			break;
	}

	return (
	<>
		<Navbar onPageChange={handlePageChange}/>
		{Component}
	</>
	)
}
