import React from "react";

export default function Mood({ moods, users }) {
	return (
		<ol className="border-l border-gray-300">
			{moods.map((mood) => {
				return (
					<li key={mood.id}>
						<div className="flex flex-start items-center pt-3">
							<div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
							<p className="text-gray-500 text-sm">{mood.date}</p>
						</div>
						<div className="mt-0.5 ml-4 mb-6">
							<h4 className="text-gray-800 font-semibold text-xl mb-1.5">
								{users.map((u) => {
									if (u.id === mood.userId) {
										return u.username;
									}
								})}
							</h4>
							<p className="text-gray-500 mb-3">{MOODS[mood.mood].mood}</p>
						</div>
					</li>
				);
			})}
		</ol>
	);
}

const MOODS = [
	{ id: 0, mood: "X" },
	{ id: 1, mood: ":'(" },
	{ id: 2, mood: ":(" },
	{ id: 3, mood: ":|" },
	{ id: 4, mood: ":)" },
	{ id: 5, mood: ";)" },
];
