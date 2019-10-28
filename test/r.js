const { colors, styles } = require('../lib/cs')

console.log('\x1b[0m')
console.log('\x1b[1mNNa')

console.log('\x1b[0m')
console.log('\x1b[1m\x1b[34mNNa\x1b[0m\x1b[32mm\x1b[0m\x1b[34mdi\x1b[0m')

console.log('\x1b[34m-Chi\x1b[32m-ne\x1b[0m\x1b[34m-ye\x1b[0m')
console.log('\x1b[34m-Chi\x1b[32m-ne\x1b[0m-ye\x1b[0m')
return
//console.log('\x1b[0m')
console.log('\x1b[102mNnaa')
console.log('\x1b[0m')
console.log('\x1b[34mNNa')
console.log('\x1b[0m')

class R {
    constructor() {
        this.str = [];
        const ref = Object.assign({}, colors, styles)
        const all = Object.keys(ref)
            /*["cyan","red", "yellow","white","green"]*/
        all.forEach((d) => {
            const obj = {
                [d]: {
                    get() {
                        this.str.push(ref[[d]])
                        const self = this
                        const b = function(...arg) {
                            arg = arg.join(' ')
                            const reset = '\x1b[' + styles.reset[0] + 'm'
                            for (var d of self.str.reverse()) //{
                                arg = '\x1b[' + d[0] + 'm' + arg + '\x1b[' + d[1] + 'm'
                                //arg = arg.replace(/\r?\n/g, `${d[0]}$&${d[1]}`);}
                            self.str = []
                            return arg + reset
                        }
                        b.__proto__ = this
                        return b
                    }
                }
            }
            Object.defineProperties(R.prototype, obj)
        })
    }
    keyword(color) {
        return this[color]
    }
    build() {

    }
}

const _r = new R()
console.log(_r.keyword('red').bold('red from keyword', 'sen'))
const error = _r.red
console.log(error('error'))
console.log(_r.magenta('magenta'))
console.log(_r.white('white'))
console.log(_r.cyan('cyan'))
console.log(_r.magenta.white.cyan.green('green'))
console.log(_r.greenBright('yellow'))
console.log('End')
console.log(_r.bold('bold'))
const log = console.log

// Combine styled and normal strings
log(_r.blue('Hello') + ' World' + _r.red('!'));

// Compose multiple styles using the chainable API
log(_r.blue.bgRed.bold('Hello world!'));

// Nest styles
log(_r.red('Hello', _r.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(_r.green(
    'I am a green line ' +
    _r.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

// Pass in multiple arguments
log(_r.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// ES2015 template literal
log(`
CPU: ${_r.red('90%')}
RAM: ${_r.green('40%')}
DISK: ${_r.yellow('70%')}
`);

return
var cpu = { totalPercent: 566 }
var ram = {
    used: 90,
    total: 90
}
var disk = { used: 98, total: 56 }
    // ES2015 tagged template literal
log(_r `
CPU: {red ${cpu.totalPercent}%}
RAM: {green ${ram.used / ram.total * 100}%}
DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
`);