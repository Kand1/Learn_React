(this.webpackJsonpvladek=this.webpackJsonpvladek||[]).push([[0],{111:function(e,t,n){e.exports={app:"App_app__1EJzZ",appWrap:"App_appWrap__229eX",appWrapContent:"App_appWrapContent__jN9a4"}},131:function(e,t,n){e.exports={formControl:"FormContent_formControl__t2nWo",error:"FormContent_error__8uUgT"}},139:function(e,t,n){e.exports={item:"Info_item__1nmAT",header:"Info_header__1coHF"}},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var s=n(57),a=n(7),r="dialogs/ADD-MESSAGE",i="dialogs/CHANGE-ID",o=function(e){return{type:r,text:e}},c=function(e){return{type:i,id:e}},u={messagesData:[{id:0,messages:[{text:"hi",sender:"user"},{text:"Hi",sender:"friend"},{text:"How r u ?",sender:"friend"},{text:"ok, bro",sender:"user"},{text:". . .",sender:"user"}]},{id:1,messages:[{text:"hi",sender:"user"},{text:"Auuu",sender:"user"},{text:"Wheere r u ?",sender:"user"},{text:". . .",sender:"user"}]},{id:2,messages:[{text:"Man",sender:"frien"},{text:"U r &&&",sender:"friend"},{text:"How r u ?",sender:"friend"},{text:"maaaaaaaaa55n",sender:"user"}]},{id:3,messages:[]},{id:4,messages:[]},{id:5,messages:[]},{id:6,messages:[]}],newMessageText:"",newMessageId:"0",dialogsData:[{id:0,name:"check"},{id:1,name:"Dimych"},{id:2,name:"Vlad"},{id:3,name:"Andr"},{id:4,name:"Valent"},{id:5,name:"Sant"},{id:6,name:"Dash"}]};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,n=Object(a.a)(Object(a.a)({},e),{},{messagesData:Object(s.a)(e.messagesData)});switch(n.messagesData=e.messagesData.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{messages:Object(s.a)(e.messages)})})),t.type){case r:var o={text:t.text,sender:"user"};return n.messagesData[n.newMessageId].messages.push(o),n;case i:return n.newMessageId=t.id,n;default:return e}return e}},180:function(e,t,n){e.exports={profile:"Profile_profile__31pKM"}},182:function(e,t,n){e.exports={preloader:"Preloader_preloader__2VKDw"}},222:function(e,t,n){},30:function(e,t,n){e.exports={nav:"Sidebar_nav__2xqhk",item:"Sidebar_item__27Mug",active:"Sidebar_active__1YCaY",itemMarg:"Sidebar_itemMarg__3fC-R"}},31:function(e,t,n){e.exports={topBlock:"ProfileInfo_topBlock__IUvgD",profileInfo:"ProfileInfo_profileInfo__1_XYo",ava:"ProfileInfo_ava__2-Vha",fullN:"ProfileInfo_fullN__3uQfb",status:"ProfileInfo_status__26BKT",statusInput:"ProfileInfo_statusInput__2rRos",bottomBlock:"ProfileInfo_bottomBlock__3hB6o",aboutMe:"ProfileInfo_aboutMe__1c5a2",aboutMeDescr:"ProfileInfo_aboutMeDescr__2VCKZ",contacts:"ProfileInfo_contacts__3fDmQ",contactsList:"ProfileInfo_contactsList__JV-XQ",changeAvatarButton:"ProfileInfo_changeAvatarButton__3jR1_"}},353:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=(n(222),function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,363)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))}),i=n(12),o=n(57),c=n(7),u=n(18),l=n.n(u),d=n(43),j=n(99),p=n.n(j).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"b6ba6bc3-2474-46aa-a1e8-ad9e0eee24a4"}}),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return p.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},b=function(e){return p.post("follow/".concat(e)).then((function(e){return e.data}))},h=function(e){return p.delete("follow/".concat(e)).then((function(e){return e.data}))},O=function(){return p.get("auth/me").then((function(e){return e.data}))},g=function(e,t,n){return p.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},m=function(){return p.delete("auth/login").then((function(e){return e.data}))},x=function(e){return p.get("profile/".concat(e)).then((function(e){return e.data}))},v=function(e){return p.get("profile/status/".concat(e)).then((function(e){return e.data}))},_=function(e){return p.put("profile/status",{status:e}).then((function(e){return e.data}))},P=function(e){var t=new FormData;return t.append("image",e),p.put("profile/photo",t,{headres:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},A=function(e,t,n,s){return e.map((function(e){return e[n]===t?Object(c.a)(Object(c.a)({},e),s):e}))},S="users/TOGGLE-SUB",N="users/SET-USERS",C="users/SET-CURRENT-PAGE",w="users/SET-TOTAL-USERS-COUNT",y="users/SET-PAGE-SIZE",k="users/TOGGLE-IS-FETCHING",I="users/TOGGLE-FOLLOWING-PROGRESS",U=function(e,t){return{type:S,userId:e,isFollow:t}},E=function(e,t){return{type:I,isFetching:e,userId:t}},D=function(e){return{type:k,isFetching:e}},B={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingProgress:[]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(c.a)(Object(c.a)({},e),{},{users:A(e.users,t.userId,"id",{followed:t.isFollow})});case N:return Object(c.a)(Object(c.a)({},e),{},{users:Object(o.a)(t.users)});case C:return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.curP});case w:return Object(c.a)(Object(c.a)({},e),{},{totalUsersCount:t.totalC});case y:return Object(c.a)(Object(c.a)({},e),{},{pageSize:t.pageS});case k:return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});case I:return Object(c.a)(Object(c.a)({},e),{},{followingProgress:t.isFetching?[].concat(Object(o.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!=t.userId}))});default:return e}},M="profile/DELETE-POST",T="profile/ADD-POST",F="profile/SET-USER-PROFILE",z="profile/SET-STATUS",R="profile/SET-PHOTO",H=function(e){return{type:F,profile:e}},Y=function(e){return{type:z,status:e}},J={postsData:[{id:0,message:"you can add posts, but they will be same on any user page",likes:"8"},{id:1,message:"likes dont work",likes:"4"},{id:2,message:"(((",likes:"2"}],profile:null,status:""},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:var n={message:t.text,likes:"0",id:e.postsData.length};return Object(c.a)(Object(c.a)({},e),{},{postsData:[].concat(Object(o.a)(e.postsData),[n])});case F:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case z:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case R:return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.photos})});case M:return Object(c.a)(Object(c.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.id}))});default:return e}return e},G=n(141),K=n(76),q="auth/SET-USER-DARA",Q="auth/DELETE-USER-DATA",V=function(e,t){return{type:q,data:e,photos:t}},X=function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:if(0!==(n=e.sent).resultCode){e.next=8;break}return e.next=6,x(n.data.id);case 6:s=e.sent,t(V(n.data,s.photos));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Z=function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:0===e.sent.resultCode&&t({type:Q});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},$={id:null,email:null,login:null,isAuth:!1,small:null,large:null},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)({},e),t.data),t.photos),{},{isAuth:!0});case Q:return{id:null,email:null,login:null,isAuth:!1};default:return e}return e},te=n(176),ne=n(175),se="app/SET-INITIALIZED",ae={initializedSet:!1},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return Object(c.a)(Object(c.a)({},e),{},{initializedSet:!0});default:return e}return e},ie=Object(i.c)({dialogsPage:G.c,profilePage:W,usersPage:L,auth:ee,app:re,form:ne.a}),oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,ce=Object(i.e)(ie,oe(Object(i.a)(te.a))),ue=n(37),le=n.n(ue),de=n(32),je=n(33),pe=n(35),fe=n(34),be=n(111),he=n.n(be),Oe=n(13),ge=n(19),me=n(180),xe=n.n(me),ve=n(58),_e=n.n(ve),Pe=n(88),Ae=n.n(Pe),Se=n.p+"static/media/default_avatar.5154a37d.jpg",Ne=n(1),Ce=function(e){return Object(Ne.jsxs)("div",{className:Ae.a.item,children:[Object(Ne.jsx)("img",{className:Ae.a.postImage,src:Se}),Object(Ne.jsx)("div",{className:Ae.a.postMessage,children:e.message}),Object(Ne.jsx)("div",{children:Object(Ne.jsx)("button",{className:Ae.a.likeButton,children:"\ud83d\udc9c "+e.likes})})]})},we=n(173),ye=n(174),ke=n(80),Ie=n(66),Ue=Object(ke.a)(25),Ee=a.a.memo((function(e){var t=e.page.postsData.map((function(e){return Object(Ne.jsx)(Ce,{message:e.message,likes:e.likes})}));return Object(Ne.jsx)("div",{children:e.page.profile&&Object(Ne.jsxs)("div",{children:[Object(Ne.jsx)(De,{className:_e.a.item,onSubmit:function(t){e.addPost(t.newPostBody)}}),Object(Ne.jsxs)("div",{className:_e.a.myPostsContent,children:[Object(Ne.jsx)("div",{className:_e.a.postsHeader,children:e.page.profile.fullName+" posts"}),Object(Ne.jsx)("div",{className:_e.a.posts,children:t})]})]})})})),De=Object(ye.a)({form:"addPost"})((function(e){return Object(Ne.jsxs)("form",{onSubmit:e.handleSubmit,className:_e.a.addPost,children:[Object(Ne.jsx)(we.a,{className:_e.a.addPostField,component:Ie.b,name:"newPostBody",placeholder:"Enter your post",validate:[Ue]}),Object(Ne.jsx)("button",{className:_e.a.addPostButton,children:"Add post"})]})})),Be=Ee,Le=Object(ge.b)((function(e){return{page:e.profilePage,id:e.auth.id}}),(function(e){return{addPost:function(t){e(function(e){return{type:T,text:e}}(t))}}}))(Be),Me=n(31),Te=n.n(Me),Fe=(n.p,n.p+"static/media/Spinner200px.d1b92144.svg"),ze=n(182),Re=n.n(ze),He=function(e){return Object(Ne.jsxs)("div",{className:Re.a.preloader,children:[Object(Ne.jsx)("div",{children:"Please wait"}),Object(Ne.jsx)("img",{src:Fe})]})},Ye=(a.a.Component,n(140)),Je=function(e){var t=Object(s.useState)(!1),n=Object(Ye.a)(t,2),a=n[0],r=n[1],i=Object(s.useState)(e.status),o=Object(Ye.a)(i,2),c=o[0],u=o[1];Object(s.useEffect)((function(){u(e.status)}),[e.status]);return Object(Ne.jsxs)("div",{className:Te.a.status,children:[!a&&Object(Ne.jsx)("div",{children:Object(Ne.jsx)("span",{onDoubleClick:function(){r(!0)},children:null===e.status||""===e.status?Object(Ne.jsx)("div",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441"}):Object(Ne.jsx)("div",{children:e.status})})}),a&&Object(Ne.jsx)("div",{children:Object(Ne.jsx)("input",{className:Te.a.statusInput,onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(c)},value:c})})]})},We=function(e){var t=[];for(var n in e.profile.contacts)e.profile.contacts[n]&&t.push(Object(Ne.jsx)("div",{children:n+": "+e.profile.contacts[n]}));return Object(Ne.jsxs)("div",{className:Te.a.profileInfo,children:[Object(Ne.jsxs)("div",{className:Te.a.topBlock,children:[Object(Ne.jsxs)("div",{className:Te.a.fullN,children:[e.profile.fullName,Object(Ne.jsx)("div",{className:Te.a.status,children:Object(Ne.jsx)(Je,{updateStatus:e.updateStatus,status:e.status})})]}),Object(Ne.jsxs)("div",{children:[Object(Ne.jsx)("img",{className:Te.a.ava,src:null!=e.profile.photos.large?e.profile.photos.large:Se}),e.isOwner&&Object(Ne.jsx)("input",{type:"file",className:Te.a.changeAvatarButton,onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}})]})]}),Object(Ne.jsxs)("div",{className:Te.a.bottomBlock,children:[Object(Ne.jsx)("div",{className:Te.a.aboutMe,children:"About me:"}),Object(Ne.jsx)("div",{className:Te.a.aboutMeDescr,children:e.profile.aboutMe}),Object(Ne.jsx)("div",{className:Te.a.contacts,children:"Contacts:"}),Object(Ne.jsx)("div",{className:Te.a.contactsList,children:t})]})]})},Ge=function(e){return e.profile?Object(Ne.jsxs)("div",{className:xe.a.profile,children:[Object(Ne.jsx)(We,{savePhoto:e.savePhoto,isOwner:e.isOwner,status:e.status,updateStatus:e.updateStatus,profile:e.profile}),Object(Ne.jsx)(Le,{})]}):Object(Ne.jsx)(He,{})},Ke=n(98),qe=function(e){Object(pe.a)(n,e);var t=Object(fe.a)(n);function n(){return Object(de.a)(this,n),t.apply(this,arguments)}return Object(je.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userid;e||this.props.isAuth&&(e=this.props.authUserId),this.props.isAuth&&(this.props.getProfile(e),this.props.getStatus(e))}},{key:"componentDidUpdate",value:function(e){if(this.props.match.params.userid!==e.match.params.userid){var t=this.props.match.params.userid;t||(t=this.props.authUserId),this.props.getProfile(t),this.props.getStatus(t)}}},{key:"render",value:function(){return Object(Ne.jsx)(Ge,Object(c.a)(Object(c.a)({},this.props),{},{savePhoto:this.props.savePhoto,isOwner:!this.props.match.params.userid||this.props.match.params.userid===this.props.authUserId,status:this.props.status,updateStatus:this.props.updateStatus,profile:this.props.profile}))}}]),n}(a.a.Component),Qe=Object(i.d)(Object(ge.b)((function(e){return{profile:e.profilePage.profile,authUserId:e.auth.id,isAuth:e.auth.isAuth,status:e.profilePage.status}}),{setUserProfile:H,getProfile:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){var s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:s=t.sent,n(H(s));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){var s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:s=t.sent,n(Y(s));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:0===t.sent.resultCode&&n(Y(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){var s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e);case 2:0===(s=t.sent).resultCode&&n((a=s.data.photos,{type:R,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()}}),Oe.f,Ke.a)(qe),Ve=n(40),Xe=n.n(Ve),Ze=n(356),$e=(n(172),n(26)),et=function(e){var t=e.u,n=e.followingProgress,s=e.followingStatusChange;return Object(Ne.jsxs)("div",{className:Xe.a.user,children:[Object(Ne.jsx)($e.b,{to:"/profile/"+t.id,children:Object(Ne.jsx)("img",{className:Xe.a.avatar,src:null!=t.photos.small?t.photos.small:Se})}),Object(Ne.jsx)("div",{className:Xe.a.followButton,children:t.followed?Object(Ne.jsx)("button",{className:Xe.a.button,disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id,!1)},children:"Unfollow"}):Object(Ne.jsx)("button",{className:Xe.a.button,disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id,!0)},children:"Follow"})}),Object(Ne.jsx)("div",{className:Xe.a.name,children:t.name}),Object(Ne.jsx)("div",{className:Xe.a.status,children:t.status})]},t.id)},tt=function(e){return 0==e.isAuth?Object(Ne.jsx)(Oe.a,{to:"/login"}):Object(Ne.jsxs)("div",{className:Xe.a.content,children:[Object(Ne.jsx)("div",{className:Xe.a.header,children:"Users"}),Object(Ne.jsx)("div",{className:Xe.a.paginationFlex,children:Object(Ne.jsx)("div",{className:Xe.a.pagination,children:Object(Ne.jsx)(Ze.a,{size:"small",defaultCurrent:e.currentPage,defaultPageSize:e.pageSize,total:e.totalUsersCount,onShowSizeChange:function(t,n){e.onPageSizeChange(t,n)},onChange:function(t,n){e.onPageChange(t,n)}})})}),e.users.map((function(t){return Object(Ne.jsx)(et,{u:t,followingProgress:e.followingProgress,followingStatusChange:e.followingStatusChange})}))]})},nt=n(192),st=function(e){return e.usersPage.users},at=function(e){return e.usersPage.pageSize},rt=function(e){return e.usersPage.totalUsersCount},it=function(e){return e.usersPage.currentPage},ot=function(e){return e.usersPage.isFetching},ct=function(e){return e.usersPage.followingProgress},ut=(Object(nt.a)(st,ot,(function(e,t){return t?e.filter((function(e){return!1})):e.filter((function(e){return!0}))})),function(e){Object(pe.a)(n,e);var t=Object(fe.a)(n);function n(){var e;Object(de.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onPageChange=function(t,n){e.props.setCurrentPage(t),e.props.getUsers(t,n)},e.onPageSizeChange=function(t,n){e.props.setPageSize(n),e.props.getUsers(t,n)},e}return Object(je.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(Ne.jsx)(Ne.Fragment,{children:this.props.isFetching?Object(Ne.jsx)(He,{}):Object(Ne.jsx)(tt,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,onPageSizeChange:this.onPageSizeChange,users:this.props.users,followingProgress:this.props.followingProgress,followingStatusChange:this.props.followingStatusChange})})}}]),n}(a.a.Component)),lt=Object(i.d)(Object(ge.b)((function(e){return{users:st(e),pageSize:at(e),totalUsersCount:rt(e),currentPage:it(e),isFetching:ot(e),followingProgress:ct(e)}}),{setCurrentPage:function(e){return{type:C,curP:e}},setPageSize:function(e){return{type:y,pageS:e}},getUsers:function(e,t){return function(){var n=Object(d.a)(l.a.mark((function n(s){var a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(D(!0)),n.next=3,f(e,t);case 3:a=n.sent,s(D(!1)),s((i=a.items,{type:N,users:i})),s((r=a.totalCount,{type:w,totalC:r}));case 7:case"end":return n.stop()}var r,i}),n)})));return function(e){return n.apply(this,arguments)}}()},followingStatusChange:function(e,t){return function(){var n=Object(d.a)(l.a.mark((function n(s){var a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s(E(!0,e)),a=null,!t){n.next=8;break}return n.next=5,b(e);case 5:a=n.sent,n.next=11;break;case 8:return n.next=10,h(e);case 10:a=n.sent;case 11:0===a.resultCode&&(s(U(e,t)),s(E(!1,e)));case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ut),dt=n(48),jt=n.n(dt),pt=Object(ye.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(Ne.jsxs)("form",{onSubmit:t,children:[Object(Ne.jsx)("div",{className:jt.a.header,children:"Login"}),Object(Ne.jsxs)("div",{className:jt.a.loginForm,children:[Object(Ne.jsx)("div",{children:Object(Ne.jsx)(we.a,{className:jt.a.inputField,component:Ie.a,name:"login",placeholder:"Login",validate:[ke.b]})}),Object(Ne.jsx)("div",{children:Object(Ne.jsx)(we.a,{className:jt.a.inputField,component:Ie.a,name:"password",placeholder:"Password",type:"password",validate:[ke.b]})}),Object(Ne.jsx)("div",{className:jt.a.formSummaryError,children:n}),Object(Ne.jsxs)("div",{children:[Object(Ne.jsx)("div",{className:jt.a.checkbox,children:Object(Ne.jsx)(we.a,{component:Ie.a,name:"rememberMe",type:"checkbox"})}),Object(Ne.jsx)("div",{className:jt.a.checkboxText,children:" remember me"})]}),Object(Ne.jsx)("div",{children:Object(Ne.jsx)("button",{className:jt.a.loginButton,children:"Login"})}),Object(Ne.jsxs)("div",{className:jt.a.text,children:["\u0427\u0442\u043e\u0431\u044b \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e \u0441\u0430\u0439\u0442\u0430",Object(Ne.jsx)("br",{}),"\u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b 'Info'",Object(Ne.jsx)("p",{}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430",Object(Ne.jsx)("p",{}),"login: eternalflick@gmail.com",Object(Ne.jsx)("br",{}),"password: 123456"]})]})]})})),ft=function(e){return e.isAuth?Object(Ne.jsx)(Oe.a,{to:"/profile"}):Object(Ne.jsx)("div",{children:Object(Ne.jsx)(pt,{onSubmit:function(t){e.sendLogin(t)}})})},bt=function(e){Object(pe.a)(n,e);var t=Object(fe.a)(n);function n(){var e;Object(de.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).sendLogin=function(t){e.props.loginUser(t.login,t.password,t.rememberMe)},e}return Object(je.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(Ne.jsx)(ft,Object(c.a)({sendLogin:this.sendLogin},this.props))}}]),n}(a.a.Component),ht=Object(i.d)(Object(ge.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginUser:function(e,t,n){return function(){var s=Object(d.a)(l.a.mark((function s(a){var r,i;return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,g(e,t,n);case 2:0===(r=s.sent).resultCode?a(X()):(i=r.messages.length>0?r.messages[0]:"Undefined error",a(Object(K.a)("login",{_error:i})));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()},logoutUser:Z}))(bt),Ot=n(49),gt=n.n(Ot),mt=function(e){return Object(Ne.jsx)("header",{className:gt.a.header,children:Object(Ne.jsxs)("div",{className:gt.a.rightSide,children:[e.isAuth?Object(Ne.jsx)("div",{className:gt.a.username,children:Object(Ne.jsx)($e.b,{className:gt.a.username,to:"/profile/"+e.userId,children:e.login})}):Object(Ne.jsx)("div",{className:gt.a.login,children:Object(Ne.jsx)($e.b,{className:gt.a.login,to:"/login",children:"Login"})}),e.isAuth&&Object(Ne.jsx)("div",{className:gt.a.logout,children:Object(Ne.jsx)("img",{className:gt.a.logout,onClick:e.logout,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIJSURBVHgB7ZjhUcIwFMf/CR3ADYQJZANhA51Aehx34BdxAnEC/SaHcMEJYANwAnECcQO+W4kvpRwcphTb195x9ncHoUlo/s3re8kLkJOT82dEWINqqDIKeKAeRaSNxpy+Xbfrzm3NVpGqqYrU8kY/T5AdC3ious/ubLdBhvxBIVuB8MdzyHIWHFulFrokNpM8XerlK1JCCnlORSW4LNr6OIjACKx36x2kxKA56JDQyr4+EkfAUYiMNPeh+BFBYoQvCiUWD00Cy0wGIWtC8a5Mjz3xYywjPOYWuMHGM0+4hUr7mKJNs+Kaj/yWY0TgPrm3VLxsVbEKFWBEtdSQiqutqtBVZE0Qgu6Cyzk9cGm3D6t30wA1pDCjVu/uNXplURCxlkVPe0NHOme+E61YC63G9XqrSMdxxvReniIu+ldNIqFZBnMjdIQYZCnSONElYmA1t9CihiRI2nJt3klDpJfvwyqSdshTxERdK8Up0MBq7kBgbasqsUCDdSb7rf4FmdwPQbTizA4ZJC2BoSIl5KMQqxC0LCzvqdg7kFk10hK40sNyEzmkYh5csgpc3Z8BPxXVqGrod26BBrZNb5Azs+4j1+Q5DheR5jZ5se+9KRHk3XuxL4sQH1Ssd0GVqLyYC3K8T1u93dweTDqwQLYswvYM4adqlAHSccsQyOBUjWKs8ESbO3Tl5PxrfgAXHLnb8sYvQwAAAABJRU5ErkJggg=="})}),e.isAuth&&Object(Ne.jsx)("img",{className:gt.a.photo,src:e.photoSmall?e.photoSmall:e.photoLarge?e.photoLarge:Se})]})})},xt=function(e){Object(pe.a)(n,e);var t=Object(fe.a)(n);function n(){var e;Object(de.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).sendLogout=function(){e.props.logoutUser()},e}return Object(je.a)(n,[{key:"render",value:function(){return Object(Ne.jsx)(mt,Object(c.a)(Object(c.a)({},this.props),{},{logout:this.sendLogout}))}}]),n}(a.a.Component),vt=Object(i.d)(Object(ge.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,userId:e.auth.id,photoSmall:e.auth.small,photoLarge:e.auth.large}}),{authUser:X,logoutUser:Z,setAuthUserData:V}))(xt),_t=n(30),Pt=n.n(_t),At=function(e){return Object(Ne.jsxs)("nav",{className:Pt.a.nav,children:[Object(Ne.jsx)("div",{className:Pt.a.item,children:Object(Ne.jsx)($e.b,{to:"/profile",activeClassName:Pt.a.active,children:"Profile"})}),Object(Ne.jsx)("div",{className:Pt.a.item,children:Object(Ne.jsx)($e.b,{to:"/dialogs",activeClassName:Pt.a.active,children:"Messages"})}),Object(Ne.jsx)("div",{className:Pt.a.item,children:Object(Ne.jsx)($e.b,{to:"/users",activeClassName:Pt.a.active,children:"Users"})}),Object(Ne.jsx)("div",{className:Pt.a.item,children:Object(Ne.jsx)($e.b,{to:"/news",activeClassName:Pt.a.active,children:"News"})}),Object(Ne.jsx)("div",{className:Pt.a.item,children:Object(Ne.jsx)($e.b,{to:"/music",activeClassName:Pt.a.active,children:"Music"})}),Object(Ne.jsx)("div",{className:Pt.a.item,children:Object(Ne.jsx)($e.b,{to:"/settings",activeClassName:Pt.a.active,children:"Settings"})}),Object(Ne.jsx)("div",{className:Pt.a.item,children:Object(Ne.jsx)($e.b,{to:"/info",activeClassName:Pt.a.active,children:"Info"})})]})},St=n(139),Nt=n.n(St),Ct=function(e){return Object(Ne.jsxs)("div",{children:[Object(Ne.jsx)("div",{className:Nt.a.header,children:"Info"}),Object(Ne.jsxs)("div",{className:Nt.a.item,children:["\u042d\u0442\u043e\u0442 \u043f\u0440\u043e\u0435\u043a\u0442 \u043d\u0435 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e, \u043d\u043e \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e api.",Object(Ne.jsx)("p",{}),"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e \u0432 \u043f\u0440\u043e\u0444\u0438\u043b\u0435",Object(Ne.jsx)("p",{}),"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u0432 \u043f\u0440\u043e\u0444\u0438\u043b\u0435 \u0434\u0432\u043e\u0439\u043d\u044b\u043c \u043d\u0430\u0436\u0430\u0442\u0438\u0435\u043c \u043f\u043e \u043d\u0435\u043c\u0443",Object(Ne.jsx)("p",{}),"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 'Users'",Object(Ne.jsx)("p",{}),"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043d\u0430\u0436\u0430\u0442\u0438\u0435\u043c \u043d\u0430 \u0435\u0433\u043e \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443",Object(Ne.jsx)("p",{}),"\u041d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u0430 'Users'  \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0441 \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430\u043c\u0438 \u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0430\u043c\u0438",Object(Ne.jsx)("p",{}),"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043a\u043b\u0438\u043a\u043d\u0443\u0432 \u043f\u043e \u0435\u0433\u043e \u0444\u043e\u0442\u043e",Object(Ne.jsx)("p",{}),"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u043e\u0432 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c api \u043d\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e, \u0441\u0442\u043e\u044f\u0442 \u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0438 \u0438 \u043f\u043e\u0441\u0442\u044b \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f",Object(Ne.jsx)("p",{}),"Messages / News / Music / Settings - \u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0438",Object(Ne.jsx)("p",{}),"\u0415\u0441\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0430\u044f \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u043d\u0430 \u0432\u0441\u0435\u0445 input \u043f\u043e\u043b\u044f\u0445 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u043f\u0440\u0438 \u043b\u043e\u0433\u0438\u043d\u0435 \u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e)",Object(Ne.jsx)("p",{})]})]})},wt=a.a.lazy((function(){return n.e(4).then(n.bind(null,364))})),yt=a.a.lazy((function(){return n.e(6).then(n.bind(null,365))})),kt=a.a.lazy((function(){return n.e(5).then(n.bind(null,366))})),It=a.a.lazy((function(){return n.e(3).then(n.bind(null,367))})),Ut=function(e){Object(pe.a)(n,e);var t=Object(fe.a)(n);function n(){return Object(de.a)(this,n),t.apply(this,arguments)}return Object(je.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initializedSet?Object(Ne.jsx)("div",{className:he.a.app,children:Object(Ne.jsxs)("div",{className:he.a.appWrap,children:[Object(Ne.jsx)(At,{}),Object(Ne.jsx)(vt,{}),Object(Ne.jsx)("div",{className:he.a.appWrapContent,children:Object(Ne.jsxs)(a.a.Suspense,{fallback:Object(Ne.jsx)(He,{}),children:[Object(Ne.jsx)(Oe.b,{path:"/",render:function(){return Object(Ne.jsx)(Oe.a,{to:"/login"})}}),Object(Ne.jsx)(Oe.b,{path:"/profile/:userid?",render:function(){return Object(Ne.jsx)(Qe,{})}}),Object(Ne.jsx)(Oe.b,{path:"/dialogs",render:function(){return Object(Ne.jsx)(It,{})}}),Object(Ne.jsx)(Oe.b,{path:"/users",render:function(){return Object(Ne.jsx)(lt,{})}}),Object(Ne.jsx)(Oe.b,{path:"/music",render:function(){return Object(Ne.jsx)(wt,{})}}),Object(Ne.jsx)(Oe.b,{path:"/settings",render:function(){return Object(Ne.jsx)(yt,{})}}),Object(Ne.jsx)(Oe.b,{path:"/news",render:function(){return Object(Ne.jsx)(kt,{})}}),Object(Ne.jsx)(Oe.b,{path:"/info",render:function(){return Object(Ne.jsx)(Ct,{})}}),Object(Ne.jsx)(Oe.b,{path:"/login",render:function(){return Object(Ne.jsx)(ht,{})}})]})})]})}):Object(Ne.jsx)("div",{children:Object(Ne.jsx)(He,{})})}}]),n}(s.Component),Et=Object(i.d)(Object(ge.b)((function(e){return{initializedSet:e.app.initializedSet}}),{initializeApp:function(){return function(e){var t=e(X());Promise.all([t]).then((function(){e({type:se})}))}}}))(Ut);le.a.render(Object(Ne.jsx)(ge.a,{store:ce,children:Object(Ne.jsx)($e.a,{children:Object(Ne.jsx)(Et,{})})}),document.getElementById("root")),r()},40:function(e,t,n){e.exports={content:"User_content__3OJjq",avatar:"User_avatar__2_Ukt",user:"User_user__3kdjZ",name:"User_name__EJn-o",status:"User_status__Kqm9D",followButton:"User_followButton__yL_t3",button:"User_button__3T4An",pagination:"User_pagination__xiB_j",paginationFlex:"User_paginationFlex__3Pk1B",header:"User_header__3JxdW"}},48:function(e,t,n){e.exports={checkbox:"Login_checkbox__1FoWl",checkboxText:"Login_checkboxText__30SO1",formSummaryError:"Login_formSummaryError__2JZ_R",loginForm:"Login_loginForm__3RY_F",inputField:"Login_inputField__2y1LH",loginButton:"Login_loginButton__3XhxJ",text:"Login_text__caPhR",header:"Login_header__VncSb"}},49:function(e,t,n){e.exports={header:"Header_header__3WmZD",username:"Header_username__2h7LE",logout:"Header_logout__HgODy",photo:"Header_photo__3JKLn",login:"Header_login__11mA6",rightSide:"Header_rightSide__21HmG"}},58:function(e,t,n){e.exports={myPostsContent:"MyPosts_myPostsContent__PJucm",postsHeader:"MyPosts_postsHeader__2DLpg",addPostField:"MyPosts_addPostField__3g86Q",addPostButton:"MyPosts_addPostButton__3v27f",addPost:"MyPosts_addPost__CzhfN"}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var s=n(7),a=n(113),r=(n(0),n(131)),i=n.n(r),o=n(1),c=function(e){e.input;var t=e.meta,n=Object(a.a)(e,["input","meta"]),s=t.touched&&t.error;return Object(o.jsxs)("div",{className:i.a.formControl+" "+(s?i.a.error:""),children:[Object(o.jsx)("div",{children:n.children}),s&&Object(o.jsx)("span",{children:t.error})]})},u=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return Object(o.jsx)(c,Object(s.a)(Object(s.a)({},e),{},{children:Object(o.jsx)("textarea",Object(s.a)(Object(s.a)({},t),n))}))},l=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return Object(o.jsx)(c,Object(s.a)(Object(s.a)({},e),{},{children:Object(o.jsx)("input",Object(s.a)(Object(s.a)({},t),n))}))}},80:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a}));var s=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symb.")}}},88:function(e,t,n){e.exports={item:"Post_item__3SI1B",likeButton:"Post_likeButton__1pmRj",postMessage:"Post_postMessage__2fJAL",postImage:"Post_postImage__2MNVd"}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var s=n(7),a=n(32),r=n(33),i=n(35),o=n(34),c=n(0),u=n.n(c),l=n(13),d=n(19),j=n(1),p=function(e){var t=function(t){Object(i.a)(c,t);var n=Object(o.a)(c);function c(){return Object(a.a)(this,c),n.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return 0==this.props.isAuth?Object(j.jsx)(l.a,{to:"/login"}):Object(j.jsx)(e,Object(s.a)({},this.props))}}]),c}(u.a.Component);return Object(d.b)((function(e){return{isAuth:e.auth.isAuth}}))(t)}}},[[353,1,2]]]);
//# sourceMappingURL=main.161a6810.chunk.js.map