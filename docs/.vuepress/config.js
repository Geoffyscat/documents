module.exports = {
  title: 'docs',
  description: 'not something',
  temp:'/docs/.vuepress/temp',
  markdown: {
    lineNumber: true,
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '谷歌', link: 'https://google.com' },
    ],
    // sidebar: [
    //   ['/', '首页'],
    //   ['/docs/js/basc.md', 'js基础'],
    // ],
    // sidebar: {
    //   '/js/': [
    //     'basic',
    //   ]
    // },
    sidebar: 'auto',
    displayAllHeaders: true, //themeConfig.displayAllHeaders 设置为 true 来显示所有页面的标题链接：
  },
}
