/*! For license information please see index_products.28de830f4da26336.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([[1539], {
    18159: function(t, e, r) {
        var n;
        void 0 !== this || window,
        t.exports = (n = function() {
            try {
                return r(17959)
            } catch (t) {}
        }(),
        (()=>{
            "use strict";
            var t = {
                662: function(t, e) {
                    var r, n = this && this.__extends || (r = function(t, e) {
                        return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(t, e) {
                            t.__proto__ = e
                        }
                        || function(t, e) {
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                        }
                        )(t, e)
                    }
                    ,
                    function(t, e) {
                        if ("function" != typeof e && null !== e)
                            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                        function n() {
                            this.constructor = t
                        }
                        r(t, e),
                        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                        new n)
                    }
                    );
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.CellHookData = e.HookData = void 0;
                    var i = function(t, e, r) {
                        this.table = e,
                        this.pageNumber = e.pageNumber,
                        this.pageCount = this.pageNumber,
                        this.settings = e.settings,
                        this.cursor = r,
                        this.doc = t.getDocument()
                    };
                    e.HookData = i;
                    var a = function(t) {
                        function e(e, r, n, i, a, o) {
                            var s = t.call(this, e, r, o) || this;
                            return s.cell = n,
                            s.row = i,
                            s.column = a,
                            s.section = i.section,
                            s
                        }
                        return n(e, t),
                        e
                    }(i);
                    e.CellHookData = a
                },
                790: (t,e,r)=>{
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var n = r(148)
                      , i = r(938)
                      , a = r(323)
                      , o = r(587)
                      , s = r(49)
                      , l = r(858);
                    e.default = function(t) {
                        t.API.autoTable = function() {
                            for (var t, e = [], r = 0; r < arguments.length; r++)
                                e[r] = arguments[r];
                            1 === e.length ? t = e[0] : (console.error("Use of deprecated autoTable initiation"),
                            (t = e[2] || {}).columns = e[0],
                            t.body = e[1]);
                            var n = (0,
                            o.parseInput)(this, t)
                              , i = (0,
                            l.createTable)(this, n);
                            return (0,
                            s.drawTable)(this, i),
                            this
                        }
                        ,
                        t.API.lastAutoTable = !1,
                        t.API.previousAutoTable = !1,
                        t.API.autoTable.previous = !1,
                        t.API.autoTableText = function(t, e, r, n) {
                            (0,
                            i.default)(t, e, r, n, this)
                        }
                        ,
                        t.API.autoTableSetDefaults = function(t) {
                            return a.DocHandler.setDefaults(t, this),
                            this
                        }
                        ,
                        t.autoTableSetDefaults = function(t, e) {
                            a.DocHandler.setDefaults(t, e)
                        }
                        ,
                        t.API.autoTableHtmlToJson = function(t, e) {
                            if (void 0 === e && (e = !1),
                            "undefined" == typeof window)
                                return console.error("Cannot run autoTableHtmlToJson in non browser environment"),
                                null;
                            var r = new a.DocHandler(this)
                              , i = (0,
                            n.parseHtml)(r, t, window, e, !1)
                              , o = i.head
                              , s = i.body;
                            return {
                                columns: o[0].map((function(t) {
                                    return t.content
                                }
                                )),
                                rows: s,
                                data: s
                            }
                        }
                        ,
                        t.API.autoTableEndPosY = function() {
                            console.error("Use of deprecated function: autoTableEndPosY. Use doc.lastAutoTable.finalY instead.");
                            var t = this.lastAutoTable;
                            return t && t.finalY ? t.finalY : 0
                        }
                        ,
                        t.API.autoTableAddPageContent = function(e) {
                            return console.error("Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead."),
                            t.API.autoTable.globalDefaults || (t.API.autoTable.globalDefaults = {}),
                            t.API.autoTable.globalDefaults.addPageContent = e,
                            this
                        }
                        ,
                        t.API.autoTableAddPage = function() {
                            return console.error("Use of deprecated function: autoTableAddPage. Use doc.addPage()"),
                            this.addPage(),
                            this
                        }
                    }
                }
                ,
                938: (t,e)=>{
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.default = function(t, e, r, n, i) {
                        n = n || {};
                        var a = 1.15
                          , o = i.internal.scaleFactor
                          , s = i.internal.getFontSize() / o
                          , l = ""
                          , u = 1;
                        if ("middle" !== n.valign && "bottom" !== n.valign && "center" !== n.halign && "right" !== n.halign || (u = (l = "string" == typeof t ? t.split(/\r\n|\r|\n/g) : t).length || 1),
                        r += s * (2 - a),
                        "middle" === n.valign ? r -= u / 2 * s * a : "bottom" === n.valign && (r -= u * s * a),
                        "center" === n.halign || "right" === n.halign) {
                            var c = s;
                            if ("center" === n.halign && (c *= .5),
                            l && u >= 1) {
                                for (var h = 0; h < l.length; h++)
                                    i.text(l[h], e - i.getStringUnitWidth(l[h]) * c, r),
                                    r += s * a;
                                return i
                            }
                            e -= i.getStringUnitWidth(t) * c
                        }
                        return "justify" === n.halign ? i.text(t, e, r, {
                            maxWidth: n.maxWidth || 100,
                            align: "justify"
                        }) : i.text(t, e, r),
                        i
                    }
                }
                ,
                200: (t,e)=>{
                    function r(t, e) {
                        var r = t > 0
                          , n = e || 0 === e;
                        return r && n ? "DF" : r ? "S" : n ? "F" : null
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.parseSpacing = e.getFillStyle = e.addTableBorder = e.getStringWidth = void 0,
                    e.getStringWidth = function(t, e, r) {
                        return r.applyStyles(e, !0),
                        (Array.isArray(t) ? t : [t]).map((function(t) {
                            return r.getTextWidth(t)
                        }
                        )).reduce((function(t, e) {
                            return Math.max(t, e)
                        }
                        ), 0)
                    }
                    ,
                    e.addTableBorder = function(t, e, n, i) {
                        var a = e.settings.tableLineWidth
                          , o = e.settings.tableLineColor;
                        t.applyStyles({
                            lineWidth: a,
                            lineColor: o
                        });
                        var s = r(a, !1);
                        s && t.rect(n.x, n.y, e.getWidth(t.pageSize().width), i.y - n.y, s)
                    }
                    ,
                    e.getFillStyle = r,
                    e.parseSpacing = function(t, e) {
                        var r, n, i, a;
                        if (t = t || e,
                        Array.isArray(t)) {
                            if (t.length >= 4)
                                return {
                                    top: t[0],
                                    right: t[1],
                                    bottom: t[2],
                                    left: t[3]
                                };
                            if (3 === t.length)
                                return {
                                    top: t[0],
                                    right: t[1],
                                    bottom: t[2],
                                    left: t[1]
                                };
                            if (2 === t.length)
                                return {
                                    top: t[0],
                                    right: t[1],
                                    bottom: t[0],
                                    left: t[1]
                                };
                            t = 1 === t.length ? t[0] : e
                        }
                        return "object" == typeof t ? ("number" == typeof t.vertical && (t.top = t.vertical,
                        t.bottom = t.vertical),
                        "number" == typeof t.horizontal && (t.right = t.horizontal,
                        t.left = t.horizontal),
                        {
                            left: null !== (r = t.left) && void 0 !== r ? r : e,
                            top: null !== (n = t.top) && void 0 !== n ? n : e,
                            right: null !== (i = t.right) && void 0 !== i ? i : e,
                            bottom: null !== (a = t.bottom) && void 0 !== a ? a : e
                        }) : ("number" != typeof t && (t = e),
                        {
                            top: t,
                            right: t,
                            bottom: t,
                            left: t
                        })
                    }
                }
                ,
                913: function(t, e) {
                    var r, n = this && this.__extends || (r = function(t, e) {
                        return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(t, e) {
                            t.__proto__ = e
                        }
                        || function(t, e) {
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                        }
                        )(t, e)
                    }
                    ,
                    function(t, e) {
                        if ("function" != typeof e && null !== e)
                            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                        function n() {
                            this.constructor = t
                        }
                        r(t, e),
                        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                        new n)
                    }
                    );
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.getTheme = e.defaultStyles = e.HtmlRowInput = e.FONT_ROW_RATIO = void 0,
                    e.FONT_ROW_RATIO = 1.15;
                    var i = function(t) {
                        function e(e) {
                            var r = t.call(this) || this;
                            return r._element = e,
                            r
                        }
                        return n(e, t),
                        e
                    }(Array);
                    e.HtmlRowInput = i,
                    e.defaultStyles = function(t) {
                        return {
                            font: "helvetica",
                            fontStyle: "normal",
                            overflow: "linebreak",
                            fillColor: !1,
                            textColor: 20,
                            halign: "left",
                            valign: "top",
                            fontSize: 10,
                            cellPadding: 5 / t,
                            lineColor: 200,
                            lineWidth: 0,
                            cellWidth: "auto",
                            minCellHeight: 0,
                            minCellWidth: 0
                        }
                    }
                    ,
                    e.getTheme = function(t) {
                        return {
                            striped: {
                                table: {
                                    fillColor: 255,
                                    textColor: 80,
                                    fontStyle: "normal"
                                },
                                head: {
                                    textColor: 255,
                                    fillColor: [41, 128, 185],
                                    fontStyle: "bold"
                                },
                                body: {},
                                foot: {
                                    textColor: 255,
                                    fillColor: [41, 128, 185],
                                    fontStyle: "bold"
                                },
                                alternateRow: {
                                    fillColor: 245
                                }
                            },
                            grid: {
                                table: {
                                    fillColor: 255,
                                    textColor: 80,
                                    fontStyle: "normal",
                                    lineWidth: .1
                                },
                                head: {
                                    textColor: 255,
                                    fillColor: [26, 188, 156],
                                    fontStyle: "bold",
                                    lineWidth: 0
                                },
                                body: {},
                                foot: {
                                    textColor: 255,
                                    fillColor: [26, 188, 156],
                                    fontStyle: "bold",
                                    lineWidth: 0
                                },
                                alternateRow: {}
                            },
                            plain: {
                                head: {
                                    fontStyle: "bold"
                                },
                                foot: {
                                    fontStyle: "bold"
                                }
                            }
                        }[t]
                    }
                },
                259: (t,e,r)=>{
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.parseCss = void 0;
                    var n = r(200);
                    function i(t, e) {
                        var r = a(t, e);
                        if (!r)
                            return null;
                        var n = r.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);
                        if (!n || !Array.isArray(n))
                            return null;
                        var i = [parseInt(n[1]), parseInt(n[2]), parseInt(n[3])];
                        return 0 === parseInt(n[4]) || isNaN(i[0]) || isNaN(i[1]) || isNaN(i[2]) ? null : i
                    }
                    function a(t, e) {
                        var r = e(t);
                        return "rgba(0, 0, 0, 0)" === r || "transparent" === r || "initial" === r || "inherit" === r ? null == t.parentElement ? null : a(t.parentElement, e) : r
                    }
                    e.parseCss = function(t, e, r, a, o) {
                        var s = {}
                          , l = 96 / 72
                          , u = i(e, (function(t) {
                            return o.getComputedStyle(t).backgroundColor
                        }
                        ));
                        null != u && (s.fillColor = u);
                        var c = i(e, (function(t) {
                            return o.getComputedStyle(t).color
                        }
                        ));
                        null != c && (s.textColor = c);
                        var h = i(e, (function(t) {
                            return o.getComputedStyle(t).borderTopColor
                        }
                        ));
                        null != h && (s.lineColor = h);
                        var f = function(t, e) {
                            var r = [t.paddingTop, t.paddingRight, t.paddingBottom, t.paddingLeft]
                              , i = 96 / (72 / e)
                              , a = (parseInt(t.lineHeight) - parseInt(t.fontSize)) / e / 2
                              , o = r.map((function(t) {
                                return parseInt(t || "0") / i
                            }
                            ))
                              , s = (0,
                            n.parseSpacing)(o, 0);
                            return a > s.top && (s.top = a),
                            a > s.bottom && (s.bottom = a),
                            s
                        }(a, r);
                        f && (s.cellPadding = f);
                        var d = parseInt(a.borderTopWidth || "");
                        (d = d / l / r) && (s.lineWidth = d);
                        var p = ["left", "right", "center", "justify"];
                        -1 !== p.indexOf(a.textAlign) && (s.halign = a.textAlign),
                        -1 !== (p = ["middle", "bottom", "top"]).indexOf(a.verticalAlign) && (s.valign = a.verticalAlign);
                        var g = parseInt(a.fontSize || "");
                        isNaN(g) || (s.fontSize = g / l);
                        var m = function(t) {
                            var e = "";
                            return ("bold" === t.fontWeight || "bolder" === t.fontWeight || parseInt(t.fontWeight) >= 700) && (e = "bold"),
                            "italic" !== t.fontStyle && "oblique" !== t.fontStyle || (e += "italic"),
                            e
                        }(a);
                        m && (s.fontStyle = m);
                        var v = (a.fontFamily || "").toLowerCase();
                        return -1 !== t.indexOf(v) && (s.font = v),
                        s
                    }
                }
                ,
                323: (t,e)=>{
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.DocHandler = void 0;
                    var r = {}
                      , n = function() {
                        function t(t) {
                            this.jsPDFDocument = t,
                            this.userStyles = {
                                textColor: t.getTextColor ? this.jsPDFDocument.getTextColor() : 0,
                                fontSize: t.internal.getFontSize(),
                                fontStyle: t.internal.getFont().fontStyle,
                                font: t.internal.getFont().fontName
                            }
                        }
                        return t.setDefaults = function(t, e) {
                            void 0 === e && (e = null),
                            e ? e.__autoTableDocumentDefaults = t : r = t
                        }
                        ,
                        t.unifyColor = function(t) {
                            return Array.isArray(t) ? t : "number" == typeof t ? [t, t, t] : "string" == typeof t ? [t] : null
                        }
                        ,
                        t.prototype.applyStyles = function(e, r) {
                            var n, i, a;
                            void 0 === r && (r = !1),
                            e.fontStyle && this.jsPDFDocument.setFontStyle && this.jsPDFDocument.setFontStyle(e.fontStyle);
                            var o = this.jsPDFDocument.internal.getFont()
                              , s = o.fontStyle
                              , l = o.fontName;
                            if (e.font && (l = e.font),
                            e.fontStyle) {
                                s = e.fontStyle;
                                var u = this.getFontList()[l];
                                u && -1 === u.indexOf(s) && (this.jsPDFDocument.setFontStyle && this.jsPDFDocument.setFontStyle(u[0]),
                                s = u[0])
                            }
                            if (this.jsPDFDocument.setFont(l, s),
                            e.fontSize && this.jsPDFDocument.setFontSize(e.fontSize),
                            !r) {
                                var c = t.unifyColor(e.fillColor);
                                c && (n = this.jsPDFDocument).setFillColor.apply(n, c),
                                (c = t.unifyColor(e.textColor)) && (i = this.jsPDFDocument).setTextColor.apply(i, c),
                                (c = t.unifyColor(e.lineColor)) && (a = this.jsPDFDocument).setDrawColor.apply(a, c),
                                "number" == typeof e.lineWidth && this.jsPDFDocument.setLineWidth(e.lineWidth)
                            }
                        }
                        ,
                        t.prototype.splitTextToSize = function(t, e, r) {
                            return this.jsPDFDocument.splitTextToSize(t, e, r)
                        }
                        ,
                        t.prototype.rect = function(t, e, r, n, i) {
                            return this.jsPDFDocument.rect(t, e, r, n, i)
                        }
                        ,
                        t.prototype.getLastAutoTable = function() {
                            return this.jsPDFDocument.lastAutoTable || null
                        }
                        ,
                        t.prototype.getTextWidth = function(t) {
                            return this.jsPDFDocument.getTextWidth(t)
                        }
                        ,
                        t.prototype.getDocument = function() {
                            return this.jsPDFDocument
                        }
                        ,
                        t.prototype.setPage = function(t) {
                            this.jsPDFDocument.setPage(t)
                        }
                        ,
                        t.prototype.addPage = function() {
                            return this.jsPDFDocument.addPage()
                        }
                        ,
                        t.prototype.getFontList = function() {
                            return this.jsPDFDocument.getFontList()
                        }
                        ,
                        t.prototype.getGlobalOptions = function() {
                            return r || {}
                        }
                        ,
                        t.prototype.getDocumentOptions = function() {
                            return this.jsPDFDocument.__autoTableDocumentDefaults || {}
                        }
                        ,
                        t.prototype.pageSize = function() {
                            var t = this.jsPDFDocument.internal.pageSize;
                            return null == t.width && (t = {
                                width: t.getWidth(),
                                height: t.getHeight()
                            }),
                            t
                        }
                        ,
                        t.prototype.scaleFactor = function() {
                            return this.jsPDFDocument.internal.scaleFactor
                        }
                        ,
                        t.prototype.pageNumber = function() {
                            var t = this.jsPDFDocument.internal.getCurrentPageInfo();
                            return t ? t.pageNumber : this.jsPDFDocument.internal.getNumberOfPages()
                        }
                        ,
                        t
                    }();
                    e.DocHandler = n
                }
                ,
                148: (t,e,r)=>{
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.parseHtml = void 0;
                    var n = r(259)
                      , i = r(913);
                    function a(t, e, r, a, s, l) {
                        for (var u = new i.HtmlRowInput(a), c = 0; c < a.cells.length; c++) {
                            var h = a.cells[c]
                              , f = r.getComputedStyle(h);
                            if (s || "none" !== f.display) {
                                var d = void 0;
                                l && (d = (0,
                                n.parseCss)(t, h, e, f, r)),
                                u.push({
                                    rowSpan: h.rowSpan,
                                    colSpan: h.colSpan,
                                    styles: d,
                                    _element: h,
                                    content: o(h)
                                })
                            }
                        }
                        var p = r.getComputedStyle(a);
                        if (u.length > 0 && (s || "none" !== p.display))
                            return u
                    }
                    function o(t) {
                        var e = t.cloneNode(!0);
                        return e.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/ +/g, " "),
                        e.innerHTML = e.innerHTML.split(/\<br.*?\>/).map((function(t) {
                            return t.trim()
                        }
                        )).join("\n"),
                        e.innerText || e.textContent || ""
                    }
                    e.parseHtml = function(t, e, r, n, i) {
                        var o, s, l;
                        void 0 === n && (n = !1),
                        void 0 === i && (i = !1),
                        l = "string" == typeof e ? r.document.querySelector(e) : e;
                        var u = Object.keys(t.getFontList())
                          , c = t.scaleFactor()
                          , h = []
                          , f = []
                          , d = [];
                        if (!l)
                            return console.error("Html table could not be found with input: ", e),
                            {
                                head: h,
                                body: f,
                                foot: d
                            };
                        for (var p = 0; p < l.rows.length; p++) {
                            var g = l.rows[p]
                              , m = null === (s = null === (o = null == g ? void 0 : g.parentElement) || void 0 === o ? void 0 : o.tagName) || void 0 === s ? void 0 : s.toLowerCase()
                              , v = a(u, c, r, g, n, i);
                            v && ("thead" === m ? h.push(v) : "tfoot" === m ? d.push(v) : f.push(v))
                        }
                        return {
                            head: h,
                            body: f,
                            foot: d
                        }
                    }
                }
                ,
                587: (t,e,r)=>{
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.parseInput = void 0;
                    var n = r(148)
                      , i = r(360)
                      , a = r(200)
                      , o = r(323)
                      , s = r(291);
                    function l(t, e, r) {
                        var n = t[0] || e[0] || r[0] || []
                          , i = [];
                        return Object.keys(n).filter((function(t) {
                            return "_element" !== t
                        }
                        )).forEach((function(t) {
                            var e, r = 1;
                            "object" != typeof (e = Array.isArray(n) ? n[parseInt(t)] : n[t]) || Array.isArray(e) || (r = (null == e ? void 0 : e.colSpan) || 1);
                            for (var a = 0; a < r; a++) {
                                var o = {
                                    dataKey: Array.isArray(n) ? i.length : t + (a > 0 ? "_" + a : "")
                                };
                                i.push(o)
                            }
                        }
                        )),
                        i
                    }
                    e.parseInput = function(t, e) {
                        var r = new o.DocHandler(t)
                          , u = r.getDocumentOptions()
                          , c = r.getGlobalOptions();
                        (0,
                        s.default)(r, c, u, e);
                        var h, f = (0,
                        i.assign)({}, c, u, e);
                        "undefined" != typeof window && (h = window);
                        var d = function(t, e, r) {
                            for (var n = {
                                styles: {},
                                headStyles: {},
                                bodyStyles: {},
                                footStyles: {},
                                alternateRowStyles: {},
                                columnStyles: {}
                            }, a = function(a) {
                                if ("columnStyles" === a) {
                                    var o = t[a]
                                      , s = e[a]
                                      , l = r[a];
                                    n.columnStyles = (0,
                                    i.assign)({}, o, s, l)
                                } else {
                                    var u = [t, e, r].map((function(t) {
                                        return t[a] || {}
                                    }
                                    ));
                                    n[a] = (0,
                                    i.assign)({}, u[0], u[1], u[2])
                                }
                            }, o = 0, s = Object.keys(n); o < s.length; o++)
                                a(s[o]);
                            return n
                        }(c, u, e)
                          , p = function(t, e, r) {
                            for (var n = {
                                didParseCell: [],
                                willDrawCell: [],
                                didDrawCell: [],
                                didDrawPage: []
                            }, i = 0, a = [t, e, r]; i < a.length; i++) {
                                var o = a[i];
                                o.didParseCell && n.didParseCell.push(o.didParseCell),
                                o.willDrawCell && n.willDrawCell.push(o.willDrawCell),
                                o.didDrawCell && n.didDrawCell.push(o.didDrawCell),
                                o.didDrawPage && n.didDrawPage.push(o.didDrawPage)
                            }
                            return n
                        }(c, u, e)
                          , g = function(t, e) {
                            var r, n, i, o, s, l, u, c, h, f, d, p, g, m = (0,
                            a.parseSpacing)(e.margin, 40 / t.scaleFactor()), v = null !== (r = function(t, e) {
                                var r = t.getLastAutoTable()
                                  , n = t.scaleFactor()
                                  , i = t.pageNumber()
                                  , a = !1;
                                return r && r.startPageNumber && (a = r.startPageNumber + r.pageNumber - 1 === i),
                                "number" == typeof e ? e : null != e && !1 !== e || !a || null == (null == r ? void 0 : r.finalY) ? null : r.finalY + 20 / n
                            }(t, e.startY)) && void 0 !== r ? r : m.top;
                            p = !0 === e.showFoot ? "everyPage" : !1 === e.showFoot ? "never" : null !== (n = e.showFoot) && void 0 !== n ? n : "everyPage",
                            g = !0 === e.showHead ? "everyPage" : !1 === e.showHead ? "never" : null !== (i = e.showHead) && void 0 !== i ? i : "everyPage";
                            var b = null !== (o = e.useCss) && void 0 !== o && o
                              , y = e.theme || (b ? "plain" : "striped")
                              , w = !!e.horizontalPageBreak
                              , x = null !== (s = e.horizontalPageBreakRepeat) && void 0 !== s ? s : null;
                            return {
                                includeHiddenHtml: null !== (l = e.includeHiddenHtml) && void 0 !== l && l,
                                useCss: b,
                                theme: y,
                                startY: v,
                                margin: m,
                                pageBreak: null !== (u = e.pageBreak) && void 0 !== u ? u : "auto",
                                rowPageBreak: null !== (c = e.rowPageBreak) && void 0 !== c ? c : "auto",
                                tableWidth: null !== (h = e.tableWidth) && void 0 !== h ? h : "auto",
                                showHead: g,
                                showFoot: p,
                                tableLineWidth: null !== (f = e.tableLineWidth) && void 0 !== f ? f : 0,
                                tableLineColor: null !== (d = e.tableLineColor) && void 0 !== d ? d : 200,
                                horizontalPageBreak: w,
                                horizontalPageBreakRepeat: x
                            }
                        }(r, f)
                          , m = function(t, e, r) {
                            var i = e.head || []
                              , a = e.body || []
                              , o = e.foot || [];
                            if (e.html) {
                                var s = e.includeHiddenHtml;
                                if (r) {
                                    var u = (0,
                                    n.parseHtml)(t, e.html, r, s, e.useCss) || {};
                                    i = u.head || i,
                                    a = u.body || i,
                                    o = u.foot || i
                                } else
                                    console.error("Cannot parse html in non browser environment")
                            }
                            return {
                                columns: e.columns || l(i, a, o),
                                head: i,
                                body: a,
                                foot: o
                            }
                        }(r, f, h);
                        return {
                            id: e.tableId,
                            content: m,
                            hooks: p,
                            styles: d,
                            settings: g
                        }
                    }
                }
                ,
                291: (t,e)=>{
                    function r(t) {
                        t.rowHeight ? (console.error("Use of deprecated style rowHeight. It is renamed to minCellHeight."),
                        t.minCellHeight || (t.minCellHeight = t.rowHeight)) : t.columnWidth && (console.error("Use of deprecated style columnWidth. It is renamed to cellWidth."),
                        t.cellWidth || (t.cellWidth = t.columnWidth))
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.default = function(t, e, n, i) {
                        for (var a = function(e) {
                            e && "object" != typeof e && console.error("The options parameter should be of type object, is: " + typeof e),
                            void 0 !== e.extendWidth && (e.tableWidth = e.extendWidth ? "auto" : "wrap",
                            console.error("Use of deprecated option: extendWidth, use tableWidth instead.")),
                            void 0 !== e.margins && (void 0 === e.margin && (e.margin = e.margins),
                            console.error("Use of deprecated option: margins, use margin instead.")),
                            e.startY && "number" != typeof e.startY && (console.error("Invalid value for startY option", e.startY),
                            delete e.startY),
                            !e.didDrawPage && (e.afterPageContent || e.beforePageContent || e.afterPageAdd) && (console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead"),
                            e.didDrawPage = function(r) {
                                t.applyStyles(t.userStyles),
                                e.beforePageContent && e.beforePageContent(r),
                                t.applyStyles(t.userStyles),
                                e.afterPageContent && e.afterPageContent(r),
                                t.applyStyles(t.userStyles),
                                e.afterPageAdd && r.pageNumber > 1 && r.afterPageAdd(r),
                                t.applyStyles(t.userStyles)
                            }
                            ),
                            ["createdHeaderCell", "drawHeaderRow", "drawRow", "drawHeaderCell"].forEach((function(t) {
                                e[t] && console.error('The "' + t + '" hook has changed in version 3.0, check the changelog for how to migrate.')
                            }
                            )),
                            [["showFoot", "showFooter"], ["showHead", "showHeader"], ["didDrawPage", "addPageContent"], ["didParseCell", "createdCell"], ["headStyles", "headerStyles"]].forEach((function(t) {
                                var r = t[0]
                                  , n = t[1];
                                e[n] && (console.error("Use of deprecated option " + n + ". Use " + r + " instead"),
                                e[r] = e[n])
                            }
                            )),
                            [["padding", "cellPadding"], ["lineHeight", "rowHeight"], "fontSize", "overflow"].forEach((function(t) {
                                var r = "string" == typeof t ? t : t[0]
                                  , n = "string" == typeof t ? t : t[1];
                                void 0 !== e[r] && (void 0 === e.styles[n] && (e.styles[n] = e[r]),
                                console.error("Use of deprecated option: " + r + ", use the style " + n + " instead."))
                            }
                            ));
                            for (var n = 0, i = ["styles", "bodyStyles", "headStyles", "footStyles"]; n < i.length; n++)
                                r(e[i[n]] || {});
                            for (var a = e.columnStyles || {}, o = 0, s = Object.keys(a); o < s.length; o++)
                                r(a[s[o]] || {})
                        }, o = 0, s = [e, n, i]; o < s.length; o++)
                            a(s[o])
                    }
                }
                ,
                287: (t,e,r)=>{
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.Column = e.Cell = e.Row = e.Table = void 0;
                    var n = r(913)
                      , i = r(662)
                      , a = r(200)
                      , o = function() {
                        function t(t, e) {
                            this.pageNumber = 1,
                            this.pageCount = 1,
                            this.id = t.id,
                            this.settings = t.settings,
                            this.styles = t.styles,
                            this.hooks = t.hooks,
                            this.columns = e.columns,
                            this.head = e.head,
                            this.body = e.body,
                            this.foot = e.foot
                        }
                        return t.prototype.getHeadHeight = function(t) {
                            return this.head.reduce((function(e, r) {
                                return e + r.getMaxCellHeight(t)
                            }
                            ), 0)
                        }
                        ,
                        t.prototype.getFootHeight = function(t) {
                            return this.foot.reduce((function(e, r) {
                                return e + r.getMaxCellHeight(t)
                            }
                            ), 0)
                        }
                        ,
                        t.prototype.allRows = function() {
                            return this.head.concat(this.body).concat(this.foot)
                        }
                        ,
                        t.prototype.callCellHooks = function(t, e, r, n, a, o) {
                            for (var s = 0, l = e; s < l.length; s++) {
                                var u = !1 === (0,
                                l[s])(new i.CellHookData(t,this,r,n,a,o));
                                if (r.text = Array.isArray(r.text) ? r.text : [r.text],
                                u)
                                    return !1
                            }
                            return !0
                        }
                        ,
                        t.prototype.callEndPageHooks = function(t, e) {
                            t.applyStyles(t.userStyles);
                            for (var r = 0, n = this.hooks.didDrawPage; r < n.length; r++)
                                (0,
                                n[r])(new i.HookData(t,this,e))
                        }
                        ,
                        t.prototype.getWidth = function(t) {
                            if ("number" == typeof this.settings.tableWidth)
                                return this.settings.tableWidth;
                            if ("wrap" === this.settings.tableWidth)
                                return this.columns.reduce((function(t, e) {
                                    return t + e.wrappedWidth
                                }
                                ), 0);
                            var e = this.settings.margin;
                            return t - e.left - e.right
                        }
                        ,
                        t
                    }();
                    e.Table = o;
                    var s = function() {
                        function t(t, e, r, i, a) {
                            void 0 === a && (a = !1),
                            this.height = 0,
                            this.raw = t,
                            t instanceof n.HtmlRowInput && (this.raw = t._element,
                            this.element = t._element),
                            this.index = e,
                            this.section = r,
                            this.cells = i,
                            this.spansMultiplePages = a
                        }
                        return t.prototype.getMaxCellHeight = function(t) {
                            var e = this;
                            return t.reduce((function(t, r) {
                                var n;
                                return Math.max(t, (null === (n = e.cells[r.index]) || void 0 === n ? void 0 : n.height) || 0)
                            }
                            ), 0)
                        }
                        ,
                        t.prototype.hasRowSpan = function(t) {
                            var e = this;
                            return t.filter((function(t) {
                                var r = e.cells[t.index];
                                return !!r && r.rowSpan > 1
                            }
                            )).length > 0
                        }
                        ,
                        t.prototype.canEntireRowFit = function(t, e) {
                            return this.getMaxCellHeight(e) <= t
                        }
                        ,
                        t.prototype.getMinimumRowHeight = function(t, e) {
                            var r = this;
                            return t.reduce((function(t, i) {
                                var a = r.cells[i.index];
                                if (!a)
                                    return 0;
                                var o = a.styles.fontSize / e.scaleFactor() * n.FONT_ROW_RATIO
                                  , s = a.padding("vertical") + o;
                                return s > t ? s : t
                            }
                            ), 0)
                        }
                        ,
                        t
                    }();
                    e.Row = s;
                    var l = function() {
                        function t(t, e, r) {
                            var n, i;
                            this.contentHeight = 0,
                            this.contentWidth = 0,
                            this.wrappedWidth = 0,
                            this.minReadableWidth = 0,
                            this.minWidth = 0,
                            this.width = 0,
                            this.height = 0,
                            this.x = 0,
                            this.y = 0,
                            this.styles = e,
                            this.section = r,
                            this.raw = t;
                            var a = t;
                            null == t || "object" != typeof t || Array.isArray(t) ? (this.rowSpan = 1,
                            this.colSpan = 1) : (this.rowSpan = t.rowSpan || 1,
                            this.colSpan = t.colSpan || 1,
                            a = null !== (i = null !== (n = t.content) && void 0 !== n ? n : t.title) && void 0 !== i ? i : t,
                            t._element && (this.raw = t._element));
                            var o = null != a ? "" + a : "";
                            this.text = o.split(/\r\n|\r|\n/g)
                        }
                        return t.prototype.getTextPos = function() {
                            var t, e;
                            if ("top" === this.styles.valign)
                                t = this.y + this.padding("top");
                            else if ("bottom" === this.styles.valign)
                                t = this.y + this.height - this.padding("bottom");
                            else {
                                var r = this.height - this.padding("vertical");
                                t = this.y + r / 2 + this.padding("top")
                            }
                            if ("right" === this.styles.halign)
                                e = this.x + this.width - this.padding("right");
                            else if ("center" === this.styles.halign) {
                                var n = this.width - this.padding("horizontal");
                                e = this.x + n / 2 + this.padding("left")
                            } else
                                e = this.x + this.padding("left");
                            return {
                                x: e,
                                y: t
                            }
                        }
                        ,
                        t.prototype.getContentHeight = function(t) {
                            var e = (Array.isArray(this.text) ? this.text.length : 1) * (this.styles.fontSize / t * n.FONT_ROW_RATIO) + this.padding("vertical");
                            return Math.max(e, this.styles.minCellHeight)
                        }
                        ,
                        t.prototype.padding = function(t) {
                            var e = (0,
                            a.parseSpacing)(this.styles.cellPadding, 0);
                            return "vertical" === t ? e.top + e.bottom : "horizontal" === t ? e.left + e.right : e[t]
                        }
                        ,
                        t
                    }();
                    e.Cell = l;
                    var u = function() {
                        function t(t, e, r) {
                            this.wrappedWidth = 0,
                            this.minReadableWidth = 0,
                            this.minWidth = 0,
                            this.width = 0,
                            this.dataKey = t,
                            this.raw = e,
                            this.index = r
                        }
                        return t.prototype.getMaxCustomCellWidth = function(t) {
                            for (var e = 0, r = 0, n = t.allRows(); r < n.length; r++) {
                                var i = n[r].cells[this.index];
                                i && "number" == typeof i.styles.cellWidth && (e = Math.max(e, i.styles.cellWidth))
                            }
                            return e
                        }
                        ,
                        t
                    }();
                    e.Column = u
                }
                ,
                360: (t,e)=>{
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.assign = void 0,
                    e.assign = function(t, e, r, n, i) {
                        if (null == t)
                            throw new TypeError("Cannot convert undefined or null to object");
                        for (var a = Object(t), o = 1; o < arguments.length; o++) {
                            var s = arguments[o];
                            if (null != s)
                                for (var l in s)
                                    Object.prototype.hasOwnProperty.call(s, l) && (a[l] = s[l])
                        }
                        return a
                    }
                }
                ,
                858: (t,e,r)=>{
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.createTable = void 0;
                    var n = r(323)
                      , i = r(287)
                      , a = r(189)
                      , o = r(913)
                      , s = r(360);
                    function l(t, e, r, n, a, o) {
                        var s = {};
                        return e.map((function(e, l) {
                            for (var u = 0, h = {}, f = 0, d = 0, p = 0, g = r; p < g.length; p++) {
                                var m = g[p];
                                if (null == s[m.index] || 0 === s[m.index].left)
                                    if (0 === d) {
                                        var v = void 0
                                          , b = {};
                                        "object" != typeof (v = Array.isArray(e) ? e[m.index - f - u] : e[m.dataKey]) || Array.isArray(v) || (b = (null == v ? void 0 : v.styles) || {});
                                        var y = c(t, m, l, a, n, o, b)
                                          , w = new i.Cell(v,y,t);
                                        h[m.dataKey] = w,
                                        h[m.index] = w,
                                        d = w.colSpan - 1,
                                        s[m.index] = {
                                            left: w.rowSpan - 1,
                                            times: d
                                        }
                                    } else
                                        d--,
                                        f++;
                                else
                                    s[m.index].left--,
                                    d = s[m.index].times,
                                    u++
                            }
                            return new i.Row(e,l,t,h)
                        }
                        ))
                    }
                    function u(t, e) {
                        var r = {};
                        return t.forEach((function(t) {
                            if (null != t.raw) {
                                var n = function(t, e) {
                                    if ("head" === t) {
                                        if ("object" == typeof e)
                                            return e.header || e.title || null;
                                        if ("string" == typeof e || "number" == typeof e)
                                            return e
                                    } else if ("foot" === t && "object" == typeof e)
                                        return e.footer;
                                    return null
                                }(e, t.raw);
                                null != n && (r[t.dataKey] = n)
                            }
                        }
                        )),
                        Object.keys(r).length > 0 ? r : null
                    }
                    function c(t, e, r, n, i, a, l) {
                        var u, c = (0,
                        o.getTheme)(n);
                        "head" === t ? u = i.headStyles : "body" === t ? u = i.bodyStyles : "foot" === t && (u = i.footStyles);
                        var h = (0,
                        s.assign)({}, c.table, c[t], i.styles, u)
                          , f = i.columnStyles[e.dataKey] || i.columnStyles[e.index] || {}
                          , d = "body" === t ? f : {}
                          , p = "body" === t && r % 2 == 0 ? (0,
                        s.assign)({}, c.alternateRow, i.alternateRowStyles) : {}
                          , g = (0,
                        o.defaultStyles)(a)
                          , m = (0,
                        s.assign)({}, g, h, p, d);
                        return (0,
                        s.assign)(m, l)
                    }
                    e.createTable = function(t, e) {
                        var r = new n.DocHandler(t)
                          , o = function(t, e) {
                            var r, n = t.content, a = function(t) {
                                return t.map((function(t, e) {
                                    var r, n, a;
                                    return a = "object" == typeof t && null !== (n = null !== (r = t.dataKey) && void 0 !== r ? r : t.key) && void 0 !== n ? n : e,
                                    new i.Column(a,t,e)
                                }
                                ))
                            }(n.columns);
                            0 === n.head.length && (r = u(a, "head")) && n.head.push(r),
                            0 === n.foot.length && (r = u(a, "foot")) && n.foot.push(r);
                            var o = t.settings.theme
                              , s = t.styles;
                            return {
                                columns: a,
                                head: l("head", n.head, a, s, o, e),
                                body: l("body", n.body, a, s, o, e),
                                foot: l("foot", n.foot, a, s, o, e)
                            }
                        }(e, r.scaleFactor())
                          , s = new i.Table(e,o);
                        return (0,
                        a.calculateWidths)(r, s),
                        r.applyStyles(r.userStyles),
                        s
                    }
                }
                ,
                49: (t,e,r)=>{
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.addPage = e.drawTable = void 0;
                    var n = r(913)
                      , i = r(200)
                      , a = r(287)
                      , o = r(323)
                      , s = r(360)
                      , l = r(938)
                      , u = r(435);
                    function c(t, e, r) {
                        var i = t.styles.fontSize / r.scaleFactor() * n.FONT_ROW_RATIO
                          , a = t.padding("vertical")
                          , o = Math.floor((e - a) / i);
                        return Math.max(0, o)
                    }
                    function h(t, e, r, n, i, o, l) {
                        var u = function(t, e, r, n) {
                            var i = e.settings.margin.bottom
                              , a = e.settings.showFoot;
                            return ("everyPage" === a || "lastPage" === a && r) && (i += e.getFootHeight(e.columns)),
                            t.pageSize().height - n.y - i
                        }(t, e, n, o);
                        if (r.canEntireRowFit(u, l))
                            f(t, e, r, o, l);
                        else if (function(t, e, r, n) {
                            var i = t.pageSize().height
                              , a = n.settings.margin
                              , o = i - (a.top + a.bottom);
                            "body" === e.section && (o -= n.getHeadHeight(n.columns) + n.getFootHeight(n.columns));
                            var s = e.getMinimumRowHeight(n.columns, t)
                              , l = s < r;
                            if (s > o)
                                return console.error("Will not be able to print row " + e.index + " correctly since it's minimum height is larger than page height"),
                                !0;
                            if (!l)
                                return !1;
                            var u = e.hasRowSpan(n.columns);
                            return e.getMaxCellHeight(n.columns) > o ? (u && console.error("The content of row " + e.index + " will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported."),
                            !0) : !u && "avoid" !== n.settings.rowPageBreak
                        }(t, r, u, e)) {
                            var d = function(t, e, r, n) {
                                var i = {};
                                t.spansMultiplePages = !0,
                                t.height = 0;
                                for (var o = 0, l = 0, u = r.columns; l < u.length; l++) {
                                    var h = u[l];
                                    if (b = t.cells[h.index]) {
                                        Array.isArray(b.text) || (b.text = [b.text]);
                                        var f = new a.Cell(b.raw,b.styles,b.section);
                                        (f = (0,
                                        s.assign)(f, b)).text = [];
                                        var d = c(b, e, n);
                                        b.text.length > d && (f.text = b.text.splice(d, b.text.length));
                                        var p = n.scaleFactor();
                                        b.contentHeight = b.getContentHeight(p),
                                        b.contentHeight >= e && (b.contentHeight = e,
                                        f.styles.minCellHeight -= e),
                                        b.contentHeight > t.height && (t.height = b.contentHeight),
                                        f.contentHeight = f.getContentHeight(p),
                                        f.contentHeight > o && (o = f.contentHeight),
                                        i[h.index] = f
                                    }
                                }
                                var g = new a.Row(t.raw,-1,t.section,i,!0);
                                g.height = o;
                                for (var m = 0, v = r.columns; m < v.length; m++) {
                                    var b;
                                    h = v[m],
                                    (f = g.cells[h.index]) && (f.height = g.height),
                                    (b = t.cells[h.index]) && (b.height = t.height)
                                }
                                return g
                            }(r, u, e, t);
                            f(t, e, r, o, l),
                            p(t, e, i, o, l),
                            h(t, e, d, n, i, o, l)
                        } else
                            p(t, e, i, o, l),
                            h(t, e, r, n, i, o, l)
                    }
                    function f(t, e, r, n, i) {
                        n.x = e.settings.margin.left;
                        for (var a = 0, o = i; a < o.length; a++) {
                            var s = o[a]
                              , u = r.cells[s.index];
                            if (u)
                                if (t.applyStyles(u.styles),
                                u.x = n.x,
                                u.y = n.y,
                                !1 !== e.callCellHooks(t, e.hooks.willDrawCell, u, r, s, n)) {
                                    d(t, u, n);
                                    var c = u.getTextPos();
                                    (0,
                                    l.default)(u.text, c.x, c.y, {
                                        halign: u.styles.halign,
                                        valign: u.styles.valign,
                                        maxWidth: Math.ceil(u.width - u.padding("left") - u.padding("right"))
                                    }, t.getDocument()),
                                    e.callCellHooks(t, e.hooks.didDrawCell, u, r, s, n),
                                    n.x += s.width
                                } else
                                    n.x += s.width;
                            else
                                n.x += s.width
                        }
                        n.y += r.height
                    }
                    function d(t, e, r) {
                        var n = e.styles;
                        if (t.getDocument().setFillColor(t.getDocument().getFillColor()),
                        "number" == typeof n.lineWidth) {
                            var a = (0,
                            i.getFillStyle)(n.lineWidth, n.fillColor);
                            a && t.rect(e.x, r.y, e.width, e.height, a)
                        } else if ("object" == typeof n.lineWidth) {
                            t.rect(e.x, r.y, e.width, e.height, "F");
                            var o = Object.keys(n.lineWidth)
                              , s = n.lineWidth;
                            o.map((function(a) {
                                var o = (0,
                                i.getFillStyle)(s[a], n.fillColor);
                                !function(t, e, r, n, i, a) {
                                    var o, s, l, u;
                                    switch (n) {
                                    case "top":
                                        o = r.x,
                                        s = r.y,
                                        l = r.x + e.width,
                                        u = r.y;
                                        break;
                                    case "left":
                                        o = r.x,
                                        s = r.y,
                                        l = r.x,
                                        u = r.y + e.height;
                                        break;
                                    case "right":
                                        o = r.x + e.width,
                                        s = r.y,
                                        l = r.x + e.width,
                                        u = r.y + e.height;
                                        break;
                                    default:
                                        o = r.x,
                                        s = r.y + e.height - a,
                                        l = r.x + e.width,
                                        u = r.y + e.height - a
                                    }
                                    t.getDocument().setLineWidth(a),
                                    t.getDocument().line(o, s, l, u, i)
                                }(t, e, r, a, o || "S", s[a])
                            }
                            ))
                        }
                    }
                    function p(t, e, r, n, a) {
                        void 0 === a && (a = []),
                        t.applyStyles(t.userStyles),
                        "everyPage" === e.settings.showFoot && e.foot.forEach((function(r) {
                            return f(t, e, r, n, a)
                        }
                        )),
                        e.callEndPageHooks(t, n);
                        var o = e.settings.margin;
                        (0,
                        i.addTableBorder)(t, e, r, n),
                        g(t),
                        e.pageNumber++,
                        e.pageCount++,
                        n.x = o.left,
                        n.y = o.top,
                        r.y = o.top,
                        "everyPage" === e.settings.showHead && e.head.forEach((function(r) {
                            return f(t, e, r, n, a)
                        }
                        ))
                    }
                    function g(t) {
                        var e = t.pageNumber();
                        t.setPage(e + 1),
                        t.pageNumber() === e && t.addPage()
                    }
                    e.drawTable = function(t, e) {
                        var r = e.settings
                          , n = r.startY
                          , a = r.margin
                          , l = {
                            x: a.left,
                            y: n
                        }
                          , c = e.getHeadHeight(e.columns) + e.getFootHeight(e.columns)
                          , d = n + a.bottom + c;
                        "avoid" === r.pageBreak && (d += e.allRows().reduce((function(t, e) {
                            return t + e.height
                        }
                        ), 0));
                        var m = new o.DocHandler(t);
                        ("always" === r.pageBreak || null != r.startY && d > m.pageSize().height) && (g(m),
                        l.y = a.top);
                        var v = (0,
                        s.assign)({}, l);
                        e.startPageNumber = m.pageNumber(),
                        !0 === r.horizontalPageBreak ? function(t, e, r, n) {
                            u.default.calculateAllColumnsCanFitInPage(t, e).map((function(i, a) {
                                t.applyStyles(t.userStyles),
                                a > 0 ? p(t, e, r, n, i.columns) : function(t, e, r, n) {
                                    var i = e.settings;
                                    t.applyStyles(t.userStyles),
                                    ("firstPage" === i.showHead || "everyPage" === i.showHead) && e.head.forEach((function(i) {
                                        return f(t, e, i, r, n)
                                    }
                                    ))
                                }(t, e, n, i.columns),
                                function(t, e, r, n, i) {
                                    t.applyStyles(t.userStyles),
                                    e.body.forEach((function(a, o) {
                                        var s = o === e.body.length - 1;
                                        h(t, e, a, s, r, n, i)
                                    }
                                    ))
                                }(t, e, r, n, i.columns),
                                function(t, e, r, n) {
                                    var i = e.settings;
                                    t.applyStyles(t.userStyles),
                                    ("lastPage" === i.showFoot || "everyPage" === i.showFoot) && e.foot.forEach((function(i) {
                                        return f(t, e, i, r, n)
                                    }
                                    ))
                                }(t, e, n, i.columns)
                            }
                            ))
                        }(m, e, v, l) : (m.applyStyles(m.userStyles),
                        "firstPage" !== r.showHead && "everyPage" !== r.showHead || e.head.forEach((function(t) {
                            return f(m, e, t, l, e.columns)
                        }
                        )),
                        m.applyStyles(m.userStyles),
                        e.body.forEach((function(t, r) {
                            var n = r === e.body.length - 1;
                            h(m, e, t, n, v, l, e.columns)
                        }
                        )),
                        m.applyStyles(m.userStyles),
                        "lastPage" !== r.showFoot && "everyPage" !== r.showFoot || e.foot.forEach((function(t) {
                            return f(m, e, t, l, e.columns)
                        }
                        ))),
                        (0,
                        i.addTableBorder)(m, e, v, l),
                        e.callEndPageHooks(m, l),
                        e.finalY = l.y,
                        t.lastAutoTable = e,
                        t.previousAutoTable = e,
                        t.autoTable && (t.autoTable.previous = e),
                        m.applyStyles(m.userStyles)
                    }
                    ,
                    e.addPage = p
                }
                ,
                435: (t,e,r)=>{
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var n = r(200)
                      , i = function(t, e) {
                        var r = (0,
                        n.parseSpacing)(e.settings.margin, 0);
                        return t.pageSize().width - (r.left + r.right)
                    }
                      , a = function(t, e, r) {
                        void 0 === r && (r = {});
                        var n = i(t, e)
                          , a = e.settings.horizontalPageBreakRepeat
                          , o = null
                          , s = []
                          , l = []
                          , u = e.columns.length
                          , c = r && r.start ? r.start : 0;
                        for (null != a && (o = e.columns.find((function(t) {
                            return t.dataKey === a || t.index === a
                        }
                        ))) && (s.push(o.index),
                        l.push(e.columns[o.index]),
                        n -= o.wrappedWidth); c < u; )
                            if ((null == o ? void 0 : o.index) !== c) {
                                var h = e.columns[c].wrappedWidth;
                                if (n < h) {
                                    0 !== c && c !== r.start || (s.push(c),
                                    l.push(e.columns[c]));
                                    break
                                }
                                s.push(c),
                                l.push(e.columns[c]),
                                n -= h,
                                c++
                            } else
                                c++;
                        return {
                            colIndexes: s,
                            columns: l,
                            lastIndex: c
                        }
                    };
                    e.default = {
                        getColumnsCanFitInPage: a,
                        calculateAllColumnsCanFitInPage: function(t, e) {
                            for (var r = [], n = 0, i = e.columns.length; n < i; ) {
                                var o = a(t, e, {
                                    start: 0 === n ? 0 : n
                                });
                                o && o.columns && o.columns.length ? (n = o.lastIndex,
                                r.push(o)) : n++
                            }
                            return r
                        },
                        getPageAvailableWidth: i
                    }
                }
                ,
                189: (t,e,r)=>{
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.ellipsize = e.resizeColumns = e.calculateWidths = void 0;
                    var n = r(200)
                      , i = r(435);
                    function a(t, e, r) {
                        for (var n = e, i = t.reduce((function(t, e) {
                            return t + e.wrappedWidth
                        }
                        ), 0), o = 0; o < t.length; o++) {
                            var s = t[o]
                              , l = n * (s.wrappedWidth / i)
                              , u = s.width + l
                              , c = r(s)
                              , h = u < c ? c : u;
                            e -= h - s.width,
                            s.width = h
                        }
                        if (e = Math.round(1e10 * e) / 1e10) {
                            var f = t.filter((function(t) {
                                return !(e < 0) || t.width > r(t)
                            }
                            ));
                            f.length && (e = a(f, e, r))
                        }
                        return e
                    }
                    function o(t, e, r, i, a) {
                        return t.map((function(t) {
                            return function(t, e, r, i, a) {
                                var o = 1e4 * i.scaleFactor();
                                if ((e = Math.ceil(e * o) / o) >= (0,
                                n.getStringWidth)(t, r, i))
                                    return t;
                                for (; e < (0,
                                n.getStringWidth)(t + a, r, i) && !(t.length <= 1); )
                                    t = t.substring(0, t.length - 1);
                                return t.trim() + a
                            }(t, e, r, i, a)
                        }
                        ))
                    }
                    e.calculateWidths = function(t, e) {
                        !function(t, e) {
                            var r = t.scaleFactor()
                              , a = e.settings.horizontalPageBreak
                              , o = i.default.getPageAvailableWidth(t, e);
                            e.allRows().forEach((function(i) {
                                for (var s = 0, l = e.columns; s < l.length; s++) {
                                    var u = l[s]
                                      , c = i.cells[u.index];
                                    if (c) {
                                        var h = e.hooks.didParseCell;
                                        e.callCellHooks(t, h, c, i, u, null);
                                        var f = c.padding("horizontal");
                                        c.contentWidth = (0,
                                        n.getStringWidth)(c.text, c.styles, t) + f;
                                        var d = (0,
                                        n.getStringWidth)(c.text.join(" ").split(/\s+/), c.styles, t);
                                        if (c.minReadableWidth = d + c.padding("horizontal"),
                                        "number" == typeof c.styles.cellWidth)
                                            c.minWidth = c.styles.cellWidth,
                                            c.wrappedWidth = c.styles.cellWidth;
                                        else if ("wrap" === c.styles.cellWidth || !0 === a)
                                            c.contentWidth > o ? (c.minWidth = o,
                                            c.wrappedWidth = o) : (c.minWidth = c.contentWidth,
                                            c.wrappedWidth = c.contentWidth);
                                        else {
                                            var p = 10 / r;
                                            c.minWidth = c.styles.minCellWidth || p,
                                            c.wrappedWidth = c.contentWidth,
                                            c.minWidth > c.wrappedWidth && (c.wrappedWidth = c.minWidth)
                                        }
                                    }
                                }
                            }
                            )),
                            e.allRows().forEach((function(t) {
                                for (var r = 0, n = e.columns; r < n.length; r++) {
                                    var i = n[r]
                                      , a = t.cells[i.index];
                                    if (a && 1 === a.colSpan)
                                        i.wrappedWidth = Math.max(i.wrappedWidth, a.wrappedWidth),
                                        i.minWidth = Math.max(i.minWidth, a.minWidth),
                                        i.minReadableWidth = Math.max(i.minReadableWidth, a.minReadableWidth);
                                    else {
                                        var o = e.styles.columnStyles[i.dataKey] || e.styles.columnStyles[i.index] || {}
                                          , s = o.cellWidth || o.minCellWidth;
                                        s && "number" == typeof s && (i.minWidth = s,
                                        i.wrappedWidth = s)
                                    }
                                    a && (a.colSpan > 1 && !i.minWidth && (i.minWidth = a.minWidth),
                                    a.colSpan > 1 && !i.wrappedWidth && (i.wrappedWidth = a.minWidth))
                                }
                            }
                            ))
                        }(t, e);
                        var r = []
                          , s = 0;
                        e.columns.forEach((function(t) {
                            var n = t.getMaxCustomCellWidth(e);
                            n ? t.width = n : (t.width = t.wrappedWidth,
                            r.push(t)),
                            s += t.width
                        }
                        ));
                        var l = e.getWidth(t.pageSize().width) - s;
                        l && (l = a(r, l, (function(t) {
                            return Math.max(t.minReadableWidth, t.minWidth)
                        }
                        ))),
                        l && (l = a(r, l, (function(t) {
                            return t.minWidth
                        }
                        ))),
                        l = Math.abs(l),
                        !e.settings.horizontalPageBreak && l > .1 / t.scaleFactor() && (l = l < 1 ? l : Math.round(l),
                        console.error("Of the table content, " + l + " units width could not fit page")),
                        function(t) {
                            for (var e = t.allRows(), r = 0; r < e.length; r++)
                                for (var n = e[r], i = null, a = 0, o = 0, s = 0; s < t.columns.length; s++) {
                                    var l = t.columns[s];
                                    if ((o -= 1) > 1 && t.columns[s + 1])
                                        a += l.width,
                                        delete n.cells[l.index];
                                    else if (i) {
                                        var u = i;
                                        delete n.cells[l.index],
                                        i = null,
                                        u.width = l.width + a
                                    } else {
                                        if (!(u = n.cells[l.index]))
                                            continue;
                                        if (o = u.colSpan,
                                        a = 0,
                                        u.colSpan > 1) {
                                            i = u,
                                            a += l.width;
                                            continue
                                        }
                                        u.width = l.width + a
                                    }
                                }
                        }(e),
                        function(t, e) {
                            for (var r = {
                                count: 0,
                                height: 0
                            }, n = 0, i = t.allRows(); n < i.length; n++) {
                                for (var a = i[n], s = 0, l = t.columns; s < l.length; s++) {
                                    var u = l[s]
                                      , c = a.cells[u.index];
                                    if (c) {
                                        e.applyStyles(c.styles, !0);
                                        var h = c.width - c.padding("horizontal");
                                        "linebreak" === c.styles.overflow ? c.text = e.splitTextToSize(c.text, h + 1 / e.scaleFactor(), {
                                            fontSize: c.styles.fontSize
                                        }) : "ellipsize" === c.styles.overflow ? c.text = o(c.text, h, c.styles, e, "...") : "hidden" === c.styles.overflow ? c.text = o(c.text, h, c.styles, e, "") : "function" == typeof c.styles.overflow && (c.text = c.styles.overflow(c.text, h)),
                                        c.contentHeight = c.getContentHeight(e.scaleFactor());
                                        var f = c.contentHeight / c.rowSpan;
                                        c.rowSpan > 1 && r.count * r.height < f * c.rowSpan ? r = {
                                            height: f,
                                            count: c.rowSpan
                                        } : r && r.count > 0 && r.height > f && (f = r.height),
                                        f > a.height && (a.height = f)
                                    }
                                }
                                r.count--
                            }
                        }(e, t),
                        function(t) {
                            for (var e = {}, r = 1, n = t.allRows(), i = 0; i < n.length; i++)
                                for (var a = n[i], o = 0, s = t.columns; o < s.length; o++) {
                                    var l = s[o]
                                      , u = e[l.index];
                                    if (r > 1)
                                        r--,
                                        delete a.cells[l.index];
                                    else if (u)
                                        u.cell.height += a.height,
                                        r = u.cell.colSpan,
                                        delete a.cells[l.index],
                                        u.left--,
                                        u.left <= 1 && delete e[l.index];
                                    else {
                                        var c = a.cells[l.index];
                                        if (!c)
                                            continue;
                                        if (c.height = a.height,
                                        c.rowSpan > 1) {
                                            var h = n.length - i
                                              , f = c.rowSpan > h ? h : c.rowSpan;
                                            e[l.index] = {
                                                cell: c,
                                                left: f,
                                                row: a
                                            }
                                        }
                                    }
                                }
                        }(e)
                    }
                    ,
                    e.resizeColumns = a,
                    e.ellipsize = o
                }
                ,
                84: t=>{
                    if (void 0 === n) {
                        var e = new Error("Cannot find module 'undefined'");
                        throw e.code = "MODULE_NOT_FOUND",
                        e
                    }
                    t.exports = n
                }
            }
              , e = {};
            function r(n) {
                var i = e[n];
                if (void 0 !== i)
                    return i.exports;
                var a = e[n] = {
                    exports: {}
                };
                return t[n].call(a.exports, a, a.exports, r),
                a.exports
            }
            var i = {};
            return (()=>{
                var t = i;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.Cell = t.Column = t.Row = t.Table = t.CellHookData = t.__drawTable = t.__createTable = t.applyPlugin = void 0;
                var e = r(790)
                  , n = r(587)
                  , a = r(49)
                  , o = r(858)
                  , s = r(287);
                Object.defineProperty(t, "Table", {
                    enumerable: !0,
                    get: function() {
                        return s.Table
                    }
                });
                var l = r(662);
                Object.defineProperty(t, "CellHookData", {
                    enumerable: !0,
                    get: function() {
                        return l.CellHookData
                    }
                });
                var u = r(287);
                function c(t) {
                    (0,
                    e.default)(t)
                }
                Object.defineProperty(t, "Cell", {
                    enumerable: !0,
                    get: function() {
                        return u.Cell
                    }
                }),
                Object.defineProperty(t, "Column", {
                    enumerable: !0,
                    get: function() {
                        return u.Column
                    }
                }),
                Object.defineProperty(t, "Row", {
                    enumerable: !0,
                    get: function() {
                        return u.Row
                    }
                }),
                t.applyPlugin = c,
                t.default = function(t, e) {
                    var r = (0,
                    n.parseInput)(t, e)
                      , i = (0,
                    o.createTable)(t, r);
                    (0,
                    a.drawTable)(t, i)
                }
                ,
                t.__createTable = function(t, e) {
                    var r = (0,
                    n.parseInput)(t, e);
                    return (0,
                    o.createTable)(t, r)
                }
                ,
                t.__drawTable = function(t, e) {
                    (0,
                    a.drawTable)(t, e)
                }
                ;
                try {
                    var h = r(84);
                    h.jsPDF && (h = h.jsPDF),
                    c(h)
                } catch (t) {}
            }
            )(),
            i
        }
        )())
    },
    17959: (t,e,r)=>{
        "use strict";
        function n(t) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            n(t)
        }
        r.r(e),
        r.d(e, {
            AcroForm: ()=>we,
            AcroFormAppearance: ()=>me,
            AcroFormButton: ()=>ue,
            AcroFormCheckBox: ()=>de,
            AcroFormChoiceField: ()=>ae,
            AcroFormComboBox: ()=>se,
            AcroFormEditBox: ()=>le,
            AcroFormListBox: ()=>oe,
            AcroFormPasswordField: ()=>ge,
            AcroFormPushButton: ()=>ce,
            AcroFormRadioButton: ()=>he,
            AcroFormTextField: ()=>pe,
            GState: ()=>St,
            ShadingPattern: ()=>Ct,
            TilingPattern: ()=>kt,
            default: ()=>vr,
            jsPDF: ()=>Ft
        });
        var i = Uint8Array
          , a = Uint16Array
          , o = Uint32Array
          , s = new i([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0])
          , l = new i([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0])
          , u = new i([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
          , c = function(t, e) {
            for (var r = new a(31), n = 0; n < 31; ++n)
                r[n] = e += 1 << t[n - 1];
            var i = new o(r[30]);
            for (n = 1; n < 30; ++n)
                for (var s = r[n]; s < r[n + 1]; ++s)
                    i[s] = s - r[n] << 5 | n;
            return [r, i]
        }
          , h = c(s, 2)
          , f = h[0]
          , d = h[1];
        f[28] = 258,
        d[258] = 28;
        for (var p = c(l, 0), g = p[0], m = p[1], v = new a(32768), b = 0; b < 32768; ++b) {
            var y = (43690 & b) >>> 1 | (21845 & b) << 1;
            y = (61680 & (y = (52428 & y) >>> 2 | (13107 & y) << 2)) >>> 4 | (3855 & y) << 4,
            v[b] = ((65280 & y) >>> 8 | (255 & y) << 8) >>> 1
        }
        var w = function(t, e, r) {
            for (var n = t.length, i = 0, o = new a(e); i < n; ++i)
                ++o[t[i] - 1];
            var s, l = new a(e);
            for (i = 0; i < e; ++i)
                l[i] = l[i - 1] + o[i - 1] << 1;
            if (r) {
                s = new a(1 << e);
                var u = 15 - e;
                for (i = 0; i < n; ++i)
                    if (t[i])
                        for (var c = i << 4 | t[i], h = e - t[i], f = l[t[i] - 1]++ << h, d = f | (1 << h) - 1; f <= d; ++f)
                            s[v[f] >>> u] = c
            } else
                for (s = new a(n),
                i = 0; i < n; ++i)
                    s[i] = v[l[t[i] - 1]++] >>> 15 - t[i];
            return s
        }
          , x = new i(288);
        for (b = 0; b < 144; ++b)
            x[b] = 8;
        for (b = 144; b < 256; ++b)
            x[b] = 9;
        for (b = 256; b < 280; ++b)
            x[b] = 7;
        for (b = 280; b < 288; ++b)
            x[b] = 8;
        var _ = new i(32);
        for (b = 0; b < 32; ++b)
            _[b] = 5;
        var N = w(x, 9, 0)
          , A = w(x, 9, 1)
          , L = w(_, 5, 0)
          , S = w(_, 5, 1)
          , P = function(t) {
            for (var e = t[0], r = 1; r < t.length; ++r)
                t[r] > e && (e = t[r]);
            return e
        }
          , C = function(t, e, r) {
            var n = e / 8 >> 0;
            return (t[n] | t[n + 1] << 8) >>> (7 & e) & r
        }
          , k = function(t, e) {
            var r = e / 8 >> 0;
            return (t[r] | t[r + 1] << 8 | t[r + 2] << 16) >>> (7 & e)
        }
          , F = function(t) {
            return (t / 8 >> 0) + (7 & t && 1)
        }
          , I = function(t, e, r) {
            (null == e || e < 0) && (e = 0),
            (null == r || r > t.length) && (r = t.length);
            var n = new (t instanceof a ? a : t instanceof o ? o : i)(r - e);
            return n.set(t.subarray(e, r)),
            n
        }
          , j = function(t, e, r) {
            var n = t.length
              , a = !e || r
              , o = !r || r.i;
            r || (r = {}),
            e || (e = new i(3 * n));
            var c = function(t) {
                var r = e.length;
                if (t > r) {
                    var n = new i(Math.max(2 * r, t));
                    n.set(e),
                    e = n
                }
            }
              , h = r.f || 0
              , d = r.p || 0
              , p = r.b || 0
              , m = r.l
              , v = r.d
              , b = r.m
              , y = r.n
              , x = 8 * n;
            do {
                if (!m) {
                    r.f = h = C(t, d, 1);
                    var _ = C(t, d + 1, 3);
                    if (d += 3,
                    !_) {
                        var N = t[(z = F(d) + 4) - 4] | t[z - 3] << 8
                          , L = z + N;
                        if (L > n) {
                            if (o)
                                throw "unexpected EOF";
                            break
                        }
                        a && c(p + N),
                        e.set(t.subarray(z, L), p),
                        r.b = p += N,
                        r.p = d = 8 * L;
                        continue
                    }
                    if (1 == _)
                        m = A,
                        v = S,
                        b = 9,
                        y = 5;
                    else {
                        if (2 != _)
                            throw "invalid block type";
                        var j = C(t, d, 31) + 257
                          , O = C(t, d + 10, 15) + 4
                          , D = j + C(t, d + 5, 31) + 1;
                        d += 14;
                        for (var T = new i(D), M = new i(19), B = 0; B < O; ++B)
                            M[u[B]] = C(t, d + 3 * B, 7);
                        d += 3 * O;
                        var E = P(M)
                          , R = (1 << E) - 1;
                        if (!o && d + D * (E + 7) > x)
                            break;
                        var q = w(M, E, 1);
                        for (B = 0; B < D; ) {
                            var z, U = q[C(t, d, R)];
                            if (d += 15 & U,
                            (z = U >>> 4) < 16)
                                T[B++] = z;
                            else {
                                var W = 0
                                  , H = 0;
                                for (16 == z ? (H = 3 + C(t, d, 3),
                                d += 2,
                                W = T[B - 1]) : 17 == z ? (H = 3 + C(t, d, 7),
                                d += 3) : 18 == z && (H = 11 + C(t, d, 127),
                                d += 7); H--; )
                                    T[B++] = W
                            }
                        }
                        var V = T.subarray(0, j)
                          , G = T.subarray(j);
                        b = P(V),
                        y = P(G),
                        m = w(V, b, 1),
                        v = w(G, y, 1)
                    }
                    if (d > x)
                        throw "unexpected EOF"
                }
                a && c(p + 131072);
                for (var $ = (1 << b) - 1, Y = (1 << y) - 1, J = b + y + 18; o || d + J < x; ) {
                    var K = (W = m[k(t, d) & $]) >>> 4;
                    if ((d += 15 & W) > x)
                        throw "unexpected EOF";
                    if (!W)
                        throw "invalid length/literal";
                    if (K < 256)
                        e[p++] = K;
                    else {
                        if (256 == K) {
                            m = null;
                            break
                        }
                        var X = K - 254;
                        if (K > 264) {
                            var Z = s[B = K - 257];
                            X = C(t, d, (1 << Z) - 1) + f[B],
                            d += Z
                        }
                        var Q = v[k(t, d) & Y]
                          , tt = Q >>> 4;
                        if (!Q)
                            throw "invalid distance";
                        d += 15 & Q;
                        G = g[tt];
                        if (tt > 3) {
                            Z = l[tt];
                            G += k(t, d) & (1 << Z) - 1,
                            d += Z
                        }
                        if (d > x)
                            throw "unexpected EOF";
                        a && c(p + 131072);
                        for (var et = p + X; p < et; p += 4)
                            e[p] = e[p - G],
                            e[p + 1] = e[p + 1 - G],
                            e[p + 2] = e[p + 2 - G],
                            e[p + 3] = e[p + 3 - G];
                        p = et
                    }
                }
                r.l = m,
                r.p = d,
                r.b = p,
                m && (h = 1,
                r.m = b,
                r.d = v,
                r.n = y)
            } while (!h);
            return p == e.length ? e : I(e, 0, p)
        }
          , O = function(t, e, r) {
            r <<= 7 & e;
            var n = e / 8 >> 0;
            t[n] |= r,
            t[n + 1] |= r >>> 8
        }
          , D = function(t, e, r) {
            r <<= 7 & e;
            var n = e / 8 >> 0;
            t[n] |= r,
            t[n + 1] |= r >>> 8,
            t[n + 2] |= r >>> 16
        }
          , T = function(t, e) {
            for (var r = [], n = 0; n < t.length; ++n)
                t[n] && r.push({
                    s: n,
                    f: t[n]
                });
            var o = r.length
              , s = r.slice();
            if (!o)
                return [new i(0), 0];
            if (1 == o) {
                var l = new i(r[0].s + 1);
                return l[r[0].s] = 1,
                [l, 1]
            }
            r.sort((function(t, e) {
                return t.f - e.f
            }
            )),
            r.push({
                s: -1,
                f: 25001
            });
            var u = r[0]
              , c = r[1]
              , h = 0
              , f = 1
              , d = 2;
            for (r[0] = {
                s: -1,
                f: u.f + c.f,
                l: u,
                r: c
            }; f != o - 1; )
                u = r[r[h].f < r[d].f ? h++ : d++],
                c = r[h != f && r[h].f < r[d].f ? h++ : d++],
                r[f++] = {
                    s: -1,
                    f: u.f + c.f,
                    l: u,
                    r: c
                };
            var p = s[0].s;
            for (n = 1; n < o; ++n)
                s[n].s > p && (p = s[n].s);
            var g = new a(p + 1)
              , m = M(r[f - 1], g, 0);
            if (m > e) {
                n = 0;
                var v = 0
                  , b = m - e
                  , y = 1 << b;
                for (s.sort((function(t, e) {
                    return g[e.s] - g[t.s] || t.f - e.f
                }
                )); n < o; ++n) {
                    var w = s[n].s;
                    if (!(g[w] > e))
                        break;
                    v += y - (1 << m - g[w]),
                    g[w] = e
                }
                for (v >>>= b; v > 0; ) {
                    var x = s[n].s;
                    g[x] < e ? v -= 1 << e - g[x]++ - 1 : ++n
                }
                for (; n >= 0 && v; --n) {
                    var _ = s[n].s;
                    g[_] == e && (--g[_],
                    ++v)
                }
                m = e
            }
            return [new i(g), m]
        }
          , M = function(t, e, r) {
            return -1 == t.s ? Math.max(M(t.l, e, r + 1), M(t.r, e, r + 1)) : e[t.s] = r
        }
          , B = function(t) {
            for (var e = t.length; e && !t[--e]; )
                ;
            for (var r = new a(++e), n = 0, i = t[0], o = 1, s = function(t) {
                r[n++] = t
            }, l = 1; l <= e; ++l)
                if (t[l] == i && l != e)
                    ++o;
                else {
                    if (!i && o > 2) {
                        for (; o > 138; o -= 138)
                            s(32754);
                        o > 2 && (s(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305),
                        o = 0)
                    } else if (o > 3) {
                        for (s(i),
                        --o; o > 6; o -= 6)
                            s(8304);
                        o > 2 && (s(o - 3 << 5 | 8208),
                        o = 0)
                    }
                    for (; o--; )
                        s(i);
                    o = 1,
                    i = t[l]
                }
            return [r.subarray(0, n), e]
        }
          , E = function(t, e) {
            for (var r = 0, n = 0; n < e.length; ++n)
                r += t[n] * e[n];
            return r
        }
          , R = function(t, e, r) {
            var n = r.length
              , i = F(e + 2);
            t[i] = 255 & n,
            t[i + 1] = n >>> 8,
            t[i + 2] = 255 ^ t[i],
            t[i + 3] = 255 ^ t[i + 1];
            for (var a = 0; a < n; ++a)
                t[i + a + 4] = r[a];
            return 8 * (i + 4 + n)
        }
          , q = function(t, e, r, n, i, o, c, h, f, d, p) {
            O(e, p++, r),
            ++i[256];
            for (var g = T(i, 15), m = g[0], v = g[1], b = T(o, 15), y = b[0], A = b[1], S = B(m), P = S[0], C = S[1], k = B(y), F = k[0], I = k[1], j = new a(19), M = 0; M < P.length; ++M)
                j[31 & P[M]]++;
            for (M = 0; M < F.length; ++M)
                j[31 & F[M]]++;
            for (var q = T(j, 7), z = q[0], U = q[1], W = 19; W > 4 && !z[u[W - 1]]; --W)
                ;
            var H, V, G, $, Y = d + 5 << 3, J = E(i, x) + E(o, _) + c, K = E(i, m) + E(o, y) + c + 14 + 3 * W + E(j, z) + (2 * j[16] + 3 * j[17] + 7 * j[18]);
            if (Y <= J && Y <= K)
                return R(e, p, t.subarray(f, f + d));
            if (O(e, p, 1 + (K < J)),
            p += 2,
            K < J) {
                H = w(m, v, 0),
                V = m,
                G = w(y, A, 0),
                $ = y;
                var X = w(z, U, 0);
                O(e, p, C - 257),
                O(e, p + 5, I - 1),
                O(e, p + 10, W - 4),
                p += 14;
                for (M = 0; M < W; ++M)
                    O(e, p + 3 * M, z[u[M]]);
                p += 3 * W;
                for (var Z = [P, F], Q = 0; Q < 2; ++Q) {
                    var tt = Z[Q];
                    for (M = 0; M < tt.length; ++M) {
                        var et = 31 & tt[M];
                        O(e, p, X[et]),
                        p += z[et],
                        et > 15 && (O(e, p, tt[M] >>> 5 & 127),
                        p += tt[M] >>> 12)
                    }
                }
            } else
                H = N,
                V = x,
                G = L,
                $ = _;
            for (M = 0; M < h; ++M)
                if (n[M] > 255) {
                    et = n[M] >>> 18 & 31;
                    D(e, p, H[et + 257]),
                    p += V[et + 257],
                    et > 7 && (O(e, p, n[M] >>> 23 & 31),
                    p += s[et]);
                    var rt = 31 & n[M];
                    D(e, p, G[rt]),
                    p += $[rt],
                    rt > 3 && (D(e, p, n[M] >>> 5 & 8191),
                    p += l[rt])
                } else
                    D(e, p, H[n[M]]),
                    p += V[n[M]];
            return D(e, p, H[256]),
            p + V[256]
        }
          , z = new o([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632])
          , U = new i(0)
          , W = function(t, e, r, n, u, c) {
            var h = t.length
              , f = new i(n + h + 5 * (1 + Math.floor(h / 7e3)) + u)
              , p = f.subarray(n, f.length - u)
              , g = 0;
            if (!e || h < 8)
                for (var v = 0; v <= h; v += 65535) {
                    var b = v + 65535;
                    b < h ? g = R(p, g, t.subarray(v, b)) : (p[v] = c,
                    g = R(p, g, t.subarray(v, h)))
                }
            else {
                for (var y = z[e - 1], w = y >>> 13, x = 8191 & y, _ = (1 << r) - 1, N = new a(32768), A = new a(_ + 1), L = Math.ceil(r / 3), S = 2 * L, P = function(e) {
                    return (t[e] ^ t[e + 1] << L ^ t[e + 2] << S) & _
                }, C = new o(25e3), k = new a(288), j = new a(32), O = 0, D = 0, T = (v = 0,
                0), M = 0, B = 0; v < h; ++v) {
                    var E = P(v)
                      , W = 32767 & v
                      , H = A[E];
                    if (N[W] = H,
                    A[E] = W,
                    M <= v) {
                        var V = h - v;
                        if ((O > 7e3 || T > 24576) && V > 423) {
                            g = q(t, p, 0, C, k, j, D, T, B, v - B, g),
                            T = O = D = 0,
                            B = v;
                            for (var G = 0; G < 286; ++G)
                                k[G] = 0;
                            for (G = 0; G < 30; ++G)
                                j[G] = 0
                        }
                        var $ = 2
                          , Y = 0
                          , J = x
                          , K = W - H & 32767;
                        if (V > 2 && E == P(v - K))
                            for (var X = Math.min(w, V) - 1, Z = Math.min(32767, v), Q = Math.min(258, V); K <= Z && --J && W != H; ) {
                                if (t[v + $] == t[v + $ - K]) {
                                    for (var tt = 0; tt < Q && t[v + tt] == t[v + tt - K]; ++tt)
                                        ;
                                    if (tt > $) {
                                        if ($ = tt,
                                        Y = K,
                                        tt > X)
                                            break;
                                        var et = Math.min(K, tt - 2)
                                          , rt = 0;
                                        for (G = 0; G < et; ++G) {
                                            var nt = v - K + G + 32768 & 32767
                                              , it = nt - N[nt] + 32768 & 32767;
                                            it > rt && (rt = it,
                                            H = nt)
                                        }
                                    }
                                }
                                K += (W = H) - (H = N[W]) + 32768 & 32767
                            }
                        if (Y) {
                            C[T++] = 268435456 | d[$] << 18 | m[Y];
                            var at = 31 & d[$]
                              , ot = 31 & m[Y];
                            D += s[at] + l[ot],
                            ++k[257 + at],
                            ++j[ot],
                            M = v + $,
                            ++O
                        } else
                            C[T++] = t[v],
                            ++k[t[v]]
                    }
                }
                g = q(t, p, c, C, k, j, D, T, B, v - B, g),
                c || (g = R(p, g, U))
            }
            return I(f, 0, n + F(g) + u)
        }
          , H = function() {
            var t = 1
              , e = 0;
            return {
                p: function(r) {
                    for (var n = t, i = e, a = r.length, o = 0; o != a; ) {
                        for (var s = Math.min(o + 5552, a); o < s; ++o)
                            i += n += r[o];
                        n %= 65521,
                        i %= 65521
                    }
                    t = n,
                    e = i
                },
                d: function() {
                    return (t >>> 8 << 16 | (255 & e) << 8 | e >>> 8) + 2 * ((255 & t) << 23)
                }
            }
        }
          , V = function(t, e, r, n, i) {
            return W(t, null == e.level ? 6 : e.level, null == e.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(t.length)))) : 12 + e.mem, r, n, !i)
        }
          , G = function(t, e, r) {
            for (; r; ++e)
                t[e] = r,
                r >>>= 8
        }
          , $ = function(t, e) {
            var r = e.level
              , n = 0 == r ? 0 : r < 6 ? 1 : 9 == r ? 3 : 2;
            t[0] = 120,
            t[1] = n << 6 | (n ? 32 - 2 * n : 1)
        }
          , Y = function(t) {
            if (8 != (15 & t[0]) || t[0] >>> 4 > 7 || (t[0] << 8 | t[1]) % 31)
                throw "invalid zlib data";
            if (32 & t[1])
                throw "invalid zlib data: preset dictionaries not supported"
        };
        function J(t, e) {
            void 0 === e && (e = {});
            var r = H();
            r.p(t);
            var n = V(t, e, 2, 4);
            return $(n, e),
            G(n, n.length - 4, r.d()),
            n
        }
        function K(t, e) {
            return j((Y(t),
            t.subarray(2, -4)), e)
        }
        var X = function() {
            return "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self ? self : this
        }();
        function Z() {
            X.console && "function" == typeof X.console.log && X.console.log.apply(X.console, arguments)
        }
        var Q = {
            log: Z,
            warn: function(t) {
                X.console && ("function" == typeof X.console.warn ? X.console.warn.apply(X.console, arguments) : Z.call(null, arguments))
            },
            error: function(t) {
                X.console && ("function" == typeof X.console.error ? X.console.error.apply(X.console, arguments) : Z(t))
            }
        };
        function tt(t, e, r) {
            var n = new XMLHttpRequest;
            n.open("GET", t),
            n.responseType = "blob",
            n.onload = function() {
                at(n.response, e, r)
            }
            ,
            n.onerror = function() {
                Q.error("could not download file")
            }
            ,
            n.send()
        }
        function et(t) {
            var e = new XMLHttpRequest;
            e.open("HEAD", t, !1);
            try {
                e.send()
            } catch (t) {}
            return e.status >= 200 && e.status <= 299
        }
        function rt(t) {
            try {
                t.dispatchEvent(new MouseEvent("click"))
            } catch (r) {
                var e = document.createEvent("MouseEvents");
                e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
                t.dispatchEvent(e)
            }
        }
        var nt, it, at = X.saveAs || ("object" !== ("undefined" == typeof window ? "undefined" : n(window)) || window !== X ? function() {}
        : "undefined" != typeof HTMLAnchorElement && "download"in HTMLAnchorElement.prototype ? function(t, e, r) {
            var n = X.URL || X.webkitURL
              , i = document.createElement("a");
            e = e || t.name || "download",
            i.download = e,
            i.rel = "noopener",
            "string" == typeof t ? (i.href = t,
            i.origin !== location.origin ? et(i.href) ? tt(t, e, r) : rt(i, i.target = "_blank") : rt(i)) : (i.href = n.createObjectURL(t),
            setTimeout((function() {
                n.revokeObjectURL(i.href)
            }
            ), 4e4),
            setTimeout((function() {
                rt(i)
            }
            ), 0))
        }
        : "msSaveOrOpenBlob"in navigator ? function(t, e, r) {
            if (e = e || t.name || "download",
            "string" == typeof t)
                if (et(t))
                    tt(t, e, r);
                else {
                    var i = document.createElement("a");
                    i.href = t,
                    i.target = "_blank",
                    setTimeout((function() {
                        rt(i)
                    }
                    ))
                }
            else
                navigator.msSaveOrOpenBlob(function(t, e) {
                    return void 0 === e ? e = {
                        autoBom: !1
                    } : "object" !== n(e) && (Q.warn("Deprecated: Expected third argument to be a object"),
                    e = {
                        autoBom: !e
                    }),
                    e.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t],{
                        type: t.type
                    }) : t
                }(t, r), e)
        }
        : function(t, e, r, i) {
            if ((i = i || open("", "_blank")) && (i.document.title = i.document.body.innerText = "downloading..."),
            "string" == typeof t)
                return tt(t, e, r);
            var a = "application/octet-stream" === t.type
              , o = /constructor/i.test(X.HTMLElement) || X.safari
              , s = /CriOS\/[\d]+/.test(navigator.userAgent);
            if ((s || a && o) && "object" === ("undefined" == typeof FileReader ? "undefined" : n(FileReader))) {
                var l = new FileReader;
                l.onloadend = function() {
                    var t = l.result;
                    t = s ? t : t.replace(/^data:[^;]*;/, "data:attachment/file;"),
                    i ? i.location.href = t : location = t,
                    i = null
                }
                ,
                l.readAsDataURL(t)
            } else {
                var u = X.URL || X.webkitURL
                  , c = u.createObjectURL(t);
                i ? i.location = c : location.href = c,
                i = null,
                setTimeout((function() {
                    u.revokeObjectURL(c)
                }
                ), 4e4)
            }
        }
        );
        function ot(t) {
            var e;
            t = t || "",
            this.ok = !1,
            "#" == t.charAt(0) && (t = t.substr(1, 6)),
            t = {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "00ffff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000000",
                blanchedalmond: "ffebcd",
                blue: "0000ff",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "00ffff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgreen: "006400",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dodgerblue: "1e90ff",
                feldspar: "d19275",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "ff00ff",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                green: "008000",
                greenyellow: "adff2f",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgrey: "d3d3d3",
                lightgreen: "90ee90",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslateblue: "8470ff",
                lightslategray: "778899",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "00ff00",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "ff00ff",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370d8",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "d87093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                red: "ff0000",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                violetred: "d02090",
                wheat: "f5deb3",
                white: "ffffff",
                whitesmoke: "f5f5f5",
                yellow: "ffff00",
                yellowgreen: "9acd32"
            }[t = (t = t.replace(/ /g, "")).toLowerCase()] || t;
            for (var r = [{
                re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
                process: function(t) {
                    return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])]
                }
            }, {
                re: /^(\w{2})(\w{2})(\w{2})$/,
                example: ["#00ff00", "336699"],
                process: function(t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                }
            }, {
                re: /^(\w{1})(\w{1})(\w{1})$/,
                example: ["#fb0", "f0f"],
                process: function(t) {
                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                }
            }], n = 0; n < r.length; n++) {
                var i = r[n].re
                  , a = r[n].process
                  , o = i.exec(t);
                o && (e = a(o),
                this.r = e[0],
                this.g = e[1],
                this.b = e[2],
                this.ok = !0)
            }
            this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r,
            this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g,
            this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b,
            this.toRGB = function() {
                return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
            }
            ,
            this.toHex = function() {
                var t = this.r.toString(16)
                  , e = this.g.toString(16)
                  , r = this.b.toString(16);
                return 1 == t.length && (t = "0" + t),
                1 == e.length && (e = "0" + e),
                1 == r.length && (r = "0" + r),
                "#" + t + e + r
            }
        }
        function st(t, e) {
            var r = t[0]
              , n = t[1]
              , i = t[2]
              , a = t[3];
            r = ut(r, n, i, a, e[0], 7, -680876936),
            a = ut(a, r, n, i, e[1], 12, -389564586),
            i = ut(i, a, r, n, e[2], 17, 606105819),
            n = ut(n, i, a, r, e[3], 22, -1044525330),
            r = ut(r, n, i, a, e[4], 7, -176418897),
            a = ut(a, r, n, i, e[5], 12, 1200080426),
            i = ut(i, a, r, n, e[6], 17, -1473231341),
            n = ut(n, i, a, r, e[7], 22, -45705983),
            r = ut(r, n, i, a, e[8], 7, 1770035416),
            a = ut(a, r, n, i, e[9], 12, -1958414417),
            i = ut(i, a, r, n, e[10], 17, -42063),
            n = ut(n, i, a, r, e[11], 22, -1990404162),
            r = ut(r, n, i, a, e[12], 7, 1804603682),
            a = ut(a, r, n, i, e[13], 12, -40341101),
            i = ut(i, a, r, n, e[14], 17, -1502002290),
            r = ct(r, n = ut(n, i, a, r, e[15], 22, 1236535329), i, a, e[1], 5, -165796510),
            a = ct(a, r, n, i, e[6], 9, -1069501632),
            i = ct(i, a, r, n, e[11], 14, 643717713),
            n = ct(n, i, a, r, e[0], 20, -373897302),
            r = ct(r, n, i, a, e[5], 5, -701558691),
            a = ct(a, r, n, i, e[10], 9, 38016083),
            i = ct(i, a, r, n, e[15], 14, -660478335),
            n = ct(n, i, a, r, e[4], 20, -405537848),
            r = ct(r, n, i, a, e[9], 5, 568446438),
            a = ct(a, r, n, i, e[14], 9, -1019803690),
            i = ct(i, a, r, n, e[3], 14, -187363961),
            n = ct(n, i, a, r, e[8], 20, 1163531501),
            r = ct(r, n, i, a, e[13], 5, -1444681467),
            a = ct(a, r, n, i, e[2], 9, -51403784),
            i = ct(i, a, r, n, e[7], 14, 1735328473),
            r = ht(r, n = ct(n, i, a, r, e[12], 20, -1926607734), i, a, e[5], 4, -378558),
            a = ht(a, r, n, i, e[8], 11, -2022574463),
            i = ht(i, a, r, n, e[11], 16, 1839030562),
            n = ht(n, i, a, r, e[14], 23, -35309556),
            r = ht(r, n, i, a, e[1], 4, -1530992060),
            a = ht(a, r, n, i, e[4], 11, 1272893353),
            i = ht(i, a, r, n, e[7], 16, -155497632),
            n = ht(n, i, a, r, e[10], 23, -1094730640),
            r = ht(r, n, i, a, e[13], 4, 681279174),
            a = ht(a, r, n, i, e[0], 11, -358537222),
            i = ht(i, a, r, n, e[3], 16, -722521979),
            n = ht(n, i, a, r, e[6], 23, 76029189),
            r = ht(r, n, i, a, e[9], 4, -640364487),
            a = ht(a, r, n, i, e[12], 11, -421815835),
            i = ht(i, a, r, n, e[15], 16, 530742520),
            r = ft(r, n = ht(n, i, a, r, e[2], 23, -995338651), i, a, e[0], 6, -198630844),
            a = ft(a, r, n, i, e[7], 10, 1126891415),
            i = ft(i, a, r, n, e[14], 15, -1416354905),
            n = ft(n, i, a, r, e[5], 21, -57434055),
            r = ft(r, n, i, a, e[12], 6, 1700485571),
            a = ft(a, r, n, i, e[3], 10, -1894986606),
            i = ft(i, a, r, n, e[10], 15, -1051523),
            n = ft(n, i, a, r, e[1], 21, -2054922799),
            r = ft(r, n, i, a, e[8], 6, 1873313359),
            a = ft(a, r, n, i, e[15], 10, -30611744),
            i = ft(i, a, r, n, e[6], 15, -1560198380),
            n = ft(n, i, a, r, e[13], 21, 1309151649),
            r = ft(r, n, i, a, e[4], 6, -145523070),
            a = ft(a, r, n, i, e[11], 10, -1120210379),
            i = ft(i, a, r, n, e[2], 15, 718787259),
            n = ft(n, i, a, r, e[9], 21, -343485551),
            t[0] = wt(r, t[0]),
            t[1] = wt(n, t[1]),
            t[2] = wt(i, t[2]),
            t[3] = wt(a, t[3])
        }
        function lt(t, e, r, n, i, a) {
            return e = wt(wt(e, t), wt(n, a)),
            wt(e << i | e >>> 32 - i, r)
        }
        function ut(t, e, r, n, i, a, o) {
            return lt(e & r | ~e & n, t, e, i, a, o)
        }
        function ct(t, e, r, n, i, a, o) {
            return lt(e & n | r & ~n, t, e, i, a, o)
        }
        function ht(t, e, r, n, i, a, o) {
            return lt(e ^ r ^ n, t, e, i, a, o)
        }
        function ft(t, e, r, n, i, a, o) {
            return lt(r ^ (e | ~n), t, e, i, a, o)
        }
        function dt(t) {
            var e, r = t.length, n = [1732584193, -271733879, -1732584194, 271733878];
            for (e = 64; e <= t.length; e += 64)
                st(n, pt(t.substring(e - 64, e)));
            t = t.substring(e - 64);
            var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (e = 0; e < t.length; e++)
                i[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3);
            if (i[e >> 2] |= 128 << (e % 4 << 3),
            e > 55)
                for (st(n, i),
                e = 0; e < 16; e++)
                    i[e] = 0;
            return i[14] = 8 * r,
            st(n, i),
            n
        }
        function pt(t) {
            var e, r = [];
            for (e = 0; e < 64; e += 4)
                r[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
            return r
        }
        nt = X.atob.bind(X),
        it = X.btoa.bind(X);
        var gt = "0123456789abcdef".split("");
        function mt(t) {
            for (var e = "", r = 0; r < 4; r++)
                e += gt[t >> 8 * r + 4 & 15] + gt[t >> 8 * r & 15];
            return e
        }
        function vt(t) {
            return String.fromCharCode((255 & t) >> 0, (65280 & t) >> 8, (16711680 & t) >> 16, (4278190080 & t) >> 24)
        }
        function bt(t) {
            return dt(t).map(vt).join("")
        }
        var yt = "5d41402abc4b2a76b9719d911017c592" != function(t) {
            for (var e = 0; e < t.length; e++)
                t[e] = mt(t[e]);
            return t.join("")
        }(dt("hello"));
        function wt(t, e) {
            if (yt) {
                var r = (65535 & t) + (65535 & e);
                return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r
            }
            return t + e & 4294967295
        }
        function xt(t, e) {
            var r, n, i, a;
            if (t !== r) {
                for (var o = (i = t,
                a = 1 + (256 / t.length >> 0),
                new Array(a + 1).join(i)), s = [], l = 0; l < 256; l++)
                    s[l] = l;
                var u = 0;
                for (l = 0; l < 256; l++) {
                    var c = s[l];
                    u = (u + c + o.charCodeAt(l)) % 256,
                    s[l] = s[u],
                    s[u] = c
                }
                r = t,
                n = s
            } else
                s = n;
            var h = e.length
              , f = 0
              , d = 0
              , p = "";
            for (l = 0; l < h; l++)
                d = (d + (c = s[f = (f + 1) % 256])) % 256,
                s[f] = s[d],
                s[d] = c,
                o = s[(s[f] + s[d]) % 256],
                p += String.fromCharCode(e.charCodeAt(l) ^ o);
            return p
        }
        var _t = {
            print: 4,
            modify: 8,
            copy: 16,
            "annot-forms": 32
        };
        function Nt(t, e, r, n) {
            this.v = 1,
            this.r = 2;
            var i = 192;
            t.forEach((function(t) {
                if (void 0 !== _t.perm)
                    throw new Error("Invalid permission: " + t);
                i += _t[t]
            }
            )),
            this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
            var a = (e + this.padding).substr(0, 32)
              , o = (r + this.padding).substr(0, 32);
            this.O = this.processOwnerPassword(a, o),
            this.P = -(1 + (255 ^ i)),
            this.encryptionKey = bt(a + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(n)).substr(0, 5),
            this.U = xt(this.encryptionKey, this.padding)
        }
        function At(t) {
            if (/[^\u0000-\u00ff]/.test(t))
                throw new Error("Invalid PDF Name Object: " + t + ", Only accept ASCII characters.");
            for (var e = "", r = t.length, n = 0; n < r; n++) {
                var i = t.charCodeAt(n);
                e += i < 33 || 35 === i || 37 === i || 40 === i || 41 === i || 47 === i || 60 === i || 62 === i || 91 === i || 93 === i || 123 === i || 125 === i || i > 126 ? "#" + ("0" + i.toString(16)).slice(-2) : t[n]
            }
            return e
        }
        function Lt(t) {
            if ("object" !== n(t))
                throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
            var e = {};
            this.subscribe = function(t, r, n) {
                if (n = n || !1,
                "string" != typeof t || "function" != typeof r || "boolean" != typeof n)
                    throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
                e.hasOwnProperty(t) || (e[t] = {});
                var i = Math.random().toString(35);
                return e[t][i] = [r, !!n],
                i
            }
            ,
            this.unsubscribe = function(t) {
                for (var r in e)
                    if (e[r][t])
                        return delete e[r][t],
                        0 === Object.keys(e[r]).length && delete e[r],
                        !0;
                return !1
            }
            ,
            this.publish = function(r) {
                if (e.hasOwnProperty(r)) {
                    var n = Array.prototype.slice.call(arguments, 1)
                      , i = [];
                    for (var a in e[r]) {
                        var o = e[r][a];
                        try {
                            o[0].apply(t, n)
                        } catch (r) {
                            X.console && Q.error("jsPDF PubSub Error", r.message, r)
                        }
                        o[1] && i.push(a)
                    }
                    i.length && i.forEach(this.unsubscribe)
                }
            }
            ,
            this.getTopics = function() {
                return e
            }
        }
        function St(t) {
            if (!(this instanceof St))
                return new St(t);
            var e = "opacity,stroke-opacity".split(",");
            for (var r in t)
                t.hasOwnProperty(r) && e.indexOf(r) >= 0 && (this[r] = t[r]);
            this.id = "",
            this.objectNumber = -1
        }
        function Pt(t, e) {
            this.gState = t,
            this.matrix = e,
            this.id = "",
            this.objectNumber = -1
        }
        function Ct(t, e, r, n, i) {
            if (!(this instanceof Ct))
                return new Ct(t,e,r,n,i);
            this.type = "axial" === t ? 2 : 3,
            this.coords = e,
            this.colors = r,
            Pt.call(this, n, i)
        }
        function kt(t, e, r, n, i) {
            if (!(this instanceof kt))
                return new kt(t,e,r,n,i);
            this.boundingBox = t,
            this.xStep = e,
            this.yStep = r,
            this.stream = "",
            this.cloneIndex = 0,
            Pt.call(this, n, i)
        }
        function Ft(t) {
            var e, r = "string" == typeof arguments[0] ? arguments[0] : "p", i = arguments[1], a = arguments[2], o = arguments[3], s = [], l = 1, u = 16, c = "S", h = null;
            "object" === n(t = t || {}) && (r = t.orientation,
            i = t.unit || i,
            a = t.format || a,
            o = t.compress || t.compressPdf || o,
            null !== (h = t.encryption || null) && (h.userPassword = h.userPassword || "",
            h.ownerPassword = h.ownerPassword || "",
            h.userPermissions = h.userPermissions || []),
            l = "number" == typeof t.userUnit ? Math.abs(t.userUnit) : 1,
            void 0 !== t.precision && (e = t.precision),
            void 0 !== t.floatPrecision && (u = t.floatPrecision),
            c = t.defaultPathOperation || "S"),
            s = t.filters || (!0 === o ? ["FlateEncode"] : s),
            i = i || "mm",
            r = ("" + (r || "P")).toLowerCase();
            var f = t.putOnlyUsedFonts || !1
              , d = {}
              , p = {
                internal: {},
                __private__: {}
            };
            p.__private__.PubSub = Lt;
            var g = "1.3"
              , m = p.__private__.getPdfVersion = function() {
                return g
            }
            ;
            p.__private__.setPdfVersion = function(t) {
                g = t
            }
            ;
            var v = {
                a0: [2383.94, 3370.39],
                a1: [1683.78, 2383.94],
                a2: [1190.55, 1683.78],
                a3: [841.89, 1190.55],
                a4: [595.28, 841.89],
                a5: [419.53, 595.28],
                a6: [297.64, 419.53],
                a7: [209.76, 297.64],
                a8: [147.4, 209.76],
                a9: [104.88, 147.4],
                a10: [73.7, 104.88],
                b0: [2834.65, 4008.19],
                b1: [2004.09, 2834.65],
                b2: [1417.32, 2004.09],
                b3: [1000.63, 1417.32],
                b4: [708.66, 1000.63],
                b5: [498.9, 708.66],
                b6: [354.33, 498.9],
                b7: [249.45, 354.33],
                b8: [175.75, 249.45],
                b9: [124.72, 175.75],
                b10: [87.87, 124.72],
                c0: [2599.37, 3676.54],
                c1: [1836.85, 2599.37],
                c2: [1298.27, 1836.85],
                c3: [918.43, 1298.27],
                c4: [649.13, 918.43],
                c5: [459.21, 649.13],
                c6: [323.15, 459.21],
                c7: [229.61, 323.15],
                c8: [161.57, 229.61],
                c9: [113.39, 161.57],
                c10: [79.37, 113.39],
                dl: [311.81, 623.62],
                letter: [612, 792],
                "government-letter": [576, 756],
                legal: [612, 1008],
                "junior-legal": [576, 360],
                ledger: [1224, 792],
                tabloid: [792, 1224],
                "credit-card": [153, 243]
            };
            p.__private__.getPageFormats = function() {
                return v
            }
            ;
            var b = p.__private__.getPageFormat = function(t) {
                return v[t]
            }
            ;
            a = a || "a4";
            var y = {
                COMPAT: "compat",
                ADVANCED: "advanced"
            }
              , w = y.COMPAT;
            function x() {
                this.saveGraphicsState(),
                et(new Vt(yt,0,0,-yt,0,Rr() * yt).toString() + " cm"),
                this.setFontSize(this.getFontSize() / yt),
                c = "n",
                w = y.ADVANCED
            }
            function _() {
                this.restoreGraphicsState(),
                c = "S",
                w = y.COMPAT
            }
            var N = p.__private__.combineFontStyleAndFontWeight = function(t, e) {
                if ("bold" == t && "normal" == e || "bold" == t && 400 == e || "normal" == t && "italic" == e || "bold" == t && "italic" == e)
                    throw new Error("Invalid Combination of fontweight and fontstyle");
                return e && (t = 400 == e || "normal" === e ? "italic" === t ? "italic" : "normal" : 700 != e && "bold" !== e || "normal" !== t ? (700 == e ? "bold" : e) + "" + t : "bold"),
                t
            }
            ;
            p.advancedAPI = function(t) {
                var e = w === y.COMPAT;
                return e && x.call(this),
                "function" != typeof t || (t(this),
                e && _.call(this)),
                this
            }
            ,
            p.compatAPI = function(t) {
                var e = w === y.ADVANCED;
                return e && _.call(this),
                "function" != typeof t || (t(this),
                e && x.call(this)),
                this
            }
            ,
            p.isAdvancedAPI = function() {
                return w === y.ADVANCED
            }
            ;
            var A, L = function(t) {
                if (w !== y.ADVANCED)
                    throw new Error(t + " is only available in 'advanced' API mode. You need to call advancedAPI() first.")
            }, S = p.roundToPrecision = p.__private__.roundToPrecision = function(t, r) {
                var n = e || r;
                if (isNaN(t) || isNaN(n))
                    throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
                return t.toFixed(n).replace(/0+$/, "")
            }
            ;
            A = p.hpf = p.__private__.hpf = "number" == typeof u ? function(t) {
                if (isNaN(t))
                    throw new Error("Invalid argument passed to jsPDF.hpf");
                return S(t, u)
            }
            : "smart" === u ? function(t) {
                if (isNaN(t))
                    throw new Error("Invalid argument passed to jsPDF.hpf");
                return S(t, t > -1 && t < 1 ? 16 : 5)
            }
            : function(t) {
                if (isNaN(t))
                    throw new Error("Invalid argument passed to jsPDF.hpf");
                return S(t, 16)
            }
            ;
            var P = p.f2 = p.__private__.f2 = function(t) {
                if (isNaN(t))
                    throw new Error("Invalid argument passed to jsPDF.f2");
                return S(t, 2)
            }
              , C = p.__private__.f3 = function(t) {
                if (isNaN(t))
                    throw new Error("Invalid argument passed to jsPDF.f3");
                return S(t, 3)
            }
              , k = p.scale = p.__private__.scale = function(t) {
                if (isNaN(t))
                    throw new Error("Invalid argument passed to jsPDF.scale");
                return w === y.COMPAT ? t * yt : w === y.ADVANCED ? t : void 0
            }
              , F = function(t) {
                return w === y.COMPAT ? Rr() - t : w === y.ADVANCED ? t : void 0
            }
              , I = function(t) {
                return k(F(t))
            };
            p.__private__.setPrecision = p.setPrecision = function(t) {
                "number" == typeof parseInt(t, 10) && (e = parseInt(t, 10))
            }
            ;
            var j, O = "00000000000000000000000000000000", D = p.__private__.getFileId = function() {
                return O
            }
            , T = p.__private__.setFileId = function(t) {
                return O = void 0 !== t && /^[a-fA-F0-9]{32}$/.test(t) ? t.toUpperCase() : O.split("").map((function() {
                    return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()))
                }
                )).join(""),
                null !== h && ($e = new Nt(h.userPermissions,h.userPassword,h.ownerPassword,O)),
                O
            }
            ;
            p.setFileId = function(t) {
                return T(t),
                this
            }
            ,
            p.getFileId = function() {
                return D()
            }
            ;
            var M = p.__private__.convertDateToPDFDate = function(t) {
                var e = t.getTimezoneOffset()
                  , r = e < 0 ? "+" : "-"
                  , n = Math.floor(Math.abs(e / 60))
                  , i = Math.abs(e % 60)
                  , a = [r, z(n), "'", z(i), "'"].join("");
                return ["D:", t.getFullYear(), z(t.getMonth() + 1), z(t.getDate()), z(t.getHours()), z(t.getMinutes()), z(t.getSeconds()), a].join("")
            }
              , B = p.__private__.convertPDFDateToDate = function(t) {
                var e = parseInt(t.substr(2, 4), 10)
                  , r = parseInt(t.substr(6, 2), 10) - 1
                  , n = parseInt(t.substr(8, 2), 10)
                  , i = parseInt(t.substr(10, 2), 10)
                  , a = parseInt(t.substr(12, 2), 10)
                  , o = parseInt(t.substr(14, 2), 10);
                return new Date(e,r,n,i,a,o,0)
            }
              , E = p.__private__.setCreationDate = function(t) {
                var e;
                if (void 0 === t && (t = new Date),
                t instanceof Date)
                    e = M(t);
                else {
                    if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(t))
                        throw new Error("Invalid argument passed to jsPDF.setCreationDate");
                    e = t
                }
                return j = e
            }
              , R = p.__private__.getCreationDate = function(t) {
                var e = j;
                return "jsDate" === t && (e = B(j)),
                e
            }
            ;
            p.setCreationDate = function(t) {
                return E(t),
                this
            }
            ,
            p.getCreationDate = function(t) {
                return R(t)
            }
            ;
            var q, z = p.__private__.padd2 = function(t) {
                return ("0" + parseInt(t)).slice(-2)
            }
            , U = p.__private__.padd2Hex = function(t) {
                return ("00" + (t = t.toString())).substr(t.length)
            }
            , W = 0, H = [], V = [], G = 0, $ = [], Y = [], J = !1, K = V, Z = function() {
                W = 0,
                G = 0,
                V = [],
                H = [],
                $ = [],
                Qt = Kt(),
                te = Kt()
            };
            p.__private__.setCustomOutputDestination = function(t) {
                J = !0,
                K = t
            }
            ;
            var tt = function(t) {
                J || (K = t)
            };
            p.__private__.resetCustomOutputDestination = function() {
                J = !1,
                K = V
            }
            ;
            var et = p.__private__.out = function(t) {
                return t = t.toString(),
                G += t.length + 1,
                K.push(t),
                K
            }
              , rt = p.__private__.write = function(t) {
                return et(1 === arguments.length ? t.toString() : Array.prototype.join.call(arguments, " "))
            }
              , nt = p.__private__.getArrayBuffer = function(t) {
                for (var e = t.length, r = new ArrayBuffer(e), n = new Uint8Array(r); e--; )
                    n[e] = t.charCodeAt(e);
                return r
            }
              , st = [["Helvetica", "helvetica", "normal", "WinAnsiEncoding"], ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"], ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"], ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"], ["Courier", "courier", "normal", "WinAnsiEncoding"], ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"], ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"], ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"], ["Times-Roman", "times", "normal", "WinAnsiEncoding"], ["Times-Bold", "times", "bold", "WinAnsiEncoding"], ["Times-Italic", "times", "italic", "WinAnsiEncoding"], ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", "normal", null], ["Symbol", "symbol", "normal", null]];
            p.__private__.getStandardFonts = function() {
                return st
            }
            ;
            var lt = t.fontSize || 16;
            p.__private__.setFontSize = p.setFontSize = function(t) {
                return lt = w === y.ADVANCED ? t / yt : t,
                this
            }
            ;
            var ut, ct = p.__private__.getFontSize = p.getFontSize = function() {
                return w === y.COMPAT ? lt : lt * yt
            }
            , ht = t.R2L || !1;
            p.__private__.setR2L = p.setR2L = function(t) {
                return ht = t,
                this
            }
            ,
            p.__private__.getR2L = p.getR2L = function() {
                return ht
            }
            ;
            var ft, dt = p.__private__.setZoomMode = function(t) {
                if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(t))
                    ut = t;
                else if (isNaN(t)) {
                    if (-1 === [void 0, null, "fullwidth", "fullheight", "fullpage", "original"].indexOf(t))
                        throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + t + '" is not recognized.');
                    ut = t
                } else
                    ut = parseInt(t, 10)
            }
            ;
            p.__private__.getZoomMode = function() {
                return ut
            }
            ;
            var pt, gt = p.__private__.setPageMode = function(t) {
                if (-1 == [void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(t))
                    throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + t + '" is not recognized.');
                ft = t
            }
            ;
            p.__private__.getPageMode = function() {
                return ft
            }
            ;
            var mt = p.__private__.setLayoutMode = function(t) {
                if (-1 == [void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(t))
                    throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + t + '" is not recognized.');
                pt = t
            }
            ;
            p.__private__.getLayoutMode = function() {
                return pt
            }
            ,
            p.__private__.setDisplayMode = p.setDisplayMode = function(t, e, r) {
                return dt(t),
                mt(e),
                gt(r),
                this
            }
            ;
            var vt = {
                title: "",
                subject: "",
                author: "",
                keywords: "",
                creator: ""
            };
            p.__private__.getDocumentProperty = function(t) {
                if (-1 === Object.keys(vt).indexOf(t))
                    throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
                return vt[t]
            }
            ,
            p.__private__.getDocumentProperties = function() {
                return vt
            }
            ,
            p.__private__.setDocumentProperties = p.setProperties = p.setDocumentProperties = function(t) {
                for (var e in vt)
                    vt.hasOwnProperty(e) && t[e] && (vt[e] = t[e]);
                return this
            }
            ,
            p.__private__.setDocumentProperty = function(t, e) {
                if (-1 === Object.keys(vt).indexOf(t))
                    throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
                return vt[t] = e
            }
            ;
            var bt, yt, wt, xt, _t, Pt = {}, It = {}, jt = [], Ot = {}, Dt = {}, Tt = {}, Mt = {}, Bt = null, Et = 0, Rt = [], qt = new Lt(p), zt = t.hotfixes || [], Ut = {}, Wt = {}, Ht = [], Vt = function t(e, r, n, i, a, o) {
                if (!(this instanceof t))
                    return new t(e,r,n,i,a,o);
                isNaN(e) && (e = 1),
                isNaN(r) && (r = 0),
                isNaN(n) && (n = 0),
                isNaN(i) && (i = 1),
                isNaN(a) && (a = 0),
                isNaN(o) && (o = 0),
                this._matrix = [e, r, n, i, a, o]
            };
            Object.defineProperty(Vt.prototype, "sx", {
                get: function() {
                    return this._matrix[0]
                },
                set: function(t) {
                    this._matrix[0] = t
                }
            }),
            Object.defineProperty(Vt.prototype, "shy", {
                get: function() {
                    return this._matrix[1]
                },
                set: function(t) {
                    this._matrix[1] = t
                }
            }),
            Object.defineProperty(Vt.prototype, "shx", {
                get: function() {
                    return this._matrix[2]
                },
                set: function(t) {
                    this._matrix[2] = t
                }
            }),
            Object.defineProperty(Vt.prototype, "sy", {
                get: function() {
                    return this._matrix[3]
                },
                set: function(t) {
                    this._matrix[3] = t
                }
            }),
            Object.defineProperty(Vt.prototype, "tx", {
                get: function() {
                    return this._matrix[4]
                },
                set: function(t) {
                    this._matrix[4] = t
                }
            }),
            Object.defineProperty(Vt.prototype, "ty", {
                get: function() {
                    return this._matrix[5]
                },
                set: function(t) {
                    this._matrix[5] = t
                }
            }),
            Object.defineProperty(Vt.prototype, "a", {
                get: function() {
                    return this._matrix[0]
                },
                set: function(t) {
                    this._matrix[0] = t
                }
            }),
            Object.defineProperty(Vt.prototype, "b", {
                get: function() {
                    return this._matrix[1]
                },
                set: function(t) {
                    this._matrix[1] = t
                }
            }),
            Object.defineProperty(Vt.prototype, "c", {
                get: function() {
                    return this._matrix[2]
                },
                set: function(t) {
                    this._matrix[2] = t
                }
            }),
            Object.defineProperty(Vt.prototype, "d", {
                get: function() {
                    return this._matrix[3]
                },
                set: function(t) {
                    this._matrix[3] = t
                }
            }),
            Object.defineProperty(Vt.prototype, "e", {
                get: function() {
                    return this._matrix[4]
                },
                set: function(t) {
                    this._matrix[4] = t
                }
            }),
            Object.defineProperty(Vt.prototype, "f", {
                get: function() {
                    return this._matrix[5]
                },
                set: function(t) {
                    this._matrix[5] = t
                }
            }),
            Object.defineProperty(Vt.prototype, "rotation", {
                get: function() {
                    return Math.atan2(this.shx, this.sx)
                }
            }),
            Object.defineProperty(Vt.prototype, "scaleX", {
                get: function() {
                    return this.decompose().scale.sx
                }
            }),
            Object.defineProperty(Vt.prototype, "scaleY", {
                get: function() {
                    return this.decompose().scale.sy
                }
            }),
            Object.defineProperty(Vt.prototype, "isIdentity", {
                get: function() {
                    return 1 === this.sx && 0 === this.shy && 0 === this.shx && 1 === this.sy && 0 === this.tx && 0 === this.ty
                }
            }),
            Vt.prototype.join = function(t) {
                return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(A).join(t)
            }
            ,
            Vt.prototype.multiply = function(t) {
                var e = t.sx * this.sx + t.shy * this.shx
                  , r = t.sx * this.shy + t.shy * this.sy
                  , n = t.shx * this.sx + t.sy * this.shx
                  , i = t.shx * this.shy + t.sy * this.sy
                  , a = t.tx * this.sx + t.ty * this.shx + this.tx
                  , o = t.tx * this.shy + t.ty * this.sy + this.ty;
                return new Vt(e,r,n,i,a,o)
            }
            ,
            Vt.prototype.decompose = function() {
                var t = this.sx
                  , e = this.shy
                  , r = this.shx
                  , n = this.sy
                  , i = this.tx
                  , a = this.ty
                  , o = Math.sqrt(t * t + e * e)
                  , s = (t /= o) * r + (e /= o) * n;
                r -= t * s,
                n -= e * s;
                var l = Math.sqrt(r * r + n * n);
                return s /= l,
                t * (n /= l) < e * (r /= l) && (t = -t,
                e = -e,
                s = -s,
                o = -o),
                {
                    scale: new Vt(o,0,0,l,0,0),
                    translate: new Vt(1,0,0,1,i,a),
                    rotate: new Vt(t,e,-e,t,0,0),
                    skew: new Vt(1,0,s,1,0,0)
                }
            }
            ,
            Vt.prototype.toString = function(t) {
                return this.join(" ")
            }
            ,
            Vt.prototype.inversed = function() {
                var t = this.sx
                  , e = this.shy
                  , r = this.shx
                  , n = this.sy
                  , i = this.tx
                  , a = this.ty
                  , o = 1 / (t * n - e * r)
                  , s = n * o
                  , l = -e * o
                  , u = -r * o
                  , c = t * o;
                return new Vt(s,l,u,c,-s * i - u * a,-l * i - c * a)
            }
            ,
            Vt.prototype.applyToPoint = function(t) {
                var e = t.x * this.sx + t.y * this.shx + this.tx
                  , r = t.x * this.shy + t.y * this.sy + this.ty;
                return new Ir(e,r)
            }
            ,
            Vt.prototype.applyToRectangle = function(t) {
                var e = this.applyToPoint(t)
                  , r = this.applyToPoint(new Ir(t.x + t.w,t.y + t.h));
                return new jr(e.x,e.y,r.x - e.x,r.y - e.y)
            }
            ,
            Vt.prototype.clone = function() {
                var t = this.sx
                  , e = this.shy
                  , r = this.shx
                  , n = this.sy
                  , i = this.tx
                  , a = this.ty;
                return new Vt(t,e,r,n,i,a)
            }
            ,
            p.Matrix = Vt;
            var Gt = p.matrixMult = function(t, e) {
                return e.multiply(t)
            }
              , $t = new Vt(1,0,0,1,0,0);
            p.unitMatrix = p.identityMatrix = $t;
            var Yt = function(t, e) {
                if (!Dt[t]) {
                    var r = (e instanceof Ct ? "Sh" : "P") + (Object.keys(Ot).length + 1).toString(10);
                    e.id = r,
                    Dt[t] = r,
                    Ot[r] = e,
                    qt.publish("addPattern", e)
                }
            };
            p.ShadingPattern = Ct,
            p.TilingPattern = kt,
            p.addShadingPattern = function(t, e) {
                return L("addShadingPattern()"),
                Yt(t, e),
                this
            }
            ,
            p.beginTilingPattern = function(t) {
                L("beginTilingPattern()"),
                Dr(t.boundingBox[0], t.boundingBox[1], t.boundingBox[2] - t.boundingBox[0], t.boundingBox[3] - t.boundingBox[1], t.matrix)
            }
            ,
            p.endTilingPattern = function(t, e) {
                L("endTilingPattern()"),
                e.stream = Y[q].join("\n"),
                Yt(t, e),
                qt.publish("endTilingPattern", e),
                Ht.pop().restore()
            }
            ;
            var Jt = p.__private__.newObject = function() {
                var t = Kt();
                return Xt(t, !0),
                t
            }
              , Kt = p.__private__.newObjectDeferred = function() {
                return W++,
                H[W] = function() {
                    return G
                }
                ,
                W
            }
              , Xt = function(t, e) {
                return e = "boolean" == typeof e && e,
                H[t] = G,
                e && et(t + " 0 obj"),
                t
            }
              , Zt = p.__private__.newAdditionalObject = function() {
                var t = {
                    objId: Kt(),
                    content: ""
                };
                return $.push(t),
                t
            }
              , Qt = Kt()
              , te = Kt()
              , ee = p.__private__.decodeColorString = function(t) {
                var e = t.split(" ");
                if (2 !== e.length || "g" !== e[1] && "G" !== e[1])
                    5 !== e.length || "k" !== e[4] && "K" !== e[4] || (e = [(1 - e[0]) * (1 - e[3]), (1 - e[1]) * (1 - e[3]), (1 - e[2]) * (1 - e[3]), "r"]);
                else {
                    var r = parseFloat(e[0]);
                    e = [r, r, r, "r"]
                }
                for (var n = "#", i = 0; i < 3; i++)
                    n += ("0" + Math.floor(255 * parseFloat(e[i])).toString(16)).slice(-2);
                return n
            }
              , re = p.__private__.encodeColorString = function(t) {
                var e;
                "string" == typeof t && (t = {
                    ch1: t
                });
                var r = t.ch1
                  , i = t.ch2
                  , a = t.ch3
                  , o = t.ch4
                  , s = "draw" === t.pdfColorType ? ["G", "RG", "K"] : ["g", "rg", "k"];
                if ("string" == typeof r && "#" !== r.charAt(0)) {
                    var l = new ot(r);
                    if (l.ok)
                        r = l.toHex();
                    else if (!/^\d*\.?\d*$/.test(r))
                        throw new Error('Invalid color "' + r + '" passed to jsPDF.encodeColorString.')
                }
                if ("string" == typeof r && /^#[0-9A-Fa-f]{3}$/.test(r) && (r = "#" + r[1] + r[1] + r[2] + r[2] + r[3] + r[3]),
                "string" == typeof r && /^#[0-9A-Fa-f]{6}$/.test(r)) {
                    var u = parseInt(r.substr(1), 16);
                    r = u >> 16 & 255,
                    i = u >> 8 & 255,
                    a = 255 & u
                }
                if (void 0 === i || void 0 === o && r === i && i === a)
                    if ("string" == typeof r)
                        e = r + " " + s[0];
                    else if (2 === t.precision)
                        e = P(r / 255) + " " + s[0];
                    else
                        e = C(r / 255) + " " + s[0];
                else if (void 0 === o || "object" === n(o)) {
                    if (o && !isNaN(o.a) && 0 === o.a)
                        return ["1.", "1.", "1.", s[1]].join(" ");
                    if ("string" == typeof r)
                        e = [r, i, a, s[1]].join(" ");
                    else if (2 === t.precision)
                        e = [P(r / 255), P(i / 255), P(a / 255), s[1]].join(" ");
                    else
                        e = [C(r / 255), C(i / 255), C(a / 255), s[1]].join(" ")
                } else if ("string" == typeof r)
                    e = [r, i, a, o, s[2]].join(" ");
                else if (2 === t.precision)
                    e = [P(r), P(i), P(a), P(o), s[2]].join(" ");
                else
                    e = [C(r), C(i), C(a), C(o), s[2]].join(" ");
                return e
            }
              , ne = p.__private__.getFilters = function() {
                return s
            }
              , ie = p.__private__.putStream = function(t) {
                var e = (t = t || {}).data || ""
                  , r = t.filters || ne()
                  , n = t.alreadyAppliedFilters || []
                  , i = t.addLength1 || !1
                  , a = e.length
                  , o = t.objectId
                  , s = function(t) {
                    return t
                };
                if (null !== h && void 0 === o)
                    throw new Error("ObjectId must be passed to putStream for file encryption");
                null !== h && (s = $e.encryptor(o, 0));
                var l = {};
                !0 === r && (r = ["FlateEncode"]);
                var u = t.additionalKeyValues || []
                  , c = (l = void 0 !== Ft.API.processDataByFilters ? Ft.API.processDataByFilters(e, r) : {
                    data: e,
                    reverseChain: []
                }).reverseChain + (Array.isArray(n) ? n.join(" ") : n.toString());
                if (0 !== l.data.length && (u.push({
                    key: "Length",
                    value: l.data.length
                }),
                !0 === i && u.push({
                    key: "Length1",
                    value: a
                })),
                0 != c.length)
                    if (c.split("/").length - 1 == 1)
                        u.push({
                            key: "Filter",
                            value: c
                        });
                    else {
                        u.push({
                            key: "Filter",
                            value: "[" + c + "]"
                        });
                        for (var f = 0; f < u.length; f += 1)
                            if ("DecodeParms" === u[f].key) {
                                for (var d = [], p = 0; p < l.reverseChain.split("/").length - 1; p += 1)
                                    d.push("null");
                                d.push(u[f].value),
                                u[f].value = "[" + d.join(" ") + "]"
                            }
                    }
                et("<<");
                for (var g = 0; g < u.length; g++)
                    et("/" + u[g].key + " " + u[g].value);
                et(">>"),
                0 !== l.data.length && (et("stream"),
                et(s(l.data)),
                et("endstream"))
            }
              , ae = p.__private__.putPage = function(t) {
                var e = t.number
                  , r = t.data
                  , n = t.objId
                  , i = t.contentsObjId;
                Xt(n, !0),
                et("<</Type /Page"),
                et("/Parent " + t.rootDictionaryObjId + " 0 R"),
                et("/Resources " + t.resourceDictionaryObjId + " 0 R"),
                et("/MediaBox [" + parseFloat(A(t.mediaBox.bottomLeftX)) + " " + parseFloat(A(t.mediaBox.bottomLeftY)) + " " + A(t.mediaBox.topRightX) + " " + A(t.mediaBox.topRightY) + "]"),
                null !== t.cropBox && et("/CropBox [" + A(t.cropBox.bottomLeftX) + " " + A(t.cropBox.bottomLeftY) + " " + A(t.cropBox.topRightX) + " " + A(t.cropBox.topRightY) + "]"),
                null !== t.bleedBox && et("/BleedBox [" + A(t.bleedBox.bottomLeftX) + " " + A(t.bleedBox.bottomLeftY) + " " + A(t.bleedBox.topRightX) + " " + A(t.bleedBox.topRightY) + "]"),
                null !== t.trimBox && et("/TrimBox [" + A(t.trimBox.bottomLeftX) + " " + A(t.trimBox.bottomLeftY) + " " + A(t.trimBox.topRightX) + " " + A(t.trimBox.topRightY) + "]"),
                null !== t.artBox && et("/ArtBox [" + A(t.artBox.bottomLeftX) + " " + A(t.artBox.bottomLeftY) + " " + A(t.artBox.topRightX) + " " + A(t.artBox.topRightY) + "]"),
                "number" == typeof t.userUnit && 1 !== t.userUnit && et("/UserUnit " + t.userUnit),
                qt.publish("putPage", {
                    objId: n,
                    pageContext: Rt[e],
                    pageNumber: e,
                    page: r
                }),
                et("/Contents " + i + " 0 R"),
                et(">>"),
                et("endobj");
                var a = r.join("\n");
                return w === y.ADVANCED && (a += "\nQ"),
                Xt(i, !0),
                ie({
                    data: a,
                    filters: ne(),
                    objectId: i
                }),
                et("endobj"),
                n
            }
              , oe = p.__private__.putPages = function() {
                var t, e, r = [];
                for (t = 1; t <= Et; t++)
                    Rt[t].objId = Kt(),
                    Rt[t].contentsObjId = Kt();
                for (t = 1; t <= Et; t++)
                    r.push(ae({
                        number: t,
                        data: Y[t],
                        objId: Rt[t].objId,
                        contentsObjId: Rt[t].contentsObjId,
                        mediaBox: Rt[t].mediaBox,
                        cropBox: Rt[t].cropBox,
                        bleedBox: Rt[t].bleedBox,
                        trimBox: Rt[t].trimBox,
                        artBox: Rt[t].artBox,
                        userUnit: Rt[t].userUnit,
                        rootDictionaryObjId: Qt,
                        resourceDictionaryObjId: te
                    }));
                Xt(Qt, !0),
                et("<</Type /Pages");
                var n = "/Kids [";
                for (e = 0; e < Et; e++)
                    n += r[e] + " 0 R ";
                et(n + "]"),
                et("/Count " + Et),
                et(">>"),
                et("endobj"),
                qt.publish("postPutPages")
            }
              , se = function(t) {
                qt.publish("putFont", {
                    font: t,
                    out: et,
                    newObject: Jt,
                    putStream: ie
                }),
                !0 !== t.isAlreadyPutted && (t.objectNumber = Jt(),
                et("<<"),
                et("/Type /Font"),
                et("/BaseFont /" + At(t.postScriptName)),
                et("/Subtype /Type1"),
                "string" == typeof t.encoding && et("/Encoding /" + t.encoding),
                et("/FirstChar 32"),
                et("/LastChar 255"),
                et(">>"),
                et("endobj"))
            }
              , le = function() {
                for (var t in Pt)
                    Pt.hasOwnProperty(t) && (!1 === f || !0 === f && d.hasOwnProperty(t)) && se(Pt[t])
            }
              , ue = function(t) {
                t.objectNumber = Jt();
                var e = [];
                e.push({
                    key: "Type",
                    value: "/XObject"
                }),
                e.push({
                    key: "Subtype",
                    value: "/Form"
                }),
                e.push({
                    key: "BBox",
                    value: "[" + [A(t.x), A(t.y), A(t.x + t.width), A(t.y + t.height)].join(" ") + "]"
                }),
                e.push({
                    key: "Matrix",
                    value: "[" + t.matrix.toString() + "]"
                });
                var r = t.pages[1].join("\n");
                ie({
                    data: r,
                    additionalKeyValues: e,
                    objectId: t.objectNumber
                }),
                et("endobj")
            }
              , ce = function() {
                for (var t in Ut)
                    Ut.hasOwnProperty(t) && ue(Ut[t])
            }
              , he = function(t, e) {
                var r, n = [], i = 1 / (e - 1);
                for (r = 0; r < 1; r += i)
                    n.push(r);
                if (n.push(1),
                0 != t[0].offset) {
                    var a = {
                        offset: 0,
                        color: t[0].color
                    };
                    t.unshift(a)
                }
                if (1 != t[t.length - 1].offset) {
                    var o = {
                        offset: 1,
                        color: t[t.length - 1].color
                    };
                    t.push(o)
                }
                for (var s = "", l = 0, u = 0; u < n.length; u++) {
                    for (r = n[u]; r > t[l + 1].offset; )
                        l++;
                    var c = t[l].offset
                      , h = (r - c) / (t[l + 1].offset - c)
                      , f = t[l].color
                      , d = t[l + 1].color;
                    s += U(Math.round((1 - h) * f[0] + h * d[0]).toString(16)) + U(Math.round((1 - h) * f[1] + h * d[1]).toString(16)) + U(Math.round((1 - h) * f[2] + h * d[2]).toString(16))
                }
                return s.trim()
            }
              , fe = function(t, e) {
                e || (e = 21);
                var r = Jt()
                  , n = he(t.colors, e)
                  , i = [];
                i.push({
                    key: "FunctionType",
                    value: "0"
                }),
                i.push({
                    key: "Domain",
                    value: "[0.0 1.0]"
                }),
                i.push({
                    key: "Size",
                    value: "[" + e + "]"
                }),
                i.push({
                    key: "BitsPerSample",
                    value: "8"
                }),
                i.push({
                    key: "Range",
                    value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
                }),
                i.push({
                    key: "Decode",
                    value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
                }),
                ie({
                    data: n,
                    additionalKeyValues: i,
                    alreadyAppliedFilters: ["/ASCIIHexDecode"],
                    objectId: r
                }),
                et("endobj"),
                t.objectNumber = Jt(),
                et("<< /ShadingType " + t.type),
                et("/ColorSpace /DeviceRGB");
                var a = "/Coords [" + A(parseFloat(t.coords[0])) + " " + A(parseFloat(t.coords[1])) + " ";
                2 === t.type ? a += A(parseFloat(t.coords[2])) + " " + A(parseFloat(t.coords[3])) : a += A(parseFloat(t.coords[2])) + " " + A(parseFloat(t.coords[3])) + " " + A(parseFloat(t.coords[4])) + " " + A(parseFloat(t.coords[5])),
                et(a += "]"),
                t.matrix && et("/Matrix [" + t.matrix.toString() + "]"),
                et("/Function " + r + " 0 R"),
                et("/Extend [true true]"),
                et(">>"),
                et("endobj")
            }
              , de = function(t, e) {
                var r = Kt()
                  , n = Jt();
                e.push({
                    resourcesOid: r,
                    objectOid: n
                }),
                t.objectNumber = n;
                var i = [];
                i.push({
                    key: "Type",
                    value: "/Pattern"
                }),
                i.push({
                    key: "PatternType",
                    value: "1"
                }),
                i.push({
                    key: "PaintType",
                    value: "1"
                }),
                i.push({
                    key: "TilingType",
                    value: "1"
                }),
                i.push({
                    key: "BBox",
                    value: "[" + t.boundingBox.map(A).join(" ") + "]"
                }),
                i.push({
                    key: "XStep",
                    value: A(t.xStep)
                }),
                i.push({
                    key: "YStep",
                    value: A(t.yStep)
                }),
                i.push({
                    key: "Resources",
                    value: r + " 0 R"
                }),
                t.matrix && i.push({
                    key: "Matrix",
                    value: "[" + t.matrix.toString() + "]"
                }),
                ie({
                    data: t.stream,
                    additionalKeyValues: i,
                    objectId: t.objectNumber
                }),
                et("endobj")
            }
              , pe = function(t) {
                var e;
                for (e in Ot)
                    Ot.hasOwnProperty(e) && (Ot[e]instanceof Ct ? fe(Ot[e]) : Ot[e]instanceof kt && de(Ot[e], t))
            }
              , ge = function(t) {
                for (var e in t.objectNumber = Jt(),
                et("<<"),
                t)
                    switch (e) {
                    case "opacity":
                        et("/ca " + P(t[e]));
                        break;
                    case "stroke-opacity":
                        et("/CA " + P(t[e]))
                    }
                et(">>"),
                et("endobj")
            }
              , me = function() {
                var t;
                for (t in Tt)
                    Tt.hasOwnProperty(t) && ge(Tt[t])
            }
              , ve = function() {
                for (var t in et("/XObject <<"),
                Ut)
                    Ut.hasOwnProperty(t) && Ut[t].objectNumber >= 0 && et("/" + t + " " + Ut[t].objectNumber + " 0 R");
                qt.publish("putXobjectDict"),
                et(">>")
            }
              , be = function() {
                $e.oid = Jt(),
                et("<<"),
                et("/Filter /Standard"),
                et("/V " + $e.v),
                et("/R " + $e.r),
                et("/U <" + $e.toHexString($e.U) + ">"),
                et("/O <" + $e.toHexString($e.O) + ">"),
                et("/P " + $e.P),
                et(">>"),
                et("endobj")
            }
              , ye = function() {
                for (var t in et("/Font <<"),
                Pt)
                    Pt.hasOwnProperty(t) && (!1 === f || !0 === f && d.hasOwnProperty(t)) && et("/" + t + " " + Pt[t].objectNumber + " 0 R");
                et(">>")
            }
              , we = function() {
                if (Object.keys(Ot).length > 0) {
                    for (var t in et("/Shading <<"),
                    Ot)
                        Ot.hasOwnProperty(t) && Ot[t]instanceof Ct && Ot[t].objectNumber >= 0 && et("/" + t + " " + Ot[t].objectNumber + " 0 R");
                    qt.publish("putShadingPatternDict"),
                    et(">>")
                }
            }
              , xe = function(t) {
                if (Object.keys(Ot).length > 0) {
                    for (var e in et("/Pattern <<"),
                    Ot)
                        Ot.hasOwnProperty(e) && Ot[e]instanceof p.TilingPattern && Ot[e].objectNumber >= 0 && Ot[e].objectNumber < t && et("/" + e + " " + Ot[e].objectNumber + " 0 R");
                    qt.publish("putTilingPatternDict"),
                    et(">>")
                }
            }
              , _e = function() {
                if (Object.keys(Tt).length > 0) {
                    var t;
                    for (t in et("/ExtGState <<"),
                    Tt)
                        Tt.hasOwnProperty(t) && Tt[t].objectNumber >= 0 && et("/" + t + " " + Tt[t].objectNumber + " 0 R");
                    qt.publish("putGStateDict"),
                    et(">>")
                }
            }
              , Ne = function(t) {
                Xt(t.resourcesOid, !0),
                et("<<"),
                et("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),
                ye(),
                we(),
                xe(t.objectOid),
                _e(),
                ve(),
                et(">>"),
                et("endobj")
            }
              , Ae = function() {
                var t = [];
                le(),
                me(),
                ce(),
                pe(t),
                qt.publish("putResources"),
                t.forEach(Ne),
                Ne({
                    resourcesOid: te,
                    objectOid: Number.MAX_SAFE_INTEGER
                }),
                qt.publish("postPutResources")
            }
              , Le = function() {
                qt.publish("putAdditionalObjects");
                for (var t = 0; t < $.length; t++) {
                    var e = $[t];
                    Xt(e.objId, !0),
                    et(e.content),
                    et("endobj")
                }
                qt.publish("postPutAdditionalObjects")
            }
              , Se = function(t) {
                It[t.fontName] = It[t.fontName] || {},
                It[t.fontName][t.fontStyle] = t.id
            }
              , Pe = function(t, e, r, n, i) {
                var a = {
                    id: "F" + (Object.keys(Pt).length + 1).toString(10),
                    postScriptName: t,
                    fontName: e,
                    fontStyle: r,
                    encoding: n,
                    isStandardFont: i || !1,
                    metadata: {}
                };
                return qt.publish("addFont", {
                    font: a,
                    instance: this
                }),
                Pt[a.id] = a,
                Se(a),
                a.id
            }
              , Ce = function(t) {
                for (var e = 0, r = st.length; e < r; e++) {
                    var n = Pe.call(this, t[e][0], t[e][1], t[e][2], st[e][3], !0);
                    !1 === f && (d[n] = !0);
                    var i = t[e][0].split("-");
                    Se({
                        id: n,
                        fontName: i[0],
                        fontStyle: i[1] || ""
                    })
                }
                qt.publish("addFonts", {
                    fonts: Pt,
                    dictionary: It
                })
            }
              , ke = function(t) {
                return t.foo = function() {
                    try {
                        return t.apply(this, arguments)
                    } catch (t) {
                        var e = t.stack || "";
                        ~e.indexOf(" at ") && (e = e.split(" at ")[1]);
                        var r = "Error in function " + e.split("\n")[0].split("<")[0] + ": " + t.message;
                        if (!X.console)
                            throw new Error(r);
                        X.console.error(r, t),
                        X.alert && alert(r)
                    }
                }
                ,
                t.foo.bar = t,
                t.foo
            }
              , Fe = function(t, e) {
                var r, n, i, a, o, s, l, u, c;
                if (i = (e = e || {}).sourceEncoding || "Unicode",
                o = e.outputEncoding,
                (e.autoencode || o) && Pt[bt].metadata && Pt[bt].metadata[i] && Pt[bt].metadata[i].encoding && (a = Pt[bt].metadata[i].encoding,
                !o && Pt[bt].encoding && (o = Pt[bt].encoding),
                !o && a.codePages && (o = a.codePages[0]),
                "string" == typeof o && (o = a[o]),
                o)) {
                    for (l = !1,
                    s = [],
                    r = 0,
                    n = t.length; r < n; r++)
                        (u = o[t.charCodeAt(r)]) ? s.push(String.fromCharCode(u)) : s.push(t[r]),
                        s[r].charCodeAt(0) >> 8 && (l = !0);
                    t = s.join("")
                }
                for (r = t.length; void 0 === l && 0 !== r; )
                    t.charCodeAt(r - 1) >> 8 && (l = !0),
                    r--;
                if (!l)
                    return t;
                for (s = e.noBOM ? [] : [254, 255],
                r = 0,
                n = t.length; r < n; r++) {
                    if ((c = (u = t.charCodeAt(r)) >> 8) >> 8)
                        throw new Error("Character at position " + r + " of string '" + t + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
                    s.push(c),
                    s.push(u - (c << 8))
                }
                return String.fromCharCode.apply(void 0, s)
            }
              , Ie = p.__private__.pdfEscape = p.pdfEscape = function(t, e) {
                return Fe(t, e).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
            }
              , je = p.__private__.beginPage = function(t) {
                Y[++Et] = [],
                Rt[Et] = {
                    objId: 0,
                    contentsObjId: 0,
                    userUnit: Number(l),
                    artBox: null,
                    bleedBox: null,
                    cropBox: null,
                    trimBox: null,
                    mediaBox: {
                        bottomLeftX: 0,
                        bottomLeftY: 0,
                        topRightX: Number(t[0]),
                        topRightY: Number(t[1])
                    }
                },
                Te(Et),
                tt(Y[q])
            }
              , Oe = function(t, e) {
                var n, i, o;
                switch (r = e || r,
                "string" == typeof t && (n = b(t.toLowerCase()),
                Array.isArray(n) && (i = n[0],
                o = n[1])),
                Array.isArray(t) && (i = t[0] * yt,
                o = t[1] * yt),
                isNaN(i) && (i = a[0],
                o = a[1]),
                (i > 14400 || o > 14400) && (Q.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),
                i = Math.min(14400, i),
                o = Math.min(14400, o)),
                a = [i, o],
                r.substr(0, 1)) {
                case "l":
                    o > i && (a = [o, i]);
                    break;
                case "p":
                    i > o && (a = [o, i])
                }
                je(a),
                pr(fr),
                et(_r),
                0 !== Cr && et(Cr + " J"),
                0 !== kr && et(kr + " j"),
                qt.publish("addPage", {
                    pageNumber: Et
                })
            }
              , De = function(t) {
                t > 0 && t <= Et && (Y.splice(t, 1),
                Rt.splice(t, 1),
                Et--,
                q > Et && (q = Et),
                this.setPage(q))
            }
              , Te = function(t) {
                t > 0 && t <= Et && (q = t)
            }
              , Me = p.__private__.getNumberOfPages = p.getNumberOfPages = function() {
                return Y.length - 1
            }
              , Be = function(t, e, r) {
                var n, i = void 0;
                return r = r || {},
                t = void 0 !== t ? t : Pt[bt].fontName,
                e = void 0 !== e ? e : Pt[bt].fontStyle,
                n = t.toLowerCase(),
                void 0 !== It[n] && void 0 !== It[n][e] ? i = It[n][e] : void 0 !== It[t] && void 0 !== It[t][e] ? i = It[t][e] : !1 === r.disableWarning && Q.warn("Unable to look up font label for font '" + t + "', '" + e + "'. Refer to getFontList() for available fonts."),
                i || r.noFallback || null == (i = It.times[e]) && (i = It.times.normal),
                i
            }
              , Ee = p.__private__.putInfo = function() {
                var t = Jt()
                  , e = function(t) {
                    return t
                };
                for (var r in null !== h && (e = $e.encryptor(t, 0)),
                et("<<"),
                et("/Producer (" + Ie(e("jsPDF " + Ft.version)) + ")"),
                vt)
                    vt.hasOwnProperty(r) && vt[r] && et("/" + r.substr(0, 1).toUpperCase() + r.substr(1) + " (" + Ie(e(vt[r])) + ")");
                et("/CreationDate (" + Ie(e(j)) + ")"),
                et(">>"),
                et("endobj")
            }
              , Re = p.__private__.putCatalog = function(t) {
                var e = (t = t || {}).rootDictionaryObjId || Qt;
                switch (Jt(),
                et("<<"),
                et("/Type /Catalog"),
                et("/Pages " + e + " 0 R"),
                ut || (ut = "fullwidth"),
                ut) {
                case "fullwidth":
                    et("/OpenAction [3 0 R /FitH null]");
                    break;
                case "fullheight":
                    et("/OpenAction [3 0 R /FitV null]");
                    break;
                case "fullpage":
                    et("/OpenAction [3 0 R /Fit]");
                    break;
                case "original":
                    et("/OpenAction [3 0 R /XYZ null null 1]");
                    break;
                default:
                    var r = "" + ut;
                    "%" === r.substr(r.length - 1) && (ut = parseInt(ut) / 100),
                    "number" == typeof ut && et("/OpenAction [3 0 R /XYZ null null " + P(ut) + "]")
                }
                switch (pt || (pt = "continuous"),
                pt) {
                case "continuous":
                    et("/PageLayout /OneColumn");
                    break;
                case "single":
                    et("/PageLayout /SinglePage");
                    break;
                case "two":
                case "twoleft":
                    et("/PageLayout /TwoColumnLeft");
                    break;
                case "tworight":
                    et("/PageLayout /TwoColumnRight")
                }
                ft && et("/PageMode /" + ft),
                qt.publish("putCatalog"),
                et(">>"),
                et("endobj")
            }
              , qe = p.__private__.putTrailer = function() {
                et("trailer"),
                et("<<"),
                et("/Size " + (W + 1)),
                et("/Root " + W + " 0 R"),
                et("/Info " + (W - 1) + " 0 R"),
                null !== h && et("/Encrypt " + $e.oid + " 0 R"),
                et("/ID [ <" + O + "> <" + O + "> ]"),
                et(">>")
            }
              , ze = p.__private__.putHeader = function() {
                et("%PDF-" + g),
                et("%ºß¬à")
            }
              , Ue = p.__private__.putXRef = function() {
                var t = "0000000000";
                et("xref"),
                et("0 " + (W + 1)),
                et("0000000000 65535 f ");
                for (var e = 1; e <= W; e++)
                    "function" == typeof H[e] ? et((t + H[e]()).slice(-10) + " 00000 n ") : void 0 !== H[e] ? et((t + H[e]).slice(-10) + " 00000 n ") : et("0000000000 00000 n ")
            }
              , We = p.__private__.buildDocument = function() {
                Z(),
                tt(V),
                qt.publish("buildDocument"),
                ze(),
                oe(),
                Le(),
                Ae(),
                null !== h && be(),
                Ee(),
                Re();
                var t = G;
                return Ue(),
                qe(),
                et("startxref"),
                et("" + t),
                et("%%EOF"),
                tt(Y[q]),
                V.join("\n")
            }
              , He = p.__private__.getBlob = function(t) {
                return new Blob([nt(t)],{
                    type: "application/pdf"
                })
            }
              , Ve = p.output = p.__private__.output = ke((function(t, e) {
                switch ("string" == typeof (e = e || {}) ? e = {
                    filename: e
                } : e.filename = e.filename || "generated.pdf",
                t) {
                case void 0:
                    return We();
                case "save":
                    p.save(e.filename);
                    break;
                case "arraybuffer":
                    return nt(We());
                case "blob":
                    return He(We());
                case "bloburi":
                case "bloburl":
                    if (void 0 !== X.URL && "function" == typeof X.URL.createObjectURL)
                        return X.URL && X.URL.createObjectURL(He(We())) || void 0;
                    Q.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
                    break;
                case "datauristring":
                case "dataurlstring":
                    var r = ""
                      , n = We();
                    try {
                        r = it(n)
                    } catch (t) {
                        r = it(unescape(encodeURIComponent(n)))
                    }
                    return "data:application/pdf;filename=" + e.filename + ";base64," + r;
                case "pdfobjectnewwindow":
                    if ("[object Window]" === Object.prototype.toString.call(X)) {
                        var i = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js"
                          , a = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
                        e.pdfObjectUrl && (i = e.pdfObjectUrl,
                        a = "");
                        var o = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + i + '"' + a + '><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(e) + ");<\/script></body></html>"
                          , s = X.open();
                        return null !== s && s.document.write(o),
                        s
                    }
                    throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
                case "pdfjsnewwindow":
                    if ("[object Window]" === Object.prototype.toString.call(X)) {
                        var l = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (e.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + e.filename + '" width="500px" height="400px" /></body></html>'
                          , u = X.open();
                        if (null !== u) {
                            u.document.write(l);
                            var c = this;
                            u.document.documentElement.querySelector("#pdfViewer").onload = function() {
                                u.document.title = e.filename,
                                u.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(c.output("bloburl"))
                            }
                        }
                        return u
                    }
                    throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
                case "dataurlnewwindow":
                    if ("[object Window]" !== Object.prototype.toString.call(X))
                        throw new Error("The option dataurlnewwindow just works in a browser-environment.");
                    var h = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", e) + '"></iframe></body></html>'
                      , f = X.open();
                    if (null !== f && (f.document.write(h),
                    f.document.title = e.filename),
                    f || "undefined" == typeof safari)
                        return f;
                    break;
                case "datauri":
                case "dataurl":
                    return X.document.location.href = this.output("datauristring", e);
                default:
                    return null
                }
            }
            ))
              , Ge = function(t) {
                return !0 === Array.isArray(zt) && zt.indexOf(t) > -1
            };
            switch (i) {
            case "pt":
                yt = 1;
                break;
            case "mm":
                yt = 72 / 25.4;
                break;
            case "cm":
                yt = 72 / 2.54;
                break;
            case "in":
                yt = 72;
                break;
            case "px":
                yt = 1 == Ge("px_scaling") ? .75 : 96 / 72;
                break;
            case "pc":
            case "em":
                yt = 12;
                break;
            case "ex":
                yt = 6;
                break;
            default:
                if ("number" != typeof i)
                    throw new Error("Invalid unit: " + i);
                yt = i
            }
            var $e = null;
            E(),
            T();
            var Ye = function(t) {
                return null !== h ? $e.encryptor(t, 0) : function(t) {
                    return t
                }
            }
              , Je = p.__private__.getPageInfo = p.getPageInfo = function(t) {
                if (isNaN(t) || t % 1 != 0)
                    throw new Error("Invalid argument passed to jsPDF.getPageInfo");
                return {
                    objId: Rt[t].objId,
                    pageNumber: t,
                    pageContext: Rt[t]
                }
            }
              , Ke = p.__private__.getPageInfoByObjId = function(t) {
                if (isNaN(t) || t % 1 != 0)
                    throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
                for (var e in Rt)
                    if (Rt[e].objId === t)
                        break;
                return Je(e)
            }
              , Xe = p.__private__.getCurrentPageInfo = p.getCurrentPageInfo = function() {
                return {
                    objId: Rt[q].objId,
                    pageNumber: q,
                    pageContext: Rt[q]
                }
            }
            ;
            p.addPage = function() {
                return Oe.apply(this, arguments),
                this
            }
            ,
            p.setPage = function() {
                return Te.apply(this, arguments),
                tt.call(this, Y[q]),
                this
            }
            ,
            p.insertPage = function(t) {
                return this.addPage(),
                this.movePage(q, t),
                this
            }
            ,
            p.movePage = function(t, e) {
                var r, n;
                if (t > e) {
                    r = Y[t],
                    n = Rt[t];
                    for (var i = t; i > e; i--)
                        Y[i] = Y[i - 1],
                        Rt[i] = Rt[i - 1];
                    Y[e] = r,
                    Rt[e] = n,
                    this.setPage(e)
                } else if (t < e) {
                    r = Y[t],
                    n = Rt[t];
                    for (var a = t; a < e; a++)
                        Y[a] = Y[a + 1],
                        Rt[a] = Rt[a + 1];
                    Y[e] = r,
                    Rt[e] = n,
                    this.setPage(e)
                }
                return this
            }
            ,
            p.deletePage = function() {
                return De.apply(this, arguments),
                this
            }
            ,
            p.__private__.text = p.text = function(t, e, r, i, a) {
                var o, s, l, u, c, h, f, p, g, m = (i = i || {}).scope || this;
                if ("number" == typeof t && "number" == typeof e && ("string" == typeof r || Array.isArray(r))) {
                    var v = r;
                    r = e,
                    e = t,
                    t = v
                }
                if (arguments[3]instanceof Vt == 0 ? (l = arguments[4],
                u = arguments[5],
                "object" === n(f = arguments[3]) && null !== f || ("string" == typeof l && (u = l,
                l = null),
                "string" == typeof f && (u = f,
                f = null),
                "number" == typeof f && (l = f,
                f = null),
                i = {
                    flags: f,
                    angle: l,
                    align: u
                })) : (L("The transform parameter of text() with a Matrix value"),
                g = a),
                isNaN(e) || isNaN(r) || null == t)
                    throw new Error("Invalid arguments passed to jsPDF.text");
                if (0 === t.length)
                    return m;
                var b = ""
                  , x = !1
                  , _ = "number" == typeof i.lineHeightFactor ? i.lineHeightFactor : hr
                  , N = m.internal.scaleFactor;
                function S(t) {
                    return t = t.split("\t").join(Array(i.TabLen || 9).join(" ")),
                    Ie(t, f)
                }
                function P(t) {
                    for (var e, r = t.concat(), n = [], i = r.length; i--; )
                        "string" == typeof (e = r.shift()) ? n.push(e) : Array.isArray(t) && (1 === e.length || void 0 === e[1] && void 0 === e[2]) ? n.push(e[0]) : n.push([e[0], e[1], e[2]]);
                    return n
                }
                function C(t, e) {
                    var r;
                    if ("string" == typeof t)
                        r = e(t)[0];
                    else if (Array.isArray(t)) {
                        for (var n, i, a = t.concat(), o = [], s = a.length; s--; )
                            "string" == typeof (n = a.shift()) ? o.push(e(n)[0]) : Array.isArray(n) && "string" == typeof n[0] && (i = e(n[0], n[1], n[2]),
                            o.push([i[0], i[1], i[2]]));
                        r = o
                    }
                    return r
                }
                var F = !1
                  , I = !0;
                if ("string" == typeof t)
                    F = !0;
                else if (Array.isArray(t)) {
                    var j = t.concat();
                    s = [];
                    for (var O, D = j.length; D--; )
                        ("string" != typeof (O = j.shift()) || Array.isArray(O) && "string" != typeof O[0]) && (I = !1);
                    F = I
                }
                if (!1 === F)
                    throw new Error('Type of text must be string or Array. "' + t + '" is not recognized.');
                "string" == typeof t && (t = t.match(/[\r?\n]/) ? t.split(/\r\n|\r|\n/g) : [t]);
                var T = lt / m.internal.scaleFactor
                  , M = T * (_ - 1);
                switch (i.baseline) {
                case "bottom":
                    r -= M;
                    break;
                case "top":
                    r += T - M;
                    break;
                case "hanging":
                    r += T - 2 * M;
                    break;
                case "middle":
                    r += T / 2 - M
                }
                if ((h = i.maxWidth || 0) > 0 && ("string" == typeof t ? t = m.splitTextToSize(t, h) : "[object Array]" === Object.prototype.toString.call(t) && (t = t.reduce((function(t, e) {
                    return t.concat(m.splitTextToSize(e, h))
                }
                ), []))),
                o = {
                    text: t,
                    x: e,
                    y: r,
                    options: i,
                    mutex: {
                        pdfEscape: Ie,
                        activeFontKey: bt,
                        fonts: Pt,
                        activeFontSize: lt
                    }
                },
                qt.publish("preProcessText", o),
                t = o.text,
                l = (i = o.options).angle,
                g instanceof Vt == 0 && l && "number" == typeof l) {
                    l *= Math.PI / 180,
                    0 === i.rotationDirection && (l = -l),
                    w === y.ADVANCED && (l = -l);
                    var B = Math.cos(l)
                      , E = Math.sin(l);
                    g = new Vt(B,E,-E,B,0,0)
                } else
                    l && l instanceof Vt && (g = l);
                w !== y.ADVANCED || g || (g = $t),
                void 0 !== (c = i.charSpace || Sr) && (b += A(k(c)) + " Tc\n",
                this.setCharSpace(this.getCharSpace() || 0)),
                void 0 !== (p = i.horizontalScale) && (b += A(100 * p) + " Tz\n"),
                i.lang;
                var R = -1
                  , q = void 0 !== i.renderingMode ? i.renderingMode : i.stroke
                  , z = m.internal.getCurrentPageInfo().pageContext;
                switch (q) {
                case 0:
                case !1:
                case "fill":
                    R = 0;
                    break;
                case 1:
                case !0:
                case "stroke":
                    R = 1;
                    break;
                case 2:
                case "fillThenStroke":
                    R = 2;
                    break;
                case 3:
                case "invisible":
                    R = 3;
                    break;
                case 4:
                case "fillAndAddForClipping":
                    R = 4;
                    break;
                case 5:
                case "strokeAndAddPathForClipping":
                    R = 5;
                    break;
                case 6:
                case "fillThenStrokeAndAddToPathForClipping":
                    R = 6;
                    break;
                case 7:
                case "addToPathForClipping":
                    R = 7
                }
                var U = void 0 !== z.usedRenderingMode ? z.usedRenderingMode : -1;
                -1 !== R ? b += R + " Tr\n" : -1 !== U && (b += "0 Tr\n"),
                -1 !== R && (z.usedRenderingMode = R),
                u = i.align || "left";
                var W, H = lt * _, V = m.internal.pageSize.getWidth(), G = Pt[bt];
                c = i.charSpace || Sr,
                h = i.maxWidth || 0,
                f = Object.assign({
                    autoencode: !0,
                    noBOM: !0
                }, i.flags);
                var $ = [];
                if ("[object Array]" === Object.prototype.toString.call(t)) {
                    var Y;
                    s = P(t),
                    "left" !== u && (W = s.map((function(t) {
                        return m.getStringUnitWidth(t, {
                            font: G,
                            charSpace: c,
                            fontSize: lt,
                            doKerning: !1
                        }) * lt / N
                    }
                    )));
                    var J, K = 0;
                    if ("right" === u) {
                        e -= W[0],
                        t = [],
                        D = s.length;
                        for (var X = 0; X < D; X++)
                            0 === X ? (J = br(e),
                            Y = yr(r)) : (J = k(K - W[X]),
                            Y = -H),
                            t.push([s[X], J, Y]),
                            K = W[X]
                    } else if ("center" === u) {
                        e -= W[0] / 2,
                        t = [],
                        D = s.length;
                        for (var Z = 0; Z < D; Z++)
                            0 === Z ? (J = br(e),
                            Y = yr(r)) : (J = k((K - W[Z]) / 2),
                            Y = -H),
                            t.push([s[Z], J, Y]),
                            K = W[Z]
                    } else if ("left" === u) {
                        t = [],
                        D = s.length;
                        for (var Q = 0; Q < D; Q++)
                            t.push(s[Q])
                    } else {
                        if ("justify" !== u)
                            throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
                        t = [],
                        D = s.length,
                        h = 0 !== h ? h : V;
                        for (var tt = 0; tt < D; tt++)
                            Y = 0 === tt ? yr(r) : -H,
                            J = 0 === tt ? br(e) : 0,
                            tt < D - 1 ? $.push(A(k((h - W[tt]) / (s[tt].split(" ").length - 1)))) : $.push(0),
                            t.push([s[tt], J, Y])
                    }
                }
                var rt = "boolean" == typeof i.R2L ? i.R2L : ht;
                !0 === rt && (t = C(t, (function(t, e, r) {
                    return [t.split("").reverse().join(""), e, r]
                }
                ))),
                o = {
                    text: t,
                    x: e,
                    y: r,
                    options: i,
                    mutex: {
                        pdfEscape: Ie,
                        activeFontKey: bt,
                        fonts: Pt,
                        activeFontSize: lt
                    }
                },
                qt.publish("postProcessText", o),
                t = o.text,
                x = o.mutex.isHex || !1;
                var nt = Pt[bt].encoding;
                "WinAnsiEncoding" !== nt && "StandardEncoding" !== nt || (t = C(t, (function(t, e, r) {
                    return [S(t), e, r]
                }
                ))),
                s = P(t),
                t = [];
                for (var it, at, ot, st = 0, ut = 1, ct = Array.isArray(s[0]) ? ut : st, ft = "", dt = function(t, e, r) {
                    var n = "";
                    return r instanceof Vt ? (r = "number" == typeof i.angle ? Gt(r, new Vt(1,0,0,1,t,e)) : Gt(new Vt(1,0,0,1,t,e), r),
                    w === y.ADVANCED && (r = Gt(new Vt(1,0,0,-1,0,0), r)),
                    n = r.join(" ") + " Tm\n") : n = A(t) + " " + A(e) + " Td\n",
                    n
                }, pt = 0; pt < s.length; pt++) {
                    switch (ft = "",
                    ct) {
                    case ut:
                        ot = (x ? "<" : "(") + s[pt][0] + (x ? ">" : ")"),
                        it = parseFloat(s[pt][1]),
                        at = parseFloat(s[pt][2]);
                        break;
                    case st:
                        ot = (x ? "<" : "(") + s[pt] + (x ? ">" : ")"),
                        it = br(e),
                        at = yr(r)
                    }
                    void 0 !== $ && void 0 !== $[pt] && (ft = $[pt] + " Tw\n"),
                    0 === pt ? t.push(ft + dt(it, at, g) + ot) : ct === st ? t.push(ft + ot) : ct === ut && t.push(ft + dt(it, at, g) + ot)
                }
                t = ct === st ? t.join(" Tj\nT* ") : t.join(" Tj\n"),
                t += " Tj\n";
                var gt = "BT\n/";
                return gt += bt + " " + lt + " Tf\n",
                gt += A(lt * _) + " TL\n",
                gt += Ar + "\n",
                gt += b,
                gt += t,
                et(gt += "ET"),
                d[bt] = !0,
                m
            }
            ;
            var Ze = p.__private__.clip = p.clip = function(t) {
                return et("evenodd" === t ? "W*" : "W"),
                this
            }
            ;
            p.clipEvenOdd = function() {
                return Ze("evenodd")
            }
            ,
            p.__private__.discardPath = p.discardPath = function() {
                return et("n"),
                this
            }
            ;
            var Qe = p.__private__.isValidStyle = function(t) {
                var e = !1;
                return -1 !== [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(t) && (e = !0),
                e
            }
            ;
            p.__private__.setDefaultPathOperation = p.setDefaultPathOperation = function(t) {
                return Qe(t) && (c = t),
                this
            }
            ;
            var tr = p.__private__.getStyle = p.getStyle = function(t) {
                var e = c;
                switch (t) {
                case "D":
                case "S":
                    e = "S";
                    break;
                case "F":
                    e = "f";
                    break;
                case "FD":
                case "DF":
                    e = "B";
                    break;
                case "f":
                case "f*":
                case "B":
                case "B*":
                    e = t
                }
                return e
            }
              , er = p.close = function() {
                return et("h"),
                this
            }
            ;
            p.stroke = function() {
                return et("S"),
                this
            }
            ,
            p.fill = function(t) {
                return rr("f", t),
                this
            }
            ,
            p.fillEvenOdd = function(t) {
                return rr("f*", t),
                this
            }
            ,
            p.fillStroke = function(t) {
                return rr("B", t),
                this
            }
            ,
            p.fillStrokeEvenOdd = function(t) {
                return rr("B*", t),
                this
            }
            ;
            var rr = function(t, e) {
                "object" === n(e) ? ar(e, t) : et(t)
            }
              , nr = function(t) {
                null === t || w === y.ADVANCED && void 0 === t || (t = tr(t),
                et(t))
            };
            function ir(t, e, r, n, i) {
                var a = new kt(e || this.boundingBox,r || this.xStep,n || this.yStep,this.gState,i || this.matrix);
                a.stream = this.stream;
                var o = t + "$$" + this.cloneIndex++ + "$$";
                return Yt(o, a),
                a
            }
            var ar = function(t, e) {
                var r = Dt[t.key]
                  , n = Ot[r];
                if (n instanceof Ct)
                    et("q"),
                    et(or(e)),
                    n.gState && p.setGState(n.gState),
                    et(t.matrix.toString() + " cm"),
                    et("/" + r + " sh"),
                    et("Q");
                else if (n instanceof kt) {
                    var i = new Vt(1,0,0,-1,0,Rr());
                    t.matrix && (i = i.multiply(t.matrix || $t),
                    r = ir.call(n, t.key, t.boundingBox, t.xStep, t.yStep, i).id),
                    et("q"),
                    et("/Pattern cs"),
                    et("/" + r + " scn"),
                    n.gState && p.setGState(n.gState),
                    et(e),
                    et("Q")
                }
            }
              , or = function(t) {
                switch (t) {
                case "f":
                case "F":
                case "n":
                    return "W n";
                case "f*":
                    return "W* n";
                case "B":
                case "S":
                    return "W S";
                case "B*":
                    return "W* S"
                }
            }
              , sr = p.moveTo = function(t, e) {
                return et(A(k(t)) + " " + A(I(e)) + " m"),
                this
            }
              , lr = p.lineTo = function(t, e) {
                return et(A(k(t)) + " " + A(I(e)) + " l"),
                this
            }
              , ur = p.curveTo = function(t, e, r, n, i, a) {
                return et([A(k(t)), A(I(e)), A(k(r)), A(I(n)), A(k(i)), A(I(a)), "c"].join(" ")),
                this
            }
            ;
            p.__private__.line = p.line = function(t, e, r, n, i) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || !Qe(i))
                    throw new Error("Invalid arguments passed to jsPDF.line");
                return w === y.COMPAT ? this.lines([[r - t, n - e]], t, e, [1, 1], i || "S") : this.lines([[r - t, n - e]], t, e, [1, 1]).stroke()
            }
            ,
            p.__private__.lines = p.lines = function(t, e, r, n, i, a) {
                var o, s, l, u, c, h, f, d, p, g, m, v;
                if ("number" == typeof t && (v = r,
                r = e,
                e = t,
                t = v),
                n = n || [1, 1],
                a = a || !1,
                isNaN(e) || isNaN(r) || !Array.isArray(t) || !Array.isArray(n) || !Qe(i) || "boolean" != typeof a)
                    throw new Error("Invalid arguments passed to jsPDF.lines");
                for (sr(e, r),
                o = n[0],
                s = n[1],
                u = t.length,
                g = e,
                m = r,
                l = 0; l < u; l++)
                    2 === (c = t[l]).length ? (g = c[0] * o + g,
                    m = c[1] * s + m,
                    lr(g, m)) : (h = c[0] * o + g,
                    f = c[1] * s + m,
                    d = c[2] * o + g,
                    p = c[3] * s + m,
                    g = c[4] * o + g,
                    m = c[5] * s + m,
                    ur(h, f, d, p, g, m));
                return a && er(),
                nr(i),
                this
            }
            ,
            p.path = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e]
                      , n = r.c;
                    switch (r.op) {
                    case "m":
                        sr(n[0], n[1]);
                        break;
                    case "l":
                        lr(n[0], n[1]);
                        break;
                    case "c":
                        ur.apply(this, n);
                        break;
                    case "h":
                        er()
                    }
                }
                return this
            }
            ,
            p.__private__.rect = p.rect = function(t, e, r, n, i) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || !Qe(i))
                    throw new Error("Invalid arguments passed to jsPDF.rect");
                return w === y.COMPAT && (n = -n),
                et([A(k(t)), A(I(e)), A(k(r)), A(k(n)), "re"].join(" ")),
                nr(i),
                this
            }
            ,
            p.__private__.triangle = p.triangle = function(t, e, r, n, i, a, o) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i) || isNaN(a) || !Qe(o))
                    throw new Error("Invalid arguments passed to jsPDF.triangle");
                return this.lines([[r - t, n - e], [i - r, a - n], [t - i, e - a]], t, e, [1, 1], o, !0),
                this
            }
            ,
            p.__private__.roundedRect = p.roundedRect = function(t, e, r, n, i, a, o) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i) || isNaN(a) || !Qe(o))
                    throw new Error("Invalid arguments passed to jsPDF.roundedRect");
                var s = 4 / 3 * (Math.SQRT2 - 1);
                return i = Math.min(i, .5 * r),
                a = Math.min(a, .5 * n),
                this.lines([[r - 2 * i, 0], [i * s, 0, i, a - a * s, i, a], [0, n - 2 * a], [0, a * s, -i * s, a, -i, a], [2 * i - r, 0], [-i * s, 0, -i, -a * s, -i, -a], [0, 2 * a - n], [0, -a * s, i * s, -a, i, -a]], t + i, e, [1, 1], o, !0),
                this
            }
            ,
            p.__private__.ellipse = p.ellipse = function(t, e, r, n, i) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || !Qe(i))
                    throw new Error("Invalid arguments passed to jsPDF.ellipse");
                var a = 4 / 3 * (Math.SQRT2 - 1) * r
                  , o = 4 / 3 * (Math.SQRT2 - 1) * n;
                return sr(t + r, e),
                ur(t + r, e - o, t + a, e - n, t, e - n),
                ur(t - a, e - n, t - r, e - o, t - r, e),
                ur(t - r, e + o, t - a, e + n, t, e + n),
                ur(t + a, e + n, t + r, e + o, t + r, e),
                nr(i),
                this
            }
            ,
            p.__private__.circle = p.circle = function(t, e, r, n) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || !Qe(n))
                    throw new Error("Invalid arguments passed to jsPDF.circle");
                return this.ellipse(t, e, r, r, n)
            }
            ,
            p.setFont = function(t, e, r) {
                return r && (e = N(e, r)),
                bt = Be(t, e, {
                    disableWarning: !1
                }),
                this
            }
            ;
            var cr = p.__private__.getFont = p.getFont = function() {
                return Pt[Be.apply(p, arguments)]
            }
            ;
            p.__private__.getFontList = p.getFontList = function() {
                var t, e, r = {};
                for (t in It)
                    if (It.hasOwnProperty(t))
                        for (e in r[t] = [],
                        It[t])
                            It[t].hasOwnProperty(e) && r[t].push(e);
                return r
            }
            ,
            p.addFont = function(t, e, r, n, i) {
                var a = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
                return arguments[3] && -1 !== a.indexOf(arguments[3]) ? i = arguments[3] : arguments[3] && -1 == a.indexOf(arguments[3]) && (r = N(r, n)),
                i = i || "Identity-H",
                Pe.call(this, t, e, r, i)
            }
            ;
            var hr, fr = t.lineWidth || .200025, dr = p.__private__.getLineWidth = p.getLineWidth = function() {
                return fr
            }
            , pr = p.__private__.setLineWidth = p.setLineWidth = function(t) {
                return fr = t,
                et(A(k(t)) + " w"),
                this
            }
            ;
            p.__private__.setLineDash = Ft.API.setLineDash = Ft.API.setLineDashPattern = function(t, e) {
                if (t = t || [],
                e = e || 0,
                isNaN(e) || !Array.isArray(t))
                    throw new Error("Invalid arguments passed to jsPDF.setLineDash");
                return t = t.map((function(t) {
                    return A(k(t))
                }
                )).join(" "),
                e = A(k(e)),
                et("[" + t + "] " + e + " d"),
                this
            }
            ;
            var gr = p.__private__.getLineHeight = p.getLineHeight = function() {
                return lt * hr
            }
            ;
            p.__private__.getLineHeight = p.getLineHeight = function() {
                return lt * hr
            }
            ;
            var mr = p.__private__.setLineHeightFactor = p.setLineHeightFactor = function(t) {
                return "number" == typeof (t = t || 1.15) && (hr = t),
                this
            }
              , vr = p.__private__.getLineHeightFactor = p.getLineHeightFactor = function() {
                return hr
            }
            ;
            mr(t.lineHeight);
            var br = p.__private__.getHorizontalCoordinate = function(t) {
                return k(t)
            }
              , yr = p.__private__.getVerticalCoordinate = function(t) {
                return w === y.ADVANCED ? t : Rt[q].mediaBox.topRightY - Rt[q].mediaBox.bottomLeftY - k(t)
            }
              , wr = p.__private__.getHorizontalCoordinateString = p.getHorizontalCoordinateString = function(t) {
                return A(br(t))
            }
              , xr = p.__private__.getVerticalCoordinateString = p.getVerticalCoordinateString = function(t) {
                return A(yr(t))
            }
              , _r = t.strokeColor || "0 G";
            p.__private__.getStrokeColor = p.getDrawColor = function() {
                return ee(_r)
            }
            ,
            p.__private__.setStrokeColor = p.setDrawColor = function(t, e, r, n) {
                return _r = re({
                    ch1: t,
                    ch2: e,
                    ch3: r,
                    ch4: n,
                    pdfColorType: "draw",
                    precision: 2
                }),
                et(_r),
                this
            }
            ;
            var Nr = t.fillColor || "0 g";
            p.__private__.getFillColor = p.getFillColor = function() {
                return ee(Nr)
            }
            ,
            p.__private__.setFillColor = p.setFillColor = function(t, e, r, n) {
                return Nr = re({
                    ch1: t,
                    ch2: e,
                    ch3: r,
                    ch4: n,
                    pdfColorType: "fill",
                    precision: 2
                }),
                et(Nr),
                this
            }
            ;
            var Ar = t.textColor || "0 g"
              , Lr = p.__private__.getTextColor = p.getTextColor = function() {
                return ee(Ar)
            }
            ;
            p.__private__.setTextColor = p.setTextColor = function(t, e, r, n) {
                return Ar = re({
                    ch1: t,
                    ch2: e,
                    ch3: r,
                    ch4: n,
                    pdfColorType: "text",
                    precision: 3
                }),
                this
            }
            ;
            var Sr = t.charSpace
              , Pr = p.__private__.getCharSpace = p.getCharSpace = function() {
                return parseFloat(Sr || 0)
            }
            ;
            p.__private__.setCharSpace = p.setCharSpace = function(t) {
                if (isNaN(t))
                    throw new Error("Invalid argument passed to jsPDF.setCharSpace");
                return Sr = t,
                this
            }
            ;
            var Cr = 0;
            p.CapJoinStyles = {
                0: 0,
                butt: 0,
                but: 0,
                miter: 0,
                1: 1,
                round: 1,
                rounded: 1,
                circle: 1,
                2: 2,
                projecting: 2,
                project: 2,
                square: 2,
                bevel: 2
            },
            p.__private__.setLineCap = p.setLineCap = function(t) {
                var e = p.CapJoinStyles[t];
                if (void 0 === e)
                    throw new Error("Line cap style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
                return Cr = e,
                et(e + " J"),
                this
            }
            ;
            var kr = 0;
            p.__private__.setLineJoin = p.setLineJoin = function(t) {
                var e = p.CapJoinStyles[t];
                if (void 0 === e)
                    throw new Error("Line join style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
                return kr = e,
                et(e + " j"),
                this
            }
            ,
            p.__private__.setLineMiterLimit = p.__private__.setMiterLimit = p.setLineMiterLimit = p.setMiterLimit = function(t) {
                if (t = t || 0,
                isNaN(t))
                    throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
                return et(A(k(t)) + " M"),
                this
            }
            ,
            p.GState = St,
            p.setGState = function(t) {
                (t = "string" == typeof t ? Tt[Mt[t]] : Fr(null, t)).equals(Bt) || (et("/" + t.id + " gs"),
                Bt = t)
            }
            ;
            var Fr = function(t, e) {
                if (!t || !Mt[t]) {
                    var r = !1;
                    for (var n in Tt)
                        if (Tt.hasOwnProperty(n) && Tt[n].equals(e)) {
                            r = !0;
                            break
                        }
                    if (r)
                        e = Tt[n];
                    else {
                        var i = "GS" + (Object.keys(Tt).length + 1).toString(10);
                        Tt[i] = e,
                        e.id = i
                    }
                    return t && (Mt[t] = e.id),
                    qt.publish("addGState", e),
                    e
                }
            };
            p.addGState = function(t, e) {
                return Fr(t, e),
                this
            }
            ,
            p.saveGraphicsState = function() {
                return et("q"),
                jt.push({
                    key: bt,
                    size: lt,
                    color: Ar
                }),
                this
            }
            ,
            p.restoreGraphicsState = function() {
                et("Q");
                var t = jt.pop();
                return bt = t.key,
                lt = t.size,
                Ar = t.color,
                Bt = null,
                this
            }
            ,
            p.setCurrentTransformationMatrix = function(t) {
                return et(t.toString() + " cm"),
                this
            }
            ,
            p.comment = function(t) {
                return et("#" + t),
                this
            }
            ;
            var Ir = function(t, e) {
                var r = t || 0;
                Object.defineProperty(this, "x", {
                    enumerable: !0,
                    get: function() {
                        return r
                    },
                    set: function(t) {
                        isNaN(t) || (r = parseFloat(t))
                    }
                });
                var n = e || 0;
                Object.defineProperty(this, "y", {
                    enumerable: !0,
                    get: function() {
                        return n
                    },
                    set: function(t) {
                        isNaN(t) || (n = parseFloat(t))
                    }
                });
                var i = "pt";
                return Object.defineProperty(this, "type", {
                    enumerable: !0,
                    get: function() {
                        return i
                    },
                    set: function(t) {
                        i = t.toString()
                    }
                }),
                this
            }
              , jr = function(t, e, r, n) {
                Ir.call(this, t, e),
                this.type = "rect";
                var i = r || 0;
                Object.defineProperty(this, "w", {
                    enumerable: !0,
                    get: function() {
                        return i
                    },
                    set: function(t) {
                        isNaN(t) || (i = parseFloat(t))
                    }
                });
                var a = n || 0;
                return Object.defineProperty(this, "h", {
                    enumerable: !0,
                    get: function() {
                        return a
                    },
                    set: function(t) {
                        isNaN(t) || (a = parseFloat(t))
                    }
                }),
                this
            }
              , Or = function() {
                this.page = Et,
                this.currentPage = q,
                this.pages = Y.slice(0),
                this.pagesContext = Rt.slice(0),
                this.x = wt,
                this.y = xt,
                this.matrix = _t,
                this.width = Br(q),
                this.height = Rr(q),
                this.outputDestination = K,
                this.id = "",
                this.objectNumber = -1
            };
            Or.prototype.restore = function() {
                Et = this.page,
                q = this.currentPage,
                Rt = this.pagesContext,
                Y = this.pages,
                wt = this.x,
                xt = this.y,
                _t = this.matrix,
                Er(q, this.width),
                qr(q, this.height),
                K = this.outputDestination
            }
            ;
            var Dr = function(t, e, r, n, i) {
                Ht.push(new Or),
                Et = q = 0,
                Y = [],
                wt = t,
                xt = e,
                _t = i,
                je([r, n])
            }
              , Tr = function(t) {
                if (Wt[t])
                    Ht.pop().restore();
                else {
                    var e = new Or
                      , r = "Xo" + (Object.keys(Ut).length + 1).toString(10);
                    e.id = r,
                    Wt[t] = r,
                    Ut[r] = e,
                    qt.publish("addFormObject", e),
                    Ht.pop().restore()
                }
            };
            for (var Mr in p.beginFormObject = function(t, e, r, n, i) {
                return Dr(t, e, r, n, i),
                this
            }
            ,
            p.endFormObject = function(t) {
                return Tr(t),
                this
            }
            ,
            p.doFormObject = function(t, e) {
                var r = Ut[Wt[t]];
                return et("q"),
                et(e.toString() + " cm"),
                et("/" + r.id + " Do"),
                et("Q"),
                this
            }
            ,
            p.getFormObject = function(t) {
                var e = Ut[Wt[t]];
                return {
                    x: e.x,
                    y: e.y,
                    width: e.width,
                    height: e.height,
                    matrix: e.matrix
                }
            }
            ,
            p.save = function(t, e) {
                return t = t || "generated.pdf",
                (e = e || {}).returnPromise = e.returnPromise || !1,
                !1 === e.returnPromise ? (at(He(We()), t),
                "function" == typeof at.unload && X.setTimeout && setTimeout(at.unload, 911),
                this) : new Promise((function(e, r) {
                    try {
                        var n = at(He(We()), t);
                        "function" == typeof at.unload && X.setTimeout && setTimeout(at.unload, 911),
                        e(n)
                    } catch (t) {
                        r(t.message)
                    }
                }
                ))
            }
            ,
            Ft.API)
                Ft.API.hasOwnProperty(Mr) && ("events" === Mr && Ft.API.events.length ? function(t, e) {
                    var r, n, i;
                    for (i = e.length - 1; -1 !== i; i--)
                        r = e[i][0],
                        n = e[i][1],
                        t.subscribe.apply(t, [r].concat("function" == typeof n ? [n] : n))
                }(qt, Ft.API.events) : p[Mr] = Ft.API[Mr]);
            var Br = p.getPageWidth = function(t) {
                return (Rt[t = t || q].mediaBox.topRightX - Rt[t].mediaBox.bottomLeftX) / yt
            }
              , Er = p.setPageWidth = function(t, e) {
                Rt[t].mediaBox.topRightX = e * yt + Rt[t].mediaBox.bottomLeftX
            }
              , Rr = p.getPageHeight = function(t) {
                return (Rt[t = t || q].mediaBox.topRightY - Rt[t].mediaBox.bottomLeftY) / yt
            }
              , qr = p.setPageHeight = function(t, e) {
                Rt[t].mediaBox.topRightY = e * yt + Rt[t].mediaBox.bottomLeftY
            }
            ;
            return p.internal = {
                pdfEscape: Ie,
                getStyle: tr,
                getFont: cr,
                getFontSize: ct,
                getCharSpace: Pr,
                getTextColor: Lr,
                getLineHeight: gr,
                getLineHeightFactor: vr,
                getLineWidth: dr,
                write: rt,
                getHorizontalCoordinate: br,
                getVerticalCoordinate: yr,
                getCoordinateString: wr,
                getVerticalCoordinateString: xr,
                collections: {},
                newObject: Jt,
                newAdditionalObject: Zt,
                newObjectDeferred: Kt,
                newObjectDeferredBegin: Xt,
                getFilters: ne,
                putStream: ie,
                events: qt,
                scaleFactor: yt,
                pageSize: {
                    getWidth: function() {
                        return Br(q)
                    },
                    setWidth: function(t) {
                        Er(q, t)
                    },
                    getHeight: function() {
                        return Rr(q)
                    },
                    setHeight: function(t) {
                        qr(q, t)
                    }
                },
                encryptionOptions: h,
                encryption: $e,
                getEncryptor: Ye,
                output: Ve,
                getNumberOfPages: Me,
                pages: Y,
                out: et,
                f2: P,
                f3: C,
                getPageInfo: Je,
                getPageInfoByObjId: Ke,
                getCurrentPageInfo: Xe,
                getPDFVersion: m,
                Point: Ir,
                Rectangle: jr,
                Matrix: Vt,
                hasHotfix: Ge
            },
            Object.defineProperty(p.internal.pageSize, "width", {
                get: function() {
                    return Br(q)
                },
                set: function(t) {
                    Er(q, t)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(p.internal.pageSize, "height", {
                get: function() {
                    return Rr(q)
                },
                set: function(t) {
                    qr(q, t)
                },
                enumerable: !0,
                configurable: !0
            }),
            Ce.call(p, st),
            bt = "F1",
            Oe(a, r),
            qt.publish("initialized"),
            p
        }
        Nt.prototype.lsbFirstWord = function(t) {
            return String.fromCharCode(t >> 0 & 255, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255)
        }
        ,
        Nt.prototype.toHexString = function(t) {
            return t.split("").map((function(t) {
                return ("0" + (255 & t.charCodeAt(0)).toString(16)).slice(-2)
            }
            )).join("")
        }
        ,
        Nt.prototype.hexToBytes = function(t) {
            for (var e = [], r = 0; r < t.length; r += 2)
                e.push(String.fromCharCode(parseInt(t.substr(r, 2), 16)));
            return e.join("")
        }
        ,
        Nt.prototype.processOwnerPassword = function(t, e) {
            return xt(bt(e).substr(0, 5), t)
        }
        ,
        Nt.prototype.encryptor = function(t, e) {
            var r = bt(this.encryptionKey + String.fromCharCode(255 & t, t >> 8 & 255, t >> 16 & 255, 255 & e, e >> 8 & 255)).substr(0, 10);
            return function(t) {
                return xt(r, t)
            }
        }
        ,
        St.prototype.equals = function(t) {
            var e, r = "id,objectNumber,equals";
            if (!t || n(t) !== n(this))
                return !1;
            var i = 0;
            for (e in this)
                if (!(r.indexOf(e) >= 0)) {
                    if (this.hasOwnProperty(e) && !t.hasOwnProperty(e))
                        return !1;
                    if (this[e] !== t[e])
                        return !1;
                    i++
                }
            for (e in t)
                t.hasOwnProperty(e) && r.indexOf(e) < 0 && i--;
            return 0 === i
        }
        ,
        Ft.API = {
            events: []
        },
        Ft.version = "2.5.1";
        var It = Ft.API
          , jt = 1
          , Ot = function(t) {
            return t.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
        }
          , Dt = function(t) {
            return t.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")")
        }
          , Tt = function(t) {
            return t.toFixed(2)
        }
          , Mt = function(t) {
            return t.toFixed(5)
        };
        It.__acroform__ = {};
        var Bt = function(t, e) {
            t.prototype = Object.create(e.prototype),
            t.prototype.constructor = t
        }
          , Et = function(t) {
            return t * jt
        }
          , Rt = function(t) {
            var e = new re
              , r = me.internal.getHeight(t) || 0
              , n = me.internal.getWidth(t) || 0;
            return e.BBox = [0, 0, Number(Tt(n)), Number(Tt(r))],
            e
        }
          , qt = It.__acroform__.setBit = function(t, e) {
            if (t = t || 0,
            e = e || 0,
            isNaN(t) || isNaN(e))
                throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
            return t | 1 << e
        }
          , zt = It.__acroform__.clearBit = function(t, e) {
            if (t = t || 0,
            e = e || 0,
            isNaN(t) || isNaN(e))
                throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
            return t & ~(1 << e)
        }
          , Ut = It.__acroform__.getBit = function(t, e) {
            if (isNaN(t) || isNaN(e))
                throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
            return 0 == (t & 1 << e) ? 0 : 1
        }
          , Wt = It.__acroform__.getBitForPdf = function(t, e) {
            if (isNaN(t) || isNaN(e))
                throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
            return Ut(t, e - 1)
        }
          , Ht = It.__acroform__.setBitForPdf = function(t, e) {
            if (isNaN(t) || isNaN(e))
                throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
            return qt(t, e - 1)
        }
          , Vt = It.__acroform__.clearBitForPdf = function(t, e) {
            if (isNaN(t) || isNaN(e))
                throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
            return zt(t, e - 1)
        }
          , Gt = It.__acroform__.calculateCoordinates = function(t, e) {
            var r = e.internal.getHorizontalCoordinate
              , n = e.internal.getVerticalCoordinate
              , i = t[0]
              , a = t[1]
              , o = t[2]
              , s = t[3]
              , l = {};
            return l.lowerLeft_X = r(i) || 0,
            l.lowerLeft_Y = n(a + s) || 0,
            l.upperRight_X = r(i + o) || 0,
            l.upperRight_Y = n(a) || 0,
            [Number(Tt(l.lowerLeft_X)), Number(Tt(l.lowerLeft_Y)), Number(Tt(l.upperRight_X)), Number(Tt(l.upperRight_Y))]
        }
          , $t = function(t) {
            if (t.appearanceStreamContent)
                return t.appearanceStreamContent;
            if (t.V || t.DV) {
                var e = []
                  , r = t._V || t.DV
                  , n = Yt(t, r)
                  , i = t.scope.internal.getFont(t.fontName, t.fontStyle).id;
                e.push("/Tx BMC"),
                e.push("q"),
                e.push("BT"),
                e.push(t.scope.__private__.encodeColorString(t.color)),
                e.push("/" + i + " " + Tt(n.fontSize) + " Tf"),
                e.push("1 0 0 1 0 0 Tm"),
                e.push(n.text),
                e.push("ET"),
                e.push("Q"),
                e.push("EMC");
                var a = Rt(t);
                return a.scope = t.scope,
                a.stream = e.join("\n"),
                a
            }
        }
          , Yt = function(t, e) {
            var r = 0 === t.fontSize ? t.maxFontSize : t.fontSize
              , n = {
                text: "",
                fontSize: ""
            }
              , i = (e = ")" == (e = "(" == e.substr(0, 1) ? e.substr(1) : e).substr(e.length - 1) ? e.substr(0, e.length - 1) : e).split(" ");
            i = t.multiline ? i.map((function(t) {
                return t.split("\n")
            }
            )) : i.map((function(t) {
                return [t]
            }
            ));
            var a = r
              , o = me.internal.getHeight(t) || 0;
            o = o < 0 ? -o : o;
            var s = me.internal.getWidth(t) || 0;
            s = s < 0 ? -s : s;
            var l = function(e, r, n) {
                if (e + 1 < i.length) {
                    var a = r + " " + i[e + 1][0];
                    return Jt(a, t, n).width <= s - 4
                }
                return !1
            };
            a++;
            t: for (; a > 0; ) {
                e = "",
                a--;
                var u, c, h = Jt("3", t, a).height, f = t.multiline ? o - a : (o - h) / 2, d = f += 2, p = 0, g = 0, m = 0;
                if (a <= 0) {
                    e = "(...) Tj\n",
                    e += "% Width of Text: " + Jt(e, t, a = 12).width + ", FieldWidth:" + s + "\n";
                    break
                }
                for (var v = "", b = 0, y = 0; y < i.length; y++)
                    if (i.hasOwnProperty(y)) {
                        var w = !1;
                        if (1 !== i[y].length && m !== i[y].length - 1) {
                            if ((h + 2) * (b + 2) + 2 > o)
                                continue t;
                            v += i[y][m],
                            w = !0,
                            g = y,
                            y--
                        } else {
                            v = " " == (v += i[y][m] + " ").substr(v.length - 1) ? v.substr(0, v.length - 1) : v;
                            var x = parseInt(y)
                              , _ = l(x, v, a)
                              , N = y >= i.length - 1;
                            if (_ && !N) {
                                v += " ",
                                m = 0;
                                continue
                            }
                            if (_ || N) {
                                if (N)
                                    g = x;
                                else if (t.multiline && (h + 2) * (b + 2) + 2 > o)
                                    continue t
                            } else {
                                if (!t.multiline)
                                    continue t;
                                if ((h + 2) * (b + 2) + 2 > o)
                                    continue t;
                                g = x
                            }
                        }
                        for (var A = "", L = p; L <= g; L++) {
                            var S = i[L];
                            if (t.multiline) {
                                if (L === g) {
                                    A += S[m] + " ",
                                    m = (m + 1) % S.length;
                                    continue
                                }
                                if (L === p) {
                                    A += S[S.length - 1] + " ";
                                    continue
                                }
                            }
                            A += S[0] + " "
                        }
                        switch (A = " " == A.substr(A.length - 1) ? A.substr(0, A.length - 1) : A,
                        c = Jt(A, t, a).width,
                        t.textAlign) {
                        case "right":
                            u = s - c - 2;
                            break;
                        case "center":
                            u = (s - c) / 2;
                            break;
                        default:
                            u = 2
                        }
                        e += Tt(u) + " " + Tt(d) + " Td\n",
                        e += "(" + Ot(A) + ") Tj\n",
                        e += -Tt(u) + " 0 Td\n",
                        d = -(a + 2),
                        c = 0,
                        p = w ? g : g + 1,
                        b++,
                        v = ""
                    }
                break
            }
            return n.text = e,
            n.fontSize = a,
            n
        }
          , Jt = function(t, e, r) {
            var n = e.scope.internal.getFont(e.fontName, e.fontStyle)
              , i = e.scope.getStringUnitWidth(t, {
                font: n,
                fontSize: parseFloat(r),
                charSpace: 0
            }) * parseFloat(r);
            return {
                height: e.scope.getStringUnitWidth("3", {
                    font: n,
                    fontSize: parseFloat(r),
                    charSpace: 0
                }) * parseFloat(r) * 1.5,
                width: i
            }
        }
          , Kt = {
            fields: [],
            xForms: [],
            acroFormDictionaryRoot: null,
            printedOut: !1,
            internal: null,
            isInitialized: !1
        }
          , Xt = function(t, e) {
            var r = {
                type: "reference",
                object: t
            };
            void 0 === e.internal.getPageInfo(t.page).pageContext.annotations.find((function(t) {
                return t.type === r.type && t.object === r.object
            }
            )) && e.internal.getPageInfo(t.page).pageContext.annotations.push(r)
        }
          , Zt = function(t, e) {
            if (e.scope = t,
            void 0 !== t.internal && (void 0 === t.internal.acroformPlugin || !1 === t.internal.acroformPlugin.isInitialized)) {
                if (ie.FieldNum = 0,
                t.internal.acroformPlugin = JSON.parse(JSON.stringify(Kt)),
                t.internal.acroformPlugin.acroFormDictionaryRoot)
                    throw new Error("Exception while creating AcroformDictionary");
                jt = t.internal.scaleFactor,
                t.internal.acroformPlugin.acroFormDictionaryRoot = new ne,
                t.internal.acroformPlugin.acroFormDictionaryRoot.scope = t,
                t.internal.acroformPlugin.acroFormDictionaryRoot._eventID = t.internal.events.subscribe("postPutResources", (function() {
                    var e;
                    (e = t).internal.events.unsubscribe(e.internal.acroformPlugin.acroFormDictionaryRoot._eventID),
                    delete e.internal.acroformPlugin.acroFormDictionaryRoot._eventID,
                    e.internal.acroformPlugin.printedOut = !0
                }
                )),
                t.internal.events.subscribe("buildDocument", (function() {
                    !function(t) {
                        t.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
                        var e = t.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
                        for (var r in e)
                            if (e.hasOwnProperty(r)) {
                                var n = e[r];
                                n.objId = void 0,
                                n.hasAnnotation && Xt(n, t)
                            }
                    }(t)
                }
                )),
                t.internal.events.subscribe("putCatalog", (function() {
                    !function(t) {
                        if (void 0 === t.internal.acroformPlugin.acroFormDictionaryRoot)
                            throw new Error("putCatalogCallback: Root missing.");
                        t.internal.write("/AcroForm " + t.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R")
                    }(t)
                }
                )),
                t.internal.events.subscribe("postPutPages", (function(e) {
                    !function(t, e) {
                        var r = !t;
                        for (var i in t || (e.internal.newObjectDeferredBegin(e.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0),
                        e.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),
                        t = t || e.internal.acroformPlugin.acroFormDictionaryRoot.Kids)
                            if (t.hasOwnProperty(i)) {
                                var a = t[i]
                                  , o = []
                                  , s = a.Rect;
                                if (a.Rect && (a.Rect = Gt(a.Rect, e)),
                                e.internal.newObjectDeferredBegin(a.objId, !0),
                                a.DA = me.createDefaultAppearanceStream(a),
                                "object" === n(a) && "function" == typeof a.getKeyValueListForStream && (o = a.getKeyValueListForStream()),
                                a.Rect = s,
                                a.hasAppearanceStream && !a.appearanceStreamContent) {
                                    var l = $t(a);
                                    o.push({
                                        key: "AP",
                                        value: "<</N " + l + ">>"
                                    }),
                                    e.internal.acroformPlugin.xForms.push(l)
                                }
                                if (a.appearanceStreamContent) {
                                    var u = "";
                                    for (var c in a.appearanceStreamContent)
                                        if (a.appearanceStreamContent.hasOwnProperty(c)) {
                                            var h = a.appearanceStreamContent[c];
                                            if (u += "/" + c + " ",
                                            u += "<<",
                                            Object.keys(h).length >= 1 || Array.isArray(h)) {
                                                for (var i in h)
                                                    if (h.hasOwnProperty(i)) {
                                                        var f = h[i];
                                                        "function" == typeof f && (f = f.call(e, a)),
                                                        u += "/" + i + " " + f + " ",
                                                        e.internal.acroformPlugin.xForms.indexOf(f) >= 0 || e.internal.acroformPlugin.xForms.push(f)
                                                    }
                                            } else
                                                "function" == typeof (f = h) && (f = f.call(e, a)),
                                                u += "/" + i + " " + f,
                                                e.internal.acroformPlugin.xForms.indexOf(f) >= 0 || e.internal.acroformPlugin.xForms.push(f);
                                            u += ">>"
                                        }
                                    o.push({
                                        key: "AP",
                                        value: "<<\n" + u + ">>"
                                    })
                                }
                                e.internal.putStream({
                                    additionalKeyValues: o,
                                    objectId: a.objId
                                }),
                                e.internal.out("endobj")
                            }
                        r && function(t, e) {
                            for (var r in t)
                                if (t.hasOwnProperty(r)) {
                                    var i = r
                                      , a = t[r];
                                    e.internal.newObjectDeferredBegin(a.objId, !0),
                                    "object" === n(a) && "function" == typeof a.putStream && a.putStream(),
                                    delete t[i]
                                }
                        }(e.internal.acroformPlugin.xForms, e)
                    }(e, t)
                }
                )),
                t.internal.acroformPlugin.isInitialized = !0
            }
        }
          , Qt = It.__acroform__.arrayToPdfArray = function(t, e, r) {
            var i = function(t) {
                return t
            };
            if (Array.isArray(t)) {
                for (var a = "[", o = 0; o < t.length; o++)
                    switch (0 !== o && (a += " "),
                    n(t[o])) {
                    case "boolean":
                    case "number":
                    case "object":
                        a += t[o].toString();
                        break;
                    case "string":
                        "/" !== t[o].substr(0, 1) ? (void 0 !== e && r && (i = r.internal.getEncryptor(e)),
                        a += "(" + Ot(i(t[o].toString())) + ")") : a += t[o].toString()
                    }
                return a + "]"
            }
            throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")
        }
          , te = function(t, e, r) {
            var n = function(t) {
                return t
            };
            return void 0 !== e && r && (n = r.internal.getEncryptor(e)),
            (t = t || "").toString(),
            "(" + Ot(n(t)) + ")"
        }
          , ee = function() {
            this._objId = void 0,
            this._scope = void 0,
            Object.defineProperty(this, "objId", {
                get: function() {
                    if (void 0 === this._objId) {
                        if (void 0 === this.scope)
                            return;
                        this._objId = this.scope.internal.newObjectDeferred()
                    }
                    return this._objId
                },
                set: function(t) {
                    this._objId = t
                }
            }),
            Object.defineProperty(this, "scope", {
                value: this._scope,
                writable: !0
            })
        };
        ee.prototype.toString = function() {
            return this.objId + " 0 R"
        }
        ,
        ee.prototype.putStream = function() {
            var t = this.getKeyValueListForStream();
            this.scope.internal.putStream({
                data: this.stream,
                additionalKeyValues: t,
                objectId: this.objId
            }),
            this.scope.internal.out("endobj")
        }
        ,
        ee.prototype.getKeyValueListForStream = function() {
            var t = []
              , e = Object.getOwnPropertyNames(this).filter((function(t) {
                return "content" != t && "appearanceStreamContent" != t && "scope" != t && "objId" != t && "_" != t.substring(0, 1)
            }
            ));
            for (var r in e)
                if (!1 === Object.getOwnPropertyDescriptor(this, e[r]).configurable) {
                    var n = e[r]
                      , i = this[n];
                    i && (Array.isArray(i) ? t.push({
                        key: n,
                        value: Qt(i, this.objId, this.scope)
                    }) : i instanceof ee ? (i.scope = this.scope,
                    t.push({
                        key: n,
                        value: i.objId + " 0 R"
                    })) : "function" != typeof i && t.push({
                        key: n,
                        value: i
                    }))
                }
            return t
        }
        ;
        var re = function() {
            ee.call(this),
            Object.defineProperty(this, "Type", {
                value: "/XObject",
                configurable: !1,
                writable: !0
            }),
            Object.defineProperty(this, "Subtype", {
                value: "/Form",
                configurable: !1,
                writable: !0
            }),
            Object.defineProperty(this, "FormType", {
                value: 1,
                configurable: !1,
                writable: !0
            });
            var t, e = [];
            Object.defineProperty(this, "BBox", {
                configurable: !1,
                get: function() {
                    return e
                },
                set: function(t) {
                    e = t
                }
            }),
            Object.defineProperty(this, "Resources", {
                value: "2 0 R",
                configurable: !1,
                writable: !0
            }),
            Object.defineProperty(this, "stream", {
                enumerable: !1,
                configurable: !0,
                set: function(e) {
                    t = e.trim()
                },
                get: function() {
                    return t || null
                }
            })
        };
        Bt(re, ee);
        var ne = function() {
            ee.call(this);
            var t, e = [];
            Object.defineProperty(this, "Kids", {
                enumerable: !1,
                configurable: !0,
                get: function() {
                    return e.length > 0 ? e : void 0
                }
            }),
            Object.defineProperty(this, "Fields", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    return e
                }
            }),
            Object.defineProperty(this, "DA", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    if (t) {
                        var e = function(t) {
                            return t
                        };
                        return this.scope && (e = this.scope.internal.getEncryptor(this.objId)),
                        "(" + Ot(e(t)) + ")"
                    }
                },
                set: function(e) {
                    t = e
                }
            })
        };
        Bt(ne, ee);
        var ie = function t() {
            ee.call(this);
            var e = 4;
            Object.defineProperty(this, "F", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    return e
                },
                set: function(t) {
                    if (isNaN(t))
                        throw new Error('Invalid value "' + t + '" for attribute F supplied.');
                    e = t
                }
            }),
            Object.defineProperty(this, "showWhenPrinted", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(e, 3))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.F = Ht(e, 3) : this.F = Vt(e, 3)
                }
            });
            var r = 0;
            Object.defineProperty(this, "Ff", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    return r
                },
                set: function(t) {
                    if (isNaN(t))
                        throw new Error('Invalid value "' + t + '" for attribute Ff supplied.');
                    r = t
                }
            });
            var n = [];
            Object.defineProperty(this, "Rect", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    if (0 !== n.length)
                        return n
                },
                set: function(t) {
                    n = void 0 !== t ? t : []
                }
            }),
            Object.defineProperty(this, "x", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return !n || isNaN(n[0]) ? 0 : n[0]
                },
                set: function(t) {
                    n[0] = t
                }
            }),
            Object.defineProperty(this, "y", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return !n || isNaN(n[1]) ? 0 : n[1]
                },
                set: function(t) {
                    n[1] = t
                }
            }),
            Object.defineProperty(this, "width", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return !n || isNaN(n[2]) ? 0 : n[2]
                },
                set: function(t) {
                    n[2] = t
                }
            }),
            Object.defineProperty(this, "height", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return !n || isNaN(n[3]) ? 0 : n[3]
                },
                set: function(t) {
                    n[3] = t
                }
            });
            var i = "";
            Object.defineProperty(this, "FT", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return i
                },
                set: function(t) {
                    switch (t) {
                    case "/Btn":
                    case "/Tx":
                    case "/Ch":
                    case "/Sig":
                        i = t;
                        break;
                    default:
                        throw new Error('Invalid value "' + t + '" for attribute FT supplied.')
                    }
                }
            });
            var a = null;
            Object.defineProperty(this, "T", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    if (!a || a.length < 1) {
                        if (this instanceof fe)
                            return;
                        a = "FieldObject" + t.FieldNum++
                    }
                    var e = function(t) {
                        return t
                    };
                    return this.scope && (e = this.scope.internal.getEncryptor(this.objId)),
                    "(" + Ot(e(a)) + ")"
                },
                set: function(t) {
                    a = t.toString()
                }
            }),
            Object.defineProperty(this, "fieldName", {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return a
                },
                set: function(t) {
                    a = t
                }
            });
            var o = "helvetica";
            Object.defineProperty(this, "fontName", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return o
                },
                set: function(t) {
                    o = t
                }
            });
            var s = "normal";
            Object.defineProperty(this, "fontStyle", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return s
                },
                set: function(t) {
                    s = t
                }
            });
            var l = 0;
            Object.defineProperty(this, "fontSize", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return l
                },
                set: function(t) {
                    l = t
                }
            });
            var u = void 0;
            Object.defineProperty(this, "maxFontSize", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return void 0 === u ? 50 / jt : u
                },
                set: function(t) {
                    u = t
                }
            });
            var c = "black";
            Object.defineProperty(this, "color", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return c
                },
                set: function(t) {
                    c = t
                }
            });
            var h = "/F1 0 Tf 0 g";
            Object.defineProperty(this, "DA", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    if (!(!h || this instanceof fe || this instanceof pe))
                        return te(h, this.objId, this.scope)
                },
                set: function(t) {
                    t = t.toString(),
                    h = t
                }
            });
            var f = null;
            Object.defineProperty(this, "DV", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    if (f)
                        return this instanceof ue == 0 ? te(f, this.objId, this.scope) : f
                },
                set: function(t) {
                    t = t.toString(),
                    f = this instanceof ue == 0 ? "(" === t.substr(0, 1) ? Dt(t.substr(1, t.length - 2)) : Dt(t) : t
                }
            }),
            Object.defineProperty(this, "defaultValue", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return this instanceof ue == 1 ? Dt(f.substr(1, f.length - 1)) : f
                },
                set: function(t) {
                    t = t.toString(),
                    f = this instanceof ue == 1 ? "/" + t : t
                }
            });
            var d = null;
            Object.defineProperty(this, "_V", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    if (d)
                        return d
                },
                set: function(t) {
                    this.V = t
                }
            }),
            Object.defineProperty(this, "V", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    if (d)
                        return this instanceof ue == 0 ? te(d, this.objId, this.scope) : d
                },
                set: function(t) {
                    t = t.toString(),
                    d = this instanceof ue == 0 ? "(" === t.substr(0, 1) ? Dt(t.substr(1, t.length - 2)) : Dt(t) : t
                }
            }),
            Object.defineProperty(this, "value", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return this instanceof ue == 1 ? Dt(d.substr(1, d.length - 1)) : d
                },
                set: function(t) {
                    t = t.toString(),
                    d = this instanceof ue == 1 ? "/" + t : t
                }
            }),
            Object.defineProperty(this, "hasAnnotation", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return this.Rect
                }
            }),
            Object.defineProperty(this, "Type", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return this.hasAnnotation ? "/Annot" : null
                }
            }),
            Object.defineProperty(this, "Subtype", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return this.hasAnnotation ? "/Widget" : null
                }
            });
            var p, g = !1;
            Object.defineProperty(this, "hasAppearanceStream", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return g
                },
                set: function(t) {
                    t = Boolean(t),
                    g = t
                }
            }),
            Object.defineProperty(this, "page", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    if (p)
                        return p
                },
                set: function(t) {
                    p = t
                }
            }),
            Object.defineProperty(this, "readOnly", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 1))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Ht(this.Ff, 1) : this.Ff = Vt(this.Ff, 1)
                }
            }),
            Object.defineProperty(this, "required", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 2))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Ht(this.Ff, 2) : this.Ff = Vt(this.Ff, 2)
                }
            }),
            Object.defineProperty(this, "noExport", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 3))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Ht(this.Ff, 3) : this.Ff = Vt(this.Ff, 3)
                }
            });
            var m = null;
            Object.defineProperty(this, "Q", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    if (null !== m)
                        return m
                },
                set: function(t) {
                    if (-1 === [0, 1, 2].indexOf(t))
                        throw new Error('Invalid value "' + t + '" for attribute Q supplied.');
                    m = t
                }
            }),
            Object.defineProperty(this, "textAlign", {
                get: function() {
                    var t;
                    switch (m) {
                    case 0:
                    default:
                        t = "left";
                        break;
                    case 1:
                        t = "center";
                        break;
                    case 2:
                        t = "right"
                    }
                    return t
                },
                configurable: !0,
                enumerable: !0,
                set: function(t) {
                    switch (t) {
                    case "right":
                    case 2:
                        m = 2;
                        break;
                    case "center":
                    case 1:
                        m = 1;
                        break;
                    default:
                        m = 0
                    }
                }
            })
        };
        Bt(ie, ee);
        var ae = function() {
            ie.call(this),
            this.FT = "/Ch",
            this.V = "()",
            this.fontName = "zapfdingbats";
            var t = 0;
            Object.defineProperty(this, "TI", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return t
                },
                set: function(e) {
                    t = e
                }
            }),
            Object.defineProperty(this, "topIndex", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return t
                },
                set: function(e) {
                    t = e
                }
            });
            var e = [];
            Object.defineProperty(this, "Opt", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return Qt(e, this.objId, this.scope)
                },
                set: function(t) {
                    var r, n;
                    n = [],
                    "string" == typeof (r = t) && (n = function(t, e, r) {
                        r || (r = 1);
                        for (var n, i = []; n = e.exec(t); )
                            i.push(n[r]);
                        return i
                    }(r, /\((.*?)\)/g)),
                    e = n
                }
            }),
            this.getOptions = function() {
                return e
            }
            ,
            this.setOptions = function(t) {
                e = t,
                this.sort && e.sort()
            }
            ,
            this.addOption = function(t) {
                t = (t = t || "").toString(),
                e.push(t),
                this.sort && e.sort()
            }
            ,
            this.removeOption = function(t, r) {
                for (r = r || !1,
                t = (t = t || "").toString(); -1 !== e.indexOf(t) && (e.splice(e.indexOf(t), 1),
                !1 !== r); )
                    ;
            }
            ,
            Object.defineProperty(this, "combo", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 18))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Ht(this.Ff, 18) : this.Ff = Vt(this.Ff, 18)
                }
            }),
            Object.defineProperty(this, "edit", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 19))
                },
                set: function(t) {
                    !0 === this.combo && (!0 === Boolean(t) ? this.Ff = Ht(this.Ff, 19) : this.Ff = Vt(this.Ff, 19))
                }
            }),
            Object.defineProperty(this, "sort", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 20))
                },
                set: function(t) {
                    !0 === Boolean(t) ? (this.Ff = Ht(this.Ff, 20),
                    e.sort()) : this.Ff = Vt(this.Ff, 20)
                }
            }),
            Object.defineProperty(this, "multiSelect", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 22))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Ht(this.Ff, 22) : this.Ff = Vt(this.Ff, 22)
                }
            }),
            Object.defineProperty(this, "doNotSpellCheck", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 23))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Ht(this.Ff, 23) : this.Ff = Vt(this.Ff, 23)
                }
            }),
            Object.defineProperty(this, "commitOnSelChange", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 27))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Ht(this.Ff, 27) : this.Ff = Vt(this.Ff, 27)
                }
            }),
            this.hasAppearanceStream = !1
        };
        Bt(ae, ie);
        var oe = function() {
            ae.call(this),
            this.fontName = "helvetica",
            this.combo = !1
        };
        Bt(oe, ae);
        var se = function() {
            oe.call(this),
            this.combo = !0
        };
        Bt(se, oe);
        var le = function() {
            se.call(this),
            this.edit = !0
        };
        Bt(le, se);
        var ue = function() {
            ie.call(this),
            this.FT = "/Btn",
            Object.defineProperty(this, "noToggleToOff", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 15))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Ht(this.Ff, 15) : this.Ff = Vt(this.Ff, 15)
                }
            }),
            Object.defineProperty(this, "radio", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 16))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Ht(this.Ff, 16) : this.Ff = Vt(this.Ff, 16)
                }
            }),
            Object.defineProperty(this, "pushButton", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 17))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Ht(this.Ff, 17) : this.Ff = Vt(this.Ff, 17)
                }
            }),
            Object.defineProperty(this, "radioIsUnison", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 26))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Ht(this.Ff, 26) : this.Ff = Vt(this.Ff, 26)
                }
            });
            var t, e = {};
            Object.defineProperty(this, "MK", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    var t = function(t) {
                        return t
                    };
                    if (this.scope && (t = this.scope.internal.getEncryptor(this.objId)),
                    0 !== Object.keys(e).length) {
                        var r, n = [];
                        for (r in n.push("<<"),
                        e)
                            n.push("/" + r + " (" + Ot(t(e[r])) + ")");
                        return n.push(">>"),
                        n.join("\n")
                    }
                },
                set: function(t) {
                    "object" === n(t) && (e = t)
                }
            }),
            Object.defineProperty(this, "caption", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return e.CA || ""
                },
                set: function(t) {
                    "string" == typeof t && (e.CA = t)
                }
            }),
            Object.defineProperty(this, "AS", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    return t
                },
                set: function(e) {
                    t = e
                }
            }),
            Object.defineProperty(this, "appearanceState", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return t.substr(1, t.length - 1)
                },
                set: function(e) {
                    t = "/" + e
                }
            })
        };
        Bt(ue, ie);
        var ce = function() {
            ue.call(this),
            this.pushButton = !0
        };
        Bt(ce, ue);
        var he = function() {
            ue.call(this),
            this.radio = !0,
            this.pushButton = !1;
            var t = [];
            Object.defineProperty(this, "Kids", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return t
                },
                set: function(e) {
                    t = void 0 !== e ? e : []
                }
            })
        };
        Bt(he, ue);
        var fe = function() {
            var t, e;
            ie.call(this),
            Object.defineProperty(this, "Parent", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    return t
                },
                set: function(e) {
                    t = e
                }
            }),
            Object.defineProperty(this, "optionName", {
                enumerable: !1,
                configurable: !0,
                get: function() {
                    return e
                },
                set: function(t) {
                    e = t
                }
            });
            var r, i = {};
            Object.defineProperty(this, "MK", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    var t = function(t) {
                        return t
                    };
                    this.scope && (t = this.scope.internal.getEncryptor(this.objId));
                    var e, r = [];
                    for (e in r.push("<<"),
                    i)
                        r.push("/" + e + " (" + Ot(t(i[e])) + ")");
                    return r.push(">>"),
                    r.join("\n")
                },
                set: function(t) {
                    "object" === n(t) && (i = t)
                }
            }),
            Object.defineProperty(this, "caption", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return i.CA || ""
                },
                set: function(t) {
                    "string" == typeof t && (i.CA = t)
                }
            }),
            Object.defineProperty(this, "AS", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    return r
                },
                set: function(t) {
                    r = t
                }
            }),
            Object.defineProperty(this, "appearanceState", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return r.substr(1, r.length - 1)
                },
                set: function(t) {
                    r = "/" + t
                }
            }),
            this.caption = "l",
            this.appearanceState = "Off",
            this._AppearanceType = me.RadioButton.Circle,
            this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName)
        };
        Bt(fe, ie),
        he.prototype.setAppearance = function(t) {
            if (!("createAppearanceStream"in t) || !("getCA"in t))
                throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
            for (var e in this.Kids)
                if (this.Kids.hasOwnProperty(e)) {
                    var r = this.Kids[e];
                    r.appearanceStreamContent = t.createAppearanceStream(r.optionName),
                    r.caption = t.getCA()
                }
        }
        ,
        he.prototype.createOption = function(t) {
            var e = new fe;
            return e.Parent = this,
            e.optionName = t,
            this.Kids.push(e),
            ve.call(this.scope, e),
            e
        }
        ;
        var de = function() {
            ue.call(this),
            this.fontName = "zapfdingbats",
            this.caption = "3",
            this.appearanceState = "On",
            this.value = "On",
            this.textAlign = "center",
            this.appearanceStreamContent = me.CheckBox.createAppearanceStream()
        };
        Bt(de, ue);
        var pe = function() {
            ie.call(this),
            this.FT = "/Tx",
            Object.defineProperty(this, "multiline", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 13))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Ht(this.Ff, 13) : this.Ff = Vt(this.Ff, 13)
                }
            }),
            Object.defineProperty(this, "fileSelect", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 21))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Ht(this.Ff, 21) : this.Ff = Vt(this.Ff, 21)
                }
            }),
            Object.defineProperty(this, "doNotSpellCheck", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 23))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Ht(this.Ff, 23) : this.Ff = Vt(this.Ff, 23)
                }
            }),
            Object.defineProperty(this, "doNotScroll", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 24))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Ht(this.Ff, 24) : this.Ff = Vt(this.Ff, 24)
                }
            }),
            Object.defineProperty(this, "comb", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 25))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Ht(this.Ff, 25) : this.Ff = Vt(this.Ff, 25)
                }
            }),
            Object.defineProperty(this, "richText", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 26))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Ht(this.Ff, 26) : this.Ff = Vt(this.Ff, 26)
                }
            });
            var t = null;
            Object.defineProperty(this, "MaxLen", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return t
                },
                set: function(e) {
                    t = e
                }
            }),
            Object.defineProperty(this, "maxLength", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return t
                },
                set: function(e) {
                    Number.isInteger(e) && (t = e)
                }
            }),
            Object.defineProperty(this, "hasAppearanceStream", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return this.V || this.DV
                }
            })
        };
        Bt(pe, ie);
        var ge = function() {
            pe.call(this),
            Object.defineProperty(this, "password", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return Boolean(Wt(this.Ff, 14))
                },
                set: function(t) {
                    !0 === Boolean(t) ? this.Ff = Ht(this.Ff, 14) : this.Ff = Vt(this.Ff, 14)
                }
            }),
            this.password = !0
        };
        Bt(ge, pe);
        var me = {
            CheckBox: {
                createAppearanceStream: function() {
                    return {
                        N: {
                            On: me.CheckBox.YesNormal
                        },
                        D: {
                            On: me.CheckBox.YesPushDown,
                            Off: me.CheckBox.OffPushDown
                        }
                    }
                },
                YesPushDown: function(t) {
                    var e = Rt(t);
                    e.scope = t.scope;
                    var r = []
                      , n = t.scope.internal.getFont(t.fontName, t.fontStyle).id
                      , i = t.scope.__private__.encodeColorString(t.color)
                      , a = Yt(t, t.caption);
                    return r.push("0.749023 g"),
                    r.push("0 0 " + Tt(me.internal.getWidth(t)) + " " + Tt(me.internal.getHeight(t)) + " re"),
                    r.push("f"),
                    r.push("BMC"),
                    r.push("q"),
                    r.push("0 0 1 rg"),
                    r.push("/" + n + " " + Tt(a.fontSize) + " Tf " + i),
                    r.push("BT"),
                    r.push(a.text),
                    r.push("ET"),
                    r.push("Q"),
                    r.push("EMC"),
                    e.stream = r.join("\n"),
                    e
                },
                YesNormal: function(t) {
                    var e = Rt(t);
                    e.scope = t.scope;
                    var r = t.scope.internal.getFont(t.fontName, t.fontStyle).id
                      , n = t.scope.__private__.encodeColorString(t.color)
                      , i = []
                      , a = me.internal.getHeight(t)
                      , o = me.internal.getWidth(t)
                      , s = Yt(t, t.caption);
                    return i.push("1 g"),
                    i.push("0 0 " + Tt(o) + " " + Tt(a) + " re"),
                    i.push("f"),
                    i.push("q"),
                    i.push("0 0 1 rg"),
                    i.push("0 0 " + Tt(o - 1) + " " + Tt(a - 1) + " re"),
                    i.push("W"),
                    i.push("n"),
                    i.push("0 g"),
                    i.push("BT"),
                    i.push("/" + r + " " + Tt(s.fontSize) + " Tf " + n),
                    i.push(s.text),
                    i.push("ET"),
                    i.push("Q"),
                    e.stream = i.join("\n"),
                    e
                },
                OffPushDown: function(t) {
                    var e = Rt(t);
                    e.scope = t.scope;
                    var r = [];
                    return r.push("0.749023 g"),
                    r.push("0 0 " + Tt(me.internal.getWidth(t)) + " " + Tt(me.internal.getHeight(t)) + " re"),
                    r.push("f"),
                    e.stream = r.join("\n"),
                    e
                }
            },
            RadioButton: {
                Circle: {
                    createAppearanceStream: function(t) {
                        var e = {
                            D: {
                                Off: me.RadioButton.Circle.OffPushDown
                            },
                            N: {}
                        };
                        return e.N[t] = me.RadioButton.Circle.YesNormal,
                        e.D[t] = me.RadioButton.Circle.YesPushDown,
                        e
                    },
                    getCA: function() {
                        return "l"
                    },
                    YesNormal: function(t) {
                        var e = Rt(t);
                        e.scope = t.scope;
                        var r = []
                          , n = me.internal.getWidth(t) <= me.internal.getHeight(t) ? me.internal.getWidth(t) / 4 : me.internal.getHeight(t) / 4;
                        n = Number((.9 * n).toFixed(5));
                        var i = me.internal.Bezier_C
                          , a = Number((n * i).toFixed(5));
                        return r.push("q"),
                        r.push("1 0 0 1 " + Mt(me.internal.getWidth(t) / 2) + " " + Mt(me.internal.getHeight(t) / 2) + " cm"),
                        r.push(n + " 0 m"),
                        r.push(n + " " + a + " " + a + " " + n + " 0 " + n + " c"),
                        r.push("-" + a + " " + n + " -" + n + " " + a + " -" + n + " 0 c"),
                        r.push("-" + n + " -" + a + " -" + a + " -" + n + " 0 -" + n + " c"),
                        r.push(a + " -" + n + " " + n + " -" + a + " " + n + " 0 c"),
                        r.push("f"),
                        r.push("Q"),
                        e.stream = r.join("\n"),
                        e
                    },
                    YesPushDown: function(t) {
                        var e = Rt(t);
                        e.scope = t.scope;
                        var r = []
                          , n = me.internal.getWidth(t) <= me.internal.getHeight(t) ? me.internal.getWidth(t) / 4 : me.internal.getHeight(t) / 4;
                        n = Number((.9 * n).toFixed(5));
                        var i = Number((2 * n).toFixed(5))
                          , a = Number((i * me.internal.Bezier_C).toFixed(5))
                          , o = Number((n * me.internal.Bezier_C).toFixed(5));
                        return r.push("0.749023 g"),
                        r.push("q"),
                        r.push("1 0 0 1 " + Mt(me.internal.getWidth(t) / 2) + " " + Mt(me.internal.getHeight(t) / 2) + " cm"),
                        r.push(i + " 0 m"),
                        r.push(i + " " + a + " " + a + " " + i + " 0 " + i + " c"),
                        r.push("-" + a + " " + i + " -" + i + " " + a + " -" + i + " 0 c"),
                        r.push("-" + i + " -" + a + " -" + a + " -" + i + " 0 -" + i + " c"),
                        r.push(a + " -" + i + " " + i + " -" + a + " " + i + " 0 c"),
                        r.push("f"),
                        r.push("Q"),
                        r.push("0 g"),
                        r.push("q"),
                        r.push("1 0 0 1 " + Mt(me.internal.getWidth(t) / 2) + " " + Mt(me.internal.getHeight(t) / 2) + " cm"),
                        r.push(n + " 0 m"),
                        r.push(n + " " + o + " " + o + " " + n + " 0 " + n + " c"),
                        r.push("-" + o + " " + n + " -" + n + " " + o + " -" + n + " 0 c"),
                        r.push("-" + n + " -" + o + " -" + o + " -" + n + " 0 -" + n + " c"),
                        r.push(o + " -" + n + " " + n + " -" + o + " " + n + " 0 c"),
                        r.push("f"),
                        r.push("Q"),
                        e.stream = r.join("\n"),
                        e
                    },
                    OffPushDown: function(t) {
                        var e = Rt(t);
                        e.scope = t.scope;
                        var r = []
                          , n = me.internal.getWidth(t) <= me.internal.getHeight(t) ? me.internal.getWidth(t) / 4 : me.internal.getHeight(t) / 4;
                        n = Number((.9 * n).toFixed(5));
                        var i = Number((2 * n).toFixed(5))
                          , a = Number((i * me.internal.Bezier_C).toFixed(5));
                        return r.push("0.749023 g"),
                        r.push("q"),
                        r.push("1 0 0 1 " + Mt(me.internal.getWidth(t) / 2) + " " + Mt(me.internal.getHeight(t) / 2) + " cm"),
                        r.push(i + " 0 m"),
                        r.push(i + " " + a + " " + a + " " + i + " 0 " + i + " c"),
                        r.push("-" + a + " " + i + " -" + i + " " + a + " -" + i + " 0 c"),
                        r.push("-" + i + " -" + a + " -" + a + " -" + i + " 0 -" + i + " c"),
                        r.push(a + " -" + i + " " + i + " -" + a + " " + i + " 0 c"),
                        r.push("f"),
                        r.push("Q"),
                        e.stream = r.join("\n"),
                        e
                    }
                },
                Cross: {
                    createAppearanceStream: function(t) {
                        var e = {
                            D: {
                                Off: me.RadioButton.Cross.OffPushDown
                            },
                            N: {}
                        };
                        return e.N[t] = me.RadioButton.Cross.YesNormal,
                        e.D[t] = me.RadioButton.Cross.YesPushDown,
                        e
                    },
                    getCA: function() {
                        return "8"
                    },
                    YesNormal: function(t) {
                        var e = Rt(t);
                        e.scope = t.scope;
                        var r = []
                          , n = me.internal.calculateCross(t);
                        return r.push("q"),
                        r.push("1 1 " + Tt(me.internal.getWidth(t) - 2) + " " + Tt(me.internal.getHeight(t) - 2) + " re"),
                        r.push("W"),
                        r.push("n"),
                        r.push(Tt(n.x1.x) + " " + Tt(n.x1.y) + " m"),
                        r.push(Tt(n.x2.x) + " " + Tt(n.x2.y) + " l"),
                        r.push(Tt(n.x4.x) + " " + Tt(n.x4.y) + " m"),
                        r.push(Tt(n.x3.x) + " " + Tt(n.x3.y) + " l"),
                        r.push("s"),
                        r.push("Q"),
                        e.stream = r.join("\n"),
                        e
                    },
                    YesPushDown: function(t) {
                        var e = Rt(t);
                        e.scope = t.scope;
                        var r = me.internal.calculateCross(t)
                          , n = [];
                        return n.push("0.749023 g"),
                        n.push("0 0 " + Tt(me.internal.getWidth(t)) + " " + Tt(me.internal.getHeight(t)) + " re"),
                        n.push("f"),
                        n.push("q"),
                        n.push("1 1 " + Tt(me.internal.getWidth(t) - 2) + " " + Tt(me.internal.getHeight(t) - 2) + " re"),
                        n.push("W"),
                        n.push("n"),
                        n.push(Tt(r.x1.x) + " " + Tt(r.x1.y) + " m"),
                        n.push(Tt(r.x2.x) + " " + Tt(r.x2.y) + " l"),
                        n.push(Tt(r.x4.x) + " " + Tt(r.x4.y) + " m"),
                        n.push(Tt(r.x3.x) + " " + Tt(r.x3.y) + " l"),
                        n.push("s"),
                        n.push("Q"),
                        e.stream = n.join("\n"),
                        e
                    },
                    OffPushDown: function(t) {
                        var e = Rt(t);
                        e.scope = t.scope;
                        var r = [];
                        return r.push("0.749023 g"),
                        r.push("0 0 " + Tt(me.internal.getWidth(t)) + " " + Tt(me.internal.getHeight(t)) + " re"),
                        r.push("f"),
                        e.stream = r.join("\n"),
                        e
                    }
                }
            },
            createDefaultAppearanceStream: function(t) {
                var e = t.scope.internal.getFont(t.fontName, t.fontStyle).id
                  , r = t.scope.__private__.encodeColorString(t.color);
                return "/" + e + " " + t.fontSize + " Tf " + r
            }
        };
        me.internal = {
            Bezier_C: .551915024494,
            calculateCross: function(t) {
                var e = me.internal.getWidth(t)
                  , r = me.internal.getHeight(t)
                  , n = Math.min(e, r);
                return {
                    x1: {
                        x: (e - n) / 2,
                        y: (r - n) / 2 + n
                    },
                    x2: {
                        x: (e - n) / 2 + n,
                        y: (r - n) / 2
                    },
                    x3: {
                        x: (e - n) / 2,
                        y: (r - n) / 2
                    },
                    x4: {
                        x: (e - n) / 2 + n,
                        y: (r - n) / 2 + n
                    }
                }
            }
        },
        me.internal.getWidth = function(t) {
            var e = 0;
            return "object" === n(t) && (e = Et(t.Rect[2])),
            e
        }
        ,
        me.internal.getHeight = function(t) {
            var e = 0;
            return "object" === n(t) && (e = Et(t.Rect[3])),
            e
        }
        ;
        var ve = It.addField = function(t) {
            if (Zt(this, t),
            !(t instanceof ie))
                throw new Error("Invalid argument passed to jsPDF.addField.");
            var e;
            return (e = t).scope.internal.acroformPlugin.printedOut && (e.scope.internal.acroformPlugin.printedOut = !1,
            e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null),
            e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e),
            t.page = t.scope.internal.getCurrentPageInfo().pageNumber,
            this
        }
        ;
        It.AcroFormChoiceField = ae,
        It.AcroFormListBox = oe,
        It.AcroFormComboBox = se,
        It.AcroFormEditBox = le,
        It.AcroFormButton = ue,
        It.AcroFormPushButton = ce,
        It.AcroFormRadioButton = he,
        It.AcroFormCheckBox = de,
        It.AcroFormTextField = pe,
        It.AcroFormPasswordField = ge,
        It.AcroFormAppearance = me,
        It.AcroForm = {
            ChoiceField: ae,
            ListBox: oe,
            ComboBox: se,
            EditBox: le,
            Button: ue,
            PushButton: ce,
            RadioButton: he,
            CheckBox: de,
            TextField: pe,
            PasswordField: ge,
            Appearance: me
        },
        Ft.AcroForm = {
            ChoiceField: ae,
            ListBox: oe,
            ComboBox: se,
            EditBox: le,
            Button: ue,
            PushButton: ce,
            RadioButton: he,
            CheckBox: de,
            TextField: pe,
            PasswordField: ge,
            Appearance: me
        };
        var be, ye, we = Ft.AcroForm;
        function xe(t) {
            return t.reduce((function(t, e, r) {
                return t[e] = r,
                t
            }
            ), {})
        }
        !function(t) {
            t.__addimage__ = {};
            var e = "UNKNOWN"
              , r = {
                PNG: [[137, 80, 78, 71]],
                TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]],
                JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0], [255, 216, 255, 219], [255, 216, 255, 238]],
                JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]],
                GIF87a: [[71, 73, 70, 56, 55, 97]],
                GIF89a: [[71, 73, 70, 56, 57, 97]],
                WEBP: [[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]],
                BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]]
            }
              , i = t.__addimage__.getImageFileTypeByImageData = function(t, n) {
                var i, a, o, s, l, u = e;
                if ("RGBA" === (n = n || e) || void 0 !== t.data && t.data instanceof Uint8ClampedArray && "height"in t && "width"in t)
                    return "RGBA";
                if (N(t))
                    for (l in r)
                        for (o = r[l],
                        i = 0; i < o.length; i += 1) {
                            for (s = !0,
                            a = 0; a < o[i].length; a += 1)
                                if (void 0 !== o[i][a] && o[i][a] !== t[a]) {
                                    s = !1;
                                    break
                                }
                            if (!0 === s) {
                                u = l;
                                break
                            }
                        }
                else
                    for (l in r)
                        for (o = r[l],
                        i = 0; i < o.length; i += 1) {
                            for (s = !0,
                            a = 0; a < o[i].length; a += 1)
                                if (void 0 !== o[i][a] && o[i][a] !== t.charCodeAt(a)) {
                                    s = !1;
                                    break
                                }
                            if (!0 === s) {
                                u = l;
                                break
                            }
                        }
                return u === e && n !== e && (u = n),
                u
            }
              , a = function t(e) {
                for (var r = this.internal.write, n = this.internal.putStream, i = (0,
                this.internal.getFilters)(); -1 !== i.indexOf("FlateEncode"); )
                    i.splice(i.indexOf("FlateEncode"), 1);
                e.objectId = this.internal.newObject();
                var a = [];
                if (a.push({
                    key: "Type",
                    value: "/XObject"
                }),
                a.push({
                    key: "Subtype",
                    value: "/Image"
                }),
                a.push({
                    key: "Width",
                    value: e.width
                }),
                a.push({
                    key: "Height",
                    value: e.height
                }),
                e.colorSpace === v.INDEXED ? a.push({
                    key: "ColorSpace",
                    value: "[/Indexed /DeviceRGB " + (e.palette.length / 3 - 1) + " " + ("sMask"in e && void 0 !== e.sMask ? e.objectId + 2 : e.objectId + 1) + " 0 R]"
                }) : (a.push({
                    key: "ColorSpace",
                    value: "/" + e.colorSpace
                }),
                e.colorSpace === v.DEVICE_CMYK && a.push({
                    key: "Decode",
                    value: "[1 0 1 0 1 0 1 0]"
                })),
                a.push({
                    key: "BitsPerComponent",
                    value: e.bitsPerComponent
                }),
                "decodeParameters"in e && void 0 !== e.decodeParameters && a.push({
                    key: "DecodeParms",
                    value: "<<" + e.decodeParameters + ">>"
                }),
                "transparency"in e && Array.isArray(e.transparency)) {
                    for (var o = "", s = 0, l = e.transparency.length; s < l; s++)
                        o += e.transparency[s] + " " + e.transparency[s] + " ";
                    a.push({
                        key: "Mask",
                        value: "[" + o + "]"
                    })
                }
                void 0 !== e.sMask && a.push({
                    key: "SMask",
                    value: e.objectId + 1 + " 0 R"
                });
                var u = void 0 !== e.filter ? ["/" + e.filter] : void 0;
                if (n({
                    data: e.data,
                    additionalKeyValues: a,
                    alreadyAppliedFilters: u,
                    objectId: e.objectId
                }),
                r("endobj"),
                "sMask"in e && void 0 !== e.sMask) {
                    var c = "/Predictor " + e.predictor + " /Colors 1 /BitsPerComponent " + e.bitsPerComponent + " /Columns " + e.width
                      , h = {
                        width: e.width,
                        height: e.height,
                        colorSpace: "DeviceGray",
                        bitsPerComponent: e.bitsPerComponent,
                        decodeParameters: c,
                        data: e.sMask
                    };
                    "filter"in e && (h.filter = e.filter),
                    t.call(this, h)
                }
                if (e.colorSpace === v.INDEXED) {
                    var f = this.internal.newObject();
                    n({
                        data: L(new Uint8Array(e.palette)),
                        objectId: f
                    }),
                    r("endobj")
                }
            }
              , o = function() {
                var t = this.internal.collections.addImage_images;
                for (var e in t)
                    a.call(this, t[e])
            }
              , s = function() {
                var t, e = this.internal.collections.addImage_images, r = this.internal.write;
                for (var n in e)
                    r("/I" + (t = e[n]).index, t.objectId, "0", "R")
            }
              , l = function() {
                this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {},
                this.internal.events.subscribe("putResources", o),
                this.internal.events.subscribe("putXobjectDict", s))
            }
              , u = function() {
                var t = this.internal.collections.addImage_images;
                return l.call(this),
                t
            }
              , c = function() {
                return Object.keys(this.internal.collections.addImage_images).length
            }
              , h = function(e) {
                return "function" == typeof t["process" + e.toUpperCase()]
            }
              , f = function(t) {
                return "object" === n(t) && 1 === t.nodeType
            }
              , d = function(e, r) {
                if ("IMG" === e.nodeName && e.hasAttribute("src")) {
                    var n = "" + e.getAttribute("src");
                    if (0 === n.indexOf("data:image/"))
                        return nt(unescape(n).split("base64,").pop());
                    var i = t.loadFile(n, !0);
                    if (void 0 !== i)
                        return i
                }
                if ("CANVAS" === e.nodeName) {
                    if (0 === e.width || 0 === e.height)
                        throw new Error("Given canvas must have data. Canvas width: " + e.width + ", height: " + e.height);
                    var a;
                    switch (r) {
                    case "PNG":
                        a = "image/png";
                        break;
                    case "WEBP":
                        a = "image/webp";
                        break;
                    default:
                        a = "image/jpeg"
                    }
                    return nt(e.toDataURL(a, 1).split("base64,").pop())
                }
            }
              , p = function(t) {
                var e = this.internal.collections.addImage_images;
                if (e)
                    for (var r in e)
                        if (t === e[r].alias)
                            return e[r]
            }
              , g = function(t, e, r) {
                return t || e || (t = -96,
                e = -96),
                t < 0 && (t = -1 * r.width * 72 / t / this.internal.scaleFactor),
                e < 0 && (e = -1 * r.height * 72 / e / this.internal.scaleFactor),
                0 === t && (t = e * r.width / r.height),
                0 === e && (e = t * r.height / r.width),
                [t, e]
            }
              , m = function(t, e, r, n, i, a) {
                var o = g.call(this, r, n, i)
                  , s = this.internal.getCoordinateString
                  , l = this.internal.getVerticalCoordinateString
                  , c = u.call(this);
                if (r = o[0],
                n = o[1],
                c[i.index] = i,
                a) {
                    a *= Math.PI / 180;
                    var h = Math.cos(a)
                      , f = Math.sin(a)
                      , d = function(t) {
                        return t.toFixed(4)
                    }
                      , p = [d(h), d(f), d(-1 * f), d(h), 0, 0, "cm"]
                }
                this.internal.write("q"),
                a ? (this.internal.write([1, "0", "0", 1, s(t), l(e + n), "cm"].join(" ")),
                this.internal.write(p.join(" ")),
                this.internal.write([s(r), "0", "0", s(n), "0", "0", "cm"].join(" "))) : this.internal.write([s(r), "0", "0", s(n), s(t), l(e + n), "cm"].join(" ")),
                this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")),
                this.internal.write("/I" + i.index + " Do"),
                this.internal.write("Q")
            }
              , v = t.color_spaces = {
                DEVICE_RGB: "DeviceRGB",
                DEVICE_GRAY: "DeviceGray",
                DEVICE_CMYK: "DeviceCMYK",
                CAL_GREY: "CalGray",
                CAL_RGB: "CalRGB",
                LAB: "Lab",
                ICC_BASED: "ICCBased",
                INDEXED: "Indexed",
                PATTERN: "Pattern",
                SEPARATION: "Separation",
                DEVICE_N: "DeviceN"
            };
            t.decode = {
                DCT_DECODE: "DCTDecode",
                FLATE_DECODE: "FlateDecode",
                LZW_DECODE: "LZWDecode",
                JPX_DECODE: "JPXDecode",
                JBIG2_DECODE: "JBIG2Decode",
                ASCII85_DECODE: "ASCII85Decode",
                ASCII_HEX_DECODE: "ASCIIHexDecode",
                RUN_LENGTH_DECODE: "RunLengthDecode",
                CCITT_FAX_DECODE: "CCITTFaxDecode"
            };
            var b = t.image_compression = {
                NONE: "NONE",
                FAST: "FAST",
                MEDIUM: "MEDIUM",
                SLOW: "SLOW"
            }
              , y = t.__addimage__.sHashCode = function(t) {
                var e, r, n = 0;
                if ("string" == typeof t)
                    for (r = t.length,
                    e = 0; e < r; e++)
                        n = (n << 5) - n + t.charCodeAt(e),
                        n |= 0;
                else if (N(t))
                    for (r = t.byteLength / 2,
                    e = 0; e < r; e++)
                        n = (n << 5) - n + t[e],
                        n |= 0;
                return n
            }
              , w = t.__addimage__.validateStringAsBase64 = function(t) {
                (t = t || "").toString().trim();
                var e = !0;
                return 0 === t.length && (e = !1),
                t.length % 4 != 0 && (e = !1),
                !1 === /^[A-Za-z0-9+/]+$/.test(t.substr(0, t.length - 2)) && (e = !1),
                !1 === /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(t.substr(-2)) && (e = !1),
                e
            }
              , x = t.__addimage__.extractImageFromDataUrl = function(t) {
                var e = (t = t || "").split("base64,")
                  , r = null;
                if (2 === e.length) {
                    var n = /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(e[0]);
                    Array.isArray(n) && (r = {
                        mimeType: n[1],
                        charset: n[2],
                        data: e[1]
                    })
                }
                return r
            }
              , _ = t.__addimage__.supportsArrayBuffer = function() {
                return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array
            }
            ;
            t.__addimage__.isArrayBuffer = function(t) {
                return _() && t instanceof ArrayBuffer
            }
            ;
            var N = t.__addimage__.isArrayBufferView = function(t) {
                return _() && "undefined" != typeof Uint32Array && (t instanceof Int8Array || t instanceof Uint8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array)
            }
              , A = t.__addimage__.binaryStringToUint8Array = function(t) {
                for (var e = t.length, r = new Uint8Array(e), n = 0; n < e; n++)
                    r[n] = t.charCodeAt(n);
                return r
            }
              , L = t.__addimage__.arrayBufferToBinaryString = function(t) {
                for (var e = "", r = N(t) ? t : new Uint8Array(t), n = 0; n < r.length; n += 8192)
                    e += String.fromCharCode.apply(null, r.subarray(n, n + 8192));
                return e
            }
            ;
            t.addImage = function() {
                var t, r, i, a, o, s, u, c, h;
                if ("number" == typeof arguments[1] ? (r = e,
                i = arguments[1],
                a = arguments[2],
                o = arguments[3],
                s = arguments[4],
                u = arguments[5],
                c = arguments[6],
                h = arguments[7]) : (r = arguments[1],
                i = arguments[2],
                a = arguments[3],
                o = arguments[4],
                s = arguments[5],
                u = arguments[6],
                c = arguments[7],
                h = arguments[8]),
                "object" === n(t = arguments[0]) && !f(t) && "imageData"in t) {
                    var d = t;
                    t = d.imageData,
                    r = d.format || r || e,
                    i = d.x || i || 0,
                    a = d.y || a || 0,
                    o = d.w || d.width || o,
                    s = d.h || d.height || s,
                    u = d.alias || u,
                    c = d.compression || c,
                    h = d.rotation || d.angle || h
                }
                var p = this.internal.getFilters();
                if (void 0 === c && -1 !== p.indexOf("FlateEncode") && (c = "SLOW"),
                isNaN(i) || isNaN(a))
                    throw new Error("Invalid coordinates passed to jsPDF.addImage");
                l.call(this);
                var g = S.call(this, t, r, u, c);
                return m.call(this, i, a, o, s, g, h),
                this
            }
            ;
            var S = function(r, n, a, o) {
                var s, l, u;
                if ("string" == typeof r && i(r) === e) {
                    r = unescape(r);
                    var g = P(r, !1);
                    ("" !== g || void 0 !== (g = t.loadFile(r, !0))) && (r = g)
                }
                if (f(r) && (r = d(r, n)),
                n = i(r, n),
                !h(n))
                    throw new Error("addImage does not support files of type '" + n + "', please ensure that a plugin for '" + n + "' support is added.");
                if ((null == (u = a) || 0 === u.length) && (a = function(t) {
                    return "string" == typeof t || N(t) ? y(t) : N(t.data) ? y(t.data) : null
                }(r)),
                (s = p.call(this, a)) || (_() && (r instanceof Uint8Array || "RGBA" === n || (l = r,
                r = A(r))),
                s = this["process" + n.toUpperCase()](r, c.call(this), a, function(e) {
                    return e && "string" == typeof e && (e = e.toUpperCase()),
                    e in t.image_compression ? e : b.NONE
                }(o), l)),
                !s)
                    throw new Error("An unknown error occurred whilst processing the image.");
                return s
            }
              , P = t.__addimage__.convertBase64ToBinaryString = function(t, e) {
                var r;
                e = "boolean" != typeof e || e;
                var n, i = "";
                if ("string" == typeof t) {
                    n = null !== (r = x(t)) ? r.data : t;
                    try {
                        i = nt(n)
                    } catch (t) {
                        if (e)
                            throw w(n) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + t.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")
                    }
                }
                return i
            }
            ;
            t.getImageProperties = function(r) {
                var n, a, o = "";
                if (f(r) && (r = d(r)),
                "string" == typeof r && i(r) === e && ("" === (o = P(r, !1)) && (o = t.loadFile(r) || ""),
                r = o),
                a = i(r),
                !h(a))
                    throw new Error("addImage does not support files of type '" + a + "', please ensure that a plugin for '" + a + "' support is added.");
                if (!_() || r instanceof Uint8Array || (r = A(r)),
                !(n = this["process" + a.toUpperCase()](r)))
                    throw new Error("An unknown error occurred whilst processing the image");
                return n.fileType = a,
                n
            }
        }(Ft.API),
        be = Ft.API,
        ye = function(t) {
            if (void 0 !== t && "" != t)
                return !0
        }
        ,
        Ft.API.events.push(["addPage", function(t) {
            this.internal.getPageInfo(t.pageNumber).pageContext.annotations = []
        }
        ]),
        be.events.push(["putPage", function(t) {
            for (var e, r, n, i = this.internal.getCoordinateString, a = this.internal.getVerticalCoordinateString, o = this.internal.getPageInfoByObjId(t.objId), s = t.pageContext.annotations, l = !1, u = 0; u < s.length && !l; u++)
                switch ((e = s[u]).type) {
                case "link":
                    (ye(e.options.url) || ye(e.options.pageNumber)) && (l = !0);
                    break;
                case "reference":
                case "text":
                case "freetext":
                    l = !0
                }
            if (0 != l) {
                this.internal.write("/Annots [");
                for (var c = 0; c < s.length; c++) {
                    e = s[c];
                    var h = this.internal.pdfEscape
                      , f = this.internal.getEncryptor(t.objId);
                    switch (e.type) {
                    case "reference":
                        this.internal.write(" " + e.object.objId + " 0 R ");
                        break;
                    case "text":
                        var d = this.internal.newAdditionalObject()
                          , p = this.internal.newAdditionalObject()
                          , g = this.internal.getEncryptor(d.objId)
                          , m = e.title || "Note";
                        n = "<</Type /Annot /Subtype /Text " + (r = "/Rect [" + i(e.bounds.x) + " " + a(e.bounds.y + e.bounds.h) + " " + i(e.bounds.x + e.bounds.w) + " " + a(e.bounds.y) + "] ") + "/Contents (" + h(g(e.contents)) + ")",
                        n += " /Popup " + p.objId + " 0 R",
                        n += " /P " + o.objId + " 0 R",
                        n += " /T (" + h(g(m)) + ") >>",
                        d.content = n;
                        var v = d.objId + " 0 R";
                        n = "<</Type /Annot /Subtype /Popup " + (r = "/Rect [" + i(e.bounds.x + 30) + " " + a(e.bounds.y + e.bounds.h) + " " + i(e.bounds.x + e.bounds.w + 30) + " " + a(e.bounds.y) + "] ") + " /Parent " + v,
                        e.open && (n += " /Open true"),
                        n += " >>",
                        p.content = n,
                        this.internal.write(d.objId, "0 R", p.objId, "0 R");
                        break;
                    case "freetext":
                        r = "/Rect [" + i(e.bounds.x) + " " + a(e.bounds.y) + " " + i(e.bounds.x + e.bounds.w) + " " + a(e.bounds.y + e.bounds.h) + "] ";
                        var b = e.color || "#000000";
                        n = "<</Type /Annot /Subtype /FreeText " + r + "/Contents (" + h(f(e.contents)) + ")",
                        n += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + b + ")",
                        n += " /Border [0 0 0]",
                        n += " >>",
                        this.internal.write(n);
                        break;
                    case "link":
                        if (e.options.name) {
                            var y = this.annotations._nameMap[e.options.name];
                            e.options.pageNumber = y.page,
                            e.options.top = y.y
                        } else
                            e.options.top || (e.options.top = 0);
                        if (r = "/Rect [" + e.finalBounds.x + " " + e.finalBounds.y + " " + e.finalBounds.w + " " + e.finalBounds.h + "] ",
                        n = "",
                        e.options.url)
                            n = "<</Type /Annot /Subtype /Link " + r + "/Border [0 0 0] /A <</S /URI /URI (" + h(f(e.options.url)) + ") >>";
                        else if (e.options.pageNumber)
                            switch (n = "<</Type /Annot /Subtype /Link " + r + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(e.options.pageNumber).objId + " 0 R",
                            e.options.magFactor = e.options.magFactor || "XYZ",
                            e.options.magFactor) {
                            case "Fit":
                                n += " /Fit]";
                                break;
                            case "FitH":
                                n += " /FitH " + e.options.top + "]";
                                break;
                            case "FitV":
                                e.options.left = e.options.left || 0,
                                n += " /FitV " + e.options.left + "]";
                                break;
                            default:
                                var w = a(e.options.top);
                                e.options.left = e.options.left || 0,
                                void 0 === e.options.zoom && (e.options.zoom = 0),
                                n += " /XYZ " + e.options.left + " " + w + " " + e.options.zoom + "]"
                            }
                        "" != n && (n += " >>",
                        this.internal.write(n))
                    }
                }
                this.internal.write("]")
            }
        }
        ]),
        be.createAnnotation = function(t) {
            var e = this.internal.getCurrentPageInfo();
            switch (t.type) {
            case "link":
                this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
                break;
            case "text":
            case "freetext":
                e.pageContext.annotations.push(t)
            }
        }
        ,
        be.link = function(t, e, r, n, i) {
            var a = this.internal.getCurrentPageInfo()
              , o = this.internal.getCoordinateString
              , s = this.internal.getVerticalCoordinateString;
            a.pageContext.annotations.push({
                finalBounds: {
                    x: o(t),
                    y: s(e),
                    w: o(t + r),
                    h: s(e + n)
                },
                options: i,
                type: "link"
            })
        }
        ,
        be.textWithLink = function(t, e, r, n) {
            var i, a, o = this.getTextWidth(t), s = this.internal.getLineHeight() / this.internal.scaleFactor;
            if (void 0 !== n.maxWidth) {
                a = n.maxWidth;
                var l = this.splitTextToSize(t, a).length;
                i = Math.ceil(s * l)
            } else
                a = o,
                i = s;
            return this.text(t, e, r, n),
            r += .2 * s,
            "center" === n.align && (e -= o / 2),
            "right" === n.align && (e -= o),
            this.link(e, r - s, a, i, n),
            o
        }
        ,
        be.getTextWidth = function(t) {
            var e = this.internal.getFontSize();
            return this.getStringUnitWidth(t) * e / this.internal.scaleFactor
        }
        ,
        function(t) {
            var e = {
                1569: [65152],
                1570: [65153, 65154],
                1571: [65155, 65156],
                1572: [65157, 65158],
                1573: [65159, 65160],
                1574: [65161, 65162, 65163, 65164],
                1575: [65165, 65166],
                1576: [65167, 65168, 65169, 65170],
                1577: [65171, 65172],
                1578: [65173, 65174, 65175, 65176],
                1579: [65177, 65178, 65179, 65180],
                1580: [65181, 65182, 65183, 65184],
                1581: [65185, 65186, 65187, 65188],
                1582: [65189, 65190, 65191, 65192],
                1583: [65193, 65194],
                1584: [65195, 65196],
                1585: [65197, 65198],
                1586: [65199, 65200],
                1587: [65201, 65202, 65203, 65204],
                1588: [65205, 65206, 65207, 65208],
                1589: [65209, 65210, 65211, 65212],
                1590: [65213, 65214, 65215, 65216],
                1591: [65217, 65218, 65219, 65220],
                1592: [65221, 65222, 65223, 65224],
                1593: [65225, 65226, 65227, 65228],
                1594: [65229, 65230, 65231, 65232],
                1601: [65233, 65234, 65235, 65236],
                1602: [65237, 65238, 65239, 65240],
                1603: [65241, 65242, 65243, 65244],
                1604: [65245, 65246, 65247, 65248],
                1605: [65249, 65250, 65251, 65252],
                1606: [65253, 65254, 65255, 65256],
                1607: [65257, 65258, 65259, 65260],
                1608: [65261, 65262],
                1609: [65263, 65264, 64488, 64489],
                1610: [65265, 65266, 65267, 65268],
                1649: [64336, 64337],
                1655: [64477],
                1657: [64358, 64359, 64360, 64361],
                1658: [64350, 64351, 64352, 64353],
                1659: [64338, 64339, 64340, 64341],
                1662: [64342, 64343, 64344, 64345],
                1663: [64354, 64355, 64356, 64357],
                1664: [64346, 64347, 64348, 64349],
                1667: [64374, 64375, 64376, 64377],
                1668: [64370, 64371, 64372, 64373],
                1670: [64378, 64379, 64380, 64381],
                1671: [64382, 64383, 64384, 64385],
                1672: [64392, 64393],
                1676: [64388, 64389],
                1677: [64386, 64387],
                1678: [64390, 64391],
                1681: [64396, 64397],
                1688: [64394, 64395],
                1700: [64362, 64363, 64364, 64365],
                1702: [64366, 64367, 64368, 64369],
                1705: [64398, 64399, 64400, 64401],
                1709: [64467, 64468, 64469, 64470],
                1711: [64402, 64403, 64404, 64405],
                1713: [64410, 64411, 64412, 64413],
                1715: [64406, 64407, 64408, 64409],
                1722: [64414, 64415],
                1723: [64416, 64417, 64418, 64419],
                1726: [64426, 64427, 64428, 64429],
                1728: [64420, 64421],
                1729: [64422, 64423, 64424, 64425],
                1733: [64480, 64481],
                1734: [64473, 64474],
                1735: [64471, 64472],
                1736: [64475, 64476],
                1737: [64482, 64483],
                1739: [64478, 64479],
                1740: [64508, 64509, 64510, 64511],
                1744: [64484, 64485, 64486, 64487],
                1746: [64430, 64431],
                1747: [64432, 64433]
            }
              , r = {
                65247: {
                    65154: 65269,
                    65156: 65271,
                    65160: 65273,
                    65166: 65275
                },
                65248: {
                    65154: 65270,
                    65156: 65272,
                    65160: 65274,
                    65166: 65276
                },
                65165: {
                    65247: {
                        65248: {
                            65258: 65010
                        }
                    }
                },
                1617: {
                    1612: 64606,
                    1613: 64607,
                    1614: 64608,
                    1615: 64609,
                    1616: 64610
                }
            }
              , n = {
                1612: 64606,
                1613: 64607,
                1614: 64608,
                1615: 64609,
                1616: 64610
            }
              , i = [1570, 1571, 1573, 1575];
            t.__arabicParser__ = {};
            var a = t.__arabicParser__.isInArabicSubstitutionA = function(t) {
                return void 0 !== e[t.charCodeAt(0)]
            }
              , o = t.__arabicParser__.isArabicLetter = function(t) {
                return "string" == typeof t && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(t)
            }
              , s = t.__arabicParser__.isArabicEndLetter = function(t) {
                return o(t) && a(t) && e[t.charCodeAt(0)].length <= 2
            }
              , l = t.__arabicParser__.isArabicAlfLetter = function(t) {
                return o(t) && i.indexOf(t.charCodeAt(0)) >= 0
            }
            ;
            t.__arabicParser__.arabicLetterHasIsolatedForm = function(t) {
                return o(t) && a(t) && e[t.charCodeAt(0)].length >= 1
            }
            ;
            var u = t.__arabicParser__.arabicLetterHasFinalForm = function(t) {
                return o(t) && a(t) && e[t.charCodeAt(0)].length >= 2
            }
            ;
            t.__arabicParser__.arabicLetterHasInitialForm = function(t) {
                return o(t) && a(t) && e[t.charCodeAt(0)].length >= 3
            }
            ;
            var c = t.__arabicParser__.arabicLetterHasMedialForm = function(t) {
                return o(t) && a(t) && 4 == e[t.charCodeAt(0)].length
            }
              , h = t.__arabicParser__.resolveLigatures = function(t) {
                var e = 0
                  , n = r
                  , i = ""
                  , a = 0;
                for (e = 0; e < t.length; e += 1)
                    void 0 !== n[t.charCodeAt(e)] ? (a++,
                    "number" == typeof (n = n[t.charCodeAt(e)]) && (i += String.fromCharCode(n),
                    n = r,
                    a = 0),
                    e === t.length - 1 && (n = r,
                    i += t.charAt(e - (a - 1)),
                    e -= a - 1,
                    a = 0)) : (n = r,
                    i += t.charAt(e - a),
                    e -= a,
                    a = 0);
                return i
            }
            ;
            t.__arabicParser__.isArabicDiacritic = function(t) {
                return void 0 !== t && void 0 !== n[t.charCodeAt(0)]
            }
            ;
            var f = t.__arabicParser__.getCorrectForm = function(t, e, r) {
                return o(t) ? !1 === a(t) ? -1 : !u(t) || !o(e) && !o(r) || !o(r) && s(e) || s(t) && !o(e) || s(t) && l(e) || s(t) && s(e) ? 0 : c(t) && o(e) && !s(e) && o(r) && u(r) ? 3 : s(t) || !o(r) ? 1 : 2 : -1
            }
              , d = function(t) {
                var r = 0
                  , n = 0
                  , i = 0
                  , a = ""
                  , s = ""
                  , l = ""
                  , u = (t = t || "").split("\\s+")
                  , c = [];
                for (r = 0; r < u.length; r += 1) {
                    for (c.push(""),
                    n = 0; n < u[r].length; n += 1)
                        a = u[r][n],
                        s = u[r][n - 1],
                        l = u[r][n + 1],
                        o(a) ? (i = f(a, s, l),
                        c[r] += -1 !== i ? String.fromCharCode(e[a.charCodeAt(0)][i]) : a) : c[r] += a;
                    c[r] = h(c[r])
                }
                return c.join(" ")
            }
              , p = t.__arabicParser__.processArabic = t.processArabic = function() {
                var t, e = "string" == typeof arguments[0] ? arguments[0] : arguments[0].text, r = [];
                if (Array.isArray(e)) {
                    var n = 0;
                    for (r = [],
                    n = 0; n < e.length; n += 1)
                        Array.isArray(e[n]) ? r.push([d(e[n][0]), e[n][1], e[n][2]]) : r.push([d(e[n])]);
                    t = r
                } else
                    t = d(e);
                return "string" == typeof arguments[0] ? t : (arguments[0].text = t,
                arguments[0])
            }
            ;
            t.events.push(["preProcessText", p])
        }(Ft.API),
        Ft.API.autoPrint = function(t) {
            var e;
            if ("javascript" === ((t = t || {}).variant = t.variant || "non-conform",
            t.variant))
                this.addJS("print({});");
            else
                this.internal.events.subscribe("postPutResources", (function() {
                    e = this.internal.newObject(),
                    this.internal.out("<<"),
                    this.internal.out("/S /Named"),
                    this.internal.out("/Type /Action"),
                    this.internal.out("/N /Print"),
                    this.internal.out(">>"),
                    this.internal.out("endobj")
                }
                )),
                this.internal.events.subscribe("putCatalog", (function() {
                    this.internal.out("/OpenAction " + e + " 0 R")
                }
                ));
            return this
        }
        ,
        function(t) {
            var e = function() {
                var t = void 0;
                Object.defineProperty(this, "pdf", {
                    get: function() {
                        return t
                    },
                    set: function(e) {
                        t = e
                    }
                });
                var e = 150;
                Object.defineProperty(this, "width", {
                    get: function() {
                        return e
                    },
                    set: function(t) {
                        e = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 150 : t,
                        this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = e + 1)
                    }
                });
                var r = 300;
                Object.defineProperty(this, "height", {
                    get: function() {
                        return r
                    },
                    set: function(t) {
                        r = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 300 : t,
                        this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = r + 1)
                    }
                });
                var n = [];
                Object.defineProperty(this, "childNodes", {
                    get: function() {
                        return n
                    },
                    set: function(t) {
                        n = t
                    }
                });
                var i = {};
                Object.defineProperty(this, "style", {
                    get: function() {
                        return i
                    },
                    set: function(t) {
                        i = t
                    }
                }),
                Object.defineProperty(this, "parentNode", {})
            };
            e.prototype.getContext = function(t, e) {
                var r;
                if ("2d" !== (t = t || "2d"))
                    return null;
                for (r in e)
                    this.pdf.context2d.hasOwnProperty(r) && (this.pdf.context2d[r] = e[r]);
                return this.pdf.context2d._canvas = this,
                this.pdf.context2d
            }
            ,
            e.prototype.toDataURL = function() {
                throw new Error("toDataURL is not implemented.")
            }
            ,
            t.events.push(["initialized", function() {
                this.canvas = new e,
                this.canvas.pdf = this
            }
            ])
        }(Ft.API),
        function(t) {
            var e = {
                left: 0,
                top: 0,
                bottom: 0,
                right: 0
            }
              , r = !1
              , i = function() {
                void 0 === this.internal.__cell__ && (this.internal.__cell__ = {},
                this.internal.__cell__.padding = 3,
                this.internal.__cell__.headerFunction = void 0,
                this.internal.__cell__.margins = Object.assign({}, e),
                this.internal.__cell__.margins.width = this.getPageWidth(),
                a.call(this))
            }
              , a = function() {
                this.internal.__cell__.lastCell = new o,
                this.internal.__cell__.pages = 1
            }
              , o = function() {
                var t = arguments[0];
                Object.defineProperty(this, "x", {
                    enumerable: !0,
                    get: function() {
                        return t
                    },
                    set: function(e) {
                        t = e
                    }
                });
                var e = arguments[1];
                Object.defineProperty(this, "y", {
                    enumerable: !0,
                    get: function() {
                        return e
                    },
                    set: function(t) {
                        e = t
                    }
                });
                var r = arguments[2];
                Object.defineProperty(this, "width", {
                    enumerable: !0,
                    get: function() {
                        return r
                    },
                    set: function(t) {
                        r = t
                    }
                });
                var n = arguments[3];
                Object.defineProperty(this, "height", {
                    enumerable: !0,
                    get: function() {
                        return n
                    },
                    set: function(t) {
                        n = t
                    }
                });
                var i = arguments[4];
                Object.defineProperty(this, "text", {
                    enumerable: !0,
                    get: function() {
                        return i
                    },
                    set: function(t) {
                        i = t
                    }
                });
                var a = arguments[5];
                Object.defineProperty(this, "lineNumber", {
                    enumerable: !0,
                    get: function() {
                        return a
                    },
                    set: function(t) {
                        a = t
                    }
                });
                var o = arguments[6];
                return Object.defineProperty(this, "align", {
                    enumerable: !0,
                    get: function() {
                        return o
                    },
                    set: function(t) {
                        o = t
                    }
                }),
                this
            };
            o.prototype.clone = function() {
                return new o(this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align)
            }
            ,
            o.prototype.toArray = function() {
                return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align]
            }
            ,
            t.setHeaderFunction = function(t) {
                return i.call(this),
                this.internal.__cell__.headerFunction = "function" == typeof t ? t : void 0,
                this
            }
            ,
            t.getTextDimensions = function(t, e) {
                i.call(this);
                var r = (e = e || {}).fontSize || this.getFontSize()
                  , n = e.font || this.getFont()
                  , a = e.scaleFactor || this.internal.scaleFactor
                  , o = 0
                  , s = 0
                  , l = 0
                  , u = this;
                if (!Array.isArray(t) && "string" != typeof t) {
                    if ("number" != typeof t)
                        throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
                    t = String(t)
                }
                var c = e.maxWidth;
                c > 0 ? "string" == typeof t ? t = this.splitTextToSize(t, c) : "[object Array]" === Object.prototype.toString.call(t) && (t = t.reduce((function(t, e) {
                    return t.concat(u.splitTextToSize(e, c))
                }
                ), [])) : t = Array.isArray(t) ? t : [t];
                for (var h = 0; h < t.length; h++)
                    o < (l = this.getStringUnitWidth(t[h], {
                        font: n
                    }) * r) && (o = l);
                return 0 !== o && (s = t.length),
                {
                    w: o /= a,
                    h: Math.max((s * r * this.getLineHeightFactor() - r * (this.getLineHeightFactor() - 1)) / a, 0)
                }
            }
            ,
            t.cellAddPage = function() {
                i.call(this),
                this.addPage();
                var t = this.internal.__cell__.margins || e;
                return this.internal.__cell__.lastCell = new o(t.left,t.top,void 0,void 0),
                this.internal.__cell__.pages += 1,
                this
            }
            ;
            var s = t.cell = function() {
                var t;
                t = arguments[0]instanceof o ? arguments[0] : new o(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),
                i.call(this);
                var n = this.internal.__cell__.lastCell
                  , a = this.internal.__cell__.padding
                  , s = this.internal.__cell__.margins || e
                  , l = this.internal.__cell__.tableHeaderRow
                  , u = this.internal.__cell__.printHeaders;
                return void 0 !== n.lineNumber && (n.lineNumber === t.lineNumber ? (t.x = (n.x || 0) + (n.width || 0),
                t.y = n.y || 0) : n.y + n.height + t.height + s.bottom > this.getPageHeight() ? (this.cellAddPage(),
                t.y = s.top,
                u && l && (this.printHeaderRow(t.lineNumber, !0),
                t.y += l[0].height)) : t.y = n.y + n.height || t.y),
                void 0 !== t.text[0] && (this.rect(t.x, t.y, t.width, t.height, !0 === r ? "FD" : void 0),
                "right" === t.align ? this.text(t.text, t.x + t.width - a, t.y + a, {
                    align: "right",
                    baseline: "top"
                }) : "center" === t.align ? this.text(t.text, t.x + t.width / 2, t.y + a, {
                    align: "center",
                    baseline: "top",
                    maxWidth: t.width - a - a
                }) : this.text(t.text, t.x + a, t.y + a, {
                    align: "left",
                    baseline: "top",
                    maxWidth: t.width - a - a
                })),
                this.internal.__cell__.lastCell = t,
                this
            }
            ;
            t.table = function(t, r, u, c, h) {
                if (i.call(this),
                !u)
                    throw new Error("No data for PDF table.");
                var f, d, p, g, m = [], v = [], b = [], y = {}, w = {}, x = [], _ = [], N = (h = h || {}).autoSize || !1, A = !1 !== h.printHeaders, L = h.css && void 0 !== h.css["font-size"] ? 16 * h.css["font-size"] : h.fontSize || 12, S = h.margins || Object.assign({
                    width: this.getPageWidth()
                }, e), P = "number" == typeof h.padding ? h.padding : 3, C = h.headerBackgroundColor || "#c8c8c8", k = h.headerTextColor || "#000";
                if (a.call(this),
                this.internal.__cell__.printHeaders = A,
                this.internal.__cell__.margins = S,
                this.internal.__cell__.table_font_size = L,
                this.internal.__cell__.padding = P,
                this.internal.__cell__.headerBackgroundColor = C,
                this.internal.__cell__.headerTextColor = k,
                this.setFontSize(L),
                null == c)
                    v = m = Object.keys(u[0]),
                    b = m.map((function() {
                        return "left"
                    }
                    ));
                else if (Array.isArray(c) && "object" === n(c[0]))
                    for (m = c.map((function(t) {
                        return t.name
                    }
                    )),
                    v = c.map((function(t) {
                        return t.prompt || t.name || ""
                    }
                    )),
                    b = c.map((function(t) {
                        return t.align || "left"
                    }
                    )),
                    f = 0; f < c.length; f += 1)
                        w[c[f].name] = c[f].width * (19.049976 / 25.4);
                else
                    Array.isArray(c) && "string" == typeof c[0] && (v = m = c,
                    b = m.map((function() {
                        return "left"
                    }
                    )));
                if (N || Array.isArray(c) && "string" == typeof c[0])
                    for (f = 0; f < m.length; f += 1) {
                        for (y[g = m[f]] = u.map((function(t) {
                            return t[g]
                        }
                        )),
                        this.setFont(void 0, "bold"),
                        x.push(this.getTextDimensions(v[f], {
                            fontSize: this.internal.__cell__.table_font_size,
                            scaleFactor: this.internal.scaleFactor
                        }).w),
                        d = y[g],
                        this.setFont(void 0, "normal"),
                        p = 0; p < d.length; p += 1)
                            x.push(this.getTextDimensions(d[p], {
                                fontSize: this.internal.__cell__.table_font_size,
                                scaleFactor: this.internal.scaleFactor
                            }).w);
                        w[g] = Math.max.apply(null, x) + P + P,
                        x = []
                    }
                if (A) {
                    var F = {};
                    for (f = 0; f < m.length; f += 1)
                        F[m[f]] = {},
                        F[m[f]].text = v[f],
                        F[m[f]].align = b[f];
                    var I = l.call(this, F, w);
                    _ = m.map((function(e) {
                        return new o(t,r,w[e],I,F[e].text,void 0,F[e].align)
                    }
                    )),
                    this.setTableHeaderRow(_),
                    this.printHeaderRow(1, !1)
                }
                var j = c.reduce((function(t, e) {
                    return t[e.name] = e.align,
                    t
                }
                ), {});
                for (f = 0; f < u.length; f += 1) {
                    "rowStart"in h && h.rowStart instanceof Function && h.rowStart({
                        row: f,
                        data: u[f]
                    }, this);
                    var O = l.call(this, u[f], w);
                    for (p = 0; p < m.length; p += 1) {
                        var D = u[f][m[p]];
                        "cellStart"in h && h.cellStart instanceof Function && h.cellStart({
                            row: f,
                            col: p,
                            data: D
                        }, this),
                        s.call(this, new o(t,r,w[m[p]],O,D,f + 2,j[m[p]]))
                    }
                }
                return this.internal.__cell__.table_x = t,
                this.internal.__cell__.table_y = r,
                this
            }
            ;
            var l = function(t, e) {
                var r = this.internal.__cell__.padding
                  , n = this.internal.__cell__.table_font_size
                  , i = this.internal.scaleFactor;
                return Object.keys(t).map((function(n) {
                    var i = t[n];
                    return this.splitTextToSize(i.hasOwnProperty("text") ? i.text : i, e[n] - r - r)
                }
                ), this).map((function(t) {
                    return this.getLineHeightFactor() * t.length * n / i + r + r
                }
                ), this).reduce((function(t, e) {
                    return Math.max(t, e)
                }
                ), 0)
            };
            t.setTableHeaderRow = function(t) {
                i.call(this),
                this.internal.__cell__.tableHeaderRow = t
            }
            ,
            t.printHeaderRow = function(t, e) {
                if (i.call(this),
                !this.internal.__cell__.tableHeaderRow)
                    throw new Error("Property tableHeaderRow does not exist.");
                var n;
                if (r = !0,
                "function" == typeof this.internal.__cell__.headerFunction) {
                    var a = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
                    this.internal.__cell__.lastCell = new o(a[0],a[1],a[2],a[3],void 0,-1)
                }
                this.setFont(void 0, "bold");
                for (var l = [], u = 0; u < this.internal.__cell__.tableHeaderRow.length; u += 1) {
                    n = this.internal.__cell__.tableHeaderRow[u].clone(),
                    e && (n.y = this.internal.__cell__.margins.top || 0,
                    l.push(n)),
                    n.lineNumber = t;
                    var c = this.getTextColor();
                    this.setTextColor(this.internal.__cell__.headerTextColor),
                    this.setFillColor(this.internal.__cell__.headerBackgroundColor),
                    s.call(this, n),
                    this.setTextColor(c)
                }
                l.length > 0 && this.setTableHeaderRow(l),
                this.setFont(void 0, "normal"),
                r = !1
            }
        }(Ft.API);
        var _e = {
            italic: ["italic", "oblique", "normal"],
            oblique: ["oblique", "italic", "normal"],
            normal: ["normal", "oblique", "italic"]
        }
          , Ne = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"]
          , Ae = xe(Ne)
          , Le = [100, 200, 300, 400, 500, 600, 700, 800, 900]
          , Se = xe(Le);
        function Pe(t) {
            var e = t.family.replace(/"|'/g, "").toLowerCase()
              , r = function(t) {
                return _e[t = t || "normal"] ? t : "normal"
            }(t.style)
              , n = function(t) {
                return t ? "number" == typeof t ? t >= 100 && t <= 900 && t % 100 == 0 ? t : 400 : /^\d00$/.test(t) ? parseInt(t) : "bold" === t ? 700 : 400 : 400
            }(t.weight)
              , i = function(t) {
                return "number" == typeof Ae[t = t || "normal"] ? t : "normal"
            }(t.stretch);
            return {
                family: e,
                style: r,
                weight: n,
                stretch: i,
                src: t.src || [],
                ref: t.ref || {
                    name: e,
                    style: [i, r, n].join(" ")
                }
            }
        }
        function Ce(t, e, r, n) {
            var i;
            for (i = r; i >= 0 && i < e.length; i += n)
                if (t[e[i]])
                    return t[e[i]];
            for (i = r; i >= 0 && i < e.length; i -= n)
                if (t[e[i]])
                    return t[e[i]]
        }
        var ke = {
            "sans-serif": "helvetica",
            fixed: "courier",
            monospace: "courier",
            terminal: "courier",
            cursive: "times",
            fantasy: "times",
            serif: "times"
        }
          , Fe = {
            caption: "times",
            icon: "times",
            menu: "times",
            "message-box": "times",
            "small-caption": "times",
            "status-bar": "times"
        };
        function Ie(t) {
            return [t.stretch, t.style, t.weight, t.family].join(" ")
        }
        function je(t) {
            return t.trimLeft()
        }
        function Oe(t, e) {
            for (var r = 0; r < t.length; ) {
                if (t.charAt(r) === e)
                    return [t.substring(0, r), t.substring(r + 1)];
                r += 1
            }
            return null
        }
        function De(t) {
            var e = t.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
            return null === e ? null : [e[0], t.substring(e[0].length)]
        }
        var Te, Me, Be, Ee = ["times"];
        !function(t) {
            var e, r, i, a, o, s, l, u, c, h = function(t) {
                return t = t || {},
                this.isStrokeTransparent = t.isStrokeTransparent || !1,
                this.strokeOpacity = t.strokeOpacity || 1,
                this.strokeStyle = t.strokeStyle || "#000000",
                this.fillStyle = t.fillStyle || "#000000",
                this.isFillTransparent = t.isFillTransparent || !1,
                this.fillOpacity = t.fillOpacity || 1,
                this.font = t.font || "10px sans-serif",
                this.textBaseline = t.textBaseline || "alphabetic",
                this.textAlign = t.textAlign || "left",
                this.lineWidth = t.lineWidth || 1,
                this.lineJoin = t.lineJoin || "miter",
                this.lineCap = t.lineCap || "butt",
                this.path = t.path || [],
                this.transform = void 0 !== t.transform ? t.transform.clone() : new u,
                this.globalCompositeOperation = t.globalCompositeOperation || "normal",
                this.globalAlpha = t.globalAlpha || 1,
                this.clip_path = t.clip_path || [],
                this.currentPoint = t.currentPoint || new s,
                this.miterLimit = t.miterLimit || 10,
                this.lastPoint = t.lastPoint || new s,
                this.lineDashOffset = t.lineDashOffset || 0,
                this.lineDash = t.lineDash || [],
                this.margin = t.margin || [0, 0, 0, 0],
                this.prevPageLastElemOffset = t.prevPageLastElemOffset || 0,
                this.ignoreClearRect = "boolean" != typeof t.ignoreClearRect || t.ignoreClearRect,
                this
            };
            t.events.push(["initialized", function() {
                this.context2d = new f(this),
                e = this.internal.f2,
                r = this.internal.getCoordinateString,
                i = this.internal.getVerticalCoordinateString,
                a = this.internal.getHorizontalCoordinate,
                o = this.internal.getVerticalCoordinate,
                s = this.internal.Point,
                l = this.internal.Rectangle,
                u = this.internal.Matrix,
                c = new h
            }
            ]);
            var f = function(t) {
                Object.defineProperty(this, "canvas", {
                    get: function() {
                        return {
                            parentNode: !1,
                            style: !1
                        }
                    }
                });
                var e = t;
                Object.defineProperty(this, "pdf", {
                    get: function() {
                        return e
                    }
                });
                var r = !1;
                Object.defineProperty(this, "pageWrapXEnabled", {
                    get: function() {
                        return r
                    },
                    set: function(t) {
                        r = Boolean(t)
                    }
                });
                var n = !1;
                Object.defineProperty(this, "pageWrapYEnabled", {
                    get: function() {
                        return n
                    },
                    set: function(t) {
                        n = Boolean(t)
                    }
                });
                var i = 0;
                Object.defineProperty(this, "posX", {
                    get: function() {
                        return i
                    },
                    set: function(t) {
                        isNaN(t) || (i = t)
                    }
                });
                var a = 0;
                Object.defineProperty(this, "posY", {
                    get: function() {
                        return a
                    },
                    set: function(t) {
                        isNaN(t) || (a = t)
                    }
                }),
                Object.defineProperty(this, "margin", {
                    get: function() {
                        return c.margin
                    },
                    set: function(t) {
                        var e;
                        "number" == typeof t ? e = [t, t, t, t] : ((e = new Array(4))[0] = t[0],
                        e[1] = t.length >= 2 ? t[1] : e[0],
                        e[2] = t.length >= 3 ? t[2] : e[0],
                        e[3] = t.length >= 4 ? t[3] : e[1]),
                        c.margin = e
                    }
                });
                var o = !1;
                Object.defineProperty(this, "autoPaging", {
                    get: function() {
                        return o
                    },
                    set: function(t) {
                        o = t
                    }
                });
                var s = 0;
                Object.defineProperty(this, "lastBreak", {
                    get: function() {
                        return s
                    },
                    set: function(t) {
                        s = t
                    }
                });
                var l = [];
                Object.defineProperty(this, "pageBreaks", {
                    get: function() {
                        return l
                    },
                    set: function(t) {
                        l = t
                    }
                }),
                Object.defineProperty(this, "ctx", {
                    get: function() {
                        return c
                    },
                    set: function(t) {
                        t instanceof h && (c = t)
                    }
                }),
                Object.defineProperty(this, "path", {
                    get: function() {
                        return c.path
                    },
                    set: function(t) {
                        c.path = t
                    }
                });
                var u = [];
                Object.defineProperty(this, "ctxStack", {
                    get: function() {
                        return u
                    },
                    set: function(t) {
                        u = t
                    }
                }),
                Object.defineProperty(this, "fillStyle", {
                    get: function() {
                        return this.ctx.fillStyle
                    },
                    set: function(t) {
                        var e;
                        e = d(t),
                        this.ctx.fillStyle = e.style,
                        this.ctx.isFillTransparent = 0 === e.a,
                        this.ctx.fillOpacity = e.a,
                        this.pdf.setFillColor(e.r, e.g, e.b, {
                            a: e.a
                        }),
                        this.pdf.setTextColor(e.r, e.g, e.b, {
                            a: e.a
                        })
                    }
                }),
                Object.defineProperty(this, "strokeStyle", {
                    get: function() {
                        return this.ctx.strokeStyle
                    },
                    set: function(t) {
                        var e = d(t);
                        this.ctx.strokeStyle = e.style,
                        this.ctx.isStrokeTransparent = 0 === e.a,
                        this.ctx.strokeOpacity = e.a,
                        0 === e.a ? this.pdf.setDrawColor(255, 255, 255) : (e.a,
                        this.pdf.setDrawColor(e.r, e.g, e.b))
                    }
                }),
                Object.defineProperty(this, "lineCap", {
                    get: function() {
                        return this.ctx.lineCap
                    },
                    set: function(t) {
                        -1 !== ["butt", "round", "square"].indexOf(t) && (this.ctx.lineCap = t,
                        this.pdf.setLineCap(t))
                    }
                }),
                Object.defineProperty(this, "lineWidth", {
                    get: function() {
                        return this.ctx.lineWidth
                    },
                    set: function(t) {
                        isNaN(t) || (this.ctx.lineWidth = t,
                        this.pdf.setLineWidth(t))
                    }
                }),
                Object.defineProperty(this, "lineJoin", {
                    get: function() {
                        return this.ctx.lineJoin
                    },
                    set: function(t) {
                        -1 !== ["bevel", "round", "miter"].indexOf(t) && (this.ctx.lineJoin = t,
                        this.pdf.setLineJoin(t))
                    }
                }),
                Object.defineProperty(this, "miterLimit", {
                    get: function() {
                        return this.ctx.miterLimit
                    },
                    set: function(t) {
                        isNaN(t) || (this.ctx.miterLimit = t,
                        this.pdf.setMiterLimit(t))
                    }
                }),
                Object.defineProperty(this, "textBaseline", {
                    get: function() {
                        return this.ctx.textBaseline
                    },
                    set: function(t) {
                        this.ctx.textBaseline = t
                    }
                }),
                Object.defineProperty(this, "textAlign", {
                    get: function() {
                        return this.ctx.textAlign
                    },
                    set: function(t) {
                        -1 !== ["right", "end", "center", "left", "start"].indexOf(t) && (this.ctx.textAlign = t)
                    }
                });
                var f = null;
                function p(t, e) {
                    if (null === f) {
                        var r = function(t) {
                            var e = [];
                            return Object.keys(t).forEach((function(r) {
                                t[r].forEach((function(t) {
                                    var n = null;
                                    switch (t) {
                                    case "bold":
                                        n = {
                                            family: r,
                                            weight: "bold"
                                        };
                                        break;
                                    case "italic":
                                        n = {
                                            family: r,
                                            style: "italic"
                                        };
                                        break;
                                    case "bolditalic":
                                        n = {
                                            family: r,
                                            weight: "bold",
                                            style: "italic"
                                        };
                                        break;
                                    case "":
                                    case "normal":
                                        n = {
                                            family: r
                                        }
                                    }
                                    null !== n && (n.ref = {
                                        name: r,
                                        style: t
                                    },
                                    e.push(n))
                                }
                                ))
                            }
                            )),
                            e
                        }(t.getFontList());
                        f = function(t) {
                            for (var e = {}, r = 0; r < t.length; ++r) {
                                var n = Pe(t[r])
                                  , i = n.family
                                  , a = n.stretch
                                  , o = n.style
                                  , s = n.weight;
                                e[i] = e[i] || {},
                                e[i][a] = e[i][a] || {},
                                e[i][a][o] = e[i][a][o] || {},
                                e[i][a][o][s] = n
                            }
                            return e
                        }(r.concat(e))
                    }
                    return f
                }
                var g = null;
                Object.defineProperty(this, "fontFaces", {
                    get: function() {
                        return g
                    },
                    set: function(t) {
                        f = null,
                        g = t
                    }
                }),
                Object.defineProperty(this, "font", {
                    get: function() {
                        return this.ctx.font
                    },
                    set: function(t) {
                        var e;
                        if (this.ctx.font = t,
                        null !== (e = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(t))) {
                            var r = e[1]
                              , n = (e[2],
                            e[3])
                              , i = e[4]
                              , a = (e[5],
                            e[6])
                              , o = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(i)[2];
                            i = "px" === o ? Math.floor(parseFloat(i) * this.pdf.internal.scaleFactor) : "em" === o ? Math.floor(parseFloat(i) * this.pdf.getFontSize()) : Math.floor(parseFloat(i) * this.pdf.internal.scaleFactor),
                            this.pdf.setFontSize(i);
                            var s = function(t) {
                                var e, r, n = [], i = t.trim();
                                if ("" === i)
                                    return Ee;
                                if (i in Fe)
                                    return [Fe[i]];
                                for (; "" !== i; ) {
                                    switch (r = null,
                                    e = (i = je(i)).charAt(0)) {
                                    case '"':
                                    case "'":
                                        r = Oe(i.substring(1), e);
                                        break;
                                    default:
                                        r = De(i)
                                    }
                                    if (null === r)
                                        return Ee;
                                    if (n.push(r[0]),
                                    "" !== (i = je(r[1])) && "," !== i.charAt(0))
                                        return Ee;
                                    i = i.replace(/^,/, "")
                                }
                                return n
                            }(a);
                            if (this.fontFaces) {
                                var l = function(t, e, r) {
                                    for (var n = (r = r || {}).defaultFontFamily || "times", i = Object.assign({}, ke, r.genericFontFamilies || {}), a = null, o = null, s = 0; s < e.length; ++s)
                                        if (i[(a = Pe(e[s])).family] && (a.family = i[a.family]),
                                        t.hasOwnProperty(a.family)) {
                                            o = t[a.family];
                                            break
                                        }
                                    if (!(o = o || t[n]))
                                        throw new Error("Could not find a font-family for the rule '" + Ie(a) + "' and default family '" + n + "'.");
                                    if (o = function(t, e) {
                                        if (e[t])
                                            return e[t];
                                        var r = Ae[t]
                                          , n = r <= Ae.normal ? -1 : 1
                                          , i = Ce(e, Ne, r, n);
                                        if (!i)
                                            throw new Error("Could not find a matching font-stretch value for " + t);
                                        return i
                                    }(a.stretch, o),
                                    o = function(t, e) {
                                        if (e[t])
                                            return e[t];
                                        for (var r = _e[t], n = 0; n < r.length; ++n)
                                            if (e[r[n]])
                                                return e[r[n]];
                                        throw new Error("Could not find a matching font-style for " + t)
                                    }(a.style, o),
                                    !(o = function(t, e) {
                                        if (e[t])
                                            return e[t];
                                        if (400 === t && e[500])
                                            return e[500];
                                        if (500 === t && e[400])
                                            return e[400];
                                        var r = Se[t]
                                          , n = Ce(e, Le, r, t < 400 ? -1 : 1);
                                        if (!n)
                                            throw new Error("Could not find a matching font-weight for value " + t);
                                        return n
                                    }(a.weight, o)))
                                        throw new Error("Failed to resolve a font for the rule '" + Ie(a) + "'.");
                                    return o
                                }(p(this.pdf, this.fontFaces), s.map((function(t) {
                                    return {
                                        family: t,
                                        stretch: "normal",
                                        weight: n,
                                        style: r
                                    }
                                }
                                )));
                                this.pdf.setFont(l.ref.name, l.ref.style)
                            } else {
                                var u = "";
                                ("bold" === n || parseInt(n, 10) >= 700 || "bold" === r) && (u = "bold"),
                                "italic" === r && (u += "italic"),
                                0 === u.length && (u = "normal");
                                for (var c = "", h = {
                                    arial: "Helvetica",
                                    Arial: "Helvetica",
                                    verdana: "Helvetica",
                                    Verdana: "Helvetica",
                                    helvetica: "Helvetica",
                                    Helvetica: "Helvetica",
                                    "sans-serif": "Helvetica",
                                    fixed: "Courier",
                                    monospace: "Courier",
                                    terminal: "Courier",
                                    cursive: "Times",
                                    fantasy: "Times",
                                    serif: "Times"
                                }, f = 0; f < s.length; f++) {
                                    if (void 0 !== this.pdf.internal.getFont(s[f], u, {
                                        noFallback: !0,
                                        disableWarning: !0
                                    })) {
                                        c = s[f];
                                        break
                                    }
                                    if ("bolditalic" === u && void 0 !== this.pdf.internal.getFont(s[f], "bold", {
                                        noFallback: !0,
                                        disableWarning: !0
                                    }))
                                        c = s[f],
                                        u = "bold";
                                    else if (void 0 !== this.pdf.internal.getFont(s[f], "normal", {
                                        noFallback: !0,
                                        disableWarning: !0
                                    })) {
                                        c = s[f],
                                        u = "normal";
                                        break
                                    }
                                }
                                if ("" === c)
                                    for (var d = 0; d < s.length; d++)
                                        if (h[s[d]]) {
                                            c = h[s[d]];
                                            break
                                        }
                                c = "" === c ? "Times" : c,
                                this.pdf.setFont(c, u)
                            }
                        }
                    }
                }),
                Object.defineProperty(this, "globalCompositeOperation", {
                    get: function() {
                        return this.ctx.globalCompositeOperation
                    },
                    set: function(t) {
                        this.ctx.globalCompositeOperation = t
                    }
                }),
                Object.defineProperty(this, "globalAlpha", {
                    get: function() {
                        return this.ctx.globalAlpha
                    },
                    set: function(t) {
                        this.ctx.globalAlpha = t
                    }
                }),
                Object.defineProperty(this, "lineDashOffset", {
                    get: function() {
                        return this.ctx.lineDashOffset
                    },
                    set: function(t) {
                        this.ctx.lineDashOffset = t,
                        E.call(this)
                    }
                }),
                Object.defineProperty(this, "lineDash", {
                    get: function() {
                        return this.ctx.lineDash
                    },
                    set: function(t) {
                        this.ctx.lineDash = t,
                        E.call(this)
                    }
                }),
                Object.defineProperty(this, "ignoreClearRect", {
                    get: function() {
                        return this.ctx.ignoreClearRect
                    },
                    set: function(t) {
                        this.ctx.ignoreClearRect = Boolean(t)
                    }
                })
            };
            f.prototype.setLineDash = function(t) {
                this.lineDash = t
            }
            ,
            f.prototype.getLineDash = function() {
                return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice()
            }
            ,
            f.prototype.fill = function() {
                x.call(this, "fill", !1)
            }
            ,
            f.prototype.stroke = function() {
                x.call(this, "stroke", !1)
            }
            ,
            f.prototype.beginPath = function() {
                this.path = [{
                    type: "begin"
                }]
            }
            ,
            f.prototype.moveTo = function(t, e) {
                if (isNaN(t) || isNaN(e))
                    throw Q.error("jsPDF.context2d.moveTo: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
                var r = this.ctx.transform.applyToPoint(new s(t,e));
                this.path.push({
                    type: "mt",
                    x: r.x,
                    y: r.y
                }),
                this.ctx.lastPoint = new s(t,e)
            }
            ,
            f.prototype.closePath = function() {
                var t = new s(0,0)
                  , e = 0;
                for (e = this.path.length - 1; -1 !== e; e--)
                    if ("begin" === this.path[e].type && "object" === n(this.path[e + 1]) && "number" == typeof this.path[e + 1].x) {
                        t = new s(this.path[e + 1].x,this.path[e + 1].y);
                        break
                    }
                this.path.push({
                    type: "close"
                }),
                this.ctx.lastPoint = new s(t.x,t.y)
            }
            ,
            f.prototype.lineTo = function(t, e) {
                if (isNaN(t) || isNaN(e))
                    throw Q.error("jsPDF.context2d.lineTo: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
                var r = this.ctx.transform.applyToPoint(new s(t,e));
                this.path.push({
                    type: "lt",
                    x: r.x,
                    y: r.y
                }),
                this.ctx.lastPoint = new s(r.x,r.y)
            }
            ,
            f.prototype.clip = function() {
                this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)),
                x.call(this, null, !0)
            }
            ,
            f.prototype.quadraticCurveTo = function(t, e, r, n) {
                if (isNaN(r) || isNaN(n) || isNaN(t) || isNaN(e))
                    throw Q.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
                var i = this.ctx.transform.applyToPoint(new s(r,n))
                  , a = this.ctx.transform.applyToPoint(new s(t,e));
                this.path.push({
                    type: "qct",
                    x1: a.x,
                    y1: a.y,
                    x: i.x,
                    y: i.y
                }),
                this.ctx.lastPoint = new s(i.x,i.y)
            }
            ,
            f.prototype.bezierCurveTo = function(t, e, r, n, i, a) {
                if (isNaN(i) || isNaN(a) || isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n))
                    throw Q.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
                var o = this.ctx.transform.applyToPoint(new s(i,a))
                  , l = this.ctx.transform.applyToPoint(new s(t,e))
                  , u = this.ctx.transform.applyToPoint(new s(r,n));
                this.path.push({
                    type: "bct",
                    x1: l.x,
                    y1: l.y,
                    x2: u.x,
                    y2: u.y,
                    x: o.x,
                    y: o.y
                }),
                this.ctx.lastPoint = new s(o.x,o.y)
            }
            ,
            f.prototype.arc = function(t, e, r, n, i, a) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i))
                    throw Q.error("jsPDF.context2d.arc: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.arc");
                if (a = Boolean(a),
                !this.ctx.transform.isIdentity) {
                    var o = this.ctx.transform.applyToPoint(new s(t,e));
                    t = o.x,
                    e = o.y;
                    var l = this.ctx.transform.applyToPoint(new s(0,r))
                      , u = this.ctx.transform.applyToPoint(new s(0,0));
                    r = Math.sqrt(Math.pow(l.x - u.x, 2) + Math.pow(l.y - u.y, 2))
                }
                Math.abs(i - n) >= 2 * Math.PI && (n = 0,
                i = 2 * Math.PI),
                this.path.push({
                    type: "arc",
                    x: t,
                    y: e,
                    radius: r,
                    startAngle: n,
                    endAngle: i,
                    counterclockwise: a
                })
            }
            ,
            f.prototype.arcTo = function(t, e, r, n, i) {
                throw new Error("arcTo not implemented.")
            }
            ,
            f.prototype.rect = function(t, e, r, n) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n))
                    throw Q.error("jsPDF.context2d.rect: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.rect");
                this.moveTo(t, e),
                this.lineTo(t + r, e),
                this.lineTo(t + r, e + n),
                this.lineTo(t, e + n),
                this.lineTo(t, e),
                this.lineTo(t + r, e),
                this.lineTo(t, e)
            }
            ,
            f.prototype.fillRect = function(t, e, r, n) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n))
                    throw Q.error("jsPDF.context2d.fillRect: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
                if (!p.call(this)) {
                    var i = {};
                    "butt" !== this.lineCap && (i.lineCap = this.lineCap,
                    this.lineCap = "butt"),
                    "miter" !== this.lineJoin && (i.lineJoin = this.lineJoin,
                    this.lineJoin = "miter"),
                    this.beginPath(),
                    this.rect(t, e, r, n),
                    this.fill(),
                    i.hasOwnProperty("lineCap") && (this.lineCap = i.lineCap),
                    i.hasOwnProperty("lineJoin") && (this.lineJoin = i.lineJoin)
                }
            }
            ,
            f.prototype.strokeRect = function(t, e, r, n) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n))
                    throw Q.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
                g.call(this) || (this.beginPath(),
                this.rect(t, e, r, n),
                this.stroke())
            }
            ,
            f.prototype.clearRect = function(t, e, r, n) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n))
                    throw Q.error("jsPDF.context2d.clearRect: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
                this.ignoreClearRect || (this.fillStyle = "#ffffff",
                this.fillRect(t, e, r, n))
            }
            ,
            f.prototype.save = function(t) {
                t = "boolean" != typeof t || t;
                for (var e = this.pdf.internal.getCurrentPageInfo().pageNumber, r = 0; r < this.pdf.internal.getNumberOfPages(); r++)
                    this.pdf.setPage(r + 1),
                    this.pdf.internal.out("q");
                if (this.pdf.setPage(e),
                t) {
                    this.ctx.fontSize = this.pdf.internal.getFontSize();
                    var n = new h(this.ctx);
                    this.ctxStack.push(this.ctx),
                    this.ctx = n
                }
            }
            ,
            f.prototype.restore = function(t) {
                t = "boolean" != typeof t || t;
                for (var e = this.pdf.internal.getCurrentPageInfo().pageNumber, r = 0; r < this.pdf.internal.getNumberOfPages(); r++)
                    this.pdf.setPage(r + 1),
                    this.pdf.internal.out("Q");
                this.pdf.setPage(e),
                t && 0 !== this.ctxStack.length && (this.ctx = this.ctxStack.pop(),
                this.fillStyle = this.ctx.fillStyle,
                this.strokeStyle = this.ctx.strokeStyle,
                this.font = this.ctx.font,
                this.lineCap = this.ctx.lineCap,
                this.lineWidth = this.ctx.lineWidth,
                this.lineJoin = this.ctx.lineJoin,
                this.lineDash = this.ctx.lineDash,
                this.lineDashOffset = this.ctx.lineDashOffset)
            }
            ,
            f.prototype.toDataURL = function() {
                throw new Error("toDataUrl not implemented.")
            }
            ;
            var d = function(t) {
                var e, r, n, i;
                if (!0 === t.isCanvasGradient && (t = t.getColor()),
                !t)
                    return {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0,
                        style: t
                    };
                if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(t))
                    e = 0,
                    r = 0,
                    n = 0,
                    i = 0;
                else {
                    var a = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t);
                    if (null !== a)
                        e = parseInt(a[1]),
                        r = parseInt(a[2]),
                        n = parseInt(a[3]),
                        i = 1;
                    else if (null !== (a = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(t)))
                        e = parseInt(a[1]),
                        r = parseInt(a[2]),
                        n = parseInt(a[3]),
                        i = parseFloat(a[4]);
                    else {
                        if (i = 1,
                        "string" == typeof t && "#" !== t.charAt(0)) {
                            var o = new ot(t);
                            t = o.ok ? o.toHex() : "#000000"
                        }
                        4 === t.length ? (e = t.substring(1, 2),
                        e += e,
                        r = t.substring(2, 3),
                        r += r,
                        n = t.substring(3, 4),
                        n += n) : (e = t.substring(1, 3),
                        r = t.substring(3, 5),
                        n = t.substring(5, 7)),
                        e = parseInt(e, 16),
                        r = parseInt(r, 16),
                        n = parseInt(n, 16)
                    }
                }
                return {
                    r: e,
                    g: r,
                    b: n,
                    a: i,
                    style: t
                }
            }
              , p = function() {
                return this.ctx.isFillTransparent || 0 == this.globalAlpha
            }
              , g = function() {
                return Boolean(this.ctx.isStrokeTransparent || 0 == this.globalAlpha)
            };
            f.prototype.fillText = function(t, e, r, n) {
                if (isNaN(e) || isNaN(r) || "string" != typeof t)
                    throw Q.error("jsPDF.context2d.fillText: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.fillText");
                if (n = isNaN(n) ? void 0 : n,
                !p.call(this)) {
                    var i = T(this.ctx.transform.rotation)
                      , a = this.ctx.transform.scaleX;
                    k.call(this, {
                        text: t,
                        x: e,
                        y: r,
                        scale: a,
                        angle: i,
                        align: this.textAlign,
                        maxWidth: n
                    })
                }
            }
            ,
            f.prototype.strokeText = function(t, e, r, n) {
                if (isNaN(e) || isNaN(r) || "string" != typeof t)
                    throw Q.error("jsPDF.context2d.strokeText: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
                if (!g.call(this)) {
                    n = isNaN(n) ? void 0 : n;
                    var i = T(this.ctx.transform.rotation)
                      , a = this.ctx.transform.scaleX;
                    k.call(this, {
                        text: t,
                        x: e,
                        y: r,
                        scale: a,
                        renderingMode: "stroke",
                        angle: i,
                        align: this.textAlign,
                        maxWidth: n
                    })
                }
            }
            ,
            f.prototype.measureText = function(t) {
                if ("string" != typeof t)
                    throw Q.error("jsPDF.context2d.measureText: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.measureText");
                var e = this.pdf
                  , r = this.pdf.internal.scaleFactor
                  , n = e.internal.getFontSize()
                  , i = e.getStringUnitWidth(t) * n / e.internal.scaleFactor
                  , a = function(t) {
                    var e = (t = t || {}).width || 0;
                    return Object.defineProperty(this, "width", {
                        get: function() {
                            return e
                        }
                    }),
                    this
                };
                return new a({
                    width: i *= Math.round(96 * r / 72 * 1e4) / 1e4
                })
            }
            ,
            f.prototype.scale = function(t, e) {
                if (isNaN(t) || isNaN(e))
                    throw Q.error("jsPDF.context2d.scale: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.scale");
                var r = new u(t,0,0,e,0,0);
                this.ctx.transform = this.ctx.transform.multiply(r)
            }
            ,
            f.prototype.rotate = function(t) {
                if (isNaN(t))
                    throw Q.error("jsPDF.context2d.rotate: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.rotate");
                var e = new u(Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0);
                this.ctx.transform = this.ctx.transform.multiply(e)
            }
            ,
            f.prototype.translate = function(t, e) {
                if (isNaN(t) || isNaN(e))
                    throw Q.error("jsPDF.context2d.translate: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.translate");
                var r = new u(1,0,0,1,t,e);
                this.ctx.transform = this.ctx.transform.multiply(r)
            }
            ,
            f.prototype.transform = function(t, e, r, n, i, a) {
                if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i) || isNaN(a))
                    throw Q.error("jsPDF.context2d.transform: Invalid arguments", arguments),
                    new Error("Invalid arguments passed to jsPDF.context2d.transform");
                var o = new u(t,e,r,n,i,a);
                this.ctx.transform = this.ctx.transform.multiply(o)
            }
            ,
            f.prototype.setTransform = function(t, e, r, n, i, a) {
                t = isNaN(t) ? 1 : t,
                e = isNaN(e) ? 0 : e,
                r = isNaN(r) ? 0 : r,
                n = isNaN(n) ? 1 : n,
                i = isNaN(i) ? 0 : i,
                a = isNaN(a) ? 0 : a,
                this.ctx.transform = new u(t,e,r,n,i,a)
            }
            ;
            var m = function() {
                return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0
            };
            f.prototype.drawImage = function(t, e, r, n, i, a, o, s, c) {
                var h = this.pdf.getImageProperties(t)
                  , f = 1
                  , d = 1
                  , p = 1
                  , g = 1;
                void 0 !== n && void 0 !== s && (p = s / n,
                g = c / i,
                f = h.width / n * s / n,
                d = h.height / i * c / i),
                void 0 === a && (a = e,
                o = r,
                e = 0,
                r = 0),
                void 0 !== n && void 0 === s && (s = n,
                c = i),
                void 0 === n && void 0 === s && (s = h.width,
                c = h.height);
                for (var b, x = this.ctx.transform.decompose(), N = T(x.rotate.shx), A = new u, L = (A = (A = (A = A.multiply(x.translate)).multiply(x.skew)).multiply(x.scale)).applyToRectangle(new l(a - e * p,o - r * g,n * f,i * d)), S = v.call(this, L), P = [], C = 0; C < S.length; C += 1)
                    -1 === P.indexOf(S[C]) && P.push(S[C]);
                if (w(P),
                this.autoPaging)
                    for (var k = P[0], F = P[P.length - 1], I = k; I < F + 1; I++) {
                        this.pdf.setPage(I);
                        var j = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1]
                          , O = 1 === I ? this.posY + this.margin[0] : this.margin[0]
                          , D = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2]
                          , M = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2]
                          , B = 1 === I ? 0 : D + (I - 2) * M;
                        if (0 !== this.ctx.clip_path.length) {
                            var E = this.path;
                            b = JSON.parse(JSON.stringify(this.ctx.clip_path)),
                            this.path = y(b, this.posX + this.margin[3], -B + O + this.ctx.prevPageLastElemOffset),
                            _.call(this, "fill", !0),
                            this.path = E
                        }
                        var R = JSON.parse(JSON.stringify(L));
                        R = y([R], this.posX + this.margin[3], -B + O + this.ctx.prevPageLastElemOffset)[0];
                        var q = (I > k || I < F) && m.call(this);
                        q && (this.pdf.saveGraphicsState(),
                        this.pdf.rect(this.margin[3], this.margin[0], j, M, null).clip().discardPath()),
                        this.pdf.addImage(t, "JPEG", R.x, R.y, R.w, R.h, null, null, N),
                        q && this.pdf.restoreGraphicsState()
                    }
                else
                    this.pdf.addImage(t, "JPEG", L.x, L.y, L.w, L.h, null, null, N)
            }
            ;
            var v = function(t, e, r) {
                var n = [];
                e = e || this.pdf.internal.pageSize.width,
                r = r || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
                var i = this.posY + this.ctx.prevPageLastElemOffset;
                switch (t.type) {
                default:
                case "mt":
                case "lt":
                    n.push(Math.floor((t.y + i) / r) + 1);
                    break;
                case "arc":
                    n.push(Math.floor((t.y + i - t.radius) / r) + 1),
                    n.push(Math.floor((t.y + i + t.radius) / r) + 1);
                    break;
                case "qct":
                    var a = M(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x, t.y);
                    n.push(Math.floor((a.y + i) / r) + 1),
                    n.push(Math.floor((a.y + a.h + i) / r) + 1);
                    break;
                case "bct":
                    var o = B(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x2, t.y2, t.x, t.y);
                    n.push(Math.floor((o.y + i) / r) + 1),
                    n.push(Math.floor((o.y + o.h + i) / r) + 1);
                    break;
                case "rect":
                    n.push(Math.floor((t.y + i) / r) + 1),
                    n.push(Math.floor((t.y + t.h + i) / r) + 1)
                }
                for (var s = 0; s < n.length; s += 1)
                    for (; this.pdf.internal.getNumberOfPages() < n[s]; )
                        b.call(this);
                return n
            }
              , b = function() {
                var t = this.fillStyle
                  , e = this.strokeStyle
                  , r = this.font
                  , n = this.lineCap
                  , i = this.lineWidth
                  , a = this.lineJoin;
                this.pdf.addPage(),
                this.fillStyle = t,
                this.strokeStyle = e,
                this.font = r,
                this.lineCap = n,
                this.lineWidth = i,
                this.lineJoin = a
            }
              , y = function(t, e, r) {
                for (var n = 0; n < t.length; n++)
                    switch (t[n].type) {
                    case "bct":
                        t[n].x2 += e,
                        t[n].y2 += r;
                    case "qct":
                        t[n].x1 += e,
                        t[n].y1 += r;
                    default:
                        t[n].x += e,
                        t[n].y += r
                    }
                return t
            }
              , w = function(t) {
                return t.sort((function(t, e) {
                    return t - e
                }
                ))
            }
              , x = function(t, e) {
                for (var r, n, i = this.fillStyle, a = this.strokeStyle, o = this.lineCap, s = this.lineWidth, l = Math.abs(s * this.ctx.transform.scaleX), u = this.lineJoin, c = JSON.parse(JSON.stringify(this.path)), h = JSON.parse(JSON.stringify(this.path)), f = [], d = 0; d < h.length; d++)
                    if (void 0 !== h[d].x)
                        for (var p = v.call(this, h[d]), g = 0; g < p.length; g += 1)
                            -1 === f.indexOf(p[g]) && f.push(p[g]);
                for (var x = 0; x < f.length; x++)
                    for (; this.pdf.internal.getNumberOfPages() < f[x]; )
                        b.call(this);
                if (w(f),
                this.autoPaging)
                    for (var N = f[0], A = f[f.length - 1], L = N; L < A + 1; L++) {
                        this.pdf.setPage(L),
                        this.fillStyle = i,
                        this.strokeStyle = a,
                        this.lineCap = o,
                        this.lineWidth = l,
                        this.lineJoin = u;
                        var S = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1]
                          , P = 1 === L ? this.posY + this.margin[0] : this.margin[0]
                          , C = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2]
                          , k = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2]
                          , F = 1 === L ? 0 : C + (L - 2) * k;
                        if (0 !== this.ctx.clip_path.length) {
                            var I = this.path;
                            r = JSON.parse(JSON.stringify(this.ctx.clip_path)),
                            this.path = y(r, this.posX + this.margin[3], -F + P + this.ctx.prevPageLastElemOffset),
                            _.call(this, t, !0),
                            this.path = I
                        }
                        if (n = JSON.parse(JSON.stringify(c)),
                        this.path = y(n, this.posX + this.margin[3], -F + P + this.ctx.prevPageLastElemOffset),
                        !1 === e || 0 === L) {
                            var j = (L > N || L < A) && m.call(this);
                            j && (this.pdf.saveGraphicsState(),
                            this.pdf.rect(this.margin[3], this.margin[0], S, k, null).clip().discardPath()),
                            _.call(this, t, e),
                            j && this.pdf.restoreGraphicsState()
                        }
                        this.lineWidth = s
                    }
                else
                    this.lineWidth = l,
                    _.call(this, t, e),
                    this.lineWidth = s;
                this.path = c
            }
              , _ = function(t, e) {
                if (("stroke" !== t || e || !g.call(this)) && ("stroke" === t || e || !p.call(this))) {
                    for (var r, n, i = [], a = this.path, o = 0; o < a.length; o++) {
                        var s = a[o];
                        switch (s.type) {
                        case "begin":
                            i.push({
                                begin: !0
                            });
                            break;
                        case "close":
                            i.push({
                                close: !0
                            });
                            break;
                        case "mt":
                            i.push({
                                start: s,
                                deltas: [],
                                abs: []
                            });
                            break;
                        case "lt":
                            var l = i.length;
                            if (a[o - 1] && !isNaN(a[o - 1].x) && (r = [s.x - a[o - 1].x, s.y - a[o - 1].y],
                            l > 0))
                                for (; l >= 0; l--)
                                    if (!0 !== i[l - 1].close && !0 !== i[l - 1].begin) {
                                        i[l - 1].deltas.push(r),
                                        i[l - 1].abs.push(s);
                                        break
                                    }
                            break;
                        case "bct":
                            r = [s.x1 - a[o - 1].x, s.y1 - a[o - 1].y, s.x2 - a[o - 1].x, s.y2 - a[o - 1].y, s.x - a[o - 1].x, s.y - a[o - 1].y],
                            i[i.length - 1].deltas.push(r);
                            break;
                        case "qct":
                            var u = a[o - 1].x + 2 / 3 * (s.x1 - a[o - 1].x)
                              , c = a[o - 1].y + 2 / 3 * (s.y1 - a[o - 1].y)
                              , h = s.x + 2 / 3 * (s.x1 - s.x)
                              , f = s.y + 2 / 3 * (s.y1 - s.y)
                              , d = s.x
                              , m = s.y;
                            r = [u - a[o - 1].x, c - a[o - 1].y, h - a[o - 1].x, f - a[o - 1].y, d - a[o - 1].x, m - a[o - 1].y],
                            i[i.length - 1].deltas.push(r);
                            break;
                        case "arc":
                            i.push({
                                deltas: [],
                                abs: [],
                                arc: !0
                            }),
                            Array.isArray(i[i.length - 1].abs) && i[i.length - 1].abs.push(s)
                        }
                    }
                    n = e ? null : "stroke" === t ? "stroke" : "fill";
                    for (var v = !1, b = 0; b < i.length; b++)
                        if (i[b].arc)
                            for (var y = i[b].abs, w = 0; w < y.length; w++) {
                                var x = y[w];
                                "arc" === x.type ? L.call(this, x.x, x.y, x.radius, x.startAngle, x.endAngle, x.counterclockwise, void 0, e, !v) : F.call(this, x.x, x.y),
                                v = !0
                            }
                        else if (!0 === i[b].close)
                            this.pdf.internal.out("h"),
                            v = !1;
                        else if (!0 !== i[b].begin) {
                            var _ = i[b].start.x
                              , N = i[b].start.y;
                            I.call(this, i[b].deltas, _, N),
                            v = !0
                        }
                    n && S.call(this, n),
                    e && P.call(this)
                }
            }
              , N = function(t) {
                var e = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor
                  , r = e * (this.pdf.internal.getLineHeightFactor() - 1);
                switch (this.ctx.textBaseline) {
                case "bottom":
                    return t - r;
                case "top":
                    return t + e - r;
                case "hanging":
                    return t + e - 2 * r;
                case "middle":
                    return t + e / 2 - r;
                default:
                    return t
                }
            }
              , A = function(t) {
                return t + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1)
            };
            f.prototype.createLinearGradient = function() {
                var t = function() {};
                return t.colorStops = [],
                t.addColorStop = function(t, e) {
                    this.colorStops.push([t, e])
                }
                ,
                t.getColor = function() {
                    return 0 === this.colorStops.length ? "#000000" : this.colorStops[0][1]
                }
                ,
                t.isCanvasGradient = !0,
                t
            }
            ,
            f.prototype.createPattern = function() {
                return this.createLinearGradient()
            }
            ,
            f.prototype.createRadialGradient = function() {
                return this.createLinearGradient()
            }
            ;
            var L = function(t, e, r, n, i, a, o, s, l) {
                for (var u = O.call(this, r, n, i, a), c = 0; c < u.length; c++) {
                    var h = u[c];
                    0 === c && (l ? C.call(this, h.x1 + t, h.y1 + e) : F.call(this, h.x1 + t, h.y1 + e)),
                    j.call(this, t, e, h.x2, h.y2, h.x3, h.y3, h.x4, h.y4)
                }
                s ? P.call(this) : S.call(this, o)
            }
              , S = function(t) {
                switch (t) {
                case "stroke":
                    this.pdf.internal.out("S");
                    break;
                case "fill":
                    this.pdf.internal.out("f")
                }
            }
              , P = function() {
                this.pdf.clip(),
                this.pdf.discardPath()
            }
              , C = function(t, e) {
                this.pdf.internal.out(r(t) + " " + i(e) + " m")
            }
              , k = function(t) {
                var e;
                switch (t.align) {
                case "right":
                case "end":
                    e = "right";
                    break;
                case "center":
                    e = "center";
                    break;
                default:
                    e = "left"
                }
                var r = this.pdf.getTextDimensions(t.text)
                  , n = N.call(this, t.y)
                  , i = A.call(this, n) - r.h
                  , a = this.ctx.transform.applyToPoint(new s(t.x,n))
                  , o = this.ctx.transform.decompose()
                  , c = new u;
                c = (c = (c = c.multiply(o.translate)).multiply(o.skew)).multiply(o.scale);
                for (var h, f, d, p = this.ctx.transform.applyToRectangle(new l(t.x,n,r.w,r.h)), g = c.applyToRectangle(new l(t.x,i,r.w,r.h)), b = v.call(this, g), x = [], L = 0; L < b.length; L += 1)
                    -1 === x.indexOf(b[L]) && x.push(b[L]);
                if (w(x),
                this.autoPaging)
                    for (var S = x[0], P = x[x.length - 1], C = S; C < P + 1; C++) {
                        this.pdf.setPage(C);
                        var k = 1 === C ? this.posY + this.margin[0] : this.margin[0]
                          , F = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2]
                          , I = this.pdf.internal.pageSize.height - this.margin[2]
                          , j = I - this.margin[0]
                          , O = this.pdf.internal.pageSize.width - this.margin[1]
                          , D = O - this.margin[3]
                          , T = 1 === C ? 0 : F + (C - 2) * j;
                        if (0 !== this.ctx.clip_path.length) {
                            var M = this.path;
                            h = JSON.parse(JSON.stringify(this.ctx.clip_path)),
                            this.path = y(h, this.posX + this.margin[3], -1 * T + k),
                            _.call(this, "fill", !0),
                            this.path = M
                        }
                        var B = y([JSON.parse(JSON.stringify(g))], this.posX + this.margin[3], -T + k + this.ctx.prevPageLastElemOffset)[0];
                        t.scale >= .01 && (f = this.pdf.internal.getFontSize(),
                        this.pdf.setFontSize(f * t.scale),
                        d = this.lineWidth,
                        this.lineWidth = d * t.scale);
                        var E = "text" !== this.autoPaging;
                        if (E || B.y + B.h <= I) {
                            if (E || B.y >= k && B.x <= O) {
                                var R = E ? t.text : this.pdf.splitTextToSize(t.text, t.maxWidth || O - B.x)[0]
                                  , q = y([JSON.parse(JSON.stringify(p))], this.posX + this.margin[3], -T + k + this.ctx.prevPageLastElemOffset)[0]
                                  , z = E && (C > S || C < P) && m.call(this);
                                z && (this.pdf.saveGraphicsState(),
                                this.pdf.rect(this.margin[3], this.margin[0], D, j, null).clip().discardPath()),
                                this.pdf.text(R, q.x, q.y, {
                                    angle: t.angle,
                                    align: e,
                                    renderingMode: t.renderingMode
                                }),
                                z && this.pdf.restoreGraphicsState()
                            }
                        } else
                            B.y < I && (this.ctx.prevPageLastElemOffset += I - B.y);
                        t.scale >= .01 && (this.pdf.setFontSize(f),
                        this.lineWidth = d)
                    }
                else
                    t.scale >= .01 && (f = this.pdf.internal.getFontSize(),
                    this.pdf.setFontSize(f * t.scale),
                    d = this.lineWidth,
                    this.lineWidth = d * t.scale),
                    this.pdf.text(t.text, a.x + this.posX, a.y + this.posY, {
                        angle: t.angle,
                        align: e,
                        renderingMode: t.renderingMode,
                        maxWidth: t.maxWidth
                    }),
                    t.scale >= .01 && (this.pdf.setFontSize(f),
                    this.lineWidth = d)
            }
              , F = function(t, e, n, a) {
                n = n || 0,
                a = a || 0,
                this.pdf.internal.out(r(t + n) + " " + i(e + a) + " l")
            }
              , I = function(t, e, r) {
                return this.pdf.lines(t, e, r, null, null)
            }
              , j = function(t, r, n, i, s, l, u, c) {
                this.pdf.internal.out([e(a(n + t)), e(o(i + r)), e(a(s + t)), e(o(l + r)), e(a(u + t)), e(o(c + r)), "c"].join(" "))
            }
              , O = function(t, e, r, n) {
                for (var i = 2 * Math.PI, a = Math.PI / 2; e > r; )
                    e -= i;
                var o = Math.abs(r - e);
                o < i && n && (o = i - o);
                for (var s = [], l = n ? -1 : 1, u = e; o > 1e-5; ) {
                    var c = u + l * Math.min(o, a);
                    s.push(D.call(this, t, u, c)),
                    o -= Math.abs(c - u),
                    u = c
                }
                return s
            }
              , D = function(t, e, r) {
                var n = (r - e) / 2
                  , i = t * Math.cos(n)
                  , a = t * Math.sin(n)
                  , o = i
                  , s = -a
                  , l = o * o + s * s
                  , u = l + o * i + s * a
                  , c = 4 / 3 * (Math.sqrt(2 * l * u) - u) / (o * a - s * i)
                  , h = o - c * s
                  , f = s + c * o
                  , d = h
                  , p = -f
                  , g = n + e
                  , m = Math.cos(g)
                  , v = Math.sin(g);
                return {
                    x1: t * Math.cos(e),
                    y1: t * Math.sin(e),
                    x2: h * m - f * v,
                    y2: h * v + f * m,
                    x3: d * m - p * v,
                    y3: d * v + p * m,
                    x4: t * Math.cos(r),
                    y4: t * Math.sin(r)
                }
            }
              , T = function(t) {
                return 180 * t / Math.PI
            }
              , M = function(t, e, r, n, i, a) {
                var o = t + .5 * (r - t)
                  , s = e + .5 * (n - e)
                  , u = i + .5 * (r - i)
                  , c = a + .5 * (n - a)
                  , h = Math.min(t, i, o, u)
                  , f = Math.max(t, i, o, u)
                  , d = Math.min(e, a, s, c)
                  , p = Math.max(e, a, s, c);
                return new l(h,d,f - h,p - d)
            }
              , B = function(t, e, r, n, i, a, o, s) {
                var u, c, h, f, d, p, g, m, v, b, y, w, x, _, N = r - t, A = n - e, L = i - r, S = a - n, P = o - i, C = s - a;
                for (c = 0; c < 41; c++)
                    v = (g = (h = t + (u = c / 40) * N) + u * ((d = r + u * L) - h)) + u * (d + u * (i + u * P - d) - g),
                    b = (m = (f = e + u * A) + u * ((p = n + u * S) - f)) + u * (p + u * (a + u * C - p) - m),
                    0 == c ? (y = v,
                    w = b,
                    x = v,
                    _ = b) : (y = Math.min(y, v),
                    w = Math.min(w, b),
                    x = Math.max(x, v),
                    _ = Math.max(_, b));
                return new l(Math.round(y),Math.round(w),Math.round(x - y),Math.round(_ - w))
            }
              , E = function() {
                if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
                    var t, e, r = (t = this.ctx.lineDash,
                    e = this.ctx.lineDashOffset,
                    JSON.stringify({
                        lineDash: t,
                        lineDashOffset: e
                    }));
                    this.prevLineDash !== r && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset),
                    this.prevLineDash = r)
                }
            }
        }(Ft.API),
        function(t) {
            var e = function(t) {
                var e, r, n, i, a, o, s, l, u, c;
                for (/[^\x00-\xFF]/.test(t),
                r = [],
                n = 0,
                i = (t += e = "\0\0\0\0".slice(t.length % 4 || 4)).length; i > n; n += 4)
                    0 !== (a = (t.charCodeAt(n) << 24) + (t.charCodeAt(n + 1) << 16) + (t.charCodeAt(n + 2) << 8) + t.charCodeAt(n + 3)) ? (o = (a = ((a = ((a = ((a = (a - (c = a % 85)) / 85) - (u = a % 85)) / 85) - (l = a % 85)) / 85) - (s = a % 85)) / 85) % 85,
                    r.push(o + 33, s + 33, l + 33, u + 33, c + 33)) : r.push(122);
                return function(t, e) {
                    for (var r = e; r > 0; r--)
                        t.pop()
                }(r, e.length),
                String.fromCharCode.apply(String, r) + "~>"
            }
              , r = function(t) {
                var e, r, n, i, a, o = String, s = "length", l = 255, u = "charCodeAt", c = "slice", h = "replace";
                for (t[c](-2),
                t = t[c](0, -2)[h](/\s/g, "")[h]("z", "!!!!!"),
                n = [],
                i = 0,
                a = (t += e = "uuuuu"[c](t[s] % 5 || 5))[s]; a > i; i += 5)
                    r = 52200625 * (t[u](i) - 33) + 614125 * (t[u](i + 1) - 33) + 7225 * (t[u](i + 2) - 33) + 85 * (t[u](i + 3) - 33) + (t[u](i + 4) - 33),
                    n.push(l & r >> 24, l & r >> 16, l & r >> 8, l & r);
                return function(t, e) {
                    for (var r = e; r > 0; r--)
                        t.pop()
                }(n, e[s]),
                o.fromCharCode.apply(o, n)
            }
              , n = function(t) {
                var e = new RegExp(/^([0-9A-Fa-f]{2})+$/);
                if (-1 !== (t = t.replace(/\s/g, "")).indexOf(">") && (t = t.substr(0, t.indexOf(">"))),
                t.length % 2 && (t += "0"),
                !1 === e.test(t))
                    return "";
                for (var r = "", n = 0; n < t.length; n += 2)
                    r += String.fromCharCode("0x" + (t[n] + t[n + 1]));
                return r
            }
              , i = function(t) {
                for (var e = new Uint8Array(t.length), r = t.length; r--; )
                    e[r] = t.charCodeAt(r);
                return (e = J(e)).reduce((function(t, e) {
                    return t + String.fromCharCode(e)
                }
                ), "")
            };
            t.processDataByFilters = function(t, a) {
                var o = 0
                  , s = t || ""
                  , l = [];
                for ("string" == typeof (a = a || []) && (a = [a]),
                o = 0; o < a.length; o += 1)
                    switch (a[o]) {
                    case "ASCII85Decode":
                    case "/ASCII85Decode":
                        s = r(s),
                        l.push("/ASCII85Encode");
                        break;
                    case "ASCII85Encode":
                    case "/ASCII85Encode":
                        s = e(s),
                        l.push("/ASCII85Decode");
                        break;
                    case "ASCIIHexDecode":
                    case "/ASCIIHexDecode":
                        s = n(s),
                        l.push("/ASCIIHexEncode");
                        break;
                    case "ASCIIHexEncode":
                    case "/ASCIIHexEncode":
                        s = s.split("").map((function(t) {
                            return ("0" + t.charCodeAt().toString(16)).slice(-2)
                        }
                        )).join("") + ">",
                        l.push("/ASCIIHexDecode");
                        break;
                    case "FlateEncode":
                    case "/FlateEncode":
                        s = i(s),
                        l.push("/FlateDecode");
                        break;
                    default:
                        throw new Error('The filter: "' + a[o] + '" is not implemented')
                    }
                return {
                    data: s,
                    reverseChain: l.reverse().join(" ")
                }
            }
        }(Ft.API),
        function(t) {
            t.loadFile = function(t, e, r) {
                return function(t, e, r) {
                    e = !1 !== e,
                    r = "function" == typeof r ? r : function() {}
                    ;
                    var n = void 0;
                    try {
                        n = function(t, e, r) {
                            var n = new XMLHttpRequest
                              , i = 0
                              , a = function(t) {
                                var e = t.length
                                  , r = []
                                  , n = String.fromCharCode;
                                for (i = 0; i < e; i += 1)
                                    r.push(n(255 & t.charCodeAt(i)));
                                return r.join("")
                            };
                            if (n.open("GET", t, !e),
                            n.overrideMimeType("text/plain; charset=x-user-defined"),
                            !1 === e && (n.onload = function() {
                                200 === n.status ? r(a(this.responseText)) : r(void 0)
                            }
                            ),
                            n.send(null),
                            e && 200 === n.status)
                                return a(n.responseText)
                        }(t, e, r)
                    } catch (t) {}
                    return n
                }(t, e, r)
            }
            ,
            t.loadImageFile = t.loadFile
        }(Ft.API),
        function(t) {
            function e() {
                return (X.html2canvas ? Promise.resolve(X.html2canvas) : r.e(1120).then(r.t.bind(r, 61120, 23))).catch((function(t) {
                    return Promise.reject(new Error("Could not load html2canvas: " + t))
                }
                )).then((function(t) {
                    return t.default ? t.default : t
                }
                ))
            }
            function i() {
                return (X.DOMPurify ? Promise.resolve(X.DOMPurify) : r.e(7856).then(r.t.bind(r, 27856, 23))).catch((function(t) {
                    return Promise.reject(new Error("Could not load dompurify: " + t))
                }
                )).then((function(t) {
                    return t.default ? t.default : t
                }
                ))
            }
            var a = function(t) {
                var e = n(t);
                return "undefined" === e ? "undefined" : "string" === e || t instanceof String ? "string" : "number" === e || t instanceof Number ? "number" : "function" === e || t instanceof Function ? "function" : t && t.constructor === Array ? "array" : t && 1 === t.nodeType ? "element" : "object" === e ? "object" : "unknown"
            }
              , o = function(t, e) {
                var r = document.createElement(t);
                for (var n in e.className && (r.className = e.className),
                e.innerHTML && e.dompurify && (r.innerHTML = e.dompurify.sanitize(e.innerHTML)),
                e.style)
                    r.style[n] = e.style[n];
                return r
            }
              , s = function t(e) {
                var r = Object.assign(t.convert(Promise.resolve()), JSON.parse(JSON.stringify(t.template)))
                  , n = t.convert(Promise.resolve(), r);
                return (n = n.setProgress(1, t, 1, [t])).set(e)
            };
            (s.prototype = Object.create(Promise.prototype)).constructor = s,
            s.convert = function(t, e) {
                return t.__proto__ = e || s.prototype,
                t
            }
            ,
            s.template = {
                prop: {
                    src: null,
                    container: null,
                    overlay: null,
                    canvas: null,
                    img: null,
                    pdf: null,
                    pageSize: null,
                    callback: function() {}
                },
                progress: {
                    val: 0,
                    state: null,
                    n: 0,
                    stack: []
                },
                opt: {
                    filename: "file.pdf",
                    margin: [0, 0, 0, 0],
                    enableLinks: !0,
                    x: 0,
                    y: 0,
                    html2canvas: {},
                    jsPDF: {},
                    backgroundColor: "transparent"
                }
            },
            s.prototype.from = function(t, e) {
                return this.then((function() {
                    switch (e = e || function(t) {
                        switch (a(t)) {
                        case "string":
                            return "string";
                        case "element":
                            return "canvas" === t.nodeName.toLowerCase() ? "canvas" : "element";
                        default:
                            return "unknown"
                        }
                    }(t)) {
                    case "string":
                        return this.then(i).then((function(e) {
                            return this.set({
                                src: o("div", {
                                    innerHTML: t,
                                    dompurify: e
                                })
                            })
                        }
                        ));
                    case "element":
                        return this.set({
                            src: t
                        });
                    case "canvas":
                        return this.set({
                            canvas: t
                        });
                    case "img":
                        return this.set({
                            img: t
                        });
                    default:
                        return this.error("Unknown source type.")
                    }
                }
                ))
            }
            ,
            s.prototype.to = function(t) {
                switch (t) {
                case "container":
                    return this.toContainer();
                case "canvas":
                    return this.toCanvas();
                case "img":
                    return this.toImg();
                case "pdf":
                    return this.toPdf();
                default:
                    return this.error("Invalid target.")
                }
            }
            ,
            s.prototype.toContainer = function() {
                return this.thenList([function() {
                    return this.prop.src || this.error("Cannot duplicate - no source HTML.")
                }
                , function() {
                    return this.prop.pageSize || this.setPageSize()
                }
                ]).then((function() {
                    var t = {
                        position: "relative",
                        display: "inline-block",
                        width: ("number" != typeof this.opt.width || isNaN(this.opt.width) || "number" != typeof this.opt.windowWidth || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px",
                        left: 0,
                        right: 0,
                        top: 0,
                        margin: "auto",
                        backgroundColor: this.opt.backgroundColor
                    }
                      , e = function t(e, r) {
                        for (var n = 3 === e.nodeType ? document.createTextNode(e.nodeValue) : e.cloneNode(!1), i = e.firstChild; i; i = i.nextSibling)
                            !0 !== r && 1 === i.nodeType && "SCRIPT" === i.nodeName || n.appendChild(t(i, r));
                        return 1 === e.nodeType && ("CANVAS" === e.nodeName ? (n.width = e.width,
                        n.height = e.height,
                        n.getContext("2d").drawImage(e, 0, 0)) : "TEXTAREA" !== e.nodeName && "SELECT" !== e.nodeName || (n.value = e.value),
                        n.addEventListener("load", (function() {
                            n.scrollTop = e.scrollTop,
                            n.scrollLeft = e.scrollLeft
                        }
                        ), !0)),
                        n
                    }(this.prop.src, this.opt.html2canvas.javascriptEnabled);
                    "BODY" === e.tagName && (t.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"),
                    this.prop.overlay = o("div", {
                        className: "html2pdf__overlay",
                        style: {
                            position: "fixed",
                            overflow: "hidden",
                            zIndex: 1e3,
                            left: "-100000px",
                            right: 0,
                            bottom: 0,
                            top: 0
                        }
                    }),
                    this.prop.container = o("div", {
                        className: "html2pdf__container",
                        style: t
                    }),
                    this.prop.container.appendChild(e),
                    this.prop.container.firstChild.appendChild(o("div", {
                        style: {
                            clear: "both",
                            border: "0 none transparent",
                            margin: 0,
                            padding: 0,
                            height: 0
                        }
                    })),
                    this.prop.container.style.float = "none",
                    this.prop.overlay.appendChild(this.prop.container),
                    document.body.appendChild(this.prop.overlay),
                    this.prop.container.firstChild.style.position = "relative",
                    this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px"
                }
                ))
            }
            ,
            s.prototype.toCanvas = function() {
                var t = [function() {
                    return document.body.contains(this.prop.container) || this.toContainer()
                }
                ];
                return this.thenList(t).then(e).then((function(t) {
                    var e = Object.assign({}, this.opt.html2canvas);
                    return delete e.onrendered,
                    t(this.prop.container, e)
                }
                )).then((function(t) {
                    (this.opt.html2canvas.onrendered || function() {}
                    )(t),
                    this.prop.canvas = t,
                    document.body.removeChild(this.prop.overlay)
                }
                ))
            }
            ,
            s.prototype.toContext2d = function() {
                var t = [function() {
                    return document.body.contains(this.prop.container) || this.toContainer()
                }
                ];
                return this.thenList(t).then(e).then((function(t) {
                    var e = this.opt.jsPDF
                      , r = this.opt.fontFaces
                      , n = "number" != typeof this.opt.width || isNaN(this.opt.width) || "number" != typeof this.opt.windowWidth || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth
                      , i = Object.assign({
                        async: !0,
                        allowTaint: !0,
                        scale: n,
                        scrollX: this.opt.scrollX || 0,
                        scrollY: this.opt.scrollY || 0,
                        backgroundColor: "#ffffff",
                        imageTimeout: 15e3,
                        logging: !0,
                        proxy: null,
                        removeContainer: !0,
                        foreignObjectRendering: !1,
                        useCORS: !1
                    }, this.opt.html2canvas);
                    if (delete i.onrendered,
                    e.context2d.autoPaging = void 0 === this.opt.autoPaging || this.opt.autoPaging,
                    e.context2d.posX = this.opt.x,
                    e.context2d.posY = this.opt.y,
                    e.context2d.margin = this.opt.margin,
                    e.context2d.fontFaces = r,
                    r)
                        for (var a = 0; a < r.length; ++a) {
                            var o = r[a]
                              , s = o.src.find((function(t) {
                                return "truetype" === t.format
                            }
                            ));
                            s && e.addFont(s.url, o.ref.name, o.ref.style)
                        }
                    return i.windowHeight = i.windowHeight || 0,
                    i.windowHeight = 0 == i.windowHeight ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : i.windowHeight,
                    e.context2d.save(!0),
                    t(this.prop.container, i)
                }
                )).then((function(t) {
                    this.opt.jsPDF.context2d.restore(!0),
                    (this.opt.html2canvas.onrendered || function() {}
                    )(t),
                    this.prop.canvas = t,
                    document.body.removeChild(this.prop.overlay)
                }
                ))
            }
            ,
            s.prototype.toImg = function() {
                return this.thenList([function() {
                    return this.prop.canvas || this.toCanvas()
                }
                ]).then((function() {
                    var t = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
                    this.prop.img = document.createElement("img"),
                    this.prop.img.src = t
                }
                ))
            }
            ,
            s.prototype.toPdf = function() {
                return this.thenList([function() {
                    return this.toContext2d()
                }
                ]).then((function() {
                    this.prop.pdf = this.prop.pdf || this.opt.jsPDF
                }
                ))
            }
            ,
            s.prototype.output = function(t, e, r) {
                return "img" === (r = r || "pdf").toLowerCase() || "image" === r.toLowerCase() ? this.outputImg(t, e) : this.outputPdf(t, e)
            }
            ,
            s.prototype.outputPdf = function(t, e) {
                return this.thenList([function() {
                    return this.prop.pdf || this.toPdf()
                }
                ]).then((function() {
                    return this.prop.pdf.output(t, e)
                }
                ))
            }
            ,
            s.prototype.outputImg = function(t) {
                return this.thenList([function() {
                    return this.prop.img || this.toImg()
                }
                ]).then((function() {
                    switch (t) {
                    case void 0:
                    case "img":
                        return this.prop.img;
                    case "datauristring":
                    case "dataurlstring":
                        return this.prop.img.src;
                    case "datauri":
                    case "dataurl":
                        return document.location.href = this.prop.img.src;
                    default:
                        throw 'Image output type "' + t + '" is not supported.'
                    }
                }
                ))
            }
            ,
            s.prototype.save = function(t) {
                return this.thenList([function() {
                    return this.prop.pdf || this.toPdf()
                }
                ]).set(t ? {
                    filename: t
                } : null).then((function() {
                    this.prop.pdf.save(this.opt.filename)
                }
                ))
            }
            ,
            s.prototype.doCallback = function() {
                return this.thenList([function() {
                    return this.prop.pdf || this.toPdf()
                }
                ]).then((function() {
                    this.prop.callback(this.prop.pdf)
                }
                ))
            }
            ,
            s.prototype.set = function(t) {
                if ("object" !== a(t))
                    return this;
                var e = Object.keys(t || {}).map((function(e) {
                    if (e in s.template.prop)
                        return function() {
                            this.prop[e] = t[e]
                        }
                        ;
                    switch (e) {
                    case "margin":
                        return this.setMargin.bind(this, t.margin);
                    case "jsPDF":
                        return function() {
                            return this.opt.jsPDF = t.jsPDF,
                            this.setPageSize()
                        }
                        ;
                    case "pageSize":
                        return this.setPageSize.bind(this, t.pageSize);
                    default:
                        return function() {
                            this.opt[e] = t[e]
                        }
                    }
                }
                ), this);
                return this.then((function() {
                    return this.thenList(e)
                }
                ))
            }
            ,
            s.prototype.get = function(t, e) {
                return this.then((function() {
                    var r = t in s.template.prop ? this.prop[t] : this.opt[t];
                    return e ? e(r) : r
                }
                ))
            }
            ,
            s.prototype.setMargin = function(t) {
                return this.then((function() {
                    switch (a(t)) {
                    case "number":
                        t = [t, t, t, t];
                    case "array":
                        if (2 === t.length && (t = [t[0], t[1], t[0], t[1]]),
                        4 === t.length)
                            break;
                    default:
                        return this.error("Invalid margin array.")
                    }
                    this.opt.margin = t
                }
                )).then(this.setPageSize)
            }
            ,
            s.prototype.setPageSize = function(t) {
                function e(t, e) {
                    return Math.floor(t * e / 72 * 96)
                }
                return this.then((function() {
                    (t = t || Ft.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (t.inner = {
                        width: t.width - this.opt.margin[1] - this.opt.margin[3],
                        height: t.height - this.opt.margin[0] - this.opt.margin[2]
                    },
                    t.inner.px = {
                        width: e(t.inner.width, t.k),
                        height: e(t.inner.height, t.k)
                    },
                    t.inner.ratio = t.inner.height / t.inner.width),
                    this.prop.pageSize = t
                }
                ))
            }
            ,
            s.prototype.setProgress = function(t, e, r, n) {
                return null != t && (this.progress.val = t),
                null != e && (this.progress.state = e),
                null != r && (this.progress.n = r),
                null != n && (this.progress.stack = n),
                this.progress.ratio = this.progress.val / this.progress.state,
                this
            }
            ,
            s.prototype.updateProgress = function(t, e, r, n) {
                return this.setProgress(t ? this.progress.val + t : null, e || null, r ? this.progress.n + r : null, n ? this.progress.stack.concat(n) : null)
            }
            ,
            s.prototype.then = function(t, e) {
                var r = this;
                return this.thenCore(t, e, (function(t, e) {
                    return r.updateProgress(null, null, 1, [t]),
                    Promise.prototype.then.call(this, (function(e) {
                        return r.updateProgress(null, t),
                        e
                    }
                    )).then(t, e).then((function(t) {
                        return r.updateProgress(1),
                        t
                    }
                    ))
                }
                ))
            }
            ,
            s.prototype.thenCore = function(t, e, r) {
                r = r || Promise.prototype.then,
                t && (t = t.bind(this)),
                e && (e = e.bind(this));
                var n = -1 !== Promise.toString().indexOf("[native code]") && "Promise" === Promise.name ? this : s.convert(Object.assign({}, this), Promise.prototype)
                  , i = r.call(n, t, e);
                return s.convert(i, this.__proto__)
            }
            ,
            s.prototype.thenExternal = function(t, e) {
                return Promise.prototype.then.call(this, t, e)
            }
            ,
            s.prototype.thenList = function(t) {
                var e = this;
                return t.forEach((function(t) {
                    e = e.thenCore(t)
                }
                )),
                e
            }
            ,
            s.prototype.catch = function(t) {
                t && (t = t.bind(this));
                var e = Promise.prototype.catch.call(this, t);
                return s.convert(e, this)
            }
            ,
            s.prototype.catchExternal = function(t) {
                return Promise.prototype.catch.call(this, t)
            }
            ,
            s.prototype.error = function(t) {
                return this.then((function() {
                    throw new Error(t)
                }
                ))
            }
            ,
            s.prototype.using = s.prototype.set,
            s.prototype.saveAs = s.prototype.save,
            s.prototype.export = s.prototype.output,
            s.prototype.run = s.prototype.then,
            Ft.getPageSize = function(t, e, r) {
                if ("object" === n(t)) {
                    var i = t;
                    t = i.orientation,
                    e = i.unit || e,
                    r = i.format || r
                }
                e = e || "mm",
                r = r || "a4",
                t = ("" + (t || "P")).toLowerCase();
                var a, o = ("" + r).toLowerCase(), s = {
                    a0: [2383.94, 3370.39],
                    a1: [1683.78, 2383.94],
                    a2: [1190.55, 1683.78],
                    a3: [841.89, 1190.55],
                    a4: [595.28, 841.89],
                    a5: [419.53, 595.28],
                    a6: [297.64, 419.53],
                    a7: [209.76, 297.64],
                    a8: [147.4, 209.76],
                    a9: [104.88, 147.4],
                    a10: [73.7, 104.88],
                    b0: [2834.65, 4008.19],
                    b1: [2004.09, 2834.65],
                    b2: [1417.32, 2004.09],
                    b3: [1000.63, 1417.32],
                    b4: [708.66, 1000.63],
                    b5: [498.9, 708.66],
                    b6: [354.33, 498.9],
                    b7: [249.45, 354.33],
                    b8: [175.75, 249.45],
                    b9: [124.72, 175.75],
                    b10: [87.87, 124.72],
                    c0: [2599.37, 3676.54],
                    c1: [1836.85, 2599.37],
                    c2: [1298.27, 1836.85],
                    c3: [918.43, 1298.27],
                    c4: [649.13, 918.43],
                    c5: [459.21, 649.13],
                    c6: [323.15, 459.21],
                    c7: [229.61, 323.15],
                    c8: [161.57, 229.61],
                    c9: [113.39, 161.57],
                    c10: [79.37, 113.39],
                    dl: [311.81, 623.62],
                    letter: [612, 792],
                    "government-letter": [576, 756],
                    legal: [612, 1008],
                    "junior-legal": [576, 360],
                    ledger: [1224, 792],
                    tabloid: [792, 1224],
                    "credit-card": [153, 243]
                };
                switch (e) {
                case "pt":
                    a = 1;
                    break;
                case "mm":
                    a = 72 / 25.4;
                    break;
                case "cm":
                    a = 72 / 2.54;
                    break;
                case "in":
                    a = 72;
                    break;
                case "px":
                    a = .75;
                    break;
                case "pc":
                case "em":
                    a = 12;
                    break;
                case "ex":
                    a = 6;
                    break;
                default:
                    throw "Invalid unit: " + e
                }
                var l, u = 0, c = 0;
                if (s.hasOwnProperty(o))
                    u = s[o][1] / a,
                    c = s[o][0] / a;
                else
                    try {
                        u = r[1],
                        c = r[0]
                    } catch (t) {
                        throw new Error("Invalid format: " + r)
                    }
                if ("p" === t || "portrait" === t)
                    t = "p",
                    c > u && (l = c,
                    c = u,
                    u = l);
                else {
                    if ("l" !== t && "landscape" !== t)
                        throw "Invalid orientation: " + t;
                    t = "l",
                    u > c && (l = c,
                    c = u,
                    u = l)
                }
                return {
                    width: c,
                    height: u,
                    unit: e,
                    k: a,
                    orientation: t
                }
            }
            ,
            t.html = function(t, e) {
                (e = e || {}).callback = e.callback || function() {}
                ,
                e.html2canvas = e.html2canvas || {},
                e.html2canvas.canvas = e.html2canvas.canvas || this.canvas,
                e.jsPDF = e.jsPDF || this,
                e.fontFaces = e.fontFaces ? e.fontFaces.map(Pe) : null;
                var r = new s(e);
                return e.worker ? r : r.from(t).doCallback()
            }
        }(Ft.API),
        Ft.API.addJS = function(t) {
            return Be = t,
            this.internal.events.subscribe("postPutResources", (function() {
                Te = this.internal.newObject(),
                this.internal.out("<<"),
                this.internal.out("/Names [(EmbeddedJS) " + (Te + 1) + " 0 R]"),
                this.internal.out(">>"),
                this.internal.out("endobj"),
                Me = this.internal.newObject(),
                this.internal.out("<<"),
                this.internal.out("/S /JavaScript"),
                this.internal.out("/JS (" + Be + ")"),
                this.internal.out(">>"),
                this.internal.out("endobj")
            }
            )),
            this.internal.events.subscribe("putCatalog", (function() {
                void 0 !== Te && void 0 !== Me && this.internal.out("/Names <</JavaScript " + Te + " 0 R>>")
            }
            )),
            this
        }
        ,
        function(t) {
            var e;
            t.events.push(["postPutResources", function() {
                var t = this
                  , r = /^(\d+) 0 obj$/;
                if (this.outline.root.children.length > 0)
                    for (var n = t.outline.render().split(/\r\n/), i = 0; i < n.length; i++) {
                        var a = n[i]
                          , o = r.exec(a);
                        if (null != o) {
                            var s = o[1];
                            t.internal.newObjectDeferredBegin(s, !1)
                        }
                        t.internal.write(a)
                    }
                if (this.outline.createNamedDestinations) {
                    var l = this.internal.pages.length
                      , u = [];
                    for (i = 0; i < l; i++) {
                        var c = t.internal.newObject();
                        u.push(c);
                        var h = t.internal.getPageInfo(i + 1);
                        t.internal.write("<< /D[" + h.objId + " 0 R /XYZ null null null]>> endobj")
                    }
                    var f = t.internal.newObject();
                    for (t.internal.write("<< /Names [ "),
                    i = 0; i < u.length; i++)
                        t.internal.write("(page_" + (i + 1) + ")" + u[i] + " 0 R");
                    t.internal.write(" ] >>", "endobj"),
                    e = t.internal.newObject(),
                    t.internal.write("<< /Dests " + f + " 0 R"),
                    t.internal.write(">>", "endobj")
                }
            }
            ]),
            t.events.push(["putCatalog", function() {
                this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)),
                this.outline.createNamedDestinations && this.internal.write("/Names " + e + " 0 R"))
            }
            ]),
            t.events.push(["initialized", function() {
                var t = this;
                t.outline = {
                    createNamedDestinations: !1,
                    root: {
                        children: []
                    }
                },
                t.outline.add = function(t, e, r) {
                    var n = {
                        title: e,
                        options: r,
                        children: []
                    };
                    return null == t && (t = this.root),
                    t.children.push(n),
                    n
                }
                ,
                t.outline.render = function() {
                    return this.ctx = {},
                    this.ctx.val = "",
                    this.ctx.pdf = t,
                    this.genIds_r(this.root),
                    this.renderRoot(this.root),
                    this.renderItems(this.root),
                    this.ctx.val
                }
                ,
                t.outline.genIds_r = function(e) {
                    e.id = t.internal.newObjectDeferred();
                    for (var r = 0; r < e.children.length; r++)
                        this.genIds_r(e.children[r])
                }
                ,
                t.outline.renderRoot = function(t) {
                    this.objStart(t),
                    this.line("/Type /Outlines"),
                    t.children.length > 0 && (this.line("/First " + this.makeRef(t.children[0])),
                    this.line("/Last " + this.makeRef(t.children[t.children.length - 1]))),
                    this.line("/Count " + this.count_r({
                        count: 0
                    }, t)),
                    this.objEnd()
                }
                ,
                t.outline.renderItems = function(e) {
                    for (var r = this.ctx.pdf.internal.getVerticalCoordinateString, n = 0; n < e.children.length; n++) {
                        var i = e.children[n];
                        this.objStart(i),
                        this.line("/Title " + this.makeString(i.title)),
                        this.line("/Parent " + this.makeRef(e)),
                        n > 0 && this.line("/Prev " + this.makeRef(e.children[n - 1])),
                        n < e.children.length - 1 && this.line("/Next " + this.makeRef(e.children[n + 1])),
                        i.children.length > 0 && (this.line("/First " + this.makeRef(i.children[0])),
                        this.line("/Last " + this.makeRef(i.children[i.children.length - 1])));
                        var a = this.count = this.count_r({
                            count: 0
                        }, i);
                        if (a > 0 && this.line("/Count " + a),
                        i.options && i.options.pageNumber) {
                            var o = t.internal.getPageInfo(i.options.pageNumber);
                            this.line("/Dest [" + o.objId + " 0 R /XYZ 0 " + r(0) + " 0]")
                        }
                        this.objEnd()
                    }
                    for (var s = 0; s < e.children.length; s++)
                        this.renderItems(e.children[s])
                }
                ,
                t.outline.line = function(t) {
                    this.ctx.val += t + "\r\n"
                }
                ,
                t.outline.makeRef = function(t) {
                    return t.id + " 0 R"
                }
                ,
                t.outline.makeString = function(e) {
                    return "(" + t.internal.pdfEscape(e) + ")"
                }
                ,
                t.outline.objStart = function(t) {
                    this.ctx.val += "\r\n" + t.id + " 0 obj\r\n<<\r\n"
                }
                ,
                t.outline.objEnd = function() {
                    this.ctx.val += ">> \r\nendobj\r\n"
                }
                ,
                t.outline.count_r = function(t, e) {
                    for (var r = 0; r < e.children.length; r++)
                        t.count++,
                        this.count_r(t, e.children[r]);
                    return t.count
                }
            }
            ])
        }(Ft.API),
        function(t) {
            var e = [192, 193, 194, 195, 196, 197, 198, 199];
            t.processJPEG = function(t, r, n, i, a, o) {
                var s, l = this.decode.DCT_DECODE, u = null;
                if ("string" == typeof t || this.__addimage__.isArrayBuffer(t) || this.__addimage__.isArrayBufferView(t)) {
                    switch (t = a || t,
                    t = this.__addimage__.isArrayBuffer(t) ? new Uint8Array(t) : t,
                    (s = function(t) {
                        for (var r, n = 256 * t.charCodeAt(4) + t.charCodeAt(5), i = t.length, a = {
                            width: 0,
                            height: 0,
                            numcomponents: 1
                        }, o = 4; o < i; o += 2) {
                            if (o += n,
                            -1 !== e.indexOf(t.charCodeAt(o + 1))) {
                                r = 256 * t.charCodeAt(o + 5) + t.charCodeAt(o + 6),
                                a = {
                                    width: 256 * t.charCodeAt(o + 7) + t.charCodeAt(o + 8),
                                    height: r,
                                    numcomponents: t.charCodeAt(o + 9)
                                };
                                break
                            }
                            n = 256 * t.charCodeAt(o + 2) + t.charCodeAt(o + 3)
                        }
                        return a
                    }(t = this.__addimage__.isArrayBufferView(t) ? this.__addimage__.arrayBufferToBinaryString(t) : t)).numcomponents) {
                    case 1:
                        o = this.color_spaces.DEVICE_GRAY;
                        break;
                    case 4:
                        o = this.color_spaces.DEVICE_CMYK;
                        break;
                    case 3:
                        o = this.color_spaces.DEVICE_RGB
                    }
                    u = {
                        data: t,
                        width: s.width,
                        height: s.height,
                        colorSpace: o,
                        bitsPerComponent: 8,
                        filter: l,
                        index: r,
                        alias: n
                    }
                }
                return u
            }
        }(Ft.API);
        var Re, qe, ze, Ue, We, He = function() {
            var t, e, r;
            function n(t) {
                var e, r, n, i, a, o, s, l, u, c, h, f, d, p;
                for (this.data = t,
                this.pos = 8,
                this.palette = [],
                this.imgData = [],
                this.transparency = {},
                this.animation = null,
                this.text = {},
                o = null; ; ) {
                    switch (e = this.readUInt32(),
                    u = function() {
                        var t, e;
                        for (e = [],
                        t = 0; t < 4; ++t)
                            e.push(String.fromCharCode(this.data[this.pos++]));
                        return e
                    }
                    .call(this).join("")) {
                    case "IHDR":
                        this.width = this.readUInt32(),
                        this.height = this.readUInt32(),
                        this.bits = this.data[this.pos++],
                        this.colorType = this.data[this.pos++],
                        this.compressionMethod = this.data[this.pos++],
                        this.filterMethod = this.data[this.pos++],
                        this.interlaceMethod = this.data[this.pos++];
                        break;
                    case "acTL":
                        this.animation = {
                            numFrames: this.readUInt32(),
                            numPlays: this.readUInt32() || 1 / 0,
                            frames: []
                        };
                        break;
                    case "PLTE":
                        this.palette = this.read(e);
                        break;
                    case "fcTL":
                        o && this.animation.frames.push(o),
                        this.pos += 4,
                        o = {
                            width: this.readUInt32(),
                            height: this.readUInt32(),
                            xOffset: this.readUInt32(),
                            yOffset: this.readUInt32()
                        },
                        a = this.readUInt16(),
                        i = this.readUInt16() || 100,
                        o.delay = 1e3 * a / i,
                        o.disposeOp = this.data[this.pos++],
                        o.blendOp = this.data[this.pos++],
                        o.data = [];
                        break;
                    case "IDAT":
                    case "fdAT":
                        for ("fdAT" === u && (this.pos += 4,
                        e -= 4),
                        t = (null != o ? o.data : void 0) || this.imgData,
                        f = 0; 0 <= e ? f < e : f > e; 0 <= e ? ++f : --f)
                            t.push(this.data[this.pos++]);
                        break;
                    case "tRNS":
                        switch (this.transparency = {},
                        this.colorType) {
                        case 3:
                            if (n = this.palette.length / 3,
                            this.transparency.indexed = this.read(e),
                            this.transparency.indexed.length > n)
                                throw new Error("More transparent colors than palette size");
                            if ((c = n - this.transparency.indexed.length) > 0)
                                for (d = 0; 0 <= c ? d < c : d > c; 0 <= c ? ++d : --d)
                                    this.transparency.indexed.push(255);
                            break;
                        case 0:
                            this.transparency.grayscale = this.read(e)[0];
                            break;
                        case 2:
                            this.transparency.rgb = this.read(e)
                        }
                        break;
                    case "tEXt":
                        s = (h = this.read(e)).indexOf(0),
                        l = String.fromCharCode.apply(String, h.slice(0, s)),
                        this.text[l] = String.fromCharCode.apply(String, h.slice(s + 1));
                        break;
                    case "IEND":
                        return o && this.animation.frames.push(o),
                        this.colors = function() {
                            switch (this.colorType) {
                            case 0:
                            case 3:
                            case 4:
                                return 1;
                            case 2:
                            case 6:
                                return 3
                            }
                        }
                        .call(this),
                        this.hasAlphaChannel = 4 === (p = this.colorType) || 6 === p,
                        r = this.colors + (this.hasAlphaChannel ? 1 : 0),
                        this.pixelBitlength = this.bits * r,
                        this.colorSpace = function() {
                            switch (this.colors) {
                            case 1:
                                return "DeviceGray";
                            case 3:
                                return "DeviceRGB"
                            }
                        }
                        .call(this),
                        void (this.imgData = new Uint8Array(this.imgData));
                    default:
                        this.pos += e
                    }
                    if (this.pos += 4,
                    this.pos > this.data.length)
                        throw new Error("Incomplete or corrupt PNG file")
                }
            }
            n.prototype.read = function(t) {
                var e, r;
                for (r = [],
                e = 0; 0 <= t ? e < t : e > t; 0 <= t ? ++e : --e)
                    r.push(this.data[this.pos++]);
                return r
            }
            ,
            n.prototype.readUInt32 = function() {
                return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++]
            }
            ,
            n.prototype.readUInt16 = function() {
                return this.data[this.pos++] << 8 | this.data[this.pos++]
            }
            ,
            n.prototype.decodePixels = function(t) {
                var e = this.pixelBitlength / 8
                  , r = new Uint8Array(this.width * this.height * e)
                  , n = 0
                  , i = this;
                if (null == t && (t = this.imgData),
                0 === t.length)
                    return new Uint8Array(0);
                function a(a, o, s, l) {
                    var u, c, h, f, d, p, g, m, v, b, y, w, x, _, N, A, L, S, P, C, k, F = Math.ceil((i.width - a) / s), I = Math.ceil((i.height - o) / l), j = i.width == F && i.height == I;
                    for (_ = e * F,
                    w = j ? r : new Uint8Array(_ * I),
                    p = t.length,
                    x = 0,
                    c = 0; x < I && n < p; ) {
                        switch (t[n++]) {
                        case 0:
                            for (f = L = 0; L < _; f = L += 1)
                                w[c++] = t[n++];
                            break;
                        case 1:
                            for (f = S = 0; S < _; f = S += 1)
                                u = t[n++],
                                d = f < e ? 0 : w[c - e],
                                w[c++] = (u + d) % 256;
                            break;
                        case 2:
                            for (f = P = 0; P < _; f = P += 1)
                                u = t[n++],
                                h = (f - f % e) / e,
                                N = x && w[(x - 1) * _ + h * e + f % e],
                                w[c++] = (N + u) % 256;
                            break;
                        case 3:
                            for (f = C = 0; C < _; f = C += 1)
                                u = t[n++],
                                h = (f - f % e) / e,
                                d = f < e ? 0 : w[c - e],
                                N = x && w[(x - 1) * _ + h * e + f % e],
                                w[c++] = (u + Math.floor((d + N) / 2)) % 256;
                            break;
                        case 4:
                            for (f = k = 0; k < _; f = k += 1)
                                u = t[n++],
                                h = (f - f % e) / e,
                                d = f < e ? 0 : w[c - e],
                                0 === x ? N = A = 0 : (N = w[(x - 1) * _ + h * e + f % e],
                                A = h && w[(x - 1) * _ + (h - 1) * e + f % e]),
                                g = d + N - A,
                                m = Math.abs(g - d),
                                b = Math.abs(g - N),
                                y = Math.abs(g - A),
                                v = m <= b && m <= y ? d : b <= y ? N : A,
                                w[c++] = (u + v) % 256;
                            break;
                        default:
                            throw new Error("Invalid filter algorithm: " + t[n - 1])
                        }
                        if (!j) {
                            var O = ((o + x * l) * i.width + a) * e
                              , D = x * _;
                            for (f = 0; f < F; f += 1) {
                                for (var T = 0; T < e; T += 1)
                                    r[O++] = w[D++];
                                O += (s - 1) * e
                            }
                        }
                        x++
                    }
                }
                return t = K(t),
                1 == i.interlaceMethod ? (a(0, 0, 8, 8),
                a(4, 0, 8, 8),
                a(0, 4, 4, 8),
                a(2, 0, 4, 4),
                a(0, 2, 2, 4),
                a(1, 0, 2, 2),
                a(0, 1, 1, 2)) : a(0, 0, 1, 1),
                r
            }
            ,
            n.prototype.decodePalette = function() {
                var t, e, r, n, i, a, o, s, l;
                for (r = this.palette,
                a = this.transparency.indexed || [],
                i = new Uint8Array((a.length || 0) + r.length),
                n = 0,
                t = 0,
                e = o = 0,
                s = r.length; o < s; e = o += 3)
                    i[n++] = r[e],
                    i[n++] = r[e + 1],
                    i[n++] = r[e + 2],
                    i[n++] = null != (l = a[t++]) ? l : 255;
                return i
            }
            ,
            n.prototype.copyToImageData = function(t, e) {
                var r, n, i, a, o, s, l, u, c, h, f;
                if (n = this.colors,
                c = null,
                r = this.hasAlphaChannel,
                this.palette.length && (c = null != (f = this._decodedPalette) ? f : this._decodedPalette = this.decodePalette(),
                n = 4,
                r = !0),
                u = (i = t.data || t).length,
                o = c || e,
                a = s = 0,
                1 === n)
                    for (; a < u; )
                        l = c ? 4 * e[a / 4] : s,
                        h = o[l++],
                        i[a++] = h,
                        i[a++] = h,
                        i[a++] = h,
                        i[a++] = r ? o[l++] : 255,
                        s = l;
                else
                    for (; a < u; )
                        l = c ? 4 * e[a / 4] : s,
                        i[a++] = o[l++],
                        i[a++] = o[l++],
                        i[a++] = o[l++],
                        i[a++] = r ? o[l++] : 255,
                        s = l
            }
            ,
            n.prototype.decode = function() {
                var t;
                return t = new Uint8Array(this.width * this.height * 4),
                this.copyToImageData(t, this.decodePixels()),
                t
            }
            ;
            var i = function() {
                if ("[object Window]" === Object.prototype.toString.call(X)) {
                    try {
                        e = X.document.createElement("canvas"),
                        r = e.getContext("2d")
                    } catch (t) {
                        return !1
                    }
                    return !0
                }
                return !1
            };
            return i(),
            t = function(t) {
                var n;
                if (!0 === i())
                    return r.width = t.width,
                    r.height = t.height,
                    r.clearRect(0, 0, t.width, t.height),
                    r.putImageData(t, 0, 0),
                    (n = new Image).src = e.toDataURL(),
                    n;
                throw new Error("This method requires a Browser with Canvas-capability.")
            }
            ,
            n.prototype.decodeFrames = function(e) {
                var r, n, i, a, o, s, l, u;
                if (this.animation) {
                    for (u = [],
                    n = o = 0,
                    s = (l = this.animation.frames).length; o < s; n = ++o)
                        r = l[n],
                        i = e.createImageData(r.width, r.height),
                        a = this.decodePixels(new Uint8Array(r.data)),
                        this.copyToImageData(i, a),
                        r.imageData = i,
                        u.push(r.image = t(i));
                    return u
                }
            }
            ,
            n.prototype.renderFrame = function(t, e) {
                var r, n, i;
                return r = (n = this.animation.frames)[e],
                i = n[e - 1],
                0 === e && t.clearRect(0, 0, this.width, this.height),
                1 === (null != i ? i.disposeOp : void 0) ? t.clearRect(i.xOffset, i.yOffset, i.width, i.height) : 2 === (null != i ? i.disposeOp : void 0) && t.putImageData(i.imageData, i.xOffset, i.yOffset),
                0 === r.blendOp && t.clearRect(r.xOffset, r.yOffset, r.width, r.height),
                t.drawImage(r.image, r.xOffset, r.yOffset)
            }
            ,
            n.prototype.animate = function(t) {
                var e, r, n, i, a, o, s = this;
                return r = 0,
                o = this.animation,
                i = o.numFrames,
                n = o.frames,
                a = o.numPlays,
                (e = function() {
                    var o, l;
                    if (o = r++ % i,
                    l = n[o],
                    s.renderFrame(t, o),
                    i > 1 && r / i < a)
                        return s.animation._timeout = setTimeout(e, l.delay)
                }
                )()
            }
            ,
            n.prototype.stopAnimation = function() {
                var t;
                return clearTimeout(null != (t = this.animation) ? t._timeout : void 0)
            }
            ,
            n.prototype.render = function(t) {
                var e, r;
                return t._png && t._png.stopAnimation(),
                t._png = this,
                t.width = this.width,
                t.height = this.height,
                e = t.getContext("2d"),
                this.animation ? (this.decodeFrames(e),
                this.animate(e)) : (r = e.createImageData(this.width, this.height),
                this.copyToImageData(r, this.decodePixels()),
                e.putImageData(r, 0, 0))
            }
            ,
            n
        }();
        function Ve(t) {
            var e = 0;
            if (71 !== t[e++] || 73 !== t[e++] || 70 !== t[e++] || 56 !== t[e++] || 56 != (t[e++] + 1 & 253) || 97 !== t[e++])
                throw new Error("Invalid GIF 87a/89a header.");
            var r = t[e++] | t[e++] << 8
              , n = t[e++] | t[e++] << 8
              , i = t[e++]
              , a = i >> 7
              , o = 1 << 1 + (7 & i);
            t[e++],
            t[e++];
            var s = null
              , l = null;
            a && (s = e,
            l = o,
            e += 3 * o);
            var u = !0
              , c = []
              , h = 0
              , f = null
              , d = 0
              , p = null;
            for (this.width = r,
            this.height = n; u && e < t.length; )
                switch (t[e++]) {
                case 33:
                    switch (t[e++]) {
                    case 255:
                        if (11 !== t[e] || 78 == t[e + 1] && 69 == t[e + 2] && 84 == t[e + 3] && 83 == t[e + 4] && 67 == t[e + 5] && 65 == t[e + 6] && 80 == t[e + 7] && 69 == t[e + 8] && 50 == t[e + 9] && 46 == t[e + 10] && 48 == t[e + 11] && 3 == t[e + 12] && 1 == t[e + 13] && 0 == t[e + 16])
                            e += 14,
                            p = t[e++] | t[e++] << 8,
                            e++;
                        else
                            for (e += 12; ; ) {
                                if (!((P = t[e++]) >= 0))
                                    throw Error("Invalid block size");
                                if (0 === P)
                                    break;
                                e += P
                            }
                        break;
                    case 249:
                        if (4 !== t[e++] || 0 !== t[e + 4])
                            throw new Error("Invalid graphics extension block.");
                        var g = t[e++];
                        h = t[e++] | t[e++] << 8,
                        f = t[e++],
                        0 == (1 & g) && (f = null),
                        d = g >> 2 & 7,
                        e++;
                        break;
                    case 254:
                        for (; ; ) {
                            if (!((P = t[e++]) >= 0))
                                throw Error("Invalid block size");
                            if (0 === P)
                                break;
                            e += P
                        }
                        break;
                    default:
                        throw new Error("Unknown graphic control label: 0x" + t[e - 1].toString(16))
                    }
                    break;
                case 44:
                    var m = t[e++] | t[e++] << 8
                      , v = t[e++] | t[e++] << 8
                      , b = t[e++] | t[e++] << 8
                      , y = t[e++] | t[e++] << 8
                      , w = t[e++]
                      , x = w >> 6 & 1
                      , _ = 1 << 1 + (7 & w)
                      , N = s
                      , A = l
                      , L = !1;
                    w >> 7 && (L = !0,
                    N = e,
                    A = _,
                    e += 3 * _);
                    var S = e;
                    for (e++; ; ) {
                        var P;
                        if (!((P = t[e++]) >= 0))
                            throw Error("Invalid block size");
                        if (0 === P)
                            break;
                        e += P
                    }
                    c.push({
                        x: m,
                        y: v,
                        width: b,
                        height: y,
                        has_local_palette: L,
                        palette_offset: N,
                        palette_size: A,
                        data_offset: S,
                        data_length: e - S,
                        transparent_index: f,
                        interlaced: !!x,
                        delay: h,
                        disposal: d
                    });
                    break;
                case 59:
                    u = !1;
                    break;
                default:
                    throw new Error("Unknown gif block: 0x" + t[e - 1].toString(16))
                }
            this.numFrames = function() {
                return c.length
            }
            ,
            this.loopCount = function() {
                return p
            }
            ,
            this.frameInfo = function(t) {
                if (t < 0 || t >= c.length)
                    throw new Error("Frame index out of range.");
                return c[t]
            }
            ,
            this.decodeAndBlitFrameBGRA = function(e, n) {
                var i = this.frameInfo(e)
                  , a = i.width * i.height
                  , o = new Uint8Array(a);
                Ge(t, i.data_offset, o, a);
                var s = i.palette_offset
                  , l = i.transparent_index;
                null === l && (l = 256);
                var u = i.width
                  , c = r - u
                  , h = u
                  , f = 4 * (i.y * r + i.x)
                  , d = 4 * ((i.y + i.height) * r + i.x)
                  , p = f
                  , g = 4 * c;
                !0 === i.interlaced && (g += 4 * r * 7);
                for (var m = 8, v = 0, b = o.length; v < b; ++v) {
                    var y = o[v];
                    if (0 === h && (h = u,
                    (p += g) >= d && (g = 4 * c + 4 * r * (m - 1),
                    p = f + (u + c) * (m << 1),
                    m >>= 1)),
                    y === l)
                        p += 4;
                    else {
                        var w = t[s + 3 * y]
                          , x = t[s + 3 * y + 1]
                          , _ = t[s + 3 * y + 2];
                        n[p++] = _,
                        n[p++] = x,
                        n[p++] = w,
                        n[p++] = 255
                    }
                    --h
                }
            }
            ,
            this.decodeAndBlitFrameRGBA = function(e, n) {
                var i = this.frameInfo(e)
                  , a = i.width * i.height
                  , o = new Uint8Array(a);
                Ge(t, i.data_offset, o, a);
                var s = i.palette_offset
                  , l = i.transparent_index;
                null === l && (l = 256);
                var u = i.width
                  , c = r - u
                  , h = u
                  , f = 4 * (i.y * r + i.x)
                  , d = 4 * ((i.y + i.height) * r + i.x)
                  , p = f
                  , g = 4 * c;
                !0 === i.interlaced && (g += 4 * r * 7);
                for (var m = 8, v = 0, b = o.length; v < b; ++v) {
                    var y = o[v];
                    if (0 === h && (h = u,
                    (p += g) >= d && (g = 4 * c + 4 * r * (m - 1),
                    p = f + (u + c) * (m << 1),
                    m >>= 1)),
                    y === l)
                        p += 4;
                    else {
                        var w = t[s + 3 * y]
                          , x = t[s + 3 * y + 1]
                          , _ = t[s + 3 * y + 2];
                        n[p++] = w,
                        n[p++] = x,
                        n[p++] = _,
                        n[p++] = 255
                    }
                    --h
                }
            }
        }
        function Ge(t, e, r, n) {
            for (var i = t[e++], a = 1 << i, o = a + 1, s = o + 1, l = i + 1, u = (1 << l) - 1, c = 0, h = 0, f = 0, d = t[e++], p = new Int32Array(4096), g = null; ; ) {
                for (; c < 16 && 0 !== d; )
                    h |= t[e++] << c,
                    c += 8,
                    1 === d ? d = t[e++] : --d;
                if (c < l)
                    break;
                var m = h & u;
                if (h >>= l,
                c -= l,
                m !== a) {
                    if (m === o)
                        break;
                    for (var v = m < s ? m : g, b = 0, y = v; y > a; )
                        y = p[y] >> 8,
                        ++b;
                    var w = y;
                    if (f + b + (v !== m ? 1 : 0) > n)
                        return void Q.log("Warning, gif stream longer than expected.");
                    r[f++] = w;
                    var x = f += b;
                    for (v !== m && (r[f++] = w),
                    y = v; b--; )
                        y = p[y],
                        r[--x] = 255 & y,
                        y >>= 8;
                    null !== g && s < 4096 && (p[s++] = g << 8 | w,
                    s >= u + 1 && l < 12 && (++l,
                    u = u << 1 | 1)),
                    g = m
                } else
                    s = o + 1,
                    u = (1 << (l = i + 1)) - 1,
                    g = null
            }
            return f !== n && Q.log("Warning, gif stream shorter than expected."),
            r
        }
        function $e(t) {
            var e, r, n, i, a, o = Math.floor, s = new Array(64), l = new Array(64), u = new Array(64), c = new Array(64), h = new Array(65535), f = new Array(65535), d = new Array(64), p = new Array(64), g = [], m = 0, v = 7, b = new Array(64), y = new Array(64), w = new Array(64), x = new Array(256), _ = new Array(2048), N = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], A = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], L = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], S = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], P = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], C = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], k = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], F = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], I = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
            function j(t, e) {
                for (var r = 0, n = 0, i = new Array, a = 1; a <= 16; a++) {
                    for (var o = 1; o <= t[a]; o++)
                        i[e[n]] = [],
                        i[e[n]][0] = r,
                        i[e[n]][1] = a,
                        n++,
                        r++;
                    r *= 2
                }
                return i
            }
            function O(t) {
                for (var e = t[0], r = t[1] - 1; r >= 0; )
                    e & 1 << r && (m |= 1 << v),
                    r--,
                    --v < 0 && (255 == m ? (D(255),
                    D(0)) : D(m),
                    v = 7,
                    m = 0)
            }
            function D(t) {
                g.push(t)
            }
            function T(t) {
                D(t >> 8 & 255),
                D(255 & t)
            }
            function M(t, e, r, n, i) {
                for (var a, o = i[0], s = i[240], l = function(t, e) {
                    var r, n, i, a, o, s, l, u, c, h, f = 0;
                    for (c = 0; c < 8; ++c) {
                        r = t[f],
                        n = t[f + 1],
                        i = t[f + 2],
                        a = t[f + 3],
                        o = t[f + 4],
                        s = t[f + 5],
                        l = t[f + 6];
                        var p = r + (u = t[f + 7])
                          , g = r - u
                          , m = n + l
                          , v = n - l
                          , b = i + s
                          , y = i - s
                          , w = a + o
                          , x = a - o
                          , _ = p + w
                          , N = p - w
                          , A = m + b
                          , L = m - b;
                        t[f] = _ + A,
                        t[f + 4] = _ - A;
                        var S = .707106781 * (L + N);
                        t[f + 2] = N + S,
                        t[f + 6] = N - S;
                        var P = .382683433 * ((_ = x + y) - (L = v + g))
                          , C = .5411961 * _ + P
                          , k = 1.306562965 * L + P
                          , F = .707106781 * (A = y + v)
                          , I = g + F
                          , j = g - F;
                        t[f + 5] = j + C,
                        t[f + 3] = j - C,
                        t[f + 1] = I + k,
                        t[f + 7] = I - k,
                        f += 8
                    }
                    for (f = 0,
                    c = 0; c < 8; ++c) {
                        r = t[f],
                        n = t[f + 8],
                        i = t[f + 16],
                        a = t[f + 24],
                        o = t[f + 32],
                        s = t[f + 40],
                        l = t[f + 48];
                        var O = r + (u = t[f + 56])
                          , D = r - u
                          , T = n + l
                          , M = n - l
                          , B = i + s
                          , E = i - s
                          , R = a + o
                          , q = a - o
                          , z = O + R
                          , U = O - R
                          , W = T + B
                          , H = T - B;
                        t[f] = z + W,
                        t[f + 32] = z - W;
                        var V = .707106781 * (H + U);
                        t[f + 16] = U + V,
                        t[f + 48] = U - V;
                        var G = .382683433 * ((z = q + E) - (H = M + D))
                          , $ = .5411961 * z + G
                          , Y = 1.306562965 * H + G
                          , J = .707106781 * (W = E + M)
                          , K = D + J
                          , X = D - J;
                        t[f + 40] = X + $,
                        t[f + 24] = X - $,
                        t[f + 8] = K + Y,
                        t[f + 56] = K - Y,
                        f++
                    }
                    for (c = 0; c < 64; ++c)
                        h = t[c] * e[c],
                        d[c] = h > 0 ? h + .5 | 0 : h - .5 | 0;
                    return d
                }(t, e), u = 0; u < 64; ++u)
                    p[N[u]] = l[u];
                var c = p[0] - r;
                r = p[0],
                0 == c ? O(n[0]) : (O(n[f[a = 32767 + c]]),
                O(h[a]));
                for (var g = 63; g > 0 && 0 == p[g]; )
                    g--;
                if (0 == g)
                    return O(o),
                    r;
                for (var m, v = 1; v <= g; ) {
                    for (var b = v; 0 == p[v] && v <= g; )
                        ++v;
                    var y = v - b;
                    if (y >= 16) {
                        m = y >> 4;
                        for (var w = 1; w <= m; ++w)
                            O(s);
                        y &= 15
                    }
                    a = 32767 + p[v],
                    O(i[(y << 4) + f[a]]),
                    O(h[a]),
                    v++
                }
                return 63 != g && O(o),
                r
            }
            function B(t) {
                t = Math.min(Math.max(t, 1), 100),
                a != t && (function(t) {
                    for (var e = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], r = 0; r < 64; r++) {
                        var n = o((e[r] * t + 50) / 100);
                        n = Math.min(Math.max(n, 1), 255),
                        s[N[r]] = n
                    }
                    for (var i = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], a = 0; a < 64; a++) {
                        var h = o((i[a] * t + 50) / 100);
                        h = Math.min(Math.max(h, 1), 255),
                        l[N[a]] = h
                    }
                    for (var f = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], d = 0, p = 0; p < 8; p++)
                        for (var g = 0; g < 8; g++)
                            u[d] = 1 / (s[N[d]] * f[p] * f[g] * 8),
                            c[d] = 1 / (l[N[d]] * f[p] * f[g] * 8),
                            d++
                }(t < 50 ? Math.floor(5e3 / t) : Math.floor(200 - 2 * t)),
                a = t)
            }
            this.encode = function(t, a) {
                a && B(a),
                g = new Array,
                m = 0,
                v = 7,
                T(65496),
                T(65504),
                T(16),
                D(74),
                D(70),
                D(73),
                D(70),
                D(0),
                D(1),
                D(1),
                D(0),
                T(1),
                T(1),
                D(0),
                D(0),
                function() {
                    T(65499),
                    T(132),
                    D(0);
                    for (var t = 0; t < 64; t++)
                        D(s[t]);
                    D(1);
                    for (var e = 0; e < 64; e++)
                        D(l[e])
                }(),
                function(t, e) {
                    T(65472),
                    T(17),
                    D(8),
                    T(e),
                    T(t),
                    D(3),
                    D(1),
                    D(17),
                    D(0),
                    D(2),
                    D(17),
                    D(1),
                    D(3),
                    D(17),
                    D(1)
                }(t.width, t.height),
                function() {
                    T(65476),
                    T(418),
                    D(0);
                    for (var t = 0; t < 16; t++)
                        D(A[t + 1]);
                    for (var e = 0; e <= 11; e++)
                        D(L[e]);
                    D(16);
                    for (var r = 0; r < 16; r++)
                        D(S[r + 1]);
                    for (var n = 0; n <= 161; n++)
                        D(P[n]);
                    D(1);
                    for (var i = 0; i < 16; i++)
                        D(C[i + 1]);
                    for (var a = 0; a <= 11; a++)
                        D(k[a]);
                    D(17);
                    for (var o = 0; o < 16; o++)
                        D(F[o + 1]);
                    for (var s = 0; s <= 161; s++)
                        D(I[s])
                }(),
                T(65498),
                T(12),
                D(3),
                D(1),
                D(0),
                D(2),
                D(17),
                D(3),
                D(17),
                D(0),
                D(63),
                D(0);
                var o = 0
                  , h = 0
                  , f = 0;
                m = 0,
                v = 7,
                this.encode.displayName = "_encode_";
                for (var d, p, x, N, j, E, R, q, z, U = t.data, W = t.width, H = t.height, V = 4 * W, G = 0; G < H; ) {
                    for (d = 0; d < V; ) {
                        for (j = V * G + d,
                        R = -1,
                        q = 0,
                        z = 0; z < 64; z++)
                            E = j + (q = z >> 3) * V + (R = 4 * (7 & z)),
                            G + q >= H && (E -= V * (G + 1 + q - H)),
                            d + R >= V && (E -= d + R - V + 4),
                            p = U[E++],
                            x = U[E++],
                            N = U[E++],
                            b[z] = (_[p] + _[x + 256 >> 0] + _[N + 512 >> 0] >> 16) - 128,
                            y[z] = (_[p + 768 >> 0] + _[x + 1024 >> 0] + _[N + 1280 >> 0] >> 16) - 128,
                            w[z] = (_[p + 1280 >> 0] + _[x + 1536 >> 0] + _[N + 1792 >> 0] >> 16) - 128;
                        o = M(b, u, o, e, n),
                        h = M(y, c, h, r, i),
                        f = M(w, c, f, r, i),
                        d += 32
                    }
                    G += 8
                }
                if (v >= 0) {
                    var $ = [];
                    $[1] = v + 1,
                    $[0] = (1 << v + 1) - 1,
                    O($)
                }
                return T(65497),
                new Uint8Array(g)
            }
            ,
            t = t || 50,
            function() {
                for (var t = String.fromCharCode, e = 0; e < 256; e++)
                    x[e] = t(e)
            }(),
            e = j(A, L),
            r = j(C, k),
            n = j(S, P),
            i = j(F, I),
            function() {
                for (var t = 1, e = 2, r = 1; r <= 15; r++) {
                    for (var n = t; n < e; n++)
                        f[32767 + n] = r,
                        h[32767 + n] = [],
                        h[32767 + n][1] = r,
                        h[32767 + n][0] = n;
                    for (var i = -(e - 1); i <= -t; i++)
                        f[32767 + i] = r,
                        h[32767 + i] = [],
                        h[32767 + i][1] = r,
                        h[32767 + i][0] = e - 1 + i;
                    t <<= 1,
                    e <<= 1
                }
            }(),
            function() {
                for (var t = 0; t < 256; t++)
                    _[t] = 19595 * t,
                    _[t + 256 >> 0] = 38470 * t,
                    _[t + 512 >> 0] = 7471 * t + 32768,
                    _[t + 768 >> 0] = -11059 * t,
                    _[t + 1024 >> 0] = -21709 * t,
                    _[t + 1280 >> 0] = 32768 * t + 8421375,
                    _[t + 1536 >> 0] = -27439 * t,
                    _[t + 1792 >> 0] = -5329 * t
            }(),
            B(t)
        }
        function Ye(t, e) {
            if (this.pos = 0,
            this.buffer = t,
            this.datav = new DataView(t.buffer),
            this.is_with_alpha = !!e,
            this.bottom_up = !0,
            this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]),
            this.pos += 2,
            -1 === ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag))
                throw new Error("Invalid BMP File");
            this.parseHeader(),
            this.parseBGR()
        }
        function Je(t) {
            function e(t) {
                if (!t)
                    throw Error("assert :P")
            }
            function r(t, e, r) {
                for (var n = 0; 4 > n; n++)
                    if (t[e + n] != r.charCodeAt(n))
                        return !0;
                return !1
            }
            function n(t, e, r, n, i) {
                for (var a = 0; a < i; a++)
                    t[e + a] = r[n + a]
            }
            function i(t, e, r, n) {
                for (var i = 0; i < n; i++)
                    t[e + i] = r
            }
            function a(t) {
                return new Int32Array(t)
            }
            function o(t, e) {
                for (var r = [], n = 0; n < t; n++)
                    r.push(new e);
                return r
            }
            function s(t, e) {
                var r = [];
                return function t(r, n, i) {
                    for (var a = i[n], o = 0; o < a && (r.push(i.length > n + 1 ? [] : new e),
                    !(i.length < n + 1)); o++)
                        t(r[o], n + 1, i)
                }(r, 0, t),
                r
            }
            var l = function() {
                var t = this;
                function l(t, e) {
                    for (var r = 1 << e - 1 >>> 0; t & r; )
                        r >>>= 1;
                    return r ? (t & r - 1) + r : t
                }
                function u(t, r, n, i, a) {
                    e(!(i % n));
                    do {
                        t[r + (i -= n)] = a
                    } while (0 < i)
                }
                function c(t, r, n, i, o) {
                    if (e(2328 >= o),
                    512 >= o)
                        var s = a(512);
                    else if (null == (s = a(o)))
                        return 0;
                    return function(t, r, n, i, o, s) {
                        var c, f, d = r, p = 1 << n, g = a(16), m = a(16);
                        for (e(0 != o),
                        e(null != i),
                        e(null != t),
                        e(0 < n),
                        f = 0; f < o; ++f) {
                            if (15 < i[f])
                                return 0;
                            ++g[i[f]]
                        }
                        if (g[0] == o)
                            return 0;
                        for (m[1] = 0,
                        c = 1; 15 > c; ++c) {
                            if (g[c] > 1 << c)
                                return 0;
                            m[c + 1] = m[c] + g[c]
                        }
                        for (f = 0; f < o; ++f)
                            c = i[f],
                            0 < i[f] && (s[m[c]++] = f);
                        if (1 == m[15])
                            return (i = new h).g = 0,
                            i.value = s[0],
                            u(t, d, 1, p, i),
                            p;
                        var v, b = -1, y = p - 1, w = 0, x = 1, _ = 1, N = 1 << n;
                        for (f = 0,
                        c = 1,
                        o = 2; c <= n; ++c,
                        o <<= 1) {
                            if (x += _ <<= 1,
                            0 > (_ -= g[c]))
                                return 0;
                            for (; 0 < g[c]; --g[c])
                                (i = new h).g = c,
                                i.value = s[f++],
                                u(t, d + w, o, N, i),
                                w = l(w, c)
                        }
                        for (c = n + 1,
                        o = 2; 15 >= c; ++c,
                        o <<= 1) {
                            if (x += _ <<= 1,
                            0 > (_ -= g[c]))
                                return 0;
                            for (; 0 < g[c]; --g[c]) {
                                if (i = new h,
                                (w & y) != b) {
                                    for (d += N,
                                    v = 1 << (b = c) - n; 15 > b && !(0 >= (v -= g[b])); )
                                        ++b,
                                        v <<= 1;
                                    p += N = 1 << (v = b - n),
                                    t[r + (b = w & y)].g = v + n,
                                    t[r + b].value = d - r - b
                                }
                                i.g = c - n,
                                i.value = s[f++],
                                u(t, d + (w >> n), o, N, i),
                                w = l(w, c)
                            }
                        }
                        return x != 2 * m[15] - 1 ? 0 : p
                    }(t, r, n, i, o, s)
                }
                function h() {
                    this.value = this.g = 0
                }
                function f() {
                    this.value = this.g = 0
                }
                function d() {
                    this.G = o(5, h),
                    this.H = a(5),
                    this.jc = this.Qb = this.qb = this.nd = 0,
                    this.pd = o(Er, f)
                }
                function p(t, r, n, i) {
                    e(null != t),
                    e(null != r),
                    e(2147483648 > i),
                    t.Ca = 254,
                    t.I = 0,
                    t.b = -8,
                    t.Ka = 0,
                    t.oa = r,
                    t.pa = n,
                    t.Jd = r,
                    t.Yc = n + i,
                    t.Zc = 4 <= i ? n + i - 4 + 1 : n,
                    S(t)
                }
                function g(t, e) {
                    for (var r = 0; 0 < e--; )
                        r |= C(t, 128) << e;
                    return r
                }
                function m(t, e) {
                    var r = g(t, e);
                    return P(t) ? -r : r
                }
                function v(t, r, n, i) {
                    var a, o = 0;
                    for (e(null != t),
                    e(null != r),
                    e(4294967288 > i),
                    t.Sb = i,
                    t.Ra = 0,
                    t.u = 0,
                    t.h = 0,
                    4 < i && (i = 4),
                    a = 0; a < i; ++a)
                        o += r[n + a] << 8 * a;
                    t.Ra = o,
                    t.bb = i,
                    t.oa = r,
                    t.pa = n
                }
                function b(t) {
                    for (; 8 <= t.u && t.bb < t.Sb; )
                        t.Ra >>>= 8,
                        t.Ra += t.oa[t.pa + t.bb] << zr - 8 >>> 0,
                        ++t.bb,
                        t.u -= 8;
                    N(t) && (t.h = 1,
                    t.u = 0)
                }
                function y(t, r) {
                    if (e(0 <= r),
                    !t.h && r <= qr) {
                        var n = _(t) & Rr[r];
                        return t.u += r,
                        b(t),
                        n
                    }
                    return t.h = 1,
                    t.u = 0
                }
                function w() {
                    this.b = this.Ca = this.I = 0,
                    this.oa = [],
                    this.pa = 0,
                    this.Jd = [],
                    this.Yc = 0,
                    this.Zc = [],
                    this.Ka = 0
                }
                function x() {
                    this.Ra = 0,
                    this.oa = [],
                    this.h = this.u = this.bb = this.Sb = this.pa = 0
                }
                function _(t) {
                    return t.Ra >>> (t.u & zr - 1) >>> 0
                }
                function N(t) {
                    return e(t.bb <= t.Sb),
                    t.h || t.bb == t.Sb && t.u > zr
                }
                function A(t, e) {
                    t.u = e,
                    t.h = N(t)
                }
                function L(t) {
                    t.u >= Ur && (e(t.u >= Ur),
                    b(t))
                }
                function S(t) {
                    e(null != t && null != t.oa),
                    t.pa < t.Zc ? (t.I = (t.oa[t.pa++] | t.I << 8) >>> 0,
                    t.b += 8) : (e(null != t && null != t.oa),
                    t.pa < t.Yc ? (t.b += 8,
                    t.I = t.oa[t.pa++] | t.I << 8) : t.Ka ? t.b = 0 : (t.I <<= 8,
                    t.b += 8,
                    t.Ka = 1))
                }
                function P(t) {
                    return g(t, 1)
                }
                function C(t, e) {
                    var r = t.Ca;
                    0 > t.b && S(t);
                    var n = t.b
                      , i = r * e >>> 8
                      , a = (t.I >>> n > i) + 0;
                    for (a ? (r -= i,
                    t.I -= i + 1 << n >>> 0) : r = i + 1,
                    n = r,
                    i = 0; 256 <= n; )
                        i += 8,
                        n >>= 8;
                    return n = 7 ^ i + Wr[n],
                    t.b -= n,
                    t.Ca = (r << n) - 1,
                    a
                }
                function k(t, e, r) {
                    t[e + 0] = r >> 24 & 255,
                    t[e + 1] = r >> 16 & 255,
                    t[e + 2] = r >> 8 & 255,
                    t[e + 3] = r >> 0 & 255
                }
                function F(t, e) {
                    return t[e + 0] << 0 | t[e + 1] << 8
                }
                function I(t, e) {
                    return F(t, e) | t[e + 2] << 16
                }
                function j(t, e) {
                    return F(t, e) | F(t, e + 2) << 16
                }
                function O(t, r) {
                    var n = 1 << r;
                    return e(null != t),
                    e(0 < r),
                    t.X = a(n),
                    null == t.X ? 0 : (t.Mb = 32 - r,
                    t.Xa = r,
                    1)
                }
                function D(t, r) {
                    e(null != t),
                    e(null != r),
                    e(t.Xa == r.Xa),
                    n(r.X, 0, t.X, 0, 1 << r.Xa)
                }
                function T() {
                    this.X = [],
                    this.Xa = this.Mb = 0
                }
                function M(t, r, n, i) {
                    e(null != n),
                    e(null != i);
                    var a = n[0]
                      , o = i[0];
                    return 0 == a && (a = (t * o + r / 2) / r),
                    0 == o && (o = (r * a + t / 2) / t),
                    0 >= a || 0 >= o ? 0 : (n[0] = a,
                    i[0] = o,
                    1)
                }
                function B(t, e) {
                    return t + (1 << e) - 1 >>> e
                }
                function E(t, e) {
                    return ((4278255360 & t) + (4278255360 & e) >>> 0 & 4278255360) + ((16711935 & t) + (16711935 & e) >>> 0 & 16711935) >>> 0
                }
                function R(e, r) {
                    t[r] = function(r, n, i, a, o, s, l) {
                        var u;
                        for (u = 0; u < o; ++u) {
                            var c = t[e](s[l + u - 1], i, a + u);
                            s[l + u] = E(r[n + u], c)
                        }
                    }
                }
                function q() {
                    this.ud = this.hd = this.jd = 0
                }
                function z(t, e) {
                    return ((4278124286 & (t ^ e)) >>> 1) + (t & e) >>> 0
                }
                function U(t) {
                    return 0 <= t && 256 > t ? t : 0 > t ? 0 : 255 < t ? 255 : void 0
                }
                function W(t, e) {
                    return U(t + (t - e + .5 >> 1))
                }
                function H(t, e, r) {
                    return Math.abs(e - r) - Math.abs(t - r)
                }
                function V(t, e, r, n, i, a, o) {
                    for (n = a[o - 1],
                    r = 0; r < i; ++r)
                        a[o + r] = n = E(t[e + r], n)
                }
                function G(t, e, r, n, i) {
                    var a;
                    for (a = 0; a < r; ++a) {
                        var o = t[e + a]
                          , s = o >> 8 & 255
                          , l = 16711935 & (l = (l = 16711935 & o) + ((s << 16) + s));
                        n[i + a] = (4278255360 & o) + l >>> 0
                    }
                }
                function $(t, e) {
                    e.jd = t >> 0 & 255,
                    e.hd = t >> 8 & 255,
                    e.ud = t >> 16 & 255
                }
                function Y(t, e, r, n, i, a) {
                    var o;
                    for (o = 0; o < n; ++o) {
                        var s = e[r + o]
                          , l = s >>> 8
                          , u = s
                          , c = 255 & (c = (c = s >>> 16) + ((t.jd << 24 >> 24) * (l << 24 >> 24) >>> 5));
                        u = 255 & (u = (u += (t.hd << 24 >> 24) * (l << 24 >> 24) >>> 5) + ((t.ud << 24 >> 24) * (c << 24 >> 24) >>> 5)),
                        i[a + o] = (4278255360 & s) + (c << 16) + u
                    }
                }
                function J(e, r, n, i, a) {
                    t[r] = function(t, e, r, n, o, s, l, u, c) {
                        for (n = l; n < u; ++n)
                            for (l = 0; l < c; ++l)
                                o[s++] = a(r[i(t[e++])])
                    }
                    ,
                    t[e] = function(e, r, o, s, l, u, c) {
                        var h = 8 >> e.b
                          , f = e.Ea
                          , d = e.K[0]
                          , p = e.w;
                        if (8 > h)
                            for (e = (1 << e.b) - 1,
                            p = (1 << h) - 1; r < o; ++r) {
                                var g, m = 0;
                                for (g = 0; g < f; ++g)
                                    g & e || (m = i(s[l++])),
                                    u[c++] = a(d[m & p]),
                                    m >>= h
                            }
                        else
                            t["VP8LMapColor" + n](s, l, d, p, u, c, r, o, f)
                    }
                }
                function K(t, e, r, n, i) {
                    for (r = e + r; e < r; ) {
                        var a = t[e++];
                        n[i++] = a >> 16 & 255,
                        n[i++] = a >> 8 & 255,
                        n[i++] = a >> 0 & 255
                    }
                }
                function X(t, e, r, n, i) {
                    for (r = e + r; e < r; ) {
                        var a = t[e++];
                        n[i++] = a >> 16 & 255,
                        n[i++] = a >> 8 & 255,
                        n[i++] = a >> 0 & 255,
                        n[i++] = a >> 24 & 255
                    }
                }
                function Z(t, e, r, n, i) {
                    for (r = e + r; e < r; ) {
                        var a = (o = t[e++]) >> 16 & 240 | o >> 12 & 15
                          , o = o >> 0 & 240 | o >> 28 & 15;
                        n[i++] = a,
                        n[i++] = o
                    }
                }
                function Q(t, e, r, n, i) {
                    for (r = e + r; e < r; ) {
                        var a = (o = t[e++]) >> 16 & 248 | o >> 13 & 7
                          , o = o >> 5 & 224 | o >> 3 & 31;
                        n[i++] = a,
                        n[i++] = o
                    }
                }
                function tt(t, e, r, n, i) {
                    for (r = e + r; e < r; ) {
                        var a = t[e++];
                        n[i++] = a >> 0 & 255,
                        n[i++] = a >> 8 & 255,
                        n[i++] = a >> 16 & 255
                    }
                }
                function et(t, e, r, i, a, o) {
                    if (0 == o)
                        for (r = e + r; e < r; )
                            k(i, ((o = t[e++])[0] >> 24 | o[1] >> 8 & 65280 | o[2] << 8 & 16711680 | o[3] << 24) >>> 0),
                            a += 32;
                    else
                        n(i, a, t, e, r)
                }
                function rt(e, r) {
                    t[r][0] = t[e + "0"],
                    t[r][1] = t[e + "1"],
                    t[r][2] = t[e + "2"],
                    t[r][3] = t[e + "3"],
                    t[r][4] = t[e + "4"],
                    t[r][5] = t[e + "5"],
                    t[r][6] = t[e + "6"],
                    t[r][7] = t[e + "7"],
                    t[r][8] = t[e + "8"],
                    t[r][9] = t[e + "9"],
                    t[r][10] = t[e + "10"],
                    t[r][11] = t[e + "11"],
                    t[r][12] = t[e + "12"],
                    t[r][13] = t[e + "13"],
                    t[r][14] = t[e + "0"],
                    t[r][15] = t[e + "0"]
                }
                function nt(t) {
                    return t == Wn || t == Hn || t == Vn || t == Gn
                }
                function it() {
                    this.eb = [],
                    this.size = this.A = this.fb = 0
                }
                function at() {
                    this.y = [],
                    this.f = [],
                    this.ea = [],
                    this.F = [],
                    this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0
                }
                function ot() {
                    this.Rd = this.height = this.width = this.S = 0,
                    this.f = {},
                    this.f.RGBA = new it,
                    this.f.kb = new at,
                    this.sd = null
                }
                function st() {
                    this.width = [0],
                    this.height = [0],
                    this.Pd = [0],
                    this.Qd = [0],
                    this.format = [0]
                }
                function lt() {
                    this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0
                }
                function ut(t) {
                    return alert("todo:WebPSamplerProcessPlane"),
                    t.T
                }
                function ct(t, e) {
                    var r = t.T
                      , i = e.ba.f.RGBA
                      , a = i.eb
                      , o = i.fb + t.ka * i.A
                      , s = vi[e.ba.S]
                      , l = t.y
                      , u = t.O
                      , c = t.f
                      , h = t.N
                      , f = t.ea
                      , d = t.W
                      , p = e.cc
                      , g = e.dc
                      , m = e.Mc
                      , v = e.Nc
                      , b = t.ka
                      , y = t.ka + t.T
                      , w = t.U
                      , x = w + 1 >> 1;
                    for (0 == b ? s(l, u, null, null, c, h, f, d, c, h, f, d, a, o, null, null, w) : (s(e.ec, e.fc, l, u, p, g, m, v, c, h, f, d, a, o - i.A, a, o, w),
                    ++r); b + 2 < y; b += 2)
                        p = c,
                        g = h,
                        m = f,
                        v = d,
                        h += t.Rc,
                        d += t.Rc,
                        o += 2 * i.A,
                        s(l, (u += 2 * t.fa) - t.fa, l, u, p, g, m, v, c, h, f, d, a, o - i.A, a, o, w);
                    return u += t.fa,
                    t.j + y < t.o ? (n(e.ec, e.fc, l, u, w),
                    n(e.cc, e.dc, c, h, x),
                    n(e.Mc, e.Nc, f, d, x),
                    r--) : 1 & y || s(l, u, null, null, c, h, f, d, c, h, f, d, a, o + i.A, null, null, w),
                    r
                }
                function ht(t, r, n) {
                    var i = t.F
                      , a = [t.J];
                    if (null != i) {
                        var o = t.U
                          , s = r.ba.S
                          , l = s == qn || s == Vn;
                        r = r.ba.f.RGBA;
                        var u = [0]
                          , c = t.ka;
                        u[0] = t.T,
                        t.Kb && (0 == c ? --u[0] : (--c,
                        a[0] -= t.width),
                        t.j + t.ka + t.T == t.o && (u[0] = t.o - t.j - c));
                        var h = r.eb;
                        c = r.fb + c * r.A,
                        t = Ln(i, a[0], t.width, o, u, h, c + (l ? 0 : 3), r.A),
                        e(n == u),
                        t && nt(s) && Nn(h, c, l, o, u, r.A)
                    }
                    return 0
                }
                function ft(t) {
                    var e = t.ma
                      , r = e.ba.S
                      , n = 11 > r
                      , i = r == Bn || r == Rn || r == qn || r == zn || 12 == r || nt(r);
                    if (e.memory = null,
                    e.Ib = null,
                    e.Jb = null,
                    e.Nd = null,
                    !Tr(e.Oa, t, i ? 11 : 12))
                        return 0;
                    if (i && nt(r) && br(),
                    t.da)
                        alert("todo:use_scaling");
                    else {
                        if (n) {
                            if (e.Ib = ut,
                            t.Kb) {
                                if (r = t.U + 1 >> 1,
                                e.memory = a(t.U + 2 * r),
                                null == e.memory)
                                    return 0;
                                e.ec = e.memory,
                                e.fc = 0,
                                e.cc = e.ec,
                                e.dc = e.fc + t.U,
                                e.Mc = e.cc,
                                e.Nc = e.dc + r,
                                e.Ib = ct,
                                br()
                            }
                        } else
                            alert("todo:EmitYUV");
                        i && (e.Jb = ht,
                        n && mr())
                    }
                    if (n && !Ii) {
                        for (t = 0; 256 > t; ++t)
                            ji[t] = 89858 * (t - 128) + Si >> Li,
                            Ti[t] = -22014 * (t - 128) + Si,
                            Di[t] = -45773 * (t - 128),
                            Oi[t] = 113618 * (t - 128) + Si >> Li;
                        for (t = Pi; t < Ci; ++t)
                            e = 76283 * (t - 16) + Si >> Li,
                            Mi[t - Pi] = Vt(e, 255),
                            Bi[t - Pi] = Vt(e + 8 >> 4, 15);
                        Ii = 1
                    }
                    return 1
                }
                function dt(t) {
                    var r = t.ma
                      , n = t.U
                      , i = t.T;
                    return e(!(1 & t.ka)),
                    0 >= n || 0 >= i ? 0 : (n = r.Ib(t, r),
                    null != r.Jb && r.Jb(t, r, n),
                    r.Dc += n,
                    1)
                }
                function pt(t) {
                    t.ma.memory = null
                }
                function gt(t, e, r, n) {
                    return 47 != y(t, 8) ? 0 : (e[0] = y(t, 14) + 1,
                    r[0] = y(t, 14) + 1,
                    n[0] = y(t, 1),
                    0 != y(t, 3) ? 0 : !t.h)
                }
                function mt(t, e) {
                    if (4 > t)
                        return t + 1;
                    var r = t - 2 >> 1;
                    return (2 + (1 & t) << r) + y(e, r) + 1
                }
                function vt(t, e) {
                    return 120 < e ? e - 120 : 1 <= (r = ((r = Zn[e - 1]) >> 4) * t + (8 - (15 & r))) ? r : 1;
                    var r
                }
                function bt(t, e, r) {
                    var n = _(r)
                      , i = t[e += 255 & n].g - 8;
                    return 0 < i && (A(r, r.u + 8),
                    n = _(r),
                    e += t[e].value,
                    e += n & (1 << i) - 1),
                    A(r, r.u + t[e].g),
                    t[e].value
                }
                function yt(t, r, n) {
                    return n.g += t.g,
                    n.value += t.value << r >>> 0,
                    e(8 >= n.g),
                    t.g
                }
                function wt(t, r, n) {
                    var i = t.xc;
                    return e((r = 0 == i ? 0 : t.vc[t.md * (n >> i) + (r >> i)]) < t.Wb),
                    t.Ya[r]
                }
                function xt(t, r, i, a) {
                    var o = t.ab
                      , s = t.c * r
                      , l = t.C;
                    r = l + r;
                    var u = i
                      , c = a;
                    for (a = t.Ta,
                    i = t.Ua; 0 < o--; ) {
                        var h = t.gc[o]
                          , f = l
                          , d = r
                          , p = u
                          , g = c
                          , m = (c = a,
                        u = i,
                        h.Ea);
                        switch (e(f < d),
                        e(d <= h.nc),
                        h.hc) {
                        case 2:
                            Gr(p, g, (d - f) * m, c, u);
                            break;
                        case 0:
                            var v = f
                              , b = d
                              , y = c
                              , w = u
                              , x = (S = h).Ea;
                            0 == v && (Hr(p, g, null, null, 1, y, w),
                            V(p, g + 1, 0, 0, x - 1, y, w + 1),
                            g += x,
                            w += x,
                            ++v);
                            for (var _ = 1 << S.b, N = _ - 1, A = B(x, S.b), L = S.K, S = S.w + (v >> S.b) * A; v < b; ) {
                                var P = L
                                  , C = S
                                  , k = 1;
                                for (Vr(p, g, y, w - x, 1, y, w); k < x; ) {
                                    var F = (k & ~N) + _;
                                    F > x && (F = x),
                                    (0,
                                    Xr[P[C++] >> 8 & 15])(p, g + +k, y, w + k - x, F - k, y, w + k),
                                    k = F
                                }
                                g += x,
                                w += x,
                                ++v & N || (S += A)
                            }
                            d != h.nc && n(c, u - m, c, u + (d - f - 1) * m, m);
                            break;
                        case 1:
                            for (m = p,
                            b = g,
                            x = (p = h.Ea) - (w = p & ~(y = (g = 1 << h.b) - 1)),
                            v = B(p, h.b),
                            _ = h.K,
                            h = h.w + (f >> h.b) * v; f < d; ) {
                                for (N = _,
                                A = h,
                                L = new q,
                                S = b + w,
                                P = b + p; b < S; )
                                    $(N[A++], L),
                                    Zr(L, m, b, g, c, u),
                                    b += g,
                                    u += g;
                                b < P && ($(N[A++], L),
                                Zr(L, m, b, x, c, u),
                                b += x,
                                u += x),
                                ++f & y || (h += v)
                            }
                            break;
                        case 3:
                            if (p == c && g == u && 0 < h.b) {
                                for (b = c,
                                p = m = u + (d - f) * m - (w = (d - f) * B(h.Ea, h.b)),
                                g = c,
                                y = u,
                                v = [],
                                w = (x = w) - 1; 0 <= w; --w)
                                    v[w] = g[y + w];
                                for (w = x - 1; 0 <= w; --w)
                                    b[p + w] = v[w];
                                $r(h, f, d, c, m, c, u)
                            } else
                                $r(h, f, d, p, g, c, u)
                        }
                        u = a,
                        c = i
                    }
                    c != i && n(a, i, u, c, s)
                }
                function _t(t, r) {
                    var n = t.V
                      , i = t.Ba + t.c * t.C
                      , a = r - t.C;
                    if (e(r <= t.l.o),
                    e(16 >= a),
                    0 < a) {
                        var o = t.l
                          , s = t.Ta
                          , l = t.Ua
                          , u = o.width;
                        if (xt(t, a, n, i),
                        a = l = [l],
                        e((n = t.C) < (i = r)),
                        e(o.v < o.va),
                        i > o.o && (i = o.o),
                        n < o.j) {
                            var c = o.j - n;
                            n = o.j,
                            a[0] += c * u
                        }
                        if (n >= i ? n = 0 : (a[0] += 4 * o.v,
                        o.ka = n - o.j,
                        o.U = o.va - o.v,
                        o.T = i - n,
                        n = 1),
                        n) {
                            if (l = l[0],
                            11 > (n = t.ca).S) {
                                var h = n.f.RGBA
                                  , f = (i = n.S,
                                a = o.U,
                                o = o.T,
                                c = h.eb,
                                h.A)
                                  , d = o;
                                for (h = h.fb + t.Ma * h.A; 0 < d--; ) {
                                    var p = s
                                      , g = l
                                      , m = a
                                      , v = c
                                      , b = h;
                                    switch (i) {
                                    case Mn:
                                        Qr(p, g, m, v, b);
                                        break;
                                    case Bn:
                                        tn(p, g, m, v, b);
                                        break;
                                    case Wn:
                                        tn(p, g, m, v, b),
                                        Nn(v, b, 0, m, 1, 0);
                                        break;
                                    case En:
                                        nn(p, g, m, v, b);
                                        break;
                                    case Rn:
                                        et(p, g, m, v, b, 1);
                                        break;
                                    case Hn:
                                        et(p, g, m, v, b, 1),
                                        Nn(v, b, 0, m, 1, 0);
                                        break;
                                    case qn:
                                        et(p, g, m, v, b, 0);
                                        break;
                                    case Vn:
                                        et(p, g, m, v, b, 0),
                                        Nn(v, b, 1, m, 1, 0);
                                        break;
                                    case zn:
                                        en(p, g, m, v, b);
                                        break;
                                    case Gn:
                                        en(p, g, m, v, b),
                                        An(v, b, m, 1, 0);
                                        break;
                                    case Un:
                                        rn(p, g, m, v, b);
                                        break;
                                    default:
                                        e(0)
                                    }
                                    l += u,
                                    h += f
                                }
                                t.Ma += o
                            } else
                                alert("todo:EmitRescaledRowsYUVA");
                            e(t.Ma <= n.height)
                        }
                    }
                    t.C = r,
                    e(t.C <= t.i)
                }
                function Nt(t) {
                    var e;
                    if (0 < t.ua)
                        return 0;
                    for (e = 0; e < t.Wb; ++e) {
                        var r = t.Ya[e].G
                          , n = t.Ya[e].H;
                        if (0 < r[1][n[1] + 0].g || 0 < r[2][n[2] + 0].g || 0 < r[3][n[3] + 0].g)
                            return 0
                    }
                    return 1
                }
                function At(t, r, n, i, a, o) {
                    if (0 != t.Z) {
                        var s = t.qd
                          , l = t.rd;
                        for (e(null != mi[t.Z]); r < n; ++r)
                            mi[t.Z](s, l, i, a, i, a, o),
                            s = i,
                            l = a,
                            a += o;
                        t.qd = s,
                        t.rd = l
                    }
                }
                function Lt(t, r) {
                    var n = t.l.ma
                      , i = 0 == n.Z || 1 == n.Z ? t.l.j : t.C;
                    if (i = t.C < i ? i : t.C,
                    e(r <= t.l.o),
                    r > i) {
                        var a = t.l.width
                          , o = n.ca
                          , s = n.tb + a * i
                          , l = t.V
                          , u = t.Ba + t.c * i
                          , c = t.gc;
                        e(1 == t.ab),
                        e(3 == c[0].hc),
                        Jr(c[0], i, r, l, u, o, s),
                        At(n, i, r, o, s, a)
                    }
                    t.C = t.Ma = r
                }
                function St(t, r, n, i, a, o, s) {
                    var l = t.$ / i
                      , u = t.$ % i
                      , c = t.m
                      , h = t.s
                      , f = n + t.$
                      , d = f;
                    a = n + i * a;
                    var p = n + i * o
                      , g = 280 + h.ua
                      , m = t.Pb ? l : 16777216
                      , v = 0 < h.ua ? h.Wa : null
                      , b = h.wc
                      , y = f < p ? wt(h, u, l) : null;
                    e(t.C < o),
                    e(p <= a);
                    var w = !1;
                    t: for (; ; ) {
                        for (; w || f < p; ) {
                            var x = 0;
                            if (l >= m) {
                                var S = f - n;
                                e((m = t).Pb),
                                m.wd = m.m,
                                m.xd = S,
                                0 < m.s.ua && D(m.s.Wa, m.s.vb),
                                m = l + ti
                            }
                            if (u & b || (y = wt(h, u, l)),
                            e(null != y),
                            y.Qb && (r[f] = y.qb,
                            w = !0),
                            !w)
                                if (L(c),
                                y.jc) {
                                    x = c,
                                    S = r;
                                    var P = f
                                      , C = y.pd[_(x) & Er - 1];
                                    e(y.jc),
                                    256 > C.g ? (A(x, x.u + C.g),
                                    S[P] = C.value,
                                    x = 0) : (A(x, x.u + C.g - 256),
                                    e(256 <= C.value),
                                    x = C.value),
                                    0 == x && (w = !0)
                                } else
                                    x = bt(y.G[0], y.H[0], c);
                            if (c.h)
                                break;
                            if (w || 256 > x) {
                                if (!w)
                                    if (y.nd)
                                        r[f] = (y.qb | x << 8) >>> 0;
                                    else {
                                        if (L(c),
                                        w = bt(y.G[1], y.H[1], c),
                                        L(c),
                                        S = bt(y.G[2], y.H[2], c),
                                        P = bt(y.G[3], y.H[3], c),
                                        c.h)
                                            break;
                                        r[f] = (P << 24 | w << 16 | x << 8 | S) >>> 0
                                    }
                                if (w = !1,
                                ++f,
                                ++u >= i && (u = 0,
                                ++l,
                                null != s && l <= o && !(l % 16) && s(t, l),
                                null != v))
                                    for (; d < f; )
                                        x = r[d++],
                                        v.X[(506832829 * x & 4294967295) >>> v.Mb] = x
                            } else if (280 > x) {
                                if (x = mt(x - 256, c),
                                S = bt(y.G[4], y.H[4], c),
                                L(c),
                                S = vt(i, S = mt(S, c)),
                                c.h)
                                    break;
                                if (f - n < S || a - f < x)
                                    break t;
                                for (P = 0; P < x; ++P)
                                    r[f + P] = r[f + P - S];
                                for (f += x,
                                u += x; u >= i; )
                                    u -= i,
                                    ++l,
                                    null != s && l <= o && !(l % 16) && s(t, l);
                                if (e(f <= a),
                                u & b && (y = wt(h, u, l)),
                                null != v)
                                    for (; d < f; )
                                        x = r[d++],
                                        v.X[(506832829 * x & 4294967295) >>> v.Mb] = x
                            } else {
                                if (!(x < g))
                                    break t;
                                for (w = x - 280,
                                e(null != v); d < f; )
                                    x = r[d++],
                                    v.X[(506832829 * x & 4294967295) >>> v.Mb] = x;
                                x = f,
                                e(!(w >>> (S = v).Xa)),
                                r[x] = S.X[w],
                                w = !0
                            }
                            w || e(c.h == N(c))
                        }
                        if (t.Pb && c.h && f < a)
                            e(t.m.h),
                            t.a = 5,
                            t.m = t.wd,
                            t.$ = t.xd,
                            0 < t.s.ua && D(t.s.vb, t.s.Wa);
                        else {
                            if (c.h)
                                break t;
                            null != s && s(t, l > o ? o : l),
                            t.a = 0,
                            t.$ = f - n
                        }
                        return 1
                    }
                    return t.a = 3,
                    0
                }
                function Pt(t) {
                    e(null != t),
                    t.vc = null,
                    t.yc = null,
                    t.Ya = null;
                    var r = t.Wa;
                    null != r && (r.X = null),
                    t.vb = null,
                    e(null != t)
                }
                function Ct() {
                    var e = new or;
                    return null == e ? null : (e.a = 0,
                    e.xb = gi,
                    rt("Predictor", "VP8LPredictors"),
                    rt("Predictor", "VP8LPredictors_C"),
                    rt("PredictorAdd", "VP8LPredictorsAdd"),
                    rt("PredictorAdd", "VP8LPredictorsAdd_C"),
                    Gr = G,
                    Zr = Y,
                    Qr = K,
                    tn = X,
                    en = Z,
                    rn = Q,
                    nn = tt,
                    t.VP8LMapColor32b = Yr,
                    t.VP8LMapColor8b = Kr,
                    e)
                }
                function kt(t, r, n, s, l) {
                    var u = 1
                      , f = [t]
                      , p = [r]
                      , g = s.m
                      , m = s.s
                      , v = null
                      , b = 0;
                    t: for (; ; ) {
                        if (n)
                            for (; u && y(g, 1); ) {
                                var w = f
                                  , x = p
                                  , N = s
                                  , S = 1
                                  , P = N.m
                                  , C = N.gc[N.ab]
                                  , k = y(P, 2);
                                if (N.Oc & 1 << k)
                                    u = 0;
                                else {
                                    switch (N.Oc |= 1 << k,
                                    C.hc = k,
                                    C.Ea = w[0],
                                    C.nc = x[0],
                                    C.K = [null],
                                    ++N.ab,
                                    e(4 >= N.ab),
                                    k) {
                                    case 0:
                                    case 1:
                                        C.b = y(P, 3) + 2,
                                        S = kt(B(C.Ea, C.b), B(C.nc, C.b), 0, N, C.K),
                                        C.K = C.K[0];
                                        break;
                                    case 3:
                                        var F, I = y(P, 8) + 1, j = 16 < I ? 0 : 4 < I ? 1 : 2 < I ? 2 : 3;
                                        if (w[0] = B(C.Ea, j),
                                        C.b = j,
                                        F = S = kt(I, 1, 0, N, C.K)) {
                                            var D, T = I, M = C, R = 1 << (8 >> M.b), q = a(R);
                                            if (null == q)
                                                F = 0;
                                            else {
                                                var z = M.K[0]
                                                  , U = M.w;
                                                for (q[0] = M.K[0][0],
                                                D = 1; D < 1 * T; ++D)
                                                    q[D] = E(z[U + D], q[D - 1]);
                                                for (; D < 4 * R; ++D)
                                                    q[D] = 0;
                                                M.K[0] = null,
                                                M.K[0] = q,
                                                F = 1
                                            }
                                        }
                                        S = F;
                                        break;
                                    case 2:
                                        break;
                                    default:
                                        e(0)
                                    }
                                    u = S
                                }
                            }
                        if (f = f[0],
                        p = p[0],
                        u && y(g, 1) && !(u = 1 <= (b = y(g, 4)) && 11 >= b)) {
                            s.a = 3;
                            break t
                        }
                        var W;
                        if (W = u)
                            e: {
                                var H, V, G, $ = s, Y = f, J = p, K = b, X = n, Z = $.m, Q = $.s, tt = [null], et = 1, rt = 0, nt = Qn[K];
                                r: for (; ; ) {
                                    if (X && y(Z, 1)) {
                                        var it = y(Z, 3) + 2
                                          , at = B(Y, it)
                                          , ot = B(J, it)
                                          , st = at * ot;
                                        if (!kt(at, ot, 0, $, tt))
                                            break r;
                                        for (tt = tt[0],
                                        Q.xc = it,
                                        H = 0; H < st; ++H) {
                                            var lt = tt[H] >> 8 & 65535;
                                            tt[H] = lt,
                                            lt >= et && (et = lt + 1)
                                        }
                                    }
                                    if (Z.h)
                                        break r;
                                    for (V = 0; 5 > V; ++V) {
                                        var ut = Jn[V];
                                        !V && 0 < K && (ut += 1 << K),
                                        rt < ut && (rt = ut)
                                    }
                                    var ct = o(et * nt, h)
                                      , ht = et
                                      , ft = o(ht, d);
                                    if (null == ft)
                                        var dt = null;
                                    else
                                        e(65536 >= ht),
                                        dt = ft;
                                    var pt = a(rt);
                                    if (null == dt || null == pt || null == ct) {
                                        $.a = 1;
                                        break r
                                    }
                                    var gt = ct;
                                    for (H = G = 0; H < et; ++H) {
                                        var mt = dt[H]
                                          , vt = mt.G
                                          , bt = mt.H
                                          , wt = 0
                                          , xt = 1
                                          , _t = 0;
                                        for (V = 0; 5 > V; ++V) {
                                            ut = Jn[V],
                                            vt[V] = gt,
                                            bt[V] = G,
                                            !V && 0 < K && (ut += 1 << K);
                                            n: {
                                                var Nt, At = ut, Lt = $, Ct = pt, Ft = gt, It = G, jt = 0, Ot = Lt.m, Dt = y(Ot, 1);
                                                if (i(Ct, 0, 0, At),
                                                Dt) {
                                                    var Tt = y(Ot, 1) + 1
                                                      , Mt = y(Ot, 1)
                                                      , Bt = y(Ot, 0 == Mt ? 1 : 8);
                                                    Ct[Bt] = 1,
                                                    2 == Tt && (Ct[Bt = y(Ot, 8)] = 1);
                                                    var Et = 1
                                                } else {
                                                    var Rt = a(19)
                                                      , qt = y(Ot, 4) + 4;
                                                    if (19 < qt) {
                                                        Lt.a = 3;
                                                        var zt = 0;
                                                        break n
                                                    }
                                                    for (Nt = 0; Nt < qt; ++Nt)
                                                        Rt[Xn[Nt]] = y(Ot, 3);
                                                    var Ut = void 0
                                                      , Wt = void 0
                                                      , Ht = Lt
                                                      , Vt = Rt
                                                      , Gt = At
                                                      , $t = Ct
                                                      , Yt = 0
                                                      , Jt = Ht.m
                                                      , Kt = 8
                                                      , Xt = o(128, h);
                                                    i: for (; c(Xt, 0, 7, Vt, 19); ) {
                                                        if (y(Jt, 1)) {
                                                            var Zt = 2 + 2 * y(Jt, 3);
                                                            if ((Ut = 2 + y(Jt, Zt)) > Gt)
                                                                break i
                                                        } else
                                                            Ut = Gt;
                                                        for (Wt = 0; Wt < Gt && Ut--; ) {
                                                            L(Jt);
                                                            var Qt = Xt[0 + (127 & _(Jt))];
                                                            A(Jt, Jt.u + Qt.g);
                                                            var te = Qt.value;
                                                            if (16 > te)
                                                                $t[Wt++] = te,
                                                                0 != te && (Kt = te);
                                                            else {
                                                                var ee = 16 == te
                                                                  , re = te - 16
                                                                  , ne = Yn[re]
                                                                  , ie = y(Jt, $n[re]) + ne;
                                                                if (Wt + ie > Gt)
                                                                    break i;
                                                                for (var ae = ee ? Kt : 0; 0 < ie--; )
                                                                    $t[Wt++] = ae
                                                            }
                                                        }
                                                        Yt = 1;
                                                        break i
                                                    }
                                                    Yt || (Ht.a = 3),
                                                    Et = Yt
                                                }
                                                (Et = Et && !Ot.h) && (jt = c(Ft, It, 8, Ct, At)),
                                                Et && 0 != jt ? zt = jt : (Lt.a = 3,
                                                zt = 0)
                                            }
                                            if (0 == zt)
                                                break r;
                                            if (xt && 1 == Kn[V] && (xt = 0 == gt[G].g),
                                            wt += gt[G].g,
                                            G += zt,
                                            3 >= V) {
                                                var oe, se = pt[0];
                                                for (oe = 1; oe < ut; ++oe)
                                                    pt[oe] > se && (se = pt[oe]);
                                                _t += se
                                            }
                                        }
                                        if (mt.nd = xt,
                                        mt.Qb = 0,
                                        xt && (mt.qb = (vt[3][bt[3] + 0].value << 24 | vt[1][bt[1] + 0].value << 16 | vt[2][bt[2] + 0].value) >>> 0,
                                        0 == wt && 256 > vt[0][bt[0] + 0].value && (mt.Qb = 1,
                                        mt.qb += vt[0][bt[0] + 0].value << 8)),
                                        mt.jc = !mt.Qb && 6 > _t,
                                        mt.jc) {
                                            var le, ue = mt;
                                            for (le = 0; le < Er; ++le) {
                                                var ce = le
                                                  , he = ue.pd[ce]
                                                  , fe = ue.G[0][ue.H[0] + ce];
                                                256 <= fe.value ? (he.g = fe.g + 256,
                                                he.value = fe.value) : (he.g = 0,
                                                he.value = 0,
                                                ce >>= yt(fe, 8, he),
                                                ce >>= yt(ue.G[1][ue.H[1] + ce], 16, he),
                                                ce >>= yt(ue.G[2][ue.H[2] + ce], 0, he),
                                                yt(ue.G[3][ue.H[3] + ce], 24, he))
                                            }
                                        }
                                    }
                                    Q.vc = tt,
                                    Q.Wb = et,
                                    Q.Ya = dt,
                                    Q.yc = ct,
                                    W = 1;
                                    break e
                                }
                                W = 0
                            }
                        if (!(u = W)) {
                            s.a = 3;
                            break t
                        }
                        if (0 < b) {
                            if (m.ua = 1 << b,
                            !O(m.Wa, b)) {
                                s.a = 1,
                                u = 0;
                                break t
                            }
                        } else
                            m.ua = 0;
                        var de = s
                          , pe = f
                          , ge = p
                          , me = de.s
                          , ve = me.xc;
                        if (de.c = pe,
                        de.i = ge,
                        me.md = B(pe, ve),
                        me.wc = 0 == ve ? -1 : (1 << ve) - 1,
                        n) {
                            s.xb = pi;
                            break t
                        }
                        if (null == (v = a(f * p))) {
                            s.a = 1,
                            u = 0;
                            break t
                        }
                        u = (u = St(s, v, 0, f, p, p, null)) && !g.h;
                        break t
                    }
                    return u ? (null != l ? l[0] = v : (e(null == v),
                    e(n)),
                    s.$ = 0,
                    n || Pt(m)) : Pt(m),
                    u
                }
                function Ft(t, r) {
                    var n = t.c * t.i
                      , i = n + r + 16 * r;
                    return e(t.c <= r),
                    t.V = a(i),
                    null == t.V ? (t.Ta = null,
                    t.Ua = 0,
                    t.a = 1,
                    0) : (t.Ta = t.V,
                    t.Ua = t.Ba + n + r,
                    1)
                }
                function It(t, r) {
                    var n = t.C
                      , i = r - n
                      , a = t.V
                      , o = t.Ba + t.c * n;
                    for (e(r <= t.l.o); 0 < i; ) {
                        var s = 16 < i ? 16 : i
                          , l = t.l.ma
                          , u = t.l.width
                          , c = u * s
                          , h = l.ca
                          , f = l.tb + u * n
                          , d = t.Ta
                          , p = t.Ua;
                        xt(t, s, a, o),
                        Sn(d, p, h, f, c),
                        At(l, n, n + s, h, f, u),
                        i -= s,
                        a += s * t.c,
                        n += s
                    }
                    e(n == r),
                    t.C = t.Ma = r
                }
                function jt() {
                    this.ub = this.yd = this.td = this.Rb = 0
                }
                function Ot() {
                    this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0
                }
                function Dt() {
                    this.Fb = this.Bb = this.Cb = 0,
                    this.Zb = a(4),
                    this.Lb = a(4)
                }
                function Tt() {
                    this.Yb = function() {
                        var t = [];
                        return function t(e, r, n) {
                            for (var i = n[r], a = 0; a < i && (e.push(n.length > r + 1 ? [] : 0),
                            !(n.length < r + 1)); a++)
                                t(e[a], r + 1, n)
                        }(t, 0, [3, 11]),
                        t
                    }()
                }
                function Mt() {
                    this.jb = a(3),
                    this.Wc = s([4, 8], Tt),
                    this.Xc = s([4, 17], Tt)
                }
                function Bt() {
                    this.Pc = this.wb = this.Tb = this.zd = 0,
                    this.vd = new a(4),
                    this.od = new a(4)
                }
                function Et() {
                    this.ld = this.La = this.dd = this.tc = 0
                }
                function Rt() {
                    this.Na = this.la = 0
                }
                function qt() {
                    this.Sc = [0, 0],
                    this.Eb = [0, 0],
                    this.Qc = [0, 0],
                    this.ia = this.lc = 0
                }
                function zt() {
                    this.ad = a(384),
                    this.Za = 0,
                    this.Ob = a(16),
                    this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0
                }
                function Ut() {
                    this.uc = this.M = this.Nb = 0,
                    this.wa = Array(new Et),
                    this.Y = 0,
                    this.ya = Array(new zt),
                    this.aa = 0,
                    this.l = new Gt
                }
                function Wt() {
                    this.y = a(16),
                    this.f = a(8),
                    this.ea = a(8)
                }
                function Ht() {
                    this.cb = this.a = 0,
                    this.sc = "",
                    this.m = new w,
                    this.Od = new jt,
                    this.Kc = new Ot,
                    this.ed = new Bt,
                    this.Qa = new Dt,
                    this.Ic = this.$c = this.Aa = 0,
                    this.D = new Ut,
                    this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0,
                    this.Jc = o(8, w),
                    this.ia = 0,
                    this.pb = o(4, qt),
                    this.Pa = new Mt,
                    this.Bd = this.kc = 0,
                    this.Ac = [],
                    this.Bc = 0,
                    this.zc = [0, 0, 0, 0],
                    this.Gd = Array(new Wt),
                    this.Hd = 0,
                    this.rb = Array(new Rt),
                    this.sb = 0,
                    this.wa = Array(new Et),
                    this.Y = 0,
                    this.oc = [],
                    this.pc = 0,
                    this.sa = [],
                    this.ta = 0,
                    this.qa = [],
                    this.ra = 0,
                    this.Ha = [],
                    this.B = this.R = this.Ia = 0,
                    this.Ec = [],
                    this.M = this.ja = this.Vb = this.Fc = 0,
                    this.ya = Array(new zt),
                    this.L = this.aa = 0,
                    this.gd = s([4, 2], Et),
                    this.ga = null,
                    this.Fa = [],
                    this.Cc = this.qc = this.P = 0,
                    this.Gb = [],
                    this.Uc = 0,
                    this.mb = [],
                    this.nb = 0,
                    this.rc = [],
                    this.Ga = this.Vc = 0
                }
                function Vt(t, e) {
                    return 0 > t ? 0 : t > e ? e : t
                }
                function Gt() {
                    this.T = this.U = this.ka = this.height = this.width = 0,
                    this.y = [],
                    this.f = [],
                    this.ea = [],
                    this.Rc = this.fa = this.W = this.N = this.O = 0,
                    this.ma = "void",
                    this.put = "VP8IoPutHook",
                    this.ac = "VP8IoSetupHook",
                    this.bc = "VP8IoTeardownHook",
                    this.ha = this.Kb = 0,
                    this.data = [],
                    this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0,
                    this.F = [],
                    this.J = 0
                }
                function $t() {
                    var t = new Ht;
                    return null != t && (t.a = 0,
                    t.sc = "OK",
                    t.cb = 0,
                    t.Xb = 0,
                    ni || (ni = Xt)),
                    t
                }
                function Yt(t, e, r) {
                    return 0 == t.a && (t.a = e,
                    t.sc = r,
                    t.cb = 0),
                    0
                }
                function Jt(t, e, r) {
                    return 3 <= r && 157 == t[e + 0] && 1 == t[e + 1] && 42 == t[e + 2]
                }
                function Kt(t, r) {
                    if (null == t)
                        return 0;
                    if (t.a = 0,
                    t.sc = "OK",
                    null == r)
                        return Yt(t, 2, "null VP8Io passed to VP8GetHeaders()");
                    var n = r.data
                      , a = r.w
                      , o = r.ha;
                    if (4 > o)
                        return Yt(t, 7, "Truncated header.");
                    var s = n[a + 0] | n[a + 1] << 8 | n[a + 2] << 16
                      , l = t.Od;
                    if (l.Rb = !(1 & s),
                    l.td = s >> 1 & 7,
                    l.yd = s >> 4 & 1,
                    l.ub = s >> 5,
                    3 < l.td)
                        return Yt(t, 3, "Incorrect keyframe parameters.");
                    if (!l.yd)
                        return Yt(t, 4, "Frame not displayable.");
                    a += 3,
                    o -= 3;
                    var u = t.Kc;
                    if (l.Rb) {
                        if (7 > o)
                            return Yt(t, 7, "cannot parse picture header");
                        if (!Jt(n, a, o))
                            return Yt(t, 3, "Bad code word");
                        u.c = 16383 & (n[a + 4] << 8 | n[a + 3]),
                        u.Td = n[a + 4] >> 6,
                        u.i = 16383 & (n[a + 6] << 8 | n[a + 5]),
                        u.Ud = n[a + 6] >> 6,
                        a += 7,
                        o -= 7,
                        t.za = u.c + 15 >> 4,
                        t.Ub = u.i + 15 >> 4,
                        r.width = u.c,
                        r.height = u.i,
                        r.Da = 0,
                        r.j = 0,
                        r.v = 0,
                        r.va = r.width,
                        r.o = r.height,
                        r.da = 0,
                        r.ib = r.width,
                        r.hb = r.height,
                        r.U = r.width,
                        r.T = r.height,
                        i((s = t.Pa).jb, 0, 255, s.jb.length),
                        e(null != (s = t.Qa)),
                        s.Cb = 0,
                        s.Bb = 0,
                        s.Fb = 1,
                        i(s.Zb, 0, 0, s.Zb.length),
                        i(s.Lb, 0, 0, s.Lb)
                    }
                    if (l.ub > o)
                        return Yt(t, 7, "bad partition length");
                    p(s = t.m, n, a, l.ub),
                    a += l.ub,
                    o -= l.ub,
                    l.Rb && (u.Ld = P(s),
                    u.Kd = P(s)),
                    u = t.Qa;
                    var c, h = t.Pa;
                    if (e(null != s),
                    e(null != u),
                    u.Cb = P(s),
                    u.Cb) {
                        if (u.Bb = P(s),
                        P(s)) {
                            for (u.Fb = P(s),
                            c = 0; 4 > c; ++c)
                                u.Zb[c] = P(s) ? m(s, 7) : 0;
                            for (c = 0; 4 > c; ++c)
                                u.Lb[c] = P(s) ? m(s, 6) : 0
                        }
                        if (u.Bb)
                            for (c = 0; 3 > c; ++c)
                                h.jb[c] = P(s) ? g(s, 8) : 255
                    } else
                        u.Bb = 0;
                    if (s.Ka)
                        return Yt(t, 3, "cannot parse segment header");
                    if ((u = t.ed).zd = P(s),
                    u.Tb = g(s, 6),
                    u.wb = g(s, 3),
                    u.Pc = P(s),
                    u.Pc && P(s)) {
                        for (h = 0; 4 > h; ++h)
                            P(s) && (u.vd[h] = m(s, 6));
                        for (h = 0; 4 > h; ++h)
                            P(s) && (u.od[h] = m(s, 6))
                    }
                    if (t.L = 0 == u.Tb ? 0 : u.zd ? 1 : 2,
                    s.Ka)
                        return Yt(t, 3, "cannot parse filter header");
                    var f = o;
                    if (o = c = a,
                    a = c + f,
                    u = f,
                    t.Xb = (1 << g(t.m, 2)) - 1,
                    f < 3 * (h = t.Xb))
                        n = 7;
                    else {
                        for (c += 3 * h,
                        u -= 3 * h,
                        f = 0; f < h; ++f) {
                            var d = n[o + 0] | n[o + 1] << 8 | n[o + 2] << 16;
                            d > u && (d = u),
                            p(t.Jc[+f], n, c, d),
                            c += d,
                            u -= d,
                            o += 3
                        }
                        p(t.Jc[+h], n, c, u),
                        n = c < a ? 0 : 5
                    }
                    if (0 != n)
                        return Yt(t, n, "cannot parse partitions");
                    for (n = g(c = t.m, 7),
                    o = P(c) ? m(c, 4) : 0,
                    a = P(c) ? m(c, 4) : 0,
                    u = P(c) ? m(c, 4) : 0,
                    h = P(c) ? m(c, 4) : 0,
                    c = P(c) ? m(c, 4) : 0,
                    f = t.Qa,
                    d = 0; 4 > d; ++d) {
                        if (f.Cb) {
                            var v = f.Zb[d];
                            f.Fb || (v += n)
                        } else {
                            if (0 < d) {
                                t.pb[d] = t.pb[0];
                                continue
                            }
                            v = n
                        }
                        var b = t.pb[d];
                        b.Sc[0] = ei[Vt(v + o, 127)],
                        b.Sc[1] = ri[Vt(v + 0, 127)],
                        b.Eb[0] = 2 * ei[Vt(v + a, 127)],
                        b.Eb[1] = 101581 * ri[Vt(v + u, 127)] >> 16,
                        8 > b.Eb[1] && (b.Eb[1] = 8),
                        b.Qc[0] = ei[Vt(v + h, 117)],
                        b.Qc[1] = ri[Vt(v + c, 127)],
                        b.lc = v + c
                    }
                    if (!l.Rb)
                        return Yt(t, 4, "Not a key frame.");
                    for (P(s),
                    l = t.Pa,
                    n = 0; 4 > n; ++n) {
                        for (o = 0; 8 > o; ++o)
                            for (a = 0; 3 > a; ++a)
                                for (u = 0; 11 > u; ++u)
                                    h = C(s, ui[n][o][a][u]) ? g(s, 8) : si[n][o][a][u],
                                    l.Wc[n][o].Yb[a][u] = h;
                        for (o = 0; 17 > o; ++o)
                            l.Xc[n][o] = l.Wc[n][ci[o]]
                    }
                    return t.kc = P(s),
                    t.kc && (t.Bd = g(s, 8)),
                    t.cb = 1
                }
                function Xt(t, e, r, n, i, a, o) {
                    var s = e[i].Yb[r];
                    for (r = 0; 16 > i; ++i) {
                        if (!C(t, s[r + 0]))
                            return i;
                        for (; !C(t, s[r + 1]); )
                            if (s = e[++i].Yb[0],
                            r = 0,
                            16 == i)
                                return 16;
                        var l = e[i + 1].Yb;
                        if (C(t, s[r + 2])) {
                            var u = t
                              , c = 0;
                            if (C(u, (f = s)[(h = r) + 3]))
                                if (C(u, f[h + 6])) {
                                    for (s = 0,
                                    h = 2 * (c = C(u, f[h + 8])) + (f = C(u, f[h + 9 + c])),
                                    c = 0,
                                    f = ii[h]; f[s]; ++s)
                                        c += c + C(u, f[s]);
                                    c += 3 + (8 << h)
                                } else
                                    C(u, f[h + 7]) ? (c = 7 + 2 * C(u, 165),
                                    c += C(u, 145)) : c = 5 + C(u, 159);
                            else
                                c = C(u, f[h + 4]) ? 3 + C(u, f[h + 5]) : 2;
                            s = l[2]
                        } else
                            c = 1,
                            s = l[1];
                        l = o + ai[i],
                        0 > (u = t).b && S(u);
                        var h, f = u.b, d = (h = u.Ca >> 1) - (u.I >> f) >> 31;
                        --u.b,
                        u.Ca += d,
                        u.Ca |= 1,
                        u.I -= (h + 1 & d) << f,
                        a[l] = ((c ^ d) - d) * n[(0 < i) + 0]
                    }
                    return 16
                }
                function Zt(t) {
                    var e = t.rb[t.sb - 1];
                    e.la = 0,
                    e.Na = 0,
                    i(t.zc, 0, 0, t.zc.length),
                    t.ja = 0
                }
                function Qt(t, r) {
                    if (null == t)
                        return 0;
                    if (null == r)
                        return Yt(t, 2, "NULL VP8Io parameter in VP8Decode().");
                    if (!t.cb && !Kt(t, r))
                        return 0;
                    if (e(t.cb),
                    null == r.ac || r.ac(r)) {
                        r.ob && (t.L = 0);
                        var s = Ri[t.L];
                        if (2 == t.L ? (t.yb = 0,
                        t.zb = 0) : (t.yb = r.v - s >> 4,
                        t.zb = r.j - s >> 4,
                        0 > t.yb && (t.yb = 0),
                        0 > t.zb && (t.zb = 0)),
                        t.Va = r.o + 15 + s >> 4,
                        t.Hb = r.va + 15 + s >> 4,
                        t.Hb > t.za && (t.Hb = t.za),
                        t.Va > t.Ub && (t.Va = t.Ub),
                        0 < t.L) {
                            var l = t.ed;
                            for (s = 0; 4 > s; ++s) {
                                var u;
                                if (t.Qa.Cb) {
                                    var c = t.Qa.Lb[s];
                                    t.Qa.Fb || (c += l.Tb)
                                } else
                                    c = l.Tb;
                                for (u = 0; 1 >= u; ++u) {
                                    var h = t.gd[s][u]
                                      , f = c;
                                    if (l.Pc && (f += l.vd[0],
                                    u && (f += l.od[0])),
                                    0 < (f = 0 > f ? 0 : 63 < f ? 63 : f)) {
                                        var d = f;
                                        0 < l.wb && (d = 4 < l.wb ? d >> 2 : d >> 1) > 9 - l.wb && (d = 9 - l.wb),
                                        1 > d && (d = 1),
                                        h.dd = d,
                                        h.tc = 2 * f + d,
                                        h.ld = 40 <= f ? 2 : 15 <= f ? 1 : 0
                                    } else
                                        h.tc = 0;
                                    h.La = u
                                }
                            }
                        }
                        s = 0
                    } else
                        Yt(t, 6, "Frame setup failed"),
                        s = t.a;
                    if (s = 0 == s) {
                        if (s) {
                            t.$c = 0,
                            0 < t.Aa || (t.Ic = zi);
                            t: {
                                s = t.Ic,
                                l = 4 * (d = t.za);
                                var p = 32 * d
                                  , g = d + 1
                                  , m = 0 < t.L ? d * (0 < t.Aa ? 2 : 1) : 0
                                  , v = (2 == t.Aa ? 2 : 1) * d;
                                if ((h = l + 832 + (u = 3 * (16 * s + Ri[t.L]) / 2 * p) + (c = null != t.Fa && 0 < t.Fa.length ? t.Kc.c * t.Kc.i : 0)) != h)
                                    s = 0;
                                else {
                                    if (h > t.Vb) {
                                        if (t.Vb = 0,
                                        t.Ec = a(h),
                                        t.Fc = 0,
                                        null == t.Ec) {
                                            s = Yt(t, 1, "no memory during frame initialization.");
                                            break t
                                        }
                                        t.Vb = h
                                    }
                                    h = t.Ec,
                                    f = t.Fc,
                                    t.Ac = h,
                                    t.Bc = f,
                                    f += l,
                                    t.Gd = o(p, Wt),
                                    t.Hd = 0,
                                    t.rb = o(g + 1, Rt),
                                    t.sb = 1,
                                    t.wa = m ? o(m, Et) : null,
                                    t.Y = 0,
                                    t.D.Nb = 0,
                                    t.D.wa = t.wa,
                                    t.D.Y = t.Y,
                                    0 < t.Aa && (t.D.Y += d),
                                    e(!0),
                                    t.oc = h,
                                    t.pc = f,
                                    f += 832,
                                    t.ya = o(v, zt),
                                    t.aa = 0,
                                    t.D.ya = t.ya,
                                    t.D.aa = t.aa,
                                    2 == t.Aa && (t.D.aa += d),
                                    t.R = 16 * d,
                                    t.B = 8 * d,
                                    d = (p = Ri[t.L]) * t.R,
                                    p = p / 2 * t.B,
                                    t.sa = h,
                                    t.ta = f + d,
                                    t.qa = t.sa,
                                    t.ra = t.ta + 16 * s * t.R + p,
                                    t.Ha = t.qa,
                                    t.Ia = t.ra + 8 * s * t.B + p,
                                    t.$c = 0,
                                    f += u,
                                    t.mb = c ? h : null,
                                    t.nb = c ? f : null,
                                    e(f + c <= t.Fc + t.Vb),
                                    Zt(t),
                                    i(t.Ac, t.Bc, 0, l),
                                    s = 1
                                }
                            }
                            if (s) {
                                if (r.ka = 0,
                                r.y = t.sa,
                                r.O = t.ta,
                                r.f = t.qa,
                                r.N = t.ra,
                                r.ea = t.Ha,
                                r.Vd = t.Ia,
                                r.fa = t.R,
                                r.Rc = t.B,
                                r.F = null,
                                r.J = 0,
                                !In) {
                                    for (s = -255; 255 >= s; ++s)
                                        Pn[255 + s] = 0 > s ? -s : s;
                                    for (s = -1020; 1020 >= s; ++s)
                                        Cn[1020 + s] = -128 > s ? -128 : 127 < s ? 127 : s;
                                    for (s = -112; 112 >= s; ++s)
                                        kn[112 + s] = -16 > s ? -16 : 15 < s ? 15 : s;
                                    for (s = -255; 510 >= s; ++s)
                                        Fn[255 + s] = 0 > s ? 0 : 255 < s ? 255 : s;
                                    In = 1
                                }
                                an = ue,
                                on = ae,
                                ln = oe,
                                un = se,
                                cn = le,
                                sn = ie,
                                hn = Ye,
                                fn = Je,
                                dn = Ze,
                                pn = Qe,
                                gn = Ke,
                                mn = Xe,
                                vn = tr,
                                bn = er,
                                yn = Ue,
                                wn = We,
                                xn = He,
                                _n = Ve,
                                fi[0] = Ae,
                                fi[1] = he,
                                fi[2] = _e,
                                fi[3] = Ne,
                                fi[4] = Le,
                                fi[5] = Pe,
                                fi[6] = Se,
                                fi[7] = Ce,
                                fi[8] = Fe,
                                fi[9] = ke,
                                hi[0] = ve,
                                hi[1] = de,
                                hi[2] = pe,
                                hi[3] = ge,
                                hi[4] = be,
                                hi[5] = ye,
                                hi[6] = we,
                                di[0] = De,
                                di[1] = fe,
                                di[2] = Ie,
                                di[3] = je,
                                di[4] = Me,
                                di[5] = Te,
                                di[6] = Be,
                                s = 1
                            } else
                                s = 0
                        }
                        s && (s = function(t, r) {
                            for (t.M = 0; t.M < t.Va; ++t.M) {
                                var o, s = t.Jc[t.M & t.Xb], l = t.m, u = t;
                                for (o = 0; o < u.za; ++o) {
                                    var c = l
                                      , h = u
                                      , f = h.Ac
                                      , d = h.Bc + 4 * o
                                      , p = h.zc
                                      , g = h.ya[h.aa + o];
                                    if (h.Qa.Bb ? g.$b = C(c, h.Pa.jb[0]) ? 2 + C(c, h.Pa.jb[2]) : C(c, h.Pa.jb[1]) : g.$b = 0,
                                    h.kc && (g.Ad = C(c, h.Bd)),
                                    g.Za = !C(c, 145) + 0,
                                    g.Za) {
                                        var m = g.Ob
                                          , v = 0;
                                        for (h = 0; 4 > h; ++h) {
                                            var b, y = p[0 + h];
                                            for (b = 0; 4 > b; ++b) {
                                                y = li[f[d + b]][y];
                                                for (var w = oi[C(c, y[0])]; 0 < w; )
                                                    w = oi[2 * w + C(c, y[w])];
                                                y = -w,
                                                f[d + b] = y
                                            }
                                            n(m, v, f, d, 4),
                                            v += 4,
                                            p[0 + h] = y
                                        }
                                    } else
                                        y = C(c, 156) ? C(c, 128) ? 1 : 3 : C(c, 163) ? 2 : 0,
                                        g.Ob[0] = y,
                                        i(f, d, y, 4),
                                        i(p, 0, y, 4);
                                    g.Dd = C(c, 142) ? C(c, 114) ? C(c, 183) ? 1 : 3 : 2 : 0
                                }
                                if (u.m.Ka)
                                    return Yt(t, 7, "Premature end-of-partition0 encountered.");
                                for (; t.ja < t.za; ++t.ja) {
                                    if (u = s,
                                    c = (l = t).rb[l.sb - 1],
                                    f = l.rb[l.sb + l.ja],
                                    o = l.ya[l.aa + l.ja],
                                    d = l.kc ? o.Ad : 0)
                                        c.la = f.la = 0,
                                        o.Za || (c.Na = f.Na = 0),
                                        o.Hc = 0,
                                        o.Gc = 0,
                                        o.ia = 0;
                                    else {
                                        var x, _;
                                        if (c = f,
                                        f = u,
                                        d = l.Pa.Xc,
                                        p = l.ya[l.aa + l.ja],
                                        g = l.pb[p.$b],
                                        h = p.ad,
                                        m = 0,
                                        v = l.rb[l.sb - 1],
                                        y = b = 0,
                                        i(h, m, 0, 384),
                                        p.Za)
                                            var N = 0
                                              , A = d[3];
                                        else {
                                            w = a(16);
                                            var L = c.Na + v.Na;
                                            if (L = ni(f, d[1], L, g.Eb, 0, w, 0),
                                            c.Na = v.Na = (0 < L) + 0,
                                            1 < L)
                                                an(w, 0, h, m);
                                            else {
                                                var S = w[0] + 3 >> 3;
                                                for (w = 0; 256 > w; w += 16)
                                                    h[m + w] = S
                                            }
                                            N = 1,
                                            A = d[0]
                                        }
                                        var P = 15 & c.la
                                          , k = 15 & v.la;
                                        for (w = 0; 4 > w; ++w) {
                                            var F = 1 & k;
                                            for (S = _ = 0; 4 > S; ++S)
                                                P = P >> 1 | (F = (L = ni(f, A, L = F + (1 & P), g.Sc, N, h, m)) > N) << 7,
                                                _ = _ << 2 | (3 < L ? 3 : 1 < L ? 2 : 0 != h[m + 0]),
                                                m += 16;
                                            P >>= 4,
                                            k = k >> 1 | F << 7,
                                            b = (b << 8 | _) >>> 0
                                        }
                                        for (A = P,
                                        N = k >> 4,
                                        x = 0; 4 > x; x += 2) {
                                            for (_ = 0,
                                            P = c.la >> 4 + x,
                                            k = v.la >> 4 + x,
                                            w = 0; 2 > w; ++w) {
                                                for (F = 1 & k,
                                                S = 0; 2 > S; ++S)
                                                    L = F + (1 & P),
                                                    P = P >> 1 | (F = 0 < (L = ni(f, d[2], L, g.Qc, 0, h, m))) << 3,
                                                    _ = _ << 2 | (3 < L ? 3 : 1 < L ? 2 : 0 != h[m + 0]),
                                                    m += 16;
                                                P >>= 2,
                                                k = k >> 1 | F << 5
                                            }
                                            y |= _ << 4 * x,
                                            A |= P << 4 << x,
                                            N |= (240 & k) << x
                                        }
                                        c.la = A,
                                        v.la = N,
                                        p.Hc = b,
                                        p.Gc = y,
                                        p.ia = 43690 & y ? 0 : g.ia,
                                        d = !(b | y)
                                    }
                                    if (0 < l.L && (l.wa[l.Y + l.ja] = l.gd[o.$b][o.Za],
                                    l.wa[l.Y + l.ja].La |= !d),
                                    u.Ka)
                                        return Yt(t, 7, "Premature end-of-file encountered.")
                                }
                                if (Zt(t),
                                l = r,
                                u = 1,
                                o = (s = t).D,
                                c = 0 < s.L && s.M >= s.zb && s.M <= s.Va,
                                0 == s.Aa)
                                    t: {
                                        if (o.M = s.M,
                                        o.uc = c,
                                        Or(s, o),
                                        u = 1,
                                        o = (_ = s.D).Nb,
                                        c = (y = Ri[s.L]) * s.R,
                                        f = y / 2 * s.B,
                                        w = 16 * o * s.R,
                                        S = 8 * o * s.B,
                                        d = s.sa,
                                        p = s.ta - c + w,
                                        g = s.qa,
                                        h = s.ra - f + S,
                                        m = s.Ha,
                                        v = s.Ia - f + S,
                                        k = 0 == (P = _.M),
                                        b = P >= s.Va - 1,
                                        2 == s.Aa && Or(s, _),
                                        _.uc)
                                            for (F = (L = s).D.M,
                                            e(L.D.uc),
                                            _ = L.yb; _ < L.Hb; ++_) {
                                                N = _,
                                                A = F;
                                                var I = (j = (z = L).D).Nb;
                                                x = z.R;
                                                var j = j.wa[j.Y + N]
                                                  , O = z.sa
                                                  , D = z.ta + 16 * I * x + 16 * N
                                                  , T = j.dd
                                                  , M = j.tc;
                                                if (0 != M)
                                                    if (e(3 <= M),
                                                    1 == z.L)
                                                        0 < N && wn(O, D, x, M + 4),
                                                        j.La && _n(O, D, x, M),
                                                        0 < A && yn(O, D, x, M + 4),
                                                        j.La && xn(O, D, x, M);
                                                    else {
                                                        var B = z.B
                                                          , E = z.qa
                                                          , R = z.ra + 8 * I * B + 8 * N
                                                          , q = z.Ha
                                                          , z = z.Ia + 8 * I * B + 8 * N;
                                                        I = j.ld,
                                                        0 < N && (fn(O, D, x, M + 4, T, I),
                                                        pn(E, R, q, z, B, M + 4, T, I)),
                                                        j.La && (mn(O, D, x, M, T, I),
                                                        bn(E, R, q, z, B, M, T, I)),
                                                        0 < A && (hn(O, D, x, M + 4, T, I),
                                                        dn(E, R, q, z, B, M + 4, T, I)),
                                                        j.La && (gn(O, D, x, M, T, I),
                                                        vn(E, R, q, z, B, M, T, I))
                                                    }
                                            }
                                        if (s.ia && alert("todo:DitherRow"),
                                        null != l.put) {
                                            if (_ = 16 * P,
                                            P = 16 * (P + 1),
                                            k ? (l.y = s.sa,
                                            l.O = s.ta + w,
                                            l.f = s.qa,
                                            l.N = s.ra + S,
                                            l.ea = s.Ha,
                                            l.W = s.Ia + S) : (_ -= y,
                                            l.y = d,
                                            l.O = p,
                                            l.f = g,
                                            l.N = h,
                                            l.ea = m,
                                            l.W = v),
                                            b || (P -= y),
                                            P > l.o && (P = l.o),
                                            l.F = null,
                                            l.J = null,
                                            null != s.Fa && 0 < s.Fa.length && _ < P && (l.J = hr(s, l, _, P - _),
                                            l.F = s.mb,
                                            null == l.F && 0 == l.F.length)) {
                                                u = Yt(s, 3, "Could not decode alpha data.");
                                                break t
                                            }
                                            _ < l.j && (y = l.j - _,
                                            _ = l.j,
                                            e(!(1 & y)),
                                            l.O += s.R * y,
                                            l.N += s.B * (y >> 1),
                                            l.W += s.B * (y >> 1),
                                            null != l.F && (l.J += l.width * y)),
                                            _ < P && (l.O += l.v,
                                            l.N += l.v >> 1,
                                            l.W += l.v >> 1,
                                            null != l.F && (l.J += l.v),
                                            l.ka = _ - l.j,
                                            l.U = l.va - l.v,
                                            l.T = P - _,
                                            u = l.put(l))
                                        }
                                        o + 1 != s.Ic || b || (n(s.sa, s.ta - c, d, p + 16 * s.R, c),
                                        n(s.qa, s.ra - f, g, h + 8 * s.B, f),
                                        n(s.Ha, s.Ia - f, m, v + 8 * s.B, f))
                                    }
                                if (!u)
                                    return Yt(t, 6, "Output aborted.")
                            }
                            return 1
                        }(t, r)),
                        null != r.bc && r.bc(r),
                        s &= 1
                    }
                    return s ? (t.cb = 0,
                    s) : 0
                }
                function te(t, e, r, n, i) {
                    i = t[e + r + 32 * n] + (i >> 3),
                    t[e + r + 32 * n] = -256 & i ? 0 > i ? 0 : 255 : i
                }
                function ee(t, e, r, n, i, a) {
                    te(t, e, 0, r, n + i),
                    te(t, e, 1, r, n + a),
                    te(t, e, 2, r, n - a),
                    te(t, e, 3, r, n - i)
                }
                function re(t) {
                    return (20091 * t >> 16) + t
                }
                function ne(t, e, r, n) {
                    var i, o = 0, s = a(16);
                    for (i = 0; 4 > i; ++i) {
                        var l = t[e + 0] + t[e + 8]
                          , u = t[e + 0] - t[e + 8]
                          , c = (35468 * t[e + 4] >> 16) - re(t[e + 12])
                          , h = re(t[e + 4]) + (35468 * t[e + 12] >> 16);
                        s[o + 0] = l + h,
                        s[o + 1] = u + c,
                        s[o + 2] = u - c,
                        s[o + 3] = l - h,
                        o += 4,
                        e++
                    }
                    for (i = o = 0; 4 > i; ++i)
                        l = (t = s[o + 0] + 4) + s[o + 8],
                        u = t - s[o + 8],
                        c = (35468 * s[o + 4] >> 16) - re(s[o + 12]),
                        te(r, n, 0, 0, l + (h = re(s[o + 4]) + (35468 * s[o + 12] >> 16))),
                        te(r, n, 1, 0, u + c),
                        te(r, n, 2, 0, u - c),
                        te(r, n, 3, 0, l - h),
                        o++,
                        n += 32
                }
                function ie(t, e, r, n) {
                    var i = t[e + 0] + 4
                      , a = 35468 * t[e + 4] >> 16
                      , o = re(t[e + 4])
                      , s = 35468 * t[e + 1] >> 16;
                    ee(r, n, 0, i + o, t = re(t[e + 1]), s),
                    ee(r, n, 1, i + a, t, s),
                    ee(r, n, 2, i - a, t, s),
                    ee(r, n, 3, i - o, t, s)
                }
                function ae(t, e, r, n, i) {
                    ne(t, e, r, n),
                    i && ne(t, e + 16, r, n + 4)
                }
                function oe(t, e, r, n) {
                    on(t, e + 0, r, n, 1),
                    on(t, e + 32, r, n + 128, 1)
                }
                function se(t, e, r, n) {
                    var i;
                    for (t = t[e + 0] + 4,
                    i = 0; 4 > i; ++i)
                        for (e = 0; 4 > e; ++e)
                            te(r, n, e, i, t)
                }
                function le(t, e, r, n) {
                    t[e + 0] && un(t, e + 0, r, n),
                    t[e + 16] && un(t, e + 16, r, n + 4),
                    t[e + 32] && un(t, e + 32, r, n + 128),
                    t[e + 48] && un(t, e + 48, r, n + 128 + 4)
                }
                function ue(t, e, r, n) {
                    var i, o = a(16);
                    for (i = 0; 4 > i; ++i) {
                        var s = t[e + 0 + i] + t[e + 12 + i]
                          , l = t[e + 4 + i] + t[e + 8 + i]
                          , u = t[e + 4 + i] - t[e + 8 + i]
                          , c = t[e + 0 + i] - t[e + 12 + i];
                        o[0 + i] = s + l,
                        o[8 + i] = s - l,
                        o[4 + i] = c + u,
                        o[12 + i] = c - u
                    }
                    for (i = 0; 4 > i; ++i)
                        s = (t = o[0 + 4 * i] + 3) + o[3 + 4 * i],
                        l = o[1 + 4 * i] + o[2 + 4 * i],
                        u = o[1 + 4 * i] - o[2 + 4 * i],
                        c = t - o[3 + 4 * i],
                        r[n + 0] = s + l >> 3,
                        r[n + 16] = c + u >> 3,
                        r[n + 32] = s - l >> 3,
                        r[n + 48] = c - u >> 3,
                        n += 64
                }
                function ce(t, e, r) {
                    var n, i = e - 32, a = Dn, o = 255 - t[i - 1];
                    for (n = 0; n < r; ++n) {
                        var s, l = a, u = o + t[e - 1];
                        for (s = 0; s < r; ++s)
                            t[e + s] = l[u + t[i + s]];
                        e += 32
                    }
                }
                function he(t, e) {
                    ce(t, e, 4)
                }
                function fe(t, e) {
                    ce(t, e, 8)
                }
                function de(t, e) {
                    ce(t, e, 16)
                }
                function pe(t, e) {
                    var r;
                    for (r = 0; 16 > r; ++r)
                        n(t, e + 32 * r, t, e - 32, 16)
                }
                function ge(t, e) {
                    var r;
                    for (r = 16; 0 < r; --r)
                        i(t, e, t[e - 1], 16),
                        e += 32
                }
                function me(t, e, r) {
                    var n;
                    for (n = 0; 16 > n; ++n)
                        i(e, r + 32 * n, t, 16)
                }
                function ve(t, e) {
                    var r, n = 16;
                    for (r = 0; 16 > r; ++r)
                        n += t[e - 1 + 32 * r] + t[e + r - 32];
                    me(n >> 5, t, e)
                }
                function be(t, e) {
                    var r, n = 8;
                    for (r = 0; 16 > r; ++r)
                        n += t[e - 1 + 32 * r];
                    me(n >> 4, t, e)
                }
                function ye(t, e) {
                    var r, n = 8;
                    for (r = 0; 16 > r; ++r)
                        n += t[e + r - 32];
                    me(n >> 4, t, e)
                }
                function we(t, e) {
                    me(128, t, e)
                }
                function xe(t, e, r) {
                    return t + 2 * e + r + 2 >> 2
                }
                function _e(t, e) {
                    var r, i = e - 32;
                    for (i = new Uint8Array([xe(t[i - 1], t[i + 0], t[i + 1]), xe(t[i + 0], t[i + 1], t[i + 2]), xe(t[i + 1], t[i + 2], t[i + 3]), xe(t[i + 2], t[i + 3], t[i + 4])]),
                    r = 0; 4 > r; ++r)
                        n(t, e + 32 * r, i, 0, i.length)
                }
                function Ne(t, e) {
                    var r = t[e - 1]
                      , n = t[e - 1 + 32]
                      , i = t[e - 1 + 64]
                      , a = t[e - 1 + 96];
                    k(t, e + 0, 16843009 * xe(t[e - 1 - 32], r, n)),
                    k(t, e + 32, 16843009 * xe(r, n, i)),
                    k(t, e + 64, 16843009 * xe(n, i, a)),
                    k(t, e + 96, 16843009 * xe(i, a, a))
                }
                function Ae(t, e) {
                    var r, n = 4;
                    for (r = 0; 4 > r; ++r)
                        n += t[e + r - 32] + t[e - 1 + 32 * r];
                    for (n >>= 3,
                    r = 0; 4 > r; ++r)
                        i(t, e + 32 * r, n, 4)
                }
                function Le(t, e) {
                    var r = t[e - 1 + 0]
                      , n = t[e - 1 + 32]
                      , i = t[e - 1 + 64]
                      , a = t[e - 1 - 32]
                      , o = t[e + 0 - 32]
                      , s = t[e + 1 - 32]
                      , l = t[e + 2 - 32]
                      , u = t[e + 3 - 32];
                    t[e + 0 + 96] = xe(n, i, t[e - 1 + 96]),
                    t[e + 1 + 96] = t[e + 0 + 64] = xe(r, n, i),
                    t[e + 2 + 96] = t[e + 1 + 64] = t[e + 0 + 32] = xe(a, r, n),
                    t[e + 3 + 96] = t[e + 2 + 64] = t[e + 1 + 32] = t[e + 0 + 0] = xe(o, a, r),
                    t[e + 3 + 64] = t[e + 2 + 32] = t[e + 1 + 0] = xe(s, o, a),
                    t[e + 3 + 32] = t[e + 2 + 0] = xe(l, s, o),
                    t[e + 3 + 0] = xe(u, l, s)
                }
                function Se(t, e) {
                    var r = t[e + 1 - 32]
                      , n = t[e + 2 - 32]
                      , i = t[e + 3 - 32]
                      , a = t[e + 4 - 32]
                      , o = t[e + 5 - 32]
                      , s = t[e + 6 - 32]
                      , l = t[e + 7 - 32];
                    t[e + 0 + 0] = xe(t[e + 0 - 32], r, n),
                    t[e + 1 + 0] = t[e + 0 + 32] = xe(r, n, i),
                    t[e + 2 + 0] = t[e + 1 + 32] = t[e + 0 + 64] = xe(n, i, a),
                    t[e + 3 + 0] = t[e + 2 + 32] = t[e + 1 + 64] = t[e + 0 + 96] = xe(i, a, o),
                    t[e + 3 + 32] = t[e + 2 + 64] = t[e + 1 + 96] = xe(a, o, s),
                    t[e + 3 + 64] = t[e + 2 + 96] = xe(o, s, l),
                    t[e + 3 + 96] = xe(s, l, l)
                }
                function Pe(t, e) {
                    var r = t[e - 1 + 0]
                      , n = t[e - 1 + 32]
                      , i = t[e - 1 + 64]
                      , a = t[e - 1 - 32]
                      , o = t[e + 0 - 32]
                      , s = t[e + 1 - 32]
                      , l = t[e + 2 - 32]
                      , u = t[e + 3 - 32];
                    t[e + 0 + 0] = t[e + 1 + 64] = a + o + 1 >> 1,
                    t[e + 1 + 0] = t[e + 2 + 64] = o + s + 1 >> 1,
                    t[e + 2 + 0] = t[e + 3 + 64] = s + l + 1 >> 1,
                    t[e + 3 + 0] = l + u + 1 >> 1,
                    t[e + 0 + 96] = xe(i, n, r),
                    t[e + 0 + 64] = xe(n, r, a),
                    t[e + 0 + 32] = t[e + 1 + 96] = xe(r, a, o),
                    t[e + 1 + 32] = t[e + 2 + 96] = xe(a, o, s),
                    t[e + 2 + 32] = t[e + 3 + 96] = xe(o, s, l),
                    t[e + 3 + 32] = xe(s, l, u)
                }
                function Ce(t, e) {
                    var r = t[e + 0 - 32]
                      , n = t[e + 1 - 32]
                      , i = t[e + 2 - 32]
                      , a = t[e + 3 - 32]
                      , o = t[e + 4 - 32]
                      , s = t[e + 5 - 32]
                      , l = t[e + 6 - 32]
                      , u = t[e + 7 - 32];
                    t[e + 0 + 0] = r + n + 1 >> 1,
                    t[e + 1 + 0] = t[e + 0 + 64] = n + i + 1 >> 1,
                    t[e + 2 + 0] = t[e + 1 + 64] = i + a + 1 >> 1,
                    t[e + 3 + 0] = t[e + 2 + 64] = a + o + 1 >> 1,
                    t[e + 0 + 32] = xe(r, n, i),
                    t[e + 1 + 32] = t[e + 0 + 96] = xe(n, i, a),
                    t[e + 2 + 32] = t[e + 1 + 96] = xe(i, a, o),
                    t[e + 3 + 32] = t[e + 2 + 96] = xe(a, o, s),
                    t[e + 3 + 64] = xe(o, s, l),
                    t[e + 3 + 96] = xe(s, l, u)
                }
                function ke(t, e) {
                    var r = t[e - 1 + 0]
                      , n = t[e - 1 + 32]
                      , i = t[e - 1 + 64]
                      , a = t[e - 1 + 96];
                    t[e + 0 + 0] = r + n + 1 >> 1,
                    t[e + 2 + 0] = t[e + 0 + 32] = n + i + 1 >> 1,
                    t[e + 2 + 32] = t[e + 0 + 64] = i + a + 1 >> 1,
                    t[e + 1 + 0] = xe(r, n, i),
                    t[e + 3 + 0] = t[e + 1 + 32] = xe(n, i, a),
                    t[e + 3 + 32] = t[e + 1 + 64] = xe(i, a, a),
                    t[e + 3 + 64] = t[e + 2 + 64] = t[e + 0 + 96] = t[e + 1 + 96] = t[e + 2 + 96] = t[e + 3 + 96] = a
                }
                function Fe(t, e) {
                    var r = t[e - 1 + 0]
                      , n = t[e - 1 + 32]
                      , i = t[e - 1 + 64]
                      , a = t[e - 1 + 96]
                      , o = t[e - 1 - 32]
                      , s = t[e + 0 - 32]
                      , l = t[e + 1 - 32]
                      , u = t[e + 2 - 32];
                    t[e + 0 + 0] = t[e + 2 + 32] = r + o + 1 >> 1,
                    t[e + 0 + 32] = t[e + 2 + 64] = n + r + 1 >> 1,
                    t[e + 0 + 64] = t[e + 2 + 96] = i + n + 1 >> 1,
                    t[e + 0 + 96] = a + i + 1 >> 1,
                    t[e + 3 + 0] = xe(s, l, u),
                    t[e + 2 + 0] = xe(o, s, l),
                    t[e + 1 + 0] = t[e + 3 + 32] = xe(r, o, s),
                    t[e + 1 + 32] = t[e + 3 + 64] = xe(n, r, o),
                    t[e + 1 + 64] = t[e + 3 + 96] = xe(i, n, r),
                    t[e + 1 + 96] = xe(a, i, n)
                }
                function Ie(t, e) {
                    var r;
                    for (r = 0; 8 > r; ++r)
                        n(t, e + 32 * r, t, e - 32, 8)
                }
                function je(t, e) {
                    var r;
                    for (r = 0; 8 > r; ++r)
                        i(t, e, t[e - 1], 8),
                        e += 32
                }
                function Oe(t, e, r) {
                    var n;
                    for (n = 0; 8 > n; ++n)
                        i(e, r + 32 * n, t, 8)
                }
                function De(t, e) {
                    var r, n = 8;
                    for (r = 0; 8 > r; ++r)
                        n += t[e + r - 32] + t[e - 1 + 32 * r];
                    Oe(n >> 4, t, e)
                }
                function Te(t, e) {
                    var r, n = 4;
                    for (r = 0; 8 > r; ++r)
                        n += t[e + r - 32];
                    Oe(n >> 3, t, e)
                }
                function Me(t, e) {
                    var r, n = 4;
                    for (r = 0; 8 > r; ++r)
                        n += t[e - 1 + 32 * r];
                    Oe(n >> 3, t, e)
                }
                function Be(t, e) {
                    Oe(128, t, e)
                }
                function Ee(t, e, r) {
                    var n = t[e - r]
                      , i = t[e + 0]
                      , a = 3 * (i - n) + jn[1020 + t[e - 2 * r] - t[e + r]]
                      , o = On[112 + (a + 4 >> 3)];
                    t[e - r] = Dn[255 + n + On[112 + (a + 3 >> 3)]],
                    t[e + 0] = Dn[255 + i - o]
                }
                function Re(t, e, r, n) {
                    var i = t[e + 0]
                      , a = t[e + r];
                    return Tn[255 + t[e - 2 * r] - t[e - r]] > n || Tn[255 + a - i] > n
                }
                function qe(t, e, r, n) {
                    return 4 * Tn[255 + t[e - r] - t[e + 0]] + Tn[255 + t[e - 2 * r] - t[e + r]] <= n
                }
                function ze(t, e, r, n, i) {
                    var a = t[e - 3 * r]
                      , o = t[e - 2 * r]
                      , s = t[e - r]
                      , l = t[e + 0]
                      , u = t[e + r]
                      , c = t[e + 2 * r]
                      , h = t[e + 3 * r];
                    return 4 * Tn[255 + s - l] + Tn[255 + o - u] > n ? 0 : Tn[255 + t[e - 4 * r] - a] <= i && Tn[255 + a - o] <= i && Tn[255 + o - s] <= i && Tn[255 + h - c] <= i && Tn[255 + c - u] <= i && Tn[255 + u - l] <= i
                }
                function Ue(t, e, r, n) {
                    var i = 2 * n + 1;
                    for (n = 0; 16 > n; ++n)
                        qe(t, e + n, r, i) && Ee(t, e + n, r)
                }
                function We(t, e, r, n) {
                    var i = 2 * n + 1;
                    for (n = 0; 16 > n; ++n)
                        qe(t, e + n * r, 1, i) && Ee(t, e + n * r, 1)
                }
                function He(t, e, r, n) {
                    var i;
                    for (i = 3; 0 < i; --i)
                        Ue(t, e += 4 * r, r, n)
                }
                function Ve(t, e, r, n) {
                    var i;
                    for (i = 3; 0 < i; --i)
                        We(t, e += 4, r, n)
                }
                function Ge(t, e, r, n, i, a, o, s) {
                    for (a = 2 * a + 1; 0 < i--; ) {
                        if (ze(t, e, r, a, o))
                            if (Re(t, e, r, s))
                                Ee(t, e, r);
                            else {
                                var l = t
                                  , u = e
                                  , c = r
                                  , h = l[u - 2 * c]
                                  , f = l[u - c]
                                  , d = l[u + 0]
                                  , p = l[u + c]
                                  , g = l[u + 2 * c]
                                  , m = 27 * (b = jn[1020 + 3 * (d - f) + jn[1020 + h - p]]) + 63 >> 7
                                  , v = 18 * b + 63 >> 7
                                  , b = 9 * b + 63 >> 7;
                                l[u - 3 * c] = Dn[255 + l[u - 3 * c] + b],
                                l[u - 2 * c] = Dn[255 + h + v],
                                l[u - c] = Dn[255 + f + m],
                                l[u + 0] = Dn[255 + d - m],
                                l[u + c] = Dn[255 + p - v],
                                l[u + 2 * c] = Dn[255 + g - b]
                            }
                        e += n
                    }
                }
                function $e(t, e, r, n, i, a, o, s) {
                    for (a = 2 * a + 1; 0 < i--; ) {
                        if (ze(t, e, r, a, o))
                            if (Re(t, e, r, s))
                                Ee(t, e, r);
                            else {
                                var l = t
                                  , u = e
                                  , c = r
                                  , h = l[u - c]
                                  , f = l[u + 0]
                                  , d = l[u + c]
                                  , p = On[112 + (4 + (g = 3 * (f - h)) >> 3)]
                                  , g = On[112 + (g + 3 >> 3)]
                                  , m = p + 1 >> 1;
                                l[u - 2 * c] = Dn[255 + l[u - 2 * c] + m],
                                l[u - c] = Dn[255 + h + g],
                                l[u + 0] = Dn[255 + f - p],
                                l[u + c] = Dn[255 + d - m]
                            }
                        e += n
                    }
                }
                function Ye(t, e, r, n, i, a) {
                    Ge(t, e, r, 1, 16, n, i, a)
                }
                function Je(t, e, r, n, i, a) {
                    Ge(t, e, 1, r, 16, n, i, a)
                }
                function Ke(t, e, r, n, i, a) {
                    var o;
                    for (o = 3; 0 < o; --o)
                        $e(t, e += 4 * r, r, 1, 16, n, i, a)
                }
                function Xe(t, e, r, n, i, a) {
                    var o;
                    for (o = 3; 0 < o; --o)
                        $e(t, e += 4, 1, r, 16, n, i, a)
                }
                function Ze(t, e, r, n, i, a, o, s) {
                    Ge(t, e, i, 1, 8, a, o, s),
                    Ge(r, n, i, 1, 8, a, o, s)
                }
                function Qe(t, e, r, n, i, a, o, s) {
                    Ge(t, e, 1, i, 8, a, o, s),
                    Ge(r, n, 1, i, 8, a, o, s)
                }
                function tr(t, e, r, n, i, a, o, s) {
                    $e(t, e + 4 * i, i, 1, 8, a, o, s),
                    $e(r, n + 4 * i, i, 1, 8, a, o, s)
                }
                function er(t, e, r, n, i, a, o, s) {
                    $e(t, e + 4, 1, i, 8, a, o, s),
                    $e(r, n + 4, 1, i, 8, a, o, s)
                }
                function rr() {
                    this.ba = new ot,
                    this.ec = [],
                    this.cc = [],
                    this.Mc = [],
                    this.Dc = this.Nc = this.dc = this.fc = 0,
                    this.Oa = new lt,
                    this.memory = 0,
                    this.Ib = "OutputFunc",
                    this.Jb = "OutputAlphaFunc",
                    this.Nd = "OutputRowFunc"
                }
                function nr() {
                    this.data = [],
                    this.offset = this.kd = this.ha = this.w = 0,
                    this.na = [],
                    this.xa = this.gb = this.Ja = this.Sa = this.P = 0
                }
                function ir() {
                    this.nc = this.Ea = this.b = this.hc = 0,
                    this.K = [],
                    this.w = 0
                }
                function ar() {
                    this.ua = 0,
                    this.Wa = new T,
                    this.vb = new T,
                    this.md = this.xc = this.wc = 0,
                    this.vc = [],
                    this.Wb = 0,
                    this.Ya = new d,
                    this.yc = new h
                }
                function or() {
                    this.xb = this.a = 0,
                    this.l = new Gt,
                    this.ca = new ot,
                    this.V = [],
                    this.Ba = 0,
                    this.Ta = [],
                    this.Ua = 0,
                    this.m = new x,
                    this.Pb = 0,
                    this.wd = new x,
                    this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0,
                    this.s = new ar,
                    this.ab = 0,
                    this.gc = o(4, ir),
                    this.Oc = 0
                }
                function sr() {
                    this.Lc = this.Z = this.$a = this.i = this.c = 0,
                    this.l = new Gt,
                    this.ic = 0,
                    this.ca = [],
                    this.tb = 0,
                    this.qd = null,
                    this.rd = 0
                }
                function lr(t, e, r, n, i, a, o) {
                    for (t = null == t ? 0 : t[e + 0],
                    e = 0; e < o; ++e)
                        i[a + e] = t + r[n + e] & 255,
                        t = i[a + e]
                }
                function ur(t, e, r, n, i, a, o) {
                    var s;
                    if (null == t)
                        lr(null, null, r, n, i, a, o);
                    else
                        for (s = 0; s < o; ++s)
                            i[a + s] = t[e + s] + r[n + s] & 255
                }
                function cr(t, e, r, n, i, a, o) {
                    if (null == t)
                        lr(null, null, r, n, i, a, o);
                    else {
                        var s, l = t[e + 0], u = l, c = l;
                        for (s = 0; s < o; ++s)
                            u = c + (l = t[e + s]) - u,
                            c = r[n + s] + (-256 & u ? 0 > u ? 0 : 255 : u) & 255,
                            u = l,
                            i[a + s] = c
                    }
                }
                function hr(t, r, i, o) {
                    var s = r.width
                      , l = r.o;
                    if (e(null != t && null != r),
                    0 > i || 0 >= o || i + o > l)
                        return null;
                    if (!t.Cc) {
                        if (null == t.ga) {
                            var u;
                            if (t.ga = new sr,
                            (u = null == t.ga) || (u = r.width * r.o,
                            e(0 == t.Gb.length),
                            t.Gb = a(u),
                            t.Uc = 0,
                            null == t.Gb ? u = 0 : (t.mb = t.Gb,
                            t.nb = t.Uc,
                            t.rc = null,
                            u = 1),
                            u = !u),
                            !u) {
                                u = t.ga;
                                var c = t.Fa
                                  , h = t.P
                                  , f = t.qc
                                  , d = t.mb
                                  , p = t.nb
                                  , g = h + 1
                                  , m = f - 1
                                  , b = u.l;
                                if (e(null != c && null != d && null != r),
                                mi[0] = null,
                                mi[1] = lr,
                                mi[2] = ur,
                                mi[3] = cr,
                                u.ca = d,
                                u.tb = p,
                                u.c = r.width,
                                u.i = r.height,
                                e(0 < u.c && 0 < u.i),
                                1 >= f)
                                    r = 0;
                                else if (u.$a = c[h + 0] >> 0 & 3,
                                u.Z = c[h + 0] >> 2 & 3,
                                u.Lc = c[h + 0] >> 4 & 3,
                                h = c[h + 0] >> 6 & 3,
                                0 > u.$a || 1 < u.$a || 4 <= u.Z || 1 < u.Lc || h)
                                    r = 0;
                                else if (b.put = dt,
                                b.ac = ft,
                                b.bc = pt,
                                b.ma = u,
                                b.width = r.width,
                                b.height = r.height,
                                b.Da = r.Da,
                                b.v = r.v,
                                b.va = r.va,
                                b.j = r.j,
                                b.o = r.o,
                                u.$a)
                                    t: {
                                        e(1 == u.$a),
                                        r = Ct();
                                        e: for (; ; ) {
                                            if (null == r) {
                                                r = 0;
                                                break t
                                            }
                                            if (e(null != u),
                                            u.mc = r,
                                            r.c = u.c,
                                            r.i = u.i,
                                            r.l = u.l,
                                            r.l.ma = u,
                                            r.l.width = u.c,
                                            r.l.height = u.i,
                                            r.a = 0,
                                            v(r.m, c, g, m),
                                            !kt(u.c, u.i, 1, r, null))
                                                break e;
                                            if (1 == r.ab && 3 == r.gc[0].hc && Nt(r.s) ? (u.ic = 1,
                                            c = r.c * r.i,
                                            r.Ta = null,
                                            r.Ua = 0,
                                            r.V = a(c),
                                            r.Ba = 0,
                                            null == r.V ? (r.a = 1,
                                            r = 0) : r = 1) : (u.ic = 0,
                                            r = Ft(r, u.c)),
                                            !r)
                                                break e;
                                            r = 1;
                                            break t
                                        }
                                        u.mc = null,
                                        r = 0
                                    }
                                else
                                    r = m >= u.c * u.i;
                                u = !r
                            }
                            if (u)
                                return null;
                            1 != t.ga.Lc ? t.Ga = 0 : o = l - i
                        }
                        e(null != t.ga),
                        e(i + o <= l);
                        t: {
                            if (r = (c = t.ga).c,
                            l = c.l.o,
                            0 == c.$a) {
                                if (g = t.rc,
                                m = t.Vc,
                                b = t.Fa,
                                h = t.P + 1 + i * r,
                                f = t.mb,
                                d = t.nb + i * r,
                                e(h <= t.P + t.qc),
                                0 != c.Z)
                                    for (e(null != mi[c.Z]),
                                    u = 0; u < o; ++u)
                                        mi[c.Z](g, m, b, h, f, d, r),
                                        g = f,
                                        m = d,
                                        d += r,
                                        h += r;
                                else
                                    for (u = 0; u < o; ++u)
                                        n(f, d, b, h, r),
                                        g = f,
                                        m = d,
                                        d += r,
                                        h += r;
                                t.rc = g,
                                t.Vc = m
                            } else {
                                if (e(null != c.mc),
                                r = i + o,
                                e(null != (u = c.mc)),
                                e(r <= u.i),
                                u.C >= r)
                                    r = 1;
                                else if (c.ic || mr(),
                                c.ic) {
                                    c = u.V,
                                    g = u.Ba,
                                    m = u.c;
                                    var y = u.i
                                      , w = (b = 1,
                                    h = u.$ / m,
                                    f = u.$ % m,
                                    d = u.m,
                                    p = u.s,
                                    u.$)
                                      , x = m * y
                                      , _ = m * r
                                      , A = p.wc
                                      , S = w < _ ? wt(p, f, h) : null;
                                    e(w <= x),
                                    e(r <= y),
                                    e(Nt(p));
                                    e: for (; ; ) {
                                        for (; !d.h && w < _; ) {
                                            if (f & A || (S = wt(p, f, h)),
                                            e(null != S),
                                            L(d),
                                            256 > (y = bt(S.G[0], S.H[0], d)))
                                                c[g + w] = y,
                                                ++w,
                                                ++f >= m && (f = 0,
                                                ++h <= r && !(h % 16) && Lt(u, h));
                                            else {
                                                if (!(280 > y)) {
                                                    b = 0;
                                                    break e
                                                }
                                                y = mt(y - 256, d);
                                                var P, C = bt(S.G[4], S.H[4], d);
                                                if (L(d),
                                                !(w >= (C = vt(m, C = mt(C, d))) && x - w >= y)) {
                                                    b = 0;
                                                    break e
                                                }
                                                for (P = 0; P < y; ++P)
                                                    c[g + w + P] = c[g + w + P - C];
                                                for (w += y,
                                                f += y; f >= m; )
                                                    f -= m,
                                                    ++h <= r && !(h % 16) && Lt(u, h);
                                                w < _ && f & A && (S = wt(p, f, h))
                                            }
                                            e(d.h == N(d))
                                        }
                                        Lt(u, h > r ? r : h);
                                        break e
                                    }
                                    !b || d.h && w < x ? (b = 0,
                                    u.a = d.h ? 5 : 3) : u.$ = w,
                                    r = b
                                } else
                                    r = St(u, u.V, u.Ba, u.c, u.i, r, It);
                                if (!r) {
                                    o = 0;
                                    break t
                                }
                            }
                            i + o >= l && (t.Cc = 1),
                            o = 1
                        }
                        if (!o)
                            return null;
                        if (t.Cc && (null != (o = t.ga) && (o.mc = null),
                        t.ga = null,
                        0 < t.Ga))
                            return alert("todo:WebPDequantizeLevels"),
                            null
                    }
                    return t.nb + i * s
                }
                function fr(t, e, r, n, i, a) {
                    for (; 0 < i--; ) {
                        var o, s = t, l = e + (r ? 1 : 0), u = t, c = e + (r ? 0 : 3);
                        for (o = 0; o < n; ++o) {
                            var h = u[c + 4 * o];
                            255 != h && (h *= 32897,
                            s[l + 4 * o + 0] = s[l + 4 * o + 0] * h >> 23,
                            s[l + 4 * o + 1] = s[l + 4 * o + 1] * h >> 23,
                            s[l + 4 * o + 2] = s[l + 4 * o + 2] * h >> 23)
                        }
                        e += a
                    }
                }
                function dr(t, e, r, n, i) {
                    for (; 0 < n--; ) {
                        var a;
                        for (a = 0; a < r; ++a) {
                            var o = t[e + 2 * a + 0]
                              , s = 15 & (u = t[e + 2 * a + 1])
                              , l = 4369 * s
                              , u = (240 & u | u >> 4) * l >> 16;
                            t[e + 2 * a + 0] = (240 & o | o >> 4) * l >> 16 & 240 | (15 & o | o << 4) * l >> 16 >> 4 & 15,
                            t[e + 2 * a + 1] = 240 & u | s
                        }
                        e += i
                    }
                }
                function pr(t, e, r, n, i, a, o, s) {
                    var l, u, c = 255;
                    for (u = 0; u < i; ++u) {
                        for (l = 0; l < n; ++l) {
                            var h = t[e + l];
                            a[o + 4 * l] = h,
                            c &= h
                        }
                        e += r,
                        o += s
                    }
                    return 255 != c
                }
                function gr(t, e, r, n, i) {
                    var a;
                    for (a = 0; a < i; ++a)
                        r[n + a] = t[e + a] >> 8
                }
                function mr() {
                    Nn = fr,
                    An = dr,
                    Ln = pr,
                    Sn = gr
                }
                function vr(r, n, i) {
                    t[r] = function(t, r, a, o, s, l, u, c, h, f, d, p, g, m, v, b, y) {
                        var w, x = y - 1 >> 1, _ = s[l + 0] | u[c + 0] << 16, N = h[f + 0] | d[p + 0] << 16;
                        e(null != t);
                        var A = 3 * _ + N + 131074 >> 2;
                        for (n(t[r + 0], 255 & A, A >> 16, g, m),
                        null != a && (A = 3 * N + _ + 131074 >> 2,
                        n(a[o + 0], 255 & A, A >> 16, v, b)),
                        w = 1; w <= x; ++w) {
                            var L = s[l + w] | u[c + w] << 16
                              , S = h[f + w] | d[p + w] << 16
                              , P = _ + L + N + S + 524296
                              , C = P + 2 * (L + N) >> 3;
                            A = C + _ >> 1,
                            _ = (P = P + 2 * (_ + S) >> 3) + L >> 1,
                            n(t[r + 2 * w - 1], 255 & A, A >> 16, g, m + (2 * w - 1) * i),
                            n(t[r + 2 * w - 0], 255 & _, _ >> 16, g, m + (2 * w - 0) * i),
                            null != a && (A = P + N >> 1,
                            _ = C + S >> 1,
                            n(a[o + 2 * w - 1], 255 & A, A >> 16, v, b + (2 * w - 1) * i),
                            n(a[o + 2 * w + 0], 255 & _, _ >> 16, v, b + (2 * w + 0) * i)),
                            _ = L,
                            N = S
                        }
                        1 & y || (A = 3 * _ + N + 131074 >> 2,
                        n(t[r + y - 1], 255 & A, A >> 16, g, m + (y - 1) * i),
                        null != a && (A = 3 * N + _ + 131074 >> 2,
                        n(a[o + y - 1], 255 & A, A >> 16, v, b + (y - 1) * i)))
                    }
                }
                function br() {
                    vi[Mn] = bi,
                    vi[Bn] = wi,
                    vi[En] = yi,
                    vi[Rn] = xi,
                    vi[qn] = _i,
                    vi[zn] = Ni,
                    vi[Un] = Ai,
                    vi[Wn] = wi,
                    vi[Hn] = xi,
                    vi[Vn] = _i,
                    vi[Gn] = Ni
                }
                function yr(t) {
                    return t & ~Fi ? 0 > t ? 0 : 255 : t >> ki
                }
                function wr(t, e) {
                    return yr((19077 * t >> 8) + (26149 * e >> 8) - 14234)
                }
                function xr(t, e, r) {
                    return yr((19077 * t >> 8) - (6419 * e >> 8) - (13320 * r >> 8) + 8708)
                }
                function _r(t, e) {
                    return yr((19077 * t >> 8) + (33050 * e >> 8) - 17685)
                }
                function Nr(t, e, r, n, i) {
                    n[i + 0] = wr(t, r),
                    n[i + 1] = xr(t, e, r),
                    n[i + 2] = _r(t, e)
                }
                function Ar(t, e, r, n, i) {
                    n[i + 0] = _r(t, e),
                    n[i + 1] = xr(t, e, r),
                    n[i + 2] = wr(t, r)
                }
                function Lr(t, e, r, n, i) {
                    var a = xr(t, e, r);
                    e = a << 3 & 224 | _r(t, e) >> 3,
                    n[i + 0] = 248 & wr(t, r) | a >> 5,
                    n[i + 1] = e
                }
                function Sr(t, e, r, n, i) {
                    var a = 240 & _r(t, e) | 15;
                    n[i + 0] = 240 & wr(t, r) | xr(t, e, r) >> 4,
                    n[i + 1] = a
                }
                function Pr(t, e, r, n, i) {
                    n[i + 0] = 255,
                    Nr(t, e, r, n, i + 1)
                }
                function Cr(t, e, r, n, i) {
                    Ar(t, e, r, n, i),
                    n[i + 3] = 255
                }
                function kr(t, e, r, n, i) {
                    Nr(t, e, r, n, i),
                    n[i + 3] = 255
                }
                function Vt(t, e) {
                    return 0 > t ? 0 : t > e ? e : t
                }
                function Fr(e, r, n) {
                    t[e] = function(t, e, i, a, o, s, l, u, c) {
                        for (var h = u + (-2 & c) * n; u != h; )
                            r(t[e + 0], i[a + 0], o[s + 0], l, u),
                            r(t[e + 1], i[a + 0], o[s + 0], l, u + n),
                            e += 2,
                            ++a,
                            ++s,
                            u += 2 * n;
                        1 & c && r(t[e + 0], i[a + 0], o[s + 0], l, u)
                    }
                }
                function Ir(t, e, r) {
                    return 0 == r ? 0 == t ? 0 == e ? 6 : 5 : 0 == e ? 4 : 0 : r
                }
                function jr(t, e, r, n, i) {
                    switch (t >>> 30) {
                    case 3:
                        on(e, r, n, i, 0);
                        break;
                    case 2:
                        sn(e, r, n, i);
                        break;
                    case 1:
                        un(e, r, n, i)
                    }
                }
                function Or(t, e) {
                    var r, a, o = e.M, s = e.Nb, l = t.oc, u = t.pc + 40, c = t.oc, h = t.pc + 584, f = t.oc, d = t.pc + 600;
                    for (r = 0; 16 > r; ++r)
                        l[u + 32 * r - 1] = 129;
                    for (r = 0; 8 > r; ++r)
                        c[h + 32 * r - 1] = 129,
                        f[d + 32 * r - 1] = 129;
                    for (0 < o ? l[u - 1 - 32] = c[h - 1 - 32] = f[d - 1 - 32] = 129 : (i(l, u - 32 - 1, 127, 21),
                    i(c, h - 32 - 1, 127, 9),
                    i(f, d - 32 - 1, 127, 9)),
                    a = 0; a < t.za; ++a) {
                        var p = e.ya[e.aa + a];
                        if (0 < a) {
                            for (r = -1; 16 > r; ++r)
                                n(l, u + 32 * r - 4, l, u + 32 * r + 12, 4);
                            for (r = -1; 8 > r; ++r)
                                n(c, h + 32 * r - 4, c, h + 32 * r + 4, 4),
                                n(f, d + 32 * r - 4, f, d + 32 * r + 4, 4)
                        }
                        var g = t.Gd
                          , m = t.Hd + a
                          , v = p.ad
                          , b = p.Hc;
                        if (0 < o && (n(l, u - 32, g[m].y, 0, 16),
                        n(c, h - 32, g[m].f, 0, 8),
                        n(f, d - 32, g[m].ea, 0, 8)),
                        p.Za) {
                            var y = l
                              , w = u - 32 + 16;
                            for (0 < o && (a >= t.za - 1 ? i(y, w, g[m].y[15], 4) : n(y, w, g[m + 1].y, 0, 4)),
                            r = 0; 4 > r; r++)
                                y[w + 128 + r] = y[w + 256 + r] = y[w + 384 + r] = y[w + 0 + r];
                            for (r = 0; 16 > r; ++r,
                            b <<= 2)
                                y = l,
                                w = u + Ei[r],
                                fi[p.Ob[r]](y, w),
                                jr(b, v, 16 * +r, y, w)
                        } else if (y = Ir(a, o, p.Ob[0]),
                        hi[y](l, u),
                        0 != b)
                            for (r = 0; 16 > r; ++r,
                            b <<= 2)
                                jr(b, v, 16 * +r, l, u + Ei[r]);
                        for (r = p.Gc,
                        y = Ir(a, o, p.Dd),
                        di[y](c, h),
                        di[y](f, d),
                        b = v,
                        y = c,
                        w = h,
                        255 & (p = r >> 0) && (170 & p ? ln(b, 256, y, w) : cn(b, 256, y, w)),
                        p = f,
                        b = d,
                        255 & (r >>= 8) && (170 & r ? ln(v, 320, p, b) : cn(v, 320, p, b)),
                        o < t.Ub - 1 && (n(g[m].y, 0, l, u + 480, 16),
                        n(g[m].f, 0, c, h + 224, 8),
                        n(g[m].ea, 0, f, d + 224, 8)),
                        r = 8 * s * t.B,
                        g = t.sa,
                        m = t.ta + 16 * a + 16 * s * t.R,
                        v = t.qa,
                        p = t.ra + 8 * a + r,
                        b = t.Ha,
                        y = t.Ia + 8 * a + r,
                        r = 0; 16 > r; ++r)
                            n(g, m + r * t.R, l, u + 32 * r, 16);
                        for (r = 0; 8 > r; ++r)
                            n(v, p + r * t.B, c, h + 32 * r, 8),
                            n(b, y + r * t.B, f, d + 32 * r, 8)
                    }
                }
                function Dr(t, n, i, a, o, s, l, u, c) {
                    var h = [0]
                      , f = [0]
                      , d = 0
                      , p = null != c ? c.kd : 0
                      , g = null != c ? c : new nr;
                    if (null == t || 12 > i)
                        return 7;
                    g.data = t,
                    g.w = n,
                    g.ha = i,
                    n = [n],
                    i = [i],
                    g.gb = [g.gb];
                    t: {
                        var m = n
                          , b = i
                          , y = g.gb;
                        if (e(null != t),
                        e(null != b),
                        e(null != y),
                        y[0] = 0,
                        12 <= b[0] && !r(t, m[0], "RIFF")) {
                            if (r(t, m[0] + 8, "WEBP")) {
                                y = 3;
                                break t
                            }
                            var w = j(t, m[0] + 4);
                            if (12 > w || 4294967286 < w) {
                                y = 3;
                                break t
                            }
                            if (p && w > b[0] - 8) {
                                y = 7;
                                break t
                            }
                            y[0] = w,
                            m[0] += 12,
                            b[0] -= 12
                        }
                        y = 0
                    }
                    if (0 != y)
                        return y;
                    for (w = 0 < g.gb[0],
                    i = i[0]; ; ) {
                        t: {
                            var _ = t;
                            b = n,
                            y = i;
                            var N = h
                              , A = f
                              , L = m = [0];
                            if ((C = d = [d])[0] = 0,
                            8 > y[0])
                                y = 7;
                            else {
                                if (!r(_, b[0], "VP8X")) {
                                    if (10 != j(_, b[0] + 4)) {
                                        y = 3;
                                        break t
                                    }
                                    if (18 > y[0]) {
                                        y = 7;
                                        break t
                                    }
                                    var S = j(_, b[0] + 8)
                                      , P = 1 + I(_, b[0] + 12);
                                    if (2147483648 <= P * (_ = 1 + I(_, b[0] + 15))) {
                                        y = 3;
                                        break t
                                    }
                                    null != L && (L[0] = S),
                                    null != N && (N[0] = P),
                                    null != A && (A[0] = _),
                                    b[0] += 18,
                                    y[0] -= 18,
                                    C[0] = 1
                                }
                                y = 0
                            }
                        }
                        if (d = d[0],
                        m = m[0],
                        0 != y)
                            return y;
                        if (b = !!(2 & m),
                        !w && d)
                            return 3;
                        if (null != s && (s[0] = !!(16 & m)),
                        null != l && (l[0] = b),
                        null != u && (u[0] = 0),
                        l = h[0],
                        m = f[0],
                        d && b && null == c) {
                            y = 0;
                            break
                        }
                        if (4 > i) {
                            y = 7;
                            break
                        }
                        if (w && d || !w && !d && !r(t, n[0], "ALPH")) {
                            i = [i],
                            g.na = [g.na],
                            g.P = [g.P],
                            g.Sa = [g.Sa];
                            t: {
                                S = t,
                                y = n,
                                w = i;
                                var C = g.gb;
                                N = g.na,
                                A = g.P,
                                L = g.Sa,
                                P = 22,
                                e(null != S),
                                e(null != w),
                                _ = y[0];
                                var k = w[0];
                                for (e(null != N),
                                e(null != L),
                                N[0] = null,
                                A[0] = null,
                                L[0] = 0; ; ) {
                                    if (y[0] = _,
                                    w[0] = k,
                                    8 > k) {
                                        y = 7;
                                        break t
                                    }
                                    var F = j(S, _ + 4);
                                    if (4294967286 < F) {
                                        y = 3;
                                        break t
                                    }
                                    var O = 8 + F + 1 & -2;
                                    if (P += O,
                                    0 < C && P > C) {
                                        y = 3;
                                        break t
                                    }
                                    if (!r(S, _, "VP8 ") || !r(S, _, "VP8L")) {
                                        y = 0;
                                        break t
                                    }
                                    if (k[0] < O) {
                                        y = 7;
                                        break t
                                    }
                                    r(S, _, "ALPH") || (N[0] = S,
                                    A[0] = _ + 8,
                                    L[0] = F),
                                    _ += O,
                                    k -= O
                                }
                            }
                            if (i = i[0],
                            g.na = g.na[0],
                            g.P = g.P[0],
                            g.Sa = g.Sa[0],
                            0 != y)
                                break
                        }
                        i = [i],
                        g.Ja = [g.Ja],
                        g.xa = [g.xa];
                        t: if (C = t,
                        y = n,
                        w = i,
                        N = g.gb[0],
                        A = g.Ja,
                        L = g.xa,
                        S = y[0],
                        _ = !r(C, S, "VP8 "),
                        P = !r(C, S, "VP8L"),
                        e(null != C),
                        e(null != w),
                        e(null != A),
                        e(null != L),
                        8 > w[0])
                            y = 7;
                        else {
                            if (_ || P) {
                                if (C = j(C, S + 4),
                                12 <= N && C > N - 12) {
                                    y = 3;
                                    break t
                                }
                                if (p && C > w[0] - 8) {
                                    y = 7;
                                    break t
                                }
                                A[0] = C,
                                y[0] += 8,
                                w[0] -= 8,
                                L[0] = P
                            } else
                                L[0] = 5 <= w[0] && 47 == C[S + 0] && !(C[S + 4] >> 5),
                                A[0] = w[0];
                            y = 0
                        }
                        if (i = i[0],
                        g.Ja = g.Ja[0],
                        g.xa = g.xa[0],
                        n = n[0],
                        0 != y)
                            break;
                        if (4294967286 < g.Ja)
                            return 3;
                        if (null == u || b || (u[0] = g.xa ? 2 : 1),
                        l = [l],
                        m = [m],
                        g.xa) {
                            if (5 > i) {
                                y = 7;
                                break
                            }
                            u = l,
                            p = m,
                            b = s,
                            null == t || 5 > i ? t = 0 : 5 <= i && 47 == t[n + 0] && !(t[n + 4] >> 5) ? (w = [0],
                            C = [0],
                            N = [0],
                            v(A = new x, t, n, i),
                            gt(A, w, C, N) ? (null != u && (u[0] = w[0]),
                            null != p && (p[0] = C[0]),
                            null != b && (b[0] = N[0]),
                            t = 1) : t = 0) : t = 0
                        } else {
                            if (10 > i) {
                                y = 7;
                                break
                            }
                            u = m,
                            null == t || 10 > i || !Jt(t, n + 3, i - 3) ? t = 0 : (p = t[n + 0] | t[n + 1] << 8 | t[n + 2] << 16,
                            b = 16383 & (t[n + 7] << 8 | t[n + 6]),
                            t = 16383 & (t[n + 9] << 8 | t[n + 8]),
                            1 & p || 3 < (p >> 1 & 7) || !(p >> 4 & 1) || p >> 5 >= g.Ja || !b || !t ? t = 0 : (l && (l[0] = b),
                            u && (u[0] = t),
                            t = 1))
                        }
                        if (!t)
                            return 3;
                        if (l = l[0],
                        m = m[0],
                        d && (h[0] != l || f[0] != m))
                            return 3;
                        null != c && (c[0] = g,
                        c.offset = n - c.w,
                        e(4294967286 > n - c.w),
                        e(c.offset == c.ha - i));
                        break
                    }
                    return 0 == y || 7 == y && d && null == c ? (null != s && (s[0] |= null != g.na && 0 < g.na.length),
                    null != a && (a[0] = l),
                    null != o && (o[0] = m),
                    0) : y
                }
                function Tr(t, e, r) {
                    var n = e.width
                      , i = e.height
                      , a = 0
                      , o = 0
                      , s = n
                      , l = i;
                    if (e.Da = null != t && 0 < t.Da,
                    e.Da && (s = t.cd,
                    l = t.bd,
                    a = t.v,
                    o = t.j,
                    11 > r || (a &= -2,
                    o &= -2),
                    0 > a || 0 > o || 0 >= s || 0 >= l || a + s > n || o + l > i))
                        return 0;
                    if (e.v = a,
                    e.j = o,
                    e.va = a + s,
                    e.o = o + l,
                    e.U = s,
                    e.T = l,
                    e.da = null != t && 0 < t.da,
                    e.da) {
                        if (!M(s, l, r = [t.ib], a = [t.hb]))
                            return 0;
                        e.ib = r[0],
                        e.hb = a[0]
                    }
                    return e.ob = null != t && t.ob,
                    e.Kb = null == t || !t.Sd,
                    e.da && (e.ob = e.ib < 3 * n / 4 && e.hb < 3 * i / 4,
                    e.Kb = 0),
                    1
                }
                function Mr(t) {
                    if (null == t)
                        return 2;
                    if (11 > t.S) {
                        var e = t.f.RGBA;
                        e.fb += (t.height - 1) * e.A,
                        e.A = -e.A
                    } else
                        e = t.f.kb,
                        t = t.height,
                        e.O += (t - 1) * e.fa,
                        e.fa = -e.fa,
                        e.N += (t - 1 >> 1) * e.Ab,
                        e.Ab = -e.Ab,
                        e.W += (t - 1 >> 1) * e.Db,
                        e.Db = -e.Db,
                        null != e.F && (e.J += (t - 1) * e.lb,
                        e.lb = -e.lb);
                    return 0
                }
                function Br(t, e, r, n) {
                    if (null == n || 0 >= t || 0 >= e)
                        return 2;
                    if (null != r) {
                        if (r.Da) {
                            var i = r.cd
                              , o = r.bd
                              , s = -2 & r.v
                              , l = -2 & r.j;
                            if (0 > s || 0 > l || 0 >= i || 0 >= o || s + i > t || l + o > e)
                                return 2;
                            t = i,
                            e = o
                        }
                        if (r.da) {
                            if (!M(t, e, i = [r.ib], o = [r.hb]))
                                return 2;
                            t = i[0],
                            e = o[0]
                        }
                    }
                    n.width = t,
                    n.height = e;
                    t: {
                        var u = n.width
                          , c = n.height;
                        if (t = n.S,
                        0 >= u || 0 >= c || !(t >= Mn && 13 > t))
                            t = 2;
                        else {
                            if (0 >= n.Rd && null == n.sd) {
                                s = o = i = e = 0;
                                var h = (l = u * Ui[t]) * c;
                                if (11 > t || (o = (c + 1) / 2 * (e = (u + 1) / 2),
                                12 == t && (s = (i = u) * c)),
                                null == (c = a(h + 2 * o + s))) {
                                    t = 1;
                                    break t
                                }
                                n.sd = c,
                                11 > t ? ((u = n.f.RGBA).eb = c,
                                u.fb = 0,
                                u.A = l,
                                u.size = h) : ((u = n.f.kb).y = c,
                                u.O = 0,
                                u.fa = l,
                                u.Fd = h,
                                u.f = c,
                                u.N = 0 + h,
                                u.Ab = e,
                                u.Cd = o,
                                u.ea = c,
                                u.W = 0 + h + o,
                                u.Db = e,
                                u.Ed = o,
                                12 == t && (u.F = c,
                                u.J = 0 + h + 2 * o),
                                u.Tc = s,
                                u.lb = i)
                            }
                            if (e = 1,
                            i = n.S,
                            o = n.width,
                            s = n.height,
                            i >= Mn && 13 > i)
                                if (11 > i)
                                    t = n.f.RGBA,
                                    e &= (l = Math.abs(t.A)) * (s - 1) + o <= t.size,
                                    e &= l >= o * Ui[i],
                                    e &= null != t.eb;
                                else {
                                    t = n.f.kb,
                                    l = (o + 1) / 2,
                                    h = (s + 1) / 2,
                                    u = Math.abs(t.fa),
                                    c = Math.abs(t.Ab);
                                    var f = Math.abs(t.Db)
                                      , d = Math.abs(t.lb)
                                      , p = d * (s - 1) + o;
                                    e &= u * (s - 1) + o <= t.Fd,
                                    e &= c * (h - 1) + l <= t.Cd,
                                    e = (e &= f * (h - 1) + l <= t.Ed) & u >= o & c >= l & f >= l,
                                    e &= null != t.y,
                                    e &= null != t.f,
                                    e &= null != t.ea,
                                    12 == i && (e &= d >= o,
                                    e &= p <= t.Tc,
                                    e &= null != t.F)
                                }
                            else
                                e = 0;
                            t = e ? 0 : 2
                        }
                    }
                    return 0 != t || null != r && r.fd && (t = Mr(n)),
                    t
                }
                var Er = 64
                  , Rr = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215]
                  , qr = 24
                  , zr = 32
                  , Ur = 8
                  , Wr = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
                R("Predictor0", "PredictorAdd0"),
                t.Predictor0 = function() {
                    return 4278190080
                }
                ,
                t.Predictor1 = function(t) {
                    return t
                }
                ,
                t.Predictor2 = function(t, e, r) {
                    return e[r + 0]
                }
                ,
                t.Predictor3 = function(t, e, r) {
                    return e[r + 1]
                }
                ,
                t.Predictor4 = function(t, e, r) {
                    return e[r - 1]
                }
                ,
                t.Predictor5 = function(t, e, r) {
                    return z(z(t, e[r + 1]), e[r + 0])
                }
                ,
                t.Predictor6 = function(t, e, r) {
                    return z(t, e[r - 1])
                }
                ,
                t.Predictor7 = function(t, e, r) {
                    return z(t, e[r + 0])
                }
                ,
                t.Predictor8 = function(t, e, r) {
                    return z(e[r - 1], e[r + 0])
                }
                ,
                t.Predictor9 = function(t, e, r) {
                    return z(e[r + 0], e[r + 1])
                }
                ,
                t.Predictor10 = function(t, e, r) {
                    return z(z(t, e[r - 1]), z(e[r + 0], e[r + 1]))
                }
                ,
                t.Predictor11 = function(t, e, r) {
                    var n = e[r + 0];
                    return 0 >= H(n >> 24 & 255, t >> 24 & 255, (e = e[r - 1]) >> 24 & 255) + H(n >> 16 & 255, t >> 16 & 255, e >> 16 & 255) + H(n >> 8 & 255, t >> 8 & 255, e >> 8 & 255) + H(255 & n, 255 & t, 255 & e) ? n : t
                }
                ,
                t.Predictor12 = function(t, e, r) {
                    var n = e[r + 0];
                    return (U((t >> 24 & 255) + (n >> 24 & 255) - ((e = e[r - 1]) >> 24 & 255)) << 24 | U((t >> 16 & 255) + (n >> 16 & 255) - (e >> 16 & 255)) << 16 | U((t >> 8 & 255) + (n >> 8 & 255) - (e >> 8 & 255)) << 8 | U((255 & t) + (255 & n) - (255 & e))) >>> 0
                }
                ,
                t.Predictor13 = function(t, e, r) {
                    var n = e[r - 1];
                    return (W((t = z(t, e[r + 0])) >> 24 & 255, n >> 24 & 255) << 24 | W(t >> 16 & 255, n >> 16 & 255) << 16 | W(t >> 8 & 255, n >> 8 & 255) << 8 | W(t >> 0 & 255, n >> 0 & 255)) >>> 0
                }
                ;
                var Hr = t.PredictorAdd0;
                t.PredictorAdd1 = V,
                R("Predictor2", "PredictorAdd2"),
                R("Predictor3", "PredictorAdd3"),
                R("Predictor4", "PredictorAdd4"),
                R("Predictor5", "PredictorAdd5"),
                R("Predictor6", "PredictorAdd6"),
                R("Predictor7", "PredictorAdd7"),
                R("Predictor8", "PredictorAdd8"),
                R("Predictor9", "PredictorAdd9"),
                R("Predictor10", "PredictorAdd10"),
                R("Predictor11", "PredictorAdd11"),
                R("Predictor12", "PredictorAdd12"),
                R("Predictor13", "PredictorAdd13");
                var Vr = t.PredictorAdd2;
                J("ColorIndexInverseTransform", "MapARGB", "32b", (function(t) {
                    return t >> 8 & 255
                }
                ), (function(t) {
                    return t
                }
                )),
                J("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", (function(t) {
                    return t
                }
                ), (function(t) {
                    return t >> 8 & 255
                }
                ));
                var Gr, $r = t.ColorIndexInverseTransform, Yr = t.MapARGB, Jr = t.VP8LColorIndexInverseTransformAlpha, Kr = t.MapAlpha, Xr = t.VP8LPredictorsAdd = [];
                Xr.length = 16,
                (t.VP8LPredictors = []).length = 16,
                (t.VP8LPredictorsAdd_C = []).length = 16,
                (t.VP8LPredictors_C = []).length = 16;
                var Zr, Qr, tn, en, rn, nn, an, on, sn, ln, un, cn, hn, fn, dn, pn, gn, mn, vn, bn, yn, wn, xn, _n, Nn, An, Ln, Sn, Pn = a(511), Cn = a(2041), kn = a(225), Fn = a(767), In = 0, jn = Cn, On = kn, Dn = Fn, Tn = Pn, Mn = 0, Bn = 1, En = 2, Rn = 3, qn = 4, zn = 5, Un = 6, Wn = 7, Hn = 8, Vn = 9, Gn = 10, $n = [2, 3, 7], Yn = [3, 3, 11], Jn = [280, 256, 256, 256, 40], Kn = [0, 1, 1, 1, 0], Xn = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], Zn = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112], Qn = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004], ti = 8, ei = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157], ri = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284], ni = null, ii = [[173, 148, 140, 0], [176, 155, 140, 135, 0], [180, 157, 141, 134, 130, 0], [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]], ai = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15], oi = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9], si = [[[[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]], [[253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128], [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128], [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]], [[1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128], [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128], [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]], [[1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128], [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128], [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]], [[1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128], [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128], [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]], [[1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128], [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128], [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]], [[1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128], [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128], [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62], [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1], [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]], [[1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128], [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128], [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]], [[1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128], [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128], [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]], [[1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128], [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128], [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]], [[1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128], [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128], [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]], [[1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128], [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128], [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]], [[1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128], [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128], [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]], [[1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128], [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128], [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]]], [[[253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128], [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128], [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]], [[1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128], [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128], [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]], [[1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128], [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128], [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]], [[1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128], [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128], [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]], [[1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128], [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128], [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128], [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128], [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128], [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128], [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255], [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128], [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]], [[1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128], [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128], [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]], [[1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128], [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128], [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]], [[1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128], [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128], [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]], [[1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128], [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128], [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]], [[1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128], [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128], [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]], [[1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128], [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128], [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]]]], li = [[[231, 120, 48, 89, 115, 113, 120, 152, 112], [152, 179, 64, 126, 170, 118, 46, 70, 95], [175, 69, 143, 80, 85, 82, 72, 155, 103], [56, 58, 10, 171, 218, 189, 17, 13, 152], [114, 26, 17, 163, 44, 195, 21, 10, 173], [121, 24, 80, 195, 26, 62, 44, 64, 85], [144, 71, 10, 38, 171, 213, 144, 34, 26], [170, 46, 55, 19, 136, 160, 33, 206, 71], [63, 20, 8, 114, 114, 208, 12, 9, 226], [81, 40, 11, 96, 182, 84, 29, 16, 36]], [[134, 183, 89, 137, 98, 101, 106, 165, 148], [72, 187, 100, 130, 157, 111, 32, 75, 80], [66, 102, 167, 99, 74, 62, 40, 234, 128], [41, 53, 9, 178, 241, 141, 26, 8, 107], [74, 43, 26, 146, 73, 166, 49, 23, 157], [65, 38, 105, 160, 51, 52, 31, 115, 128], [104, 79, 12, 27, 217, 255, 87, 17, 7], [87, 68, 71, 44, 114, 51, 15, 186, 23], [47, 41, 14, 110, 182, 183, 21, 17, 194], [66, 45, 25, 102, 197, 189, 23, 18, 22]], [[88, 88, 147, 150, 42, 46, 45, 196, 205], [43, 97, 183, 117, 85, 38, 35, 179, 61], [39, 53, 200, 87, 26, 21, 43, 232, 171], [56, 34, 51, 104, 114, 102, 29, 93, 77], [39, 28, 85, 171, 58, 165, 90, 98, 64], [34, 22, 116, 206, 23, 34, 43, 166, 73], [107, 54, 32, 26, 51, 1, 81, 43, 31], [68, 25, 106, 22, 64, 171, 36, 225, 114], [34, 19, 21, 102, 132, 188, 16, 76, 124], [62, 18, 78, 95, 85, 57, 50, 48, 51]], [[193, 101, 35, 159, 215, 111, 89, 46, 111], [60, 148, 31, 172, 219, 228, 21, 18, 111], [112, 113, 77, 85, 179, 255, 38, 120, 114], [40, 42, 1, 196, 245, 209, 10, 25, 109], [88, 43, 29, 140, 166, 213, 37, 43, 154], [61, 63, 30, 155, 67, 45, 68, 1, 209], [100, 80, 8, 43, 154, 1, 51, 26, 71], [142, 78, 78, 16, 255, 128, 34, 197, 171], [41, 40, 5, 102, 211, 183, 4, 1, 221], [51, 50, 17, 168, 209, 192, 23, 25, 82]], [[138, 31, 36, 171, 27, 166, 38, 44, 229], [67, 87, 58, 169, 82, 115, 26, 59, 179], [63, 59, 90, 180, 59, 166, 93, 73, 154], [40, 40, 21, 116, 143, 209, 34, 39, 175], [47, 15, 16, 183, 34, 223, 49, 45, 183], [46, 17, 33, 183, 6, 98, 15, 32, 183], [57, 46, 22, 24, 128, 1, 54, 17, 37], [65, 32, 73, 115, 28, 128, 23, 128, 205], [40, 3, 9, 115, 51, 192, 18, 6, 223], [87, 37, 9, 115, 59, 77, 64, 21, 47]], [[104, 55, 44, 218, 9, 54, 53, 130, 226], [64, 90, 70, 205, 40, 41, 23, 26, 57], [54, 57, 112, 184, 5, 41, 38, 166, 213], [30, 34, 26, 133, 152, 116, 10, 32, 134], [39, 19, 53, 221, 26, 114, 32, 73, 255], [31, 9, 65, 234, 2, 15, 1, 118, 73], [75, 32, 12, 51, 192, 255, 160, 43, 51], [88, 31, 35, 67, 102, 85, 55, 186, 85], [56, 21, 23, 111, 59, 205, 45, 37, 192], [55, 38, 70, 124, 73, 102, 1, 34, 98]], [[125, 98, 42, 88, 104, 85, 117, 175, 82], [95, 84, 53, 89, 128, 100, 113, 101, 45], [75, 79, 123, 47, 51, 128, 81, 171, 1], [57, 17, 5, 71, 102, 57, 53, 41, 49], [38, 33, 13, 121, 57, 73, 26, 1, 85], [41, 10, 67, 138, 77, 110, 90, 47, 114], [115, 21, 2, 10, 102, 255, 166, 23, 6], [101, 29, 16, 10, 85, 128, 101, 196, 26], [57, 18, 10, 102, 102, 213, 34, 20, 43], [117, 20, 15, 36, 163, 128, 68, 1, 26]], [[102, 61, 71, 37, 34, 53, 31, 243, 192], [69, 60, 71, 38, 73, 119, 28, 222, 37], [68, 45, 128, 34, 1, 47, 11, 245, 171], [62, 17, 19, 70, 146, 85, 55, 62, 70], [37, 43, 37, 154, 100, 163, 85, 160, 1], [63, 9, 92, 136, 28, 64, 32, 201, 85], [75, 15, 9, 9, 64, 255, 184, 119, 16], [86, 6, 28, 5, 64, 255, 25, 248, 1], [56, 8, 17, 132, 137, 255, 55, 116, 128], [58, 15, 20, 82, 135, 57, 26, 121, 40]], [[164, 50, 31, 137, 154, 133, 25, 35, 218], [51, 103, 44, 131, 131, 123, 31, 6, 158], [86, 40, 64, 135, 148, 224, 45, 183, 128], [22, 26, 17, 131, 240, 154, 14, 1, 209], [45, 16, 21, 91, 64, 222, 7, 1, 197], [56, 21, 39, 155, 60, 138, 23, 102, 213], [83, 12, 13, 54, 192, 255, 68, 47, 28], [85, 26, 85, 85, 128, 128, 32, 146, 171], [18, 11, 7, 63, 144, 171, 4, 4, 246], [35, 27, 10, 146, 174, 171, 12, 26, 128]], [[190, 80, 35, 99, 180, 80, 126, 54, 45], [85, 126, 47, 87, 176, 51, 41, 20, 32], [101, 75, 128, 139, 118, 146, 116, 128, 85], [56, 41, 15, 176, 236, 85, 37, 9, 62], [71, 30, 17, 119, 118, 255, 17, 18, 138], [101, 38, 60, 138, 55, 70, 43, 26, 142], [146, 36, 19, 30, 171, 255, 97, 27, 20], [138, 45, 61, 62, 219, 1, 81, 188, 64], [32, 41, 20, 117, 151, 142, 20, 21, 163], [112, 19, 12, 61, 195, 128, 48, 4, 24]]], ui = [[[[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255], [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255], [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255], [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255], [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255], [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255], [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255], [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255], [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255], [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255], [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255], [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]]], ci = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0], hi = [], fi = [], di = [], pi = 1, gi = 2, mi = [], vi = [];
                vr("UpsampleRgbLinePair", Nr, 3),
                vr("UpsampleBgrLinePair", Ar, 3),
                vr("UpsampleRgbaLinePair", kr, 4),
                vr("UpsampleBgraLinePair", Cr, 4),
                vr("UpsampleArgbLinePair", Pr, 4),
                vr("UpsampleRgba4444LinePair", Sr, 2),
                vr("UpsampleRgb565LinePair", Lr, 2);
                var bi = t.UpsampleRgbLinePair
                  , yi = t.UpsampleBgrLinePair
                  , wi = t.UpsampleRgbaLinePair
                  , xi = t.UpsampleBgraLinePair
                  , _i = t.UpsampleArgbLinePair
                  , Ni = t.UpsampleRgba4444LinePair
                  , Ai = t.UpsampleRgb565LinePair
                  , Li = 16
                  , Si = 1 << Li - 1
                  , Pi = -227
                  , Ci = 482
                  , ki = 6
                  , Fi = (256 << ki) - 1
                  , Ii = 0
                  , ji = a(256)
                  , Oi = a(256)
                  , Di = a(256)
                  , Ti = a(256)
                  , Mi = a(Ci - Pi)
                  , Bi = a(Ci - Pi);
                Fr("YuvToRgbRow", Nr, 3),
                Fr("YuvToBgrRow", Ar, 3),
                Fr("YuvToRgbaRow", kr, 4),
                Fr("YuvToBgraRow", Cr, 4),
                Fr("YuvToArgbRow", Pr, 4),
                Fr("YuvToRgba4444Row", Sr, 2),
                Fr("YuvToRgb565Row", Lr, 2);
                var Ei = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396]
                  , Ri = [0, 2, 8]
                  , qi = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1]
                  , zi = 1;
                this.WebPDecodeRGBA = function(t, r, n, i, a) {
                    var o = Bn
                      , s = new rr
                      , l = new ot;
                    s.ba = l,
                    l.S = o,
                    l.width = [l.width],
                    l.height = [l.height];
                    var u = l.width
                      , c = l.height
                      , h = new st;
                    if (null == h || null == t)
                        var f = 2;
                    else
                        e(null != h),
                        f = Dr(t, r, n, h.width, h.height, h.Pd, h.Qd, h.format, null);
                    if (0 != f ? u = 0 : (null != u && (u[0] = h.width[0]),
                    null != c && (c[0] = h.height[0]),
                    u = 1),
                    u) {
                        l.width = l.width[0],
                        l.height = l.height[0],
                        null != i && (i[0] = l.width),
                        null != a && (a[0] = l.height);
                        t: {
                            if (i = new Gt,
                            (a = new nr).data = t,
                            a.w = r,
                            a.ha = n,
                            a.kd = 1,
                            r = [0],
                            e(null != a),
                            (0 == (t = Dr(a.data, a.w, a.ha, null, null, null, r, null, a)) || 7 == t) && r[0] && (t = 4),
                            0 == (r = t)) {
                                if (e(null != s),
                                i.data = a.data,
                                i.w = a.w + a.offset,
                                i.ha = a.ha - a.offset,
                                i.put = dt,
                                i.ac = ft,
                                i.bc = pt,
                                i.ma = s,
                                a.xa) {
                                    if (null == (t = Ct())) {
                                        s = 1;
                                        break t
                                    }
                                    if (function(t, r) {
                                        var n = [0]
                                          , i = [0]
                                          , a = [0];
                                        e: for (; ; ) {
                                            if (null == t)
                                                return 0;
                                            if (null == r)
                                                return t.a = 2,
                                                0;
                                            if (t.l = r,
                                            t.a = 0,
                                            v(t.m, r.data, r.w, r.ha),
                                            !gt(t.m, n, i, a)) {
                                                t.a = 3;
                                                break e
                                            }
                                            if (t.xb = gi,
                                            r.width = n[0],
                                            r.height = i[0],
                                            !kt(n[0], i[0], 1, t, null))
                                                break e;
                                            return 1
                                        }
                                        return e(0 != t.a),
                                        0
                                    }(t, i)) {
                                        if (i = 0 == (r = Br(i.width, i.height, s.Oa, s.ba))) {
                                            e: {
                                                i = t;
                                                r: for (; ; ) {
                                                    if (null == i) {
                                                        i = 0;
                                                        break e
                                                    }
                                                    if (e(null != i.s.yc),
                                                    e(null != i.s.Ya),
                                                    e(0 < i.s.Wb),
                                                    e(null != (n = i.l)),
                                                    e(null != (a = n.ma)),
                                                    0 != i.xb) {
                                                        if (i.ca = a.ba,
                                                        i.tb = a.tb,
                                                        e(null != i.ca),
                                                        !Tr(a.Oa, n, Rn)) {
                                                            i.a = 2;
                                                            break r
                                                        }
                                                        if (!Ft(i, n.width))
                                                            break r;
                                                        if (n.da)
                                                            break r;
                                                        if ((n.da || nt(i.ca.S)) && mr(),
                                                        11 > i.ca.S || (alert("todo:WebPInitConvertARGBToYUV"),
                                                        null != i.ca.f.kb.F && mr()),
                                                        i.Pb && 0 < i.s.ua && null == i.s.vb.X && !O(i.s.vb, i.s.Wa.Xa)) {
                                                            i.a = 1;
                                                            break r
                                                        }
                                                        i.xb = 0
                                                    }
                                                    if (!St(i, i.V, i.Ba, i.c, i.i, n.o, _t))
                                                        break r;
                                                    a.Dc = i.Ma,
                                                    i = 1;
                                                    break e
                                                }
                                                e(0 != i.a),
                                                i = 0
                                            }
                                            i = !i
                                        }
                                        i && (r = t.a)
                                    } else
                                        r = t.a
                                } else {
                                    if (null == (t = new $t)) {
                                        s = 1;
                                        break t
                                    }
                                    if (t.Fa = a.na,
                                    t.P = a.P,
                                    t.qc = a.Sa,
                                    Kt(t, i)) {
                                        if (0 == (r = Br(i.width, i.height, s.Oa, s.ba))) {
                                            if (t.Aa = 0,
                                            n = s.Oa,
                                            e(null != (a = t)),
                                            null != n) {
                                                if (0 < (u = 0 > (u = n.Md) ? 0 : 100 < u ? 255 : 255 * u / 100)) {
                                                    for (c = h = 0; 4 > c; ++c)
                                                        12 > (f = a.pb[c]).lc && (f.ia = u * qi[0 > f.lc ? 0 : f.lc] >> 3),
                                                        h |= f.ia;
                                                    h && (alert("todo:VP8InitRandom"),
                                                    a.ia = 1)
                                                }
                                                a.Ga = n.Id,
                                                100 < a.Ga ? a.Ga = 100 : 0 > a.Ga && (a.Ga = 0)
                                            }
                                            Qt(t, i) || (r = t.a)
                                        }
                                    } else
                                        r = t.a
                                }
                                0 == r && null != s.Oa && s.Oa.fd && (r = Mr(s.ba))
                            }
                            s = r
                        }
                        o = 0 != s ? null : 11 > o ? l.f.RGBA.eb : l.f.kb.y
                    } else
                        o = null;
                    return o
                }
                ;
                var Ui = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1]
            };
            function u(t, e) {
                for (var r = "", n = 0; n < 4; n++)
                    r += String.fromCharCode(t[e++]);
                return r
            }
            function c(t, e) {
                return (t[e + 0] << 0 | t[e + 1] << 8 | t[e + 2] << 16) >>> 0
            }
            function h(t, e) {
                return (t[e + 0] << 0 | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0
            }
            new l;
            var f = [0]
              , d = [0]
              , p = []
              , g = new l
              , m = t
              , v = function(t, e) {
                var r = {}
                  , n = 0
                  , i = !1
                  , a = 0
                  , o = 0;
                if (r.frames = [],
                !function(t, e, r, n) {
                    for (var i = 0; i < 4; i++)
                        if (t[e + i] != "RIFF".charCodeAt(i))
                            return !0;
                    return !1
                }(t, e)) {
                    var s, l;
                    for (h(t, e += 4),
                    e += 8; e < t.length; ) {
                        var f = u(t, e)
                          , d = h(t, e += 4);
                        e += 4;
                        var p = d + (1 & d);
                        switch (f) {
                        case "VP8 ":
                        case "VP8L":
                            void 0 === r.frames[n] && (r.frames[n] = {}),
                            (v = r.frames[n]).src_off = i ? o : e - 8,
                            v.src_size = a + d + 8,
                            n++,
                            i && (i = !1,
                            a = 0,
                            o = 0);
                            break;
                        case "VP8X":
                            (v = r.header = {}).feature_flags = t[e];
                            var g = e + 4;
                            v.canvas_width = 1 + c(t, g),
                            g += 3,
                            v.canvas_height = 1 + c(t, g),
                            g += 3;
                            break;
                        case "ALPH":
                            i = !0,
                            a = p + 8,
                            o = e - 8;
                            break;
                        case "ANIM":
                            (v = r.header).bgcolor = h(t, e),
                            g = e + 4,
                            v.loop_count = (s = t)[(l = g) + 0] << 0 | s[l + 1] << 8,
                            g += 2;
                            break;
                        case "ANMF":
                            var m, v;
                            (v = r.frames[n] = {}).offset_x = 2 * c(t, e),
                            e += 3,
                            v.offset_y = 2 * c(t, e),
                            e += 3,
                            v.width = 1 + c(t, e),
                            e += 3,
                            v.height = 1 + c(t, e),
                            e += 3,
                            v.duration = c(t, e),
                            e += 3,
                            m = t[e++],
                            v.dispose = 1 & m,
                            v.blend = m >> 1 & 1
                        }
                        "ANMF" != f && (e += p)
                    }
                    return r
                }
            }(m, 0);
            v.response = m,
            v.rgbaoutput = !0,
            v.dataurl = !1;
            var b = v.header ? v.header : null
              , y = v.frames ? v.frames : null;
            if (b) {
                b.loop_counter = b.loop_count,
                f = [b.canvas_height],
                d = [b.canvas_width];
                for (var w = 0; w < y.length && 0 != y[w].blend; w++)
                    ;
            }
            var x = y[0]
              , _ = g.WebPDecodeRGBA(m, x.src_off, x.src_size, d, f);
            x.rgba = _,
            x.imgwidth = d[0],
            x.imgheight = f[0];
            for (var N = 0; N < d[0] * f[0] * 4; N++)
                p[N] = _[N];
            return this.width = d,
            this.height = f,
            this.data = p,
            this
        }
        !function(t) {
            var e = function(e, n, l, u) {
                var c = 4
                  , h = a;
                switch (u) {
                case t.image_compression.FAST:
                    c = 1,
                    h = i;
                    break;
                case t.image_compression.MEDIUM:
                    c = 6,
                    h = o;
                    break;
                case t.image_compression.SLOW:
                    c = 9,
                    h = s
                }
                var f = J(e = r(e, n, l, h), {
                    level: c
                });
                return t.__addimage__.arrayBufferToBinaryString(f)
            }
              , r = function(t, e, r, n) {
                for (var i, a, o, s = t.length / e, l = new Uint8Array(t.length + s), h = u(), f = 0; f < s; f += 1) {
                    if (o = f * e,
                    i = t.subarray(o, o + e),
                    n)
                        l.set(n(i, r, a), o + f);
                    else {
                        for (var d, p = h.length, g = []; d < p; d += 1)
                            g[d] = h[d](i, r, a);
                        var m = c(g.concat());
                        l.set(g[m], o + f)
                    }
                    a = i
                }
                return l
            }
              , n = function(t) {
                var e = Array.apply([], t);
                return e.unshift(0),
                e
            }
              , i = function(t, e) {
                var r, n = [], i = t.length;
                n[0] = 1;
                for (var a = 0; a < i; a += 1)
                    r = t[a - e] || 0,
                    n[a + 1] = t[a] - r + 256 & 255;
                return n
            }
              , a = function(t, e, r) {
                var n, i = [], a = t.length;
                i[0] = 2;
                for (var o = 0; o < a; o += 1)
                    n = r && r[o] || 0,
                    i[o + 1] = t[o] - n + 256 & 255;
                return i
            }
              , o = function(t, e, r) {
                var n, i, a = [], o = t.length;
                a[0] = 3;
                for (var s = 0; s < o; s += 1)
                    n = t[s - e] || 0,
                    i = r && r[s] || 0,
                    a[s + 1] = t[s] + 256 - (n + i >>> 1) & 255;
                return a
            }
              , s = function(t, e, r) {
                var n, i, a, o, s = [], u = t.length;
                s[0] = 4;
                for (var c = 0; c < u; c += 1)
                    n = t[c - e] || 0,
                    i = r && r[c] || 0,
                    a = r && r[c - e] || 0,
                    o = l(n, i, a),
                    s[c + 1] = t[c] - o + 256 & 255;
                return s
            }
              , l = function(t, e, r) {
                if (t === e && e === r)
                    return t;
                var n = Math.abs(e - r)
                  , i = Math.abs(t - r)
                  , a = Math.abs(t + e - r - r);
                return n <= i && n <= a ? t : i <= a ? e : r
            }
              , u = function() {
                return [n, i, a, o, s]
            }
              , c = function(t) {
                var e = t.map((function(t) {
                    return t.reduce((function(t, e) {
                        return t + Math.abs(e)
                    }
                    ), 0)
                }
                ));
                return e.indexOf(Math.min.apply(null, e))
            };
            t.processPNG = function(r, n, i, a) {
                var o, s, l, u, c, h, f, d, p, g, m, v, b, y, w, x = this.decode.FLATE_DECODE, _ = "";
                if (this.__addimage__.isArrayBuffer(r) && (r = new Uint8Array(r)),
                this.__addimage__.isArrayBufferView(r)) {
                    if (r = (l = new He(r)).imgData,
                    s = l.bits,
                    o = l.colorSpace,
                    c = l.colors,
                    -1 !== [4, 6].indexOf(l.colorType)) {
                        if (8 === l.bits) {
                            p = (d = 32 == l.pixelBitlength ? new Uint32Array(l.decodePixels().buffer) : 16 == l.pixelBitlength ? new Uint16Array(l.decodePixels().buffer) : new Uint8Array(l.decodePixels().buffer)).length,
                            m = new Uint8Array(p * l.colors),
                            g = new Uint8Array(p);
                            var N, A = l.pixelBitlength - l.bits;
                            for (y = 0,
                            w = 0; y < p; y++) {
                                for (b = d[y],
                                N = 0; N < A; )
                                    m[w++] = b >>> N & 255,
                                    N += l.bits;
                                g[y] = b >>> N & 255
                            }
                        }
                        if (16 === l.bits) {
                            p = (d = new Uint32Array(l.decodePixels().buffer)).length,
                            m = new Uint8Array(p * (32 / l.pixelBitlength) * l.colors),
                            g = new Uint8Array(p * (32 / l.pixelBitlength)),
                            v = l.colors > 1,
                            y = 0,
                            w = 0;
                            for (var L = 0; y < p; )
                                b = d[y++],
                                m[w++] = b >>> 0 & 255,
                                v && (m[w++] = b >>> 16 & 255,
                                b = d[y++],
                                m[w++] = b >>> 0 & 255),
                                g[L++] = b >>> 16 & 255;
                            s = 8
                        }
                        a !== t.image_compression.NONE ? (r = e(m, l.width * l.colors, l.colors, a),
                        f = e(g, l.width, 1, a)) : (r = m,
                        f = g,
                        x = void 0)
                    }
                    if (3 === l.colorType && (o = this.color_spaces.INDEXED,
                    h = l.palette,
                    l.transparency.indexed)) {
                        var S = l.transparency.indexed
                          , P = 0;
                        for (y = 0,
                        p = S.length; y < p; ++y)
                            P += S[y];
                        if ((P /= 255) == p - 1 && -1 !== S.indexOf(0))
                            u = [S.indexOf(0)];
                        else if (P !== p) {
                            for (d = l.decodePixels(),
                            g = new Uint8Array(d.length),
                            y = 0,
                            p = d.length; y < p; y++)
                                g[y] = S[d[y]];
                            f = e(g, l.width, 1)
                        }
                    }
                    var C = function(e) {
                        var r;
                        switch (e) {
                        case t.image_compression.FAST:
                            r = 11;
                            break;
                        case t.image_compression.MEDIUM:
                            r = 13;
                            break;
                        case t.image_compression.SLOW:
                            r = 14;
                            break;
                        default:
                            r = 12
                        }
                        return r
                    }(a);
                    return x === this.decode.FLATE_DECODE && (_ = "/Predictor " + C + " "),
                    _ += "/Colors " + c + " /BitsPerComponent " + s + " /Columns " + l.width,
                    (this.__addimage__.isArrayBuffer(r) || this.__addimage__.isArrayBufferView(r)) && (r = this.__addimage__.arrayBufferToBinaryString(r)),
                    (f && this.__addimage__.isArrayBuffer(f) || this.__addimage__.isArrayBufferView(f)) && (f = this.__addimage__.arrayBufferToBinaryString(f)),
                    {
                        alias: i,
                        data: r,
                        index: n,
                        filter: x,
                        decodeParameters: _,
                        transparency: u,
                        palette: h,
                        sMask: f,
                        predictor: C,
                        width: l.width,
                        height: l.height,
                        bitsPerComponent: s,
                        colorSpace: o
                    }
                }
            }
        }(Ft.API),
        function(t) {
            t.processGIF89A = function(e, r, n, i) {
                var a = new Ve(e)
                  , o = a.width
                  , s = a.height
                  , l = [];
                a.decodeAndBlitFrameRGBA(0, l);
                var u = {
                    data: l,
                    width: o,
                    height: s
                }
                  , c = new $e(100).encode(u, 100);
                return t.processJPEG.call(this, c, r, n, i)
            }
            ,
            t.processGIF87A = t.processGIF89A
        }(Ft.API),
        Ye.prototype.parseHeader = function() {
            if (this.fileSize = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.reserved = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.offset = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.headerSize = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.width = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.height = this.datav.getInt32(this.pos, !0),
            this.pos += 4,
            this.planes = this.datav.getUint16(this.pos, !0),
            this.pos += 2,
            this.bitPP = this.datav.getUint16(this.pos, !0),
            this.pos += 2,
            this.compress = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.rawSize = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.hr = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.vr = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.colors = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            this.importantColors = this.datav.getUint32(this.pos, !0),
            this.pos += 4,
            16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15),
            this.bitPP < 15) {
                var t = 0 === this.colors ? 1 << this.bitPP : this.colors;
                this.palette = new Array(t);
                for (var e = 0; e < t; e++) {
                    var r = this.datav.getUint8(this.pos++, !0)
                      , n = this.datav.getUint8(this.pos++, !0)
                      , i = this.datav.getUint8(this.pos++, !0)
                      , a = this.datav.getUint8(this.pos++, !0);
                    this.palette[e] = {
                        red: i,
                        green: n,
                        blue: r,
                        quad: a
                    }
                }
            }
            this.height < 0 && (this.height *= -1,
            this.bottom_up = !1)
        }
        ,
        Ye.prototype.parseBGR = function() {
            this.pos = this.offset;
            try {
                var t = "bit" + this.bitPP
                  , e = this.width * this.height * 4;
                this.data = new Uint8Array(e),
                this[t]()
            } catch (t) {
                Q.log("bit decode error:" + t)
            }
        }
        ,
        Ye.prototype.bit1 = function() {
            var t, e = Math.ceil(this.width / 8), r = e % 4;
            for (t = this.height - 1; t >= 0; t--) {
                for (var n = this.bottom_up ? t : this.height - 1 - t, i = 0; i < e; i++)
                    for (var a = this.datav.getUint8(this.pos++, !0), o = n * this.width * 4 + 8 * i * 4, s = 0; s < 8 && 8 * i + s < this.width; s++) {
                        var l = this.palette[a >> 7 - s & 1];
                        this.data[o + 4 * s] = l.blue,
                        this.data[o + 4 * s + 1] = l.green,
                        this.data[o + 4 * s + 2] = l.red,
                        this.data[o + 4 * s + 3] = 255
                    }
                0 !== r && (this.pos += 4 - r)
            }
        }
        ,
        Ye.prototype.bit4 = function() {
            for (var t = Math.ceil(this.width / 2), e = t % 4, r = this.height - 1; r >= 0; r--) {
                for (var n = this.bottom_up ? r : this.height - 1 - r, i = 0; i < t; i++) {
                    var a = this.datav.getUint8(this.pos++, !0)
                      , o = n * this.width * 4 + 2 * i * 4
                      , s = a >> 4
                      , l = 15 & a
                      , u = this.palette[s];
                    if (this.data[o] = u.blue,
                    this.data[o + 1] = u.green,
                    this.data[o + 2] = u.red,
                    this.data[o + 3] = 255,
                    2 * i + 1 >= this.width)
                        break;
                    u = this.palette[l],
                    this.data[o + 4] = u.blue,
                    this.data[o + 4 + 1] = u.green,
                    this.data[o + 4 + 2] = u.red,
                    this.data[o + 4 + 3] = 255
                }
                0 !== e && (this.pos += 4 - e)
            }
        }
        ,
        Ye.prototype.bit8 = function() {
            for (var t = this.width % 4, e = this.height - 1; e >= 0; e--) {
                for (var r = this.bottom_up ? e : this.height - 1 - e, n = 0; n < this.width; n++) {
                    var i = this.datav.getUint8(this.pos++, !0)
                      , a = r * this.width * 4 + 4 * n;
                    if (i < this.palette.length) {
                        var o = this.palette[i];
                        this.data[a] = o.red,
                        this.data[a + 1] = o.green,
                        this.data[a + 2] = o.blue,
                        this.data[a + 3] = 255
                    } else
                        this.data[a] = 255,
                        this.data[a + 1] = 255,
                        this.data[a + 2] = 255,
                        this.data[a + 3] = 255
                }
                0 !== t && (this.pos += 4 - t)
            }
        }
        ,
        Ye.prototype.bit15 = function() {
            for (var t = this.width % 3, e = parseInt("11111", 2), r = this.height - 1; r >= 0; r--) {
                for (var n = this.bottom_up ? r : this.height - 1 - r, i = 0; i < this.width; i++) {
                    var a = this.datav.getUint16(this.pos, !0);
                    this.pos += 2;
                    var o = (a & e) / e * 255 | 0
                      , s = (a >> 5 & e) / e * 255 | 0
                      , l = (a >> 10 & e) / e * 255 | 0
                      , u = a >> 15 ? 255 : 0
                      , c = n * this.width * 4 + 4 * i;
                    this.data[c] = l,
                    this.data[c + 1] = s,
                    this.data[c + 2] = o,
                    this.data[c + 3] = u
                }
                this.pos += t
            }
        }
        ,
        Ye.prototype.bit16 = function() {
            for (var t = this.width % 3, e = parseInt("11111", 2), r = parseInt("111111", 2), n = this.height - 1; n >= 0; n--) {
                for (var i = this.bottom_up ? n : this.height - 1 - n, a = 0; a < this.width; a++) {
                    var o = this.datav.getUint16(this.pos, !0);
                    this.pos += 2;
                    var s = (o & e) / e * 255 | 0
                      , l = (o >> 5 & r) / r * 255 | 0
                      , u = (o >> 11) / e * 255 | 0
                      , c = i * this.width * 4 + 4 * a;
                    this.data[c] = u,
                    this.data[c + 1] = l,
                    this.data[c + 2] = s,
                    this.data[c + 3] = 255
                }
                this.pos += t
            }
        }
        ,
        Ye.prototype.bit24 = function() {
            for (var t = this.height - 1; t >= 0; t--) {
                for (var e = this.bottom_up ? t : this.height - 1 - t, r = 0; r < this.width; r++) {
                    var n = this.datav.getUint8(this.pos++, !0)
                      , i = this.datav.getUint8(this.pos++, !0)
                      , a = this.datav.getUint8(this.pos++, !0)
                      , o = e * this.width * 4 + 4 * r;
                    this.data[o] = a,
                    this.data[o + 1] = i,
                    this.data[o + 2] = n,
                    this.data[o + 3] = 255
                }
                this.pos += this.width % 4
            }
        }
        ,
        Ye.prototype.bit32 = function() {
            for (var t = this.height - 1; t >= 0; t--)
                for (var e = this.bottom_up ? t : this.height - 1 - t, r = 0; r < this.width; r++) {
                    var n = this.datav.getUint8(this.pos++, !0)
                      , i = this.datav.getUint8(this.pos++, !0)
                      , a = this.datav.getUint8(this.pos++, !0)
                      , o = this.datav.getUint8(this.pos++, !0)
                      , s = e * this.width * 4 + 4 * r;
                    this.data[s] = a,
                    this.data[s + 1] = i,
                    this.data[s + 2] = n,
                    this.data[s + 3] = o
                }
        }
        ,
        Ye.prototype.getData = function() {
            return this.data
        }
        ,
        function(t) {
            t.processBMP = function(e, r, n, i) {
                var a = new Ye(e,!1)
                  , o = a.width
                  , s = a.height
                  , l = {
                    data: a.getData(),
                    width: o,
                    height: s
                }
                  , u = new $e(100).encode(l, 100);
                return t.processJPEG.call(this, u, r, n, i)
            }
        }(Ft.API),
        Je.prototype.getData = function() {
            return this.data
        }
        ,
        function(t) {
            t.processWEBP = function(e, r, n, i) {
                var a = new Je(e,!1)
                  , o = a.width
                  , s = a.height
                  , l = {
                    data: a.getData(),
                    width: o,
                    height: s
                }
                  , u = new $e(100).encode(l, 100);
                return t.processJPEG.call(this, u, r, n, i)
            }
        }(Ft.API),
        Ft.API.processRGBA = function(t, e, r) {
            for (var n = t.data, i = n.length, a = new Uint8Array(i / 4 * 3), o = new Uint8Array(i / 4), s = 0, l = 0, u = 0; u < i; u += 4) {
                var c = n[u]
                  , h = n[u + 1]
                  , f = n[u + 2]
                  , d = n[u + 3];
                a[s++] = c,
                a[s++] = h,
                a[s++] = f,
                o[l++] = d
            }
            var p = this.__addimage__.arrayBufferToBinaryString(a);
            return {
                alpha: this.__addimage__.arrayBufferToBinaryString(o),
                data: p,
                index: e,
                alias: r,
                colorSpace: "DeviceRGB",
                bitsPerComponent: 8,
                width: t.width,
                height: t.height
            }
        }
        ,
        Ft.API.setLanguage = function(t) {
            return void 0 === this.internal.languageSettings && (this.internal.languageSettings = {},
            this.internal.languageSettings.isSubscribed = !1),
            void 0 !== {
                af: "Afrikaans",
                sq: "Albanian",
                ar: "Arabic (Standard)",
                "ar-DZ": "Arabic (Algeria)",
                "ar-BH": "Arabic (Bahrain)",
                "ar-EG": "Arabic (Egypt)",
                "ar-IQ": "Arabic (Iraq)",
                "ar-JO": "Arabic (Jordan)",
                "ar-KW": "Arabic (Kuwait)",
                "ar-LB": "Arabic (Lebanon)",
                "ar-LY": "Arabic (Libya)",
                "ar-MA": "Arabic (Morocco)",
                "ar-OM": "Arabic (Oman)",
                "ar-QA": "Arabic (Qatar)",
                "ar-SA": "Arabic (Saudi Arabia)",
                "ar-SY": "Arabic (Syria)",
                "ar-TN": "Arabic (Tunisia)",
                "ar-AE": "Arabic (U.A.E.)",
                "ar-YE": "Arabic (Yemen)",
                an: "Aragonese",
                hy: "Armenian",
                as: "Assamese",
                ast: "Asturian",
                az: "Azerbaijani",
                eu: "Basque",
                be: "Belarusian",
                bn: "Bengali",
                bs: "Bosnian",
                br: "Breton",
                bg: "Bulgarian",
                my: "Burmese",
                ca: "Catalan",
                ch: "Chamorro",
                ce: "Chechen",
                zh: "Chinese",
                "zh-HK": "Chinese (Hong Kong)",
                "zh-CN": "Chinese (PRC)",
                "zh-SG": "Chinese (Singapore)",
                "zh-TW": "Chinese (Taiwan)",
                cv: "Chuvash",
                co: "Corsican",
                cr: "Cree",
                hr: "Croatian",
                cs: "Czech",
                da: "Danish",
                nl: "Dutch (Standard)",
                "nl-BE": "Dutch (Belgian)",
                en: "English",
                "en-AU": "English (Australia)",
                "en-BZ": "English (Belize)",
                "en-CA": "English (Canada)",
                "en-IE": "English (Ireland)",
                "en-JM": "English (Jamaica)",
                "en-NZ": "English (New Zealand)",
                "en-PH": "English (Philippines)",
                "en-ZA": "English (South Africa)",
                "en-TT": "English (Trinidad & Tobago)",
                "en-GB": "English (United Kingdom)",
                "en-US": "English (United States)",
                "en-ZW": "English (Zimbabwe)",
                eo: "Esperanto",
                et: "Estonian",
                fo: "Faeroese",
                fj: "Fijian",
                fi: "Finnish",
                fr: "French (Standard)",
                "fr-BE": "French (Belgium)",
                "fr-CA": "French (Canada)",
                "fr-FR": "French (France)",
                "fr-LU": "French (Luxembourg)",
                "fr-MC": "French (Monaco)",
                "fr-CH": "French (Switzerland)",
                fy: "Frisian",
                fur: "Friulian",
                gd: "Gaelic (Scots)",
                "gd-IE": "Gaelic (Irish)",
                gl: "Galacian",
                ka: "Georgian",
                de: "German (Standard)",
                "de-AT": "German (Austria)",
                "de-DE": "German (Germany)",
                "de-LI": "German (Liechtenstein)",
                "de-LU": "German (Luxembourg)",
                "de-CH": "German (Switzerland)",
                el: "Greek",
                gu: "Gujurati",
                ht: "Haitian",
                he: "Hebrew",
                hi: "Hindi",
                hu: "Hungarian",
                is: "Icelandic",
                id: "Indonesian",
                iu: "Inuktitut",
                ga: "Irish",
                it: "Italian (Standard)",
                "it-CH": "Italian (Switzerland)",
                ja: "Japanese",
                kn: "Kannada",
                ks: "Kashmiri",
                kk: "Kazakh",
                km: "Khmer",
                ky: "Kirghiz",
                tlh: "Klingon",
                ko: "Korean",
                "ko-KP": "Korean (North Korea)",
                "ko-KR": "Korean (South Korea)",
                la: "Latin",
                lv: "Latvian",
                lt: "Lithuanian",
                lb: "Luxembourgish",
                mk: "North Macedonia",
                ms: "Malay",
                ml: "Malayalam",
                mt: "Maltese",
                mi: "Maori",
                mr: "Marathi",
                mo: "Moldavian",
                nv: "Navajo",
                ng: "Ndonga",
                ne: "Nepali",
                no: "Norwegian",
                nb: "Norwegian (Bokmal)",
                nn: "Norwegian (Nynorsk)",
                oc: "Occitan",
                or: "Oriya",
                om: "Oromo",
                fa: "Persian",
                "fa-IR": "Persian/Iran",
                pl: "Polish",
                pt: "Portuguese",
                "pt-BR": "Portuguese (Brazil)",
                pa: "Punjabi",
                "pa-IN": "Punjabi (India)",
                "pa-PK": "Punjabi (Pakistan)",
                qu: "Quechua",
                rm: "Rhaeto-Romanic",
                ro: "Romanian",
                "ro-MO": "Romanian (Moldavia)",
                ru: "Russian",
                "ru-MO": "Russian (Moldavia)",
                sz: "Sami (Lappish)",
                sg: "Sango",
                sa: "Sanskrit",
                sc: "Sardinian",
                sd: "Sindhi",
                si: "Singhalese",
                sr: "Serbian",
                sk: "Slovak",
                sl: "Slovenian",
                so: "Somani",
                sb: "Sorbian",
                es: "Spanish",
                "es-AR": "Spanish (Argentina)",
                "es-BO": "Spanish (Bolivia)",
                "es-CL": "Spanish (Chile)",
                "es-CO": "Spanish (Colombia)",
                "es-CR": "Spanish (Costa Rica)",
                "es-DO": "Spanish (Dominican Republic)",
                "es-EC": "Spanish (Ecuador)",
                "es-SV": "Spanish (El Salvador)",
                "es-GT": "Spanish (Guatemala)",
                "es-HN": "Spanish (Honduras)",
                "es-MX": "Spanish (Mexico)",
                "es-NI": "Spanish (Nicaragua)",
                "es-PA": "Spanish (Panama)",
                "es-PY": "Spanish (Paraguay)",
                "es-PE": "Spanish (Peru)",
                "es-PR": "Spanish (Puerto Rico)",
                "es-ES": "Spanish (Spain)",
                "es-UY": "Spanish (Uruguay)",
                "es-VE": "Spanish (Venezuela)",
                sx: "Sutu",
                sw: "Swahili",
                sv: "Swedish",
                "sv-FI": "Swedish (Finland)",
                "sv-SV": "Swedish (Sweden)",
                ta: "Tamil",
                tt: "Tatar",
                te: "Teluga",
                th: "Thai",
                tig: "Tigre",
                ts: "Tsonga",
                tn: "Tswana",
                tr: "Turkish",
                tk: "Turkmen",
                uk: "Ukrainian",
                hsb: "Upper Sorbian",
                ur: "Urdu",
                ve: "Venda",
                vi: "Vietnamese",
                vo: "Volapuk",
                wa: "Walloon",
                cy: "Welsh",
                xh: "Xhosa",
                ji: "Yiddish",
                zu: "Zulu"
            }[t] && (this.internal.languageSettings.languageCode = t,
            !1 === this.internal.languageSettings.isSubscribed && (this.internal.events.subscribe("putCatalog", (function() {
                this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")")
            }
            )),
            this.internal.languageSettings.isSubscribed = !0)),
            this
        }
        ,
        Re = Ft.API,
        qe = Re.getCharWidthsArray = function(t, e) {
            var r, i, a = (e = e || {}).font || this.internal.getFont(), o = e.fontSize || this.internal.getFontSize(), s = e.charSpace || this.internal.getCharSpace(), l = e.widths ? e.widths : a.metadata.Unicode.widths, u = l.fof ? l.fof : 1, c = e.kerning ? e.kerning : a.metadata.Unicode.kerning, h = c.fof ? c.fof : 1, f = !1 !== e.doKerning, d = 0, p = t.length, g = 0, m = l[0] || u, v = [];
            for (r = 0; r < p; r++)
                i = t.charCodeAt(r),
                "function" == typeof a.metadata.widthOfString ? v.push((a.metadata.widthOfGlyph(a.metadata.characterToGlyph(i)) + s * (1e3 / o) || 0) / 1e3) : (d = f && "object" === n(c[i]) && !isNaN(parseInt(c[i][g], 10)) ? c[i][g] / h : 0,
                v.push((l[i] || m) / u + d)),
                g = i;
            return v
        }
        ,
        ze = Re.getStringUnitWidth = function(t, e) {
            var r = (e = e || {}).fontSize || this.internal.getFontSize()
              , n = e.font || this.internal.getFont()
              , i = e.charSpace || this.internal.getCharSpace();
            return Re.processArabic && (t = Re.processArabic(t)),
            "function" == typeof n.metadata.widthOfString ? n.metadata.widthOfString(t, r, i) / r : qe.apply(this, arguments).reduce((function(t, e) {
                return t + e
            }
            ), 0)
        }
        ,
        Ue = function(t, e, r, n) {
            for (var i = [], a = 0, o = t.length, s = 0; a !== o && s + e[a] < r; )
                s += e[a],
                a++;
            i.push(t.slice(0, a));
            var l = a;
            for (s = 0; a !== o; )
                s + e[a] > n && (i.push(t.slice(l, a)),
                s = 0,
                l = a),
                s += e[a],
                a++;
            return l !== a && i.push(t.slice(l, a)),
            i
        }
        ,
        We = function(t, e, r) {
            r || (r = {});
            var n, i, a, o, s, l, u, c = [], h = [c], f = r.textIndent || 0, d = 0, p = 0, g = t.split(" "), m = qe.apply(this, [" ", r])[0];
            if (l = -1 === r.lineIndent ? g[0].length + 2 : r.lineIndent || 0) {
                var v = Array(l).join(" ")
                  , b = [];
                g.map((function(t) {
                    (t = t.split(/\s*\n/)).length > 1 ? b = b.concat(t.map((function(t, e) {
                        return (e && t.length ? "\n" : "") + t
                    }
                    ))) : b.push(t[0])
                }
                )),
                g = b,
                l = ze.apply(this, [v, r])
            }
            for (a = 0,
            o = g.length; a < o; a++) {
                var y = 0;
                if (n = g[a],
                l && "\n" == n[0] && (n = n.substr(1),
                y = 1),
                f + d + (p = (i = qe.apply(this, [n, r])).reduce((function(t, e) {
                    return t + e
                }
                ), 0)) > e || y) {
                    if (p > e) {
                        for (s = Ue.apply(this, [n, i, e - (f + d), e]),
                        c.push(s.shift()),
                        c = [s.pop()]; s.length; )
                            h.push([s.shift()]);
                        p = i.slice(n.length - (c[0] ? c[0].length : 0)).reduce((function(t, e) {
                            return t + e
                        }
                        ), 0)
                    } else
                        c = [n];
                    h.push(c),
                    f = p + l,
                    d = m
                } else
                    c.push(n),
                    f += d + p,
                    d = m
            }
            return u = l ? function(t, e) {
                return (e ? v : "") + t.join(" ")
            }
            : function(t) {
                return t.join(" ")
            }
            ,
            h.map(u)
        }
        ,
        Re.splitTextToSize = function(t, e, r) {
            var n, i = (r = r || {}).fontSize || this.internal.getFontSize(), a = function(t) {
                if (t.widths && t.kerning)
                    return {
                        widths: t.widths,
                        kerning: t.kerning
                    };
                var e = this.internal.getFont(t.fontName, t.fontStyle);
                return e.metadata.Unicode ? {
                    widths: e.metadata.Unicode.widths || {
                        0: 1
                    },
                    kerning: e.metadata.Unicode.kerning || {}
                } : {
                    font: e.metadata,
                    fontSize: this.internal.getFontSize(),
                    charSpace: this.internal.getCharSpace()
                }
            }
            .call(this, r);
            n = Array.isArray(t) ? t : String(t).split(/\r?\n/);
            var o = 1 * this.internal.scaleFactor * e / i;
            a.textIndent = r.textIndent ? 1 * r.textIndent * this.internal.scaleFactor / i : 0,
            a.lineIndent = r.lineIndent;
            var s, l, u = [];
            for (s = 0,
            l = n.length; s < l; s++)
                u = u.concat(We.apply(this, [n[s], o, a]));
            return u
        }
        ,
        function(t) {
            t.__fontmetrics__ = t.__fontmetrics__ || {};
            for (var e = "klmnopqrstuvwxyz", r = {}, i = {}, a = 0; a < e.length; a++)
                r[e[a]] = "0123456789abcdef"[a],
                i["0123456789abcdef"[a]] = e[a];
            var o = function(t) {
                return "0x" + parseInt(t, 10).toString(16)
            }
              , s = t.__fontmetrics__.compress = function(t) {
                var e, r, a, l, u = ["{"];
                for (var c in t) {
                    if (e = t[c],
                    isNaN(parseInt(c, 10)) ? r = "'" + c + "'" : (c = parseInt(c, 10),
                    r = (r = o(c).slice(2)).slice(0, -1) + i[r.slice(-1)]),
                    "number" == typeof e)
                        e < 0 ? (a = o(e).slice(3),
                        l = "-") : (a = o(e).slice(2),
                        l = ""),
                        a = l + a.slice(0, -1) + i[a.slice(-1)];
                    else {
                        if ("object" !== n(e))
                            throw new Error("Don't know what to do with value type " + n(e) + ".");
                        a = s(e)
                    }
                    u.push(r + a)
                }
                return u.push("}"),
                u.join("")
            }
              , l = t.__fontmetrics__.uncompress = function(t) {
                if ("string" != typeof t)
                    throw new Error("Invalid argument passed to uncompress.");
                for (var e, n, i, a, o = {}, s = 1, l = o, u = [], c = "", h = "", f = t.length - 1, d = 1; d < f; d += 1)
                    "'" == (a = t[d]) ? e ? (i = e.join(""),
                    e = void 0) : e = [] : e ? e.push(a) : "{" == a ? (u.push([l, i]),
                    l = {},
                    i = void 0) : "}" == a ? ((n = u.pop())[0][n[1]] = l,
                    i = void 0,
                    l = n[0]) : "-" == a ? s = -1 : void 0 === i ? r.hasOwnProperty(a) ? (c += r[a],
                    i = parseInt(c, 16) * s,
                    s = 1,
                    c = "") : c += a : r.hasOwnProperty(a) ? (h += r[a],
                    l[i] = parseInt(h, 16) * s,
                    s = 1,
                    i = void 0,
                    h = "") : h += a;
                return o
            }
              , u = {
                codePages: ["WinAnsiEncoding"],
                WinAnsiEncoding: l("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
            }
              , c = {
                Unicode: {
                    Courier: u,
                    "Courier-Bold": u,
                    "Courier-BoldOblique": u,
                    "Courier-Oblique": u,
                    Helvetica: u,
                    "Helvetica-Bold": u,
                    "Helvetica-BoldOblique": u,
                    "Helvetica-Oblique": u,
                    "Times-Roman": u,
                    "Times-Bold": u,
                    "Times-BoldItalic": u,
                    "Times-Italic": u
                }
            }
              , h = {
                Unicode: {
                    "Courier-Oblique": l("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                    "Times-BoldItalic": l("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
                    "Helvetica-Bold": l("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
                    Courier: l("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                    "Courier-BoldOblique": l("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                    "Times-Bold": l("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
                    Symbol: l("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),
                    Helvetica: l("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
                    "Helvetica-BoldOblique": l("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
                    ZapfDingbats: l("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
                    "Courier-Bold": l("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                    "Times-Italic": l("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
                    "Times-Roman": l("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
                    "Helvetica-Oblique": l("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
                }
            };
            t.events.push(["addFont", function(t) {
                var e = t.font
                  , r = h.Unicode[e.postScriptName];
                r && (e.metadata.Unicode = {},
                e.metadata.Unicode.widths = r.widths,
                e.metadata.Unicode.kerning = r.kerning);
                var n = c.Unicode[e.postScriptName];
                n && (e.metadata.Unicode.encoding = n,
                e.encoding = n.codePages[0])
            }
            ])
        }(Ft.API),
        function(t) {
            var e = function(t) {
                for (var e = t.length, r = new Uint8Array(e), n = 0; n < e; n++)
                    r[n] = t.charCodeAt(n);
                return r
            };
            t.API.events.push(["addFont", function(r) {
                var n = void 0
                  , i = r.font
                  , a = r.instance;
                if (!i.isStandardFont) {
                    if (void 0 === a)
                        throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "').");
                    if ("string" != typeof (n = !1 === a.existsFileInVFS(i.postScriptName) ? a.loadFile(i.postScriptName) : a.getFileFromVFS(i.postScriptName)))
                        throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "').");
                    !function(r, n) {
                        n = /^\x00\x01\x00\x00/.test(n) ? e(n) : e(nt(n)),
                        r.metadata = t.API.TTFFont.open(n),
                        r.metadata.Unicode = r.metadata.Unicode || {
                            encoding: {},
                            kerning: {},
                            widths: []
                        },
                        r.metadata.glyIdsUsed = [0]
                    }(i, n)
                }
            }
            ])
        }(Ft),
        function(t) {
            function e() {
                return (X.canvg ? Promise.resolve(X.canvg) : r.e(8494).then(r.bind(r, 18494))).catch((function(t) {
                    return Promise.reject(new Error("Could not load canvg: " + t))
                }
                )).then((function(t) {
                    return t.default ? t.default : t
                }
                ))
            }
            Ft.API.addSvgAsImage = function(t, r, n, i, a, o, s, l) {
                if (isNaN(r) || isNaN(n))
                    throw Q.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments),
                    new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
                if (isNaN(i) || isNaN(a))
                    throw Q.error("jsPDF.addSvgAsImage: Invalid measurements", arguments),
                    new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
                var u = document.createElement("canvas");
                u.width = i,
                u.height = a;
                var c = u.getContext("2d");
                c.fillStyle = "#fff",
                c.fillRect(0, 0, u.width, u.height);
                var h = {
                    ignoreMouse: !0,
                    ignoreAnimation: !0,
                    ignoreDimensions: !0
                }
                  , f = this;
                return e().then((function(e) {
                    return e.fromString(c, t, h)
                }
                ), (function() {
                    return Promise.reject(new Error("Could not load canvg."))
                }
                )).then((function(t) {
                    return t.render(h)
                }
                )).then((function() {
                    f.addImage(u.toDataURL("image/jpeg", 1), r, n, i, a, s, l)
                }
                ))
            }
        }(),
        Ft.API.putTotalPages = function(t) {
            var e, r = 0;
            parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(t,"g"),
            r = this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(t, this.internal.getFont()),"g"),
            r = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
            for (var n = 1; n <= this.internal.getNumberOfPages(); n++)
                for (var i = 0; i < this.internal.pages[n].length; i++)
                    this.internal.pages[n][i] = this.internal.pages[n][i].replace(e, r);
            return this
        }
        ,
        Ft.API.viewerPreferences = function(t, e) {
            var r;
            t = t || {},
            e = e || !1;
            var i, a, o, s = {
                HideToolbar: {
                    defaultValue: !1,
                    value: !1,
                    type: "boolean",
                    explicitSet: !1,
                    valueSet: [!0, !1],
                    pdfVersion: 1.3
                },
                HideMenubar: {
                    defaultValue: !1,
                    value: !1,
                    type: "boolean",
                    explicitSet: !1,
                    valueSet: [!0, !1],
                    pdfVersion: 1.3
                },
                HideWindowUI: {
                    defaultValue: !1,
                    value: !1,
                    type: "boolean",
                    explicitSet: !1,
                    valueSet: [!0, !1],
                    pdfVersion: 1.3
                },
                FitWindow: {
                    defaultValue: !1,
                    value: !1,
                    type: "boolean",
                    explicitSet: !1,
                    valueSet: [!0, !1],
                    pdfVersion: 1.3
                },
                CenterWindow: {
                    defaultValue: !1,
                    value: !1,
                    type: "boolean",
                    explicitSet: !1,
                    valueSet: [!0, !1],
                    pdfVersion: 1.3
                },
                DisplayDocTitle: {
                    defaultValue: !1,
                    value: !1,
                    type: "boolean",
                    explicitSet: !1,
                    valueSet: [!0, !1],
                    pdfVersion: 1.4
                },
                NonFullScreenPageMode: {
                    defaultValue: "UseNone",
                    value: "UseNone",
                    type: "name",
                    explicitSet: !1,
                    valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"],
                    pdfVersion: 1.3
                },
                Direction: {
                    defaultValue: "L2R",
                    value: "L2R",
                    type: "name",
                    explicitSet: !1,
                    valueSet: ["L2R", "R2L"],
                    pdfVersion: 1.3
                },
                ViewArea: {
                    defaultValue: "CropBox",
                    value: "CropBox",
                    type: "name",
                    explicitSet: !1,
                    valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                    pdfVersion: 1.4
                },
                ViewClip: {
                    defaultValue: "CropBox",
                    value: "CropBox",
                    type: "name",
                    explicitSet: !1,
                    valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                    pdfVersion: 1.4
                },
                PrintArea: {
                    defaultValue: "CropBox",
                    value: "CropBox",
                    type: "name",
                    explicitSet: !1,
                    valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                    pdfVersion: 1.4
                },
                PrintClip: {
                    defaultValue: "CropBox",
                    value: "CropBox",
                    type: "name",
                    explicitSet: !1,
                    valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                    pdfVersion: 1.4
                },
                PrintScaling: {
                    defaultValue: "AppDefault",
                    value: "AppDefault",
                    type: "name",
                    explicitSet: !1,
                    valueSet: ["AppDefault", "None"],
                    pdfVersion: 1.6
                },
                Duplex: {
                    defaultValue: "",
                    value: "none",
                    type: "name",
                    explicitSet: !1,
                    valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"],
                    pdfVersion: 1.7
                },
                PickTrayByPDFSize: {
                    defaultValue: !1,
                    value: !1,
                    type: "boolean",
                    explicitSet: !1,
                    valueSet: [!0, !1],
                    pdfVersion: 1.7
                },
                PrintPageRange: {
                    defaultValue: "",
                    value: "",
                    type: "array",
                    explicitSet: !1,
                    valueSet: null,
                    pdfVersion: 1.7
                },
                NumCopies: {
                    defaultValue: 1,
                    value: 1,
                    type: "integer",
                    explicitSet: !1,
                    valueSet: null,
                    pdfVersion: 1.7
                }
            }, l = Object.keys(s), u = [], c = 0, h = 0, f = 0;
            function d(t, e) {
                var r, n = !1;
                for (r = 0; r < t.length; r += 1)
                    t[r] === e && (n = !0);
                return n
            }
            if (void 0 === this.internal.viewerpreferences && (this.internal.viewerpreferences = {},
            this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(s)),
            this.internal.viewerpreferences.isSubscribed = !1),
            r = this.internal.viewerpreferences.configuration,
            "reset" === t || !0 === e) {
                var p = l.length;
                for (f = 0; f < p; f += 1)
                    r[l[f]].value = r[l[f]].defaultValue,
                    r[l[f]].explicitSet = !1
            }
            if ("object" === n(t))
                for (a in t)
                    if (o = t[a],
                    d(l, a) && void 0 !== o) {
                        if ("boolean" === r[a].type && "boolean" == typeof o)
                            r[a].value = o;
                        else if ("name" === r[a].type && d(r[a].valueSet, o))
                            r[a].value = o;
                        else if ("integer" === r[a].type && Number.isInteger(o))
                            r[a].value = o;
                        else if ("array" === r[a].type) {
                            for (c = 0; c < o.length; c += 1)
                                if (i = !0,
                                1 === o[c].length && "number" == typeof o[c][0])
                                    u.push(String(o[c] - 1));
                                else if (o[c].length > 1) {
                                    for (h = 0; h < o[c].length; h += 1)
                                        "number" != typeof o[c][h] && (i = !1);
                                    !0 === i && u.push([o[c][0] - 1, o[c][1] - 1].join(" "))
                                }
                            r[a].value = "[" + u.join(" ") + "]"
                        } else
                            r[a].value = r[a].defaultValue;
                        r[a].explicitSet = !0
                    }
            return !1 === this.internal.viewerpreferences.isSubscribed && (this.internal.events.subscribe("putCatalog", (function() {
                var t, e = [];
                for (t in r)
                    !0 === r[t].explicitSet && ("name" === r[t].type ? e.push("/" + t + " /" + r[t].value) : e.push("/" + t + " " + r[t].value));
                0 !== e.length && this.internal.write("/ViewerPreferences\n<<\n" + e.join("\n") + "\n>>")
            }
            )),
            this.internal.viewerpreferences.isSubscribed = !0),
            this.internal.viewerpreferences.configuration = r,
            this
        }
        ,
        function(t) {
            var e = function() {
                var t = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>'
                  , e = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">'))
                  , r = unescape(encodeURIComponent(t))
                  , n = unescape(encodeURIComponent(this.internal.__metadata__.metadata))
                  , i = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>"))
                  , a = unescape(encodeURIComponent("</x:xmpmeta>"))
                  , o = r.length + n.length + i.length + e.length + a.length;
                this.internal.__metadata__.metadata_object_number = this.internal.newObject(),
                this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + o + " >>"),
                this.internal.write("stream"),
                this.internal.write(e + r + n + i + a),
                this.internal.write("endstream"),
                this.internal.write("endobj")
            }
              , r = function() {
                this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R")
            };
            t.addMetadata = function(t, n) {
                return void 0 === this.internal.__metadata__ && (this.internal.__metadata__ = {
                    metadata: t,
                    namespaceuri: n || "http://jspdf.default.namespaceuri/"
                },
                this.internal.events.subscribe("putCatalog", r),
                this.internal.events.subscribe("postPutResources", e)),
                this
            }
        }(Ft.API),
        function(t) {
            var e = t.API
              , r = e.pdfEscape16 = function(t, e) {
                for (var r, n = e.metadata.Unicode.widths, i = ["", "0", "00", "000", "0000"], a = [""], o = 0, s = t.length; o < s; ++o) {
                    if (r = e.metadata.characterToGlyph(t.charCodeAt(o)),
                    e.metadata.glyIdsUsed.push(r),
                    e.metadata.toUnicode[r] = t.charCodeAt(o),
                    -1 == n.indexOf(r) && (n.push(r),
                    n.push([parseInt(e.metadata.widthOfGlyph(r), 10)])),
                    "0" == r)
                        return a.join("");
                    r = r.toString(16),
                    a.push(i[4 - r.length], r)
                }
                return a.join("")
            }
              , n = function(t) {
                var e, r, n, i, a, o, s;
                for (a = "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange",
                n = [],
                o = 0,
                s = (r = Object.keys(t).sort((function(t, e) {
                    return t - e
                }
                ))).length; o < s; o++)
                    e = r[o],
                    n.length >= 100 && (a += "\n" + n.length + " beginbfchar\n" + n.join("\n") + "\nendbfchar",
                    n = []),
                    void 0 !== t[e] && null !== t[e] && "function" == typeof t[e].toString && (i = ("0000" + t[e].toString(16)).slice(-4),
                    e = ("0000" + (+e).toString(16)).slice(-4),
                    n.push("<" + e + "><" + i + ">"));
                return n.length && (a += "\n" + n.length + " beginbfchar\n" + n.join("\n") + "\nendbfchar\n"),
                a + "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"
            };
            e.events.push(["putFont", function(e) {
                !function(e) {
                    var r = e.font
                      , i = e.out
                      , a = e.newObject
                      , o = e.putStream;
                    if (r.metadata instanceof t.API.TTFFont && "Identity-H" === r.encoding) {
                        for (var s = r.metadata.Unicode.widths, l = r.metadata.subset.encode(r.metadata.glyIdsUsed, 1), u = "", c = 0; c < l.length; c++)
                            u += String.fromCharCode(l[c]);
                        var h = a();
                        o({
                            data: u,
                            addLength1: !0,
                            objectId: h
                        }),
                        i("endobj");
                        var f = a();
                        o({
                            data: n(r.metadata.toUnicode),
                            addLength1: !0,
                            objectId: f
                        }),
                        i("endobj");
                        var d = a();
                        i("<<"),
                        i("/Type /FontDescriptor"),
                        i("/FontName /" + At(r.fontName)),
                        i("/FontFile2 " + h + " 0 R"),
                        i("/FontBBox " + t.API.PDFObject.convert(r.metadata.bbox)),
                        i("/Flags " + r.metadata.flags),
                        i("/StemV " + r.metadata.stemV),
                        i("/ItalicAngle " + r.metadata.italicAngle),
                        i("/Ascent " + r.metadata.ascender),
                        i("/Descent " + r.metadata.decender),
                        i("/CapHeight " + r.metadata.capHeight),
                        i(">>"),
                        i("endobj");
                        var p = a();
                        i("<<"),
                        i("/Type /Font"),
                        i("/BaseFont /" + At(r.fontName)),
                        i("/FontDescriptor " + d + " 0 R"),
                        i("/W " + t.API.PDFObject.convert(s)),
                        i("/CIDToGIDMap /Identity"),
                        i("/DW 1000"),
                        i("/Subtype /CIDFontType2"),
                        i("/CIDSystemInfo"),
                        i("<<"),
                        i("/Supplement 0"),
                        i("/Registry (Adobe)"),
                        i("/Ordering (" + r.encoding + ")"),
                        i(">>"),
                        i(">>"),
                        i("endobj"),
                        r.objectNumber = a(),
                        i("<<"),
                        i("/Type /Font"),
                        i("/Subtype /Type0"),
                        i("/ToUnicode " + f + " 0 R"),
                        i("/BaseFont /" + At(r.fontName)),
                        i("/Encoding /" + r.encoding),
                        i("/DescendantFonts [" + p + " 0 R]"),
                        i(">>"),
                        i("endobj"),
                        r.isAlreadyPutted = !0
                    }
                }(e)
            }
            ]),
            e.events.push(["putFont", function(e) {
                !function(e) {
                    var r = e.font
                      , i = e.out
                      , a = e.newObject
                      , o = e.putStream;
                    if (r.metadata instanceof t.API.TTFFont && "WinAnsiEncoding" === r.encoding) {
                        for (var s = r.metadata.rawData, l = "", u = 0; u < s.length; u++)
                            l += String.fromCharCode(s[u]);
                        var c = a();
                        o({
                            data: l,
                            addLength1: !0,
                            objectId: c
                        }),
                        i("endobj");
                        var h = a();
                        o({
                            data: n(r.metadata.toUnicode),
                            addLength1: !0,
                            objectId: h
                        }),
                        i("endobj");
                        var f = a();
                        i("<<"),
                        i("/Descent " + r.metadata.decender),
                        i("/CapHeight " + r.metadata.capHeight),
                        i("/StemV " + r.metadata.stemV),
                        i("/Type /FontDescriptor"),
                        i("/FontFile2 " + c + " 0 R"),
                        i("/Flags 96"),
                        i("/FontBBox " + t.API.PDFObject.convert(r.metadata.bbox)),
                        i("/FontName /" + At(r.fontName)),
                        i("/ItalicAngle " + r.metadata.italicAngle),
                        i("/Ascent " + r.metadata.ascender),
                        i(">>"),
                        i("endobj"),
                        r.objectNumber = a();
                        for (var d = 0; d < r.metadata.hmtx.widths.length; d++)
                            r.metadata.hmtx.widths[d] = parseInt(r.metadata.hmtx.widths[d] * (1e3 / r.metadata.head.unitsPerEm));
                        i("<</Subtype/TrueType/Type/Font/ToUnicode " + h + " 0 R/BaseFont/" + At(r.fontName) + "/FontDescriptor " + f + " 0 R/Encoding/" + r.encoding + " /FirstChar 29 /LastChar 255 /Widths " + t.API.PDFObject.convert(r.metadata.hmtx.widths) + ">>"),
                        i("endobj"),
                        r.isAlreadyPutted = !0
                    }
                }(e)
            }
            ]);
            var i = function(t) {
                var e, n = t.text || "", i = t.x, a = t.y, o = t.options || {}, s = t.mutex || {}, l = s.pdfEscape, u = s.activeFontKey, c = s.fonts, h = u, f = "", d = 0, p = "", g = c[h].encoding;
                if ("Identity-H" !== c[h].encoding)
                    return {
                        text: n,
                        x: i,
                        y: a,
                        options: o,
                        mutex: s
                    };
                for (p = n,
                h = u,
                Array.isArray(n) && (p = n[0]),
                d = 0; d < p.length; d += 1)
                    c[h].metadata.hasOwnProperty("cmap") && (e = c[h].metadata.cmap.unicode.codeMap[p[d].charCodeAt(0)]),
                    e || p[d].charCodeAt(0) < 256 && c[h].metadata.hasOwnProperty("Unicode") ? f += p[d] : f += "";
                var m = "";
                return parseInt(h.slice(1)) < 14 || "WinAnsiEncoding" === g ? m = l(f, h).split("").map((function(t) {
                    return t.charCodeAt(0).toString(16)
                }
                )).join("") : "Identity-H" === g && (m = r(f, c[h])),
                s.isHex = !0,
                {
                    text: m,
                    x: i,
                    y: a,
                    options: o,
                    mutex: s
                }
            };
            e.events.push(["postProcessText", function(t) {
                var e = t.text || ""
                  , r = []
                  , n = {
                    text: e,
                    x: t.x,
                    y: t.y,
                    options: t.options,
                    mutex: t.mutex
                };
                if (Array.isArray(e)) {
                    var a = 0;
                    for (a = 0; a < e.length; a += 1)
                        Array.isArray(e[a]) && 3 === e[a].length ? r.push([i(Object.assign({}, n, {
                            text: e[a][0]
                        })).text, e[a][1], e[a][2]]) : r.push(i(Object.assign({}, n, {
                            text: e[a]
                        })).text);
                    t.text = r
                } else
                    t.text = i(Object.assign({}, n, {
                        text: e
                    })).text
            }
            ])
        }(Ft),
        function(t) {
            var e = function() {
                return void 0 === this.internal.vFS && (this.internal.vFS = {}),
                !0
            };
            t.existsFileInVFS = function(t) {
                return e.call(this),
                void 0 !== this.internal.vFS[t]
            }
            ,
            t.addFileToVFS = function(t, r) {
                return e.call(this),
                this.internal.vFS[t] = r,
                this
            }
            ,
            t.getFileFromVFS = function(t) {
                return e.call(this),
                void 0 !== this.internal.vFS[t] ? this.internal.vFS[t] : null
            }
        }(Ft.API),
        function(t) {
            t.__bidiEngine__ = t.prototype.__bidiEngine__ = function(t) {
                var r, n, i, a, o, s, l, u = e, c = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], h = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], f = {
                    L: 0,
                    R: 1,
                    EN: 2,
                    AN: 3,
                    N: 4,
                    B: 5,
                    S: 6
                }, d = {
                    0: 0,
                    5: 1,
                    6: 2,
                    7: 3,
                    32: 4,
                    251: 5,
                    254: 6,
                    255: 7
                }, p = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"], g = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), m = !1, v = 0;
                this.__bidiEngine__ = {};
                var b = function(t) {
                    var e = t.charCodeAt()
                      , r = e >> 8
                      , n = d[r];
                    return void 0 !== n ? u[256 * n + (255 & e)] : 252 === r || 253 === r ? "AL" : g.test(r) ? "L" : 8 === r ? "R" : "N"
                }
                  , y = function(t) {
                    for (var e, r = 0; r < t.length; r++) {
                        if ("L" === (e = b(t.charAt(r))))
                            return !1;
                        if ("R" === e)
                            return !0
                    }
                    return !1
                }
                  , w = function(t, e, o, s) {
                    var l, u, c, h, f = e[s];
                    switch (f) {
                    case "L":
                    case "R":
                    case "LRE":
                    case "RLE":
                    case "LRO":
                    case "RLO":
                    case "PDF":
                        m = !1;
                        break;
                    case "N":
                    case "AN":
                        break;
                    case "EN":
                        m && (f = "AN");
                        break;
                    case "AL":
                        m = !0,
                        f = "R";
                        break;
                    case "WS":
                    case "BN":
                        f = "N";
                        break;
                    case "CS":
                        s < 1 || s + 1 >= e.length || "EN" !== (l = o[s - 1]) && "AN" !== l || "EN" !== (u = e[s + 1]) && "AN" !== u ? f = "N" : m && (u = "AN"),
                        f = u === l ? u : "N";
                        break;
                    case "ES":
                        f = "EN" === (l = s > 0 ? o[s - 1] : "B") && s + 1 < e.length && "EN" === e[s + 1] ? "EN" : "N";
                        break;
                    case "ET":
                        if (s > 0 && "EN" === o[s - 1]) {
                            f = "EN";
                            break
                        }
                        if (m) {
                            f = "N";
                            break
                        }
                        for (c = s + 1,
                        h = e.length; c < h && "ET" === e[c]; )
                            c++;
                        f = c < h && "EN" === e[c] ? "EN" : "N";
                        break;
                    case "NSM":
                        if (i && !a) {
                            for (h = e.length,
                            c = s + 1; c < h && "NSM" === e[c]; )
                                c++;
                            if (c < h) {
                                var d = t[s]
                                  , p = d >= 1425 && d <= 2303 || 64286 === d;
                                if (l = e[c],
                                p && ("R" === l || "AL" === l)) {
                                    f = "R";
                                    break
                                }
                            }
                        }
                        f = s < 1 || "B" === (l = e[s - 1]) ? "N" : o[s - 1];
                        break;
                    case "B":
                        m = !1,
                        r = !0,
                        f = v;
                        break;
                    case "S":
                        n = !0,
                        f = "N"
                    }
                    return f
                }
                  , x = function(t, e, r) {
                    var n = t.split("");
                    return r && _(n, r, {
                        hiLevel: v
                    }),
                    n.reverse(),
                    e && e.reverse(),
                    n.join("")
                }
                  , _ = function(t, e, i) {
                    var a, o, s, l, u, d = -1, p = t.length, g = 0, y = [], x = v ? h : c, _ = [];
                    for (m = !1,
                    r = !1,
                    n = !1,
                    o = 0; o < p; o++)
                        _[o] = b(t[o]);
                    for (s = 0; s < p; s++) {
                        if (u = g,
                        y[s] = w(t, _, y, s),
                        a = 240 & (g = x[u][f[y[s]]]),
                        g &= 15,
                        e[s] = l = x[g][5],
                        a > 0)
                            if (16 === a) {
                                for (o = d; o < s; o++)
                                    e[o] = 1;
                                d = -1
                            } else
                                d = -1;
                        if (x[g][6])
                            -1 === d && (d = s);
                        else if (d > -1) {
                            for (o = d; o < s; o++)
                                e[o] = l;
                            d = -1
                        }
                        "B" === _[s] && (e[s] = 0),
                        i.hiLevel |= l
                    }
                    n && function(t, e, r) {
                        for (var n = 0; n < r; n++)
                            if ("S" === t[n]) {
                                e[n] = v;
                                for (var i = n - 1; i >= 0 && "WS" === t[i]; i--)
                                    e[i] = v
                            }
                    }(_, e, p)
                }
                  , N = function(t, e, n, i, a) {
                    if (!(a.hiLevel < t)) {
                        if (1 === t && 1 === v && !r)
                            return e.reverse(),
                            void (n && n.reverse());
                        for (var o, s, l, u, c = e.length, h = 0; h < c; ) {
                            if (i[h] >= t) {
                                for (l = h + 1; l < c && i[l] >= t; )
                                    l++;
                                for (u = h,
                                s = l - 1; u < s; u++,
                                s--)
                                    o = e[u],
                                    e[u] = e[s],
                                    e[s] = o,
                                    n && (o = n[u],
                                    n[u] = n[s],
                                    n[s] = o);
                                h = l
                            }
                            h++
                        }
                    }
                }
                  , A = function(t, e, r) {
                    var n = t.split("")
                      , i = {
                        hiLevel: v
                    };
                    return r || (r = []),
                    _(n, r, i),
                    function(t, e, r) {
                        if (0 !== r.hiLevel && l)
                            for (var n, i = 0; i < t.length; i++)
                                1 === e[i] && (n = p.indexOf(t[i])) >= 0 && (t[i] = p[n + 1])
                    }(n, r, i),
                    N(2, n, e, r, i),
                    N(1, n, e, r, i),
                    n.join("")
                };
                return this.__bidiEngine__.doBidiReorder = function(t, e, r) {
                    if (function(t, e) {
                        if (e)
                            for (var r = 0; r < t.length; r++)
                                e[r] = r;
                        void 0 === a && (a = y(t)),
                        void 0 === s && (s = y(t))
                    }(t, e),
                    i || !o || s)
                        if (i && o && a ^ s)
                            v = a ? 1 : 0,
                            t = x(t, e, r);
                        else if (!i && o && s)
                            v = a ? 1 : 0,
                            t = A(t, e, r),
                            t = x(t, e);
                        else if (!i || a || o || s) {
                            if (i && !o && a ^ s)
                                t = x(t, e),
                                a ? (v = 0,
                                t = A(t, e, r)) : (v = 1,
                                t = A(t, e, r),
                                t = x(t, e));
                            else if (i && a && !o && s)
                                v = 1,
                                t = A(t, e, r),
                                t = x(t, e);
                            else if (!i && !o && a ^ s) {
                                var n = l;
                                a ? (v = 1,
                                t = A(t, e, r),
                                v = 0,
                                l = !1,
                                t = A(t, e, r),
                                l = n) : (v = 0,
                                t = A(t, e, r),
                                t = x(t, e),
                                v = 1,
                                l = !1,
                                t = A(t, e, r),
                                l = n,
                                t = x(t, e))
                            }
                        } else
                            v = 0,
                            t = A(t, e, r);
                    else
                        v = a ? 1 : 0,
                        t = A(t, e, r);
                    return t
                }
                ,
                this.__bidiEngine__.setOptions = function(t) {
                    t && (i = t.isInputVisual,
                    o = t.isOutputVisual,
                    a = t.isInputRtl,
                    s = t.isOutputRtl,
                    l = t.isSymmetricSwapping)
                }
                ,
                this.__bidiEngine__.setOptions(t),
                this.__bidiEngine__
            }
            ;
            var e = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]
              , r = new t.__bidiEngine__({
                isInputVisual: !0
            });
            t.API.events.push(["postProcessText", function(t) {
                var e = t.text
                  , n = (t.x,
                t.y,
                t.options || {})
                  , i = (t.mutex,
                n.lang,
                []);
                if (n.isInputVisual = "boolean" != typeof n.isInputVisual || n.isInputVisual,
                r.setOptions(n),
                "[object Array]" === Object.prototype.toString.call(e)) {
                    var a = 0;
                    for (i = [],
                    a = 0; a < e.length; a += 1)
                        "[object Array]" === Object.prototype.toString.call(e[a]) ? i.push([r.doBidiReorder(e[a][0]), e[a][1], e[a][2]]) : i.push([r.doBidiReorder(e[a])]);
                    t.text = i
                } else
                    t.text = r.doBidiReorder(e);
                r.setOptions({
                    isInputVisual: !0
                })
            }
            ])
        }(Ft),
        Ft.API.TTFFont = function() {
            function t(t) {
                var e;
                if (this.rawData = t,
                e = this.contents = new Xe(t),
                this.contents.pos = 4,
                "ttcf" === e.readString(4))
                    throw new Error("TTCF not supported.");
                e.pos = 0,
                this.parse(),
                this.subset = new mr(this),
                this.registerTTF()
            }
            return t.open = function(e) {
                return new t(e)
            }
            ,
            t.prototype.parse = function() {
                return this.directory = new Ze(this.contents),
                this.head = new er(this),
                this.name = new lr(this),
                this.cmap = new nr(this),
                this.toUnicode = {},
                this.hhea = new ir(this),
                this.maxp = new ur(this),
                this.hmtx = new cr(this),
                this.post = new or(this),
                this.os2 = new ar(this),
                this.loca = new gr(this),
                this.glyf = new fr(this),
                this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender,
                this.decender = this.os2.exists && this.os2.decender || this.hhea.decender,
                this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap,
                this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax]
            }
            ,
            t.prototype.registerTTF = function() {
                var t, e, r, n, i;
                if (this.scaleFactor = 1e3 / this.head.unitsPerEm,
                this.bbox = function() {
                    var e, r, n, i;
                    for (i = [],
                    e = 0,
                    r = (n = this.bbox).length; e < r; e++)
                        t = n[e],
                        i.push(Math.round(t * this.scaleFactor));
                    return i
                }
                .call(this),
                this.stemV = 0,
                this.post.exists ? (r = 255 & (n = this.post.italic_angle),
                0 != (32768 & (e = n >> 16)) && (e = -(1 + (65535 ^ e))),
                this.italicAngle = +(e + "." + r)) : this.italicAngle = 0,
                this.ascender = Math.round(this.ascender * this.scaleFactor),
                this.decender = Math.round(this.decender * this.scaleFactor),
                this.lineGap = Math.round(this.lineGap * this.scaleFactor),
                this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender,
                this.xHeight = this.os2.exists && this.os2.xHeight || 0,
                this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8,
                this.isSerif = 1 === (i = this.familyClass) || 2 === i || 3 === i || 4 === i || 5 === i || 7 === i,
                this.isScript = 10 === this.familyClass,
                this.flags = 0,
                this.post.isFixedPitch && (this.flags |= 1),
                this.isSerif && (this.flags |= 2),
                this.isScript && (this.flags |= 8),
                0 !== this.italicAngle && (this.flags |= 64),
                this.flags |= 32,
                !this.cmap.unicode)
                    throw new Error("No unicode cmap for font")
            }
            ,
            t.prototype.characterToGlyph = function(t) {
                var e;
                return (null != (e = this.cmap.unicode) ? e.codeMap[t] : void 0) || 0
            }
            ,
            t.prototype.widthOfGlyph = function(t) {
                var e;
                return e = 1e3 / this.head.unitsPerEm,
                this.hmtx.forGlyph(t).advance * e
            }
            ,
            t.prototype.widthOfString = function(t, e, r) {
                var n, i, a, o;
                for (a = 0,
                i = 0,
                o = (t = "" + t).length; 0 <= o ? i < o : i > o; i = 0 <= o ? ++i : --i)
                    n = t.charCodeAt(i),
                    a += this.widthOfGlyph(this.characterToGlyph(n)) + r * (1e3 / e) || 0;
                return a * (e / 1e3)
            }
            ,
            t.prototype.lineHeight = function(t, e) {
                var r;
                return null == e && (e = !1),
                r = e ? this.lineGap : 0,
                (this.ascender + r - this.decender) / 1e3 * t
            }
            ,
            t
        }();
        var Ke, Xe = function() {
            function t(t) {
                this.data = null != t ? t : [],
                this.pos = 0,
                this.length = this.data.length
            }
            return t.prototype.readByte = function() {
                return this.data[this.pos++]
            }
            ,
            t.prototype.writeByte = function(t) {
                return this.data[this.pos++] = t
            }
            ,
            t.prototype.readUInt32 = function() {
                return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte()
            }
            ,
            t.prototype.writeUInt32 = function(t) {
                return this.writeByte(t >>> 24 & 255),
                this.writeByte(t >> 16 & 255),
                this.writeByte(t >> 8 & 255),
                this.writeByte(255 & t)
            }
            ,
            t.prototype.readInt32 = function() {
                var t;
                return (t = this.readUInt32()) >= 2147483648 ? t - 4294967296 : t
            }
            ,
            t.prototype.writeInt32 = function(t) {
                return t < 0 && (t += 4294967296),
                this.writeUInt32(t)
            }
            ,
            t.prototype.readUInt16 = function() {
                return this.readByte() << 8 | this.readByte()
            }
            ,
            t.prototype.writeUInt16 = function(t) {
                return this.writeByte(t >> 8 & 255),
                this.writeByte(255 & t)
            }
            ,
            t.prototype.readInt16 = function() {
                var t;
                return (t = this.readUInt16()) >= 32768 ? t - 65536 : t
            }
            ,
            t.prototype.writeInt16 = function(t) {
                return t < 0 && (t += 65536),
                this.writeUInt16(t)
            }
            ,
            t.prototype.readString = function(t) {
                var e, r;
                for (r = [],
                e = 0; 0 <= t ? e < t : e > t; e = 0 <= t ? ++e : --e)
                    r[e] = String.fromCharCode(this.readByte());
                return r.join("")
            }
            ,
            t.prototype.writeString = function(t) {
                var e, r, n;
                for (n = [],
                e = 0,
                r = t.length; 0 <= r ? e < r : e > r; e = 0 <= r ? ++e : --e)
                    n.push(this.writeByte(t.charCodeAt(e)));
                return n
            }
            ,
            t.prototype.readShort = function() {
                return this.readInt16()
            }
            ,
            t.prototype.writeShort = function(t) {
                return this.writeInt16(t)
            }
            ,
            t.prototype.readLongLong = function() {
                var t, e, r, n, i, a, o, s;
                return t = this.readByte(),
                e = this.readByte(),
                r = this.readByte(),
                n = this.readByte(),
                i = this.readByte(),
                a = this.readByte(),
                o = this.readByte(),
                s = this.readByte(),
                128 & t ? -1 * (72057594037927940 * (255 ^ t) + 281474976710656 * (255 ^ e) + 1099511627776 * (255 ^ r) + 4294967296 * (255 ^ n) + 16777216 * (255 ^ i) + 65536 * (255 ^ a) + 256 * (255 ^ o) + (255 ^ s) + 1) : 72057594037927940 * t + 281474976710656 * e + 1099511627776 * r + 4294967296 * n + 16777216 * i + 65536 * a + 256 * o + s
            }
            ,
            t.prototype.writeLongLong = function(t) {
                var e, r;
                return e = Math.floor(t / 4294967296),
                r = 4294967295 & t,
                this.writeByte(e >> 24 & 255),
                this.writeByte(e >> 16 & 255),
                this.writeByte(e >> 8 & 255),
                this.writeByte(255 & e),
                this.writeByte(r >> 24 & 255),
                this.writeByte(r >> 16 & 255),
                this.writeByte(r >> 8 & 255),
                this.writeByte(255 & r)
            }
            ,
            t.prototype.readInt = function() {
                return this.readInt32()
            }
            ,
            t.prototype.writeInt = function(t) {
                return this.writeInt32(t)
            }
            ,
            t.prototype.read = function(t) {
                var e, r;
                for (e = [],
                r = 0; 0 <= t ? r < t : r > t; r = 0 <= t ? ++r : --r)
                    e.push(this.readByte());
                return e
            }
            ,
            t.prototype.write = function(t) {
                var e, r, n, i;
                for (i = [],
                r = 0,
                n = t.length; r < n; r++)
                    e = t[r],
                    i.push(this.writeByte(e));
                return i
            }
            ,
            t
        }(), Ze = function() {
            var t;
            function e(t) {
                var e, r, n;
                for (this.scalarType = t.readInt(),
                this.tableCount = t.readShort(),
                this.searchRange = t.readShort(),
                this.entrySelector = t.readShort(),
                this.rangeShift = t.readShort(),
                this.tables = {},
                r = 0,
                n = this.tableCount; 0 <= n ? r < n : r > n; r = 0 <= n ? ++r : --r)
                    e = {
                        tag: t.readString(4),
                        checksum: t.readInt(),
                        offset: t.readInt(),
                        length: t.readInt()
                    },
                    this.tables[e.tag] = e
            }
            return e.prototype.encode = function(e) {
                var r, n, i, a, o, s, l, u, c, h, f, d, p;
                for (p in f = Object.keys(e).length,
                s = Math.log(2),
                c = 16 * Math.floor(Math.log(f) / s),
                a = Math.floor(c / s),
                u = 16 * f - c,
                (n = new Xe).writeInt(this.scalarType),
                n.writeShort(f),
                n.writeShort(c),
                n.writeShort(a),
                n.writeShort(u),
                i = 16 * f,
                l = n.pos + i,
                o = null,
                d = [],
                e)
                    for (h = e[p],
                    n.writeString(p),
                    n.writeInt(t(h)),
                    n.writeInt(l),
                    n.writeInt(h.length),
                    d = d.concat(h),
                    "head" === p && (o = l),
                    l += h.length; l % 4; )
                        d.push(0),
                        l++;
                return n.write(d),
                r = 2981146554 - t(n.data),
                n.pos = o + 8,
                n.writeUInt32(r),
                n.data
            }
            ,
            t = function(t) {
                var e, r, n, i;
                for (t = hr.call(t); t.length % 4; )
                    t.push(0);
                for (n = new Xe(t),
                r = 0,
                e = 0,
                i = t.length; e < i; e = e += 4)
                    r += n.readUInt32();
                return 4294967295 & r
            }
            ,
            e
        }(), Qe = {}.hasOwnProperty, tr = function(t, e) {
            for (var r in e)
                Qe.call(e, r) && (t[r] = e[r]);
            function n() {
                this.constructor = t
            }
            return n.prototype = e.prototype,
            t.prototype = new n,
            t.__super__ = e.prototype,
            t
        };
        Ke = function() {
            function t(t) {
                var e;
                this.file = t,
                e = this.file.directory.tables[this.tag],
                this.exists = !!e,
                e && (this.offset = e.offset,
                this.length = e.length,
                this.parse(this.file.contents))
            }
            return t.prototype.parse = function() {}
            ,
            t.prototype.encode = function() {}
            ,
            t.prototype.raw = function() {
                return this.exists ? (this.file.contents.pos = this.offset,
                this.file.contents.read(this.length)) : null
            }
            ,
            t
        }();
        var er = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return tr(e, Ke),
            e.prototype.tag = "head",
            e.prototype.parse = function(t) {
                return t.pos = this.offset,
                this.version = t.readInt(),
                this.revision = t.readInt(),
                this.checkSumAdjustment = t.readInt(),
                this.magicNumber = t.readInt(),
                this.flags = t.readShort(),
                this.unitsPerEm = t.readShort(),
                this.created = t.readLongLong(),
                this.modified = t.readLongLong(),
                this.xMin = t.readShort(),
                this.yMin = t.readShort(),
                this.xMax = t.readShort(),
                this.yMax = t.readShort(),
                this.macStyle = t.readShort(),
                this.lowestRecPPEM = t.readShort(),
                this.fontDirectionHint = t.readShort(),
                this.indexToLocFormat = t.readShort(),
                this.glyphDataFormat = t.readShort()
            }
            ,
            e.prototype.encode = function(t) {
                var e;
                return (e = new Xe).writeInt(this.version),
                e.writeInt(this.revision),
                e.writeInt(this.checkSumAdjustment),
                e.writeInt(this.magicNumber),
                e.writeShort(this.flags),
                e.writeShort(this.unitsPerEm),
                e.writeLongLong(this.created),
                e.writeLongLong(this.modified),
                e.writeShort(this.xMin),
                e.writeShort(this.yMin),
                e.writeShort(this.xMax),
                e.writeShort(this.yMax),
                e.writeShort(this.macStyle),
                e.writeShort(this.lowestRecPPEM),
                e.writeShort(this.fontDirectionHint),
                e.writeShort(t),
                e.writeShort(this.glyphDataFormat),
                e.data
            }
            ,
            e
        }()
          , rr = function() {
            function t(t, e) {
                var r, n, i, a, o, s, l, u, c, h, f, d, p, g, m, v, b;
                switch (this.platformID = t.readUInt16(),
                this.encodingID = t.readShort(),
                this.offset = e + t.readInt(),
                c = t.pos,
                t.pos = this.offset,
                this.format = t.readUInt16(),
                this.length = t.readUInt16(),
                this.language = t.readUInt16(),
                this.isUnicode = 3 === this.platformID && 1 === this.encodingID && 4 === this.format || 0 === this.platformID && 4 === this.format,
                this.codeMap = {},
                this.format) {
                case 0:
                    for (s = 0; s < 256; ++s)
                        this.codeMap[s] = t.readByte();
                    break;
                case 4:
                    for (f = t.readUInt16(),
                    h = f / 2,
                    t.pos += 6,
                    i = function() {
                        var e, r;
                        for (r = [],
                        s = e = 0; 0 <= h ? e < h : e > h; s = 0 <= h ? ++e : --e)
                            r.push(t.readUInt16());
                        return r
                    }(),
                    t.pos += 2,
                    p = function() {
                        var e, r;
                        for (r = [],
                        s = e = 0; 0 <= h ? e < h : e > h; s = 0 <= h ? ++e : --e)
                            r.push(t.readUInt16());
                        return r
                    }(),
                    l = function() {
                        var e, r;
                        for (r = [],
                        s = e = 0; 0 <= h ? e < h : e > h; s = 0 <= h ? ++e : --e)
                            r.push(t.readUInt16());
                        return r
                    }(),
                    u = function() {
                        var e, r;
                        for (r = [],
                        s = e = 0; 0 <= h ? e < h : e > h; s = 0 <= h ? ++e : --e)
                            r.push(t.readUInt16());
                        return r
                    }(),
                    n = (this.length - t.pos + this.offset) / 2,
                    o = function() {
                        var e, r;
                        for (r = [],
                        s = e = 0; 0 <= n ? e < n : e > n; s = 0 <= n ? ++e : --e)
                            r.push(t.readUInt16());
                        return r
                    }(),
                    s = m = 0,
                    b = i.length; m < b; s = ++m)
                        for (g = i[s],
                        r = v = d = p[s]; d <= g ? v <= g : v >= g; r = d <= g ? ++v : --v)
                            0 === u[s] ? a = r + l[s] : 0 !== (a = o[u[s] / 2 + (r - d) - (h - s)] || 0) && (a += l[s]),
                            this.codeMap[r] = 65535 & a
                }
                t.pos = c
            }
            return t.encode = function(t, e) {
                var r, n, i, a, o, s, l, u, c, h, f, d, p, g, m, v, b, y, w, x, _, N, A, L, S, P, C, k, F, I, j, O, D, T, M, B, E, R, q, z, U, W, H, V, G, $;
                switch (k = new Xe,
                a = Object.keys(t).sort((function(t, e) {
                    return t - e
                }
                )),
                e) {
                case "macroman":
                    for (p = 0,
                    g = function() {
                        var t = [];
                        for (d = 0; d < 256; ++d)
                            t.push(0);
                        return t
                    }(),
                    v = {
                        0: 0
                    },
                    i = {},
                    F = 0,
                    D = a.length; F < D; F++)
                        null == v[H = t[n = a[F]]] && (v[H] = ++p),
                        i[n] = {
                            old: t[n],
                            new: v[t[n]]
                        },
                        g[n] = v[t[n]];
                    return k.writeUInt16(1),
                    k.writeUInt16(0),
                    k.writeUInt32(12),
                    k.writeUInt16(0),
                    k.writeUInt16(262),
                    k.writeUInt16(0),
                    k.write(g),
                    {
                        charMap: i,
                        subtable: k.data,
                        maxGlyphID: p + 1
                    };
                case "unicode":
                    for (P = [],
                    c = [],
                    b = 0,
                    v = {},
                    r = {},
                    m = l = null,
                    I = 0,
                    T = a.length; I < T; I++)
                        null == v[w = t[n = a[I]]] && (v[w] = ++b),
                        r[n] = {
                            old: w,
                            new: v[w]
                        },
                        o = v[w] - n,
                        null != m && o === l || (m && c.push(m),
                        P.push(n),
                        l = o),
                        m = n;
                    for (m && c.push(m),
                    c.push(65535),
                    P.push(65535),
                    L = 2 * (A = P.length),
                    N = 2 * Math.pow(Math.log(A) / Math.LN2, 2),
                    h = Math.log(N / 2) / Math.LN2,
                    _ = 2 * A - N,
                    s = [],
                    x = [],
                    f = [],
                    d = j = 0,
                    M = P.length; j < M; d = ++j) {
                        if (S = P[d],
                        u = c[d],
                        65535 === S) {
                            s.push(0),
                            x.push(0);
                            break
                        }
                        if (S - (C = r[S].new) >= 32768)
                            for (s.push(0),
                            x.push(2 * (f.length + A - d)),
                            n = O = S; S <= u ? O <= u : O >= u; n = S <= u ? ++O : --O)
                                f.push(r[n].new);
                        else
                            s.push(C - S),
                            x.push(0)
                    }
                    for (k.writeUInt16(3),
                    k.writeUInt16(1),
                    k.writeUInt32(12),
                    k.writeUInt16(4),
                    k.writeUInt16(16 + 8 * A + 2 * f.length),
                    k.writeUInt16(0),
                    k.writeUInt16(L),
                    k.writeUInt16(N),
                    k.writeUInt16(h),
                    k.writeUInt16(_),
                    U = 0,
                    B = c.length; U < B; U++)
                        n = c[U],
                        k.writeUInt16(n);
                    for (k.writeUInt16(0),
                    W = 0,
                    E = P.length; W < E; W++)
                        n = P[W],
                        k.writeUInt16(n);
                    for (V = 0,
                    R = s.length; V < R; V++)
                        o = s[V],
                        k.writeUInt16(o);
                    for (G = 0,
                    q = x.length; G < q; G++)
                        y = x[G],
                        k.writeUInt16(y);
                    for ($ = 0,
                    z = f.length; $ < z; $++)
                        p = f[$],
                        k.writeUInt16(p);
                    return {
                        charMap: r,
                        subtable: k.data,
                        maxGlyphID: b + 1
                    }
                }
            }
            ,
            t
        }()
          , nr = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return tr(e, Ke),
            e.prototype.tag = "cmap",
            e.prototype.parse = function(t) {
                var e, r, n;
                for (t.pos = this.offset,
                this.version = t.readUInt16(),
                n = t.readUInt16(),
                this.tables = [],
                this.unicode = null,
                r = 0; 0 <= n ? r < n : r > n; r = 0 <= n ? ++r : --r)
                    e = new rr(t,this.offset),
                    this.tables.push(e),
                    e.isUnicode && null == this.unicode && (this.unicode = e);
                return !0
            }
            ,
            e.encode = function(t, e) {
                var r, n;
                return null == e && (e = "macroman"),
                r = rr.encode(t, e),
                (n = new Xe).writeUInt16(0),
                n.writeUInt16(1),
                r.table = n.data.concat(r.subtable),
                r
            }
            ,
            e
        }()
          , ir = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return tr(e, Ke),
            e.prototype.tag = "hhea",
            e.prototype.parse = function(t) {
                return t.pos = this.offset,
                this.version = t.readInt(),
                this.ascender = t.readShort(),
                this.decender = t.readShort(),
                this.lineGap = t.readShort(),
                this.advanceWidthMax = t.readShort(),
                this.minLeftSideBearing = t.readShort(),
                this.minRightSideBearing = t.readShort(),
                this.xMaxExtent = t.readShort(),
                this.caretSlopeRise = t.readShort(),
                this.caretSlopeRun = t.readShort(),
                this.caretOffset = t.readShort(),
                t.pos += 8,
                this.metricDataFormat = t.readShort(),
                this.numberOfMetrics = t.readUInt16()
            }
            ,
            e
        }()
          , ar = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return tr(e, Ke),
            e.prototype.tag = "OS/2",
            e.prototype.parse = function(t) {
                if (t.pos = this.offset,
                this.version = t.readUInt16(),
                this.averageCharWidth = t.readShort(),
                this.weightClass = t.readUInt16(),
                this.widthClass = t.readUInt16(),
                this.type = t.readShort(),
                this.ySubscriptXSize = t.readShort(),
                this.ySubscriptYSize = t.readShort(),
                this.ySubscriptXOffset = t.readShort(),
                this.ySubscriptYOffset = t.readShort(),
                this.ySuperscriptXSize = t.readShort(),
                this.ySuperscriptYSize = t.readShort(),
                this.ySuperscriptXOffset = t.readShort(),
                this.ySuperscriptYOffset = t.readShort(),
                this.yStrikeoutSize = t.readShort(),
                this.yStrikeoutPosition = t.readShort(),
                this.familyClass = t.readShort(),
                this.panose = function() {
                    var e, r;
                    for (r = [],
                    e = 0; e < 10; ++e)
                        r.push(t.readByte());
                    return r
                }(),
                this.charRange = function() {
                    var e, r;
                    for (r = [],
                    e = 0; e < 4; ++e)
                        r.push(t.readInt());
                    return r
                }(),
                this.vendorID = t.readString(4),
                this.selection = t.readShort(),
                this.firstCharIndex = t.readShort(),
                this.lastCharIndex = t.readShort(),
                this.version > 0 && (this.ascent = t.readShort(),
                this.descent = t.readShort(),
                this.lineGap = t.readShort(),
                this.winAscent = t.readShort(),
                this.winDescent = t.readShort(),
                this.codePageRange = function() {
                    var e, r;
                    for (r = [],
                    e = 0; e < 2; e = ++e)
                        r.push(t.readInt());
                    return r
                }(),
                this.version > 1))
                    return this.xHeight = t.readShort(),
                    this.capHeight = t.readShort(),
                    this.defaultChar = t.readShort(),
                    this.breakChar = t.readShort(),
                    this.maxContext = t.readShort()
            }
            ,
            e
        }()
          , or = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return tr(e, Ke),
            e.prototype.tag = "post",
            e.prototype.parse = function(t) {
                var e, r, n;
                switch (t.pos = this.offset,
                this.format = t.readInt(),
                this.italicAngle = t.readInt(),
                this.underlinePosition = t.readShort(),
                this.underlineThickness = t.readShort(),
                this.isFixedPitch = t.readInt(),
                this.minMemType42 = t.readInt(),
                this.maxMemType42 = t.readInt(),
                this.minMemType1 = t.readInt(),
                this.maxMemType1 = t.readInt(),
                this.format) {
                case 65536:
                case 196608:
                    break;
                case 131072:
                    var i;
                    for (r = t.readUInt16(),
                    this.glyphNameIndex = [],
                    i = 0; 0 <= r ? i < r : i > r; i = 0 <= r ? ++i : --i)
                        this.glyphNameIndex.push(t.readUInt16());
                    for (this.names = [],
                    n = []; t.pos < this.offset + this.length; )
                        e = t.readByte(),
                        n.push(this.names.push(t.readString(e)));
                    return n;
                case 151552:
                    return r = t.readUInt16(),
                    this.offsets = t.read(r);
                case 262144:
                    return this.map = function() {
                        var e, r, n;
                        for (n = [],
                        i = e = 0,
                        r = this.file.maxp.numGlyphs; 0 <= r ? e < r : e > r; i = 0 <= r ? ++e : --e)
                            n.push(t.readUInt32());
                        return n
                    }
                    .call(this)
                }
            }
            ,
            e
        }()
          , sr = function(t, e) {
            this.raw = t,
            this.length = t.length,
            this.platformID = e.platformID,
            this.encodingID = e.encodingID,
            this.languageID = e.languageID
        }
          , lr = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return tr(e, Ke),
            e.prototype.tag = "name",
            e.prototype.parse = function(t) {
                var e, r, n, i, a, o, s, l, u, c, h;
                for (t.pos = this.offset,
                t.readShort(),
                e = t.readShort(),
                o = t.readShort(),
                r = [],
                i = 0; 0 <= e ? i < e : i > e; i = 0 <= e ? ++i : --i)
                    r.push({
                        platformID: t.readShort(),
                        encodingID: t.readShort(),
                        languageID: t.readShort(),
                        nameID: t.readShort(),
                        length: t.readShort(),
                        offset: this.offset + o + t.readShort()
                    });
                for (s = {},
                i = u = 0,
                c = r.length; u < c; i = ++u)
                    n = r[i],
                    t.pos = n.offset,
                    l = t.readString(n.length),
                    a = new sr(l,n),
                    null == s[h = n.nameID] && (s[h] = []),
                    s[n.nameID].push(a);
                this.strings = s,
                this.copyright = s[0],
                this.fontFamily = s[1],
                this.fontSubfamily = s[2],
                this.uniqueSubfamily = s[3],
                this.fontName = s[4],
                this.version = s[5];
                try {
                    this.postscriptName = s[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "")
                } catch (t) {
                    this.postscriptName = s[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "")
                }
                return this.trademark = s[7],
                this.manufacturer = s[8],
                this.designer = s[9],
                this.description = s[10],
                this.vendorUrl = s[11],
                this.designerUrl = s[12],
                this.license = s[13],
                this.licenseUrl = s[14],
                this.preferredFamily = s[15],
                this.preferredSubfamily = s[17],
                this.compatibleFull = s[18],
                this.sampleText = s[19]
            }
            ,
            e
        }()
          , ur = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return tr(e, Ke),
            e.prototype.tag = "maxp",
            e.prototype.parse = function(t) {
                return t.pos = this.offset,
                this.version = t.readInt(),
                this.numGlyphs = t.readUInt16(),
                this.maxPoints = t.readUInt16(),
                this.maxContours = t.readUInt16(),
                this.maxCompositePoints = t.readUInt16(),
                this.maxComponentContours = t.readUInt16(),
                this.maxZones = t.readUInt16(),
                this.maxTwilightPoints = t.readUInt16(),
                this.maxStorage = t.readUInt16(),
                this.maxFunctionDefs = t.readUInt16(),
                this.maxInstructionDefs = t.readUInt16(),
                this.maxStackElements = t.readUInt16(),
                this.maxSizeOfInstructions = t.readUInt16(),
                this.maxComponentElements = t.readUInt16(),
                this.maxComponentDepth = t.readUInt16()
            }
            ,
            e
        }()
          , cr = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return tr(e, Ke),
            e.prototype.tag = "hmtx",
            e.prototype.parse = function(t) {
                var e, r, n, i, a, o, s;
                for (t.pos = this.offset,
                this.metrics = [],
                e = 0,
                o = this.file.hhea.numberOfMetrics; 0 <= o ? e < o : e > o; e = 0 <= o ? ++e : --e)
                    this.metrics.push({
                        advance: t.readUInt16(),
                        lsb: t.readInt16()
                    });
                for (n = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics,
                this.leftSideBearings = function() {
                    var r, i;
                    for (i = [],
                    e = r = 0; 0 <= n ? r < n : r > n; e = 0 <= n ? ++r : --r)
                        i.push(t.readInt16());
                    return i
                }(),
                this.widths = function() {
                    var t, e, r, n;
                    for (n = [],
                    t = 0,
                    e = (r = this.metrics).length; t < e; t++)
                        i = r[t],
                        n.push(i.advance);
                    return n
                }
                .call(this),
                r = this.widths[this.widths.length - 1],
                s = [],
                e = a = 0; 0 <= n ? a < n : a > n; e = 0 <= n ? ++a : --a)
                    s.push(this.widths.push(r));
                return s
            }
            ,
            e.prototype.forGlyph = function(t) {
                return t in this.metrics ? this.metrics[t] : {
                    advance: this.metrics[this.metrics.length - 1].advance,
                    lsb: this.leftSideBearings[t - this.metrics.length]
                }
            }
            ,
            e
        }()
          , hr = [].slice
          , fr = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return tr(e, Ke),
            e.prototype.tag = "glyf",
            e.prototype.parse = function() {
                return this.cache = {}
            }
            ,
            e.prototype.glyphFor = function(t) {
                var e, r, n, i, a, o, s, l, u, c;
                return t in this.cache ? this.cache[t] : (i = this.file.loca,
                e = this.file.contents,
                r = i.indexOf(t),
                0 === (n = i.lengthOf(t)) ? this.cache[t] = null : (e.pos = this.offset + r,
                a = (o = new Xe(e.read(n))).readShort(),
                l = o.readShort(),
                c = o.readShort(),
                s = o.readShort(),
                u = o.readShort(),
                this.cache[t] = -1 === a ? new pr(o,l,c,s,u) : new dr(o,a,l,c,s,u),
                this.cache[t]))
            }
            ,
            e.prototype.encode = function(t, e, r) {
                var n, i, a, o, s;
                for (a = [],
                i = [],
                o = 0,
                s = e.length; o < s; o++)
                    n = t[e[o]],
                    i.push(a.length),
                    n && (a = a.concat(n.encode(r)));
                return i.push(a.length),
                {
                    table: a,
                    offsets: i
                }
            }
            ,
            e
        }()
          , dr = function() {
            function t(t, e, r, n, i, a) {
                this.raw = t,
                this.numberOfContours = e,
                this.xMin = r,
                this.yMin = n,
                this.xMax = i,
                this.yMax = a,
                this.compound = !1
            }
            return t.prototype.encode = function() {
                return this.raw.data
            }
            ,
            t
        }()
          , pr = function() {
            function t(t, e, r, n, i) {
                var a, o;
                for (this.raw = t,
                this.xMin = e,
                this.yMin = r,
                this.xMax = n,
                this.yMax = i,
                this.compound = !0,
                this.glyphIDs = [],
                this.glyphOffsets = [],
                a = this.raw; o = a.readShort(),
                this.glyphOffsets.push(a.pos),
                this.glyphIDs.push(a.readUInt16()),
                32 & o; )
                    a.pos += 1 & o ? 4 : 2,
                    128 & o ? a.pos += 8 : 64 & o ? a.pos += 4 : 8 & o && (a.pos += 2)
            }
            return t.prototype.encode = function() {
                var t, e, r;
                for (e = new Xe(hr.call(this.raw.data)),
                t = 0,
                r = this.glyphIDs.length; t < r; ++t)
                    e.pos = this.glyphOffsets[t];
                return e.data
            }
            ,
            t
        }()
          , gr = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return tr(e, Ke),
            e.prototype.tag = "loca",
            e.prototype.parse = function(t) {
                var e, r;
                return t.pos = this.offset,
                e = this.file.head.indexToLocFormat,
                this.offsets = 0 === e ? function() {
                    var e, n;
                    for (n = [],
                    r = 0,
                    e = this.length; r < e; r += 2)
                        n.push(2 * t.readUInt16());
                    return n
                }
                .call(this) : function() {
                    var e, n;
                    for (n = [],
                    r = 0,
                    e = this.length; r < e; r += 4)
                        n.push(t.readUInt32());
                    return n
                }
                .call(this)
            }
            ,
            e.prototype.indexOf = function(t) {
                return this.offsets[t]
            }
            ,
            e.prototype.lengthOf = function(t) {
                return this.offsets[t + 1] - this.offsets[t]
            }
            ,
            e.prototype.encode = function(t, e) {
                for (var r = new Uint32Array(this.offsets.length), n = 0, i = 0, a = 0; a < r.length; ++a)
                    if (r[a] = n,
                    i < e.length && e[i] == a) {
                        ++i,
                        r[a] = n;
                        var o = this.offsets[a]
                          , s = this.offsets[a + 1] - o;
                        s > 0 && (n += s)
                    }
                for (var l = new Array(4 * r.length), u = 0; u < r.length; ++u)
                    l[4 * u + 3] = 255 & r[u],
                    l[4 * u + 2] = (65280 & r[u]) >> 8,
                    l[4 * u + 1] = (16711680 & r[u]) >> 16,
                    l[4 * u] = (4278190080 & r[u]) >> 24;
                return l
            }
            ,
            e
        }()
          , mr = function() {
            function t(t) {
                this.font = t,
                this.subset = {},
                this.unicodes = {},
                this.next = 33
            }
            return t.prototype.generateCmap = function() {
                var t, e, r, n, i;
                for (e in n = this.font.cmap.tables[0].codeMap,
                t = {},
                i = this.subset)
                    r = i[e],
                    t[e] = n[r];
                return t
            }
            ,
            t.prototype.glyphsFor = function(t) {
                var e, r, n, i, a, o, s;
                for (n = {},
                a = 0,
                o = t.length; a < o; a++)
                    n[i = t[a]] = this.font.glyf.glyphFor(i);
                for (i in e = [],
                n)
                    (null != (r = n[i]) ? r.compound : void 0) && e.push.apply(e, r.glyphIDs);
                if (e.length > 0)
                    for (i in s = this.glyphsFor(e))
                        r = s[i],
                        n[i] = r;
                return n
            }
            ,
            t.prototype.encode = function(t, e) {
                var r, n, i, a, o, s, l, u, c, h, f, d, p, g, m;
                for (n in r = nr.encode(this.generateCmap(), "unicode"),
                a = this.glyphsFor(t),
                f = {
                    0: 0
                },
                m = r.charMap)
                    f[(s = m[n]).old] = s.new;
                for (d in h = r.maxGlyphID,
                a)
                    d in f || (f[d] = h++);
                return u = function(t) {
                    var e, r;
                    for (e in r = {},
                    t)
                        r[t[e]] = e;
                    return r
                }(f),
                c = Object.keys(u).sort((function(t, e) {
                    return t - e
                }
                )),
                p = function() {
                    var t, e, r;
                    for (r = [],
                    t = 0,
                    e = c.length; t < e; t++)
                        o = c[t],
                        r.push(u[o]);
                    return r
                }(),
                i = this.font.glyf.encode(a, p, f),
                l = this.font.loca.encode(i.offsets, p),
                g = {
                    cmap: this.font.cmap.raw(),
                    glyf: i.table,
                    loca: l,
                    hmtx: this.font.hmtx.raw(),
                    hhea: this.font.hhea.raw(),
                    maxp: this.font.maxp.raw(),
                    post: this.font.post.raw(),
                    name: this.font.name.raw(),
                    head: this.font.head.encode(e)
                },
                this.font.os2.exists && (g["OS/2"] = this.font.os2.raw()),
                this.font.directory.encode(g)
            }
            ,
            t
        }();
        Ft.API.PDFObject = function() {
            var t;
            function e() {}
            return t = function(t, e) {
                return (Array(e + 1).join("0") + t).slice(-e)
            }
            ,
            e.convert = function(r) {
                var n, i, a, o;
                if (Array.isArray(r))
                    return "[" + function() {
                        var t, i, a;
                        for (a = [],
                        t = 0,
                        i = r.length; t < i; t++)
                            n = r[t],
                            a.push(e.convert(n));
                        return a
                    }().join(" ") + "]";
                if ("string" == typeof r)
                    return "/" + r;
                if (null != r ? r.isString : void 0)
                    return "(" + r + ")";
                if (r instanceof Date)
                    return "(D:" + t(r.getUTCFullYear(), 4) + t(r.getUTCMonth(), 2) + t(r.getUTCDate(), 2) + t(r.getUTCHours(), 2) + t(r.getUTCMinutes(), 2) + t(r.getUTCSeconds(), 2) + "Z)";
                if ("[object Object]" === {}.toString.call(r)) {
                    for (i in a = ["<<"],
                    r)
                        o = r[i],
                        a.push("/" + i + " " + e.convert(o));
                    return a.push(">>"),
                    a.join("\n")
                }
                return "" + r
            }
            ,
            e
        }();
        const vr = Ft
    }
    ,
    32458: (t,e,r)=>{
        "use strict";
        r.r(e),
        r.d(e, {
            default: ()=>h
        });
        var n = r(20629)
          , i = r(74865)
          , a = r.n(i)
          , o = r(17959);
        r(18159);
        function s(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function l(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? s(Object(r), !0).forEach((function(e) {
                    u(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function u(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        const c = {
            metaInfo: {
                title: "Products"
            },
            data: function() {
                return {
                    serverParams: {
                        sort: {
                            field: "id",
                            type: "desc"
                        },
                        page: 1,
                        perPage: 10
                    },
                    selectedIds: [],
                    ImportProcessing: !1,
                    data: new FormData,
                    import_products: "",
                    search: "",
                    totalRows: "",
                    isLoading: !0,
                    spinner: !1,
                    limit: "10",
                    Filter_brand: "",
                    Filter_code: "",
                    Filter_name: "",
                    Filter_category: "",
                    categories: [],
                    brands: [],
                    products: {},
                    warehouses: []
                }
            },
            computed: l(l({}, (0,
            n.Se)(["currentUserPermissions"])), {}, {
                columns: function() {
                    return [{
                        label: this.$t("image"),
                        field: "image",
                        type: "image",
                        html: !0,
                        tdClass: "text-left",
                        thClass: "text-left"
                    }, {
                        label: this.$t("type"),
                        field: "type",
                        tdClass: "text-left",
                        thClass: "text-left"
                    }, {
                        label: this.$t("Name_product"),
                        field: "name",
                        tdClass: "text-left",
                        thClass: "text-left"
                    }, {
                        label: this.$t("Code"),
                        field: "code",
                        tdClass: "text-left",
                        thClass: "text-left"
                    }, {
                        label: this.$t("Brand"),
                        field: "brand",
                        tdClass: "text-left",
                        thClass: "text-left"
                    }, {
                        label: this.$t("Categorie"),
                        field: "category",
                        tdClass: "text-left",
                        thClass: "text-left"
                    }, {
                        label: this.$t("Cost"),
                        field: "cost",
                        html: !0,
                        tdClass: "text-left",
                        thClass: "text-left"
                    }, {
                        label: this.$t("Price"),
                        field: "price",
                        html: !0,
                        tdClass: "text-left",
                        thClass: "text-left"
                    }, {
                        label: this.$t("Unit"),
                        field: "unit",
                        tdClass: "text-left",
                        thClass: "text-left"
                    }, {
                        label: this.$t("Quantity"),
                        field: "quantity",
                        tdClass: "text-left",
                        thClass: "text-left"
                    }, {
                        label: this.$t("Action"),
                        field: "actions",
                        html: !0,
                        tdClass: "text-right",
                        thClass: "text-right",
                        sortable: !1
                    }]
                }
            }),
            methods: {
                Product_PDF: function() {
                    var t = new o.default("p","pt");
                    t.autoTable([{
                        title: "type",
                        dataKey: "type"
                    }, {
                        title: "name",
                        dataKey: "name"
                    }, {
                        title: "code",
                        dataKey: "code"
                    }, {
                        title: "category",
                        dataKey: "category"
                    }, {
                        title: "cost",
                        dataKey: "cost"
                    }, {
                        title: "price",
                        dataKey: "price"
                    }, {
                        title: "unit",
                        dataKey: "unit"
                    }, {
                        title: "quantity",
                        dataKey: "quantity"
                    }], this.products),
                    t.text("Product List", 40, 25),
                    t.save("Product_List.pdf")
                },
                Show_import_products: function() {
                    this.$bvModal.show("importProducts")
                },
                onFileSelected: function(t) {
                    this.import_products = "";
                    var e, r = t.target.files[0];
                    r.size < 1048576 ? e = !1 : this.makeToast("danger", this.$t("file_size_must_be_less_than_1_mega"), this.$t("Failed")),
                    !1 === e && (this.import_products = r)
                },
                Submit_import: function() {
                    var t = this;
                    a().start(),
                    a().set(.1);
                    var e = this;
                    e.ImportProcessing = !0,
                    e.data.append("products", e.import_products),
                    axios.post("products/import/csv", e.data).then((function(r) {
                        e.ImportProcessing = !1,
                        !0 === r.data.status ? (t.makeToast("success", t.$t("Successfully_Imported"), t.$t("Success")),
                        Fire.$emit("Event_import")) : !1 === r.data.status && t.makeToast("danger", t.$t("field_must_be_in_csv_format"), t.$t("Failed")),
                        a().done()
                    }
                    )).catch((function(r) {
                        if (e.ImportProcessing = !1,
                        a().done(),
                        r.response && 422 === r.response.status) {
                            var n = r.response.data.errors;
                            t.makeToast("danger", n, t.$t("Failed"))
                        } else
                            t.makeToast("danger", t.$t("Please_follow_the_import_instructions"), t.$t("Failed"))
                    }
                    ))
                },
                makeToast: function(t, e, r) {
                    this.$root.$bvToast.toast(e, {
                        title: r,
                        variant: t,
                        solid: !0
                    })
                },
                updateParams: function(t) {
                    this.serverParams = Object.assign({}, this.serverParams, t)
                },
                onPageChange: function(t) {
                    var e = t.currentPage;
                    this.serverParams.page !== e && (this.updateParams({
                        page: e
                    }),
                    this.Get_Products(e))
                },
                onPerPageChange: function(t) {
                    var e = t.currentPerPage;
                    this.limit !== e && (this.limit = e,
                    this.updateParams({
                        page: 1,
                        perPage: e
                    }),
                    this.Get_Products(1))
                },
                selectionChanged: function(t) {
                    var e = this
                      , r = t.selectedRows;
                    this.selectedIds = [],
                    r.forEach((function(t, r) {
                        e.selectedIds.push(t.id)
                    }
                    ))
                },
                onSortChange: function(t) {
                    var e = "";
                    e = "brand" == t[0].field ? "brand_id" : "category" == t[0].field ? "category_id" : t[0].field,
                    this.updateParams({
                        sort: {
                            type: t[0].type,
                            field: e
                        }
                    }),
                    this.Get_Products(this.serverParams.page)
                },
                onSearch: function(t) {
                    this.search = t.searchTerm,
                    this.Get_Products(this.serverParams.page)
                },
                Reset_Filter: function() {
                    this.search = "",
                    this.Filter_brand = "",
                    this.Filter_code = "",
                    this.Filter_name = "",
                    this.Filter_category = "",
                    this.Get_Products(this.serverParams.page)
                },
                setToStrings: function() {
                    null === this.Filter_category ? this.Filter_category = "" : null === this.Filter_brand && (this.Filter_brand = "")
                },
                Get_Products: function(t) {
                    var e = this;
                    a().start(),
                    a().set(.1),
                    this.setToStrings(),
                    axios.get("products?page=" + t + "&code=" + this.Filter_code + "&name=" + this.Filter_name + "&category_id=" + this.Filter_category + "&brand_id=" + this.Filter_brand + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then((function(t) {
                        e.products = t.data.products,
                        e.warehouses = t.data.warehouses,
                        e.categories = t.data.categories,
                        e.brands = t.data.brands,
                        e.totalRows = t.data.totalRows,
                        a().done(),
                        e.isLoading = !1
                    }
                    )).catch((function(t) {
                        a().done(),
                        setTimeout((function() {
                            e.isLoading = !1
                        }
                        ), 500)
                    }
                    ))
                },
                Remove_Product: function(t) {
                    var e = this;
                    this.$swal({
                        title: this.$t("Delete.Title"),
                        text: this.$t("Delete.Text"),
                        type: "warning",
                        showCancelButton: !0,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        cancelButtonText: this.$t("Delete.cancelButtonText"),
                        confirmButtonText: this.$t("Delete.confirmButtonText")
                    }).then((function(r) {
                        r.value && (a().start(),
                        a().set(.1),
                        axios.delete("products/" + t).then((function() {
                            e.$swal(e.$t("Delete.Deleted"), e.$t("Delete.ProductDeleted"), "success"),
                            Fire.$emit("Delete_Product")
                        }
                        )).catch((function() {
                            setTimeout((function() {
                                return a().done()
                            }
                            ), 500),
                            e.$swal(e.$t("Delete.Failed"), e.$t("Delete.AlreadyLinked"), "warning")
                        }
                        )))
                    }
                    ))
                },
                delete_by_selected: function() {
                    var t = this;
                    this.$swal({
                        title: this.$t("Delete.Title"),
                        text: this.$t("Delete.Text"),
                        type: "warning",
                        showCancelButton: !0,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        cancelButtonText: this.$t("Delete.cancelButtonText"),
                        confirmButtonText: this.$t("Delete.confirmButtonText")
                    }).then((function(e) {
                        e.value && (a().start(),
                        a().set(.1),
                        axios.post("products/delete/by_selection", {
                            selectedIds: t.selectedIds
                        }).then((function() {
                            t.$swal(t.$t("Delete.Deleted"), t.$t("Delete.ProductDeleted"), "success"),
                            Fire.$emit("Delete_Product")
                        }
                        )).catch((function() {
                            setTimeout((function() {
                                return a().done()
                            }
                            ), 500),
                            t.$swal(t.$t("Delete.Failed"), t.$t("Delete.Therewassomethingwronge"), "warning")
                        }
                        )))
                    }
                    ))
                }
            },
            created: function() {
                var t = this;
                this.Get_Products(1),
                Fire.$on("Delete_Product", (function() {
                    t.Get_Products(t.serverParams.page),
                    setTimeout((function() {
                        return a().done()
                    }
                    ), 500)
                }
                )),
                Fire.$on("Event_import", (function() {
                    setTimeout((function() {
                        t.Get_Products(t.serverParams.page),
                        t.$bvModal.hide("importProducts")
                    }
                    ), 500)
                }
                ))
            }
        };
        const h = (0,
        r(51900).Z)(c, (function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                staticClass: "main-content"
            }, [r("breadcumb", {
                attrs: {
                    page: t.$t("productsList"),
                    folder: t.$t("Products")
                }
            }), t._v(" "), t.isLoading ? r("div", {
                staticClass: "loading_page spinner spinner-primary mr-3"
            }) : r("div", [r("vue-good-table", {
                attrs: {
                    mode: "remote",
                    columns: t.columns,
                    totalRows: t.totalRows,
                    rows: t.products,
                    "select-options": {
                        enabled: !0,
                        clearSelectionText: ""
                    },
                    "search-options": {
                        enabled: !0,
                        placeholder: t.$t("Search_this_table")
                    },
                    "pagination-options": {
                        enabled: !0,
                        mode: "records",
                        nextLabel: "next",
                        prevLabel: "prev"
                    },
                    styleClass: "tableOne vgt-table"
                },
                on: {
                    "on-page-change": t.onPageChange,
                    "on-per-page-change": t.onPerPageChange,
                    "on-sort-change": t.onSortChange,
                    "on-search": t.onSearch,
                    "on-selected-rows-change": t.selectionChanged
                },
                scopedSlots: t._u([{
                    key: "table-row",
                    fn: function(e) {
                        return ["actions" == e.column.field ? r("span", [t.currentUserPermissions && t.currentUserPermissions.includes("products_view") ? r("router-link", {
                            directives: [{
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: {
                                    hover: !0
                                }
                            }],
                            attrs: {
                                title: "View",
                                to: {
                                    name: "detail_product",
                                    params: {
                                        id: e.row.id
                                    }
                                }
                            }
                        }, [r("i", {
                            staticClass: "i-Eye text-25 text-info"
                        })]) : t._e(), t._v(" "), t.currentUserPermissions && t.currentUserPermissions.includes("products_edit") ? r("router-link", {
                            directives: [{
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: {
                                    hover: !0
                                }
                            }],
                            attrs: {
                                title: "Edit",
                                to: {
                                    name: "edit_product",
                                    params: {
                                        id: e.row.id
                                    }
                                }
                            }
                        }, [r("i", {
                            staticClass: "i-Edit text-25 text-success"
                        })]) : t._e(), t._v(" "), t.currentUserPermissions && t.currentUserPermissions.includes("products_delete") ? r("a", {
                            directives: [{
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: {
                                    hover: !0
                                }
                            }],
                            staticClass: "cursor-pointer",
                            attrs: {
                                title: "Delete"
                            },
                            on: {
                                click: function(r) {
                                    return t.Remove_Product(e.row.id)
                                }
                            }
                        }, [r("i", {
                            staticClass: "i-Close-Window text-25 text-danger"
                        })]) : t._e()], 1) : "image" == e.column.field ? r("span", [r("b-img", {
                            attrs: {
                                thumbnail: "",
                                height: "50",
                                width: "50",
                                fluid: "",
                                src: "/images/products/" + e.row.image,
                                alt: "image"
                            }
                        })], 1) : t._e()]
                    }
                }])
            }, [r("div", {
                attrs: {
                    slot: "selected-row-actions"
                },
                slot: "selected-row-actions"
            }, [r("button", {
                staticClass: "btn btn-danger",
                on: {
                    click: function(e) {
                        return t.delete_by_selected()
                    }
                }
            }, [t._v(t._s(t.$t("Del")))])]), t._v(" "), r("div", {
                staticClass: "mt-2 mb-3",
                attrs: {
                    slot: "table-actions"
                },
                slot: "table-actions"
            }, [r("b-button", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle.sidebar-right",
                    modifiers: {
                        "sidebar-right": !0
                    }
                }],
                attrs: {
                    variant: "outline-info m-1",
                    size: "sm"
                }
            }, [r("i", {
                staticClass: "i-Filter-2"
            }), t._v("\n          " + t._s(t.$t("Filter")) + "\n        ")]), t._v(" "), r("b-button", {
                attrs: {
                    size: "sm",
                    variant: "outline-success m-1"
                },
                on: {
                    click: function(e) {
                        return t.Product_PDF()
                    }
                }
            }, [r("i", {
                staticClass: "i-File-Copy"
            }), t._v(" PDF\n        ")]), t._v(" "), r("vue-excel-xlsx", {
                staticClass: "btn btn-sm btn-outline-danger ripple m-1",
                attrs: {
                    data: t.products,
                    columns: t.columns,
                    "file-name": "products",
                    "file-type": "xlsx",
                    "sheet-name": "products"
                }
            }, [r("i", {
                staticClass: "i-File-Excel"
            }), t._v(" EXCEL\n        ")]), t._v(" "), t.currentUserPermissions && t.currentUserPermissions.includes("product_import") ? r("b-button", {
                attrs: {
                    size: "sm",
                    variant: "info m-1"
                },
                on: {
                    click: function(e) {
                        return t.Show_import_products()
                    }
                }
            }, [r("i", {
                staticClass: "i-Download"
            }), t._v("\n          " + t._s(t.$t("import_products")) + "\n        ")]) : t._e(), t._v(" "), t.currentUserPermissions && t.currentUserPermissions.includes("products_add") ? r("router-link", {
                staticClass: "btn-sm btn btn-primary btn-icon m-1",
                attrs: {
                    to: "/app/products/store"
                }
            }, [r("span", {
                staticClass: "ul-btn__icon"
            }, [r("i", {
                staticClass: "i-Add"
            })]), t._v(" "), r("span", {
                staticClass: "ul-btn__text ml-1"
            }, [t._v(t._s(t.$t("Add")))])]) : t._e()], 1)]), t._v(" "), r("b-sidebar", {
                attrs: {
                    id: "sidebar-right",
                    title: t.$t("Filter"),
                    "bg-variant": "white",
                    right: "",
                    shadow: ""
                }
            }, [r("div", {
                staticClass: "px-3 py-2"
            }, [r("b-row", [r("b-col", {
                attrs: {
                    md: "12"
                }
            }, [r("b-form-group", {
                attrs: {
                    label: t.$t("CodeProduct")
                }
            }, [r("b-form-input", {
                attrs: {
                    label: "Code Product",
                    placeholder: t.$t("SearchByCode")
                },
                model: {
                    value: t.Filter_code,
                    callback: function(e) {
                        t.Filter_code = e
                    },
                    expression: "Filter_code"
                }
            })], 1)], 1), t._v(" "), r("b-col", {
                attrs: {
                    md: "12"
                }
            }, [r("b-form-group", {
                attrs: {
                    label: t.$t("ProductName")
                }
            }, [r("b-form-input", {
                attrs: {
                    label: "Name Product",
                    placeholder: t.$t("SearchByName")
                },
                model: {
                    value: t.Filter_name,
                    callback: function(e) {
                        t.Filter_name = e
                    },
                    expression: "Filter_name"
                }
            })], 1)], 1), t._v(" "), r("b-col", {
                attrs: {
                    md: "12"
                }
            }, [r("b-form-group", {
                attrs: {
                    label: t.$t("Categorie")
                }
            }, [r("v-select", {
                attrs: {
                    reduce: function(t) {
                        return t.value
                    },
                    placeholder: t.$t("Choose_Category"),
                    options: t.categories.map((function(t) {
                        return {
                            label: t.name,
                            value: t.id
                        }
                    }
                    ))
                },
                model: {
                    value: t.Filter_category,
                    callback: function(e) {
                        t.Filter_category = e
                    },
                    expression: "Filter_category"
                }
            })], 1)], 1), t._v(" "), r("b-col", {
                attrs: {
                    md: "12"
                }
            }, [r("b-form-group", {
                attrs: {
                    label: t.$t("Brand")
                }
            }, [r("v-select", {
                attrs: {
                    reduce: function(t) {
                        return t.value
                    },
                    placeholder: t.$t("Choose_Brand"),
                    options: t.brands.map((function(t) {
                        return {
                            label: t.name,
                            value: t.id
                        }
                    }
                    ))
                },
                model: {
                    value: t.Filter_brand,
                    callback: function(e) {
                        t.Filter_brand = e
                    },
                    expression: "Filter_brand"
                }
            })], 1)], 1), t._v(" "), r("b-col", {
                attrs: {
                    md: "6",
                    sm: "12"
                }
            }, [r("b-button", {
                attrs: {
                    variant: "primary m-1",
                    size: "sm",
                    block: ""
                },
                on: {
                    click: function(e) {
                        return t.Get_Products(t.serverParams.page)
                    }
                }
            }, [r("i", {
                staticClass: "i-Filter-2"
            }), t._v("\n              " + t._s(t.$t("Filter")) + "\n            ")])], 1), t._v(" "), r("b-col", {
                attrs: {
                    md: "6",
                    sm: "12"
                }
            }, [r("b-button", {
                attrs: {
                    variant: "danger m-1",
                    size: "sm",
                    block: ""
                },
                on: {
                    click: function(e) {
                        return t.Reset_Filter()
                    }
                }
            }, [r("i", {
                staticClass: "i-Power-2"
            }), t._v("\n              " + t._s(t.$t("Reset")) + "\n            ")])], 1)], 1)], 1)]), t._v(" "), r("b-modal", {
                attrs: {
                    "ok-only": "",
                    "ok-title": "Cancel",
                    size: "md",
                    id: "importProducts",
                    title: t.$t("import_products")
                }
            }, [r("b-form", {
                attrs: {
                    enctype: "multipart/form-data"
                },
                on: {
                    submit: function(e) {
                        return e.preventDefault(),
                        t.Submit_import.apply(null, arguments)
                    }
                }
            }, [r("b-row", [r("b-col", {
                staticClass: "mb-3",
                attrs: {
                    md: "12",
                    sm: "12"
                }
            }, [r("b-form-group", [r("input", {
                attrs: {
                    type: "file",
                    label: "Choose File"
                },
                on: {
                    change: t.onFileSelected
                }
            }), t._v(" "), r("b-form-invalid-feedback", {
                staticClass: "d-block",
                attrs: {
                    id: "File-feedback"
                }
            }, [t._v(t._s(t.$t("field_must_be_in_csv_format")))])], 1)], 1), t._v(" "), r("b-col", {
                attrs: {
                    md: "6",
                    sm: "12"
                }
            }, [r("b-button", {
                attrs: {
                    type: "submit",
                    variant: "primary",
                    disabled: t.ImportProcessing,
                    size: "sm",
                    block: ""
                }
            }, [t._v(t._s(t.$t("submit")))]), t._v(" "), t.ImportProcessing ? t._m(0) : t._e()], 1), t._v(" "), r("b-col", {
                attrs: {
                    md: "6",
                    sm: "12"
                }
            }, [r("b-button", {
                attrs: {
                    href: "/import/exemples/import_products.csv",
                    variant: "info",
                    size: "sm",
                    block: ""
                }
            }, [t._v(t._s(t.$t("Download_exemple")))])], 1), t._v(" "), r("b-col", {
                attrs: {
                    md: "12",
                    sm: "12"
                }
            }, [r("table", {
                staticClass: "table table-bordered table-sm mt-4"
            }, [r("tbody", [r("tr", [r("td", [t._v(t._s(t.$t("Name_product")))]), t._v(" "), r("th", [r("span", {
                staticClass: "badge badge-outline-success"
            }, [t._v(t._s(t.$t("Field_is_required")))])])]), t._v(" "), r("tr", [r("td", [t._v(t._s(t.$t("CodeProduct")))]), t._v(" "), r("th", [r("span", {
                staticClass: "badge badge-outline-success"
            }, [t._v(t._s(t.$t("Field_is_required")))]), t._v("\n                    " + t._s(t.$t("code_must_be_not_exist_already")) + "\n                  ")])]), t._v(" "), r("tr", [r("td", [t._v(t._s(t.$t("Categorie")))]), t._v(" "), r("th", [r("span", {
                staticClass: "badge badge-outline-success"
            }, [t._v(t._s(t.$t("Field_is_required")))])])]), t._v(" "), r("tr", [r("td", [t._v(t._s(t.$t("ProductCost")))]), t._v(" "), r("th", [r("span", {
                staticClass: "badge badge-outline-success"
            }, [t._v(t._s(t.$t("Field_is_required")))])])]), t._v(" "), r("tr", [r("td", [t._v(t._s(t.$t("ProductPrice")))]), t._v(" "), r("th", [r("span", {
                staticClass: "badge badge-outline-success"
            }, [t._v(t._s(t.$t("Field_is_required")))])])]), t._v(" "), r("tr", [r("td", [t._v(t._s(t.$t("UnitProduct")))]), t._v(" "), r("th", [r("span", {
                staticClass: "badge badge-outline-success"
            }, [t._v(t._s(t.$t("Field_is_required")))]), t._v("\n                    " + t._s(t.$t("must_be_exist")) + " " + t._s(t.$t("Please_use_short_name_of_unit")) + "\n                  ")])]), t._v(" "), r("tr", [r("td", [t._v(t._s(t.$t("Brand")))]), t._v(" "), r("th", [r("span", {
                staticClass: "badge badge-outline-info"
            }, [t._v(t._s(t.$t("Field_optional")))])])]), t._v(" "), r("tr", [r("td", [t._v(t._s(t.$t("StockAlert")))]), t._v(" "), r("th", [r("span", {
                staticClass: "badge badge-outline-info"
            }, [t._v(t._s(t.$t("Field_optional")))])])]), t._v(" "), r("tr", [r("td", [t._v(t._s(t.$t("Note")))]), t._v(" "), r("th", [r("span", {
                staticClass: "badge badge-outline-info"
            }, [t._v(t._s(t.$t("Field_optional")))])])])])])])], 1)], 1)], 1)], 1)], 1)
        }
        ), [function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "typo__p"
            }, [e("div", {
                staticClass: "spinner sm spinner-primary mt-3"
            })])
        }
        ], !1, null, null, null).exports
    }
}]);
