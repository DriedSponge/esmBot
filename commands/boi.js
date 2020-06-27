const soundPlayer = require("../utils/soundplayer.js");

exports.run = async (message) => {
  return soundPlayer.play("./assets/audio/boi.ogg", message);
};

exports.aliases = ["boy", "neutron", "hugh"];
exports.category = 6;
exports.help = "Plays the \"boi\" sound effect";