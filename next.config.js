const withPWA = require('next-pwa')


module.exports = withPWA({
  images: {
    domains: ['res.cloudinary.com']
  },
  pwa: {
    dest: 'public',
    sw: '/sw.js',
    register: false,
    scope: '/'
  }
})

// module.exports = {
//   images: {
//     domains: ['res.cloudinary.com']
//   }
// }