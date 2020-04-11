import Vue from 'vue'
import Trianglify from '../node_modules/trianglify/dist/trianglify.min.js'

Vue.prototype.$addTriangleTo = (target) => {
  const dimensions = target.getClientRects()[0]
  const pattern = Trianglify({
    width: dimensions.width,
    height: dimensions.height,
    x_colors: 'GnBu'
  })
  target.style['background-image'] = 'url(' + pattern.png() + ')'
}
