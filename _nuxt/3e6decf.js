(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{329:function(e,t,n){"use strict";n.r(t);var r=n(9),c=(n(50),n(16),n(93),n(51),n(68),{data:function(){return{content:""}},fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,body;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/repos/fosscord/fosscord-client/issues/67");case 2:return n=t.sent,t.next=5,n.json();case 5:n=t.sent,body=n.body,e.content=body.replace(/\[ \]/g,"<input type='checkbox' disabled/>").replace(/\[x\]/g,"<input type='checkbox' checked disabled/>").replace(/#(\d+)/g,'<a href="https://github.com/fosscord/fosscord-client/issues/$1">#$1</a>');case 8:case"end":return t.stop()}}),t)})))()}))}),o=c,d=n(15),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"roadmap"},[n("h4",[e._v("Client:")]),e._v(" "),n("div",{attrs:{id:"roadmap_client"},domProps:{innerHTML:e._s(e.$md.render(e.content))}})])}),[],!1,null,null,null);t.default=component.exports}}]);