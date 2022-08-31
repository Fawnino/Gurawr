const { config } = require('mathjs')
const { version } = require('../package.json')

/**
 * @file Ready Event File.
 * @author Naman Vrati
 * @since 1.0.0
 */
module.exports = {
	name: "ready",
	once: true,
	execute(client){
		const Discord = require('discord.js')
		const { prefix } = require("../config.json")
    const start = Date.now()
		console.log(`Ready! Logged in as ${client.user.tag}`);
    setInterval(() => {
const ms = Date.now() - start;
console.log(`Second elapsed: ${Math.floor(ms / 1000)}`)
}, 2000);

	const activities = [
		`${prefix}help | a.`,
    `${prefix}help | Version ${version}.`,
    `${prefix}help | ${client.guilds.cache.size} server(s).`
];

let i = 0;
setInterval(() => 
client.user.setActivity(activities[i++ % activities.length], {
	type: "PLAYING",
}), 15000
 )
}}
