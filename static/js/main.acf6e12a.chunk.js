(this.webpackJsonpmy_simple_project_with_ts=this.webpackJsonpmy_simple_project_with_ts||[]).push([[0],[,,,,,function(e,t,n){e.exports={App:"App_App__16Hvb",Name:"App_Name__3IrLb"}},function(e,t,n){e.exports={mySkills:"MySkills_mySkills__1zRWX",skill:"MySkills_skill__UU3fb"}},function(e,t,n){e.exports={wrapper:"Hello_wrapper__2hbTr",friends:"Hello_friends__AI6vl"}},,,function(e,t,n){e.exports={myName:"MyName_myName__32TP4"}},function(e,t,n){e.exports={list:"ListOfFriends_list__2eHM_"}},function(e,t,n){e.exports={button:"PushButton_button__13246"}},function(e,t,n){e.exports={input:"InputComponent_input__1HuGd"}},,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),c=n.n(l),o=(n(20),n(5)),i=n.n(o),s=n(1),u=n(3),m=n(2),p=n(4),f=n(6),h=n.n(f),_=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).mySkills=n.props.mySkills.map((function(e,t){return r.a.createElement("div",{className:h.a.skill,key:t},e.skill)})),n.render=function(){return r.a.createElement("div",{className:h.a.mySkills},n.mySkills)},n}return Object(p.a)(t,e),t}(r.a.Component),y=n(10),b=n.n(y),v=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).nameMas=["\u0413","\u0430","\u0432","\u0440","\u0438","\u043b","\u0435","\u043d","\u043a","\u043e"," ","\u0410","\u043d","\u0442","\u043e","\u043d"],n.colorMas=["red","orange","violet","green","blue","purple"],n.printMyName=function(){n.setState({})},n.render=function(){return r.a.createElement("div",{className:b.a.myName},"\u0414\u0430\u0440\u043e\u0443, \u044f",r.a.createElement("p",{onMouseOver:n.printMyName},n.nameMas.map((function(e,t){return r.a.createElement("span",{key:t,style:{color:n.colorMas[Math.floor(Math.random()*n.colorMas.length)]}},e)}))))},n}return Object(p.a)(t,e),t}(r.a.Component),d=n(14),k=n(7),j=n.n(k),O=n(11),E=n.n(O),w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).render=function(){return r.a.createElement("span",{className:E.a.list},n.props.name)},n}return Object(p.a)(t,e),t}(r.a.Component),N=n(12),g=n.n(N),M=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).render=function(){return r.a.createElement("button",{onClick:n.props.onClickButton,className:g.a.button},"Push")},n}return Object(p.a)(t,e),t}(r.a.Component),S=n(13),A=n.n(S),C=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).render=function(){return r.a.createElement("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f",ref:n.props.titleRef,className:A.a.input})},n}return Object(p.a)(t,e),t}(r.a.Component),R=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).titleRef=r.a.createRef(),n.state={names:[]},n.onButtonClick=function(){var e=n.titleRef.current?n.titleRef.current.value:"";if(n.titleRef.current&&(n.titleRef.current.value=""),""===e)alert("\u0411\u0440\u043e, \u0432\u0432\u0435\u0434\u0438 \u0438\u043c\u044f");else{alert("\u0414\u0430\u0440\u043e\u0443, "+e);var t=[{name:e}].concat(Object(d.a)(n.state.names));n.setState({names:t})}},n.render=function(){var e=n.state.names.map((function(e,t){return r.a.createElement("div",null,"\u041a \u043d\u0430\u043c \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u043b\u0441\u044f: ",r.a.createElement(w,{name:e.name,key:t}))}));return r.a.createElement("div",{className:j.a.wrapper},r.a.createElement("div",null,r.a.createElement(C,{titleRef:n.titleRef}),r.a.createElement(M,{onClickButton:n.onButtonClick})),r.a.createElement("div",{className:j.a.friends},e))},n}return Object(p.a)(t,e),t}(r.a.Component);var x=function(e){return r.a.createElement("div",{className:i.a.App},r.a.createElement("div",{className:i.a.Name},r.a.createElement(v,null)),r.a.createElement(_,{mySkills:e.mySkills}),r.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,{mySkills:[{skill:"\u043a\u0440\u0443\u0447\u0443"},{skill:"\u0432\u0435\u0440\u0447\u0443"},{skill:"\u0437\u0430\u043f\u0443\u0442\u0430\u0442\u044c \u0445\u043e\u0447\u0443"}]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.acf6e12a.chunk.js.map