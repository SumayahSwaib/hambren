(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[229], {79887: function (e, s, t) {
        "use strict";
        let i = t(95472), n = t(81907), a = t(24013), r = t.n(a), o = t(85893);
        s.Z = function () {
            return (0, o.jsxs)("div", {className: r().soldout, children: [(0, o.jsx)("div", {className: r().image, children: (0, o.jsx)(n.oH, {width: 78, height: 72, alt: "empty", src: t(79608), layout: "responsive"})}), (0, o.jsx)("h1", {className: r().content, children: i.Z.t("home.no_item_matched")}), (0, o.jsx)("span", {className: r().tip, children: i.Z.t("home.other_options")})]});
        };
    }, 11407: function (e, s, t) {
        "use strict";
        let i, n = t(49711), a = t(67294), r = t(87784), o = t.n(r), l = t(95472), c = t(85893);
        function d(e, s) {
            let t = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!t) {
                if (Array.isArray(e) || (t = function (e, s) {
                    if (!e) return;
                    if ("string" === typeof e) return u(e, s);
                    let t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return u(e, s);
                }(e)) || s && e && "number" === typeof e.length) {
                    t && (e = t);
                    let i = 0, n = function () {};
                    return {s: n, n: function () {
                            return i >= e.length ? {done: true} : {done: false, value: e[i++]};
                        }, e: function (e) {
                            throw e;
                        }, f: n};
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            let a, r = true, o = false;
            return {s: function () {
                    t = t.call(e);
                }, n: function () {
                    let e = t.next();
                    return r = e.done, e;
                }, e: function (e) {
                    o = true, a = e;
                }, f: function () {
                    try {
                        r || null == t.return || t.return();
                    } finally {
                        if (o) throw a;
                    }
                }};
        }
        function u(e, s) {
            (null == s || s > e.length) && (s = e.length);
            for (let t = 0, i = new Array(s); t < s; t++) i[t] = e[t];
            return i;
        }
        let m = 5, x = ["wholeeshopping.com"];
        s.Z = function (e) {
            let s, t = e.onShow, r = e.size, u = (0, a.useRef)(null), v = d(x);
            try {
                for (v.s(); !(s = v.n()).done;) {
                    let p = s.value;
                    location.host.includes(p) && (m = 1);
                }
            } catch (f) {
                v.e(f);
            } finally {
                v.f();
            }
            (0, a.useEffect)(function () {
                if (u.current) return (i = new IntersectionObserver(function (e) {
                    let s = (0, n.Z)(e, 1)[0];
                    return t(s.isIntersecting);
                }, {rootMargin: "0px 0px 300px 0px"})).observe(u.current), function () {
                    i.disconnect();
                };
            }, [t]), (0, a.useEffect)(function () {
                r >= m && i.disconnect();
            }, [r, t]);
            let h = r < m;
            return (0, c.jsx)("div", {ref: u, className: h ? o().loading : o().view_more, onClick: function () {
                    !h && t(true);
                }, children: h ? "" : l.Z.t("search.view_more")});
        };
    }, 30773: function (e, s, t) {
        "use strict";
        let i = t(92809), n = t(67294), a = t(29298), r = t.n(a), o = t(81907), l = t(94184), c = t.n(l), d = t(65207), u = t(36913), m = t(85893), x = 0;
        function v(e) {
            e ? (x = window.scrollY, document.body.style.position = "fixed", document.body.style.left = "0", document.body.style.right = "0", document.body.style.top = -x + "px") : (document.body.style.position = "", document.body.style.top = "", document.body.style.left = "", document.body.style.right = "", window.scrollTo(0, x));
        }
        s.Z = function (e) {
            let s, t = e.zeroProductResource, a = e.showTotalCount, l = void 0 !== a && a, x = e.productImageList, p = void 0 === x ? [] : x, h = e.visible, f = void 0 !== h && h, _ = e.handleClose, j = e.currentIndex, w = void 0 === j ? 0 : j, g = e.indexChangeCB, b = e.maskBg, k = (0, n.useRef)(null);
            (0, n.useEffect)(function () {
                let e = document.querySelector('meta[name="viewport"]');
                e && e.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=3.0, user-scalable=yes");
            }, [w]), (0, n.useEffect)(function () {
                let e = document.querySelector('meta[name="viewport"]');
                f ? (e && e.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=3.0, user-scalable=yes"), v(f)) : e && e.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no");
            }, [f]);
            let N = function (e) {
                g && g(e);
            };
            return (0, m.jsx)("div", {className: r()["product-media-modal__dialog"], style: {visibility: f ? "visible" : "hidden", backgroundColor: b || "#fff"}, children: (0, m.jsxs)("div", {style: {width: l ? 800 : 960}, children: [(0, m.jsx)("button", {className: c()((s = {}, (0, i.Z)(s, r().modal_close, true), (0, i.Z)(s, r().modal_close_white, false), s)), onClick: function () {
                            v(false), _();
                        }, children: (0, m.jsx)("i", {className: "iconfont wholeeicon-close", style: {color: "#fff"}})}), (0, m.jsxs)("div", {className: r()["product-img-modal_content"], children: [(0, m.jsx)(d.Z, {showBigModal: true, indexChangeCB: function (e) {
                                N(e);
                            }, imgs: p, currentIndex: w, showPreNextBtn: false, showZoomIcon: false, has3dShowInfo: false, zeroProductResource: t}), (0, m.jsxs)(m.Fragment, {children: [(0, m.jsx)("div", {className: "".concat(r()["slider-button-wrapper"], " ").concat(r()["slider-button-wrapper-pre"]), onClick: function () {
                                    N(0 === w ? p.length - 1 : w - 1);
                                }, children: (0, m.jsx)("button", {className: "".concat(r()["slider-button"], " ").concat(r()["slider-button--prev"]), children: (0, m.jsx)("i", {className: "iconfont wholeea-iconShopify-up"})})}), (0, m.jsx)("div", {className: "".concat(r()["slider-button-wrapper"], " ").concat(r()["slider-button-wrapper-next"]), onClick: function () {
                                    w === p.length - 1 ? N(0) : N(w + 1);
                                }, children: (0, m.jsx)("button", {className: "".concat(r()["slider-button"], " ").concat(r()["slider-button--next"]), children: (0, m.jsx)("i", {className: "iconfont wholeea-iconShopify-up"})})})]})]}), l ? (0, m.jsxs)("div", {className: r().imgs_total, children: [w + 1, "/", p.length]}) : (0, m.jsx)("div", {className: r()["product-media-modal_thumbnails"], ref: k, children: p.map(function (e, s) {
                            let t;
                            return (0, m.jsx)("div", {className: c()((t = {}, (0, i.Z)(t, r().pswp_thumb_item, true), (0, i.Z)(t, r().pswp_thumb_item_active, s === w), t)), onClick: function () {
                                    N(s);
                                }, children: (0, m.jsx)(o.oH, {width: 64, height: 64, objectFit: "contain", src: (0, u.BQ)(e, 200), alt: "product thumbnail"})}, s);
                        })})]})});
        };
    }, 27545: function (e, s, t) {
        "use strict";
        t.r(s), t.d(s, {default: function () {
                return ke;
            }});
        let i = t(49711), n = t(30266), a = t(92809), r = t(809), o = t.n(r), l = t(40821), c = t(67294), d = t(11163), u = t(81907), m = t(69447), x = t(24002), v = t(30172), p = t(52997), h = t(7649), f = t(85893);
        function _() {
            let e = (0, d.useRouter)(), s = (0, l.kY)().fallback.banners, t = void 0 === s ? [] : s;
            if (Array.isArray(t) && t.length) {
                let i = t[0].imageHeight;
                return (0, f.jsx)(m.t, {style: {height: i}, navigation: true, loop: t.length > 1, pagination: {clickable: true}, scrollbar: {draggable: true}, autoplay: {delay: 3e3}, children: t.map(function (s) {
                        let t = s.imageWidth, i = s.jumpUrl, n = s.imageHeight, a = s.imageUrl;
                        return (0, f.jsx)(x.o, {children: (0, f.jsx)(u.oH, {layout: "fill", alt: "Banner", width: t, height: n, src: a, placeholder: "blur", blurDataURL: "/images/banner-placeholder.png", onClick: function () {
                                    return function (s) {
                                        s && (/(\/act)|(\.html)/.test(s) ? location.href = s : e.push(s));
                                    }(i);
                                }})}, a);
                    })});
            }
            return null;
        }
        v.Z.use([p.Z, h.Z]);
        let j = t(71217), w = t(67188), g = t.n(w), b = t(40037), k = t(65988), N = t(54315), y = t(20958), I = t(11407), P = t(10049), R = t(79887), Z = t(3149), C = (t(78738), function () {
            return (0, f.jsxs)("div", {className: "jsx-248259456", children: [(0, f.jsx)(k.default, {id: "248259456", children: [".skeleton.jsx-248259456{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;background:#fff;padding-top:10px;}", ".skeleton-prod.jsx-248259456{padding:0 4px;-webkit-flex:1;-ms-flex:1;flex:1;height:253px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}", ".skeleton-img.jsx-248259456{width:171px;height:171px;margin:auto;background:#f5f5f5;}", ".skeleton-txt.jsx-248259456{width:171px;margin:8px auto 0;}", ".skeleton-txt1.jsx-248259456{width:171px;height:11px;background:#f5f5f5;}", ".skeleton-txt2.jsx-248259456{width:112px;height:11px;margin-top:3px;background:#f5f5f5;}", ".skeleton-skus.jsx-248259456{width:171px;height:15px;margin:8px auto 0;}", ".skeleton-sku.jsx-248259456{width:44px;height:15px;background:#e6e6e6;}"]}), (0, f.jsxs)("div", {className: "jsx-248259456 skeleton", children: [(0, f.jsxs)("div", {className: "jsx-248259456 skeleton-prod", children: [(0, f.jsx)("div", {className: "jsx-248259456 skeleton-img"}), (0, f.jsxs)("div", {className: "jsx-248259456 skeleton-txt", children: [(0, f.jsx)("div", {className: "jsx-248259456 skeleton-txt1"}), (0, f.jsx)("div", {className: "jsx-248259456 skeleton-txt2"})]}), (0, f.jsx)("div", {className: "jsx-248259456 skeleton-skus", children: (0, f.jsx)("div", {className: "jsx-248259456 skeleton-sku"})})]}), (0, f.jsxs)("div", {className: "jsx-248259456 skeleton-prod", children: [(0, f.jsx)("div", {className: "jsx-248259456 skeleton-img"}), (0, f.jsxs)("div", {className: "jsx-248259456 skeleton-txt", children: [(0, f.jsx)("div", {className: "jsx-248259456 skeleton-txt1"}), (0, f.jsx)("div", {className: "jsx-248259456 skeleton-txt2"})]}), (0, f.jsx)("div", {className: "jsx-248259456 skeleton-skus", children: (0, f.jsx)("div", {className: "jsx-248259456 skeleton-sku"})})]}), (0, f.jsxs)("div", {className: "jsx-248259456 skeleton-prod", children: [(0, f.jsx)("div", {className: "jsx-248259456 skeleton-img"}), (0, f.jsxs)("div", {className: "jsx-248259456 skeleton-txt", children: [(0, f.jsx)("div", {className: "jsx-248259456 skeleton-txt1"}), (0, f.jsx)("div", {className: "jsx-248259456 skeleton-txt2"})]}), (0, f.jsx)("div", {className: "jsx-248259456 skeleton-skus", children: (0, f.jsx)("div", {className: "jsx-248259456 skeleton-sku"})})]}), (0, f.jsxs)("div", {className: "jsx-248259456 skeleton-prod", children: [(0, f.jsx)("div", {className: "jsx-248259456 skeleton-img"}), (0, f.jsxs)("div", {className: "jsx-248259456 skeleton-txt", children: [(0, f.jsx)("div", {className: "jsx-248259456 skeleton-txt1"}), (0, f.jsx)("div", {className: "jsx-248259456 skeleton-txt2"})]}), (0, f.jsx)("div", {className: "jsx-248259456 skeleton-skus", children: (0, f.jsx)("div", {className: "jsx-248259456 skeleton-sku"})})]})]}), (0, f.jsxs)("div", {className: "jsx-248259456 skeleton", children: [(0, f.jsxs)("div", {className: "jsx-248259456 skeleton-prod", children: [(0, f.jsx)("div", {className: "jsx-248259456 skeleton-img"}), (0, f.jsxs)("div", {className: "jsx-248259456 skeleton-txt", children: [(0, f.jsx)("div", {className: "jsx-248259456 skeleton-txt1"}), (0, f.jsx)("div", {className: "jsx-248259456 skeleton-txt2"})]}), (0, f.jsx)("div", {className: "jsx-248259456 skeleton-skus", children: (0, f.jsx)("div", {className: "jsx-248259456 skeleton-sku"})})]}), (0, f.jsxs)("div", {className: "jsx-248259456 skeleton-prod", children: [(0, f.jsx)("div", {className: "jsx-248259456 skeleton-img"}), (0, f.jsxs)("div", {className: "jsx-248259456 skeleton-txt", children: [(0, f.jsx)("div", {className: "jsx-248259456 skeleton-txt1"}), (0, f.jsx)("div", {className: "jsx-248259456 skeleton-txt2"})]}), (0, f.jsx)("div", {className: "jsx-248259456 skeleton-skus", children: (0, f.jsx)("div", {className: "jsx-248259456 skeleton-sku"})})]}), (0, f.jsxs)("div", {className: "jsx-248259456 skeleton-prod", children: [(0, f.jsx)("div", {className: "jsx-248259456 skeleton-img"}), (0, f.jsxs)("div", {className: "jsx-248259456 skeleton-txt", children: [(0, f.jsx)("div", {className: "jsx-248259456 skeleton-txt1"}), (0, f.jsx)("div", {className: "jsx-248259456 skeleton-txt2"})]}), (0, f.jsx)("div", {className: "jsx-248259456 skeleton-skus", children: (0, f.jsx)("div", {className: "jsx-248259456 skeleton-sku"})})]}), (0, f.jsxs)("div", {className: "jsx-248259456 skeleton-prod", children: [(0, f.jsx)("div", {className: "jsx-248259456 skeleton-img"}), (0, f.jsxs)("div", {className: "jsx-248259456 skeleton-txt", children: [(0, f.jsx)("div", {className: "jsx-248259456 skeleton-txt1"}), (0, f.jsx)("div", {className: "jsx-248259456 skeleton-txt2"})]}), (0, f.jsx)("div", {className: "jsx-248259456 skeleton-skus", children: (0, f.jsx)("div", {className: "jsx-248259456 skeleton-sku"})})]})]})]});
        }), A = t(53991), S = t(82053), M = (0, f.jsxs)(f.Fragment, {children: [(0, f.jsx)(k.default, {id: "3137951432", children: [".loading.jsx-3137951432{width:70px;margin:auto;}"]}), (0, f.jsx)("div", {className: "jsx-3137951432 loading", children: (0, f.jsx)(u.oH, {alt: "loading", src: S, layout: "responsive", className: "jsx-3137951432"})})]}), O = {initialSize: 1, revalidateAll: false, revalidateFirstPage: false, persistSize: false, revalidateOnFocus: false};
        function q(e) {
            let s, t, i, a = e.tabKey, r = (0, y.ZP)(function (e, s) {
                return "".concat(P.A.HOME_SPU_LIST).concat((0, A.s1)({tabKey: a, pageNo: e + 1, pageSize: 30}));
            }, function () {
                for (let e = arguments.length, s = new Array(e), t = 0; t < e; t++) s[t] = arguments[t];
                return new Promise(function () {
                    let e = (0, n.Z)(o().mark(function e(t, i) {
                        let n, a, r, l, c;
                        return o().wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = setTimeout(function () {
                                        t(void 0);
                                    }, 5e3), e.next = 3, N.SK.apply(void 0, s);
                                case 3:
                                    a = e.sent, r = (a || {}).body, l = (r = void 0 === r ? {} : r).cards, (c = void 0 === l ? [] : l) && 0 === c.length && t(void 0), clearTimeout(n), t(a);
                                case 10:
                                case "end":
                                    return e.stop();
                            }
                        }, e);
                    }));
                    return function (s, t) {
                        return e.apply(this, arguments);
                    };
                }());
            }, O), l = r.data, c = r.isValidating, d = r.size, u = r.setSize, m = l ? (s = []).concat.apply(s, (0, b.Z)(l)) : [], x = !l || !(null !== l && void 0 !== l && null !== (t = l[d - 1]) && void 0 !== t && null !== (i = t.body) && void 0 !== i && i.hasNextPage), v = m.some(function (e) {
                let s, t;
                return (null === e || void 0 === e || null === (s = e.body) || void 0 === s || null === (t = s.cards) || void 0 === t ? void 0 : t.length) > 0;
            });
            return (0, f.jsxs)(f.Fragment, {children: [(0, f.jsx)(k.default, {id: "986263799", children: [".products.jsx-986263799{padding-top:12px;background:#fff;}"]}), (0, f.jsx)("div", {className: "jsx-986263799 products", children: v ? (0, f.jsx)(Z.Z, {results: m}) : c ? (0, f.jsx)(C, {}) : (0, f.jsx)(R.Z, {})}), !x && (0, f.jsx)(I.Z, {size: d, onShow: function (e) {
                        !e || x || c || u(d + 1);
                    }}), c ? M : null]});
        }
        let T = c.memo(q);
        let U = (0, j.Pi)(function (e) {
            let s = e.defaultTabKey, t = (0, c.useState)(s || ""), n = t[0], a = (t[1], (0, c.useState)(false)), r = (a[0], a[1]), o = (0, l.kY)().fallback.tabs, m = void 0 === o ? [] : o;
            return (0, d.useRouter)(), (0, c.useEffect)(function () {
                let e = document.getElementById("home-product_list");
                if (e) {
                    let s = new IntersectionObserver(function (e) {
                        let s = (0, i.Z)(e, 1)[0];
                        return r(s.isIntersecting);
                    }, {rootMargin: "0px 0px 0px 0px"});
                    return s.observe(e), function () {
                        s.disconnect();
                    };
                }
            }, []), m.forEach(function (e, s) {
                e.key === n && s;
            }), (0, f.jsxs)(f.Fragment, {children: [(0, f.jsx)("div", {className: g().recommendTitle, children: u.RW.t("home.highlyrecommend")}), (0, f.jsx)("div", {id: "home-product_list", children: (0, f.jsx)(T, {tabKey: n})})]});
        }), W = t(55529), E = t.n(W), z = ["jpg", "png", "jpeg"];
        let L = function (e) {
            let s = e.imageUrl, t = e.size, i = e.layout, n = e.alt, a = e.onClick, r = e.width, o = e.height, l = function (e, s) {
                if (e) {
                    let t = e.split(".").pop() || "";
                    return z.includes(t) ? e + "_".concat(s, ".jpg") : e;
                }
                return "";
            }(s, t);
            return l && l !== s || (l = "/images/banner-placeholder.png"), (0, f.jsx)(u.oH, {priority: true, width: r, height: o, layout: i, placeholder: "blur", blurDataURL: l, alt: n, src: s, onClick: function () {
                    a && a();
                }});
        };
        let H = function () {
            let e = (0, l.kY)().fallback.cubes, s = void 0 === e ? [] : e;
            return (0, f.jsx)("div", {className: E().cube, children: (null === s || void 0 === s ? void 0 : s.length) > 0 ? s.map(function (e, s) {
                    return (0, f.jsx)("div", {className: E().card, style: {height: "".concat(null === e || void 0 === e ? void 0 : e.imageHeight, "px")}, children: (0, f.jsx)(L, {layout: "fill", alt: "Banner", width: 428, height: 238, imageUrl: null === e || void 0 === e ? void 0 : e.imageUrl, size: 8, onClick: function () {
                                let s;
                                (s = e.jumpUrl) && (/(\/act)|(\.html)/.test(s) ? location.href = s : d.default.push(s));
                            }})}, s);
                }) : null});
        }, B = t(66282), D = t(20022), F = t(80837), G = t(86208), Y = t.n(G), V = [{letter: "J", user: "J**f", ask: "What is Wholee?", answer: "reviews.wholee_introduce"}, {letter: "K", user: "K**e", ask: "How does Wholee ensure the quality of the products?", answer: "reviews.products_quality"}, {letter: "A", user: "A**e", ask: "Can I return something I bought?", answer: "You can always return an item within 30 days of receiving it. The shipping is free on your first return for any order. We will process your refund as soon as we receive your returned item(s)."}, {letter: "Y", user: "Y**n", ask: "How much does shipping cost?", answer: "reviews.shipping_cost"}, {letter: "U", user: "U**e", ask: "What payment methods do you accept? Is the payment safe?", answer: "We accept PayPal, Klarna, debit and credit card for payment. You can rest assured that all transactions are secure and encrypted. Whenever you notice suspicious charges or activity on your account, please do not hesitate to notify us."}], K = t(7006), Q = t(71099), J = t.n(Q), X = t(30773), $ = t(72844), ee = t(27484), se = t.n(ee), te = t(95472), ie = t(9638), ne = V.concat(V);
        function ae(e) {
            let s = e.results;
            return (0, f.jsxs)("div", {className: J().contentWrapper, children: [(0, f.jsx)("div", {className: J().title, children: te.Z.t("reviews.faqs_reviews")}), (0, f.jsxs)("div", {className: J().faqWrapper, onClick: e.faqsClick, children: [(0, f.jsx)("div", {className: J().subTitle, children: te.Z.t("reviews.faqs")}), (0, f.jsxs)("div", {className: J().term, children: [(0, f.jsx)("span", {className: J().userName, children: "G***L:"}), " ", (0, f.jsx)("span", {children: te.Z.t("What is Wholee?")})]}), (0, f.jsxs)("div", {className: J().term, children: [(0, f.jsx)("span", {className: J().userName, children: "Wholee:"}), " ", (0, f.jsx)("span", {children: te.Z.t("reviews.wholee_introduce")})]})]}), (0, f.jsxs)("div", {className: J().reviewsWrapper, children: [(0, f.jsx)("div", {className: J().subTitle, children: te.Z.t("reviews.head")}), (0, f.jsx)("div", {className: J().reviewList, children: s.map(function (s) {
                            let t, i;
                            return null === s || void 0 === s || null === (t = s.body) || void 0 === t || null === (i = t.comments) || void 0 === i ? void 0 : i.map(function (s, t) {
                                let i, n, a, r, o;
                                return (0, f.jsxs)("div", {className: J().reviewItem, children: [(0, f.jsxs)("div", {className: J().userInfo, children: [(0, f.jsxs)("span", {className: J().userName, children: [s.userName, ":"]}), " on ", se()(s.createdTimeMillis).format("MMM DD, YYYY")]}), (0, f.jsxs)("div", {className: J().star, children: [(0, f.jsx)("i", {className: "iconfont wholeeicon-reating-star"}), (0, f.jsx)("i", {className: "iconfont wholeeicon-reating-star"}), (0, f.jsx)("i", {className: "iconfont wholeeicon-reating-star"}), (0, f.jsx)("i", {className: "iconfont wholeeicon-reating-star"}), (0, f.jsx)("i", {className: "iconfont wholeeicon-reating-star"})]}), (0, f.jsx)("div", {className: J().reviewText, children: s.content}), (0, f.jsx)("div", {className: J().images, children: null === (i = s.commentImages) || void 0 === i ? void 0 : i.map(function (t, i) {
                                            return (0, f.jsx)("div", {className: J().imageWrapper, onClick: function () {
                                                    return null === e || void 0 === e ? void 0 : e.imagePreviewClick(s.commentImages, i);
                                                }, children: (0, f.jsx)(u.oH, {src: t, layout: "responsive", placeholder: "blur", blurDataURL: "/images/placeholder.jpg", objectFit: "cover", width: 180, height: 180})});
                                        })}), (0, f.jsxs)("div", {className: J().productInfo, onClick: function () {
                                            return e = s.spuInfo, void window.open("/items/".concat(null === e || void 0 === e ? void 0 : e.spuId));
                                            let e;
                                        }, children: [(0, f.jsx)("div", {className: J().productImg, children: (0, f.jsx)(u.oH, {src: null === (n = s.spuInfo) || void 0 === n ? void 0 : n.imageUrl, layout: "responsive", placeholder: "blur", blurDataURL: "/images/placeholder.jpg", width: 40, height: 40})}), (0, f.jsxs)("div", {className: J().productWrapper, children: [(0, f.jsx)("div", {className: J().productTitle, children: null === (a = s.spuInfo) || void 0 === a ? void 0 : a.name}), (0, f.jsxs)("div", {className: J().productPrice, children: [null === (r = s.spuInfo) || void 0 === r ? void 0 : r.symbol, null === (o = s.spuInfo) || void 0 === o ? void 0 : o.priceMin]})]})]})]}, t);
                            });
                        })})]})]});
        }
        let re = function () {
            let e, s, t, i = (0, l.kY)().fallback.comments, n = void 0 === i ? [] : i, a = (0, b.Z)(n);
            n.length && n.length < 20 && (a = (a = [].concat((0, b.Z)(n), (0, b.Z)(Array(20 - n.length)))).fill(n[0], n.length));
            let r = (0, K.yo)(a, 2).map(function (e, s) {
                return {review: e, faq: ne[s]};
            }), o = (0, c.useState)(false), d = (o[0], o[1], (0, c.useState)(false)), m = d[0], x = d[1], v = (0, c.useState)(""), p = v[0], h = v[1], _ = (0, c.useState)(false), j = _[0], w = _[1], g = (0, c.useState)({}), k = g[0], N = g[1], I = (0, c.useState)(false), P = I[0], R = I[1], Z = (0, c.useState)([]), C = Z[0], S = Z[1], M = (0, c.useState)(0), O = M[0], q = M[1], T = (0, y.ZP)(function (e, s) {
                return k.id ? "/gw/gm-view/home/comments".concat((0, A.s1)({topCommentId: k.id, pageNo: e + 1, pageSize: 20})) : null;
            }, {initialSize: 1, revalidateAll: false, revalidateFirstPage: false, persistSize: false, revalidateOnFocus: false}), U = T.data, W = T.error, E = T.size, z = T.setSize, L = U ? (e = []).concat.apply(e, (0, b.Z)(U)) : [], H = !U && !W, B = !U || !(null !== U && void 0 !== U && null !== (s = U[E - 1]) && void 0 !== s && null !== (t = s.body) && void 0 !== t && t.hasNextPage), D = (0, c.useRef)(null), F = (0, ie.Z)(D, "0px 0px 400px 0px");
            (0, c.useEffect)(function () {
                !F || H || B || z(E + 1);
            }, [F, H]), (0, c.useEffect)(function () {
                (0, $.TraceReviews)("impression", "1.37.1");
            }, []);
            let G = function (e, s) {
                h(e), x(true), s ? (N(s), (0, $.TraceReviews)("click", "1.37.2")) : (0, $.TraceReviews)("click", "1.37.3");
            };
            return (null === n || void 0 === n ? void 0 : n.length) > 0 ? (0, f.jsxs)("div", {className: J().reviews, children: [(0, f.jsxs)("div", {className: J().titleWrapper, children: [(0, f.jsx)("div", {className: J().title, children: te.Z.t("store.sortby_customer_review")}), (0, f.jsx)("div", {className: J().title, children: te.Z.t("reviews.faqs")})]}), (0, f.jsx)("div", {className: J().swiperContainer, children: (0, f.jsx)("ul", {className: J().swiperList, children: r.map(function (e, s) {
                            return (0, f.jsxs)("li", {className: J().swiperItem, children: [e.review.map(function (e, s) {
                                    return (0, f.jsxs)("div", {className: J().item, onClick: function () {
                                            return G("reviews", e);
                                        }, children: [(0, f.jsxs)("div", {className: J().time, children: [e.userName, " on ", se()(e.createdTimeMillis).format("MMM DD, YYYY")]}), (0, f.jsxs)("div", {className: J().star, children: [(0, f.jsx)("i", {className: "iconfont wholeeicon-reating-star"}), (0, f.jsx)("i", {className: "iconfont wholeeicon-reating-star"}), (0, f.jsx)("i", {className: "iconfont wholeeicon-reating-star"}), (0, f.jsx)("i", {className: "iconfont wholeeicon-reating-star"}), (0, f.jsx)("i", {className: "iconfont wholeeicon-reating-star"})]}), (0, f.jsx)("div", {className: J().reviewText, children: e.content}), (0, f.jsx)("div", {className: J().reviewImage, children: (0, f.jsx)(u.oH, {src: null === e || void 0 === e ? void 0 : e.commentImages[0], width: 40, height: 40, layout: "responsive", placeholder: "blur", blurDataURL: "/images/placeholder.jpg"})})]});
                                }), (0, f.jsxs)("div", {className: "".concat(J().item, " ").concat(J().faqItem), onClick: function () {
                                        return G("faqs");
                                    }, children: [(0, f.jsxs)("div", {className: J().term, children: [(0, f.jsxs)("span", {className: J().userName, children: [e.faq.user, ":"]}), " ", (0, f.jsx)("span", {className: J().text, children: te.Z.t(e.faq.ask)})]}), (0, f.jsxs)("div", {className: J().term, children: [(0, f.jsx)("span", {className: J().userName, children: "Wholee:"}), " ", (0, f.jsx)("span", {className: "".concat(J().text, " ").concat(J().text_answer), children: te.Z.t(e.faq.answer)})]})]})]}, s);
                        })})}), (0, f.jsxs)(Y(), {visible: m, showCloseIcon: true, onCancel: function () {
                        x(false), w(false);
                    }, className: J().reviewsModal, children: [j && (0, f.jsx)("div", {className: J().back, onClick: function () {
                            h("reviews"), w(false);
                        }, children: (0, f.jsx)("i", {className: "iconfont wholeeicon-nav-back"})}), "reviews" === p ? ae({faqsClick: function () {
                            h("faqs"), w(true);
                        }, imagePreviewClick: function (e, s) {
                            S(e), q(s), R(true);
                        }, results: L}) : (0, f.jsxs)("div", {className: J().faqs, children: [(0, f.jsx)("div", {className: J().title, children: te.Z.t("reviews.faqs")}), (0, f.jsx)("div", {className: J().faqsWrapper, children: V.map(function (e, s) {
                                return (0, f.jsxs)("div", {className: J().faqItem, children: [(0, f.jsxs)("div", {className: "".concat(J().wrapper, " ").concat(J().ask), children: [(0, f.jsx)("div", {className: J().icon, children: e.letter}), (0, f.jsxs)("div", {className: J().content, children: [(0, f.jsxs)("div", {className: J().name, children: [e.user, ":"]}), (0, f.jsx)("div", {className: J().text, children: te.Z.t(e.ask)})]})]}), (0, f.jsxs)("div", {className: "".concat(J().wrapper, " ").concat(J().answer), children: [(0, f.jsx)("div", {className: J().icon}), (0, f.jsxs)("div", {className: J().content, children: [(0, f.jsx)("div", {className: J().name, children: "Wholee:"}), (0, f.jsx)("div", {className: J().text, children: te.Z.t(e.answer)})]})]})]}, s);
                            })})]}), (0, f.jsx)("div", {ref: D, style: {height: "20px"}})]}), (0, f.jsx)(X.Z, {maskBg: "black", showTotalCount: true, visible: P, productImageList: C, handleClose: function () {
                        q(0), R(false);
                    }, currentIndex: O, indexChangeCB: function (e) {
                        return q(e);
                    }})]}) : null;
        }, oe = t(17682), le = t(99712), ce = t.n(le);
        function de() {
            let e = (0, d.useRouter)(), s = (0, l.kY)().fallback.brandImage, t = void 0 === s ? {} : s;
            return t.imageUrl ? (0, f.jsx)("div", {className: ce().brandImage, style: {height: "".concat(t.imageHeight, "px")}, children: (0, f.jsx)(u.oH, {layout: "fill", alt: "Banner", width: t.imageWidth, height: t.imageHeight, src: t.imageUrl, placeholder: "blur", blurDataURL: "/images/banner-placeholder.png", onClick: function () {
                        return s = t.jumpUrl, void (t.imageType ? oe.Z.setWholeeIntroModalVisible(true) : s && (/(\/act)|(\.html)/.test(s) ? location.href = s : e.push(s)));
                        let s;
                    }})}) : null;
        }
        let ue = t(51655);
        function me(e, s) {
            return s("".concat(P.A.HOME_CONFIG), {headers: e}).then(function (e) {
                return (null === e || void 0 === e ? void 0 : e.body) || {};
            });
        }
        function xe(e, s) {
            return s(P.A.HOME_TABS, {headers: e}).then(function (e) {
                let s;
                return ((null === e || void 0 === e || null === (s = e.body) || void 0 === s ? void 0 : s.tabs) || []).map(function (e) {
                    return e.title = e.tabName, e.key = e.tabKey, e;
                });
            });
        }
        t(24854), t(36913);
        let ve = t(98755), pe = t(5152), he = t(87976), fe = t(74873);
        function _e(e, s) {
            let t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                let i = Object.getOwnPropertySymbols(e);
                s && (i = i.filter(function (s) {
                    return Object.getOwnPropertyDescriptor(e, s).enumerable;
                })), t.push.apply(t, i);
            }
            return t;
        }
        function je(e) {
            for (let s = 1; s < arguments.length; s++) {
                let t = null != arguments[s] ? arguments[s] : {};
                s % 2 ? _e(Object(t), true).forEach(function (s) {
                    (0, a.Z)(e, s, t[s]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _e(Object(t)).forEach(function (s) {
                    Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
                });
            }
            return e;
        }
        let we = (0, pe.default)(function () {
            return t.e(6278).then(t.bind(t, 26278));
        }, {ssr: false, loadableGenerated: {webpack: function () {
                    return [26278];
                }, modules: ["home.tsx -> components/PrivacyModal"]}}), ge = (0, pe.default)(function () {
            return Promise.all([t.e(1750), t.e(9134)]).then(t.bind(t, 99134));
        }, {ssr: false, loadableGenerated: {webpack: function () {
                    return [99134];
                }, modules: ["home.tsx -> ../components/CouponCode"]}});
        (0, pe.default)(function () {
            return t.e(4110).then(t.bind(t, 34110));
        }, {ssr: false, loading: function () {
                return (0, f.jsx)("div", {style: {display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "500px"}, children: "loading"});
            }, loadableGenerated: {webpack: function () {
                    return [34110];
                }, modules: ["home.tsx -> ../biz-components/home/DownloadAppModal"]}});
        function be(e) {
            let s, t, i, n = (0, c.useState)(null === e || void 0 === e || null === (s = e.props) || void 0 === s ? void 0 : s.fallback), a = n[0], r = n[1], o = (null === a || void 0 === a || null === (t = a.tabs) || void 0 === t || null === (i = t[0]) || void 0 === i ? void 0 : i.tabKey) || "all";
            return "undefined" !== typeof location && location.hash && (o = decodeURIComponent(location.hash.slice(1))), (0, c.useLayoutEffect)(function () {
                a.isServerSide || (me({}, N.ZP).then(function (e) {
                    let s = e.banners, t = e.cubes, i = e.categories, n = e.comments;
                    e.brandImage;
                    r(function (e) {
                        return Object.assign({}, e, {banners: s, cubes: t, categories: i, comments: n});
                    });
                }), xe({}, N.ZP).then(function (e) {
                    r(function (s) {
                        return Object.assign({}, s, {tabs: e});
                    });
                }));
            }, []), (0, f.jsxs)(l.J$, {value: {fallback: a}, children: [(0, f.jsx)(ve.Z, je({}, a)), (0, f.jsx)(D.Z, {hiddenList: {back: true}}), (0, f.jsx)(F.Z, {}), (0, f.jsx)(re, je({}, a)), (0, f.jsxs)(ue.Z, {children: [(0, f.jsx)(_, {}), (0, f.jsx)(de, {}), (0, f.jsx)(H, {}), (0, f.jsx)("div", {id: "anchor"}), (0, f.jsx)(U, {defaultTabKey: o}), (0, f.jsx)(we, {})]}), (0, f.jsx)(B.Z, {}), (0, f.jsx)(he.Z, {querySelector: "#home-product_list li:nth-child(20)"}), (0, f.jsx)(fe.Z, {}), (0, f.jsx)(ge, {})]});
        }
        let ke = be;
        be.getInitialProps = function () {
            let e = (0, n.Z)(o().mark(function e(s) {
                let t, n, a, r, l, c, d, u, m, x, v, p, h, f;
                return o().wrap(function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            e.prev = 0, true, e.next = 23;
                            break;
                        case 7:
                            return t = e.sent, n = (0, i.Z)(t, 3), a = n[0], r = a.banners, l = a.cubes, c = a.categories, d = a.comments, u = a.brandImage, m = n[1], x = m.banners, v = void 0 === x ? [] : x, p = m.downLoadGuide, h = void 0 === p ? {} : p, f = n[2], console.log("comments", d), e.abrupt("return", {props: {fallback: {isServerSide: true, banners: r, brandImage: u, comments: d, cubes: l, categories: (c || []).slice(0, 10), tabs: f, topBanners: v, downLoadGuide: h}}});
                        case 23:
                            e.next = 28;
                            break;
                        case 25:
                            e.prev = 25, e.t0 = e.catch(0), console.log("home fetch data error:", e.t0);
                        case 28:
                            return e.abrupt("return", {props: {fallback: {}}});
                        case 29:
                        case "end":
                            return e.stop();
                    }
                }, e, null, [[0, 25]]);
            }));
            return function (s) {
                return e.apply(this, arguments);
            };
        }();
    }, 91344: function (e, s, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/home", function () {
            return t(27545);
        }]);
    }, 82053: function (e, s, t) {
        "use strict";
        t.r(s), s.default = {src: "//pc-static-new.wholeecdn.com/_next/static/media/ajax-loader.98ae9d43.gif", height: 300, width: 300};
    }, 79608: function (e, s, t) {
        "use strict";
        t.r(s), s.default = {src: "//pc-static-new.wholeecdn.com/_next/static/media/empty.ca2f5f75.png", height: 292, width: 310, blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5ElEQVR42i2OQU7DMBBFzRLEjmNwAa4ASxCchSUbdpyEI3AAFrBBQtCGiNZ2kjZNbCe2Ezlu40zHVb80mpHe/zNDotzgT42xz23bfjRN826sfdHanB0gDtcIcqUUVFUFjDEQQoDWmmHdkb7vHyPMssxzzqckSSbG6BZDgJueiLXdlxuGmBgppVOapiHOzjkwxnySuq5vojuguq4LCAIAjEo1UG42t6QoisuyLCGahJC7PC/G1XoNiyXFs/kVicLnHqSUyCV8//zCbJ6sGOf3B+i9P4l9CuGiFuJtNv97/V8sz8lRey20x/QE4UwNAAAAAElFTkSuQmCC"};
    }, 99712: function (e) {
        e.exports = {brandImage: "BrandImage_brandImage__52oVk"};
    }, 55529: function (e) {
        e.exports = {cube: "Cube_cube__GhcVL", card: "Cube_card__I10hN", thumb: "Cube_thumb__qAke2"};
    }, 24013: function (e) {
        e.exports = {soldout: "NoItemMatched_soldout__yO1mm", image: "NoItemMatched_image__X0Zdn", content: "NoItemMatched_content__VB0ti", tip: "NoItemMatched_tip__FDexn"};
    }, 87784: function (e) {
        e.exports = {view_more: "ObserverLoading_view_more__PIZ_y"};
    }, 67188: function (e) {
        e.exports = {lazy: "ProductTabs_lazy__16OI5", recommendTitle: "ProductTabs_recommendTitle__q_PHb", tabs: "ProductTabs_tabs__75U__", tabs_sticky: "ProductTabs_tabs_sticky__bqihN", tabs_sticky_top: "ProductTabs_tabs_sticky_top__37MEM"};
    }, 71099: function (e) {
        e.exports = {reviews: "Reviews_reviews__x6msy", titleWrapper: "Reviews_titleWrapper__qkqZb", title: "Reviews_title__LR072", swiperContainer: "Reviews_swiperContainer__trFGK", swiperList: "Reviews_swiperList__1y6_Y", swiperItem: "Reviews_swiperItem__kUQ2q", "swiper-vertical": "Reviews_swiper-vertical__oWze0", item: "Reviews_item__Pn4tf", time: "Reviews_time___SZD0", star: "Reviews_star__u_buM", reviewText: "Reviews_reviewText__9Il5M", reviewImage: "Reviews_reviewImage__A2pUP", faqItem: "Reviews_faqItem__cOS8F", term: "Reviews_term__18JxE", userName: "Reviews_userName__mzmhS", text: "Reviews_text__7w3_9", text_answer: "Reviews_text_answer__wiFkm", reviewsModal: "Reviews_reviewsModal__vr9ik", back: "Reviews_back__eA9Zk", contentWrapper: "Reviews_contentWrapper__nuqcE", faqWrapper: "Reviews_faqWrapper__ifJGJ", subTitle: "Reviews_subTitle__8RyOq", reviewsWrapper: "Reviews_reviewsWrapper__vtqkv", reviewList: "Reviews_reviewList___CoDP", reviewItem: "Reviews_reviewItem__gZslP", userInfo: "Reviews_userInfo__Bz8Q2", productInfo: "Reviews_productInfo__QH7jS", productImg: "Reviews_productImg__rn3VV", productWrapper: "Reviews_productWrapper__3OOQ_", productTitle: "Reviews_productTitle__5kP89", productPrice: "Reviews_productPrice__eGrhd", images: "Reviews_images___kak3", imageWrapper: "Reviews_imageWrapper__yBRvb", faqs: "Reviews_faqs__tyYmH", wrapper: "Reviews_wrapper__dmnT3", icon: "Reviews_icon__E2Pg3", content: "Reviews_content__5MWFX", name: "Reviews_name__xm3oD", ask: "Reviews_ask__rUzZU", answer: "Reviews_answer__FUk7j"};
    }, 29298: function (e) {
        e.exports = {"product-media-modal__dialog": "ProductImgModal_product-media-modal__dialog__yK5J4", modal_close: "ProductImgModal_modal_close__f8PFR", modal_close_white: "ProductImgModal_modal_close_white__TQ5nj", "product-img-modal_content": "ProductImgModal_product-img-modal_content__t_nc9", "product-media-modal__content": "ProductImgModal_product-media-modal__content__emosO", "img-swiper-item": "ProductImgModal_img-swiper-item__jYes4", "product-media-modal_thumbnails": "ProductImgModal_product-media-modal_thumbnails__p8FVl", pswp_thumb_item: "ProductImgModal_pswp_thumb_item__cFhnC", pswp_thumb_item2: "ProductImgModal_pswp_thumb_item2__GsVfk", pswp_tb_active2: "ProductImgModal_pswp_tb_active2__GALAc", pswp_thumb_item_active: "ProductImgModal_pswp_thumb_item_active__q_OrF", "slider-button-wrapper": "ProductImgModal_slider-button-wrapper__aU2Ed", imgs_total: "ProductImgModal_imgs_total__g_G0Z", "slider-button": "ProductImgModal_slider-button__a14_V", "slider-button--next": "ProductImgModal_slider-button--next__ORHPl", "slider-button--prev": "ProductImgModal_slider-button--prev__GfPAj", "slider-button-wrapper-pre": "ProductImgModal_slider-button-wrapper-pre__cfulB", "slider-button-wrapper-next": "ProductImgModal_slider-button-wrapper-next__6RhZg"};
    }}, function (e) {
    e.O(0, [9774, 6208, 3426, 8391, 8488, 7637, 2059, 6282, 22, 7645, 3149, 1655, 6174, 2888, 179], function () {
        return s = 91344, e(e.s = s);
        let s;
    });
    let s = e.O();
    _N_E = s;
}]);
let total = 0;
for (let i = 0; i < 10; i++) {
    total += i;
}
console.log("Total: " + total);
