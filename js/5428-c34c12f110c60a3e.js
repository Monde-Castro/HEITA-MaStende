!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1543d32b-6380-4e88-9e7f-7a29f9d6c451",e._sentryDebugIdIdentifier="sentry-dbid-1543d32b-6380-4e88-9e7f-7a29f9d6c451")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"57ca87d6"},(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5428],{14433:function(e){var n={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"nsidFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Nsid"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ns"},arguments:[],directives:[]}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"topDestinationByPlatformTopCityFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PlatformTopDestination"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avgPrice"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"destinationDetails"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nsid"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"nsidFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"translatedName"},arguments:[{kind:"Argument",name:{kind:"Name",value:"languageTag"},value:{kind:"Variable",name:{kind:"Name",value:"languageTag"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"accommodationCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"mainImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"path"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"userFriendlyUrl"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"activeHotelCount"},arguments:[],directives:[]}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"topDestinationByPlatformTopDestinationFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PlatformTopDestination"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avgPrice"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"destinationDetails"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nsid"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"nsidFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"translatedName"},arguments:[{kind:"Argument",name:{kind:"Name",value:"languageTag"},value:{kind:"Variable",name:{kind:"Name",value:"languageTag"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"accommodationCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"mainImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"path"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"userFriendlyUrl"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"activeHotelCount"},arguments:[],directives:[]}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getTopDestinations"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"platformCode"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"languageTag"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"LanguageTagInput"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"currency"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"150"},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getTopDestinationsByPlatform"},arguments:[{kind:"Argument",name:{kind:"Name",value:"platformCode"},value:{kind:"Variable",name:{kind:"Name",value:"platformCode"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"cities"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"topDestinationByPlatformTopCityFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"destinations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"topDestinationByPlatformTopDestinationFragment"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"getConvertedCurrencyRate"},arguments:[{kind:"Argument",name:{kind:"Name",value:"base"},value:{kind:"StringValue",value:"EUR",block:!1}},{kind:"Argument",name:{kind:"Name",value:"target"},value:{kind:"Variable",name:{kind:"Name",value:"currency"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"target"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"rate"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:1459}};n.loc.source={body:'fragment nsidFragment on Nsid {\n    id\n    ns\n}\n\nfragment topDestinationByPlatformTopCityFragment on PlatformTopDestination {\n    avgPrice\n    destinationDetails {\n        nsid {\n            ...nsidFragment\n        }\n        translatedName(languageTag: $languageTag) {\n            value\n        }\n        accommodationCount\n        content {\n            mainImage {\n                path\n            }\n        }\n        userFriendlyUrl {\n            url\n        }\n    }\n    activeHotelCount\n}\n\nfragment topDestinationByPlatformTopDestinationFragment on PlatformTopDestination {\n    avgPrice\n    destinationDetails {\n        nsid {\n            ...nsidFragment\n        }\n        translatedName(languageTag: $languageTag) {\n            value\n        }\n        accommodationCount\n        content {\n            mainImage {\n                path\n            }\n        }\n        userFriendlyUrl {\n            url\n        }\n    }\n    activeHotelCount\n}\n\nquery getTopDestinations(\n    $platformCode: String!\n    $languageTag: LanguageTagInput!\n    $currency: String!\n    $limit: Int = 150\n) {\n    getTopDestinationsByPlatform(platformCode: $platformCode, limit: $limit) {\n        cities {\n            ...topDestinationByPlatformTopCityFragment\n        }\n        destinations {\n            ...topDestinationByPlatformTopDestinationFragment\n        }\n    }\n    getConvertedCurrencyRate(base: "EUR", target: $currency) {\n        target {\n            rate\n        }\n    }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function t(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function a(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var d=i[n]||new Set,o=new Set,l=new Set;for(d.forEach(function(e){l.add(e)});l.size>0;){var r=l;l=new Set,r.forEach(function(e){o.has(e)||(o.add(e),(i[e]||new Set).forEach(function(e){l.add(e)}))})}return o.forEach(function(n){var i=t(e,n);i&&a.definitions.push(i)}),a}n.definitions.forEach(function(e){if(e.name){var n=new Set;(function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})})(e,n),i[e.name.value]=n}}),e.exports=n,e.exports.nsidFragment=a(n,"nsidFragment"),e.exports.topDestinationByPlatformTopCityFragment=a(n,"topDestinationByPlatformTopCityFragment"),e.exports.topDestinationByPlatformTopDestinationFragment=a(n,"topDestinationByPlatformTopDestinationFragment"),e.exports.getTopDestinations=a(n,"getTopDestinations")},36315:function(e,n,i){"use strict";i.d(n,{S:function(){return d}});var t=i(67294),a=i(83211);let d=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,i=(0,t.useRef)(null),d=n((0,a.s)(i,e)),[l,r]=(0,t.useState)(()=>d);return(0,t.useEffect)(()=>{d&&!l&&r(!0)},[d,l]),{isIntersecting:d,didIntersect:l,intersectionRef:i}};function o(e){return(e?.intersectionRatio??0)>0}},30876:function(e,n,i){"use strict";i.d(n,{CF:function(){return l},NX:function(){return r},PW:function(){return m},V1:function(){return s},Ym:function(){return o},cF:function(){return d},tZ:function(){return a},wV:function(){return t}});let t=150,a=6,d=10,o="/top-destinations",l="/random-top-destinations",r="/top-destinations-in-destination",s={citiesPriceCalendar:[],cities:[],destinations:[],links:[]},m=[]},963:function(e,n,i){"use strict";i.d(n,{Tl:function(){return F},Yn:function(){return S},hw:function(){return D},jN:function(){return N},pR:function(){return y},w$:function(){return f},zz:function(){return p}});var t=i(82439),a=i(74737),d=i(53147),o=i(30945),l=i(77222),r=i(28376),s=i(20147),m=i(74810),u=i(30876);let c=(e,n)=>e.avgPrice/100*n,k=e=>n=>({name:(0,l.Y)(n.destinationDetails),image:(0,r.P)(n.destinationDetails),avgPrice:c(n,e),count:n.activeHotelCount,link:(0,s.h)(n.destinationDetails)}),v=(e,n)=>((0,m.t)(n.destinationDetails.nsid)&&e.push({nsid:n.destinationDetails.nsid,name:(0,l.Y)(n.destinationDetails),image:n.destinationDetails.content?.mainImage?.path}),e),g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e=>e;return n=>({name:e((0,l.Y)(n.destinationDetails)),link:(0,s.h)(n.destinationDetails)})},f=e=>e?.getTopDestinationsByPlatform?.cities||[],p=e=>e?.getTopDestinationsByPlatform?.destinations||[],N=e=>e?.getConvertedCurrencyRate.target?.rate||1;function S(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,t=k(i),a=g(e=>e);return{cities:e.slice(0,u.tZ).map(t),citiesPriceCalendar:e.slice(0,u.cF).reduce(v,[]),destinations:n.slice(0,u.tZ).map(t),links:e.slice(u.tZ).map(a).concat(n.slice(u.tZ).map(a))}}function y(e,n,i,a){let l=(0,d.Yg)(i),{defaultCurrency:r}=o.X[l];return{platformCode:n,languageTag:(0,t.p)(i),currency:a||r.code,limit:e}}function F(e,n,i,t){return`${e}:${n}:${i}:${t}`}let D=e=>{let n=e?.getDestinationDetails?.destinationDetails?.[0]?.relatedConcepts;return(n?.topDestinations?.destinations||[]).map((0,a.r)())}},20147:function(e,n,i){"use strict";i.d(n,{h:function(){return o}});var t=i(88497),a=i(58113),d=i(68424);function o(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.q)(e,a.p)&&(0,d.K)(e.userFriendlyUrl)?e.userFriendlyUrl.url??n:n}}}]);
//# sourceMappingURL=5428-c34c12f110c60a3e.js.map