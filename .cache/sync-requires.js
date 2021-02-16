const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("E:\\Dropbox\\01-Huy\\GitHub\\art-portfolio\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("E:\\Dropbox\\01-Huy\\GitHub\\art-portfolio\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("E:\\Dropbox\\01-Huy\\GitHub\\art-portfolio\\src\\pages\\about.js"))),
  "component---src-pages-gallery-js": hot(preferDefault(require("E:\\Dropbox\\01-Huy\\GitHub\\art-portfolio\\src\\pages\\gallery.js"))),
  "component---src-pages-home-js": hot(preferDefault(require("E:\\Dropbox\\01-Huy\\GitHub\\art-portfolio\\src\\pages\\home.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("E:\\Dropbox\\01-Huy\\GitHub\\art-portfolio\\src\\pages\\index.js"))),
  "component---src-templates-projects-js": hot(preferDefault(require("E:\\Dropbox\\01-Huy\\GitHub\\art-portfolio\\src\\templates\\projects.js")))
}

