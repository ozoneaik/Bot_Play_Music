const embed = require('../embeds/embeds');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        let description = '**\nคำสั่งที่ใช้ได้**\n\t+back\n\t+help\n\t+pause\n\t+play\n\t+queue\n\t+skip';
        return message.channel.send(description);
    },
};
