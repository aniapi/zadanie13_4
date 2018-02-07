var os = require('os');
var uptime = os.uptime();
        
function getOSuptime() {
console.log('Czas:', (uptime / 60).toFixed(0), 'min.', (uptime % 60).toFixed(0), 'sek.');
console.log('Czas:', (uptime / 3600).toFixed(0), 'godz.', ((uptime % 3600) / 60).toFixed(0), 'min.', (uptime % 60).toFixed(0), 'sek.');
}

exports.print = getOSuptime;