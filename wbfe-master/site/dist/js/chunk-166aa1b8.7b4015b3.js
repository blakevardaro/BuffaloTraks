(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-166aa1b8"],{"8c6d":function(t,e,a){"use strict";var s=a("e7ef"),n=a.n(s);n.a},"90e9":function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return p}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"already-owned-container"},[a("h3",[t._v(t._s(t.$t("ens.already-owned",{domain:t.fullDomainName})))]),t.hasAvatar?a("div",{staticClass:"container-with-avatar content-container"},[a("div",{staticClass:"img-info-container"},[a("div",{staticClass:"profile-img"},[a("img",{attrs:{src:t.convertedAvatar}})]),a("div",{staticClass:"profile-info"},[t.txtRecordsWithValue["url"]?a("p",[t._v(" Website: "),a("a",{attrs:{href:"mailto:"+t.txtRecordsWithValue["url"],target:"_blank"}},[t._v(" "+t._s(t.txtRecordsWithValue["url"])+" ")])]):t._e(),t.txtRecordsWithValue["email"]?a("p",[t._v(" Email: "),a("a",{attrs:{href:"mailto:"+t.txtRecordsWithValue["email"],target:"_blank"}},[t._v(" "+t._s(t.txtRecordsWithValue["email"])+" ")])]):t._e(),t.txtRecordsWithValue["vnd.twitter"]?a("p",[t._v(" Twitter: "),a("a",{attrs:{href:"https://twitter.com/"+t.txtRecordsWithValue["vnd.twitter"],target:"_blank"}},[t._v(" "+t._s(t.txtRecordsWithValue["vnd.twitter"])+" ")])]):t._e(),t.txtRecordsWithValue["vnd.github"]?a("p",[t._v(" Github: "),a("a",{attrs:{href:"https://github.com/"+t.txtRecordsWithValue["vnd.github"],target:"_blank"}},[t._v(" "+t._s(t.txtRecordsWithValue["vnd.github"])+" ")])]):t._e(),t.txtRecordsWithValue["vnd.peepeth"]?a("p",[t._v(" Peepeth: "),a("a",{attrs:{href:"https://peepeth.com/"+t.txtRecordsWithValue["vnd.peepeth"],target:"_blank"}},[t._v(" "+t._s(t.txtRecordsWithValue["vnd.peepeth"])+" ")])]):t._e()])])]):t._e(),a("div",{staticClass:"content-container"},[a("p",{staticClass:"label"},[t._v(t._s(t.$t("ens.label-hash"))+"("+t._s(t.hostName)+"):")]),a("p",{staticClass:"content"},[t._v(t._s(t.labelHash))])]),a("div",{staticClass:"content-container"},[a("p",{staticClass:"label"},[t._v(t._s(t.$t("ens.name-hash"))+"("+t._s(t.fullDomainName)+"):")]),a("p",{staticClass:"content"},[t._v(t._s(t.nameHash))])]),t.contentHash&&""!==t.contentHash?a("div",{staticClass:"content-container"},[a("p",{staticClass:"label"},[t._v("Content Hash("+t._s(t.hostName)+"):")]),a("p",{staticClass:"content"},[t._v(t._s(t.contentHash))])]):t._e(),a("div",{staticClass:"content-container"},[a("p",{staticClass:"label"},[t._v(t._s(t.$t("ens.owner"))+":")]),a("p",{staticClass:"content"},[t._v(t._s(t.owner))])]),t.hasDeed&&t.isDeedOwner?a("div",{staticClass:"content-container deed-container"},[a("div",[a("p",{staticClass:"label"},[t._v("Deed Value:")]),a("p",{staticClass:"content"},[t._v(t._s(t.deedValueEth)+" "+t._s(t.network.type.name))])]),a("div",{staticClass:"submit-container"},[a("button",{staticClass:"redeem-button",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.releaseDeed()}}},[t._v(" "+t._s(t.$t("ens.release-deed"))+" ")])])]):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:t.resolverMultiCoinSupport,expression:"resolverMultiCoinSupport"}],staticClass:"content-container"},[a("h4",[t._v(t._s(t.$t("ens.multi-coin"))+":")]),t._l(t.supportedCoinsWithValue,(function(e,s){return a("div",{key:s.id},[a("span",{staticClass:"currency"},[t._v(t._s(e.symbol)+" "+t._s(t.$t("common.lowercase-addr"))+": ")]),a("span",{staticClass:"content"},[t._v(t._s(e.value))])])}))],2),a("div",{directives:[{name:"show",rawName:"v-show",value:t.hasAnyTxt,expression:"hasAnyTxt"}],staticClass:"content-container"},[a("h4",[t._v(t._s(t.$t("ens.txt-record"))+":")]),t._l(t.txtRecordsWithValue,(function(e,s){return a("div",{key:s},[a("span",{staticClass:"currency"},[t._v(t._s(s)+": ")]),a("span",{staticClass:"content"},[t._v(t._s(e))])])}))],2),a("div",{staticClass:"owner-options"},[t.owner.toLowerCase()!==t.account.address.toLowerCase()||t.isExpired?t._e():a("button",{staticClass:"manage-button",on:{click:t.manageEns}},[t._v(" "+t._s(t.$t("ens.manage"))+" ")]),t.isExpired?a("button",{staticClass:"manage-button",on:{click:t.navigateToRenew}},[t._v(" "+t._s(t.$t("ens.renew"))+" ")]):t._e()]),a("interface-bottom-text",{attrs:{"link-text":t.$t("common.help-center"),question:t.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)},n=[],i=(a("99af"),a("f3f3")),o=a("539d"),r=a("1131"),c=a("2f62"),l={components:{"interface-bottom-text":o["a"]},props:{labelHash:{type:String,default:""},nameHash:{type:String,default:""},owner:{type:String,default:""},hostName:{type:String,default:""},tld:{type:String,default:""},supportedCoins:{type:Object,default:function(){}},resolverMultiCoinSupport:{type:Boolean,default:!1},txtRecords:{type:Object,default:function(){}},isExpired:{type:Boolean,default:!1},navigateToRenew:{type:Function,default:function(){}},deedValue:{type:String,default:"0"},hasDeed:{type:Boolean,default:!1},isDeedOwner:{type:Boolean,default:!1},releaseDeed:{type:Function,default:function(){}},contentHash:{type:String,default:""}},data:function(){return{locAvatar:""}},computed:Object(i["a"])(Object(i["a"])({},Object(c["c"])("main",["account","network"])),{},{deedValueEth:function(){return Object(r["fromWei"])(this.deedValue,"ether")},fullDomainName:function(){return"".concat(this.hostName,".").concat(this.tld)},supportedCoinsWithValue:function(){var t={};for(var e in this.supportedCoins)this.supportedCoins[e].value&&(t[e]=this.supportedCoins[e]);return t},convertedAvatar:function(){return this.hasAvatar?"https://img.mewapi.io/?image=".concat(this.txtRecordsWithValue.avatar,"&width=75&height=75&fit=scale-down"):""},hasAvatar:function(){return this.txtRecordsWithValue.hasOwnProperty("avatar")},txtRecordsWithValue:function(){var t={};for(var e in this.txtRecords)this.txtRecords[e]&&(t[e]=this.txtRecords[e]);return t},hasAnyTxt:function(){for(var t in this.txtRecords)if(""!==this.txtRecords[t])return!0;return!1}}),mounted:function(){""===this.hostName&&this.$router.push("/interface/dapps/manage-ens")},methods:{manageEns:function(){this.$router.push("manage")}}},u=l,d=(a("8c6d"),a("2877")),h=Object(d["a"])(u,s,n,!1,null,"725d69ee",null),p=h.exports},e7ef:function(t,e,a){}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-166aa1b8.7b4015b3.js.map