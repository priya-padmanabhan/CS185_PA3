(this.webpackJsonpcs185=this.webpackJsonpcs185||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(8),r=c.n(s),l=(c(13),c(2)),a=c(3),o=c(6),j=c(5),d=c(4),b=(c(14),c(0)),h=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{children:" Hi! I'm Milo."}),Object(b.jsx)("h3",{children:" I'm a five month old Golden Retriever puppy. "}),Object(b.jsx)("br",{}),Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{children:" Send me a message!"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"msg"}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:" Do you like dogs or cats more?"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{name:"radio",type:"radio"}),Object(b.jsx)("label",{children:"Dogs"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{name:"radio",type:"radio"}),Object(b.jsx)("label",{children:"Cats"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"button",value:"Submit"})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{class:"indexgrid",children:[Object(b.jsxs)("div",{class:"indexgrid-item",children:[Object(b.jsx)("p",{class:"tab",children:"Some fun facts about me are: "}),Object(b.jsx)("p",{class:"tab",children:"1. I was born on September 10, 2020"}),Object(b.jsx)("p",{class:"tab",children:"2. I've lost 75% of my puppy teeth!"}),Object(b.jsx)("p",{class:"tab",children:"3. I weigh about a half of my full-grown weight."})]}),Object(b.jsxs)("div",{class:"indexgrid-item",children:[Object(b.jsx)("p",{class:"tab",children:"Some of my favorite things to do are: "}),Object(b.jsx)("p",{class:"tab",children:"1. Eat! "}),Object(b.jsx)("p",{class:"tab",children:"2. Bite on shoes "}),Object(b.jsx)("p",{class:"tab",children:"3. Jump on the couch when no one is looking "})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})})}}]),c}(n.Component),u=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;return Object(l.a)(this,c),(e=t.call(this)).clickHandler=e.clickHandler.bind(Object(o.a)(e)),e}return Object(a.a)(c,[{key:"clickHandler",value:function(e){e.stopPropagation()}},{key:"show",value:function(e){document.getElementById("overlay").style.display="block",document.getElementById("obj").src=e.target.src}},{key:"hide",value:function(){document.getElementById("overlay").style.display="none"}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"main",children:Object(b.jsxs)("div",{className:"grid",children:[Object(b.jsx)("div",{className:"grid-item",children:Object(b.jsx)("img",{onClick:this.show,src:"IMG_9367.jpeg"})}),Object(b.jsx)("div",{className:"grid-item",children:Object(b.jsx)("img",{onClick:this.show,src:"IMG_9979.jpeg"})}),Object(b.jsx)("div",{className:"grid-item",children:Object(b.jsx)("img",{onClick:this.show,src:"IMG_9446.jpeg"})}),Object(b.jsx)("div",{className:"grid-item",children:Object(b.jsx)("img",{onClick:this.show,src:"IMG_9649.jpeg"})}),Object(b.jsx)("div",{className:"grid-item",children:Object(b.jsx)("img",{onClick:this.show,src:"IMG_9790.jpeg"})}),Object(b.jsx)("div",{className:"grid-item",children:Object(b.jsx)("img",{onClick:this.show,src:"IMG_0048.jpeg"})}),Object(b.jsx)("div",{className:"grid-item",children:Object(b.jsx)("img",{onClick:this.show,src:"IMG_0393.jpeg"})}),Object(b.jsx)("div",{className:"grid-item",children:Object(b.jsx)("img",{onClick:this.show,src:"IMG_0653.jpeg"})})]})}),Object(b.jsx)("div",{id:"overlay",className:"overlay",onClick:this.hide,children:Object(b.jsx)("img",{id:"obj",className:"obj",onClick:this.clickHandler})})]})}}]),c}(n.Component),O=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;return Object(l.a)(this,c),(e=t.call(this)).clickHandler=e.clickHandler.bind(Object(o.a)(e)),e}return Object(a.a)(c,[{key:"clickHandler",value:function(e){e.stopPropagation()}},{key:"show",value:function(e){document.getElementById("overlay").style.display="block",document.getElementById("obj").src=e.target.src,document.getElementById("obj").type=e.target.type}},{key:"hide",value:function(){document.getElementById("overlay").style.display="none"}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"main",children:Object(b.jsxs)("div",{className:"grid",children:[Object(b.jsx)("div",{className:"grid-item",children:Object(b.jsx)("video",{src:"video1.mp4",onClick:this.show,controls:!0})}),Object(b.jsx)("div",{className:"grid-item",children:Object(b.jsx)("video",{src:"video4.mp4",onClick:this.show,controls:!0})}),Object(b.jsx)("div",{className:"grid-item",children:Object(b.jsx)("video",{src:"video2.mp4",onClick:this.show,controls:!0})}),Object(b.jsx)("div",{className:"grid-item",children:Object(b.jsx)("video",{src:"video3.mp4",onClick:this.show,controls:!0})})]})}),Object(b.jsx)("div",{id:"overlay",className:"overlay",onClick:this.hide,children:Object(b.jsx)("video",{id:"obj",className:"obj",onClick:this.clickHandler,controls:!0})})]})}}]),c}(n.Component),m=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{class:"main",children:Object(b.jsxs)("table",{class:"center",children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:" Source "}),Object(b.jsx)("th",{children:" Link "})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:" Zak George - Dog Trainer"}),Object(b.jsxs)("td",{children:[" ",Object(b.jsx)("a",{href:"https://www.youtube.com/user/zakgeorge21",children:"Training Videos"})]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:" American Kennel Club: Golden Retrievers"}),Object(b.jsxs)("td",{children:[" ",Object(b.jsx)("a",{href:"https://www.akc.org/dog-breeds/golden-retriever/",children:"Breed Info"})]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:" American Kennel Club: Golden Retrievers"}),Object(b.jsxs)("td",{children:[" ",Object(b.jsx)("a",{href:"https://www.akc.org/expert-advice/dog-breeds/10-facts-about-golden-retrievers/",children:" 10 Facts"})]})]})]})})})}}]),c}(n.Component),x=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"checkEmail",value:function(){var e=document.getElementById("email").value,t=document.getElementById("output");e.includes("@")&&e.includes(".com")?t.innerHTML="Email successfully recorded":t.innerHTML="Invalid email address"}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{class:"main",children:[Object(b.jsx)("h2",{children:" Sign up to be a part of my mailing list! "}),Object(b.jsx)("label",{children:" E-mail: "}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"email"}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{id:"output"}),Object(b.jsx)("button",{onClick:this.checkEmail,children:"Submit"})]})})}}]),c}(n.Component),p=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){var e=this;return function(){var t=e.props.activetab;return 0==t?Object(b.jsx)(h,{}):1==t?Object(b.jsx)(u,{}):2==t?Object(b.jsx)(O,{}):3==t?Object(b.jsx)(m,{}):4==t?Object(b.jsx)(x,{}):Object(b.jsx)(h,{})}()}}]),c}(n.Component);var v=function(e){return console.log(e),Object(b.jsx)("a",{style:function(){if(e.out.id==e.activetab)return{backgroundColor:"#D3D3D3"}}(),onClick:e.ctab.bind(this,e.out.id),children:e.out.title})},g=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){var e=this;return console.log("id is "+this.props.activetab),this.props.tabs.map((function(t){return Object(b.jsx)(v,{out:t,activetab:e.props.activetab,ctab:e.props.ctab})}))}}]),c}(n.Component),y=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;return Object(l.a)(this,c),(e=t.call(this)).state={active:0},e.changeTab=function(t){e.setState({active:t})},e.scrollHandler=e.scrollHandler.bind(Object(o.a)(e)),e.scrollBtn=e.scrollBtn.bind(Object(o.a)(e)),e.scrollToTop=e.scrollToTop.bind(Object(o.a)(e)),e}return Object(a.a)(c,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollHandler)}},{key:"scrollHandler",value:function(e){this.scrollBtn()}},{key:"scrollBtn",value:function(){var e=document.getElementById("btn");document.body.scrollTop>.25*window.innerHeight||document.documentElement.scrollTop>.25*window.innerHeight?e.style.display="block":e.style.display="none"}},{key:"scrollToTop",value:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,this.scrollBtn()}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"topheader",children:[Object(b.jsxs)("h1",{children:[" Milo ",Object(b.jsx)("img",{class:"sub",src:"pawprint.png"})," "]}),Object(b.jsx)("p",{children:" The Golden Retriever Puppy"})]}),Object(b.jsx)("div",{className:"nav",children:Object(b.jsx)(g,{tabs:[{id:0,title:"About Me"},{id:1,title:"Images"},{id:2,title:"Videos"},{id:3,title:"Table"},{id:4,title:"Email"}],activetab:this.state.active,ctab:this.changeTab})}),Object(b.jsx)(p,{activetab:this.state.active}),Object(b.jsx)("button",{id:"btn",onClick:this.scrollToTop,children:"Scroll Up"})]})}}]),c}(n.Component),f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.f83119f4.chunk.js.map