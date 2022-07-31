const { Prisma } = require("@prisma/client");

const users = [
	{
		username: "Dalton.Connelly",
		projectId: 1,
	},
	{
		username: "Keagan33",
		projectId: 1,
	},
	{
		username: "Anika_Watsica",
		projectId: 1,
	},
	{
		username: "Muhammad.Ritchie4",
		projectId: 1,
	},
	{
		username: "Cloyd19",
		projectId: 1,
	},
];

const projects = [
	{
		name: "HUSKY ADVICE",
	},
];

const moods = [
	{
		userId: 1,
		projectId: 1,
		mood: 3,
	},
];

module.exports = {
	projects,
	users,
	moods,
};
