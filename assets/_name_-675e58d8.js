import{y as v,z as p,A as _,d as k,u as N,a as x,B as h,r as y,o as c,c as l,e,t as r,f as s,F as b,C as g,i as w,b as C,w as S,v as B,g as V}from"./app-ca444dc4.js";const L=v("user",()=>{const t=p(""),a=p(new Set),m=_(()=>Array.from(a.value)),o=_(()=>m.value.filter(u=>u!==t.value));function n(u){t.value&&a.value.add(t.value),t.value=u}return{setNewName:n,otherNames:o,savedName:t}}),R=e("div",{"text-4xl":""},[e("div",{"i-carbon-pedestrian":"","inline-block":""})],-1),j={"text-sm":"","opacity-75":""},A={key:0,"text-sm":"","mt-4":""},E={"opacity-75":""},F=k({__name:"[name]",props:{name:{type:String,required:!0}},setup(t){const a=t,m=N(),o=L(),{t:n}=x();return h(()=>{o.setNewName(a.name)}),(u,d)=>{const f=y("RouterLink");return c(),l("div",null,[R,e("p",null,r(s(n)("intro.hi",{name:a.name})),1),e("p",j,[e("em",null,r(s(n)("intro.dynamic-route")),1)]),s(o).otherNames.length?(c(),l("p",A,[e("span",E,r(s(n)("intro.aka"))+":",1),e("ul",null,[(c(!0),l(b,null,g(s(o).otherNames,i=>(c(),l("li",{key:i},[C(f,{to:`/hi/${i}`,replace:""},{default:S(()=>[B(r(i),1)]),_:2},1032,["to"])]))),128))])])):w("v-if",!0),e("div",null,[e("button",{btn:"",m:"3 t6","text-sm":"",onClick:d[0]||(d[0]=i=>s(m).back())},r(s(n)("button.back")),1)])])}}}),$=V(F,[["__file","C:/_nextjsprojects/_Upwork/katalogs_landing2/src/pages/hi/[name].vue"]]);export{$ as default};