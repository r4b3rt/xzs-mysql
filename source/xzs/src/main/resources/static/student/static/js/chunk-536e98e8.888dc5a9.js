(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-536e98e8"],{"11a9":function(t,o,e){"use strict";e("37f0")},"37f0":function(t,o,e){},"5fbe":function(t,o,e){t.exports=e.p+"static/img/logo2.745fd978.png"},"9ed6":function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t._self._c;return o("div",{staticClass:"lowin lowin-blue"},[t._m(0),o("div",{staticClass:"lowin-wrapper"},[o("div",{staticClass:"lowin-box lowin-login"},[o("div",{staticClass:"lowin-box-inner"},[o("el-form",{ref:"loginForm",attrs:{model:t.loginForm,rules:t.loginRules}},[o("p",[t._v("学之思开源考试系统")]),o("div",{staticClass:"lowin-group"},[o("label",[t._v("用户名 ")]),o("el-input",{ref:"userName",staticClass:"lowin-input",attrs:{placeholder:"用户名",name:"userName",type:"text",tabindex:"1","auto-complete":"on"},model:{value:t.loginForm.userName,callback:function(o){t.$set(t.loginForm,"userName",o)},expression:"loginForm.userName"}})],1),o("div",{staticClass:"lowin-group password-group"},[o("label",[t._v("密码 "),o("a",{staticClass:"forgot-link",attrs:{href:"#"}},[t._v("忘记密码?")])]),o("el-input",{key:t.passwordType,ref:"password",staticClass:"lowin-input",attrs:{type:t.passwordType,placeholder:"密码",name:"password",tabindex:"2","auto-complete":"on"},on:{blur:function(o){t.capsTooltip=!1}},nativeOn:{keyup:[function(o){return t.checkCapslock.apply(null,arguments)},function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.handleLogin.apply(null,arguments)}]},model:{value:t.loginForm.password,callback:function(o){t.$set(t.loginForm,"password",o)},expression:"loginForm.password"}})],1),o("el-button",{staticClass:"lowin-btn login-btn",attrs:{loading:t.loading,type:"text"},nativeOn:{click:function(o){return o.preventDefault(),t.handleLogin.apply(null,arguments)}}},[t._v("登录")]),o("div",{staticClass:"text-foot"},[t._v(" 还没有账号? "),o("router-link",{staticClass:"register-link",attrs:{to:"/register"}},[t._v(" 注册 ")])],1)],1)],1)])]),t._m(1)])},n=[function(){var t=this,o=t._self._c;return o("div",{staticClass:"lowin-brand"},[o("img",{staticStyle:{"margin-top":"12px"},attrs:{src:e("5fbe"),alt:"logo"}})])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"account-foot-copyright"},[o("span",[t._v("Copyright ©2019-2022 武汉思维跳跃科技有限公司 版权所有")])])}],i=e("5530"),a=(e("d9e2"),e("2f62")),r=e("7ded"),l={name:"Login",data:function(){var t=function(t,o,e){o.length<5?e(new Error("用户名不能少于5个字符")):e()},o=function(t,o,e){o.length<5?e(new Error("密码不能少于5个字符")):e()};return{loginForm:{userName:"",password:"",remember:!1},loginRules:{userName:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:o}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1}},created:function(){},mounted:function(){""===this.loginForm.userName?this.$refs.userName.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:Object(i["a"])({checkCapslock:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.shiftKey,e=t.key;e&&1===e.length&&(this.capsTooltip=!!(o&&e>="a"&&e<="z"||!o&&e>="A"&&e<="Z")),"CapsLock"===e&&!0===this.capsTooltip&&(this.capsTooltip=!1)},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this,o=this;this.$refs.loginForm.validate((function(e){if(!e)return!1;t.loading=!0,r["a"].login(t.loginForm).then((function(t){t&&1===t.code?(o.setUserName(o.loginForm.userName),o.$router.push({path:"/"})):(o.loading=!1,o.$message.error(t.message))})).catch((function(t){o.loading=!1}))}))}},Object(a["d"])("user",["setUserName"]))},c=l,u=(e("cdc6"),e("11a9"),e("2877")),p=Object(u["a"])(c,s,n,!1,null,"a1267c52",null);o["default"]=p.exports},cdc6:function(t,o,e){"use strict";e("e9e2")},e9e2:function(t,o,e){}}]);