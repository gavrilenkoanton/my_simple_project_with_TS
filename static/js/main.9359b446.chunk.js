(this.webpackJsonpmy_simple_project_with_ts=this.webpackJsonpmy_simple_project_with_ts||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports={toDoListTaskDone:"ToDoListTask_toDoListTaskDone__2QLLJ",priority:"ToDoListTask_priority__1qLQE",cloud:"ToDoListTask_cloud__1h_Od",cloudHide:"ToDoListTask_cloudHide__2aLK5",input:"ToDoListTask_input__23yqW"}},,,,,,,,function(e,t,a){e.exports={filterActive:"ToDoListFooter_filterActive__3AYpS"}},,function(e,t,a){e.exports={nav:"NavMenu_nav__7l-PX",active:"NavMenu_active__dvDC0"}},function(e,t,a){e.exports={App:"Monday_App__Qa8vm",Name:"Monday_Name__3_jhy"}},function(e,t,a){e.exports={mySkills:"MySkills_mySkills__2QL7I",skill:"MySkills_skill__ac7rK"}},function(e,t,a){e.exports={wrapper:"Hello_wrapper__1695F",friends:"Hello_friends__U8Cgh"}},function(e,t,a){e.exports={input:"InputComponent_input__3sYg5",inputError:"InputComponent_inputError__1QMeT"}},,,,,,function(e,t,a){e.exports={myName:"MyName_myName__2h04n"}},function(e,t,a){e.exports={list:"ListOfFriends_list__yzDuJ"}},function(e,t,a){e.exports={button:"PushButton_button__1wUoZ"}},function(e,t,a){e.exports=a.p+"static/media/preloader.d01db4ec.gif"},function(e,t,a){e.exports={App:"Tuesday_App__1TQct"}},function(e,t,a){e.exports={wrapper:"ToDoList_wrapper__1bKnl"}},function(e,t,a){e.exports={error:"ToDoListHeader_error__2waPs"}},,function(e,t,a){e.exports={light:"Wednesday_light__2s4pw",dark:"Wednesday_dark__4AHdY"}},,,function(e,t,a){e.exports=a(55)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),o=a.n(i),c=(a(49),a(42)),s=a(10),l=a(1),u=a(3),d=a(2),p=a(4),m=a(23),f=a.n(m),h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={days:["Mon","Tue","Wed"],id:0,isHidden:!0},a.onClickColor=function(e){a.setState({id:e})},a.render=function(){var e=a.state.days.map((function(e,t){return r.a.createElement("a",{key:t,href:"#/"+e,onClick:function(){return a.onClickColor(t)},className:a.state.id===t?f.a.active:void 0},e)}));return r.a.createElement("div",{className:f.a.nav},!a.state.isHidden&&r.a.createElement("button",{onClick:function(){a.setState({isHidden:!0})}},"Days"),a.state.isHidden&&r.a.createElement("button",{onClick:function(){a.setState({isHidden:!1})}},"Hide"),a.state.isHidden&&e)},a}return Object(p.a)(t,e),t}(r.a.Component),v=a(18),g=a(24),y=a.n(g),E=a(33),k=a.n(E),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).nameMas=["\u0413","\u0430","\u0432","\u0440","\u0438","\u043b","\u0435","\u043d","\u043a","\u043e"," ","\u0410","\u043d","\u0442","\u043e","\u043d"],a.colorMas=["red","orange","violet","green","blue","purple"],a.printMyName=function(){a.setState({})},a.render=function(){return r.a.createElement("div",{className:k.a.myName},"\u0414\u0430\u0440\u043e\u0443, \u044f",r.a.createElement("p",{onMouseOver:a.printMyName},a.nameMas.map((function(e,t){return r.a.createElement("span",{key:t,style:{color:a.colorMas[Math.floor(Math.random()*a.colorMas.length)]}},e)}))))},a}return Object(p.a)(t,e),t}(r.a.Component),_=a(25),O=a.n(_),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).mySkills=a.props.mySkills.map((function(e,t){return r.a.createElement("div",{className:O.a.skill,key:t},e.skill)})),a.render=function(){return r.a.createElement("div",{className:O.a.mySkills},a.mySkills)},a}return Object(p.a)(t,e),t}(r.a.Component),j=a(20),C=a(26),T=a.n(C),w=a(34),A=a.n(w),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).render=function(){return r.a.createElement("span",{className:A.a.list},a.props.name)},a}return Object(p.a)(t,e),t}(r.a.Component),D=a(35),M=a.n(D),L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).render=function(){return r.a.createElement("button",{onClick:a.props.onClickButton,className:M.a.button},"Push")},a}return Object(p.a)(t,e),t}(r.a.Component),x=a(27),H=a.n(x),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={error:!1,title:""},a.onEnterPress=function(e){"Enter"===e.key&&a.addNameFunc()},a.addNameFunc=function(){var e=a.state.title;a.setState({title:""}),""===a.state.title?a.setState({error:!0}):(a.setState({error:!1}),a.props.onEnterPush(e))},a.render=function(){return r.a.createElement("input",{onKeyPress:a.onEnterPress,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f",onChange:function(e){a.setState({error:!1,title:e.currentTarget.value})},className:a.state.error?H.a.inputError:H.a.input})},e.setF(a.addNameFunc),a}return Object(p.a)(t,e),t}(r.a.Component),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).titleRef=r.a.createRef(),a.state={names:[],f:function(){}},a.onButtonClick=function(e){if(""===e)alert("\u0411\u0440\u043e, \u0432\u0432\u0435\u0434\u0438 \u0438\u043c\u044f");else{alert("\u0414\u0430\u0440\u043e\u0443, "+e);var t=[{name:e}].concat(Object(j.a)(a.state.names));a.setState({names:t})}},a.setF=function(e){a.setState({f:e})},a.render=function(){var e=a.state.names.map((function(e,t){return r.a.createElement("div",null,"\u041a \u043d\u0430\u043c \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u043b\u0441\u044f: ",r.a.createElement(N,{name:e.name,key:t}))}));return r.a.createElement("div",{className:T.a.wrapper},r.a.createElement("div",null,r.a.createElement(P,{titleRef:a.titleRef,onEnterPush:a.onButtonClick,setF:a.setF}),r.a.createElement(L,{onClickButton:a.state.f})),r.a.createElement("div",{className:T.a.friends},e))},a}return Object(p.a)(t,e),t}(r.a.Component),I=a(36),V=a.n(I),B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={link:""},a.render=function(){return r.a.createElement("div",{className:y.a.App},a.props.monday.isLoading?r.a.createElement("img",{src:V.a}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:y.a.Name},r.a.createElement(b,null)),r.a.createElement(S,{mySkills:a.props.monday.me}),r.a.createElement(F,null)))},a}return Object(p.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.loading(!0),setTimeout((function(){e.props.loading(!1)}),3e3)}}]),t}(r.a.Component),q=a(37),U=a.n(q),W=a(11),J=a(38),Q=a.n(J),K=a(39),Y=a.n(K),G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={error:!1,title:""},a.addTaskClick=function(){var e=a.state.title;a.setState({title:""}),""===e?a.setState({error:!0}):(a.setState({error:!1}),a.props.addTask(e))},a.onPressEnterAddTask=function(e){"Enter"===e.key&&a.addTaskClick()},a.render=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b:"),r.a.createElement("div",null,r.a.createElement("input",{onKeyPress:a.onPressEnterAddTask,onChange:function(e){a.setState({error:!1,title:e.currentTarget.value})},className:a.state.error?Y.a.error:"",type:"text",placeholder:"\u0427\u0435 \u0431\u0443\u0434\u0435\u043c \u0434\u0435\u043b\u0430\u0442\u044c?",value:a.state.title}),r.a.createElement("button",{onClick:a.addTaskClick},"Add"))))},a}return Object(p.a)(t,e),t}(r.a.Component),R=a(21),X=a.n(R),z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={isHidden:!0},a.render=function(){var e="All"===a.props.filterValue?X.a.filterActive:"",t="Completed"===a.props.filterValue?X.a.filterActive:"",n="Active"===a.props.filterValue?X.a.filterActive:"";return r.a.createElement("div",null,r.a.createElement("div",{className:"todoList"},r.a.createElement("div",{className:"todoList-footer"},!a.state.isHidden&&r.a.createElement("div",null,r.a.createElement("button",{className:e,onClick:function(){a.props.changeFilter("All")}},"All"),r.a.createElement("button",{className:t,onClick:function(){a.props.changeFilter("Completed")}},"Completed"),r.a.createElement("button",{className:n,onClick:function(){a.props.changeFilter("Active")}},"Active")),!a.state.isHidden&&r.a.createElement("span",{onClick:function(){a.setState({isHidden:!0})}},"Hide"),a.state.isHidden&&r.a.createElement("span",{onClick:function(){a.setState({isHidden:!1})}},"Show"))))},a}return Object(p.a)(t,e),t}(r.a.Component),Z=a(13),$=a.n(Z),ee=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={editMode:!1,cloudShow:!1},a.activatedEditMode=function(){a.setState({editMode:!0})},a.deactivatedEditMode=function(){a.setState({editMode:!1})},a.onIsDoneChanged=function(e){var t=(new Date).toString().slice(0,-46);a.props.changeStatus(a.props.id,e.currentTarget.checked,t)},a.onTitleChanged=function(e){var t=(new Date).toString().slice(0,-46);a.props.changeTitle(a.props.id,e.currentTarget.value,t)},a.onChangePriority=function(e){a.props.changePriority(a.props.id,e.currentTarget.value)},a.cloudShow=function(e){a.setState({cloudShow:e})},a.render=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:a.props.task.isDone?$.a.toDoListTaskDone:""},r.a.createElement("input",{type:"checkbox",checked:a.props.task.isDone,onChange:a.onIsDoneChanged}),r.a.createElement("span",null,a.props.id," - "),a.state.editMode?r.a.createElement("input",{onChange:a.onTitleChanged,autoFocus:!0,value:a.props.task.title,onBlur:a.deactivatedEditMode}):r.a.createElement("span",{onClick:a.activatedEditMode,className:$.a.input,onMouseOut:function(){a.cloudShow(!1)},onMouseOver:function(){a.cloudShow(!0)}},a.props.title),r.a.createElement("span",null,"  priority: ",a.props.priority),r.a.createElement("span",{className:$.a.priority},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442: ",r.a.createElement("select",{name:"",id:"",onChange:a.onChangePriority},r.a.createElement("option",{value:"low"},"low"),r.a.createElement("option",{value:"medium"},"medium"),r.a.createElement("option",{value:"high"},"high"))),r.a.createElement("button",{onClick:function(){a.props.removeTask(a.props.id)}},"X")),r.a.createElement("div",{className:a.state.cloudShow?$.a.cloud:$.a.cloudHide},r.a.createElement("div",null,"\u0421\u043e\u0437\u0434\u0430\u043d: ",a.props.created),r.a.createElement("div",null,"\u0418\u0437\u043c\u0435\u043d\u0435\u043d: ",a.props.updated),r.a.createElement("div",null,"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d: ",a.props.finished)))},a}return Object(p.a)(t,e),t}(r.a.Component),te=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).render=function(){var e=a.props.tasks.map((function(e){return r.a.createElement(ee,{task:e,id:e.id,title:e.title,isDone:e.isDone,priority:e.priority,created:e.created,updated:e.updated,finished:e.finished,changeStatus:a.props.changeStatus,changeTitle:a.props.changeTitle,removeTask:a.props.removeTask,changePriority:a.props.changePriority,dateUpdater:a.props.dateUpdater})}));return r.a.createElement("div",null,e)},a}return Object(p.a)(t,e),t}(r.a.Component),ae=function(){var e={tasks:[],filterValue:"All"},t=localStorage.getItem("ourState");return null!=t&&(e=JSON.parse(t)),e},ne=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).nextTaskId=1,a.state={tasks:[],filterValue:"All"},a.addTask=function(e){var t=(new Date).toString().slice(0,-46),n={id:a.nextTaskId,title:e,isDone:!1,priority:"low",created:t,updated:"",finished:""};a.nextTaskId++,console.log(n.created);var r=[n].concat(Object(j.a)(a.state.tasks));a.setState({tasks:r},a.saveState)},a.changeFilter=function(e){a.setState({filterValue:e})},a.changeS=function(e,t){var n=a.state.tasks.map((function(a){return a.id===e?Object(W.a)({},a,{},t):a}));a.setState({tasks:n},a.saveState)},a.dateChanger=function(e,t,n){var r=a.state.tasks.map((function(a){return a.id===e?Object(W.a)({},a,{},t,{},n):a}));a.setState({tasks:r},a.saveState)},a.removeTask=function(e){var t=a.state.tasks.filter((function(t){return t.id!==e}));a.setState({tasks:t},a.saveState)},a.changeStatus=function(e,t,n){t?a.dateChanger(e,{isDone:t},{finished:n}):a.dateChanger(e,{isDone:t},{finished:""})},a.changeTitle=function(e,t,n){a.dateChanger(e,{title:t},{updated:n})},a.dateUpdater=function(e){var t=(new Date).toString().slice(0,-46);a.changeS(e,{updated:t})},a.changePriority=function(e,t){a.changeS(e,{priority:t})},a.saveState=function(){var e=JSON.stringify(a.state);localStorage.setItem("ourState",e)},a.render=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:Q.a.wrapper},r.a.createElement(G,{addTask:a.addTask}),r.a.createElement(te,{removeTask:a.removeTask,changeTitle:a.changeTitle,changeStatus:a.changeStatus,changePriority:a.changePriority,dateUpdater:a.dateUpdater,changeS:a.changeS,tasks:a.state.tasks.filter((function(e){return"All"===a.state.filterValue||("Active"===a.state.filterValue?!1===e.isDone:"Completed"===a.state.filterValue?!0===e.isDone:void 0)}))}),r.a.createElement(z,{filterValue:a.state.filterValue,changeFilter:a.changeFilter})))},a}return Object(p.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=ae;this.setState(t,(function(){e.state.tasks.forEach((function(t){t.id>=e.nextTaskId&&(e.nextTaskId=t.id+1)}))}))}}]),t}(r.a.Component),re=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).render=function(){return r.a.createElement("div",{className:U.a.App},r.a.createElement(ne,null))},a}return Object(p.a)(t,e),t}(r.a.Component),ie=a(19),oe={me:[{skill:"\u043a\u0440\u0443\u0447\u0443"},{skill:"\u0432\u0435\u0440\u0447\u0443"},{skill:"\u0437\u0430\u043f\u0443\u0442\u0430\u0442\u044c \u0445\u043e\u0447\u0443"}],isLoading:!0},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(W.a)({},e,{isLoading:t.isLoading});default:return e}},se=a(41),le=a.n(se),ue=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).render=function(){return r.a.createElement("div",{className:le.a[a.props.settings.style]},r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"theme",value:"light",onClick:function(){a.props.changeStyle("light")}}),"Light"),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"theme",value:"dark",onClick:function(){a.props.changeStyle("dark")}}),"Dark"),r.a.createElement("div",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid dignissimos expedita illo impedit iusto provident quos ullam. Asperiores corporis est eum laudantium nobis quibusdam quidem quis rem, sed voluptate!"))},a}return Object(p.a)(t,e),t}(r.a.Component),de={style:"light"},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_STYLE":return Object(W.a)({},e,{style:t.style});default:return e}};var me=Object(ie.b)((function(e){return{monday:e.monday,settings:e.settings}}),(function(e){return{loading:function(t){e({type:"LOADING",isLoading:t})},changeStyle:function(t){e({type:"CHANGE_STYLE",style:t})}}}))((function(e){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(h,null)),r.a.createElement(s.a,{path:"/",exact:!0,render:function(){return r.a.createElement(B,{monday:e.monday,loading:e.loading})}}),r.a.createElement(s.a,{path:"/Mon",exact:!0,render:function(){return r.a.createElement(B,{monday:e.monday,loading:e.loading})}}),r.a.createElement(s.a,{path:"/Tue",exact:!0,render:function(){return r.a.createElement(re,null)}}),r.a.createElement(s.a,{path:"/Wed",exact:!0,render:function(){return r.a.createElement(ue,{settings:e.settings,changeStyle:e.changeStyle})}}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=a(15),he=Object(fe.b)({settings:pe,monday:ce}),ve=Object(fe.c)(he);o.a.render(r.a.createElement(ie.a,{store:ve},r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[44,1,2]]]);
//# sourceMappingURL=main.9359b446.chunk.js.map