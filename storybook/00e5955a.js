System.register(["./ee0d0219.js"],(function(e){"use strict";var n,t,i,r,o,a,s,d,c,l,p,u,f,h;return{setters:[function(e){n=e._,t=e.a,i=e.i,r=e.b,o=e.f,a=e.g,s=e.L,d=e.x,c=e.s,l=e.c,p=e.d,u=e.o,f=e.t,h=e.N}],execute:function(){var _,k,v,y,b=e("H5pWrappedElement",function(e){function c(){var e;return l(this,c),(e=p(this,c)).src="",e.__disposer=u((function(){e.__editMode=f(h.editMode)})),e}return n(c,e),t(c,[{key:"disconnectedCallback",value:function(){o(a(c.prototype),"disconnectedCallback",this).call(this),this.__disposer()}},{key:"firstUpdated",value:function(){var e=this;this._observer=new s(this,(function(n){n.addedNodes.forEach((function(n){var t="IFRAME"===n.nodeName?n:e.querySelector("iframe");t&&void 0!==t.src&&(e.__editLink=t.src.replace("entity_iframe/","")+"/edit")}))}))}},{key:"render",value:function(){return d(_||(_=r(['\n      <div part="container" class="','">\n        ',"\n      </div>\n    "])),(this.__editMode,"editing"),this.__editMode?d(k||(k=r(['\n              <slot></slot>\n              <div part="edit-screen">\n                <div part="source-link">\n                  <a part="anchor" href="','" target="_blank"\n                    >Edit H5P Source</a\n                  >\n                </div>\n              </div>\n            '])),this.__editLink):d(v||(v=r(["\n              <iframe-loader><slot></slot></iframe-loader>\n            "]))))}}],[{key:"properties",get:function(){return{__editLink:{type:String,attribute:!1},__editMode:{type:Boolean,attribute:!1}}}},{key:"styles",get:function(){return i(y||(y=r(['\n      :host {\n        display: block;\n      }\n      :host [part="container"] {\n        display: block;\n        position: relative;\n      }\n      .editing[part="container"] {\n        min-height: 100px;\n      }\n      :host [part="edit-screen"] {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: flex-end;\n        justify-content: flex-end;\n      }\n      :host [part="source-link"] a {\n        background: black;\n        color: white;\n        padding: 1em;\n      }\n      :host [part="anchor"] {\n        display: block;\n      }\n    '])))}}])}(c));customElements.define("h5p-wrapped-element",b)}}}));
