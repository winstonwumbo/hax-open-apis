System.register(["./ee0d0219.js"],(function(e,t){"use strict";var n,i,r,o,a,l,s,u,c,d,h;return{setters:[function(e){n=e.p,i=e._,r=e.a,o=e.f,a=e.g,l=e.K,s=e.c,u=e.d,c=e.j,d=e.k,h=e.O}],execute:function(){var p,m,g=new AbortController;function v(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"*",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:":not(:defined)";clearTimeout(p),p=setTimeout((function(){var r=t+"[laser-loader]"+i;e&&(r=t+i),n(document.body.querySelectorAll("replace-tag,"+r)).map((function(t){e&&t.setAttribute("laser-loader","laser-loader");var n=t.getBoundingClientRect();t.style.setProperty("--laserEdgeAni-width",n.width+"px"),t.style.setProperty("--laserEdgeAni-innerWidth",n.width-2+"px"),t.style.setProperty("--laserEdgeAni-innerHeight",n.height-2+"px"),t.style.setProperty("--laserEdgeAni-height",n.height+"px"),customElements.whenDefined(t.localName).then((function(e){"replace-tag"!=t.localName&&(t.setAttribute("loaded","loaded"),t.removeAttribute("laser-loader"),t.style.setProperty("--laserEdgeAni-width",null),t.style.setProperty("--laserEdgeAni-innerWidth",null),t.style.setProperty("--laserEdgeAni-height",null),t.style.setProperty("--laserEdgeAni-innerHeight",null),setTimeout((function(){t.removeAttribute("popup-loader"),setTimeout((function(){t.removeAttribute("loaded")}),1e3)}),1e3))}))}))}),10)}globalThis.addEventListener("resize",(function(){clearTimeout(m),m=setTimeout((function(){globalThis.document.body.querySelectorAll("replace-tag,:not(:defined)").length>0?v():g.abort()}),100)}),{signal:g.signal});var b=e("ReplaceTag",function(e){function t(){var e;if(s(this,t),(e=u(this,t)).getAttribute("importing-text")&&(e.importingText=e.getAttribute("importing-text")),e.exists=!0,customElements.get(e.getAttribute("with"))){var n={};if(null!=e.getAttribute("import-only"))e.exists=!1,setTimeout((function(){e.remove()}),0);else{for(var i=0,r=e.attributes,o=r.length;i<o;i++)n[r[i].nodeName]=r[i].nodeValue;var a=document.createElement(n.with);for(var i in n)if(null!=n[i])try{a.setAttribute(i,n[i])}catch(e){console.warn("Invalid Attribute Name detected: "+i)}a.removeAttribute("laser-loader"),a.removeAttribute("with"),a.removeAttribute("import-method"),a.removeAttribute("importing-text"),a.innerHTML=e.innerHTML,e.replaceWith(a)}}else customElements.whenDefined(e.getAttribute("with")).then((function(t){var n={};if(null!=e.getAttribute("import-only"))e.exists=!1,setTimeout((function(){e.remove()}),0);else{for(var i=0,r=e.attributes,o=r.length;i<o;i++)n[r[i].nodeName]=r[i].nodeValue;var a=document.createElement(n.with);for(var i in a.setAttribute("popup-loader","popup-loader"),n)if(null!=n[i])try{a.setAttribute(i,n[i])}catch(e){console.warn("Invalid Attribute Name detected: "+i)}a.removeAttribute("laser-loader"),a.innerHTML=e.innerHTML,e.replaceWith(a),setTimeout((function(){a.removeAttribute("popup-loader"),a.removeAttribute("with"),a.removeAttribute("import-method"),a.removeAttribute("importing-text"),a.removeAttribute("laser-loader"),a.style.setProperty("--laserEdgeAni-width",null),a.style.setProperty("--laserEdgeAni-innerWidth",null),a.style.setProperty("--laserEdgeAni-height",null),a.style.setProperty("--laserEdgeAni-innerHeight",null)}),250)}setTimeout((function(){document.body.querySelectorAll('replace-tag[with="'+n.with+'"]').forEach((function(e){e.runReplacement()}))}),0)}));return e.exists&&(e.template=document.createElement("template"),e.attachShadow({mode:"open"})),e}return i(t,e),r(t,[{key:"html",get:function(){return'\n    <style>\n    :host {\n      display: block;\n      opacity: .3;\n      transition: .3s linear opacity,.3s linear outline,.3s linear visibility,.3s linear display;\n    }\n    :host([import]) {\n      opacity: .1 !important;\n      background-color: transparent !important;\n      color: transparent !important;\n      padding: 0 !important;\n      margin: 0 !important;\n      font-size: 2px !important;\n      line-height: 2px !important;\n      height:2px;\n    }\n    :host(:not([import-method="click"])) {\n      background-color: #EEEEEE;\n      color: #444444;\n      font-size: 16px;\n      opacity: .8;\n      margin: 16px;\n      padding: 16px;\n    }\n    :host(:not([import-method="click"]):hover) {\n      opacity: 1 !important;\n      outline: 1px solid black;\n      cursor: pointer;\n    }\n    :host([hidden]) {\n      display: none;\n    }\n    </style>\n<div>'.concat(this.importingText,"</div>")}},{key:"render",value:function(){this.exists&&(this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0)))}}],[{key:"tag",get:function(){return"replace-tag"}}])}(function(e){function n(){return s(this,n),u(this,n)}return i(n,e),r(n,[{key:"connectedCallback",value:function(){o(a(n.prototype),"connectedCallback",this)&&o(a(n.prototype),"connectedCallback",this).call(this),this.evaluateReplaceMethod()}},{key:"performanceBasedReplacement",value:function(){this.setAttribute("laser-loader","laser-loader"),this.importingText||(this.importingText="Loading..."),this.render(),this.runReplacement()}},{key:"evaluateReplaceMethod",value:(p=c(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(),e.next=3,h.badDevice();case 3:t=e.sent,"view"!=this.getAttribute("import-method")&&null==this.getAttribute("import-only")&&t&&(this.importingText||(this.importingText="Click to load"),this.addEventListener("click",this.performanceBasedReplacement)),t&&null==this.getAttribute("import-only")&&"view"!=this.getAttribute("import-method")||(this.setAttribute("laser-loader","laser-loader"),this.importingText||(this.importingText="Loading..."),this.intersectionObserver||(this.intersectionObserver=new IntersectionObserver(this.handleIntersectionCallback.bind(this),{rootMargin:"0px",threshold:[0,.25,.5,.75,1],delay:150}),this.intersectionObserver.observe(this))),this.render();case 7:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)})},{key:"handleIntersectionCallback",value:function(e){var t,n=l(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;Number(i.intersectionRatio).toFixed(2)>=.25&&(this.intersectionObserver&&this.intersectionObserver.disconnect(),this.intersectionObserver=null,this.runReplacement())}}catch(e){n.e(e)}finally{n.f()}}},{key:"runReplacement",value:function(){var e=this;this.getAttribute("with")?t.import("./ab4c070d.js").then((function(){window.WCAutoload.process().then((function(){window.WCAutoload.requestAvailability().registry.loadDefinition(e.getAttribute("with"))}))})):console.warn("replace-tag requires use of with attribute for what to upgrade to")}}]);var p}(HTMLElement)));customElements.define(b.tag,b)}}}));