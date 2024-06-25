System.register(["./ee0d0219.js"],(function(t){"use strict";var e,n,i,l,o,r,a,u,c,s,d,f,p,b;return{setters:[function(t){e=t._,n=t.a,i=t.p,l=t.f,o=t.g,r=t.a_,a=t.i,u=t.b,c=t.e,s=t.x,d=t.X,f=t.aZ,p=t.c,b=t.d}],execute:function(){var g,h,y=t("EditableTableFilter",function(t){function d(){var t;return p(this,d),(t=b(this,d)).columnIndex=null,t.filtered=!1,t.text="",t.toggles=!0,t.icon="editable-table:filter",t.label="Toggle filter.",t.tooltip="Toggle filter for column.",t.describedby="cell",t}return e(d,t),n(d,[{key:"render",value:function(){return s(g||(g=u(['<div><slot id="cell"></slot>',"</div> "])),l(o(d.prototype),"render",this).call(this))}},{key:"updated",value:function(t){var e=this;l(o(d.prototype),"updated",this)&&l(o(d.prototype),"updated",this).call(this,t),t.forEach((function(t,n){"columnIndex"==n&&(e.tooltip="Toggle Column ".concat(e.columnIndex," filter."))}))}},{key:"_handleClick",value:function(t){this.dispatchEvent(new CustomEvent("toggle-filter",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}}],[{key:"styles",get:function(){return[].concat(i(l(o(d),"styles",this)||[]),i(r),[a(h||(h=u(["\n        :host {\n          display: block;\n          font-family: inherit;\n          font-size: inherit;\n        }\n        :host > div {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          width: 100%;\n        }\n        button {\n          flex: 0 0 auto !important;\n          width: auto !important;\n        }\n        #cell {\n          flex: 1 1 auto !important;\n          display: inline-block;\n          padding: var(--ddd-spacing-1);\n        }\n      "])))])}},{key:"properties",get:function(){return c(c({},l(o(d),"properties",this)),{},{columnIndex:{type:Number,attribute:"column-index"},text:{type:String,attribute:"text"}})}},{key:"tag",get:function(){return"editable-table-filter"}}])}(d(f)));customElements.define(y.tag,y)}}}));
