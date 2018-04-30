const {colors,styles} = require('./cs')

/*function hsl(120, 80, 10)
function rgb(199, 29, 259)
function hex('#ABCDEF')*/
// nzu.blue(`hello`)
// nzu.hex('#ASEDD')

class nzu {
    static get colors() {
        return colors
    }
    static get styles() {
        return styles
    }
    constructor() {
        const colorKeys = Object.keys(colors)
        const stylesKeys = Object.keys(styles)
        colorKeys.forEach((key) => {
            nzu.prototype[key] = function(txt) {

                const color = `\x1b[${nzu.colors[key][0]}m`
                const reset = `\u001b[${nzu.colors[key][1]}m`
                return color + txt + reset
            }
        })
        stylesKeys.forEach((key) => {
            nzu.prototype[key] = function(txt) {
                const color = `\x1b[${nzu.styles[key][0]}m`
                const reset = `\u001b[${nzu.styles[key][1]}m`
                return color + txt + reset
            }
        })
    }

    hex(p) {
        return this
    }
    rgb() {
        return this
    }
    hsl() {
        return this
    }
}

module.exports = new nzu()