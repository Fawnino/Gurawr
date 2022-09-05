const { EmbedBuilder } = require("discord.js");
const kitsu = require("node-kitsu");

module.exports = {
  name: "manga",
  description: "Get advanced Info about a manga",
  usage: "(manga-title)",
  async execute(message, args, client) {
    kitsu.searchManga(args, 0).then((results) => {
      searchResult = results[0];
      if (!searchResult) {
        message.channel.send("Manga Not Found");
      } else {
        var mangaID = searchResult.id;
        var titleEn = searchResult.attributes.titles.en;
        if (!titleEn) {
          titleEn = "English title Not Found.";
        }
        var titleJP = searchResult.attributes.titles.en_jp;
        if (!titleJP) {
          titleJP = "Rōmaji title Not Found.";
        }
        var title = searchResult.attributes.canonicalTitle;
        if (!title) {
          if (!titleEn) {
            title = titleEn;
          } else if (!titleJP) {
            title = titleJP;
          } else {
            title = "Canon Title Not Found.";
          }
        }
        var synopsis = searchResult.attributes.synopsis;
        if (!synopsis) {
          synopsis = "No Synopsis Found";
        }
        var chapterCount = searchResult.attributes.chapterCount;
        if (!chapterCount) {
          chapterCount = "Unknown";
        }
        var volumeCount = searchResult.attributes.volumeCount;
        if (!volumeCount) {
          volumeCount = "Unknown";
        }
        var serialization = searchResult.attributes.serialization;
        if (!serialization) {
          serialization = "Unknown";
        }
        var status = searchResult.attributes.status;
        var startDate = searchResult.attributes.startDate;
        if (!startDate) {
          startDate = "Unknown";
        }
        var endDate = searchResult.attributes.endDate;
        if (!endDate) {
          endDate = "Unknown";
        }
        var smallPoster = searchResult.attributes.posterImage.small;

        //If the synopsis is longer then 700 characters cut it off and add "..."
        //So the post doesn't become to long.
        if (synopsis.length > 700) {
          var synopsis = synopsis.substring(0, 700) + "...";
        }
        console.log(
          synopsis,
          serialization,
          chapterCount,
          volumeCount,
          titleEn,
          titleJP,
          startDate,
          endDate
        );
        //The Status returns lowercase "finished", This transforms it into "Finished"
        var statusUpper =
          status.charAt(0).toUpperCase() + status.substr(1).toLowerCase();

        const embed = new EmbedBuilder()
          .setTitle(`${title}`)
          .setAuthor("Okaru", "https://i.imgur.com/Jf765y4.png")
          .setColor("Random")
          .setDescription("Status: " + statusUpper)
          .setFooter(
            "Info brought to you by Kitsu.io & The Okaru Bot ©2018 iPwNix",
            "https://i.imgur.com/8pMWE28.png"
          )
          .setImage(`${smallPoster}`)
          .setTimestamp()
          .addFields(
            { name: "Synopsis", value: `${synopsis}` },
            { name: "Magazine:", value: `${serialization}` },
            { name: "Chapters:", value: `${chapterCount}` },
            { name: "Volumes:", value: `${volumeCount}` },
            { name: "English:", value: `${titleEn}` },
            { name: "Romanized:", value: `${titleJP}` },
            { name: "Start:", value: `${startDate}` },
            { name: "End:", value: `${endDate}` }
          );
        message.channel.send({ embeds: [embed] });
      }
      //END if !searchresults
    }); //END searchManga
  },
};
