(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{134:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(136),o=a.n(l),i=function(){return n.a.createElement("img",{width:40,height:40,className:"avatar",src:"http://gravatar.com/avatar/a2bb35fd57f6ee3d4979db9e7c364797"})},c=a(4),u=a.n(c),s=a(135),f=a.n(s),d=function(e){var t=e.icon,a=e.type;e.size;switch(a){case"brand":a="b";break;case"light":a="l";break;default:a="s"}var r=f()(["fa"+a,"fa-"+t]);return n.a.createElement("i",{className:r})};d.propTypes={icon:u.a.string.isRequired,type:u.a.string,size:u.a.string};var p=d,b=function(e){var t=e.children,a=e.title,r=e.onClick;return n.a.createElement("div",{className:"clickable",title:a,onClick:r},t)};b.propTypes={title:u.a.string,onClick:u.a.func.isRequired};var m=b,h=function(e){return window.open(e,"_blank").focus()};t.default=function(){return n.a.createElement(o.a,{column:!0},n.a.createElement(i,null),n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"Dexter Marks-Barber"),n.a.createElement("p",null,"PHP/MySQL/React/Node")),n.a.createElement(o.a,{row:!0},n.a.createElement(m,{title:"GitHub",onClick:function(){return h("https://github.com/dextermb")}},n.a.createElement(p,{type:"brand",icon:"github"})),n.a.createElement(m,{title:"Twitter",onClick:function(){return h("https://twitter.com/dmarksbarber")}},n.a.createElement(p,{type:"brand",icon:"twitter"})),n.a.createElement(m,{title:"Email",onClick:function(){return h("mailto:dexter@marks-barber.co.uk")}},n.a.createElement(p,{icon:"at"})),n.a.createElement(m,{title:"Stackoverflow CV",onClick:function(){return h("https://stackoverflow.com/cv/dexter")}},n.a.createElement(p,{type:"brand",icon:"stack-overflow"}))))}},135:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)&&r.length){var o=n.apply(null,r);o&&e.push(o)}else if("object"===l)for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},136:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a(0)),n=o(a(4)),l=o(a(135));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var c=function(e){var t,a,n=e.className,o=e.style,c=e.position,u=e.type,s=e.content,f=e.children,d=e.top,p=e.bottom,b=e.left,m=e.right,h=e.start,v=e.end,g=e.page,k=e.padded,y=e.row,w=e.column,x=e.inline,E=!0,C=!0,N=c.split(" "),A=u.split(" ");return Array.isArray(N)&&N.length?(E=!1,N.forEach(function(e){switch(e){case"top":d=!0;break;case"bottom":p=!0;break;case"left":b=!0;break;case"right":m=!0}})):E=!!c.length,Array.isArray(A)&&A.length?(C=!1,A.forEach(function(e){switch(e){case"page":g=!0;break;case"row":y=!0;break;case"column":w=!0;break;case"padded":k=!0;break;case"inline":x=!0}})):C=!!u.length,n=(0,l.default)(["flex",n,(t={},i(t,"flex-".concat(c),!!E),i(t,"flex-top",!!d),i(t,"flex-bottom",!!p),i(t,"flex-left",!!b),i(t,"flex-right",!!m),i(t,"flex-start",!!h),i(t,"flex-end",!!v),t),(a={},i(a,"flex-".concat(u),!!C),i(a,"flex-page",!!g),i(a,"flex-padded",!!k),i(a,"flex-row",!!y),i(a,"flex-column",!!w),i(a,"flex-inline",!!x),a)]),r.default.createElement("div",{className:n,style:o},s||f)};c.defaultProps={position:"",type:""},c.propTypes={content:n.default.node,position:n.default.string,top:n.default.bool,bottom:n.default.bool,left:n.default.bool,right:n.default.bool,start:n.default.bool,end:n.default.bool,type:n.default.string,page:n.default.bool,padding:n.default.bool,row:n.default.bool,column:n.default.bool,inline:n.default.bool,className:n.default.string,style:n.default.object};var u=c;t.default=u}}]);
//# sourceMappingURL=component---src-pages-index-jsx-2cacb9aa197fb4ea03de.js.map