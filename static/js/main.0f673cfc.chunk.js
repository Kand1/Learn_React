(this.webpackJsonpvladek=this.webpackJsonpvladek||[]).push([[0],{109:function(e,t,n){e.exports={checkbox:"Login_checkbox__3UFrU",formSummaryError:"Login_formSummaryError__3cy0x"}},128:function(e,t,n){e.exports={dialog:"DialogItem_dialog__3tDA2",active:"DialogItem_active__2qnc5"}},131:function(e,t,n){e.exports={formControl:"FormContent_formControl__1bjEU",error:"FormContent_error__21PO0"}},174:function(e,t,n){e.exports={header:"Header_header__1VCKf"}},175:function(e,t,n){e.exports={clocks:"Clocks_clocks__10YiY"}},178:function(e,t,n){e.exports={avatar:"User_avatar__3Rkdj",selectedPage:"User_selectedPage__NeROx"}},189:function(e,t,n){e.exports={profile:"Profile_profile__3dzvr"}},219:function(e,t,n){},22:function(e,t,n){e.exports={nav:"Sidebar_nav__i8Lo5",item:"Sidebar_item__3zPF1",active:"Sidebar_active__37KeR",itemMarg:"Sidebar_itemMarg__3tkI_"}},301:function(e,t,n){},351:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),a=(n(219),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,355)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),r(e),a(e),i(e)}))}),i=n(12),c=n(53),o=n(7),u=n(19),l=n.n(u),d=n(43),j=n(77),f=n.n(j),b=f.a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"b6ba6bc3-2474-46aa-a1e8-ad9e0eee24a4"}}),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return b.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},h=function(e){return b.post("follow/".concat(e)).then((function(e){return e.data}))},g=function(e){return b.delete("follow/".concat(e)).then((function(e){return e.data}))},O=function(){return b.get("auth/me").then((function(e){return e.data}))},m=function(e,t,n){return b.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},x=function(){return b.delete("auth/login").then((function(e){return e.data}))},v=function(e){return b.get("profile/".concat(e)).then((function(e){return e.data}))},_=function(e){return b.get("profile/status/".concat(e)).then((function(e){return e.data}))},S=function(e){return b.put("profile/status",{status:e}).then((function(e){return e.data}))},P=function(e,t,n,s){return e.map((function(e){return e[n]===t?Object(o.a)(Object(o.a)({},e),s):e}))},w="users/TOGGLE-SUB",C="users/SET-USERS",N="users/SET-CURRENT-PAGE",k="users/SET-TOTAL-USERS-COUNT",y="users/SET-PAGE-SIZE",A="users/TOGGLE-IS-FETCHING",I="users/TOGGLE-FOLLOWING-PROGRESS",D=function(e,t){return{type:w,userId:e,isFollow:t}},E=function(e,t){return{type:I,isFetching:e,userId:t}},U=function(e){return{type:A,isFetching:e}},M={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingProgress:[]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(o.a)(Object(o.a)({},e),{},{users:P(e.users,t.userId,"id",{followed:t.isFollow})});case C:return Object(o.a)(Object(o.a)({},e),{},{users:Object(c.a)(t.users)});case N:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.curP});case k:return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.totalC});case y:return Object(o.a)(Object(o.a)({},e),{},{pageSize:t.pageS});case A:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case I:return Object(o.a)(Object(o.a)({},e),{},{followingProgress:t.isFetching?[].concat(Object(c.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!=t.userId}))});default:return e}},T="profile/DELETE-POST",F="profile/ADD-POST",z="profile/SET-USER-PROFILE",B="profile/SET-STATUS",R=function(e){return{type:z,profile:e}},G=function(e){return{type:B,status:e}},V={postsData:[{id:0,message:"thats ggg",likes:"8"},{id:1,message:"thats was wp",likes:"4"},{id:2,message:"thats was greeeeeeasLLLLL LLLL wp",likes:"844"},{id:3,message:"wp brat",likes:"-1"}],profile:null,status:""},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:var n={message:t.text,likes:"0",id:e.postsData.length},s=Object(o.a)(Object(o.a)({},e),{},{postsData:[].concat(Object(c.a)(e.postsData),[n])});return s;case z:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case B:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case T:return Object(o.a)(Object(o.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!=t.id}))});default:return e}return e},J="dialogs/ADD-MESSAGE",K="dialogs/CHANGE-ID",W={messagesData:[{id:0,messages:[{text:"hi",sender:"user"},{text:"Hi",sender:"friend"},{text:"How r u ?",sender:"friend"},{text:"ok, bro",sender:"user"},{text:". . .",sender:"user"}]},{id:1,messages:[{text:"hi",sender:"user"},{text:"Auuu",sender:"user"},{text:"Wheere r u ?",sender:"user"},{text:". . .",sender:"user"}]},{id:2,messages:[{text:"Man",sender:"frien"},{text:"U r &&&",sender:"friend"},{text:"How r u ?",sender:"friend"},{text:"maaaaaaaaa55n",sender:"user"}]},{id:3,messages:[]},{id:4,messages:[]},{id:5,messages:[]},{id:6,messages:[]}],newMessageText:"",newMessageId:"0",dialogsData:[{id:0,name:"check"},{id:1,name:"Dimych"},{id:2,name:"Vlad"},{id:3,name:"Andr"},{id:4,name:"Valent"},{id:5,name:"Sant"},{id:6,name:"Dash"}]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,n=Object(o.a)(Object(o.a)({},e),{},{messagesData:Object(c.a)(e.messagesData)});switch(n.messagesData=e.messagesData.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{messages:Object(c.a)(e.messages)})})),t.type){case J:var s={text:t.text,sender:"user"};return n.messagesData[n.newMessageId].messages.push(s),n;case K:return n.newMessageId=t.id,n;default:return e}return e},Z=n(64),q="auth/SET-USER-DARA",Q="auth/DELETE-USER-DATA",X=function(e){return{type:q,data:e}},$=function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:0===(n=e.sent).resultCode&&t(X(n.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ee=function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:0===e.sent.resultCode&&t({type:Q});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},te={id:null,email:null,login:null,isAuth:!1},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(o.a)(Object(o.a)(Object(o.a)({},e),t.data),{},{isAuth:!0});case Q:return{id:null,email:null,login:null,isAuth:!1};default:return e}return e},se=n(171),re=n(170),ae="app/SET-INITIALIZED",ie={initializedSet:!1},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:return Object(o.a)(Object(o.a)({},e),{},{initializedSet:!0});default:return e}return e},oe=Object(i.c)({dialogsPage:Y,profilePage:H,usersPage:L,auth:ne,app:ce,form:re.a}),ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,le=Object(i.e)(oe,ue(Object(i.a)(se.a))),de=n(36),je=n.n(de),fe=n(31),be=n(32),pe=n(34),he=n(33),ge=(n(301),n(174)),Oe=n.n(ge),me=n.p+"static/media/header_pict_p_1.4b3e0fdb.jpg",xe=n(86),ve=n(175),_e=n.n(ve),Se=n(1),Pe=function(){var e=Object(s.useState)((new Date).toLocaleTimeString()),t=Object(xe.a)(e,2),n=t[0],r=t[1];return Object(s.useEffect)((function(){var e=setInterval((function(){r((new Date).toLocaleTimeString())}),1e3);return function(){clearInterval(e)}}),[]),Object(Se.jsxs)("div",{className:_e.a.clocks,children:["It is ",n]})},we=function(){return Object(Se.jsxs)("header",{className:Oe.a.header,children:[Object(Se.jsx)("img",{src:me}),Object(Se.jsx)(Pe,{})]})},Ce=function(e){return Object(Se.jsx)("div",{children:"Music"})},Ne=function(e){return Object(Se.jsx)("div",{children:"Settings"})},ke=function(e){return Object(s.useEffect)((function(){return console.log("NEWS MOUNT"),function(){console.log("NEWS UNMOUNT")}})),Object(Se.jsx)("div",{children:"News"})},ye=n(61),Ae=n.n(ye),Ie=n(62),De=n.n(Ie),Ee=function(e){var t="user"===e.data.sender?De.a.user:De.a.friend,n="user"===e.data.sender?De.a.userBorder:De.a.friendBorder,s="user"===e.data.sender?De.a.userBorderAlign:De.a.friendBorderAlign;return Object(Se.jsx)("div",{className:s,children:Object(Se.jsx)("div",{className:n,children:Object(Se.jsx)("div",{className:t,children:e.data.text})})})},Ue=n(13),Me=n(128),Le=n.n(Me),Te=n(29),Fe=function(e){var t="/dialogs/"+e.id;return Object(Se.jsx)("div",{className:Le.a.dialog,children:Object(Se.jsx)(Te.b,{onClick:function(){e.changeId(e.id)},to:t,activeClassName:Le.a.active,children:e.name})})},ze=n(168),Be=n(169),Re=n(110),Ge=n(131),Ve=n.n(Ge),He=function(e){e.input;var t=e.meta,n=Object(Re.a)(e,["input","meta"]),s=t.touched&&t.error;return Object(Se.jsxs)("div",{className:Ve.a.formControl+" "+(s?Ve.a.error:""),children:[Object(Se.jsx)("div",{children:n.children}),s&&Object(Se.jsx)("span",{children:t.error})]})},Je=function(e){var t=e.input,n=(e.meta,Object(Re.a)(e,["input","meta"]));return Object(Se.jsx)(He,Object(o.a)(Object(o.a)({},e),{},{children:Object(Se.jsx)("textarea",Object(o.a)(Object(o.a)({},t),n))}))},Ke=function(e){var t=e.input,n=(e.meta,Object(Re.a)(e,["input","meta"]));return Object(Se.jsx)(He,Object(o.a)(Object(o.a)({},e),{},{children:Object(Se.jsx)("input",Object(o.a)(Object(o.a)({},t),n))}))},We=function(e){if(!e)return"Field is required"},Ye=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symb.")}},Ze=Ye(20),qe=function(e){var t=e.data.messages.map((function(e){return Object(Se.jsx)(Ee,{data:e})}));return Object(Se.jsx)("div",{children:t})},Qe=Object(Be.a)({form:"addMessage"})((function(e){return Object(Se.jsxs)("form",{onSubmit:e.handleSubmit,className:Ae.a.addMessage,children:[Object(Se.jsx)("div",{children:Object(Se.jsx)(ze.a,{component:Je,name:"newMessageBody",validate:[We,Ze]})}),Object(Se.jsx)("div",{children:Object(Se.jsx)("button",{children:"Send Message"})})]})})),Xe=function(e){var t=e.page.dialogsData.map((function(t){return Object(Se.jsx)(Fe,{changeId:e.changeId,id:t.id,name:t.name})})),n=e.page.dialogsData.map((function(t){return Object(Se.jsx)(Ue.b,{path:"/dialogs/"+t.id,render:function(){return Object(Se.jsx)(qe,{data:e.page.messagesData[t.id]})}})}));return Object(Se.jsxs)("div",{className:Ae.a.dialogs,children:[Object(Se.jsx)("div",{className:Ae.a.dialogsItems,children:t}),Object(Se.jsx)("hr",{className:Ae.a.line1}),Object(Se.jsx)("div",{className:Ae.a.messages,children:n}),Object(Se.jsx)("hr",{className:Ae.a.line2}),Object(Se.jsx)(Qe,{onSubmit:function(t){e.addMessage(t.newMessageBody)}})]})},$e=n(16),et=function(e){var t=function(t){Object(pe.a)(s,t);var n=Object(he.a)(s);function s(){return Object(fe.a)(this,s),n.apply(this,arguments)}return Object(be.a)(s,[{key:"render",value:function(){return 0==this.props.isAuth?Object(Se.jsx)(Ue.a,{to:"/login"}):Object(Se.jsx)(e,Object(o.a)({},this.props))}}]),s}(r.a.Component);return Object($e.b)((function(e){return{isAuth:e.auth.isAuth}}))(t)},tt=Object(i.d)(Object($e.b)((function(e){return{page:e.dialogsPage}}),(function(e){return{addMessage:function(t){e(function(e){return{type:J,text:e}}(t))},changeId:function(t){e({type:K,id:t})}}})),et)(Xe),nt=n(354),st=(n(167),n(178)),rt=n.n(st),at=n.p+"static/media/default_avatar.5154a37d.jpg",it=function(e){var t=e.u,n=e.followingProgress,s=e.followingStatusChange;return Object(Se.jsx)("div",{children:Object(Se.jsxs)("div",{children:[Object(Se.jsxs)("span",{children:[Object(Se.jsx)("div",{children:Object(Se.jsx)(Te.b,{to:"/profile/"+t.id,children:Object(Se.jsx)("img",{className:rt.a.avatar,src:null!=t.photos.small?t.photos.small:at})})}),Object(Se.jsx)("div",{children:t.followed?Object(Se.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id,!1)},children:"Unfollow"}):Object(Se.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id,!0)},children:"Follow"})})]}),Object(Se.jsxs)("span",{children:[Object(Se.jsxs)("span",{children:[Object(Se.jsx)("div",{children:t.name}),Object(Se.jsx)("div",{children:t.status})]}),Object(Se.jsxs)("span",{children:[Object(Se.jsx)("div",{children:"u.location.city"}),Object(Se.jsx)("div",{children:"u.location.country"})]})]})]},t.id)})},ct=function(e){return 0==e.isAuth?Object(Se.jsx)(Ue.a,{to:"/login"}):Object(Se.jsxs)("div",{children:[Object(Se.jsx)(nt.a,{defaultCurrent:e.currentPage,defaultPageSize:e.pageSize,total:e.totalUsersCount,onShowSizeChange:function(t,n){e.onPageSizeChange(t,n)},onChange:function(t,n){e.onPageChange(t,n)}}),e.users.map((function(t){return Object(Se.jsx)(it,{u:t,followingProgress:e.followingProgress,followingStatusChange:e.followingStatusChange})}))]})},ot=n.p+"static/media/Spinner200px.a9a983d6.svg",ut=function(e){return Object(Se.jsx)("div",{children:Object(Se.jsx)("img",{src:ot})})},lt=n(188),dt=function(e){return e.usersPage.users},jt=function(e){return e.usersPage.pageSize},ft=function(e){return e.usersPage.totalUsersCount},bt=function(e){return e.usersPage.currentPage},pt=function(e){return e.usersPage.isFetching},ht=function(e){return e.usersPage.followingProgress},gt=(Object(lt.a)(dt,pt,(function(e,t){return t?e.filter((function(e){return!1})):e.filter((function(e){return!0}))})),function(e){Object(pe.a)(n,e);var t=Object(he.a)(n);function n(){var e;Object(fe.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onPageChange=function(t,n){e.props.setCurrentPage(t),e.props.getUsers(t,n)},e.onPageSizeChange=function(t,n){e.props.setPageSize(n),e.props.getUsers(t,n)},e}return Object(be.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(Se.jsx)(Se.Fragment,{children:this.props.isFetching?Object(Se.jsx)(ut,{}):Object(Se.jsx)(ct,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,onPageSizeChange:this.onPageSizeChange,users:this.props.users,followingProgress:this.props.followingProgress,followingStatusChange:this.props.followingStatusChange})})}}]),n}(r.a.Component)),Ot=Object(i.d)(Object($e.b)((function(e){return{users:dt(e),pageSize:jt(e),totalUsersCount:ft(e),currentPage:bt(e),isFetching:pt(e),followingProgress:ht(e)}}),{setCurrentPage:function(e){return{type:N,curP:e}},setPageSize:function(e){return{type:y,pageS:e}},getUsers:function(e,t){return function(){var n=Object(d.a)(l.a.mark((function n(s){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(U(!0)),n.next=3,p(e,t);case 3:r=n.sent,s(U(!1)),s((i=r.items,{type:C,users:i})),s((a=r.totalCount,{type:k,totalC:a}));case 7:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()},followingStatusChange:function(e,t){return function(){var n=Object(d.a)(l.a.mark((function n(s){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s(E(!0,e)),r=null,!t){n.next=8;break}return n.next=5,h(e);case 5:r=n.sent,n.next=11;break;case 8:return n.next=10,g(e);case 10:r=n.sent;case 11:0===r.resultCode&&(s(D(e,t)),s(E(!1,e)));case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(gt),mt=n(189),xt=n.n(mt),vt=n(73),_t=n.n(vt),St=n(54),Pt=n.n(St),wt=function(e){return Object(Se.jsxs)("div",{className:Pt.a.item,children:[Object(Se.jsx)("img",{className:Pt.a.postImage,src:at}),Object(Se.jsx)("div",{className:Pt.a.postMessage,children:e.message}),Object(Se.jsxs)("div",{className:Pt.a.like,children:[Object(Se.jsx)("button",{className:Pt.a.likeButton,children:"Like it!"}),Object(Se.jsx)("div",{className:Pt.a.likeText,children:"like"}),Object(Se.jsx)("div",{className:Pt.a.likesCount,children:e.likes})]})]})},Ct=Ye(10),Nt=r.a.memo((function(e){var t=e.page.postsData.map((function(e){return Object(Se.jsx)(wt,{message:e.message,likes:e.likes})}));return Object(Se.jsxs)("div",{className:_t.a.myPostsContent,children:[Object(Se.jsx)("h2",{children:"My posts"}),Object(Se.jsx)(kt,{className:_t.a.item,onSubmit:function(t){e.addPost(t.newPostBody)}}),Object(Se.jsx)("div",{className:_t.a.posts,children:t})]})})),kt=Object(Be.a)({form:"addPost"})((function(e){return Object(Se.jsxs)("form",{onSubmit:e.handleSubmit,className:_t.a.item,children:[Object(Se.jsx)("div",{children:Object(Se.jsx)(ze.a,{component:Je,name:"newPostBody",validate:[We,Ct]})}),Object(Se.jsx)("div",{children:Object(Se.jsx)("button",{className:_t.a.item,children:"Add post"})})]})})),yt=Nt,At=Object($e.b)((function(e){return{page:e.profilePage}}),(function(e){return{addPost:function(t){e(function(e){return{type:F,text:e}}(t))}}}))(yt),It=n(87),Dt=n.n(It),Et=n.p+"static/media/head.396f570f.jpg",Ut=(r.a.Component,function(e){var t=Object(s.useState)(!1),n=Object(xe.a)(t,2),r=n[0],a=n[1],i=Object(s.useState)(e.status),c=Object(xe.a)(i,2),o=c[0],u=c[1];Object(s.useEffect)((function(){u(e.status)}),[e.status]);return Object(Se.jsxs)("div",{children:[!r&&Object(Se.jsx)("div",{children:Object(Se.jsx)("span",{onDoubleClick:function(){a(!0)},children:null===e.status||""===e.status?Object(Se.jsx)("div",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441"}):Object(Se.jsx)("div",{children:e.status})})}),r&&Object(Se.jsx)("div",{children:Object(Se.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),e.updateStatus(o)},value:o})})]})}),Mt=function(e){if(!e.profile)return Object(Se.jsx)(ut,{});var t=[];for(var n in e.profile.contacts)t.push(Object(Se.jsx)("div",{children:n+":"+e.profile.contacts[n]}));return Object(Se.jsxs)("div",{className:Dt.a.profileInfo,children:[Object(Se.jsx)("div",{children:Object(Se.jsx)("img",{className:Dt.a.header_picture,src:Et})}),Object(Se.jsx)("div",{className:Dt.a.fullN,children:e.profile.fullName}),Object(Se.jsx)("div",{children:Object(Se.jsx)("img",{className:Dt.a.ava,src:null!=e.profile.photos.large?e.profile.photos.large:at})}),Object(Se.jsxs)("div",{children:[Object(Se.jsx)(Ut,{updateStatus:e.updateStatus,status:e.status}),"About me: ",e.profile.aboutMe]}),Object(Se.jsx)("div",{children:e.profile.lookingForAJob?"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: "+e.profile.lookingForAJobDescription:null}),Object(Se.jsx)("div",{children:"Contacts:"}),Object(Se.jsx)("div",{children:t})]})},Lt=function(e){return Object(Se.jsxs)("div",{className:xt.a.profile,children:[Object(Se.jsx)(Mt,{status:e.status,updateStatus:e.updateStatus,profile:e.profile}),Object(Se.jsx)(At,{})]})},Tt=function(e){Object(pe.a)(n,e);var t=Object(he.a)(n);function n(){return Object(fe.a)(this,n),t.apply(this,arguments)}return Object(be.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userid;e||this.props.isAuth&&(e=this.props.authUserId),this.props.isAuth&&(this.props.getProfile(e),this.props.getStatus(e))}},{key:"componentDidUpdate",value:function(e){if(this.props.match.params.userid!==e.match.params.userid){var t=this.props.match.params.userid;t||(t=this.props.authUserId),this.props.getProfile(t),this.props.getStatus(t)}e.status!=this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(Se.jsx)(Lt,Object(o.a)(Object(o.a)({},this.props),{},{status:this.props.status,updateStatus:this.props.updateStatus,profile:this.props.profile}))}}]),n}(r.a.Component),Ft=Object(i.d)(Object($e.b)((function(e){return{profile:e.profilePage.profile,authUserId:e.auth.id,isAuth:e.auth.isAuth,status:e.profilePage.status}}),{setUserProfile:R,getProfile:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){var s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:s=t.sent,n(R(s));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){var s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:s=t.sent,n(G(s));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:0===t.sent.resultCode&&n(G(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),Ue.f,et)(Tt),zt=n(22),Bt=n.n(zt),Rt=function(e){return Object(Se.jsxs)("nav",{className:Bt.a.nav,children:[Object(Se.jsx)("div",{className:Bt.a.item,children:Object(Se.jsx)(Te.b,{to:"/profile",activeClassName:Bt.a.active,children:"Profile"})}),Object(Se.jsx)("div",{className:Bt.a.item,children:Object(Se.jsx)(Te.b,{to:"/dialogs",activeClassName:Bt.a.active,children:"Messages"})}),Object(Se.jsx)("div",{className:Bt.a.item,children:Object(Se.jsx)(Te.b,{to:"/users",activeClassName:Bt.a.active,children:"Users"})}),Object(Se.jsx)("div",{className:Bt.a.item,children:Object(Se.jsx)(Te.b,{to:"/news",activeClassName:Bt.a.active,children:"News"})}),Object(Se.jsx)("div",{className:Bt.a.item,children:Object(Se.jsx)(Te.b,{to:"/music",activeClassName:Bt.a.active,children:"Music"})}),Object(Se.jsx)("div",{className:Bt.a.item,children:Object(Se.jsx)(Te.b,{to:"/settings",activeClassName:Bt.a.active,children:"Settings"})}),Object(Se.jsx)("div",{className:Bt.a.itemMarg+" "+Bt.a.item,children:e.isAuth?Object(Se.jsx)(Te.b,{to:"/profile/"+e.userId,children:e.login}):Object(Se.jsx)(Te.b,{to:"/login",children:"Login"})}),Object(Se.jsx)("div",{className:Bt.a.item,children:e.isAuth?Object(Se.jsx)("a",{onClick:e.logout,children:"Log out"}):Object(Se.jsx)("div",{children:" "})})]})},Gt=function(e){Object(pe.a)(n,e);var t=Object(he.a)(n);function n(){var e;Object(fe.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).sendLogout=function(){e.props.logoutUser()},e}return Object(be.a)(n,[{key:"render",value:function(){return Object(Se.jsx)(Rt,Object(o.a)(Object(o.a)({},this.props),{},{logout:this.sendLogout}))}}]),n}(r.a.Component),Vt=Object(i.d)(Object($e.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,userId:e.auth.id}}),{authUser:$,logoutUser:ee,setAuthUserData:X}))(Gt),Ht=n(109),Jt=n.n(Ht),Kt=Object(Be.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(Se.jsxs)("form",{onSubmit:t,children:[Object(Se.jsx)("div",{children:Object(Se.jsx)(ze.a,{component:Ke,name:"login",placeholder:"Login",validate:[We]})}),Object(Se.jsx)("div",{children:Object(Se.jsx)(ze.a,{component:Ke,name:"password",placeholder:"Password",type:"password",validate:[We]})}),Object(Se.jsx)("div",{className:Jt.a.formSummaryError,children:n}),Object(Se.jsxs)("div",{children:[Object(Se.jsx)("div",{className:Jt.a.checkbox,children:Object(Se.jsx)(ze.a,{component:Ke,name:"rememberMe",type:"checkbox"})}),Object(Se.jsx)("div",{className:Jt.a.checkbox,children:" remember me"})]}),Object(Se.jsx)("div",{children:Object(Se.jsx)("button",{children:"Login"})})]})})),Wt=function(e){return e.isAuth?Object(Se.jsx)(Ue.a,{to:"/profile"}):Object(Se.jsxs)("div",{children:[Object(Se.jsx)("h2",{children:"Login"}),Object(Se.jsx)(Kt,{onSubmit:function(t){e.sendLogin(t)}})]})},Yt=function(e){Object(pe.a)(n,e);var t=Object(he.a)(n);function n(){var e;Object(fe.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).sendLogin=function(t){e.props.loginUser(t.login,t.password,t.rememberMe)},e}return Object(be.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(Se.jsx)(Wt,Object(o.a)({sendLogin:this.sendLogin},this.props))}}]),n}(r.a.Component),Zt=Object(i.d)(Object($e.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginUser:function(e,t,n){return function(){var s=Object(d.a)(l.a.mark((function s(r){var a,i;return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,m(e,t,n);case 2:0===(a=s.sent).resultCode?r($()):(i=a.messages.length>0?a.messages[0]:"Undefined error",r(Object(Z.a)("login",{_error:i})));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()},logoutUser:ee}))(Yt),qt=function(e){Object(pe.a)(n,e);var t=Object(he.a)(n);function n(){return Object(fe.a)(this,n),t.apply(this,arguments)}return Object(be.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initializedSet?Object(Se.jsx)(Te.a,{children:Object(Se.jsxs)("div",{className:"app-wrap",children:[Object(Se.jsx)(Vt,{}),Object(Se.jsx)(we,{}),Object(Se.jsxs)("div",{className:"app-wrap-content",children:[Object(Se.jsx)(Ue.b,{path:"/profile/:userid?",render:function(){return Object(Se.jsx)(Ft,{})}}),Object(Se.jsx)(Ue.b,{path:"/dialogs",render:function(){return Object(Se.jsx)(tt,{})}}),Object(Se.jsx)(Ue.b,{path:"/music",render:function(){return Object(Se.jsx)(Ce,{})}}),Object(Se.jsx)(Ue.b,{path:"/settings",render:function(){return Object(Se.jsx)(Ne,{})}}),Object(Se.jsx)(Ue.b,{path:"/news",render:function(){return Object(Se.jsx)(ke,{})}}),Object(Se.jsx)(Ue.b,{path:"/users",render:function(){return Object(Se.jsx)(Ot,{})}}),Object(Se.jsx)(Ue.b,{path:"/login",render:function(){return Object(Se.jsx)(Zt,{})}})]})]})}):Object(Se.jsxs)("div",{children:[Object(Se.jsx)("div",{children:"Please wait"}),Object(Se.jsx)(ut,{})]})}}]),n}(s.Component),Qt=Object(i.d)(Object($e.b)((function(e){return{initializedSet:e.app.initializedSet}}),{initializeApp:function(){return function(e){var t=e($());Promise.all([t]).then((function(){e({type:ae})}))}}}))(qt);je.a.render(Object(Se.jsx)($e.a,{store:le,children:Object(Se.jsx)(Qt,{})}),document.getElementById("root")),a()},54:function(e,t,n){e.exports={item:"Post_item__ihtu9",likesCount:"Post_likesCount__R9C9-",likeText:"Post_likeText__1ib6k",likeButton:"Post_likeButton__iek-s",postMessage:"Post_postMessage__2yT1f",postImage:"Post_postImage__31InL",like:"Post_like__oViQh"}},61:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2xRSA",messages:"Dialogs_messages__1w_Up",dialogsItems:"Dialogs_dialogsItems__2sNe2",addMessage:"Dialogs_addMessage__1Bihp",line1:"Dialogs_line1__1haXI",line2:"Dialogs_line2__3qwc9"}},62:function(e,t,n){e.exports={userBorderAlign:"Message_userBorderAlign__FpAz3",friendBorderAlign:"Message_friendBorderAlign__2Ce3N",userBorder:"Message_userBorder__2f80F",friendBorder:"Message_friendBorder__2YbbU",user:"Message_user__3sZQV",friend:"Message_friend__1KmvT"}},73:function(e,t,n){e.exports={myPostsContent:"MyPosts_myPostsContent__2VPZl",item:"MyPosts_item__R6Jlo"}},87:function(e,t,n){e.exports={profileInfo:"ProfileInfo_profileInfo__2IJgv",header_picture:"ProfileInfo_header_picture__3_he-",ava:"ProfileInfo_ava__K96Gt",fullN:"ProfileInfo_fullN__1QVRg"}}},[[351,1,2]]]);
//# sourceMappingURL=main.0f673cfc.chunk.js.map