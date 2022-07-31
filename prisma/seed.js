const { PrismaClient } = require("@prisma/client");
const { users, projects, moods } = require("./data.js");
const prisma = new PrismaClient();

const load = async () => {
	try {
		await prisma.mood.deleteMany();
		console.log("Deleted records in mood table");

		await prisma.user.deleteMany();
		console.log("Deleted records in category table");

		await prisma.project.deleteMany();
		console.log("Deleted records in project table");

		await prisma.$queryRaw`ALTER TABLE Project AUTO_INCREMENT = 1`;
		console.log("reset project auto increment to 1");

		await prisma.$queryRaw`ALTER TABLE User AUTO_INCREMENT = 1`;
		console.log("reset user auto increment to 1");

		await prisma.$queryRaw`ALTER TABLE Mood AUTO_INCREMENT = 1`;
		console.log("reset mood auto increment to 1");

		await prisma.user.createMany({
			data: users,
		});
		console.log("Added user data");

		await prisma.project.createMany({
			data: projects,
		});
		console.log("Added project data");

		await prisma.mood.createMany({
			data: moods,
		});
		console.log("Added mood data");
	} catch (e) {
		console.error(e);
		process.exit(1);
	} finally {
		await prisma.$disconnect();
	}
};

load();
