"use strict";var b;function c(a){return s(a)||d(a)||o(a)||n()}function d(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function e(a,b){if(null==a)return{};var c,d,e=f(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(d=0;d<g.length;d++)c=g[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function f(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function j(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function k(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?j(Object(b),!0).forEach(function(c){l(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):j(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function l(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function m(a,b){return s(a)||r(a,b)||o(a,b)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(a,b){if(a){if("string"==typeof a)return q(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?q(a,b):void 0}}function q(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function r(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function s(a){if(Array.isArray(a))return a}function t(a){"@babel/helpers - typeof";return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},t(a)}var u=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2)]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=v(a.children[h]),c,d));return a.node=f},q=function(a){return null==a?null:a.key},r=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,s=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,s))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==s[A]&&o(c,A,n[A],s[A],f,g);for(;x<=z&&w<=y&&null!=(l=q(t[w]))&&l===q(u[x]);)r(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=q(t[y]))&&l===q(u[z]);)r(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=q(k=t[w]),m=q(u[x]=v(u[x],k)),C[l]||null!=m&&m===q(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(r(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(r(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?r(c,k&&k.node,null,u[x],f,g):(r(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==q(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},s=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===t(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||!c.lazy||s(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=r(e.parentNode,e,h,h=u(d(b)),l)};o(a.init)}}}(),v=u.h,h=u.app,i=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===t(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return v(a,{},b);return v(a,b,d)}},w=i("a"),a=i("button"),x=i("circle"),y=i("code"),z=i("div"),A=i("footer"),B=i("g"),g=i("h1"),C=i("h2"),D=i("h3"),E=i("h4"),F=i("h5"),G=i("header"),H=i("img"),I=i("input"),J=i("label"),K=i("li"),L=i("link"),M=i("main"),N=i("meta"),O=i("nav"),P=i("p"),p=i("path"),Q=i("pre"),R=i("script"),S=i("span"),T=i("svg"),U=i("title"),V=i("ul"),W=i("view"),X={description:"@magic-libraries/preventDefault is an effect that calls event.preventDefault.",gdpr:{allowed:[]},logotext:"@magic-libraries/preventDefault",menu:[{text:"installation",to:"/#installation"},{text:"usage",to:"/#usage"},{text:"source",to:"/#source"}],pageClass:{},pages:{"/prevent-default/404/":{description:"404 - not found.",title:"404 - not found"}},root:"/prevent-default/",theme:"dark",title:"@magic-libraries/preventDefault",url:"/prevent-default/"},Y={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},Z=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[D(b?ga({to:b},i):i),h.map(function(c){var d=m(c,2),e=d[0],f=d[1];return f.map(function(c){return $(k(k(k({},a),c.state),{},{name:c.name,link:b,day:e}))})})]},$=function(a){return z([E([a.day,"-",a.month,"-",a.year," - ",ga({to:a.name},a.title)]),P(a.description)])},_=function(a){var b,c=a.link,d=a.year,e=a.blog,f=a.url;return c?b="".concat(c).concat(d,"/"):f.endsWith("".concat(d,"/"))&&(b=f),z([C(c?ga({to:b},d):d),Object.entries(e[d]).map(function(c){var d=m(c,2),e=d[0],f=d[1];return Z(k(k({},a),{},{month:e,days:f,link:b}))})])},aa=function(){return z({class:"Credits"},["made with a few bits of ",ga({to:"https://magic.github.io/",target:"_blank",rel:"noopener"},"magic")])},ba=function(){var a=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return A({class:"Footer"},[z({class:"Container"},[aa(),a])])},ca=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Privacy Information":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.noDataText,l=void 0===k?"Awesome.":k,m=c.allowTitle,n=void 0===m?"Allow:":m,o=c.allowAllText,q=void 0===o?"All":o,r=c.allowText,s=void 0===r?"Selected":r,t=c.denyText,u=void 0===t?"None":t;if(!f)return z({class:"Gdpr"},T({class:"ShowHide",onclick:[oa.gdpr.show,{show:!0}],viewBox:"0 0 512 512"},[B([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),x({cx:"192",cy:"128",r:"32"}),x({cx:"128",cy:"256",r:"32"}),x({cx:"288",cy:"384",r:"32"}),x({cx:"272",cy:"272",r:"16"}),x({cx:"400",cy:"336",r:"16"}),x({cx:"176",cy:"368",r:"16"})])]));var v=!!e.length;return z({class:"Gdpr"},[z({class:"Container"},[h&&D(h),j&&P(j),v&&[V(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return K({class:"Cookie"},[I({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:c.allowed.includes(b),onchange:[oa.gdpr.toggleAllow,{name:b}]}),(d||e)&&J({for:b},[d&&E(d),e&&P(e)])])}))],v?[F(n),I({class:"allow all",onclick:oa.gdpr.allow,type:"button",value:q}),I({class:"allow",onclick:oa.gdpr.close,type:"button",value:s}),I({class:"allow none",onclick:oa.gdpr.deny,type:"button",value:u})]:I({onclick:oa.gdpr.close,value:l,type:"button"})])])},da=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.branch,d=void 0===c?"master":c,e=b.host,f=void 0===e?"github":e,g=a,h=g.project,i=void 0!==h&&h,j="",k=i;i.startsWith("@")?(j="@",i=i.substr(1)):k=i.split("/")[1];var l=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{to:"https://www.npmjs.com/package/".concat(k),src:"https://img.shields.io/npm/v/".concat(j).concat(a,"?color=blue")}}],["node",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{src:"https://img.shields.io/node/v/".concat(j).concat(a,"?color=blue")}}],["license",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{src:"https://img.shields.io/npm/l/".concat(j).concat(a,"?color=blue")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://img.shields.io/travis/com/".concat(a,"/").concat(d)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;if(a){var b=a.split("/"),c=m(b,2),e=c[0],f=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(f,"/branch/").concat(d),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(f,"/").concat(d,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return{to:"https://coveralls.io/".concat(f,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(f,"/").concat(a,"/").concat(d,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{to:"https://snyk.io/test/".concat(f,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=m(b,2),d=c[0],e=c[1];return e(a[d])});return l.length?V({class:"GitBadges"},l.map(function(a){var b=a.to,c=a.src;if(c){var d=fa({src:c,height:"23"});return b?K(ga({to:b},d)):K(d)}})):void 0},ea=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,d=a.menu,f=a.logotext,g=e(a,["logo","menu","logotext"]);return c||d||f?G({class:"Header"},[(c||f)&&ha({root:g.root,theme:g.theme,img:c,text:f}),d&&ia({state:g,items:d}),b]):void 0},fa=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="",a.loading=a.loading||"lazy")),H(a)},ga=function(a){var b=a.to,c=a.action,d=void 0===c?oa.go:c,f=e(a,["to","action"]),g=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],h=f.href,i=f.text,j=f.nofollow,k=f.noreferrer,l=e(f,["href","text","nofollow","noreferrer"]);b=b||h||"",l.href=b;var m="/"===b[0]||"#"===b[0];return m?l.onclick=[d,na.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),w(l,[i,g])},ha=function(a){var b=a.img,c=a.text,d=e(a,["img","text"]);return ga({to:d.root,class:"Logo"},[b&&fa(b),c&&S(c)])},ia=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,f=a.state,g=f.url,h=f.hash,i=f.root;return h&&!g.endsWith(h)&&(g+="#".concat(h)),O({className:c},V(e.map(function(a){return ja(k(k({},a),{},{url:g,root:i,collapse:void 0===d||d}))})))},ja=function(a){var b=a.text,c=a.items,d=void 0===c?[]:c,f=a.url,g=a.root,h=a.parentTo,i=void 0===h?void 0:h,j=a.collapse,l=e(a,["text","items","url","root","parentTo","collapse"]),m={class:{}},n=l.to;g&&n.startsWith("/")&&(n=n.substr(1));var o=l.to[0];i&&("-"===o||"#"===o)&&(n=i+n);var p=n.startsWith(g);g&&("/"===o||"-"===o||"#"===o)&&!p&&(n=g+n),l.to=n.replace(/\/\//g,"/"),l.to===f&&(m["class"].active=!0);var q=[],r=f.startsWith(l.to)||!j;return r&&d.length&&(q=V(d.map(function(a){return ja(k({parentTo:l.to,url:f,root:g,collapse:j},a))}))),K(m,[l.to?ka(l,b):S(l,b),q])},ka=function(a,b){return ga(a,b)},la=function(a,b){var c=a.page,d=a.state,e={id:"Magic",class:d.pageClass};return M(e,z({class:{Wrapper:!0}},[ea(d),z({class:"Page",id:"page"},c(d)),ba(d),b]))},ma=function(b,c){"string"==typeof b?b={content:b}:c?b=k({content:c},b):Array.isArray(b)&&(b={content:b.join("")});var d=b,f=d.content,g=d.lines,h=!(void 0!==g)||g;return z({class:{Pre:!0,lines:!h||"false"!==h}},[z({class:"menu"},[a({onclick:[oa.pre.clip,function(a){return{e:a,content:f}}]},"copy")]),Q(f.trim().split("\n").map(ma.Line))])};ma.Comment=function(a){return S({class:"comment"},a)},ma.Line=function(a){return y({class:"line"},ma.Words(a))},ma.Word=function(a){if(!a)return"";var b=a.includes("://"),c=a.startsWith("mailto:")||a.includes("@")&&a.includes(".");if(b||c)return ga({to:a,text:a});var d="";return"state"===a?d="state":"actions"===a?d="actions":na.pre.keywords.includes(a)?d="keyword":na.pre.builtins.includes(a)?d="builtin":na.pre.booleans.includes(a)&&(d="boolean"),d?S({class:d},a):a},ma.Words=function(a){var b=a.split(na.pre.commentRegex),d=c(b),e=d[0],f=d.slice(1),g=!e.endsWith(":")&&f.length;if(g)return[ma.Words(e),ma.Comment(f.join("").split(na.pre.wordRegex).map(ma.Word))];var h=[],i=a;if(a.replace(na.pre.stringRegex,function(a){var b=i.split(a),c=m(b,2),d=c[0],e=c[1];h.push(d.split(na.pre.wordRegex).map(ma.Word)),h.push(S({class:"string"},a)),i=e}),i!==a)return h.push(i.split(na.pre.wordRegex).map(ma.Word)),h;var j=a.split(na.pre.wordRegex);return j.map(ma.Word)};var na=(b={db:{del:function del(a,b){var c=b.action,d=b.key,e=na.db.init();d&&e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},get:function get(a,b){var c=b.action,d=b.key,e=na.db.init(),f=void 0;return d&&e[d]&&(f=na.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}},set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=na.db.init(),g=na.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d))):void(f[d]=g,a(c,{key:d,value:e}))}},json:{parse:function parse(){return na.tryCatch(JSON.parse).apply(void 0,arguments)},stringify:function stringify(){return na.tryCatch(JSON.stringify).apply(void 0,arguments)}},pre:{booleans:["true","false"],builtins:["Array","Object","String","Number","RegExp","Null","Symbol","Set","WeakSet","Map","WeakMap","setInterval","setTimeout","Promise","JSON","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],commentRegex:/(\/\/)/gim,keywords:["let","this","long","package","float","goto","private","class","if","short","while","protected","with","debugger","case","continue","volatile","interface","instanceof","super","synchronized","throw","extends","final","export","throws","try","import","double","enum","boolean","abstract","function","implements","typeof","transient","break","default","do","static","void","int","new","async","native","switch","else","delete","null","public","var","await","byte","finally","catch","in","return","for","get","const","char","module","exports","require","npm","install","=>"],stringRegex:/("|')(.*?)\1/gim,wordRegex:/( )/gim},preventDefault:function preventDefault(a){return a.preventDefault(),a}},l(b,"preventDefault",function preventDefault(a){return a.preventDefault(),a}),l(b,"tryCatch",function tryCatch(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}}),b),oa={changeTheme:function changeTheme(a){return k(k({},a),{},{pageClass:k(k({},a.pageClass),{},{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},gdpr:{allow:function allow(a){return[k(k({},a),{},{gdpr:k(k({},a.gdpr),{},{allowed:a.cookies.map(function(a){return a.name}),show:!1})}),[na.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[oa.gdpr.show,{show:!1}]}]]},close:function close(a){return[k(k({},a),{},{gdpr:k(k({},a.gdpr),{},{show:!1})}),[na.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[oa.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[k(k({},a),{},{gdpr:k(k({},a.gdpr),{},{allowed:[]})}),[na.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[oa.gdpr.show,{show:!1}]}]]},show:function(a,b){var c=b.show,d=b.allowed,e=void 0===d?a.gdpr.allowed:d;return b.value&&(c=b.value.show,b.value.allowed&&(e=b.value.allowed)),"boolean"==typeof c?k(k({},a),{},{gdpr:k(k({},a.gdpr),{},{show:c,allowed:e})}):a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,f=e.allowed.includes(d);return f?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),k(k({},a),{},{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=m(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url&&h===a.hash)return h&&(window.location.hash=h),a;var i=window,j=i.scrollY,l=a.pages&&a.pages[f]&&a.pages[f].title;if(l&&(document.title=a.title=l),f===a.url)window.location.hash=h;else if(!h){var n=document.getElementsByTagName("html"),o=m(n,1),p=o[0],q=p.style.scrollBehavior;p.style.scrollBehavior="auto",window.scrollTo({top:0,behavior:"smooth"}),p.style.scrollBehavior=q}return window.history.pushState({url:f,hash:h,scrollY:j},a.title,c),k(k({},a),{},{url:f,hash:h,prev:a.url})},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var f=0;return b.state&&(d=b.state.url,e=b.state.hash,f=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:f,behavior:"smooth"}),k(k({},a),{},{url:d,hash:e})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},pa={"/prevent-default/":function preventDefault(){return[g({id:"magic-librariespreventdefault"},"@magic-libraries/preventDefault"),ga({to:"https://magic.github.io/core",text:"@magic"}),"-client library:\n",P("@magic-libraries/preventDefault is an effect that calls event.preventDefault."),da("@magic-libraries/prevent-default"),D({id:"installation"},"installation"),P("@magic-libraries/prevent-default is preinstalled in all @magic apps."),P("For use in other hyperapp apps:"),ma({lines:"false"},"npm install --save-exact @magic-libraries/prevent-default"),D({id:"usage"},"usage"),P("in a page/component, just use the lib.preventDefault effect"),ma("<a\n  href=\"/somewhere/\"\n  onclick=\"[actions.go, lib.preventDefault]\">\n</a>\n\n<form\n  name=\"form-name\"\n  onsubmit=\"[actions.form.submit, lib.preventDefault]\">\n</form>"),D({id:"source"},"source"),P(["the source for this page is in the\n",ga({to:"https://github.com/magic-libraries/prevent-default/tree/master/example",text:"example directory"}),"\nand gets built and published to github using\n",ga({to:"https://github.com/magic/core",text:"@magic/core"})])]},"/prevent-default/404/":function preventDefault404(){return z("404 - not found.")}};h({init:[k(k({},X),{},{url:window.location.pathname,hash:window.location.hash.substr(1)}),[[na.db.get,{key:"magic-gdpr",action:oa.gdpr.show}]]],subscriptions:function subscriptions(){return[[Y.listenPopState,oa.pop]]},view:function(a){var b=pa[a.url]?a.url:"/404/",c=pa[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.url=b,la({page:c,state:a},ca(a))},node:document.getElementById("Magic")});