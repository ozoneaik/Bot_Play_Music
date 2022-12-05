module.exports = {
    name: 'back',
    aliases: ['rewind'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing)
            return message.channel.send(`❌ | ไม่มีเพลงที่กำลังเล่นอยู่ครับ`);

        if (!queue.previousTracks[1])
            return message.channel.send(`❌ | ไม่มีเพลงที่เล่นก่อนหน้า`);

        await queue.back();

        return await message.react('👍');
    },
};