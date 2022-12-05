const prefix = require('../../config.json').prefix;

module.exports = {
    name: 'loop',
    aliases: ['lp'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing)
            return message.channel.send(`❌ | ไม่มีเพลงที่เล่นในขณะนี้ครับ`);

        let mode = null;
        const methods = ['Off', 'Single', 'All'];

        if (!args[0])
            return message.channel.send(`❌ | ${prefix}เล่นซ้ำ [all/one/off]`);

        switch (args[0].toLowerCase()) {
            case 'off':
                mode = 0;
                break;
            case 'one' || 'single':
                mode = 1;
                break;
            case 'all' || 'queue':
                mode = 2;
                break;
            default:
                return message.channel.send(`❌ | ${prefix}ซ้ำ [all/one/off]`);
                break;
        }
        queue.setRepeatMode(mode);

        message.react('👍');
        return message.channel.send(`Set วนไป \`${methods[mode]}\``);
    },
};
