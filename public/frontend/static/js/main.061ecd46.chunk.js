(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{207:function(e,t,a){},361:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(13),s=a.n(c),i=a(9),o=(a(204),a(205),a(206),a(207),a(29)),l=a(22),u=a(7),d=a(8),j=a(399),b=a(43),p=a(413),O=a(401),h=a(403),f=a(404),g=a(407),v=a(94),x=a(411),m=a(405),y=a(167),S=a.n(y),E=a(170),C=a.n(E),w=a(171),N=a.n(w),I=a(364),k=a(409),T=a(410),_=a(168),R=a.n(_),A=a(118),U=a.n(A),L=a(12),F=a.n(L),G=a(24),P="USER_SIGIN_REQUEST",D="USER_SIGIN_SUCCESS",B="USER_SIGIN_FAIL",M="USER_REGISTER_REQUEST",Y="USER_REGISTER_SUCCESS",Q="USER_REGISTER_FAIL",W="USER_SUSCRIBE_REQUEST",X="USER_SUSCRIBE_SUCCESS",V="USER_SUSCRIBE_FAIL",H=a(25),J=a.n(H),z=a(414),$=a(408),q=a(173),K=a.n(q),Z=a(175),ee=a.n(Z),te=a(172),ae=a.n(te),ne=a(174),re=a.n(ne),ce=a(406),se=a(169),ie=a.n(se),oe=a(177),le=a.n(oe),ue=a(176),de=a.n(ue),je=a(3),be=Object(j.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},menuContent:{position:"absolute",right:"2%"},menuItems:{marginRight:"1rem",cursor:"pointer"},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:{display:"flex",alignItems:"center",justifyContent:"flex-end",height:"10vh"},contentHeader:{color:"white",background:"url(images/background/sidebar.jpg)",backgroundSize:"100%"},button:{color:"white"},icon:{color:"#080058"},accountContent:{width:"5rem",margin:"0.5rem",textAlign:"center"},accountIcon:{fontSize:"4rem"},iconsSidebar:{color:"#FFFFFF"},list:{color:"#000000"}}}));function pe(){var e=Object(i.b)(),t=be(),a=Object(b.a)(),n=r.a.useState(!1),c=Object(u.a)(n,2),s=c[0],l=c[1],j=r.a.useState(null),y=Object(u.a)(j,2),E=y[0],w=y[1],_=Object(i.c)((function(e){return e.userSignin})).userInfo,A=function(){l(!1)},L=function(){e(function(){var e=Object(G.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userInfo"),t({type:"USER_SIGNOUT_FAIL"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),window.location.reload()},P=function(e){switch(w(null),e){case"logout":L()}};return Object(je.jsx)("div",{children:_&&Object(je.jsxs)("div",{className:t.root,children:[Object(je.jsx)(O.a,{}),Object(je.jsx)(h.a,{position:"relative",children:Object(je.jsxs)(f.a,{children:[Object(je.jsx)(m.a,{color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},edge:"start",className:Object(d.a)(t.menuButton,s&&t.hide),children:Object(je.jsx)(S.a,{})}),Object(je.jsxs)(v.a,{className:t.menuContent,children:[Object(je.jsx)(o.b,{className:t.iconsSidebar,to:"/alert",children:Object(je.jsx)(ce.a,{className:t.menuItems,badgeContent:4,color:"primary",children:Object(je.jsx)(U.a,{})})}),Object(je.jsxs)(o.b,{to:"#",onClick:function(e){w(e.currentTarget)},className:t.iconsSidebar,children:[Object(je.jsx)(R.a,{}),Object(je.jsx)(ie.a,{})]}),Object(je.jsxs)(z.a,{id:"simple-menu",anchorEl:E,keepMounted:!0,open:Boolean(E),onClose:function(){return P()},children:[Object(je.jsx)(o.b,{to:"/profile",children:Object(je.jsx)($.a,{onClick:function(){return P()},children:"Perfil"})}),Object(je.jsx)($.a,{onClick:function(){return P("logout")},children:"Cerrar sesi\xf3n"})]})]})]})}),Object(je.jsxs)(p.a,{className:t.drawer,variant:"persistent",anchor:"left",open:s,classes:{paper:t.drawerPaper},children:[Object(je.jsxs)("div",{className:t.contentHeader,children:[Object(je.jsx)("div",{className:t.drawerHeader,children:Object(je.jsx)(m.a,{className:t.button,onClick:A,children:"ltr"===a.direction?Object(je.jsx)(C.a,{}):Object(je.jsx)(N.a,{})})}),Object(je.jsxs)(g.a,{className:t.accountContent,children:[Object(je.jsx)(ae.a,{className:t.accountIcon}),_.username]})]}),Object(je.jsxs)(g.a,{children:[Object(je.jsx)(o.b,{className:t.list,to:"/",children:Object(je.jsxs)(I.a,{onClick:A,button:!0,children:[Object(je.jsx)(k.a,{children:Object(je.jsx)(K.a,{className:t.icon})}),Object(je.jsx)(T.a,{primary:"Inicio"})]})}),Object(je.jsx)(o.b,{className:t.list,to:"/chart",children:Object(je.jsxs)(I.a,{onClick:A,button:!0,children:[Object(je.jsx)(k.a,{children:Object(je.jsx)(re.a,{className:t.icon})}),Object(je.jsx)(T.a,{primary:"Graficos"})]})}),Object(je.jsx)(o.b,{className:t.list,to:"/alert",children:Object(je.jsxs)(I.a,{onClick:A,button:!0,children:[Object(je.jsx)(k.a,{children:Object(je.jsx)(U.a,{className:t.icon})}),Object(je.jsx)(T.a,{primary:"Alertas"})]})}),Object(je.jsxs)(I.a,{className:t.list,onClick:A,button:!0,children:[Object(je.jsx)(k.a,{children:Object(je.jsx)(ee.a,{className:t.icon})}),Object(je.jsx)(T.a,{primary:"Ingresos"})]}),Object(je.jsxs)(I.a,{className:t.list,onClick:A,button:!0,children:[Object(je.jsx)(k.a,{children:Object(je.jsx)(de.a,{className:t.icon})}),Object(je.jsx)(T.a,{primary:"Proximos gastos"})]}),Object(je.jsxs)(I.a,{className:t.list,onClick:A,button:!0,children:[Object(je.jsx)(k.a,{children:Object(je.jsx)(le.a,{className:t.icon})}),Object(je.jsx)(T.a,{primary:"Pendientes"})]})]}),Object(je.jsx)(x.a,{})]})]})})}var Oe=a(15),he=a(21),fe=a(73),ge=a.n(fe);function ve(e){return Object(je.jsx)("div",{className:"alert alert-".concat(e.variant||"info"),children:e.children})}function xe(){return Object(je.jsx)("div",{children:Object(je.jsx)("div",{className:"spinner"})})}var me=a(51),ye="CATEGORY_CREATE_REQUEST",Se="CATEGORY_CREATE_SUCCESS",Ee="CATEGORY_CREATE_FAIL",Ce="CATEGORY_LIST_REQUEST",we="CATEGORY_LIST_SUCCESS",Ne="CATEGORY_LIST_FAIL",Ie=function(){return function(){var e=Object(G.a)(F.a.mark((function e(t,a){var n,r,c,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:Ce}),n=a(),r=n.userSignin.userInfo,e.prev=2,e.next=5,J.a.get("/api/categories/".concat(r.id));case 5:c=e.sent,s=c.data,t({type:we,payload:s}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t({type:Ne,payload:e.t0.response&&e.t0.response.data.response?e.t0.response.data.message:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a){return e.apply(this,arguments)}}()},ke="EXPENSE_LIST_REQUEST",Te="EXPENSE_LIST_SUCCESS",_e="EXPENSE_LIST_FAIL",Re="EXPENSE_CREATE_REQUEST",Ae="EXPENSE_CREATE_SUCCESS",Ue="EXPENSE_CREATE_FAIL",Le=function(e,t){return function(){var a=Object(G.a)(F.a.mark((function a(n,r){var c,s,i,o;return F.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:ke}),c=r(),s=c.userSignin.userInfo,a.prev=2,a.next=5,J.a.post("/api/expenses/".concat(s.id),{months:e,groupers:t},{headers:{Authorization:"Bearer ".concat(s.token)}});case 5:i=a.sent,o=i.data,n({type:Te,payload:o}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),n({type:_e,payload:a.t0.response&&a.t0.response.data.response?a.t0.response.data.message:a.t0.message});case 13:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e,t){return a.apply(this,arguments)}}()},Fe="SUBCATEGORY_LIST_REQUEST",Ge="SUBCATEGORY_LIST_SUCCESS",Pe="SUBCATEGORY_LIST_FAIL",De="SUBCATEGORY_CREATE_REQUEST",Be="SUBCATEGORY_CREATE_SUCCESS",Me="SUBCATEGORY_CREATE_FAIL",Ye=function(e){return function(){var t=Object(G.a)(F.a.mark((function t(a){var n,r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:Fe}),t.prev=1,t.next=4,J.a.get("/api/subcategories/".concat(e));case 4:n=t.sent,r=n.data,a({type:Ge,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a({type:Pe,payload:t.t0.response&&t.t0.response.data.response?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},Qe=a(178),We=a.n(Qe),Xe=a(179),Ve=a.n(Xe);function He(e){var t=e.type,a=e.categoryId,r=e.showNew,c=Object(i.b)(""),s=Object(i.c)((function(e){return e.categoryCreate})).category,o=Object(i.c)((function(e){return e.subcategoryCreate})).subcategory,l=Object(n.useState)(""),d=Object(u.a)(l,2),j=d[0],b=d[1],p=Object(n.useState)(""),O=Object(u.a)(p,2),h=O[0],f=O[1],g=Object(n.useState)(!1),v=Object(u.a)(g,2),x=v[0],m=v[1],y=Object(n.useState)(!1),S=Object(u.a)(y,2),E=S[0],C=S[1];return Object(n.useEffect)((function(){f("category"===t?"categoria":"subcategoria")}),[t,s]),Object(n.useEffect)((function(){s&&x&&(r(!1),c(Ie()),c(Ye(s.categoryId)))}),[x,s,c,r]),Object(n.useEffect)((function(){o&&E&&(r(!1),c(Ye(a)))}),[E,o,c,r,a]),Object(je.jsxs)("div",{className:"sub-form",children:[Object(je.jsx)("div",{children:Object(je.jsx)("input",{type:"text",maxLength:"20",onChange:function(e){return b(e.target.value)},placeholder:"Nueva ".concat(h)})}),Object(je.jsx)("div",{children:Object(je.jsx)(We.a,{onClick:function(){switch(t){case"category":c(function(e){return function(){var t=Object(G.a)(F.a.mark((function t(a,n){var r,c,s,i;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:ye,payload:e}),r=n(),c=r.userSignin.userInfo,t.prev=2,t.next=5,J.a.post("/api/categories/",{name:e,userId:c.id});case 5:s=t.sent,i=s.data,a({type:Se,payload:i}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),a({type:Ee,payload:t.t0.response&&t.t0.response.data.response?t.t0.response.data.message:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,a){return t.apply(this,arguments)}}()}(j)),m(!0);break;case"subcategory":c(function(e,t){return function(){var a=Object(G.a)(F.a.mark((function a(n){var r,c;return F.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:De}),a.prev=1,a.next=4,J.a.post("/api/subcategories",{name:e,categoryId:t});case 4:r=a.sent,c=r.data,n({type:Be,payload:c}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),n({type:Me,payload:a.t0.response&&a.t0.response.data.response?a.t0.response.data.message:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()}(j,a)),C(!0)}}})}),Object(je.jsx)("div",{children:Object(je.jsx)(Ve.a,{onClick:function(){return r(!1)}})})]})}var Je=a(93),ze=a.n(Je);function $e(e){var t=Object(i.b)(),a=e.setIsOpen,c=Object(n.useState)(""),s=Object(u.a)(c,2),o=s[0],l=s[1],d=Object(n.useState)(""),j=Object(u.a)(d,2),b=j[0],O=j[1],h=Object(n.useState)(""),f=Object(u.a)(h,2),g=f[0],v=f[1],m=Object(n.useState)(""),y=Object(u.a)(m,2),S=y[0],E=y[1],C=Object(n.useState)(""),w=Object(u.a)(C,2),N=w[0],I=w[1],k=Object(n.useState)(""),T=Object(u.a)(k,2),_=T[0],R=T[1],A=Object(n.useState)(!1),U=Object(u.a)(A,2),L=U[0],P=U[1],D=Object(n.useState)(!1),B=Object(u.a)(D,2),M=B[0],Y=B[1],Q=Object(n.useState)(!1),W=Object(u.a)(Q,2),X=W[0],V=W[1],H=Object(n.useState)(!1),z=Object(u.a)(H,2),$=z[0],q=z[1],K=Object(i.c)((function(e){return e.categoriesList})),Z=K.loading,ee=K.error,te=K.categories,ae=Object(i.c)((function(e){return e.expenseCreate})),ne=ae.expense,re=ae.loading,ce=ae.error,se=Object(i.c)((function(e){return e.subcategoriesList})),ie=se.subcategories,oe=se.loading,le=se.error,ue=e.state,de=e.setState,be=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&de(Object(he.a)(Object(he.a)({},ue),{},Object(Oe.a)({},e,t)))}},pe=Object(n.useCallback)((function(){a(!1)}),[a]),fe=Object(n.useCallback)((function(){te?te.length>0&&E(te[0].value):t(Ie())}),[te,t]);return Object(n.useEffect)((function(){S&&(ie&&!M?ie.length>0&&I(ie[0].value):(t(Ye(S)),Y(!1)))}),[S,ie,M,t]),Object(n.useEffect)((function(){!function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();t=t<10?"0".concat(t):"".concat(t),a=a<10?"0".concat(a):"".concat(a);var r="".concat(n,"-").concat(a,"-").concat(t);R(r),v(r)}(),fe()}),[fe]),Object(n.useEffect)((function(){if(ne&&L){var e=[_.split("-")[1]];t(Le(e,[])),pe()}}),[ne,t,L,pe,_]),Object(je.jsx)("div",{children:Object(je.jsx)(r.a.Fragment,{children:Object(je.jsxs)(p.a,{anchor:"right",open:ue.right,onClose:be("right",!1),children:[Object(je.jsx)("div",{className:"drawer-header",children:Object(je.jsx)(ze.a,{className:"drawer-back",onClick:be("right",!1)})}),Object(je.jsx)("div",{className:"drawer-body",children:Object(je.jsxs)("form",{className:"form-modal",onSubmit:function(e){e.preventDefault();var a={description:o,value:b,date:g,categoryCategoryId:S,subcategorySubcategoryId:N};P(!0),t(function(e){return function(){var t=Object(G.a)(F.a.mark((function t(a,n){var r,c,s,i;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:Re}),r=n(),c=r.userSignin.userInfo,t.prev=2,t.next=5,J.a.post("/api/expenses/",Object(he.a)(Object(he.a)({},e),{},{userUserId:c.id}));case 5:s=t.sent,i=s.data,a({type:Ae,payload:i}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),a({type:Ue,payload:t.t0.response&&t.t0.response.data.response?t.t0.response.data.message:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,a){return t.apply(this,arguments)}}()}(a))},children:[ce&&Object(je.jsx)(ve,{variant:"danger",children:ce}),Object(je.jsxs)("div",{className:"form-title",children:[Object(je.jsx)("div",{children:"Registrar gasto"}),Object(je.jsx)(x.a,{})]}),Object(je.jsx)("div",{children:Z?Object(je.jsx)(xe,{}):ee?Object(je.jsx)(ve,{variant:"danger",children:ee}):Object(je.jsxs)("div",{children:[Object(je.jsx)(me.a,{className:"select",placeholder:"Categorias",onChange:function(e){return function(e){E(e),Y(!0)}(e.value)},defaultValue:te[0],options:te}),Object(je.jsx)(ge.a,{onClick:function(){return V(!X)},className:"fas fa-plus-circle"}),X&&Object(je.jsx)(He,{showNew:V,type:"category"})]})}),Object(je.jsx)("div",{children:oe?Object(je.jsx)("div",{className:"new-category",onClick:function(){return V(!X)},children:"Crear categoria"}):le?Object(je.jsx)(ve,{variant:"danger",children:le}):Object(je.jsxs)("div",{children:[Object(je.jsx)(me.a,{className:"select",placeholder:"Subcategorias",onChange:function(e){return I(e.value)},defaultValue:ie[0],options:ie}),Object(je.jsx)(ge.a,{onClick:function(){return q(!$)},className:"fas fa-plus-circle"}),$&&Object(je.jsx)(He,{showNew:q,type:"subcategory",categoryId:S})]})}),Object(je.jsx)("div",{children:Object(je.jsx)("input",{type:"number",onChange:function(e){return O(e.target.value)},placeholder:"Valor"})}),Object(je.jsx)("div",{children:Object(je.jsx)("input",{type:"text",onChange:function(e){return l(e.target.value)},placeholder:"Descripcion"})}),Object(je.jsx)("div",{children:Object(je.jsx)("input",{value:_,type:"date",onChange:function(e){return function(e){R(e),v(e)}(e.target.value)},placeholder:"Fecha"})}),Object(je.jsx)("div",{children:re?Object(je.jsx)(xe,{}):Object(je.jsx)("button",{className:"btn secundary",type:"submit",children:"Crear"})})]})})]})},"right")})}function qe(){var e,t,a=Object(i.b)(),c=Object(i.c)((function(e){return e.userSignin})).userInfo,s=r.a.useState(!1),o=Object(u.a)(s,2),l=o[0],d=o[1],j=Object(n.useState)(!1),b=Object(u.a)(j,2),p=b[0],O=b[1],h=r.a.useState({right:!1}),f=Object(u.a)(h,2),g=f[0],v=f[1];return Object(n.useEffect)((function(){O(!1)}),[a,p]),Object(je.jsxs)("div",{children:[l&&Object(je.jsx)($e,{state:g,setState:v,setIsOpen:d}),c&&Object(je.jsx)("div",{className:"floating-button",children:Object(je.jsx)("button",{className:"btoncito",onClick:(e="right",t=!0,function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&(d(!0),v(Object(he.a)(Object(he.a)({},g),{},Object(Oe.a)({},e,t))))}),children:Object(je.jsx)(ge.a,{})})})]})}var Ke="ALERT_LIST_REQUEST",Ze="ALERT_LIST_SUCCESS",et="ALERT_LIST_FAIL",tt="ALERT_UPDATE_REQUEST",at="ALERT_UPDATE_SUCCESS",nt="ALERT_UPDATE_FAIL",rt="ALERT_CREATE_REQUEST",ct="ALERT_CREATE_SUCCESS",st="ALERT_CREATE_FAIL",it=function(){return function(){var e=Object(G.a)(F.a.mark((function e(t,a){var n,r,c,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:Ke}),n=a(),r=n.userSignin.userInfo,e.prev=2,e.next=5,J.a.get("/api/alerts/".concat(r.id));case 5:c=e.sent,s=c.data,t({type:Ze,payload:s}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t({type:et,payload:e.t0.response&&e.t0.response.data.response?e.t0.response.data.message:e.t0.name});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a){return e.apply(this,arguments)}}()},ot=function(e){return function(){var t=Object(G.a)(F.a.mark((function t(a){var n,r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:tt}),t.prev=1,t.next=4,J.a.put("/api/alerts",e);case 4:n=t.sent,r=n.data,a({type:at,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a({type:nt,payload:t.t0.response&&t.t0.response.data.response?t.t0.response.data.message:t.t0.name});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},lt=a(180),ut=a.n(lt),dt=a(181),jt=a.n(dt),bt=a(31);function pt(e){var t=Object(i.b)(),a=e.setIsOpen,c=e.editAlert,s=e.edit,o=Object(n.useState)([]),l=Object(u.a)(o,2),d=l[0],j=l[1],b=Object(n.useState)(""),O=Object(u.a)(b,2),h=O[0],f=O[1],g=Object(n.useState)(""),v=Object(u.a)(g,2),m=v[0],y=v[1],S=Object(n.useState)(""),E=Object(u.a)(S,2),C=E[0],w=E[1],N=Object(n.useState)(""),I=Object(u.a)(N,2),k=I[0],T=I[1],_=Object(n.useState)(!1),R=Object(u.a)(_,2),A=R[0],U=R[1],L=Object(i.c)((function(e){return e.alertCreate})).alert,P=Object(i.c)((function(e){return e.alertActiveUpdate})).alert,D=e.state,B=e.setState,M=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&B(Object(he.a)(Object(he.a)({},D),{},Object(Oe.a)({},e,t)))}};return Object(n.useEffect)((function(){if(d.length<1){var e=[];Object(bt.a)(Array(31).keys()).map((function(t){return e.push({value:t+1,label:t+1})})),j(e)}}),[d]),Object(n.useEffect)((function(){(L&&A||P&&A)&&(t(it()),a(!1))}),[L,A,t,a,P]),Object(n.useEffect)((function(){c&&s?(w(c.alert),T(c.message),f({label:c.date,value:c.date}),y(c.date)):(w(""),T(""),f({label:1,value:1}),y(1))}),[c,s]),Object(je.jsx)("div",{children:Object(je.jsx)(r.a.Fragment,{children:Object(je.jsxs)(p.a,{anchor:"right",open:D.right,onClose:M("right",!1),children:[Object(je.jsx)("div",{className:"drawer-header",children:Object(je.jsx)(ze.a,{className:"drawer-back",onClick:M("right",!1)})}),Object(je.jsx)("div",{className:"drawer-body",children:Object(je.jsxs)("form",{className:"form-modal",onSubmit:function(e){e.preventDefault(),U(!0),t(s?ot({date:m,alert:C,message:k,id:c.id,active:c.active}):function(e){return function(){var t=Object(G.a)(F.a.mark((function t(a,n){var r,c,s,i;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:rt}),r=n(),c=r.userSignin.userInfo,t.prev=2,t.next=5,J.a.post("/api/alerts",{alert:e,userId:c.id});case 5:s=t.sent,i=s.data,a({type:ct,payload:i}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),a({type:st,payload:t.t0.response&&t.t0.response.data.response?t.t0.response.data.message:t.t0.name});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,a){return t.apply(this,arguments)}}()}({date:m,alert:C,message:k}))},children:[Object(je.jsxs)("div",{className:"form-title",children:[Object(je.jsx)("div",{children:"Registar Alerta"}),Object(je.jsx)(x.a,{})]}),Object(je.jsxs)("div",{children:[Object(je.jsx)("label",{children:"Titulo alerta"}),Object(je.jsx)("input",{type:"text",value:C,onChange:function(e){return w(e.target.value)},required:!0})]}),Object(je.jsxs)("div",{children:[Object(je.jsx)("label",{children:"Descripc\xedon alerta"}),Object(je.jsx)("textarea",{type:"text",value:k,onChange:function(e){return T(e.target.value)}})]}),Object(je.jsxs)("div",{children:[Object(je.jsx)("label",{children:"D\xeda de env\xedo"}),Object(je.jsx)(me.a,{placeholder:"Dia",onChange:function(e){return y(e.value)},defaultValue:h,options:d})]}),Object(je.jsx)("div",{children:Object(je.jsx)("button",{className:"btn secundary",type:"submit",children:s?"Actualizar":"Crear"})})]})})]})},"right")})}function Ot(){var e=Object(i.b)(),t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)(!1),l=Object(u.a)(o,2),d=l[0],j=l[1],b=Object(n.useState)(!1),p=Object(u.a)(b,2),O=p[0],h=p[1],f=Object(n.useState)(),g=Object(u.a)(f,2),v=g[0],x=g[1],m=Object(n.useState)(!1),y=Object(u.a)(m,2),S=y[0],E=y[1],C=Object(i.c)((function(e){return e.alertList})),w=C.error,N=C.loading,I=C.alerts,k=Object(i.c)((function(e){return e.alertActiveUpdate})).alert,T=r.a.useState({right:!1}),_=Object(u.a)(T,2),R=_[0],A=_[1],U=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&(h(!0),A(Object(he.a)(Object(he.a)({},R),{},Object(Oe.a)({},e,t))))}};return Object(n.useEffect)((function(){if(I){var t=[];I.map((function(e){return t.push({id:e.alertId,alert:e.alert,message:e.message,date:e.date,active:e.active})})),s(t)}else e(it())}),[I,e]),Object(n.useEffect)((function(){k&&d&&e(it())}),[e,k,d]),Object(je.jsxs)("div",{children:[Object(je.jsx)(pt,{modalIsOpen:O,setIsOpen:h,state:R,setState:A,editAlert:v,edit:S}),N?Object(je.jsx)(xe,{}):w?Object(je.jsx)(ve,{variant:"danger",children:w}):Object(je.jsx)(je.Fragment,{children:Object(je.jsxs)("div",{className:"container",children:[Object(je.jsxs)("h2",{children:["Alertas",Object(je.jsx)("small",{})]}),Object(je.jsx)("button",{type:"button",onClick:U("right",!0),className:"btn primary",children:"Crear alerta"}),Object(je.jsx)("div",{className:"container-table",children:Object(je.jsxs)("ul",{className:"responsive-table",children:[Object(je.jsxs)("li",{className:"table-header",children:[Object(je.jsx)("div",{className:"col col-2",children:"Activo"}),Object(je.jsx)("div",{className:"col col-2",children:"Alerta"}),Object(je.jsx)("div",{className:"col col-4",children:"Mensaje"}),Object(je.jsx)("div",{className:"col col-4",children:"Dia de envio"}),Object(je.jsx)("div",{className:"col col-2",children:"Acciones"})]}),c.map((function(t){return Object(je.jsxs)("li",{className:"table-row",children:[Object(je.jsx)("div",{className:"col col-2","data-label":"Payment Status",children:Object(je.jsx)("input",{type:"checkbox",checked:t.active,value:!1,onChange:function(a){return function(t,a){e(ot(Object(he.a)(Object(he.a)({},a),{},{active:t.target.checked}))),j(!0)}(a,t)}})}),Object(je.jsx)("div",{className:"col col-2","data-label":"Customer Name",children:t.alert}),Object(je.jsx)("div",{className:"col col-4","data-label":"Amount",children:t.message}),Object(je.jsxs)("div",{className:"col col-4","data-label":"Payment Status",children:["D\xeda ",t.date," de cada mes"]}),Object(je.jsxs)("div",{className:"col col-2","data-label":"Payment Status",children:[Object(je.jsx)(ut.a,{onClick:function(){return function(e){x(e),h(!0),E(!0),U("right",!0),console.log("hola")}(t)},className:"cursor-pointer"}),Object(je.jsx)(jt.a,{className:"cursor-pointer"})]})]},t.id)}))]})})]})})]})}var ht=a(188);function ft(){var e=Object(i.b)(),t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)([]),o=Object(u.a)(s,2),l=o[0],d=o[1],j=Object(i.c)((function(e){return e.expenseList})).expenses;return Object(n.useEffect)((function(){if(j){var t=[],a=[];j.map((function(e){return t.push(e.category.category)})),j.map((function(e){return a.push(e.value)})),c(t),d(a)}else e(Le(["09"],["category"]))}),[e,j]),Object(je.jsx)("div",{children:Object(je.jsx)(ht.a,{data:{labels:r,datasets:[{data:l,backgroundColor:["rgba(255, 99, 132, 0.9)","rgba(54, 162, 235, 0.9)","rgba(255, 206, 86, 0.9)","rgba(75, 192, 192, 0.9)","rgba(153, 102, 255, 0.9)","rgba(255, 159, 64, 0.9)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},height:400,width:600,options:{maintainAspectRatio:!1}})})}var gt=a(189),vt="GET_MONTHS_REQUEST",xt="GET_MONTHS_SUCCESS",mt="GET_MONTHS_FAIL",yt=function(){return function(){var e=Object(G.a)(F.a.mark((function e(t){var a,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:vt}),e.prev=1,e.next=4,J.a.get("/api/utils/months");case 4:a=e.sent,n=a.data,t({type:xt,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:mt,payload:e.t0.response&&e.t0.response.data.response?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()};function St(e){var t=Object(i.b)(),a=Object(i.c)((function(e){return e.monthsGet})).months,r=e.month,c=Object(n.useState)(),s=Object(u.a)(c,2),o=s[0],l=s[1],d=Object(n.useState)(),j=Object(u.a)(d,2),b=j[0],p=j[1],O=Object(n.useState)(),h=Object(u.a)(O,2),f=h[0],g=h[1],v=Object(n.useState)([]),x=Object(u.a)(v,2),m=x[0],y=x[1];return Object(n.useEffect)((function(){t(Le([r],[]))}),[t,r]),Object(n.useEffect)((function(){f||g([{value:"category",label:"Categoria"},{value:"subcategory",label:"Subcategoria"}])}),[f]),Object(n.useEffect)((function(){if(a){var e=a.filter((function(e){return e.value===r}));o||l(e),b||p([e[0].value])}else t(yt())}),[t,a,o,r,b]),Object(je.jsxs)("div",{className:"selects-datable",children:[a&&o&&Object(je.jsx)(me.a,{className:"select",placeholder:"Mes",isMulti:!0,onChange:function(e){return function(e){var a=[];e.map((function(e){return a.push(e.value)})),p(a),t(Le(a,m))}(e)},defaultValue:o,options:a}),a&&o&&Object(je.jsx)(me.a,{className:"select",placeholder:"Agrupar por...",isMulti:!0,onChange:function(e){return function(e){var a=[];e.map((function(e){return a.push(e.value)})),y(a),t(Le(b,a))}(e)},options:f})]})}function Et(e){var t=Object(i.b)(),a=Object(n.useState)(!1),r=Object(u.a)(a,2),c=r[0],s=r[1],o=Object(n.useState)({}),l=Object(u.a)(o,2),d=l[0],j=l[1],b=Object(n.useState)(),p=Object(u.a)(b,2),O=p[0],h=p[1],f=Object(i.c)((function(e){return e.userSignin})).userInfo,g=Object(i.c)((function(e){return e.monthsGet})).months,v=Object(i.c)((function(e){return e.expenseList})),x=v.loading,m=v.expenses,y=v.error,S=function(e){var t=e.split("-")[1],a=e.split("-")[2],n=g.filter((function(e){return e.value===t}));return"".concat(a," ").concat(n[0].label)};return Object(n.useEffect)((function(){g||t(yt())}),[t,g]),Object(n.useEffect)((function(){if(f||e.history.push("/login"),m){var t=[{label:"Categoria",field:"category",width:150,attributes:{"aria-controls":"DataTable","aria-label":"Gasto"}},{label:"Subcategoria",field:"subcategory",width:270},{label:"Valor",field:"value",width:270}],a=[];m.length&&(m[0].description&&t.push({label:"Descripci\xf3n",field:"description",width:270}),m[0].date&&t.push({label:"Fecha",field:"date",width:270}),m.map((function(e){return a.push({category:e.category.category,subcategory:e.subcategory.subcategory,description:e.description?e.description:"",value:(new Intl.NumberFormat).format(e.value),date:e.date?S(e.date.split("T")[0]):""})}))),j({columns:t,rows:a})}O||function(){var e=(new Date).getMonth()+1;e=e<10?"0".concat(e):"".concat(e),h(e)}(),s(!1)}),[t,e,f,c,m,O]),Object(je.jsxs)("div",{className:"home-screen",children:[Object(je.jsx)("div",{className:"title",children:"Dero"}),O&&Object(je.jsx)(St,{month:O}),x?Object(je.jsx)(xe,{}):y?Object(je.jsx)(ve,{variant:"danger",children:y}):Object(je.jsxs)("div",{className:"datatable",children:[Object(je.jsx)("div",{className:"data-info",children:Object(je.jsxs)("div",{className:"data-card",children:[Object(je.jsx)("div",{children:"Gastos totales"}),Object(je.jsxs)("div",{children:["$",(new Intl.NumberFormat).format(m.reduce((function(e,t){return e+parseInt(t.value)}),0))]})]})}),Object(je.jsx)("div",{className:"data-table",children:Object(je.jsx)(gt.c,{hover:!0,data:d,searchTop:!0,paging:!1,info:!1,searchBottom:!1})}),Object(je.jsx)("div",{className:"data-content",children:m.map((function(e){return Object(je.jsxs)("div",{className:"data-table-items",children:[Object(je.jsxs)("div",{className:"data-date",children:[Object(je.jsx)("div",{children:e.date?S(e.date.split("T")[0]).slice(0,6).split(" ")[1]:""}),Object(je.jsx)("div",{children:e.date?S(e.date.split("T")[0]).slice(0,6).split(" ")[0]:""})]}),Object(je.jsxs)("div",{children:[Object(je.jsx)("div",{className:"category",children:e.category.category}),Object(je.jsx)("div",{className:"subcategory",children:e.subcategory.subcategory})]}),Object(je.jsxs)("div",{children:["$",(new Intl.NumberFormat).format(e.value)]})]},e.expenseId)}))})]})]})}function Ct(e){var t=Object(i.b)(),a=Object(i.c)((function(e){return e.userSignin})),r=a.userInfo,c=a.error,s=a.loading,l=Object(n.useState)(""),d=Object(u.a)(l,2),j=d[0],b=d[1],p=Object(n.useState)(""),O=Object(u.a)(p,2),h=O[0],f=O[1];return Object(n.useEffect)((function(){r&&e.history.push("/")}),[r,e]),Object(je.jsxs)("div",{className:"home",children:[Object(je.jsxs)("form",{className:"form",onSubmit:function(e){var a;e.preventDefault(),t((a={username:j,password:h},function(){var e=Object(G.a)(F.a.mark((function e(t){var n,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:P}),e.prev=1,e.next=4,J.a.post("/api/users/signin",a);case 4:n=e.sent,r=n.data,t({type:D,payload:r}),localStorage.setItem("userInfo",JSON.stringify(r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t({type:B,payload:e.t0.response&&e.t0.response.data.response?e.t0.response.data.message:e.t0.name});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(je.jsx)("div",{className:"title",children:"Iniciar sesi\xf3n"}),Object(je.jsx)("div",{children:Object(je.jsx)("input",{type:"text",id:"username",placeholder:"Username",onChange:function(e){return b(e.target.value)}})}),Object(je.jsx)("div",{children:Object(je.jsx)("input",{type:"password",id:"password",placeholder:"Password",onChange:function(e){return f(e.target.value)}})}),Object(je.jsx)("div",{children:s?Object(je.jsx)(xe,{}):Object(je.jsx)("button",{className:"btn primary",type:"submit",children:"Iniciar Sesi\xf3n"})}),Object(je.jsx)("div",{children:Object(je.jsx)(o.b,{to:"/register",children:"\xbfOlvidaste tu contrase\xf1a?"})}),Object(je.jsx)("div",{children:c&&Object(je.jsx)(ve,{variant:"danger",children:c})})]}),Object(je.jsx)("div",{className:"box-register",children:Object(je.jsx)("div",{children:Object(je.jsx)("span",{children:Object(je.jsx)(o.b,{to:"/register",children:"Crear una cuenta"})})})})]})}function wt(){return Object(je.jsx)("div",{children:"Profile"})}function Nt(e){var t=Object(i.b)(),a=Object(i.c)((function(e){return e.userSignin})).userInfo,r=Object(n.useState)(""),c=Object(u.a)(r,2),s=c[0],l=c[1],d=Object(n.useState)(""),j=Object(u.a)(d,2),b=j[0],p=j[1],O=Object(n.useState)(""),h=Object(u.a)(O,2),f=h[0],g=h[1],v=Object(n.useState)(""),x=Object(u.a)(v,2),m=x[0],y=x[1],S=Object(n.useState)(null),E=Object(u.a)(S,2),C=E[0],w=E[1];return Object(n.useEffect)((function(){a&&e.history.push("/")})),Object(je.jsx)("div",{className:"home",children:Object(je.jsxs)("form",{className:"form",onSubmit:function(e){var a;e.preventDefault(),w(null),b===f?t((a={username:s,password:b,email:m},function(){var e=Object(G.a)(F.a.mark((function e(t){var n,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:M,payload:a}),e.prev=1,e.next=4,J.a.post("/api/users/register",a);case 4:n=e.sent,r=n.data,t({type:Y,payload:r}),t({type:D,payload:r}),localStorage.setItem("userInfo",JSON.stringify(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:Q,payload:e.t0.response&&e.t0.response.data.response?e.t0.response.data.message:e.t0.name});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())):w("Las contrase\xf1as no coinciden")},children:[Object(je.jsx)("div",{className:"title",children:"Registro"}),Object(je.jsx)("div",{children:C&&Object(je.jsx)(ve,{variant:"danger",children:C})}),Object(je.jsx)("div",{children:Object(je.jsx)("input",{type:"text",id:"username",placeholder:"Username",onChange:function(e){return l(e.target.value)}})}),Object(je.jsx)("div",{children:Object(je.jsx)("input",{type:"email",id:"email",placeholder:"Email",onChange:function(e){return y(e.target.value)}})}),Object(je.jsx)("div",{children:Object(je.jsx)("input",{type:"password",id:"password",placeholder:"Password",onChange:function(e){return p(e.target.value)}})}),Object(je.jsx)("div",{children:Object(je.jsx)("input",{type:"password",id:"password",placeholder:"Password",onChange:function(e){return g(e.target.value)}})}),Object(je.jsx)("div",{children:Object(je.jsx)("button",{className:"btn primary",type:"submit",children:"Registrarme"})}),Object(je.jsx)("div",{children:Object(je.jsx)(o.b,{to:"/login",children:"Iniciar sesion"})})]})})}var It=function(){return Object(je.jsxs)(o.a,{children:[Object(je.jsx)(pe,{}),Object(je.jsx)(l.a,{path:"/",component:Et,exact:!0}),Object(je.jsx)(l.a,{path:"/login",component:Ct}),Object(je.jsx)(l.a,{path:"/register",component:Nt}),Object(je.jsx)(l.a,{path:"/alert",component:Ot}),Object(je.jsx)(l.a,{path:"/profile",component:wt}),Object(je.jsx)(l.a,{path:"/chart",component:ft}),Object(je.jsx)(qe,{})]})},kt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,416)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},Tt=a(75),_t=a(187),Rt={userSignin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},At=Object(Tt.b)({userSignin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return{loading:!0};case D:return{loading:!1,userInfo:t.payload,success:!0};case B:return{loading:!1,error:t.payload};default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return{loading:!0};case Y:return{loading:!1,user:t.payload};case Q:return{loading:!1,error:t.payload};default:return e}},userSuscribe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return{loading:!0};case X:return{loading:!1,suscribe:t.payload};case V:return{loading:!1,error:t.payload};default:return e}},expenseList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ke:return{loading:!0};case Te:return{loading:!1,expenses:t.payload};case _e:return{loading:!1,error:t.payload};default:return e}},expenseCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Re:return{loading:!0};case Ae:return{loading:!1,expense:t.payload};case Ue:return{loading:!1,error:t.payload};default:return e}},categoryCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye:return{loading:!0};case Se:return{loading:!1,category:t.payload};case Ee:return{loading:!1,error:t.payload};default:return e}},categoriesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ce:return{loading:!0};case we:return{loading:!1,categories:t.payload};case Ne:return{loading:!1,error:t.payload};default:return e}},subcategoriesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Fe:return{loading:!0};case Ge:return{loading:!1,subcategories:t.payload};case Pe:return{loading:!1,error:t.payload};default:return e}},subcategoryCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case De:return{loading:!0};case Be:return{loading:!1,subcategory:t.payload};case Me:return{loading:!1,error:t.payload};default:return e}},alertList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ke:return{loading:!0};case Ze:return{loading:!1,alerts:t.payload};case et:return{loading:!1};default:return e}},alertActiveUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case tt:return{loading:!0};case at:return{loading:!1,alert:t.payload};case nt:return{loading:!1,error:t.payload};default:return e}},alertCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case rt:return{loading:!0};case ct:return{loading:!1,alert:t.payload};case st:return{loading:!1,error:t.payload};default:return e}},monthsGet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case vt:return{loading:!0};case xt:return{loading:!1,months:t.payload};case mt:return{loading:!1,error:t.payload};default:return e}}}),Ut=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Tt.c,Lt=Object(Tt.d)(At,Rt,Ut(Object(Tt.a)(_t.a))),Ft=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),Gt="BDDk3ILb3FjIjAvTs9PWMoObhChnrBUYwHAsdplom7fePD36G6ZFJumGgSe6C4M3pOpYvFb38XX2wJRIN4B6V_0";function Pt(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)),function(e){var t;e.installing?t=e.installing:e.waiting?t=e.waiting:e.active&&(t=e.active);t&&("activated"===t.state&&console.log("sw already activated - Do watever needed here"),t.addEventListener("statechange",(function(t){"activated"===t.target.state&&e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Gt}).then((function(e){Lt.dispatch(function(e){return function(){var t=Object(G.a)(F.a.mark((function t(a,n){var r,c,s,i;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:W}),t.prev=1,r=n(),c=r.userSignin.userInfo,t.next=5,J.a.post("/api/users/suscription",{suscription:e,userId:c.id});case 5:s=t.sent,i=s.data,a({type:X,payload:i}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),a({type:V,payload:t.t0.response&&t.t0.response.data.response?t.t0.response.data.message:t.t0.name});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,a){return t.apply(this,arguments)}}()}(e))}))})))}(e))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(je.jsx)(i.a,{store:Lt,children:Object(je.jsx)(r.a.StrictMode,{children:Object(je.jsx)(It,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ft?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Pt(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Pt(t,e)}))}}(),kt()}},[[361,1,2]]]);
//# sourceMappingURL=main.061ecd46.chunk.js.map