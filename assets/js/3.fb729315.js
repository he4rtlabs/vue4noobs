(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{302:function(e,t,o){"use strict";o(92);t.a={data:function(){return{yuu:{}}},mounted:function(){var e=this.$site.themeConfig.yuu,t=void 0===e?{}:e;this.yuu={themes:t.colorThemes||["blue","red","purple"],defaultColorTheme:t.defaultColorTheme||"default",defaultDarkTheme:t.defaultDarkTheme||!1,disableDarkTheme:t.disableDarkTheme||!1,disableThemeIgnore:t.disableThemeIgnore||!1,extraOptions:t.extraOptions||{}},this.yuu.hasThemes=Array.isArray(this.yuu.themes)&&this.yuu.themes.length>0}}},303:function(e,t,o){},304:function(e,t,o){},305:function(e,t,o){},306:function(e,t,o){},307:function(e,t,o){},308:function(e,t,o){},309:function(e,t,o){"use strict";o(24),o(166),o(92),o(65),o(167);var r=o(41);t.a={mounted:function(){"default"===this.yuu.defaultColorTheme||localStorage.getItem("color-theme")||localStorage.setItem("color-theme",this.yuu.defaultColorTheme),this.setPageTheme()},beforeUpdate:function(){this.setPageTheme()},methods:{setTheme:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=this.yuu.themes||{};if(Array.isArray(o)&&o.length){var a=document.body.classList,n=o.map((function(e){return"yuu-theme-".concat(e)}));if(!e)return t&&localStorage.setItem("color-theme","default"),a.remove.apply(a,Object(r.a)(n));if(e&&!o.includes(e)){var s=localStorage.getItem("color-theme");return this.setTheme(o.includes(s)?s:null)}a.remove.apply(a,Object(r.a)(n.filter((function(t){return t!=="yuu-theme-".concat(e)})))),a.add("yuu-theme-".concat(e)),t&&localStorage.setItem("color-theme",e)}},setPageTheme:function(){var e=this.$page.frontmatter.forceTheme,t=localStorage.getItem("color-theme"),o="true"===localStorage.getItem("ignore-forced-themes"),r=!0!==this.yuu.disableThemeIgnore&&o?t:e||t;this.setTheme(r,!1)}}}},310:function(e,t,o){"use strict";t.a={data:function(){return{darkTheme:!1,ignoreForcedThemes:!1}},mounted:function(){!0!==this.yuu.disableDarkTheme&&(!0!==this.yuu.defaultDarkTheme||localStorage.getItem("dark-theme")||localStorage.setItem("dark-theme",!0),this.darkTheme="true"===localStorage.getItem("dark-theme"),this.toggleDarkTheme()),!0!==this.yuu.disableThemeIgnore&&(this.ignoreForcedThemes="true"===localStorage.getItem("ignore-forced-themes"))},methods:{toggleDarkTheme:function(){if(this.darkTheme)return document.body.classList.add("yuu-theme-dark"),localStorage.setItem("dark-theme",!0);document.body.classList.remove("yuu-theme-dark"),localStorage.setItem("dark-theme",!1)},toggleForcedThemes:function(){if(this.ignoreForcedThemes)return this.setTheme(localStorage.getItem("color-theme")),localStorage.setItem("ignore-forced-themes",!0);localStorage.removeItem("ignore-forced-themes")}}}},311:function(e,t,o){"use strict";var r=o(303);o.n(r).a},312:function(e,t,o){"use strict";var r=o(304);o.n(r).a},313:function(e,t,o){"use strict";var r=o(305);o.n(r).a},314:function(e,t,o){"use strict";var r=o(306);o.n(r).a},315:function(e,t,o){"use strict";var r=o(307);o.n(r).a},316:function(e,t,o){"use strict";var r=o(308);o.n(r).a},398:function(e,t,o){"use strict";o.r(t);var r=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],a={methods:{getMsg:function(){return r[Math.floor(Math.random()*r.length)]}}},n=o(43),s=Object(n.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"theme-container"},[t("div",{staticClass:"theme-default-content"},[t("h1",[this._v("404")]),this._v(" "),t("blockquote",[this._v(this._s(this.getMsg()))]),this._v(" "),t("RouterLink",{attrs:{to:"/"}},[this._v("\n      Take me home.\n    ")])],1)])}),[],!1,null,null,null).exports,u=o(302),i=o(309),h=o(310),c={components:{ParentLayout:s},mixins:[u.a,i.a,h.a]},l=(o(311),o(312),o(313),o(314),o(315),o(316),Object(n.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("ParentLayout")}),[],!1,null,null,null));t.default=l.exports}}]);