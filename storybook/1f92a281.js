System.register(["./ee0d0219.js"],(function(t){"use strict";var n,e,r,i,s,a,o,c;return{setters:[function(t){n=t._,e=t.a,r=t.i,i=t.b,s=t.x,a=t.s,o=t.c,c=t.d}],execute:function(){var d,p,u={url:new URL("./elements/post-card/lib/PostCardPostmark.js",document.baseURI).href},g=t("PostCardPostmark",function(t){function a(){var t;return o(this,a),(t=c(this,a)).image=new URL("./assets/postcard-postmark.svg",u.url).href,t.alt="",t.locations="",t}return n(a,t),e(a,[{key:"render",value:function(){return s(d||(d=i(['\n      <div>\n        <img loading="lazy" src="','" alt="','" />\n        <p>',"</p>\n      </div>\n    "])),this.image,this.alt,this.locations)}}],[{key:"tag",get:function(){return"post-card-postmark"}},{key:"properties",get:function(){return{image:{type:String},alt:{type:String},locations:{type:String}}}},{key:"styles",get:function(){return[r(p||(p=i(['\n        :host {\n          --post-card-img-width: 250px;\n          font-family: "Bebas Neue", sans-serif;\n        }\n        div {\n          width: var(--post-card-img-width);\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          opacity: 0.8;\n        }\n        img {\n          width: var(--post-card-img-width);\n          height: calc(var(--post-card-img-width) * (1 / 3));\n          filter: invert(62%) sepia(0%) saturate(329%) hue-rotate(162deg)\n            brightness(98%) contrast(95%); /* created using: https://codepen.io/sosuke/pen/Pjoqqp */\n        }\n        p {\n          width: var(--post-card-img-width);\n          text-transform: uppercase;\n          text-align: center;\n          color: black;\n          margin: 0px;\n          font-size: 16px;\n          letter-spacing: 2px;\n          text-align: center;\n          overflow: hidden;\n        }\n      '])))]}}])}(a));customElements.define(g.tag,g)}}}));
