module.exports = {
    name: 'resume',
    aliases: [],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue)
            return message.channel.send(`❌ | ไม่มีเพลงที่กำลังเล่นอยู่`);

        const success = queue.setPaused(false);

        return success ? message.react('▶️') : message.channel.send(`❌ | บางอย่างผิดพลาด.`);
    },
};