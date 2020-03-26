(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{450:function(e,t,r){"use strict";var o=r(109),n=r.n(o),c=r(155),l=r(482);t.a=class{constructor(e,t,r){if(this.axios=n.a.create({baseURL:e,paramsSerializer:l.stringify,...r}),this.storeConfig={cookie:{key:"jwt",options:{path:"/"}},localStorage:{key:"jwt"},...t},this.isBrowser()){let e;this.storeConfig.cookie?e=c.get(this.storeConfig.cookie.key):this.storeConfig.localStorage&&(e=JSON.parse(window.localStorage.getItem(this.storeConfig.localStorage.key))),e&&this.setToken(e,!0)}}async request(e,t,r){try{return(await this.axios.request({method:e,url:t,...r})).data}catch(e){throw e.response?new Error(e.response.data.message):e}}async register(e,t,r){this.clearToken();const o=await this.request("post","/auth/local/register",{data:{email:t,password:r,username:e}});return this.setToken(o.jwt),o}async login(e,t){this.clearToken();const r=await this.request("post","/auth/local",{data:{identifier:e,password:t}});return this.setToken(r.jwt),r}async forgotPassword(e,t){this.clearToken(),await this.request("post","/auth/forgot-password",{data:{email:e,url:t}})}async resetPassword(code,e,t){this.clearToken(),await this.request("post","/auth/reset-password",{data:{code:code,password:e,passwordConfirmation:t}})}getProviderAuthenticationUrl(e){return`${this.axios.defaults.baseURL}/connect/${e}`}async authenticateProvider(e,t){this.clearToken(),this.isBrowser()&&(t=l.parse(window.location.search,{ignoreQueryPrefix:!0}));const r=await this.request("get",`/auth/${e}/callback`,{params:t});return this.setToken(r.jwt),r}getEntries(e,t){return this.request("get",`/${e}`,{params:t})}getEntryCount(e,t){return this.request("get",`/${e}/count`,{params:t})}getEntry(e,t){return this.request("get",`/${e}/${t}`)}createEntry(e,data){return this.request("post",`/${e}`,{data:data})}updateEntry(e,t,data){return this.request("put",`/${e}/${t}`,{data:data})}deleteEntry(e,t){return this.request("delete",`/${e}/${t}`)}searchFiles(e){return this.request("get",`/upload/search/${decodeURIComponent(e)}`)}getFiles(e){return this.request("get","/upload/files",{params:e})}getFile(e){return this.request("get",`/upload/files/${e}`)}upload(data,e){return this.request("post","/upload",{data:data,...e})}setToken(e,t){this.axios.defaults.headers.common.Authorization="Bearer "+e,this.isBrowser()&&!t&&(this.storeConfig.localStorage&&window.localStorage.setItem(this.storeConfig.localStorage.key,JSON.stringify(e)),this.storeConfig.cookie&&c.set(this.storeConfig.cookie.key,e,this.storeConfig.cookie.options))}clearToken(){delete this.axios.defaults.headers.common.Authorization,this.isBrowser()&&(this.storeConfig.localStorage&&window.localStorage.removeItem(this.storeConfig.localStorage.key),this.storeConfig.cookie&&c.remove(this.storeConfig.cookie.key,this.storeConfig.cookie.options))}isBrowser(){return"undefined"!=typeof window}}},453:function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,n=Array.isArray,c=function(){for(var e=[],i=0;i<256;++i)e.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return e}(),l=function(source,e){for(var t=e&&e.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(t[i]=source[i]);return t};e.exports={arrayToObject:l,assign:function(e,source){return Object.keys(source).reduce((function(e,t){return e[t]=source[t],e}),e)},combine:function(a,b){return[].concat(a,b)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],i=0;i<t.length;++i)for(var o=t[i],c=o.obj[o.prop],l=Object.keys(c),f=0;f<l.length;++f){var d=l[f],h=c[d];"object"==typeof h&&null!==h&&-1===r.indexOf(h)&&(t.push({obj:c,prop:d}),r.push(h))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(n(r)){for(var o=[],c=0;c<r.length;++c)void 0!==r[c]&&o.push(r[c]);t.obj[t.prop]=o}}}(t),e},decode:function(e,t,r){var o=e.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(e){return o}},encode:function(e,t,r){if(0===e.length)return e;var o=e;if("symbol"==typeof e?o=Symbol.prototype.toString.call(e):"string"!=typeof e&&(o=String(e)),"iso-8859-1"===r)return escape(o).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var n="",i=0;i<o.length;++i){var l=o.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?n+=o.charAt(i):l<128?n+=c[l]:l<2048?n+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?n+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&o.charCodeAt(i)),n+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return n},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,source,r){if(!source)return t;if("object"!=typeof source){if(n(t))t.push(source);else{if(!t||"object"!=typeof t)return[t,source];(r&&(r.plainObjects||r.allowPrototypes)||!o.call(Object.prototype,source))&&(t[source]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(source);var c=t;return n(t)&&!n(source)&&(c=l(t,r)),n(t)&&n(source)?(source.forEach((function(n,i){if(o.call(t,i)){var c=t[i];c&&"object"==typeof c&&n&&"object"==typeof n?t[i]=e(c,n,r):t.push(n)}else t[i]=n})),t):Object.keys(source).reduce((function(t,n){var c=source[n];return o.call(t,n)?t[n]=e(t[n],c,r):t[n]=c,t}),c)}}},465:function(e,t,r){"use strict";var o=String.prototype.replace,n=/%20/g,c=r(453),l={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=c.assign({default:l.RFC3986,formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return String(e)}}},l)},482:function(e,t,r){"use strict";var o=r(483),n=r(484),c=r(465);e.exports={formats:c,parse:n,stringify:o}},483:function(e,t,r){"use strict";var o=r(453),n=r(465),c=Object.prototype.hasOwnProperty,l={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},f=Array.isArray,d=Array.prototype.push,h=function(e,t){d.apply(e,f(t)?t:[t])},y=Date.prototype.toISOString,m=n.default,w={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,format:m,formatter:n.formatters[m],indices:!1,serializeDate:function(e){return y.call(e)},skipNulls:!1,strictNullHandling:!1},v=function e(object,t,r,n,c,l,filter,d,y,m,v,j,k){var O,S=object;if("function"==typeof filter?S=filter(t,S):S instanceof Date?S=m(S):"comma"===r&&f(S)&&(S=S.join(",")),null===S){if(n)return l&&!j?l(t,w.encoder,k,"key"):t;S=""}if("string"==typeof(O=S)||"number"==typeof O||"boolean"==typeof O||"symbol"==typeof O||"bigint"==typeof O||o.isBuffer(S))return l?[v(j?t:l(t,w.encoder,k,"key"))+"="+v(l(S,w.encoder,k,"value"))]:[v(t)+"="+v(String(S))];var x,C=[];if(void 0===S)return C;if(f(filter))x=filter;else{var N=Object.keys(S);x=d?N.sort(d):N}for(var i=0;i<x.length;++i){var P=x[i];c&&null===S[P]||(f(S)?h(C,e(S[P],"function"==typeof r?r(t,P):t,r,n,c,l,filter,d,y,m,v,j,k)):h(C,e(S[P],t+(y?"."+P:"["+P+"]"),r,n,c,l,filter,d,y,m,v,j,k)))}return C};e.exports=function(object,e){var t,r=object,o=function(e){if(!e)return w;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||w.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=n.default;if(void 0!==e.format){if(!c.call(n.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var o=n.formatters[r],filter=w.filter;return("function"==typeof e.filter||f(e.filter))&&(filter=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:w.addQueryPrefix,allowDots:void 0===e.allowDots?w.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:w.charsetSentinel,delimiter:void 0===e.delimiter?w.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:w.encode,encoder:"function"==typeof e.encoder?e.encoder:w.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:w.encodeValuesOnly,filter:filter,formatter:o,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:w.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:w.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:w.strictNullHandling}}(e);"function"==typeof o.filter?r=(0,o.filter)("",r):f(o.filter)&&(t=o.filter);var d,y=[];if("object"!=typeof r||null===r)return"";d=e&&e.arrayFormat in l?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var m=l[d];t||(t=Object.keys(r)),o.sort&&t.sort(o.sort);for(var i=0;i<t.length;++i){var j=t[i];o.skipNulls&&null===r[j]||h(y,v(r[j],j,m,o.strictNullHandling,o.skipNulls,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.formatter,o.encodeValuesOnly,o.charset))}var k=y.join(o.delimiter),O=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&("iso-8859-1"===o.charset?O+="utf8=%26%2310003%3B&":O+="utf8=%E2%9C%93&"),k.length>0?O+k:""}},484:function(e,t,r){"use strict";var o=r(453),n=Object.prototype.hasOwnProperty,c=Array.isArray,l={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},f=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},d=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},h=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,c=/(\[[^[\]]*])/g,l=r.depth>0&&/(\[[^[\]]*])/.exec(o),f=l?o.slice(0,l.index):o,h=[];if(f){if(!r.plainObjects&&n.call(Object.prototype,f)&&!r.allowPrototypes)return;h.push(f)}for(var i=0;r.depth>0&&null!==(l=c.exec(o))&&i<r.depth;){if(i+=1,!r.plainObjects&&n.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;h.push(l[1])}return l&&h.push("["+o.slice(l.index)+"]"),function(e,t,r){for(var o=d(t,r),i=e.length-1;i>=0;--i){var n,c=e[i];if("[]"===c&&r.parseArrays)n=[].concat(o);else{n=r.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,f=parseInt(l,10);r.parseArrays||""!==l?!isNaN(f)&&c!==l&&String(f)===l&&f>=0&&r.parseArrays&&f<=r.arrayLimit?(n=[])[f]=o:n[l]=o:n={0:o}}o=n}return o}(h,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return l;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?l.charset:e.charset;return{allowDots:void 0===e.allowDots?l.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:l.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:l.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:l.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:l.comma,decoder:"function"==typeof e.decoder?e.decoder:l.decoder,delimiter:"string"==typeof e.delimiter||o.isRegExp(e.delimiter)?e.delimiter:l.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:l.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:l.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:l.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:l.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:l.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var y="string"==typeof e?function(e,t){var i,r={},h=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,y=t.parameterLimit===1/0?void 0:t.parameterLimit,m=h.split(t.delimiter,y),w=-1,v=t.charset;if(t.charsetSentinel)for(i=0;i<m.length;++i)0===m[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===m[i]?v="utf-8":"utf8=%26%2310003%3B"===m[i]&&(v="iso-8859-1"),w=i,i=m.length);for(i=0;i<m.length;++i)if(i!==w){var j,k,O=m[i],S=O.indexOf("]="),x=-1===S?O.indexOf("="):S+1;-1===x?(j=t.decoder(O,l.decoder,v,"key"),k=t.strictNullHandling?null:""):(j=t.decoder(O.slice(0,x),l.decoder,v,"key"),k=t.decoder(O.slice(x+1),l.decoder,v,"value")),k&&t.interpretNumericEntities&&"iso-8859-1"===v&&(k=f(k)),k=d(k,t),O.indexOf("[]=")>-1&&(k=c(k)?[k]:k),n.call(r,j)?r[j]=o.combine(r[j],k):r[j]=k}return r}(e,r):e,m=r.plainObjects?Object.create(null):{},w=Object.keys(y),i=0;i<w.length;++i){var v=w[i],j=h(v,y[v],r);m=o.merge(m,j,r)}return o.compact(m)}}}]);