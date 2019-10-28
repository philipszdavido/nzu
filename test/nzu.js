const { colors, styles } = require('./cs')

/*function hsl(120, 80, 10)
function rgb(199, 29, 259)
function hex('#ABCDEF')*/
// nzu.blue(`hello`)
// nzu.hex('#ASEDD')

class _nzu {
    static get dark() {
        return this
    }
    static get colors() {
        return colors
    }
    static get styles() {
        return styles
    }
    constructor() {
        const colorKeys = Object.keys(colors)
        const stylesKeys = Object.keys(styles)
        for (const d of[9, 9]) {
            _nzu.prototype[d] = {
                get blue() {

                }
            }
        }
        colorKeys.forEach((key) => {
            /*_nzu.prototype[key] = function(txt) {

                const color = `\x1b[${_nzu.colors[key][0]}m`
                const reset = `\u001b[${_nzu.colors[key][1]}m`
                return color + txt + reset
            }*/
        })
        stylesKeys.forEach((key) => {
            _nzu.prototype[key] = function(txt) {
                const color = `\x1b[${_nzu.styles[key][0]}m`
                const reset = `\u001b[${_nzu.styles[key][1]}m`
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
module.exports = new _nzu()