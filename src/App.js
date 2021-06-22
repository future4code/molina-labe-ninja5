import React from 'react'
import { AppContainer } from './components/AppContainer'
import Header from './components/Header'


export default class App extends React.Component {

	render() {
		return (
			<div>
				<Header />
				<AppContainer />
			</div>				
		)
	}
}

