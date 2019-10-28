const nzu = require('./../lib/nzu')

let r = nzu.redBright('opopo')
let c = nzu.bgRed('opopo')
console.log(c)

//nzu.blue.bgRed.bold('nnady')
console.log(nzu.underline('nnamdi'), nzu.bgRed(nzu.underline('nnamdi')), nzu.green('green'), nzu.yellow('yellow'))
    //console.log(nzu.bgRed(nzu.blue('nnamdi')), nzu.blue('messi').italic())
    //console.log(nzu.blue.bold('jii'))

//console.log(nzu.dark.blue('jk'))

function T() {
    const _t = this
    this.c = {
        get g() {
            console.log('getter g')
            return _t
        },
        get t() {
            console.log('t')
            return _t
        }
    }
}
T.prototype.g = function(params) {
    console.log('g')
        //return
}
const h = new T().c
console.log(h.g.t.g())

/*
console.log('\x1b[0m')
console.log('\x1b[1mNNa')

console.log('\x1b[0m')
console.log('\x1b[2mNNa')

console.log('\x1b[0m')
console.log('\x1b[4mNNa')

console.log('\x1b[0m')
console.log('\x1b[5mNNa')

console.log('\x1b[0m')
console.log('\x1b[7mNNa')

console.log('\x1b[0m')
console.log('\x1b[8mNNa')
*/