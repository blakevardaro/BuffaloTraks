(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-4bad9fd4"],
  {
    "038f": function (e, t, s) {
      e.exports = s.p + "img/Address.d40b8287.svg";
    },
    1113: function (e, t, s) {
      e.exports = s.p + "img/wallet.66b8433e.svg";
    },
    2098: function (e, t, s) {},
    2363: function (e, t, s) {},
    "240d": function (e, t, s) {
      e.exports = s.p + "img/printer-white.f359e248.svg";
    },
    "2c51": function (e, t, s) {
      "use strict";
      s("c740"), s("4160"), s("b0c0"), s("159b");
      var c = s("ce96"),
        a = {
          tabs: [
            {
              name: "dashboard",
              onlineOnly: !1,
              routes: ["/interface/dashboard", "/interface"],
              icons: { active: s("5416"), inactive: s("f85d") },
              titleKey: "interface.menu.dashboard",
              children: [],
            },
            {
              name: "send-transaction",
              onlineOnly: !1,
              routes: [
                "/interface/send-transaction",
                "/interface/send-offline",
                "/interface/send-offline/generate-info",
                "/interface/send-offline/generate-tx",
                "/interface/send-offline/send-tx",
                "/interface/nft-manager",
              ],
              icons: { active: s("e909"), inactive: s("534d") },
              titleKey: "interface.menu.send",
              children: [{ name: "send-transaction", routes: ["/interface/send-transaction"], icons: { active: "", inactive: "" }, titleKey: "sendTx.send-tx" }],
            },
          ],
        };
      if (c["c"].isMewCx()) {
        var r = a.tabs.findIndex(function (e) {
            return "send-transaction" === e.name;
          }),
          n = [];
        a.tabs[r].children.forEach(function (e) {
          "send-offline" !== e.name && n.push(e);
        }),
          (a.tabs[r].children = n);
      }
      t["a"] = a;
    },
    "2cdb": function (e, t, s) {
      "use strict";
      var c = s("4751"),
        a = s.n(c);
      a.a;
    },
    "2e13": function (e, t, s) {
      "use strict";
      var c = [
        { inputs: [], payable: !1, stateMutability: "nonpayable", type: "constructor" },
        {
          constant: !0,
          inputs: [
            { internalType: "address", name: "ensAdd", type: "address" },
            { internalType: "uint256[]", name: "labelHases", type: "uint256[]" },
          ],
          name: "getExpirationDates",
          outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
      ];
      t["a"] = c;
    },
    4248: function (e, t, s) {
      "use strict";
      var c = s("f2a8"),
        a = s.n(c);
      a.a;
    },
    4664: function (e, t, s) {
      "use strict";
      var c = s("75df"),
        a = s.n(c);
      a.a;
    },
    4751: function (e, t, s) {},
    "4c8e": function (e, t, s) {},
    "4da0": function (e, t, s) {
      e.exports = s.p + "img/qr-code-white.6d0e26cd.svg";
    },
    "5120a": function (e, t, s) {},
    "534d": function (e, t, s) {
      e.exports = s.p + "img/send.003cf1de.svg";
    },
    "53e0": function (e, t, s) {},
    5416: function (e, t, s) {
      e.exports = s.p + "img/dashboard-active.add4c084.svg";
    },
    5686: function (e, t, s) {},
    "5a7d": function (e, t, s) {
      "use strict";
      var c = s("d389"),
        a = s.n(c);
      a.a;
    },
    "5f52": function (e, t, s) {
      "use strict";
      var c = s("d044"),
        a = s.n(c);
      a.a;
    },
    "5fde4": function (e, t, s) {
      "use strict";
      var c = s("5686"),
        a = s.n(c);
      a.a;
    },
    "617f6": function (e, t, s) {
      e.exports = s.p + "img/more.f9583c86.svg";
    },
    6587: function (e, t, s) {
      "use strict";
      var c = s("8f31"),
        a = s.n(c);
      a.a;
    },
    "6a1b": function (e, t, s) {
      "use strict";
      var c = s("b37ac"),
        a = s.n(c);
      a.a;
    },
    "73a3": function (e, t, s) {
      "use strict";
      var c = s("da11"),
        a = s.n(c);
      a.a;
    },
    "75df": function (e, t, s) {},
    "77af": function (e, t, s) {
      "use strict";
      var c = s("4c8e"),
        a = s.n(c);
      a.a;
    },
    "78ce": function (e, t, s) {
      "use strict";
      var c = s("8808"),
        a = s.n(c);
      a.a;
    },
    "7d3a": function (e, t, s) {
      "use strict";
      var c = s("81ed"),
        a = s.n(c);
      a.a;
    },
    "7d44": function (e, t, s) {
      "use strict";
      var c = s("dc44"),
        a = s.n(c);
      a.a;
    },
    "7f1f": function (e, t, s) {
      e.exports = s.p + "img/support.ba5a0732.svg";
    },
    "81ed": function (e, t, s) {},
    "820b": function (e, t, s) {},
    8273: function (e, t, s) {
      "use strict";
      var c = s("5120a"),
        a = s.n(c);
      a.a;
    },
    "83bb": function (e, t, s) {},
    8808: function (e, t, s) {},
    "8b69": function (e, t, s) {
      e.exports = s.p + "img/web-solution-white.938da170.svg";
    },
    "8f31": function (e, t, s) {},
    9049: function (e, t, s) {},
    "9ef6": function (e, t, s) {
      "use strict";
      var c = s("820b"),
        a = s.n(c);
      a.a;
    },
    a11b: function (e, t, s) {
      e.exports = s.p + "img/short-hand-logo-mewcx.29da0470.png";
    },
    a2e7: function (e, t, s) {
      var c = { "./short-hand-logo-mewcx.png": "a11b", "./short-hand-logo-web.png": "dc83", "./short-hand-logo-white.png": "b3a1" };
      function a(e) {
        var t = r(e);
        return s(t);
      }
      function r(e) {
        if (!s.o(c, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return c[e];
      }
      (a.keys = function () {
        return Object.keys(c);
      }),
        (a.resolve = r),
        (e.exports = a),
        (a.id = "a2e7");
    },
    a868: function (e, t, s) {
      "use strict";
      var c = s("53e0"),
        a = s.n(c);
      a.a;
    },
    acfc: function (e, t, s) {
      e.exports = s.p + "img/change.9edf0256.svg";
    },
    b37ac: function (e, t, s) {},
    b3a1: function (e, t, s) {
      e.exports = s.p + "img/short-hand-logo-white.c602a56b.png";
    },
    be4b: function (e, t, s) {
      "use strict";
      var c = s("9049"),
        a = s.n(c);
      a.a;
    },
    beda: function (e, t, s) {
      e.exports = s.p + "img/access-spaceman.6f7df52c.png";
    },
    c174: function (e, t, s) {
      "use strict";
      var c = s("d2e8"),
        a = s.n(c);
      a.a;
    },
    c665: function (e, t, s) {
      "use strict";
      var c = s("2363"),
        a = s.n(c);
      a.a;
    },
    c69e: function (e, t, s) {
      "use strict";
      var c = s("f7c8"),
        a = s.n(c);
      a.a;
    },
    c817: function (e, t, s) {
      e.exports = s.p + "img/scissor.58dff472.svg";
    },
    d044: function (e, t, s) {},
    d2e8: function (e, t, s) {},
    d389: function (e, t, s) {},
    da11: function (e, t, s) {},
    dc0b: function (e, t, s) {
      e.exports = s.p + "img/404bg.4e626140.jpg";
    },
    dc44: function (e, t, s) {},
    dc83: function (e, t, s) {
      e.exports = s.p + "img/short-hand-logo-web.5d962d4e.png";
    },
    e909: function (e, t, s) {
      e.exports = s.p + "img/send-active.0fd1caad.svg";
    },
    e91b: function (e) {
      e.exports = JSON.parse(
      );
    },
    ebc9: function (e, t, s) {
      "use strict";
      var c = s("efb8"),
        a = s.n(c);
      a.a;
    },
    ee32: function (e, t, s) {
      "use strict";
      var c = s("2098"),
        a = s.n(c);
      a.a;
    },
    ef1f: function (e, t, s) {
      "use strict";
      var c = s("83bb"),
        a = s.n(c);
      a.a;
    },
    ef3e: function (e, t, s) {
      "use strict";
      var c = s("f524d"),
        a = s.n(c);
      a.a;
    },
    efb8: function (e, t, s) {},
    f2a8: function (e, t, s) {},
    f524d: function (e, t, s) {},
    f7c8: function (e, t, s) {},
    f85d: function (e, t, s) {
      e.exports = s.p + "img/dashboard.d0cc6382.svg";
    },
    f955: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, "default", function () {
          return js;
        });
      var c,
        a,
        r = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            "div",
            { staticClass: "interface-layout" },
            [
              s("wallet-password-modal"),
              s("enter-pin-number-modal"),
              s("ledger-app-modal", { ref: "ledgerAppModal", attrs: { networks: e.Networks }, on: { hardwareWalletOpen: e.toggleNetworkAddrModal } }),
              s("mnemonic-modal", { ref: "mnemonicPhraseModal", attrs: { "hardware-wallet-open": e.toggleNetworkAddrModal } }),
              s("mnemonic-password-modal", { ref: "mnemonicPhrasePassword", attrs: { "hardware-wallet-open": e.toggleNetworkAddrModal, phrase: e.phrase } }),
              s("network-and-address-modal", { ref: "networkAddress", attrs: { "hardware-wallet": e.hwInstance } }),
              s("hardware-password-modal", {
                ref: "hardwareModal",
                attrs: { "wallet-constructor": e.walletConstructor, "hardware-brand": e.hardwareBrand },
                on: { hardwareWalletOpen: e.toggleNetworkAddrModal },
              }),
              s("print-modal", { ref: "printModal", attrs: { "priv-key": !e.wallet, address: e.account.address } }),
              s("expired-names-modal", { ref: "expiredNames" }),
              s("bcvault-address-modal", { ref: "bcvault", attrs: { addresses: e.bcVaultWallets, "callback-fn": e.bcVaultCb } }),
              s("address-qrcode-modal", { ref: "addressQrcodeModal", attrs: { address: e.account.address } }),
              s(
                "div",
                { staticClass: "mobile-interface-address-block" },
                [
                  s("mobile-interface-address", { attrs: { address: e.address, print: e.print, "switch-addr": e.switchAddress } }),
                  s("mobile-interface-balance", { staticClass: "mt-2", attrs: { balance: e.balance, "get-balance": e.getBalance } }),
                  s("mobile-interface-network", { staticClass: "mt-2", attrs: { "block-number": e.blockNumber } }),
                ],
                1
              ),
              s("div", { staticClass: "wrap" }, [
                s("div", { staticClass: "sidemenu" }, [
                  s("div", {
                    staticClass: "side-nav-background",
                    class: e.isSidemenuOpen && "side-nav-open",
                    on: {
                      click: function (t) {
                        e.startToggleSideMenu;
                      },
                    },
                  }),
                  s("div", { staticClass: "side-nav", class: e.isSidemenuOpen && "side-nav-open" }, [s("interface-side-menu")], 1),
                ]),
                s("div", { staticClass: "contents" }, [
                  s(
                    "div",
                    { staticClass: "tx-contents" },
                    [
                      s(
                        "div",
                        { staticClass: "content-container mobile-hide" },
                        [
                          e.wallet
                            ? s("interface-address", {
                                attrs: { address: e.address, print: e.print, "switch-addr": e.switchAddress, "display-addr": e.wallet.displayAddress, qrcode: e.openAddressQrcode },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                      s("div", { staticClass: "content-container mobile-hide" }, [s("interface-balance", { attrs: { balance: e.balance, "get-balance": e.getBalance } })], 1),
                      s("div", { staticClass: "content-container mobile-hide" }, [s("interface-network", { attrs: { "block-number": e.blockNumber } })], 1),
                      s("router-view", {
                        attrs: {
                          "tokens-with-balance": e.tokensWithBalance,
                          "get-balance": e.getBalance,
                          tokens: e.tokens,
                          "highest-gas": e.highestGas,
                          nonce: e.nonce,
                          value: e.value,
                          data: e.data,
                          to: e.to,
                          gaslimit: e.gaslimit,
                          gas: e.gas,
                          tokensymbol: e.tokensymbol,
                          "is-prefilled": e.prefilled,
                          "clear-prefilled": e.clearPrefilled,
                          "check-prefilled": e.checkPrefilled,
                        },
                      }),
                      s(
                        "div",
                        { staticClass: "tokens" },
                        [
                          "/interface/dapps/aave/action" !== e.$route.fullPath
                            ? s("interface-tokens", {
                                attrs: {
                                  "fetch-tokens": e.setTokens,
                                  "get-token-balance": e.getTokenBalance,
                                  tokens: e.tokens,
                                  "received-tokens": e.receivedTokens,
                                  "reset-token-selection": e.setTokensWithBalance,
                                },
                              })
                            : e._e(),
                          "/interface/dapps/aave/action" === e.$route.fullPath ? s("token-overview") : e._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]),
              ]),
            ],
            1
          );
        },
        n = [],
        o =
          (s("99af"),
          s("4de4"),
          s("7db0"),
          s("4160"),
          s("caad"),
          s("d81d"),
          s("45fc"),
          s("b0c0"),
          s("a9e3"),
          s("b680"),
          s("b64b"),
          s("d3b7"),
          s("25f0"),
          s("2532"),
          s("3ca3"),
          s("159b"),
          s("ddb0"),
          s("96cf"),
          s("c964")),
        h = s("f3f3"),
        b = s("2f62"),
        i = s("3297"),
        d = s.n(i),
        l = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s("div", { staticClass: "overview-container" }, [
            s(
              "div",
              { staticClass: "header" },
              [
                s("i18n", { staticClass: "title", attrs: { tag: "p", path: "dappsAave.token-overview" } }, [
                  s("span", { staticClass: "title", attrs: { slot: "token" }, slot: "token" }, [e._v(e._s(e.token.symbol))]),
                ]),
                void 0 === e.token.symbol || e.getIcon(e.token.symbol) ? e._e() : s("img", { staticClass: "token-icon", attrs: { src: e.iconFetcher(e.token.symbol) } }),
                e.token && e.getIcon(e.token.symbol) ? s("span", { class: ["cc", e.getIcon(e.token.symbol), "cc-icon", "currency-symbol"] }) : e._e(),
              ],
              1
            ),
            s("div", { staticClass: "body-container" }, [
              s("div", { staticClass: "left-container" }, [
                s("p", [e._v(e._s(e.$t("dappsAave.utilization-rate")))]),
                s("p", [e._v(e._s(e.$t("dappsAave.total-liquidity")))]),
                s("p", [e._v(e._s(e.$t("dappsAave.avail-liquidity")))]),
                e.token.stableBorrowRateEnabled ? s("p", [e._v(" " + e._s(e.$t("dappsAave.stable-rate")) + " ")]) : e._e(),
                s("p", [e._v(e._s(e.$t("dappsAave.variable-rate")))]),
              ]),
              s("div", { staticClass: "right-container" }, [
                s("p", [e._v(e._s(e.convertToFixed(100 * e.token.utilizationRate)) + "%")]),
                s("p", [e._v(e._s(e.convertToFixed(e.token.totalLiquidity)) + " " + e._s(e.token.symbol))]),
                s("p", [e._v(e._s(e.convertToFixed(e.token.availableLiquidity)) + " " + e._s(e.token.symbol))]),
                e.token.stableBorrowRateEnabled ? s("p", { staticClass: "stable-text" }, [e._v(" " + e._s(e.convertToFixed(100 * e.token.stableBorrowRate)) + "% ")]) : e._e(),
                s("p", { staticClass: "variable-text" }, [e._v(" " + e._s(e.convertToFixed(100 * e.token.variableBorrowRate)) + "% ")]),
              ]),
            ]),
            s(
              "div",
              { staticClass: "footer-container" },
              [
                s("div", { staticClass: "footer-header" }, [s("p", { staticClass: "title" }, [e._v(e._s(e.$t("dappsAave.historical-rate")))])]),
                e.rateHistory.labels && 0 === e.rateHistory.labels.length ? s("p", { staticClass: "info" }, [e._v(" " + e._s(e.$t("dappsAave.no-data")) + " ")]) : e._e(),
                s("historical-graph", { staticClass: "mt-3 mr-4", attrs: { "rate-history": e.rateHistory } }),
              ],
              1
            ),
          ]);
        },
        f = [],
        m = s("901e"),
        u = s.n(m),
        p = (s("7099"), s("e351"), s("b643")),
        g = s("1fca"),
        w = {
          extends: g["a"],
          props: {
            rateHistory: {
              type: Object,
              default: function () {
                return {};
              },
            },
          },
          mounted: function () {
            this.renderChart(
              {
                labels: this.rateHistory.labels,
                datasets: [
                  { label: "Stable", align: "center", borderColor: "#5a78f0", backgroundColor: "#5a78f0", fill: !1, data: this.rateHistory.stableRates },
                  { label: "Variable", align: "center", borderColor: "#f8a910", backgroundColor: "#f8a910", fill: !1, data: this.rateHistory.variableRates },
                ],
              },
              {
                tooltips: {
                  mode: "label",
                  callbacks: {
                    label: function (e) {
                      return e.value + "%";
                    },
                  },
                },
                responsive: !0,
                maintainAspectRatio: !0,
                scales: { yAxes: [{ ticks: { display: !1 } }], xAxes: [{ ticks: { autoSkip: !0, maxTicksLimit: 6 } }] },
                legend: { align: "end", labels: { usePointStyle: !0 } },
              }
            );
          },
        },
        x = w,
        k = (s("6a1b"), s("2877")),
        E = Object(k["a"])(x, c, a, !1, null, "d096392c", null),
        y = E.exports,
        M = {
          components: { "historical-graph": y },
          computed: Object(h["a"])({}, Object(b["c"])("aave", ["token", "rateHistory"])),
          methods: {
            iconFetcher: function (e) {
              var t;
              try {
                t = s("64d7")("./".concat(e.toUpperCase(), ".svg"));
              } catch (c) {
                return s("9294");
              }
              return t;
            },
            getIcon: function (e) {
              return Object(p["i"])(e);
            },
            convertToFixed: function (e) {
              return e && 0 != e ? new u.a(e).toFixed(2).toString() : 0;
            },
          },
        },
        W = M,
        _ = (s("7d44"), Object(k["a"])(W, l, f, !1, null, "7b7bc8c8", null)),
        j = _.exports,
        v = s("6035"),
        T = s("7416a"),
        C = s("6d89b"),
        A = s("ccf6"),
        N = function () {
          var e = this,
            t = e.$createElement,
            c = e._self._c || t;
          return c(
            "b-modal",
            {
              ref: "password",
              staticClass: "bootstrap-modal modal-software",
              attrs: { title: e.$t("common.password.string"), "hide-footer": "", centered: "", static: "", lazy: "" },
              on: { shown: e.focusInput },
            },
            [
              c("form", { staticClass: "password-form" }, [
                c("div", { staticClass: "input-container" }, [
                  c("input", {
                    directives: [{ name: "model", rawName: "v-model", value: e.password, expression: "password" }],
                    ref: "passwordInput",
                    attrs: { type: "password", placeholder: e.$t("common.password.enter"), name: "Password", autocomplete: "off" },
                    domProps: { value: e.password },
                    on: {
                      input: function (t) {
                        t.target.composing || (e.password = t.target.value);
                      },
                    },
                  }),
                  e.show
                    ? c("img", {
                        attrs: { alt: "", src: s("5de7") },
                        on: {
                          click: function (t) {
                            return t.preventDefault(), e.switchViewPassword(t);
                          },
                        },
                      })
                    : e._e(),
                  e.show
                    ? e._e()
                    : c("img", {
                        attrs: { alt: "", src: s("31de") },
                        on: {
                          click: function (t) {
                            return t.preventDefault(), e.switchViewPassword(t);
                          },
                        },
                      }),
                ]),
                c("p", { directives: [{ name: "show", rawName: "v-show", value: "" !== e.error, expression: "error !== ''" }], staticClass: "error" }, [e._v(e._s(e.error))]),
                c("p", { directives: [{ name: "show", rawName: "v-show", value: e.errors.has("password"), expression: "errors.has('password')" }], staticClass: "error" }, [
                  e._v(" " + e._s(e.errors.first("password")) + " "),
                ]),
                c(
                  "button",
                  {
                    class: [e.errors.has("password") || 0 === e.password.length ? "disabled" : "", "submit-button large-round-button-green-filled"],
                    attrs: { type: "submit" },
                    on: {
                      click: function (t) {
                        return t.preventDefault(), e.unlockWallet(t);
                      },
                    },
                  },
                  [e._v(" " + e._s(e.$t("common.wallet.unlock")) + " " + e._s(e.hardwareBrand) + " ")]
                ),
              ]),
            ]
          );
        },
        O = [],
        S = {
          props: { walletConstructor: { type: Function, default: function () {} }, hardwareBrand: { type: String, default: "" } },
          data: function () {
            return { show: !1, password: "", error: "" };
          },
          watch: {
            password: function () {
              this.error = "";
            },
          },
          methods: {
            focusInput: function () {
              this.password, this.$refs.passwordInput.focus();
            },
            unlockWallet: function () {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          e.walletConstructor("", e.password)
                            .then(function (t) {
                              e.$emit("hardwareWalletOpen", t);
                            })
                            .catch(e.walletConstructor.errorHandler);
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            switchViewPassword: function () {
              this.show = !this.show;
            },
          },
        },
        R = S,
        B = (s("5a7d"), Object(k["a"])(R, N, O, !1, null, "2c8b3502", null)),
        P = B.exports,
        I = function () {
          var e = this,
            t = e.$createElement,
            c = e._self._c || t;
          return c(
            "b-modal",
            {
              ref: "password",
              staticClass: "bootstrap-modal modal-software nopadding",
              attrs: { title: e.$t("accessWallet.password"), "hide-footer": "", centered: "", static: "", lazy: "" },
              on: { shown: e.focusInput },
            },
            [
              c("div", { staticClass: "modal-content-block" }, [
                c("form", { staticClass: "password-form" }, [
                  c("div", { staticClass: "input-container" }, [
                    "checkbox" === (e.show ? "text" : "password")
                      ? c("input", {
                          directives: [{ name: "model", rawName: "v-model", value: e.password, expression: "password" }],
                          ref: "mnemonicPasswordInput",
                          attrs: { name: "Password", autocomplete: "off", placeholder: "Enter password", type: "checkbox" },
                          domProps: { checked: Array.isArray(e.password) ? e._i(e.password, null) > -1 : e.password },
                          on: {
                            change: function (t) {
                              var s = e.password,
                                c = t.target,
                                a = !!c.checked;
                              if (Array.isArray(s)) {
                                var r = null,
                                  n = e._i(s, r);
                                c.checked ? n < 0 && (e.password = s.concat([r])) : n > -1 && (e.password = s.slice(0, n).concat(s.slice(n + 1)));
                              } else e.password = a;
                            },
                          },
                        })
                      : "radio" === (e.show ? "text" : "password")
                      ? c("input", {
                          directives: [{ name: "model", rawName: "v-model", value: e.password, expression: "password" }],
                          ref: "mnemonicPasswordInput",
                          attrs: { name: "Password", autocomplete: "off", placeholder: "Enter password", type: "radio" },
                          domProps: { checked: e._q(e.password, null) },
                          on: {
                            change: function (t) {
                              e.password = null;
                            },
                          },
                        })
                      : c("input", {
                          directives: [{ name: "model", rawName: "v-model", value: e.password, expression: "password" }],
                          ref: "mnemonicPasswordInput",
                          attrs: { name: "Password", autocomplete: "off", placeholder: "Enter password", type: e.show ? "text" : "password" },
                          domProps: { value: e.password },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.password = t.target.value);
                            },
                          },
                        }),
                    e.show
                      ? c("img", {
                          attrs: { alt: "", src: s("5de7") },
                          on: {
                            click: function (t) {
                              return t.preventDefault(), e.switchViewPassword(t);
                            },
                          },
                        })
                      : e._e(),
                    e.show
                      ? e._e()
                      : c("img", {
                          attrs: { alt: "", src: s("31de") },
                          on: {
                            click: function (t) {
                              return t.preventDefault(), e.switchViewPassword(t);
                            },
                          },
                        }),
                  ]),
                  c("p", { directives: [{ name: "show", rawName: "v-show", value: "" !== e.error, expression: "error !== ''" }], staticClass: "error" }, [e._v(e._s(e.error))]),
                  c(
                    "button",
                    {
                      staticClass: "submit-button large-round-button-green-filled",
                      attrs: { type: "submit" },
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.unlockWallet(t);
                        },
                      },
                    },
                    [
                      c("span", { directives: [{ name: "show", rawName: "v-show", value: !e.spinner, expression: "!spinner" }] }, [
                        e._v(" " + e._s(e.$t("common.continue")) + " "),
                      ]),
                      c("i", { directives: [{ name: "show", rawName: "v-show", value: e.spinner, expression: "spinner" }], staticClass: "fa fa-spin fa-spinner fa-lg" }),
                    ]
                  ),
                ]),
                c("div", { staticClass: "support-block" }, [c("customer-support")], 1),
              ]),
            ]
          );
        },
        D = [],
        L = s("20fe"),
        X = s("e3b9"),
        H = s("ce96"),
        G = {
          components: { "customer-support": L["a"] },
          props: { hardwareWalletOpen: { type: Function, default: function () {} }, phrase: { type: String, default: "" } },
          data: function () {
            return { show: !1, password: "", error: "", spinner: !1 };
          },
          watch: {
            password: function () {
              this.error = "";
            },
          },
          methods: {
            unlockWallet: function () {
              var e = this;
              (this.spinner = !0),
                Object(X["f"])(this.phrase, this.password)
                  .then(function (t) {
                    (e.password = ""), (e.spinner = !1), e.hardwareWalletOpen(t);
                  })
                  .catch(function (t) {
                    (e.password = ""), (e.spinner = !1), (e.error = t), H["d"].responseHandler(t, H["d"].ERROR);
                  });
            },
            switchViewPassword: function () {
              this.show = !this.show;
            },
            focusInput: function () {
              this.$refs.mnemonicPasswordInput.focus();
            },
          },
        },
        U = G,
        K = (s("8273"), Object(k["a"])(U, I, D, !1, null, "b18f4072", null)),
        F = K.exports,
        V = s("9dbe"),
        $ = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            "div",
            [
              s(
                "b-modal",
                {
                  ref: "ledgerApp",
                  staticClass: "bootstrap-modal",
                  attrs: { title: e.$t("accessWallet.ledger.modal.title"), "hide-footer": "", centered: "", static: "", lazy: "" },
                  on: { hidden: e.reset },
                },
                [
                  s("div", { staticClass: "ledger-app-selection-container" }, [
                    s("h4", [e._v(e._s(e.$t("accessWallet.ledger.modal.text")))]),
                    s(
                      "div",
                      { staticClass: "ledger-app-info" },
                      [
                        s("div", { staticClass: "selected-app-icon" }, [s("img", { attrs: { src: e.selectedApp.network.icon, alt: "" } })]),
                        s(
                          "div",
                          {
                            staticClass: "toggle-apps",
                            on: {
                              click: function (t) {
                                e.toggled = !e.toggled;
                              },
                            },
                          },
                          [
                            s("div", [s("h2", [e._v(e._s(e.selectedApp.network.name_long))])]),
                            s("div", { staticClass: "toggle-indicator-container" }, [s("i", { class: [e.toggled ? "fa-chevron-up" : "fa-chevron-down", "fa"] })]),
                          ]
                        ),
                        s(
                          "div",
                          { class: [e.toggled ? "shown" : "hide-box", "app-selection-container"] },
                          e._l(e.apps, function (t) {
                            return s(
                              "div",
                              {
                                key: t.network.name,
                                class: [e.selectedApp.network.name_long === t.network.name_long ? "selected" : "", "item"],
                                on: {
                                  click: function (s) {
                                    return e.selectDapp(t);
                                  },
                                },
                              },
                              [s("i", { staticClass: "fa fa-check-circle" }), s("span", [e._v(" " + e._s(t.network.name_long) + " ")])]
                            );
                          }),
                          0
                        ),
                        s(
                          "div",
                          {
                            directives: [{ name: "show", rawName: "v-show", value: "custom" === e.selectedPath.path, expression: "selectedPath.path === 'custom'" }],
                            staticClass: "custom-path-inputs",
                          },
                          [
                            s("div", { staticClass: "path-input" }, [
                              s("label", { attrs: { for: "custom-label" } }, [e._v(" " + e._s(e.$t("accessWallet.path.allias")))]),
                              s("input", {
                                directives: [{ name: "model", rawName: "v-model", value: e.customLabel, expression: "customLabel" }],
                                attrs: { name: "custom-label", placeholder: "my custom path" },
                                domProps: { value: e.customLabel },
                                on: {
                                  input: function (t) {
                                    t.target.composing || (e.customLabel = t.target.value);
                                  },
                                },
                              }),
                            ]),
                            s("div", { staticClass: "path-input" }, [
                              s("label", { attrs: { for: "custom-path" } }, [e._v(e._s(e.$t("accessWallet.path.string")))]),
                              s("input", {
                                directives: [{ name: "model", rawName: "v-model", value: e.customPath, expression: "customPath" }],
                                attrs: { name: "custom-path", placeholder: "m/44'/1'/0'/0" },
                                domProps: { value: e.customPath },
                                on: {
                                  input: function (t) {
                                    t.target.composing || (e.customPath = t.target.value);
                                  },
                                },
                              }),
                            ]),
                            s("div", { staticClass: "custom-path-actions" }, [
                              s("div", { staticClass: "cancel", on: { click: e.cancel } }, [e._v(" " + e._s(e.$t("common.cancel")) + " ")]),
                              s("div", { staticClass: "proceed", on: { click: e.locAddCustomPath } }, [e._v(" " + e._s(e.$t("accessWallet.path.add-custom")) + " ")]),
                            ]),
                          ]
                        ),
                        s(
                          "b-dropdown",
                          { staticClass: "dropdown-button-3", attrs: { "no-caret": !0 } },
                          [
                            s("template", { slot: "button-content" }, [
                              s("span", [e._v(" " + e._s(e.dropDownDefaultText) + " ")]),
                              s("i", { class: [e.flipButton ? "fa-chevron-up" : "fa-chevron-down", "fa"] }),
                            ]),
                            e._l(e.selectedApp.paths, function (t, c) {
                              return s(
                                "b-dropdown-item",
                                {
                                  key: t.label,
                                  ref: "pathDropdown",
                                  refInFor: !0,
                                  attrs: { active: t.path === e.selectedPath.path },
                                  on: {
                                    click: function (s) {
                                      return e.setPath(t, c);
                                    },
                                  },
                                },
                                [
                                  e._v(" " + e._s(t.label) + " - " + e._s(t.path) + " "),
                                  s("i", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: "Custom Paths" === e.selectedApp.network.name_long && !t.hasOwnProperty("default"),
                                        expression:
                                          "\n                selectedApp.network.name_long === 'Custom Paths' &&\n                !path.hasOwnProperty('default')\n              ",
                                      },
                                    ],
                                    staticClass: "fa fa-times remove-custom",
                                    on: {
                                      click: function (s) {
                                        return s.stopPropagation(), e.remove(t, c);
                                      },
                                    },
                                  }),
                                ]
                              );
                            }),
                          ],
                          2
                        ),
                        s("button", { class: ["custom" === e.selectedPath.path ? "disabled" : "", "mid-round-button-green-filled next-button"], on: { click: e.next } }, [
                          e._v(" " + e._s(e.$t("common.next")) + " "),
                        ]),
                      ],
                      1
                    ),
                  ]),
                ]
              ),
            ],
            1
          );
        },
        Y = [],
        Z = s("8761"),
        q = s("e4d6"),
        z = [
          { network: Z["ETH"], prefixes: ["m/44'/60'"], paths: [q["s"], q["u"]] },
          { network: Z["ELLA"], prefixes: ["m/44'/163'"], paths: [q["e"]] },
          { network: Z["ETC"], prefixes: ["m/44'/61'", "m/44'/60'"], paths: [q["t"], q["v"]] },
          { network: Z["ESN"], prefixes: ["m/44'/31102'"], paths: [q["i"]] },
          { network: Z["ETHO"], prefixes: ["m/44'/1313114'"], paths: [q["g"]] },
          { network: Z["EXP"], prefixes: ["m/44'/40'"], paths: [q["n"]] },
          { network: Z["PIRL"], prefixes: ["m/44'/164'"], paths: [q["B"]] },
          { network: Z["POA"], prefixes: ["m/44'/60'"], paths: [q["C"]] },
          { network: Z["RSK"], prefixes: ["m/44'/137'"], paths: [q["F"]] },
          { network: Z["RSKTEST"], prefixes: ["m/44'/37310'"], paths: [q["G"]] },
          { network: Z["UBQ"], prefixes: ["m/44'/108'"], paths: [q["L"]] },
          { network: Z["AKA"], prefixes: ["m/44'/200625'"], paths: [q["a"]] },
          { network: Z["MUSIC"], prefixes: ["m/44'/184'"], paths: [q["A"]] },
          { network: Z["CLO"], prefixes: ["m/44'/820'"], paths: [q["c"]] },
          { network: Z["EGEM"], prefixes: ["m/44'/1987'"], paths: [q["h"]] },
          { network: Z["ATH"], prefixes: ["m/44'/1620'"], paths: [q["b"]] },
          { network: Z["GO"], prefixes: ["m/44'/6060'"], paths: [q["o"]] },
          { network: Z["MIX"], prefixes: ["m/44'/76'"], paths: [q["z"]] },
          { network: Z["REOSC"], prefixes: ["m/44'/2894'"], paths: [q["D"]] },
          { network: Z["TOMO"], prefixes: ["m/44'/889'"], paths: [q["K"]] },
          { network: Z["ROP"], prefixes: ["m/44'/1'"], paths: [q["E"]] },
          { network: Z["TT"], prefixes: ["m/44'/1001'"], paths: [q["J"]] },
          { network: Z["PHT"], prefixes: ["m/44'/60'"], paths: [q["w"]] },
          { network: Z["ERE"], prefixes: ["m/44'/466'"], paths: [q["j"]] },
        ],
        Q = z,
        J = s("de4e"),
        ee = s.n(J),
        te = {
          props: {
            networks: {
              type: Object,
              default: function () {
                return {};
              },
            },
          },
          data: function () {
            return {
              apps: Q,
              selectedApp: { network: { name_long: Q[0].network.name_long, icon: Q[0].network.icon }, paths: Q[0].paths },
              toggled: !1,
              selectedPath: Q[0].paths[0],
              flipButton: !1,
              customLabel: "",
              customPath: "",
            };
          },
          computed: Object(h["a"])(
            {
              fieldsFilled: function () {
                var e = Object.keys(this.selectedApp).length;
                return "" === this.selected && 0 === e && "Select Path" === this.selectedPathText && "" === this.selectedPath;
              },
              dropDownDefaultText: function () {
                return "".concat(this.selectedPath.label, " - ").concat(this.selectedPath.path);
              },
            },
            Object(b["c"])("main", ["customPaths"])
          ),
          watch: {
            selectedApp: {
              handler: function (e) {
                this.selectedPath = e.paths[0];
              },
              deep: !0,
            },
            customPaths: function () {
              this.setupCustomPaths();
            },
          },
          mounted: function () {
            var e = this;
            this.setupCustomPaths(),
              this.$root.$on("bv::dropdown::show", function () {
                e.flipButton = !0;
              }),
              this.$root.$on("bv::dropdown::hide", function () {
                e.flipButton = !1;
              });
          },
          methods: Object(h["a"])(
            Object(h["a"])({}, Object(b["b"])("main", ["removeCustomPath", "addCustomPath"])),
            {},
            {
              remove: function (e, t) {
                var s = this.selectedApp.paths.filter(function (e, s) {
                  if (s !== t) return e;
                });
                this.removeCustomPath(e),
                  this.setupCustomPaths(),
                  (this.selectedApp.paths = s),
                  (this.selectedPath = this.selectedApp.paths.length > 1 ? this.selectedApp.paths[0] : Q[0].paths[0]),
                  this.$refs.pathDropdown[0].closeDropdown();
              },
              setupCustomPaths: function () {
                var e = this,
                  t = Q.map(function (e) {
                    return e;
                  }),
                  s = Object.keys(this.customPaths),
                  c = {
                    paths: [
                      { label: "Ethereum (Trezor)", path: q["k"].path, default: !0 },
                      { label: "Add Custom Paths", path: "custom", default: !0 },
                    ],
                    network: { icon: ee.a, name_long: "Custom Paths", name: "Custom" },
                  };
                s.forEach(function (t) {
                  c.paths.unshift(e.customPaths[t]);
                }),
                  t.push(c),
                  (this.apps = t);
              },
              locAddCustomPath: function () {
                var e = this,
                  t = H["f"].checkCustomPath(this.customPath);
                t
                  ? ((this.selectedPath = { path: t, label: this.customLabel }),
                    this.addCustomPath({ label: this.customLabel, path: t }).then(function () {
                      e.setupCustomPaths(), e.selectedApp.paths.unshift(e.selectedPath);
                    }))
                  : H["d"].responseHandler(this.$t("access-wallet.path.ivalid-custom"), H["d"].ERROR);
              },
              cancel: function () {
                (this.customLabel = ""), (this.customPath = ""), (this.selectedPath = this.selectedApp.paths.length > 1 ? this.selectedApp.paths[0] : Q[0].paths[0]);
              },
              selectDapp: function (e) {
                this.selectedApp = e;
              },
              setPath: function (e) {
                this.selectedPath = e;
              },
              next: function () {
                var e = this;
                this.$refs.ledgerApp.hide(),
                  Object(X["e"])(this.selectedPath.path)
                    .then(function (t) {
                      e.$emit("hardwareWalletOpen", t);
                    })
                    .catch(function (e) {
                      X["e"].errorHandler(e);
                    });
              },
              reset: function () {
                (this.selectedApp = this.apps[0]), (this.selectedPath = this.apps[0].paths[0]);
              },
            }
          ),
        },
        se = te,
        ce = (s("6587"), Object(k["a"])(se, $, Y, !1, null, "5a27acb5", null)),
        ae = ce.exports,
        re = function () {
          var e = this,
            t = e.$createElement,
            c = e._self._c || t;
          return c("div", { staticClass: "interface-address" }, [
            c("div", { staticClass: "info-block address" }, [
              c(
                "div",
                { staticClass: "block-image" },
                [
                  c("blockie", { staticClass: "blockie-image", attrs: { address: e.address, size: 8, scale: 16, width: "64px", height: "64px" } }),
                  c("input", { ref: "copyAddress", staticClass: "hidden-input", attrs: { autocomplete: "off" }, domProps: { value: e.address } }),
                ],
                1
              ),
              c("div", { staticClass: "block-content" }, [
                c("div", { staticClass: "information-container" }, [c("h2", [e._v(e._s(e.$t("common.addr")))]), c("p", { staticClass: "address" }, [e._v(e._s(e.address))])]),
                c(
                  "div",
                  { staticClass: "icon-container" },
                  [
                    e.hasMultipleAddr
                      ? c("button", { staticClass: "change-button", attrs: { id: "popover-ref-switch" }, on: { click: e.switchAddr } }, [
                          e._v(" " + e._s(e.$t("interface.addr.button-switch")) + " "),
                        ])
                      : e._e(),
                    c("b-btn", { staticClass: "custom-tooltip", attrs: { id: "popover-ref-qrcode" }, on: { click: e.qrcode } }, [c("img", { attrs: { alt: "", src: s("4da0") } })]),
                    c("b-btn", { staticClass: "custom-tooltip", attrs: { id: "popover-ref-print" }, on: { click: e.print } }, [c("img", { attrs: { alt: "", src: s("240d") } })]),
                    c("b-btn", { staticClass: "custom-tooltip", attrs: { id: "popover-ref-copy" }, on: { click: e.copy } }, [c("img", { attrs: { alt: "", src: s("fd74") } })]),
                    c(
                      "b-btn",
                      {
                        directives: [{ name: "show", rawName: "v-show", value: e.displayAddr, expression: "displayAddr" }],
                        staticClass: "custom-tooltip button-address",
                        attrs: { id: "popover-ref-address" },
                        on: { click: e.displayAddr },
                      },
                      [c("img", { attrs: { alt: "", src: s("038f") } })]
                    ),
                    c("b-popover", { attrs: { content: e.$t("popover.addr-switch"), target: "popover-ref-address", placement: "top", triggers: "hover", title: "" } }),
                    c("b-popover", { attrs: { content: e.$t("popover.print"), target: "popover-ref-print", placement: "top", triggers: "hover", title: "" } }),
                    c("b-popover", { attrs: { content: e.$t("common.copy"), target: "popover-ref-copy", placement: "top", triggers: "hover", title: "" } }),
                    c("b-popover", { attrs: { content: e.$t("popover.addr-switch"), target: "popover-ref-switch", placement: "top", triggers: "hover", title: "" } }),
                    c("b-popover", { attrs: { content: e.$t("popover.addr-display"), target: "popover-ref-address", placement: "top", triggers: "hover", title: "" } }),
                    c("b-popover", { attrs: { content: e.$t("popover.addr-qr"), target: "popover-ref-qrcode", placement: "top", triggers: "hover", title: "" } }),
                  ],
                  1
                ),
              ]),
            ]),
          ]);
        },
        ne = [],
        oe = s("c8e5"),
        he = s("59c3"),
        be = {
          components: { blockie: oe["a"] },
          props: {
            address: { type: String, default: "" },
            print: { type: Function, default: function () {} },
            switchAddr: { type: Function, default: function () {} },
            displayAddr: { type: Function, default: void 0 },
            qrcode: { type: Function, default: function () {} },
          },
          data: function () {
            return { hasMultipleAddr: !1 };
          },
          computed: Object(h["a"])({}, Object(b["c"])("main", ["account"])),
          mounted: function () {
            null !== this.account.address &&
              (this.account.identifier !== he["f"] && this.account.identifier !== he["j"] && this.account.identifier !== he["h"] && this.account.identifier !== he["o"]
                ? (this.hasMultipleAddr = !0)
                : (this.hasMultipleAddr = !1));
          },
          methods: {
            copy: function () {
              this.$refs.copyAddress.select(), document.execCommand("copy"), H["d"].responseHandler(this.$t("common.copied"), H["d"].INFO);
            },
          },
        },
        ie = be,
        de = (s("2cdb"), Object(k["a"])(ie, re, ne, !1, null, "1fdecad0", null)),
        le = de.exports,
        fe = function () {
          var e = this,
            t = e.$createElement,
            c = e._self._c || t;
          return c(
            "div",
            { staticClass: "info-block-container" },
            [
              c("interface-balance-modal", { ref: "balance", attrs: { balance: e.balance } }),
              c("div", { staticClass: "info-block balance" }, [
                e._m(0),
                c("div", { staticClass: "block-content" }, [
                  c("div", { staticClass: "information-container" }, [
                    c("h2", [e._v(e._s(e.$t("common.balance.string")))]),
                    c("div", { staticClass: "balance-text-container" }, [
                      c(
                        "div",
                        { directives: [{ name: "show", rawName: "v-show", value: void 0 !== e.balance, expression: "balance !== undefined" }], staticClass: "balance-text" },
                        [c("p", [e._v(" " + e._s(e.balance) + " "), c("span", [e._v(" " + e._s(e.network.type.currencyName) + " ")])])]
                      ),
                      c("i", {
                        directives: [{ name: "show", rawName: "v-show", value: void 0 === e.balance, expression: "balance === undefined" }],
                        staticClass: "fa fa-spin fa-spinner",
                      }),
                    ]),
                  ]),
                  c(
                    "div",
                    { staticClass: "icon-container" },
                    [
                      c("b-btn", { staticClass: "custom-tooltip", attrs: { id: "balanceCheck" }, on: { click: e.balanceModalOpen } }, [
                        c("img", { attrs: { alt: "", src: s("617f6") } }),
                      ]),
                      c("b-btn", { staticClass: "custom-tooltip", attrs: { id: "refreshBalance" }, on: { click: e.fetchBalance } }, [
                        c("img", {
                          directives: [{ name: "show", rawName: "v-show", value: !e.fetchingBalance, expression: "!fetchingBalance" }],
                          attrs: { alt: "", src: s("acfc") },
                        }),
                        c("i", {
                          directives: [{ name: "show", rawName: "v-show", value: e.fetchingBalance, expression: "fetchingBalance" }],
                          staticClass: "fa fa-lg fa-spinner fa-spin",
                        }),
                      ]),
                      c("b-popover", { attrs: { content: e.$t("interface.check-balance.string"), target: "balanceCheck", placement: "top", triggers: "hover", title: "" } }),
                      c("b-popover", { attrs: { content: e.$t("interface.check-balance.refresh"), target: "refreshBalance", placement: "top", triggers: "hover", title: "" } }),
                    ],
                    1
                  ),
                ]),
              ]),
            ],
            1
          );
        },
        me = [
          function () {
            var e = this,
              t = e.$createElement,
              c = e._self._c || t;
            return c("div", { staticClass: "block-image" }, [c("div", { staticClass: "icon-border" }, [c("img", { staticClass: "icon", attrs: { alt: "", src: s("1113") } })])]);
          },
        ],
        ue = function () {
          var e = this,
            t = e.$createElement,
            c = e._self._c || t;
          return c(
            "div",
            { staticClass: "modal-container" },
            [
              c(
                "b-modal",
                {
                  ref: "balance",
                  staticClass: "bootstrap-modal balance nopadding",
                  attrs: { title: e.$t("common.balance.string"), "hide-footer": "", centered: "", static: "", lazy: "" },
                },
                [
                  c("div", { staticClass: "content-block total-balance" }, [
                    c("div", { staticClass: "flex-container" }, [
                      c("h4", { staticClass: "modal-title" }, [e._v(e._s(e.$t("common.balance.total")))]),
                      c("div", { staticClass: "margin-left-auto total-balance-amount" }, [c("span", [e._v(e._s(e.balance))]), e._v(" " + e._s(e.network.type.currencyName) + " ")]),
                    ]),
                  ]),
                  c("div", { staticClass: "content-block" }, [
                    c("h4", { staticClass: "equivalent-values-title" }, [e._v(" " + e._s(e.$t("interface.check-balance.equivalent")) + " ")]),
                    c(
                      "ul",
                      { staticClass: "equivalent-values" },
                      e._l(e.equivalentValues, function (t) {
                        return c("li", { key: t.key }, [
                          c("img", { attrs: { src: s("7cd9")("./" + t.name.toLowerCase() + ".svg"), alt: "" } }),
                          c("p", { staticClass: "ev-name" }, [e._v(e._s(t.name))]),
                          c("p", { staticClass: "ev-value" }, [e._v(e._s(t.value))]),
                        ]);
                      }),
                      0
                    ),
                  ]),
                ]
              ),
            ],
            1
          );
        },
        pe = [],
        ge = {
          props: { balance: { type: String, default: "0" } },
          data: function () {
            return {
              equivalentValues: [
                { name: "BTC", value: "" },
                { name: "REP", value: "" },
                { name: "CHF", value: "" },
                { name: "USD", value: "" },
                { name: "EUR", value: "" },
                { name: "GBP", value: "" },
              ],
            };
          },
          computed: Object(h["a"])({}, Object(b["c"])("main", ["network", "online"])),
          watch: {
            balance: function () {
              this.fetchBalanceData();
            },
          },
          mounted: function () {
            this.fetchBalanceData();
          },
          methods: {
            fetchBalanceData: function () {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function t() {
                  var s, c, a, r;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!e.online) {
                            t.next = 12;
                            break;
                          }
                          return (s = []), (c = "https://cryptorates.mewapi.io/convert/ETH"), (t.next = 5), fetch(c);
                        case 5:
                          return (a = t.sent), (t.next = 8), a.json();
                        case 8:
                          (r = t.sent),
                            delete r["lastCalled"],
                            Object.keys(r).forEach(function (t) {
                              if (
                                e.equivalentValues.find(function (e) {
                                  return e.name === t;
                                })
                              ) {
                                var c = { name: t, value: new u.a(e.balance).multipliedBy(new u.a(r[t])).decimalPlaces(18).toFixed() };
                                s.push(c);
                              }
                            }),
                            (e.equivalentValues = s);
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
          },
        },
        we = ge,
        xe = (s("ef1f"), Object(k["a"])(we, ue, pe, !1, null, "e69e49b8", null)),
        ke = xe.exports,
        Ee = {
          components: { "interface-balance-modal": ke },
          props: { balance: { type: String, default: "0" }, getBalance: { type: Function, default: function () {} } },
          data: function () {
            return { fetchingBalance: !1 };
          },
          computed: Object(h["a"])({}, Object(b["c"])("main", ["network"])),
          watch: {
            balance: function () {
              this.fetchingBalance = !1;
            },
          },
          methods: {
            balanceModalOpen: function () {
              this.$refs.balance.$refs.balance.show();
            },
            fetchBalance: function () {
              var e = this;
              (this.fetchingBalance = !0),
                setTimeout(function () {
                  e.getBalance(), (e.fetchingBalance = !1);
                }, 1e3);
            },
          },
        },
        ye = Ee,
        Me = (s("5f52"), Object(k["a"])(ye, fe, me, !1, null, "697ae074", null)),
        We = Me.exports,
        _e = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            "div",
            { staticClass: "info-block-container" },
            [
              s("interface-network-modal", { ref: "network" }),
              s("div", { staticClass: "info-block network" }, [
                s("div", { staticClass: "block-image" }, [
                  s("div", { staticClass: "network-type" }, [
                    s("div", { staticClass: "icon-block" }, [s("img", { staticClass: "icon", attrs: { src: e.network.type.icon, alt: "" } })]),
                  ]),
                ]),
                s("div", { staticClass: "block-content" }, [
                  s("div", { staticClass: "information-container" }, [
                    s("div", { staticClass: "title-and-helper" }, [s("h2", [e._v(e._s(e.$t("common.network")))])]),
                    e.account.identifier !== e.identifier
                      ? s("p", [e._v(" " + e._s(e.network.service + "(" + e.network.type.name + ")") + " ")])
                      : s("p", [e._v(e._s("Web3 Provider(" + e.network.type.name + ")"))]),
                    s("p", [
                      e._v(" " + e._s(e.$t("interface.network-modal.last-block")) + "# : "),
                      s("span", { directives: [{ name: "show", rawName: "v-show", value: "" !== e.parsedNetwork, expression: "parsedNetwork !== ''" }] }, [
                        e._v(" " + e._s(e.parsedNetwork)),
                      ]),
                      s("i", {
                        directives: [{ name: "show", rawName: "v-show", value: "" === e.parsedNetwork, expression: "parsedNetwork === ''" }],
                        staticClass: "fa fa-spinner fa-spin",
                      }),
                    ]),
                  ]),
                  s(
                    "div",
                    { staticClass: "icon-container" },
                    [
                      e.account.identifier !== e.identifier
                        ? s("button", { staticClass: "change-button", attrs: { id: "networkModal" }, on: { click: e.networkModalOpen } }, [
                            e._v(" " + e._s(e.$t("interface.network-modal.button-change")) + " "),
                          ])
                        : e._e(),
                      s("b-popover", {
                        attrs: { content: e.$t("interface.network-modal.popup-open-networks"), target: "networkModal", placement: "top", triggers: "hover", title: "" },
                      }),
                    ],
                    1
                  ),
                ]),
              ]),
            ],
            1
          );
        },
        je = [],
        ve = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            "div",
            { staticClass: "modal-container" },
            [
              s(
                "b-modal",
                {
                  ref: "network",
                  staticClass: "bootstrap-modal network nopadding max-height-1",
                  attrs: { title: e.$t("common.network"), "hide-footer": "", centered: "", static: "", lazy: "" },
                },
                [
                  e.isLocal
                    ? s("div", { staticClass: "content-block" }, [
                        s("div", { staticClass: "flex-container" }, [
                          s("h4", { staticClass: "modal-title" }, [e._v(e._s(e.$t("common.advanced")))]),
                          s("div", { staticClass: "margin-left-auto add-custom-network" }, [
                            s("p", [e._v(e._s(e.$t("interface.network-modal.add-custom")))]),
                            s("div", { staticClass: "sliding-switch-white" }, [
                              s("label", { staticClass: "switch" }, [
                                s("input", { ref: "addCustomToggle", attrs: { type: "checkbox" }, on: { click: e.addCustomNetworkToggle } }),
                                s("span", { staticClass: "slider round" }),
                              ]),
                            ]),
                          ]),
                        ]),
                      ])
                    : e._e(),
                  s(
                    "div",
                    { ref: "networkList", staticClass: "network-list" },
                    [
                      e._l(Object.keys(e.reorderedNetworks), function (t, c) {
                        return s("div", { key: t + c, staticClass: "content-block" }, [
                          s("div", { staticClass: "network-title" }, [
                            s("div", { staticClass: "network-icon" }, [s("img", { attrs: { src: e.Networks[t][0].type.icon, alt: "" } })]),
                            s("h4", { class: t.toLowerCase() }, [e._v(e._s(t))]),
                          ]),
                          s(
                            "div",
                            { staticClass: "grid-3" },
                            e._l(e.Networks[t], function (t) {
                              return s(
                                "p",
                                {
                                  key: t.service,
                                  staticClass: "switch-network",
                                  class: t.service === e.network.service && t.type && t.type.name === e.network.type.name ? "current-network" : "",
                                  on: {
                                    click: function (s) {
                                      return e.locSwitchNetwork(t);
                                    },
                                  },
                                },
                                [e._v(" " + e._s(t.service) + " ")]
                              );
                            }),
                            0
                          ),
                        ]);
                      }),
                      e.customNetworks.length > 0
                        ? s(
                            "div",
                            { staticClass: "content-block" },
                            [
                              s("h4", { staticClass: "cust" }, [e._v(e._s(e.$t("interface.network-modal.custom")))]),
                              e._l(e.customNetworks, function (t, c) {
                                return s("div", { key: t.service + "(" + t.type.name + ")" + c, staticClass: "grid-3" }, [
                                  s(
                                    "div",
                                    {
                                      staticClass: "switch-network custom-network-item",
                                      class: t.service === e.network.service && t.type.name === e.network.type.name ? "current-network" : "",
                                    },
                                    [
                                      s(
                                        "p",
                                        {
                                          on: {
                                            click: function (s) {
                                              return e.locSwitchNetwork(t);
                                            },
                                          },
                                        },
                                        [e._v(" " + e._s(t.service) + " " + e._s("(" + t.type.name + ")") + " ")]
                                      ),
                                      s("i", {
                                        staticClass: "fa fa-times-circle",
                                        on: {
                                          click: function (s) {
                                            return s.preventDefault(), e.removeNetwork(t, c);
                                          },
                                        },
                                      }),
                                    ]
                                  ),
                                ]);
                              }),
                            ],
                            2
                          )
                        : e._e(),
                    ],
                    2
                  ),
                  s("form", { ref: "networkAdd", staticClass: "network-add hidden" }, [
                    s("div", { staticClass: "content-block" }, [
                      s("div", { staticClass: "input-block-container" }, [
                        s("input", {
                          directives: [{ name: "model", rawName: "v-model", value: e.name, expression: "name" }],
                          staticClass: "custom-input-text-1",
                          attrs: { placeholder: e.$t("interface.network-modal.eth-node"), type: "text", name: "nodeName", autocomplete: "off" },
                          domProps: { value: e.name },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.name = t.target.value);
                            },
                          },
                        }),
                        s(
                          "select",
                          {
                            directives: [{ name: "model", rawName: "v-model", value: e.selectedNetworkName, expression: "selectedNetworkName" }],
                            staticClass: "custom-select-1",
                            on: {
                              change: function (t) {
                                var s = Array.prototype.filter
                                  .call(t.target.options, function (e) {
                                    return e.selected;
                                  })
                                  .map(function (e) {
                                    var t = "_value" in e ? e._value : e.value;
                                    return t;
                                  });
                                e.selectedNetworkName = t.target.multiple ? s : s[0];
                              },
                            },
                          },
                          e._l(e.types, function (t) {
                            return s("option", { key: t.name + t.name_long, domProps: { value: t.name, selected: e.selectedNetworkName === t.name } }, [
                              e._v(" " + e._s(e._f("capitalize")(t.name)) + " - " + e._s(e._f("capitalize")(t.name_long)) + " "),
                            ]);
                          }),
                          0
                        ),
                        s("input", {
                          directives: [
                            { name: "model", rawName: "v-model", value: e.url, expression: "url" },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: { required: !0, url: { require_protocol: !0, protocols: ["http", "https", "ws", "wss"], require_tld: !1 } },
                              expression:
                                "{\n              required: true,\n              url: {\n                require_protocol: true,\n                protocols: ['http', 'https', 'ws', 'wss'],\n                require_tld: false\n              }\n            }",
                            },
                          ],
                          staticClass: "custom-input-text-1",
                          attrs: { type: "text", name: "nodeUrl", placeholder: "URL", autocomplete: "off" },
                          domProps: { value: e.url },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.url = t.target.value);
                            },
                          },
                        }),
                        s("input", {
                          directives: [{ name: "model", rawName: "v-model", value: e.port, expression: "port" }],
                          staticClass: "custom-input-text-1",
                          attrs: { placeholder: e.$t("interface.network-modal.port"), type: "number", name: "nodePort", autocomplete: "off" },
                          domProps: { value: e.port },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.port = t.target.value);
                            },
                          },
                        }),
                        s("input", {
                          directives: [
                            { name: "show", rawName: "v-show", value: "CUS" === e.selectedNetworkName, expression: "selectedNetworkName === 'CUS'" },
                            { name: "model", rawName: "v-model", value: e.blockExplorerTX, expression: "blockExplorerTX" },
                          ],
                          staticClass: "custom-input-text-1",
                          attrs: { placeholder: e.$t("interface.etherscan-tx-url"), type: "text", name: "customExplorerTx", autocomplete: "off" },
                          domProps: { value: e.blockExplorerTX },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.blockExplorerTX = t.target.value);
                            },
                          },
                        }),
                        s("input", {
                          directives: [
                            { name: "show", rawName: "v-show", value: "CUS" === e.selectedNetworkName, expression: "selectedNetworkName === 'CUS'" },
                            { name: "model", rawName: "v-model", value: e.chainID, expression: "chainID" },
                          ],
                          staticClass: "custom-input-text-1",
                          attrs: { placeholder: e.$t("common.chain-id"), type: "number", name: "customChain", autocomplete: "off" },
                          domProps: { value: e.chainID },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.chainID = t.target.value);
                            },
                          },
                        }),
                        s("input", {
                          directives: [
                            { name: "show", rawName: "v-show", value: "CUS" === e.selectedNetworkName, expression: "selectedNetworkName === 'CUS'" },
                            { name: "model", rawName: "v-model", value: e.blockExplorerAddr, expression: "blockExplorerAddr" },
                          ],
                          staticClass: "custom-input-text-1",
                          attrs: { placeholder: e.$t("interface.etherscan-address-url"), type: "text", name: "customExplorerAddr", autocomplete: "off" },
                          domProps: { value: e.blockExplorerAddr },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.blockExplorerAddr = t.target.value);
                            },
                          },
                        }),
                      ]),
                      s("div", [
                        s("p", { directives: [{ name: "show", rawName: "v-show", value: e.errors.has("nodeName"), expression: "errors.has('nodeName')" }] }, [
                          e._v(" " + e._s(e.errors.first("nodeName")) + " "),
                        ]),
                        s("p", { directives: [{ name: "show", rawName: "v-show", value: e.errors.has("nodeUrl"), expression: "errors.has('nodeUrl')" }] }, [
                          e._v(e._s(e.errors.first("nodeUrl"))),
                        ]),
                        s(
                          "p",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: e.errors.has("customExplorerTx") || e.blockExplorerTX.length > 0,
                                expression: "\n              errors.has('customExplorerTx') || blockExplorerTX.length > 0\n            ",
                              },
                            ],
                          },
                          [e._v(" " + e._s(e.errors.first("customExplorerTx")) + " ")]
                        ),
                        s(
                          "p",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: e.errors.has("customChain") || (e.chainID && e.chainID > 0),
                                expression: "errors.has('customChain') || (chainID && chainID > 0)",
                              },
                            ],
                          },
                          [e._v(" " + e._s(e.errors.first("customChain")) + " ")]
                        ),
                        s(
                          "p",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: e.errors.has("customExplorerAddr") || e.blockExplorerAddr.length > 0,
                                expression: "\n              errors.has('customExplorerAddr') || blockExplorerAddr.length > 0\n            ",
                              },
                            ],
                          },
                          [e._v(" " + e._s(e.errors.first("customExplorerAddr")) + " ")]
                        ),
                      ]),
                    ]),
                    s("div", { staticClass: "content-block" }, [
                      s("div", { staticClass: "flex-container" }, [
                        s("div", [
                          s("h4", { staticClass: "modal-title" }, [e._v(" " + e._s(e.$t("interface.network-modal.http-access")) + " ")]),
                          s("p", { staticClass: "warning-msg" }, [e._v(" " + e._s(e.$t("interface.network-modal.warning")) + " ")]),
                        ]),
                        s("div", { staticClass: "margin-left-auto add-custom-network" }, [
                          s("div", { staticClass: "sliding-switch-white" }, [
                            s("label", { staticClass: "switch" }, [
                              s("input", { attrs: { type: "checkbox" }, on: { click: e.expendAuth } }),
                              s("span", { staticClass: "slider round" }),
                            ]),
                          ]),
                        ]),
                      ]),
                      s("div", { ref: "authForm", staticClass: "auth-form-container hidden" }, [
                        s("input", {
                          directives: [{ name: "model", rawName: "v-model", value: e.username, expression: "username" }],
                          staticClass: "custom-input-text-1",
                          attrs: { placeholder: e.$t("interface.network-modal.user-name"), type: "text", name: "", autocomplete: "off" },
                          domProps: { value: e.username },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.username = t.target.value);
                            },
                          },
                        }),
                        s("input", {
                          directives: [{ name: "model", rawName: "v-model", value: e.password, expression: "password" }],
                          staticClass: "custom-input-text-1",
                          attrs: { placeholder: e.$t("common.password.string"), type: "password", name: "", autocomplete: "off" },
                          domProps: { value: e.password },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.password = t.target.value);
                            },
                          },
                        }),
                      ]),
                    ]),
                    s("div", { staticClass: "content-block" }, [
                      s(
                        "div",
                        { staticClass: "save-button-container" },
                        [
                          s(
                            "button",
                            {
                              directives: [{ name: "show", rawName: "v-show", value: "CUS" !== e.selectedNetworkName, expression: "selectedNetworkName !== 'CUS'" }],
                              class: [
                                e.errors.has("nodeName") || e.errors.has("nodeUrl") || "" === e.url || "" === e.name ? "disabled" : "",
                                "save-button large-round-button-green-filled clickable",
                              ],
                              on: {
                                click: function (t) {
                                  return t.preventDefault(), e.saveCustomNetwork(t);
                                },
                              },
                            },
                            [e._v(" " + e._s(e.$t("common.save")) + " ")]
                          ),
                          s(
                            "button",
                            {
                              directives: [{ name: "show", rawName: "v-show", value: "CUS" === e.selectedNetworkName, expression: "selectedNetworkName === 'CUS'" }],
                              class: [
                                e.errors.has("nodeName") ||
                                e.errors.has("nodeUrl") ||
                                "" === e.url ||
                                "" === e.name ||
                                e.errors.has("customChain") ||
                                e.errors.has("customExplorerTx") ||
                                "" === e.blockExplorerTX ||
                                !e.chainID ||
                                "" === e.blockExplorerAddr ||
                                e.errors.has("customExplorerAddr")
                                  ? "disabled"
                                  : "",
                                "save-button large-round-button-green-filled clickable",
                              ],
                              on: {
                                click: function (t) {
                                  return t.preventDefault(), e.saveCustomNetwork(t);
                                },
                              },
                            },
                            [e._v(" " + e._s(e.$t("common.save")) + " ")]
                          ),
                          s("interface-bottom-text", {
                            attrs: { "link-text": e.$t("common.help-center"), question: e.$t("common.dont-know"), link: "https://kb.myetherwallet.com" },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]
              ),
            ],
            1
          );
        },
        Te = [],
        Ce = (s("a434"), s("d0ff")),
        Ae = s("8ded"),
        Ne = s.n(Ae),
        Oe = s("539d"),
        Se = s("7424"),
        Re = s("a731"),
        Be = {
          components: { "interface-bottom-text": Oe["a"] },
          data: function () {
            return {
              types: Z,
              selectedNetworkName: "ETH",
              chainID: Z["ETH"].chainID,
              port: 443,
              name: "",
              url: "",
              username: "",
              password: "",
              customNetworks: [],
              blockExplorerAddr: "",
              blockExplorerTX: "",
            };
          },
          computed: Object(h["a"])(
            Object(h["a"])({}, Object(b["c"])("main", ["network", "Networks", "web3", "online"])),
            {},
            {
              isLocal: function () {
                return window.location.host.includes("localhost") || window.location.host.includes("file://");
              },
              reorderedNetworks: function () {
                var e = Re["a"].reorderNetworks();
                return e;
              },
              selectedNetwork: function () {
                return this.types[this.selectedNetworkName];
              },
            }
          ),
          watch: {
            selectedNetworkName: function (e) {
              "CUS" !== e && this.selectedNetwork && (this.chainID = this.selectedNetwork.chainID);
            },
          },
          mounted: function () {
            this.isLocal &&
              void 0 !== Ne.a.get("customNetworks") &&
              ((this.customNetworks = Ne.a.get("customNetworks")),
              this.customNetworks.length &&
                this.customNetworks.forEach(function (e) {
                  "CUS" !== e.type.name &&
                    ((e.type.contracts = Se["a"][e.type.name][0].type.contracts),
                    (e.type.tokens = Se["a"][e.type.name][0].type.tokens),
                    (e.type.ens = Se["a"][e.type.name][0].type.ens));
                })),
              (this.types["CUS"] = {
                name: "CUS",
                name_long: "CUSTOM",
                homePage: "",
                blockExplorerTX: "",
                blockExplorerAddr: "",
                chainID: Z["ETH"].chainID,
                tokens: [],
                contracts: [],
                currencyName: "CUS",
              }),
              (this.selectedNetworkName = this.network.type.name);
          },
          methods: Object(h["a"])(
            Object(h["a"])({}, Object(b["b"])("main", ["switchNetwork", "setWeb3Instance"])),
            {},
            {
              networkModalOpen: function () {
                this.$refs.network.$refs.network.show();
              },
              removeNetwork: function (e, t) {
                this.customNetworks.splice(t, 1),
                  e.service === this.network.service && (this.customNetworks.length > 0 ? this.switchNetwork(this.customNetworks[0]) : this.switchNetwork(this.Networks.ETH[0])),
                  Ne.a.set("customNetworks", this.customNetworks);
              },
              addCustomNetworkToggle: function () {
                this.$refs.network.$el.classList.toggle("max-height-1"), this.$refs.networkList.classList.toggle("hidden"), this.$refs.networkAdd.classList.toggle("hidden");
              },
              resetCompState: function () {
                (this.port = 443), (this.name = ""), (this.url = ""), (this.username = ""), (this.password = ""), (this.blockExplorerAddr = ""), (this.blockExplorerTX = "");
              },
              saveCustomNetwork: function () {
                var e = {
                    auth: "" !== this.password && "" !== this.username,
                    password: this.password,
                    port: parseInt(this.port),
                    service: this.name,
                    url: this.url,
                    username: this.username,
                    type: {
                      blockExplorerAddr: this.selectedNetwork.blockExplorerAddr || this.blockExplorerAddr || "",
                      blockExplorerTX: this.selectedNetwork.blockExplorerTX || this.blockExplorerTX || "",
                      chainID: parseInt(this.chainID),
                      contracts: [],
                      homePage: "",
                      name: this.selectedNetwork.name,
                      name_long: this.selectedNetwork.name_long,
                      tokens: [],
                      currencyName: this.selectedNetwork.currencyName,
                    },
                  },
                  t = Object(Ce["a"])(this.customNetworks);
                t.push(e),
                  Ne.a.set("customNetworks", t),
                  "CUS" !== this.selectedNetwork.name &&
                    ((e.type.contracts = this.selectedNetwork.contracts), (e.type.tokens = this.selectedNetwork.tokens), (e.type.ens = this.selectedNetwork.ens)),
                  this.customNetworks.push(e),
                  this.resetCompState(),
                  this.$refs.addCustomToggle.click();
              },
              expendAuth: function () {
                this.$refs.authForm.classList.toggle("hidden");
              },
              locSwitchNetwork: function (e) {
                var t = this;
                this.switchNetwork(e).then(function () {
                  t.setWeb3Instance().then(function () {
                    (t.selectedNetworkName = e.type.name),
                      Re["a"].isMewCx() && window.chrome.storage.sync.set({ defChainID: e.type.chainID, defNetwork: JSON.stringify({ service: e.service, key: e.type.name }) });
                  });
                }),
                  this.$refs.network.hide();
              },
            }
          ),
        },
        Pe = Be,
        Ie = (s("78ce"), Object(k["a"])(Pe, ve, Te, !1, null, "578c073c", null)),
        De = Ie.exports,
        Le = {
          components: { "interface-network-modal": De },
          props: { blockNumber: { type: Number, default: 0 } },
          data: function () {
            return { parsedNetwork: 0, identifier: he["o"] };
          },
          computed: Object(h["a"])({}, Object(b["c"])("main", ["network", "account", "web3"])),
          watch: {
            blockNumber: function (e) {
              this.parsedNetwork = parseInt(e);
            },
          },
          mounted: function () {
            this.blockNumber && void 0 !== this.blockNumber && (this.parsedNetwork = parseInt(this.blockNumber));
          },
          methods: {
            networkModalOpen: function () {
              this.account.identifier !== this.identifier && this.$refs.network.$refs.network.show();
            },
          },
        },
        Xe = Le,
        He = (s("7d3a"), Object(k["a"])(Xe, _e, je, !1, null, "670b0364", null)),
        Ge = He.exports,
        Ue = function () {
          var e = this,
            t = e.$createElement,
            c = e._self._c || t;
          return c("div", { staticClass: "transactions-side-menu" }, [
            c("div", { staticClass: "side-menu-header" }, [
              c("img", { attrs: { alt: "", src: s("9d64") } }),
              c("div", { on: { click: e.startToggleSideMenu } }, [c("i", { staticClass: "fa fa-lg fa-times" })]),
            ]),
            c("div", { staticClass: "side-menu" }, [
              c(
                "ul",
                e._l(e.tabData, function (t, s) {
                  return c("li", { key: t.name + s, class: t.onlineOnly && !e.online ? "disabled-item" : "" }, [
                    t.onlineOnly && !e.online ? c("div", { staticClass: "dash" }) : e._e(),
                    c(
                      "div",
                      {
                        class: [e.isTabActive(t.routes) ? "active" : "", "menu-group-title"],
                        on: {
                          click: function (s) {
                            return s.preventDefault(), e.tabAction(t);
                          },
                        },
                      },
                      [
                        c("img", { attrs: { src: e.isTabActive(t.routes) ? t.icons.active : t.icons.inactive, alt: "" } }),
                        c("p", [e._v(e._s(e.$t(t.titleKey)))]),
                        c("i", {
                          directives: [{ name: "show", rawName: "v-show", value: t.children.length, expression: "tab.children.length" }],
                          class: ["fa", e.isTabActive(t.routes) ? "fa-angle-up" : "fa-angle-down"],
                          attrs: { "aria-hidden": "true" },
                        }),
                      ]
                    ),
                    t.children.length
                      ? c(
                          "ul",
                          { class: [t.name, e.isTabActive(t.routes) ? "show-child" : "", "child-tab"] },
                          e._l(t.children, function (t, s) {
                            return c(
                              "li",
                              {
                                key: t.name + s,
                                class: [e.isTabActive(t.routes) ? "active" : "", t.onlineOnly && !e.online ? "disabled-item" : ""],
                                on: {
                                  click: function (s) {
                                    return s.preventDefault(), e.tabAction(t);
                                  },
                                },
                              },
                              [e._v(" " + e._s(e.$t(t.titleKey)) + " ")]
                            );
                          }),
                          0
                        )
                      : e._e(),
                  ]);
                }),
                0
              ),
            ]),
          ]);
        },
        Ke = [],
        Fe = s("2c51"),
        Ve = {
          data: function () {
            return { tabData: Fe["a"].tabs };
          },
          computed: Object(h["a"])({}, Object(b["c"])("main", ["online"])),
          methods: Object(h["a"])(
            Object(h["a"])({}, Object(b["b"])("main", ["toggleSideMenu"])),
            {},
            {
              startToggleSideMenu: function () {
                this.toggleSideMenu();
              },
              isTabActive: function (e) {
                return e.includes(this.$route.path);
              },
              tabAction: function (e) {
                e.hasOwnProperty("children") && 0 !== e.children.length
                  ? this.$router.push({ path: e.children[0].routes[0] })
                  : (this.startToggleSideMenu(), this.$router.push({ path: e.routes[0] }));
              },
            }
          ),
        },
        $e = Ve,
        Ye = (s("9ef6"), Object(k["a"])($e, Ue, Ke, !1, null, "b506a99a", null)),
        Ze = Ye.exports,
        qe = function () {
          var e = this,
            t = e.$createElement,
            c = e._self._c || t;
          return c(
            "div",
            { staticClass: "transaction-tokens" },
            [
              c("interface-tokens-modal", { ref: "tokenModal", attrs: { "add-token": e.addToken } }),
              c(
                "div",
                { staticClass: "wrap" },
                [
                  c("div", { staticClass: "tokens-container" }, [
                    c("div", { staticClass: "token-search" }, [
                      c("div", { staticClass: "block-title" }, [
                        c("div", { staticClass: "title-container" }, [
                          c("h4", [e._v(e._s(e.$tc("common.token", 2)))]),
                          c("img", { attrs: { alt: "", src: s("acfc") }, on: { click: e.fetchTokens } }),
                        ]),
                        c("p", { on: { click: e.addTokenModal } }, [e._v("+ " + e._s(e.$t("interface.tokens.custom")))]),
                      ]),
                      c("div", { staticClass: "search-block" }, [
                        c("input", {
                          directives: [{ name: "model", rawName: "v-model", value: e.search, expression: "search" }],
                          attrs: { placeholder: "Search", autocomplete: "off" },
                          domProps: { value: e.search },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.search = t.target.value);
                            },
                          },
                        }),
                        c("i", { staticClass: "fa fa-search", attrs: { "aria-hidden": "true" } }),
                      ]),
                    ]),
                    c("div", { directives: [{ name: "show", rawName: "v-show", value: !e.online, expression: "!online" }], staticClass: "cant-load" }, [
                      e._v(" " + e._s(e.$t("interface.tokens.warning-offline")) + " "),
                    ]),
                    c("div", { ref: "tokenTableContainer", staticClass: "token-table-container" }, [
                      c(
                        "table",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.customTokens && e.customTokens.length > 0 && e.receivedTokens,
                              expression: "customTokens && customTokens.length > 0 && receivedTokens",
                            },
                          ],
                        },
                        e._l(e.customTokens, function (t, s) {
                          return c("tr", { key: t.symbol + s }, [
                            c("td", [
                              c("a", { attrs: { href: e.network.type.blockExplorerAddr.replace("[[address]]", t.address), rel: "noopener noreferrer", target: "_blank" } }, [
                                e._v(e._s(t.symbol)),
                              ]),
                            ]),
                            c("td", [
                              e._v(" " + e._s(t.balance) + " "),
                              c("i", {
                                staticClass: "fa fa-times-circle clickable",
                                on: {
                                  click: function (t) {
                                    return e.removeToken(s);
                                  },
                                },
                              }),
                            ]),
                          ]);
                        }),
                        0
                      ),
                      c(
                        "table",
                        {
                          directives: [
                            { name: "show", rawName: "v-show", value: e.localTokens.length > 0 && e.receivedTokens, expression: "localTokens.length > 0 && receivedTokens" },
                          ],
                        },
                        e._l(e.localTokens, function (t, s) {
                          return c("tr", { key: t.symbol + s }, [
                            c("td", { staticClass: "name-and-icon-container" }, [
                              c("figure", { directives: [{ name: "lazy-load", rawName: "v-lazy-load" }], staticClass: "token-icon" }, [
                                c("img", { attrs: { "data-url": e.iconFetch(t) }, on: { error: e.iconFallback } }),
                              ]),
                              c("a", { attrs: { href: e.network.type.blockExplorerAddr.replace("[[address]]", t.address), rel: "noopener noreferrer", target: "_blank" } }, [
                                e._v(e._s(t.symbol)),
                              ]),
                            ]),
                            "Load" === t.balance && e.online
                              ? c(
                                  "td",
                                  {
                                    staticClass: "load-token",
                                    on: {
                                      click: function (s) {
                                        e.online && e.getSpecificTokenBalance(t);
                                      },
                                    },
                                  },
                                  [e._v(" " + e._s(t.balance) + " ")]
                                )
                              : c("td", [e._v(e._s(t.balance))]),
                          ]);
                        }),
                        0
                      ),
                      c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "" === e.search && e.localTokens && 0 === e.localTokens.length && !e.receivedTokens,
                              expression:
                                "\n            search === '' &&\n            localTokens &&\n            localTokens.length === 0 &&\n            !receivedTokens\n          ",
                            },
                          ],
                          staticClass: "spinner-container",
                        },
                        [c("i", { staticClass: "fa fa-spinner fa-spin" })]
                      ),
                      c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "" !== e.search && e.localTokens && 0 === e.localTokens.length && e.customTokens && 0 === e.customTokens.length,
                              expression:
                                "\n            search !== '' &&\n            localTokens &&\n            localTokens.length === 0 &&\n            customTokens &&\n            customTokens.length === 0\n          ",
                            },
                          ],
                          staticClass: "spinner-container",
                        },
                        [e._v(" " + e._s(e.$t("interface.tokens.no-tokens")) + " ")]
                      ),
                    ]),
                    e.customTokens && e.customTokens.length + e.localTokens.length > 15
                      ? c("div", { staticClass: "expend-bar", on: { click: e.tokenListExpend } }, [
                          c("p", { ref: "expendDown", staticClass: "down" }, [c("i", { staticClass: "fa fa-angle-double-down", attrs: { "aria-hidden": "true" } })]),
                          c("p", { ref: "expendUp", staticClass: "up hidden" }, [c("i", { staticClass: "fa fa-angle-double-up", attrs: { "aria-hidden": "true" } })]),
                        ])
                      : e._e(),
                  ]),
                  c("interface-ads"),
                ],
                1
              ),
            ],
            1
          );
        },
        ze = [],
        Qe = (s("fb6a"), s("ac1f"), s("841c"), s("b7d3")),
        Je = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            "div",
            [
              s(
                "b-modal",
                {
                  ref: "tokenModal",
                  staticClass: "bootstrap-modal nopadding max-height-1",
                  attrs: { title: e.$t("interface.tokens.modal.title"), "hide-footer": "", centered: "", static: "", lazy: "" },
                  on: { hidden: e.resetCompState },
                },
                [
                  s(
                    "form",
                    {
                      staticClass: "tokens-modal-body",
                      on: {
                        keydown: function (t) {
                          if (!t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter")) return null;
                          t.preventDefault();
                        },
                      },
                    },
                    [
                      s("div", [
                        s("input", {
                          directives: [
                            { name: "model", rawName: "v-model", value: e.tokenAddress, expression: "tokenAddress" },
                            { name: "validate", rawName: "v-validate", value: "required", expression: "'required'" },
                          ],
                          class: ["custom-input-text-1", "" === e.tokenAddress || e.validAddress ? "" : "invalid-address"],
                          attrs: { placeholder: e.$t("interface.tokens.modal.ph-contract-addr"), name: "Address", type: "text" },
                          domProps: { value: e.tokenAddress },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.tokenAddress = t.target.value);
                            },
                          },
                        }),
                        s(
                          "span",
                          {
                            directives: [{ name: "show", rawName: "v-show", value: "" !== e.tokenAddress && !e.validAddress, expression: "tokenAddress !== '' && !validAddress" }],
                            staticClass: "error-message",
                          },
                          [e._v(" " + e._s(e.$t("interface.tokens.modal.error.addr")) + " ")]
                        ),
                        s("input", {
                          directives: [{ name: "model", rawName: "v-model", value: e.tokenSymbol, expression: "tokenSymbol" }],
                          staticClass: "custom-input-text-1",
                          attrs: { placeholder: e.$t("interface.tokens.modal.ph-symbol"), name: "Symbol", type: "text" },
                          domProps: { value: e.tokenSymbol },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.tokenSymbol = t.target.value);
                            },
                          },
                        }),
                        s("input", {
                          directives: [{ name: "model", rawName: "v-model", value: e.tokenDecimal, expression: "tokenDecimal" }],
                          staticClass: "custom-input-text-1",
                          attrs: { placeholder: e.$t("interface.tokens.modal.ph-decimals"), name: "Decimal", type: "number", min: "0", max: "18" },
                          domProps: { value: e.tokenDecimal },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.tokenDecimal = t.target.value);
                            },
                          },
                        }),
                        s(
                          "span",
                          {
                            directives: [
                              { name: "show", rawName: "v-show", value: e.tokenDecimal < 0 || e.tokenDecimal > 18, expression: "tokenDecimal < 0 || tokenDecimal > 18" },
                            ],
                            staticClass: "error-message",
                          },
                          [e._v(" " + e._s(e.$t("interface.tokens.modal.error.decimals")) + " ")]
                        ),
                      ]),
                      s(
                        "div",
                        { staticClass: "button-block" },
                        [
                          s(
                            "button",
                            {
                              class: [e.allFieldsValid ? "" : "disabled", "save-button large-round-button-green-filled clickable"],
                              on: {
                                click: function (t) {
                                  return t.preventDefault(), e.addToken(e.tokenAddress, e.tokenSymbol, e.tokenDecimal);
                                },
                              },
                            },
                            [e._v(" " + e._s(e.$t("common.save")) + " ")]
                          ),
                          s("interface-bottom-text", {
                            attrs: { "link-text": e.$t("common.help-center"), question: e.$t("common.dont-know"), link: "https://kb.myetherwallet.com" },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                ]
              ),
            ],
            1
          );
        },
        et = [],
        tt =
          (s("4d63"),
          s("498a"),
          {
            components: { "interface-bottom-text": Oe["a"] },
            props: { addToken: { type: Function, default: function () {} } },
            data: function () {
              return { tokenAddress: "", tokenSymbol: "", tokenDecimal: "", validAddress: !1 };
            },
            computed: Object(h["a"])(
              Object(h["a"])({}, Object(b["c"])("main", ["web3"])),
              {},
              {
                allFieldsValid: function () {
                  return (
                    !!this.validAddress &&
                    "" !== this.tokenSymbol &&
                    !(this.tokenDecimal < 0 || this.tokenDecimal > 18 || "" === this.tokenDecimal) &&
                    !(this.errors.has("address") || this.errors.has("symbol") || this.errors.has("decimal"))
                  );
                },
              }
            ),
            watch: {
              tokenAddress: function (e) {
                var t = e.toLowerCase().trim(),
                  s = new RegExp(/[a-zA-Z0-9]/g);
                (this.validAddress = s.test(t) && Object(Qe["a"])(t)), (this.toAddress = t), (this.tokenAddress = t);
              },
              tokenSymbol: function (e) {
                this.tokenSymbol = e.substr(0, 7);
              },
            },
            methods: {
              resetCompState: function () {
                (this.tokenAddress = ""), (this.tokenSymbol = ""), (this.tokenDecimal = ""), (this.validAddress = !1);
              },
            },
          }),
        st = tt,
        ct = (s("be4b"), Object(k["a"])(st, Je, et, !1, null, "3d5f3801", null)),
        at = ct.exports,
        rt = function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
          return e._m(0);
        },
        nt = [
          function () {
            var e = this,
              t = e.$createElement,
              s = e._self._c || t;
            return s("div", { staticClass: "interface-ads" }, [s("div", { staticClass: "global__interface-block__margin-top" })]);
          },
        ],
        ot = {
          components: {},
          props: {},
          data: function () {
            return { slide: 5, search: "", adImage: "", adUrl: "", adInterval: 4e3, currentAdIndex: 1 };
          },
          methods: {
            pauseAds: function () {
              this.adInterval > 0 ? (this.adInterval = 0) : (this.adInterval = 4e3);
            },
            onSlideStart: function () {},
            onSlideEnd: function () {},
          },
        },
        ht = ot,
        bt = (s("ee32"), s("4248"), Object(k["a"])(ht, rt, nt, !1, null, "1d18c33c", null)),
        it = bt.exports;
      function dt(e, t) {
        var s = new u.a(e.balance),
          c = new u.a(t.balance);
        if (!s.isNaN() && !c.isNaN()) {
          if (s.isGreaterThan(c)) return -1;
          if (c.isGreaterThan(s)) return 1;
        }
        return 0;
      }
      var lt = s("1131"),
        ft = s.n(lt),
        mt = s("e91b"),
        ut = {
          components: { "interface-tokens-modal": at, "interface-ads": it },
          props: {
            tokens: {
              type: Array,
              default: function () {
                return [];
              },
            },
            receivedTokens: { type: Boolean, default: !1 },
            getTokenBalance: { type: Function, default: function () {} },
            fetchTokens: { type: Function, default: function () {} },
            resetTokenSelection: { type: Function, default: function () {} },
            ads: { type: Boolean, default: !0 },
            address: { type: String, default: "" },
          },
          data: function () {
            return { search: "", localTokens: [], customTokens: [], util: ft.a, tokenExists: !1 };
          },
          computed: Object(h["a"])(
            Object(h["a"])({}, Object(b["c"])("main", ["network", "web3", "online"])),
            {},
            {
              networkTokens: function () {
                var e = this,
                  t = {},
                  s = mt.filter(function (t) {
                    return t.network.toLowerCase() === e.network.type.name.toLowerCase();
                  });
                return (
                  s.forEach(function (e) {
                    t[Object(Qe["b"])(e.contract_address)] = e;
                  }),
                  t
                );
              },
            }
          ),
          watch: {
            receivedTokens: function () {
              this.getCustomTokens();
            },
            tokens: function (e) {
              this.assignTokens(e, this.search), this.getCustomTokens();
            },
            search: function (e) {
              this.assignTokens(this.tokens, e);
            },
          },
          methods: {
            iconFetch: function (e) {
              var t = this.networkTokens[Object(Qe["b"])(e.address)];
              if (t) {
                var s =
                  "" !== t.icon_png
                    ? "https://img.mewapi.io/?image=".concat(t.icon_png, "&width=50&height=50&fit=scale-down")
                    : "" !== t.icon
                    ? "https://img.mewapi.io/?image=".concat(t.icon, "&width=50&height=50&fit=scale-down")
                    : this.network.type.icon;
                return s;
              }
              return e.logo && e.logo.src && "" !== e.logo.src ? "https://img.mewapi.io/?image=".concat(e.logo.src, "&width=50&height=50&fit=scale-down") : this.network.type.icon;
            },
            iconFallback: function (e) {
              e.target.src = this.network.type.icon;
            },
            getV3Tokens: function () {
              var e = this,
                t = Ne.a.get("localTokens"),
                s = Ne.a.get("customTokens");
              t.forEach(function (t) {
                var c = { address: t.contractAddress, decimals: t.decimal, email: "", name: t.symbol, symbol: t.symbol, website: "", type: "custom" };
                Object.keys(Z).forEach(function (a) {
                  !t.network ||
                    (Z[a].name.toLowerCase() !== t.network.toLowerCase() && Z[a].name_long.toLowerCase() !== t.network.toLowerCase()) ||
                    (e.tokenError(c.address, c.symbol, "") && s[Z[a].name].push(c));
                });
              }),
                Ne.a.set("customTokens", s),
                Ne.a.remove("localTokens");
            },
            getCustomTokens: function () {
              void 0 !== Ne.a.get("localTokens") && this.getV3Tokens();
              var e = Ne.a.get("customTokens") || {};
              (this.customTokens = e.hasOwnProperty(this.network.type.name) ? e[this.network.type.name] : []),
                (this.localCustomTokens = e.hasOwnProperty(this.network.type.name) ? e[this.network.type.name] : []);
            },
            getSpecificTokenBalance: function (e) {
              var t = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function s() {
                  var c;
                  return regeneratorRuntime.wrap(function (s) {
                    while (1)
                      switch ((s.prev = s.next)) {
                        case 0:
                          c = 0;
                        case 1:
                          if (!(c < t.tokens.length)) {
                            s.next = 9;
                            break;
                          }
                          if (Object(Qe["b"])(t.tokens[c].address) !== Object(Qe["b"])(e.address)) {
                            s.next = 6;
                            break;
                          }
                          return (s.next = 5), t.getTokenBalance(e);
                        case 5:
                          t.tokens[c].balance = s.sent;
                        case 6:
                          c++, (s.next = 1);
                          break;
                        case 9:
                          t.tokens.sort(dt), t.resetTokenSelection();
                        case 11:
                        case "end":
                          return s.stop();
                      }
                  }, s);
                })
              )();
            },
            addTokenModal: function () {
              this.$refs.tokenModal.$refs.tokenModal.show();
            },
            removeToken: function (e) {
              var t = Ne.a.get("customTokens");
              this.customTokens.splice(e, 1),
                (this.localCustomTokens = this.customTokens.splice()),
                (t[this.network.type.name] = this.customTokens),
                Ne.a.set("customTokens", t),
                this.fetchTokens();
            },
            searchBySymbol: function (e) {
              try {
                var t = this.localTokens.find(function (t) {
                    return t.symbol.toLowerCase() === e.toLowerCase();
                  }),
                  s = this.customTokens.find(function (t) {
                    return t.symbol.toLowerCase() === e.toLowerCase();
                  });
                return void 0 === t && void 0 === s;
              } catch (c) {
                return H["d"].responseHandler("Search by symbol errored", H["d"].ERROR), !0;
              }
            },
            searchByAddr: function (e) {
              try {
                var t = this.localTokens.find(function (t) {
                    return ft.a.toChecksumAddress(t.address) === ft.a.toChecksumAddress(e);
                  }),
                  s = this.customTokens.find(function (t) {
                    return ft.a.toChecksumAddress(t.address) === ft.a.toChecksumAddress(e);
                  });
                return void 0 === t && void 0 === s;
              } catch (c) {
                return H["d"].responseHandler("Search by address errored", H["d"].ERROR), !0;
              }
            },
            tokenError: function (e, t, s) {
              var c = this.searchBySymbol(t),
                a = this.searchByAddr(e);
              return a || "" === s
                ? c || "" === s
                  ? a || c
                  : (this.$refs.tokenModal.$refs.tokenModal.hide(),
                    H["d"].responseHandler(
                      "A default or custom token with this symbol already exists! The token in our list may have the same symbol but a different contract address, try adding it again with a '2' after the symbol!",
                      H["d"].ERROR
                    ),
                    !1)
                : (this.$refs.tokenModal.$refs.tokenModal.hide(), H["d"].responseHandler("A default or custom token with this contract address already exists!", H["d"].ERROR), !1);
            },
            addToken: function (e, t, s) {
              var c = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function a() {
                  var r, n;
                  return regeneratorRuntime.wrap(function (a) {
                    while (1)
                      switch ((a.prev = a.next)) {
                        case 0:
                          if (!c.tokenError(e, t, "manual")) {
                            a.next = 15;
                            break;
                          }
                          return (r = { address: e, decimals: s, email: "", name: t, symbol: t, website: "", type: "custom" }), (a.next = 4), c.getTokenBalance(r);
                        case 4:
                          return (
                            (r["balance"] = a.sent),
                            (n = Ne.a.get("customTokens")),
                            (c.customTokens = c.customTokens.length > 0 ? c.customTokens : []),
                            c.customTokens.push(r),
                            (c.localCustomTokens = c.customTokens.splice()),
                            (n[c.network.type.name] = c.customTokens),
                            Ne.a.set("customTokens", n),
                            c.$refs.tokenModal.$refs.tokenModal.hide(),
                            (a.next = 14),
                            c.fetchTokens()
                          );
                        case 14:
                          H["d"].responseHandler(c.$t("interface.tokens.token-added-success"), H["d"].SUCCESS);
                        case 15:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              )();
            },
            tokenListExpend: function () {
              this.$refs.tokenTableContainer.classList.toggle("expanded"), this.$refs.expendDown.classList.toggle("hidden"), this.$refs.expendUp.classList.toggle("hidden");
            },
            assignTokens: function (e, t) {
              var s = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function c() {
                  var a;
                  return regeneratorRuntime.wrap(function (c) {
                    while (1)
                      switch ((c.prev = c.next)) {
                        case 0:
                          (a = s.customTokens.length > 0 ? s.customTokens.slice() : []),
                            "" !== t
                              ? ((s.customTokens = a
                                  .filter(function (e) {
                                    if (e.symbol.toLowerCase().includes(t.toLowerCase())) return e;
                                  })
                                  .sort(dt)),
                                (s.localTokens = s.tokens
                                  .filter(function (e) {
                                    if (e.symbol.toLowerCase().includes(t.toLowerCase())) return e;
                                  })
                                  .sort(dt)))
                              : ((s.localTokens = e), (s.customTokens = s.localCustomTokens));
                        case 2:
                        case "end":
                          return c.stop();
                      }
                  }, c);
                })
              )();
            },
          },
        },
        pt = ut,
        gt = (s("73a3"), Object(k["a"])(pt, qe, ze, !1, null, "7abae2e2", null)),
        wt = gt.exports,
        xt = function () {
          var e = this,
            t = e.$createElement,
            c = e._self._c || t;
          return c(
            "div",
            [
              c("address-qrcode-modal", { ref: "qrcode", attrs: { address: e.account.address } }),
              c(
                "div",
                { staticClass: "wrap d-flex align-items-center" },
                [
                  c("blockie", { staticClass: "blockie-image", attrs: { address: e.address, size: 8, scale: 16 } }),
                  c("div", { staticClass: "address-contents" }, [
                    c("div", { staticClass: "title" }, [e._v(e._s(e.$t("common.addr")))]),
                    c("div", { staticClass: "d-flex address" }, [
                      c("div", { staticClass: "address-begin" }, [
                        e._v(" " + e._s(null !== e.address && "" !== e.address ? e.address.substring(0, e.address.length - 4) : "") + " "),
                      ]),
                      c("div", { staticClass: "address-end" }, [
                        e._v(" " + e._s(null !== e.address && "" !== e.address ? e.address.substring(e.address.length - 4, e.address.length) : "") + " "),
                      ]),
                      c("input", { ref: "mobileCopyAddress", staticClass: "mobile-hidden-input", attrs: { autocomplete: "off" }, domProps: { value: e.address } }),
                    ]),
                  ]),
                  c("div", { staticClass: "buttons-container" }, [
                    c("button", { on: { click: e.copy } }, [c("img", { attrs: { alt: "", src: s("fd74") } })]),
                    c("button", { staticClass: "qrcode ml-2", on: { click: e.openQrcode } }, [c("img", { attrs: { alt: "", src: s("4da0") } }), e._m(0)]),
                    c("button", { staticClass: "ml-2", on: { click: e.print } }, [c("img", { attrs: { alt: "", src: s("240d") } })]),
                  ]),
                  e.hasMultipleAddr
                    ? c("div", { staticClass: "bottom-block" }, [c("button", { on: { click: e.switchAddr } }, [e._v(e._s(e.$t("interface.change-addr")))])])
                    : e._e(),
                ],
                1
              ),
            ],
            1
          );
        },
        kt = [
          function () {
            var e = this,
              t = e.$createElement,
              s = e._self._c || t;
            return s("div", { staticClass: "floating-barcode" }, [s("div", { staticClass: "barcode-image" })]);
          },
        ],
        Et = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            "div",
            { staticClass: "address-qrcode-modal" },
            [
              s(
                "b-modal",
                { ref: "addressQrcode", staticClass: "bootstrap-modal nopadding", attrs: { title: e.$t("common.addr"), "hide-footer": "", centered: "", static: "", lazy: "" } },
                [
                  s(
                    "div",
                    { staticClass: "modal-contents" },
                    [
                      s("qrcode", { attrs: { value: e.address, options: { size: 160 } } }),
                      s("textarea", {
                        directives: [{ name: "model", rawName: "v-model", value: e.address, expression: "address" }],
                        ref: "addressInput",
                        staticClass: "address",
                        attrs: { readonly: "" },
                        domProps: { value: e.address },
                        on: {
                          input: function (t) {
                            t.target.composing || (e.address = t.target.value);
                          },
                        },
                      }),
                      s("button", { on: { click: e.copyToClipboard } }, [e._v(e._s(e.$t("common.copy")))]),
                    ],
                    1
                  ),
                ]
              ),
            ],
            1
          );
        },
        yt = [],
        Mt = {
          name: "AddressQrcodeModal",
          props: { address: { type: String, default: "" } },
          data: function () {
            return {};
          },
          methods: {
            copyToClipboard: function () {
              this.$refs.addressInput.select(), document.execCommand("copy");
            },
          },
        },
        Wt = Mt,
        _t = (s("c665"), Object(k["a"])(Wt, Et, yt, !1, null, "7bbcf318", null)),
        jt = _t.exports,
        vt = {
          components: { blockie: oe["a"], "address-qrcode-modal": jt },
          props: { address: { type: String, default: "" }, print: { type: Function, default: function () {} }, switchAddr: { type: Function, default: function () {} } },
          data: function () {
            return { hasMultipleAddr: !1 };
          },
          computed: Object(h["a"])({}, Object(b["c"])("main", ["account"])),
          mounted: function () {
            null !== this.account.address &&
              (this.account.identifier !== he["f"] && this.account.identifier !== he["j"] && this.account.identifier !== he["h"] && this.account.identifier !== he["o"]
                ? (this.hasMultipleAddr = !0)
                : (this.hasMultipleAddr = !1));
          },
          methods: {
            copy: function () {
              this.$refs.mobileCopyAddress.select(), document.execCommand("copy"), H["d"].responseHandler(this.$t("common.copied"), H["d"].INFO);
            },
            openQrcode: function () {
              this.$refs.qrcode.$refs.addressQrcode.show();
            },
          },
        },
        Tt = vt,
        Ct = (s("ebc9"), Object(k["a"])(Tt, xt, kt, !1, null, "3bab9812", null)),
        At = Ct.exports,
        Nt = function () {
          var e = this,
            t = e.$createElement,
            c = e._self._c || t;
          return c(
            "div",
            [
              c("interface-balance-modal", { ref: "balance", attrs: { balance: e.balance } }),
              c("div", { staticClass: "info-block" }, [
                e._m(0),
                c("div", { staticClass: "block-content" }, [
                  c("div", { staticClass: "balance-contents" }, [
                    c("div", { staticClass: "title-block" }, [e._v(" " + e._s(e.$t("common.balance.string")) + " ")]),
                    c("div", { staticClass: "balance-text-container" }, [
                      c(
                        "div",
                        { directives: [{ name: "show", rawName: "v-show", value: void 0 !== e.balance, expression: "balance !== undefined" }], staticClass: "balance-data" },
                        [
                          c("div", { staticClass: "balance-value" }, [e._v(" " + e._s(e.balance) + " ")]),
                          c("div", { staticClass: "currency" }, [e._v(" " + e._s(e.network.type.currencyName) + " ")]),
                        ]
                      ),
                      c("i", {
                        directives: [{ name: "show", rawName: "v-show", value: void 0 === e.balance, expression: "balance === undefined" }],
                        staticClass: "fa fa-spin fa-spinner",
                      }),
                    ]),
                  ]),
                  c(
                    "div",
                    { staticClass: "icon-container" },
                    [
                      c("b-btn", { staticClass: "balance-check custom-tooltip", attrs: { id: "balanceCheck" }, on: { click: e.balanceModalOpen } }, [
                        c("img", { attrs: { alt: "", src: s("617f6") } }),
                      ]),
                      e._e(),
                      c("b-popover", { attrs: { content: e.$t("interface.check-balance.string"), target: "balanceCheck", placement: "top", triggers: "hover", title: "" } }),
                      c("b-popover", { attrs: { content: e.$t("interface.check-balance.refresh"), target: "refreshBalance", placement: "top", triggers: "hover", title: "" } }),
                    ],
                    1
                  ),
                ]),
              ]),
            ],
            1
          );
        },
        Ot = [
          function () {
            var e = this,
              t = e.$createElement,
              c = e._self._c || t;
            return c("div", { staticClass: "block-image" }, [c("img", { staticClass: "icon", attrs: { alt: "", src: s("1113") } })]);
          },
        ],
        St = {
          components: { "interface-balance-modal": ke },
          props: { balance: { type: String, default: "0" }, getBalance: { type: Function, default: function () {} } },
          data: function () {
            return { fetchingBalance: !1 };
          },
          computed: Object(h["a"])({}, Object(b["c"])("main", ["network"])),
          watch: {
            balance: function () {
              this.fetchingBalance = !1;
            },
          },
          methods: {
            balanceModalOpen: function () {
              this.$refs.balance.$refs.balance.show();
            },
            fetchBalance: function () {
              var e = this;
              (this.fetchingBalance = !0),
                setTimeout(function () {
                  e.getBalance(), (e.fetchingBalance = !1);
                }, 1e3);
            },
          },
        },
        Rt = St,
        Bt = (s("a868"), Object(k["a"])(Rt, Nt, Ot, !1, null, "22a8fb5c", null)),
        Pt = Bt.exports,
        It = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            "div",
            [
              s("interface-network-modal", { ref: "network" }),
              s("div", { staticClass: "d-flex align-items-center network" }, [
                s("div", { staticClass: "network-type" }, [s("img", { attrs: { src: e.network.type.icon, alt: "" } })]),
                s("div", { staticClass: "d-flex align-items-center flex-grow-1" }, [
                  s("div", { staticClass: "information-container" }, [
                    s("div", { staticClass: "title" }, [e._v(" " + e._s(e.$t("common.network")) + " ")]),
                    e.account.identifier !== e.identifier
                      ? s("p", { staticClass: "ellipsis" }, [e._v(" " + e._s(e.network.service + "(" + e.network.type.name + ")") + " ")])
                      : s("p", { staticClass: "ellipsis" }, [e._v(" " + e._s("Web3 Provider(" + e.network.type.name + ")") + " ")]),
                    s("p", { staticClass: "ellipsis" }, [
                      e._v(" " + e._s(e.$t("interface.network-modal.last-block")) + "# : "),
                      s("span", { directives: [{ name: "show", rawName: "v-show", value: "" !== e.parsedNetwork, expression: "parsedNetwork !== ''" }] }, [
                        e._v(" " + e._s(e.parsedNetwork)),
                      ]),
                      s("i", {
                        directives: [{ name: "show", rawName: "v-show", value: "" === e.parsedNetwork, expression: "parsedNetwork === ''" }],
                        staticClass: "fa fa-spinner fa-spin",
                      }),
                    ]),
                  ]),
                  s(
                    "div",
                    { staticClass: "icon-container ml-auto" },
                    [
                      e.account.identifier !== e.identifier
                        ? s("button", { staticClass: "change-button", attrs: { id: "networkModal" }, on: { click: e.networkModalOpen } }, [
                            e._v(" " + e._s(e.$t("interface.network-modal.button-change")) + " "),
                          ])
                        : e._e(),
                      s("b-popover", {
                        attrs: { content: e.$t("interface.network-modal.popup-open-networks"), target: "networkModal", placement: "top", triggers: "hover", title: "" },
                      }),
                    ],
                    1
                  ),
                ]),
              ]),
            ],
            1
          );
        },
        Dt = [],
        Lt = {
          components: { "interface-network-modal": De },
          props: { blockNumber: { type: Number, default: 0 } },
          data: function () {
            return { parsedNetwork: 0, identifier: he["o"] };
          },
          computed: Object(h["a"])({}, Object(b["c"])("main", ["network", "account", "web3"])),
          watch: {
            blockNumber: function (e) {
              this.parsedNetwork = parseInt(e);
            },
          },
          mounted: function () {
            this.blockNumber && void 0 !== this.blockNumber && (this.parsedNetwork = parseInt(this.blockNumber));
          },
          methods: {
            networkModalOpen: function () {
              this.account.identifier !== this.identifier && this.$refs.network.$refs.network.show();
            },
          },
        },
        Xt = Lt,
        Ht = (s("c69e"), Object(k["a"])(Xt, It, Dt, !1, null, "b43d2718", null)),
        Gt = Ht.exports,
        Ut = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            "div",
            [
              s(
                "b-modal",
                {
                  ref: "expiredNames",
                  staticClass: "bootstrap-modal nopadding max-height-1",
                  attrs: { title: "Expired ENS Names!", "hide-footer": "", centered: "", static: "", lazy: "" },
                },
                [
                  s("div", { staticClass: "ens-notification-container" }, [
                    s("h3", [
                      e._v(
                        " You have one or more ENS domains expiring soon. You will have a 90 day grace period after your expiration date to renew, otherwise they will Join thevailable to the public for purchase. "
                      ),
                    ]),
                    s("button", { staticClass: "navigate-btn", on: { click: e.navigateToEnsManager } }, [e._v(" Go to ENS Manager ")]),
                  ]),
                ]
              ),
            ],
            1
          );
        },
        Kt = [],
        Ft = {
          data: function () {
            return {};
          },
          methods: {
            navigateToEnsManager: function () {
              this.$router.push({ name: "ensMultiManager" }), this.$refs.expiredNames.hide();
            },
          },
        },
        Vt = Ft,
        $t = (s("77af"), Object(k["a"])(Vt, Ut, Kt, !1, null, "4012e8ea", null)),
        Yt = $t.exports,
        Zt = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            "div",
            { staticClass: "modal-container" },
            [
              s(
                "b-modal",
                {
                  ref: "print",
                  staticClass: "nopadding print-mod",
                  attrs: { title: e.$t("createWallet.mnemonic.print.print-title"), "hide-footer": "", centered: "", size: "lg", static: "", lazy: "" },
                },
                [
                  s("div", { staticClass: "modal-content-container" }, [
                    s("div", { ref: "printContainer", staticClass: "print-modal" }, [
                      s("div", { staticClass: "to-print" }, [s("account-content-to-print", { attrs: { address: e.address } })], 1),
                    ]),
                    s("div", { staticClass: "to-display" }, [s("account-content-to-display", { attrs: { address: e.address } })], 1),
                    s("div", { staticClass: "button-container" }, [
                      s("div", { staticClass: "print-button", on: { click: e.print } }, [e._v(" " + e._s(e.$t("popover.print")) + " ")]),
                    ]),
                  ]),
                ]
              ),
            ],
            1
          );
        },
        qt = [],
        zt = s("add5e"),
        Qt = s.n(zt),
        Jt = s("c0e9"),
        es = s.n(Jt),
        ts = function () {
          var e = this,
            t = e.$createElement,
            c = e._self._c || t;
          return c("div", { staticClass: "account-to-display" }, [
            c("div", { staticClass: "top-container" }, [
              c("div", { staticClass: "left-section" }, [
                c("div", { staticClass: "blockie-contianer" }, [
                  c("div", [c("blockie", { staticClass: "blockie", attrs: { address: e.address, width: "50px", height: "50px" } })], 1),
                  c("div", { staticClass: "text-container" }, [
                    c("h3", [e._v(e._s(e.$t("interface.account-content.header")))]),
                    c("span", [e._v(" " + e._s(e.$t("interface.account-content.subheader")) + " ")]),
                  ]),
                ]),
                c(
                  "div",
                  [
                    c("i18n", { staticClass: "left-text", attrs: { tag: "h4", path: "interface.account-content.warning" } }, [
                      c("span", { attrs: { slot: "safe" }, slot: "safe" }, [e._v(e._s(e.$t("interface.account-content.safe")))]),
                      e.wallet && !e.wallet.isPubOnly
                        ? c("span", { attrs: { slot: "extend" }, slot: "extend" }, [
                            e._v(e._s(e.$t("interface.account-content.dont-share-priv-key", { doNot: e.$t("interface.account-content.do-not") }))),
                          ])
                        : e._e(),
                    ]),
                  ],
                  1
                ),
                c("div", { staticClass: "link-container" }, [
                  c("p", [c("img", { attrs: { alt: "", height: "15px", src: s("7f1f") } }), e._v(" " + e._s(e.$t("common.support-email")) + " ")]),
                  c("p", [c("img", { attrs: { alt: "", height: "15px", src: s("8b69") } }), e._v(" " + e._s(e.$t("interface.account-content.link2")) + " ")]),
                ]),
              ]),
              c("div", { staticClass: "right-section" }, [
                c("div", { staticClass: "header-text" }, [
                  e._m(0),
                  c("span", { staticClass: "header-line" }),
                  c("span", [e._v(" " + e._s(e.$t("interface.account-content.paper")) + " ")]),
                ]),
                c(
                  "div",
                  { staticClass: "qr-code-container" },
                  [
                    c("qrcode", { attrs: { value: e.address, options: { size: 100 } } }),
                    c("div", { staticClass: "text-container" }, [
                      c("h4", { staticClass: "uppercase" }, [e._v(e._s(e.$t("common.my-addr")))]),
                      c("span", [e._v(" " + e._s(e.address) + " ")]),
                    ]),
                  ],
                  1
                ),
              ]),
              c("img", { staticClass: "floating-img", attrs: { alt: "", src: s("dc0b"), width: "100%" } }),
              c("img", { staticClass: "floating-spaceman", attrs: { alt: "", src: s("beda"), width: "100%" } }),
            ]),
            c("div", { staticClass: "between" }, [
              c("div", { staticClass: "text" }, [c("img", { attrs: { alt: "", height: "15px", src: s("c817") } }), c("p", [e._v(e._s(e.$t("common.print-modal.cut")))])]),
              c("div", { staticClass: "dash" }),
            ]),
            c("div", { staticClass: "bottom-container" }, [
              c("div", { staticClass: "header-container" }, [
                c("div", { staticClass: "blockie-image" }, [c("blockie", { attrs: { address: e.address, width: "55px", height: "55px" } })], 1),
                c("div", { staticClass: "header-content" }, [
                  c("h3", { staticClass: "uppercase" }, [e._v(e._s(e.$t("common.my-addr")))]),
                  c("p", [e._v(e._s(e.$t("interface.account-content.subheader")))]),
                ]),
              ]),
              c(
                "div",
                { staticClass: "body-container" },
                [
                  c("i18n", { attrs: { tag: "h3", path: "interface.account-content.warning" } }, [
                    c("span", { attrs: { slot: "safe" }, slot: "safe" }, [e._v(e._s(e.$t("interface.account-content.safe")))]),
                    e.wallet && !e.wallet.isPubOnly
                      ? c("span", { attrs: { slot: "extend" }, slot: "extend" }, [
                          e._v(e._s(e.$t("interface.account-content.dont-share-priv-key", { doNot: e.$t("interface.account-content.do-not") }))),
                        ])
                      : e._e(),
                  ]),
                ],
                1
              ),
              c("div", { staticClass: "my-address-container" }, [
                c("div", { staticClass: "text-container" }, [c("h3", { staticClass: "uppercase" }, [e._v(e._s(e.$t("common.my-addr")))]), c("p", [e._v(e._s(e.address))])]),
                c("div", { staticClass: "my-address-qrcode" }, [c("qrcode", { attrs: { value: e.address, options: { size: 120 } } })], 1),
              ]),
              e.wallet && !e.wallet.isPubOnly
                ? c(
                    "div",
                    { staticClass: "my-priv-container" },
                    [
                      c("div", { staticClass: "text-container" }, [
                        c("h3", [e._v(e._s(e.$t("interface.account-content.my-priv")))]),
                        c("p", [e._v(e._s(e.wallet.getPrivateKeyString()))]),
                      ]),
                      c("qrcode", { attrs: { value: e.wallet.getPrivateKeyString(), options: { size: 120 } } }),
                    ],
                    1
                  )
                : e._e(),
            ]),
            c("div", { staticClass: "footer-container" }, [
              c("div", { staticClass: "link-container" }, [
                c("p", [c("img", { attrs: { alt: "", height: "17px", src: s("7f1f") } }), e._v(" " + e._s(e.$t("common.support-email")) + " ")]),
                c("p", [c("img", { attrs: { alt: "", height: "15px", src: s("9294") } }), e._v(" " + e._s(e.$t("interface.account-content.link2")) + " ")]),
              ]),
              c("div", { staticClass: "logo-container" }, [
                c("img", { attrs: { src: s("a2e7")("./short-hand-logo-" + e.buildType + ".png"), height: "25px", alt: "" } }),
                c("p", { staticClass: "border-line" }),
                c("p", [e._v(e._s(e.$t("interface.account-content.paper")))]),
              ]),
            ]),
          ]);
        },
        ss = [
          function () {
            var e = this,
              t = e.$createElement,
              c = e._self._c || t;
            return c("b", [c("img", { attrs: { alt: "", src: s("b3a1"), height: "30px" } })]);
          },
        ],
        cs = {
          components: { blockie: oe["a"] },
          props: { address: { type: String, default: "" } },
          data: function () {
            return { buildType: "web" };
          },
          computed: Object(h["a"])({}, Object(b["c"])("main", ["wallet"])),
        },
        as = cs,
        rs = (s("5fde4"), Object(k["a"])(as, ts, ss, !1, null, "63cef232", null)),
        ns = rs.exports,
        os = function () {
          var e = this,
            t = e.$createElement,
            c = e._self._c || t;
          return c("div", { staticClass: "account-to-print" }, [
            c("div", { staticClass: "top-container" }, [
              c("div", { staticClass: "left-section" }, [
                c("div", { staticClass: "blockie-contianer" }, [
                  c("div", [c("blockie", { staticClass: "blockie", attrs: { address: e.address, width: "50px", height: "50px" } })], 1),
                  c("div", { staticClass: "text-container" }, [
                    c("h3", [e._v(e._s(e.$t("interface.account-content.header")))]),
                    c("span", [e._v(" " + e._s(e.$t("interface.account-content.subheader")) + " ")]),
                  ]),
                ]),
                c(
                  "div",
                  [
                    c("i18n", { staticClass: "left-text", attrs: { tag: "h4", path: "interface.account-content.warning" } }, [
                      c("span", { attrs: { slot: "safe" }, slot: "safe" }, [e._v(e._s(e.$t("interface.account-content.safe")))]),
                      e.wallet && !e.wallet.isPubOnly
                        ? c("span", { attrs: { slot: "extend" }, slot: "extend" }, [
                            e._v(e._s(e.$t("interface.account-content.dont-share-priv-key", { doNot: e.$t("interface.account-content.do-not") }))),
                          ])
                        : e._e(),
                    ]),
                  ],
                  1
                ),
                c("div", { staticClass: "link-container" }, [
                  c("p", [c("img", { attrs: { alt: e.$t("common.support.string"), height: "15px", src: s("7f1f") } }), e._v(" " + e._s(e.$t("common.support-email")) + " ")]),
                  c("p", [c("img", { attrs: { height: "15px", src: s("8b69"), alt: "" } }), e._v(" " + e._s(e.$t("interface.account-content.link2")) + " ")]),
                ]),
              ]),
              c("div", { staticClass: "right-section" }, [
                c("div", { staticClass: "header-text" }, [
                  c("b", [c("img", { attrs: { src: s("b3a1"), height: "30px", alt: "" } }), e._v(" " + e._s(e.$t("common.mew")) + " ")]),
                  c("span", { staticClass: "header-line" }),
                  c("span", [e._v(" " + e._s(e.$t("interface.account-content.paper")) + " ")]),
                ]),
                c(
                  "div",
                  { staticClass: "qr-code-container" },
                  [
                    c("qrcode", { attrs: { value: e.address, options: { size: 100 } } }),
                    c("div", { staticClass: "text-container" }, [
                      c("h4", { staticClass: "uppercase" }, [e._v(e._s(e.$t("common.my-addr")))]),
                      c("span", [e._v(" " + e._s(e.address) + " ")]),
                    ]),
                  ],
                  1
                ),
              ]),
              c("img", { staticClass: "floating-img", attrs: { src: s("dc0b"), width: "100%", alt: "" } }),
              c("img", { staticClass: "floating-spaceman", attrs: { alt: e.$t("common.spaceman"), src: s("beda"), width: "100%" } }),
            ]),
            c("div", { staticClass: "between" }, [
              c("div", { staticClass: "text" }, [c("img", { attrs: { height: "15px", src: s("c817"), alt: "" } }), e._v(" " + e._s(e.$t("common.print-modal.cut")) + " ")]),
              c("div", { staticClass: "dash" }),
            ]),
            c("div", { staticClass: "bottom-container" }, [
              c(
                "div",
                { staticClass: "header-container" },
                [
                  c("blockie", { attrs: { address: e.address, width: "55px", height: "55px" } }),
                  c("div", { staticClass: "header-content" }, [
                    c("h3", { staticClass: "uppercase" }, [e._v(e._s(e.$t("common.my-addr")))]),
                    c("p", [e._v(e._s(e.$t("interface.account-content.subheader")))]),
                  ]),
                ],
                1
              ),
              c(
                "div",
                { staticClass: "body-container" },
                [
                  c("i18n", { attrs: { tag: "h3", path: "interface.account-content.warning" } }, [
                    c("span", { attrs: { slot: "safe" }, slot: "safe" }, [e._v(e._s(e.$t("interface.account-content.safe")))]),
                    e.wallet && !e.wallet.isPubOnly
                      ? c("span", { attrs: { slot: "extend" }, slot: "extend" }, [
                          e._v(e._s(e.$t("interface.account-content.dont-share-priv-key", { doNot: e.$t("interface.account-content.do-not") }))),
                        ])
                      : e._e(),
                  ]),
                ],
                1
              ),
              c("div", { staticClass: "my-address-container" }, [
                c("div", { staticClass: "text-container" }, [c("h3", { staticClass: "uppercase" }, [e._v(e._s(e.$t("common.my-addr")))]), c("p", [e._v(e._s(e.address))])]),
                c("div", { staticClass: "my-address-qrcode" }, [c("qrcode", { attrs: { value: e.address, options: { size: 120 } } })], 1),
              ]),
              e.wallet && !e.wallet.isPubOnly
                ? c(
                    "div",
                    { staticClass: "my-priv-container" },
                    [
                      c("div", { staticClass: "text-container" }, [
                        c("h3", [e._v(e._s(e.$t("interface.account-content.my-priv")))]),
                        c("p", [e._v(e._s(e.wallet.getPrivateKeyString()))]),
                      ]),
                      c("qrcode", { attrs: { value: e.wallet.getPrivateKeyString(), options: { size: 120 } } }),
                    ],
                    1
                  )
                : e._e(),
            ]),
            c("div", { staticClass: "footer-container" }, [
              c("div", { staticClass: "link-container" }, [
                c("p", [c("img", { attrs: { alt: e.$t("common.support.string"), height: "17px", src: s("7f1f") } }), e._v(" " + e._s(e.$t("common.support-email")) + " ")]),
                c("p", [c("img", { attrs: { height: "15px", src: s("9294"), alt: "" } }), e._v(" " + e._s(e.$t("interface.account-content.link2")) + " ")]),
              ]),
              c("div", { staticClass: "logo-container" }, [
                c("img", { attrs: { src: s("a2e7")("./short-hand-logo-" + e.buildType + ".png"), height: "25px", alt: "" } }),
                c("p", { staticClass: "border-line" }),
                c("p", [e._v(e._s(e.$t("interface.account-content.paper")))]),
              ]),
            ]),
          ]);
        },
        hs = [],
        bs = {
          components: { blockie: oe["a"] },
          props: { address: { type: String, default: "" } },
          data: function () {
            return { buildType: "web" };
          },
          computed: Object(h["a"])({}, Object(b["c"])("main", ["wallet"])),
        },
        is = bs,
        ds = (s("c174"), Object(k["a"])(is, os, hs, !1, null, "f58dc24a", null)),
        ls = ds.exports,
        fs = {
          components: { "account-content-to-display": ns, "account-content-to-print": ls },
          props: { address: { type: String, default: "" } },
          data: function () {
            return {};
          },
          methods: {
            print: function () {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function t() {
                  var s, c;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (s = e.$refs.printContainer),
                              (t.next = 4),
                              es()(s, { async: !0, logging: !1 }).then(function (e) {
                                return e;
                              })
                            );
                          case 4:
                            (c = t.sent),
                              c && "" !== c.toDataURL
                                ? Qt()({ printable: c.toDataURL("image/png"), type: "image" }).onError(function () {
                                    H["d"].responseHandler(e.$t("errorsGlobal.print-support-error"), H["d"].ERROR);
                                  })
                                : H["d"].responseHandler(e.$t("errorsGlobal.print-support-error"), H["d"].ERROR),
                              (t.next = 11);
                            break;
                          case 8:
                            (t.prev = 8), (t.t0 = t["catch"](0)), H["d"].responseHandler(t.t0, H["d"].ERROR);
                          case 11:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 8]]
                  );
                })
              )();
            },
          },
        },
        ms = fs,
        us = (s("ef3e"), Object(k["a"])(ms, Zt, qt, !1, null, "1771ee5f", null)),
        ps = us.exports,
        gs = s("dce7"),
        ws = s("3578"),
        xs = s.n(ws),
        ks = s("2e13"),
        Es = "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
        ys = "0x78e21d038fcbb6d56f825dc1e8d8acd965744adb",
        Ms = {
          name: "Interface",
          components: {
            "bcvault-address-modal": A["a"],
            "interface-side-menu": Ze,
            "interface-address": le,
            "interface-balance": We,
            "interface-network": Ge,
            "interface-tokens": wt,
            "wallet-password-modal": v["a"],
            "print-modal": ps,
            "network-and-address-modal": C["a"],
            "hardware-password-modal": P,
            "mnemonic-modal": V["a"],
            "mnemonic-password-modal": F,
            "enter-pin-number-modal": T["a"],
            "mobile-interface-address": At,
            "mobile-interface-balance": Pt,
            "mobile-interface-network": Gt,
            "address-qrcode-modal": jt,
            "ledger-app-modal": ae,
            "token-overview": j,
            "expired-names-modal": Yt,
          },
          data: function () {
            return {
              balance: "0",
              blockNumber: 0,
              tokens: [],
              receivedTokens: !1,
              tokensWithBalance: [],
              pollBlock: function () {},
              pollNetwork: function () {},
              pollddress: function () {},
              highestGas: "0",
              alert: { show: !1, msg: "" },
              hws: { ledger: X["e"], trezor: X["h"], bitbox: X["c"], secalot: X["g"] },
              hwInstance: {},
              walletConstructor: function () {},
              hardwareBrand: "",
              phrase: "",
              nonce: "0",
              value: "0",
              data: "",
              to: "",
              gaslimit: "21000",
              gas: 0,
              tokensymbol: "",
              prefilled: !1,
              bcVaultWallets: [],
            };
          },
          computed: Object(h["a"])(
            {
              isSidemenuOpen: function () {
                return this.sidemenuOpen;
              },
              address: function () {
                return null !== this.wallet ? Object(Qe["b"])(this.account.address) : null;
              },
            },
            Object(b["c"])("main", ["network", "account", "online", "web3", "Networks", "sidemenuOpen", "wallet", "linkQuery"])
          ),
          watch: {
            web3: function () {
              this.setupOnlineEnvironment();
            },
            address: function (e) {
              e && this.setupOnlineEnvironment();
            },
          },
          mounted: function () {
            this.setupOnlineEnvironment();
          },
          destroyed: function () {
            this.clearIntervals();
          },
          methods: Object(h["a"])(
            Object(h["a"])(
              {},
              Object(b["b"])("main", ["switchNetwork", "setWeb3Instance", "saveQueryVal", "updateBlockNumber", "setAccountBalance", "setENS", "decryptWallet", "toggleSideMenu"])
            ),
            {},
            {
              checkPrefilled: function () {
                var e = this,
                  t = Object.keys(e.linkQuery).length;
                if (t > 0) {
                  e.prefilled = !0;
                  var s = e.linkQuery,
                    c = s.value,
                    a = s.data,
                    r = s.to,
                    n = s.gaslimit,
                    o = s.gas,
                    h = s.tokensymbol,
                    b = s.network;
                  if (
                    ((e.value = c && new m["BigNumber"](c).gt(0) ? new m["BigNumber"](c).toFixed() : "0"),
                    (e.data = a && ft.a.isHexStrict(a) ? a : ""),
                    (e.to = r && Object(Qe["a"])(r) ? r : ""),
                    (e.gaslimit = n && new m["BigNumber"](n).gt(0) ? n : "21000"),
                    (e.gas = o && new m["BigNumber"](o).gt(0) ? new m["BigNumber"](o) : 0),
                    (e.tokensymbol = h || ""),
                    b)
                  ) {
                    var i = e.Networks[b.toUpperCase()];
                    i &&
                      e.switchNetwork(i[0]).then(function () {
                        e.setWeb3Instance();
                      });
                  }
                  e.saveQueryVal({});
                }
              },
              clearPrefilled: function () {
                (this.value = "0"), (this.data = ""), (this.to = ""), (this.gaslimit = "21000"), (this.gas = 0), (this.tokensymbol = ""), (this.prefilled = !1);
              },
              openAddressQrcode: function () {
                this.$refs.addressQrcodeModal.$refs.addressQrcode.show();
              },
              mnemonicphrasePasswordModalOpen: function (e) {
                (this.phrase = e), this.$refs.mnemonicPhraseModal.$refs.mnemonicPhrase.hide(), this.$refs.mnemonicPhrasePassword.$refs.password.show();
              },
              toggleNetworkAddrModal: function (e) {
                this.$refs.hardwareModal.$refs.password.hide(),
                  this.$refs.mnemonicPhrasePassword.$refs.password.hide(),
                  (this.hwInstance = e),
                  this.$refs.networkAddress.$refs.networkAndAddress.show();
              },
              togglePasswordModal: function (e, t) {
                (this.walletConstructor = e), (this.hardwareBrand = t), this.$refs.hardwareModal.$refs.password.show();
              },
              ledgerAppModalOpen: function () {
                this.$refs.ledgerAppModal.$refs.ledgerApp.show();
              },
              switchAddress: function () {
                var e = this;
                switch (this.account.identifier) {
                  case he["g"]:
                    this.ledgerAppModalOpen();
                    break;
                  case he["l"]:
                    Object(X["h"])()
                      .then(function (t) {
                        e.toggleNetworkAddrModal(t);
                      })
                      .catch(X["h"].errorHandler);
                    break;
                  case he["b"]:
                    this.togglePasswordModal(X["c"], "BitBox");
                    break;
                  case he["c"]:
                    var t;
                    Object(X["b"])()
                      .then(function (s) {
                        (t = s),
                          e.$emit("bitbox02Open", t),
                          t
                            .init("")
                            .then(function () {
                              e.toggleNetworkAddrModal(t);
                            })
                            .catch(function (e) {
                              X["b"].errorHandler(e);
                            });
                      })
                      .catch(function (e) {
                        X["b"].errorHandler(e);
                      });
                    break;
                  case he["k"]:
                    this.togglePasswordModal(X["g"], "Secalot");
                    break;
                  case he["i"]:
                    this.$refs.mnemonicPhraseModal.$refs.mnemonicPhrase.show();
                    break;
                  case he["e"]:
                    Object(X["d"])(!1, this.$eventHub)
                      .then(function (t) {
                        e.toggleNetworkAddrModal(t);
                      })
                      .catch(X["d"].errorHandler);
                    break;
                  case he["a"]:
                    var s = Object(X["a"])();
                    s.init()
                      .then(function (t) {
                        t.length > 1 ? ((e.bcVaultWallets = t), e.$refs.bcvault.$refs.bcvaultAddress.show()) : X["a"].erroHandler({ jsError: "mew1" });
                      })
                      .catch(function (e) {
                        X["a"].errorHandler(e);
                      });
                    break;
                  default:
                    H["d"].responseHandler(new Error("Wallet type ".concat(this.account.identifier, " can't switch addresses")), !1);
                }
              },
              bcVaultCb: function (e) {
                var t = this,
                  s = Object(X["a"])(),
                  c = s.getAccount(e);
                this.decryptWallet([c]).then(function () {
                  t.$refs.bcvault.$refs.bcvaultAddress.hide();
                });
              },
              print: function () {
                this.$refs.printModal.$refs.print.show();
              },
              startToggleSideMenu: function () {
                this.toggleSideMenu();
              },
              fetchNames: function () {
                var e = this,
                  t = fetch("https://nft2.mewapi.io/tokens?owner=".concat(this.account.address, "&chain=mainnet"))
                    .then(function (e) {
                      return e.json();
                    })
                    .catch(function () {
                      H["d"].responseHandler("Something went wrong!", H["d"].ERROR);
                    });
                t.then(function (t) {
                  e.setExpiry(t);
                });
              },
              setExpiry: function (e) {
                var t = this;
                return Object(o["a"])(
                  regeneratorRuntime.mark(function s() {
                    var c, a, r, n;
                    return regeneratorRuntime.wrap(function (s) {
                      while (1)
                        switch ((s.prev = s.next)) {
                          case 0:
                            (c = e && e.hasOwnProperty(Es) ? e[Es].tokens : []),
                              c.length > 0 &&
                                ((a = c.map(function (e) {
                                  return e.id;
                                })),
                                (r = new t.web3.eth.Contract(ks["a"], ys)),
                                (n = r.methods
                                  .getExpirationDates(Es, a)
                                  .call()
                                  .then(function (e) {
                                    return e;
                                  })
                                  .catch(function () {
                                    H["d"].responseHandler("Something went wrong!", H["d"].ERROR);
                                  })),
                                n.then(function (e) {
                                  if (e) {
                                    e.forEach(function (e, s) {
                                      var a = 1e3 * e,
                                        r = a < new Date().getTime(),
                                        n = new Date(a);
                                      (c[s].expired = r),
                                        (c[s].expiration = "".concat(n.toLocaleDateString(), " ").concat(n.toLocaleTimeString())),
                                        (c["registrant"] = t.account.address);
                                    });
                                    var s = c.find(function (e) {
                                      if (e.expired) return e;
                                    });
                                    s && t.notifyExpiredNames();
                                  }
                                }));
                          case 2:
                          case "end":
                            return s.stop();
                        }
                    }, s);
                  })
                )();
              },
              notifyExpiredNames: function () {
                this.$refs.expiredNames.$refs.expiredNames.show();
              },
              fetchTokens: function () {
                var e = this;
                return Object(o["a"])(
                  regeneratorRuntime.mark(function t() {
                    var s, c, a;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (((e.receivedTokens = !1), (s = []), (1 !== e.network.type.chainID && 3 !== e.network.type.chainID) || e.network.url.includes("infura"))) {
                                t.next = 18;
                                break;
                              }
                              return (c = new xs.a(e.web3.currentProvider)), (t.prev = 4), (t.next = 7), c.getBalance(e.account.address, !0, !0, !0, { gas: "0x11e1a300" });
                            case 7:
                              (s = t.sent),
                                (s = s.map(function (e) {
                                  return (e.address = e.addr), delete e.addr, e;
                                })),
                                (a = e.network.type.tokens.filter(function (t) {
                                  var c = s.find(function (s) {
                                    return e.web3.utils.toChecksumAddress(s.address) === e.web3.utils.toChecksumAddress(t.address);
                                  });
                                  if (!c) return t;
                                })),
                                (s = s.concat(a).map(function (e) {
                                  return e.hasOwnProperty("balance") || (e.balance = 0), e;
                                })),
                                (t.next = 16);
                              break;
                            case 13:
                              (t.prev = 13),
                                (t.t0 = t["catch"](4)),
                                (s = e.network.type.tokens.map(function (e) {
                                  return (e.balance = "Load"), e;
                                }));
                            case 16:
                              t.next = 19;
                              break;
                            case 18:
                              s = e.network.type.tokens.map(function (e) {
                                return (e.balance = "Load"), e;
                              });
                            case 19:
                              return (e.receivedTokens = !0), t.abrupt("return", s);
                            case 21:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[4, 13]]
                    );
                  })
                )();
              },
              setNonce: function () {
                var e = this;
                return Object(o["a"])(
                  regeneratorRuntime.mark(function t() {
                    var s;
                    return regeneratorRuntime.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              Ne.a.set(e.web3.utils.sha3(e.account.address), { nonce: "0x00", timestamp: 0 }),
                              (t.next = 3),
                              e.web3.eth.getTransactionCount(e.account.address).catch(function (e) {
                                H["d"].responseHandler(e, H["d"].ERROR);
                              })
                            );
                          case 3:
                            (s = t.sent), (e.nonce = new m["BigNumber"](s).toString());
                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              getTokenBalance: function (e) {
                var t = this;
                return Object(o["a"])(
                  regeneratorRuntime.mark(function s() {
                    var c, a, r, n, o;
                    return regeneratorRuntime.wrap(
                      function (s) {
                        while (1)
                          switch ((s.prev = s.next)) {
                            case 0:
                              return (
                                (s.prev = 0),
                                (c = t.web3),
                                (a = [
                                  {
                                    name: "balanceOf",
                                    type: "function",
                                    constant: !0,
                                    inputs: [{ name: "address", type: "address" }],
                                    outputs: [{ name: "out", type: "uint256" }],
                                  },
                                ]),
                                (r = new c.eth.Contract(a)),
                                (n = r.methods.balanceOf(t.account.address).encodeABI()),
                                (s.next = 7),
                                c.eth
                                  .call({ to: e.address, data: n })
                                  .then(function (t) {
                                    var s;
                                    if (0 === Number(t) || "0x" === t) s = 0;
                                    else {
                                      var c = new m["BigNumber"](10).pow(e.decimals);
                                      s = new m["BigNumber"](t).div(c).toString();
                                    }
                                    return s;
                                  })
                                  .catch(function (e) {
                                    H["d"].responseHandler(e, !1);
                                  })
                              );
                            case 7:
                              return (o = s.sent), s.abrupt("return", o);
                            case 11:
                              (s.prev = 11), (s.t0 = s["catch"](0)), H["d"].responseHandler(s.t0, H["d"].ERROR);
                            case 14:
                            case "end":
                              return s.stop();
                          }
                      },
                      s,
                      null,
                      [[0, 11]]
                    );
                  })
                )();
              },
              setCustomTokenStore: function () {
                var e = Ne.a.get("customTokens");
                Object.keys(Z).forEach(function (t) {
                  void 0 === e[Z[t].name] && (e[Z[t].name] = []);
                }),
                  Ne.a.set("customTokens", e);
              },
              setTokens: function () {
                var e = this;
                return Object(o["a"])(
                  regeneratorRuntime.mark(function t() {
                    var s;
                    return regeneratorRuntime.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (e.tokens = []), (t.next = 3), e.fetchTokens();
                          case 3:
                            (s = t.sent),
                              (s = s
                                .sort(function (e, t) {
                                  return e.name.toUpperCase() < t.name.toUpperCase() ? -1 : e.name.toUpperCase() > t.name.toUpperCase() ? 1 : 0;
                                })
                                .map(function (e) {
                                  var t = new m["BigNumber"](e.balance),
                                    s = t.isNaN() ? e.balance : t.div(new m["BigNumber"](10).pow(e.decimals)).toFixed(),
                                    c = { address: e.address, balance: s, decimals: e.decimals, email: e.email, name: e.name, symbol: e.symbol, website: e.website };
                                  return e.hasOwnProperty("logo") && (c["logo"] = e.logo), c;
                                })),
                              (e.tokens = s.sort(dt)),
                              e.setTokensWithBalance();
                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              setTokensWithBalance: function () {
                var e = this,
                  t = Ne.a.get("customTokens");
                void 0 !== t && void 0 !== t[this.network.type.name] && t[this.network.type.name].length > 0
                  ? new Promise(function (s) {
                      var c = t[e.network.type.name].map(
                        (function () {
                          var t = Object(o["a"])(
                            regeneratorRuntime.mark(function t(s) {
                              return regeneratorRuntime.wrap(function (t) {
                                while (1)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (t.next = 2), e.getTokenBalance(s);
                                    case 2:
                                      return (s.balance = t.sent), t.abrupt("return", s);
                                    case 4:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })()
                      );
                      Promise.all(c).then(function (c) {
                        (t[e.network.type.name] = c), Ne.a.set("customTokens", t), s(c);
                      });
                    })
                      .then(function (t) {
                        var s = e.tokens
                          .filter(function (e) {
                            return e.balance > 0;
                          })
                          .concat(
                            t.filter(function (e) {
                              return e.balance > 0;
                            })
                          );
                        (e.tokensWithBalance = s), (e.receivedTokens = !0);
                      })
                      .catch(function (e) {
                        H["d"].responseHandler(e, H["d"].ERROR);
                      })
                  : ((this.receivedTokens = !0),
                    (this.tokensWithBalance = this.tokens.filter(function (e) {
                      return e.balance > 0;
                    })));
              },
              getBlock: function () {
                var e = this;
                this.web3.eth
                  .getBlockNumber()
                  .then(function (t) {
                    (e.blockNumber = t), e.updateBlockNumber(t);
                  })
                  .catch(function (e) {
                    H["d"].responseHandler(e, H["d"].ERROR);
                  });
              },
              getBalance: function () {
                var e = this,
                  t = this.web3;
                this.address &&
                  t.eth
                    .getBalance(this.address.toLowerCase())
                    .then(function (s) {
                      (e.balance = t.utils.fromWei(s, "ether")), e.setAccountBalance(s);
                    })
                    .catch(function (e) {
                      H["d"].responseHandler(e, H["d"].ERROR);
                    });
              },
              checkWeb3WalletAddrChange: function () {
                var e = this,
                  t = this.web3;
                try {
                  window.ethereum.on("accountsChanged", function (s) {
                    if (s.length > 1) {
                      var c = new gs["b"](s[0]);
                      e.decryptWallet([c, t]);
                    }
                  });
                } catch (s) {
                  H["d"].responseHandler(s, H["d"].ERROR);
                }
              },
              checkAndSetNetwork: function (e) {
                var t = this;
                this.network.type.chainID.toString() !== "".concat(e) &&
                  Object.keys(Z).some(function (s) {
                    if (Z[s].chainID.toString() === "".concat(e) && t.Networks[s]) return t.switchNetwork(t.Networks[s][0]), !0;
                  });
              },
              matchWeb3WalletNetwork: function () {
                var e = this;
                this.web3.eth.net.getId().then(function (t) {
                  e.checkAndSetNetwork(t);
                }),
                  window.ethereum.on("networkChanged", function (t) {
                    e.setupOnlineEnvironment(), e.checkAndSetNetwork(t);
                  });
              },
              setupOnlineEnvironment: ft.a._.debounce(function () {
                var e = this;
                this.clearIntervals(),
                  void 0 === Ne.a.get("customTokens") ? (Ne.a.set("customTokens", {}), this.setCustomTokenStore()) : this.setCustomTokenStore(),
                  this.online &&
                    null !== this.account.address &&
                    (this.account.identifier === he["o"] &&
                      (window.ethereum.isMetaMask || window.ethereum.isMew
                        ? (this.checkWeb3WalletAddrChange(), this.matchWeb3WalletNetwork())
                        : (this.web3WalletPollNetwork(), this.web3WalletPollAddress())),
                    this.callSetENS(),
                    this.network.type.name === Z["ETH"].name && this.fetchNames(),
                    this.getBlock(),
                    this.getBalance(),
                    this.setTokens(),
                    this.setNonce(),
                    this.getHighestGas(),
                    this.getBlockUpdater().then(function (t) {
                      e.pollBlock = t;
                    }));
              }),
              getBlockUpdater: function () {
                var e = this;
                return Object(o["a"])(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return t.abrupt(
                              "return",
                              new Promise(function (t) {
                                var s = e.web3.eth
                                  .subscribe("newBlockHeaders", function (c) {
                                    c && (s = setInterval(e.getBlock, 14e3)), t(s);
                                  })
                                  .on("data", function (t) {
                                    e.blockNumber = t.number;
                                  });
                              })
                            );
                          case 1:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              getHighestGas: function () {
                var e = this;
                this.web3.eth
                  .getGasPrice()
                  .then(function (t) {
                    e.highestGas = new m["BigNumber"](e.web3.utils.fromWei(t, "gwei")).toString();
                  })
                  .catch(function (e) {
                    H["d"].responseHandler(e, H["d"].ERROR);
                  });
              },
              callSetENS: function () {
                if (this.network.type.ens) {
                  var e = new d.a(this.web3.currentProvider, this.network.type.ens.registry);
                  this.setENS(e);
                } else this.setENS(null);
              },
              clearIntervals: function () {
                this.pollBlock.unsubscribe ? this.pollBlock.unsubscribe() : clearInterval(this.pollBlock), clearInterval(this.pollNetwork), clearInterval(this.pollAddress);
              },
              web3WalletPollNetwork: function () {
                var e = this;
                window.web3.eth || H["d"].responseHandler(new Error(this.$t("interface.web3-not-found")), H["d"].ERROR),
                  window.web3.eth.net &&
                    "function" === typeof window.web3.eth.net.getId &&
                    (this.pollNetwork = setInterval(function () {
                      window.web3.eth.net
                        .getId()
                        .then(function (t) {
                          e.network.type.chainID.toString() !== t &&
                            Object.keys(Z).some(function (s) {
                              if (Z[s].chainID === t && e.Networks[s]) return e.switchNetwork(e.Networks[s]), clearInterval(e.pollNetwork), !0;
                            });
                        })
                        .catch(function (e) {
                          H["d"].responseHandler(e, !1);
                        });
                    }, 500));
              },
              web3WalletPollAddress: function () {
                var e = this;
                this.pollAddress = setInterval(function () {
                  window.web3.eth || (H["d"].responseHandler(new Error(e.$t("interface.web3-not-found")), H["d"].ERROR), clearInterval(e.pollAddress)),
                    window.web3.eth.getAccounts(function (t, s) {
                      t && (H["d"].responseHandler(t, !1), clearInterval(e.pollAddress)),
                        s.length || (H["d"].responseHandler(new Error("Please make sure that your Web3 Wallet is unlocked"), H["d"].ERROR), clearInterval(e.pollAddress));
                      var c = s[0];
                      if (null !== e.account.address && c.toLowerCase() !== e.account.address.toLowerCase()) {
                        var a = new gs["b"](c);
                        e.decryptWallet([a, window.web3.currentProvider]), clearInterval(e.pollAddress);
                      }
                    });
                }, 500);
              },
            }
          ),
        },
        Ws = Ms,
        _s = (s("4664"), Object(k["a"])(Ws, r, n, !1, null, "71ecbe35", null)),
        js = _s.exports;
    },
    fd74: function (e, t, s) {
      e.exports = s.p + "img/copy.ec4723ca.svg";
    },
  },
]);
//# sourceMappingURL=../sourcemaps/js/chunk-4bad9fd4.88ba6649.js.map