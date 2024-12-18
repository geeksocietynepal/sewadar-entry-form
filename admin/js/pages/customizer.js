"use strict";
(self.webpackChunk = self.webpackChunk || []).push([[1290], {
    84185: (t,a,s)=>{
        s.r(a),
        s.d(a, {
            default: ()=>r
        });
        var i = s(20629);
        function e(t, a) {
            var s = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                a && (i = i.filter((function(a) {
                    return Object.getOwnPropertyDescriptor(t, a).enumerable
                }
                ))),
                s.push.apply(s, i)
            }
            return s
        }
        function n(t) {
            for (var a = 1; a < arguments.length; a++) {
                var s = null != arguments[a] ? arguments[a] : {};
                a % 2 ? e(Object(s), !0).forEach((function(a) {
                    c(t, a, s[a])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : e(Object(s)).forEach((function(a) {
                    Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(s, a))
                }
                ))
            }
            return t
        }
        function c(t, a, s) {
            return a in t ? Object.defineProperty(t, a, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[a] = s,
            t
        }
        const l = {
            data: function() {
                return {
                    isOpen: !1,
                    langs: ["en", "fr", "ar", "de", "es", "it", "Ind", "thai", "tr_ch", "sm_ch", "tur", "ru", "hn", "vn", "kr", "ba", "br", "da"]
                }
            },
            computed: n({}, (0,
            i.Se)(["getThemeMode", "getcompactLeftSideBarBgColor"])),
            methods: n(n({}, (0,
            i.nv)(["changeThemeRtl", "changeThemeLayout", "changeThemeMode", "changecompactLeftSideBarBgColor"])), {}, {
                SetLocal: function(t) {
                    this.$i18n.locale = t,
                    this.$store.dispatch("language/setLanguage", t),
                    Fire.$emit("ChangeLanguage")
                }
            })
        };
        const r = (0,
        s(51900).Z)(l, (function() {
            var t = this
              , a = t.$createElement
              , s = t._self._c || a;
            return s("div", [s("div", {
                staticClass: "customizer",
                class: {
                    open: t.isOpen
                }
            }, [s("div", {
                staticClass: "handle",
                on: {
                    click: function(a) {
                        t.isOpen = !t.isOpen
                    }
                }
            }, [s("i", {
                staticClass: "i-Gear spin"
            })]), t._v(" "), s("vue-perfect-scrollbar", {
                staticClass: "customizer-body ps rtl-ps-none",
                attrs: {
                    settings: {
                        suppressScrollX: !0,
                        wheelPropagation: !1
                    }
                }
            }, ["vertical-sidebar" != t.getThemeMode.layout && "vertical-sidebar-two" != t.getThemeMode.layout ? s("div", {}, [s("div", {
                staticClass: "card-header",
                attrs: {
                    id: "headingOne"
                }
            }, [s("p", {
                staticClass: "mb-0"
            }, [t._v("RTL")])]), t._v(" "), s("div", {
                staticClass: "card-body"
            }, [s("label", {
                staticClass: "checkbox checkbox-primary"
            }, [s("input", {
                attrs: {
                    type: "checkbox",
                    id: "rtl-checkbox"
                },
                on: {
                    change: t.changeThemeRtl
                }
            }), t._v(" "), s("span", [t._v("Enable RTL")]), t._v(" "), s("span", {
                staticClass: "checkmark"
            })])])]) : t._e(), t._v(" "), s("div", {}, [s("div", {
                staticClass: "card-header"
            }, [s("p", {
                staticClass: "mb-0"
            }, [t._v("Dark Mode")])]), t._v(" "), s("div", {
                staticClass: "card-body"
            }, [s("label", {
                directives: [{
                    name: "b-popover",
                    rawName: "v-b-popover.hover.left",
                    value: "Dark Mode",
                    expression: "'Dark Mode'",
                    modifiers: {
                        hover: !0,
                        left: !0
                    }
                }],
                staticClass: "switch switch-primary mr-3 mt-2"
            }, [s("input", {
                attrs: {
                    type: "checkbox"
                },
                on: {
                    click: t.changeThemeMode
                }
            }), t._v(" "), s("span", {
                staticClass: "slider"
            })])])]), t._v(" "), s("div", {}, [s("div", {
                staticClass: "card-header"
            }, [s("p", {
                staticClass: "mb-0"
            }, [t._v("Language")])]), t._v(" "), s("div", {
                staticClass: "card-body"
            }, [s("div", {
                staticClass: "menu-icon-language"
            }, [s("a", {
                on: {
                    click: function(a) {
                        return t.SetLocal("en")
                    }
                }
            }, [s("i", {
                staticClass: "flag-icon flag-icon-squared flag-icon-gb",
                attrs: {
                    title: "en"
                }
            }), t._v(" English\n            ")]), t._v(" "), s("a", {
                on: {
                    click: function(a) {
                        return t.SetLocal("fr")
                    }
                }
            }, [s("i", {
                staticClass: "flag-icon flag-icon-squared flag-icon-fr",
                attrs: {
                    title: "fr"
                }
            }), t._v(" "), s("span", {
                staticClass: "title-lang"
            }, [t._v("French")])]), t._v(" "), s("a", {
                on: {
                    click: function(a) {
                        return t.SetLocal("ar")
                    }
                }
            }, [s("i", {
                staticClass: "flag-icon flag-icon-squared flag-icon-sa",
                attrs: {
                    title: "sa"
                }
            }), t._v(" "), s("span", {
                staticClass: "title-lang"
            }, [t._v("Arabic")])]), t._v(" "), s("a", {
                on: {
                    click: function(a) {
                        return t.SetLocal("tur")
                    }
                }
            }, [s("i", {
                staticClass: "flag-icon flag-icon-squared flag-icon-tr",
                attrs: {
                    title: "sa"
                }
            }), t._v(" "), s("span", {
                staticClass: "title-lang"
            }, [t._v("Turkish")])]), t._v(" "), s("a", {
                on: {
                    click: function(a) {
                        return t.SetLocal("sm_ch")
                    }
                }
            }, [s("i", {
                staticClass: "flag-icon flag-icon-squared flag-icon-cn",
                attrs: {
                    title: "sa"
                }
            }), t._v(" "), s("span", {
                staticClass: "title-lang"
            }, [t._v("Simplified Chinese")])]), t._v(" "), s("a", {
                on: {
                    click: function(a) {
                        return t.SetLocal("thai")
                    }
                }
            }, [s("i", {
                staticClass: "flag-icon flag-icon-squared flag-icon-th",
                attrs: {
                    title: "sa"
                }
            }), t._v(" "), s("span", {
                staticClass: "title-lang"
            }, [t._v("Thaï")])]), t._v(" "), s("a", {
                on: {
                    click: function(a) {
                        return t.SetLocal("hn")
                    }
                }
            }, [s("i", {
                staticClass: "flag-icon flag-icon-squared flag-icon-in",
                attrs: {
                    title: "sa"
                }
            }), t._v(" "), s("span", {
                staticClass: "title-lang"
            }, [t._v("Hindi")])]), t._v(" "), s("a", {
                on: {
                    click: function(a) {
                        return t.SetLocal("de")
                    }
                }
            }, [s("i", {
                staticClass: "flag-icon flag-icon-squared flag-icon-de",
                attrs: {
                    title: "de"
                }
            }), t._v(" "), s("span", {
                staticClass: "title-lang"
            }, [t._v("German")])]), t._v(" "), s("a", {
                on: {
                    click: function(a) {
                        return t.SetLocal("es")
                    }
                }
            }, [s("i", {
                staticClass: "flag-icon flag-icon-squared flag-icon-es",
                attrs: {
                    title: "es"
                }
            }), t._v(" "), s("span", {
                staticClass: "title-lang"
            }, [t._v("Spanish")])]), t._v(" "), s("a", {
                on: {
                    click: function(a) {
                        return t.SetLocal("it")
                    }
                }
            }, [s("i", {
                staticClass: "flag-icon flag-icon-squared flag-icon-it",
                attrs: {
                    title: "it"
                }
            }), t._v(" "), s("span", {
                staticClass: "title-lang"
            }, [t._v("Italien")])]), t._v(" "), s("a", {
                on: {
                    click: function(a) {
                        return t.SetLocal("Ind")
                    }
                }
            }, [s("i", {
                staticClass: "flag-icon flag-icon-squared flag-icon-id",
                attrs: {
                    title: "sa"
                }
            }), t._v(" "), s("span", {
                staticClass: "title-lang"
            }, [t._v("Indonesian")])]), t._v(" "), s("a", {
                on: {
                    click: function(a) {
                        return t.SetLocal("tr_ch")
                    }
                }
            }, [s("i", {
                staticClass: "flag-icon flag-icon-squared flag-icon-cn",
                attrs: {
                    title: "sa"
                }
            }), t._v(" "), s("span", {
                staticClass: "title-lang"
            }, [t._v("Traditional Chinese")])]), t._v(" "), s("a", {
                on: {
                    click: function(a) {
                        return t.SetLocal("ru")
                    }
                }
            }, [s("i", {
                staticClass: "flag-icon flag-icon-squared flag-icon-ru",
                attrs: {
                    title: "sa"
                }
            }), t._v(" "), s("span", {
                staticClass: "title-lang"
            }, [t._v("Russian")])]), t._v(" "), s("a", {
                on: {
                    click: function(a) {
                        return t.SetLocal("vn")
                    }
                }
            }, [s("i", {
                staticClass: "flag-icon flag-icon-squared flag-icon-vn",
                attrs: {
                    title: "sa"
                }
            }), t._v(" "), s("span", {
                staticClass: "title-lang"
            }, [t._v("Vietnamese")])]), t._v(" "), s("a", {
                on: {
                    click: function(a) {
                        return t.SetLocal("kr")
                    }
                }
            }, [s("i", {
                staticClass: "flag-icon flag-icon-squared flag-icon-kr",
                attrs: {
                    title: "sa"
                }
            }), t._v(" "), s("span", {
                staticClass: "title-lang"
            }, [t._v("Korean")])]), t._v(" "), s("a", {
                on: {
                    click: function(a) {
                        return t.SetLocal("ba")
                    }
                }
            }, [s("i", {
                staticClass: "flag-icon flag-icon-squared flag-icon-bd",
                attrs: {
                    title: "sa"
                }
            }), t._v(" "), s("span", {
                staticClass: "title-lang"
            }, [t._v("Bangla")])]), t._v(" "), s("a", {
                on: {
                    click: function(a) {
                        return t.SetLocal("br")
                    }
                }
            }, [s("i", {
                staticClass: "flag-icon flag-icon-squared flag-icon-pt",
                attrs: {
                    title: "pt"
                }
            }), t._v(" "), s("span", {
                staticClass: "title-lang"
            }, [t._v("Portuguese")])]), t._v(" "), s("a", {
                on: {
                    click: function(a) {
                        return t.SetLocal("da")
                    }
                }
            }, [s("i", {
                staticClass: "flag-icon flag-icon-squared flag-icon-dk",
                attrs: {
                    title: "sa"
                }
            }), t._v(" "), s("span", {
                staticClass: "title-lang"
            }, [t._v("Danish")])])])])])])], 1)])
        }
        ), [], !1, null, "4a1b8cb9", null).exports
    }
}]);
