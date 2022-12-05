module.exports = {
    name: 'time',
    aliases: ["t"],
    utilisation: '{prefix}time',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing)
            return message.channel.send(`❌ | ไม่มีเพลงที่กำลังเล่นอยู่ครับ `);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity')
            return message.channel.send(`❌ | เพลงนี้กำลังสตรีมสด ไม่มีข้อมูลระยะเวลาที่จะแสดง`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};