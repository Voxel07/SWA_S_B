(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},77:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),i=n(23),l=n.n(i),r=(n(45),n(46),n(16)),d=n(7),o=n(2),u=n(3),j=n(4),h=n(6),b=n(5),O=new(function(){function e(){Object(o.a)(this,e),this.authenticated=!1}return Object(u.a)(e,[{key:"login",value:function(e){this.authenticated=!0,e()}},{key:"logout",value:function(e){this.authenticated=!1,e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}()),m=(n(47),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={eMail:"",password:"",show:!1},a.handleChangeEmail=a.handleChangeEmail.bind(Object(j.a)(a)),a.handleChangePassword=a.handleChangePassword.bind(Object(j.a)(a)),a.login=a.login.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"handleChangeEmail",value:function(e){this.setState({eMail:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"login",value:function(){var e=this;"Marc"===this.state.eMail&&"test"===this.state.password?(this.setState({show:!1}),O.login((function(){e.props.history.push("/keyman")}))):this.setState({show:!0})}},{key:"render",value:function(){var e=this,t=this.props.eMail,n=this.props.password;return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)("h1",{children:"KeyMan"}),Object(a.jsx)("div",{children:Object(a.jsxs)("fieldset",{className:"login",children:[Object(a.jsx)("legend",{className:"login",children:"Login"}),"E-Mail:",Object(a.jsx)("input",{type:"email",className:"login",value:t,onChange:this.handleChangeEmail}),"Passwort:",Object(a.jsx)("input",{type:"password",className:"login",value:n,onChange:this.handleChangePassword}),Object(a.jsx)("button",{className:"login",onClick:function(){return e.login()},children:"Login"}),Object(a.jsx)("div",{children:this.state.show&&Object(a.jsx)("span",{children:"Falsche Email oder falsches Passwort"})})]})})]})}}]),n}(s.a.Component)),x=n(85),p=n(86),v=n(14),f=n.n(v),C=n(18),k=n(17),y=n.n(k),S=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).Changehandler=function(t){e.setState(Object(C.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),y.a.put("http://localhost:8080/company",e.state).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},e.state={name:"",department:"",street:"",postalcode:"",state:"",country:""},e.handleSubmit=e.handleSubmit.bind(Object(j.a)(e)),e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.department,c=e.street,s=e.postalcode,i=e.state,l=e.country;return Object(a.jsx)("div",{className:"customer-form",children:Object(a.jsx)("form",{id:"test2",onSubmit:this.handleSubmit,children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"user-input",children:[Object(a.jsx)("label",{children:"Name"}),Object(a.jsx)("input",{placeholder:"Name",name:"name",type:"text",value:t,onChange:this.Changehandler})]}),Object(a.jsxs)("div",{className:"user-input",children:[Object(a.jsx)("label",{children:"Department"}),Object(a.jsx)("input",{placeholder:"Department",name:"department",type:"text",value:n,onChange:this.Changehandler})]}),Object(a.jsxs)("div",{className:"user-input",children:[Object(a.jsx)("label",{children:"Street"}),Object(a.jsx)("input",{placeholder:"Street",name:"street",type:"text",value:c,onChange:this.Changehandler})]}),Object(a.jsxs)("div",{className:"user-input",children:[Object(a.jsx)("label",{children:"Postalcode"}),Object(a.jsx)("input",{placeholder:"Postalcode",name:"postalcode",type:"number",value:s,onChange:this.Changehandler})]}),Object(a.jsxs)("div",{className:"user-input",children:[Object(a.jsx)("label",{children:"State"}),Object(a.jsx)("input",{placeholder:"State",name:"state",type:"text",value:i,onChange:this.Changehandler})]}),Object(a.jsxs)("div",{className:"user-input",children:[Object(a.jsx)("label",{children:"Country"}),Object(a.jsx)("input",{placeholder:"Country",name:"country",type:"text",value:l,onChange:this.Changehandler})]}),Object(a.jsxs)("div",{children:[" ",Object(a.jsx)("input",{type:"submit",value:"Submit"})]})]})})})}}]),n}(s.a.Component),g=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:"Hallo von Add Contract Modal"})}}]),n}(s.a.Component),w=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:"Hallo von Add User Modal"})}}]),n}(s.a.Component),E=(n(77),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h6",{children:"Username:"}),Object(a.jsx)("input",{defaultValue:"User1"}),Object(a.jsx)("h6",{children:"Email:"}),Object(a.jsx)("input",{defaultValue:"user1@custb.com"}),Object(a.jsx)("h6",{children:"Customer:"}),Object(a.jsx)("input",{defaultValue:"Customer B"}),Object(a.jsx)("h6",{children:"Admin:"}),Object(a.jsx)("input",{defaultValue:"yes"})]})}}]),n}(s.a.Component)),D=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={modalIsOpen:!1,modalShow:"Customer"},a.handleLogout=a.handleLogout.bind(Object(j.a)(a)),a.handleAdd=a.handleAdd.bind(Object(j.a)(a)),a.handleCancel=a.handleCancel.bind(Object(j.a)(a)),a.handleSave=a.handleSave.bind(Object(j.a)(a)),a.createModal=a.createModal.bind(Object(j.a)(a)),a.handleUser=a.handleUser.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"handleSave",value:function(){this.setState({modalIsOpen:!1})}},{key:"handleCancel",value:function(){this.setState({modalIsOpen:!1})}},{key:"handleUser",value:function(){this.setState({modalIsOpen:!0,modalShow:"Nutzer"})}},{key:"handleAdd",value:function(){"Customers"===this.props.table?this.setState({modalShow:"Customer",modalIsOpen:!0}):"Contracts"===this.props.table?this.setState({modalShow:"Contract",modalIsOpen:!0}):"Users"===this.props.table&&this.setState({modalShow:"User",modalIsOpen:!0})}},{key:"handleLogout",value:function(){var e=this;O.logout((function(){e.props.history.push("/")}))}},{key:"createModal",value:function(){var e=this;return"Customer"===this.state.modalShow?Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{children:["Add ",this.state.modalShow]}),Object(a.jsx)(S,{}),Object(a.jsx)("button",{onClick:function(){return e.handleSave()},children:"Save"}),Object(a.jsx)("button",{onClick:function(){return e.handleCancel()},children:"Cancel"})]}):"Contract"===this.state.modalShow?Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{children:["Add ",this.state.modalShow]}),Object(a.jsx)(g,{}),Object(a.jsx)("button",{onClick:function(){return e.handleSave()},children:"Save"}),Object(a.jsx)("button",{onClick:function(){return e.handleCancel()},children:"Cancel"})]}):"User"===this.state.modalShow?Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{children:["Add ",this.state.modalShow]}),Object(a.jsx)(w,{}),Object(a.jsx)("button",{onClick:function(){return e.handleSave()},children:"Save"}),Object(a.jsx)("button",{onClick:function(){return e.handleCancel()},children:"Cancel"})]}):"Nutzer"===this.state.modalShow?Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"User"}),Object(a.jsx)(E,{}),Object(a.jsx)("button",{onClick:function(){return e.handleCancel()},children:"Close"})]}):void 0}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{id:"bar",children:[Object(a.jsx)(f.a,{isOpen:this.state.modalIsOpen,children:this.createModal()}),Object(a.jsx)("div",{id:"barItemsLeft",children:Object(a.jsx)("h3",{children:this.props.table})}),Object(a.jsx)("div",{id:"barItemsLeft",children:Object(a.jsx)("button",{onClick:function(){return e.handleAdd()},children:"Add"})}),Object(a.jsx)("div",{id:"barItemsLeft",children:Object(a.jsx)("input",{defaultValue:"filter"})}),Object(a.jsx)("div",{id:"barItemsLeft",children:Object(a.jsx)(x.a,{id:"icon",onClick:function(){return e.handleUser()}})}),Object(a.jsx)("div",{id:"barItemsLeft",children:Object(a.jsx)(p.a,{id:"icon",onClick:function(){return e.handleLogout()}})})]})}}]),n}(s.a.Component),M=Object(d.f)(D),I=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("form",{children:Object(a.jsxs)("fieldset",{children:[Object(a.jsx)("legend",{children:"Edit Customer Customer A:"}),Object(a.jsx)("label",{children:"Customer"}),Object(a.jsx)("input",{type:"text",defaultValue:"Customer D"}),Object(a.jsx)("label",{children:"First name"}),Object(a.jsx)("input",{type:"text",defaultValue:"Hulk"}),Object(a.jsx)("label",{children:"Last name"}),Object(a.jsx)("input",{type:"text",defaultValue:"Mogan"}),Object(a.jsx)("label",{children:"E-mail"}),Object(a.jsx)("input",{type:"E-Mail",defaultValue:"hm@custd.com"}),Object(a.jsx)("label",{children:"Phone:"}),Object(a.jsx)("input",{type:"number",defaultValue:"1-555-3478"}),Object(a.jsx)("label",{children:"Mobile:"}),Object(a.jsx)("input",{type:"text",defaultValue:"1-333-8743"}),Object(a.jsx)("label",{children:Object(a.jsx)("input",{type:"checkbox",value:"is Admin"})})]})})}}]),n}(s.a.Component),A=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={modalIsOpen:!1,modalShow:"Edit"},a.handleCancel=a.handleCancel.bind(Object(j.a)(a)),a.handleSave=a.handleSave.bind(Object(j.a)(a)),a.createModal=a.createModal.bind(Object(j.a)(a)),a.handleEdit=a.handleEdit.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"handleEdit",value:function(){this.setState({modalIsOpen:!0,modalShow:"Edit"})}},{key:"handleSave",value:function(){this.setState({modalIsOpen:!1})}},{key:"handleCancel",value:function(){this.setState({modalIsOpen:!1})}},{key:"createModal",value:function(){var e=this;if("Edit"===this.state.modalShow)return Object(a.jsxs)("div",{children:[Object(a.jsx)(I,{}),Object(a.jsx)("button",{onClick:function(){return e.handleSave()},children:"Save"}),Object(a.jsx)("button",{onClick:function(){return e.handleCancel()},children:"Cancel"})]})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)(f.a,{isOpen:this.state.modalIsOpen,children:this.createModal()}),Object(a.jsx)("span",{children:this.props.customer}),Object(a.jsx)("span",{children:this.props.addressDetailA}),Object(a.jsx)("span",{children:this.props.addressDetailB}),Object(a.jsx)("button",{onClick:function(){return e.handleEdit()},children:"Edit"}),Object(a.jsx)("button",{children:"Delete"}),Object(a.jsx)("button",{children:"Contracts"}),Object(a.jsx)("button",{children:"Users"})]})}}]),n}(s.a.Component),U=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={customers:[]},e}return Object(u.a)(n,[{key:"componentWillMount",value:function(){var e={customer:"CustomerA",addressDetailA:"Address Details A",addressDetailB:"Address Details B"},t={customer:"CustomerB",addressDetailA:"Address Details A",addressDetailB:"Address Details B"};this.setState((function(t){t.customers.push(e)})),this.setState((function(e){e.customers.push(t)}))}},{key:"deleteUser",value:function(){}},{key:"editUser",value:function(){}},{key:"render",value:function(){return Object(a.jsx)("div",{children:this.state.customers.map((function(e){return Object(a.jsx)(A,{customer:e.customer,addressDetailA:e.addressDetailA,addressDetailB:e.addressDetailB})}))})}}]),n}(s.a.Component),V=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("form",{children:Object(a.jsxs)("fieldset",{children:[Object(a.jsx)("legend",{children:"Edit Contract Customer A:"}),Object(a.jsx)("label",{children:"Customer"}),Object(a.jsx)("input",{type:"text",defaultValue:"Customer D"}),Object(a.jsx)("label",{children:"First name"}),Object(a.jsx)("input",{type:"text",defaultValue:"Hulk"}),Object(a.jsx)("label",{children:"Last name"}),Object(a.jsx)("input",{type:"text",defaultValue:"Mogan"}),Object(a.jsx)("label",{children:"E-mail"}),Object(a.jsx)("input",{type:"E-Mail",defaultValue:"hm@custd.com"}),Object(a.jsx)("label",{children:"Phone:"}),Object(a.jsx)("input",{type:"number",defaultValue:"1-555-3478"}),Object(a.jsx)("label",{children:"Mobile:"}),Object(a.jsx)("input",{type:"text",defaultValue:"1-333-8743"}),Object(a.jsx)("label",{children:Object(a.jsx)("input",{type:"checkbox",value:"is Admin"})})]})})}}]),n}(s.a.Component),N=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={modalIsOpen:!1,modalShow:"Edit"},a.handleCancel=a.handleCancel.bind(Object(j.a)(a)),a.handleSave=a.handleSave.bind(Object(j.a)(a)),a.createModal=a.createModal.bind(Object(j.a)(a)),a.handleEdit=a.handleEdit.bind(Object(j.a)(a)),a.handleDetail=a.handleDetail.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"handleSave",value:function(){this.setState({modalIsOpen:!1})}},{key:"handleCancel",value:function(){this.setState({modalIsOpen:!1})}},{key:"handleEdit",value:function(){this.setState({modalShow:"Edit",modalIsOpen:!0})}},{key:"handleDetail",value:function(){this.setState({modalShow:"Detail",modalIsOpen:!0})}},{key:"createModal",value:function(){var e=this;return"Edit"===this.state.modalShow?Object(a.jsxs)("div",{children:[Object(a.jsx)(V,{}),Object(a.jsx)("button",{onClick:function(){return e.handleSave()},children:"Save"}),Object(a.jsx)("button",{onClick:function(){return e.handleCancel()},children:"Cancel"})]}):"Detail"===this.state.modalShow?Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:this.state.modalShow}),Object(a.jsx)("button",{onClick:function(){return e.handleSave()},children:"Save"}),Object(a.jsx)("button",{onClick:function(){return e.handleCancel()},children:"Cancel"})]}):void 0}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{id:"rowOfTable",children:[Object(a.jsx)(f.a,{isOpen:this.state.modalIsOpen,children:this.createModal()}),Object(a.jsx)("div",{id:"items",children:Object(a.jsx)("span",{children:this.props.customer})}),Object(a.jsx)("div",{id:"items",children:Object(a.jsx)("span",{children:this.props.contractStart})}),Object(a.jsx)("div",{id:"items",children:Object(a.jsx)("span",{children:this.props.contractEnd})}),Object(a.jsx)("div",{id:"items",children:Object(a.jsx)("span",{children:this.props.version})}),Object(a.jsx)("div",{id:"items",children:Object(a.jsx)("button",{onClick:function(){return e.handleEdit()},children:"Edit"})}),Object(a.jsx)("div",{class:"items",children:Object(a.jsx)("button",{children:"Delete"})}),Object(a.jsx)("div",{id:"items",children:Object(a.jsx)("button",{onClick:function(){return e.handleDetail()},children:"Details"})})]})}}]),n}(s.a.Component),L=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={contracts:[],msg:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;y.a.get("http://localhost:8080/Contract").then((function(t){console.log(t),0===t.data.length?e.setState({msg:"Keine Daten erhalten"}):e.setState({contracts:t.data})})).catch((function(t){e.setState({msg:" "+t})}))}},{key:"deleteUser",value:function(){}},{key:"editUser",value:function(){}},{key:"render",value:function(){return Object(a.jsx)("div",{children:this.state.contracts.length?this.state.contracts.map((function(e){return Object(a.jsx)(N,{customer:e.customer,contractStart:e.contractStart,contractEnd:e.contractEnd,version:e.version})})):this.state.msg?this.state.msg:null})}}]),n}(s.a.Component),B=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("form",{children:Object(a.jsxs)("fieldset",{children:[Object(a.jsx)("legend",{children:"Edit User Hulk Mogan:"}),Object(a.jsx)("label",{children:"Customer"}),Object(a.jsx)("input",{type:"text",defaultValue:"Customer D"}),Object(a.jsx)("label",{children:"First name"}),Object(a.jsx)("input",{type:"text",defaultValue:"Hulk"}),Object(a.jsx)("label",{children:"Last name"}),Object(a.jsx)("input",{type:"text",defaultValue:"Mogan"}),Object(a.jsx)("label",{children:"E-mail"}),Object(a.jsx)("input",{type:"E-Mail",defaultValue:"hm@custd.com"}),Object(a.jsx)("label",{children:"Phone:"}),Object(a.jsx)("input",{type:"number",defaultValue:"1-555-3478"}),Object(a.jsx)("label",{children:"Mobile:"}),Object(a.jsx)("input",{type:"text",defaultValue:"1-333-8743"}),Object(a.jsx)("label",{children:Object(a.jsx)("input",{type:"checkbox",value:"is Admin"})})]})})}}]),n}(s.a.Component),P=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={modalIsOpen:!1},a.handleEdit=a.handleEdit.bind(Object(j.a)(a)),a.handleDelete=a.handleDelete.bind(Object(j.a)(a)),a.createModal=a.createModal.bind(Object(j.a)(a)),a.handleCancel=a.handleCancel.bind(Object(j.a)(a)),a.handleSave=a.handleSave.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"handleSave",value:function(){this.setState({modalIsOpen:!1})}},{key:"handleCancel",value:function(){this.setState({modalIsOpen:!1})}},{key:"handleEdit",value:function(){this.setState({modalIsOpen:!0})}},{key:"handleDelete",value:function(){}},{key:"createModal",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)(B,{}),Object(a.jsx)("button",{onClick:function(){return e.handleSave()},children:"Save"}),Object(a.jsx)("button",{onClick:function(){return e.handleCancel()},children:"Cancel"})]})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)(f.a,{isOpen:this.state.modalIsOpen,children:this.createModal()}),Object(a.jsx)("span",{children:this.props.customer}),Object(a.jsx)("span",{children:this.props.userName}),Object(a.jsx)("span",{children:this.props.email}),Object(a.jsx)("button",{onClick:function(){return e.handleEdit()},children:"Edit"}),Object(a.jsx)("button",{onClick:function(){return e.handleDelete()},children:"Delete"})]})}}]),n}(s.a.Component),F=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={users:[],msg:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;y.a.get("http://localhost:8080/User").then((function(t){console.log(t),0===t.data.length?e.setState({msg:"Keine Daten erhalten"}):e.setState({users:t.data})})).catch((function(t){e.setState({msg:" "+t})}))}},{key:"deleteUser",value:function(){}},{key:"editUser",value:function(){}},{key:"render",value:function(){return Object(a.jsx)("div",{children:this.state.users.length?this.state.users.map((function(e){return Object(a.jsx)(P,{customer:e.customer,userName:e.userName,email:e.email})})):this.state.msg?this.state.msg:null})}}]),n}(s.a.Component),H=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"createTable",value:function(){return"Customers"===this.props.table?Object(a.jsx)(U,{}):"Contracts"===this.props.table?Object(a.jsx)(L,{}):Object(a.jsx)(F,{})}},{key:"render",value:function(){return Object(a.jsx)("table",{children:this.createTable()})}}]),n}(s.a.Component),T=(n(81),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={table:"Customers"},a.onClickCustomers=a.onClickCustomers.bind(Object(j.a)(a)),a.onClickContracts=a.onClickContracts.bind(Object(j.a)(a)),a.onClickUsers=a.onClickUsers.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"onClickCustomers",value:function(){this.setState({table:"Customers"})}},{key:"onClickContracts",value:function(){this.setState({table:"Contracts"})}},{key:"onClickUsers",value:function(){this.setState({table:"Users"})}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)(M,{table:this.state.table})}),Object(a.jsxs)("div",{id:"parent",children:[Object(a.jsxs)("div",{id:"menu",children:[Object(a.jsx)("div",{id:"menuButton",children:Object(a.jsx)("button",{onClick:this.onClickCustomers,children:"Customers"})}),Object(a.jsx)("div",{id:"menuButton",children:Object(a.jsx)("button",{onClick:this.onClickContracts,children:"Contracts"})}),Object(a.jsx)("div",{id:"menuButton",children:Object(a.jsx)("button",{onClick:this.onClickUsers,children:"Users"})})]}),Object(a.jsx)("div",{id:"table",children:Object(a.jsx)(H,{table:this.state.table})})]})]})}}]),n}(s.a.Component)),K=n(19),z=n(39),J=function(e){var t=e.component,n=Object(z.a)(e,["component"]);return Object(a.jsx)(d.b,Object(K.a)(Object(K.a)({},n),{},{render:function(e){return O.isAuthenticated()?Object(a.jsx)(t,Object(K.a)({},e)):Object(a.jsx)(d.a,{to:{pathname:"/",state:{from:e.location}}})}}))};var W=function(){return Object(a.jsxs)(r.a,{children:[Object(a.jsx)(d.b,{path:"/",exact:!0,component:m}),Object(a.jsx)(J,{path:"/keyman/",component:T})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};n(82);l.a.render(Object(a.jsx)(r.a,{children:Object(a.jsx)(W,{})}),document.getElementById("root")),q()}},[[83,1,2]]]);
//# sourceMappingURL=main.a43ddda8.chunk.js.map