import logo from "./logo.svg";
import "./App.css";
// import Button from "./Button";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>

			<Button text="signup" />

			<Button text="login" />

			<Button text="IEEE InternationaL Student Branch" text2="join us" />
		</div>
	);
}

export default App;

// Component
function Button(props) {
	return (
		<button>
			{props.text} --- {props.text2} {props.text3}
		</button>
	);
}
