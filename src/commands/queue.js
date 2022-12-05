const embed = require('../embeds/embeds');

module.exports = {
    name: 'queue',
    aliases: ['q'],
    utilisation: '{prefix}queue',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

 
        if (!queue || !queue.playing){
          return message.channel.send('❌ | ไม่มีเพลงในคิวในขณะนี้ครับ');
        }

        if (!queue.tracks[0]){
          return message.channel.send('❌ | ไม่มีเพลงในคิวหลังจากปัจจุบัน');
        }  


        let nowplay = `\nเพลงที่เล่นขณะนี้ : ${queue.current.title}\n\n`;
        let queueMsg = '';
        if (queue.tracks.length > 9) {
          for (var i = 0; i <= 9; i++) {
            queueMsg += `${i+1}. ${queue.tracks[i].title}\n`;
          }
          queueMsg += `and ${queue.tracks.length - 9} other songs`;
        }
        else {
          for (var i = 0; i < queue.tracks.length; i++) {
            queueMsg += `${i+1}. ${queue.tracks[i].title}\n`;
          }
        }

        let loopStatus = queue.repeatMode ? (queue.repeatMode === 2 ? 'All' : 'One') : 'Off';
        
        return message.channel.send("รายการคิว" + nowplay + queueMsg + loopStatus);
    },
};