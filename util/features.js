const db = require("quick.db");

module.exports = class Features {
  static levelSys(client) {
    client.on("message", (message) => {
      if (message.channel.type === "dm") return;

      const bool = db.fetch(`leveling_${message.guild.id}`);
      db.add(`messages_${message.guild.id}_${message.author.id}`, 1);

      if (bool === true) {
        let fetchMessages = db.fetch(
          `messages_${message.guild.id}_${message.author.id}`
        );

        let messages;
        if (fetchMessages == 100) messages = 100;
        if (fetchMessages == 300) messages = 300;
        if (fetchMessages == 500) messages = 500;
        if (fetchMessages == 800) messages = 800;
        if (fetchMessages == 1300) messages = 1300;
        if (fetchMessages == 1700) messages = 1700;
        if (fetchMessages == 2500) messages = 2500;
        if (fetchMessages == 4000) messages = 4000;
        if (fetchMessages == 5100) messages = 5100;
        if (fetchMessages == 6300) messages = 6300;
        if (fetchMessages == 7700) messages = 7700;
        if (fetchMessages == 9000) messages = 9000;
        if (fetchMessages == 11100) messages = 11100;
        if (fetchMessages == 13000) messages = 13000;
        if (fetchMessages == 16000) messages = 16000;

        if (!isNaN(messages)) {
          db.add(`level_${message.guild.id}_${message.author.id}`, 1);
          let fetchLevel = db.fetch(
            `level_${message.guild.id}_${message.author.id}`
          );

          // message you want to send when they level up
        }
      }
    });
  }
};
