import React from 'react';
import Link from 'next/link'
import Router from 'next/router'

const HomePage = () => {
	return (
		<div>
			<h1>Main Page </h1>
			<Link href="/subpage" replace><a>Go to subpage</a></Link>

			<button onClick={() => {
				Router.push('/subpage')
			}}>Go to subpage btn</button>
		</div>
	)
}

export default HomePage;