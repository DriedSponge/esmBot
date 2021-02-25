exports.run = async (message) => {
  return `${message.author.mention}, you can invite me to your server here: <https://discord.com/api/oauth2/authorize?client_id=813807335502905344&permissions=2151013952&scope=bot>`;
};

exports.category = 1;
exports.help = "Gets my bot invite link";