import React from "react";

const bool = true;

export default function Button({ text }) {
	return (
		<button
			style={{
				color: bool ? "red" : "yellow",
			}}
		>
			{text}
		</button>
	);
}
