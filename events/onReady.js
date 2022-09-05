const { EmbedBuilder, ActivityType } = require("discord.js");
const { version } = require("../package.json");
const { channelOnlineMessage } = require("../config.json");
/**
 * @file Ready Event File.
 * @author Naman Vrati
 * @since 1.0.0
 */
module.exports = {
	name: "ready",
	once: true,
	execute(client) {
		console.log(`Client has successfully booted-up! In ${client.guilds.cache.size} servers with ${client.users.cache.size} users!
    A check will be performed in the Discord Server to ensure that it's running properly.`);

		const guild = client.guilds.cache.get("1011104283237830758");
		const channel = guild.channels.cache.get("1014471400658051102");

		const activities = [
			`$help | a.`,
			`$help | Version ${version}.`,
			`$help | ${client.guilds.cache.size} server(s).`,
		];

		let i = 0;
		setInterval(
			() =>
				client.user.setActivity(activities[i++ % activities.length], {
					Type: ActivityType.Playing,
				}),
			15000
		);

		const check = new EmbedBuilder()
			.setTitle("Bot Restart Check")
			.setDescription(
				"The client has been restarted, please refer to the timestamp if it was you who started the bot. If it was someone else, immediately regenerate the client's token."
			)
			.setColor("#fdfd96")
			.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
			.setTimestamp()
			.addFields(
				{
					name: "Guilds:",
					value: `${client.guilds.cache.size}`,
					inline: true,
				},
				{
					name: "Member Count:",
					value: `${client.users.cache.size}`,
					inline: true,
				}
			);
		client.channels.cache.get("1014471400658051102").send({ embeds: [check] });
	},
};
