(this["webpackJsonpfcc-markdown-previewer"]=this["webpackJsonpfcc-markdown-previewer"]||[]).push([[0],{129:function(e,t,n){"use strict";n.r(t);var r=n(3),s=n.n(r),i=n(37),a=n.n(i),c=(n(48),n(49),n(0));var b=function(){return Object(c.jsx)("header",{className:"app-header",children:Object(c.jsx)("h1",{children:"Markdown Previewer"})})},o=n(38),l=n(39),j=n(11),d=n(43),h=n(42),u=n(40),x=n.n(u),p=n(41),g=n.n(p);var O=function(e){return Object(c.jsx)("div",{id:"help-box",style:e.show?{display:"block"}:{display:"none"},children:Object(c.jsxs)("p",{children:["# h1",Object(c.jsx)("br",{}),"## h2",Object(c.jsx)("br",{}),"### h3",Object(c.jsx)("br",{}),"*emphasis*",Object(c.jsx)("br",{}),"**bold**",Object(c.jsx)("br",{}),"***bold & emphasis***",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"- list item 1",Object(c.jsx)("br",{}),"- list item 2",Object(c.jsx)("br",{}),"1. numbered item",Object(c.jsx)("br",{}),"(tab) 1. sub-list item",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"> quote",Object(c.jsx)("br",{}),"> multi-line quotes",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"insert images:",Object(c.jsx)("br",{}),"![example name](/example.png)",Object(c.jsx)("br",{}),"insert link:",Object(c.jsx)("br",{}),"[example.com](https://www.example.com/)",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"for in-line code use backticks `<div></div>`",Object(c.jsx)("br",{}),"for multi-line code use triple backticks",Object(c.jsx)("br",{}),"```",Object(c.jsx)("br",{}),"<div>",Object(c.jsx)("br",{}),"</div>",Object(c.jsx)("br",{}),"```",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"for more information click",Object(c.jsx)("a",{href:"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet",target:"_blank",rel:"noreferrer",children:" here."})]})})},m=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={inputText:A,displayHelp:!1},e.handleChange=e.handleChange.bind(Object(j.a)(e)),e.handleClick=e.handleClick.bind(Object(j.a)(e)),e}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.setState({inputText:e.target.value})}},{key:"handleClick",value:function(){this.setState({displayHelp:!this.state.displayHelp})}},{key:"render",value:function(){var e={backgroundImage:"url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAAH7+Yj7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAC4gAAAuIAeWOKUkAAAI2SURBVEhL7ZerTsRAFEC7KCTBgcKQgAaBxGAIn8MfYUGxCRaBAIHAkYAg4aUgrAJBgHvamc2d2dvptJvdhKQnOTvdzrvTebRo4tdZDPgRyj+eBRdqggT8+akuEwxFUq7wx6pooCvyCQKCWlvjG+BL0ddBfboa7gf/dSNXXQhnLgSz8XMkrl93AMbxujM+EZFP1eVExuJQ5KZlACXoiEcxSOir3nNhFr4EHvanu34RTS5En2GfG/8DHvGNyBM8ETfF1oxE3/eUW2IjVkaPHlcvD74WuhZnwDXnq7qnHRMvR/cujHlwfpf/WpJqgdXlrPeLhx1njK19m3v+Gcxb5i/zmJeeed0JNkzrVfGeitlsi1YhsR9iFnFGZocnjmtsqV6yvakCMYmVocnkQFkZWLL88mXFM/q1WBmauqzjzeNZW65caMLRLtWCOA43xFpYLOMMU40ysHDqDBwPOCagvo/lETSHuFDLrC1UQ/etZ5rcNnt6ejxMIaaLNY1iSUPamX8CsLXmLBhNUkb2opLzqclyd+3COr7E8+pyzK64WF2asO/RUMLOWJuBZbDnObhnpY3tPPSc4XLeMXwWlyK5Z6WNpY7kllkHB0yrwFl4LLaG069VmOU0Q4xW/pLUEenNhfPg3YUTpBp45MJ50Lku6+BuOc0QT30+4vPDKljbtYGtPsJSsIuMRKuSLvIh1/qImgO7Sc4TrZO82QdxyNnqUrDAHog74rq4LAKz8k68FIfirdjTM0lR/AEp0rcIxOjpVgAAAABJRU5ErkJggg==",")"),backgroundColor:this.state.displayHelp?"#ffeb99":"white"};return Object(c.jsxs)("div",{id:"converter",children:[Object(c.jsx)("button",{id:"help-btn",onClick:this.handleClick,style:e}),Object(c.jsx)(O,{show:this.state.displayHelp}),Object(c.jsx)("textarea",{id:"editor",className:"window",value:this.state.inputText,onChange:this.handleChange}),Object(c.jsxs)("div",{id:"preview",className:"window",children:[Object(c.jsx)(x.a,{plugins:[g.a],children:this.state.inputText}),"//react-markdown used for converting input text to Markdown //remark-breaks used to detect line-breaks"]})]})}}]),n}(s.a.Component),A="# Wow big writing!\n## Not so big writing\n### and a little bit smaller big writing\n#### I wonder how far this goes...\n\nand some regular writing\nwith line breaks\n\nuse **angry** or *slanty* (techincal terms)\nand ***craaaazy***\n\nwhat about lists of things?\n- like this?\n- and this?\n  - or perhaps this one?\n    1. let's number them too\n    2. sweet\n\n> *A clever and witty quote perhaps*\n>\n> by someone more clevererer than me\n\nAnd we need some imagey goodness\n\n![Fluffywuffy, the Dragon](/dragon.png)\n\nCheck out our dragon's favourite website,\n[FluffyDragons.com](https://www.fluffydragons.com/)\n\nChuck in some inline code `<html></html>`\n\nOr go into h@ck3r m0de!\n\n```\n  <div>\n    <p>Hello World!</p>\n  </div>\n```\n",k=m;var w=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(b,{}),Object(c.jsx)(k,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,130)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),i(e),a(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),v()},48:function(e,t,n){},49:function(e,t,n){}},[[129,1,2]]]);
//# sourceMappingURL=main.8e43e6c9.chunk.js.map