function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function c(t,e,n,s,r,o,a){const c=function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(e,s,r,o);if(c){const r=i(e,n,s,a);t.p(r,c)}}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function l(t){return null==t?"":t}function f(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function m(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function v(){return b(" ")}function w(){return b("")}function $(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function y(t){return function(e){return e.preventDefault(),t.call(this,e)}}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:_(t,s,e[s])}function S(t){return Array.from(t.childNodes)}function x(t,e,n,s){for(let s=0;s<t.length;s+=1){const r=t[s];if(r.nodeName===e){let e=0;const o=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)r.removeAttribute(o[t]);return t.splice(s,1)[0]}}return s?g(e):p(e)}function A(t,e){for(let n=0;n<t.length;n+=1){const s=t[n];if(3===s.nodeType)return s.data=""+e,t.splice(n,1)[0]}return b(e)}function T(t){return A(t," ")}function U(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function k(t,e){t.value=null==e?"":e}let N,P;function I(){if(void 0===N){N=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){N=!0}}return N}function L(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=p("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=I();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=$(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=$(n.contentWindow,"resize",e)}),f(t,n),()=>{(s||r&&n.contentWindow)&&r(),d(n)}}function R(t,e=document.body){return Array.from(e.querySelectorAll(t))}class C{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=p(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)h(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(d)}}function O(t){P=t}function j(){if(!P)throw new Error("Function called outside component initialization");return P}function H(t){j().$$.on_mount.push(t)}function M(t){j().$$.after_update.push(t)}function D(t){j().$$.on_destroy.push(t)}const q=[],G=[],B=[],V=[],z=Promise.resolve();let J=!1;function K(t){B.push(t)}let F=!1;const W=new Set;function Y(){if(!F){F=!0;do{for(let t=0;t<q.length;t+=1){const e=q[t];O(e),Q(e.$$)}for(O(null),q.length=0;G.length;)G.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];W.has(e)||(W.add(e),e())}B.length=0}while(q.length);for(;V.length;)V.pop()();J=!1,F=!1,W.clear()}}function Q(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}const X=new Set;let Z;function tt(){Z={r:0,c:[],p:Z}}function et(){Z.r||r(Z.c),Z=Z.p}function nt(t,e){t&&t.i&&(X.delete(t),t.i(e))}function st(t,e,n,s){if(t&&t.o){if(X.has(t))return;X.add(t),Z.c.push((()=>{X.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function rt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(s[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[o]=i}else for(const t in a)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function ot(t){return"object"==typeof t&&null!==t?t:{}}function at(t){t&&t.c()}function it(t,e){t&&t.l(e)}function ct(t,e,s,a){const{fragment:i,on_mount:c,on_destroy:u,after_update:l}=t.$$;i&&i.m(e,s),a||K((()=>{const e=c.map(n).filter(o);u?u.push(...e):r(e),t.$$.on_mount=[]})),l.forEach(K)}function ut(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){-1===t.$$.dirty[0]&&(q.push(t),J||(J=!0,z.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ft(e,n,o,a,i,c,u=[-1]){const l=P;O(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:n.context||[]),callbacks:s(),dirty:u,skip_bound:!1};let h=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),h&&lt(e,t)),n})):[],f.update(),h=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){const t=S(n.target);f.fragment&&f.fragment.l(t),t.forEach(d)}else f.fragment&&f.fragment.c();n.intro&&nt(e.$$.fragment),ct(e,n.target,n.anchor,n.customElement),Y()}O(l)}class ht{$destroy(){ut(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const dt=[];function mt(e,n=t){let s;const r=[];function o(t){if(a(e,t)&&(e=t,s)){const t=!dt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),dt.push(n,e)}if(t){for(let t=0;t<dt.length;t+=2)dt[t][0](dt[t+1]);dt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return r.push(c),1===r.length&&(s=n(o)||t),a(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}const pt={};var gt={owner:"canonical-web-and-design",repo:"upptime",sites:[{name:"Ubuntu.com",url:"https://ubuntu.com"},{name:"Ubuntu.com engage index",url:"https://ubuntu.com/engage"},{name:"Ubuntu.com takeovers index",url:"https://ubuntu.com/takeovers"},{name:"Ubuntu.com blog",url:"https://ubuntu.com/blog"},{name:"Ubuntu.com blog post",url:"https://ubuntu.com/blog/design-and-web-team-summary-29-december-2020"},{name:"Ubuntu.com advantage",url:"https://ubuntu.com/advantage"},{name:"Ubuntu.com tutorials",url:"https://ubuntu.com/tutorials"},{name:"Ubuntu.com tutorial",url:"https://ubuntu.com/tutorials/how-to-install-ubuntu-desktop-on-raspberry-pi-4#1-overview"},{name:"Ubuntu.com server docs",url:"https://ubuntu.com/server/docs"},{name:"Ubuntu.com kubernetes docs",url:"https://ubuntu.com/kubernetes/docs"},{name:"Ubuntu.com Ceph docs",url:"https://ubuntu.com/ceph/docs"},{name:"Ubuntu.com smart start guide",url:"https://ubuntu.com/smartstart/guide"},{name:"Ubuntu.com appliances portfolio",url:"https://ubuntu.com/appliance/portfolio"},{name:"Ubuntu.com appliance page",url:"https://ubuntu.com/appliance/openhab"},{name:"Ubuntu.com CVE list",url:"https://ubuntu.com/security/cve"},{name:"Ubuntu.com CVE page",url:"https://ubuntu.com/security/CVE-2020-15180"},{name:"Ubuntu.com USN list",url:"https://ubuntu.com/security/notices"},{name:"Ubuntu.com USN page",url:"https://ubuntu.com/security/notices/USN-4697-2"},{name:"Snapcraft.io",url:"https://snapcraft.io"},{name:"Snapcraft.io store page",url:"https://snapcraft.io/store"},{name:"Charmhub.io",url:"https://charmhub.io"},{name:"Vanilla Framework",url:"https://vanillaframework.io"},{name:"JAAS.ai",url:"https://jaas.ai"},{name:"JAAS Dashboard",url:"https://jaas.ai/models"},{name:"anbox-cloud.io",url:"https://anbox-cloud.io"},{name:"canonical.com",url:"https://canonical.com"},{name:"certification.ubuntu.com",url:"https://certification.ubuntu.com"},{name:"charmed-osm.com",url:"https://charmed-osm.com"},{name:"cn.ubuntu.com",url:"https://cn.ubuntu.com"},{name:"dqlite.io",url:"https://dqlite.io"},{name:"jp.ubuntu.com",url:"https://jp.ubuntu.com"},{name:"juju.is",url:"https://juju.is"},{name:"kubeflow-news.com",url:"https://kubeflow-news.com"},{name:"maas.io",url:"https://maas.io"},{name:"maas.io docs",url:"https://maas.io/docs"},{name:"microk8s.io",url:"https://microk8s.io"},{name:"microk8s.io/docs",url:"https://microk8s.io/docs/release-notes"},{name:"multipass.run",url:"https://multipass.run"},{name:"mir-server.io",url:"https://mir-server.io"},{name:"microstack.run",url:"https://microstack.run"},{name:"netplan.io",url:"https://netplan.io"}],"status-website":{baseUrl:"/upptime",logoUrl:"https://assets.ubuntu.com/v1/b3b72cb2-canonical-logo-166.png",name:"Canonical websites monitoring",favicon:"https://assets.ubuntu.com/v1/49a1a858-favicon-32x32.png",introTitle:"**Upptime** monitors the websites that Canonical's webteam manages.",introMessage:"Feel free to visit [our GitHub organisation](https://github.com/canonical-web-and-design) to help us make our websites great!",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/canonical-web-and-design/upptime"}]},path:"https://canonical-web-and-design.github.io/upptime",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function bt(t,e,n){const s=t.slice();return s[1]=e[n],s}function vt(e){let n,s,r,o=gt["status-website"]&&!gt["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=p("img"),this.h()},l(t){n=x(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){_(n,"alt",""),n.src!==(s=gt["status-website"].logoUrl)&&_(n,"src",s),_(n,"class","svelte-a08hsz")},m(t,e){h(t,n,e)},p:t,d(t){t&&d(n)}}}(),a=gt["status-website"]&&!gt["status-website"].hideNavTitle&&function(e){let n,s,r=gt["status-website"].name+"";return{c(){n=p("div"),s=b(r)},l(t){n=x(t,"DIV",{});var e=S(n);s=A(e,r),e.forEach(d)},m(t,e){h(t,n,e),f(n,s)},p:t,d(t){t&&d(n)}}}();return{c(){n=p("div"),s=p("a"),o&&o.c(),r=v(),a&&a.c(),this.h()},l(t){n=x(t,"DIV",{});var e=S(n);s=x(e,"A",{href:!0,class:!0});var i=S(s);o&&o.l(i),r=T(i),a&&a.l(i),i.forEach(d),e.forEach(d),this.h()},h(){_(s,"href",gt["status-website"].logoHref||gt.path),_(s,"class","logo svelte-a08hsz")},m(t,e){h(t,n,e),f(n,s),o&&o.m(s,null),f(s,r),a&&a.m(s,null)},p(t,e){gt["status-website"]&&!gt["status-website"].hideNavLogo&&o.p(t,e),gt["status-website"]&&!gt["status-website"].hideNavTitle&&a.p(t,e)},d(t){t&&d(n),o&&o.d(),a&&a.d()}}}function wt(t){let e,n,s,r,o,a=t[1].title+"";return{c(){e=p("li"),n=p("a"),s=b(a),o=v(),this.h()},l(t){e=x(t,"LI",{});var r=S(e);n=x(r,"A",{"aria-current":!0,href:!0,class:!0});var i=S(n);s=A(i,a),i.forEach(d),o=T(r),r.forEach(d),this.h()},h(){_(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),_(n,"href",t[1].href.replace("$OWNER",gt.owner).replace("$REPO",gt.repo)),_(n,"class","svelte-a08hsz")},m(t,r){h(t,e,r),f(e,n),f(n,s),f(e,o)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&_(n,"aria-current",r)},d(t){t&&d(e)}}}function $t(e){let n,s,r,o,a,i=gt["status-website"]&&gt["status-website"].logoUrl&&vt(),c=gt["status-website"]&&gt["status-website"].navbar&&function(t){let e,n=gt["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=wt(bt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=w()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=w()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);h(t,e,n)},p(t,r){if(1&r){let o;for(n=gt["status-website"].navbar,o=0;o<n.length;o+=1){const a=bt(t,n,o);s[o]?s[o].p(a,r):(s[o]=wt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){m(s,t),t&&d(e)}}}(e),u=gt["status-website"]&&gt["status-website"].navbarGitHub&&!gt["status-website"].navbar&&function(e){let n,s,r,o=gt.i18n.navGitHub+"";return{c(){n=p("li"),s=p("a"),r=b(o),this.h()},l(t){n=x(t,"LI",{});var e=S(n);s=x(e,"A",{href:!0,class:!0});var a=S(s);r=A(a,o),a.forEach(d),e.forEach(d),this.h()},h(){_(s,"href",`https://github.com/${gt.owner}/${gt.repo}`),_(s,"class","svelte-a08hsz")},m(t,e){h(t,n,e),f(n,s),f(s,r)},p:t,d(t){t&&d(n)}}}();return{c(){n=p("nav"),s=p("div"),i&&i.c(),r=v(),o=p("ul"),c&&c.c(),a=v(),u&&u.c(),this.h()},l(t){n=x(t,"NAV",{class:!0});var e=S(n);s=x(e,"DIV",{class:!0});var l=S(s);i&&i.l(l),r=T(l),o=x(l,"UL",{class:!0});var f=S(o);c&&c.l(f),a=T(f),u&&u.l(f),f.forEach(d),l.forEach(d),e.forEach(d),this.h()},h(){_(o,"class","svelte-a08hsz"),_(s,"class","container svelte-a08hsz"),_(n,"class","svelte-a08hsz")},m(t,e){h(t,n,e),f(n,s),i&&i.m(s,null),f(s,r),f(s,o),c&&c.m(o,null),f(o,a),u&&u.m(o,null)},p(t,[e]){gt["status-website"]&&gt["status-website"].logoUrl&&i.p(t,e),gt["status-website"]&&gt["status-website"].navbar&&c.p(t,e),gt["status-website"]&&gt["status-website"].navbarGitHub&&!gt["status-website"].navbar&&u.p(t,e)},i:t,o:t,d(t){t&&d(n),i&&i.d(),c&&c.d(),u&&u.d()}}}function yt(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class _t extends ht{constructor(t){super(),ft(this,t,yt,$t,a,{segment:0})}}var Et={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function St(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function xt(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function At(t,e){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],u="",l=e||{},f=0;function h(t){var e=Et[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function d(){for(var t="";c.length;)t+=h(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return l[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(t);)s=t.substring(f,r.index),f=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+St(xt(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=At(St(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+xt(r[8])+'" alt="'+xt(r[7])+'">':r[10]?(u=u.replace("<a>",'<a href="'+xt(r[11]||l[s.toLowerCase()])+'">'),n=d()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+At(r[12]||r[15],l)+"</"+a+">":r[16]?n="<code>"+xt(r[16])+"</code>":(r[17]||r[1])&&(n=h(r[17]||"--"))),u+=s,u+=n;return(u+t.substring(f)+d()).replace(/^\n+|\n+$/g,"")}function Tt(t,e,n){const s=t.slice();return s[3]=e[n],s}function Ut(t,e,n){const s=t.slice();return s[3]=e[n],s}function kt(t,e,n){const s=t.slice();return s[8]=e[n],s}function Nt(e){let n;return{c(){n=p("link"),this.h()},l(t){n=x(t,"LINK",{rel:!0,href:!0}),this.h()},h(){_(n,"rel","stylesheet"),_(n,"href",`${gt.path}/themes/${(gt["status-website"]||{}).theme||"light"}.css`)},m(t,e){h(t,n,e)},p:t,d(t){t&&d(n)}}}function Pt(e){let n;return{c(){n=p("link"),this.h()},l(t){n=x(t,"LINK",{rel:!0,href:!0}),this.h()},h(){_(n,"rel","stylesheet"),_(n,"href",(gt["status-website"]||{}).themeUrl)},m(t,e){h(t,n,e)},p:t,d(t){t&&d(n)}}}function It(e){let n,s;return{c(){n=p("script"),this.h()},l(t){n=x(t,"SCRIPT",{src:!0,async:!0,defer:!0}),S(n).forEach(d),this.h()},h(){n.src!==(s=e[8].src)&&_(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){h(t,n,e)},p:t,d(t){t&&d(n)}}}function Lt(e){let n;return{c(){n=p("link"),this.h()},l(t){n=x(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){_(n,"rel",e[3].rel),_(n,"href",e[3].href),_(n,"media",e[3].media)},m(t,e){h(t,n,e)},p:t,d(t){t&&d(n)}}}function Rt(e){let n;return{c(){n=p("meta"),this.h()},l(t){n=x(t,"META",{name:!0,content:!0}),this.h()},h(){_(n,"name",e[3].name),_(n,"content",e[3].content)},m(t,e){h(t,n,e)},p:t,d(t){t&&d(n)}}}function Ct(e){let n,s,r,o,a,u,l,g,b,$,y,E,A,U,k,N,P,I,L=At(gt.i18n.footer.replace(/\$REPO/,`https://github.com/${gt.owner}/${gt.repo}`))+"",O=(gt["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(gt["status-website"]||{}).customHeadHtml+"";return{c(){s=w(),this.h()},l(t){s=w(),this.h()},h(){n=new C(s)},m(t,e){n.m(r,t,e),h(t,s,e)},p:t,d(t){t&&d(s),t&&n.d()}}}();let j=((gt["status-website"]||{}).themeUrl?Pt:Nt)(e),H=(gt["status-website"]||{}).scripts&&function(t){let e,n=(gt["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=It(kt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=w()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=w()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);h(t,e,n)},p(t,r){if(0&r){let o;for(n=(gt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=kt(t,n,o);s[o]?s[o].p(a,r):(s[o]=It(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){m(s,t),t&&d(e)}}}(e),M=(gt["status-website"]||{}).links&&function(t){let e,n=(gt["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=Lt(Ut(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=w()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=w()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);h(t,e,n)},p(t,r){if(0&r){let o;for(n=(gt["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Ut(t,n,o);s[o]?s[o].p(a,r):(s[o]=Lt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){m(s,t),t&&d(e)}}}(e),D=(gt["status-website"]||{}).metaTags&&function(t){let e,n=(gt["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=Rt(Tt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=w()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=w()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);h(t,e,n)},p(t,r){if(0&r){let o;for(n=(gt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Tt(t,n,o);s[o]?s[o].p(a,r):(s[o]=Rt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){m(s,t),t&&d(e)}}}(e),q=gt["status-website"].css&&function(e){let n,s,r=`<style>${gt["status-website"].css}</style>`;return{c(){s=w(),this.h()},l(t){s=w(),this.h()},h(){n=new C(s)},m(t,e){n.m(r,t,e),h(t,s,e)},p:t,d(t){t&&d(s),t&&n.d()}}}(),G=gt["status-website"].js&&function(e){let n,s,r=`<script>${gt["status-website"].js}<\/script>`;return{c(){s=w(),this.h()},l(t){s=w(),this.h()},h(){n=new C(s)},m(t,e){n.m(r,t,e),h(t,s,e)},p:t,d(t){t&&d(s),t&&n.d()}}}(),B=(gt["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(gt["status-website"]||{}).customBodyHtml+"";return{c(){s=w(),this.h()},l(t){s=w(),this.h()},h(){n=new C(s)},m(t,e){n.m(r,t,e),h(t,s,e)},p:t,d(t){t&&d(s),t&&n.d()}}}();E=new _t({props:{segment:e[0]}});const V=e[2].default,z=function(t,e,n,s){if(t){const r=i(t,e,n,s);return t[0](r)}}(V,e,e[1],null);return{c(){O&&O.c(),n=w(),j.c(),s=p("link"),r=p("link"),o=p("link"),H&&H.c(),a=w(),M&&M.c(),u=w(),D&&D.c(),l=w(),q&&q.c(),g=w(),G&&G.c(),b=w(),$=v(),B&&B.c(),y=v(),at(E.$$.fragment),A=v(),U=p("main"),z&&z.c(),k=v(),N=p("footer"),P=p("p"),this.h()},l(t){const e=R('[data-svelte="svelte-ri9y7q"]',document.head);O&&O.l(e),n=w(),j.l(e),s=x(e,"LINK",{rel:!0,href:!0}),r=x(e,"LINK",{rel:!0,type:!0,href:!0}),o=x(e,"LINK",{rel:!0,type:!0,href:!0}),H&&H.l(e),a=w(),M&&M.l(e),u=w(),D&&D.l(e),l=w(),q&&q.l(e),g=w(),G&&G.l(e),b=w(),e.forEach(d),$=T(t),B&&B.l(t),y=T(t),it(E.$$.fragment,t),A=T(t),U=x(t,"MAIN",{class:!0});var i=S(U);z&&z.l(i),i.forEach(d),k=T(t),N=x(t,"FOOTER",{class:!0});var c=S(N);P=x(c,"P",{}),S(P).forEach(d),c.forEach(d),this.h()},h(){_(s,"rel","stylesheet"),_(s,"href",`${gt.path}/global.css`),_(r,"rel","icon"),_(r,"type","image/svg"),_(r,"href",(gt["status-website"]||{}).faviconSvg||(gt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),_(o,"rel","icon"),_(o,"type","image/png"),_(o,"href",(gt["status-website"]||{}).favicon||"/logo-192.png"),_(U,"class","container"),_(N,"class","svelte-jbr799")},m(t,e){O&&O.m(document.head,null),f(document.head,n),j.m(document.head,null),f(document.head,s),f(document.head,r),f(document.head,o),H&&H.m(document.head,null),f(document.head,a),M&&M.m(document.head,null),f(document.head,u),D&&D.m(document.head,null),f(document.head,l),q&&q.m(document.head,null),f(document.head,g),G&&G.m(document.head,null),f(document.head,b),h(t,$,e),B&&B.m(t,e),h(t,y,e),ct(E,t,e),h(t,A,e),h(t,U,e),z&&z.m(U,null),h(t,k,e),h(t,N,e),f(N,P),P.innerHTML=L,I=!0},p(t,[e]){(gt["status-website"]||{}).customHeadHtml&&O.p(t,e),j.p(t,e),(gt["status-website"]||{}).scripts&&H.p(t,e),(gt["status-website"]||{}).links&&M.p(t,e),(gt["status-website"]||{}).metaTags&&D.p(t,e),gt["status-website"].css&&q.p(t,e),gt["status-website"].js&&G.p(t,e),(gt["status-website"]||{}).customBodyHtml&&B.p(t,e);const n={};1&e&&(n.segment=t[0]),E.$set(n),z&&z.p&&(!I||2&e)&&c(z,V,t,t[1],e,null,null)},i(t){I||(nt(E.$$.fragment,t),nt(z,t),I=!0)},o(t){st(E.$$.fragment,t),st(z,t),I=!1},d(t){O&&O.d(t),d(n),j.d(t),d(s),d(r),d(o),H&&H.d(t),d(a),M&&M.d(t),d(u),D&&D.d(t),d(l),q&&q.d(t),d(g),G&&G.d(t),d(b),t&&d($),B&&B.d(t),t&&d(y),ut(E,t),t&&d(A),t&&d(U),z&&z.d(t),t&&d(k),t&&d(N)}}}function Ot(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class jt extends ht{constructor(t){super(),ft(this,t,Ot,Ct,a,{segment:0})}}function Ht(t){let e,n,s=t[1].stack+"";return{c(){e=p("pre"),n=b(s)},l(t){e=x(t,"PRE",{});var r=S(e);n=A(r,s),r.forEach(d)},m(t,s){h(t,e,s),f(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&U(n,s)},d(t){t&&d(e)}}}function Mt(e){let n,s,r,o,a,i,c,u,l,m=e[1].message+"";document.title=n=e[0];let g=e[2]&&e[1].stack&&Ht(e);return{c(){s=v(),r=p("h1"),o=b(e[0]),a=v(),i=p("p"),c=b(m),u=v(),g&&g.c(),l=w(),this.h()},l(t){R('[data-svelte="svelte-1moakz"]',document.head).forEach(d),s=T(t),r=x(t,"H1",{class:!0});var n=S(r);o=A(n,e[0]),n.forEach(d),a=T(t),i=x(t,"P",{class:!0});var f=S(i);c=A(f,m),f.forEach(d),u=T(t),g&&g.l(t),l=w(),this.h()},h(){_(r,"class","svelte-17w3omn"),_(i,"class","svelte-17w3omn")},m(t,e){h(t,s,e),h(t,r,e),f(r,o),h(t,a,e),h(t,i,e),f(i,c),h(t,u,e),g&&g.m(t,e),h(t,l,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&U(o,t[0]),2&e&&m!==(m=t[1].message+"")&&U(c,m),t[2]&&t[1].stack?g?g.p(t,e):(g=Ht(t),g.c(),g.m(l.parentNode,l)):g&&(g.d(1),g=null)},i:t,o:t,d(t){t&&d(s),t&&d(r),t&&d(a),t&&d(i),t&&d(u),g&&g.d(t),t&&d(l)}}}function Dt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class qt extends ht{constructor(t){super(),ft(this,t,Dt,Mt,a,{status:0,error:1})}}function Gt(t){let n,s,r;const o=[t[4].props];var a=t[4].component;function i(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(i())),{c(){n&&at(n.$$.fragment),s=w()},l(t){n&&it(n.$$.fragment,t),s=w()},m(t,e){n&&ct(n,t,e),h(t,s,e),r=!0},p(t,e){const r=16&e?rt(o,[ot(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){tt();const t=n;st(t.$$.fragment,1,0,(()=>{ut(t,1)})),et()}a?(n=new a(i()),at(n.$$.fragment),nt(n.$$.fragment,1),ct(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(t){r||(n&&nt(n.$$.fragment,t),r=!0)},o(t){n&&st(n.$$.fragment,t),r=!1},d(t){t&&d(s),n&&ut(n,t)}}}function Bt(t){let e,n;return e=new qt({props:{error:t[0],status:t[1]}}),{c(){at(e.$$.fragment)},l(t){it(e.$$.fragment,t)},m(t,s){ct(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){st(e.$$.fragment,t),n=!1},d(t){ut(e,t)}}}function Vt(t){let e,n,s,r;const o=[Bt,Gt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),s=w()},l(t){n.l(t),s=w()},m(t,n){a[e].m(t,n),h(t,s,n),r=!0},p(t,r){let c=e;e=i(t),e===c?a[e].p(t,r):(tt(),st(a[c],1,1,(()=>{a[c]=null})),et(),n=a[e],n?n.p(t,r):(n=a[e]=o[e](t),n.c()),nt(n,1),n.m(s.parentNode,s))},i(t){r||(nt(n),r=!0)},o(t){st(n),r=!1},d(t){a[e].d(t),t&&d(s)}}}function zt(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Vt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new jt({props:o}),{c(){at(n.$$.fragment)},l(t){it(n.$$.fragment,t)},m(t,e){ct(n,t,e),s=!0},p(t,[e]){const s=12&e?rt(r,[4&e&&{segment:t[2][0]},8&e&&ot(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(nt(n.$$.fragment,t),s=!0)},o(t){st(n.$$.fragment,t),s=!1},d(t){ut(n,t)}}}function Jt(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:u}=e;var l,f;return M(u),l=pt,f=s,j().$$.context.set(l,f),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,u=t.notify)},[r,o,a,i,c,s,u]}class Kt extends ht{constructor(t){super(),ft(this,t,Jt,zt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Ft=[],Wt=[{js:()=>Promise.all([import("./index.21cbeab4.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.7607224f.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].2409a01d.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].50e7d824.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-49f387e2.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.b1f59ee1.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],Yt=(Qt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:Qt(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:Qt(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var Qt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Xt(t,e,n,s){return new(n||(n=Promise))((function(r,o){function a(t){try{c(s.next(t))}catch(t){o(t)}}function i(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,i)}c((s=s.apply(t,e||[])).next())}))}function Zt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let te,ee=1;const ne="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},se={};let re,oe;function ae(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function ie(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(re))return null;let e=t.pathname.slice(re.length);if(""===e&&(e="/"),!Ft.some((t=>t.test(e))))for(let n=0;n<Yt.length;n+=1){const s=Yt[n],r=s.pattern.exec(e);if(r){const n=ae(t.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:s,match:r,page:i}}}}function ce(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Zt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=ie(r);if(o){fe(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),ne.pushState({id:te},"",r.href)}}function ue(){return{x:pageXOffset,y:pageYOffset}}function le(t){if(se[te]=ue(),t.state){const e=ie(new URL(location.href));e?fe(e,t.state.id):location.href=location.href}else!function(t){ee=t}(ee+1),function(t){te=t}(ee),ne.replaceState({id:te},"",location.href)}function fe(t,e,n,s){return Xt(this,void 0,void 0,(function*(){const r=!!e;if(r)te=e;else{const t=ue();se[te]=t,te=e=++ee,se[te]=n?t:{x:0,y:0}}if(yield oe(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=se[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),se[te]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function he(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let de,me=null;function pe(t){const e=Zt(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=ie(new URL(t,he(document)));if(e)me&&t===me.href||(me={href:t,promise:Ie(e)}),me.promise}(e.href)}function ge(t){clearTimeout(de),de=setTimeout((()=>{pe(t)}),20)}function be(t,e={noscroll:!1,replaceState:!1}){const n=ie(new URL(t,he(document)));if(n){const s=fe(n,null,e.noscroll);return ne[e.replaceState?"replaceState":"pushState"]({id:te},"",t),s}return location.href=t,new Promise((()=>{}))}const ve="undefined"!=typeof __SAPPER__&&__SAPPER__;let we,$e,ye,_e=!1,Ee=[],Se="{}";const xe={page:function(t){const e=mt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:mt(null),session:mt(ve&&ve.session)};let Ae,Te,Ue;function ke(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Ne(t){return Xt(this,void 0,void 0,(function*(){we&&xe.preloading.set(!0);const e=function(t){return me&&me.href===t.href?me.promise:Ie(t)}(t),n=$e={},s=yield e,{redirect:r}=s;if(n===$e)if(r)yield be(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield Pe(n,e,ke(e,t.page))}}))}function Pe(t,e,n){return Xt(this,void 0,void 0,(function*(){xe.page.set(n),xe.preloading.set(!1),we?we.$set(e):(e.stores={page:{subscribe:xe.page.subscribe},preloading:{subscribe:xe.preloading.subscribe},session:xe.session},e.level0={props:yield ye},e.notify=xe.page.notify,we=new Kt({target:Ue,props:e,hydrate:!0})),Ee=t,Se=JSON.stringify(n.query),_e=!0,Te=!1}))}function Ie(t){return Xt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!ye){const t=()=>({});ye=ve.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ae)}let i,c=1;try{const r=JSON.stringify(n.query),u=e.pattern.exec(n.path);let l=!1;i=yield Promise.all(e.parts.map(((e,i)=>Xt(this,void 0,void 0,(function*(){const f=s[i];if(function(t,e,n,s){if(s!==Se)return!0;const r=Ee[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,f,u,r)&&(l=!0),o.segments[c]=s[i+1],!e)return{segment:f};const h=c++;let d;if(Te||l||!Ee[i]||Ee[i].part!==e.i){l=!1;const{default:s,preload:r}=yield Wt[e.i].js();let o;o=_e||!ve.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ae):{}:ve.preloaded[i+1],d={component:s,props:o,segment:f,match:u,part:e.i}}else d=Ee[i];return o[`level${h}`]=d})))))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var Le,Re,Ce;xe.session.subscribe((t=>Xt(void 0,void 0,void 0,(function*(){if(Ae=t,!_e)return;Te=!0;const e=ie(new URL(location.href)),n=$e={},{redirect:s,props:r,branch:o}=yield Ie(e);n===$e&&(s?yield be(s.location,{replaceState:!0}):yield Pe(o,r,ke(r,e.page)))})))),Le={target:document.querySelector("#sapper")},Re=Le.target,Ue=Re,Ce=ve.baseUrl,re=Ce,oe=Ne,"scrollRestoration"in ne&&(ne.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ne.scrollRestoration="auto"})),addEventListener("load",(()=>{ne.scrollRestoration="manual"})),addEventListener("click",ce),addEventListener("popstate",le),addEventListener("touchstart",pe),addEventListener("mousemove",ge),ve.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:a}=ve;ye||(ye=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:ye},level1:{props:{status:o,error:a},component:qt},segments:r},c=ae(n);Pe([],i,{host:t,path:e,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;ne.replaceState({id:ee},"",e);const n=ie(new URL(location.href));if(n)return fe(n,ee,!0,t)}));export{ut as A,$ as B,r as C,G as D,l as E,R as F,At as G,C as H,g as I,be as J,k as K,y as L,e as M,E as N,rt as O,M as P,D as Q,u as R,ht as S,ot as T,K as U,L as V,S as a,A as b,x as c,d,p as e,_ as f,h as g,f as h,ft as i,v as j,T as k,tt as l,st as m,t as n,et as o,nt as p,H as q,gt as r,a as s,b as t,U as u,w as v,m as w,at as x,it as y,ct as z};

import __inject_styles from './inject_styles.5607aec6.js';