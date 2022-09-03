module.exports = {
  name: "randompassword",
  aliases: ["randompass", "password", "pass"],
  description: "Sends a random password",
  async execute(message, client, args) {
    let password = [];
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let passString;
    let passWordLength = 10;
    for (let i = 0; i < passWordLength; i++) {
      password.push(
        possible.charAt(Math.floor(Math.random() * possible.length))
      );
    }
    passString = password.join("");
    console.log(passString);
    message.author
      .send(passString)

      .then(() => {
        if (message.channel.type === "dm") return;
        message.reply({
          content: "I've sent you a DM with the randomized password!",
        });
      });
  },
};
