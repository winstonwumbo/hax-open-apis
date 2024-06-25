System.register(["./ee0d0219.js"],(function(e){"use strict";var n,t,s,i,o,r,a,l,c,d,u,p,h,g;return{setters:[function(e){n=e._,t=e.a,s=e.e,i=e.f,o=e.g,r=e.i,a=e.b,l=e.h,c=e.x,d=e.S,u=e.c,p=e.d,h=e.j,g=e.k}],execute:function(){var m,y,f,w,v=e("AppHaxSiteLogin",function(e){function d(){var e;return u(this,d),(e=p(this,d)).windowControllers=new AbortController,e.username="",e.password="",e.errorMSG="Enter User name",e.hidePassword=!0,e.hasPass=!1,e}return n(d,e),t(d,[{key:"firstUpdated",value:function(){var e=this;i(o(d.prototype),"firstUpdated",this).call(this),setTimeout((function(){e.shadowRoot.querySelector("input").focus()}),0)}},{key:"checkUsername",value:function(){var e=this,n=this.shadowRoot.querySelector("#username").value;this.hidePassword=!1,this.errorMSG="",this.username=n,l.appEl.playSound("click2"),setTimeout((function(){e.shadowRoot.querySelector("input").focus()}),0)}},{key:"checkPassword",value:(v=h(g().mark((function e(){var n;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.appEl.playSound("click2"),n=this.shadowRoot.querySelector("#password").value,globalThis.dispatchEvent(new CustomEvent("jwt-login-login",{composed:!0,bubbles:!0,cancelable:!1,detail:{username:this.username,password:n}}));case 3:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)})},{key:"reset",value:function(){this.errorMSG="",this.username="",this.hasPass=!1,this.hidePassword=!0}},{key:"nameChange",value:function(){this.username=this.shadowRoot.querySelector("#username").value}},{key:"connectedCallback",value:function(){i(o(d.prototype),"connectedCallback",this).call(this),globalThis.addEventListener("jwt-logged-in",this._jwtLoggedIn.bind(this),{signal:this.windowControllers.signal}),globalThis.addEventListener("jwt-login-login-failed",this._jwtLoginFailed.bind(this),{signal:this.windowControllers.signal})}},{key:"disconnectedCallback",value:function(){this.windowControllers.abort(),i(o(d.prototype),"disconnectedCallback",this).call(this)}},{key:"_jwtLoginFailed",value:function(e){this.hidePassword=!0,this.errorMSG="Invalid Username or Password",l.appEl.playSound("error")}},{key:"_jwtLoggedIn",value:function(e){e.detail&&(l.user={name:this.username},l.appEl.playSound("success"),this.dispatchEvent(new CustomEvent("simple-modal-hide",{bubbles:!0,cancelable:!0,detail:{}})),l.toast("Welcome ".concat(this.username,"! Let's go!"),5e3,{hat:"construction"}),l.appEl.reset())}},{key:"passChange",value:function(e){var n=this.shadowRoot.querySelector("#password").value;this.hasPass=!!n}},{key:"toggleViewPass",value:function(e){var n=this.shadowRoot.querySelector("#password"),t="password"===n.getAttribute("type")?"text":"password";n.setAttribute("type",t),e.target.icon="text"===t?"lrn:visible":"lrn:view-off"}},{key:"render",value:function(){return c(m||(m=a(['\n      <rpg-character seed="','"></rpg-character>\n      <p id="errorText">','</p>\n      <div id="inputcontainer">\n        ','\n        <div class="external">\n          <slot name="externalproviders"></slot>\n        </div>\n      </div>\n    '])),this.username,this.errorMSG,this.hidePassword?c(y||(y=a(['<input\n                id="username"\n                type="text"\n                placeholder="user name"\n                aria-label="user name"\n                @input="','"\n              />\n              <button\n                ?disabled="','"\n                @click=',"\n              >\n                Next &gt;\n              </button>"])),this.nameChange,!this.username,this.checkUsername):c(f||(f=a(['<div class="notyou">\n                Hey ',"! <a @click=",'>not you?</a>\n              </div>\n              <input\n                id="password"\n                type="password"\n                placeholder="password"\n                @input="','"\n              />\n              <simple-icon-button-lite\n                icon="lrn:view-off"\n                tabindex="-1"\n                title="Toggle password display"\n                @click="','"\n                class="visibility-icon"\n              ></simple-icon-button-lite>\n              <button ?disabled="','" @click=',">\n                Login\n              </button>"])),this.username,this.reset,this.passChange,this.toggleViewPass,!this.hasPass,this.checkPassword))}}],[{key:"tag",get:function(){return"app-hax-site-login"}},{key:"properties",get:function(){return s(s({},i(o(d),"properties",this)),{},{username:{type:String},password:{type:String},errorMSG:{type:String},hidePassword:{type:Boolean},hasPass:{type:Boolean}})}},{key:"styles",get:function(){return[i(o(d),"styles",this),r(w||(w=a(['\n        :host {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n        }\n        #inputcontainer {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n        }\n        a {\n          color: red;\n        }\n\n        // This does not work\n        #errorText > p {\n          visibility: hidden;\n          background-color: lightblue;\n          color: red;\n          font-weight: bold;\n        }\n        rpg-character {\n          display: block;\n          margin: 0px;\n        }\n        .external {\n          text-align: center;\n        }\n        input {\n          font-family: "Press Start 2P", sans-serif;\n          font-size: 28px;\n          padding: 8px;\n          border: 4px solid black;\n          border-radius: 8px;\n          width: 75%;\n        }\n        button {\n          font-family: "Press Start 2P", sans-serif;\n          font-size: 30px;\n          padding: 8px;\n          border: 4px solid black;\n          border-radius: 8px;\n          min-width: 50%;\n          margin: 16px;\n        }\n        button:focus,\n        button:hover {\n          background-color: var(--simple-colors-default-theme-green-8);\n          color: var(--simple-colors-default-theme-grey-1);\n          outline: 2px solid var(--simple-colors-default-theme-grey-1);\n          cursor: pointer;\n        }\n        .notyou {\n          padding: 8px;\n        }\n        .visibility-icon {\n          color: var(--simple-colors-default-theme-grey-12);\n          background-color: var(--simple-colors-default-theme-grey-3);\n          border: 2px solid var(--simple-colors-default-theme-grey-12);\n          position: relative;\n          margin-top: -44px;\n          margin-bottom: 20px;\n          margin-left: 70%;\n          z-index: 1;\n          padding: 2px;\n          --simple-icon-width: 26px;\n          --simple-icon-height: 26px;\n        }\n      '])))]}}]);var v}(d));customElements.define(v.tag,v)}}}));
