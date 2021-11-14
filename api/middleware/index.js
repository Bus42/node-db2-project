const colors = require('colors');

colors.enable()
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'orange',
    debug: 'blue',
    error: 'red'
});

function logger(req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`.info);
    next();
}

module.exports = { logger };
