(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{1248:function(e,t,n){"use strict";n.r(t);var a=n(124),o=n(22),c=n.n(o),r=n(259),i=n(378);function l(){var e=Object(o.useState)(!1),t=Object(a.a)(e,2),n=t[0],l=t[1];return Object(o.useEffect)((function(){i.create({authorization:"sandbox_w3yd874v_7b4b2w6nhvfxq3w5"}).then((function(e){l(e)}))}),[]),c.a.createElement("div",{className:"App"},c.a.createElement(r.b,{options:{"client-id":"sb",vault:!0,intent:"tokenize"}},c.a.createElement(r.a,{style:{layout:"vertical"},fundingSource:"paypal",createBillingAgreement:function(){return n.createPayment({flow:"vault"})},onApprove:function(e){return n.tokenizePayment(e).then((function(e){console.log("Payload & nonce",e)}))}})))}var u=n(379),s=n(380),m=n.n(s),f=document.getElementById("root");m.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l,null)),f,c.a.createElement(u.Form,{src:"https://tnzsihwaizylvlv.form.io/contacto",onSubmitDone:function(e){}}),document.getElementById("formiodiv"))},383:function(e,t,n){e.exports=n(1248)}},[[383,1,2]]]);
//# sourceMappingURL=main.0f463b07.chunk.js.map