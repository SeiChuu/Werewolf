(this.webpackJsonpwerewolf=this.webpackJsonpwerewolf||[]).push([[0],{107:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=107},115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),s=a.n(o),i=(a(98),a(26)),l=a(13),c=r.a.createContext(null),u=function(e){return function(t){return r.a.createElement(c.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))}))}},h=c,d=a(7),m=a.n(d),p=a(16),f=a(18),b=a(63),g=a.n(b),v=(a(100),a(101),{apiKey:"AIzaSyDRRUvacIROPbqJN-lYP9m2ZrSgM_AkHzM",authDomain:"werewolf-capstone.firebaseapp.com",databaseURL:"https://werewolf-capstone.firebaseio.com",projectId:"werewolf-capstone",storageBucket:"werewolf-capstone.appspot.com",messagingSenderId:"74673561059",AppId:"1:74673561059:web:b44d84cc74d54e784594d6",MeasurementId:"G-M6N194G87D"}),w=function e(){var t=this;Object(f.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.createRoom=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.db.collection("rooms").add({Night:!1,checkMajority:!1,checkMedic:!1,checkSeer:!1,checkWerewolf:!1,dead:[],gameStarted:!1,majorityReached:!1,medic:"",medicChoice:"",players:[],seer:"",seerChoice:"",villagers:["sentinel"],villagersChoice:"",votesVillagers:[],votesWerewolves:[],werewolves:[],werewolvesChoice:""});case 2:return a=e.sent,e.abrupt("return",a.id);case 4:case"end":return e.stop()}}),e)}))),this.user=function(e){return t.db.collection("users").doc("".concat(e))},this.users=function(){return t.db.collection("users").get()},g.a.initializeApp(v),this.auth=g.a.auth(),this.db=g.a.firestore()},y=u((function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doSignOut},"Sign Out")})),E=r.a.createContext(null),O=a(20),j=a(22),k=a(21),S=function(e){var t=function(t){Object(j.a)(n,t);var a=Object(k.a)(n);function n(e){var t;return Object(f.a)(this,n),(t=a.call(this,e)).state={authUser:null},t}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(E.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return u(t)},C=function(e){return function(t){var a=function(a){Object(j.a)(o,a);var n=Object(k.a)(o);function o(){return Object(f.a)(this,o),n.apply(this,arguments)}return Object(O.a)(o,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(a){e(a)||t.props.history.push("/signin")}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(E.Consumer,null,(function(n){return e(n)?r.a.createElement(t,a.props):null}))}}]),o}(r.a.Component);return Object(l.e)(u(a))}},I=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"Landing")),r.a.createElement("li",null,r.a.createElement(y,null)))},x=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"Landing")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/signin"},"Sign In")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/signup"},"Sign-Up")))},D=function(){return r.a.createElement("div",null,r.a.createElement(E.Consumer,null,(function(e){return e?r.a.createElement(I,null):r.a.createElement(x,null)})))},T=a(19),A=a(146),W=a(156),P=a(157),U=a(154),N=function(e){Object(j.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).handleOnChange=function(e){n.setState({roomId:e.target.value})},n.state={roomId:""},n.handleNewGame=n.handleNewGame.bind(Object(T.a)(n)),n.handleJoinGame=n.handleJoinGame.bind(Object(T.a)(n)),n.handleOnChange=n.handleOnChange.bind(Object(T.a)(n)),n}return Object(O.a)(a,[{key:"handleNewGame",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.firebase.createRoom();case 2:t=e.sent,this.props.history.push("/WaitingRoom/".concat(t));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleJoinGame",value:function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.history.push("/WaitingRoom/".concat(this.state.roomId));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A.a,{id:"landing-page-container",display:"flex",maxWidth:"sm"},r.a.createElement(W.a,{display:"flex",width:"100%",justifyContent:"center",alignItems:"center"},r.a.createElement("h1",{id:"werewolf-title"},"WEREWOLF")),r.a.createElement(W.a,{id:"landing-page-buttons-box",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"stretch",width:"100%",margin:"50%"},r.a.createElement(W.a,{id:"new-game-button-box",display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center",margin:"5%"},r.a.createElement(P.a,{variant:"outlined",color:"secondary",height:"100%",width:"100%",onClick:this.handleNewGame},"New Game")),r.a.createElement(W.a,{id:"join-game-button-box",display:"flex",flexDirection:"row",height:"100%",width:"100%",alignItems:"center"},r.a.createElement("form",{onSubmit:this.handleJoinGame},r.a.createElement(U.a,{id:"join-game-textfield",variant:"filled",label:"Join Game ID",color:"secondary",value:this.state.roomId,onChange:this.handleOnChange}),r.a.createElement(P.a,{type:"submit",variant:"outlined",color:"secondary"},"Join Game"))))))}}]),a}(r.a.Component),M=Object(l.e)(u(N)),R=a(31),G=a(27),V={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},B=function(e){Object(j.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,o=t.passwordOne;n.props.firebase.doCreateUserWithEmailAndPassword(r,o).then((function(e){return console.log("authUser",e),n.props.firebase.user(e.user.uid).set({username:a,email:r,currentGame:""})})).then((function(e){n.setState(Object(G.a)({},V)),n.props.history.push("/home")})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.state=Object(G.a)({},V),n}return Object(O.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,o=e.passwordTwo,s=e.error,i=n!==o||""===n||""===a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Username"}),r.a.createElement("input",{name:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordTwo",value:o,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",{disabled:i,type:"submit"},"Sign Up"),s&&r.a.createElement("p",null,s.message))}}]),a}(n.Component),J=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(i.b,{to:"/signup"},"Sign Up"))},z=Object(l.e)(u(B)),F=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(z,null))},L={email:"",error:null},H=function(e){Object(j.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then((function(){n.setState(Object(G.a)({},L))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.state=Object(G.a)({},L),n}return Object(O.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:n,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),a}(n.Component),K=function(){return r.a.createElement("p",null,r.a.createElement(i.b,{to:"/pw-forget"},"Forgot Password?"))},_=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(Y,null))},Y=u(H),Z={email:"",password:"",error:null},q=function(e){Object(j.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then((function(){n.setState(Object(G.a)({},Z)),n.props.history.go(0)})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.state=Object(G.a)({},Z),n}return Object(O.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,o=""===a||""===t;return r.a.createElement(A.a,null,r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(U.a,{name:"email",value:t,variant:"outlined",onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement(U.a,{name:"password",value:a,variant:"outlined",onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement(P.a,{disabled:o,type:"submit",variant:"outlined",color:"primary"},"Sign In"),n&&r.a.createElement("p",null,n.message)))}}]),a}(n.Component),Q=Object(l.e)(u(q)),X=function(){return r.a.createElement(A.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"SignIn"),r.a.createElement(Q,null),r.a.createElement(K,null),r.a.createElement(J,null)))},$=C((function(e){return!!e}))((function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home"),r.a.createElement("p",null,"The Home Page is accessible by every signed in user."))})),ee={passwordOne:"",passwordTwo:"",error:null},te=function(e){Object(j.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then((function(){n.setState(Object(G.a)({},ee))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.state=Object(G.a)({},ee),n}return Object(O.a)(a,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,a=e.passwordTwo,n=e.error,o=t!==a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:a,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message))}}]),a}(n.Component),ae=u(te),ne=C((function(e){return!!e}))((function(){return r.a.createElement("div",null,r.a.createElement(E.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null," Account: ",e.email),r.a.createElement(ae,null))})))})),re=a(40),oe=u((function(e){var t,a=Object(n.useState)(null),o=Object(re.a)(a,2),s=o[0],i=o[1];return Object(n.useEffect)((function(){e.firebase.users().then((function(e){if(e){var t=[];e.forEach((function(e){t.push(Object(G.a)({key:e.id},e.data()))})),i(t)}else i([])})).catch((function(e){}))}),[]),t=null===s?r.a.createElement("li",null,"LOADING..."):0===s.length?r.a.createElement("li",null,"NO USERS FOUND"):s.map((function(e){return r.a.createElement("li",{key:e.key},r.a.createElement("div",null,"Username: ",e.username," ")," ",r.a.createElement("div",null,"Email: ",e.email))})),r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),r.a.createElement("p",null,"Restricted area! Only users with the admin role are authorized."),r.a.createElement("ul",null,t))})),se=a(159),ie=a(153),le=a(151),ce=a(152),ue=a(150);function he(){var e=r.a.useState(!1),t=Object(re.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!0),s=Object(re.a)(o,1)[0],i=r.a.useState("xl"),l=Object(re.a)(i,1)[0],c=function(){n(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{variant:"outlined",color:"secondary",onClick:function(){n(!0)}},"Rules"),r.a.createElement(se.a,{fullWidth:s,maxWidth:l,open:a,onClose:c,"aria-labelledby":"max-width-dialog-title"},r.a.createElement(ue.a,{id:"max-width-dialog-title"},"Rules"),r.a.createElement(le.a,null,r.a.createElement(ce.a,null,"The game proceeds in alternating night and day rounds. beginning with nighttime."),r.a.createElement(ce.a,null,"The Night"),r.a.createElement(ce.a,null,'At night, the moderator tells all the players, "Close your eyes." Everyone begins slapping their knees (or table) to cover up any noises of the night.'," "),r.a.createElement(ce.a,null,'The moderator says, "Werewolves, open your eyes." The werewolves do so, and look around to recognize each other. The moderator should also note who the werewolves are. The moderator says "Werewolves, pick someone to kill." The werewolves silently agree on one villager (It\'s critical that they remain silent). The other players are sitting there with their eyes closed, and the werewolves don\'t want to give themselves away. Sign language is appropriate, or just pointing, nodding, raising eyebrows, and so on.'," "),r.a.createElement(ce.a,null,'When the werewolves have agreed on a victim, and the moderator understands who they picked, the moderator says, "Werewolves, close your eyes."'," "),r.a.createElement(ce.a,null,'Now, the moderator awakens the Doctor and says, "Doctor, who would you like to heal?" The Doctor selects someone they\'d like to heal. The person chosen (which could be himself) will survive if the werewolves chose to kill them. If someone was killed, and then saved by the Doctor, the moderator will let the village know by saying, "Someone has been saved", at the beginning of day time.'," "),r.a.createElement(ce.a,null,'The moderator says "Seer, open your eyes. Seer, pick someone to ask about." The seer opens their eyes and silently points at another player. (Again, it is critical that this be entirely silent -- because the seer doesn\'t want to reveal his identity to the werewolves.)'," "),r.a.createElement(ce.a,null,'The moderator silently signs thumbs-up if the seer pointed at a werewolf, and thumbs-down if the seer pointed at an innocent villager. The moderator then says, "Seer, close your eyes."'),r.a.createElement(ce.a,null,"The moderator says, \"Everybody open your eyes; it's daytime.\" And let's the villager know who has been killed. That person is immediately dead and out of the game. They do not reveal their identity."," "),r.a.createElement(ce.a,null,"Alternative rule: After you die, you reveal what role you had."," "),r.a.createElement(ce.a,null,"The Day "),r.a.createElement(ce.a,null,"For the first day, go around and have everyone introduce themselves (Example: Hey, I'm Matt. I'm the baker here in town, and I'm a villager."," "),r.a.createElement(ce.a,null,'Daytime is very simple; all the living players gather in the village and decide who to kill. As soon as a majority of players vote for a particular player to kill, the moderator says "Ok, you\'re dead."'," "),r.a.createElement(ce.a,null,"Alternative rule: To keep the game moving along, you can put a time limit to how long a day is, and if the village doesn't chose someone to kill, they miss the opportunity."," "),r.a.createElement(ce.a,null,"There are no restrictions on speech. Any living player can say anything they want -- truth, misdirection, nonsense, or a barefaced lie. Dead players may not speak at all. Similarly, as soon as a majority vote indicates that a player has been chosen to be killed, they are dead. If they want to protest their innocence or reveal some information (like the seer's visions), they must do it before the vote goes through."," "),r.a.createElement(ce.a,null,"Once a player is killed, night falls and the cycle repeats."," "),r.a.createElement(ce.a,null,"Moderator note: Continue to wake up the Doctor and Seer even if they are no longer alive."),r.a.createElement(ce.a,null,"Winning"),r.a.createElement(ce.a,null,"The villagers win if they kill both werewolves."),r.a.createElement(ce.a,null,"The werewolves win if they kill enough villagers so that the numbers are even. (Example: Two werewolves and two villagers)")),r.a.createElement(ie.a,null,r.a.createElement(P.a,{onClick:c,color:"secondary"},"Close"))))}var de=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Lobby"),r.a.createElement(A.a,{maxWidth:"sm"},r.a.createElement(W.a,{display:"flex",flexDirection:"column",width:"60%"},r.a.createElement(W.a,{display:"flex",flexDirection:"row",width:"100%"},r.a.createElement(he,null)),r.a.createElement(W.a,{display:"flex",flexDirection:"row",width:"100%"},r.a.createElement(P.a,{variant:"outlined",color:"secondary",disabled:!0},"Start")))))},me=function(){return r.a.createElement("div",null,r.a.createElement(E.Consumer,null,(function(e){return e?r.a.createElement(de,null):r.a.createElement(X,null)})))},pe=a(78),fe=a.n(pe),be=function(e){var t=e.userStreamTuple,a=e.handleVillagerVoteButton,o=(e.night,e.ourDocId,e.role,Object(n.useRef)()),s=Object(re.a)(t,2),i=s[0],l=s[1];return Object(n.useEffect)((function(){o.current.srcObject=l}),[]),r.a.createElement("div",{className:"participant"},r.a.createElement("h3",null,i),r.a.createElement("video",{ref:o,autoPlay:!0,muted:!0}),r.a.createElement("button",{onClick:function(){return a(i)}},"Kill"))},ge=a(79),ve=a(80);function we(e,t){return ye.apply(this,arguments)}function ye(){return(ye=Object(p.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[a,t],!this.state.userStreamArr.includes(n)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.setState({userStreamArr:[].concat(Object(ve.a)(this.state.userStreamArr),[n])});case 5:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function Ee(e,t,a){var n=this,r=a.call(e,t);r&&r.on("stream",(function(t){e!==n.state.ourPeerId&&(n.peers.has(r.peer)||n.addVideoStream(t,e))}))}var Oe=a(66);function je(e){1===e.villagers.length&&this.assignRolesAndStartGame(e),this.handleWerewolfVote(e),this.handleSeer(),this.handleMedic(),e.checkWerewolf&&e.checkSeer&&e.checkMedic&&(e.werewolvesChoice===e.medicChoice?e.werewolvesChoice="":(e.villagers=e.villagers.filter((function(t){return t!==e.werewolvesChoice})),""!==e.werewolvesChoice&&e.dead.push(e.werewolvesChoice)),e.Night=!1,e.medicChoice="",e.votesWerewolves="",e.checkWerewolf=!1,e.checkMedic=!1,e.checkSeer=!1,e.votesWerewolves=[],e.villagersChoice="",this.props.firebase.db.collection("rooms").doc(this.state.gameId).update(e),this.setState({night:!1}))}function ke(e){this.handleMajority(e),e.majorityReached&&(e.villagers.includes(e.villagersChoice)?e.villagers=e.villagers.filter((function(t){return t!==e.villagersChoice})):e.werewolves=e.werewolves.filter((function(t){return t!==e.villagersChoice})),e.dead.push(e.villagersChoice),e.Night=!0,e.wereWolvesChoice="",e.majorityReached=!1,e.votesVillagers=[],console.log("DURING DAY, ABOUT TO GO TO NIGHT",e),this.props.firebase.db.collection("rooms").doc(this.state.gameId).update(e),this.setState({night:!0}))}function Se(e){return Ce.apply(this,arguments)}function Ce(){return(Ce=Object(p.a)(m.a.mark((function e(t){var a,n,r,o,s,i,l,c,u,h;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.villagers.length+t.werewolves.length,n={},e.next=4,this.props.firebase.db.collection("rooms").doc(this.state.gameId).get();case 4:r=e.sent,o=r.data().votesVillagers,s=Object(Oe.a)(o);try{for(s.s();!(i=s.n()).done;)l=i.value,Object.keys(n).includes(l)?n[l]+=1:n[l]=1}catch(d){s.e(d)}finally{s.f()}for(console.log("in handle majority",n),c=0,u=Object.keys(n);c<u.length;c++)h=u[c],n[h]>Math.floor(a/2)&&this.props.firebase.db.collection("rooms").doc(this.state.gameId).update({villagersChoice:h,majorityReached:!0});case 10:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function Ie(e){return xe.apply(this,arguments)}function xe(){return(xe=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.firebase.db.collection("users").where("userId","==",t).get();case 2:return a=e.sent,e.next=5,this.props.firebase.db.collection("rooms").doc(this.state.gameId).get();case 5:return(n=(n=e.sent).data().votesVillagers).push(a.docs[0].id),e.next=10,this.props.firebase.db.collection("rooms").doc(this.state.gameId).update({votesVillagers:n});case 10:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function De(e){return Te.apply(this,arguments)}function Te(){return(Te=Object(p.a)(m.a.mark((function e(t){var a,n,r,o,s,i,l,c,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.firebase.db.collection("rooms").doc(this.state.gameId).get();case 2:return e.sent.data().werewolves,a=t.werewolves.length,e.next=7,this.props.firebase.db.collection("rooms").doc(this.state.gameId).get();case 7:n=(n=e.sent).data().votesWerewolves,console.log("what are my villagers",n),r={},o=Object(Oe.a)(n);try{for(o.s();!(s=o.n()).done;)i=s.value,Object.keys(r).includes(i)?r[i]+=1:r[i]=1}catch(h){o.e(h)}finally{o.f()}for(console.log("voting object is",r),l=0,c=Object.keys(r);l<c.length;l++)u=c[l],r[u]>Math.floor(a/2)&&this.props.firebase.db.collection("rooms").doc(this.state.gameId).update({werewolvesChoice:u,checkWerewolf:!0});case 15:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function Ae(){return We.apply(this,arguments)}function We(){return(We=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.firebase.db.collection("rooms").doc(this.state.gameId).get();case 2:if(t=e.sent,""!==t.data().seerChoice){e.next=8;break}return e.abrupt("return");case 8:console.log("setting checkSeer to true"),this.props.firebase.db.collection("rooms").doc(this.state.gameId).update({checkSeer:!0});case 10:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function Pe(){return Ue.apply(this,arguments)}function Ue(){return(Ue=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.firebase.db.collection("rooms").doc(this.state.gameId).get();case 2:if(t=e.sent,""!==t.data().medicChoice){e.next=8;break}return e.abrupt("return");case 8:console.log("setting checkMedic to true"),this.props.firebase.db.collection("rooms").doc(this.state.gameId).update({checkMedic:!0});case 10:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function Ne(e){return Me.apply(this,arguments)}function Me(){return(Me=Object(p.a)(m.a.mark((function e(t){var a,n,r,o,s,i,l=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("In assignRoles"),e.next=3,this.props.firebase.db.collection("users").where("currentGame","==",this.state.gameId).get();case 3:for(a=(a=e.sent).docs,console.log("what is users in assign roles",a),n=[],r=[],o=a.length-1;o>0;o--)s=Math.floor(Math.random()*(o+1)),i=[a[s],a[o]],a[o]=i[0],a[s]=i[1];return a.forEach((function(e,t){console.log("what does my user look like",e.id);var a=e.id;t<2?(console.log("werewolves are ",n),n.push(a)):2===t?(l.props.firebase.db.collection("rooms").doc(l.state.gameId).update({seer:a}),r.push(a)):3===t?(l.props.firebase.db.collection("rooms").doc(l.state.gameId).update({medic:a}),r.push(a)):r.push(a)})),e.next=12,this.props.firebase.db.collection("rooms").doc(this.state.gameId).update({werewolves:n});case 12:return e.next=14,this.props.firebase.db.collection("rooms").doc(this.state.gameId).update({villagers:r});case 14:this.props.firebase.db.collection("rooms").doc(this.state.gameId).update({gameStarted:!0});case 15:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}var Re=function(e){Object(j.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).state={ourPeerId:"",ourDocId:"",gameId:"7xz6yB0zX9QUDlOPzyKZ",userStreamArr:[],role:"",night:!0},n.peers=new Set,n.connectToNewUser=Ee.bind(Object(T.a)(n)),n.addVideoStream=we.bind(Object(T.a)(n)),n.handleMajority=Se.bind(Object(T.a)(n)),n.handleNightToDay=je.bind(Object(T.a)(n)),n.handleDayToNight=ke.bind(Object(T.a)(n)),n.assignRolesAndStartGame=Ne.bind(Object(T.a)(n)),n.handleVillagerVoteButton=Ie.bind(Object(T.a)(n)),n.handleWerewolfVote=De.bind(Object(T.a)(n)),n.handleMedic=Pe.bind(Object(T.a)(n)),n.handleSeer=Ae.bind(Object(T.a)(n)),n}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t,a=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new fe.a(void 0,{secure:!0,host:"https://werewolf-capstone.web.app/",port:"443"}),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){a.addVideoStream(e,a.state.ourPeerId),t.on("call",(function(t){t.answer(e),t.on("stream",(function(e){a.peers.has(t.peer)||a.addVideoStream(e,t.peer),a.peers.add(t.peer)}))})),a.props.firebase.db.collection("users").onSnapshot(function(){var n=Object(p.a)(m.a.mark((function n(r){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r.docs.forEach((function(n){a.state.ourPeerId!==n.data().userId&&a.connectToNewUser(n.data().userId,e,t)}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),a.props.firebase.db.collection("rooms").doc(a.state.gameId).onSnapshot(function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=t.data()).gameStarted){e.next=3;break}return e.abrupt("return");case 3:n.Night?a.handleNightToDay(n):a.handleDayToNight(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),t.on("open",function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({ourPeerId:t}),e.next=3,a.props.firebase.db.collection("users").add({userId:t,currentGame:a.state.gameId});case 3:n=e.sent,a.setState({ourDocId:n.id}),a.props.firebase.db.collection("rooms").doc(a.state.gameId).update({players:ge.firestore.FieldValue.arrayUnion(n.id)});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.userStreamArr.map((function(t){return r.a.createElement(be,{key:e.state.ourDocId,userStreamTuple:t,handleVillagerVoteButton:e.handleVillagerVoteButton,ourDocId:e.state.ourDocId,night:e.state.night,role:e.state.role})})))}}]),a}(r.a.Component),Ge=u(Re),Ve=S((function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement("hr",null),r.a.createElement(l.a,{exact:!0,path:"/",component:M}),r.a.createElement(l.a,{path:"/signup",component:F}),r.a.createElement(l.a,{path:"/signin",component:X}),r.a.createElement(l.a,{path:"/pw-forget",component:_}),r.a.createElement(l.a,{path:"/home",component:$}),r.a.createElement(l.a,{path:"/account",component:ne}),r.a.createElement(l.a,{path:"/admin",component:oe}),r.a.createElement(l.a,{path:"/gameroom",component:Ge}),r.a.createElement(l.a,{path:"/waitingroom/:roomId",component:me})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(h.Provider,{value:new w},r.a.createElement(Ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t,a){e.exports=a(115)},98:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.4020ec4f.chunk.js.map