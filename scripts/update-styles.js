const fs = require("fs-extra")
const chalk = require("chalk")
const path = require("path")

const files = [
	{
		name: "main.scss",
		sourceFilePath: path.join(__dirname, "../../web/src/styles/main.scss"),
		targetFilePath: path.join(__dirname, "../styles/main.scss"),
	},
	{
		name: "main.ts",
		sourceFilePath: path.join(__dirname, "../../web/src/styles/main.ts"),
		targetFilePath: path.join(__dirname, "../styles/main.ts"),
	},
	{
		name: "theme.ts",
		sourceFilePath: path.join(__dirname, "../../web/src/styles/theme.ts"),
		targetFilePath: path.join(__dirname, "../styles/theme.ts"),
	},
]

files.forEach(file => {
	try {
		fs.copyFileSync(file.sourceFilePath, file.targetFilePath)
		console.log(chalk.green(`Succesfully copied ${file.name}.`))
	} catch (e) {
		console.log(chalk.red(`An error occured while copying ${file.name}: `, e))
	}
})


console.log()
process.exit(0)