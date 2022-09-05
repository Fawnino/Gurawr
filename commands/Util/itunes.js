const { EmbedBuilder } = require("discord.js");
const request = require("node-superfetch");
module.exports = {
	name: "itunes",
	description:
		"Returns information about a song on iTunes(price, artist, etc.)",
	usage: "(song)",
	async execute(message, args, client) {
		try {
			const query = args.join("+");
			const { body } = await request
				.get("https://itunes.apple.com/search")
				.query({
					term: query,
					media: "music",
					entity: "song",
					limit: 1,
					explicit: message.channel.nsfw ? "yes" : "no",
				});
			const body2 = JSON.parse(body.toString());
			if (!body2.results.length)
				return message.channel.send("Could not find any results.");
			const data = body2.results[0];
			let price = data.trackPrice.toString().split("-")[1];
			if (price === undefined) {
				price = 0;
			}
			const embed = new EmbedBuilder()
				.setColor(0x4169e1)
				.setAuthor({
					name: "iTunes",
					iconURL: "https://i.imgur.com/PR29ow0.jpg",
					url: "https://www.apple.com/itunes/",
				})
				.setURL(data.trackViewUrl)
				.setThumbnail(data.artworkUrl100)
				.setTitle(data.trackName)
				.addFields(
					{ name: "Artist", value: `${data.artistName}`, inline: true },
					{ name: "Album", value: `${data.collectionName}`, inline: true },
					{
						name: "Release Date",
						value: `${new Date(data.releaseDate).toDateString()}`,
						inline: true,
					},
					{ name: "Price", value: "$" + price, inline: true },
					{
						name: "Length",
						value: `${data.trackTimeMillis / 1000 + "s"}`,
						inline: true,
					},
					{ name: "Genre", value: `${data.primaryGenreName}`, inline: true }
				);
			return message.channel.send({ embeds: [embed] });
		} catch (err) {
			if (err.status === 404)
				return message.reply("Could not find any results.");
			console.log(err);
			return message.channel.send(
				`Oh no, an error occurred: \`${err.message}\`. Try again later!`
			);
		}
	},
};
