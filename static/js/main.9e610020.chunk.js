(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{20:function(t,e,a){t.exports=a(27)},25:function(t,e,a){},27:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(10),i=a.n(s),c=a(5),o=a(11),l=a(12),u=a(18),p=a(16),m=(a(25),a(3)),v=a.n(m),f=(a(26),a(29)),h=a(28),g=function(t){var e=t.good;return r.a.createElement(h.a.Item,{as:"li"},e)},d=function(t){var e=t.goods;return r.a.createElement(h.a,{as:"ul",className:"list"},e.map((function(t){return r.a.createElement(g,{key:t,good:t})})))},A=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(t){Object(u.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={list:A,isActive:!1},t.reverse=function(){t.setState((function(t){return{list:Object(c.a)(t.list).reverse()}}))},t.reset=function(){t.setState((function(t){return{list:A}}))},t.sortAlphabetical=function(){t.setState((function(t){return{list:Object(c.a)(t.list).sort()}}))},t.sortByLength=function(){t.setState((function(t){return{list:Object(c.a)(t.list).sort((function(t,e){return t.length-e.length}))}}))},t.toggleActive=function(){t.setState((function(t){return{isActive:!t.isActive}}))},t}return Object(l.a)(a,[{key:"render",value:function(){var t=v()("App__start-button",{App__none:this.state.isActive}),e=v()("App__content",{App__none:!this.state.isActive});return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{variant:"primary",onClick:this.toggleActive,className:t},"Start"),r.a.createElement("div",{className:e},r.a.createElement(d,{goods:this.state.list}),r.a.createElement("div",{className:"App__buttons"},r.a.createElement(f.a,{variant:"secondary",onClick:this.reverse},"Reverse"),r.a.createElement(f.a,{variant:"secondary",onClick:this.reset},"Reset"),r.a.createElement(f.a,{variant:"secondary",onClick:this.sortAlphabetical},"Sort alphabetically"),r.a.createElement(f.a,{variant:"secondary",onClick:this.sortByLength},"Sort by length"))))}}]),a}(r.a.Component);i.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.9e610020.chunk.js.map