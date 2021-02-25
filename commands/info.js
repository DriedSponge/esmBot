const client = require("../utils/client.js");
const { version } = require("../package.json");

exports.run = async () => {
  const infoEmbed = {
    "embed": {
      "description": "This bot is a modification of the open source **esmBot**.",
      "color": 16711680,
      "author": {
        "name": "Chica Bot Info/Credits",
        "icon_url": client.user.avatarURL
      },
      "fields": [{
        "name": "ℹ️ Version:",
        "value": `v${version}${process.env.NODE_ENV === "development" ? "-dev" : ""}`
      },
      {
        "name": "📝 Credits:",
        "value": "Original bot by **[Essem](https://essem.space)** and **[various contributors](https://github.com/esmBot/esmBot/graphs/contributors)**\nIcon by **[MintBorrow](https://mintborrow.newgrounds.com)**"
      },
      {
        "name": "💬 Total Servers:",
        "value": client.guilds.size
      },
      {
        "name": "💻 Source Code:",
        "value": "[Click here!](https://github.com/DriedSponge/esmBot)"
      }
      ]
    }
  };
  return infoEmbed;
};

exports.aliases = ["botinfo", "credits"];
exports.category = 1;
exports.help = "Gets some info/credits about me";