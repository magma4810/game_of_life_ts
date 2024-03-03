(() => {
  let e;
  let r;
  const n = {
    866: () => {
      function e(e, r, n) {
        const t = `<table border=1>${r.map((e, r) => `<tr>${e.map((e, n) => (e === 1 ? `<td \n          data-x=${n}\n          data-y=${r}\n          class="cell alive" \n          style="background-color:#000000; height:10px; width:10px;"></td>` : `<td \n        data-x=${n}\n        data-y=${r}\n        class="cell dead" \n        style="background-color:#FFFFFF; height:10px; width:10px;"></td>`)).join("")}</tr>`).join("")}</table>`;
        (e.innerHTML = t),
          e.querySelector("table").addEventListener("click", (e) => {
            const r = e.target;
            const t = r.getAttribute("data-x");
            const o = r.getAttribute("data-y");
            t >= 0 && o >= 0 && n(Number(t), Number(o));
          });
      }
      function r(e, r, n) {
        const t = e[n];
        if (void 0 === t) return 0;
        const o = t[r];
        return void 0 === o ? 0 : o;
      }
      const n = document.createElement("div");
      document.body.append(n),
        (function (n) {
          let t = !1;
          let o = null;
          let c = 1e3;
          let i = 1e3;
          let d = 10;
          let a = 10;
          n.innerHTML = `Columns<button class = "minusColumns">-</button>\n    <input class = "inputColumns" style = "height:10px; width:15px">  <button class = "plusColumns">+</button><br>\n    Rows<button class = "minusRows">-</button>  <input class = "inputRows" style = "height:10px; width:15px">\n    <button class = "plusRows">+</button><br>\n    Speed<button class = "minusSpeed">-</button><u><u class = "speed">${c / 1e3}</u> step per second</u><button class = "plusSpeed">+</button><br>\n    <button class = "start">Start</button>\n    <button class = "enterSize">Enter size</button>  <button class="clear">Clear</button><br>\n    <div class="field-wrapper"></div>`;
          const u = n.querySelector(".field-wrapper");
          const l = n.querySelector(".start");
          let s = p(a, d);
          function p(e, r) {
            const n = [];
            for (let t = 0; t < e; t++) {
              n[t] = [];
              for (let e = 0; e < r; e++) n[t][e] = 0;
            }
            return n;
          }
          const f = (r, n) => {
            (s[n][r] = s[n][r] === 0 ? 1 : 0), e(u, s, f);
          };
          e(u, s, f);
          const h = document.querySelector(".inputColumns");
          const m = document.querySelector(".inputRows");
          const v = document.querySelector(".speed");
          function y() {
            (a = m.value), (d = h.value), (s = p(a, d)), e(u, s, f);
          }
          function b() {
            (t = !1), (l.innerHTML = "Start"), clearInterval(o);
          }
          (h.value = d),
            (m.value = a),
            document
              .querySelector(".minusColumns")
              .addEventListener("click", () => {
                d--, (h.value = d), (s = p(a, d)), e(u, s, f);
              }),
            document
              .querySelector(".plusColumns")
              .addEventListener("click", () => {
                d++, (h.value = d), (s = p(a, d)), e(u, s, f);
              }),
            document
              .querySelector(".minusRows")
              .addEventListener("click", () => {
                a--, (m.value = a), (s = p(a, d)), e(u, s, f), console.log(s);
              }),
            document
              .querySelector(".plusRows")
              .addEventListener("click", () => {
                a++, (m.value = a), (s = p(a, d)), e(u, s, f);
              }),
            document
              .querySelector(".enterSize")
              .addEventListener("click", () => {
                y();
              }),
            document.querySelector(".clear").addEventListener("click", () => {
              y();
            }),
            document
              .querySelector(".minusSpeed")
              .addEventListener("click", () => {
                (c += 500), (i -= 500), (v.textContent = i / 1e3);
              }),
            document
              .querySelector(".plusSpeed")
              .addEventListener("click", () => {
                (c -= 500), (i += 500), (v.textContent = i / 1e3);
              }),
            l.addEventListener("click", () => {
              t
                ? b()
                : ((t = !0),
                  (l.innerHTML = "Stop"),
                  (o = setInterval(() => {
                    (s = (function (e) {
                      return e.map((n, t) =>
                        n.map((n, o) => {
                          const c = (function (e, n, t) {
                            let o = 0;
                            for (let c = e - 1; c <= e + 1; c += 1)
                              o += Number(r(t, c, n - 1));
                            for (let c = e - 1; c <= e + 1; c += 1)
                              o += Number(r(t, c, n + 1));
                            return (
                              (o += Number(r(t, e - 1, n))),
                              (o += Number(r(t, e + 1, n))),
                              o
                            );
                          })(o, t, e);
                          const i = r(e, o, t);
                          let d;
                          return (d = c) === 3
                            ? 1
                            : d > 3 || d < 2
                              ? 0
                              : d === 2 && i === 1
                                ? 1
                                : 0;
                        }),
                      );
                    })(s)),
                      e(u, s, f),
                      (function (e) {
                        for (let r = 0; r < e.length; r += 1) {
                          const n = e[r];
                          for (let e = 0; e < n.length; e += 1)
                            if (n[e]) return !0;
                        }
                        return !1;
                      })(s) || (alert("Death on the block"), b());
                  }, c)));
            });
        })(n);
    },
  };
  const t = {};
  function o(e) {
    const r = t[e];
    if (void 0 !== r) {
      if (void 0 !== r.error) throw r.error;
      return r.exports;
    }
    let c = (t[e] = { exports: {} });
    try {
      const i = { id: e, module: c, factory: n[e], require: o };
      o.i.forEach((e) => {
        e(i);
      }),
        (c = i.module),
        i.factory.call(c.exports, c, c.exports, i.require);
    } catch (e) {
      throw ((c.error = e), e);
    }
    return c.exports;
  }
  (o.m = n),
    (o.c = t),
    (o.i = []),
    (o.hu = (e) => `${e}.${o.h()}.hot-update.js`),
    (o.hmrF = () => `main.${o.h()}.hot-update.json`),
    (o.h = () => "1590d026590093157863"),
    (o.g = (function () {
      if (typeof globalThis === "object") return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if (typeof window === "object") return window;
      }
    })()),
    (o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (e = {}),
    (r = "gameoflife:"),
    (o.l = (n, t, c, i) => {
      if (e[n]) e[n].push(t);
      else {
        let d;
        let a;
        if (void 0 !== c)
          for (
            let u = document.getElementsByTagName("script"), l = 0;
            l < u.length;
            l++
          ) {
            const s = u[l];
            if (
              s.getAttribute("src") == n ||
              s.getAttribute("data-webpack") == r + c
            ) {
              d = s;
              break;
            }
          }
        d ||
          ((a = !0),
          ((d = document.createElement("script")).charset = "utf-8"),
          (d.timeout = 120),
          o.nc && d.setAttribute("nonce", o.nc),
          d.setAttribute("data-webpack", r + c),
          (d.src = n)),
          (e[n] = [t]);
        const p = (r, t) => {
          (d.onerror = d.onload = null), clearTimeout(f);
          const o = e[n];
          if (
            (delete e[n],
            d.parentNode && d.parentNode.removeChild(d),
            o && o.forEach((e) => e(t)),
            r)
          )
            return r(t);
        };
        var f = setTimeout(
          p.bind(null, void 0, { type: "timeout", target: d }),
          12e4,
        );
        (d.onerror = p.bind(null, d.onerror)),
          (d.onload = p.bind(null, d.onload)),
          a && document.head.appendChild(d);
      }
    }),
    (() => {
      let e;
      let r;
      let n;
      const t = {};
      const { c } = o;
      let i = [];
      const d = [];
      let a = "idle";
      let u = 0;
      let l = [];
      function s(e) {
        a = e;
        for (var r = [], n = 0; n < d.length; n++) r[n] = d[n].call(null, e);
        return Promise.all(r).then(() => {});
      }
      function p() {
        --u == 0 &&
          s("ready").then(() => {
            if (u === 0) {
              const e = l;
              l = [];
              for (let r = 0; r < e.length; r++) e[r]();
            }
          });
      }
      function f(e) {
        if (a !== "idle")
          throw new Error("check() is only allowed in idle status");
        return s("check")
          .then(o.hmrM)
          .then((n) =>
            n
              ? s("prepare").then(() => {
                  const t = [];
                  return (
                    (r = []),
                    Promise.all(
                      Object.keys(o.hmrC).reduce(
                        (e, c) => (o.hmrC[c](n.c, n.r, n.m, e, r, t), e),
                        [],
                      ),
                    ).then(() => {
                      return (
                        (r = function () {
                          return e ? m(e) : s("ready").then(() => t);
                        }),
                        u === 0
                          ? r()
                          : new Promise((e) => {
                              l.push(() => {
                                e(r());
                              });
                            })
                      );
                      let r;
                    })
                  );
                })
              : s(v() ? "ready" : "idle").then(() => null),
          );
      }
      function h(e) {
        return a !== "ready"
          ? Promise.resolve().then(() => {
              throw new Error(
                `apply() is only allowed in ready status (state: ${a})`,
              );
            })
          : m(e);
      }
      function m(e) {
        (e = e || {}), v();
        const t = r.map((r) => r(e));
        r = void 0;
        const o = t.map((e) => e.error).filter(Boolean);
        if (o.length > 0)
          return s("abort").then(() => {
            throw o[0];
          });
        const c = s("dispose");
        t.forEach((e) => {
          e.dispose && e.dispose();
        });
        let i;
        const d = s("apply");
        const a = function (e) {
          i || (i = e);
        };
        const u = [];
        return (
          t.forEach((e) => {
            if (e.apply) {
              const r = e.apply(a);
              if (r) for (let n = 0; n < r.length; n++) u.push(r[n]);
            }
          }),
          Promise.all([c, d]).then(() =>
            i
              ? s("fail").then(() => {
                  throw i;
                })
              : n
                ? m(e).then(
                    (e) => (
                      u.forEach((r) => {
                        e.indexOf(r) < 0 && e.push(r);
                      }),
                      e
                    ),
                  )
                : s("idle").then(() => u),
          )
        );
      }
      function v() {
        if (n)
          return (
            r || (r = []),
            Object.keys(o.hmrI).forEach((e) => {
              n.forEach((n) => {
                o.hmrI[e](n, r);
              });
            }),
            (n = void 0),
            !0
          );
      }
      (o.hmrD = t),
        o.i.push((l) => {
          let m;
          let v;
          let y;
          let b;
          const g = l.module;
          const E = (function (r, n) {
            const t = c[n];
            if (!t) return r;
            const o = function (o) {
              if (t.hot.active) {
                if (c[o]) {
                  const d = c[o].parents;
                  d.indexOf(n) === -1 && d.push(n);
                } else (i = [n]), (e = o);
                t.children.indexOf(o) === -1 && t.children.push(o);
              } else
                console.warn(
                  `[HMR] unexpected require(${o}) from disposed module ${n}`,
                ),
                  (i = []);
              return r(o);
            };
            const d = function (e) {
              return {
                configurable: !0,
                enumerable: !0,
                get() {
                  return r[e];
                },
                set(n) {
                  r[e] = n;
                },
              };
            };
            for (const l in r)
              Object.prototype.hasOwnProperty.call(r, l) &&
                l !== "e" &&
                Object.defineProperty(o, l, d(l));
            return (
              (o.e = function (e, n) {
                return (function (e) {
                  switch (a) {
                    case "ready":
                      s("prepare");
                    case "prepare":
                      return u++, e.then(p, p), e;
                    default:
                      return e;
                  }
                })(r.e(e, n));
              }),
              o
            );
          })(l.require, l.id);
          (g.hot =
            ((m = l.id),
            (v = g),
            (b = {
              _acceptedDependencies: {},
              _acceptedErrorHandlers: {},
              _declinedDependencies: {},
              _selfAccepted: !1,
              _selfDeclined: !1,
              _selfInvalidated: !1,
              _disposeHandlers: [],
              _main: (y = e !== m),
              _requireSelf() {
                (i = v.parents.slice()), (e = y ? void 0 : m), o(m);
              },
              active: !0,
              accept(e, r, n) {
                if (void 0 === e) b._selfAccepted = !0;
                else if (typeof e === "function") b._selfAccepted = e;
                else if (typeof e === "object" && e !== null)
                  for (let t = 0; t < e.length; t++)
                    (b._acceptedDependencies[e[t]] = r || function () {}),
                      (b._acceptedErrorHandlers[e[t]] = n);
                else
                  (b._acceptedDependencies[e] = r || function () {}),
                    (b._acceptedErrorHandlers[e] = n);
              },
              decline(e) {
                if (void 0 === e) b._selfDeclined = !0;
                else if (typeof e === "object" && e !== null)
                  for (let r = 0; r < e.length; r++)
                    b._declinedDependencies[e[r]] = !0;
                else b._declinedDependencies[e] = !0;
              },
              dispose(e) {
                b._disposeHandlers.push(e);
              },
              addDisposeHandler(e) {
                b._disposeHandlers.push(e);
              },
              removeDisposeHandler(e) {
                const r = b._disposeHandlers.indexOf(e);
                r >= 0 && b._disposeHandlers.splice(r, 1);
              },
              invalidate() {
                switch (((this._selfInvalidated = !0), a)) {
                  case "idle":
                    (r = []),
                      Object.keys(o.hmrI).forEach((e) => {
                        o.hmrI[e](m, r);
                      }),
                      s("ready");
                    break;
                  case "ready":
                    Object.keys(o.hmrI).forEach((e) => {
                      o.hmrI[e](m, r);
                    });
                    break;
                  case "prepare":
                  case "check":
                  case "dispose":
                  case "apply":
                    (n = n || []).push(m);
                }
              },
              check: f,
              apply: h,
              status(e) {
                if (!e) return a;
                d.push(e);
              },
              addStatusHandler(e) {
                d.push(e);
              },
              removeStatusHandler(e) {
                const r = d.indexOf(e);
                r >= 0 && d.splice(r, 1);
              },
              data: t[m],
            }),
            (e = void 0),
            b)),
            (g.parents = i),
            (g.children = []),
            (i = []),
            (l.require = E);
        }),
        (o.hmrC = {}),
        (o.hmrI = {});
    })(),
    (() => {
      let e;
      o.g.importScripts && (e = `${o.g.location}`);
      const r = o.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        const n = r.getElementsByTagName("script");
        if (n.length)
          for (let t = n.length - 1; t > -1 && (!e || !/^http(s?):/.test(e)); )
            e = n[t--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (o.p = e);
    })(),
    (() => {
      let e;
      let r;
      let n;
      let t;
      let c;
      const i = (o.hmrS_jsonp = o.hmrS_jsonp || { 792: 0 });
      const d = {};
      function a(r, n) {
        return (
          (e = n),
          new Promise((e, n) => {
            d[r] = e;
            const t = o.p + o.hu(r);
            const c = new Error();
            o.l(t, (e) => {
              if (d[r]) {
                d[r] = void 0;
                const t = e && (e.type === "load" ? "missing" : e.type);
                const o = e && e.target && e.target.src;
                (c.message = `Loading hot update chunk ${r} failed.\n(${t}: ${o})`),
                  (c.name = "ChunkLoadError"),
                  (c.type = t),
                  (c.request = o),
                  n(c);
              }
            });
          })
        );
      }
      function u(e) {
        function d(e) {
          for (
            var r = [e], n = {}, t = r.map((e) => ({ chain: [e], id: e }));
            t.length > 0;

          ) {
            const c = t.pop();
            const i = c.id;
            const d = c.chain;
            const u = o.c[i];
            if (u && (!u.hot._selfAccepted || u.hot._selfInvalidated)) {
              if (u.hot._selfDeclined)
                return { type: "self-declined", chain: d, moduleId: i };
              if (u.hot._main)
                return { type: "unaccepted", chain: d, moduleId: i };
              for (let l = 0; l < u.parents.length; l++) {
                const s = u.parents[l];
                const p = o.c[s];
                if (p) {
                  if (p.hot._declinedDependencies[i])
                    return {
                      type: "declined",
                      chain: d.concat([s]),
                      moduleId: i,
                      parentId: s,
                    };
                  r.indexOf(s) === -1 &&
                    (p.hot._acceptedDependencies[i]
                      ? (n[s] || (n[s] = []), a(n[s], [i]))
                      : (delete n[s],
                        r.push(s),
                        t.push({ chain: d.concat([s]), id: s })));
                }
              }
            }
          }
          return {
            type: "accepted",
            moduleId: e,
            outdatedModules: r,
            outdatedDependencies: n,
          };
        }
        function a(e, r) {
          for (let n = 0; n < r.length; n++) {
            const t = r[n];
            e.indexOf(t) === -1 && e.push(t);
          }
        }
        o.f && delete o.f.jsonpHmr, (r = void 0);
        const u = {};
        const l = [];
        const s = {};
        const p = function (e) {
          console.warn(`[HMR] unexpected require(${e.id}) to disposed module`);
        };
        for (let f in n)
          if (o.o(n, f)) {
            var h;
            const m = n[f];
            let v = !1;
            let y = !1;
            let b = !1;
            let g = "";
            switch (
              ((h = m ? d(f) : { type: "disposed", moduleId: f }).chain &&
                (g = `\nUpdate propagation: ${h.chain.join(" -> ")}`),
              h.type)
            ) {
              case "self-declined":
                e.onDeclined && e.onDeclined(h),
                  e.ignoreDeclined ||
                    (v = new Error(
                      `Aborted because of self decline: ${h.moduleId}${g}`,
                    ));
                break;
              case "declined":
                e.onDeclined && e.onDeclined(h),
                  e.ignoreDeclined ||
                    (v = new Error(
                      `Aborted because of declined dependency: ${h.moduleId} in ${h.parentId}${g}`,
                    ));
                break;
              case "unaccepted":
                e.onUnaccepted && e.onUnaccepted(h),
                  e.ignoreUnaccepted ||
                    (v = new Error(`Aborted because ${f} is not accepted${g}`));
                break;
              case "accepted":
                e.onAccepted && e.onAccepted(h), (y = !0);
                break;
              case "disposed":
                e.onDisposed && e.onDisposed(h), (b = !0);
                break;
              default:
                throw new Error(`Unexception type ${h.type}`);
            }
            if (v) return { error: v };
            if (y)
              for (f in ((s[f] = m),
              a(l, h.outdatedModules),
              h.outdatedDependencies))
                o.o(h.outdatedDependencies, f) &&
                  (u[f] || (u[f] = []), a(u[f], h.outdatedDependencies[f]));
            b && (a(l, [h.moduleId]), (s[f] = p));
          }
        n = void 0;
        for (var E, w = [], _ = 0; _ < l.length; _++) {
          const k = l[_];
          const I = o.c[k];
          I &&
            (I.hot._selfAccepted || I.hot._main) &&
            s[k] !== p &&
            !I.hot._selfInvalidated &&
            w.push({
              module: k,
              require: I.hot._requireSelf,
              errorHandler: I.hot._selfAccepted,
            });
        }
        return {
          dispose() {
            let e;
            t.forEach((e) => {
              delete i[e];
            }),
              (t = void 0);
            for (var r, n = l.slice(); n.length > 0; ) {
              const c = n.pop();
              var d = o.c[c];
              if (d) {
                const a = {};
                const s = d.hot._disposeHandlers;
                for (_ = 0; _ < s.length; _++) s[_].call(null, a);
                for (
                  o.hmrD[c] = a,
                    d.hot.active = !1,
                    delete o.c[c],
                    delete u[c],
                    _ = 0;
                  _ < d.children.length;
                  _++
                ) {
                  const p = o.c[d.children[_]];
                  p &&
                    (e = p.parents.indexOf(c)) >= 0 &&
                    p.parents.splice(e, 1);
                }
              }
            }
            for (const f in u)
              if (o.o(u, f) && (d = o.c[f]))
                for (E = u[f], _ = 0; _ < E.length; _++)
                  (r = E[_]),
                    (e = d.children.indexOf(r)) >= 0 && d.children.splice(e, 1);
          },
          apply(r) {
            for (const n in s) o.o(s, n) && (o.m[n] = s[n]);
            for (let t = 0; t < c.length; t++) c[t](o);
            for (const i in u)
              if (o.o(u, i)) {
                const d = o.c[i];
                if (d) {
                  E = u[i];
                  for (var a = [], p = [], f = [], h = 0; h < E.length; h++) {
                    const m = E[h];
                    const v = d.hot._acceptedDependencies[m];
                    const y = d.hot._acceptedErrorHandlers[m];
                    if (v) {
                      if (a.indexOf(v) !== -1) continue;
                      a.push(v), p.push(y), f.push(m);
                    }
                  }
                  for (let b = 0; b < a.length; b++)
                    try {
                      a[b].call(null, E);
                    } catch (n) {
                      if (typeof p[b] === "function")
                        try {
                          p[b](n, { moduleId: i, dependencyId: f[b] });
                        } catch (t) {
                          e.onErrored &&
                            e.onErrored({
                              type: "accept-error-handler-errored",
                              moduleId: i,
                              dependencyId: f[b],
                              error: t,
                              originalError: n,
                            }),
                            e.ignoreErrored || (r(t), r(n));
                        }
                      else
                        e.onErrored &&
                          e.onErrored({
                            type: "accept-errored",
                            moduleId: i,
                            dependencyId: f[b],
                            error: n,
                          }),
                          e.ignoreErrored || r(n);
                    }
                }
              }
            for (let g = 0; g < w.length; g++) {
              const _ = w[g];
              const k = _.module;
              try {
                _.require(k);
              } catch (n) {
                if (typeof _.errorHandler === "function")
                  try {
                    _.errorHandler(n, { moduleId: k, module: o.c[k] });
                  } catch (t) {
                    e.onErrored &&
                      e.onErrored({
                        type: "self-accept-error-handler-errored",
                        moduleId: k,
                        error: t,
                        originalError: n,
                      }),
                      e.ignoreErrored || (r(t), r(n));
                  }
                else
                  e.onErrored &&
                    e.onErrored({
                      type: "self-accept-errored",
                      moduleId: k,
                      error: n,
                    }),
                    e.ignoreErrored || r(n);
              }
            }
            return l;
          },
        };
      }
      (self.webpackHotUpdategameoflife = (r, t, i) => {
        for (const a in t) o.o(t, a) && ((n[a] = t[a]), e && e.push(a));
        i && c.push(i), d[r] && (d[r](), (d[r] = void 0));
      }),
        (o.hmrI.jsonp = function (e, r) {
          n || ((n = {}), (c = []), (t = []), r.push(u)),
            o.o(n, e) || (n[e] = o.m[e]);
        }),
        (o.hmrC.jsonp = function (e, d, l, s, p, f) {
          p.push(u),
            (r = {}),
            (t = d),
            (n = l.reduce((e, r) => ((e[r] = !1), e), {})),
            (c = []),
            e.forEach((e) => {
              o.o(i, e) && void 0 !== i[e]
                ? (s.push(a(e, f)), (r[e] = !0))
                : (r[e] = !1);
            }),
            o.f &&
              (o.f.jsonpHmr = function (e, n) {
                r && o.o(r, e) && !r[e] && (n.push(a(e)), (r[e] = !0));
              });
        }),
        (o.hmrM = () => {
          if (typeof fetch === "undefined")
            throw new Error("No browser support: need fetch API");
          return fetch(o.p + o.hmrF()).then((e) => {
            if (e.status !== 404) {
              if (!e.ok)
                throw new Error(
                  `Failed to fetch update manifest ${e.statusText}`,
                );
              return e.json();
            }
          });
        });
    })(),
    o(866);
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6InVCQUFJQSxFQUNBQyxFLFlDREcsU0FBU0MsRUFBVUMsRUFBc0JDLEVBQW1CQyxHQUMvRCxNQW1CTUMsRUFBUyxtQkFBa0JGLEVBQU1HLEtBbkJuQkMsQ0FBQ0MsRUFBZUMsSUFDMUIsT0FBTUQsRUFDWEYsS0FBSSxDQUFDSSxFQUFjQyxJQUNMLElBQVRELEVBQ00sMEJBQ0RDLHVCQUNBRiwrR0FJRCx3QkFDREUscUJBQ0FGLDRHQUlSRyxLQUFLLGFBRzhDQSxLQUFLLGNBRTdEVixFQUFhVyxVQUFZUixFQUV6QkgsRUFBYVksY0FBYyxTQUFVQyxpQkFBaUIsU0FBVUMsSUFDOUQsTUFBTUMsRUFBaUJELEVBQUdFLE9BRXBCQyxFQUFJRixFQUFlRyxhQUFhLFVBRWhDQyxFQUFJSixFQUFlRyxhQUFhLFVBQ2xDRCxHQUFLLEdBQUtFLEdBQUssR0FDakJqQixFQUFZa0IsT0FBT0gsR0FBSUcsT0FBT0QsR0FDaEMsR0FFSixDQ2xDSyxTQUFTRSxFQUFhcEIsRUFBbUJnQixFQUFXRSxHQUN2RCxNQUFNYixFQUFNTCxFQUFNa0IsR0FDbEIsUUFBWUcsSUFBUmhCLEVBQ0YsT0FBTyxFQUVULE1BQU1FLEVBQU9GLEVBQUlXLEdBQ2pCLFlBQWFLLElBQVRkLEVBQ0ssRUFFRkEsQ0FDVCxDQ05GLE1BQU1lLEVBQWlCQyxTQUFTQyxjQUFjLE9BRTlDRCxTQUFTRSxLQUFLQyxPQUFPSixHQ0ZkLFNBQTBCdkIsR0FDN0IsSUFBSTRCLEdBQXlCLEVBQ3pCQyxFQUF1RCxLQUN2REMsRUFBZ0IsSUFDaEJDLEVBQW9CLElBQ3BCQyxFQUFrQixHQUNsQkMsRUFBZSxHQUVuQmpDLEVBQVlXLFVBQWEsNllBSTJDbUIsRUFBTSwwUEFJMUUsTUFBTUksRUFBK0JsQyxFQUFZWSxjQUFjLGtCQUN6RHVCLEVBQXlCbkMsRUFBWVksY0FBYyxVQUN6RCxJQUFJWCxFQUFvQm1DLEVBQVVILEVBQUtELEdBQ3ZDLFNBQVNJLEVBQVVILEVBQWFELEdBQzVCLElBQUkvQixFQUFvQixHQUN4QixJQUFJLElBQUlvQyxFQUFJLEVBQUVBLEVBQUlKLEVBQUtJLElBQUksQ0FDdkJwQyxFQUFNb0MsR0FBSyxHQUNYLElBQUksSUFBSUMsRUFBSSxFQUFFQSxFQUFJTixFQUFRTSxJQUN0QnJDLEVBQU1vQyxHQUFHQyxHQUFLLENBRXRCLENBQ0EsT0FBT3JDLENBQ1gsQ0FDQSxNQUFNc0MsRUFBbUJBLENBQUN0QixFQUFXRSxLQUNqQ2xCLEVBQU1rQixHQUFHRixHQUFxQixJQUFoQmhCLEVBQU1rQixHQUFHRixHQUFXLEVBQUksRUFDdENsQixFQUFVbUMsRUFBZWpDLEVBQU9zQyxFQUFpQixFQUdyRHhDLEVBQVVtQyxFQUFlakMsRUFBT3NDLEdBRWhDLE1BQU1DLEVBQWVoQixTQUFTWixjQUFjLGlCQUN0QzZCLEVBQVlqQixTQUFTWixjQUFjLGNBQ25DOEIsRUFBZWxCLFNBQVNaLGNBQWMsVUEwRDVDLFNBQVMrQixJQUVMVixFQUFPUSxFQUFVRyxNQUVqQlosRUFBVVEsRUFBYUksTUFDdkIzQyxFQUFRbUMsRUFBVUgsRUFBS0QsR0FDdkJqQyxFQUFVbUMsRUFBZWpDLEVBQU9zQyxFQUNwQyxDQUNBLFNBQVNNLElBQ0xqQixHQUFnQixFQUNoQk8sRUFBUXhCLFVBQVksUUFDcEJtQyxjQUFjakIsRUFDbEIsQ0FwRUFXLEVBQWFJLE1BQVFaLEVBRXJCUyxFQUFVRyxNQUFRWCxFQUNsQlQsU0FBU1osY0FBYyxpQkFBa0JDLGlCQUFpQixTQUFRLEtBQzlEbUIsSUFFQVEsRUFBYUksTUFBUVosRUFDckIvQixFQUFRbUMsRUFBVUgsRUFBS0QsR0FDdkJqQyxFQUFVbUMsRUFBZWpDLEVBQU9zQyxFQUFpQixJQUVyRGYsU0FBU1osY0FBYyxnQkFBaUJDLGlCQUFpQixTQUFRLEtBQzdEbUIsSUFFQVEsRUFBYUksTUFBUVosRUFDckIvQixFQUFRbUMsRUFBVUgsRUFBS0QsR0FDdkJqQyxFQUFVbUMsRUFBZWpDLEVBQU9zQyxFQUFpQixJQUVyRGYsU0FBU1osY0FBYyxjQUFlQyxpQkFBaUIsU0FBUSxLQUMzRG9CLElBRUFRLEVBQVVHLE1BQVFYLEVBQ2xCaEMsRUFBUW1DLEVBQVVILEVBQUtELEdBQ3ZCakMsRUFBVW1DLEVBQWVqQyxFQUFPc0MsR0FDaENRLFFBQVFDLElBQUkvQyxFQUFNLElBRXRCdUIsU0FBU1osY0FBYyxhQUFjQyxpQkFBaUIsU0FBUSxLQUMxRG9CLElBRUFRLEVBQVVHLE1BQVFYLEVBQ2xCaEMsRUFBUW1DLEVBQVVILEVBQUtELEdBQ3ZCakMsRUFBVW1DLEVBQWVqQyxFQUFPc0MsRUFBaUIsSUFFckRmLFNBQVNaLGNBQWMsY0FBZUMsaUJBQWlCLFNBQVEsS0FDM0Q4QixHQUFtQixJQUV2Qm5CLFNBQVNaLGNBQWMsVUFBV0MsaUJBQWlCLFNBQVEsS0FDdkQ4QixHQUFtQixJQUduQm5CLFNBQVNaLGNBQWMsZUFBZ0JDLGlCQUFpQixTQUFRLEtBQzVEaUIsR0FBUyxJQUNUQyxHQUFhLElBRWJXLEVBQWFPLFlBQWNsQixFQUFVLEdBQUksSUFLN0NQLFNBQVNaLGNBQWMsY0FBZUMsaUJBQWlCLFNBQVEsS0FDM0RpQixHQUFTLElBQ1RDLEdBQWEsSUFFYlcsRUFBYU8sWUFBY2xCLEVBQVUsR0FBSSxJQXdDakRJLEVBQVF0QixpQkFBaUIsU0FBUyxLQUN6QmUsRUFHRGlCLEtBdkJKakIsR0FBZ0IsRUFDaEJPLEVBQVF4QixVQUFZLE9BRXBCa0IsRUFBUXFCLGFBQVksS0FRbEJqRCxFQzVISCxTQUFzQkEsR0FDM0IsT0FBT0EsRUFBTUcsS0FBSSxDQUFDRSxFQUFlQyxJQUMvQkQsRUFBSUYsS0FBSSxDQUFDSSxFQUFjMkMsS0FDckIsTUFBTUMsRUNMTCxTQUFpQ0MsRUFBZ0IvQyxFQUFhTCxHQUNuRSxJQUFJcUQsRUFBYSxFQUVqQixJQUFLLElBQUloQixFQUFJZSxFQUFTLEVBQUdmLEdBQUtlLEVBQVMsRUFBR2YsR0FBSyxFQUM3Q2dCLEdBQWNsQyxPQUFPQyxFQUFhcEIsRUFBT3FDLEVBQUdoQyxFQUFNLElBR3BELElBQUssSUFBSWdDLEVBQUllLEVBQVMsRUFBR2YsR0FBS2UsRUFBUyxFQUFHZixHQUFLLEVBQzdDZ0IsR0FBY2xDLE9BQU9DLEVBQWFwQixFQUFPcUMsRUFBR2hDLEVBQU0sSUFNcEQsT0FIQWdELEdBQWNsQyxPQUFPQyxFQUFhcEIsRUFBT29ELEVBQVMsRUFBRy9DLElBQ3JEZ0QsR0FBY2xDLE9BQU9DLEVBQWFwQixFQUFPb0QsRUFBUyxFQUFHL0MsSUFFOUNnRCxDQUNULENEVmlCQyxDQUF3QkosRUFBVzVDLEVBQVVOLEdBQ2xEdUQsRUFBZW5DLEVBQWFwQixFQUFPa0QsRUFBVzVDLEdFUm5ELElBQW1Ea0QsRUZVcEQsT0VUMkIsS0FEeUJBLEVGU0xMLEdFUHhDLEVBRUxLLEVBQXVCLEdBQUtBLEVBQXVCLEVBQzlDLEVBRW9CLElBQXpCQSxHQUFtRCxJRkVwQkQsRUVEMUIsRUFFRixDRkFVLEtBR3JCLENEbUhrQkUsQ0FBYXpELEdBQ3JCRixFQUFVbUMsRUFBZWpDLEVBQU9zQyxHSWpJbkMsU0FBdUJ0QyxHQUMxQixJQUFLLElBQUlvQyxFQUFJLEVBQUdBLEVBQUlwQyxFQUFNMEQsT0FBUXRCLEdBQUssRUFBRyxDQUN4QyxNQUFNL0IsRUFBTUwsRUFBTW9DLEdBQ2xCLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJaEMsRUFBSXFELE9BQVFyQixHQUFLLEVBRW5DLEdBRGFoQyxFQUFJZ0MsR0FFZixPQUFPLENBR2IsQ0FDQSxPQUFPLENBQ1QsQ0p1SGFzQixDQUFjM0QsS0FDakI0RCxNQUFNLHNCQUNOaEIsSUFDRixHQUNDZixHQU9ILEdBRVIsQ0R2SUFnQyxDQUFpQnZDLEUsR01QYndDLEVBQTJCLENBQUMsRUFHaEMsU0FBU0MsRUFBb0JDLEdBRTVCLElBQUlDLEVBQWVILEVBQXlCRSxHQUM1QyxRQUFxQjNDLElBQWpCNEMsRUFBNEIsQ0FDL0IsUUFBMkI1QyxJQUF2QjRDLEVBQWFDLE1BQXFCLE1BQU1ELEVBQWFDLE1BQ3pELE9BQU9ELEVBQWFFLE9BQ3JCLENBRUEsSUFBSUMsRUFBU04sRUFBeUJFLEdBQVksQ0FHakRHLFFBQVMsQ0FBQyxHQUlYLElBQ0MsSUFBSUUsRUFBYyxDQUFFQyxHQUFJTixFQUFVSSxPQUFRQSxFQUFRRyxRQUFTQyxFQUFvQlIsR0FBV1MsUUFBU1YsR0FDbkdBLEVBQW9CM0IsRUFBRXNDLFNBQVEsU0FBU0MsR0FBV0EsRUFBUU4sRUFBYyxJQUN4RUQsRUFBU0MsRUFBWUQsT0FDckJDLEVBQVlFLFFBQVFLLEtBQUtSLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNFLEVBQVlJLFFBQzlFLENBQUUsTUFBTUksR0FFUCxNQURBVCxFQUFPRixNQUFRVyxFQUNUQSxDQUNQLENBR0EsT0FBT1QsRUFBT0QsT0FDZixDQUdBSixFQUFvQmUsRUFBSU4sRUFHeEJULEVBQW9CZ0IsRUFBSWpCLEVBR3hCQyxFQUFvQjNCLEVBQUksR0N2Q3hCMkIsRUFBb0JpQixHQUFNQyxHQUViQSxFQUFVLElBQU1sQixFQUFvQm1CLElBQU0saUJDSHZEbkIsRUFBb0JvQixLQUFPLElBQU8sUUFBVXBCLEVBQW9CbUIsSUFBTSxtQkNBdEVuQixFQUFvQm1CLEVBQUksSUFBTSx1QkNBOUJuQixFQUFvQnFCLEVBQUksV0FDdkIsR0FBMEIsaUJBQWZDLFdBQXlCLE9BQU9BLFdBQzNDLElBQ0MsT0FBT0MsTUFBUSxJQUFJQyxTQUFTLGNBQWIsRUFDaEIsQ0FBRSxNQUFPVixHQUNSLEdBQXNCLGlCQUFYVyxPQUFxQixPQUFPQSxNQUN4QyxDQUNBLENBUHVCLEdDQXhCekIsRUFBb0IwQixFQUFJLENBQUNDLEVBQUtDLElBQVVDLE9BQU9DLFVBQVVDLGVBQWVsQixLQUFLYyxFQUFLQyxHZEE5RS9GLEVBQWEsQ0FBQyxFQUNkQyxFQUFvQixjQUV4QmtFLEVBQW9CZ0MsRUFBSSxDQUFDQyxFQUFLQyxFQUFNQyxFQUFLakIsS0FDeEMsR0FBR3JGLEVBQVdvRyxHQUFRcEcsRUFBV29HLEdBQUtHLEtBQUtGLE9BQTNDLENBQ0EsSUFBSUcsRUFBUUMsRUFDWixRQUFXaEYsSUFBUjZFLEVBRUYsSUFEQSxJQUFJSSxFQUFVL0UsU0FBU2dGLHFCQUFxQixVQUNwQ25FLEVBQUksRUFBR0EsRUFBSWtFLEVBQVE1QyxPQUFRdEIsSUFBSyxDQUN2QyxJQUFJb0UsRUFBSUYsRUFBUWxFLEdBQ2hCLEdBQUdvRSxFQUFFdkYsYUFBYSxRQUFVK0UsR0FBT1EsRUFBRXZGLGFBQWEsaUJBQW1CcEIsRUFBb0JxRyxFQUFLLENBQUVFLEVBQVNJLEVBQUcsS0FBTyxDQUNwSCxDQUVHSixJQUNIQyxHQUFhLEdBQ2JELEVBQVM3RSxTQUFTQyxjQUFjLFdBRXpCaUYsUUFBVSxRQUNqQkwsRUFBT00sUUFBVSxJQUNiM0MsRUFBb0I0QyxJQUN2QlAsRUFBT1EsYUFBYSxRQUFTN0MsRUFBb0I0QyxJQUVsRFAsRUFBT1EsYUFBYSxlQUFnQi9HLEVBQW9CcUcsR0FFeERFLEVBQU9TLElBQU1iLEdBRWRwRyxFQUFXb0csR0FBTyxDQUFDQyxHQUNuQixJQUFJYSxFQUFtQixDQUFDQyxFQUFNQyxLQUU3QlosRUFBT2EsUUFBVWIsRUFBT2MsT0FBUyxLQUNqQ0MsYUFBYVQsR0FDYixJQUFJVSxFQUFVeEgsRUFBV29HLEdBSXpCLFVBSE9wRyxFQUFXb0csR0FDbEJJLEVBQU9pQixZQUFjakIsRUFBT2lCLFdBQVdDLFlBQVlsQixHQUNuRGdCLEdBQVdBLEVBQVExQyxTQUFTNkMsR0FBUUEsRUFBR1AsS0FDcENELEVBQU0sT0FBT0EsRUFBS0MsRUFBTSxFQUV4Qk4sRUFBVWMsV0FBV1YsRUFBaUJXLEtBQUssVUFBTXBHLEVBQVcsQ0FBRXFHLEtBQU0sVUFBVzNHLE9BQVFxRixJQUFXLE1BQ3RHQSxFQUFPYSxRQUFVSCxFQUFpQlcsS0FBSyxLQUFNckIsRUFBT2EsU0FDcERiLEVBQU9jLE9BQVNKLEVBQWlCVyxLQUFLLEtBQU1yQixFQUFPYyxRQUNuRGIsR0FBYzlFLFNBQVNvRyxLQUFLQyxZQUFZeEIsRUFwQ2tCLENBb0NYLEUsTWV4Q2hELElBSUl5QixFQVlBQyxFQUNBQyxFQWpCQUMsRUFBb0IsQ0FBQyxFQUNyQkMsRUFBbUJsRSxFQUFvQmdCLEVBSXZDbUQsRUFBaUIsR0FHakJDLEVBQTJCLEdBQzNCQyxFQUFnQixPQUdoQkMsRUFBbUIsRUFDbkJDLEVBQTBCLEdBbUw5QixTQUFTQyxFQUFVQyxHQUNsQkosRUFBZ0JJLEVBR2hCLElBRkEsSUFBSUMsRUFBVSxHQUVMckcsRUFBSSxFQUFHQSxFQUFJK0YsRUFBeUJ6RSxPQUFRdEIsSUFDcERxRyxFQUFRckcsR0FBSytGLEVBQXlCL0YsR0FBR3dDLEtBQUssS0FBTTRELEdBRXJELE9BQU9FLFFBQVFDLElBQUlGLEdBQVNHLE1BQUssV0FBYSxHQUMvQyxDQUVBLFNBQVNDLElBQ21CLEtBQXJCUixHQUNMRSxFQUFVLFNBQVNLLE1BQUssV0FDdkIsR0FBeUIsSUFBckJQLEVBQXdCLENBQzNCLElBQUlTLEVBQU9SLEVBQ1hBLEVBQTBCLEdBQzFCLElBQUssSUFBSWxHLEVBQUksRUFBR0EsRUFBSTBHLEVBQUtwRixPQUFRdEIsSUFDaEMwRyxFQUFLMUcsSUFFUCxDQUNELEdBRUYsQ0F5QkEsU0FBUzJHLEVBQVNDLEdBQ2pCLEdBQXNCLFNBQWxCWixFQUNILE1BQU0sSUFBSWEsTUFBTSwwQ0FFakIsT0FBT1YsRUFBVSxTQUNmSyxLQUFLN0UsRUFBb0JtRixNQUN6Qk4sTUFBSyxTQUFVTyxHQUNmLE9BQUtBLEVBUUVaLEVBQVUsV0FBV0ssTUFBSyxXQUNoQyxJQUFJUSxFQUFpQixHQUdyQixPQUZBdEIsRUFBNkIsR0FFdEJZLFFBQVFDLElBQ2QvQyxPQUFPeUQsS0FBS3RGLEVBQW9CdUYsTUFBTUMsUUFBTyxTQUM1Q0MsRUFDQXRELEdBVUEsT0FSQW5DLEVBQW9CdUYsS0FBS3BELEdBQ3hCaUQsRUFBT3BFLEVBQ1BvRSxFQUFPTSxFQUNQTixFQUFPckUsRUFDUDBFLEVBQ0ExQixFQUNBc0IsR0FFTUksQ0FDUixHQUFHLEtBQ0ZaLE1BQUssV0FDTixPQTVDNEJyQixFQTRDRyxXQUM5QixPQUFJeUIsRUFDSVUsRUFBY1YsR0FFZFQsRUFBVSxTQUFTSyxNQUFLLFdBQzlCLE9BQU9RLENBQ1IsR0FFRixFQW5EcUIsSUFBckJmLEVBQStCZCxJQUM1QixJQUFJbUIsU0FBUSxTQUFVaUIsR0FDNUJyQixFQUF3Qm5DLE1BQUssV0FDNUJ3RCxFQUFRcEMsSUFDVCxHQUNELElBTkQsSUFBaUNBLENBcUQ3QixHQUNELElBckNRZ0IsRUFBVXFCLElBQTRCLFFBQVUsUUFBUWhCLE1BQzlELFdBQ0MsT0FBTyxJQUNSLEdBbUNILEdBQ0YsQ0FFQSxTQUFTaUIsRUFBU0MsR0FDakIsTUFBc0IsVUFBbEIxQixFQUNJTSxRQUFRaUIsVUFBVWYsTUFBSyxXQUM3QixNQUFNLElBQUlLLE1BQ1QsbURBQ0NiLEVBQ0EsSUFFSCxJQUVNc0IsRUFBY0ksRUFDdEIsQ0FFQSxTQUFTSixFQUFjSSxHQUN0QkEsRUFBVUEsR0FBVyxDQUFDLEVBRXRCRixJQUVBLElBQUluQixFQUFVWCxFQUEyQjNILEtBQUksU0FBVXdFLEdBQ3RELE9BQU9BLEVBQVFtRixFQUNoQixJQUNBaEMsT0FBNkJ6RyxFQUU3QixJQUFJMEksRUFBU3RCLEVBQ1h0SSxLQUFJLFNBQVVzSixHQUNkLE9BQU9BLEVBQUV2RixLQUNWLElBQ0M4RixPQUFPQyxTQUVULEdBQUlGLEVBQU9yRyxPQUFTLEVBQ25CLE9BQU82RSxFQUFVLFNBQVNLLE1BQUssV0FDOUIsTUFBTW1CLEVBQU8sRUFDZCxJQUlELElBQUlHLEVBQWlCM0IsRUFBVSxXQUUvQkUsRUFBUS9ELFNBQVEsU0FBVXlGLEdBQ3JCQSxFQUFPQyxTQUFTRCxFQUFPQyxTQUM1QixJQUdBLElBRUlsRyxFQUZBbUcsRUFBZTlCLEVBQVUsU0FHekIrQixFQUFjLFNBQVVDLEdBQ3RCckcsSUFBT0EsRUFBUXFHLEVBQ3JCLEVBRUlDLEVBQWtCLEdBWXRCLE9BWEEvQixFQUFRL0QsU0FBUSxTQUFVeUYsR0FDekIsR0FBSUEsRUFBT00sTUFBTyxDQUNqQixJQUFJQyxFQUFVUCxFQUFPTSxNQUFNSCxHQUMzQixHQUFJSSxFQUNILElBQUssSUFBSXRJLEVBQUksRUFBR0EsRUFBSXNJLEVBQVFoSCxPQUFRdEIsSUFDbkNvSSxFQUFnQnJFLEtBQUt1RSxFQUFRdEksR0FHaEMsQ0FDRCxJQUVPc0csUUFBUUMsSUFBSSxDQUFDdUIsRUFBZ0JHLElBQWV6QixNQUFLLFdBRXZELE9BQUkxRSxFQUNJcUUsRUFBVSxRQUFRSyxNQUFLLFdBQzdCLE1BQU0xRSxDQUNQLElBR0c2RCxFQUNJMkIsRUFBY0ksR0FBU2xCLE1BQUssU0FBVUUsR0FJNUMsT0FIQTBCLEVBQWdCOUYsU0FBUSxTQUFVVixHQUM3QjhFLEVBQUs2QixRQUFRM0csR0FBWSxHQUFHOEUsRUFBSzNDLEtBQUtuQyxFQUMzQyxJQUNPOEUsQ0FDUixJQUdNUCxFQUFVLFFBQVFLLE1BQUssV0FDN0IsT0FBTzRCLENBQ1IsR0FDRCxHQUNELENBRUEsU0FBU1osSUFDUixHQUFJN0IsRUFXSCxPQVZLRCxJQUE0QkEsRUFBNkIsSUFDOURsQyxPQUFPeUQsS0FBS3RGLEVBQW9CNkcsTUFBTWxHLFNBQVEsU0FBVXdCLEdBQ3ZENkIsRUFBeUJyRCxTQUFRLFNBQVVWLEdBQzFDRCxFQUFvQjZHLEtBQUsxRSxHQUN4QmxDLEVBQ0E4RCxFQUVGLEdBQ0QsSUFDQUMsT0FBMkIxRyxHQUNwQixDQUVULENBaFhBMEMsRUFBb0I4RyxLQUFPN0MsRUFFM0JqRSxFQUFvQjNCLEVBQUUrRCxNQUFLLFNBQVUyRCxHQUNwQyxJQStEOEI5RixFQUFVOEcsRUFDcENDLEVBQ0FDLEVBakVBNUcsRUFBUzBGLEVBQVExRixPQUNqQkssRUFXTCxTQUF1QkEsRUFBU1QsR0FDL0IsSUFBSThHLEVBQUs3QyxFQUFpQmpFLEdBQzFCLElBQUs4RyxFQUFJLE9BQU9yRyxFQUNoQixJQUFJOEMsRUFBSyxTQUFVMEQsR0FDbEIsR0FBSUgsRUFBR0UsSUFBSUUsT0FBUSxDQUNsQixHQUFJakQsRUFBaUJnRCxHQUFVLENBQzlCLElBQUlFLEVBQVVsRCxFQUFpQmdELEdBQVNFLFNBQ0wsSUFBL0JBLEVBQVFSLFFBQVEzRyxJQUNuQm1ILEVBQVFoRixLQUFLbkMsRUFFZixNQUNDa0UsRUFBaUIsQ0FBQ2xFLEdBQ2xCNkQsRUFBcUJvRCxHQUVnQixJQUFsQ0gsRUFBR00sU0FBU1QsUUFBUU0sSUFDdkJILEVBQUdNLFNBQVNqRixLQUFLOEUsRUFFbkIsTUFDQ25JLFFBQVF1SSxLQUNQLDRCQUNDSixFQUNBLDBCQUNBakgsR0FFRmtFLEVBQWlCLEdBRWxCLE9BQU96RCxFQUFRd0csRUFDaEIsRUFDSUssRUFBMkIsU0FBVUMsR0FDeEMsTUFBTyxDQUNOQyxjQUFjLEVBQ2RDLFlBQVksRUFDWkMsSUFBSyxXQUNKLE9BQU9qSCxFQUFROEcsRUFDaEIsRUFDQUksSUFBSyxTQUFVaEosR0FDZDhCLEVBQVE4RyxHQUFRNUksQ0FDakIsRUFFRixFQUNBLElBQUssSUFBSTRJLEtBQVE5RyxFQUNabUIsT0FBT0MsVUFBVUMsZUFBZWxCLEtBQUtILEVBQVM4RyxJQUFrQixNQUFUQSxHQUMxRDNGLE9BQU9nRyxlQUFlckUsRUFBSWdFLEVBQU1ELEVBQXlCQyxJQU0zRCxPQUhBaEUsRUFBRzFDLEVBQUksU0FBVUksRUFBUzRHLEdBQ3pCLE9Bd0lGLFNBQThCQyxHQUM3QixPQUFRMUQsR0FDUCxJQUFLLFFBQ0pHLEVBQVUsV0FFWCxJQUFLLFVBR0osT0FGQUYsSUFDQXlELEVBQVFsRCxLQUFLQyxFQUFTQSxHQUNmaUQsRUFDUixRQUNDLE9BQU9BLEVBRVYsQ0FwSlNDLENBQXFCdEgsRUFBUUksRUFBRUksRUFBUzRHLEdBQ2hELEVBQ090RSxDQUNSLENBNURleUUsQ0FBY2xDLEVBQVFyRixRQUFTcUYsRUFBUXhGLElBQ3JERixFQUFPNEcsS0E2RHVCaEgsRUE3REs4RixFQUFReEYsR0E2REh3RyxFQTdETzFHLEVBK0QzQzRHLEVBQU0sQ0FFVGlCLHNCQUF1QixDQUFDLEVBQ3hCQyx1QkFBd0IsQ0FBQyxFQUN6QkMsc0JBQXVCLENBQUMsRUFDeEJDLGVBQWUsRUFDZkMsZUFBZSxFQUNmQyxrQkFBa0IsRUFDbEJDLGlCQUFrQixHQUNsQnhCLE1BVkdBLEVBQVFsRCxJQUF1QjdELEVBV2xDd0ksYUFBYyxXQUNidEUsRUFBaUI0QyxFQUFHSyxRQUFRc0IsUUFDNUI1RSxFQUFxQmtELE9BQVExSixFQUFZMkMsRUFDekNELEVBQW9CQyxFQUNyQixFQUdBa0gsUUFBUSxFQUNSd0IsT0FBUSxTQUFVQyxFQUFLQyxFQUFVQyxHQUNoQyxRQUFZeEwsSUFBUnNMLEVBQW1CM0IsRUFBSW9CLGVBQWdCLE9BQ3RDLEdBQW1CLG1CQUFSTyxFQUFvQjNCLEVBQUlvQixjQUFnQk8sT0FDbkQsR0FBbUIsaUJBQVJBLEdBQTRCLE9BQVJBLEVBQ25DLElBQUssSUFBSXZLLEVBQUksRUFBR0EsRUFBSXVLLEVBQUlqSixPQUFRdEIsSUFDL0I0SSxFQUFJaUIsc0JBQXNCVSxFQUFJdkssSUFBTXdLLEdBQVksV0FBYSxFQUM3RDVCLEVBQUlrQix1QkFBdUJTLEVBQUl2SyxJQUFNeUssT0FHdEM3QixFQUFJaUIsc0JBQXNCVSxHQUFPQyxHQUFZLFdBQWEsRUFDMUQ1QixFQUFJa0IsdUJBQXVCUyxHQUFPRSxDQUVwQyxFQUNBQyxRQUFTLFNBQVVILEdBQ2xCLFFBQVl0TCxJQUFSc0wsRUFBbUIzQixFQUFJcUIsZUFBZ0IsT0FDdEMsR0FBbUIsaUJBQVJNLEdBQTRCLE9BQVJBLEVBQ25DLElBQUssSUFBSXZLLEVBQUksRUFBR0EsRUFBSXVLLEVBQUlqSixPQUFRdEIsSUFDL0I0SSxFQUFJbUIsc0JBQXNCUSxFQUFJdkssS0FBTSxPQUNqQzRJLEVBQUltQixzQkFBc0JRLElBQU8sQ0FDdkMsRUFDQXZDLFFBQVMsU0FBVXdDLEdBQ2xCNUIsRUFBSXVCLGlCQUFpQnBHLEtBQUt5RyxFQUMzQixFQUNBRyxrQkFBbUIsU0FBVUgsR0FDNUI1QixFQUFJdUIsaUJBQWlCcEcsS0FBS3lHLEVBQzNCLEVBQ0FJLHFCQUFzQixTQUFVSixHQUMvQixJQUFJSyxFQUFNakMsRUFBSXVCLGlCQUFpQjVCLFFBQVFpQyxHQUNuQ0ssR0FBTyxHQUFHakMsRUFBSXVCLGlCQUFpQlcsT0FBT0QsRUFBSyxFQUNoRCxFQUNBRSxXQUFZLFdBRVgsT0FEQTdILEtBQUtnSCxrQkFBbUIsRUFDaEJsRSxHQUNQLElBQUssT0FDSk4sRUFBNkIsR0FDN0JsQyxPQUFPeUQsS0FBS3RGLEVBQW9CNkcsTUFBTWxHLFNBQVEsU0FBVXdCLEdBQ3ZEbkMsRUFBb0I2RyxLQUFLMUUsR0FDeEJsQyxFQUNBOEQsRUFFRixJQUNBUyxFQUFVLFNBQ1YsTUFDRCxJQUFLLFFBQ0ozQyxPQUFPeUQsS0FBS3RGLEVBQW9CNkcsTUFBTWxHLFNBQVEsU0FBVXdCLEdBQ3ZEbkMsRUFBb0I2RyxLQUFLMUUsR0FDeEJsQyxFQUNBOEQsRUFFRixJQUNBLE1BQ0QsSUFBSyxVQUNMLElBQUssUUFDTCxJQUFLLFVBQ0wsSUFBSyxTQUNIQyxFQUEyQkEsR0FBNEIsSUFBSTVCLEtBQzNEbkMsR0FPSixFQUdBb0osTUFBT3JFLEVBQ1AwQixNQUFPWixFQUNQd0QsT0FBUSxTQUFVdEgsR0FDakIsSUFBS0EsRUFBRyxPQUFPcUMsRUFDZkQsRUFBeUJoQyxLQUFLSixFQUMvQixFQUNBdUgsaUJBQWtCLFNBQVV2SCxHQUMzQm9DLEVBQXlCaEMsS0FBS0osRUFDL0IsRUFDQXdILG9CQUFxQixTQUFVeEgsR0FDOUIsSUFBSWtILEVBQU05RSxFQUF5QndDLFFBQVE1RSxHQUN2Q2tILEdBQU8sR0FBRzlFLEVBQXlCK0UsT0FBT0QsRUFBSyxFQUNwRCxFQUdBTyxLQUFNeEYsRUFBa0JoRSxJQUV6QjZELE9BQXFCeEcsRUFDZDJKLEdBcEtQNUcsRUFBTytHLFFBQVVqRCxFQUNqQjlELEVBQU9nSCxTQUFXLEdBQ2xCbEQsRUFBaUIsR0FDakI0QixFQUFRckYsUUFBVUEsQ0FDbkIsSUFFQVYsRUFBb0J1RixLQUFPLENBQUMsRUFDNUJ2RixFQUFvQjZHLEtBQU8sQ0FBQyxDLFdDaEM1QixJQUFJNkMsRUFDQTFKLEVBQW9CcUIsRUFBRXNJLGdCQUFlRCxFQUFZMUosRUFBb0JxQixFQUFFdUksU0FBVyxJQUN0RixJQUFJcE0sRUFBV3dDLEVBQW9CcUIsRUFBRTdELFNBQ3JDLElBQUtrTSxHQUFhbE0sSUFDYkEsRUFBU3FNLGdCQUNaSCxFQUFZbE0sRUFBU3FNLGNBQWMvRyxNQUMvQjRHLEdBQVcsQ0FDZixJQUFJbkgsRUFBVS9FLEVBQVNnRixxQkFBcUIsVUFDNUMsR0FBR0QsRUFBUTVDLE9BRVYsSUFEQSxJQUFJdEIsRUFBSWtFLEVBQVE1QyxPQUFTLEVBQ2xCdEIsR0FBSyxLQUFPcUwsSUFBYyxhQUFhSSxLQUFLSixLQUFhQSxFQUFZbkgsRUFBUWxFLEtBQUt5RSxHQUUzRixDQUlELElBQUs0RyxFQUFXLE1BQU0sSUFBSXhFLE1BQU0seURBQ2hDd0UsRUFBWUEsRUFBVUssUUFBUSxPQUFRLElBQUlBLFFBQVEsUUFBUyxJQUFJQSxRQUFRLFlBQWEsS0FDcEYvSixFQUFvQmdLLEVBQUlOLEMsV0NieEIsSUFVSU8sRUF3Q0FDLEVBQ0FDLEVBQ0FDLEVBQ0FDLEVBckRBQyxFQUFrQnRLLEVBQW9CdUssV0FBYXZLLEVBQW9CdUssWUFBYyxDQUN4RixJQUFLLEdBVUZDLEVBQXdCLENBQUMsRUFDN0IsU0FBU0MsRUFBZ0J2SixFQUFTd0osR0FFakMsT0FEQVQsRUFBNEJTLEVBQ3JCLElBQUkvRixTQUFRLENBQUNpQixFQUFTK0UsS0FDNUJILEVBQXNCdEosR0FBVzBFLEVBRWpDLElBQUkzRCxFQUFNakMsRUFBb0JnSyxFQUFJaEssRUFBb0JpQixHQUFHQyxHQUVyRGYsRUFBUSxJQUFJK0UsTUFhaEJsRixFQUFvQmdDLEVBQUVDLEdBWkZnQixJQUNuQixHQUFHdUgsRUFBc0J0SixHQUFVLENBQ2xDc0osRUFBc0J0SixRQUFXNUQsRUFDakMsSUFBSXNOLEVBQVkzSCxJQUF5QixTQUFmQSxFQUFNVSxLQUFrQixVQUFZVixFQUFNVSxNQUNoRWtILEVBQVU1SCxHQUFTQSxFQUFNakcsUUFBVWlHLEVBQU1qRyxPQUFPOEYsSUFDcEQzQyxFQUFNMkssUUFBVSw0QkFBOEI1SixFQUFVLGNBQWdCMEosRUFBWSxLQUFPQyxFQUFVLElBQ3JHMUssRUFBTXFILEtBQU8saUJBQ2JySCxFQUFNd0QsS0FBT2lILEVBQ2J6SyxFQUFNK0csUUFBVTJELEVBQ2hCRixFQUFPeEssRUFDUixJQUV1QyxHQUUxQyxDQW9CQSxTQUFTNEssRUFBYWhGLEdBR3JCLFNBQVNpRixFQUF5QkMsR0FVakMsSUFUQSxJQUFJeEUsRUFBa0IsQ0FBQ3dFLEdBQ25CQyxFQUF1QixDQUFDLEVBRXhCQyxFQUFRMUUsRUFBZ0JySyxLQUFJLFNBQVVtRSxHQUN6QyxNQUFPLENBQ042SyxNQUFPLENBQUM3SyxHQUNSQSxHQUFJQSxFQUVOLElBQ080SyxFQUFNeEwsT0FBUyxHQUFHLENBQ3hCLElBQUkwTCxFQUFZRixFQUFNRyxNQUNsQnJMLEVBQVdvTCxFQUFVOUssR0FDckI2SyxFQUFRQyxFQUFVRCxNQUNsQi9LLEVBQVNMLEVBQW9CZ0IsRUFBRWYsR0FDbkMsR0FDRUksS0FDQUEsRUFBTzRHLElBQUlvQixlQUFrQmhJLEVBQU80RyxJQUFJc0Isa0JBRjFDLENBS0EsR0FBSWxJLEVBQU80RyxJQUFJcUIsY0FDZCxNQUFPLENBQ04zRSxLQUFNLGdCQUNOeUgsTUFBT0EsRUFDUG5MLFNBQVVBLEdBR1osR0FBSUksRUFBTzRHLElBQUlELE1BQ2QsTUFBTyxDQUNOckQsS0FBTSxhQUNOeUgsTUFBT0EsRUFDUG5MLFNBQVVBLEdBR1osSUFBSyxJQUFJNUIsRUFBSSxFQUFHQSxFQUFJZ0MsRUFBTytHLFFBQVF6SCxPQUFRdEIsSUFBSyxDQUMvQyxJQUFJa04sRUFBV2xMLEVBQU8rRyxRQUFRL0ksR0FDMUJtTixFQUFTeEwsRUFBb0JnQixFQUFFdUssR0FDbkMsR0FBS0MsRUFBTCxDQUNBLEdBQUlBLEVBQU92RSxJQUFJbUIsc0JBQXNCbkksR0FDcEMsTUFBTyxDQUNOMEQsS0FBTSxXQUNOeUgsTUFBT0EsRUFBTUssT0FBTyxDQUFDRixJQUNyQnRMLFNBQVVBLEVBQ1ZzTCxTQUFVQSxJQUcrQixJQUF2QzlFLEVBQWdCRyxRQUFRMkUsS0FDeEJDLEVBQU92RSxJQUFJaUIsc0JBQXNCakksSUFDL0JpTCxFQUFxQkssS0FDekJMLEVBQXFCSyxHQUFZLElBQ2xDRyxFQUFZUixFQUFxQkssR0FBVyxDQUFDdEwsYUFHdkNpTCxFQUFxQkssR0FDNUI5RSxFQUFnQnJFLEtBQUttSixHQUNyQkosRUFBTS9JLEtBQUssQ0FDVmdKLE1BQU9BLEVBQU1LLE9BQU8sQ0FBQ0YsSUFDckJoTCxHQUFJZ0wsS0FwQmdCLENBc0J0QixDQXhDUyxDQXlDVixDQUVBLE1BQU8sQ0FDTjVILEtBQU0sV0FDTjFELFNBQVVnTCxFQUNWeEUsZ0JBQWlCQSxFQUNqQnlFLHFCQUFzQkEsRUFFeEIsQ0FFQSxTQUFTUSxFQUFZQyxFQUFHQyxHQUN2QixJQUFLLElBQUl2TixFQUFJLEVBQUdBLEVBQUl1TixFQUFFak0sT0FBUXRCLElBQUssQ0FDbEMsSUFBSXdOLEVBQU9ELEVBQUV2TixJQUNZLElBQXJCc04sRUFBRS9FLFFBQVFpRixJQUFjRixFQUFFdkosS0FBS3lKLEVBQ3BDLENBQ0QsQ0E3RUk3TCxFQUFvQjhMLFVBQVU5TCxFQUFvQjhMLEVBQUVDLFNBQ3hEN0IsT0FBc0I1TSxFQWdGdEIsSUFBSTROLEVBQXVCLENBQUMsRUFDeEJ6RSxFQUFrQixHQUNsQnVGLEVBQWdCLENBQUMsRUFFakJDLEVBQXdCLFNBQStCNUwsR0FDMUR0QixRQUFRdUksS0FDUCw0QkFBOEJqSCxFQUFPRSxHQUFLLHVCQUU1QyxFQUVBLElBQUssSUFBSU4sS0FBWWtLLEVBQ3BCLEdBQUluSyxFQUFvQjBCLEVBQUV5SSxFQUFlbEssR0FBVyxDQUNuRCxJQUVJbUcsRUFGQThGLEVBQW1CL0IsRUFBY2xLLEdBWWpDa00sR0FBYSxFQUNiQyxHQUFVLEVBQ1ZDLEdBQVksRUFDWkMsRUFBWSxHQUloQixRQWZDbEcsRUFERzhGLEVBQ01sQixFQUF5Qi9LLEdBRXpCLENBQ1IwRCxLQUFNLFdBQ04xRCxTQUFVQSxJQVFEbUwsUUFDVmtCLEVBQVkseUJBQTJCbEcsRUFBT2dGLE1BQU0xTyxLQUFLLFNBRWxEMEosRUFBT3pDLE1BQ2QsSUFBSyxnQkFDQW9DLEVBQVF3RyxZQUFZeEcsRUFBUXdHLFdBQVduRyxHQUN0Q0wsRUFBUXlHLGlCQUNaTCxFQUFhLElBQUlqSCxNQUNoQixvQ0FDQ2tCLEVBQU9uRyxTQUNQcU0sSUFFSCxNQUNELElBQUssV0FDQXZHLEVBQVF3RyxZQUFZeEcsRUFBUXdHLFdBQVduRyxHQUN0Q0wsRUFBUXlHLGlCQUNaTCxFQUFhLElBQUlqSCxNQUNoQiwyQ0FDQ2tCLEVBQU9uRyxTQUNQLE9BQ0FtRyxFQUFPbUYsU0FDUGUsSUFFSCxNQUNELElBQUssYUFDQXZHLEVBQVEwRyxjQUFjMUcsRUFBUTBHLGFBQWFyRyxHQUMxQ0wsRUFBUTJHLG1CQUNaUCxFQUFhLElBQUlqSCxNQUNoQixtQkFBcUJqRixFQUFXLG1CQUFxQnFNLElBRXZELE1BQ0QsSUFBSyxXQUNBdkcsRUFBUTRHLFlBQVk1RyxFQUFRNEcsV0FBV3ZHLEdBQzNDZ0csR0FBVSxFQUNWLE1BQ0QsSUFBSyxXQUNBckcsRUFBUTZHLFlBQVk3RyxFQUFRNkcsV0FBV3hHLEdBQzNDaUcsR0FBWSxFQUNaLE1BQ0QsUUFDQyxNQUFNLElBQUluSCxNQUFNLG9CQUFzQmtCLEVBQU96QyxNQUUvQyxHQUFJd0ksRUFDSCxNQUFPLENBQ05oTSxNQUFPZ00sR0FHVCxHQUFJQyxFQUdILElBQUtuTSxLQUZMK0wsRUFBYy9MLEdBQVlpTSxFQUMxQlIsRUFBWWpGLEVBQWlCTCxFQUFPSyxpQkFDbkJMLEVBQU84RSxxQkFDbkJsTCxFQUFvQjBCLEVBQUUwRSxFQUFPOEUscUJBQXNCakwsS0FDakRpTCxFQUFxQmpMLEtBQ3pCaUwsRUFBcUJqTCxHQUFZLElBQ2xDeUwsRUFDQ1IsRUFBcUJqTCxHQUNyQm1HLEVBQU84RSxxQkFBcUJqTCxLQUs1Qm9NLElBQ0hYLEVBQVlqRixFQUFpQixDQUFDTCxFQUFPbkcsV0FDckMrTCxFQUFjL0wsR0FBWWdNLEVBRTVCLENBRUQ5QixPQUFnQjdNLEVBSWhCLElBREEsSUFvQkl1UCxFQXBCQUMsRUFBOEIsR0FDekJ4TyxFQUFJLEVBQUdBLEVBQUltSSxFQUFnQjlHLE9BQVFyQixJQUFLLENBQ2hELElBQUl5TyxFQUFtQnRHLEVBQWdCbkksR0FDbkMrQixFQUFTTCxFQUFvQmdCLEVBQUUrTCxHQUVsQzFNLElBQ0NBLEVBQU80RyxJQUFJb0IsZUFBaUJoSSxFQUFPNEcsSUFBSUQsUUFFeENnRixFQUFjZSxLQUFzQmQsSUFFbkM1TCxFQUFPNEcsSUFBSXNCLGtCQUVadUUsRUFBNEIxSyxLQUFLLENBQ2hDL0IsT0FBUTBNLEVBQ1JyTSxRQUFTTCxFQUFPNEcsSUFBSXdCLGFBQ3BCSyxhQUFjekksRUFBTzRHLElBQUlvQixlQUc1QixDQUlBLE1BQU8sQ0FDTmhDLFFBQVMsV0FNUixJQUFJNkMsRUFMSmtCLEVBQTJCekosU0FBUSxTQUFVTyxVQUNyQ29KLEVBQWdCcEosRUFDeEIsSUFDQWtKLE9BQTZCOU0sRUFJN0IsSUFEQSxJQW9DSTBQLEVBcENBN0IsRUFBUTFFLEVBQWdCaUMsUUFDckJ5QyxFQUFNeEwsT0FBUyxHQUFHLENBQ3hCLElBQUlNLEVBQVdrTCxFQUFNRyxNQUNqQmpMLEVBQVNMLEVBQW9CZ0IsRUFBRWYsR0FDbkMsR0FBS0ksRUFBTCxDQUVBLElBQUlvSixFQUFPLENBQUMsRUFHUndELEVBQWtCNU0sRUFBTzRHLElBQUl1QixpQkFDakMsSUFBS2xLLEVBQUksRUFBR0EsRUFBSTJPLEVBQWdCdE4sT0FBUXJCLElBQ3ZDMk8sRUFBZ0IzTyxHQUFHdUMsS0FBSyxLQUFNNEksR0FjL0IsSUFaQXpKLEVBQW9COEcsS0FBSzdHLEdBQVl3SixFQUdyQ3BKLEVBQU80RyxJQUFJRSxRQUFTLFNBR2JuSCxFQUFvQmdCLEVBQUVmLFVBR3RCaUwsRUFBcUJqTCxHQUd2QjNCLEVBQUksRUFBR0EsRUFBSStCLEVBQU9nSCxTQUFTMUgsT0FBUXJCLElBQUssQ0FDNUMsSUFBSTRPLEVBQVFsTixFQUFvQmdCLEVBQUVYLEVBQU9nSCxTQUFTL0ksSUFDN0M0TyxJQUNMaEUsRUFBTWdFLEVBQU05RixRQUFRUixRQUFRM0csS0FDakIsR0FDVmlOLEVBQU05RixRQUFRK0IsT0FBT0QsRUFBSyxFQUU1QixDQTVCcUIsQ0E2QnRCLENBSUEsSUFBSyxJQUFJNkQsS0FBb0I3QixFQUM1QixHQUFJbEwsRUFBb0IwQixFQUFFd0osRUFBc0I2QixLQUMvQzFNLEVBQVNMLEVBQW9CZ0IsRUFBRStMLElBSTlCLElBRkFGLEVBQ0MzQixFQUFxQjZCLEdBQ2pCek8sRUFBSSxFQUFHQSxFQUFJdU8sRUFBMkJsTixPQUFRckIsSUFDbEQwTyxFQUFhSCxFQUEyQnZPLElBQ3hDNEssRUFBTTdJLEVBQU9nSCxTQUFTVCxRQUFRb0csS0FDbkIsR0FBRzNNLEVBQU9nSCxTQUFTOEIsT0FBT0QsRUFBSyxFQUsvQyxFQUNBeEMsTUFBTyxTQUFVSCxHQUVoQixJQUFLLElBQUkwRSxLQUFrQmUsRUFDdEJoTSxFQUFvQjBCLEVBQUVzSyxFQUFlZixLQUN4Q2pMLEVBQW9CZSxFQUFFa0ssR0FBa0JlLEVBQWNmLElBS3hELElBQUssSUFBSTVNLEVBQUksRUFBR0EsRUFBSWdNLEVBQXFCMUssT0FBUXRCLElBQ2hEZ00sRUFBcUJoTSxHQUFHMkIsR0FJekIsSUFBSyxJQUFJK00sS0FBb0I3QixFQUM1QixHQUFJbEwsRUFBb0IwQixFQUFFd0osRUFBc0I2QixHQUFtQixDQUNsRSxJQUFJMU0sRUFBU0wsRUFBb0JnQixFQUFFK0wsR0FDbkMsR0FBSTFNLEVBQVEsQ0FDWHdNLEVBQ0MzQixFQUFxQjZCLEdBSXRCLElBSEEsSUFBSUksRUFBWSxHQUNaQyxFQUFnQixHQUNoQkMsRUFBMkIsR0FDdEIvTyxFQUFJLEVBQUdBLEVBQUl1TyxFQUEyQmxOLE9BQVFyQixJQUFLLENBQzNELElBQUkwTyxFQUFhSCxFQUEyQnZPLEdBQ3hDZ1AsRUFDSGpOLEVBQU80RyxJQUFJaUIsc0JBQXNCOEUsR0FDOUJsRSxFQUNIekksRUFBTzRHLElBQUlrQix1QkFBdUI2RSxHQUNuQyxHQUFJTSxFQUFnQixDQUNuQixJQUEyQyxJQUF2Q0gsRUFBVXZHLFFBQVEwRyxHQUF3QixTQUM5Q0gsRUFBVS9LLEtBQUtrTCxHQUNmRixFQUFjaEwsS0FBSzBHLEdBQ25CdUUsRUFBeUJqTCxLQUFLNEssRUFDL0IsQ0FDRCxDQUNBLElBQUssSUFBSU8sRUFBSSxFQUFHQSxFQUFJSixFQUFVeE4sT0FBUTROLElBQ3JDLElBQ0NKLEVBQVVJLEdBQUcxTSxLQUFLLEtBQU1nTSxFQUN6QixDQUFFLE1BQU9yRyxHQUNSLEdBQWdDLG1CQUFyQjRHLEVBQWNHLEdBQ3hCLElBQ0NILEVBQWNHLEdBQUcvRyxFQUFLLENBQ3JCdkcsU0FBVThNLEVBQ1ZTLGFBQWNILEVBQXlCRSxJQUV6QyxDQUFFLE1BQU9FLEdBQ0oxSCxFQUFRMkgsV0FDWDNILEVBQVEySCxVQUFVLENBQ2pCL0osS0FBTSwrQkFDTjFELFNBQVU4TSxFQUNWUyxhQUFjSCxFQUF5QkUsR0FDdkNwTixNQUFPc04sRUFDUEUsY0FBZW5ILElBR1pULEVBQVE2SCxnQkFDWnJILEVBQVlrSCxHQUNabEgsRUFBWUMsR0FFZCxNQUVJVCxFQUFRMkgsV0FDWDNILEVBQVEySCxVQUFVLENBQ2pCL0osS0FBTSxpQkFDTjFELFNBQVU4TSxFQUNWUyxhQUFjSCxFQUF5QkUsR0FDdkNwTixNQUFPcUcsSUFHSlQsRUFBUTZILGVBQ1pySCxFQUFZQyxFQUdmLENBRUYsQ0FDRCxDQUlELElBQUssSUFBSTlFLEVBQUksRUFBR0EsRUFBSW9MLEVBQTRCbk4sT0FBUStCLElBQUssQ0FDNUQsSUFBSW1LLEVBQU9pQixFQUE0QnBMLEdBQ25DekIsRUFBVzRMLEVBQUt4TCxPQUNwQixJQUNDd0wsRUFBS25MLFFBQVFULEVBQ2QsQ0FBRSxNQUFPdUcsR0FDUixHQUFpQyxtQkFBdEJxRixFQUFLL0MsYUFDZixJQUNDK0MsRUFBSy9DLGFBQWF0QyxFQUFLLENBQ3RCdkcsU0FBVUEsRUFDVkksT0FBUUwsRUFBb0JnQixFQUFFZixJQUVoQyxDQUFFLE1BQU93TixHQUNKMUgsRUFBUTJILFdBQ1gzSCxFQUFRMkgsVUFBVSxDQUNqQi9KLEtBQU0sb0NBQ04xRCxTQUFVQSxFQUNWRSxNQUFPc04sRUFDUEUsY0FBZW5ILElBR1pULEVBQVE2SCxnQkFDWnJILEVBQVlrSCxHQUNabEgsRUFBWUMsR0FFZCxNQUVJVCxFQUFRMkgsV0FDWDNILEVBQVEySCxVQUFVLENBQ2pCL0osS0FBTSxzQkFDTjFELFNBQVVBLEVBQ1ZFLE1BQU9xRyxJQUdKVCxFQUFRNkgsZUFDWnJILEVBQVlDLEVBR2YsQ0FDRCxDQUVBLE9BQU9DLENBQ1IsRUFFRixDQXJaQW9ILEtBQWlDLDJCQUFJLENBQUMzTSxFQUFTNE0sRUFBYUMsS0FDM0QsSUFBSSxJQUFJOU4sS0FBWTZOLEVBQ2hCOU4sRUFBb0IwQixFQUFFb00sRUFBYTdOLEtBQ3JDa0ssRUFBY2xLLEdBQVk2TixFQUFZN04sR0FDbkNnSyxHQUEyQkEsRUFBMEI3SCxLQUFLbkMsSUFHNUQ4TixHQUFTMUQsRUFBcUJqSSxLQUFLMkwsR0FDbkN2RCxFQUFzQnRKLEtBQ3hCc0osRUFBc0J0SixLQUN0QnNKLEVBQXNCdEosUUFBVzVELEVBQ2xDLEVBMllEMEMsRUFBb0I2RyxLQUFLbUgsTUFBUSxTQUFVL04sRUFBVWdPLEdBQy9DOUQsSUFDSkEsRUFBZ0IsQ0FBQyxFQUNqQkUsRUFBdUIsR0FDdkJELEVBQTZCLEdBQzdCNkQsRUFBYzdMLEtBQUsySSxJQUVmL0ssRUFBb0IwQixFQUFFeUksRUFBZWxLLEtBQ3pDa0ssRUFBY2xLLEdBQVlELEVBQW9CZSxFQUFFZCxHQUVsRCxFQUNBRCxFQUFvQnVGLEtBQUt5SSxNQUFRLFNBQ2hDRSxFQUNBQyxFQUNBQyxFQUNBM0ksRUFDQXdJLEVBQ0F2RCxHQUVBdUQsRUFBYzdMLEtBQUsySSxHQUNuQmIsRUFBc0IsQ0FBQyxFQUN2QkUsRUFBNkIrRCxFQUM3QmhFLEVBQWdCaUUsRUFBZTVJLFFBQU8sU0FBVTdELEVBQUtRLEdBRXBELE9BREFSLEVBQUlRLElBQU8sRUFDSlIsQ0FDUixHQUFHLENBQUMsR0FDSjBJLEVBQXVCLEdBQ3ZCNkQsRUFBU3ZOLFNBQVEsU0FBVU8sR0FFekJsQixFQUFvQjBCLEVBQUU0SSxFQUFpQnBKLFNBQ1Y1RCxJQUE3QmdOLEVBQWdCcEosSUFFaEJ1RSxFQUFTckQsS0FBS3FJLEVBQWdCdkosRUFBU3dKLElBQ3ZDUixFQUFvQmhKLElBQVcsR0FFL0JnSixFQUFvQmhKLElBQVcsQ0FFakMsSUFDSWxCLEVBQW9COEwsSUFDdkI5TCxFQUFvQjhMLEVBQUVDLFNBQVcsU0FBVTdLLEVBQVN1RSxHQUVsRHlFLEdBQ0FsSyxFQUFvQjBCLEVBQUV3SSxFQUFxQmhKLEtBQzFDZ0osRUFBb0JoSixLQUVyQnVFLEVBQVNyRCxLQUFLcUksRUFBZ0J2SixJQUM5QmdKLEVBQW9CaEosSUFBVyxFQUVqQyxFQUVGLEVBRUFsQixFQUFvQm1GLEtBQU8sS0FDMUIsR0FBcUIsb0JBQVZrSixNQUF1QixNQUFNLElBQUluSixNQUFNLHNDQUNsRCxPQUFPbUosTUFBTXJPLEVBQW9CZ0ssRUFBSWhLLEVBQW9Cb0IsUUFBUXlELE1BQU15SixJQUN0RSxHQUF1QixNQUFwQkEsRUFBU2hGLE9BQVosQ0FDQSxJQUFJZ0YsRUFBU0MsR0FBSSxNQUFNLElBQUlySixNQUFNLG1DQUFxQ29KLEVBQVNFLFlBQy9FLE9BQU9GLEVBQVNHLE1BRmtCLENBRVosR0FDckIsQyxLQ3RmdUJ6TyxFQUFvQixJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtZW9mbGlmZS93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vZ2FtZW9mbGlmZS8uL3NyYy9kcmF3RmllbGQudHMiLCJ3ZWJwYWNrOi8vZ2FtZW9mbGlmZS8uL3NyYy9nZXRDZWxsU3RhdGUudHMiLCJ3ZWJwYWNrOi8vZ2FtZW9mbGlmZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lb2ZsaWZlLy4vc3JjL2NyZWF0ZUdhbWVPZkxpZmUudHMiLCJ3ZWJwYWNrOi8vZ2FtZW9mbGlmZS8uL3NyYy9nZXROZXh0U3RhdGUudHMiLCJ3ZWJwYWNrOi8vZ2FtZW9mbGlmZS8uL3NyYy9nZXROdW1PZkFsaXZlTmVpZ2hib3Vycy50cyIsIndlYnBhY2s6Ly9nYW1lb2ZsaWZlLy4vc3JjL2dldE5ld0NlbGxTdGF0ZS50cyIsIndlYnBhY2s6Ly9nYW1lb2ZsaWZlLy4vc3JjL2lzQW55b25lQWxpdmUudHMiLCJ3ZWJwYWNrOi8vZ2FtZW9mbGlmZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYW1lb2ZsaWZlL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCB1cGRhdGUgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vZ2FtZW9mbGlmZS93ZWJwYWNrL3J1bnRpbWUvZ2V0IHVwZGF0ZSBtYW5pZmVzdCBmaWxlbmFtZSIsIndlYnBhY2s6Ly9nYW1lb2ZsaWZlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9nYW1lb2ZsaWZlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZ2FtZW9mbGlmZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dhbWVvZmxpZmUvd2VicGFjay9ydW50aW1lL2hvdCBtb2R1bGUgcmVwbGFjZW1lbnQiLCJ3ZWJwYWNrOi8vZ2FtZW9mbGlmZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9nYW1lb2ZsaWZlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2dhbWVvZmxpZmUvd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcImdhbWVvZmxpZmU6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCJleHBvcnQgZnVuY3Rpb24gZHJhd0ZpZWxkKGh0bWxFbGVtZW50OiBFbGVtZW50LCBmaWVsZDogbnVtYmVyW11bXSwgb25DZWxsQ2xpY2s6IEZ1bmN0aW9uKSB7XG4gICAgY29uc3Qgcm93SXRlcmF0b3IgPSAocm93OiBudW1iZXJbXSwgcm93SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIGA8dHI+JHtyb3dcbiAgICAgICAgLm1hcCgoY2VsbDogbnVtYmVyLCBjb2x1bW5JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgaWYgKGNlbGwgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBgPHRkIFxuICAgICAgICAgIGRhdGEteD0ke2NvbHVtbkluZGV4fVxuICAgICAgICAgIGRhdGEteT0ke3Jvd0luZGV4fVxuICAgICAgICAgIGNsYXNzPVwiY2VsbCBhbGl2ZVwiIFxuICAgICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjojMDAwMDAwOyBoZWlnaHQ6MTBweDsgd2lkdGg6MTBweDtcIj48L3RkPmA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBgPHRkIFxuICAgICAgICBkYXRhLXg9JHtjb2x1bW5JbmRleH1cbiAgICAgICAgZGF0YS15PSR7cm93SW5kZXh9XG4gICAgICAgIGNsYXNzPVwiY2VsbCBkZWFkXCIgXG4gICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGOyBoZWlnaHQ6MTBweDsgd2lkdGg6MTBweDtcIj48L3RkPmA7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKFwiXCIpfTwvdHI+YDtcbiAgICB9O1xuICBcbiAgICBjb25zdCB0YWJsZSA9IGA8dGFibGUgYm9yZGVyPTE+JHtmaWVsZC5tYXAocm93SXRlcmF0b3IpLmpvaW4oXCJcIil9PC90YWJsZT5gO1xuICBcbiAgICBodG1sRWxlbWVudCEuaW5uZXJIVE1MID0gdGFibGU7XG4gIFxuICAgIGh0bWxFbGVtZW50IS5xdWVyeVNlbGVjdG9yKFwidGFibGVcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZXYudGFyZ2V0O1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3QgeCA9IGNsaWNrZWRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEteFwiKTtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IHkgPSBjbGlja2VkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIik7XG4gICAgICBpZiAoeCA+PSAwICYmIHkgPj0gMCkge1xuICAgICAgICBvbkNlbGxDbGljayhOdW1iZXIoeCksIE51bWJlcih5KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgIiwiZXhwb3J0IGZ1bmN0aW9uIGdldENlbGxTdGF0ZShmaWVsZDogbnVtYmVyW11bXSwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICBjb25zdCByb3cgPSBmaWVsZFt5XTtcbiAgICBpZiAocm93ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCBjZWxsID0gcm93W3hdO1xuICAgIGlmIChjZWxsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gY2VsbDtcbiAgfVxuICAiLCIvLyDQl9Cw0L/Rg9GB0Log0LjQs9GA0Ytcbi8vINCh0L7Qt9C00LDRjiDQuCDQtNC+0LHQsNCy0LvRj9GOINGN0LvQtdC80LXQvdGCINC90LAg0YHRgtGA0LDQvdC40YbRg1xuLy8g0KHQvtC30LTQsNGOINC90LAg0Y3RgtC+0Lwg0Y3Qu9C10LzQtdC90YLQtSDQuNCz0YDRgyDRgSDQv9C+0LzQvtGJ0YzRjiBgY3JlYXRlR2FtZU9mTGlmZWAg0YEg0YDQsNC30LzQtdGA0LDQvNC4INC/0L7Qu9GPIHgg0LggeVxuaW1wb3J0IHsgY3JlYXRlR2FtZU9mTGlmZSB9IGZyb20gXCIuL2NyZWF0ZUdhbWVPZkxpZmVcIjtcbmNvbnN0IGdhbWUxOiBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kKGdhbWUxKTtcblxuY3JlYXRlR2FtZU9mTGlmZShnYW1lMSk7IiwiaW1wb3J0IHsgZHJhd0ZpZWxkIH0gZnJvbSBcIi4vZHJhd0ZpZWxkXCI7XG5pbXBvcnQgeyBnZXROZXh0U3RhdGUgfSBmcm9tIFwiLi9nZXROZXh0U3RhdGVcIjtcbmltcG9ydCB7IGlzQW55b25lQWxpdmUgfSBmcm9tIFwiLi9pc0FueW9uZUFsaXZlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHYW1lT2ZMaWZlKGh0bWxFbGVtZW50OiBFbGVtZW50KXtcbiAgICBsZXQgZ2FtZUlzUnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCB0aW1lcjogbnVtYmVyIHwgbnVsbCB8IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+ID0gbnVsbDtcbiAgICBsZXQgc3BlZWQ6IG51bWJlciA9IDEwMDA7XG4gICAgbGV0IHNwZWVkSFRNTDogbnVtYmVyID0gMTAwMDtcbiAgICBsZXQgY29sdW1uczogbnVtYmVyID0gMTA7XG4gICAgbGV0IHJvd3M6IG51bWJlciA9IDEwO1xuXG4gICAgaHRtbEVsZW1lbnQuaW5uZXJIVE1MID0gYENvbHVtbnM8YnV0dG9uIGNsYXNzID0gXCJtaW51c0NvbHVtbnNcIj4tPC9idXR0b24+XG4gICAgPGlucHV0IGNsYXNzID0gXCJpbnB1dENvbHVtbnNcIiBzdHlsZSA9IFwiaGVpZ2h0OjEwcHg7IHdpZHRoOjE1cHhcIj4gIDxidXR0b24gY2xhc3MgPSBcInBsdXNDb2x1bW5zXCI+KzwvYnV0dG9uPjxicj5cbiAgICBSb3dzPGJ1dHRvbiBjbGFzcyA9IFwibWludXNSb3dzXCI+LTwvYnV0dG9uPiAgPGlucHV0IGNsYXNzID0gXCJpbnB1dFJvd3NcIiBzdHlsZSA9IFwiaGVpZ2h0OjEwcHg7IHdpZHRoOjE1cHhcIj5cbiAgICA8YnV0dG9uIGNsYXNzID0gXCJwbHVzUm93c1wiPis8L2J1dHRvbj48YnI+XG4gICAgU3BlZWQ8YnV0dG9uIGNsYXNzID0gXCJtaW51c1NwZWVkXCI+LTwvYnV0dG9uPjx1Pjx1IGNsYXNzID0gXCJzcGVlZFwiPiR7c3BlZWQvMTAwMH08L3U+IHN0ZXAgcGVyIHNlY29uZDwvdT48YnV0dG9uIGNsYXNzID0gXCJwbHVzU3BlZWRcIj4rPC9idXR0b24+PGJyPlxuICAgIDxidXR0b24gY2xhc3MgPSBcInN0YXJ0XCI+U3RhcnQ8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzID0gXCJlbnRlclNpemVcIj5FbnRlciBzaXplPC9idXR0b24+ICA8YnV0dG9uIGNsYXNzPVwiY2xlYXJcIj5DbGVhcjwvYnV0dG9uPjxicj5cbiAgICA8ZGl2IGNsYXNzPVwiZmllbGQtd3JhcHBlclwiPjwvZGl2PmA7XG4gICAgY29uc3QgZmllbGRXcmFwcGVyOiBFbGVtZW50IHwgbnVsbCA9IGh0bWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmllbGQtd3JhcHBlclwiKTtcbiAgICBjb25zdCBidXR0b246IEVsZW1lbnQgfCBudWxsID0gaHRtbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydFwiKTtcbiAgICBsZXQgZmllbGQ6IG51bWJlcltdW10gPSBmaWxsRmllbGQocm93cyxjb2x1bW5zKTtcbiAgICBmdW5jdGlvbiBmaWxsRmllbGQocm93czogbnVtYmVyLGNvbHVtbnM6IG51bWJlcil7XG4gICAgICAgIGxldCBmaWVsZDogbnVtYmVyW11bXSA9IFtdXG4gICAgICAgIGZvcihsZXQgaSA9IDA7aSA8IHJvd3M7aSsrKXtcbiAgICAgICAgICAgIGZpZWxkW2ldID0gW107XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwO2ogPCBjb2x1bW5zO2orKyl7XG4gICAgICAgICAgICAgICAgZmllbGRbaV1bal0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG4gICAgY29uc3QgY2VsbENsaWNrSGFuZGxlciA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4ge1xuICAgICAgICBmaWVsZFt5XVt4XSA9IGZpZWxkW3ldW3hdID09PSAwID8gMSA6IDA7XG4gICAgICAgIGRyYXdGaWVsZChmaWVsZFdyYXBwZXIhLCBmaWVsZCwgY2VsbENsaWNrSGFuZGxlcik7XG4gICAgfTtcbiAgICBcbiAgICBkcmF3RmllbGQoZmllbGRXcmFwcGVyISwgZmllbGQsIGNlbGxDbGlja0hhbmRsZXIpO1xuXG4gICAgY29uc3QgaW5wdXRDb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dENvbHVtbnNcIik7XG4gICAgY29uc3QgaW5wdXRSb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dFJvd3NcIik7XG4gICAgY29uc3Qgc3BlZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGVlZFwiKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaW5wdXRDb2x1bW5zLnZhbHVlID0gY29sdW1ucztcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaW5wdXRSb3dzLnZhbHVlID0gcm93cztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pbnVzQ29sdW1uc1wiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xuICAgICAgICBjb2x1bW5zLS07XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaW5wdXRDb2x1bW5zLnZhbHVlID0gY29sdW1ucztcbiAgICAgICAgZmllbGQgPSBmaWxsRmllbGQocm93cyxjb2x1bW5zKTtcbiAgICAgICAgZHJhd0ZpZWxkKGZpZWxkV3JhcHBlciEsIGZpZWxkLCBjZWxsQ2xpY2tIYW5kbGVyKTtcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGx1c0NvbHVtbnNcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcbiAgICAgICAgY29sdW1ucysrO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlucHV0Q29sdW1ucy52YWx1ZSA9IGNvbHVtbnM7XG4gICAgICAgIGZpZWxkID0gZmlsbEZpZWxkKHJvd3MsY29sdW1ucyk7XG4gICAgICAgIGRyYXdGaWVsZChmaWVsZFdyYXBwZXIhLCBmaWVsZCwgY2VsbENsaWNrSGFuZGxlcik7XG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pbnVzUm93c1wiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xuICAgICAgICByb3dzLS07XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaW5wdXRSb3dzLnZhbHVlID0gcm93cztcbiAgICAgICAgZmllbGQgPSBmaWxsRmllbGQocm93cyxjb2x1bW5zKTtcbiAgICAgICAgZHJhd0ZpZWxkKGZpZWxkV3JhcHBlciEsIGZpZWxkLCBjZWxsQ2xpY2tIYW5kbGVyKTtcbiAgICAgICAgY29uc29sZS5sb2coZmllbGQpO1xuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbHVzUm93c1wiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xuICAgICAgICByb3dzKys7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaW5wdXRSb3dzLnZhbHVlID0gcm93cztcbiAgICAgICAgZmllbGQgPSBmaWxsRmllbGQocm93cyxjb2x1bW5zKTtcbiAgICAgICAgZHJhd0ZpZWxkKGZpZWxkV3JhcHBlciEsIGZpZWxkLCBjZWxsQ2xpY2tIYW5kbGVyKTtcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW50ZXJTaXplXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XG4gICAgICAgIGNsZWFyQW5kRW50ZXJTaXplKClcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xlYXJcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcbiAgICAgICAgY2xlYXJBbmRFbnRlclNpemUoKVxuICAgIH0pXG4gICAgZnVuY3Rpb24gbWludXNTcGVlZCgpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pbnVzU3BlZWRcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcbiAgICAgICAgICAgIHNwZWVkICs9IDUwMDtcbiAgICAgICAgICAgIHNwZWVkSFRNTCAtPSA1MDA7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBzcGVlZEVsZW1lbnQudGV4dENvbnRlbnQgPSBzcGVlZEhUTUwvMTAwMDtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgbWludXNTcGVlZCgpO1xuICAgIGZ1bmN0aW9uIHBsdXNTcGVlZCgpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsdXNTcGVlZFwiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xuICAgICAgICAgICAgc3BlZWQgLT0gNTAwO1xuICAgICAgICAgICAgc3BlZWRIVE1MICs9IDUwMDtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHNwZWVkRWxlbWVudC50ZXh0Q29udGVudCA9IHNwZWVkSFRNTC8xMDAwO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBwbHVzU3BlZWQoKTtcbiAgICBmdW5jdGlvbiBjbGVhckFuZEVudGVyU2l6ZSgpe1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJvd3MgPSBpbnB1dFJvd3MudmFsdWU7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29sdW1ucyA9IGlucHV0Q29sdW1ucy52YWx1ZTtcbiAgICAgICAgZmllbGQgPSBmaWxsRmllbGQocm93cyxjb2x1bW5zKTtcbiAgICAgICAgZHJhd0ZpZWxkKGZpZWxkV3JhcHBlciEsIGZpZWxkLCBjZWxsQ2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3RvcEdhbWUoKSB7XG4gICAgICAgIGdhbWVJc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgYnV0dG9uIS5pbm5lckhUTUwgPSBcIlN0YXJ0XCI7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgICAgIC8vINCf0YDQuCDQutC70LjQutC1INC/0L4g0LrQvdC+0L/QutC1INGB0YLQsNGA0YJcbiAgICAgICAgLy8gLSDQv9C+0LzQtdC90Y/RgtGMINC90LDQtNC/0LjRgdGMINC90LAgYFN0b3BgXG4gICAgICAgIGdhbWVJc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICBidXR0b24hLmlubmVySFRNTCA9IFwiU3RvcFwiO1xuICAgICAgICAvLyAtINC30LDQv9GD0YHRgtC40YLRjCDRgtCw0LnQvNC10YAg0LTQu9GPINC+0LHQvdC+0LLQu9C10L3QuNGPINC/0L7Qu9GPXG4gICAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIC8vINCSINGC0LDQudC80LXRgNC1INC+0LHQvdC+0LLQu9C10L3QuNGPINC/0L7Qu9GPXG4gICAgICAgICAgLy8gLSDQv9C+0YHRh9C40YLQsNGC0Ywg0L3QvtCy0L7QtSDRgdC+0YHRgtC+0Y/QvdC40LUg0L/QvtC70Y9cbiAgICAgICAgICAvLyAtINC+0YLRgNC40YHQvtCy0LDRgtGMINC90L7QstC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1INC/0L7Qu9GPXG4gICAgICAgICAgLy8gLSDQv9GA0L7QstC10YDQuNGC0YwsINGH0YLQviDQtdGB0YLRjCDQttC40LLRi9C1INC60LvQtdGC0LrQuFxuICAgICAgICAgIC8vIC0g0LXRgdC70Lgg0LbQuNCy0YvRhSDQutC70LXRgtC+0Log0L3QtdGCXG4gICAgICAgICAgLy8gICAgLSDQvtGB0YLQsNC90L7QstC40YLRjCDRgtCw0LnQvNC10YBcbiAgICAgICAgICAvLyAgICAtINCy0YvQstC10YHRgtC4INGB0L7QvtCx0YnQtdC90LjQtVxuICAgICAgICAgIGZpZWxkID0gZ2V0TmV4dFN0YXRlKGZpZWxkKTtcbiAgICAgICAgICBkcmF3RmllbGQoZmllbGRXcmFwcGVyISwgZmllbGQsIGNlbGxDbGlja0hhbmRsZXIpO1xuICAgICAgICAgIGlmICghaXNBbnlvbmVBbGl2ZShmaWVsZCkpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRGVhdGggb24gdGhlIGJsb2NrXCIpO1xuICAgICAgICAgICAgc3RvcEdhbWUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNwZWVkKTtcbiAgICB9XG4gICAgYnV0dG9uIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoIWdhbWVJc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHN0YXJ0R2FtZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RvcEdhbWUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSIsImltcG9ydCB7IGdldE51bU9mQWxpdmVOZWlnaGJvdXJzIH0gZnJvbSBcIi4vZ2V0TnVtT2ZBbGl2ZU5laWdoYm91cnNcIjtcbmltcG9ydCB7IGdldENlbGxTdGF0ZSB9IGZyb20gXCIuL2dldENlbGxTdGF0ZVwiO1xuaW1wb3J0IHsgZ2V0TmV3Q2VsbFN0YXRlIH0gZnJvbSBcIi4vZ2V0TmV3Q2VsbFN0YXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0U3RhdGUoZmllbGQ6IG51bWJlcltdW10pIHtcbiAgcmV0dXJuIGZpZWxkLm1hcCgocm93OiBudW1iZXJbXSwgcm93SW5kZXg6IG51bWJlcikgPT5cbiAgICByb3cubWFwKChjZWxsOiBudW1iZXIsIGNlbGxJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBhbiA9IGdldE51bU9mQWxpdmVOZWlnaGJvdXJzKGNlbGxJbmRleCwgcm93SW5kZXgsIGZpZWxkKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGdldENlbGxTdGF0ZShmaWVsZCwgY2VsbEluZGV4LCByb3dJbmRleCk7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IGdldE5ld0NlbGxTdGF0ZShjdXJyZW50U3RhdGUsIGFuKTtcbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9KVxuICApO1xufSIsImltcG9ydCB7IGdldENlbGxTdGF0ZSB9IGZyb20gXCIuL2dldENlbGxTdGF0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnVtT2ZBbGl2ZU5laWdoYm91cnMoY29sdW1uOiBudW1iZXIsIHJvdzogbnVtYmVyLCBmaWVsZDogbnVtYmVyW11bXSkge1xuICBsZXQgbmVpZ2hib3VycyA9IDA7XG5cbiAgZm9yIChsZXQgaiA9IGNvbHVtbiAtIDE7IGogPD0gY29sdW1uICsgMTsgaiArPSAxKSB7XG4gICAgbmVpZ2hib3VycyArPSBOdW1iZXIoZ2V0Q2VsbFN0YXRlKGZpZWxkLCBqLCByb3cgLSAxKSk7XG4gIH1cblxuICBmb3IgKGxldCBqID0gY29sdW1uIC0gMTsgaiA8PSBjb2x1bW4gKyAxOyBqICs9IDEpIHtcbiAgICBuZWlnaGJvdXJzICs9IE51bWJlcihnZXRDZWxsU3RhdGUoZmllbGQsIGosIHJvdyArIDEpKTtcbiAgfVxuXG4gIG5laWdoYm91cnMgKz0gTnVtYmVyKGdldENlbGxTdGF0ZShmaWVsZCwgY29sdW1uIC0gMSwgcm93KSk7XG4gIG5laWdoYm91cnMgKz0gTnVtYmVyKGdldENlbGxTdGF0ZShmaWVsZCwgY29sdW1uICsgMSwgcm93KSk7XG5cbiAgcmV0dXJuIG5laWdoYm91cnM7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdldE5ld0NlbGxTdGF0ZShjdXJyZW50Q2VsbFN0YXRlOiBudW1iZXIsIG51bU9mQWxpdmVOZWlnaGJvdXJzOiBudW1iZXIpIHtcbiAgICBpZiAobnVtT2ZBbGl2ZU5laWdoYm91cnMgPT09IDMpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAobnVtT2ZBbGl2ZU5laWdoYm91cnMgPiAzIHx8IG51bU9mQWxpdmVOZWlnaGJvdXJzIDwgMikge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChudW1PZkFsaXZlTmVpZ2hib3VycyA9PT0gMiAmJiBjdXJyZW50Q2VsbFN0YXRlID09PSAxKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgIiwiZXhwb3J0IGZ1bmN0aW9uIGlzQW55b25lQWxpdmUoZmllbGQ6IG51bWJlcltdW10pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCByb3cgPSBmaWVsZFtpXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3dbal07XG4gICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoY2FjaGVkTW9kdWxlLmVycm9yICE9PSB1bmRlZmluZWQpIHRocm93IGNhY2hlZE1vZHVsZS5lcnJvcjtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0dHJ5IHtcblx0XHR2YXIgZXhlY09wdGlvbnMgPSB7IGlkOiBtb2R1bGVJZCwgbW9kdWxlOiBtb2R1bGUsIGZhY3Rvcnk6IF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLCByZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fIH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikgeyBoYW5kbGVyKGV4ZWNPcHRpb25zKTsgfSk7XG5cdFx0bW9kdWxlID0gZXhlY09wdGlvbnMubW9kdWxlO1xuXHRcdGV4ZWNPcHRpb25zLmZhY3RvcnkuY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgZXhlY09wdGlvbnMucmVxdWlyZSk7XG5cdH0gY2F0Y2goZSkge1xuXHRcdG1vZHVsZS5lcnJvciA9IGU7XG5cdFx0dGhyb3cgZTtcblx0fVxuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGV4ZWN1dGlvbiBpbnRlcmNlcHRvclxuX193ZWJwYWNrX3JlcXVpcmVfXy5pID0gW107XG5cbiIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGID0gKCkgPT4gKFwibWFpbi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc29uXCIpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE1OTBkMDI2NTkwMDkzMTU3ODYzXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG52YXIgaW5zdGFsbGVkTW9kdWxlcyA9IF9fd2VicGFja19yZXF1aXJlX18uYztcblxuLy8gbW9kdWxlIGFuZCByZXF1aXJlIGNyZWF0aW9uXG52YXIgY3VycmVudENoaWxkTW9kdWxlO1xudmFyIGN1cnJlbnRQYXJlbnRzID0gW107XG5cbi8vIHN0YXR1c1xudmFyIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycyA9IFtdO1xudmFyIGN1cnJlbnRTdGF0dXMgPSBcImlkbGVcIjtcblxuLy8gd2hpbGUgZG93bmxvYWRpbmdcbnZhciBibG9ja2luZ1Byb21pc2VzID0gMDtcbnZhciBibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXG4vLyBUaGUgdXBkYXRlIGluZm9cbnZhciBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycztcbnZhciBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yRCA9IGN1cnJlbnRNb2R1bGVEYXRhO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaChmdW5jdGlvbiAob3B0aW9ucykge1xuXHR2YXIgbW9kdWxlID0gb3B0aW9ucy5tb2R1bGU7XG5cdHZhciByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShvcHRpb25zLnJlcXVpcmUsIG9wdGlvbnMuaWQpO1xuXHRtb2R1bGUuaG90ID0gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG9wdGlvbnMuaWQsIG1vZHVsZSk7XG5cdG1vZHVsZS5wYXJlbnRzID0gY3VycmVudFBhcmVudHM7XG5cdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRvcHRpb25zLnJlcXVpcmUgPSByZXF1aXJlO1xufSk7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yQyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJID0ge307XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcXVpcmUocmVxdWlyZSwgbW9kdWxlSWQpIHtcblx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cdGlmICghbWUpIHJldHVybiByZXF1aXJlO1xuXHR2YXIgZm4gPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuXHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG5cdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuXHRcdFx0XHR2YXIgcGFyZW50cyA9IGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cztcblx0XHRcdFx0aWYgKHBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG5cdFx0XHRcdFx0cGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuXHRcdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG5cdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuXHRcdFx0XHRcdHJlcXVlc3QgK1xuXHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG5cdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdCk7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVxdWlyZShyZXF1ZXN0KTtcblx0fTtcblx0dmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHJlcXVpcmVbbmFtZV07XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmVxdWlyZVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdGZvciAodmFyIG5hbWUgaW4gcmVxdWlyZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVxdWlyZSwgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKG5hbWUpKTtcblx0XHR9XG5cdH1cblx0Zm4uZSA9IGZ1bmN0aW9uIChjaHVua0lkLCBmZXRjaFByaW9yaXR5KSB7XG5cdFx0cmV0dXJuIHRyYWNrQmxvY2tpbmdQcm9taXNlKHJlcXVpcmUuZShjaHVua0lkLCBmZXRjaFByaW9yaXR5KSk7XG5cdH07XG5cdHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG1vZHVsZUlkLCBtZSkge1xuXHR2YXIgX21haW4gPSBjdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkO1xuXHR2YXIgaG90ID0ge1xuXHRcdC8vIHByaXZhdGUgc3R1ZmZcblx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9hY2NlcHRlZEVycm9ySGFuZGxlcnM6IHt9LFxuXHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG5cdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG5cdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG5cdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG5cdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG5cdFx0X21haW46IF9tYWluLFxuXHRcdF9yZXF1aXJlU2VsZjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBtZS5wYXJlbnRzLnNsaWNlKCk7XG5cdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSBfbWFpbiA/IHVuZGVmaW5lZCA6IG1vZHVsZUlkO1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG5cdFx0fSxcblxuXHRcdC8vIE1vZHVsZSBBUElcblx0XHRhY3RpdmU6IHRydWUsXG5cdFx0YWNjZXB0OiBmdW5jdGlvbiAoZGVwLCBjYWxsYmFjaywgZXJyb3JIYW5kbGVyKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcFtpXV0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBdID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGVjbGluZTogZnVuY3Rpb24gKGRlcCkge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcblx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuXHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcblx0XHRcdFx0XHQocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKFxuXHRcdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gTWFuYWdlbWVudCBBUElcblx0XHRjaGVjazogaG90Q2hlY2ssXG5cdFx0YXBwbHk6IGhvdEFwcGx5LFxuXHRcdHN0YXR1czogZnVuY3Rpb24gKGwpIHtcblx0XHRcdGlmICghbCkgcmV0dXJuIGN1cnJlbnRTdGF0dXM7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHR2YXIgaWR4ID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG5cdFx0XHRpZiAoaWR4ID49IDApIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXG5cdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG5cdFx0ZGF0YTogY3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG5cdH07XG5cdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcblx0cmV0dXJuIGhvdDtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xuXHRjdXJyZW50U3RhdHVzID0gbmV3U3RhdHVzO1xuXHR2YXIgcmVzdWx0cyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuXHRcdHJlc3VsdHNbaV0gPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcbn1cblxuZnVuY3Rpb24gdW5ibG9jaygpIHtcblx0aWYgKC0tYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuXHRcdHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGJsb2NraW5nUHJvbWlzZXMgPT09IDApIHtcblx0XHRcdFx0dmFyIGxpc3QgPSBibG9ja2luZ1Byb21pc2VzV2FpdGluZztcblx0XHRcdFx0YmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0bGlzdFtpXSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhY2tCbG9ja2luZ1Byb21pc2UocHJvbWlzZSkge1xuXHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdHNldFN0YXR1cyhcInByZXBhcmVcIik7XG5cdFx0LyogZmFsbHRocm91Z2ggKi9cblx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0YmxvY2tpbmdQcm9taXNlcysrO1xuXHRcdFx0cHJvbWlzZS50aGVuKHVuYmxvY2ssIHVuYmxvY2spO1xuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKSB7XG5cdGlmIChibG9ja2luZ1Byb21pc2VzID09PSAwKSByZXR1cm4gZm4oKTtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdFx0YmxvY2tpbmdQcm9taXNlc1dhaXRpbmcucHVzaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXNvbHZlKGZuKCkpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaG90Q2hlY2soYXBwbHlPblVwZGF0ZSkge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcblx0fVxuXHRyZXR1cm4gc2V0U3RhdHVzKFwiY2hlY2tcIilcblx0XHQudGhlbihfX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0pXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHVwZGF0ZSkge1xuXHRcdFx0aWYgKCF1cGRhdGUpIHtcblx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhhcHBseUludmFsaWRhdGVkTW9kdWxlcygpID8gXCJyZWFkeVwiIDogXCJpZGxlXCIpLnRoZW4oXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicHJlcGFyZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIHVwZGF0ZWRNb2R1bGVzID0gW107XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cblx0XHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1yQykucmVkdWNlKGZ1bmN0aW9uIChcblx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0a2V5XG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckNba2V5XShcblx0XHRcdFx0XHRcdFx0dXBkYXRlLmMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5yLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUubSxcblx0XHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGVkTW9kdWxlc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdFx0XHR9LCBbXSlcblx0XHRcdFx0KS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRyZXR1cm4gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKGFwcGx5T25VcGRhdGUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkoYXBwbHlPblVwZGF0ZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicmVhZHlcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHVwZGF0ZWRNb2R1bGVzO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcbn1cblxuZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJyZWFkeVwiKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHRcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1cyAoc3RhdGU6IFwiICtcblx0XHRcdFx0XHRjdXJyZW50U3RhdHVzICtcblx0XHRcdFx0XHRcIilcIlxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJuYWxBcHBseShvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG5cblx0dmFyIHJlc3VsdHMgPSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycy5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHtcblx0XHRyZXR1cm4gaGFuZGxlcihvcHRpb25zKTtcblx0fSk7XG5cdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gdW5kZWZpbmVkO1xuXG5cdHZhciBlcnJvcnMgPSByZXN1bHRzXG5cdFx0Lm1hcChmdW5jdGlvbiAocikge1xuXHRcdFx0cmV0dXJuIHIuZXJyb3I7XG5cdFx0fSlcblx0XHQuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJhYm9ydFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IGVycm9yc1swXTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuXHR2YXIgZGlzcG9zZVByb21pc2UgPSBzZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuXG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5kaXNwb3NlKSByZXN1bHQuZGlzcG9zZSgpO1xuXHR9KTtcblxuXHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG5cdHZhciBhcHBseVByb21pc2UgPSBzZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuXHR2YXIgZXJyb3I7XG5cdHZhciByZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcblx0fTtcblxuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5hcHBseSkge1xuXHRcdFx0dmFyIG1vZHVsZXMgPSByZXN1bHQuYXBwbHkocmVwb3J0RXJyb3IpO1xuXHRcdFx0aWYgKG1vZHVsZXMpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gobW9kdWxlc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChbZGlzcG9zZVByb21pc2UsIGFwcGx5UHJvbWlzZV0pLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiZmFpbFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChsaXN0KSB7XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNldFN0YXR1cyhcImlkbGVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG5cdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRpZiAoIWN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzKSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHVuZGVmaW5lZDtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufSIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgfHwge1xuXHQ3OTI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG52YXIgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdDtcbnZhciB3YWl0aW5nVXBkYXRlUmVzb2x2ZXMgPSB7fTtcbmZ1bmN0aW9uIGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpIHtcblx0Y3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCA9IHVwZGF0ZWRNb2R1bGVzTGlzdDtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSByZXNvbHZlO1xuXHRcdC8vIHN0YXJ0IHVwZGF0ZSBjaHVuayBsb2FkaW5nXG5cdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaHUoY2h1bmtJZCk7XG5cdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcblx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuXHR9KTtcbn1cblxuc2VsZltcIndlYnBhY2tIb3RVcGRhdGVnYW1lb2ZsaWZlXCJdID0gKGNodW5rSWQsIG1vcmVNb2R1bGVzLCBydW50aW1lKSA9PiB7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHRpZihjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0KSBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBjdXJyZW50VXBkYXRlUnVudGltZS5wdXNoKHJ1bnRpbWUpO1xuXHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0oKTtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdH1cbn07XG5cbnZhciBjdXJyZW50VXBkYXRlQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGU7XG52YXIgY3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZVJ1bnRpbWU7XG5mdW5jdGlvbiBhcHBseUhhbmRsZXIob3B0aW9ucykge1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSBkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0gdW5kZWZpbmVkO1xuXHRmdW5jdGlvbiBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHModXBkYXRlTW9kdWxlSWQpIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjaGFpbjogW2lkXSxcblx0XHRcdFx0aWQ6IGlkXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG5cdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG5cdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG5cdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdGlmIChcblx0XHRcdFx0IW1vZHVsZSB8fFxuXHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG5cdFx0XHQpXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcblx0XHRcdFx0dmFyIHBhcmVudCA9IF9fd2VicGFja19yZXF1aXJlX18uY1twYXJlbnRJZF07XG5cdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcblx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuXHRcdFx0XHRxdWV1ZS5wdXNoKHtcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuXHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG5cdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuXHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcblx0XHR9XG5cdH1cblxuXHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuXHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG5cdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cblx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZShtb2R1bGUpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIG1vZHVsZS5pZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuXHRcdCk7XG5cdH07XG5cblx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gY3VycmVudFVwZGF0ZSkge1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0XHR2YXIgbmV3TW9kdWxlRmFjdG9yeSA9IGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdO1xuXHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuXHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdGlmIChuZXdNb2R1bGVGYWN0b3J5KSB7XG5cdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyhtb2R1bGVJZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQgPSB7XG5cdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cblx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuXHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG5cdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG5cdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcblx0XHRcdH1cblx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXJyb3I6IGFib3J0RXJyb3Jcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChkb0FwcGx5KSB7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gbmV3TW9kdWxlRmFjdG9yeTtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcblx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG5cdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuXHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGN1cnJlbnRVcGRhdGUgPSB1bmRlZmluZWQ7XG5cblx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuXHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG5cdGZvciAodmFyIGogPSAwOyBqIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbal07XG5cdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRpZiAoXG5cdFx0XHRtb2R1bGUgJiZcblx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgfHwgbW9kdWxlLmhvdC5fbWFpbikgJiZcblx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcblx0XHRcdGFwcGxpZWRVcGRhdGVbb3V0ZGF0ZWRNb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuXHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcblx0XHRcdCFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWRcblx0XHQpIHtcblx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcblx0XHRcdFx0bW9kdWxlOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRyZXF1aXJlOiBtb2R1bGUuaG90Ll9yZXF1aXJlU2VsZixcblx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWRcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcblxuXHRyZXR1cm4ge1xuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdH0pO1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHZhciBpZHg7XG5cdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcblx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdHZhciBkYXRhID0ge307XG5cblx0XHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG5cdFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRkaXNwb3NlSGFuZGxlcnNbal0uY2FsbChudWxsLCBkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckRbbW9kdWxlSWRdID0gZGF0YTtcblxuXHRcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuXHRcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuXHRcdFx0XHRkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuXHRcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG5cdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuXHRcdFx0dmFyIGRlcGVuZGVuY3k7XG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0bW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcHBseTogZnVuY3Rpb24gKHJlcG9ydEVycm9yKSB7XG5cdFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcblx0XHRcdGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhhcHBsaWVkVXBkYXRlLCB1cGRhdGVNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bdXBkYXRlTW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVt1cGRhdGVNb2R1bGVJZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcnVuIG5ldyBydW50aW1lIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFVwZGF0ZVJ1bnRpbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFjY2VwdENhbGxiYWNrID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlciA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoYWNjZXB0Q2FsbGJhY2spICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goYWNjZXB0Q2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnMucHVzaChlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcy5wdXNoKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGNhbGxiYWNrcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBlcnJvckhhbmRsZXJzW2tdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnNba10oZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba11cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgbyA9IDA7IG8gPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBvKyspIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbb107XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGl0ZW0ucmVxdWlyZShtb2R1bGVJZCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH1cblx0fTtcbn1cbl9fd2VicGFja19yZXF1aXJlX18uaG1ySS5qc29ucCA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgYXBwbHlIYW5kbGVycykge1xuXHRpZiAoIWN1cnJlbnRVcGRhdGUpIHtcblx0XHRjdXJyZW50VXBkYXRlID0ge307XG5cdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IFtdO1xuXHRcdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHR9XG5cdGlmICghX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gX193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXTtcblx0fVxufTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1yQy5qc29ucCA9IGZ1bmN0aW9uIChcblx0Y2h1bmtJZHMsXG5cdHJlbW92ZWRDaHVua3MsXG5cdHJlbW92ZWRNb2R1bGVzLFxuXHRwcm9taXNlcyxcblx0YXBwbHlIYW5kbGVycyxcblx0dXBkYXRlZE1vZHVsZXNMaXN0XG4pIHtcblx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB7fTtcblx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSByZW1vdmVkQ2h1bmtzO1xuXHRjdXJyZW50VXBkYXRlID0gcmVtb3ZlZE1vZHVsZXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuXHRcdG9ialtrZXldID0gZmFsc2U7XG5cdFx0cmV0dXJuIG9iajtcblx0fSwge30pO1xuXHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRjaHVua0lkcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0aWYgKFxuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG5cdFx0KSB7XG5cdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpKTtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gZmFsc2U7XG5cdFx0fVxuXHR9KTtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtciA9IGZ1bmN0aW9uIChjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHQhY3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXVxuXHRcdFx0KSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpKTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnQ6IG5lZWQgZmV0Y2ggQVBJXCIpO1xuXHRyZXR1cm4gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0aWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHJldHVybjsgLy8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuXHRcdGlmKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVwZGF0ZSBtYW5pZmVzdCBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oODY2KTtcbiJdLCJuYW1lcyI6WyJpblByb2dyZXNzIiwiZGF0YVdlYnBhY2tQcmVmaXgiLCJkcmF3RmllbGQiLCJodG1sRWxlbWVudCIsImZpZWxkIiwib25DZWxsQ2xpY2siLCJ0YWJsZSIsIm1hcCIsInJvd0l0ZXJhdG9yIiwicm93Iiwicm93SW5kZXgiLCJjZWxsIiwiY29sdW1uSW5kZXgiLCJqb2luIiwiaW5uZXJIVE1MIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsImNsaWNrZWRFbGVtZW50IiwidGFyZ2V0IiwieCIsImdldEF0dHJpYnV0ZSIsInkiLCJOdW1iZXIiLCJnZXRDZWxsU3RhdGUiLCJ1bmRlZmluZWQiLCJnYW1lMSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmQiLCJnYW1lSXNSdW5uaW5nIiwidGltZXIiLCJzcGVlZCIsInNwZWVkSFRNTCIsImNvbHVtbnMiLCJyb3dzIiwiZmllbGRXcmFwcGVyIiwiYnV0dG9uIiwiZmlsbEZpZWxkIiwiaSIsImoiLCJjZWxsQ2xpY2tIYW5kbGVyIiwiaW5wdXRDb2x1bW5zIiwiaW5wdXRSb3dzIiwic3BlZWRFbGVtZW50IiwiY2xlYXJBbmRFbnRlclNpemUiLCJ2YWx1ZSIsInN0b3BHYW1lIiwiY2xlYXJJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0Q29udGVudCIsInNldEludGVydmFsIiwiY2VsbEluZGV4IiwiYW4iLCJjb2x1bW4iLCJuZWlnaGJvdXJzIiwiZ2V0TnVtT2ZBbGl2ZU5laWdoYm91cnMiLCJjdXJyZW50U3RhdGUiLCJudW1PZkFsaXZlTmVpZ2hib3VycyIsImdldE5leHRTdGF0ZSIsImxlbmd0aCIsImlzQW55b25lQWxpdmUiLCJhbGVydCIsImNyZWF0ZUdhbWVPZkxpZmUiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJlcnJvciIsImV4cG9ydHMiLCJtb2R1bGUiLCJleGVjT3B0aW9ucyIsImlkIiwiZmFjdG9yeSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJyZXF1aXJlIiwiZm9yRWFjaCIsImhhbmRsZXIiLCJjYWxsIiwiZSIsIm0iLCJjIiwiaHUiLCJjaHVua0lkIiwiaCIsImhtckYiLCJnIiwiZ2xvYmFsVGhpcyIsInRoaXMiLCJGdW5jdGlvbiIsIndpbmRvdyIsIm8iLCJvYmoiLCJwcm9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJsIiwidXJsIiwiZG9uZSIsImtleSIsInB1c2giLCJzY3JpcHQiLCJuZWVkQXR0YWNoIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicyIsImNoYXJzZXQiLCJ0aW1lb3V0IiwibmMiLCJzZXRBdHRyaWJ1dGUiLCJzcmMiLCJvblNjcmlwdENvbXBsZXRlIiwicHJldiIsImV2ZW50Iiwib25lcnJvciIsIm9ubG9hZCIsImNsZWFyVGltZW91dCIsImRvbmVGbnMiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJmbiIsInNldFRpbWVvdXQiLCJiaW5kIiwidHlwZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImN1cnJlbnRDaGlsZE1vZHVsZSIsImN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzIiwicXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIiwiY3VycmVudE1vZHVsZURhdGEiLCJpbnN0YWxsZWRNb2R1bGVzIiwiY3VycmVudFBhcmVudHMiLCJyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMiLCJjdXJyZW50U3RhdHVzIiwiYmxvY2tpbmdQcm9taXNlcyIsImJsb2NraW5nUHJvbWlzZXNXYWl0aW5nIiwic2V0U3RhdHVzIiwibmV3U3RhdHVzIiwicmVzdWx0cyIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwidW5ibG9jayIsImxpc3QiLCJob3RDaGVjayIsImFwcGx5T25VcGRhdGUiLCJFcnJvciIsImhtck0iLCJ1cGRhdGUiLCJ1cGRhdGVkTW9kdWxlcyIsImtleXMiLCJobXJDIiwicmVkdWNlIiwicHJvbWlzZXMiLCJyIiwiaW50ZXJuYWxBcHBseSIsInJlc29sdmUiLCJhcHBseUludmFsaWRhdGVkTW9kdWxlcyIsImhvdEFwcGx5Iiwib3B0aW9ucyIsImVycm9ycyIsImZpbHRlciIsIkJvb2xlYW4iLCJkaXNwb3NlUHJvbWlzZSIsInJlc3VsdCIsImRpc3Bvc2UiLCJhcHBseVByb21pc2UiLCJyZXBvcnRFcnJvciIsImVyciIsIm91dGRhdGVkTW9kdWxlcyIsImFwcGx5IiwibW9kdWxlcyIsImluZGV4T2YiLCJobXJJIiwiaG1yRCIsIm1lIiwiX21haW4iLCJob3QiLCJyZXF1ZXN0IiwiYWN0aXZlIiwicGFyZW50cyIsImNoaWxkcmVuIiwid2FybiIsImNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciIsIm5hbWUiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwic2V0IiwiZGVmaW5lUHJvcGVydHkiLCJmZXRjaFByaW9yaXR5IiwicHJvbWlzZSIsInRyYWNrQmxvY2tpbmdQcm9taXNlIiwiY3JlYXRlUmVxdWlyZSIsIl9hY2NlcHRlZERlcGVuZGVuY2llcyIsIl9hY2NlcHRlZEVycm9ySGFuZGxlcnMiLCJfZGVjbGluZWREZXBlbmRlbmNpZXMiLCJfc2VsZkFjY2VwdGVkIiwiX3NlbGZEZWNsaW5lZCIsIl9zZWxmSW52YWxpZGF0ZWQiLCJfZGlzcG9zZUhhbmRsZXJzIiwiX3JlcXVpcmVTZWxmIiwic2xpY2UiLCJhY2NlcHQiLCJkZXAiLCJjYWxsYmFjayIsImVycm9ySGFuZGxlciIsImRlY2xpbmUiLCJhZGREaXNwb3NlSGFuZGxlciIsInJlbW92ZURpc3Bvc2VIYW5kbGVyIiwiaWR4Iiwic3BsaWNlIiwiaW52YWxpZGF0ZSIsImNoZWNrIiwic3RhdHVzIiwiYWRkU3RhdHVzSGFuZGxlciIsInJlbW92ZVN0YXR1c0hhbmRsZXIiLCJkYXRhIiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiY3VycmVudFNjcmlwdCIsInRlc3QiLCJyZXBsYWNlIiwicCIsImN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QiLCJjdXJyZW50VXBkYXRlQ2h1bmtzIiwiY3VycmVudFVwZGF0ZSIsImN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzIiwiY3VycmVudFVwZGF0ZVJ1bnRpbWUiLCJpbnN0YWxsZWRDaHVua3MiLCJobXJTX2pzb25wIiwid2FpdGluZ1VwZGF0ZVJlc29sdmVzIiwibG9hZFVwZGF0ZUNodW5rIiwidXBkYXRlZE1vZHVsZXNMaXN0IiwicmVqZWN0IiwiZXJyb3JUeXBlIiwicmVhbFNyYyIsIm1lc3NhZ2UiLCJhcHBseUhhbmRsZXIiLCJnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHMiLCJ1cGRhdGVNb2R1bGVJZCIsIm91dGRhdGVkRGVwZW5kZW5jaWVzIiwicXVldWUiLCJjaGFpbiIsInF1ZXVlSXRlbSIsInBvcCIsInBhcmVudElkIiwicGFyZW50IiwiY29uY2F0IiwiYWRkQWxsVG9TZXQiLCJhIiwiYiIsIml0ZW0iLCJmIiwianNvbnBIbXIiLCJhcHBsaWVkVXBkYXRlIiwid2FyblVuZXhwZWN0ZWRSZXF1aXJlIiwibmV3TW9kdWxlRmFjdG9yeSIsImFib3J0RXJyb3IiLCJkb0FwcGx5IiwiZG9EaXNwb3NlIiwiY2hhaW5JbmZvIiwib25EZWNsaW5lZCIsImlnbm9yZURlY2xpbmVkIiwib25VbmFjY2VwdGVkIiwiaWdub3JlVW5hY2NlcHRlZCIsIm9uQWNjZXB0ZWQiLCJvbkRpc3Bvc2VkIiwibW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMiLCJvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMiLCJvdXRkYXRlZE1vZHVsZUlkIiwiZGVwZW5kZW5jeSIsImRpc3Bvc2VIYW5kbGVycyIsImNoaWxkIiwiY2FsbGJhY2tzIiwiZXJyb3JIYW5kbGVycyIsImRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcyIsImFjY2VwdENhbGxiYWNrIiwiayIsImRlcGVuZGVuY3lJZCIsImVycjIiLCJvbkVycm9yZWQiLCJvcmlnaW5hbEVycm9yIiwiaWdub3JlRXJyb3JlZCIsInNlbGYiLCJtb3JlTW9kdWxlcyIsInJ1bnRpbWUiLCJqc29ucCIsImFwcGx5SGFuZGxlcnMiLCJjaHVua0lkcyIsInJlbW92ZWRDaHVua3MiLCJyZW1vdmVkTW9kdWxlcyIsImZldGNoIiwicmVzcG9uc2UiLCJvayIsInN0YXR1c1RleHQiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==
