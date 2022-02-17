const chalk = require('chalk');
const log = console.log;
function info(...args) {
    debugger;
        log(chalk.green(args));
}
module.exports = { info };