(this.webpackJsonpvladek=this.webpackJsonpvladek||[]).push([[0],{109:function(e,t,n){e.exports={checkbox:"Login_checkbox__3UFrU",formSummaryError:"Login_formSummaryError__3cy0x"}},128:function(e,t,n){e.exports={dialog:"DialogItem_dialog__3tDA2",active:"DialogItem_active__2qnc5"}},131:function(e,t,n){e.exports={formControl:"FormContent_formControl__1bjEU",error:"FormContent_error__21PO0"}},175:function(e,t,n){e.exports={item:"Music_item__2ushy"}},176:function(e,t,n){e.exports={item:"Settings_item__ZsNMg"}},177:function(e,t,n){e.exports={item:"News_item__3GPso"}},180:function(e,t,n){e.exports={avatar:"User_avatar__3Rkdj",selectedPage:"User_selectedPage__NeROx"}},190:function(e,t,n){e.exports={preloader:"Preloader_preloader__2dvkO"}},192:function(e,t,n){e.exports={profile:"Profile_profile__3dzvr"}},222:function(e,t,n){},304:function(e,t,n){},34:function(e,t,n){e.exports={nav:"Sidebar_nav__i8Lo5",item:"Sidebar_item__3zPF1",active:"Sidebar_active__37KeR",itemMarg:"Sidebar_itemMarg__3tkI_"}},354:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=(n(222),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,358)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))}),i=n(12),c=n(55),o=n(7),u=n(19),l=n.n(u),d=n(44),j=n(96),p=n.n(j),f=p.a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"b6ba6bc3-2474-46aa-a1e8-ad9e0eee24a4"}}),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return f.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},h=function(e){return f.post("follow/".concat(e)).then((function(e){return e.data}))},g=function(e){return f.delete("follow/".concat(e)).then((function(e){return e.data}))},O=function(){return f.get("auth/me").then((function(e){return e.data}))},m=function(e,t,n){return f.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},x=function(){return f.delete("auth/login").then((function(e){return e.data}))},v=function(e){return f.get("profile/".concat(e)).then((function(e){return e.data}))},_=function(e){return f.get("profile/status/".concat(e)).then((function(e){return e.data}))},P=function(e){return f.put("profile/status",{status:e}).then((function(e){return e.data}))},S=function(e,t,n,s){return e.map((function(e){return e[n]===t?Object(o.a)(Object(o.a)({},e),s):e}))},A="users/TOGGLE-SUB",N="users/SET-USERS",C="users/SET-CURRENT-PAGE",w="users/SET-TOTAL-USERS-COUNT",k="users/SET-PAGE-SIZE",y="users/TOGGLE-IS-FETCHING",I="users/TOGGLE-FOLLOWING-PROGRESS",M=function(e,t){return{type:A,userId:e,isFollow:t}},E=function(e,t){return{type:I,isFetching:e,userId:t}},U=function(e){return{type:y,isFetching:e}},D={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingProgress:[]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(o.a)(Object(o.a)({},e),{},{users:S(e.users,t.userId,"id",{followed:t.isFollow})});case N:return Object(o.a)(Object(o.a)({},e),{},{users:Object(c.a)(t.users)});case C:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.curP});case w:return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.totalC});case k:return Object(o.a)(Object(o.a)({},e),{},{pageSize:t.pageS});case y:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case I:return Object(o.a)(Object(o.a)({},e),{},{followingProgress:t.isFetching?[].concat(Object(c.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!=t.userId}))});default:return e}},L="profile/DELETE-POST",T="profile/ADD-POST",F="profile/SET-USER-PROFILE",R="profile/SET-STATUS",z=function(e){return{type:F,profile:e}},G=function(e){return{type:R,status:e}},H={postsData:[{id:0,message:"you can add posts, but they will be same on any page",likes:"8"},{id:1,message:"likes dont work",likes:"4"},{id:2,message:"(((",likes:"2"}],profile:null,status:""},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:var n={message:t.text,likes:"0",id:e.postsData.length},s=Object(o.a)(Object(o.a)({},e),{},{postsData:[].concat(Object(c.a)(e.postsData),[n])});return s;case F:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case R:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case L:return Object(o.a)(Object(o.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!=t.id}))});default:return e}return e},Y="dialogs/ADD-MESSAGE",q="dialogs/CHANGE-ID",K={messagesData:[{id:0,messages:[{text:"hi",sender:"user"},{text:"Hi",sender:"friend"},{text:"How r u ?",sender:"friend"},{text:"ok, bro",sender:"user"},{text:". . .",sender:"user"}]},{id:1,messages:[{text:"hi",sender:"user"},{text:"Auuu",sender:"user"},{text:"Wheere r u ?",sender:"user"},{text:". . .",sender:"user"}]},{id:2,messages:[{text:"Man",sender:"frien"},{text:"U r &&&",sender:"friend"},{text:"How r u ?",sender:"friend"},{text:"maaaaaaaaa55n",sender:"user"}]},{id:3,messages:[]},{id:4,messages:[]},{id:5,messages:[]},{id:6,messages:[]}],newMessageText:"",newMessageId:"0",dialogsData:[{id:0,name:"check"},{id:1,name:"Dimych"},{id:2,name:"Vlad"},{id:3,name:"Andr"},{id:4,name:"Valent"},{id:5,name:"Sant"},{id:6,name:"Dash"}]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0,n=Object(o.a)(Object(o.a)({},e),{},{messagesData:Object(c.a)(e.messagesData)});switch(n.messagesData=e.messagesData.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{messages:Object(c.a)(e.messages)})})),t.type){case Y:var s={text:t.text,sender:"user"};return n.messagesData[n.newMessageId].messages.push(s),n;case q:return n.newMessageId=t.id,n;default:return e}return e},J=n(67),W="auth/SET-USER-DARA",Z="auth/DELETE-USER-DATA",X=function(e,t){return{type:W,data:e,photos:t}},$=function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:if(0!==(n=e.sent).resultCode){e.next=8;break}return e.next=6,v(n.data.id);case 6:s=e.sent,t(X(n.data,s.photos));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ee=function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:0===e.sent.resultCode&&t({type:Z});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},te={id:null,email:null,login:null,isAuth:!1,small:null,large:null},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({},e),t.data),t.photos),{},{isAuth:!0});case Z:return{id:null,email:null,login:null,isAuth:!1};default:return e}return e},se=n(172),ae=n(171),re="app/SET-INITIALIZED",ie={initializedSet:!1},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return Object(o.a)(Object(o.a)({},e),{},{initializedSet:!0});default:return e}return e},oe=Object(i.c)({dialogsPage:V,profilePage:Q,usersPage:B,auth:ne,app:ce,form:ae.a}),ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,le=Object(i.e)(oe,ue(Object(i.a)(se.a))),de=n(36),je=n.n(de),pe=n(30),fe=n(31),be=n(33),he=n(32),ge=(n(304),n(175)),Oe=n.n(ge),me=n(1),xe=function(e){return Object(me.jsx)("div",{className:Oe.a.item,children:"Music"})},ve=n(176),_e=n.n(ve),Pe=function(e){return Object(me.jsx)("div",{className:_e.a.item,children:"Settings"})},Se=n(177),Ae=n.n(Se),Ne=function(e){return Object(s.useEffect)((function(){return console.log("NEWS MOUNT"),function(){console.log("NEWS UNMOUNT")}})),Object(me.jsx)("div",{className:Ae.a.item,children:"News"})},Ce=n(63),we=n.n(Ce),ke=n(64),ye=n.n(ke),Ie=function(e){var t="user"===e.data.sender?ye.a.user:ye.a.friend,n="user"===e.data.sender?ye.a.userBorder:ye.a.friendBorder,s="user"===e.data.sender?ye.a.userBorderAlign:ye.a.friendBorderAlign;return Object(me.jsx)("div",{className:s,children:Object(me.jsx)("div",{className:n,children:Object(me.jsx)("div",{className:t,children:e.data.text})})})},Me=n(13),Ee=n(128),Ue=n.n(Ee),De=n(22),Be=function(e){var t="/dialogs/"+e.id;return Object(me.jsx)("div",{className:Ue.a.dialog,children:Object(me.jsx)(De.b,{onClick:function(){e.changeId(e.id)},to:t,activeClassName:Ue.a.active,children:e.name})})},Le=n(169),Te=n(170),Fe=n(110),Re=n(131),ze=n.n(Re),Ge=function(e){e.input;var t=e.meta,n=Object(Fe.a)(e,["input","meta"]),s=t.touched&&t.error;return Object(me.jsxs)("div",{className:ze.a.formControl+" "+(s?ze.a.error:""),children:[Object(me.jsx)("div",{children:n.children}),s&&Object(me.jsx)("span",{children:t.error})]})},He=function(e){var t=e.input,n=(e.meta,Object(Fe.a)(e,["input","meta"]));return Object(me.jsx)(Ge,Object(o.a)(Object(o.a)({},e),{},{children:Object(me.jsx)("textarea",Object(o.a)(Object(o.a)({},t),n))}))},Qe=function(e){var t=e.input,n=(e.meta,Object(Fe.a)(e,["input","meta"]));return Object(me.jsx)(Ge,Object(o.a)(Object(o.a)({},e),{},{children:Object(me.jsx)("input",Object(o.a)(Object(o.a)({},t),n))}))},Ye=function(e){if(!e)return"Field is required"},qe=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symb.")}},Ke=qe(20),Ve=function(e){var t=e.data.messages.map((function(e){return Object(me.jsx)(Ie,{data:e})}));return Object(me.jsx)("div",{children:t})},Je=Object(Te.a)({form:"addMessage"})((function(e){return Object(me.jsxs)("form",{onSubmit:e.handleSubmit,className:we.a.addMessage,children:[Object(me.jsx)("div",{children:Object(me.jsx)(Le.a,{component:He,name:"newMessageBody",validate:[Ye,Ke]})}),Object(me.jsx)("div",{children:Object(me.jsx)("button",{children:"Send Message"})})]})})),We=function(e){var t=e.page.dialogsData.map((function(t){return Object(me.jsx)(Be,{changeId:e.changeId,id:t.id,name:t.name})})),n=e.page.dialogsData.map((function(t){return Object(me.jsx)(Me.b,{path:"/dialogs/"+t.id,render:function(){return Object(me.jsx)(Ve,{data:e.page.messagesData[t.id]})}})}));return Object(me.jsxs)("div",{className:we.a.dialogs,children:[Object(me.jsx)("div",{className:we.a.dialogsItems,children:t}),Object(me.jsx)("hr",{className:we.a.line1}),Object(me.jsx)("div",{className:we.a.messages,children:n}),Object(me.jsx)("hr",{className:we.a.line2}),Object(me.jsx)(Je,{onSubmit:function(t){e.addMessage(t.newMessageBody)}})]})},Ze=n(16),Xe=function(e){var t=function(t){Object(be.a)(s,t);var n=Object(he.a)(s);function s(){return Object(pe.a)(this,s),n.apply(this,arguments)}return Object(fe.a)(s,[{key:"render",value:function(){return 0==this.props.isAuth?Object(me.jsx)(Me.a,{to:"/login"}):Object(me.jsx)(e,Object(o.a)({},this.props))}}]),s}(a.a.Component);return Object(Ze.b)((function(e){return{isAuth:e.auth.isAuth}}))(t)},$e=Object(i.d)(Object(Ze.b)((function(e){return{page:e.dialogsPage}}),(function(e){return{addMessage:function(t){e(function(e){return{type:Y,text:e}}(t))},changeId:function(t){e({type:q,id:t})}}})),Xe)(We),et=n(357),tt=(n(168),n(180)),nt=n.n(tt),st=n.p+"static/media/default_avatar.5154a37d.jpg",at=function(e){var t=e.u,n=e.followingProgress,s=e.followingStatusChange;return Object(me.jsx)("div",{children:Object(me.jsxs)("div",{children:[Object(me.jsxs)("span",{children:[Object(me.jsx)("div",{children:Object(me.jsx)(De.b,{to:"/profile/"+t.id,children:Object(me.jsx)("img",{className:nt.a.avatar,src:null!=t.photos.small?t.photos.small:st})})}),Object(me.jsx)("div",{children:t.followed?Object(me.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id,!1)},children:"Unfollow"}):Object(me.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id,!0)},children:"Follow"})})]}),Object(me.jsx)("span",{children:Object(me.jsxs)("span",{children:[Object(me.jsx)("div",{children:t.name}),Object(me.jsx)("div",{children:t.status})]})})]},t.id)})},rt=function(e){return 0==e.isAuth?Object(me.jsx)(Me.a,{to:"/login"}):Object(me.jsxs)("div",{children:[Object(me.jsx)(et.a,{defaultCurrent:e.currentPage,defaultPageSize:e.pageSize,total:e.totalUsersCount,onShowSizeChange:function(t,n){e.onPageSizeChange(t,n)},onChange:function(t,n){e.onPageChange(t,n)}}),e.users.map((function(t){return Object(me.jsx)(at,{u:t,followingProgress:e.followingProgress,followingStatusChange:e.followingStatusChange})}))]})},it=n.p+"static/media/Spinner200px.a9a983d6.svg",ct=n(190),ot=n.n(ct),ut=function(e){return Object(me.jsxs)("div",{className:ot.a.preloader,children:[Object(me.jsx)("div",{children:"Please wait"}),Object(me.jsx)("img",{src:it})]})},lt=n(191),dt=function(e){return e.usersPage.users},jt=function(e){return e.usersPage.pageSize},pt=function(e){return e.usersPage.totalUsersCount},ft=function(e){return e.usersPage.currentPage},bt=function(e){return e.usersPage.isFetching},ht=function(e){return e.usersPage.followingProgress},gt=(Object(lt.a)(dt,bt,(function(e,t){return t?e.filter((function(e){return!1})):e.filter((function(e){return!0}))})),function(e){Object(be.a)(n,e);var t=Object(he.a)(n);function n(){var e;Object(pe.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onPageChange=function(t,n){e.props.setCurrentPage(t),e.props.getUsers(t,n)},e.onPageSizeChange=function(t,n){e.props.setPageSize(n),e.props.getUsers(t,n)},e}return Object(fe.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(me.jsx)(me.Fragment,{children:this.props.isFetching?Object(me.jsx)(ut,{}):Object(me.jsx)(rt,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,onPageSizeChange:this.onPageSizeChange,users:this.props.users,followingProgress:this.props.followingProgress,followingStatusChange:this.props.followingStatusChange})})}}]),n}(a.a.Component)),Ot=Object(i.d)(Object(Ze.b)((function(e){return{users:dt(e),pageSize:jt(e),totalUsersCount:pt(e),currentPage:ft(e),isFetching:bt(e),followingProgress:ht(e)}}),{setCurrentPage:function(e){return{type:C,curP:e}},setPageSize:function(e){return{type:k,pageS:e}},getUsers:function(e,t){return function(){var n=Object(d.a)(l.a.mark((function n(s){var a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(U(!0)),n.next=3,b(e,t);case 3:a=n.sent,s(U(!1)),s((i=a.items,{type:N,users:i})),s((r=a.totalCount,{type:w,totalC:r}));case 7:case"end":return n.stop()}var r,i}),n)})));return function(e){return n.apply(this,arguments)}}()},followingStatusChange:function(e,t){return function(){var n=Object(d.a)(l.a.mark((function n(s){var a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s(E(!0,e)),a=null,!t){n.next=8;break}return n.next=5,h(e);case 5:a=n.sent,n.next=11;break;case 8:return n.next=10,g(e);case 10:a=n.sent;case 11:0===a.resultCode&&(s(M(e,t)),s(E(!1,e)));case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(gt),mt=n(192),xt=n.n(mt),vt=n(56),_t=n.n(vt),Pt=n(65),St=n.n(Pt),At=function(e){return Object(me.jsxs)("div",{className:St.a.item,children:[Object(me.jsx)("img",{className:St.a.postImage,src:st}),Object(me.jsx)("div",{className:St.a.postMessage,children:e.message}),Object(me.jsxs)("div",{className:St.a.like,children:[Object(me.jsx)("button",{className:St.a.likeButton,children:"\u2661"}),Object(me.jsx)("div",{className:St.a.likesCount,children:e.likes})]})]})},Nt=qe(25),Ct=a.a.memo((function(e){var t=e.page.postsData.map((function(e){return Object(me.jsx)(At,{message:e.message,likes:e.likes})}));return Object(me.jsx)("div",{children:e.page.profile&&Object(me.jsxs)("div",{children:[Object(me.jsx)(wt,{className:_t.a.item,onSubmit:function(t){e.addPost(t.newPostBody)}}),Object(me.jsxs)("div",{className:_t.a.myPostsContent,children:[Object(me.jsx)("div",{className:_t.a.postsHeader,children:e.page.profile.fullName+" posts"}),Object(me.jsx)("div",{className:_t.a.posts,children:t})]})]})})})),wt=Object(Te.a)({form:"addPost"})((function(e){return Object(me.jsxs)("form",{onSubmit:e.handleSubmit,className:_t.a.addPost,children:[Object(me.jsx)("div",{children:Object(me.jsx)(Le.a,{className:_t.a.addPostField,component:He,name:"newPostBody",validate:[Nt]})}),Object(me.jsx)("div",{children:Object(me.jsx)("button",{className:_t.a.addPostButton,children:"Add post"})})]})})),kt=Ct,yt=Object(Ze.b)((function(e){return{page:e.profilePage,id:e.auth.id}}),(function(e){return{addPost:function(t){e(function(e){return{type:T,text:e}}(t))}}}))(kt),It=n(39),Mt=n.n(It),Et=(n.p,a.a.Component,n(137)),Ut=function(e){var t=Object(s.useState)(!1),n=Object(Et.a)(t,2),a=n[0],r=n[1],i=Object(s.useState)(e.status),c=Object(Et.a)(i,2),o=c[0],u=c[1];Object(s.useEffect)((function(){u(e.status)}),[e.status]);return Object(me.jsxs)("div",{className:Mt.a.status,children:[!a&&Object(me.jsx)("div",{children:Object(me.jsx)("span",{onDoubleClick:function(){r(!0)},children:null===e.status||""===e.status?Object(me.jsx)("div",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441"}):Object(me.jsx)("div",{children:e.status})})}),a&&Object(me.jsx)("div",{children:Object(me.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(o)},value:o})})]})},Dt=function(e){if(!e.profile)return Object(me.jsx)(ut,{});var t=[];for(var n in e.profile.contacts)e.profile.contacts[n]&&t.push(Object(me.jsx)("div",{children:n+": "+e.profile.contacts[n]}));return Object(me.jsxs)("div",{className:Mt.a.profileInfo,children:[Object(me.jsxs)("div",{className:Mt.a.topBlock,children:[Object(me.jsxs)("div",{className:Mt.a.fullN,children:[e.profile.fullName,Object(me.jsx)("div",{className:Mt.a.status,children:Object(me.jsx)(Ut,{updateStatus:e.updateStatus,status:e.status})})]}),Object(me.jsx)("div",{children:Object(me.jsx)("img",{className:Mt.a.ava,src:null!=e.profile.photos.large?e.profile.photos.large:st})})]}),Object(me.jsxs)("div",{className:Mt.a.bottomBlock,children:[Object(me.jsx)("div",{className:Mt.a.aboutMe,children:"About me:"}),Object(me.jsx)("div",{className:Mt.a.aboutMeDescr,children:e.profile.aboutMe}),Object(me.jsx)("div",{className:Mt.a.contacts,children:"Contacts:"}),Object(me.jsx)("div",{className:Mt.a.contactsList,children:t})]})]})},Bt=function(e){return Object(me.jsxs)("div",{className:xt.a.profile,children:[Object(me.jsx)(Dt,{status:e.status,updateStatus:e.updateStatus,profile:e.profile}),Object(me.jsx)(yt,{})]})},Lt=function(e){Object(be.a)(n,e);var t=Object(he.a)(n);function n(){return Object(pe.a)(this,n),t.apply(this,arguments)}return Object(fe.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userid;e||this.props.isAuth&&(e=this.props.authUserId),this.props.isAuth&&(this.props.getProfile(e),this.props.getStatus(e))}},{key:"componentDidUpdate",value:function(e){if(this.props.match.params.userid!==e.match.params.userid){var t=this.props.match.params.userid;t||(t=this.props.authUserId),this.props.getProfile(t),this.props.getStatus(t)}e.status!=this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(me.jsx)(Bt,Object(o.a)(Object(o.a)({},this.props),{},{status:this.props.status,updateStatus:this.props.updateStatus,profile:this.props.profile}))}}]),n}(a.a.Component),Tt=Object(i.d)(Object(Ze.b)((function(e){return{profile:e.profilePage.profile,authUserId:e.auth.id,isAuth:e.auth.isAuth,status:e.profilePage.status}}),{setUserProfile:z,getProfile:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){var s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:s=t.sent,n(z(s));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){var s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:s=t.sent,n(G(s));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e);case 2:0===t.sent.resultCode&&n(G(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),Me.f,Xe)(Lt),Ft=n(109),Rt=n.n(Ft),zt=Object(Te.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(me.jsxs)("form",{onSubmit:t,children:[Object(me.jsx)("div",{children:Object(me.jsx)(Le.a,{component:Qe,name:"login",placeholder:"Login",validate:[Ye]})}),Object(me.jsx)("div",{children:Object(me.jsx)(Le.a,{component:Qe,name:"password",placeholder:"Password",type:"password",validate:[Ye]})}),Object(me.jsx)("div",{className:Rt.a.formSummaryError,children:n}),Object(me.jsxs)("div",{children:[Object(me.jsx)("div",{className:Rt.a.checkbox,children:Object(me.jsx)(Le.a,{component:Qe,name:"rememberMe",type:"checkbox"})}),Object(me.jsx)("div",{className:Rt.a.checkbox,children:" remember me"})]}),Object(me.jsx)("div",{children:Object(me.jsx)("button",{children:"Login"})})]})})),Gt=function(e){return e.isAuth?Object(me.jsx)(Me.a,{to:"/profile"}):Object(me.jsxs)("div",{children:[Object(me.jsx)("h2",{children:"Login"}),Object(me.jsx)(zt,{onSubmit:function(t){e.sendLogin(t)}})]})},Ht=function(e){Object(be.a)(n,e);var t=Object(he.a)(n);function n(){var e;Object(pe.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).sendLogin=function(t){e.props.loginUser(t.login,t.password,t.rememberMe)},e}return Object(fe.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(me.jsx)(Gt,Object(o.a)({sendLogin:this.sendLogin},this.props))}}]),n}(a.a.Component),Qt=Object(i.d)(Object(Ze.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginUser:function(e,t,n){return function(){var s=Object(d.a)(l.a.mark((function s(a){var r,i;return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,m(e,t,n);case 2:0===(r=s.sent).resultCode?a($()):(i=r.messages.length>0?r.messages[0]:"Undefined error",a(Object(J.a)("login",{_error:i})));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()},logoutUser:ee}))(Ht),Yt=n(47),qt=n.n(Yt),Kt=function(e){return Object(me.jsx)("header",{className:qt.a.header,children:Object(me.jsxs)("div",{className:qt.a.rightSide,children:[e.isAuth?Object(me.jsx)("div",{className:qt.a.username,children:Object(me.jsx)(De.b,{className:qt.a.username,to:"/profile/"+e.userId,children:e.login})}):Object(me.jsx)("div",{className:qt.a.login,children:Object(me.jsx)(De.b,{className:qt.a.login,to:"/login",children:"Login"})}),e.isAuth&&Object(me.jsx)("div",{className:qt.a.logout,children:Object(me.jsx)("img",{className:qt.a.logout,onClick:e.logout,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIJSURBVHgB7ZjhUcIwFMf/CR3ADYQJZANhA51Aehx34BdxAnEC/SaHcMEJYANwAnECcQO+W4kvpRwcphTb195x9ncHoUlo/s3re8kLkJOT82dEWINqqDIKeKAeRaSNxpy+Xbfrzm3NVpGqqYrU8kY/T5AdC3ious/ubLdBhvxBIVuB8MdzyHIWHFulFrokNpM8XerlK1JCCnlORSW4LNr6OIjACKx36x2kxKA56JDQyr4+EkfAUYiMNPeh+BFBYoQvCiUWD00Cy0wGIWtC8a5Mjz3xYywjPOYWuMHGM0+4hUr7mKJNs+Kaj/yWY0TgPrm3VLxsVbEKFWBEtdSQiqutqtBVZE0Qgu6Cyzk9cGm3D6t30wA1pDCjVu/uNXplURCxlkVPe0NHOme+E61YC63G9XqrSMdxxvReniIu+ldNIqFZBnMjdIQYZCnSONElYmA1t9CihiRI2nJt3klDpJfvwyqSdshTxERdK8Up0MBq7kBgbasqsUCDdSb7rf4FmdwPQbTizA4ZJC2BoSIl5KMQqxC0LCzvqdg7kFk10hK40sNyEzmkYh5csgpc3Z8BPxXVqGrod26BBrZNb5Azs+4j1+Q5DheR5jZ5se+9KRHk3XuxL4sQH1Ssd0GVqLyYC3K8T1u93dweTDqwQLYswvYM4adqlAHSccsQyOBUjWKs8ESbO3Tl5PxrfgAXHLnb8sYvQwAAAABJRU5ErkJggg=="})}),e.isAuth&&Object(me.jsx)("img",{className:qt.a.photo,src:e.photoSmall?e.photoSmall:e.photoLarge?e.photoLarge:st})]})})},Vt=function(e){Object(be.a)(n,e);var t=Object(he.a)(n);function n(){var e;Object(pe.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).sendLogout=function(){e.props.logoutUser()},e}return Object(fe.a)(n,[{key:"render",value:function(){return Object(me.jsx)(Kt,Object(o.a)(Object(o.a)({},this.props),{},{logout:this.sendLogout}))}}]),n}(a.a.Component),Jt=Object(i.d)(Object(Ze.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,userId:e.auth.id,photoSmall:e.auth.small,photoLarge:e.auth.large}}),{authUser:$,logoutUser:ee,setAuthUserData:X}))(Vt),Wt=n(34),Zt=n.n(Wt),Xt=function(e){return Object(me.jsxs)("nav",{className:Zt.a.nav,children:[Object(me.jsx)("div",{className:Zt.a.item,children:Object(me.jsx)(De.b,{to:"/profile",activeClassName:Zt.a.active,children:"Profile"})}),Object(me.jsx)("div",{className:Zt.a.item,children:Object(me.jsx)(De.b,{to:"/dialogs",activeClassName:Zt.a.active,children:"Messages"})}),Object(me.jsx)("div",{className:Zt.a.item,children:Object(me.jsx)(De.b,{to:"/users",activeClassName:Zt.a.active,children:"Users"})}),Object(me.jsx)("div",{className:Zt.a.item,children:Object(me.jsx)(De.b,{to:"/news",activeClassName:Zt.a.active,children:"News"})}),Object(me.jsx)("div",{className:Zt.a.item,children:Object(me.jsx)(De.b,{to:"/music",activeClassName:Zt.a.active,children:"Music"})}),Object(me.jsx)("div",{className:Zt.a.item,children:Object(me.jsx)(De.b,{to:"/settings",activeClassName:Zt.a.active,children:"Settings"})})]})},$t=function(e){Object(be.a)(n,e);var t=Object(he.a)(n);function n(){return Object(pe.a)(this,n),t.apply(this,arguments)}return Object(fe.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initializedSet?Object(me.jsx)(De.a,{children:Object(me.jsx)("div",{className:"app",children:Object(me.jsxs)("div",{className:"app-wrap",children:[Object(me.jsx)(Xt,{}),Object(me.jsx)(Jt,{}),Object(me.jsxs)("div",{className:"app-wrap-content",children:[Object(me.jsx)(Me.b,{path:"/profile/:userid?",render:function(){return Object(me.jsx)(Tt,{})}}),Object(me.jsx)(Me.b,{path:"/dialogs",render:function(){return Object(me.jsx)($e,{})}}),Object(me.jsx)(Me.b,{path:"/music",render:function(){return Object(me.jsx)(xe,{})}}),Object(me.jsx)(Me.b,{path:"/settings",render:function(){return Object(me.jsx)(Pe,{})}}),Object(me.jsx)(Me.b,{path:"/news",render:function(){return Object(me.jsx)(Ne,{})}}),Object(me.jsx)(Me.b,{path:"/users",render:function(){return Object(me.jsx)(Ot,{})}}),Object(me.jsx)(Me.b,{path:"/login",render:function(){return Object(me.jsx)(Qt,{})}})]})]})})}):Object(me.jsx)("div",{children:Object(me.jsx)(ut,{})})}}]),n}(s.Component),en=Object(i.d)(Object(Ze.b)((function(e){return{initializedSet:e.app.initializedSet}}),{initializeApp:function(){return function(e){var t=e($());Promise.all([t]).then((function(){e({type:re})}))}}}))($t);je.a.render(Object(me.jsx)(Ze.a,{store:le,children:Object(me.jsx)(en,{})}),document.getElementById("root")),r()},39:function(e,t,n){e.exports={topBlock:"ProfileInfo_topBlock__jCLS_",profileInfo:"ProfileInfo_profileInfo__2IJgv",ava:"ProfileInfo_ava__K96Gt",fullN:"ProfileInfo_fullN__1QVRg",status:"ProfileInfo_status__2G3BZ",bottomBlock:"ProfileInfo_bottomBlock__3kBot",aboutMe:"ProfileInfo_aboutMe__1mww3",aboutMeDescr:"ProfileInfo_aboutMeDescr__Q7kwW",contacts:"ProfileInfo_contacts__3y62P",contactsList:"ProfileInfo_contactsList__18QN5"}},47:function(e,t,n){e.exports={header:"Header_header__1VCKf",username:"Header_username__bQjFG",logout:"Header_logout__1UGPC",photo:"Header_photo__1o0ZN",login:"Header_login__3V3Qa",rightSide:"Header_rightSide__2nRdX"}},56:function(e,t,n){e.exports={myPostsContent:"MyPosts_myPostsContent__2VPZl",postsHeader:"MyPosts_postsHeader__3ANY5",addPostField:"MyPosts_addPostField__2KfhT",addPostButton:"MyPosts_addPostButton__1xJMP",addPost:"MyPosts_addPost__qj3M7"}},63:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2xRSA",messages:"Dialogs_messages__1w_Up",dialogsItems:"Dialogs_dialogsItems__2sNe2",addMessage:"Dialogs_addMessage__1Bihp",line1:"Dialogs_line1__1haXI",line2:"Dialogs_line2__3qwc9"}},64:function(e,t,n){e.exports={userBorderAlign:"Message_userBorderAlign__FpAz3",friendBorderAlign:"Message_friendBorderAlign__2Ce3N",userBorder:"Message_userBorder__2f80F",friendBorder:"Message_friendBorder__2YbbU",user:"Message_user__3sZQV",friend:"Message_friend__1KmvT"}},65:function(e,t,n){e.exports={item:"Post_item__ihtu9",likesCount:"Post_likesCount__R9C9-",likeButton:"Post_likeButton__iek-s",postMessage:"Post_postMessage__2yT1f",postImage:"Post_postImage__31InL",like:"Post_like__oViQh"}}},[[354,1,2]]]);
//# sourceMappingURL=main.a250e0fd.chunk.js.map