webpackJsonp([2],{64:function(e,t,n){"use strict";function r(e){if("string"!=typeof e)return e;switch(e.toUpperCase()){case"GET":return T.Get;case"POST":return T.Post;case"PUT":return T.Put;case"DELETE":return T.Delete;case"OPTIONS":return T.Options;case"HEAD":return T.Head;case"PATCH":return T.Patch}throw new Error('Invalid request method. The method "'+e+'" is not supported.')}function o(e){return"responseURL"in e?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}function s(e){for(var t=new Uint16Array(e.length),n=0,r=e.length;n<r;n++)t[n]=e.charCodeAt(n);return t.buffer}function a(e){void 0===e&&(e="");var t=new Map;if(e.length>0){e.split("&").forEach(function(e){var n=e.indexOf("="),r=-1==n?[e,""]:[e.slice(0,n),e.slice(n+1)],o=r[0],s=r[1],a=t.get(o)||[];a.push(s),t.set(o,a)})}return t}function i(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}function u(){var e="object"==typeof window?window:{};return null===H&&(H=e[J]={}),H}function l(e){var t=new F;return Object.keys(e).forEach(function(n){var r=e[n];r&&Array.isArray(r)?r.forEach(function(e){return t.append(n,e.toString())}):t.append(n,r.toString())}),t}function p(e,t){return e.createConnection(t).response}function c(e,t,n,r){var o=e;return t?o.merge(new Z({method:t.method||n,url:t.url||r,search:t.search,params:t.params,headers:t.headers,body:t.body,withCredentials:t.withCredentials,responseType:t.responseType})):o.merge(new Z({method:n,url:r}))}function h(){return new $}function d(e,t){return new ae(e,t)}function f(e,t){return new ie(e,t)}function y(e){return de._34(0,[(e()(),de._18(0,null,null,1,"div",[],null,null,null,null,null)),(e()(),de._33(null,["",""]))],null,function(e,t){e(t,1,0,t.context.$implicit)})}function _(e){return de._34(0,[(e()(),de._33(null,["\n    "])),(e()(),de._18(0,null,null,12,"div",[],null,null,null,null,null)),(e()(),de._33(null,["\n      "])),(e()(),de._18(0,null,null,1,"h2",[],null,null,null,null,null)),(e()(),de._33(null,["Search"])),(e()(),de._33(null,["\n      "])),(e()(),de._18(0,[["foo",1]],null,0,"input",[["placeholder","Search on Wikipedia"],["type","text"]],null,null,null,null,null)),(e()(),de._33(null,["\n      "])),(e()(),de._18(0,null,null,1,"button",[],null,[[null,"click"]],function(e,t,n){var r=!0,o=e.component;if("click"===t){r=!1!==o.search(de._29(e,6).value)&&r}return r},null,null)),(e()(),de._33(null,["Search"])),(e()(),de._33(null,["\n      "])),(e()(),de._12(16777216,null,null,1,null,y)),de._16(802816,null,0,fe.g,[de._0,de.X,de.A],{ngForOf:[0,"ngForOf"]},null),(e()(),de._33(null,["\n    "])),(e()(),de._33(null,["\n  "]))],function(e,t){e(t,12,0,t.component.pages)},null)}function m(e){return de._34(0,[(e()(),de._18(0,null,null,1,"search",[],null,null,null,_,_e)),de._16(49152,null,0,ce,[ae],null,null)],null,null)}Object.defineProperty(t,"__esModule",{value:!0});var v=n(6),b=n(0),w=n(1),g=(n.n(w),n(8)),O=function(){function e(){}return e.prototype.build=function(){return new XMLHttpRequest},e}();O.decorators=[{type:b.w}],O.ctorParameters=function(){return[]};var T={};T.Get=0,T.Post=1,T.Put=2,T.Delete=3,T.Options=4,T.Head=5,T.Patch=6,T[T.Get]="Get",T[T.Post]="Post",T[T.Put]="Put",T[T.Delete]="Delete",T[T.Options]="Options",T[T.Head]="Head",T[T.Patch]="Patch";var C={};C.Unsent=0,C.Open=1,C.HeadersReceived=2,C.Loading=3,C.Done=4,C.Cancelled=5,C[C.Unsent]="Unsent",C[C.Open]="Open",C[C.HeadersReceived]="HeadersReceived",C[C.Loading]="Loading",C[C.Done]="Done",C[C.Cancelled]="Cancelled";var A={};A.Basic=0,A.Cors=1,A.Default=2,A.Error=3,A.Opaque=4,A[A.Basic]="Basic",A[A.Cors]="Cors",A[A.Default]="Default",A[A.Error]="Error",A[A.Opaque]="Opaque";var E={};E.NONE=0,E.JSON=1,E.FORM=2,E.FORM_DATA=3,E.TEXT=4,E.BLOB=5,E.ARRAY_BUFFER=6,E[E.NONE]="NONE",E[E.JSON]="JSON",E[E.FORM]="FORM",E[E.FORM_DATA]="FORM_DATA",E[E.TEXT]="TEXT",E[E.BLOB]="BLOB",E[E.ARRAY_BUFFER]="ARRAY_BUFFER";var R={};R.Text=0,R.Json=1,R.ArrayBuffer=2,R.Blob=3,R[R.Text]="Text",R[R.Json]="Json",R[R.ArrayBuffer]="ArrayBuffer",R[R.Blob]="Blob";var S=function(){function e(t){var n=this;if(this._headers=new Map,this._normalizedNames=new Map,t)return t instanceof e?void t.forEach(function(e,t){e.forEach(function(e){return n.append(t,e)})}):void Object.keys(t).forEach(function(e){var r=Array.isArray(t[e])?t[e]:[t[e]];n.delete(e),r.forEach(function(t){return n.append(e,t)})})}return e.fromResponseHeaderString=function(t){var n=new e;return t.split("\n").forEach(function(e){var t=e.indexOf(":");if(t>0){var r=e.slice(0,t),o=e.slice(t+1).trim();n.set(r,o)}}),n},e.prototype.append=function(e,t){var n=this.getAll(e);null===n?this.set(e,t):n.push(t)},e.prototype.delete=function(e){var t=e.toLowerCase();this._normalizedNames.delete(t),this._headers.delete(t)},e.prototype.forEach=function(e){var t=this;this._headers.forEach(function(n,r){return e(n,t._normalizedNames.get(r),t._headers)})},e.prototype.get=function(e){var t=this.getAll(e);return null===t?null:t.length>0?t[0]:null},e.prototype.has=function(e){return this._headers.has(e.toLowerCase())},e.prototype.keys=function(){return Array.from(this._normalizedNames.values())},e.prototype.set=function(e,t){Array.isArray(t)?t.length&&this._headers.set(e.toLowerCase(),[t.join(",")]):this._headers.set(e.toLowerCase(),[t]),this.mayBeSetNormalizedName(e)},e.prototype.values=function(){return Array.from(this._headers.values())},e.prototype.toJSON=function(){var e=this,t={};return this._headers.forEach(function(n,r){var o=[];n.forEach(function(e){return o.push.apply(o,e.split(","))}),t[e._normalizedNames.get(r)]=o}),t},e.prototype.getAll=function(e){return this.has(e)?this._headers.get(e.toLowerCase())||null:null},e.prototype.entries=function(){throw new Error('"entries" method is not implemented on Headers class')},e.prototype.mayBeSetNormalizedName=function(e){var t=e.toLowerCase();this._normalizedNames.has(t)||this._normalizedNames.set(t,e)},e}(),B=function(){function e(e){void 0===e&&(e={});var t=e.body,n=e.status,r=e.headers,o=e.statusText,s=e.type,a=e.url;this.body=null!=t?t:null,this.status=null!=n?n:null,this.headers=null!=r?r:null,this.statusText=null!=o?o:null,this.type=null!=s?s:null,this.url=null!=a?a:null}return e.prototype.merge=function(t){return new e({body:t&&null!=t.body?t.body:this.body,status:t&&null!=t.status?t.status:this.status,headers:t&&null!=t.headers?t.headers:this.headers,statusText:t&&null!=t.statusText?t.statusText:this.statusText,type:t&&null!=t.type?t.type:this.type,url:t&&null!=t.url?t.url:this.url})},e}(),N=function(e){function t(){return e.call(this,{status:200,statusText:"Ok",type:A.Default,headers:new S})||this}return v.a(t,e),t}(B);N.decorators=[{type:b.w}],N.ctorParameters=function(){return[]};var P=function(){function e(){}return e.prototype.createConnection=function(e){},e}(),x=(function(){function e(){}}(),function(){function e(){}return e.prototype.configureRequest=function(e){},e}()),q=function(e){return e>=200&&e<300},L=function(){function e(){}return e.prototype.encodeKey=function(e){return i(e)},e.prototype.encodeValue=function(e){return i(e)},e}(),F=function(){function e(e,t){void 0===e&&(e=""),void 0===t&&(t=new L),this.rawParams=e,this.queryEncoder=t,this.paramsMap=a(e)}return e.prototype.clone=function(){var t=new e("",this.queryEncoder);return t.appendAll(this),t},e.prototype.has=function(e){return this.paramsMap.has(e)},e.prototype.get=function(e){var t=this.paramsMap.get(e);return Array.isArray(t)?t[0]:null},e.prototype.getAll=function(e){return this.paramsMap.get(e)||[]},e.prototype.set=function(e,t){if(void 0===t||null===t)return void this.delete(e);var n=this.paramsMap.get(e)||[];n.length=0,n.push(t),this.paramsMap.set(e,n)},e.prototype.setAll=function(e){var t=this;e.paramsMap.forEach(function(e,n){var r=t.paramsMap.get(n)||[];r.length=0,r.push(e[0]),t.paramsMap.set(n,r)})},e.prototype.append=function(e,t){if(void 0!==t&&null!==t){var n=this.paramsMap.get(e)||[];n.push(t),this.paramsMap.set(e,n)}},e.prototype.appendAll=function(e){var t=this;e.paramsMap.forEach(function(e,n){for(var r=t.paramsMap.get(n)||[],o=0;o<e.length;++o)r.push(e[o]);t.paramsMap.set(n,r)})},e.prototype.replaceAll=function(e){var t=this;e.paramsMap.forEach(function(e,n){var r=t.paramsMap.get(n)||[];r.length=0;for(var o=0;o<e.length;++o)r.push(e[o]);t.paramsMap.set(n,r)})},e.prototype.toString=function(){var e=this,t=[];return this.paramsMap.forEach(function(n,r){n.forEach(function(n){return t.push(e.queryEncoder.encodeKey(r)+"="+e.queryEncoder.encodeValue(n))})}),t.join("&")},e.prototype.delete=function(e){this.paramsMap.delete(e)},e}(),M=function(){function e(){}return e.prototype.json=function(){return"string"==typeof this._body?JSON.parse(this._body):this._body instanceof ArrayBuffer?JSON.parse(this.text()):this._body},e.prototype.text=function(e){if(void 0===e&&(e="legacy"),this._body instanceof F)return this._body.toString();if(this._body instanceof ArrayBuffer)switch(e){case"legacy":return String.fromCharCode.apply(null,new Uint16Array(this._body));case"iso-8859":return String.fromCharCode.apply(null,new Uint8Array(this._body));default:throw new Error("Invalid value for encodingHint: "+e)}return null==this._body?"":"object"==typeof this._body?JSON.stringify(this._body,null,2):this._body.toString()},e.prototype.arrayBuffer=function(){return this._body instanceof ArrayBuffer?this._body:s(this.text())},e.prototype.blob=function(){if(this._body instanceof Blob)return this._body;if(this._body instanceof ArrayBuffer)return new Blob([this._body]);throw new Error("The request body isn't either a blob or an array buffer")},e}(),k=function(e){function t(t){var n=e.call(this)||this;return n._body=t.body,n.status=t.status,n.ok=n.status>=200&&n.status<=299,n.statusText=t.statusText,n.headers=t.headers,n.type=t.type,n.url=t.url,n}return v.a(t,e),t.prototype.toString=function(){return"Response with status: "+this.status+" "+this.statusText+" for URL: "+this.url},t}(M),D=0,J="__ng_jsonp__",H=null,j=function(){function e(){}return e.prototype.build=function(e){var t=document.createElement("script");return t.src=e,t},e.prototype.nextRequestID=function(){return"__req"+D++},e.prototype.requestCallback=function(e){return J+"."+e+".finished"},e.prototype.exposeConnection=function(e,t){u()[e]=t},e.prototype.removeConnection=function(e){u()[e]=null},e.prototype.send=function(e){document.body.appendChild(e)},e.prototype.cleanup=function(e){e.parentNode&&e.parentNode.removeChild(e)},e}();j.decorators=[{type:b.w}],j.ctorParameters=function(){return[]};var U="JSONP injected script did not invoke callback.",X="JSONP requests must use GET request method.",G=function(){function e(){}return e.prototype.finished=function(e){},e}(),K=function(e){function t(t,n,r){var o=e.call(this)||this;if(o._dom=n,o.baseResponseOptions=r,o._finished=!1,t.method!==T.Get)throw new TypeError(X);return o.request=t,o.response=new w.Observable(function(e){o.readyState=C.Loading;var s=o._id=n.nextRequestID();n.exposeConnection(s,o);var a=n.requestCallback(o._id),i=t.url;i.indexOf("=JSONP_CALLBACK&")>-1?i=i.replace("=JSONP_CALLBACK&","="+a+"&"):i.lastIndexOf("=JSONP_CALLBACK")===i.length-"=JSONP_CALLBACK".length&&(i=i.substring(0,i.length-"=JSONP_CALLBACK".length)+"="+a);var u=o._script=n.build(i),l=function(t){if(o.readyState!==C.Cancelled){if(o.readyState=C.Done,n.cleanup(u),!o._finished){var s=new B({body:U,type:A.Error,url:i});return r&&(s=r.merge(s)),void e.error(new k(s))}var a=new B({body:o._responseData,url:i});o.baseResponseOptions&&(a=o.baseResponseOptions.merge(a)),e.next(new k(a)),e.complete()}},p=function(t){if(o.readyState!==C.Cancelled){o.readyState=C.Done,n.cleanup(u);var s=new B({body:t.message,type:A.Error});r&&(s=r.merge(s)),e.error(new k(s))}};return u.addEventListener("load",l),u.addEventListener("error",p),n.send(u),function(){o.readyState=C.Cancelled,u.removeEventListener("load",l),u.removeEventListener("error",p),o._dom.cleanup(u)}}),o}return v.a(t,e),t.prototype.finished=function(e){this._finished=!0,this._dom.removeConnection(this._id),this.readyState!==C.Cancelled&&(this._responseData=e)},t}(G),z=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return v.a(t,e),t}(P),I=function(e){function t(t,n){var r=e.call(this)||this;return r._browserJSONP=t,r._baseResponseOptions=n,r}return v.a(t,e),t.prototype.createConnection=function(e){return new K(e,this._browserJSONP,this._baseResponseOptions)},t}(z);I.decorators=[{type:b.w}],I.ctorParameters=function(){return[{type:j},{type:B}]};var Y=/^\)\]\}',?\n/,V=function(){function e(e,t,n){var r=this;this.request=e,this.response=new w.Observable(function(s){var a=t.build();a.open(T[e.method].toUpperCase(),e.url),null!=e.withCredentials&&(a.withCredentials=e.withCredentials);var i=function(){var t=1223===a.status?204:a.status,r=null;204!==t&&"string"==typeof(r=void 0===a.response?a.responseText:a.response)&&(r=r.replace(Y,"")),0===t&&(t=r?200:0);var i=S.fromResponseHeaderString(a.getAllResponseHeaders()),u=o(a)||e.url,l=a.statusText||"OK",p=new B({body:r,status:t,headers:i,statusText:l,url:u});null!=n&&(p=n.merge(p));var c=new k(p);if(c.ok=q(t),c.ok)return s.next(c),void s.complete();s.error(c)},u=function(e){var t=new B({body:e,type:A.Error,status:a.status,statusText:a.statusText});null!=n&&(t=n.merge(t)),s.error(new k(t))};if(r.setDetectedContentType(e,a),null==e.headers&&(e.headers=new S),e.headers.has("Accept")||e.headers.append("Accept","application/json, text/plain, */*"),e.headers.forEach(function(e,t){return a.setRequestHeader(t,e.join(","))}),null!=e.responseType&&null!=a.responseType)switch(e.responseType){case R.ArrayBuffer:a.responseType="arraybuffer";break;case R.Json:a.responseType="json";break;case R.Text:a.responseType="text";break;case R.Blob:a.responseType="blob";break;default:throw new Error("The selected responseType is not supported")}return a.addEventListener("load",i),a.addEventListener("error",u),a.send(r.request.getBody()),function(){a.removeEventListener("load",i),a.removeEventListener("error",u),a.abort()}})}return e.prototype.setDetectedContentType=function(e,t){if(null==e.headers||null==e.headers.get("Content-Type"))switch(e.contentType){case E.NONE:break;case E.JSON:t.setRequestHeader("content-type","application/json");break;case E.FORM:t.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=UTF-8");break;case E.TEXT:t.setRequestHeader("content-type","text/plain");break;case E.BLOB:var n=e.blob();n.type&&t.setRequestHeader("content-type",n.type)}},e}(),$=function(){function e(e,t){void 0===e&&(e="XSRF-TOKEN"),void 0===t&&(t="X-XSRF-TOKEN"),this._cookieName=e,this._headerName=t}return e.prototype.configureRequest=function(e){var t=g.w().getCookie(this._cookieName);t&&e.headers.set(this._headerName,t)},e}(),W=function(){function e(e,t,n){this._browserXHR=e,this._baseResponseOptions=t,this._xsrfStrategy=n}return e.prototype.createConnection=function(e){return this._xsrfStrategy.configureRequest(e),new V(e,this._browserXHR,this._baseResponseOptions)},e}();W.decorators=[{type:b.w}],W.ctorParameters=function(){return[{type:O},{type:B},{type:x}]};var Z=function(){function e(e){void 0===e&&(e={});var t=e.method,n=e.headers,o=e.body,s=e.url,a=e.search,i=e.params,u=e.withCredentials,l=e.responseType;this.method=null!=t?r(t):null,this.headers=null!=n?n:null,this.body=null!=o?o:null,this.url=null!=s?s:null,this.params=this._mergeSearchParams(i||a),this.withCredentials=null!=u?u:null,this.responseType=null!=l?l:null}return Object.defineProperty(e.prototype,"search",{get:function(){return this.params},set:function(e){this.params=e},enumerable:!0,configurable:!0}),e.prototype.merge=function(t){return new e({method:t&&null!=t.method?t.method:this.method,headers:t&&null!=t.headers?t.headers:new S(this.headers),body:t&&null!=t.body?t.body:this.body,url:t&&null!=t.url?t.url:this.url,params:t&&this._mergeSearchParams(t.params||t.search),withCredentials:t&&null!=t.withCredentials?t.withCredentials:this.withCredentials,responseType:t&&null!=t.responseType?t.responseType:this.responseType})},e.prototype._mergeSearchParams=function(e){return e?e instanceof F?e.clone():"string"==typeof e?new F(e):this._parseParams(e):this.params},e.prototype._parseParams=function(e){var t=this;void 0===e&&(e={});var n=new F;return Object.keys(e).forEach(function(r){var o=e[r];Array.isArray(o)?o.forEach(function(e){return t._appendParam(r,e,n)}):t._appendParam(r,o,n)}),n},e.prototype._appendParam=function(e,t,n){"string"!=typeof t&&(t=JSON.stringify(t)),n.append(e,t)},e}(),Q=function(e){function t(){return e.call(this,{method:T.Get,headers:new S})||this}return v.a(t,e),t}(Z);Q.decorators=[{type:b.w}],Q.ctorParameters=function(){return[]};var ee=function(e){function t(t){var n=e.call(this)||this,o=t.url;n.url=t.url;var s=t.params||t.search;if(s){var a=void 0;if(a="object"!=typeof s||s instanceof F?s.toString():l(s).toString(),a.length>0){var i="?";-1!=n.url.indexOf("?")&&(i="&"==n.url[n.url.length-1]?"":"&"),n.url=o+i+a}}return n._body=t.body,n.method=r(t.method),n.headers=new S(t.headers),n.contentType=n.detectContentType(),n.withCredentials=t.withCredentials,n.responseType=t.responseType,n}return v.a(t,e),t.prototype.detectContentType=function(){switch(this.headers.get("content-type")){case"application/json":return E.JSON;case"application/x-www-form-urlencoded":return E.FORM;case"multipart/form-data":return E.FORM_DATA;case"text/plain":case"text/html":return E.TEXT;case"application/octet-stream":return this._body instanceof se?E.ARRAY_BUFFER:E.BLOB;default:return this.detectContentTypeFromBody()}},t.prototype.detectContentTypeFromBody=function(){return null==this._body?E.NONE:this._body instanceof F?E.FORM:this._body instanceof re?E.FORM_DATA:this._body instanceof oe?E.BLOB:this._body instanceof se?E.ARRAY_BUFFER:this._body&&"object"==typeof this._body?E.JSON:E.TEXT},t.prototype.getBody=function(){switch(this.contentType){case E.JSON:case E.FORM:return this.text();case E.FORM_DATA:return this._body;case E.TEXT:return this.text();case E.BLOB:return this.blob();case E.ARRAY_BUFFER:return this.arrayBuffer();default:return null}},t}(M),te=function(){},ne="object"==typeof window?window:te,re=ne.FormData||te,oe=ne.Blob||te,se=ne.ArrayBuffer||te,ae=function(){function e(e,t){this._backend=e,this._defaultOptions=t}return e.prototype.request=function(e,t){var n;if("string"==typeof e)n=p(this._backend,new ee(c(this._defaultOptions,t,T.Get,e)));else{if(!(e instanceof ee))throw new Error("First argument must be a url string or Request instance.");n=p(this._backend,e)}return n},e.prototype.get=function(e,t){return this.request(new ee(c(this._defaultOptions,t,T.Get,e)))},e.prototype.post=function(e,t,n){return this.request(new ee(c(this._defaultOptions.merge(new Z({body:t})),n,T.Post,e)))},e.prototype.put=function(e,t,n){return this.request(new ee(c(this._defaultOptions.merge(new Z({body:t})),n,T.Put,e)))},e.prototype.delete=function(e,t){return this.request(new ee(c(this._defaultOptions,t,T.Delete,e)))},e.prototype.patch=function(e,t,n){return this.request(new ee(c(this._defaultOptions.merge(new Z({body:t})),n,T.Patch,e)))},e.prototype.head=function(e,t){return this.request(new ee(c(this._defaultOptions,t,T.Head,e)))},e.prototype.options=function(e,t){return this.request(new ee(c(this._defaultOptions,t,T.Options,e)))},e}();ae.decorators=[{type:b.w}],ae.ctorParameters=function(){return[{type:P},{type:Z}]};var ie=function(e){function t(t,n){return e.call(this,t,n)||this}return v.a(t,e),t.prototype.request=function(e,t){if("string"==typeof e&&(e=new ee(c(this._defaultOptions,t,T.Get,e))),!(e instanceof ee))throw new Error("First argument must be a url string or Request instance.");if(e.method!==T.Get)throw new Error("JSONP requests must use GET request method.");return p(this._backend,e)},t}(ae);ie.decorators=[{type:b.w}],ie.ctorParameters=function(){return[{type:P},{type:Z}]};var ue=function(){function e(){}return e}();ue.decorators=[{type:b.D,args:[{providers:[{provide:ae,useFactory:d,deps:[W,Z]},O,{provide:Z,useClass:Q},{provide:B,useClass:N},W,{provide:x,useFactory:h}]}]}],ue.ctorParameters=function(){return[]};var le=function(){function e(){}return e}();le.decorators=[{type:b.D,args:[{providers:[{provide:ie,useFactory:f,deps:[z,Z]},j,{provide:Z,useClass:Q},{provide:B,useClass:N},{provide:z,useClass:I}]}]}],le.ctorParameters=function(){return[]};var pe=(new b.Z("4.2.4"),n(33)),ce=(n.n(pe),function(){function e(e){this.http=e,this.pages=[]}return e.prototype.search=function(e){var t=this;if(e&&e.length>0){var n=new S({"Content-Type":"application/json"}),r=new F;r.set("gapfrom",e),r.set("gaplimit","10"),r.set("generator","allpages"),r.set("action","query"),r.set("format","json"),r.set("origin","*");var o=new Z({headers:n,search:r});pe.map.call(this.http.get("https://en.wikipedia.org/w/api.php",o),function(e){return e.json()}).subscribe(function(e){t.pages=[];var n=e.query.pages;for(var r in n)t.pages.push(n[r].title)})}},e.ctorParameters=function(){return[{type:ae}]},e}()),he=function(){function e(){}return e}(),de=n(0),fe=n(5),ye=[],_e=de._15({encapsulation:2,styles:ye,data:{}}),me=de._13("search",ce,m,{},{},[]);n.d(t,"SearchModuleNgFactory",function(){return ge});var ve=n(0),be=n(5),we=n(17),ge=ve._14(he,[],function(e){return ve._27([ve._28(512,ve.m,ve._10,[[8,[me]],[3,ve.m],ve.G]),ve._28(4608,be.j,be.i,[ve.C]),ve._28(4608,O,O,[]),ve._28(4608,B,N,[]),ve._28(5120,x,h,[]),ve._28(4608,W,W,[O,B,x]),ve._28(4608,Z,Q,[]),ve._28(5120,ae,d,[W,Z]),ve._28(4608,j,j,[]),ve._28(4608,z,I,[j,B]),ve._28(5120,ie,f,[z,Z]),ve._28(512,be.b,be.b,[]),ve._28(512,ue,ue,[]),ve._28(512,le,le,[]),ve._28(512,we.m,we.m,[[2,we.r],[2,we.k]]),ve._28(512,he,he,[]),ve._28(1024,we.i,function(){return[[{path:"",component:ce}]]},[])])})}});
//# sourceMappingURL=2.chunk.js.map