const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
    pwa: {
        dest: 'src/public',
        runtimeCaching,
    }
})
//
// module.exports = {
//     target: 'serverless',
// };
