const bigGreenLine = document.querySelector('.diagram__big-line_color_green')
const bigYellowLine = document.querySelector('.diagram__big-line_color_yellow')
const bigRedLine = document.querySelector('.diagram__big-line_color_red')

const smallGreenLine = document.querySelector('.diagram__small-line_color_green')
const smallYellowLine = document.querySelector('.diagram__small-line_color_yellow')
const smallRedLine = document.querySelector('.diagram__small-line_color_red')

setTimeout(() => {
  bigGreenLine.style.width = '34' + '%'
  bigYellowLine.style.width = '35' + '%'
  bigRedLine.style.width = '28' + '%'

  smallGreenLine.style.width = '32' + '%'
  smallYellowLine.style.width = '31' + '%'
  smallRedLine.style.width = '34' + '%'
}, 1)
