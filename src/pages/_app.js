import "@/styles/globals.css";
import { useState } from 'react';
import Navbar from "./components/Navbar"
import Profile from "./Profile"
import StartWorkout from "./StartWorkout"
import Exercises from "./Exercises"
import Home from "./index"


export default function App({ Component, pageProps }) {
	return <Component {..pageProps} />
}
