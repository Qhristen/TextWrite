(this["webpackJsonptext-to-writting"]=this["webpackJsonptext-to-writting"]||[]).push([[0],{58:function(e,a,t){e.exports=t(68)},63:function(e,a,t){},64:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(8),r=t.n(l),i=(t(63),t(64),t(44)),c=t(14),m=t(45),s=t.n(m),u=t(108),d=t(110),p=t(115),g=t(102),f=t(105),b=t(107),v=t(116),h=t(69),E=t(109),y=t(118),w=t(113),N=t(120),S=t(117),C=t(121),k=t(114),x=function(){var e=Object(n.useState)({font:"",penColor:"",fontSize:"",verticalPosition:"",wordSpacing:"",textArea:""}),a=Object(c.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(""),m=Object(c.a)(r,2),x=m[0],O=m[1],z=Object(n.useState)({marginToggle:!1}),j=Object(c.a)(z,2),P=j[0],T=j[1],F=Object(n.useState)({paperLine:!0}),D=Object(c.a)(F,2),A=D[0],B=D[1],L=Object(n.useState)(!1),q=Object(c.a)(L,2),H=q[0],I=q[1],W=Object(n.useState)(!1),M=Object(c.a)(W,2),G=M[0],U=M[1],J=Object(n.useState)(!1),Q=Object(c.a)(J,2),R=Q[0],V=Q[1],Y=Boolean(H),$=Y?"simple-popover":void 0,K=Boolean(G),X=K?"simple-popover":void 0,Z=Boolean(R),_=Z?"simple-popover":void 0,ee=Object(n.useState)({border:"",background:"",display:"none",fontFamily:"",fontSz:"",paddingTop:"",wordSpacing:"",color:"",toggle:!1,paper:!1,marginT:""}),ae=Object(c.a)(ee,2),te=ae[0],ne=ae[1],oe=Object(n.useState)({font:""}),le=Object(c.a)(oe,2),re=le[0],ie=le[1],ce=Object(n.useState)({color:""}),me=Object(c.a)(ce,2),se=me[0],ue=me[1],de=function(e){ue({color:e.target.value})},pe=function(e){ie({font:e.target.value})},ge=function(e){e.preventDefault();var a=document.querySelector(".page"),t=s()(a).then((function(e){var a=new Image;a.src=e.toDataURL("image/jpeg"),O(a.src)}));return ne({toggle:!0,display:"block",marginT:"0px"}),t},fe=function(e){var a=e.target.files[0];be(a)},be=function(e){var a=new FileReader;a.readAsArrayBuffer(e),a.onload=function(e){var a=new FontFace("new-font",e.target.result);a.load().then((function(e){document.fonts.add(e)})).catch((function(e){return console.log(e)})),console.log(a)}},ve=function(e){fetch(e.target.href,{method:"GET",headers:{}}).then((function(e){e.arrayBuffer().then((function(e){var a=document.createElement("a");a.href=x,a.setAttribute("Download","image.jpg"),document.body.appendChild(a),a.click()}))})).catch((function(e){console.log(e)}))},he=function(){T({marginToggle:!P.marginToggle})},Ee=function(){B({paperLine:!A.paperLine})},ye=function(e){l(Object(i.a)({},e.target.name,e.target.value)),ne({fontSz:t.fontSize,wordSpacing:t.wordSpacing,paddingTop:t.verticalPosition,display:"none"===te.display?"none":"block"})},we=Object(g.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"20ch"}},typography:{padding:e.spacing(2)}}}))();return o.a.createElement("div",{className:" fl"},o.a.createElement(f.a,{style:{margin:"20px"}},o.a.createElement(b.a,{container:!0,spacing:2},o.a.createElement(b.a,{item:!0,xs:5,style:{background:"white"}},o.a.createElement("div",{className:"row output-grid responsive-row"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"page  \n              ".concat(P.marginToggle&&"margined-page"),style:{border:te.border,background:te.background}},o.a.createElement("div",{className:"paper-margin-top-line",contentditable:"true"}),o.a.createElement("div",{className:"textarea row ".concat(A.paperLine&&"paper")},o.a.createElement("div",{className:"paper-margin-left-line"}),o.a.createElement("div",{role:"textbox",style:{fontSize:te.fontSz+"px",fontFamily:re.font,wordSpacing:te.wordSpacing+"px",paddingTop:te.paddingTop+"px",color:se.color},onChange:ye,name:"note",value:t.textArea,className:"paper-content",id:"note",contentEditable:"true"},"Hendrerit. Proin ipsum nisl, lacinia vitae purus ullamcorper, maximus convallis sem. Sed nec lacinia lorem. Duis arcu metus, cursus non odio quis, tincidunt tempor augue. Donec eget vestibulum risus. Nullam blandit quis est vitae feugiat hendrerit in erat. Duis interdum nisl risus, ac ultrices ipsum auctor at. Aliquam faucibus iaculis metus sit amet tincidunt. Vestibulum cursus urna vel nunc imperdiet suscipit. Ut eu augue egestas, porta orci lobortis, pharetra orci. Morbi eu tellus quis nisi tempor accumsan nec eu urna. empor, ullamcorper tortor. Mauris quis fermentum augue. Phasellus ac nisl hendrerit, fringilla enim aliquam, placerat odio. Ut tortor nisi, pellentesque sed nisi at, hendrerit imperdiet turpis. Proin interdum porttitor metus at hendrerit. Proin ipsum nisl, lacinia vitae purus ullamcorper, maximus convallis sem. Sed nec lacinia lorem. Duis arcu metus, cursus non odio quis, tincidunt tempor augue. Donec eget vestibulum risus. Nullam blandit quis est vitae feugiat."))))),o.a.createElement("div",{className:"fixx"},o.a.createElement(u.a,{onClick:function(e){e.preventDefault(),I({anchorEl:!0})},style:{fontSize:"30px",cursor:"pointer",marginTop:"20px"}}),o.a.createElement(v.a,{id:$,open:Y,onClose:function(){I(!1)},anchorEl:H,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"top"}},o.a.createElement(h.a,{className:we.typography},o.a.createElement("section",{className:"guide",id:"how-to-add-handwriting"},o.a.createElement("h2",null,"How to add your own handwriting?"),o.a.createElement("ul",null,o.a.createElement("li",null,"You will have to generate font of your handwriting."),o.a.createElement("li",null,"Websites like"," ",o.a.createElement(E.a,{href:"https://www.calligraphr.com/en/"},"Calligraphr")," ","can let you do that."),o.a.createElement("li",null,"Once you get .ttf file of your handwriting, upload it from upload button and boom! you will have your handwriting in the page.")))," ")," "),o.a.createElement(d.a,{className:"hide-icon",onClick:function(e){e.preventDefault(),V({anchorEl:!0})},style:{fontSize:"30px",cursor:"pointer",marginTop:"20px",marginLeft:"15"}}),o.a.createElement(v.a,{id:_,open:Z,onClose:function(){V(!1)},anchorEl:R,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"top"}},o.a.createElement("form",{className:"".concat(we.root," m-form"),style:{border:te.border,background:te.background,display:"grid"},onSubmit:ge},o.a.createElement("label",null," Add your font "),o.a.createElement(y.a,{variant:"outlined",type:"file",className:"form-control mt-3",name:"font",onChange:fe}),o.a.createElement("label",null," show margin "),o.a.createElement("input",{defaultChecked:!0,color:"primary",type:"checkbox",className:"form-control mt-3",checked:P.marginToggle,name:"mart",onChange:he}),o.a.createElement("label",null," show paper Line"),o.a.createElement("input",{defaultChecked:!0,color:"primary",type:"checkbox",className:"form-control mt-3",value:A.paperLine,name:"paper",onChange:Ee}),o.a.createElement("label",null,"Font Size"),o.a.createElement(y.a,{variant:"outlined",type:"number",className:"form-control mt-3",min:"0",name:"fontSize",value:t.fontSize?t.fontSize:"12",onChange:ye,placeholder:"font size"}),o.a.createElement("label",null,"vertical Position"),o.a.createElement(y.a,{variant:"outlined",type:"number",className:"form-control mt-3",min:"0",name:"verticalPosition",value:t.verticalPosition?t.verticalPosition:"0",onChange:ye,placeholder:"vertical position text"}),o.a.createElement("label",null,"Word spacing"),o.a.createElement(y.a,{variant:"outlined",type:"number",className:"form-control mt-3",min:"0",name:"wordSpacing",value:t.wordSpacing?t.wordSpacing:"3",onChange:ye,placeholder:"word spacing"}),o.a.createElement(w.a,{variant:"outlined",className:we.formControl},o.a.createElement(N.a,{id:"demo-simple-select-outlined-label"},"Pen Color"),o.a.createElement(S.a,{className:"form-control mt-3",labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"PenColor",onChange:de,value:se.color,name:"penColor"},o.a.createElement(C.a,{value:"#000F55"},"Blue"),o.a.createElement(C.a,{value:"#333"},"Black"))),o.a.createElement(w.a,{variant:"outlined",className:we.formControl},o.a.createElement(N.a,{id:"demo-simple-select-outlined-label"},"Font"),o.a.createElement(S.a,{className:"form-control mt-3",labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"font",onChange:pe,value:re.font,name:"font"},o.a.createElement(C.a,{value:"'Fattana'"},"Fattana"),o.a.createElement(C.a,{value:"'Homemade Apple', cursive"},"Homemade Apple"),o.a.createElement(C.a,{value:"'new-font'"},"My Font"))),o.a.createElement(k.a,{variant:"contained",color:"primary",type:"submit",className:" btn btn-primary mb-2"},"Generate"))),o.a.createElement(p.a,{className:"hide-icon",onClick:function(e){e.preventDefault(),U({anchorEl:!0})},style:{fontSize:"30px",cursor:"pointer",marginTop:"20px",marginLeft:"15"}}),o.a.createElement(v.a,{id:X,open:K,onClose:function(){U(!1)},anchorEl:G,anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"top"}},o.a.createElement("div",{className:"col output-container"},o.a.createElement("div",{id:"output1",className:"output"},o.a.createElement("img",{src:x,alt:"note"})),o.a.createElement("div",null,o.a.createElement(k.a,{variant:"contained",color:"secondary",className:"btnn",style:{marginTop:"20px"},onClick:ve},"Download note")))))),o.a.createElement(b.a,{item:!0,xs:5,style:{display:te.display,background:"white"}},o.a.createElement("div",{className:"col output-container"},o.a.createElement("div",{id:"output",className:"output",style:{display:"".concat(768===window.innerWidth?"none":"block")}},o.a.createElement("img",{src:x,alt:"note"})),o.a.createElement("div",null,o.a.createElement(k.a,{variant:"contained",color:"secondary",className:"btnn",style:{marginTop:"20px"},onClick:ve},"Download note")))),o.a.createElement(b.a,{item:!0,xs:2,style:{background:"white"},className:"m-input"},o.a.createElement("form",{className:"".concat(we.root," m-form"),style:{border:te.border,background:te.background},onSubmit:ge},o.a.createElement("label",null," Add your font "),o.a.createElement(y.a,{variant:"outlined",type:"file",className:"form-control mt-3",name:"font",onChange:fe}),o.a.createElement("label",null," show margin "),o.a.createElement("input",{defaultChecked:!0,color:"primary",type:"checkbox",className:"form-control mt-3",checked:P.marginToggle,name:"mart",onChange:he}),o.a.createElement("label",null," show paper Line"),o.a.createElement("input",{defaultChecked:!0,color:"primary",type:"checkbox",className:"form-control mt-3",value:A.paperLine,name:"paper",onChange:Ee}),o.a.createElement("label",null,"Font Size"),o.a.createElement(y.a,{variant:"outlined",type:"number",className:"form-control mt-3",min:"0",name:"fontSize",value:t.fontSize?t.fontSize:"12",onChange:ye,placeholder:"font size"}),o.a.createElement("label",null,"vertical Position"),o.a.createElement(y.a,{variant:"outlined",type:"number",className:"form-control mt-3",min:"0",name:"verticalPosition",value:t.verticalPosition?t.verticalPosition:"0",onChange:ye,placeholder:"vertical position text"}),o.a.createElement("label",null,"Word spacing"),o.a.createElement(y.a,{variant:"outlined",type:"number",className:"form-control mt-3",min:"0",name:"wordSpacing",value:t.wordSpacing?t.wordSpacing:"3",onChange:ye,placeholder:"word spacing"}),o.a.createElement(w.a,{variant:"outlined",className:we.formControl},o.a.createElement(N.a,{id:"demo-simple-select-outlined-label"},"Pen Color"),o.a.createElement(S.a,{className:"form-control mt-3",labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"PenColor",onChange:de,value:se.color,name:"penColor"},o.a.createElement(C.a,{value:"#000F55"},"Blue"),o.a.createElement(C.a,{value:"#333"},"Black"))),o.a.createElement(w.a,{variant:"outlined",className:we.formControl},o.a.createElement(N.a,{id:"demo-simple-select-outlined-label"},"Font"),o.a.createElement(S.a,{className:"form-control mt-3",labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"font",onChange:pe,value:re.font,name:"font"},o.a.createElement(C.a,{value:"'Fattana'"},"Fattana"),o.a.createElement(C.a,{value:"'Homemade Apple', cursive"},"Homemade Apple"),o.a.createElement(C.a,{value:"'new-font'"},"My Font"))),o.a.createElement(k.a,{variant:"contained",color:"primary",type:"submit",className:" btn btn-primary mb-2"},"Generate"))))),o.a.createElement(f.a,null,o.a.createElement("div",{className:"fut"},"Made with \u2665 by...",o.a.createElement(E.a,{href:"http://www.github.com/Qhristen",style:{color:"orange",cursor:"pointer",textDecoration:"none"}}," ","Qhristen")," ")))},O=function(){return o.a.createElement("div",null,o.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[58,1,2]]]);
//# sourceMappingURL=main.fedf0e78.chunk.js.map