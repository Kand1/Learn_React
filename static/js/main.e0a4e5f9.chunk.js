(this.webpackJsonpvladek=this.webpackJsonpvladek||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(7),s=n(32),r=n(33),i=n(35),c=n(34),o=n(0),u=n.n(o),l=n(13),d=n(20),j=n(1),p=function(e){var t=function(t){Object(i.a)(o,t);var n=Object(c.a)(o);function o(){return Object(s.a)(this,o),n.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){return 0==this.props.isAuth?Object(j.jsx)(l.a,{to:"/login"}):Object(j.jsx)(e,Object(a.a)({},this.props))}}]),o}(u.a.Component);return Object(d.b)((function(e){return{isAuth:e.auth.isAuth}}))(t)}},113:function(e,t,n){e.exports={app:"App_app__1EJzZ",appWrap:"App_appWrap__229eX",appWrapContent:"App_appWrapContent__jN9a4"}},133:function(e,t,n){e.exports={formControl:"FormContent_formControl__t2nWo",error:"FormContent_error__8uUgT"}},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var a=n(60),s=n(7),r="dialogs/ADD-MESSAGE",i="dialogs/CHANGE-ID",c=function(e){return{type:r,text:e}},o=function(e){return{type:i,id:e}},u={messagesData:[{id:0,messages:[{text:"hi",sender:"user"},{text:"Hi",sender:"friend"},{text:"How r u ?",sender:"friend"},{text:"ok, bro",sender:"user"},{text:". . .",sender:"user"}]},{id:1,messages:[{text:"hi",sender:"user"},{text:"Auuu",sender:"user"},{text:"Wheere r u ?",sender:"user"},{text:". . .",sender:"user"}]},{id:2,messages:[{text:"Man",sender:"frien"},{text:"U r &&&",sender:"friend"},{text:"How r u ?",sender:"friend"},{text:"maaaaaaaaa55n",sender:"user"}]},{id:3,messages:[]},{id:4,messages:[]},{id:5,messages:[]},{id:6,messages:[]}],newMessageText:"",newMessageId:"0",dialogsData:[{id:0,name:"check"},{id:1,name:"Dimych"},{id:2,name:"Vlad"},{id:3,name:"Andr"},{id:4,name:"Valent"},{id:5,name:"Sant"},{id:6,name:"Dash"}]};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,n=Object(s.a)(Object(s.a)({},e),{},{messagesData:Object(a.a)(e.messagesData)});switch(n.messagesData=e.messagesData.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{messages:Object(a.a)(e.messages)})})),t.type){case r:var c={text:t.text,sender:"user"};return n.messagesData[n.newMessageId].messages.push(c),n;case i:return n.newMessageId=t.id,n;default:return e}return e}},17:function(e,t,n){e.exports={topBlock:"ProfileInfo_topBlock__IUvgD",profileInfo:"ProfileInfo_profileInfo__1_XYo",ava:"ProfileInfo_ava__2-Vha",fullN:"ProfileInfo_fullN__3uQfb",status:"ProfileInfo_status__26BKT",statusInput:"ProfileInfo_statusInput__2rRos",bottomBlock:"ProfileInfo_bottomBlock__3hB6o",aboutMe:"ProfileInfo_aboutMe__1c5a2",aboutMeDescr:"ProfileInfo_aboutMeDescr__2VCKZ",contacts:"ProfileInfo_contacts__3fDmQ",contactsList:"ProfileInfo_contactsList__JV-XQ",changeAvatarButton:"ProfileInfo_changeAvatarButton__3jR1_",editButton:"ProfileInfo_editButton__2XOTd",formSummaryError:"ProfileInfo_formSummaryError__3N5mu"}},180:function(e,t,n){e.exports={profile:"Profile_profile__31pKM"}},182:function(e,t,n){e.exports={preloader:"Preloader_preloader__2VKDw"}},223:function(e,t,n){},31:function(e,t,n){e.exports={nav:"Sidebar_nav__2xqhk",item:"Sidebar_item__27Mug",active:"Sidebar_active__1YCaY",itemMarg:"Sidebar_itemMarg__3fC-R"}},354:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=(n(223),function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,363)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))}),i=n(12),c=n(60),o=n(7),u=n(16),l=n.n(u),d=n(38),j=n(101),p=n.n(j).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"b6ba6bc3-2474-46aa-a1e8-ad9e0eee24a4"}}),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return p.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},b=function(e){return p.post("follow/".concat(e)).then((function(e){return e.data}))},h=function(e){return p.delete("follow/".concat(e)).then((function(e){return e.data}))},m=function(){return p.get("auth/me").then((function(e){return e.data}))},O=function(e,t,n){return p.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},g=function(){return p.delete("auth/login").then((function(e){return e.data}))},x=function(e){return p.get("profile/".concat(e)).then((function(e){return e.data}))},v=function(e){return p.get("profile/status/".concat(e)).then((function(e){return e.data}))},_=function(e){return p.put("profile/status",{status:e}).then((function(e){return e.data}))},P=function(e){var t=new FormData;return t.append("image",e),p.put("profile/photo",t,{headres:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},N=function(e){return p.put("profile",e,{headres:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},S=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(o.a)(Object(o.a)({},e),a):e}))},A="users/TOGGLE-SUB",C="users/SET-USERS",w="users/SET-CURRENT-PAGE",y="users/SET-TOTAL-USERS-COUNT",k="users/SET-PAGE-SIZE",I="users/TOGGLE-IS-FETCHING",E="users/TOGGLE-FOLLOWING-PROGRESS",U=function(e,t){return{type:A,userId:e,isFollow:t}},D=function(e,t){return{type:E,isFetching:e,userId:t}},M=function(e){return{type:I,isFetching:e}},B={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingProgress:[]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(o.a)(Object(o.a)({},e),{},{users:S(e.users,t.userId,"id",{followed:t.isFollow})});case C:return Object(o.a)(Object(o.a)({},e),{},{users:Object(c.a)(t.users)});case w:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.curP});case y:return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.totalC});case k:return Object(o.a)(Object(o.a)({},e),{},{pageSize:t.pageS});case I:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case E:return Object(o.a)(Object(o.a)({},e),{},{followingProgress:t.isFetching?[].concat(Object(c.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!=t.userId}))});default:return e}},T=n(56),F="profile/DELETE-POST",z="profile/ADD-POST",R="profile/SET-USER-PROFILE",H="profile/SET-STATUS",J="profile/SET-PHOTO",Y=function(e){return{type:R,profile:e}},V=function(e){return{type:H,status:e}},q=function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:a=t.sent,n(Y(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},W={postsData:[{id:0,message:"you can add posts, but they will be same on any user page",likes:"8"},{id:1,message:"likes dont work",likes:"4"},{id:2,message:"(((",likes:"2"}],profile:null,status:""},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:var n={message:t.text,likes:"0",id:e.postsData.length};return Object(o.a)(Object(o.a)({},e),{},{postsData:[].concat(Object(c.a)(e.postsData),[n])});case R:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case H:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case J:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});case F:return Object(o.a)(Object(o.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.id}))});default:return e}return e},K=n(141),Q="auth/SET-USER-DARA",X="auth/DELETE-USER-DATA",Z=function(e,t){return{type:Q,data:e,photos:t}},$=function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:if(0!==(n=e.sent).resultCode){e.next=8;break}return e.next=6,x(n.data.id);case 6:a=e.sent,t(Z(n.data,a.photos));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ee=function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:0===e.sent.resultCode&&t({type:X});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},te={id:null,email:null,login:null,isAuth:!1,small:null,large:null},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({},e),t.data),t.photos),{},{isAuth:!0});case X:return{id:null,email:null,login:null,isAuth:!1};default:return e}return e},ae=n(176),se=n(175),re="app/SET-INITIALIZED",ie={initializedSet:!1},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return Object(o.a)(Object(o.a)({},e),{},{initializedSet:!0});default:return e}return e},oe=Object(i.c)({dialogsPage:K.c,profilePage:G,usersPage:L,auth:ne,app:ce,form:se.a}),ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,le=Object(i.e)(oe,ue(Object(i.a)(ae.a))),de=n(37),je=n.n(de),pe=n(32),fe=n(33),be=n(35),he=n(34),me=n(113),Oe=n.n(me),ge=n(13),xe=n(20),ve=n(180),_e=n.n(ve),Pe=n(61),Ne=n.n(Pe),Se=n(90),Ae=n.n(Se),Ce=n.p+"static/media/default_avatar.5154a37d.jpg",we=n(1),ye=function(e){return Object(we.jsxs)("div",{className:Ae.a.item,children:[Object(we.jsx)("img",{className:Ae.a.postImage,src:Ce}),Object(we.jsx)("div",{className:Ae.a.postMessage,children:e.message}),Object(we.jsx)("div",{children:Object(we.jsx)("button",{className:Ae.a.likeButton,children:"\ud83e\udd0d "+e.likes})})]})},ke=n(173),Ie=n(174),Ee=n(69),Ue=n(51),De=Object(Ee.a)(25),Me=s.a.memo((function(e){var t=e.page.postsData.map((function(e){return Object(we.jsx)(ye,{message:e.message,likes:e.likes})}));return Object(we.jsx)("div",{children:e.page.profile&&Object(we.jsxs)("div",{children:[Object(we.jsx)(Be,{className:Ne.a.item,onSubmit:function(t){e.addPost(t.newPostBody)}}),Object(we.jsxs)("div",{className:Ne.a.myPostsContent,children:[Object(we.jsx)("div",{className:Ne.a.postsHeader,children:e.page.profile.fullName+" posts"}),Object(we.jsx)("div",{className:Ne.a.posts,children:t})]})]})})})),Be=Object(Ie.a)({form:"addPost"})((function(e){return Object(we.jsxs)("form",{onSubmit:e.handleSubmit,className:Ne.a.addPost,children:[Object(we.jsx)(ke.a,{className:Ne.a.addPostField,component:Ue.b,name:"newPostBody",placeholder:"Enter your post",validate:[De]}),Object(we.jsx)("button",{className:Ne.a.addPostButton,children:"Add post"})]})})),Le=Me,Te=Object(xe.b)((function(e){return{page:e.profilePage,id:e.auth.id}}),(function(e){return{addPost:function(t){e(function(e){return{type:z,text:e}}(t))}}}))(Le),Fe=n(89),ze=n(17),Re=n.n(ze),He=(n.p,n.p+"static/media/Spinner200px.d1b92144.svg"),Je=n(182),Ye=n.n(Je),Ve=function(e){return Object(we.jsxs)("div",{className:Ye.a.preloader,children:[Object(we.jsx)("div",{children:"Please wait"}),Object(we.jsx)("img",{src:He})]})},qe=(s.a.Component,function(e){var t=Object(a.useState)(!1),n=Object(Fe.a)(t,2),s=n[0],r=n[1],i=Object(a.useState)(e.status),c=Object(Fe.a)(i,2),o=c[0],u=c[1];Object(a.useEffect)((function(){u(e.status)}),[e.status]);return Object(we.jsxs)("div",{className:Re.a.status,children:[!s&&Object(we.jsx)("div",{children:Object(we.jsx)("span",{onDoubleClick:e.isOwner?function(){r(!0)}:function(){},children:null===e.status||""===e.status?Object(we.jsx)("div",{children:e.isOwner?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441":"\u0411\u0435\u0437 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"}):Object(we.jsx)("div",{children:e.status})})}),s&&Object(we.jsx)("div",{children:Object(we.jsx)("input",{className:Re.a.statusInput,onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(o)},value:o})})]})}),We=n(46),Ge=n.n(We),Ke=Object(Ie.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(we.jsxs)("form",{onSubmit:t,children:[Object(we.jsx)("div",{className:Ge.a.header,children:"Login"}),Object(we.jsxs)("div",{className:Ge.a.loginForm,children:[Object(we.jsxs)("div",{className:Ge.a.leftPart,children:[Object(we.jsx)("div",{children:Object(we.jsx)(ke.a,{className:Ge.a.inputField,component:Ue.a,name:"login",placeholder:"Login",validate:[Ee.b]})}),Object(we.jsx)("div",{children:Object(we.jsx)(ke.a,{className:Ge.a.inputField,component:Ue.a,name:"password",placeholder:"Password",type:"password",validate:[Ee.b]})}),Object(we.jsx)("div",{className:Ge.a.formSummaryError,children:n}),Object(we.jsxs)("div",{children:[Object(we.jsx)("div",{className:Ge.a.checkbox,children:Object(we.jsx)(ke.a,{component:Ue.a,name:"rememberMe",type:"checkbox"})}),Object(we.jsx)("div",{className:Ge.a.checkboxText,children:" remember me"})]}),Object(we.jsx)("div",{children:Object(we.jsx)("button",{className:Ge.a.loginButton,children:"Login"})})]}),Object(we.jsxs)("div",{className:Ge.a.text,children:["\u0427\u0442\u043e\u0431\u044b \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e \u0441\u0430\u0439\u0442\u0430",Object(we.jsx)("br",{}),"\u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b 'Info'",Object(we.jsx)("p",{}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430",Object(we.jsx)("p",{}),"login: eternalflick@gmail.com",Object(we.jsx)("br",{}),"password: 123456"]})]})]})})),Qe=function(e){return e.isAuth?Object(we.jsx)(ge.a,{to:"/profile"}):Object(we.jsx)("div",{children:Object(we.jsx)(Ke,{onSubmit:function(t){e.sendLogin(t)}})})},Xe=function(e){var t=e.contactTitle;e.contactValue;return Object(we.jsxs)("div",{children:[t+": ",Object(we.jsx)(ke.a,{component:Ue.a,name:"contacts."+t,placeholder:t})]})},Ze=Object(Ie.a)({form:"editProfile"})((function(e){var t=e.handleSubmit,n=(e.error,e.profile),a=[];for(var s in n.contacts)a.push(Object(we.jsx)(Xe,{contactTitle:s,contactValue:n.contacts[s]}));return Object(we.jsxs)("form",{onSubmit:t,className:Re.a.bottomBlock,children:[Object(we.jsx)("div",{className:Re.a.aboutMe,children:"About me:"}),Object(we.jsx)("div",{className:Re.a.aboutMeDescr,children:Object(we.jsx)(ke.a,{component:Ue.a,name:"aboutMe",placeholder:"About me"})}),Object(we.jsx)("div",{className:Re.a.contacts,children:"Contacts:"}),Object(we.jsx)("div",{className:Re.a.contactsList,children:a}),Object(we.jsx)("button",{className:Re.a.editButton,children:"Confirm"})]})})),$e=function(e){var t=e.contactTitle,n=e.contactValue;return Object(we.jsx)("div",{children:t+": "+(n||"")})},et=function(e){var t=[];for(var n in e.profile.contacts)t.push(Object(we.jsx)($e,{contactTitle:n,contactValue:e.profile.contacts[n]}));return Object(we.jsxs)("div",{className:Re.a.bottomBlock,children:[Object(we.jsx)("div",{className:Re.a.aboutMe,children:"About me:"}),Object(we.jsx)("div",{className:Re.a.aboutMeDescr,children:e.profile.aboutMe}),Object(we.jsx)("div",{className:Re.a.contacts,children:"Contacts:"}),Object(we.jsx)("div",{className:Re.a.contactsList,children:t}),e.isOwner&&Object(we.jsx)("button",{onClick:e.toEditMode,className:Re.a.editButton,children:"Edit"})]})},tt=function(e){var t=Object(a.useState)(!1),n=Object(Fe.a)(t,2),s=n[0],r=n[1];return Object(we.jsxs)("div",{className:Re.a.profileInfo,children:[Object(we.jsxs)("div",{className:Re.a.topBlock,children:[Object(we.jsxs)("div",{className:Re.a.fullN,children:[e.profile.fullName,Object(we.jsx)("div",{className:Re.a.status,children:Object(we.jsx)(qe,{updateStatus:e.updateStatus,status:e.status,isOwner:e.isOwner})})]}),Object(we.jsxs)("div",{children:[Object(we.jsx)("img",{className:Re.a.ava,src:null!=e.profile.photos.large?e.profile.photos.large:Ce}),e.isOwner&&Object(we.jsxs)("label",{className:Re.a.changeAvatarButton,children:[Object(we.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}),"Change avatar"]})]})]}),s?Object(we.jsx)(Ze,{profile:e.profile,initialValues:e.profile,onSubmit:function(t){var n=JSON.parse(JSON.stringify(e.profile));for(var a in n.aboutMe=t.aboutMe,n.lookingForAJob=!0,n.lookingForAJobDescription="456",n.contacts)t.contacts[a]?n.contacts[a]=t.contacts[a]:n.contacts[a]="";e.saveProfile(n).then((function(){return r(!1)}))},status:e.status}):Object(we.jsx)(et,{toEditMode:function(){r(!0)},isOwner:e.isOwner,profile:e.profile,status:e.status})]})},nt=function(e){return e.profile?Object(we.jsxs)("div",{className:_e.a.profile,children:[Object(we.jsx)(tt,{savePhoto:e.savePhoto,isOwner:e.isOwner,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus,profile:e.profile}),Object(we.jsx)(Te,{})]}):Object(we.jsx)(Ve,{})},at=n(100),st=function(e){Object(be.a)(n,e);var t=Object(he.a)(n);function n(){return Object(pe.a)(this,n),t.apply(this,arguments)}return Object(fe.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userid;e||this.props.isAuth&&(e=this.props.authUserId),this.props.isAuth&&(this.props.getProfile(e),this.props.getStatus(e))}},{key:"componentDidUpdate",value:function(e){if(this.props.match.params.userid!==e.match.params.userid){var t=this.props.match.params.userid;t||(t=this.props.authUserId),this.props.getProfile(t),this.props.getStatus(t)}}},{key:"render",value:function(){return Object(we.jsx)(nt,Object(o.a)(Object(o.a)({},this.props),{},{savePhoto:this.props.savePhoto,isOwner:!this.props.match.params.userid||this.props.match.params.userid===this.props.authUserId,status:this.props.status,saveProfile:this.props.saveProfile,updateStatus:this.props.updateStatus,profile:this.props.profile}))}}]),n}(s.a.Component),rt=Object(i.d)(Object(xe.b)((function(e){return{profile:e.profilePage.profile,authUserId:e.auth.id,isAuth:e.auth.isAuth,status:e.profilePage.status}}),{setUserProfile:Y,getProfile:q,getStatus:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:a=t.sent,n(V(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:0===t.sent.resultCode&&n(V(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e);case 2:0===(a=t.sent).resultCode&&n((s=a.data.photos,{type:J,photos:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n,a){var s,r,i,c,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:if(0!==(s=t.sent).resultCode){t.next=7;break}n(q(a().auth.id)),t.next=13;break;case 7:throw r=s.messages[0],i={_error:r},(c=r.match(/Invalid url format \(Contacts->(.+)\)/))&&(o=c[1].toLowerCase(),(i={contacts:{}}).contacts[o]=r),n(Object(T.a)("editProfile",i)),r;case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),ge.f,at.a)(st),it=n(41),ct=n.n(it),ot=n(356),ut=(n(172),n(27)),lt=function(e){var t=e.u,n=e.followingProgress,a=e.followingStatusChange;return Object(we.jsxs)("div",{className:ct.a.user,children:[Object(we.jsx)(ut.b,{to:"/profile/"+t.id,children:Object(we.jsx)("img",{className:ct.a.avatar,src:null!=t.photos.small?t.photos.small:Ce})}),Object(we.jsx)("div",{className:ct.a.followButton,children:t.followed?Object(we.jsx)("button",{className:ct.a.button,disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id,!1)},children:"Unfollow"}):Object(we.jsx)("button",{className:ct.a.button,disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id,!0)},children:"Follow"})}),Object(we.jsx)("div",{className:ct.a.name,children:t.name}),Object(we.jsx)("div",{className:ct.a.status,children:t.status})]},t.id)},dt=function(e){return 0==e.isAuth?Object(we.jsx)(ge.a,{to:"/login"}):Object(we.jsxs)("div",{className:ct.a.content,children:[Object(we.jsx)("div",{className:ct.a.header,children:"Users"}),Object(we.jsx)("div",{className:ct.a.paginationFlex,children:Object(we.jsx)("div",{className:ct.a.pagination,children:Object(we.jsx)(ot.a,{defaultCurrent:e.currentPage,defaultPageSize:e.pageSize,total:e.totalUsersCount,onShowSizeChange:function(t,n){e.onPageSizeChange(t,n)},onChange:function(t,n){e.onPageChange(t,n)}})})}),e.users.map((function(t){return Object(we.jsx)(lt,{u:t,followingProgress:e.followingProgress,followingStatusChange:e.followingStatusChange})}))]})},jt=n(192),pt=function(e){return e.usersPage.users},ft=function(e){return e.usersPage.pageSize},bt=function(e){return e.usersPage.totalUsersCount},ht=function(e){return e.usersPage.currentPage},mt=function(e){return e.usersPage.isFetching},Ot=function(e){return e.usersPage.followingProgress},gt=(Object(jt.a)(pt,mt,(function(e,t){return t?e.filter((function(e){return!1})):e.filter((function(e){return!0}))})),function(e){Object(be.a)(n,e);var t=Object(he.a)(n);function n(){var e;Object(pe.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onPageChange=function(t,n){e.props.setCurrentPage(t),e.props.getUsers(t,n)},e.onPageSizeChange=function(t,n){e.props.setPageSize(n),e.props.getUsers(t,n)},e}return Object(fe.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(we.jsx)(we.Fragment,{children:this.props.isFetching?Object(we.jsx)(Ve,{}):Object(we.jsx)(dt,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,onPageSizeChange:this.onPageSizeChange,users:this.props.users,followingProgress:this.props.followingProgress,followingStatusChange:this.props.followingStatusChange})})}}]),n}(s.a.Component)),xt=Object(i.d)(Object(xe.b)((function(e){return{users:pt(e),pageSize:ft(e),totalUsersCount:bt(e),currentPage:ht(e),isFetching:mt(e),followingProgress:Ot(e)}}),{setCurrentPage:function(e){return{type:w,curP:e}},setPageSize:function(e){return{type:k,pageS:e}},getUsers:function(e,t){return function(){var n=Object(d.a)(l.a.mark((function n(a){var s;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(M(!0)),n.next=3,f(e,t);case 3:s=n.sent,a(M(!1)),a((i=s.items,{type:C,users:i})),a((r=s.totalCount,{type:y,totalC:r}));case 7:case"end":return n.stop()}var r,i}),n)})));return function(e){return n.apply(this,arguments)}}()},followingStatusChange:function(e,t){return function(){var n=Object(d.a)(l.a.mark((function n(a){var s;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a(D(!0,e)),s=null,!t){n.next=8;break}return n.next=5,b(e);case 5:s=n.sent,n.next=11;break;case 8:return n.next=10,h(e);case 10:s=n.sent;case 11:0===s.resultCode&&(a(U(e,t)),a(D(!1,e)));case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(gt),vt=function(e){Object(be.a)(n,e);var t=Object(he.a)(n);function n(){var e;Object(pe.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).sendLogin=function(t){e.props.loginUser(t.login,t.password,t.rememberMe)},e}return Object(fe.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(we.jsx)(Qe,Object(o.a)({sendLogin:this.sendLogin},this.props))}}]),n}(s.a.Component),_t=Object(i.d)(Object(xe.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginUser:function(e,t,n){return function(){var a=Object(d.a)(l.a.mark((function a(s){var r,i;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O(e,t,n);case 2:0===(r=a.sent).resultCode?s($()):(i=r.messages.length>0?r.messages[0]:"Undefined error",s(Object(T.a)("login",{_error:i})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},logoutUser:ee}))(vt),Pt=n(50),Nt=n.n(Pt),St=function(e){return Object(we.jsx)("header",{className:Nt.a.header,children:Object(we.jsxs)("div",{className:Nt.a.rightSide,children:[e.isAuth?Object(we.jsx)("div",{className:Nt.a.username,children:Object(we.jsx)(ut.b,{className:Nt.a.username,to:"/profile/"+e.userId,children:e.login})}):Object(we.jsx)("div",{className:Nt.a.login,children:Object(we.jsx)(ut.b,{className:Nt.a.login,to:"/login",children:"Login"})}),e.isAuth&&Object(we.jsx)("div",{className:Nt.a.logout,children:Object(we.jsx)("img",{className:Nt.a.logout,onClick:e.logout,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIJSURBVHgB7ZjhUcIwFMf/CR3ADYQJZANhA51Aehx34BdxAnEC/SaHcMEJYANwAnECcQO+W4kvpRwcphTb195x9ncHoUlo/s3re8kLkJOT82dEWINqqDIKeKAeRaSNxpy+Xbfrzm3NVpGqqYrU8kY/T5AdC3ious/ubLdBhvxBIVuB8MdzyHIWHFulFrokNpM8XerlK1JCCnlORSW4LNr6OIjACKx36x2kxKA56JDQyr4+EkfAUYiMNPeh+BFBYoQvCiUWD00Cy0wGIWtC8a5Mjz3xYywjPOYWuMHGM0+4hUr7mKJNs+Kaj/yWY0TgPrm3VLxsVbEKFWBEtdSQiqutqtBVZE0Qgu6Cyzk9cGm3D6t30wA1pDCjVu/uNXplURCxlkVPe0NHOme+E61YC63G9XqrSMdxxvReniIu+ldNIqFZBnMjdIQYZCnSONElYmA1t9CihiRI2nJt3klDpJfvwyqSdshTxERdK8Up0MBq7kBgbasqsUCDdSb7rf4FmdwPQbTizA4ZJC2BoSIl5KMQqxC0LCzvqdg7kFk10hK40sNyEzmkYh5csgpc3Z8BPxXVqGrod26BBrZNb5Azs+4j1+Q5DheR5jZ5se+9KRHk3XuxL4sQH1Ssd0GVqLyYC3K8T1u93dweTDqwQLYswvYM4adqlAHSccsQyOBUjWKs8ESbO3Tl5PxrfgAXHLnb8sYvQwAAAABJRU5ErkJggg=="})}),e.isAuth&&Object(we.jsx)("img",{className:Nt.a.photo,src:e.photoSmall?e.photoSmall:e.photoLarge?e.photoLarge:Ce})]})})},At=function(e){Object(be.a)(n,e);var t=Object(he.a)(n);function n(){var e;Object(pe.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).sendLogout=function(){e.props.logoutUser()},e}return Object(fe.a)(n,[{key:"render",value:function(){return Object(we.jsx)(St,Object(o.a)(Object(o.a)({},this.props),{},{logout:this.sendLogout}))}}]),n}(s.a.Component),Ct=Object(i.d)(Object(xe.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,userId:e.auth.id,photoSmall:e.auth.small,photoLarge:e.auth.large}}),{authUser:$,logoutUser:ee,setAuthUserData:Z}))(At),wt=n(31),yt=n.n(wt),kt=function(e){return Object(we.jsxs)("nav",{className:yt.a.nav,children:[Object(we.jsx)("div",{className:yt.a.item,children:Object(we.jsx)(ut.b,{to:"/profile",activeClassName:yt.a.active,children:"Profile"})}),Object(we.jsx)("div",{className:yt.a.item,children:Object(we.jsx)(ut.b,{to:"/dialogs",activeClassName:yt.a.active,children:"Messages"})}),Object(we.jsx)("div",{className:yt.a.item,children:Object(we.jsx)(ut.b,{to:"/users",activeClassName:yt.a.active,children:"Users"})}),Object(we.jsx)("div",{className:yt.a.item,children:Object(we.jsx)(ut.b,{to:"/news",activeClassName:yt.a.active,children:"News"})}),Object(we.jsx)("div",{className:yt.a.item,children:Object(we.jsx)(ut.b,{to:"/music",activeClassName:yt.a.active,children:"Music"})}),Object(we.jsx)("div",{className:yt.a.item,children:Object(we.jsx)(ut.b,{to:"/settings",activeClassName:yt.a.active,children:"Settings"})}),Object(we.jsx)("div",{className:yt.a.item,children:Object(we.jsx)(ut.b,{to:"/info",activeClassName:yt.a.active,children:"Info"})})]})},It=n(47),Et=n.n(It),Ut=function(e){return Object(we.jsxs)("div",{children:[Object(we.jsx)("div",{className:Et.a.header,children:"Info"}),Object(we.jsxs)("div",{children:[Object(we.jsx)("div",{className:Et.a.item,children:"\u042d\u0442\u043e\u0442 \u043f\u0440\u043e\u0435\u043a\u0442 \u043d\u0435 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e, \u043d\u043e \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e api."}),Object(we.jsx)("div",{className:Et.a.item,children:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e \u0438 \u043f\u043e\u043b\u044f About me / Contacts \u0432 \u043f\u0440\u043e\u0444\u0438\u043b\u0435"}),Object(we.jsx)("div",{className:Et.a.item,children:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u0432 \u043f\u0440\u043e\u0444\u0438\u043b\u0435 \u0434\u0432\u043e\u0439\u043d\u044b\u043c \u043d\u0430\u0436\u0430\u0442\u0438\u0435\u043c \u043f\u043e \u043d\u0435\u043c\u0443"}),Object(we.jsx)("div",{className:Et.a.item,children:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 'Users'"}),Object(we.jsx)("div",{className:Et.a.item,children:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043d\u0430\u0436\u0430\u0442\u0438\u0435\u043c \u043d\u0430 \u0435\u0433\u043e \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443"}),Object(we.jsx)("div",{className:Et.a.item,children:"\u041d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u0430 'Users'  \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0441 \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430\u043c\u0438 \u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0430\u043c\u0438"}),Object(we.jsx)("div",{className:Et.a.item,children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u043e\u0432 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c api \u043d\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e, \u0441\u0442\u043e\u044f\u0442 \u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0438 \u0438 \u043f\u043e\u0441\u0442\u044b \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f"}),Object(we.jsx)("div",{className:Et.a.item,children:"Messages / News / Music / Settings - \u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0438"}),Object(we.jsx)("div",{className:Et.a.item,children:"\u0415\u0441\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0430\u044f \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u043d\u0430 input \u043f\u043e\u043b\u044f\u0445 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u043f\u0440\u0438 \u043b\u043e\u0433\u0438\u043d\u0435 \u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e)"})]})]})},Dt=s.a.lazy((function(){return n.e(4).then(n.bind(null,364))})),Mt=s.a.lazy((function(){return n.e(6).then(n.bind(null,365))})),Bt=s.a.lazy((function(){return n.e(5).then(n.bind(null,366))})),Lt=s.a.lazy((function(){return n.e(3).then(n.bind(null,367))})),Tt=function(e){Object(be.a)(n,e);var t=Object(he.a)(n);function n(){return Object(pe.a)(this,n),t.apply(this,arguments)}return Object(fe.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initializedSet?Object(we.jsx)("div",{className:Oe.a.app,children:Object(we.jsxs)("div",{className:Oe.a.appWrap,children:[Object(we.jsx)(kt,{}),Object(we.jsx)(Ct,{}),Object(we.jsx)("div",{className:Oe.a.appWrapContent,children:Object(we.jsxs)(s.a.Suspense,{fallback:Object(we.jsx)(Ve,{}),children:[Object(we.jsx)(ge.b,{path:"/",render:function(){return Object(we.jsx)(ge.a,{to:"/login"})}}),Object(we.jsx)(ge.b,{path:"/profile/:userid?",render:function(){return Object(we.jsx)(rt,{})}}),Object(we.jsx)(ge.b,{path:"/dialogs",render:function(){return Object(we.jsx)(Lt,{})}}),Object(we.jsx)(ge.b,{path:"/users",render:function(){return Object(we.jsx)(xt,{})}}),Object(we.jsx)(ge.b,{path:"/music",render:function(){return Object(we.jsx)(Dt,{})}}),Object(we.jsx)(ge.b,{path:"/settings",render:function(){return Object(we.jsx)(Mt,{})}}),Object(we.jsx)(ge.b,{path:"/news",render:function(){return Object(we.jsx)(Bt,{})}}),Object(we.jsx)(ge.b,{path:"/info",render:function(){return Object(we.jsx)(Ut,{})}}),Object(we.jsx)(ge.b,{path:"/login",render:function(){return Object(we.jsx)(_t,{})}})]})})]})}):Object(we.jsx)("div",{children:Object(we.jsx)(Ve,{})})}}]),n}(a.Component),Ft=Object(i.d)(Object(xe.b)((function(e){return{initializedSet:e.app.initializedSet}}),{initializeApp:function(){return function(e){var t=e($());Promise.all([t]).then((function(){e({type:re})}))}}}))(Tt);je.a.render(Object(we.jsx)(xe.a,{store:le,children:Object(we.jsx)(ut.a,{children:Object(we.jsx)(Ft,{})})}),document.getElementById("root")),r()},41:function(e,t,n){e.exports={content:"User_content__3OJjq",avatar:"User_avatar__2_Ukt",user:"User_user__3kdjZ",name:"User_name__EJn-o",status:"User_status__Kqm9D",followButton:"User_followButton__yL_t3",button:"User_button__3T4An",pagination:"User_pagination__xiB_j",paginationFlex:"User_paginationFlex__3Pk1B",header:"User_header__3JxdW"}},46:function(e,t,n){e.exports={checkbox:"Login_checkbox__1FoWl",checkboxText:"Login_checkboxText__30SO1",formSummaryError:"Login_formSummaryError__2JZ_R",inputField:"Login_inputField__2y1LH",loginButton:"Login_loginButton__3XhxJ",loginForm:"Login_loginForm__3RY_F",text:"Login_text__caPhR",leftPart:"Login_leftPart__3dqqD",header:"Login_header__VncSb"}},47:function(e,t,n){e.exports={item:"Info_item__1nmAT",header:"Info_header__1coHF"}},50:function(e,t,n){e.exports={header:"Header_header__3WmZD",username:"Header_username__2h7LE",logout:"Header_logout__HgODy",photo:"Header_photo__3JKLn",login:"Header_login__11mA6",rightSide:"Header_rightSide__21HmG"}},51:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var a=n(7),s=n(115),r=(n(0),n(133)),i=n.n(r),c=n(1),o=function(e){e.input;var t=e.meta,n=Object(s.a)(e,["input","meta"]),a=t.touched&&t.error;return Object(c.jsxs)("div",{className:i.a.formControl+" "+(a?i.a.error:""),children:[Object(c.jsx)("div",{children:n.children}),a&&Object(c.jsx)("span",{children:t.error})]})},u=function(e){var t=e.input,n=(e.meta,Object(s.a)(e,["input","meta"]));return Object(c.jsx)(o,Object(a.a)(Object(a.a)({},e),{},{children:Object(c.jsx)("textarea",Object(a.a)(Object(a.a)({},t),n))}))},l=function(e){var t=e.input,n=(e.meta,Object(s.a)(e,["input","meta"]));return Object(c.jsx)(o,Object(a.a)(Object(a.a)({},e),{},{children:Object(c.jsx)("input",Object(a.a)(Object(a.a)({},t),n))}))}},61:function(e,t,n){e.exports={myPostsContent:"MyPosts_myPostsContent__PJucm",postsHeader:"MyPosts_postsHeader__2DLpg",addPostField:"MyPosts_addPostField__3g86Q",addPostButton:"MyPosts_addPostButton__3v27f",addPost:"MyPosts_addPost__CzhfN"}},69:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var a=function(e){if(!e)return"Field is required"},s=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symb.")}}},90:function(e,t,n){e.exports={item:"Post_item__3SI1B",likeButton:"Post_likeButton__1pmRj",postMessage:"Post_postMessage__2fJAL",postImage:"Post_postImage__2MNVd"}}},[[354,1,2]]]);
//# sourceMappingURL=main.e0a4e5f9.chunk.js.map