import{_ as l,o,c as a,a as e,w as c,d as i,t as d,e as u,f as _,v as h,F as m,r as f}from"./index-21b383b3.js";const p="/binance-clone/assets/transfer-c2cf1084.svg",v={data(){return{amount:null,userTransfer:null}},async created(){this.$store.dispatch({type:"onSetUser"})},methods:{onSendMoney(){console.log("ev: ",this.userTransfer),console.log("amount: ",this.amount),this.$store.dispatch({type:"sendMoney",user:{...this.userTransfer},amount:this.amount})}},computed:{getBalance(){return this.user.balance.toLocaleString()},contacts(){return this.$store.getters.contacts},user(){return this.$store.getters.user}}},y={class:"transfer-container"},g=e("div",{class:"transfer-header"},[e("h2",null,"Transfer")],-1),S={class:"transfer-body"},b={class:"card"},M=e("div",{class:"card-header"},[e("span",null,"from"),e("span",null,"balance")],-1),T={class:"card-body"},B={key:0},k=e("div",{class:"transfer-icon"},[e("img",{src:p,alt:""})],-1),x={class:"card"},U={class:"card-header send-money-to"},V=e("span",null,"to",-1),w=["value"],D=e("button",null,"send",-1);function F(L,t,N,C,r,n){return o(),a("section",y,[g,e("div",S,[e("div",b,[M,e("div",T,[c(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>r.amount=s),type:"number",placeholder:"0.00"},null,512),[[i,r.amount]]),n.user?(o(),a("span",B,d(n.getBalance)+"USD",1)):u("",!0)])]),k,e("div",x,[e("div",U,[V,e("form",{onSubmit:t[2]||(t[2]=_((...s)=>n.onSendMoney&&n.onSendMoney(...s),["stop"]))},[c(e("select",{"onUpdate:modelValue":t[1]||(t[1]=s=>r.userTransfer=s)},[(o(!0),a(m,null,f(n.contacts,s=>(o(),a("option",{value:s,key:s._id},d(s.name),9,w))),128))],512),[[h,r.userTransfer]]),D],32)])])])])}const j=l(v,[["render",F]]);export{j as default};