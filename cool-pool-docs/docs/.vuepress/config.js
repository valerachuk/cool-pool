const { description } = require("../../package");

module.exports = {
  title: "Cool#Pool",
  description,
  base: "/cool-pool/docs/",
  cache: false,

  themeConfig: {

    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "User manual",
        link: "/manual.md",
      },
      {
        text: "Page reference",
        link: '/pageReference.md',
      },
      {
        text: "GitHub",
        link: "https://github.com/valerachuk/cool-pool",
      },
      {
        text: "Open Cool#Pool",
        link: "https://valerachuk.github.io/cool-pool/",
        target: "_self"
      }
    ],
    sidebar: [
      {
        title: "Page reference",
        path: '/pageReference.md',
      },
      {
        title: "User manual",
        path: '/manual.md'
      }
    ],
  },
};
