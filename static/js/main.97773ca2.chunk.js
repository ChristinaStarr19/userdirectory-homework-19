(this["webpackJsonpuserdirectory-homework-19"]=this["webpackJsonpuserdirectory-homework-19"]||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),s=a.n(r),o=(a(23),a(12)),c=a(13),u=a(14),m=a(17),i=a(16),p=function(e){return console.log("tabledate:",e),l.a.createElement("tr",{key:e.person.login.uuid},l.a.createElement("td",{className:"w-25"},l.a.createElement("img",{src:e.person.picture.thumbnail,className:"img-fluid img-thumbnail",alt:"Sheep"})),l.a.createElement("td",null,e.person.name.first," ",e.person.name.last),l.a.createElement("td",null,e.person.email),l.a.createElement("td",null,e.person.location.street.number," ",e.person.location.street.name),l.a.createElement("td",null,e.person.phone))},h=function(e){return console.log(e.results),l.a.createElement("div",null,l.a.createElement("table",{className:"table table-bordered table-image"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Image"),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Email"),l.a.createElement("th",{scope:"col"},"Address"),l.a.createElement("th",{scope:"col"},"Phone"))),l.a.createElement("tbody",null,e.results.map((function(e){return l.a.createElement(p,{person:e,key:e.login.uuid})})))))},d=a(15),E=a.n(d),f=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={results:[],sortResults:[],search:""},e.sortPeople=function(){e.setState({sortResults:e.state.results.sort((function(e,t){return console.log("A: ",e),console.log("B: ",t),e.name.last>t.name.last?1:t.name.last>e.name.last?-1:0}))})},e.handleInputChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(o.a)({},n,l))},e.handleSubmit=function(t){t.preventDefault(),e.filterPeople()},e.filterPeople=function(){var t=e.state.search.toLowerCase();e.setState({results:e.state.results.filter((function(e){return e.name.last.toLowerCase().includes(t)}))})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.state.results),E.a.get("https://randomuser.me/api/?results=50").then((function(t){e.setState({results:t.data.results}),console.log("check api:",e.state.results)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement("button",{onClick:this.sortPeople},"Sort Alphabetically")),l.a.createElement("div",{className:"col-4"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"textarea",className:"form-control",placeholder:"Search By Last Name",name:"search",value:this.state.search,onChange:this.handleInputChange}))))),l.a.createElement(h,{results:this.state.results}))}}]),a}(n.Component);var b=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null))};s.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.97773ca2.chunk.js.map