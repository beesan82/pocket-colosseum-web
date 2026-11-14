var dg=Object.defineProperty;var fg=(n,e,t)=>e in n?dg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Fe=(n,e,t)=>fg(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lu="187",pg=0,ed=1,mg=2,bo=1,Iu=2,Ur=3,ts=0,mn=1,un=2,js=0,Wr=1,ns=2,td=3,nd=4,gg=5,$s=100,_g=101,xg=102,vg=103,Mg=104,yg=200,Sg=201,bg=202,Eg=203,Np=204,Dp=205,Tg=206,Ag=207,wg=208,Rg=209,Cg=210,Lg=211,Ig=212,Pg=213,Ng=214,Mc=0,yc=1,Sc=2,ra=3,bc=4,Ec=5,Tc=6,Ac=7,Up=0,Dg=1,Ug=2,Di=0,Fp=1,Op=2,Bp=3,kp=4,zp=5,Gp=6,Hp=7,id="attached",Fg="detached",Vp=300,sr=301,aa=302,Rl=303,Cl=304,rr=1e3,ci=1001,Fo=1002,Ut=1003,Wp=1004,Fr=1005,tn=1006,Eo=1007,ui=1008,En=1009,Xp=1010,$p=1011,oa=1012,Pu=1013,gi=1014,kn=1015,_i=1016,Nu=1017,Du=1018,ar=1020,qp=35902,Yp=35899,Kp=1021,Zp=1022,qn=1023,is=1026,Zi=1027,Uu=1028,Fu=1029,As=1030,Ou=1031,Bu=1033,To=33776,Ao=33777,wo=33778,Ro=33779,wc=35840,Rc=35841,Cc=35842,Lc=35843,Ic=36196,Pc=37492,Nc=37496,Dc=37488,Uc=37489,Oo=37490,Fc=37491,Oc=37808,Bc=37809,kc=37810,zc=37811,Gc=37812,Hc=37813,Vc=37814,Wc=37815,Xc=37816,$c=37817,qc=37818,Yc=37819,Kc=37820,Zc=37821,Jc=36492,jc=36494,Qc=36495,eu=36283,tu=36284,Bo=36285,nu=36286,Og=2200,Jp=2201,Bg=2202,la=2300,ca=2301,Ll=2302,sd=2303,qs=2400,Ys=2401,ko=2402,ku=2500,kg=2501,zg=0,jp=1,iu=2,Gg=3200,su=0,Hg=1,Yi="",Qt="srgb",Ln="srgb-linear",zo="linear",lt="srgb",Il=7680,Vg=519,Wg=512,Xg=513,$g=514,Qp=515,qg=516,Yg=517,em=518,tm=519,nm=35044,rd="300 es",Yn=2e3,ua=2001;function Kg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jg(){const n=ha("canvas");return n.style.display="block",n}const ad={};function Go(...n){const e="THREE."+n.shift();console.log(e,...n)}function im(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Re(...n){n=im(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function De(...n){n=im(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Qs(...n){const e=n.join(" ");e in ad||(ad[e]=!0,Re(...n))}function jg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Qg={[Mc]:Mc,[Sc]:Tc,[bc]:bc,[ra]:Ec,[yc]:yc,[Tc]:Sc,[Ac]:Ac,[Ec]:ra};class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let od=1234567;const Xr=Math.PI/180,or=180/Math.PI;function yi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function zu(n,e){return(n%e+e)%e}function e_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function t_(n,e,t){return n!==e?(t-n)/(e-n):0}function $r(n,e,t){return(1-t)*n+t*e}function n_(n,e,t,i){return $r(n,e,1-Math.exp(-t*i))}function i_(n,e=1){return e-Math.abs(zu(n,e*2)-e)}function s_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function r_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function a_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function o_(n,e){return n+Math.random()*(e-n)}function l_(n){return n*(.5-Math.random())}function c_(n){n!==void 0&&(od=n);let e=od+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function u_(n){return n*Xr}function h_(n){return n*or}function d_(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function f_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function sm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function p_(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Gu(n,e){if(e.constructor===Float32Array)return n;const t=rl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Hu(n,e){if(e.constructor===Float32Array)return n;const t=rl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const zn={DEG2RAD:Xr,RAD2DEG:or,generateUUID:yi,clamp:Je,euclideanModulo:zu,mapLinear:e_,inverseLerp:t_,lerp:$r,damp:n_,pingpong:i_,smoothstep:s_,smootherstep:r_,randInt:a_,randFloat:o_,randFloatSpread:l_,seededRandom:c_,degToRad:u_,radToDeg:h_,isPowerOfTwo:d_,ceilPowerOfTwo:f_,floorPowerOfTwo:sm,setQuaternionFromProperEuler:p_,normalize:Hu,denormalize:Gu},kh=class kh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kh.prototype.isVector2=!0;let Ve=kh;class wn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(h!==_||l!==d||c!==f||u!==g){let m=l*d+c*f+u*g+h*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const v=Math.acos(m),w=Math.sin(v);p=Math.sin(p*v)/w,o=Math.sin(o*v)/w,l=l*p+d*o,c=c*p+f*o,u=u*p+g*o,h=h*p+_*o}else{l=l*p+d*o,c=c*p+f*o,u=u*p+g*o,h=h*p+_*o;const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zh=class zh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ld.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ld.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pl.copy(this).projectOnVector(e),this.sub(Pl)}reflect(e){return this.sub(Pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zh.prototype.isVector3=!0;let N=zh;const Pl=new N,ld=new wn,Gh=class Gh{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],v=s[1],w=s[4],y=s[7],R=s[2],T=s[5],x=s[8];return r[0]=a*_+o*v+l*R,r[3]=a*m+o*w+l*T,r[6]=a*p+o*y+l*x,r[1]=c*_+u*v+h*R,r[4]=c*m+u*w+h*T,r[7]=c*p+u*y+h*x,r[2]=d*_+f*v+g*R,r[5]=d*m+f*w+g*T,r[8]=d*p+f*y+g*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=t*h+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*i)*_,e[2]=(o*i-s*a)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nl.makeScale(e,t)),this}rotate(e){return Qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nl.makeRotation(-e)),this}translate(e,t){return Qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gh.prototype.isMatrix3=!0;let Oe=Gh;const Nl=new Oe,cd=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ud=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m_(){const n={enabled:!0,workingColorSpace:Ln,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(s.r=er(s.r),s.g=er(s.g),s.b=er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yi?zo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ln]:{primaries:e,whitePoint:i,transfer:zo,toXYZ:cd,fromXYZ:ud,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:cd,fromXYZ:ud,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}const Ze=m_();function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function er(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Is;class g_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Is===void 0&&(Is=ha("canvas")),Is.width=e.width,Is.height=e.height;const s=Is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Is}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ha("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ui(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ui(t[i]/255)*255):t[i]=Ui(t[i]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let __=0;class Vu{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Dl(s[a].image)):r.push(Dl(s[a]))}else r=Dl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Dl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?g_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let x_=0;const Ul=new N;class Kt extends ls{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=ci,s=ci,r=tn,a=ui,o=qn,l=En,c=Kt.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=yi(),this.name="",this.source=new Vu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ul).x}get height(){return this.source.getSize(Ul).y}get depth(){return this.source.getSize(Ul).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rr:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rr:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Vp;Kt.DEFAULT_ANISOTROPY=1;const Hh=class Hh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(f+1)/2,R=(p+1)/2,T=(u+d)/4,x=(h+_)/4,b=(g+m)/4;return w>y&&w>R?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=T/i,r=x/i):y>R?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=T/s,r=b/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=x/r,s=b/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hh.prototype.isVector4=!0;let ut=Hh;class v_ extends ls{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Kt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vu(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends v_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class rm extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class M_ extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const sl=class sl{constructor(e,t,i,s,r,a,o,l,c,u,h,d,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,d,f,g,_,m)}set(e,t,i,s,r,a,o,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sl().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Ps.setFromMatrixColumn(e,0).length(),r=1/Ps.setFromMatrixColumn(e,1).length(),a=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y_,e,S_)}lookAt(e,t,i){const s=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),ki.crossVectors(i,Mn),ki.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),ki.crossVectors(i,Mn)),ki.normalize(),Ha.crossVectors(Mn,ki),s[0]=ki.x,s[4]=Ha.x,s[8]=Mn.x,s[1]=ki.y,s[5]=Ha.y,s[9]=Mn.y,s[2]=ki.z,s[6]=Ha.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],v=i[3],w=i[7],y=i[11],R=i[15],T=s[0],x=s[4],b=s[8],S=s[12],M=s[1],C=s[5],I=s[9],F=s[13],P=s[2],O=s[6],V=s[10],H=s[14],J=s[3],X=s[7],Q=s[11],te=s[15];return r[0]=a*T+o*M+l*P+c*J,r[4]=a*x+o*C+l*O+c*X,r[8]=a*b+o*I+l*V+c*Q,r[12]=a*S+o*F+l*H+c*te,r[1]=u*T+h*M+d*P+f*J,r[5]=u*x+h*C+d*O+f*X,r[9]=u*b+h*I+d*V+f*Q,r[13]=u*S+h*F+d*H+f*te,r[2]=g*T+_*M+m*P+p*J,r[6]=g*x+_*C+m*O+p*X,r[10]=g*b+_*I+m*V+p*Q,r[14]=g*S+_*F+m*H+p*te,r[3]=v*T+w*M+y*P+R*J,r[7]=v*x+w*C+y*O+R*X,r[11]=v*b+w*I+y*V+R*Q,r[15]=v*S+w*F+y*H+R*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],v=l*f-c*d,w=o*f-c*h,y=o*d-l*h,R=a*f-c*u,T=a*d-l*u,x=a*h-o*u;return t*(_*v-m*w+p*y)-i*(g*v-m*R+p*T)+s*(g*w-_*R+p*x)-r*(g*y-_*T+m*x)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=t*o-i*a,w=t*l-s*a,y=t*c-r*a,R=i*l-s*o,T=i*c-r*o,x=s*c-r*l,b=u*_-h*g,S=u*m-d*g,M=u*p-f*g,C=h*m-d*_,I=h*p-f*_,F=d*p-f*m,P=v*F-w*I+y*C+R*M-T*S+x*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return e[0]=(o*F-l*I+c*C)*O,e[1]=(s*I-i*F-r*C)*O,e[2]=(_*x-m*T+p*R)*O,e[3]=(d*T-h*x-f*R)*O,e[4]=(l*M-a*F-c*S)*O,e[5]=(t*F-s*M+r*S)*O,e[6]=(m*y-g*x-p*w)*O,e[7]=(u*x-d*y+f*w)*O,e[8]=(a*I-o*M+c*b)*O,e[9]=(i*M-t*I-r*b)*O,e[10]=(g*T-_*y+p*v)*O,e[11]=(h*y-u*T-f*v)*O,e[12]=(o*S-a*C-l*b)*O,e[13]=(t*C-i*S+s*b)*O,e[14]=(_*w-g*R-m*v)*O,e[15]=(u*R-h*w+d*v)*O,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,_=a*u,m=a*h,p=o*h,v=l*c,w=l*u,y=l*h,R=i.x,T=i.y,x=i.z;return s[0]=(1-(_+p))*R,s[1]=(f+y)*R,s[2]=(g-w)*R,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(d+p))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+w)*x,s[9]=(m-v)*x,s[10]=(1-(d+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ps.set(s[0],s[1],s[2]).length();const o=Ps.set(s[4],s[5],s[6]).length(),l=Ps.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Hn.copy(this);const c=1/a,u=1/o,h=1/l;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=h,Hn.elements[9]*=h,Hn.elements[10]*=h,t.setFromRotationMatrix(Hn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Yn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Yn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ua)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Yn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Yn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===ua)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};sl.prototype.isMatrix4=!0;let ze=sl;const Ps=new N,Hn=new ze,y_=new N(0,0,0),S_=new N(1,1,1),ki=new N,Ha=new N,Mn=new N,hd=new ze,dd=new wn;class ss{constructor(e=0,t=0,i=0,s=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dd.setFromEuler(this),this.setFromQuaternion(dd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class am{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let b_=0;const fd=new N,Ns=new wn,Ti=new ze,Va=new N,yr=new N,E_=new N,T_=new wn,pd=new N(1,0,0),md=new N(0,1,0),gd=new N(0,0,1),_d={type:"added"},A_={type:"removed"},Ds={type:"childadded",child:null},Fl={type:"childremoved",child:null};class xt extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new N,t=new ss,i=new wn,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new Oe}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new am,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(pd,e)}rotateY(e){return this.rotateOnAxis(md,e)}rotateZ(e){return this.rotateOnAxis(gd,e)}translateOnAxis(e,t){return fd.copy(e).applyQuaternion(this.quaternion),this.position.add(fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pd,e)}translateY(e){return this.translateOnAxis(md,e)}translateZ(e){return this.translateOnAxis(gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Va.copy(e):Va.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(yr,Va,this.up):Ti.lookAt(Va,yr,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(Ti),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_d),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(A_),Fl.child=e,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_d),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,E_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,T_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}xt.DEFAULT_UP=new N(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ct extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w_={type:"move"};class Ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(w_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Bl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ee{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=zu(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Bl(a,r,e+1/3),this.g=Bl(a,r,e),this.b=Bl(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Qt){function i(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=om[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Ze.workingToColorSpace(ln.copy(this),e),Math.round(Je(ln.r*255,0,255))*65536+Math.round(Je(ln.g*255,0,255))*256+Math.round(Je(ln.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(ln.copy(this),t);const i=ln.r,s=ln.g,r=ln.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Qt){Ze.workingToColorSpace(ln.copy(this),e);const t=ln.r,i=ln.g,s=ln.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Wa);const i=$r(zi.h,Wa.h,t),s=$r(zi.s,Wa.s,t),r=$r(zi.l,Wa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Ee;Ee.NAMES=om;class Wu{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=i}clone(){return new Wu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class R_ extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Vn=new N,Ai=new N,kl=new N,wi=new N,Us=new N,Fs=new N,xd=new N,zl=new N,Gl=new N,Hl=new N,Vl=new ut,Wl=new ut,Xl=new ut;class $n{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Vn.subVectors(e,t),s.cross(Vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Vn.subVectors(s,t),Ai.subVectors(i,t),kl.subVectors(e,t);const a=Vn.dot(Vn),o=Vn.dot(Ai),l=Vn.dot(kl),c=Ai.dot(Ai),u=Ai.dot(kl),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(a,wi.y),l.addScaledVector(o,wi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Vl.setScalar(0),Wl.setScalar(0),Xl.setScalar(0),Vl.fromBufferAttribute(e,t),Wl.fromBufferAttribute(e,i),Xl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Vl,r.x),a.addScaledVector(Wl,r.y),a.addScaledVector(Xl,r.z),a}static isFrontFacing(e,t,i,s){return Vn.subVectors(i,t),Ai.subVectors(e,t),Vn.cross(Ai).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Vn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return $n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Us.subVectors(s,i),Fs.subVectors(r,i),zl.subVectors(e,i);const l=Us.dot(zl),c=Fs.dot(zl);if(l<=0&&c<=0)return t.copy(i);Gl.subVectors(e,s);const u=Us.dot(Gl),h=Fs.dot(Gl);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(i).addScaledVector(Us,a);Hl.subVectors(e,r);const f=Us.dot(Hl),g=Fs.dot(Hl);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Fs,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return xd.subVectors(r,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(xd,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(Us,a).addScaledVector(Fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Zn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wn):Wn.fromBufferAttribute(r,a),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),$a.subVectors(this.max,Sr),Os.subVectors(e.a,Sr),Bs.subVectors(e.b,Sr),ks.subVectors(e.c,Sr),Gi.subVectors(Bs,Os),Hi.subVectors(ks,Bs),ds.subVectors(Os,ks);let t=[0,-Gi.z,Gi.y,0,-Hi.z,Hi.y,0,-ds.z,ds.y,Gi.z,0,-Gi.x,Hi.z,0,-Hi.x,ds.z,0,-ds.x,-Gi.y,Gi.x,0,-Hi.y,Hi.x,0,-ds.y,ds.x,0];return!$l(t,Os,Bs,ks,$a)||(t=[1,0,0,0,1,0,0,0,1],!$l(t,Os,Bs,ks,$a))?!1:(qa.crossVectors(Gi,Hi),t=[qa.x,qa.y,qa.z],$l(t,Os,Bs,ks,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new N,new N,new N,new N,new N,new N,new N,new N],Wn=new N,Xa=new Zn,Os=new N,Bs=new N,ks=new N,Gi=new N,Hi=new N,ds=new N,Sr=new N,$a=new N,qa=new N,fs=new N;function $l(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){fs.fromArray(n,r);const o=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=e.dot(fs),c=t.dot(fs),u=i.dot(fs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ct=new N,Ya=new Ve;let C_=0;class Rn extends ls{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:C_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nm,this.updateRanges=[],this.gpuType=kn,this.version=0,this._normalizationScale=e!==void 0?rl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Gu(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hu(e,this.array)}}class lm extends Rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cm extends Rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nt extends Rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const L_=new Zn,br=new N,ql=new N;class Si{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):L_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);const t=br.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(br,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(ql)),this.expandByPoint(br.copy(e.center).sub(ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let I_=0;const Un=new ze,Yl=new xt,zs=new N,yn=new Zn,Er=new Zn,Wt=new N;class zt extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kg(e)?cm:lm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Oe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return Yl.lookAt(e),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(yn.min,Er.min),yn.expandByPoint(Wt),Wt.addVectors(yn.max,Er.max),yn.expandByPoint(Wt)):(yn.expandByPoint(Er.min),yn.expandByPoint(Er.max))}yn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Wt.fromBufferAttribute(o,c),l&&(zs.fromBufferAttribute(e,c),Wt.add(zs)),s=Math.max(s,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Rn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let S=0;S<i.count;S++)o[S]=new N,l[S]=new N;const u=new N,h=new N,d=new N,f=new Ve,g=new Ve,_=new Ve,m=new N,p=new N;function v(S,M,C){c[S]=c[M]=c[C]=1,u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,M),d.fromBufferAttribute(i,C),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),_.fromBufferAttribute(r,C),h.sub(u),d.sub(u),g.sub(f),_.sub(f);const I=1/(g.x*_.y-_.x*g.y);isFinite(I)&&(m.copy(h).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(I),p.copy(d).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(I),o[S].add(m),o[M].add(m),o[C].add(m),l[S].add(p),l[M].add(p),l[C].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let S=0,M=w.length;S<M;++S){const C=w[S],I=C.start,F=C.count;for(let P=I,O=I+F;P<O;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const y=new N,R=new N,T=new N,x=new N;function b(S){T.fromBufferAttribute(s,S),x.copy(T);const M=o[S];y.copy(M),y.sub(T.multiplyScalar(T.dot(M))).normalize(),R.crossVectors(x,M);const I=R.dot(l[S])<0?-1:1;a.setXYZW(S,y.x,y.y,y.z,I)}for(let S=0,M=i.count;S<M;++S)c[S]&&b(S);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Rn(d,u,h)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class P_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nm,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=vd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=vd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function vd(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=yi()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}const dn=new N;class Xu{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?rl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Go("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Go("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Gu(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hu(e,this.data.array)}}const Kl=new N,N_=new N,D_=new Oe;class Xi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Kl.subVectors(i,t).cross(N_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Kl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||D_.getNormalMatrix(e),s=this.coplanarPoint(Kl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let U_=0;class pi extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=Wr,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Np,this.blendDst=Dp,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Il,this.stencilZFail=Il,this.stencilZPass=Il,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ee().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Xi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ve().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ci=new N,Zl=new N,Ka=new N,Za=new N;class al{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Zl.copy(e).add(t).multiplyScalar(.5),Ka.copy(t).sub(e).normalize(),Za.copy(this.origin).sub(Zl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ka),o=Za.dot(this.direction),l=-Za.dot(Ka),c=Za.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Zl).addScaledVector(Ka,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=i.x-a.x,v=i.y-a.y,w=i.z-a.z,y=Math.abs(l),R=Math.abs(c),T=Math.abs(u);let x,b,S,M,C,I,F,P,O,V,H,J;if(y>=R&&y>=T?(S=l,I=h,O=g,J=p,l>=0?(x=c,b=u,M=d,C=f,F=_,P=m,V=v,H=w):(x=u,b=c,M=f,C=d,F=m,P=_,V=w,H=v)):R>=T?(S=c,I=d,O=_,J=v,c>=0?(x=u,b=l,M=f,C=h,F=m,P=g,V=w,H=p):(x=l,b=u,M=h,C=f,F=g,P=m,V=p,H=w)):(S=u,I=f,O=m,J=w,u>=0?(x=l,b=c,M=h,C=d,F=g,P=_,V=p,H=v):(x=c,b=l,M=d,C=h,F=_,P=g,V=v,H=p)),S===0)return null;const X=x/S,Q=b/S,te=1/S,Te=M-X*I,Be=C-Q*I,K=F-X*O,ge=P-Q*O,ye=V-X*J,Le=H-Q*J,_e=ye*ge-Le*K,Ge=Te*Le-Be*ye,wt=K*Be-ge*Te;if(s){if(_e<0||Ge<0||wt<0)return null}else if((_e<0||Ge<0||wt<0)&&(_e>0||Ge>0||wt>0))return null;const Pe=_e+Ge+wt;if(Pe===0)return null;const at=te*(_e*I+Ge*O+wt*J);return(Pe>0?at<0:at>0)?null:this.at(at/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=Up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Md=new ze,ps=new al,Ja=new Si,yd=new N,ja=new N,Qa=new N,eo=new N,Jl=new N,to=new N,Sd=new N,no=new N;class re extends xt{constructor(e=new zt,t=new pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){to.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Jl.fromBufferAttribute(h,e),a?to.addScaledVector(Jl,u):to.addScaledVector(Jl.sub(t),u))}t.add(to)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(Ja.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Ja,yd)===null||ps.origin.distanceToSquared(yd)>(e.far-e.near)**2))&&(Md.copy(r).invert(),ps.copy(e.ray).applyMatrix4(Md),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,R=w;y<R;y+=3){const T=o.getX(y),x=o.getX(y+1),b=o.getX(y+2);s=io(this,p,e,i,c,u,h,T,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);s=io(this,a,e,i,c,u,h,v,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,R=w;y<R;y+=3){const T=y,x=y+1,b=y+2;s=io(this,p,e,i,c,u,h,T,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,w=m+1,y=m+2;s=io(this,a,e,i,c,u,h,v,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function F_(n,e,t,i,s,r,a,o){let l;if(e.side===mn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ts,o),l===null)return null;no.copy(o),no.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(no);return c<t.near||c>t.far?null:{distance:c,point:no.clone(),object:n}}function io(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,ja),n.getVertexPosition(l,Qa),n.getVertexPosition(c,eo);const u=F_(n,e,t,i,ja,Qa,eo,Sd);if(u){const h=new N;$n.getBarycoord(Sd,ja,Qa,eo,h),s&&(u.uv=$n.getInterpolatedAttribute(s,o,l,c,h,new Ve)),r&&(u.uv1=$n.getInterpolatedAttribute(r,o,l,c,h,new Ve)),a&&(u.normal=$n.getInterpolatedAttribute(a,o,l,c,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};$n.getNormal(ja,Qa,eo,d.normal),u.face=d,u.barycoord=h}return u}const Tr=new ut,bd=new ut,Ed=new ut,O_=new ut,Td=new ze,so=new N,jl=new Si,Ad=new ze,Ql=new al;class B_ extends re{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=id,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,so),this.boundingBox.expandByPoint(so)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Si),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,so),this.boundingSphere.expandByPoint(so)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jl.copy(this.boundingSphere),jl.applyMatrix4(s),e.ray.intersectsSphere(jl)!==!1&&(Ad.copy(s).invert(),Ql.copy(e.ray).applyMatrix4(Ad),!(this.boundingBox!==null&&Ql.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ql)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===id?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Fg?this.bindMatrixInverse.copy(this.bindMatrix).invert():Re("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;bd.fromBufferAttribute(s.attributes.skinIndex,e),Ed.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Tr.copy(t),t.set(0,0,0,0)):(Tr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Tr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=Ed.getComponent(r);if(a!==0){const o=bd.getComponent(r);Td.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(O_.copy(Tr).applyMatrix4(Td),a)}}return t.isVector4&&(t.w=Tr.w),t.applyMatrix4(this.bindMatrixInverse)}}class um extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $u extends Kt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Ut,u=Ut,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wd=new ze,k_=new ze;class qu{constructor(e=[],t=[]){this.uuid=yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Re("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ze;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:k_;wd.multiplyMatrices(o,t[r]),wd.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new qu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new $u(t,e,e,qn,kn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let a=t[r];a===void 0&&(Re("Skeleton: No bone found with UUID:",r),a=new um),this.bones.push(a),this.boneInverses.push(new ze().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=i[s];e.boneInverses.push(o.toArray())}return e}}class Ho extends Rn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gs=new ze,Rd=new ze,ro=[],Cd=new Zn,z_=new ze,Ar=new re,wr=new Si;class G_ extends re{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ho(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,z_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),Cd.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Cd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),wr.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(i),e.ray.intersectsSphere(wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),Rd.multiplyMatrices(i,Gs),Ar.matrixWorld=Rd,Ar.raycast(e,ro);for(let a=0,o=ro.length;a<o;a++){const l=ro[a];l.instanceId=r,l.object=this,t.push(l)}ro.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new $u(new Float32Array(s*this.count),s,this.count,Uu,kn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ms=new Si,H_=new Ve(.5,.5),ao=new N;class da{constructor(e=new Xi,t=new Xi,i=new Xi,s=new Xi,r=new Xi,a=new Xi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],w=r[13],y=r[14],R=r[15];if(s[0].setComponents(c-a,f-u,p-g,R-v).normalize(),s[1].setComponents(c+a,f+u,p+g,R+v).normalize(),s[2].setComponents(c+o,f+h,p+_,R+w).normalize(),s[3].setComponents(c-o,f-h,p-_,R-w).normalize(),i)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,f-d,p-m,R-y).normalize();else if(s[4].setComponents(c-l,f-d,p-m,R-y).normalize(),t===Yn)s[5].setComponents(c+l,f+d,p+m,R+y).normalize();else if(t===ua)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const t=H_.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ao.x=s.normal.x>0?e.max.x:e.min.x,ao.y=s.normal.y>0?e.max.y:e.min.y,ao.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Ld=new ze;class Yu{constructor(){this.coordinateSystem=Yn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Ld.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new da),i[s].setFromProjectionMatrix(Ld,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new da),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new Yu().copy(this)}}class hm extends pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vo=new N,Wo=new N,Id=new ze,Rr=new al,oo=new Si,ec=new N,Pd=new N;class Ku extends xt{constructor(e=new zt,t=new hm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Vo.fromBufferAttribute(t,s-1),Wo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Vo.distanceTo(Wo);e.setAttribute("lineDistance",new nt(i,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;Id.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Id);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),v=u.getX(_+1),w=lo(this,e,Rr,l,p,v,_);w&&t.push(w)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=lo(this,e,Rr,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=lo(this,e,Rr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=lo(this,e,Rr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function lo(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Vo.fromBufferAttribute(o,s),Wo.fromBufferAttribute(o,r),t.distanceSqToSegment(Vo,Wo,ec,Pd)>i)return;ec.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ec);if(!(c<e.near||c>e.far))return{distance:c,point:Pd.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Nd=new N,Dd=new N;class V_ extends Ku{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Nd.fromBufferAttribute(t,s),Dd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Nd.distanceTo(Dd);e.setAttribute("lineDistance",new nt(i,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class W_ extends Ku{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Zu extends pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ud=new ze,ru=new al,co=new Si,uo=new N;class dm extends xt{constructor(e=new zt,t=new Zu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(s),co.radius+=r,e.ray.intersectsSphere(co)===!1)return;Ud.copy(s).invert(),ru.copy(e.ray).applyMatrix4(Ud);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);uo.fromBufferAttribute(h,m),Fd(uo,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++)uo.fromBufferAttribute(h,g),Fd(uo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Fd(n,e,t,i,s,r,a){const o=ru.distanceSqToPoint(n);if(o<t){const l=new N;ru.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class fm extends Kt{constructor(e=[],t=sr,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lr extends Kt{constructor(e,t,i=gi,s,r,a,o=Ut,l=Ut,c,u=is,h=1){if(u!==is&&u!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class pm extends lr{constructor(e,t=gi,i=sr,s,r,a=Ut,o=Ut,l,c=is){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mm extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Lt extends zt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(h,2));function g(_,m,p,v,w,y,R,T,x,b,S){const M=y/x,C=R/b,I=y/2,F=R/2,P=T/2,O=x+1,V=b+1;let H=0,J=0;const X=new N;for(let Q=0;Q<V;Q++){const te=Q*C-F;for(let Te=0;Te<O;Te++){const Be=Te*M-I;X[_]=Be*v,X[m]=te*w,X[p]=P,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=T>0?1:-1,u.push(X.x,X.y,X.z),h.push(Te/x),h.push(1-Q/b),H+=1}}for(let Q=0;Q<b;Q++)for(let te=0;te<x;te++){const Te=d+te+O*Q,Be=d+te+O*(Q+1),K=d+(te+1)+O*(Q+1),ge=d+(te+1)+O*Q;l.push(Te,Be,ge),l.push(Be,K,ge),J+=6}o.addGroup(f,J,S),f+=J,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class qr extends zt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,g=i*2+r,_=s+1,m=new N,p=new N;for(let v=0;v<=g;v++){let w=0,y=0,R=0,T=0;if(v<=i){const S=v/i,M=S*Math.PI/2;y=-u-e*Math.cos(M),R=e*Math.sin(M),T=-e*Math.cos(M),w=S*h}else if(v<=i+r){const S=(v-i)/r;y=-u+S*t,R=e,T=0,w=h+S*d}else{const S=(v-i-r)/i,M=S*Math.PI/2;y=u+e*Math.sin(M),R=e*Math.cos(M),T=e*Math.sin(M),w=h+d+S*h}const x=Math.max(0,Math.min(1,w/f));let b=0;v===0?b=.5/s:v===g&&(b=-.5/s);for(let S=0;S<=s;S++){const M=S/s,C=M*Math.PI*2,I=Math.sin(C),F=Math.cos(C);p.x=-R*F,p.y=y,p.z=R*I,o.push(p.x,p.y,p.z),m.set(-R*F,T,R*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+b,x)}if(v>0){const S=(v-1)*_;for(let M=0;M<s;M++){const C=S+M,I=S+M+1,F=v*_+M,P=v*_+M+1;a.push(C,I,F),a.push(I,P,F)}}}this.setIndex(a),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ju extends zt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new N,u=new Ve;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=i+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ju(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class qt extends zt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;v(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new nt(h,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(f,2));function v(){const y=new N,R=new N;let T=0;const x=(t-e)/i;for(let b=0;b<=r;b++){const S=[],M=b/r,C=M*(t-e)+e;for(let I=0;I<=s;I++){const F=I/s,P=F*l+o,O=Math.sin(P),V=Math.cos(P);R.x=C*O,R.y=-M*i+m,R.z=C*V,h.push(R.x,R.y,R.z),y.set(O,x,V).normalize(),d.push(y.x,y.y,y.z),f.push(F,1-M),S.push(g++)}_.push(S)}for(let b=0;b<s;b++)for(let S=0;S<r;S++){const M=_[S][b],C=_[S+1][b],I=_[S+1][b+1],F=_[S][b+1];(e>0||S!==0)&&(u.push(M,C,F),T+=3),(t>0||S!==r-1)&&(u.push(C,I,F),T+=3)}c.addGroup(p,T,0),p+=T}function w(y){const R=g,T=new Ve,x=new N;let b=0;const S=y===!0?e:t,M=y===!0?1:-1;for(let I=1;I<=s;I++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const C=g;for(let I=0;I<=s;I++){const P=I/s*l+o,O=Math.cos(P),V=Math.sin(P);x.x=S*V,x.y=m*M,x.z=S*O,h.push(x.x,x.y,x.z),d.push(0,M,0),T.x=O*.5+.5,T.y=V*.5*M+.5,f.push(T.x,T.y),g++}for(let I=0;I<s;I++){const F=R+I,P=C+I;y===!0?u.push(P,P+1,F):u.push(P+1,P,F),b+=3}c.addGroup(p,b,y===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oi extends qt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new oi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ol extends zt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const w=new N,y=new N,R=new N;for(let T=0;T<t.length;T+=3)f(t[T+0],w),f(t[T+1],y),f(t[T+2],R),l(w,y,R,v)}function l(v,w,y,R){const T=R+1,x=[];for(let b=0;b<=T;b++){x[b]=[];const S=v.clone().lerp(y,b/T),M=w.clone().lerp(y,b/T),C=T-b;for(let I=0;I<=C;I++)I===0&&b===T?x[b][I]=S:x[b][I]=S.clone().lerp(M,I/C)}for(let b=0;b<T;b++)for(let S=0;S<2*(T-b)-1;S++){const M=Math.floor(S/2);S%2===0?(d(x[b][M+1]),d(x[b+1][M]),d(x[b][M])):(d(x[b][M+1]),d(x[b+1][M+1]),d(x[b+1][M]))}}function c(v){const w=new N;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(v),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function u(){const v=new N;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];const y=m(v)/2/Math.PI+.5,R=p(v)/Math.PI+.5;a.push(y,1-R)}g(),h()}function h(){for(let v=0;v<a.length;v+=6){const w=a[v+0],y=a[v+2],R=a[v+4],T=Math.max(w,y,R),x=Math.min(w,y,R);T>.9&&x<.1&&(w<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),R<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,w){const y=v*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function g(){const v=new N,w=new N,y=new N,R=new N,T=new Ve,x=new Ve,b=new Ve;for(let S=0,M=0;S<r.length;S+=9,M+=6){v.set(r[S+0],r[S+1],r[S+2]),w.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),T.set(a[M+0],a[M+1]),x.set(a[M+2],a[M+3]),b.set(a[M+4],a[M+5]),R.copy(v).add(w).add(y).divideScalar(3);const C=m(R);_(T,M+0,v,C),_(x,M+2,w,C),_(b,M+4,y,C)}}function _(v,w,y,R){R<0&&v.x===1&&(a[w]=v.x-1),y.x===0&&y.z===0&&(a[w]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.vertices,e.indices,e.radius,e.detail)}}class ju extends ol{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ju(e.radius,e.detail)}}class Pa extends zt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*d-a;for(let w=0;w<c;w++){const y=w*h-r;g.push(y,-v,0),_.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const w=v+c*p,y=v+c*(p+1),R=v+1+c*(p+1),T=v+1+c*p;f.push(w,y,T),f.push(y,R,T)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Na extends zt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,f=new N,g=new Ve;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const v=p+m,w=v,y=v+i+1,R=v+i+2,T=v+1;o.push(w,y,T),o.push(y,R,T)}}this.setIndex(o),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class nn extends zt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new N,d=new N,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const v=[],w=p/i,y=a+w*o,R=e*Math.cos(y),T=Math.sqrt(e*e-R*R);let x=0;p===0&&a===0?x=.5/t:p===i&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){const S=b/t,M=s+S*r;h.x=-T*Math.cos(M),h.y=R,h.z=T*Math.sin(M),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(S+x,1-w),v.push(c++)}u.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){const w=u[p][v+1],y=u[p][v],R=u[p+1][v],T=u[p+1][v+1];(p!==0||a>0)&&f.push(w,y,T),(p!==i-1||l<Math.PI)&&f.push(y,R,T)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qu extends ol{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qu(e.radius,e.detail)}}class Dt extends zt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],h=[],d=new N,f=new N,g=new N;for(let _=0;_<=i;_++){const m=a+_/i*o;for(let p=0;p<=s;p++){const v=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(f,d).normalize(),u.push(g.x,g.y,g.z),h.push(p/s),h.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){const p=(s+1)*_+m-1,v=(s+1)*(_-1)+m-1,w=(s+1)*(_-1)+m,y=(s+1)*_+m;l.push(p,v,y),l.push(v,w,y)}this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function cr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Od(s))s.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Od(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=cr(n[t]);for(const s in i)e[s]=i[s]}return e}function Od(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function X_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const $_={clone:cr,merge:fn};var q_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rs extends pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q_,this.fragmentShader=Y_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=X_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ee().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ve().fromArray(s.value);break;case"v3":this.uniforms[i].value=new N().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ut().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ze().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class K_ extends rs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class as extends pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qn extends as{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Qs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Qs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Z_ extends pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J_ extends pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function $i(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Or(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function j_(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Bd(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function Q_(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}class pr{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class ex extends pr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qs,endingEnd:qs}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ys:r=e,o=2*t-i;break;case ko:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ys:a=e,l=2*i-t;break;case ko:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,w=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let R=0;R!==o;++R)r[R]=p*a[u+R]+v*a[c+R]+w*a[l+R]+y*a[h+R];return r}}class _m extends pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class tx extends pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class nx extends pr{interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){const g=(i-t)/(s-t),_=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*g;return r}const d=o*2,f=e-1;for(let g=0;g!==o;++g){const _=a[c+g],m=a[l+g],p=f*d+g*2,v=h[p],w=h[p+1],y=e*d+g*2,R=u[y],T=u[y+1],x=sx(i,t,v,R,s);r[g]=xm(x,_,w,T,m)}return r}}function xm(n,e,t,i,s){const r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function ix(n,e,t,i,s){const r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function sx(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){const o=xm(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;const l=ix(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class ei{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$i(t,this.TimeBufferType),this.values=$i(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$i(e.times,Array),values:$i(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Or(e.settings)&&(i.settings={inTangents:$i(e.settings.inTangents,Array),outTangents:$i(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new tx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _m(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ex(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new nx(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case la:t=this.InterpolantFactoryMethodDiscrete;break;case ca:t=this.InterpolantFactoryMethodLinear;break;case Ll:t=this.InterpolantFactoryMethodSmooth;break;case sd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Re("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return la;case this.InterpolantFactoryMethodLinear:return ca;case this.InterpolantFactoryMethodSmooth:return Ll;case this.InterpolantFactoryMethodBezier:return sd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Or(this.settings)&&(kd(this.settings.inTangents,e),kd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Or(this.settings)&&(zd(this.settings.inTangents,e),zd(this.settings.outTangents,e))}return this}trim(e,t){const i=this.times,s=i.length;let r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(De("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(De("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){De("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){De("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Zg(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){De("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ll,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const h=o*i,d=h-i,f=h+i;for(let g=0;g!==i;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Or(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}}function kd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function zd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=ca;class mr extends ei{constructor(e,t,i){super(e,t,i)}}mr.prototype.ValueTypeName="bool";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=la;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;class vm extends ei{constructor(e,t,i,s){super(e,t,i,s)}}vm.prototype.ValueTypeName="color";class fa extends ei{constructor(e,t,i,s){super(e,t,i,s)}}fa.prototype.ValueTypeName="number";class rx extends pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)wn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class pa extends ei{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new rx(this.times,this.values,this.getValueSize(),e)}}pa.prototype.ValueTypeName="quaternion";pa.prototype.InterpolantFactoryMethodSmooth=void 0;class gr extends ei{constructor(e,t,i){super(e,t,i)}}gr.prototype.ValueTypeName="string";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=la;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class Xo extends ei{constructor(e,t,i,s){super(e,t,i,s)}}Xo.prototype.ValueTypeName="vector";class au{constructor(e="",t=-1,i=[],s=ku){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=yi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(ox(i[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(ei.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=j_(l);l=Bd(l,1,u),c=Bd(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new fa(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function ax(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fa;case"vector":case"vector2":case"vector3":case"vector4":return Xo;case"color":return vm;case"quaternion":return pa;case"bool":case"boolean":return mr;case"string":return gr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function ox(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ax(n.type);if(n.times===void 0){const i=[],s=[];Q_(n.keys,i,s,"value"),n.times=i,n.values=s}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),Or(n.settings)&&(t.settings={inTangents:$i(n.settings.inTangents,Float32Array),outTangents:$i(n.settings.outTangents,Float32Array)}),t}const Pi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Gd(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Gd(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Gd(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class lx{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const cx=new lx;class _r{constructor(e){this.manager=e!==void 0?e:cx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}_r.DEFAULT_MATERIAL_NAME="__DEFAULT";const Li={};class ux extends Error{constructor(e,t){super(e),this.response=t}}class Mm extends _r{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Pi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Li[e]!==void 0){Li[e].push({onLoad:t,onProgress:i,onError:s});return}Li[e]=[],Li[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Li[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:w,value:y})=>{if(w)p.close();else{_+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,x=u.length;T<x;T++){const b=u[T];b.onProgress&&b.onProgress(R)}p.enqueue(y),v()}},w=>{p.error(w)})}}});return new Response(m)}else throw new ux(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Pi.add(`file:${e}`,c);const u=Li[e];delete Li[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Li[e];if(u===void 0)throw this.manager.itemError(e),c;delete Li[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Hs=new WeakMap;class hx extends _r{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Pi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Hs.get(a);h===void 0&&(h=[],Hs.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=ha("img");function l(){u(),t&&t(this);const h=Hs.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Hs.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Pi.remove(`image:${e}`);const d=Hs.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}Hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Pi.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class dx extends _r{constructor(e){super(e)}load(e,t,i,s){const r=new Kt,a=new hx(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class ll extends xt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const tc=new ze,Hd=new N,Vd=new N;class eh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new da,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Hd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hd),Vd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){tc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(tc,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ua||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ho=new N,fo=new wn,ii=new N;class ym extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ho,fo,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,fo,ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ho,fo,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,fo,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new N,Wd=new Ve,Xd=new Ve;class pn extends ym{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return or*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,Wd,Xd),t.subVectors(Xd,Wd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class fx extends eh{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=or*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class px extends ll{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new fx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class mx extends eh{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}}class gx extends ll{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new mx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class th extends ym{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _x extends eh{constructor(){super(new th(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Co extends ll{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new _x}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class xx extends ll{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const nc=new WeakMap;class vx extends _r{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Re("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Re("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Pi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{nc.has(a)===!0?(s&&s(nc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Pi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),nc.set(l,c),Pi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Pi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Vs=-90,Ws=1;class ou extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(Vs,Ws,e,t);s.layers=this.layers,this.add(s);const r=new pn(Vs,Ws,e,t);r.layers=this.layers,this.add(r);const a=new pn(Vs,Ws,e,t);a.layers=this.layers,this.add(a);const o=new pn(Vs,Ws,e,t);o.layers=this.layers,this.add(o);const l=new pn(Vs,Ws,e,t);l.layers=this.layers,this.add(l);const c=new pn(Vs,Ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Mx extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class yx{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[r+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(i,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,a=s;r!==a;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,s){wn.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){const a=this._workIndex*r;wn.multiplyQuaternionsFlat(e,a,e,t,e,i),wn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,i,s,r){const a=1-s;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*s}}_lerpAdditive(e,t,i,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[i+a]*s}}}const nh="\\[\\]\\.:\\/",Sx=new RegExp("["+nh+"]","g"),ih="[^"+nh+"]",bx="[^"+nh.replace("\\.","")+"]",Ex=/((?:WC+[\/:])*)/.source.replace("WC",ih),Tx=/(WCOD+)?/.source.replace("WCOD",bx),Ax=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ih),wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ih),Rx=new RegExp("^"+Ex+Tx+Ax+wx+"$"),Cx=["material","materials","bones","map"];class Lx{constructor(e,t,i){const s=i||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class rt{constructor(e,t,i){this.path=t,this.parsedPath=i||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,i):new rt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sx,"")}static parseTrackName(e){const t=Rx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Cx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){De("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){De("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){De("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;De("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=Lx;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ix{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:qs,endingEnd:qs};for(let c=0;c!==a;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Jp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case kg:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case ku:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,r=this._loopCount;const a=i===Bg;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(i===Og){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=Ys,s.endingEnd=Ys):(e?s.endingStart=this.zeroSlopeAtStart?Ys:qs:s.endingStart=ko,t?s.endingEnd=this.zeroSlopeAtEnd?Ys:qs:s.endingEnd=ko)}_scheduleFading(e,t,i){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}}const Px=new Float32Array(1);class Nx extends ls{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;g=new yx(rt.create(i,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new _m(new Float32Array(2),new Float32Array(2),1,Px),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?au.findByName(s,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=ku),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new Ix(this,a,t,i);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){const i=t||this._root,s=i.uuid,r=typeof e=="string"?au.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(s,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}function $d(n,e,t,i){const s=Dx(i);switch(t){case Kp:return n*e;case Uu:return n*e/s.components*s.byteLength;case Fu:return n*e/s.components*s.byteLength;case As:return n*e*2/s.components*s.byteLength;case Ou:return n*e*2/s.components*s.byteLength;case Zp:return n*e*3/s.components*s.byteLength;case qn:return n*e*4/s.components*s.byteLength;case Bu:return n*e*4/s.components*s.byteLength;case To:case Ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wo:case Ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rc:case Lc:return Math.max(n,16)*Math.max(e,8)/4;case wc:case Cc:return Math.max(n,8)*Math.max(e,8)/2;case Ic:case Pc:case Dc:case Uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nc:case Oo:case Fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case kc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case zc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case $c:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case qc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Zc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Jc:case jc:case Qc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case eu:case tu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Bo:case nu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dx(n){switch(n){case En:case Xp:return{byteLength:1,components:1};case oa:case $p:case _i:return{byteLength:2,components:1};case Nu:case Du:return{byteLength:2,components:4};case gi:case Pu:case kn:return{byteLength:4,components:1};case qp:case Yp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lu}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sm(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ux(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Fx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ox=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Xx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$x=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,av=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ov=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hv="gl_FragColor = linearToOutputTexel( gl_FragColor );",dv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,pv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,mv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_v=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ev=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Av=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,wv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Rv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ov=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Bv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$v=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kv=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_M=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,MM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,TM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BM=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,HM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,VM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,WM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$M=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ey=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ny=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ry=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ay=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ly=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Fx,alphahash_pars_fragment:Ox,alphamap_fragment:Bx,alphamap_pars_fragment:kx,alphatest_fragment:zx,alphatest_pars_fragment:Gx,aomap_fragment:Hx,aomap_pars_fragment:Vx,batching_pars_vertex:Wx,batching_vertex:Xx,begin_vertex:$x,beginnormal_vertex:qx,bsdfs:Yx,iridescence_fragment:Kx,bumpmap_pars_fragment:Zx,clipping_planes_fragment:Jx,clipping_planes_pars_fragment:jx,clipping_planes_pars_vertex:Qx,clipping_planes_vertex:ev,color_fragment:tv,color_pars_fragment:nv,color_pars_vertex:iv,color_vertex:sv,common:rv,defaultnormal_vertex:av,displacementmap_pars_vertex:ov,displacementmap_vertex:lv,emissivemap_fragment:cv,emissivemap_pars_fragment:uv,colorspace_fragment:hv,colorspace_pars_fragment:dv,envmap_fragment:fv,envmap_common_pars_fragment:pv,envmap_pars_fragment:mv,envmap_pars_vertex:gv,envmap_physical_pars_fragment:wv,envmap_vertex:_v,fog_vertex:xv,fog_pars_vertex:vv,fog_fragment:Mv,fog_pars_fragment:yv,gradientmap_pars_fragment:Sv,lightmap_pars_fragment:bv,lights_lambert_fragment:Ev,lights_lambert_pars_fragment:Tv,lights_pars_begin:Av,lights_toon_fragment:Rv,lights_toon_pars_fragment:Cv,lights_phong_fragment:Lv,lights_phong_pars_fragment:Iv,lights_physical_fragment:Pv,lights_physical_pars_fragment:Nv,lights_fragment_begin:Dv,lights_fragment_maps:Uv,lights_fragment_end:Fv,lightprobes_pars_fragment:Ov,logdepthbuf_fragment:Bv,logdepthbuf_pars_fragment:kv,logdepthbuf_pars_vertex:zv,logdepthbuf_vertex:Gv,map_fragment:Hv,map_pars_fragment:Vv,map_particle_fragment:Wv,map_particle_pars_fragment:Xv,metalnessmap_fragment:$v,metalnessmap_pars_fragment:qv,morphinstance_vertex:Yv,morphcolor_vertex:Kv,morphnormal_vertex:Zv,morphtarget_pars_vertex:Jv,morphtarget_vertex:jv,normal_fragment_begin:Qv,normal_fragment_maps:eM,normal_pars_fragment:tM,normal_pars_vertex:nM,normal_vertex:iM,normalmap_pars_fragment:sM,clearcoat_normal_fragment_begin:rM,clearcoat_normal_fragment_maps:aM,clearcoat_pars_fragment:oM,iridescence_pars_fragment:lM,opaque_fragment:cM,packing:uM,premultiplied_alpha_fragment:hM,project_vertex:dM,dithering_fragment:fM,dithering_pars_fragment:pM,roughnessmap_fragment:mM,roughnessmap_pars_fragment:gM,shadowmap_pars_fragment:_M,shadowmap_pars_vertex:xM,shadowmap_vertex:vM,shadowmask_pars_fragment:MM,skinbase_vertex:yM,skinning_pars_vertex:SM,skinning_vertex:bM,skinnormal_vertex:EM,specularmap_fragment:TM,specularmap_pars_fragment:AM,tonemapping_fragment:wM,tonemapping_pars_fragment:RM,transmission_fragment:CM,transmission_pars_fragment:LM,uv_pars_fragment:IM,uv_pars_vertex:PM,uv_vertex:NM,worldpos_vertex:DM,background_vert:UM,background_frag:FM,backgroundCube_vert:OM,backgroundCube_frag:BM,cube_vert:kM,cube_frag:zM,depth_vert:GM,depth_frag:HM,distance_vert:VM,distance_frag:WM,equirect_vert:XM,equirect_frag:$M,linedashed_vert:qM,linedashed_frag:YM,meshbasic_vert:KM,meshbasic_frag:ZM,meshlambert_vert:JM,meshlambert_frag:jM,meshmatcap_vert:QM,meshmatcap_frag:ey,meshnormal_vert:ty,meshnormal_frag:ny,meshphong_vert:iy,meshphong_frag:sy,meshphysical_vert:ry,meshphysical_frag:ay,meshtoon_vert:oy,meshtoon_frag:ly,points_vert:cy,points_frag:uy,shadow_vert:hy,shadow_frag:dy,sprite_vert:fy,sprite_frag:py},me={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},li={basic:{uniforms:fn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:fn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ee(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:fn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:fn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:fn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ee(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:fn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:fn([me.points,me.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:fn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:fn([me.common,me.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:fn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:fn([me.sprite,me.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:fn([me.common,me.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:fn([me.lights,me.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};li.physical={uniforms:fn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const po={r:0,b:0,g:0},my=new ze,bm=new Oe;bm.set(-1,0,0,0,1,0,0,0,1);function gy(n,e,t,i,s,r){const a=new Ee(0);let o=s===!0?0:1,l,c,u=null,h=0,d=null;function f(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){const y=v.backgroundBlurriness>0;w=e.get(w,y)}return w}function g(v){let w=!1;const y=f(v);y===null?m(a,o):y&&y.isColor&&(m(y,1),w=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,w){const y=f(w);y&&y.isCubeTexture?(c===void 0&&(c=new re(new Lt(1,1,1),new rs({name:"BackgroundCubeMaterial",uniforms:cr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(my.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bm),c.material.toneMapped=Ze.getTransfer(y.colorSpace)!==lt,(u!==y||h!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new re(new Pa(2,2),new rs({name:"BackgroundMaterial",uniforms:cr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,w){v.getRGB(po,gm(n)),t.buffers.color.setClear(po.r,po.g,po.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:_,dispose:p}}function _y(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(C,I,F,P,O){let V=!1;const H=h(C,P,F,I);r!==H&&(r=H,c(r.object)),V=f(C,P,F,O),V&&g(C,P,F,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,y(C,I,F,P),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function h(C,I,F,P){const O=P.wireframe===!0;let V=i[I.id];V===void 0&&(V={},i[I.id]=V);const H=C.isInstancedMesh===!0?C.id:0;let J=V[H];J===void 0&&(J={},V[H]=J);let X=J[F.id];X===void 0&&(X={},J[F.id]=X);let Q=X[O];return Q===void 0&&(Q=d(l()),X[O]=Q),Q}function d(C){const I=[],F=[],P=[];for(let O=0;O<t;O++)I[O]=0,F[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:P,object:C,attributes:{},index:null}}function f(C,I,F,P){const O=r.attributes,V=I.attributes;let H=0;const J=F.getAttributes();for(const X in J)if(J[X].location>=0){const te=O[X];let Te=V[X];if(Te===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(Te=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(Te=C.instanceColor)),te===void 0||te.attribute!==Te||Te&&te.data!==Te.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function g(C,I,F,P){const O={},V=I.attributes;let H=0;const J=F.getAttributes();for(const X in J)if(J[X].location>=0){let te=V[X];te===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(te=C.instanceColor));const Te={};Te.attribute=te,te&&te.data&&(Te.data=te.data),O[X]=Te,H++}r.attributes=O,r.attributesNum=H,r.index=P}function _(){const C=r.newAttributes;for(let I=0,F=C.length;I<F;I++)C[I]=0}function m(C){p(C,0)}function p(C,I){const F=r.newAttributes,P=r.enabledAttributes,O=r.attributeDivisors;F[C]=1,P[C]===0&&(n.enableVertexAttribArray(C),P[C]=1),O[C]!==I&&(n.vertexAttribDivisor(C,I),O[C]=I)}function v(){const C=r.newAttributes,I=r.enabledAttributes;for(let F=0,P=I.length;F<P;F++)I[F]!==C[F]&&(n.disableVertexAttribArray(F),I[F]=0)}function w(C,I,F,P,O,V,H){H===!0?n.vertexAttribIPointer(C,I,F,O,V):n.vertexAttribPointer(C,I,F,P,O,V)}function y(C,I,F,P){_();const O=P.attributes,V=F.getAttributes(),H=I.defaultAttributeValues;for(const J in V){const X=V[J];if(X.location>=0){let Q=O[J];if(Q===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor)),Q!==void 0){const te=Q.normalized,Te=Q.itemSize,Be=e.get(Q);if(Be===void 0)continue;const K=Be.buffer,ge=Be.type,ye=Be.bytesPerElement,Le=ge===n.INT||ge===n.UNSIGNED_INT||Q.gpuType===Pu;if(Q.isInterleavedBufferAttribute){const _e=Q.data,Ge=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,wt=Q.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let Pe=0;Pe<X.locationSize;Pe++)p(X.location+Pe,_e.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Pe=0;Pe<X.locationSize;Pe++)m(X.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,K);for(let Pe=0;Pe<X.locationSize;Pe++)w(X.location+Pe,Te/X.locationSize,ge,te,Ge*ye,(wt+Te/X.locationSize*Pe)*ye,Le)}else{if(Q.isInstancedBufferAttribute){for(let _e=0;_e<X.locationSize;_e++)p(X.location+_e,Q.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let _e=0;_e<X.locationSize;_e++)m(X.location+_e);n.bindBuffer(n.ARRAY_BUFFER,K);for(let _e=0;_e<X.locationSize;_e++)w(X.location+_e,Te/X.locationSize,ge,te,Te*ye,Te/X.locationSize*_e*ye,Le)}}else if(H!==void 0){const te=H[J];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(X.location,te);break;case 3:n.vertexAttrib3fv(X.location,te);break;case 4:n.vertexAttrib4fv(X.location,te);break;default:n.vertexAttrib1fv(X.location,te)}}}}v()}function R(){S();for(const C in i){const I=i[C];for(const F in I){const P=I[F];for(const O in P){const V=P[O];for(const H in V)u(V[H].object),delete V[H];delete P[O]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const I=i[C.id];for(const F in I){const P=I[F];for(const O in P){const V=P[O];for(const H in V)u(V[H].object),delete V[H];delete P[O]}}delete i[C.id]}function x(C){for(const I in i){const F=i[I];for(const P in F){const O=F[P];if(O[C.id]===void 0)continue;const V=O[C.id];for(const H in V)u(V[H].object),delete V[H];delete O[C.id]}}}function b(C){for(const I in i){const F=i[I],P=C.isInstancedMesh===!0?C.id:0,O=F[P];if(O!==void 0){for(const V in O){const H=O[V];for(const J in H)u(H[J].object),delete H[J];delete O[V]}delete F[P],Object.keys(F).length===0&&delete i[I]}}}function S(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function xy(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function vy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==qn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const b=x===_i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==En&&x!==kn&&!b&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Re("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&Re("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,maxSamples:R,samples:T}}function My(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Xi,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:i,w=v*4;let y=p.clippingState||null;l.value=y,y=u(g,d,w,f);for(let R=0;R!==w;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=f;w!==_;++w,y+=4)a.copy(h[w]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}class sh extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new fm(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Lt(5,5,5),r=new rs({name:"CubemapFromEquirect",uniforms:cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:js});r.uniforms.tEquirect.value=t;const a=new re(s,r),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=tn),new ou(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const qd=256,yy=3,Sy=20,Em=256,Tm=16,by=3,Ey=new N,Ty=new Ee;class $o{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ou(1,10,null),this._boxMesh=new re(new Lt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Ey}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const h=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(Ty));const m=new ou(i,s,u);return m.position.copy(o),m.update(l,e),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(qd,sm(e))}_fromTexture(e,t){e.mapping===sr||e.mapping===aa?this._setSize(e.image.length===0?qd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=Yd(e,!1,!1),i=Math.log2(e)-yy;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Yd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===sr||e.mapping===aa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Kd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ay(),this._integrationMaterial=wy());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Tm);for(let a=0;a<=i;a++){const o=$o.lodToRoughness(a,i);if(a>i-by)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(Em*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ry());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function Yd(n,e,t){return new sh(n,{minFilter:ui,generateMipmaps:e,type:_i,colorSpace:Ln,depthBuffer:t})}function Da(n,e,t){return new rs({name:n,uniforms:e,vertexShader:$e.cube_vert,fragmentShader:t,side:mn,blending:js,depthTest:!1,depthWrite:!1})}function Ay(){return Da("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Em}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function wy(){return Da("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Tm}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ry(){return Da("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Sy}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Kd(){return Da("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Zd(){return Da("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Cy(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Rl||f===Cl)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const _=new sh(g.height);return _.fromEquirectangularTexture(n,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,g=f===Rl||f===Cl,_=f===sr||f===aa;if(g||_){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new $o(n)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const v=d.image;return g&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new $o(n)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,f){return f===Rl?d.mapping=sr:f===Cl&&(d.mapping=aa),d}function l(d){let f=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&f++;return f===g}function c(d){const f=d.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Ly(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Qs("WebGLRenderer: "+i+" extension not supported."),s}}}function Iy(n,e,t,i){const s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);const _=r.get(g);_&&(e.remove(_),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function u(g){const _=g.attributes;for(const m in _)e.update(_[m],n.ARRAY_BUFFER)}function h(g){const _=g.index,m=g.attributes.position;let p=0;if(m===void 0)return;const v=_!==null?_.array.length:m.array.length/3-1,w=m.count>=65535?cm:lm,y=new w(Math.ceil(v/3)*6,1),R=y.array;if(_!==null){const x=_.array;p=_.version;for(let b=0,S=0;b<v;b+=3){const M=x[b+0],C=x[b+1],I=x[b+2];R[S++]=M,R[S++]=C,R[S++]=C,R[S++]=I,R[S++]=I,R[S++]=M}}else{p=m.version;for(let x=0,b=0;x<v;x+=3){const S=x+0,M=x+1,C=x+2;R[b++]=S,R[b++]=M,R[b++]=M,R[b++]=C,R[b++]=C,R[b++]=S}}y.version=p;const T=r.get(g);T&&e.remove(T),r.set(g,y)}function d(g){const _=r.get(g);if(_){const m=g.index;m!==null&&_.version<m.version&&h(g)}else h(g);return r.get(g)}function f(){for(const g in s){const _=s[g].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function Py(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*a),t.update(d,i,1)}function c(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,h*a,f),t.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];t.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Ny(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:De("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Dy(n,e,t){const i=new WeakMap,s=new ut;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let S=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let w=0;f===!0&&(w=1),g===!0&&(w=2),_===!0&&(w=3);let y=o.attributes.position.count*w,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*R*4*h),x=new rm(T,y,R,h);x.type=kn,x.needsUpdate=!0;const b=w*4;for(let M=0;M<h;M++){const C=m[M],I=p[M],F=v[M],P=y*R*4*M;for(let O=0;O<C.count;O++){const V=O*b;f===!0&&(s.fromBufferAttribute(C,O),T[P+V+0]=s.x,T[P+V+1]=s.y,T[P+V+2]=s.z,T[P+V+3]=0),g===!0&&(s.fromBufferAttribute(I,O),T[P+V+4]=s.x,T[P+V+5]=s.y,T[P+V+6]=s.z,T[P+V+7]=0),_===!0&&(s.fromBufferAttribute(F,O),T[P+V+8]=s.x,T[P+V+9]=s.y,T[P+V+10]=s.z,T[P+V+11]=F.itemSize===4?s.w:1)}}d={count:h,texture:x,size:new Ve(y,R)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Uy(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Fy={[Fp]:"LINEAR_TONE_MAPPING",[Op]:"REINHARD_TONE_MAPPING",[Bp]:"CINEON_TONE_MAPPING",[kp]:"ACES_FILMIC_TONE_MAPPING",[Gp]:"AGX_TONE_MAPPING",[Hp]:"NEUTRAL_TONE_MAPPING",[zp]:"CUSTOM_TONE_MAPPING"};function Oy(n,e,t,i,s,r){const a=new fi(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new zt;u.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new nt([0,2,0,0,2,0],2));const h=new K_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new re(u,h),f=new th(-1,1,1,-1,0,1);let g=null,_=null,m=!1,p,v=null,w=[],y=!1;this.setSize=function(R,T){a.setSize(R,T),o!==null&&o.setSize(R,T),l!==null&&l.setSize(R,T);for(let x=0;x<w.length;x++){const b=w[x];b.setSize&&b.setSize(R,T)}},this.setEffects=function(R){w=R,y=w.length>0&&w[0].isRenderPass===!0;const T=a.width,x=a.height;w.length>0&&o===null&&(o=new fi(T,x,{type:_i,depthBuffer:!1,stencilBuffer:!1}),l=new fi(T,x,{type:_i,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&w.some(S=>S.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new lr(T,x),r===!0&&(c.format=Zi,c.type=ar)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let S=0;S<w.length;S++){const M=w[S];M.setSize&&M.setSize(T,x),b&&M.needsDepthTexture===!0&&M.setDepthTexture&&M.setDepthTexture(c)}},this.begin=function(R,T){if(m||R.toneMapping===Di&&w.length===0)return!1;if(v=T,T!==null){const x=T.width,b=T.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return y===!1&&R.setRenderTarget(a),p=R.toneMapping,R.toneMapping=Di,!0},this.hasRenderPass=function(){return y},this.end=function(R,T){R.toneMapping=p,m=!0;let x=a,b=o;for(let S=0;S<w.length;S++){const M=w[S];M.enabled!==!1&&(M.render(R,b,x,T),M.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(g!==R.outputColorSpace||_!==R.toneMapping){g=R.outputColorSpace,_=R.toneMapping,h.defines={},Ze.getTransfer(g)===lt&&(h.defines.SRGB_TRANSFER="");const S=Fy[_];S&&(h.defines[S]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,R.setRenderTarget(v),R.render(d,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}const Am=new Kt,wm=new lr(1,1),Rm=new pm(1),Cm=new rm,Lm=new M_,Im=new fm,Jd=[],jd=[],Qd=new Float32Array(16),ef=new Float32Array(9),tf=new Float32Array(4);function xr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Jd[s];if(r===void 0&&(r=new Float32Array(s),Jd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cl(n,e){let t=jd[e];t===void 0&&(t=new Int32Array(e),jd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function By(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function Gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function Hy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;tf.set(i),n.uniformMatrix2fv(this.addr,!1,tf),kt(t,i)}}function Vy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;ef.set(i),n.uniformMatrix3fv(this.addr,!1,ef),kt(t,i)}}function Wy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;Qd.set(i),n.uniformMatrix4fv(this.addr,!1,Qd),kt(t,i)}}function Xy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function qy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function Yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function Ky(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function Jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function ul(n){return n.version===0&&(n.compareFunction=tm,n.needsUpdate=!0),n}function Qy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=ul(wm):r=Am,t.setTexture2D(e||r,s)}function eS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Lm,s)}function tS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=ul(Rm):r=Im,t.setTextureCube(e||r,s)}function nS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Cm,s)}function iS(n){switch(n){case 5126:return By;case 35664:return ky;case 35665:return zy;case 35666:return Gy;case 35674:return Hy;case 35675:return Vy;case 35676:return Wy;case 5124:case 35670:return Xy;case 35667:case 35671:return $y;case 35668:case 35672:return qy;case 35669:case 35673:return Yy;case 5125:return Ky;case 36294:return Zy;case 36295:return Jy;case 36296:return jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return eS;case 35680:case 36300:case 36308:case 36293:return tS;case 36289:case 36303:case 36311:case 36292:return nS}}function sS(n,e){n.uniform1fv(this.addr,e)}function rS(n,e){const t=xr(e,this.size,2);n.uniform2fv(this.addr,t)}function aS(n,e){const t=xr(e,this.size,3);n.uniform3fv(this.addr,t)}function oS(n,e){const t=xr(e,this.size,4);n.uniform4fv(this.addr,t)}function lS(n,e){const t=xr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cS(n,e){const t=xr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function uS(n,e){const t=xr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hS(n,e){n.uniform1iv(this.addr,e)}function dS(n,e){n.uniform2iv(this.addr,e)}function fS(n,e){n.uniform3iv(this.addr,e)}function pS(n,e){n.uniform4iv(this.addr,e)}function mS(n,e){n.uniform1uiv(this.addr,e)}function gS(n,e){n.uniform2uiv(this.addr,e)}function _S(n,e){n.uniform3uiv(this.addr,e)}function xS(n,e){n.uniform4uiv(this.addr,e)}function vS(n,e,t){const i=this.cache,s=e.length,r=cl(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=ul(wm):a=Am;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function MS(n,e,t){const i=this.cache,s=e.length,r=cl(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Lm,r[a])}function yS(n,e,t){const i=this.cache,s=e.length,r=cl(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=ul(Rm):a=Im;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function SS(n,e,t){const i=this.cache,s=e.length,r=cl(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Cm,r[a])}function bS(n){switch(n){case 5126:return sS;case 35664:return rS;case 35665:return aS;case 35666:return oS;case 35674:return lS;case 35675:return cS;case 35676:return uS;case 5124:case 35670:return hS;case 35667:case 35671:return dS;case 35668:case 35672:return fS;case 35669:case 35673:return pS;case 5125:return mS;case 36294:return gS;case 36295:return _S;case 36296:return xS;case 35678:case 36198:case 36298:case 36306:case 35682:return vS;case 35679:case 36299:case 36307:return MS;case 35680:case 36300:case 36308:case 36293:return yS;case 36289:case 36303:case 36311:case 36292:return SS}}class ES{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=iS(t.type)}}class TS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bS(t.type)}}class AS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const ic=/(\w+)(\])?(\[|\.)?/g;function nf(n,e){n.seq.push(e),n.map[e.id]=e}function wS(n,e,t){const i=n.name,s=i.length;for(ic.lastIndex=0;;){const r=ic.exec(i),a=ic.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nf(t,c===void 0?new ES(o,n,e):new TS(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new AS(o),nf(t,h)),t=h}}}class Lo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);wS(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function sf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const RS=37297;let CS=0;function LS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const rf=new Oe;function IS(n){Ze._getMatrix(rf,Ze.workingColorSpace,n);const e=`mat3( ${rf.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case zo:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function af(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+LS(n.getShaderSource(e),o)}else return r}function PS(n,e){const t=IS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const NS={[Fp]:"Linear",[Op]:"Reinhard",[Bp]:"Cineon",[kp]:"ACESFilmic",[Gp]:"AgX",[Hp]:"Neutral",[zp]:"Custom"};function DS(n,e){const t=NS[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mo=new N;function US(){Ze.getLuminanceCoefficients(mo);const n=mo.x.toFixed(4),e=mo.y.toFixed(4),t=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function OS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function BS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Br(n){return n!==""}function of(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function lf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kS=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(n){return n.replace(kS,zS)}function zS(n,e){const t=$e[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return lu(t)}const GS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(n){return n.replace(GS,HS)}function HS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const VS={[bo]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"};function WS(n){return VS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const XS={[aa]:"ENVMAP_MODE_REFRACTION"};function $S(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":XS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qS={[Up]:"ENVMAP_BLENDING_MULTIPLY",[Dg]:"ENVMAP_BLENDING_MIX",[Ug]:"ENVMAP_BLENDING_ADD"};function YS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":qS[n.combine]||"ENVMAP_BLENDING_NONE"}function KS(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=WS(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=$S(t),h=YS(t),d=FS(t),f=OS(r),g=s.createProgram();let _,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Br).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Br).join(`
`),m.length>0&&(m+=`
`)):(_=[uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),m=[uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?$e.tonemapping_pars_fragment:"",t.toneMapping!==Di?DS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,PS("linearToOutputTexel",t.outputColorSpace),US(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),a=lu(a),a=of(a,t),a=lf(a,t),o=lu(o),o=of(o,t),o=lf(o,t),a=cf(a),o=cf(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=p+_+a,w=p+m+o,y=sf(s,s.VERTEX_SHADER,v),R=sf(s,s.FRAGMENT_SHADER,w);s.attachShader(g,y),s.attachShader(g,R),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(M){if(n.debug.checkShaderErrors){const C=s.getProgramInfoLog(g)||"",I=s.getShaderInfoLog(y)||"",F=s.getShaderInfoLog(R)||"",P=C.trim(),O=I.trim(),V=F.trim();let H=!0,J=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,y,R);else{const X=af(s,y,"vertex"),Q=af(s,R,"fragment");De("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+P+`
`+X+`
`+Q)}else P!==""?Re("WebGLProgram: Program Info Log:",P):(O===""||V==="")&&(J=!1);J&&(M.diagnostics={runnable:H,programLog:P,vertexShader:{log:O,prefix:_},fragmentShader:{log:V,prefix:m}})}s.deleteShader(y),s.deleteShader(R),x=new Lo(s,g),b=BS(s,g)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(g,RS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=R,this}let ZS=0;class JS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jS(e),t.set(e,i)),i}}class jS{constructor(e){this.id=ZS++,this.code=e,this.usedTimes=0}}function QS(n){return n===As||n===Oo||n===Bo}function eb(n,e,t,i,s,r){const a=new am,o=new JS,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,b,S,M,C,I){const F=M.fog,P=C.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?M.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||O,V),J=d[x.type];let X=i.precision;x.precision!==null&&(X=i.getMaxPrecision(x.precision),X!==x.precision&&Re("WebGLProgram.getParameters:",x.precision,"not supported, using",X,"instead."));const Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,te=Q!==void 0?Q.length:0;let Te=0;P.morphAttributes.position!==void 0&&(Te=1),P.morphAttributes.normal!==void 0&&(Te=2),P.morphAttributes.color!==void 0&&(Te=3);let Be,K,ge,ye;if(J){const pe=li[J];Be=pe.vertexShader,K=pe.fragmentShader}else{Be=x.vertexShader,K=x.fragmentShader;const pe=o.getVertexShaderStage(x),ot=o.getFragmentShaderStage(x);o.update(x,pe,ot),ge=pe.id,ye=ot.id}const Le=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Ge=C.isInstancedMesh===!0,wt=C.isBatchedMesh===!0,Pe=!!x.map,at=!!x.matcap,ht=!!H,je=ht&&H.isPMREMTexture===!0,Zt=!!x.aoMap,Pt=!!x.lightMap,gn=!!x.bumpMap&&x.wireframe===!1,yt=!!x.normalMap,ni=!!x.displacementMap,Gt=!!x.emissiveMap,In=!!x.metalnessMap,Pn=!!x.roughnessMap,Nn=x.anisotropy>0,B=x.clearcoat>0,Dn=x.diffuseRoughness>0,vt=x.dispersion>0,Mt=x.retroreflectivity>0,fe=x.iridescence>0,Nt=x.sheen>0,Ie=x.transmission>0,Ue=Nn&&!!x.anisotropyMap,L=B&&!!x.clearcoatMap,E=B&&!!x.clearcoatNormalMap,z=B&&!!x.clearcoatRoughnessMap,ne=Dn&&!!x.diffuseRoughnessMap,j=fe&&!!x.iridescenceMap,ae=fe&&!!x.iridescenceThicknessMap,he=Nt&&!!x.sheenColorMap,q=Nt&&!!x.sheenRoughnessMap,Y=!!x.specularMap,le=!!x.specularColorMap,D=!!x.specularIntensityMap,Z=Ie&&!!x.transmissionMap,$=Ie&&!!x.thicknessMap,ce=!!x.gradientMap,se=!!x.alphaMap,oe=x.alphaTest>0,we=!!x.alphaHash,Xe=!!x.extensions;let ie=Di;x.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(ie=n.toneMapping);const Ce=je?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,We={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:Be,fragmentShader:K,defines:x.defines,customVertexShaderID:ge,customFragmentShaderID:ye,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:X,batching:wt,batchingColor:wt&&C._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&C.instanceColor!==null,instancingMorph:Ge&&C.morphTexture!==null,outputColorSpace:Le===null?n.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Pe,matcap:at,envMap:ht,envMapMode:ht&&H.mapping,envMapPMREM:je,envMapMaxLod:je?Ce.length-1:null,envMapSize:je?Ce[0].width:null,aoMap:Zt,lightMap:Pt,bumpMap:gn,normalMap:yt,displacementMap:ni,emissiveMap:Gt,normalMapObjectSpace:yt&&x.normalMapType===Hg,normalMapTangentSpace:yt&&x.normalMapType===su,packedNormalMap:yt&&x.normalMapType===su&&QS(x.normalMap.format),metalnessMap:In,roughnessMap:Pn,anisotropy:Nn,anisotropyMap:Ue,clearcoat:B,clearcoatMap:L,clearcoatNormalMap:E,clearcoatRoughnessMap:z,diffuseRoughness:Dn,diffuseRoughnessMap:ne,dispersion:vt,retroreflection:Mt,iridescence:fe,iridescenceMap:j,iridescenceThicknessMap:ae,sheen:Nt,sheenColorMap:he,sheenRoughnessMap:q,specularMap:Y,specularColorMap:le,specularIntensityMap:D,transmission:Ie,transmissionMap:Z,thicknessMap:$,gradientMap:ce,opaque:x.transparent===!1&&x.blending===Wr&&x.alphaToCoverage===!1,alphaMap:se,alphaTest:oe,alphaHash:we,combine:x.combine,mapUv:Pe&&f(x.map.channel),aoMapUv:Zt&&f(x.aoMap.channel),lightMapUv:Pt&&f(x.lightMap.channel),bumpMapUv:gn&&f(x.bumpMap.channel),normalMapUv:yt&&f(x.normalMap.channel),displacementMapUv:ni&&f(x.displacementMap.channel),emissiveMapUv:Gt&&f(x.emissiveMap.channel),metalnessMapUv:In&&f(x.metalnessMap.channel),roughnessMapUv:Pn&&f(x.roughnessMap.channel),anisotropyMapUv:Ue&&f(x.anisotropyMap.channel),clearcoatMapUv:L&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:q&&f(x.sheenRoughnessMap.channel),specularMapUv:Y&&f(x.specularMap.channel),specularColorMapUv:le&&f(x.specularColorMap.channel),specularIntensityMapUv:D&&f(x.specularIntensityMap.channel),transmissionMapUv:Z&&f(x.transmissionMap.channel),thicknessMapUv:$&&f(x.thicknessMap.channel),alphaMapUv:se&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(yt||Nn),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!P.attributes.uv&&(Pe||se),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&yt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Te,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:I.filter(pe=>pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&S.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===lt,decodeVideoTextureEmissive:Gt&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===un,flipSided:x.side===mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Xe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&x.extensions.multiDraw===!0||wt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function _(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const S in x.defines)b.push(S),b.push(x.defines[S]);return x.isRawShaderMaterial===!1&&(m(b,x),p(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function p(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){const b=d[x.type];let S;if(b){const M=li[b];S=$_.clone(M.uniforms)}else S=x.uniforms;return S}function w(x,b){let S=u.get(b);return S!==void 0?++S.usedTimes:(S=new KS(n,b,x,s),c.push(S),u.set(b,S)),S}function y(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function R(x){o.remove(x)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:w,releaseProgram:y,releaseShaderCache:R,programs:c,dispose:T}}function tb(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function nb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function hf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function df(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,_,m,p){let v=n[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:p},n[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=g,v.materialVariant=a(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=m,v.group=p),e++,v}function l(d,f,g,_,m,p,v){v.reversedDepth===!0&&(m=-m);const w=o(d,f,g,_,m,p);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):t.push(w)}function c(d,f,g,_,m,p){const v=o(d,f,g,_,m,p);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function u(d,f){t.length>1&&t.sort(d||nb),i.length>1&&i.sort(f||hf),s.length>1&&s.sort(f||hf)}function h(){for(let d=e,f=n.length;d<f;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function ib(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new df,n.set(i,[a])):s>=r.length?(a=new df,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function sb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Ee};break;case"SpotLight":t={position:new N,direction:new N,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function rb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ab=0;function ob(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lb(n){const e=new sb,t=rb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,r=new ze,a=new ze;function o(c){let u=0,h=0,d=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,w=0,y=0,R=0,T=0,x=0,b=0,S=0,M=0;c.sort(ob);for(let I=0,F=c.length;I<F;I++){const P=c[I],O=P.color,V=P.intensity,H=P.distance;let J=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===As?J=P.shadow.map.texture:J=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=O.r*V,h+=O.g*V,d+=O.b*V;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],V);M++}else if(P.isSunLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[g]=te,i.sunShadowMap[g]=J;const Te=Q.getViewportCount();for(let Be=0;Be<Te;Be++)i.sunShadowMatrix[_+Be]=Q.getMatrix(Be),i.sunShadowCascade[_+Be]=Q._cascadeData[Be];_+=Te,g++}i.sun[f]=X,f++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,i.directionalShadow[m]=te,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=P.shadow.matrix,R++}i.directional[m]=X,m++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(V),X.distance=H,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[v]=X;const Q=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,Q.updateMatrices(P),P.castShadow&&S++),i.spotLightMatrix[v]=Q.matrix,P.castShadow){const te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,i.spotShadow[v]=te,i.spotShadowMap[v]=J,x++}v++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(O).multiplyScalar(V),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[w]=X,w++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const Q=P.shadow,te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,i.pointShadow[p]=te,i.pointShadowMap[p]=J,i.pointShadowMatrix[p]=P.shadow.matrix,T++}i.point[p]=X,p++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(V),X.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[y]=X,y++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const C=i.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==p||C.spotLength!==v||C.rectAreaLength!==w||C.hemiLength!==y||C.numSunShadows!==g||C.numDirectionalShadows!==R||C.numPointShadows!==T||C.numSpotShadows!==x||C.numSpotMaps!==b||C.numLightProbes!==M)&&(i.sun.length=f,i.directional.length=m,i.spot.length=v,i.rectArea.length=w,i.point.length=p,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-S,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=M,C.sunLength=f,C.directionalLength=m,C.pointLength=p,C.spotLength=v,C.rectAreaLength=w,C.hemiLength=y,C.numSunShadows=g,C.numDirectionalShadows=R,C.numPointShadows=T,C.numSpotShadows=x,C.numSpotMaps=b,C.numLightProbes=M,i.version=ab++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0,m=0;const p=u.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){const y=c[v];if(y.isSunLight){const R=i.sun[h];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(p),h++}else if(y.isDirectionalLight){const R=i.directional[d];R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),d++}else if(y.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const R=i.rectArea[_];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const R=i.point[f];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const R=i.hemi[m];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function ff(n){const e=new lb(n),t=[],i=[],s=[];function r(h){u.camera=h,t.length=0,i.length=0,s.length=0}function a(h){h.isLightProbeGrid?s.push(h):t.push(h)}function o(h){i.push(h)}function l(){e.setup(t),s.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function cb(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new ff(n),e.set(s,[o])):r>=a.length?(o=new ff(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const ub=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,db=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],fb=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],pf=new ze,Cr=new N,sc=new N;function pb(n,e,t){let i=new da;const s=new Ve,r=new Ve,a=new ut,o=new Z_,l=new J_,c={},u=t.maxTextureSize,h={[ts]:mn,[mn]:ts,[un]:un},d=new rs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:ub,fragmentShader:hb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new zt;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new re(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bo;let p=this.type;this.render=function(T,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Iu&&(Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bo);const S=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),I=n.state;I.setBlending(js),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==this.type;F&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(O=>O.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,O=T.length;P<O;P++){const V=T[P],H=V.shadow;if(H===void 0){Re("WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const J=H.getFrameExtents();s.multiply(J),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,H.mapSize.y=r.y));const X=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=X,H.map===null||F===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ur){if(V.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new fi(s.x,s.y,{format:As,type:_i,minFilter:tn,magFilter:tn,generateMipmaps:!1}),H.map.texture.name=V.name+".shadowMap",H.map.depthTexture=new lr(s.x,s.y,kn),H.map.depthTexture.name=V.name+".shadowMapDepth",H.map.depthTexture.format=is,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ut,H.map.depthTexture.magFilter=Ut}else V.isPointLight?(H.map=new sh(s.x),H.map.depthTexture=new pm(s.x,gi)):(H.map=new fi(s.x,s.y),H.map.depthTexture=new lr(s.x,s.y,gi)),H.map.depthTexture.name=V.name+".shadowMap",H.map.depthTexture.format=is,this.type===bo?(H.map.depthTexture.compareFunction=X?em:Qp,H.map.depthTexture.minFilter=tn,H.map.depthTexture.magFilter=tn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ut,H.map.depthTexture.magFilter=Ut);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);const Q=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();V.isPointLight!==!0&&H.updateMatrices(V,b);const te=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:b.layers;for(let Te=0;Te<Q;Te++){const Be=H.getCamera(Te);if(V.isPointLight){const K=H.camera,ge=H.matrix,ye=V.distance||K.far;ye!==K.far&&(K.far=ye,K.updateProjectionMatrix()),Cr.setFromMatrixPosition(V.matrixWorld),K.position.copy(Cr),sc.copy(K.position),sc.add(db[Te]),K.up.copy(fb[Te]),K.lookAt(sc),K.updateMatrixWorld(),ge.makeTranslation(-Cr.x,-Cr.y,-Cr.z),pf.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(pf,K.coordinateSystem,K.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,Te),n.clear();else{Te===0&&(n.setRenderTarget(H.map),n.clear());const K=H.getViewport(Te);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),I.viewport(a)}i=H.getFrustum(Te),y(x,b,Be,V,te,this.type)}H.isPointLightShadow!==!0&&this.type===Ur&&v(H,b),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,C)};function v(T,x){const b=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new fi(s.x,s.y,{format:As,type:_i}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(x,null,b,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(x,null,b,f,_,null)}function w(T,x,b,S){let M=null;const C=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)M=C;else if(M=b.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const I=M.uuid,F=x.uuid;let P=c[I];P===void 0&&(P={},c[I]=P);let O=P[F];O===void 0&&(O=M.clone(),P[F]=O,x.addEventListener("dispose",R)),M=O}if(M.visible=x.visible,M.wireframe=x.wireframe,S===Ur?M.side=x.shadowSide!==null?x.shadowSide:x.side:M.side=x.shadowSide!==null?x.shadowSide:h[x.side],M.alphaMap=x.alphaMap,M.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,M.map=x.map,M.clipShadows=x.clipShadows,M.clippingPlanes=x.clippingPlanes,M.clipIntersection=x.clipIntersection,M.displacementMap=x.displacementMap,M.displacementScale=x.displacementScale,M.displacementBias=x.displacementBias,M.wireframeLinewidth=x.wireframeLinewidth,M.linewidth=x.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=n.properties.get(M);I.light=b}return M}function y(T,x,b,S,M,C){if(T.visible===!1)return;if(T.layers.test(M)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Ur)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const P=e.update(T),O=T.material;if(Array.isArray(O)){const V=P.groups;for(let H=0,J=V.length;H<J;H++){const X=V[H],Q=O[X.materialIndex];if(Q&&Q.visible){const te=w(T,Q,S,C);T.onBeforeShadow(n,T,x,b,P,te,X),n.renderBufferDirect(b,null,P,te,T,X),T.onAfterShadow(n,T,x,b,P,te,X)}}}else if(O.visible){const V=w(T,O,S,C);T.onBeforeShadow(n,T,x,b,P,V,null),n.renderBufferDirect(b,null,P,V,T,null),T.onAfterShadow(n,T,x,b,P,V,null)}}const F=T.children;for(let P=0,O=F.length;P<O;P++)y(F[P],x,b,S,M,C)}function R(T){T.target.removeEventListener("dispose",R);for(const b in c){const S=c[b],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function mb(n,e){function t(){let D=!1;const Z=new ut;let $=null;const ce=new ut(0,0,0,0);return{setMask:function(se){$!==se&&!D&&(n.colorMask(se,se,se,se),$=se)},setLocked:function(se){D=se},setClear:function(se,oe,we,Xe,ie){ie===!0&&(se*=Xe,oe*=Xe,we*=Xe),Z.set(se,oe,we,Xe),ce.equals(Z)===!1&&(n.clearColor(se,oe,we,Xe),ce.copy(Z))},reset:function(){D=!1,$=null,ce.set(-1,0,0,0)}}}function i(){let D=!1,Z=!1,$=null,ce=null,se=null;return{setReversed:function(oe){if(Z!==oe){const we=e.get("EXT_clip_control");oe?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Z=oe;const Xe=se;se=null,this.setClear(Xe)}},getReversed:function(){return Z},setTest:function(oe){oe?_e(n.DEPTH_TEST):Ge(n.DEPTH_TEST)},setMask:function(oe){$!==oe&&!D&&(n.depthMask(oe),$=oe)},setFunc:function(oe){if(Z&&(oe=Qg[oe]),ce!==oe){switch(oe){case Mc:n.depthFunc(n.NEVER);break;case yc:n.depthFunc(n.ALWAYS);break;case Sc:n.depthFunc(n.LESS);break;case ra:n.depthFunc(n.LEQUAL);break;case bc:n.depthFunc(n.EQUAL);break;case Ec:n.depthFunc(n.GEQUAL);break;case Tc:n.depthFunc(n.GREATER);break;case Ac:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=oe}},setLocked:function(oe){D=oe},setClear:function(oe){se!==oe&&(se=oe,Z&&(oe=1-oe),n.clearDepth(oe))},reset:function(){D=!1,$=null,ce=null,se=null,Z=!1}}}function s(){let D=!1,Z=null,$=null,ce=null,se=null,oe=null,we=null,Xe=null,ie=null;return{setTest:function(Ce){D||(Ce?_e(n.STENCIL_TEST):Ge(n.STENCIL_TEST))},setMask:function(Ce){Z!==Ce&&!D&&(n.stencilMask(Ce),Z=Ce)},setFunc:function(Ce,We,pe){($!==Ce||ce!==We||se!==pe)&&(n.stencilFunc(Ce,We,pe),$=Ce,ce=We,se=pe)},setOp:function(Ce,We,pe){(oe!==Ce||we!==We||Xe!==pe)&&(n.stencilOp(Ce,We,pe),oe=Ce,we=We,Xe=pe)},setLocked:function(Ce){D=Ce},setClear:function(Ce){ie!==Ce&&(n.clearStencil(Ce),ie=Ce)},reset:function(){D=!1,Z=null,$=null,ce=null,se=null,oe=null,we=null,Xe=null,ie=null}}}const r=new t,a=new i,o=new s;let l={};const c=new WeakMap;let u={},h={},d={},f=new WeakMap,g=[],_=null,m=!1,p=null,v=null,w=null,y=null,R=null,T=null,x=null,b=new Ee(0,0,0),S=0,M=!1,C=null,I=null,F=null,P=null,O=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=J>=2);let Q=null,te={};const Te=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),K=new ut().fromArray(Te),ge=new ut().fromArray(Be);function ye(D,Z,$,ce){const se=new Uint8Array(4),oe=n.createTexture();n.bindTexture(D,oe),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<$;we++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(Z,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(Z+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return oe}const Le={};Le[n.TEXTURE_2D]=ye(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[n.TEXTURE_2D_ARRAY]=ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(n.DEPTH_TEST),a.setFunc(ra),gn(!1),yt(ed),_e(n.CULL_FACE),Zt(js);function _e(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Ge(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function wt(D,Z){return d[D]!==Z?(n.bindFramebuffer(D,Z),d[D]=Z,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Z),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Z),!0):!1}function Pe(D,Z){let $=g,ce=!1;if(D){$=f.get(Z),$===void 0&&($=[],f.set(Z,$));const se=D.textures;if($.length!==se.length||$[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,we=se.length;oe<we;oe++)$[oe]=n.COLOR_ATTACHMENT0+oe;$.length=se.length,ce=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,ce=!0);ce&&n.drawBuffers($)}function at(D){return _!==D?(n.useProgram(D),_=D,!0):!1}const ht={[$s]:n.FUNC_ADD,[_g]:n.FUNC_SUBTRACT,[xg]:n.FUNC_REVERSE_SUBTRACT};ht[vg]=n.MIN,ht[Mg]=n.MAX;const je={[yg]:n.ZERO,[Sg]:n.ONE,[bg]:n.SRC_COLOR,[Np]:n.SRC_ALPHA,[Cg]:n.SRC_ALPHA_SATURATE,[wg]:n.DST_COLOR,[Tg]:n.DST_ALPHA,[Eg]:n.ONE_MINUS_SRC_COLOR,[Dp]:n.ONE_MINUS_SRC_ALPHA,[Rg]:n.ONE_MINUS_DST_COLOR,[Ag]:n.ONE_MINUS_DST_ALPHA,[Lg]:n.CONSTANT_COLOR,[Ig]:n.ONE_MINUS_CONSTANT_COLOR,[Pg]:n.CONSTANT_ALPHA,[Ng]:n.ONE_MINUS_CONSTANT_ALPHA};function Zt(D,Z,$,ce,se,oe,we,Xe,ie,Ce){if(D===js){m===!0&&(Ge(n.BLEND),m=!1);return}if(m===!1&&(_e(n.BLEND),m=!0),D!==gg){if(D!==p||Ce!==M){if((v!==$s||R!==$s)&&(n.blendEquation(n.FUNC_ADD),v=$s,R=$s),Ce)switch(D){case Wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ns:n.blendFunc(n.ONE,n.ONE);break;case td:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:De("WebGLState: Invalid blending: ",D);break}else switch(D){case Wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case td:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nd:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",D);break}w=null,y=null,T=null,x=null,b.set(0,0,0),S=0,p=D,M=Ce}return}se=se||Z,oe=oe||$,we=we||ce,(Z!==v||se!==R)&&(n.blendEquationSeparate(ht[Z],ht[se]),v=Z,R=se),($!==w||ce!==y||oe!==T||we!==x)&&(n.blendFuncSeparate(je[$],je[ce],je[oe],je[we]),w=$,y=ce,T=oe,x=we),(Xe.equals(b)===!1||ie!==S)&&(n.blendColor(Xe.r,Xe.g,Xe.b,ie),b.copy(Xe),S=ie),p=D,M=!1}function Pt(D,Z){D.side===un?Ge(n.CULL_FACE):_e(n.CULL_FACE);let $=D.side===mn;Z&&($=!$),gn($),D.blending===Wr&&D.transparent===!1?Zt(js):Zt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const ce=D.stencilWrite;o.setTest(ce),ce&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Gt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):Ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function gn(D){C!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),C=D)}function yt(D){D!==pg?(_e(n.CULL_FACE),D!==I&&(D===ed?n.cullFace(n.BACK):D===mg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ge(n.CULL_FACE),I=D}function ni(D){D!==F&&(H&&n.lineWidth(D),F=D)}function Gt(D,Z,$){D?(_e(n.POLYGON_OFFSET_FILL),(P!==Z||O!==$)&&(P=Z,O=$,a.getReversed()&&(Z=-Z,$=-$),n.polygonOffset(Z,$))):Ge(n.POLYGON_OFFSET_FILL)}function In(D){D?_e(n.SCISSOR_TEST):Ge(n.SCISSOR_TEST)}function Pn(D){D===void 0&&(D=n.TEXTURE0+V-1),Q!==D&&(n.activeTexture(D),Q=D)}function Nn(D,Z,$){$===void 0&&(Q===null?$=n.TEXTURE0+V-1:$=Q);let ce=te[$];ce===void 0&&(ce={type:void 0,texture:void 0},te[$]=ce),(ce.type!==D||ce.texture!==Z)&&(Q!==$&&(n.activeTexture($),Q=$),n.bindTexture(D,Z||Le[D]),ce.type=D,ce.texture=Z)}function B(){const D=te[Q];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Dn(){try{n.compressedTexImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function vt(){try{n.compressedTexImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function Mt(){try{n.texSubImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function fe(){try{n.texSubImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function Nt(){try{n.compressedTexSubImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function Ie(){try{n.compressedTexSubImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function Ue(){try{n.texStorage2D(...arguments)}catch(D){De("WebGLState:",D)}}function L(){try{n.texStorage3D(...arguments)}catch(D){De("WebGLState:",D)}}function E(){try{n.texImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function z(){try{n.texImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function ne(D){return h[D]!==void 0?h[D]:n.getParameter(D)}function j(D,Z){h[D]!==Z&&(n.pixelStorei(D,Z),h[D]=Z)}function ae(D){K.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),K.copy(D))}function he(D){ge.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ge.copy(D))}function q(D,Z){let $=c.get(Z);$===void 0&&($=new WeakMap,c.set(Z,$));let ce=$.get(D);ce===void 0&&(ce=n.getUniformBlockIndex(Z,D.name),n.uniformBlockBinding(Z,ce,ce),$.set(D,ce))}function Y(D,Z,$){const se=c.get(Z).get(D);l[se]!==$&&(n.bindBufferBase(n.UNIFORM_BUFFER,se,$),l[se]=$)}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},Q=null,te={},d={},l={},f=new WeakMap,g=[],_=null,m=!1,p=null,v=null,w=null,y=null,R=null,T=null,x=null,b=new Ee(0,0,0),S=0,M=!1,C=null,I=null,F=null,P=null,O=null,K.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_e,disable:Ge,bindFramebuffer:wt,drawBuffers:Pe,useProgram:at,setBlending:Zt,setMaterial:Pt,setFlipSided:gn,setCullFace:yt,setLineWidth:ni,setPolygonOffset:Gt,setScissorTest:In,activeTexture:Pn,bindTexture:Nn,unbindTexture:B,compressedTexImage2D:Dn,compressedTexImage3D:vt,texImage2D:E,texImage3D:z,pixelStorei:j,getParameter:ne,updateUBOMapping:q,uniformBlockBinding:Y,texStorage2D:Ue,texStorage3D:L,texSubImage2D:Mt,texSubImage3D:fe,compressedTexSubImage2D:Nt,compressedTexSubImage3D:Ie,scissor:ae,viewport:he,reset:le}}function gb(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,u=new WeakMap,h=new Set;let d;const f=new WeakMap,g=new Set,_=new FinalizationRegistry(L=>g.delete(L));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,E){return m?new OffscreenCanvas(L,E):ha("canvas")}function v(L,E,z){let ne=1;const j=Ue(L);if((j.width>z||j.height>z)&&(ne=z/Math.max(j.width,j.height)),ne<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ae=Math.floor(ne*j.width),he=Math.floor(ne*j.height);d===void 0&&(d=p(ae,he));const q=E?p(ae,he):d;return q.width=ae,q.height=he,q.getContext("2d").drawImage(L,0,0,ae,he),Re("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ae+"x"+he+")."),q}else return"data"in L&&Re("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),L;return L}function w(L){return L.generateMipmaps}function y(L){n.generateMipmap(L)}function R(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(L,E,z,ne,j,ae=!1){if(L!==null){if(n[L]!==void 0)return n[L];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let he;ne&&(he=e.get("EXT_texture_norm16"),he||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=E;if(E===n.RED&&(z===n.FLOAT&&(q=n.R32F),z===n.HALF_FLOAT&&(q=n.R16F),z===n.UNSIGNED_BYTE&&(q=n.R8),z===n.UNSIGNED_SHORT&&he&&(q=he.R16_EXT),z===n.SHORT&&he&&(q=he.R16_SNORM_EXT)),E===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.R8UI),z===n.UNSIGNED_SHORT&&(q=n.R16UI),z===n.UNSIGNED_INT&&(q=n.R32UI),z===n.BYTE&&(q=n.R8I),z===n.SHORT&&(q=n.R16I),z===n.INT&&(q=n.R32I)),E===n.RG&&(z===n.FLOAT&&(q=n.RG32F),z===n.HALF_FLOAT&&(q=n.RG16F),z===n.UNSIGNED_BYTE&&(q=n.RG8),z===n.UNSIGNED_SHORT&&he&&(q=he.RG16_EXT),z===n.SHORT&&he&&(q=he.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RG8UI),z===n.UNSIGNED_SHORT&&(q=n.RG16UI),z===n.UNSIGNED_INT&&(q=n.RG32UI),z===n.BYTE&&(q=n.RG8I),z===n.SHORT&&(q=n.RG16I),z===n.INT&&(q=n.RG32I)),E===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGB8UI),z===n.UNSIGNED_SHORT&&(q=n.RGB16UI),z===n.UNSIGNED_INT&&(q=n.RGB32UI),z===n.BYTE&&(q=n.RGB8I),z===n.SHORT&&(q=n.RGB16I),z===n.INT&&(q=n.RGB32I)),E===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),z===n.UNSIGNED_INT&&(q=n.RGBA32UI),z===n.BYTE&&(q=n.RGBA8I),z===n.SHORT&&(q=n.RGBA16I),z===n.INT&&(q=n.RGBA32I)),E===n.RGB&&(z===n.UNSIGNED_SHORT&&he&&(q=he.RGB16_EXT),z===n.SHORT&&he&&(q=he.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),E===n.RGBA){const Y=ae?zo:Ze.getTransfer(j);z===n.FLOAT&&(q=n.RGBA32F),z===n.HALF_FLOAT&&(q=n.RGBA16F),z===n.UNSIGNED_BYTE&&(q=Y===lt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&he&&(q=he.RGBA16_EXT),z===n.SHORT&&he&&(q=he.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(L,E){let z;return L?E===null||E===gi||E===ar?z=n.DEPTH24_STENCIL8:E===kn?z=n.DEPTH32F_STENCIL8:E===oa&&(z=n.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===gi||E===ar?z=n.DEPTH_COMPONENT24:E===kn?z=n.DEPTH_COMPONENT32F:E===oa&&(z=n.DEPTH_COMPONENT16),z}function b(L,E){return w(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ut&&L.minFilter!==tn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function S(L){const E=new WeakRef(L);i.get(L).__ref=E,g.add(E),_.register(L,E,E)}function M(L){const E=i.get(L).__ref;E!==void 0&&(g.delete(E),_.unregister(E))}function C(L){F(L.target)}function I(L){P(L.target)}function F(L){L.removeEventListener("dispose",C),M(L),V(L),L.isVideoTexture&&u.delete(L),L.isHTMLTexture&&h.delete(L)}function P(L){L.removeEventListener("dispose",I),M(L),J(L)}function O(){for(const L of g){const E=L.deref();E!==void 0&&(E.isRenderTarget===!0?P(E):F(E))}g.clear(),h.clear()}function V(L){const E=i.get(L);if(E.__webglInit===void 0)return;const z=L.source,ne=f.get(z);if(ne){const j=ne[E.__cacheKey];j.usedTimes--,j.usedTimes===0&&H(L),Object.keys(ne).length===0&&f.delete(z)}i.remove(L)}function H(L){const E=i.get(L);n.deleteTexture(E.__webglTexture);const z=L.source,ne=f.get(z);delete ne[E.__cacheKey],a.memory.textures--}function J(L){const E=i.get(L);E.__depthDisposeCallback&&E.__depthDisposeCallback();const z=L.depthTexture;if(z&&z.renderTarget===L&&F(z),L.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let ae=0;ae<E.__webglFramebuffer[j].length;ae++)n.deleteFramebuffer(E.__webglFramebuffer[j][ae]);else n.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)n.deleteFramebuffer(E.__webglFramebuffer[j]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ne=L.textures;for(let j=0,ae=ne.length;j<ae;j++){const he=i.get(ne[j]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),a.memory.textures--),i.remove(ne[j])}i.remove(L)}let X=0;function Q(){X=0}function te(){return X}function Te(L){X=L}function Be(){const L=X;return L>=s.maxTextures&&Re("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,L}function K(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.mipmapsAutoUpdate),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ge(L,E){const z=i.get(L);if(L.isVideoTexture&&Nt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&z.__version!==L.version){const ne=L.image;if(ne===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(z,L,E);return}}else L.isExternalTexture&&(z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+E)}function ye(L,E){const z=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){Pt(z,L,E);return}else L.isExternalTexture&&(z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+E)}function Le(L,E){const z=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){Pt(z,L,E);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+E)}function _e(L,E){const z=i.get(L);if(L.version>0&&z.__version!==L.version){gn(z,L,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+E)}const Ge={[rr]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[Fo]:n.MIRRORED_REPEAT},wt={[Ut]:n.NEAREST,[Wp]:n.NEAREST_MIPMAP_NEAREST,[Fr]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[Eo]:n.LINEAR_MIPMAP_NEAREST,[ui]:n.LINEAR_MIPMAP_LINEAR},Pe={[Wg]:n.NEVER,[tm]:n.ALWAYS,[Xg]:n.LESS,[Qp]:n.LEQUAL,[$g]:n.EQUAL,[em]:n.GEQUAL,[qg]:n.GREATER,[Yg]:n.NOTEQUAL};function at(L,E){if(E.type===kn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===tn||E.magFilter===Eo||E.magFilter===Fr||E.magFilter===ui||E.minFilter===tn||E.minFilter===Eo||E.minFilter===Fr||E.minFilter===ui)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,Ge[E.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,Ge[E.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,Ge[E.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,wt[E.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,wt[E.minFilter]),E.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,Pe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ut||E.minFilter!==Fr&&E.minFilter!==ui||E.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ht(L,E){let z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",C),S(E));const ne=E.source;let j=f.get(ne);j===void 0&&(j={},f.set(ne,j));const ae=K(E);if(ae!==L.__cacheKey){j[ae]===void 0&&(j[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),j[ae].usedTimes++;const he=j[L.__cacheKey];he!==void 0&&(j[L.__cacheKey].usedTimes--,he.usedTimes===0&&H(E)),L.__cacheKey=ae,L.__webglTexture=j[ae].texture}return z}function je(L,E,z){return Math.floor(Math.floor(L/z)/E)}function Zt(L,E,z,ne){const ae=L.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,z,ne,E.data);else{ae.sort((D,Z)=>D.start-Z.start);let he=0;for(let D=1;D<ae.length;D++){const Z=ae[he],$=ae[D],ce=Z.start+Z.count,se=je($.start,E.width,4),oe=je(Z.start,E.width,4);$.start<=ce+1&&se===oe&&je($.start+$.count-1,E.width,4)===se?Z.count=Math.max(Z.count,$.start+$.count-Z.start):(++he,ae[he]=$)}ae.length=he+1;const q=t.getParameter(n.UNPACK_ROW_LENGTH),Y=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let D=0,Z=ae.length;D<Z;D++){const $=ae[D],ce=Math.floor($.start/4),se=Math.ceil($.count/4),oe=ce%E.width,we=Math.floor(ce/E.width),Xe=se,ie=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,we),t.texSubImage2D(n.TEXTURE_2D,0,oe,we,Xe,ie,z,ne,E.data)}L.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function Pt(L,E,z){let ne=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=n.TEXTURE_3D);const j=ht(L,E),ae=E.source;t.bindTexture(ne,L.__webglTexture,n.TEXTURE0+z);const he=i.get(ae);if(ae.version!==he.__version||j===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ie=Ze.getPrimaries(Ze.workingColorSpace),Ce=E.colorSpace===Yi?null:Ze.getPrimaries(E.colorSpace),We=E.colorSpace===Yi||ie===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let Y=v(E.image,!1,s.maxTextureSize);Y=Ie(E,Y);const le=r.convert(E.format,E.colorSpace),D=r.convert(E.type);let Z=T(E.internalFormat,le,D,E.normalized,E.colorSpace,E.isVideoTexture);at(ne,E);let $;const ce=E.mipmaps,se=E.isVideoTexture!==!0,oe=he.__version===void 0||j===!0,we=ae.dataReady,Xe=b(E,Y);if(E.isDepthTexture)Z=x(E.format===Zi,E.type),oe&&(se?t.texStorage2D(n.TEXTURE_2D,1,Z,Y.width,Y.height):t.texImage2D(n.TEXTURE_2D,0,Z,Y.width,Y.height,0,le,D,null));else if(E.isDataTexture)if(ce.length>0){se&&oe&&t.texStorage2D(n.TEXTURE_2D,Xe,Z,ce[0].width,ce[0].height);for(let ie=0,Ce=ce.length;ie<Ce;ie++)$=ce[ie],se?we&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,$.width,$.height,le,D,$.data):t.texImage2D(n.TEXTURE_2D,ie,Z,$.width,$.height,0,le,D,$.data);E.generateMipmaps=!1}else se?(oe&&t.texStorage2D(n.TEXTURE_2D,Xe,Z,Y.width,Y.height),we&&Zt(E,Y,le,D)):t.texImage2D(n.TEXTURE_2D,0,Z,Y.width,Y.height,0,le,D,Y.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){se&&oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,Z,ce[0].width,ce[0].height,Y.depth);for(let ie=0,Ce=ce.length;ie<Ce;ie++)if($=ce[ie],E.format!==qn)if(le!==null)if(se){if(we)if(E.layerUpdates.size>0){const We=$d($.width,$.height,E.format,E.type);for(const pe of E.layerUpdates){const ot=$.data.subarray(pe*We/$.data.BYTES_PER_ELEMENT,(pe+1)*We/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,pe,$.width,$.height,1,le,ot)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,$.width,$.height,Y.depth,le,$.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Z,$.width,$.height,Y.depth,0,$.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,$.width,$.height,Y.depth,le,D,$.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Z,$.width,$.height,Y.depth,0,le,D,$.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{se&&oe&&t.texStorage2D(n.TEXTURE_2D,Xe,Z,ce[0].width,ce[0].height);for(let ie=0,Ce=ce.length;ie<Ce;ie++)$=ce[ie],E.format!==qn?le!==null?se?we&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,$.width,$.height,le,$.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Z,$.width,$.height,0,$.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?we&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,$.width,$.height,le,D,$.data):t.texImage2D(n.TEXTURE_2D,ie,Z,$.width,$.height,0,le,D,$.data)}else if(E.isDataArrayTexture)if(se){if(oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,Z,Y.width,Y.height,Y.depth),we)if(E.layerUpdates.size>0){const ie=$d(Y.width,Y.height,E.format,E.type);for(const Ce of E.layerUpdates){const We=Y.data.subarray(Ce*ie/Y.data.BYTES_PER_ELEMENT,(Ce+1)*ie/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ce,Y.width,Y.height,1,le,D,We)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,le,D,Y.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Z,Y.width,Y.height,Y.depth,0,le,D,Y.data);else if(E.isData3DTexture)se?(oe&&t.texStorage3D(n.TEXTURE_3D,Xe,Z,Y.width,Y.height,Y.depth),we&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,le,D,Y.data)):t.texImage3D(n.TEXTURE_3D,0,Z,Y.width,Y.height,Y.depth,0,le,D,Y.data);else if(E.isFramebufferTexture){if(oe)if(se)t.texStorage2D(n.TEXTURE_2D,Xe,Z,Y.width,Y.height);else{let ie=Y.width,Ce=Y.height;for(let We=0;We<Xe;We++)t.texImage2D(n.TEXTURE_2D,We,Z,ie,Ce,0,le,D,null),ie>>=1,Ce>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const ie=n.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),Y.parentNode!==ie){ie.appendChild(Y),h.add(E),ie.onpaint=Ce=>{const We=Ce.changedElements;for(const pe of h)We.includes(pe.image)&&(pe.needsUpdate=!0)},ie.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Y);else{const We=n.RGBA,pe=n.RGBA,ot=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,We,pe,ot,Y)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ce.length>0){if(se&&oe){const ie=Ue(ce[0]);t.texStorage2D(n.TEXTURE_2D,Xe,Z,ie.width,ie.height)}for(let ie=0,Ce=ce.length;ie<Ce;ie++)$=ce[ie],se?we&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,le,D,$):t.texImage2D(n.TEXTURE_2D,ie,Z,le,D,$);E.generateMipmaps=!1}else if(se){if(oe){const ie=Ue(Y);t.texStorage2D(n.TEXTURE_2D,Xe,Z,ie.width,ie.height)}we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,D,Y)}else t.texImage2D(n.TEXTURE_2D,0,Z,le,D,Y);w(E)&&E.mipmapsAutoUpdate===!0&&y(ne),he.__version=ae.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function gn(L,E,z){if(E.image.length!==6)return;const ne=ht(L,E),j=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+z);const ae=i.get(j);if(j.version!==ae.__version||ne===!0){t.activeTexture(n.TEXTURE0+z);const he=Ze.getPrimaries(Ze.workingColorSpace),q=E.colorSpace===Yi?null:Ze.getPrimaries(E.colorSpace),Y=E.colorSpace===Yi||he===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const le=E.isCompressedTexture||E.image[0].isCompressedTexture,D=E.image[0]&&E.image[0].isDataTexture,Z=[];for(let pe=0;pe<6;pe++)!le&&!D?Z[pe]=v(E.image[pe],!0,s.maxCubemapSize):Z[pe]=D?E.image[pe].image:E.image[pe],Z[pe]=Ie(E,Z[pe]);const $=Z[0],ce=r.convert(E.format,E.colorSpace),se=r.convert(E.type);let oe=T(E.internalFormat,ce,se,E.normalized,E.colorSpace);const we=E.isVideoTexture!==!0,Xe=ae.__version===void 0||ne===!0,ie=j.dataReady;let Ce=b(E,$);at(n.TEXTURE_CUBE_MAP,E);let We;if(E.isDepthTexture){if(oe=x(E.format===Zi,E.type),Xe)if(we)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,oe,$.width,$.height);else for(let pe=0;pe<6;pe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,$.width,$.height,0,ce,se,null)}else if(le){we&&Xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,oe,$.width,$.height);for(let pe=0;pe<6;pe++){We=Z[pe].mipmaps;for(let ot=0;ot<We.length;ot++){const Ht=We[ot];E.format!==qn?ce!==null?we?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ot,0,0,Ht.width,Ht.height,ce,Ht.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ot,oe,Ht.width,Ht.height,0,Ht.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ot,0,0,Ht.width,Ht.height,ce,se,Ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ot,oe,Ht.width,Ht.height,0,ce,se,Ht.data)}}}else{if(We=E.mipmaps,we&&Xe){We.length>0&&Ce++;const pe=Ue(Z[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,oe,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(D){we?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Z[pe].width,Z[pe].height,ce,se,Z[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,Z[pe].width,Z[pe].height,0,ce,se,Z[pe].data);for(let ot=0;ot<We.length;ot++){const Oi=We[ot].image[pe].image;we?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ot+1,0,0,Oi.width,Oi.height,ce,se,Oi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ot+1,oe,Oi.width,Oi.height,0,ce,se,Oi.data)}}else{we?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ce,se,Z[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,ce,se,Z[pe]);for(let ot=0;ot<We.length;ot++){const Ht=We[ot];we?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ot+1,0,0,ce,se,Ht.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ot+1,oe,ce,se,Ht.image[pe])}}}w(E)&&E.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),ae.__version=j.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function yt(L,E,z,ne,j,ae){const he=r.convert(z.format,z.colorSpace),q=r.convert(z.type),Y=T(z.internalFormat,he,q,z.normalized,z.colorSpace),le=i.get(E),D=i.get(z);if(D.__renderTarget=E,!le.__hasExternalTextures){const Z=Math.max(1,E.width>>ae),$=Math.max(1,E.height>>ae);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,ae,Y,Z,$,E.depth,0,he,q,null):t.texImage2D(j,ae,Y,Z,$,0,he,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),fe(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,j,D.__webglTexture,0,Mt(E)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,j,D.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ni(L,E,z){if(n.bindRenderbuffer(n.RENDERBUFFER,L),E.depthBuffer){const ne=E.depthTexture,j=ne&&ne.isDepthTexture?ne.type:null,ae=x(E.stencilBuffer,j),he=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt(E),ae,E.width,E.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt(E),ae,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ae,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,L)}else{const ne=E.textures;for(let j=0;j<ne.length;j++){const ae=ne[j],he=r.convert(ae.format,ae.colorSpace),q=r.convert(ae.type),Y=T(ae.internalFormat,he,q,ae.normalized,ae.colorSpace);fe(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt(E),Y,E.width,E.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt(E),Y,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Y,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Gt(L,E,z){const ne=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(E.depthTexture);j.__renderTarget=E;const ae=ne?E.depthTexture.image[0]:E.depthTexture.image;(!j.__webglTexture||ae.width!==E.width||ae.height!==E.height)&&(ae.width=E.width,ae.height=E.height,E.depthTexture.needsUpdate=!0),ne?_e(E.depthTexture,0):ge(E.depthTexture,0);const he=j.__webglTexture,q=Mt(E),Y=ne?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,le=E.depthTexture.format===Zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===is)fe(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,Y,he,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,le,Y,he,0);else if(E.depthTexture.format===Zi)fe(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,Y,he,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,le,Y,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function In(L){const E=i.get(L),z=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ne=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ne){const j=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ne.removeEventListener("dispose",j)};ne.addEventListener("dispose",j),E.__depthDisposeCallback=j}E.__boundDepthTexture=ne}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(z)for(let ne=0;ne<6;ne++)Gt(E.__webglFramebuffer[ne],L,ne);else L.texture.mipmaps.length>0?Gt(E.__webglFramebuffer[0],L,0):Gt(E.__webglFramebuffer,L,0);else if(z){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]===void 0)E.__webglDepthbuffer[ne]=n.createRenderbuffer(),ni(E.__webglDepthbuffer[ne],L,!1);else{const j=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ae)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),ni(E.__webglDepthbuffer,L,!1);else{const j=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pn(L,E,z){const ne=i.get(L);E!==void 0&&yt(ne.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&In(L)}function Nn(L){const E=L.texture,z=i.get(L),ne=i.get(E);L.addEventListener("dispose",I),S(L);const j=L.textures,ae=L.isWebGLCubeRenderTarget===!0,he=j.length>1;if(he||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=E.version,a.memory.textures++),ae){z.__webglFramebuffer=[];for(let q=0;q<6;q++)if(E.mipmaps.length>0){z.__webglFramebuffer[q]=[];for(let Y=0;Y<E.mipmaps.length;Y++)z.__webglFramebuffer[q][Y]=n.createFramebuffer()}else z.__webglFramebuffer[q]=n.createFramebuffer()}else{if(E.mipmaps.length>0){z.__webglFramebuffer=[];for(let q=0;q<E.mipmaps.length;q++)z.__webglFramebuffer[q]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(he)for(let q=0,Y=j.length;q<Y;q++){const le=i.get(j[q]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(L.samples>0&&fe(L)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let q=0;q<j.length;q++){const Y=j[q];z.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[q]);const le=r.convert(Y.format,Y.colorSpace),D=r.convert(Y.type),Z=T(Y.internalFormat,le,D,Y.normalized,Y.colorSpace,L.isXRRenderTarget===!0),$=Mt(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,$,Z,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,z.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ni(z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),at(n.TEXTURE_CUBE_MAP,E);for(let q=0;q<6;q++)if(E.mipmaps.length>0)for(let Y=0;Y<E.mipmaps.length;Y++)yt(z.__webglFramebuffer[q][Y],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Y);else yt(z.__webglFramebuffer[q],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);w(E)?y(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(he){for(let q=0,Y=j.length;q<Y;q++){const le=j[q],D=i.get(le);let Z=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Z=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,D.__webglTexture),at(Z,le),yt(z.__webglFramebuffer,L,le,n.COLOR_ATTACHMENT0+q,Z,0),w(le)&&y(Z)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(q=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,ne.__webglTexture),at(q,E),E.mipmaps.length>0)for(let Y=0;Y<E.mipmaps.length;Y++)yt(z.__webglFramebuffer[Y],L,E,n.COLOR_ATTACHMENT0,q,Y);else yt(z.__webglFramebuffer,L,E,n.COLOR_ATTACHMENT0,q,0);w(E)?y(q):E.mipmaps.length>0&&n.texParameteri(q,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&In(L)}function B(L){const E=L.textures;for(let z=0,ne=E.length;z<ne;z++){const j=E[z];if(w(j)&&j.mipmapsAutoUpdate===!0){const ae=R(L),he=i.get(j).__webglTexture;t.bindTexture(ae,he),y(ae),t.unbindTexture()}}}const Dn=[];function vt(L){if(L.samples>0){if(fe(L)===!1){const E=L.textures,z=L.width,ne=L.height;let j=n.COLOR_BUFFER_BIT;const ae=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(L),q=E.length>1;if(q)for(let le=0;le<E.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let le=0;le<E.length;le++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[le]);const D=i.get(E[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,D,0)}n.blitFramebuffer(0,0,z,ne,0,0,z,ne,j,n.NEAREST),l===!0&&(Dn.length=0,Dn.push(n.COLOR_ATTACHMENT0+le),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Dn.push(ae),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Dn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let le=0;le<E.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,he.__webglColorRenderbuffer[le]);const D=i.get(E[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,D,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){const E=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Mt(L){return Math.min(s.maxSamples,L.samples)}function fe(L){const E=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Nt(L){const E=a.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function Ie(L,E){const z=L.colorSpace,ne=L.format,j=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||z!==Ln&&z!==Yi&&(Ze.getTransfer(z)===lt?(ne!==qn||j!==En)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",z)),E}function Ue(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=Be,this.resetTextureUnits=Q,this.getTextureUnits=te,this.setTextureUnits=Te,this.setTexture2D=ge,this.setTexture2DArray=ye,this.setTexture3D=Le,this.setTextureCube=_e,this.rebindTextures=Pn,this.setupRenderTarget=Nn,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=In,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=fe,this.dispose=O}function _b(n,e){function t(i,s=Yi){let r;const a=Ze.getTransfer(s);if(i===En)return n.UNSIGNED_BYTE;if(i===Nu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Du)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xp)return n.BYTE;if(i===$p)return n.SHORT;if(i===oa)return n.UNSIGNED_SHORT;if(i===Pu)return n.INT;if(i===gi)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===_i)return n.HALF_FLOAT;if(i===Kp)return n.ALPHA;if(i===Zp)return n.RGB;if(i===qn)return n.RGBA;if(i===is)return n.DEPTH_COMPONENT;if(i===Zi)return n.DEPTH_STENCIL;if(i===Uu)return n.RED;if(i===Fu)return n.RED_INTEGER;if(i===As)return n.RG;if(i===Ou)return n.RG_INTEGER;if(i===Bu)return n.RGBA_INTEGER;if(i===To||i===Ao||i===wo||i===Ro)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wc||i===Rc||i===Cc||i===Lc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ic||i===Pc||i===Nc||i===Dc||i===Uc||i===Oo||i===Fc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ic||i===Pc)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Nc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Dc)return r.COMPRESSED_R11_EAC;if(i===Uc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Oo)return r.COMPRESSED_RG11_EAC;if(i===Fc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Oc||i===Bc||i===kc||i===zc||i===Gc||i===Hc||i===Vc||i===Wc||i===Xc||i===$c||i===qc||i===Yc||i===Kc||i===Zc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Oc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$c)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jc||i===jc||i===Qc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Jc)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eu||i===tu||i===Bo||i===nu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===eu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===tu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const xb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Mb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new mm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new rs({vertexShader:xb,fragmentShader:vb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new re(new Pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yb extends ls{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Mb,p={},v=t.getContextAttributes();let w=null,y=null;const R=[],T=[],x=new Ve;let b=null,S=null;const M=new pn;M.viewport=new ut;const C=new pn;C.viewport=new ut;const I=[M,C],F=new Mx;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ge=R[K];return ge===void 0&&(ge=new Ol,R[K]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(K){let ge=R[K];return ge===void 0&&(ge=new Ol,R[K]=ge),ge.getGripSpace()},this.getHand=function(K){let ge=R[K];return ge===void 0&&(ge=new Ol,R[K]=ge),ge.getHandSpace()};function V(K){const ge=T.indexOf(K.inputSource);if(ge===-1)return;const ye=R[ge];ye!==void 0&&(ye.update(K.inputSource,K.frame,c||a),ye.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let K=0;K<R.length;K++){const ge=T[K];ge!==null&&(T[K]=null,R[K].disconnect(ge))}P=null,O=null,m.reset();for(const K in p)delete p[K];if(e.setRenderTarget(w),f=null,d=null,h=null,s=null,y=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),S!==null){const K=S.camera;K.fov=S.fov,K.zoom=S.zoom,K.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Le=null,_e=null;v.depth&&(_e=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=v.stencil?Zi:is,Le=v.stencil?ar:gi);const Ge={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new fi(d.textureWidth,d.textureHeight,{format:qn,type:En,depthTexture:new lr(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new fi(f.framebufferWidth,f.framebufferHeight,{format:qn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Be.setContext(s),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(K){for(let ge=0;ge<K.removed.length;ge++){const ye=K.removed[ge],Le=T.indexOf(ye);Le>=0&&(T[Le]=null,R[Le].disconnect(ye))}for(let ge=0;ge<K.added.length;ge++){const ye=K.added[ge];let Le=T.indexOf(ye);if(Le===-1){for(let Ge=0;Ge<R.length;Ge++)if(Ge>=T.length){T.push(ye),Le=Ge;break}else if(T[Ge]===null){T[Ge]=ye,Le=Ge;break}if(Le===-1)break}const _e=R[Le];_e&&_e.connect(ye)}}function X(K,ge){ge===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ge.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ge=K.near,ye=K.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),F.near=C.near=M.near=ge,F.far=C.far=M.far=ye,(P!==F.near||O!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),P=F.near,O=F.far),F.layers.mask=K.layers.mask|6,M.layers.mask=F.layers.mask&-5,C.layers.mask=F.layers.mask&-3;const Le=K.parent,_e=F.cameras;X(F,Le);for(let Ge=0;Ge<_e.length;Ge++)X(_e[Ge],Le);F.projectionMatrix.copy(M.projectionMatrix),F.projectionMatrixInverse.copy(M.projectionMatrixInverse),S===null&&K.isPerspectiveCamera&&(S={camera:K,fov:K.fov,zoom:K.zoom}),Q(K,F,Le)};function Q(K,ge,ye){ye===null?K.matrix.copy(ge.matrixWorld):(K.matrix.copy(ye.matrixWorld),K.matrix.invert(),K.matrix.multiply(ge.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ge.projectionMatrix),K.projectionMatrixInverse.copy(ge.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=or*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(K){return p[K]};let te=null;function Te(K,ge){if(u=ge.getViewerPose(c||a),g=ge,u!==null){const ye=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Le=!1;ye.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let Pe=0;Pe<ye.length;Pe++){const at=ye[Pe];let ht=null;if(f!==null)ht=f.getViewport(at);else{const Zt=h.getViewSubImage(d,at);ht=Zt.viewport,Pe===0&&(e.setRenderTargetTextures(y,Zt.colorTexture,Zt.depthStencilTexture),e.setRenderTarget(y))}let je=I[Pe];je===void 0&&(je=new pn,je.layers.enable(Pe),je.viewport=new ut,I[Pe]=je),je.matrix.fromArray(at.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(at.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ht.x,ht.y,ht.width,ht.height),Pe===0&&(F.matrix.copy(je.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(je)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const Pe=h.getDepthInformation(ye[0]);Pe&&Pe.isValid&&Pe.texture&&m.init(Pe,s.renderState)}if(_e&&_e.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let Pe=0;Pe<ye.length;Pe++){const at=ye[Pe].camera;if(at){let ht=p[at];ht||(ht=new mm,p[at]=ht);const je=h.getCameraImage(at);ht.sourceTexture=je}}}}for(let ye=0;ye<R.length;ye++){const Le=T[ye],_e=R[ye];Le!==null&&_e!==void 0&&_e.update(Le,ge,c||a)}te&&te(K,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),g=null}const Be=new Sm;Be.setAnimationLoop(Te),this.setAnimationLoop=function(K){te=K},this.dispose=function(){}}}const Sb=new ze,Pm=new Oe;Pm.set(-1,0,0,0,1,0,0,0,1);function bb(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,gm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,w,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),w=v.envMap,y=v.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Pm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Eb(n,e,t,i){let s={},r={};function a(v,w){const y=w.program;i.uniformBlockBinding(v,y,s[v.id])}function o(v,w){let y=s[v.id];y===void 0&&(g(v),y=l(v),s[v.id]=y,v.addEventListener("dispose",m));const R=w.program;i.updateUBOMapping(v,R);const T=e.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){const w=n.createBuffer(),y=v.__size,R=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,y,R),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function c(v){const w=s[v.id],y=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let T=0,x=y.length;T<x;T++){const b=y[T];if(Array.isArray(b))for(let S=0,M=b.length;S<M;S++)u(b[S],T,S,R);else u(b,T,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(v,w,y,R){if(d(v,w,y,R)===!0){const T=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let S=0;S<x.length;S++){const M=x[S],C=_(M,!0);h(M,v.__data,b),b+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,v.__data)}}function h(v,w,y){typeof v=="number"||typeof v=="boolean"?w[y]=v:v.isMatrix3?(w[y]=v.elements[0],w[y+1]=v.elements[1],w[y+2]=v.elements[2],w[y+3]=0,w[y+4]=v.elements[3],w[y+5]=v.elements[4],w[y+6]=v.elements[5],w[y+7]=0,w[y+8]=v.elements[6],w[y+9]=v.elements[7],w[y+10]=v.elements[8],w[y+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-y),y):v.toArray(w,y)}function d(v,w,y,R){const T=v.value,x=w+"_"+y;if(Array.isArray(T)){R[x]===void 0&&(R[x]=[]);const b=R[x];let S=!1;for(let M=0;M<T.length;M++)f(T[M],b,M)===!0&&(S=!0);return S}return f(T,R,x)}function f(v,w,y){if(w[y]===void 0)return typeof v=="number"||typeof v=="boolean"?w[y]=v:ArrayBuffer.isView(v)?w[y]=v.slice():w[y]=v.clone(),!0;{const R=w[y];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return w[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function g(v){const w=v.uniforms;let y=0;const R=16;for(let x=0,b=w.length;x<b;x++){const S=Array.isArray(w[x])?w[x]:[w[x]];for(let M=0,C=S.length;M<C;M++){const I=S[M],F=Array.isArray(I.value)?I.value:[I.value],P=Array.isArray(w[x])||Array.isArray(I.value);let O=y;for(let H=0,J=F.length;H<J;H++){const X=F[H],Q=_(X,P),te=y%R,Te=te%Q.boundary,Be=te+Te;y+=Te,Be!==0&&R-Be<Q.storage&&(y+=R-Be),H===0&&(O=y),y+=Q.storage}const V=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new V((y-O)/Float32Array.BYTES_PER_ELEMENT),I.__offset=O}}const T=y%R;return T>0&&(y+=R-T),v.__size=y,v.__cache={},this}function _(v,w){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){const w=v.target;w.removeEventListener("dispose",m),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:p}}const Tb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let si=null;function Ab(){return si===null&&(si=new $u(Tb,16,16,As,_i),si.name="DFG_LUT",si.minFilter=tn,si.magFilter=tn,si.wrapS=ci,si.wrapT=ci,si.generateMipmaps=!1,si.needsUpdate=!0),si}class Nm{constructor(e={}){const{canvas:t=Jg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=En}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=f,m=new Set([Bu,Ou,Fu]),p=new Set([En,gi,oa,ar,Nu,Du]),v=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let R=null,T=null;const x=[],b=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1,I=null,F=null,P=null,O=null;this._outputColorSpace=Qt;let V=0,H=0,J=null,X=-1,Q=null;const te=new ut,Te=new ut;let Be=null;const K=new Ee(0);let ge=0,ye=t.width,Le=t.height,_e=1,Ge=null,wt=null;const Pe=new ut(0,0,ye,Le),at=new ut(0,0,ye,Le);let ht=!1;const je=new da,Zt=new Yu;let Pt=!1,gn=!1;const yt=new ze,ni=new N,Gt=new ut,In={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pn=!1;function Nn(){return J===null?_e:1}let B=i;function Dn(A,U){return t.getContext(A,U)}let vt,Mt,fe,Nt,Ie,Ue,L,E,z,ne,j,ae,he,q,Y,le,D,Z,$,ce,se,oe,we;try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lu}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",pe,!1),B===null){const U="webgl2";if(B=Dn(U,A),B===null)throw Dn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(A){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),De("WebGLRenderer: "+A.message),A}function Xe(){vt=new Ly(B),vt.init(),se=new _b(B,vt),Mt=new vy(B,vt,e,se),fe=new mb(B,vt),Mt.reversedDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),F=B.createFramebuffer(),P=B.createFramebuffer(),O=B.createFramebuffer(),Nt=new Ny(B),Ie=new tb,Ue=new gb(B,vt,fe,Ie,Mt,se,Nt),L=new Cy(M),E=new Ux(B),oe=new _y(B,E),z=new Iy(B,E,Nt,oe),ne=new Uy(B,z,E,oe,Nt),Z=new Dy(B,Mt,Ue),Y=new My(Ie),j=new eb(M,L,vt,Mt,oe,Y),ae=new bb(M,Ie),he=new ib,q=new cb(vt),D=new gy(M,L,fe,ne,g,l),le=new pb(M,ne,Mt),we=new Eb(B,Nt,Mt,fe),$=new xy(B,vt,Nt),ce=new Py(B,vt,Nt),Nt.programs=j.programs,M.capabilities=Mt,M.extensions=vt,M.properties=Ie,M.renderLists=he,M.shadowMap=le,M.state=fe,M.info=Nt}_!==En&&(S=new Oy(_,t.width,t.height,o,s,r));const ie=new yb(M,B);this.xr=ie,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(A){A!==void 0&&(_e=A,this.setSize(ye,Le,!1))},this.getSize=function(A){return A.set(ye,Le)},this.setSize=function(A,U,W=!0){if(ie.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=A,Le=U,t.width=Math.floor(A*_e),t.height=Math.floor(U*_e),W===!0&&(t.style.width=A+"px",t.style.height=U+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(ye*_e,Le*_e).floor()},this.setDrawingBufferSize=function(A,U,W){ye=A,Le=U,_e=W,t.width=Math.floor(A*W),t.height=Math.floor(U*W),this.setViewport(0,0,A,U)},this.setEffects=function(A){if(_===En){De("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let U=0;U<A.length;U++)if(A[U].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(te)},this.getViewport=function(A){return A.copy(Pe)},this.setViewport=function(A,U,W,k){A.isVector4?Pe.set(A.x,A.y,A.z,A.w):Pe.set(A,U,W,k),fe.viewport(te.copy(Pe).multiplyScalar(Nn()).round())},this.getScissor=function(A){return A.copy(at)},this.setScissor=function(A,U,W,k){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,U,W,k),fe.scissor(Te.copy(at).multiplyScalar(Nn()).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(A){fe.setScissorTest(ht=A)},this.setOpaqueSort=function(A){Ge=A},this.setTransparentSort=function(A){wt=A},this.getClearColor=function(A){return A.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(A=!0,U=!0,W=!0){let k=0;if(A){let G=!1;if(J!==null){const de=J.texture.format;G=m.has(de)}if(G){const de=J.texture.type,Me=p.has(de),ue=D.getClearColor(),xe=D.getClearAlpha(),Ae=ue.r,ke=ue.g,Qe=ue.b;Me?(v[0]=Ae,v[1]=ke,v[2]=Qe,v[3]=xe,B.clearBufferuiv(B.COLOR,0,v)):(w[0]=Ae,w[1]=ke,w[2]=Qe,w[3]=xe,B.clearBufferiv(B.COLOR,0,w))}else k|=B.COLOR_BUFFER_BIT}U&&(k|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&B.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),I=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),D.dispose(),he.dispose(),q.dispose(),Ue.dispose(),Ie.dispose(),L.dispose(),ne.dispose(),z.dispose(),oe.dispose(),we.dispose(),j.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Wh),ie.removeEventListener("sessionend",Xh),cs.stop()};function Ce(A){A.preventDefault(),Go("WebGLRenderer: Context Lost."),C=!0}function We(){Go("WebGLRenderer: Context Restored."),C=!1;const A=Nt.autoReset,U=le.enabled,W=le.autoUpdate,k=le.needsUpdate,G=le.type;Xe(),Nt.autoReset=A,le.enabled=U,le.autoUpdate=W,le.needsUpdate=k,le.type=G}function pe(A){De("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const U=A.target;U.removeEventListener("dispose",ot),Ht(U)}function Ht(A){Oi(A),Ie.remove(A)}function Oi(A){const U=Ie.get(A).programs;U!==void 0&&(U.forEach(function(W){j.releaseProgram(W)}),A.isShaderMaterial&&j.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,W,k,G,de){U===null&&(U=In);const Me=G.isMesh&&G.matrixWorld.determinantAffine()<0,ue=cg(A,U,W,k,G);fe.setMaterial(k,Me);let xe=W.index,Ae=1;if(k.wireframe===!0){if(xe=z.getWireframeAttribute(W),xe===void 0)return;Ae=2}const ke=W.drawRange,Qe=W.attributes.position;let Se=ke.start*Ae,et=(ke.start+ke.count)*Ae;de!==null&&(Se=Math.max(Se,de.start*Ae),et=Math.min(et,(de.start+de.count)*Ae)),xe!==null?(Se=Math.max(Se,0),et=Math.min(et,xe.count)):Qe!=null&&(Se=Math.max(Se,0),et=Math.min(et,Qe.count));const Rt=et-Se;if(Rt<0||Rt===1/0)return;oe.setup(G,k,ue,W,xe);let mt,dt=$;if(xe!==null&&(mt=E.get(xe),dt=ce,dt.setIndex(mt)),G.isMesh)k.wireframe===!0?(fe.setLineWidth(k.wireframeLinewidth*Nn()),dt.setMode(B.LINES)):dt.setMode(B.TRIANGLES);else if(G.isLine){let rn=k.linewidth;rn===void 0&&(rn=1),fe.setLineWidth(rn*Nn()),G.isLineSegments?dt.setMode(B.LINES):G.isLineLoop?dt.setMode(B.LINE_LOOP):dt.setMode(B.LINE_STRIP)}else G.isPoints?dt.setMode(B.POINTS):G.isSprite&&dt.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const rn=G._multiDrawStarts,be=G._multiDrawCounts,hn=G._multiDrawCount,it=xe?E.get(xe).bytesPerElement:1,us=Ie.get(k).currentProgram.getUniforms();for(let an=0;an<hn;an++)us.setValue(B,"_gl_DrawID",an),dt.render(rn[an]/it,be[an])}else if(G.isInstancedMesh)dt.renderInstances(Se,Rt,G.count);else if(W.isInstancedBufferGeometry){const rn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,be=Math.min(W.instanceCount,rn);dt.renderInstances(Se,Rt,be)}else dt.render(Se,Rt)};function Vh(A,U,W,k){I!==null&&A.isNodeMaterial&&I.setObject(k,A),Pt===!0&&Y.setState(A,W,!1),A.transparent===!0&&A.side===un&&A.forceSinglePass===!1?(A.side=mn,A.needsUpdate=!0,Mr(A,U,k),A.side=ts,A.needsUpdate=!0,Mr(A,U,k),A.side=un):Mr(A,U,k)}this.compile=function(A,U,W=null){W===null&&(W=A),I!==null&&I.renderStart(A,U,W),T=q.get(W),T.init(U),b.push(T),W.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),A!==W&&A.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),gn=this.localClippingEnabled,Pt=Y.init(this.clippingPlanes,gn),Pt===!0&&Y.setGlobalState(this.clippingPlanes,U),I!==null&&le.render(T.state.shadowsArray,W,U);const k=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const de=G.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){const ue=de[Me];Vh(ue,W,U,G),k.add(ue)}else Vh(de,W,U,G),k.add(de)}),T=b.pop(),I!==null&&I.renderEnd(),k},this.compileAsync=function(A,U,W=null){const k=this.compile(A,U,W);return new Promise(G=>{function de(){if(k.forEach(function(Me){const xe=Ie.get(Me).currentProgram;(xe===void 0||xe.isReady())&&k.delete(Me)}),k.size===0){G(A);return}setTimeout(de,10)}vt.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Al=null;function og(A){Al&&Al(A)}function Wh(){cs.stop()}function Xh(){cs.start()}const cs=new Sm;cs.setAnimationLoop(og),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(A){Al=A,ie.setAnimationLoop(A),A===null?cs.stop():cs.start()},ie.addEventListener("sessionstart",Wh),ie.addEventListener("sessionend",Xh),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;I!==null&&I.renderStart(A,U);const W=ie.enabled===!0&&ie.isPresenting===!0,k=S!==null&&(J===null||W)&&S.begin(M,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(U),U=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,U,J),T=q.get(A,b.length),T.init(U),T.state.textureUnits=Ue.getTextureUnits(),b.push(T),yt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Zt.setFromArrayCamera(U):je.setFromProjectionMatrix(yt,Yn,U.reversedDepth),gn=this.localClippingEnabled,Pt=Y.init(this.clippingPlanes,gn),R=he.get(A,x.length),R.init(),x.push(R),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){const Me=M.xr.getDepthSensingMesh();Me!==null&&wl(Me,U,-1/0,M.sortObjects)}wl(A,U,0,M.sortObjects),R.finish(),I!==null&&I.updateLights(T.state.lightsArray),M.sortObjects===!0&&R.sort(Ge,wt),Pn=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Pn&&D.addToRenderList(R,A),this.info.autoReset===!0&&this.info.reset(),Pt===!0&&Y.beginShadows();const G=T.state.shadowsArray;if(le.render(G,A,U),Pt===!0&&Y.endShadows(),(k&&S.hasRenderPass())===!1){const Me=R.opaque,ue=R.transmissive;if(T.setupLights(),U.isArrayCamera){const xe=U.cameras;if(ue.length>0)for(let Ae=0,ke=xe.length;Ae<ke;Ae++){const Qe=xe[Ae];qh(Me,ue,A,Qe)}Pn&&D.render(A);for(let Ae=0,ke=xe.length;Ae<ke;Ae++){const Qe=xe[Ae];$h(R,A,Qe,Qe.viewport)}}else ue.length>0&&qh(Me,ue,A,U),Pn&&D.render(A),$h(R,A,U)}J!==null&&H===0&&(Ue.updateMultisampleRenderTarget(J),Ue.updateRenderTargetMipmap(J)),k&&S.end(M),A.isScene===!0&&A.onAfterRender(M,A,U),oe.resetDefaultState(),X=-1,Q=null,b.pop(),b.length>0?(T=b[b.length-1],Ue.setTextureUnits(T.state.textureUnits),Pt===!0&&Y.setGlobalState(M.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?R=x[x.length-1]:R=null,I!==null&&I.renderEnd()};function wl(A,U,W,k){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){const Me=U.isArrayCamera?Zt:je;if(!A.frustumCulled||A.intersectsFrustum(Me)){k&&Gt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(yt);const ue=ne.update(A),xe=A.material;xe.visible&&R.push(A,ue,xe,W,Gt.z,null,U)}}else if(A.isMesh||A.isLine||A.isPoints){const Me=U.isArrayCamera?Zt:je;if(!A.frustumCulled||A.intersectsFrustum(Me)){const ue=ne.update(A),xe=A.material;if(k&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Gt.copy(A.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Gt.copy(ue.boundingSphere.center)),Gt.applyMatrix4(A.matrixWorld).applyMatrix4(yt)),Array.isArray(xe)){const Ae=ue.groups;for(let ke=0,Qe=Ae.length;ke<Qe;ke++){const Se=Ae[ke],et=xe[Se.materialIndex];et&&et.visible&&R.push(A,ue,et,W,Gt.z,Se,U)}}else xe.visible&&R.push(A,ue,xe,W,Gt.z,null,U)}}}const de=A.children;for(let Me=0,ue=de.length;Me<ue;Me++)wl(de[Me],U,W,k)}function $h(A,U,W,k){const{opaque:G,transmissive:de,transparent:Me}=A;T.setupLightsView(W),Pt===!0&&Y.setGlobalState(M.clippingPlanes,W),k&&fe.viewport(te.copy(k)),G.length>0&&za(G,U,W),de.length>0&&za(de,U,W),Me.length>0&&za(Me,U,W),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function qh(A,U,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){const Se=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new fi(1,1,{generateMipmaps:!0,type:Se?_i:En,minFilter:ui,samples:Math.max(4,Mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const de=T.state.transmissionRenderTarget[k.id],Me=k.viewport||te;de.setSize(Me.z*M.transmissionResolutionScale,Me.w*M.transmissionResolutionScale);const ue=M.getRenderTarget(),xe=M.getActiveCubeFace(),Ae=M.getActiveMipmapLevel();M.setRenderTarget(de),M.getClearColor(K),ge=M.getClearAlpha(),ge<1&&M.setClearColor(16777215,.5),M.clear(),Pn&&D.render(W);const ke=M.toneMapping;M.toneMapping=Di;const Qe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),Pt===!0&&Y.setGlobalState(M.clippingPlanes,k),za(A,W,k),Ue.updateMultisampleRenderTarget(de),Ue.updateRenderTargetMipmap(de),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let et=0,Rt=U.length;et<Rt;et++){const mt=U[et],{object:dt,geometry:rn,material:be,group:hn}=mt;if(be.side===un&&dt.layers.test(k.layers)){const it=be.side;be.side=mn,be.needsUpdate=!0,Yh(dt,W,k,rn,be,hn),be.side=it,be.needsUpdate=!0,Se=!0}}Se===!0&&(Ue.updateMultisampleRenderTarget(de),Ue.updateRenderTargetMipmap(de))}M.setRenderTarget(ue,xe,Ae),M.setClearColor(K,ge),Qe!==void 0&&(k.viewport=Qe),M.toneMapping=ke}function za(A,U,W){const k=U.isScene===!0?U.overrideMaterial:null;for(let G=0,de=A.length;G<de;G++){const Me=A[G],{object:ue,geometry:xe,group:Ae}=Me;let ke=Me.material;ke.allowOverride===!0&&k!==null&&(ke=k),ue.layers.test(W.layers)&&Yh(ue,U,W,xe,ke,Ae)}}function Yh(A,U,W,k,G,de){I!==null&&G.isNodeMaterial&&I.setObject(A,G),A.onBeforeRender(M,U,W,k,G,de),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(M,U,W,k,A,de),G.transparent===!0&&G.side===un&&G.forceSinglePass===!1?(G.side=mn,G.needsUpdate=!0,M.renderBufferDirect(W,U,k,G,A,de),G.side=ts,G.needsUpdate=!0,M.renderBufferDirect(W,U,k,G,A,de),G.side=un):M.renderBufferDirect(W,U,k,G,A,de),A.onAfterRender(M,U,W,k,G,de)}function Kh(A){let U=0;for(const W of A)W.texture!==null&&U++;return U}function Mr(A,U,W){U.isScene!==!0&&(U=In);const k=Ie.get(A),G=T.state.lights,de=T.state.shadowsArray,Me=G.state.version,ue=j.getParameters(A,G.state,de,U,W,T.state.lightProbeGridArray),xe=j.getProgramCacheKey(ue);let Ae=k.programs;k.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;const ke=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;k.envMap=L.get(A.envMap||k.environment,ke),k.envMapRotation=k.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Ae===void 0&&(A.addEventListener("dispose",ot),Ae=new Map,k.programs=Ae,k.programVariants=new Map);let Qe=Ae.get(xe);if(Qe!==void 0){if(k.currentProgram===Qe&&k.lightsStateVersion===Me)return Jh(A,ue),Qe}else ue.uniforms=j.getUniforms(A),I!==null&&A.isNodeMaterial&&I.build(A,W,ue),A.onBeforeCompile(ue,M),Qe=j.acquireProgram(ue,xe),Ae.set(xe,Qe),k.uniforms=ue.uniforms;const Se=k.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Se.clippingPlanes=Y.uniform),Jh(A,ue),k.needsLights=hg(A),k.lightsStateVersion=Me,k.needsLights&&(Se.ambientLightColor.value=G.state.ambient,Se.lightProbe.value=G.state.probe,Se.sunLights.value=G.state.sun,Se.sunLightShadows.value=G.state.sunShadow,Se.directionalLights.value=G.state.directional,Se.directionalLightShadows.value=G.state.directionalShadow,Se.spotLights.value=G.state.spot,Se.spotLightShadows.value=G.state.spotShadow,Se.rectAreaLights.value=G.state.rectArea,Se.ltc_1.value=G.state.rectAreaLTC1,Se.ltc_2.value=G.state.rectAreaLTC2,Se.pointLights.value=G.state.point,Se.pointLightShadows.value=G.state.pointShadow,Se.hemisphereLights.value=G.state.hemi,Se.sunShadowMatrix.value=G.state.sunShadowMatrix,Se.sunShadowCascade.value=G.state.sunShadowCascade,Se.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Se.spotLightMatrix.value=G.state.spotLightMatrix,Se.spotLightMap.value=G.state.spotLightMap,Se.pointShadowMatrix.value=G.state.pointShadowMatrix),k.numLightProbeGrids=Kh(T.state.lightProbeGridArray),k.currentProgram=Qe,k.uniformsList=null,Qe}function lg(A,U,W,k,G){const de=Ie.get(A),Me=de.currentProgram.id+","+k+","+G;let ue=de.programVariants.get(Me);return ue===void 0?(ue=Mr(A,U,W),de.programVariants.set(Me,ue)):(de.currentProgram=ue,de.uniformsList=null,de.outputColorSpace=k,de.toneMapping=G),ue}function Zh(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=Lo.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Jh(A,U){const W=Ie.get(A);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function cg(A,U,W,k,G){U.isScene!==!0&&(U=In),Ue.resetTextureUnits();const de=U.fog,Me=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,ue=J===null?M.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ze.workingColorSpace,xe=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ae=L.get(k.envMap||Me,xe),ke=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Qe=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Se=!!W.morphAttributes.position,et=!!W.morphAttributes.normal,Rt=!!W.morphAttributes.color;let mt=Di;k.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(mt=M.toneMapping);const dt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,rn=dt!==void 0?dt.length:0,be=Ie.get(k),hn=T.state.lights;if(Pt===!0&&(gn===!0||A!==Q)){const St=A===Q&&k.id===X;Y.setState(k,A,St)}let it=!1,us=!1;k.version===be.__version?be.needsLights&&be.lightsStateVersion!==hn.state.version||G.isBatchedMesh&&be.batching===!1||!G.isBatchedMesh&&be.batching===!0||G.isBatchedMesh&&be.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&be.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&be.instancing===!1||!G.isInstancedMesh&&be.instancing===!0||G.isSkinnedMesh&&be.skinning===!1||!G.isSkinnedMesh&&be.skinning===!0||G.isInstancedMesh&&be.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&be.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&be.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&be.instancingMorph===!1&&G.morphTexture!==null||be.envMap!==Ae||k.fog===!0&&be.fog!==de||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Y.numPlanes||be.numIntersection!==Y.numIntersection)||be.vertexAlphas!==ke||be.vertexTangents!==Qe||be.morphTargets!==Se||be.morphNormals!==et||be.morphColors!==Rt||be.morphTargetsCount!==rn||be.numLightProbeGrids!==Kh(T.state.lightProbeGridArray)?it=!0:(be.outputColorSpace!==ue||be.toneMapping!==mt)&&(us=!0):(it=!0,be.__version=k.version);let an=be.currentProgram;(it===!0||us===!0)&&(an=us===!0?lg(k,U,G,ue,mt):Mr(k,U,G),I&&k.isNodeMaterial&&I.onUpdateProgram(k,an,be));let Ga=!1,Bi=!1,hs=!1;const tt=an.getUniforms(),Jt=be.uniforms;if(fe.useProgram(an.program)&&(Ga=!0,Bi=!0,hs=!0),k.id!==X&&(X=k.id,Bi=!0),Ga||Q!==A){fe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),tt.setValue(B,"projectionMatrix",A.projectionMatrix),tt.setValue(B,"viewMatrix",A.matrixWorldInverse);const Vt=tt.map.cameraPosition;Vt!==void 0&&Vt.setValue(B,ni.setFromMatrixPosition(A.matrixWorld)),Mt.logarithmicDepthBuffer&&tt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&tt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),Q!==A&&(Q=A,Bi=!0,hs=!0)}if(be.needsLights&&(hn.state.sunShadowMap.length>0&&tt.setValue(B,"sunShadowMap",hn.state.sunShadowMap,Ue),hn.state.directionalShadowMap.length>0&&tt.setValue(B,"directionalShadowMap",hn.state.directionalShadowMap,Ue),hn.state.spotShadowMap.length>0&&tt.setValue(B,"spotShadowMap",hn.state.spotShadowMap,Ue),hn.state.pointShadowMap.length>0&&tt.setValue(B,"pointShadowMap",hn.state.pointShadowMap,Ue)),G.isSkinnedMesh){tt.setOptional(B,G,"bindMatrix"),tt.setOptional(B,G,"bindMatrixInverse");const St=G.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),tt.setValue(B,"boneTexture",St.boneTexture,Ue))}G.isBatchedMesh&&(tt.setOptional(B,G,"batchingTexture"),tt.setValue(B,"batchingTexture",G._matricesTexture,Ue),tt.setOptional(B,G,"batchingIdTexture"),tt.setValue(B,"batchingIdTexture",G._indirectTexture,Ue),tt.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&tt.setValue(B,"batchingColorTexture",G._colorsTexture,Ue));const Gn=W.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&Z.update(G,W,an),(Bi||be.receiveShadow!==G.receiveShadow)&&(be.receiveShadow=G.receiveShadow,tt.setValue(B,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(Jt.envMapIntensity.value=U.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=Ab()),Bi){if(tt.setValue(B,"toneMappingExposure",M.toneMappingExposure),be.needsLights&&ug(Jt,hs),de&&k.fog===!0&&ae.refreshFogUniforms(Jt,de),ae.refreshMaterialUniforms(Jt,k,_e,Le,T.state.transmissionRenderTarget[A.id]),be.needsLights&&be.numLightProbeGrids>0){const St=y;let Vt=0;for(const Ei of T.state.lightProbeGridArray)Ei.texture!==null&&(St.textures[Vt]=Ei.texture,St.min[Vt]=Ei.boundingBox.min,St.max[Vt]=Ei.boundingBox.max,St.resolution[Vt]=Ei.resolution,Vt++);for(const Ei in St)St[Ei].length=Vt;Jt.probesSH.value=St.textures,Jt.probesMin.value=St.min,Jt.probesMax.value=St.max,Jt.probesResolution.value=St.resolution}Lo.upload(B,Zh(be),Jt,Ue)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Lo.upload(B,Zh(be),Jt,Ue),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&tt.setValue(B,"center",G.center),tt.setValue(B,"modelViewMatrix",G.modelViewMatrix),tt.setValue(B,"normalMatrix",G.normalMatrix),tt.setValue(B,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){const St=k.uniformsGroups;for(let Vt=0,Ei=St.length;Vt<Ei;Vt++){const Qh=St[Vt];we.update(Qh,an),we.bind(Qh,an)}}return an}function ug(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.sunLights.needsUpdate=U,A.sunLightShadows.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function hg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,U,W){const k=Ie.get(A);k.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ie.get(A.texture).__webglTexture=U,Ie.get(A.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,U){const W=Ie.get(A);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,W=0){J=A,V=U,H=W;let k=null,G=!1,de=!1;if(A){const ue=Ie.get(A);if(ue.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(B.FRAMEBUFFER,ue.__webglFramebuffer),te.copy(A.viewport),Te.copy(A.scissor),Be=A.scissorTest,fe.viewport(te),fe.scissor(Te),fe.setScissorTest(Be),X=-1;return}else if(ue.__webglFramebuffer===void 0)Ue.setupRenderTarget(A);else if(ue.__hasExternalTextures)Ue.rebindTextures(A,Ie.get(A.texture).__webglTexture,Ie.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ke=A.depthTexture;if(ue.__boundDepthTexture!==ke){if(ke!==null&&Ie.has(ke)&&(A.width!==ke.image.width||A.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(A)}}const xe=A.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(de=!0);const Ae=Ie.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?k=Ae[U][W]:k=Ae[U],G=!0):A.samples>0&&Ue.useMultisampledRTT(A)===!1?k=Ie.get(A).__webglMultisampledFramebuffer:Array.isArray(Ae)?k=Ae[W]:k=Ae,te.copy(A.viewport),Te.copy(A.scissor),Be=A.scissorTest}else te.copy(Pe).multiplyScalar(_e).floor(),Te.copy(at).multiplyScalar(_e).floor(),Be=ht;if(W!==0&&(k=F),fe.bindFramebuffer(B.FRAMEBUFFER,k)&&fe.drawBuffers(A,k),fe.viewport(te),fe.scissor(Te),fe.setScissorTest(Be),G){const ue=Ie.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,ue.__webglTexture,W)}else if(de){const ue=U;for(let xe=0;xe<A.textures.length;xe++){const Ae=Ie.get(A.textures[xe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+xe,Ae.__webglTexture,W,ue)}}else if(A!==null&&W!==0){const ue=Ie.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ue.__webglTexture,W)}X=-1};function jh(A){const U=Ie.get(A);return(U.__readFormat!==A.format||U.__readType!==A.type)&&(U.__readFormat=A.format,U.__readType=A.type,U.__formatReadable=Mt.textureFormatReadable(A.format),U.__typeReadable=Mt.textureTypeReadable(A.type)),U}this.readRenderTargetPixels=function(A,U,W,k,G,de,Me,ue=0){if(!(A&&A.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(xe=xe[Me],Array.isArray(xe)&&(xe=xe[0])),xe){fe.bindFramebuffer(B.FRAMEBUFFER,xe);try{const Ae=A.textures[ue],ke=Ae.format,Qe=Ae.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ue);const Se=jh(Ae);if(Se.__formatReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-k&&W>=0&&W<=A.height-G&&B.readPixels(U,W,k,G,se.convert(ke),se.convert(Qe),de)}finally{const Ae=J!==null?Ie.get(J).__webglFramebuffer:null;fe.bindFramebuffer(B.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(A,U,W,k,G,de,Me,ue=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(xe=xe[Me],Array.isArray(xe)&&(xe=xe[0])),xe)if(U>=0&&U<=A.width-k&&W>=0&&W<=A.height-G){fe.bindFramebuffer(B.FRAMEBUFFER,xe);const Ae=A.textures[ue],ke=Ae.format,Qe=Ae.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ue);const Se=jh(Ae);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,et),B.bufferData(B.PIXEL_PACK_BUFFER,de.byteLength,B.STREAM_READ),B.readPixels(U,W,k,G,se.convert(ke),se.convert(Qe),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Rt=J!==null?Ie.get(J).__webglFramebuffer:null;fe.bindFramebuffer(B.FRAMEBUFFER,Rt);const mt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await jg(B,mt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,et),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,de),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(et),B.deleteSync(mt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,U=null,W=0){const k=Math.pow(2,-W),G=Math.floor(A.image.width*k),de=Math.floor(A.image.height*k),Me=U!==null?U.x:0,ue=U!==null?U.y:0;Ue.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,W,0,0,Me,ue,G,de),fe.unbindTexture()},this.copyTextureToTexture=function(A,U,W=null,k=null,G=0,de=0){let Me,ue,xe,Ae,ke,Qe,Se,et,Rt;const mt=A.isCompressedTexture?A.mipmaps[de]:A.image;if(W!==null)Me=W.max.x-W.min.x,ue=W.max.y-W.min.y,xe=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,ke=W.min.y,Qe=W.isBox3?W.min.z:0;else{const tt=Math.pow(2,-G);Me=Math.floor(mt.width*tt),ue=Math.floor(mt.height*tt),A.isDataArrayTexture?xe=mt.depth:A.isData3DTexture?xe=Math.floor(mt.depth*tt):xe=1,Ae=0,ke=0,Qe=0}k!==null?(Se=k.x,et=k.y,Rt=k.z):(Se=0,et=0,Rt=0);const dt=se.convert(U.format),rn=se.convert(U.type);let be;U.isData3DTexture?(Ue.setTexture3D(U,0),be=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ue.setTexture2DArray(U,0),be=B.TEXTURE_2D_ARRAY):(Ue.setTexture2D(U,0),be=B.TEXTURE_2D),fe.activeTexture(B.TEXTURE0),fe.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),fe.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),fe.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);const hn=fe.getParameter(B.UNPACK_ROW_LENGTH),it=fe.getParameter(B.UNPACK_IMAGE_HEIGHT),us=fe.getParameter(B.UNPACK_SKIP_PIXELS),an=fe.getParameter(B.UNPACK_SKIP_ROWS),Ga=fe.getParameter(B.UNPACK_SKIP_IMAGES);fe.pixelStorei(B.UNPACK_ROW_LENGTH,mt.width),fe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,mt.height),fe.pixelStorei(B.UNPACK_SKIP_PIXELS,Ae),fe.pixelStorei(B.UNPACK_SKIP_ROWS,ke),fe.pixelStorei(B.UNPACK_SKIP_IMAGES,Qe);const Bi=A.isDataArrayTexture||A.isData3DTexture,hs=U.isDataArrayTexture||U.isData3DTexture;if(A.isDepthTexture){const tt=Ie.get(A),Jt=Ie.get(U),Gn=Ie.get(tt.__renderTarget),St=Ie.get(Jt.__renderTarget);fe.bindFramebuffer(B.READ_FRAMEBUFFER,Gn.__webglFramebuffer),fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Vt=0;Vt<xe;Vt++)Bi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ie.get(A).__webglTexture,G,Qe+Vt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ie.get(U).__webglTexture,de,Rt+Vt)),B.blitFramebuffer(Ae,ke,Ae+Me,ke+ue,Se,et,Se+Me,et+ue,B.DEPTH_BUFFER_BIT,B.NEAREST);fe.bindFramebuffer(B.READ_FRAMEBUFFER,null),fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||Ie.has(A)){const tt=Ie.get(A),Jt=Ie.get(U);fe.bindFramebuffer(B.READ_FRAMEBUFFER,P),fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,O);for(let Gn=0;Gn<xe;Gn++)Bi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,tt.__webglTexture,G,Qe+Gn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,tt.__webglTexture,G),hs?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Jt.__webglTexture,de,Rt+Gn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Jt.__webglTexture,de),G!==0?B.blitFramebuffer(Ae,ke,Ae+Me,ke+ue,Se,et,Se+Me,et+ue,B.COLOR_BUFFER_BIT,B.NEAREST):hs?B.copyTexSubImage3D(be,de,Se,et,Rt+Gn,Ae,ke,Me,ue):B.copyTexSubImage2D(be,de,Se,et,Ae,ke,Me,ue);fe.bindFramebuffer(B.READ_FRAMEBUFFER,null),fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else hs?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(be,de,Se,et,Rt,Me,ue,xe,dt,rn,mt.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(be,de,Se,et,Rt,Me,ue,xe,dt,mt.data):B.texSubImage3D(be,de,Se,et,Rt,Me,ue,xe,dt,rn,mt):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,de,Se,et,Me,ue,dt,rn,mt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,de,Se,et,mt.width,mt.height,dt,mt.data):B.texSubImage2D(B.TEXTURE_2D,de,Se,et,Me,ue,dt,rn,mt);fe.pixelStorei(B.UNPACK_ROW_LENGTH,hn),fe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,it),fe.pixelStorei(B.UNPACK_SKIP_PIXELS,us),fe.pixelStorei(B.UNPACK_SKIP_ROWS,an),fe.pixelStorei(B.UNPACK_SKIP_IMAGES,Ga),de===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&B.generateMipmap(be),fe.unbindTexture()},this.initRenderTarget=function(A){Ie.get(A).__webglFramebuffer===void 0&&Ue.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ue.setTextureCube(A,0):A.isData3DTexture?Ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ue.setTexture2DArray(A,0):Ue.setTexture2D(A,0),fe.unbindTexture()},this.resetState=function(){V=0,H=0,J=null,fe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const gs={name:"ルミ",hairColor:"#e5639a",hairStyle:"bob",eyeColor:"#4455cc",outfitColor:"#7a6ff0",outfitPattern:"plain",ear:"cat",weapon:"blaster",back:"wing",personality:"cheerful"},wb=["bob","twin","long","ponytail","braid","short"],Rb=["none","cat","antenna","rabbit","headgear"],Cb=["blade","blaster","wand","hammer","dagger","missile"],Lb=["none","wing","pack","jet","ribbon"],Ib=["plain","stripe","dot","check"];function rh(n){const e={...gs,...n??{}};return wb.includes(e.hairStyle)||(e.hairStyle=gs.hairStyle),Rb.includes(e.ear)||(e.ear=gs.ear),Cb.includes(e.weapon)||(e.weapon=gs.weapon),Lb.includes(e.back)||(e.back=gs.back),Ib.includes(e.outfitPattern)||(e.outfitPattern="plain"),Yo.includes(e.personality)||(e.personality=gs.personality),e.name||(e.name=gs.name),e}const st={blade:{id:"blade",label:"ブレード",kind:"melee",range:70,aim:.03,speed:1,move:1,volley:1,volleyIntervalMs:0,projectileSpeed:0,profile:"命中・連射・機動のバランス型"},blaster:{id:"blaster",label:"ブラスター",kind:"ranged",range:999,aim:-.03,speed:.95,move:1.02,volley:3,volleyIntervalMs:80,projectileSpeed:150,profile:"3連射のバースト。狙いは甘め"},wand:{id:"wand",label:"ステッキ",kind:"ranged",range:999,aim:.08,speed:1.25,move:.96,volley:4,volleyIntervalMs:70,projectileSpeed:170,profile:"精密な4連射。判断の間隔と機動は鈍い"},hammer:{id:"hammer",label:"ハンマー",kind:"melee",range:64,aim:.12,speed:1.35,move:.9,volley:1,volleyIntervalMs:0,projectileSpeed:0,profile:"最も避けにくい一撃。溜め・連射・機動すべて重い"},dagger:{id:"dagger",label:"デュアルダガー",kind:"melee",range:62,aim:-.08,speed:.6,move:1.08,volley:1,volleyIntervalMs:0,projectileSpeed:0,profile:"最速の連打と機動。一撃は見切られやすい"},missile:{id:"missile",label:"ミサイルランチャー",kind:"ranged",range:999,aim:.05,speed:1.4,move:.94,volley:4,volleyIntervalMs:0,projectileSpeed:38,profile:"ロックオンして誘導弾4発を一斉発射。横へ大きく振られると外れる"}},Pb={dagger:180,blade:240,wand:240,blaster:280,hammer:380,missile:380},Nb={dagger:144,blade:228,wand:238,blaster:248,hammer:418,missile:400},Db=440;function Ub(n){return Math.round(Db*st[n].speed)}const ah=90;function ma(n){return n==="ranged"?14:1.1}const oh=.6,lh=1.2,An=100,Kr={x:55,z:0},Fb=32,Ob=1700263,mf=12,gf=6,Bb=6,_f=10;function kb(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function zb(){const n=kb(Ob),e=[],t=[{x:-55,z:Kr.z},{x:Kr.x,z:-0}],i=a=>{const o=Math.hypot(a.x,a.z);if(o-a.r<mf||o+a.r>An-gf||Math.abs(a.z)<a.r+1.5&&Math.abs(a.x)<Kr.x+_f)return!1;for(const l of t)if(Math.hypot(a.x-l.x,a.z-l.z)-a.r<_f)return!1;for(const l of e)if(Math.hypot(a.x-l.x,a.z-l.z)-a.r-l.r<Bb)return!1;return!0},s=mf+1.5,r=An-gf-1.5;for(let a=0;a<2e4&&e.length<Fb*2;a++){const o=n()*Math.PI*2,l=Math.sqrt(s*s+n()*(r*r-s*s)),c=Math.round((1.5+n()*2)*20)/20,u=Math.round((10+n()*20)*2)/2,h={x:Math.cos(o)*l,z:Math.sin(o)*l,r:c,h:u};if(!i(h))continue;e.push(h);const d={...h,x:-h.x,z:-h.z};if(!i(d)){e.pop();continue}e.push(d)}return e}const Jn=zb();function Dm(n,e,t,i=Jn){for(const s of i){const r=s.r+t;let a=n-s.x,o=e-s.z;const l=Math.hypot(a,o);if(!(l>=r)){if(l<1e-6){const c=Math.hypot(s.x,s.z);a=c>1e-6?s.x/c:1,o=c>1e-6?s.z/c:0}else a/=l,o/=l;n=s.x+a*r,e=s.z+o*r}}return{x:n,z:e}}function Gb(n,e,t,i,s,r=Jn){const a=t-n,o=i-e,l=a*a+o*o;let c=null,u=1/0;for(const h of r){const d=l>0?Math.min(1,Math.max(0,((h.x-n)*a+(h.z-e)*o)/l)):0;Math.hypot(n+a*d-h.x,e+o*d-h.z)<h.r+s&&d<u&&(c=h,u=d)}return c}function hl(n,e,t,i,s,r,a,o=Jn){const l=i-n,c=s-e,u=r-t,h=l*l+u*u;let d=null,f=1/0;for(const g of o){const _=g.r+a,m=n-g.x,p=t-g.z,v=m*m+p*p-_*_;let w,y;if(h<1e-12){if(v>=0)continue;w=0,y=1}else{const T=2*(m*l+p*u),x=T*T-4*h*v;if(x<=0)continue;const b=Math.sqrt(x);if(w=Math.max(0,(-T-b)/(2*h)),y=Math.min(1,(-T+b)/(2*h)),w>y)continue}Math.min(e+c*w,e+c*y)<g.h&&w<f&&(d=g,f=w)}return d}const Hb=30,Vb=10,Wb=6,Um=2,Fm=5,Xb=1.5,$b=3;function qb(n,e,t){const i=n>Hb?Vb:Math.max(0,e);return t?Math.max(i,Wb):i}const dl=14,Om=26,Yb=1.4,Kb=9,Zb=-20,Jb=3,Bm=-3,km=26,zm=90;function jb(n,e){return Math.min(Kb,Math.max(Zb,(e-n)*Yb))}function Gm(n,e,t){const i=jb(n,t);return n<=0&&i<=0&&e<=0?0:Math.min(Om,Math.max(0,dl+(i-e)*Jb))}function Qb(n,e,t,i){const s=Math.max(0,i),r=e+(Gm(n,e,t)-dl)*s,a=n+r*s;return a<=0?[0,Math.max(0,r)]:[a,r]}function eE(n,e,t){return n>0&&t<=0&&e<Bm}function xf(n,e,t,i,s,r){const a=t-n,o=i-e,l=Math.hypot(a,o),c=Math.max(0,s)*Math.max(0,r);return l<=c?[t,i]:[n+a/l*c,e+o/l*c]}function rc(n){return n>Um?zm:km}function tE(n,e){return n>0&&e>0?n*n/(2*e):0}function nE(n,e,t){return tE(Math.max(0,n)+Math.max(0,e),t)}const iE=32,sE=8;function cu(){return iE/Fm}function qo(n){return n>=Xb}function vf(n){return n>Um?Fm:1}const ch=1.7,rE=10,aE=900,oE=30,lE=18,Mf=.4,cE=36,uE=1100,hE=-30,dE=-13,fE=-20,pE=1.5,Cn=(n,e)=>({x:n.x-e.x,y:n.y-e.y,z:n.z-e.z}),Kn=(n,e)=>n.x*e.x+n.y*e.y+n.z*e.z,ur=n=>Math.hypot(n.x,n.y,n.z);function mE(n,e,t,i,s){return n<ch&&e>=rE&&t&&i-s>=aE}function gE(n){return n>=oE}function _E(n,e,t,i){const s=Cn(n,t),r=Cn(Cn(e,i),s),a=Kn(r,r),o=a<1e-12?1:Math.min(1,Math.max(0,-Kn(s,r)/a));return{dist:ur({x:s.x+r.x*o,y:s.y+r.y*o,z:s.z+r.z*o}),t:o,closing:Kn(s,r)<0}}function xE(n,e,t,i,s){const r=Cn(n,t),a=Cn(Cn(e,i),r),o=Kn(r,r)-s*s;if(o<=0)return 0;const l=Kn(a,a),c=Kn(r,a),u=c*c-l*o;if(l<1e-12||u<0)return null;const h=(-c-Math.sqrt(u))/l;return h>=0&&h<=1?h:null}function vE(n,e,t,i){let s=Cn(n,t),r=ur(s);r<1e-6&&(s=Cn(i,e),r=ur(s),r<1e-6&&(s={x:1,y:0,z:0},r=1)),s={x:s.x/r,y:s.y/r,z:s.z/r};const a=Kn(Cn(e,i),s),o=a<0?-1.55*a/2:0,l={x:(n.x+t.x)/2,y:(n.y+t.y)/2,z:(n.z+t.z)/2},c=ch/2;return{pa:{x:l.x+s.x*c,y:l.y+s.y*c,z:l.z+s.z*c},va:{x:e.x+s.x*o,y:e.y+s.y*o,z:e.z+s.z*o},pb:{x:l.x-s.x*c,y:l.y-s.y*c,z:l.z-s.z*c},vb:{x:i.x-s.x*o,y:i.y-s.y*o,z:i.z-s.z*o}}}function ME(n,e,t,i){const s=Math.hypot(t,i);if(s<1e-9)return null;const r=t/s,a=i/s,o=n*r+e*a,l=-o;return l<=lE?null:{speed:l,destroys:l>=cE,vx:(n-2*o*r)*Mf,vz:(e-2*o*a)*Mf}}function yE(n){return n<=fE?"destroyed":n<=dE?"crash":null}function SE(n,e,t){const i=Math.max(0,t),s=Math.max(hE,e-dl*i),r=n+s*i;return r<=0?{alt:0,vy:0,landedVy:n>0?s:null}:{alt:r,vy:s,landedVy:null}}function bE(n,e){return n&&e?"draw":e?"win":n?"lose":null}function EE(n){return n>=pE}function TE(n,e,t,i){return n<=e&&Math.abs(t-i)<=$b}const AE=14,wE=.9;function yf(n,e=Jn){let t=An-Math.hypot(n.x,n.z);for(const i of e)t=Math.min(t,Math.hypot(n.x-i.x,n.z-i.z)-i.r);return t}function RE(n,e=Jn){const t=Math.hypot(n.x,n.z);let i=An-t,s=t>1e-6?{x:n.x/t*An,z:n.z/t*An}:{x:An,z:0};for(const r of e){const a=Math.hypot(n.x-r.x,n.z-r.z)-r.r;a<i&&(i=a,s={x:r.x,z:r.z})}return s}function CE(n,e,t,i=Jn){let s=Gb(n.x,n.z,e.x,e.z,0,i);if(!s){let d=1/0;for(const f of i){const g=Math.hypot(n.x-f.x,n.z-f.z)-f.r;g<d&&(d=g,s=f)}d>AE&&(s=null)}if(!s)return null;let r=s.x-e.x,a=s.z-e.z,o=Math.hypot(r,a);o<1e-6&&(r=n.x-s.x,a=n.z-s.z,o=Math.hypot(r,a),o<1e-6&&(r=1,a=0,o=1));let l=s.x+r/o*(s.r+t),c=s.z+a/o*(s.r+t);const u=An-1,h=Math.hypot(l,c);return h>u&&(l*=u/h,c*=u/h),Dm(l,c,t,i)}function Hm(n,e,t=Jn){const i=RE(n,t);let s=n.x-i.x,r=n.z-i.z,a=Math.hypot(s,r);if(a<1e-6){const o=Math.hypot(n.x,n.z);s=o>1e-6?-n.x:1,r=o>1e-6?-n.z:0,a=o>1e-6?o:1}return{x:n.x+s/a*e,z:n.z+r/a*e}}function Sf(n){return Pb[n]}function LE(n){return Nb[n]}const IE=.7,PE={evade:.25,guard:.2,jump:.15},NE=.05,DE=.9;function Vm(n,e=1){const t=Math.min(1,Math.max(0,e));return{move:1,dodge:Wm[n]*t*IE,aim:0}}function UE(n,e,t,i){const s=n.dodge+(e?PE[e]:0)-t.aim-st[i].aim;return Math.min(DE,Math.max(NE,s))}function FE(n,e){return e<n?"dodged":"destroyed"}const jn={aggressive:{id:"aggressive",label:"好戦的",description:"ぐいぐい前に出て攻める。反応はやや粗い。",weights:{approach:34,shoot:30,evade:8,guard:6,retreat:2,strafe:14,jump:22}},cautious:{id:"cautious",label:"慎重",description:"距離を見て、守りと引き際を大事にする。反応は鋭い。",weights:{approach:12,shoot:24,evade:16,guard:22,retreat:14,strafe:16,jump:6}},calm:{id:"calm",label:"冷静",description:"どの行動も均等に選び、状況補正がそのまま効く。反応はいちばん確か。",weights:{approach:20,shoot:22,evade:14,guard:16,retreat:8,strafe:16,jump:12}},cheerful:{id:"cheerful",label:"元気",description:"よく動き、よく撃つ。回避も多め。反応はふつう。",weights:{approach:24,shoot:26,evade:20,guard:6,retreat:4,strafe:20,jump:18}},free:{id:"free",label:"自由奔放",description:"ウェイトの偏りが小さく、その場の気分(乱数)で大きく揺れる。反応はムラが大きい。",weights:{approach:18,shoot:18,evade:16,guard:14,retreat:14,strafe:20,jump:16}},shy:{id:"shy",label:"臆病",description:"距離を取りたがり、詰められると露骨に下がる。反応は遅れがち。",weights:{approach:8,shoot:20,evade:18,guard:18,retreat:22,strafe:12,jump:5}}},Yo=Object.keys(jn);function OE(n){return Math.floor(Math.max(0,n)/50)+1}const ac=480*60*1e3;function BE(n){const e=Math.min(Math.max(0,n),ac),t=Math.floor(e/6e4);return t<5?{coins:0,minutes:t,capped:n>ac}:{coins:t*2,minutes:t,capped:n>ac}}function kE(n){const e=n.foe;return e?e.windingUp&&e.windupKind==="melee"?"windup_melee":e.windingUp&&e.windupKind==="ranged"?"windup_ranged":e.airborne?"airborne":e.dashingToward?"dash_in":e.guarding?"foe_guard":e.tumbling?"foe_tumbling":null:null}const Wm={calm:.85,cautious:.8,cheerful:.7,aggressive:.65,shy:.6,free:.5};function zE(n){return Math.min(1,Math.max(0,.45+n*.11))}function GE(n){const e=Math.min(1,Math.max(0,n.skillScale??1));return Wm[n.personality]*e}const HE={windup_melee:{aggressive:{shoot:1.6,jump:1.5},cautious:{guard:2,evade:1.6},calm:{strafe:1.7,evade:1.3},cheerful:{evade:1.9},free:{jump:1.5},shy:{guard:1.7,retreat:1.8}},windup_ranged:{aggressive:{approach:1.6},cautious:{guard:1.9},calm:{evade:1.7},cheerful:{evade:2,strafe:1.4},free:{evade:1.3,jump:1.3},shy:{guard:1.7}},airborne:{aggressive:{shoot:1.6},cautious:{evade:1.8},calm:{shoot:1.4,evade:1.4},cheerful:{evade:1.8},free:{jump:1.5},shy:{retreat:1.8}},dash_in:{aggressive:{jump:1.6},cautious:{guard:2,evade:1.6},calm:{strafe:1.7},cheerful:{evade:1.8,strafe:1.4},free:{jump:1.3},shy:{retreat:2,guard:1.6}},foe_guard:{aggressive:{shoot:1.3},cautious:{strafe:1.7},calm:{strafe:1.5},cheerful:{strafe:1.6},free:{jump:1.4},shy:{shoot:1.2}},foe_tumbling:{aggressive:{approach:1.5,jump:1.4},cautious:{shoot:1.4},calm:{shoot:1.3},cheerful:{approach:1.4},free:{jump:1.4},shy:{shoot:1.5}}},VE={windup_melee:{guard:"斬りかかる気配。まず受け止める",strafe:"大振りの予備動作をいなして横へ",evade:"振りかぶった隙に身をかわす",shoot:"振りかぶった隙に先に打ち込む",jump:"斬撃を跳んでかわし、上から狙う",retreat:"斬撃の届かない所まで下がる"},windup_ranged:{evade:"チャージが見えた。撃たれる前に動く",guard:"チャージが見えた。正面で受け止める",approach:"撃たれる前に懐へ飛び込む",strafe:"射線から横へ外れる"},airborne:{shoot:"跳んだところを撃ち落とす",evade:"落ちてくる一撃をかわす",jump:"空中戦で迎え撃つ",retreat:"着地点から離れる"},dash_in:{jump:"詰めてきたところへ跳んで迎え撃つ",guard:"突っ込んできたら、まず受け止める",strafe:"詰めてきた相手をいなして、横から背後を狙う",evade:"突進を横っ跳びでかわす",retreat:"詰められた分だけ下がって間合いを戻す"},foe_guard:{strafe:"守りの正面を避けて角度を変える",shoot:"守りの上から削る",jump:"守りを跳び越えて上から狙う"},foe_tumbling:{shoot:"体勢を崩した。かわせないうちに撃ち込む",approach:"体勢を崩した。一気に決めにいく",jump:"体勢を崩した。跳び込んで決める"}},WE={windup_melee:"斬りかかる気配を読んで動く",windup_ranged:"射撃のチャージを読んで動く",airborne:"跳んできた相手を見て動く",dash_in:"詰めてきた相手を見て動く",foe_guard:"守りを固めた相手を見て動く",foe_tumbling:"体勢を崩した相手を見て攻め方を変える"};function uh(n,e){var t;return((t=VE[n])==null?void 0:t[e])??WE[n]}function Xm(n,e){const i={...jn[n.personality].weights},s=[`性格「${jn[n.personality].label}」の基本傾向`],r=st[n.weapon].kind,a=r==="melee",o=t0(n.weapon,n.rangeBand,n.engageRange);if(o){const u=n.distance/ah,h=_h(n.engageRange)?`攻撃の間合い(${_l(n.weapon,n.engageRange).toFixed(1)}m)`:`基本間合い(${o.min.toFixed(1)}〜${o.max.toFixed(1)}m)`;u>o.max?(i.approach*=1.8,i.jump*=1.4,a?(i.shoot*=.4,i.jump*=1.6,s.push(`${h}より遠いので近づきたい(近接武器は遠距離が苦手)`)):s.push(`${h}より遠いので接近を優先`)):u<o.min?(i.retreat*=2.6,i.strafe*=1.8,i.approach*=.3,i.jump*=.5,s.push(`${h}より近いので、下がって距離を取り直す`)):s.push(`${h}の内。動きは相棒の判断に任せる`)}else XE(i,s,n.distance,r);$E(i,s,n);const l=kE(n),c=l!==null&&e!==void 0&&e<GE(n);if(c&&l){const u=HE[l][n.personality];for(const h of Object.keys(u))i[h]*=u[h]??1}return{weights:i,reasons:s,trigger:l,reacted:c}}function XE(n,e,t,i){const s=i==="melee",r=ma(i)*ah,a=!s&&t<r*oh,o=!s&&!a&&t<=r*lh;t>110?(n.approach*=1.8,n.jump*=1.4,s?(n.shoot*=.4,n.jump*=1.6,e.push("遠いので近づきたい(近接武器は遠距離が苦手)")):!a&&!o&&e.push("距離が遠いので接近を優先")):t<=55?(n.approach*=.3,n.shoot*=1.5,n.jump*=.5,n.strafe*=.7,e.push("間合いに入ったので攻撃寄り")):(n.shoot*=1.25,n.strafe*=1.6,e.push("間合いを保ちながら攻撃寄り")),a?(n.retreat*=2.6,n.strafe*=1.8,n.approach*=.3,e.push("射撃の間合いより近いので、下がって距離を取り直す")):o&&(n.approach*=.3,n.shoot*=1.2,n.strafe*=1.3,e.push("射撃の間合いを保って撃ち合う"))}function $E(n,e,t){t.selfHpRatio>.3||(t.personality==="shy"||t.personality==="cautious"?(n.retreat*=2.2,n.guard*=1.8,n.approach*=.4,n.jump*=.3,e.push("HPが少なくて慎重になっている")):t.personality==="aggressive"?(n.shoot*=1.3,n.jump*=1.2,e.push("HPが少ないが攻めの姿勢は崩さない")):(n.evade*=1.5,n.guard*=1.3,n.jump*=.7,e.push("HPが少なくて守りを意識")))}function qE(n,e,t,i){if(i!=null&&i.gambit)return YE(n,i.gambit);const{weights:s,reasons:r,trigger:a,reacted:o}=Xm(n,t),l=Object.entries(s),c=l.reduce((g,[,_])=>g+_,0);let u=Math.min(.999999,Math.max(0,e))*c,h="shoot";for(const[g,_]of l)if(u-=_,u<0){h=g;break}const d={base:r[0]};r.length>1&&(d.situation=r.slice(1).join(" / ")),o&&a&&(d.reaction=uh(a,h));const f=d.reaction?[...r,d.reaction].join(" / "):r.join(" / ");return{action:h,trigger:a,reacted:o,reasonParts:d,reason:f}}function YE(n,e){const{reasons:t}=Xm(n),i=ph(e.rule),s=e.action,r=e.rule.cond,a=`ガンビット「${i}」`,o={base:t[0],gambit:a};t.length>1&&(o.situation=t.slice(1).join(" / "));let l=null;nT(r)&&(l=r,o.reaction=uh(r,s));const c=[...t,a,...o.reaction?[o.reaction]:[]].join(" / ");return{action:s,trigger:l,reacted:o.reaction!==void 0,reasonParts:o,reason:c,gambitLabel:i}}const fl={windup_melee:"斬りかかろうとしている！",windup_ranged:"射撃をチャージしている！",airborne:"跳んできた！",dash_in:"詰めてきた！",foe_guard:"守りを固めた",foe_tumbling:"体勢を崩している！"},$m=["approach","shoot","evade","guard","retreat","strafe","jump","cover","corner"],os={approach:"接近",shoot:"攻撃",evade:"回避",guard:"ガード",retreat:"後退",strafe:"回り込み",jump:"ジャンプ",cover:"壁陰に隠れる",corner:"壁際に追い込む"},bf={approach:"前に出る",shoot:"先に打ち込む",evade:"身をかわす",guard:"ガードで受ける",retreat:"下がって間合いを取る",strafe:"横へ回り込む",jump:"跳んで仕掛ける",cover:"壁陰に隠れる",corner:"壁際に追い込む"},KE={windup_melee:"斬りかかる気配",windup_ranged:"射撃のチャージ",airborne:"跳び込み",dash_in:"詰め寄り",foe_guard:"相手の守り",foe_tumbling:"崩れた隙"};function ZE(n){if(!n||typeof n!="object")return null;const e=n;return e.version!==1||typeof e.rivalName!="string"||!Array.isArray(e.decisions)||!Array.isArray(e.hits)||e.result!=="win"&&e.result!=="lose"&&e.result!=="draw"||!Yo.includes(e.rivalPersonality)||!Yo.includes(e.playerPersonality)?null:e}function Ef(n){let e=null;for(const t of $m)n[t]>0&&(e===null||n[t]>n[e])&&(e=t);return e}function Tf(){return{approach:0,shoot:0,evade:0,guard:0,retreat:0,strafe:0,jump:0,cover:0,corner:0}}function qm(n){const e=n.decisions.filter(u=>u.actor==="player"),t=Tf(),i=Tf();let s=0,r=0;for(const u of e)t[u.action]+=1,u.trigger!==null&&(r+=1,u.reacted&&(s+=1,i[u.action]+=1));const a=jn[n.playerPersonality].label,o=Ef(t);if(!o)return{actionCounts:t,reactionsHit:s,reactionsTotal:r,summaryText:`${a}な性格だが、今回は判断を下す前に決着した。`};const l=`${a}らしく、${bf[o]}判断が目立った（${e.length}回中${t[o]}回）。`;let c;if(r===0)c="相手の仕掛けを読む場面はなかった。";else if(s===0)c=`相手の仕掛けには${r}回とも反応できなかった。`;else{const u=Ef(i);c=`相手の仕掛けには${r}回中${s}回反応し、${bf[u]}場面が多かった。`}return{actionCounts:t,reactionsHit:s,reactionsTotal:r,summaryText:l+c}}const Af=["ko_dealt","ko_taken","first_reaction","missed","final"];function JE(n){const e=f=>f==="player"?n.playerName||"この子":n.rivalName,t=f=>f==="player"?"rival":"player",i=(f,g)=>{let _;for(const m of n.decisions)m.actor===f&&m.tMs<=g&&(_=m);return _},s=f=>f.reacted&&f.reactionLine?`${os[f.action]}「${f.reactionLine}」`:os[f.action],r=f=>f?`（直前の判断：${s(f)}）`:"",a=[],o=n.hits.find(f=>f.attacker==="player");o&&a.push({kind:"ko_dealt",tMs:o.tMs,text:`${e("player")}の一撃が${e("rival")}を撃破した${r(i("player",o.tMs))}`});const l=n.hits.find(f=>f.attacker==="rival");l&&a.push({kind:"ko_taken",tMs:l.tMs,text:`${e("rival")}の一撃で${e("player")}が撃破された${r(i("rival",l.tMs))}`});const c=n.decisions.find(f=>f.actor==="player"&&f.reacted&&f.trigger!==null);c&&c.trigger&&a.push({kind:"first_reaction",tMs:c.tMs,text:`初めての読み勝ち：${e("rival")}が${fl[c.trigger]} → ${e("player")}は${s(c)}`});const u=n.hits.find(f=>f.missedReaction);if(u){const f=t(u.attacker),g=i(f,u.tMs),_=g!=null&&g.trigger&&!g.reacted?`${KE[g.trigger]}を見ていたのに`:"";a.push({kind:"missed",tMs:u.tMs,text:`読み負け：${e(f)}は${_}反応が間に合わず、撃破された`})}const h=i("player",1/0),d=i("rival",1/0);if(h||d){const f=[];h&&f.push(`${e("player")}は${s(h)}`),d&&f.push(`${e("rival")}は${s(d)}`),a.push({kind:"final",tMs:Math.max((h==null?void 0:h.tMs)??0,(d==null?void 0:d.tMs)??0),text:`最後の読み合い：${f.join("、")}`})}return a.sort((f,g)=>f.tMs-g.tMs||Af.indexOf(f.kind)-Af.indexOf(g.kind))}const jE=2500,Ym=10,Km=25,QE=1.8,pl={windup_melee:null,windup_ranged:null,airborne:null,dash_in:null,foe_guard:null,foe_tumbling:null,foe_far:{min:2,max:60,def:Km,step:.5,unit:"m"},foe_near:{min:.5,max:20,def:QE,step:.1,unit:"m"},los_blocked:null,foe_near_wall:{min:.5,max:12,def:2,step:.5,unit:"m"},self_near_wall:{min:.5,max:12,def:2,step:.5,unit:"m"}},xi=(n,e,t)=>Math.min(t,Math.max(e,n));function Ko(n){const e=pl[n.cond];return e?typeof n.param=="number"&&Number.isFinite(n.param)?n.param:e.def:null}function ga(n){const e=n.cooldownSec;return typeof e=="number"&&Number.isFinite(e)&&e>=0?e*1e3:jE}function Zm(n,e){const t=pl[n];if(!(!t||typeof e!="number"||!Number.isFinite(e)))return xi(e,t.min,t.max)}function Jm(n){if(!(typeof n!="number"||!Number.isFinite(n)))return xi(n,0,Ym)}const Ua={approach:{label:"停止距離",min:.8,max:30,step:.1,unit:"m"},shoot:{label:"間合い",min:.8,max:60,step:.2,unit:"m"},evade:null,guard:null,retreat:{label:"距離",min:.5,max:40,step:.5,unit:"m"},strafe:{label:"半径",min:.8,max:30,step:.2,unit:"m"},jump:null,cover:{label:"壁からの距離",min:.5,max:3,step:.1,unit:"m"},corner:{label:"間合い",min:.8,max:30,step:.2,unit:"m"}},oc=2500;function hh(n,e){const t=Ua[n];if(!(!t||typeof e!="number"||!Number.isFinite(e)))return xi(e,t.min,t.max)}function _a(n){return hh(n.action,n.aparam)??null}const jm=["windup_melee","windup_ranged","airborne","dash_in","foe_guard","foe_tumbling"],eT=[...jm,"foe_far","foe_near","los_blocked","foe_near_wall","self_near_wall"],tT={windup_ranged:"相手が射撃チャージ",windup_melee:"相手が斬りかかり",airborne:"相手が滞空",dash_in:"相手が詰めてきた",foe_guard:"相手が防御中",foe_tumbling:"相手がタンブル中",foe_far:"距離が遠い",foe_near:"距離が近い",los_blocked:"射線が遮られている",foe_near_wall:"敵が壁際",self_near_wall:"自分が壁際"},dh={windup_ranged:"射撃チャージ中",windup_melee:"斬りかかり",airborne:"滞空中",dash_in:"詰めてきた",foe_guard:"防御中",foe_tumbling:"タンブル中",foe_far:"距離が遠い",foe_near:"距離が近い",los_blocked:"射線遮断",foe_near_wall:"敵壁際",self_near_wall:"自分壁際"};function nT(n){return jm.includes(n)}function ml(n,e=!1){const t=(e?dh:tT)[n.cond],i=Ko(n),s=pl[n.cond];if(i===null||!s)return t;const r=`${+i.toFixed(2)}${s.unit}`,a=n.cond==="foe_far"?"超":n.cond==="foe_near"?"未満":"以下";return`${t}(${r}${a})`}function fh(n){const e=n.side==="right"?"（右）":n.side==="left"?"（左）":"",t=_a(n),i=Ua[n.action],s=t!==null&&i?`（${i.label}${t.toFixed(1)}${i.unit}）`:"";return`${os[n.action]}${e}${s}`}function ph(n){return`${ml(n)} → ${fh(n)}`}function iT(n,e){const t=e.snap,i=Ko(n)??0;switch(n.cond){case"windup_melee":return t.windingUp&&t.windupKind==="melee";case"windup_ranged":return t.windingUp&&t.windupKind==="ranged";case"airborne":return t.airborne;case"dash_in":return t.dashingToward;case"foe_guard":return t.guarding;case"foe_tumbling":return t.tumbling;case"foe_far":return e.distance>i;case"foe_near":return e.distance<i;case"los_blocked":return!!e.selfPos&&!!e.foePos&&hl(e.selfPos.x,e.selfAlt??0,e.selfPos.z,e.foePos.x,e.foeAlt??0,e.foePos.z,0)!==null;case"foe_near_wall":return!!e.foePos&&yf(e.foePos)<=i;case"self_near_wall":return!!e.selfPos&&yf(e.selfPos)<=i}}function sT(n,e,t,i){for(const s of n){const r=t[s.id];if(!(r!==void 0&&i-r<ga(s))&&iT(s,e))return{rule:s,action:s.action}}return null}function mh(n){return 3+Math.min(5,Math.floor(Math.max(0,n)/5))}function uu(){return[{id:"g1",cond:"windup_ranged",action:"guard"},{id:"g2",cond:"dash_in",action:"strafe",side:"right"}]}const wf=[[],[{cond:"windup_ranged",action:"guard"}],[{cond:"windup_ranged",action:"guard"},{cond:"dash_in",action:"strafe",side:"right"}],[{cond:"windup_ranged",action:"retreat"},{cond:"windup_ranged",action:"guard"},{cond:"dash_in",action:"strafe",side:"right"},{cond:"windup_ranged",action:"cover"}],[{cond:"foe_near_wall",param:2,action:"corner"},{cond:"foe_tumbling",action:"shoot"},{cond:"windup_ranged",action:"retreat"},{cond:"windup_melee",action:"evade"},{cond:"windup_ranged",action:"guard"},{cond:"windup_ranged",action:"cover"}],[{cond:"foe_near_wall",param:2,action:"corner"},{cond:"foe_tumbling",action:"shoot"},{cond:"windup_melee",action:"evade"},{cond:"windup_ranged",action:"guard"},{cond:"dash_in",action:"strafe",side:"right"},{cond:"foe_guard",action:"approach"},{cond:"windup_ranged",action:"cover"}]];function rT(n){const e=Math.min(wf.length-1,Math.max(0,Math.floor(n)||0));return wf[e].map((t,i)=>({...t,id:`r${i+1}`}))}function aT(n){if(!Array.isArray(n))return uu();const e=[],t=new Set;for(const i of n){if(!i||typeof i!="object")continue;const s=i;if(typeof s.id!="string"||!s.id||t.has(s.id)||!eT.includes(s.cond)||!$m.includes(s.action))continue;const r={id:s.id,cond:s.cond,action:s.action};(s.side==="left"||s.side==="right")&&(r.side=s.side);const a=Zm(r.cond,s.param);a!==void 0&&(r.param=a);const o=Jm(s.cooldownSec);o!==void 0&&(r.cooldownSec=o);const l=hh(r.action,s.aparam);l!==void 0&&(r.aparam=l),t.add(s.id),e.push(r)}return n.length>0&&e.length===0?uu():e}const ys={min:.8,max:60,step:.2},gh=1.8,oT=1;function Qm(n){return st[n].kind==="ranged"?{min:10,max:18}:{min:.8,max:1.6}}function e0(n,e,t="min"){const i=n&&typeof n=="object"?n:null,s=o=>typeof o=="number"&&Number.isFinite(o);if(!i||!s(i.min)||!s(i.max))return Qm(e);let r=xi(i.min,ys.min,ys.max),a=xi(i.max,ys.min,ys.max);return r>a&&(t==="min"?a=r:r=a),{min:r,max:a}}function gl(n,e){if(st[e].kind==="ranged")return{min:n.min,max:n.max};const t=Math.min(n.max,gh);return{min:Math.min(n.min,oT,t),max:t}}function _h(n){return typeof n=="number"&&Number.isFinite(n)&&n>0}function _l(n,e){return st[n].kind==="melee"?Math.min(e,gh):e}function lT(n,e){const t=_l(n,e);let i=t*lh;return st[n].kind==="melee"&&(i=Math.min(i,gh)),{min:Math.min(t*oh,i),max:i}}function t0(n,e,t){return _h(t)?lT(n,t):e?gl(e,n):null}const Rf={min:.7,max:1.6},cT=900,uT=["evade","strafe","retreat","guard"];function Cf(n){return uT.includes(n)}function xh(n,e,t){const i=st[n].kind;if(i!=="ranged")return null;const s=ma(i),r=t0(n,e,t)??{min:s*oh,max:s*lh};return{min:r.min*Rf.min,max:r.max*Rf.max}}function hT(n,e,t,i){const s=xh(n,t,i);return s!==null&&e>=s.min&&e<=s.max}function dT(n,e){return st[n].kind==="ranged"&&e.inEnvelope&&e.losClear&&e.cooldownReady}const fT={fire_first:"撃てる間合い。かわしながら撃ち返す",counter:"かわした直後、反撃に転じる"};function pT(n,e){const t=st[e.weapon].kind==="ranged",i=e.counterUntil>e.nowMs,s=h=>{let d=i?e.counterUntil:0;return t?h.action==="shoot"?d=0:h.reacted&&Cf(h.action)&&(d=e.nowMs+cT):d=0,{decision:h,override:null,moveAlong:null,counterUntil:d}};if(n.gambitLabel!==void 0||!t||!e.fireReady||n.action==="shoot")return s(n);let r=null;if(i?r="counter":n.reacted&&Cf(n.action)&&(r="fire_first"),!r)return s(n);const a=n.action,o=a==="evade"||a==="strafe"||a==="retreat"?a:null,l={...n.reasonParts};n.reacted&&n.trigger&&(l.reaction=uh(n.trigger,"shoot"));const c=fT[r],u=[l.base,l.situation,l.reaction,c].filter(h=>!!h);return{decision:{...n,action:"shoot",reasonParts:l,reason:u.join(" / ")},override:r,moveAlong:o,counterUntil:0}}function mT(n,e,t){const i=xh(n,e,t);return i?i.max:sE}const gT="遠いので全速で間合いへ詰める",Lf=["windup_melee","windup_ranged"];function _T(n,e){const t=n.reacted&&n.trigger!==null&&Lf.includes(n.trigger);if(n.gambitLabel!==void 0||t||e.distWorld<=mT(e.weapon,e.band,e.engageRange))return{decision:n,rush:!1};const{base:i,situation:s}=n.reasonParts,r=[i,s,gT].filter(l=>!!l).join(" / "),a=n.trigger!==null&&Lf.includes(n.trigger)?n.trigger:null,o={base:i};return s&&(o.situation=s),{decision:{...n,action:"approach",trigger:a,reacted:!1,reasonParts:o,reason:r},rush:!0}}const If=[2,2,3,3,4,4];function Pf(n,e){const t=st[n].volley;if(n!=="missile"||e===void 0||e===null)return t;const i=Math.min(If.length-1,Math.max(0,Math.floor(e)||0));return Math.min(t,If[i])}function xT(n,e=st[n].volley){return Math.max(0,e-1)*st[n].volleyIntervalMs}const vT=.06;function MT(n,e){return Math.max(0,Math.floor(n))*(1-xi(e,0,1))*vT}const yT=2.4,ST=3500,bT=1.3,ET=.8,TT=300,Nf=.4,AT=.2,wT=.15,n0=(n,e)=>({x:n.x*e,y:n.y*e,z:n.z*e}),Ki=n=>{const e=ur(n);return e>1e-9?n0(n,1/e):{x:0,y:0,z:1}},RT=(n,e)=>Math.acos(xi(Kn(Ki(n),Ki(e)),-1,1));function CT(n){const e=Math.max(1,Math.floor(n));return Array.from({length:e},(t,i)=>({yaw:e===1?0:-Nf+2*Nf*i/(e-1),pitch:AT}))}function LT(n,e,t,i,s=st.missile.projectileSpeed){const r=e.x-n.x,a=e.z-n.z,o=(Math.hypot(r,a)>1e-6?Math.atan2(r,a):0)+t,l=Math.cos(i);return{pos:{...n},vel:{x:Math.sin(o)*l*s,y:Math.sin(i)*s,z:Math.cos(o)*l*s},ageMs:0,locked:!0}}function IT(n,e,t){const i=Ki(n),s=Ki(e),r=Math.acos(xi(Kn(i,s),-1,1)),a=Math.max(0,t);if(r<=a)return s;const o=Math.sin(r);if(o<1e-6){const u=Ki({x:i.z,y:0,z:-i.x});return Ki({x:i.x*Math.cos(a)+u.x*Math.sin(a),y:i.y*Math.cos(a),z:i.z*Math.cos(a)+u.z*Math.sin(a)})}const l=Math.sin(r-a)/o,c=Math.sin(a)/o;return Ki({x:i.x*l+s.x*c,y:i.y*l+s.y*c,z:i.z*l+s.z*c})}function PT(n,e,t){const i=Math.max(0,t),s=ur(n.vel);let r=Ki(n.vel),a=n.locked;if(a){const l=Cn(e,n.pos);n.ageMs>=TT&&RT(r,l)>ET?a=!1:r=IT(r,l,yT*i)}const o=n0(r,s);return{pos:{x:n.pos.x+o.x*i,y:n.pos.y+o.y*i,z:n.pos.z+o.z*i},vel:o,ageMs:n.ageMs+i*1e3,locked:a}}function NT(n,e,t){const i=Cn(e,n),s=Kn(i,i),r=s<1e-12?0:xi(Kn(Cn(t,n),i)/s,0,1);return ur(Cn(t,{x:n.x+i.x*r,y:n.y+i.y*r,z:n.z+i.z*r}))}function DT(n,e,t,i,s=Jn){return hl(n.x,n.y,n.z,e.x,e.y,e.z,wT,s)?"tower":NT(n,e,t)<=bT?"hit":e.y<=0?"ground":i>=ST?"expired":null}function kr(n,e,t,i){if(_h(t))return _l(n,t);const s=ma(st[n].kind);if(!e)return s;const r=gl(e,n),a=xi(s,r.min,r.max);return i!==void 0&&i<=a?r.min:a}const UT={ranged:[{min:6.6,max:30},{min:8,max:26.6},{min:9.4,max:23.4},{min:10,max:20.6},{min:11.4,max:18.6},{min:12,max:16.6}],melee:[{min:.8,max:3},{min:.8,max:2.6},{min:.8,max:2.2},{min:.8,max:1.8},{min:.8,max:1.6},{min:.8,max:1.4}]};function FT(n,e){const t=UT[st[e].kind],i=Math.min(t.length-1,Math.max(0,Math.floor(n)||0));return{...t[i]}}const Xs={normal:.25,rare:.15,super:.05},i0=[{id:"back:ribbon",label:"リボン",kind:"back",value:"ribbon",rarity:"normal",unlockable:!0},{id:"weapon:hammer",label:"ハンマー",kind:"weapon",value:"hammer",rarity:"normal",unlockable:!0},{id:"ear:rabbit",label:"うさ耳",kind:"ear",value:"rabbit",rarity:"rare",unlockable:!0},{id:"back:jet",label:"ジェットパック",kind:"back",value:"jet",rarity:"rare",unlockable:!0},{id:"ear:headgear",label:"ヘッドギア",kind:"ear",value:"headgear",rarity:"super",unlockable:!0},{id:"weapon:dagger",label:"デュアルダガー",kind:"weapon",value:"dagger",rarity:"super",unlockable:!0}];function OT(n,e){const t=Math.min(.999999,Math.max(0,e)),i=t<Xs.super?["super","rare","normal"]:t<Xs.super+Xs.rare?["rare","normal"]:t<Xs.super+Xs.rare+Xs.normal?["normal"]:[];if(i.length===0)return{droppedId:null,rarity:null,bonusCoins:0};for(const s of i){const r=i0.filter(a=>a.rarity===s&&!n.includes(a.id));if(r.length>0){const a=t*997%1;return{droppedId:r[Math.floor(a*r.length)%r.length].id,rarity:s,bonusCoins:0}}}return{droppedId:null,rarity:null,bonusCoins:50}}function BT(n,e){return n?{coins:35+Math.max(0,Math.floor(e)||0)*10}:{coins:8}}const Lr=[{name:"ブロンズ",minWins:0},{name:"シルバー",minWins:5},{name:"ゴールド",minWins:12},{name:"プラチナ",minWins:22},{name:"ダイヤ",minWins:35},{name:"マスター",minWins:55}];function zr(n){let e=0;for(let i=0;i<Lr.length;i++)n>=Lr[i].minWins&&(e=i);const t=e+1<Lr.length?Lr[e+1]:null;return{rank:Lr[e],index:e,next:t,winsToNext:t?t.minWins-n:0}}const lc=[{name:"ミント",personality:"cheerful",weapon:"blaster",hairStyle:"twin",hairColor:"#57b96a",outfitColor:"#3cb8a6",ear:"cat",back:"wing"},{name:"ソラ",personality:"free",weapon:"blaster",hairStyle:"short",hairColor:"#5aa7e5",outfitColor:"#5aa7e5",ear:"antenna",back:"none"},{name:"ピノ",personality:"shy",weapon:"wand",hairStyle:"braid",hairColor:"#b58a3c",outfitColor:"#e5a83c",ear:"none",back:"pack"},{name:"カエデ",personality:"calm",weapon:"blade",hairStyle:"long",hairColor:"#a03c2e",outfitColor:"#9a6ff0",ear:"none",back:"ribbon"},{name:"ユズ",personality:"aggressive",weapon:"hammer",hairStyle:"ponytail",hairColor:"#e5a83c",outfitColor:"#e56363",ear:"cat",back:"none"},{name:"リン",personality:"cautious",weapon:"wand",hairStyle:"bob",hairColor:"#666f7a",outfitColor:"#7a6ff0",ear:"headgear",back:"pack"},{name:"アカリ",personality:"aggressive",weapon:"dagger",hairStyle:"twin",hairColor:"#e56363",outfitColor:"#e5639a",ear:"rabbit",back:"jet"},{name:"ハヤテ",personality:"cheerful",weapon:"missile",hairStyle:"short",hairColor:"#d9d9e3",outfitColor:"#5a6b8c",ear:"antenna",back:"jet"},{name:"シズク",personality:"calm",weapon:"blade",hairStyle:"braid",hairColor:"#3cb8a6",outfitColor:"#4455cc",ear:"antenna",back:"wing"}];function kT(n){return{spec:lc[Math.floor(Math.min(.999999,Math.max(0,n))*lc.length)%lc.length]}}const zT=6,GT=3.33,HT=10;function VT(n){return n==="foe_low_hp"?"foe_tumbling":n==="self_low_hp"?"windup_ranged":null}function WT(n,e){let t=n.rangeBand;const i=t&&typeof t=="object"?t:null;if(st[e].kind==="ranged"&&i&&typeof i.min=="number"&&typeof i.max=="number"&&Number.isFinite(i.min)&&Number.isFinite(i.max)&&i.max<=zT){const r=a=>Math.round(a*GT*100)/100;t={min:r(i.min),max:r(i.max)}}const s=Array.isArray(n.gambits)?n.gambits.map(r=>{if(!r||typeof r!="object")return r;const a=r,o=VT(a.cond);if(o){const l={...a,cond:o};return delete l.param,l}return a.cond==="foe_far"&&typeof a.param=="number"&&a.param<HT?{...a,param:Km}:r}):n.gambits;return{rangeBand:t,gambits:s}}const Df={aggressive:{home:[{text:"「次の相手はどこだ？ 腕が鳴るぜ」",minBondLevel:1},{text:"「あんたの作戦、悪くない。…悪くないだけだ」",minBondLevel:2},{text:"「負ける気がしねえ。あんたが見てるからな」",minBondLevel:3}],pet:[{text:"「な、なでるな…！ …もうちょっとだけなら」",minBondLevel:1},{text:"「へへ、悪くない気分だ」",minBondLevel:2}],pre:[{text:"「行くぞ！ 全力で潰す！」",minBondLevel:1}],win:[{text:"「当然の結果だ！ 次も頼むぜ」",minBondLevel:1}],lose:[{text:"「くそっ…！ 次は絶対勝つ」",minBondLevel:1}]},cautious:{home:[{text:"「無理は禁物です。準備を整えてから、ね」",minBondLevel:1},{text:"「あなたの判断、信頼しています」",minBondLevel:2},{text:"「一緒にいると、落ち着いて考えられるんです」",minBondLevel:3}],pet:[{text:"「わっ…！ びっくりしました。…嫌じゃないです」",minBondLevel:1},{text:"「ありがとうございます。ほっとします」",minBondLevel:2}],pre:[{text:"「相手の出方を見てから動きます」",minBondLevel:1}],win:[{text:"「勝てました。慎重にいって正解でしたね」",minBondLevel:1}],lose:[{text:"「負けは負け。敗因を整理しましょう」",minBondLevel:1}]},calm:{home:[{text:"「今日もよろしく。状況は良好だよ」",minBondLevel:1},{text:"「君の選ぶパーツ、センスがいいと思う」",minBondLevel:2},{text:"「君といると判断が冴える。理由は…まだ秘密」",minBondLevel:3}],pet:[{text:"「うん、ありがとう。落ち着く」",minBondLevel:1},{text:"「…悪くない感触だ」",minBondLevel:2}],pre:[{text:"「観察して、的確に対処する」",minBondLevel:1}],win:[{text:"「想定通りの勝利。お疲れさま」",minBondLevel:1}],lose:[{text:"「データは取れた。次に活かそう」",minBondLevel:1}]},cheerful:{home:[{text:"「今日も一緒にがんばろう！」",minBondLevel:1},{text:"「新しいパーツ、似合うかな…？」",minBondLevel:2},{text:"「あのね、勝ったらまず報告しに来るって決めてるの！」",minBondLevel:3}],pet:[{text:"「えへへ、なでなで充電できた！」",minBondLevel:1},{text:"「あったかーい。そのままもうちょっと…」",minBondLevel:2}],pre:[{text:"「いっくよー！ 見ててね！」",minBondLevel:1}],win:[{text:"「やったー！ わたし強いでしょう？」",minBondLevel:1}],lose:[{text:"「うぅ…次は勝つもん！」",minBondLevel:1}]},free:{home:[{text:"「今日はどんな気分かな～、わたしにも分からない」",minBondLevel:1},{text:"「パーツ？ 気分で選んでいいよ」",minBondLevel:2},{text:"「退屈だけはごめんだね。あんたといると退屈しないけど」",minBondLevel:3}],pet:[{text:"「お、なでたね。じゃあお返しに回るね」",minBondLevel:1},{text:"「ふふ、くすぐったい」",minBondLevel:2}],pre:[{text:"「さーて、どうなるかな？」",minBondLevel:1}],win:[{text:"「勝っちゃった。ま、そんな日もある」",minBondLevel:1}],lose:[{text:"「負けた～。お腹すいた」",minBondLevel:1}]},shy:{home:[{text:"「あ、あの…今日もよろしくお願いします…」",minBondLevel:1},{text:"「バトル、怖いけど…あなたのために頑張ります」",minBondLevel:2},{text:"「あなたのそばが、いちばん落ち着く場所です」",minBondLevel:3}],pet:[{text:"「ひゃっ…！ …あ、ありがとうございます…」",minBondLevel:1},{text:"「えへへ…なでられるの、好きです」",minBondLevel:2}],pre:[{text:"「こ、怖くない…大丈夫…行きます…！」",minBondLevel:1}],win:[{text:"「か、勝てました…！ ほんとに…？」",minBondLevel:1}],lose:[{text:"「ごめんなさい…もっと強くなります…」",minBondLevel:1}]}};function Fa(n,e,t,i){const s=Df[n][e].filter(a=>a.minBondLevel<=t),r=s.length>0?s:Df[n][e];return r[Math.floor(Math.min(.999999,Math.max(0,i))*r.length)%r.length].text}const vh=n=>n==="strafe"||n==="evade";function XT(n,e){n.cond=e,delete n.param}function $T(n,e){n.action=e,vh(e)?n.side=n.side??"right":delete n.side,delete n.aparam}function qT(n,e){const t=Zm(n.cond,e);t===void 0?delete n.param:n.param=t}function YT(n,e){const t=Jm(e);t===void 0?delete n.cooldownSec:n.cooldownSec=t}function KT(n,e){const t=e===null?void 0:hh(n.action,e);t===void 0?delete n.aparam:n.aparam=t}function Uf(n,e,t){return e<0||t<0||e>=n.length||t>=n.length||e===t?!1:([n[e],n[t]]=[n[t],n[e]],!0)}function Ff(n,e,t){const i=Math.round(n/t.step)*t.step,s=Math.abs(i-n)<1e-9?n+e*t.step:e>0?Math.ceil(n/t.step)*t.step:Math.floor(n/t.step)*t.step;return Math.min(t.max,Math.max(t.min,+s.toFixed(4)))}function s0(n,e){return Math.min(e.max,Math.max(e.min,+(Math.round(n/e.step)*e.step).toFixed(4)))}const ZT={min:0,max:Ym,step:.5};function JT(n){const e=Ua[n];return e?s0((e.min+e.max)/2,e):null}function jT(n){const e=vh(n.action)?n.side==="left"?"（左）":"（右）":"";return`${os[n.action]}${e}`}function Mh(n){return`${ml(n,!0)} → ${jT(n)}`}function r0(n){const e=[],t=Ua[n.action],i=_a(n);return t&&i!==null&&e.push(`${t.label}${i.toFixed(1)}${t.unit}`),e.push(`再発動 ${+(ga(n)/1e3).toFixed(2)}秒`),e.join(" ・ ")}function QT(n){return n==="foe_far"?"超":n==="foe_near"?"未満":"以下"}const e1=[{title:"相手の仕掛け",items:["windup_ranged","windup_melee","dash_in","airborne"]},{title:"相手の状態",items:["foe_guard","foe_tumbling"]},{title:"距離",items:["foe_far","foe_near"]},{title:"地形",items:["los_blocked","foe_near_wall","self_near_wall"]}],t1=[{title:"守る・かわす",items:["guard","evade","retreat","cover"]},{title:"動く",items:["strafe","jump"]},{title:"攻める",items:["shoot","approach","corner"]}],n1={windup_ranged:"射撃の溜め・ロックしたミサイルが飛来中",windup_melee:"近接攻撃の溜めに入った",dash_in:"ダッシュでこちらへ詰めてきた",airborne:"相手が空中にいる",foe_guard:"相手がガードを構えている",foe_tumbling:"衝突で姿勢を崩している",foe_far:"相手との距離がしきい値より遠い",foe_near:"相手との距離がしきい値より近い",los_blocked:"障害物で射線が通らない",foe_near_wall:"相手が外壁のそばにいる",self_near_wall:"自分が外壁のそばにいる"},i1=n=>dh[n],s1=[{key:"dodge_shot",title:"射撃チャージを避ける",hint:"撃たれる直前に横へ回避",rule:{cond:"windup_ranged",action:"evade",side:"right"}},{key:"dodge_missile",title:"ミサイルを避ける",hint:"飛来中は横へ回り込んで振り切る",rule:{cond:"windup_ranged",action:"strafe",side:"right"}},{key:"flank_rush",title:"詰めてきたら回り込む",hint:"突っ込んできた相手の横へ",rule:{cond:"dash_in",action:"strafe",side:"right"}},{key:"punish_tumble",title:"タンブル中を狙う",hint:"姿勢を崩した隙に攻撃",rule:{cond:"foe_tumbling",action:"shoot"}},{key:"take_cover",title:"壁陰に隠れる",hint:"撃たれそうなら障害物の陰へ",rule:{cond:"windup_ranged",action:"cover"}},{key:"corner",title:"壁際に追い込む",hint:"相手が外壁のそばなら押し込む",rule:{cond:"foe_near_wall",param:2,action:"corner"}},{key:"keep_away",title:"近づかれたら距離を取る",hint:"間合いの内側に入られたら後退",rule:{cond:"foe_near",action:"retreat"}},{key:"custom",title:"カスタム",hint:"条件と行動を自分で選ぶ",rule:{cond:"windup_ranged",action:"evade",side:"right"}}];function Of(n,e){return{id:e,...n.rule}}function r1(n,e){if(!Array.isArray(n))return[];const t=new Set(e.map(s=>s.id)),i=[];for(const s of n)typeof s=="string"&&t.has(s)&&!i.includes(s)&&i.push(s);return i}function a1(n,e){const t=[];return n.forEach((i,s)=>{e.includes(i.id)||t.push({rule:i,no:s+1})}),t}function o1(n,e,t){const i=n.filter(s=>s!==e);return t?i:[...i,e]}const ti={minCutIntervalMs:2600,blendMs:450,hardCutDist:14,killcamBlendMs:700,foeCutMs:1100,missileCutMs:1300,dollyRiseMs:160,dollyHoldMs:220,dollyReleaseMs:380,dollyAmount:.2,approachFarDist:90,approachNearDist:25,fovBase:44,fovWide:48,fovDolly:42,killcamFollowBreakupMs:1500,killcamFollowGroundMs:600,killcamHoldMs:1400,aimRate:3.5},cc={back:6.5,height:1.7,shoulder:1.3},uc={back:22,height:9,shoulder:6},Bf={back:7.5,height:2,shoulder:1.5},l1={back:5.5,height:1.6,shoulder:1.2},a0=1.2,yh=.6,kf=.95;function o0(n){return{shot:"base",since:n,until:1/0,lastCutAt:n,cuts:0,dollyFrom:-1/0,dollyLast:-1/0}}const hu=n=>Math.min(1,Math.max(0,n)),Sh=n=>{const e=hu(n);return e*e*(3-2*e)},Ss=(n,e,t)=>n+(e-n)*t,zf=(n,e,t)=>({x:Ss(n.x,e.x,t),y:Ss(n.y,e.y,t),z:Ss(n.z,e.z,t)});function l0(n,e,t){const i=hu((e-n.dollyFrom)/t.dollyRiseMs),s=1-hu((e-n.dollyLast-t.dollyHoldMs)/t.dollyReleaseMs);return Math.min(i,s)}function c1(n,e,t=ti){return Sh(l0(n,e,t))}function u1(n,e,t,i=ti){if(e==="ko")return n.shot==="killcam"?n:{...n,shot:"killcam",since:t,until:1/0,lastCutAt:t,cuts:n.cuts+1};if(n.shot==="killcam")return n;if(e==="playerFire"){const r=l0(n,t,i);return{...n,dollyFrom:t-r*i.dollyRiseMs,dollyLast:t}}if(n.shot==="foeCut")return e==="foeSalvo"?{...n,shot:"missileCut",since:t,until:t+i.missileCutMs}:n;if(n.shot!=="base"||t-n.lastCutAt<i.minCutIntervalMs)return n;const s=e==="foeSalvo";return{...n,shot:s?"missileCut":"foeCut",since:t,until:t+(s?i.missileCutMs:i.foeCutMs),lastCutAt:t,cuts:n.cuts+1}}function h1(n,e,t){return!(n.shot==="foeCut"||n.shot==="missileCut")||!(e>=n.until||n.shot==="missileCut"&&!t&&e-n.since>250)?n:{...n,shot:"base",since:e,until:1/0,lastCutAt:e,cuts:n.cuts+1}}function d1(n,e,t,i=ti){const s=t?i.killcamFollowBreakupMs:i.killcamFollowGroundMs;return e-n.since<s?"follow":"orbit"}function f1(n,e=ti){return Sh((n-e.approachNearDist)/(e.approachFarDist-e.approachNearDist))}function Io(n,e){return{...n,shoulder:n.shoulder*Math.min(1,Math.max(.45,e))}}function p1(n,e,t,i=ti){const s=Io({back:Ss(cc.back,uc.back,n)*(1-i.dollyAmount*e),height:Ss(cc.height,uc.height,n),shoulder:Ss(cc.shoulder,uc.shoulder,n)},t),r=Ss(i.fovBase,i.fovWide,n)+(i.fovDolly-i.fovBase)*e;return{params:s,fov:r}}function Zr(n,e){const t=e.x-n.x,i=e.z-n.z,s=Math.hypot(t,i),r=Math.max(-kf,Math.min(kf,Math.atan2(e.y-n.y,s)));return{yaw:s>1e-6?Math.atan2(t,i):0,pitch:r}}function Gf(n,e,t){let i=(e-n)%(Math.PI*2);return i>Math.PI&&(i-=Math.PI*2),i<-Math.PI&&(i+=Math.PI*2),n+i*t}function m1(n,e,t=ti){const i=t.aimRate*Math.min(1,Math.max(.25,n/4));return 1-Math.exp(-i*e)}const hi=n=>({x:n.x,y:n.y+a0,z:n.z});function c0(n,e){let t=0,i=0,s=0,r=0;for(const l of e){const c=l.x-n.x,u=l.y-n.y,h=l.z-n.z,d=Math.hypot(c,u,h);d<1e-6||(t+=c/d,i+=u/d,s+=h/d,r+=d)}const a=Math.hypot(t,i,s);if(a<1e-6||r<=0)return e.length>0?{...e[0]}:{...n,z:n.z+1};const o=Math.max(1,r/e.length);return{x:n.x+t/a*o,y:n.y+i/a*o,z:n.z+s/a*o}}const g1=.3;function go(n,e,t,i,s,r){const a=hi(n),o=Math.min(i,g1),l=Math.cos(o),c={x:Math.sin(t)*l,y:Math.sin(o),z:Math.cos(t)*l},u={x:-Math.cos(t),z:Math.sin(t)},h={x:a.x-c.x*s.back+u.x*s.shoulder,y:Math.max(yh,a.y-c.y*s.back+s.height),z:a.z-c.z*s.back+u.z*s.shoulder};return{pos:h,look:c0(h,r??[a,hi(e)])}}function Hf(n,e,t,i){const s={x:n.x,y:n.y+a0,z:n.z};return{pos:{x:s.x+Math.sin(e)*t,y:Math.max(yh,s.y+i),z:s.z+Math.cos(e)*t},look:{x:s.x,y:s.y-.1,z:s.z}}}function _1(n,e,t){return t<=0?1:Sh((n-e)/t)}function x1(n,e,t=ti){return Math.hypot(e.pos.x-n.pos.x,e.pos.y-n.pos.y,e.pos.z-n.pos.z)>t.hardCutDist}function v1(n,e,t){return{pos:zf(n.pos,e.pos,t),look:zf(n.look,e.look,t)}}function M1(n,e,t,i,s=.82){const r={x:n.look.x-n.pos.x,y:n.look.y-n.pos.y,z:n.look.z-n.pos.z},a=Math.hypot(r.x,r.y,r.z)||1;r.x/=a,r.y/=a,r.z/=a;let o={x:-r.z,y:0,z:r.x};const l=Math.hypot(o.x,o.z);l<1e-6?o={x:1,y:0,z:0}:(o.x/=l,o.z/=l);const c={x:o.y*r.z-o.z*r.y,y:o.z*r.x-o.x*r.z,z:o.x*r.y-o.y*r.x},u={x:e.x-n.pos.x,y:e.y-n.pos.y,z:e.z-n.pos.z},h=u.x*r.x+u.y*r.y+u.z*r.z;if(h<=.1)return!1;const d=Math.tan(t*Math.PI/360),f=(u.x*o.x+u.y*o.y+u.z*o.z)/h,g=(u.x*c.x+u.y*c.y+u.z*c.z)/h;return Math.abs(f)<=d*i*s&&Math.abs(g)<=d*s}function u0(n,e,t){if(e<=0)return n;const i={x:n.pos.x-n.look.x,y:n.pos.y-n.look.y,z:n.pos.z-n.look.z},s=Math.hypot(i.x,i.y,i.z)||1,r={x:n.pos.x+i.x/s*e,y:Math.max(yh,n.pos.y+i.y/s*e),z:n.pos.z+i.z/s*e};return{pos:r,look:t?c0(r,t):n.look}}function y1(n,e,t,i,s,r=1.5,a=16,o=.82){for(let l=0;l<=a;l++){const c=u0(n,l*r,s);if(e.every(u=>M1(c,u,t,i,o)))return l*r}return a*r}const ft="#2a2f38",Ii="#3b424d",bn="#15181f",qe="#4fe3ff",_o="#ffb347",Vf="#5fe8ff",Wf="#ffd9c0";function _t(n,e={}){const t=new as({color:n,metalness:e.metal??.7,roughness:e.rough??.42,flatShading:e.flat??!1,transparent:e.opacity!==void 0,opacity:e.opacity??1});return e.emissive!==void 0&&(t.emissive.set(e.emissive),t.emissiveIntensity=e.glow??1.3),t}function gt(n,e=1.4,t){return _t(n,{metal:.2,rough:.3,emissive:n,glow:e,opacity:t})}const cn={metal:.12,rough:.58},Xf={metal:.03,rough:.72};function $f(n,e){return new Ee(n).multiplyScalar(e).getStyle()}function S1(n,e){return new Ee(n).lerp(new Ee("#ffffff"),e).getStyle()}class h0{constructor(e){Fe(this,"group",new ct);Fe(this,"inner",new ct);Fe(this,"head",new ct);Fe(this,"armR",new ct);Fe(this,"eyes",[]);Fe(this,"mouth");Fe(this,"coreMat",null);Fe(this,"allMats",[]);Fe(this,"flash",!1);Fe(this,"swingAt",-1);Fe(this,"fallen",!1);Fe(this,"fallT",0);Fe(this,"celebrate",!1);Fe(this,"bank",0);Fe(this,"lean",0);Fe(this,"expression","normal");Fe(this,"flames",[]);Fe(this,"thrusterOn",!1);Fe(this,"thrusterT",0);Fe(this,"weaponTip",new xt);this.group.add(this.inner),this.build(e)}reg(e){const t=e.material;return t&&"emissive"in t&&this.allMats.push({m:t,em:t.emissive.clone(),ei:t.emissiveIntensity}),e.castShadow=!0,e}box(e,t,i,s,r,a,o,l){const c=new re(new Lt(e,t,i),_t(s,l));return c.position.set(r,a,o),this.reg(c)}glowBox(e,t,i,s,r,a,o,l=1.4){const c=new re(new Lt(e,t,i),gt(s,l));return c.position.set(r,a,o),this.reg(c)}cyl(e,t,i,s,r,a,o,l=12,c){const u=new re(new qt(e,t,i,l),_t(s,c));return u.position.set(r,a,o),this.reg(u)}sphere(e,t,i,s,r,a=[1,1,1],o){const l=new re(new nn(e,20,16),_t(t,o));return l.position.set(i,s,r),l.scale.set(a[0],a[1],a[2]),this.reg(l)}glowSphere(e,t,i,s,r,a=1.6){const o=new re(new nn(e,12,10),gt(t,a));return o.position.set(i,s,r),this.reg(o)}addFlame(e,t,i,s=1){const r=new ct;r.position.copy(t),i==="back"&&(r.rotation.x=Math.PI/2);const a=new re(new oi(.07*s,.42*s,10),new as({color:Vf,emissive:Vf,emissiveIntensity:1.6,transparent:!0,opacity:.5,depthWrite:!1}));a.rotation.x=Math.PI,a.position.y=-.21*s,r.add(a);const o=new re(new oi(.04*s,.3*s,8),new as({color:_o,emissive:_o,emissiveIntensity:2.2,transparent:!0,opacity:.9,depthWrite:!1}));o.rotation.x=Math.PI,o.position.y=-.15*s,r.add(o),r.visible=!1,r.scale.y=.01,e.add(r),this.flames.push(r)}build(e){const t=e.outfitColor,i=$f(t,.55),s=e.hairColor,r=$f(s,.72),a=e.eyeColor,o=S1(a,.25),l=e.outfitPattern,c=l==="check"?i:t,u=l==="check"?t:i,h="#eef3f8",d=this.inner;for(const S of[-1,1]){const M=.16*S;d.add(this.sphere(.085,Ii,M,.84,0)),d.add(this.cyl(.065,.06,.3,Ii,M,.66,0,10)),d.add(this.box(.17,.2,.17,c,M,.69,.01)),d.add(this.sphere(.08,ft,M,.5,0)),d.add(this.box(.1,.08,.05,u,M,.52,.09)),d.add(this.cyl(.06,.05,.32,Ii,M,.32,0,10)),d.add(this.box(.16,.3,.12,c,M,.31,.06)),d.add(this.glowBox(.04,.2,.015,qe,M,.31,.125)),l==="stripe"&&d.add(this.box(.165,.03,.125,h,M,.22,.06,{metal:.5})),d.add(this.box(.19,.13,.3,ft,M,.065,.04)),d.add(this.box(.2,.08,.14,u,M,.11,.14));const C=this.cyl(.045,.055,.08,bn,M,.09,-.14,10);C.rotation.x=Math.PI/2,d.add(C),this.addFlame(d,new N(M,.09,-.18),"back",.45)}d.add(this.box(.4,.2,.28,Ii,0,.92,0)),d.add(this.box(.46,.07,.34,ft,0,1,0)),d.add(this.glowBox(.18,.02,.015,qe,0,1,.175));for(const S of[-1,1]){const M=this.box(.19,.3,.035,c,.115*S,.8,.17);M.rotation.x=-.22,M.rotation.z=-.08*S,d.add(M);const C=this.box(.04,.32,.26,u,.26*S,.79,-.01);C.rotation.z=.25*S,d.add(C),l==="dot"&&d.add(this.glowSphere(.02,qe,.115*S,.7,.2))}const f=this.box(.38,.28,.035,u,0,.8,-.17);f.rotation.x=.25,d.add(f),d.add(this.cyl(.17,.19,.2,Ii,0,1.12,0,12)),d.add(this.cyl(.2,.18,.05,bn,0,1.12,0,12)),d.add(this.box(.5,.34,.34,c,0,1.38,0));const g=this.box(.44,.14,.12,u,0,1.5,.17);g.rotation.x=-.6,d.add(g);for(const S of[-1,1]){const M=this.box(.2,.22,.07,u,.15*S,1.36,.18);if(M.rotation.y=.35*S,d.add(M),l==="stripe"){const C=this.box(.03,.2,.075,h,.21*S,1.36,.18,{metal:.5});C.rotation.y=.35*S,d.add(C)}l==="dot"&&d.add(this.glowSphere(.02,qe,.15*S,1.46,.23))}const _=this.cyl(.1,.1,.05,bn,0,1.37,.21,6);_.rotation.x=Math.PI/2,d.add(_);const m=new re(new qt(.065,.065,.03,6),gt(o,1.5));m.rotation.x=Math.PI/2,m.position.set(0,1.37,.245),d.add(this.reg(m)),this.coreMat=m.material,d.add(this.box(.3,.08,.24,ft,0,1.58,0)),d.add(this.cyl(.07,.08,.14,Wf,0,1.64,0,10,Xf));for(const S of[-1,1]){d.add(this.sphere(.09,ft,.33*S,1.5,0));const M=new ct;if(M.position.set(.43*S,1.58,0),M.rotation.z=-.3*S,d.add(M),M.add(this.box(.28,.2,.32,c,0,0,0)),M.add(this.box(.22,.07,.26,u,.02*S,.12,0)),M.add(this.glowBox(.02,.02,.26,qe,.145*S,.03,0)),l==="stripe"&&M.add(this.box(.29,.035,.33,h,0,-.04,0,{metal:.5})),l==="dot")for(const C of[-.09,.09])M.add(this.glowSphere(.022,qe,.146*S,-.04,C))}const p=new ct;if(p.position.set(0,1.3,-.26),d.add(p),e.back!=="none"&&p.add(this.box(.3,.3,.12,ft,0,.02,-.03)),e.back==="wing")for(const S of[-1,1]){p.add(this.box(.3,.06,.05,Ii,.22*S,.1,-.08));const M=this.box(.72,.16,.03,c,.62*S,.26,-.1);M.rotation.z=.5*S,M.rotation.y=-.25*S,p.add(M);const C=this.glowBox(.66,.025,.035,qe,.62*S,.26,-.1);C.rotation.copy(M.rotation),C.position.add(new N(.03*S,.07,0).applyEuler(M.rotation)),p.add(C);const I=this.box(.5,.12,.03,u,.5*S,0,-.1);I.rotation.z=.18*S,I.rotation.y=-.25*S,p.add(I),p.add(this.cyl(.05,.065,.14,bn,.34*S,0,-.1,10)),this.addFlame(p,new N(.34*S,-.07,-.1),"down",.8)}else if(e.back==="jet"){p.add(this.box(.42,.5,.2,ft,0,.05,-.12)),p.add(this.box(.46,.1,.22,c,0,.26,-.12)),p.add(this.glowBox(.3,.02,.015,qe,0,.1,-.225));for(const S of[-1,1]){p.add(this.cyl(.07,.095,.2,bn,.12*S,-.28,-.12,12)),p.add(this.glowBox(.09,.02,.09,_o,.12*S,-.36,-.12,1)),this.addFlame(p,new N(.12*S,-.38,-.12),"down",1);const M=this.cyl(.04,.05,.1,bn,.17*S,.14,-.26,10);M.rotation.x=Math.PI/2,p.add(M),this.addFlame(p,new N(.17*S,.14,-.31),"back",.55)}}else if(e.back==="pack"){p.add(this.box(.46,.5,.22,u,0,0,-.13)),p.add(this.box(.4,.08,.24,ft,0,.2,-.13)),p.add(this.glowBox(.26,.02,.015,qe,0,-.1,-.245)),p.add(this.cyl(.015,.015,.5,ft,.18,.45,-.14,6)),p.add(this.glowSphere(.03,o,.18,.72,-.14));for(const S of[-1,1]){const M=this.cyl(.04,.045,.56,ft,.2*S,.34,0,10);M.rotation.x=Math.PI/2-.35,p.add(M);const C=this.cyl(.05,.05,.06,c,.2*S,.43,.26,10);C.rotation.x=Math.PI/2-.35,p.add(C),p.add(this.cyl(.04,.05,.1,bn,.14*S,-.29,-.13,10)),this.addFlame(p,new N(.14*S,-.34,-.13),"down",.6)}}else if(e.back==="ribbon"){for(const M of[-1,1]){const C=this.box(.34,.14,.025,c,.26*M,.1,-.1);C.rotation.z=.5*M,p.add(C);const I=this.glowBox(.3,.03,.03,qe,.26*M,.1,-.1);I.rotation.z=.5*M,I.position.add(new N(0,.06,0).applyEuler(C.rotation)),p.add(I),p.add(this.box(.06,.34,.02,u,.1*M,-.3,-.1))}const S=this.cyl(.08,.08,.06,ft,0,.1,-.11,8);S.rotation.x=Math.PI/2,p.add(S),p.add(this.glowSphere(.04,o,0,.1,-.15)),p.add(this.cyl(.04,.05,.1,bn,0,-.18,-.1,10)),this.addFlame(p,new N(0,-.23,-.1),"down",.55)}const v=S=>{const M=new ct;return M.position.set(.33*S,1.5,0),M.add(this.cyl(.05,.045,.26,Ii,0,-.15,0,10)),M.add(this.box(.12,.14,.12,u,.01*S,-.14,0)),M.add(this.sphere(.07,ft,0,-.3,0)),M.add(this.cyl(.045,.04,.26,Ii,0,-.45,0,10)),M.add(this.box(.14,.24,.15,c,0,-.46,0)),M.add(this.glowBox(.015,.14,.02,qe,.075*S,-.46,.02)),l==="stripe"&&M.add(this.box(.145,.03,.155,h,0,-.4,0,{metal:.5})),M.add(this.box(.09,.1,.09,ft,0,-.63,0)),M.rotation.z=.35*S,M.rotation.x=-.15,d.add(M),M},w=v(-1);this.armR=v(1);const y=new ct;if(y.position.set(0,-.62,.03),this.armR.add(y),e.weapon==="blade"){y.add(this.cyl(.03,.03,.22,ft,0,-.06,0,8)),y.add(this.box(.18,.05,.09,c,0,-.16,0)),y.add(this.glowBox(.06,.74,.14,qe,0,-.55,0,1.6)),y.add(this.glowBox(.025,.74,.06,"#ffffff",0,-.55,0,1.2));const S=new re(new oi(.07,.16,4),gt(qe,1.6));S.rotation.x=Math.PI,S.rotation.y=Math.PI/4,S.position.y=-.99,y.add(this.reg(S)),this.weaponTip.position.set(0,-1.02,0)}else if(e.weapon==="blaster"){y.add(this.box(.13,.18,.5,ft,0,-.08,.16)),y.add(this.box(.1,.06,.4,c,0,.04,.14)),y.add(this.box(.15,.1,.16,u,0,-.1,.36));for(const C of[-1,1])y.add(this.glowBox(.01,.06,.2,qe,.07*C,-.08,.14));const S=this.cyl(.045,.045,.3,Ii,0,-.05,.5,10);S.rotation.x=Math.PI/2,y.add(S);const M=new re(new Dt(.055,.018,8,16),gt(qe,1.6));M.position.set(0,-.05,.64),y.add(this.reg(M)),this.weaponTip.position.set(0,-.05,.66)}else if(e.weapon==="wand"){y.add(this.cyl(.028,.028,.95,ft,0,-.2,0,8)),y.add(this.cyl(.04,.04,.1,c,0,-.58,0,8)),y.add(this.glowSphere(.09,o,0,-.76,0,1.6));const S=new re(new Dt(.13,.018,8,20),_t(u));S.position.y=-.76,y.add(this.reg(S));for(let M=0;M<3;M++){const C=this.box(.03,.24,.08,c,0,-.66,0);C.rotation.y=M/3*Math.PI*2,C.position.add(new N(0,0,.1).applyEuler(C.rotation)),y.add(C)}this.weaponTip.position.set(0,-.76,0)}else if(e.weapon==="hammer"){y.add(this.cyl(.035,.035,.82,ft,0,-.42,0,8)),y.add(this.box(.4,.22,.22,c,0,-.86,0)),y.add(this.box(.08,.26,.26,u,.22,-.86,0)),y.add(this.glowBox(.3,.02,.23,qe,0,-.86,0));const S=this.cyl(.07,.09,.12,bn,-.25,-.86,0,12);S.rotation.z=Math.PI/2,y.add(S),y.add(this.glowBox(.02,.1,.1,_o,-.3,-.86,0,1)),this.weaponTip.position.set(.1,-.86,0)}else if(e.weapon==="missile"){y.add(this.box(.26,.24,.46,ft,0,-.08,.16)),y.add(this.box(.28,.05,.4,c,0,.07,.15));for(const S of[-1,1])for(const M of[-1,1]){const C=this.cyl(.045,.045,.06,bn,.065*S,-.08+.06*M,.4,10);C.rotation.x=Math.PI/2,y.add(C),y.add(this.glowBox(.04,.04,.02,qe,.065*S,-.08+.06*M,.43,1.4))}y.add(this.glowBox(.05,.05,.08,qe,.15,.04,.3,1.6)),this.weaponTip.position.set(0,-.08,.45)}else{for(const[S,M]of[[y,1],[null,-1]]){const C=S??new ct;S||(C.position.set(0,-.62,.03),w.add(C)),C.add(this.cyl(.025,.025,.14,ft,0,-.04,0,8)),C.add(this.box(.12,.035,.07,c,0,-.1,0)),C.add(this.glowBox(.04,.36,.09,qe,0,-.3,0,1.6));const I=new re(new oi(.045,.1,4),gt(qe,1.6));I.rotation.x=Math.PI,I.position.y=-.53,C.add(this.reg(I))}this.weaponTip.position.set(0,-.55,0)}y.add(this.weaponTip),this.head.position.y=1.98,d.add(this.head),this.head.add(this.sphere(.42,Wf,0,0,0,[1,.94,.96],Xf));for(const S of[-1,1]){this.head.add(this.box(.17,.13,.02,bn,.16*S,.02,.383));const M=new re(new nn(.066,20,16),gt(o,1.5));M.position.set(.16*S,.02,.395),M.scale.set(.85,1.25,.55),this.head.add(this.reg(M)),this.eyes.push(M),this.head.add(this.glowSphere(.02,"#ffffff",.16*S+.02,.07,.44,1));const C=this.box(.11,.022,.02,r,.16*S,.17,.415,cn);C.name=`brow${S}`,this.head.add(C)}const R=new re(new Dt(.07,.016,6,12,Math.PI),_t("#b3543f",cn));R.rotation.z=Math.PI,R.position.set(0,-.14,.415),this.head.add(this.reg(R)),this.mouth=R;const T=new ct;this.head.add(T);const x=new re(new nn(.45,20,14,0,Math.PI*2,0,Math.PI*.58),_t(s,cn));if(x.position.y=.05,T.add(this.reg(x)),T.add(this.sphere(.43,s,0,.18,.04,[1,.55,.95],cn)),T.add(this.sphere(.2,"#ffffff",-.16,.3,.22,[1,.4,.5],{...cn,opacity:.14})),e.hairStyle==="bob"){for(const S of[-1,1])T.add(this.box(.13,.44,.34,s,.4*S,-.18,0,cn));T.add(this.box(.7,.4,.12,s,0,-.16,-.36,cn))}else if(e.hairStyle==="long"){T.add(this.box(.72,1.15,.14,s,0,-.55,-.34,cn));for(const S of[-1,1])T.add(this.box(.11,.5,.3,s,.4*S,-.2,0,cn))}else if(e.hairStyle==="twin")for(const S of[-1,1]){T.add(this.sphere(.13,s,.46*S,.08,0,[1,1,1],cn));const M=new re(new qr(.1,.34,4,8),_t(s,cn));M.position.set(.5*S,-.28,0),M.rotation.z=.15*S,T.add(this.reg(M));const C=this.cyl(.07,.07,.05,ft,.5*S,-.05,0,8);T.add(C),T.add(this.glowSphere(.02,qe,.5*S+.06*S,-.05,.03))}else if(e.hairStyle==="ponytail"){const S=new re(new qr(.11,.4,4,8),_t(s,cn));S.position.set(0,.18,-.5),S.rotation.x=.7,T.add(this.reg(S));const M=this.cyl(.08,.08,.06,ft,0,.32,-.34,8);M.rotation.x=.7,T.add(M)}else if(e.hairStyle==="braid"){for(let S=0;S<4;S++)T.add(this.sphere(.11-S*.012,S%2?r:s,S%2?.05:-.05,-.25-S*.17,-.4,[1,1,1],cn));T.add(this.cyl(.05,.05,.05,ft,0,-.95,-.4,8));for(const S of[-1,1])T.add(this.box(.1,.3,.26,s,.4*S,-.12,0,cn))}const b=new ct;if(this.head.add(b),e.ear!=="antenna"){for(const S of[-1,1]){const M=this.box(.035,.24,.03,u,.09*S,.44,.3);M.rotation.z=-.55*S,M.rotation.x=-.15,b.add(M);const C=this.glowBox(.012,.2,.012,qe,.09*S,.44,.3);C.rotation.copy(M.rotation),C.position.add(new N(0,0,.016).applyEuler(M.rotation)),b.add(C)}b.add(this.box(.14,.06,.06,ft,0,.33,.36)),b.add(this.glowBox(.08,.025,.02,o,0,.33,.39))}if(e.ear!=="headgear")for(const S of[-1,1])b.add(this.box(.1,.2,.22,ft,.46*S,-.08,.04)),b.add(this.box(.06,.12,.14,c,.5*S,-.08,.04)),b.add(this.glowSphere(.028,qe,.53*S,-.06,.06));if(e.ear==="cat")for(const S of[-1,1]){const M=new re(new oi(.11,.26,4),_t(s,cn));M.position.set(.27*S,.44,0),M.rotation.z=-.25*S,T.add(this.reg(M));const C=new re(new oi(.05,.13,4),gt(qe,1.2));C.position.set(.27*S,.43,.05),C.rotation.z=-.25*S,T.add(this.reg(C))}else if(e.ear==="rabbit")for(const S of[-1,1]){const M=new re(new qr(.07,.3,4,8),_t(s,cn));M.position.set(.2*S,.58,0),M.rotation.z=-.18*S,T.add(this.reg(M));const C=this.glowBox(.025,.22,.02,qe,.2*S,.6,.065);C.rotation.z=-.18*S,T.add(C)}else if(e.ear==="antenna"){const S=this.cyl(.018,.018,.34,ft,.12,.54,0,6);S.rotation.z=-.4,T.add(S),T.add(this.glowSphere(.05,o,.19,.7,0)),T.add(this.box(.12,.05,.08,ft,.1,.38,0))}else if(e.ear==="headgear"){const S=new re(new Dt(.44,.035,8,20,Math.PI),_t(bn));S.position.y=.06,T.add(this.reg(S));for(const M of[-1,1]){const C=this.cyl(.13,.13,.08,ft,.45*M,0,0,12);C.rotation.z=Math.PI/2,T.add(C);const I=new re(new qt(.08,.08,.02,12),gt(qe,1.4));I.rotation.z=Math.PI/2,I.position.set(.5*M,0,0),T.add(this.reg(I))}}}setExpression(e){this.expression=e,e==="smile"?this.mouth.scale.set(1.35,1.3,1):e==="serious"?this.mouth.scale.set(.6,.4,1):this.mouth.scale.set(1,1,1);for(const t of[-1,1]){const i=this.head.getObjectByName(`brow${t}`);i&&(i.rotation.z=e==="serious"?-.45*t:e==="smile"?.25*t:0)}}setFlash(e){if(this.flash!==e){this.flash=e;for(const t of this.allMats)e?(t.m.emissive.setHex(16722474),t.m.emissiveIntensity=Math.max(.85,t.ei)):(t.m.emissive.copy(t.em),t.m.emissiveIntensity=t.ei)}}setBank(e){this.bank=e}setLean(e){this.lean=e}setThruster(e){this.thrusterOn=e}setLocomotion(e){}triggerSwing(e){this.swingAt=e}setFallen(e){this.fallen=e}setCelebrate(e){this.celebrate=e,e||(this.inner.rotation.y=0)}get isFallen(){return this.fallen}update(e){const t=e/1e3,i=this.fallen?1:0;this.fallT+=(i-this.fallT)*.12,this.inner.rotation.x=-this.fallT*Math.PI*.48+this.lean*(1-this.fallT),this.inner.rotation.z=this.bank*(1-this.fallT),this.inner.position.y=-this.fallT*.4,this.fallen||(this.celebrate?(this.inner.position.y=Math.abs(Math.sin(t*7))*.22,this.inner.rotation.y=Math.sin(t*3.5)*.7):(this.inner.position.y=Math.sin(t*2.1)*.035,this.head.rotation.z=Math.sin(t*.9)*.05,this.head.rotation.x=Math.sin(t*1.3)*.03));const s=e%3400<110?.12:1,r=this.expression==="smile"?.45:s;for(const o of this.eyes)o.scale.y=1.25*r;if(this.swingAt>0){const o=(e-this.swingAt)/260;o>=1?(this.swingAt=-1,this.armR.rotation.x=-.15):this.armR.rotation.x=-.15-Math.sin(o*Math.PI)*1.9}this.thrusterT+=((this.thrusterOn?1:0)-this.thrusterT)*.28;const a=this.thrusterT>.03;for(let o=0;o<this.flames.length;o++){const l=this.flames[o];if(l.visible=a,!a)continue;const c=.8+.3*Math.sin(e*.045+o*1.7)+.15*Math.sin(e*.11+o);l.scale.set(.85+.15*this.thrusterT,Math.max(.01,this.thrusterT*c),.85+.15*this.thrusterT)}this.coreMat&&!this.flash&&(this.coreMat.emissiveIntensity=1.4+Math.sin(t*3)*.35)}}function d0(n,e=6){const t=new R_;t.background=new Ee(n),t.add(new xx(9412808,.5));const i=new Co(15266047,1.5);i.position.set(3,6,4).multiplyScalar(e>6?(e+4)/7.8:1),i.castShadow=!0;const s=e>6?2048:1024;i.shadow.mapSize.set(s,s),i.shadow.camera.left=-e,i.shadow.camera.right=e,i.shadow.camera.top=e,i.shadow.camera.bottom=-e,t.add(i);const r=new Co(4172031,1.3);r.position.set(-3,3.5,-5),t.add(r);const a=new Co(6978224,.3);return a.position.set(-4,2,2),t.add(a),{scene:t,lights:void 0}}function b1(n="#262c36"){const e=new ct,t=new re(new qt(.95,1.05,.16,28),_t(n,{metal:.75,rough:.4}));t.position.y=-.08,t.receiveShadow=!0,e.add(t);const i=new re(new qt(.8,.8,.03,28),_t("#343b47",{metal:.8,rough:.35}));i.position.y=.01,i.receiveShadow=!0,e.add(i);const s=new re(new Dt(.88,.022,8,48),gt(qe,1.5));s.rotation.x=Math.PI/2,s.position.y=.012,e.add(s);const r=new re(new Dt(.45,.012,6,36),gt(qe,.9));r.rotation.x=Math.PI/2,r.position.y=.03,e.add(r);for(let a=0;a<8;a++){const o=a/8*Math.PI*2,l=new re(new Lt(.12,.04,.05),_t(bn));l.position.set(Math.cos(o)*1,-.02,Math.sin(o)*1),l.rotation.y=-o,e.add(l)}return e}function E1(){const n=new nn(60,24,14),e=new rs({side:mn,depthWrite:!1,uniforms:{top:{value:new Ee("#05070f")},mid:{value:new Ee("#0c1428")},bottom:{value:new Ee("#0a0f1c")}},vertexShader:"varying vec3 vPos; void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; varying vec3 vPos;void main(){ vec3 n = normalize(vPos); float h = n.y; vec3 c = h > 0.1 ? mix(mid, top, smoothstep(0.1, 0.7, h)) : mix(bottom, mid, smoothstep(-0.1, 0.1, h)); float gx = step(0.965, fract(vPos.x * 0.12)); float gz = step(0.965, fract(vPos.z * 0.12)); float band = (1.0 - smoothstep(-0.02, 0.28, h)) * step(-0.06, h); c += vec3(0.08, 0.3, 0.42) * max(gx, gz) * band * 0.35; c += vec3(0.06, 0.26, 0.4) * exp(-abs(h - 0.015) * 30.0) * 0.7; gl_FragColor = vec4(c, 1.0); }"}),t=new re(n,e);t.renderOrder=-1;const i=420,s=new Float32Array(i*3);for(let o=0;o<i;o++){const l=Math.random()*Math.PI*2,c=.08+Math.random()*.9,u=56;s[o*3]=Math.cos(l)*Math.sqrt(1-c*c)*u,s[o*3+1]=c*u,s[o*3+2]=Math.sin(l)*Math.sqrt(1-c*c)*u}const r=new zt;r.setAttribute("position",new Rn(s,3));const a=new dm(r,new Zu({color:13624319,size:.42,sizeAttenuation:!0,transparent:!0,opacity:.8,depthWrite:!1}));return a.renderOrder=-1,t.add(a),t}function T1(n=3.8){const e=new ct,t=n/3.8,i=Math.min(t,2.2),s=4.6*t,r=S=>s+(S-4.6)*i,a=t>2?1.45:1,o=S=>_t(S,{metal:.62,rough:.48}),l=new re(new Ju(r(34),64),_t("#0b0e15",{metal:.4,rough:.85}));l.rotation.x=-Math.PI/2,l.position.y=-.92,l.receiveShadow=!0,e.add(l);const c=new re(new qt(r(6.6),r(6.9),.5,96),o("#161a22"));c.position.y=-.67,c.receiveShadow=!0,e.add(c);const u=new re(new qt(r(5.5),r(5.8),.34,96),o("#1d222c"));u.position.y=-.33,u.receiveShadow=!0,e.add(u);const h=new re(new qt(4.4*t,s,.16,96),o("#262d38"));h.position.y=-.08,h.receiveShadow=!0,e.add(h);for(const[S,M,C]of[[4.4,.04,1.6],[3.3,.018,.8],[2.1,.02,1],[1,.016,.8]]){const I=new re(new Dt(S*t,M*a,6,128),gt(qe,C));I.rotation.x=Math.PI/2,I.position.y=.006,e.add(I)}for(let S=0;S<12;S++){const M=S/12*Math.PI*2,C=new re(new Lt(.025*a,.008,3.3*t),gt(qe,.7));C.position.set(Math.cos(M)*2.65*t,.005,Math.sin(M)*2.65*t),C.rotation.y=-M+Math.PI/2,e.add(C)}const d=new re(new qt(.34*t,.34*t,.01,6),gt(qe,.9));if(d.position.y=.004,e.add(d),t>6){const S=new re(new Dt(n,.22,6,256),gt(qe,1.4));S.rotation.x=Math.PI/2,S.position.y=.02,e.add(S)}const f=new re(new Dt(r(5.5),.02*a,6,128),gt("#2a8fb0",.8));f.rotation.x=Math.PI/2,f.position.y=-.155,e.add(f);const g=r(7.4),_=new pt({color:4182271,transparent:!0,opacity:.07,side:un,depthWrite:!1}),m=new re(new qt(g,g,2.4,96,1,!0),_);m.position.y=.55,e.add(m);for(const S of[-.6,1.75]){const M=new re(new Dt(g,.025*a,6,160),gt(qe,1));M.rotation.x=Math.PI/2,M.position.y=S,e.add(M)}const p=new pt({color:6283519,transparent:!0,opacity:.16,side:un,depthWrite:!1}),v=Math.round(18*(g/7.4)),w=r(7.35);for(let S=0;S<v;S++){const M=S/v*Math.PI*2+.1,C=.6+S*7%5*.18,I=new re(new Pa(1.15,C),p);I.position.set(Math.cos(M)*w,.5+S*3%4*.12,Math.sin(M)*w),I.rotation.y=-M+Math.PI/2,e.add(I)}const y=r(9.6),R=Math.min(12,Math.max(6,Math.round(6*(y/9.6))));for(let S=0;S<R;S++){const M=S/R*Math.PI*2+Math.PI/R,C=Math.cos(M)*y,I=Math.sin(M)*y,F=(3.2+S%2*.9)*a,P=new re(new Lt(1.1*a,.3,1.1*a),_t("#1a1f28",{metal:.7,rough:.5}));P.position.set(C,-.77,I),P.castShadow=!0,P.receiveShadow=!0,e.add(P);const O=new re(new Lt(.7*a,F,.7*a),_t("#2a313c",{metal:.75,rough:.4}));O.position.set(C,-.62+F/2,I),O.rotation.y=-M,O.castShadow=!0,e.add(O);const V=new re(new Lt(.06,F*.7,.7*a+.02),gt(qe,1));V.position.set(C,-.62+F/2,I),V.rotation.y=-M,e.add(V);const H=new re(new Lt(.9*a,.2,.9*a),_t("#1a1f28",{metal:.7,rough:.5}));H.position.set(C,-.62+F+.1,I),H.rotation.y=-M,e.add(H);const J=new re(new nn(.12*a,12,10),gt(S%2?"#ff9b3d":qe,1.8));J.position.set(C,-.62+F+.3,I),e.add(J)}if(n>3.8)for(const[S,M]of Jn.entries()){const C=Math.atan2(M.x,M.z),I=new re(new qt(M.r+.16,M.r+.2,.22,8),_t("#1a1f28",{metal:.7,rough:.5}));I.position.set(M.x,.11,M.z),I.rotation.y=C,I.castShadow=!0,I.receiveShadow=!0,e.add(I);const F=new re(new qt(M.r*.94,M.r,M.h,8),_t("#2a313c",{metal:.75,rough:.4}));F.position.set(M.x,M.h/2,M.z),F.rotation.y=C,F.castShadow=!0,F.receiveShadow=!0,e.add(F);const P=new re(new Lt(.07,M.h*.7,M.r*2*.93+.04),gt(qe,1));P.position.set(M.x,M.h*.5,M.z),P.rotation.y=C+Math.PI/8,e.add(P);const O=new re(new qt(M.r*1.1,M.r*1.1,.2,8),_t("#1a1f28",{metal:.7,rough:.5}));O.position.set(M.x,M.h+.1,M.z),O.rotation.y=C,O.castShadow=!0,e.add(O);const V=new re(new nn(.12,12,10),gt(S%2?"#ff9b3d":qe,1.8));V.position.set(M.x,M.h+.3,M.z),e.add(V);const H=new re(new Dt(M.r+.32,.02,6,40),gt(qe,.8));H.rotation.x=Math.PI/2,H.position.set(M.x,.01,M.z),e.add(H)}const T=[[4.9,1.35,-1.4],[-4.9,1.35,1.4],[1.6,2.6,5.6],[-1.2,2.3,-5.9]];for(const[S,M,C]of T){const I=new ct,F=new re(new ju(.28),gt(qe,1.2));F.castShadow=!0,I.add(F);const P=new re(new Dt(.42,.03,6,24),_t("#3b424d",{metal:.8,rough:.35}));P.rotation.x=Math.PI/2,I.add(P);const O=new re(new nn(.06,8,8),gt("#ff9b3d",2));O.position.set(0,0,.3),I.add(O);const V=r(Math.hypot(S,C))/Math.hypot(S,C);I.position.set(S*V,M,C*V),I.name="crystal",I.userData.baseY=M,e.add(I)}const x=Math.min(20,Math.round(12*i)),b=t>2?2:1;for(let S=0;S<x;S++){const M=S/x*Math.PI*2+.25+S*53%10/40,C=r(15+S*29%6),I=(3+S*37%14/2.2)*b,F=1.8*a,P=new re(new Lt(F,I,F),_t(S%2?"#121620":"#181d28",{metal:.6,rough:.6}));P.position.set(Math.cos(M)*C,I/2-.92,Math.sin(M)*C),P.rotation.y=M,e.add(P);for(let O=0;O<3;O++){const V=new re(new Lt(F+.04,.05*a,F+.04),gt(O%2?qe:"#2a7fa0",.9));V.position.set(Math.cos(M)*C,-.92+I*(.25+O*.25),Math.sin(M)*C),V.rotation.y=M,e.add(V)}}return e}function qf(n,e){if(e===zg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===iu||e===jp){let t=n.getIndex();if(t===null){const r=[],a=n.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);n.setIndex(r),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===iu)for(let r=1;r<=i;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(s),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function f0(n){const e=new Map,t=new Map,i=n.clone();return p0(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function p0(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)p0(n.children[i],e.children[i],t)}class A1 extends _r{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new I1(t)}),this.register(function(t){return new P1(t)}),this.register(function(t){return new N1(t)}),this.register(function(t){return new H1(t)}),this.register(function(t){return new V1(t)}),this.register(function(t){return new W1(t)}),this.register(function(t){return new U1(t)}),this.register(function(t){return new F1(t)}),this.register(function(t){return new O1(t)}),this.register(function(t){return new B1(t)}),this.register(function(t){return new L1(t)}),this.register(function(t){return new k1(t)}),this.register(function(t){return new D1(t)}),this.register(function(t){return new G1(t)}),this.register(function(t){return new z1(t)}),this.register(function(t){return new R1(t)}),this.register(function(t){return new Yf(t,Ke.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Yf(t,Ke.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new X1(t)})}load(e,t,i,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Yr.extractUrlBase(e);a=Yr.resolveURL(c,this.path)}else a=Yr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Mm(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===m0){try{a[Ke.KHR_BINARY_GLTF]=new $1(e)}catch(h){s&&s(h);return}r=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new rA(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ke.KHR_MATERIALS_UNLIT:a[h]=new C1;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[h]=new q1(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[h]=new Y1;break;case Ke.KHR_MESH_QUANTIZATION:a[h]=new K1;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function w1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Et(n,e,t){const i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class R1{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ee(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ln);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Co(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new gx(u),c.distance=h;break;case"spot":c=new px(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ai(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class C1{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return pt}extendParams(e,t,i){const s=[];e.color=new Ee(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ln),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Qt))}return Promise.all(s)}}class L1{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=Et(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class I1{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const i=Et(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(r,r)}return Promise.all(s)}}class P1{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const i=Et(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(s)}}class N1{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const i=Et(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class D1{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const i=Et(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}}class U1{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const i=Et(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Ln)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Qt)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}}class F1{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const i=Et(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}}class O1{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const i=Et(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const r=i.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(r[0],r[1],r[2],Ln),Promise.all(s)}}class B1{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const i=Et(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class k1{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const i=Et(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const r=i.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(r[0],r[1],r[2],Ln),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Qt)),Promise.all(s)}}class z1{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const i=Et(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}}class G1{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const i=Et(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}}class H1{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class V1{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class W1{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class Yf{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class X1{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==On.TRIANGLES&&c.mode!==On.TRIANGLE_STRIP&&c.mode!==On.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const _=new ze,m=new N,p=new wn,v=new N(1,1,1),w=new G_(g.geometry,g.material,d);for(let R=0;R<d;R++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,R),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,R),l.SCALE&&v.fromBufferAttribute(l.SCALE,R),w.setMatrixAt(R,_.compose(m,p,v));let y=null;for(const R in l)if(R==="_COLOR_0"){const T=l[R];w.instanceColor=new Ho(T.array,T.itemSize,T.normalized)}else if(R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"){if(y===null){const x=w.geometry;y=new zt,y.name=x.name;for(const b in x.attributes)y.setAttribute(b,x.attributes[b]);for(const b in x.morphAttributes)y.morphAttributes[b]=x.morphAttributes[b];x.index!==null&&y.setIndex(x.index),y.morphTargetsRelative=x.morphTargetsRelative;for(const b of x.groups)y.addGroup(b.start,b.count,b.materialIndex);x.boundingBox!==null&&(y.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(y.boundingSphere=x.boundingSphere.clone()),y.drawRange.start=x.drawRange.start,y.drawRange.count=x.drawRange.count,y.userData=Object.assign({},x.userData),w.geometry=y}const T=l[R];y.setAttribute(R,new Ho(T.array,T.itemSize,T.normalized))}xt.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const m0="glTF",Ir=12,Kf={JSON:1313821514,BIN:5130562};class $1{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ir),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==m0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ir,r=new DataView(e,Ir);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Kf.JSON){const c=new Uint8Array(e,Ir+a,o);this.content=i.decode(c)}else if(l===Kf.BIN){const c=Ir+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class q1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=du[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=du[u]||u.toLowerCase();if(a[u]!==void 0){const d=i.accessors[e.attributes[u]],f=tr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},o,c,Ln,d)})})}}class Y1{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class K1{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class g0 extends pr{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(i-t)/u,d=h*h,f=d*h,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,v=1-m,w=p-d+h;for(let y=0;y!==o;y++){const R=a[_+y+o],T=a[_+y+l]*u,x=a[g+y+o],b=a[g+y]*u;r[y]=v*R+w*T+m*x+p*b}return r}}const Z1=new wn;class J1 extends g0{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return Z1.fromArray(r).normalize().toArray(r),r}}const On={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},tr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zf={9728:Ut,9729:tn,9984:Wp,9985:Eo,9986:Fr,9987:ui},Jf={33071:ci,33648:Fo,10497:rr},hc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},du={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},j1={CUBICSPLINE:void 0,LINEAR:ca,STEP:la},dc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Q1(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new as({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ts})),n.DefaultMaterial}function _s(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ai(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function eA(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function tA(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function nA(n){let e;const t=n.extensions&&n.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fc(t.attributes):e=n.indices+":"+fc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+fc(n.targets[i]);return e}function fc(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function fu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function iA(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const sA=new ze;class rA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new w1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?(this.textureLoader=new dx(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new vx(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mm(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return _s(r,o,s),ai(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){i.load(Yr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=hc[s.type],o=tr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Rn(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=hc[s.type],c=tr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let w=t.cache.get(v);w||(_=new c(o,p*f,s.count*f/u),w=new P_(_,f/u),t.cache.add(v,w)),m=new Xu(w,l,d%f/u,g)}else o===null?_=new c(s.count*l):_=new c(o,d,s.count*l),m=new Rn(_,l,g);if(s.sparse!==void 0){const p=hc.SCALAR,v=tr[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,R=new v(a[1],w,s.sparse.count*p),T=new c(a[2],y,s.sparse.count*l);o!==null&&(m=new Rn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,b=R.length;x<b;x++){const S=R[x];if(m.setX(S,T[x*l]),l>=2&&m.setY(S,T[x*l+1]),l>=3&&m.setZ(S,T[x*l+2]),l>=4&&m.setW(S,T[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Zf[d.magFilter]||tn,u.minFilter=Zf[d.minFilter]||ui,u.wrapS=Jf[d.wrapS]||rr,u.wrapT=Jf[d.wrapT]||rr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ut&&u.minFilter!==tn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)u=i.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,g){t.parse(d,f,g)})});else{if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(d){return new Promise(function(f,g){let _=f;t.isImageBitmapLoader===!0&&(_=function(m){const p=new Kt(m);p.needsUpdate=!0,f(p)}),t.load(Yr.resolveURL(d,r.path),_,void 0,g)})})}const h=u.then(function(d){return c===!0&&o.revokeObjectURL(l),ai(d,a),d.userData.mimeType=a.mimeType||iA(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Zu,pi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new hm,pi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return as}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){const h=s[Ke.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ln),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Qt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=un);const u=r.alphaMode||dc.OPAQUE;if(u===dc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===dc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==pt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ve(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==pt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==pt){const h=r.emissiveFactor;o.emissive=new Ee().setRGB(h[0],h[1],h[2],Ln)}return r.emissiveTexture!==void 0&&a!==pt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Qt)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),ai(h,r),t.associations.set(h,{materials:e}),r.extensions&&_s(s,h,r),h})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return jf(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=nA(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=jf(new zt,c,t),c.mode===On.TRIANGLE_STRIP?d=d.then(f=>qf(f,jp)):c.mode===On.TRIANGLE_FAN&&(d=d.then(f=>qf(f,iu))),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?Q1(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=a[f];let p;const v=c[f];if(m.mode===On.TRIANGLES||m.mode===On.TRIANGLE_STRIP||m.mode===On.TRIANGLE_FAN||m.mode===void 0){const w=r.isSkinnedMesh===!0,y=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");w&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=w&&y?new B_(_,v):new re(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===On.LINES)p=new V_(_,v);else if(m.mode===On.LINE_STRIP)p=new Ku(_,v);else if(m.mode===On.LINE_LOOP)p=new W_(_,v);else if(m.mode===On.POINTS)p=new dm(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&tA(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ai(p,r),m.extensions&&_s(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&_s(s,h[0],r),h[0];const d=new ct;r.extensions&&_s(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new pn(zn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new th(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ai(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new ze;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new qu(o,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let w=0,y=d.length;w<y;w++){const R=d[w],T=f[w],x=g[w],b=_[w],S=m[w];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const M=i._createAnimationTracks(R,T,x,b,S);if(M)for(let C=0;C<M.length;C++)p.push(M[C])}const v=new au(r,void 0,p);return ai(v,s),v})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,sA)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){const f=u.userData.pivot,g=h[0];u.pivot=new N().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new um:c.length>1?u=new ct:c.length===1?u=c[0]:u=new xt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),ai(u,r),r.extensions&&_s(i,u,r),r.matrix!==void 0){const h=new ze;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new ct;i.name&&(r.name=s.createUniqueName(i.name)),ai(r,i),i.extensions&&_s(t,r,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){const d=l[u];d.parent!==null?r.add(f0(d)):r.add(d)}const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof pi||d instanceof Kt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Wi[r.path]===Wi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(Wi[r.path]){case Wi.weights:u=fa;break;case Wi.rotation:u=pa;break;case Wi.translation:case Wi.scale:u=Xo;break;default:switch(i.itemSize){case 1:u=fa;break;case 2:case 3:default:u=Xo;break}break}const h=s.interpolation!==void 0?j1[s.interpolation]:ca,d=this._getArrayFromAccessor(i);for(let f=0,g=l.length;f<g;f++){const _=new u(l[f]+"."+Wi[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=fu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof pa?J1:g0;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function aA(n,e,t){const i=e.attributes,s=new Zn;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),o.normalized){const u=fu(tr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new N,l=new N;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=fu(tr[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;const a=new Si;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function jf(n,e,t){const i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=du[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return Ze.workingColorSpace!==Ln&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),ai(n,e),aA(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?eA(n,e.targets,t):n})}const oA="./models/partner.glb",lA=2.35;let Pr=null;function cA(){return Pr||(Pr=new A1().loadAsync(oA).then(e=>{for(const t of e.animations)for(const i of t.tracks)if(i.name.endsWith(".position")&&i.name.includes("Hips")){const s=i.values,r=s[0],a=s[2];for(let o=0;o<s.length;o+=3)s[o]=r,s[o+2]=a}return e}),Pr.catch(()=>{Pr=null})),Pr}const uA=.2,Sn=2764600,Qf=3883597,xs=1382431,ep=16757575,tp=new N(0,1,0),Fn=[Math.PI/2,0,0],np=[0,0,Math.PI/2],hA={headTop:.3,eyeY:.12,faceZ:.1,headBackZ:-.1,headHalfW:.1,chestFrontZ:.12,chestBackZ:-.1},ip=new WeakMap,qi=zn.clamp;function dA(n,e,t){const i={...hA};if(e){let s=-1/0;for(let c=0;c<n.length;c+=3){const u=n[c+1];u>e.y&&u>s&&Math.abs(n[c]-e.x)<.2&&Math.abs(n[c+2]-e.z)<.25&&(s=u)}Number.isFinite(s)&&(i.headTop=qi(s-e.y,.15,.6)),i.eyeY=i.headTop*.4;const r=e.y+i.eyeY;let a=-1/0,o=1/0,l=0;for(let c=0;c<n.length;c+=3){if(Math.abs(n[c+1]-r)>.02)continue;const u=n[c]-e.x,h=n[c+2]-e.z;Math.abs(u)>.25||Math.abs(h)>.3||(l=Math.max(l,Math.abs(u)),Math.abs(u)<.03&&(a=Math.max(a,h),o=Math.min(o,h)))}Number.isFinite(a)&&(i.faceZ=qi(a,.02,.25)),Number.isFinite(o)&&(i.headBackZ=qi(o,-.25,-.02)),l>0&&(i.headHalfW=qi(l,.05,.2))}if(t){let s=-1/0,r=1/0;for(let a=0;a<n.length;a+=3){if(Math.abs(n[a+1]-t.y)>.03||Math.abs(n[a]-t.x)>.06)continue;const o=n[a+2]-t.z;Math.abs(o)>.4||(s=Math.max(s,o),r=Math.min(r,o))}Number.isFinite(s)&&(i.chestFrontZ=qi(s,.04,.3)),Number.isFinite(r)&&(i.chestBackZ=qi(r,-.3,-.03))}return i}function fA(n,e){const t=[],i=new ze,s=new N;n.traverse(o=>{const l=o;if(!l.isMesh)return;const c=l.geometry.getAttribute("position");if(!c)return;i.multiplyMatrices(e,l.matrixWorld);const u=new Float32Array(c.count*3);for(let h=0;h<c.count;h++)s.fromBufferAttribute(c,h).applyMatrix4(i),u[h*3]=s.x,u[h*3+1]=s.y,u[h*3+2]=s.z;t.push(u)});const r=new Float32Array(t.reduce((o,l)=>o+l.length,0));let a=0;for(const o of t)r.set(o,a),a+=o.length;return r}const sp=(n,e)=>new Ee(n).multiplyScalar(e),xo=(n,e)=>new Ee(n).lerp(new Ee(16777215),e),He=(n,e,t)=>new Lt(n,e,t),Xt=(n,e,t,i=10)=>new qt(n,e,t,i),ri=n=>new nn(n,12,10),Nr=(n,e,t=4)=>new oi(n,e,t);class _0{constructor(){Fe(this,"group",new ct);Fe(this,"inner",new ct);Fe(this,"weaponTip",new xt);Fe(this,"onFail",null);Fe(this,"mixer",null);Fe(this,"actions",new Map);Fe(this,"current",null);Fe(this,"mats",[]);Fe(this,"flash",!1);Fe(this,"tint",null);Fe(this,"fallen",!1);Fe(this,"fallT",0);Fe(this,"celebrate",!1);Fe(this,"celebrateAt",0);Fe(this,"swingAt",-1);Fe(this,"locomotion","idle");Fe(this,"lastNow",-1);Fe(this,"failed",!1);Fe(this,"config",null);Fe(this,"bodyTint",null);Fe(this,"mounts",null);Fe(this,"partGroups",[]);Fe(this,"attachMats",[]);Fe(this,"coreMat",null);this.group.add(this.inner),this.init()}async init(){var e;try{const t=await cA(),i=f0(t.scene);i.updateMatrixWorld(!0);const s=new Zn,r=new Zn;i.traverse(c=>{const u=c;u.isMesh&&(u.geometry.computeBoundingBox(),u.geometry.boundingBox&&(r.copy(u.geometry.boundingBox).applyMatrix4(u.matrixWorld),s.union(r)))});const a=s.max.y-s.min.y,o=a>0?lA/a:1;i.scale.setScalar(o),i.position.y=-s.min.y*o,i.traverse(c=>{const u=c;if(u.isMesh){u.castShadow=!0,u.frustumCulled=!1;const h=u.material;if(h&&"emissive"in h){const d=h.clone();d.metalness=Math.min(d.metalness*.45,.4),d.roughness=Math.max(d.roughness,.38),d.color.multiplyScalar(1.35),u.material=d,this.mats.push({m:d,em:d.emissive.clone(),ei:d.emissiveIntensity,c:d.color.clone()})}}}),this.inner.add(i);let l=null;i.traverse(c=>{!l&&/RightHand$/.test(c.name)&&(l=c)}),(l??i).add(this.weaponTip);try{this.mounts=this.setupMounts(t,i,l??i)}catch(c){console.warn("ModelDoll: アタッチメントの取り付けに失敗",c),this.mounts=null}this.mixer=new Nx(i);for(const c of t.animations){const u=this.mixer.clipAction(c);u.loop=Jp,this.actions.set(c.name,u)}this.config&&this.rebuildAttachments(),this.applyFlash(),this.applyTint(),this.applyLocomotion(!0)}catch{this.failed=!0,(e=this.onFail)==null||e.call(this)}}get isFailed(){return this.failed}playIdle(){this.setLocomotion("idle")}playMove(){this.setLocomotion("move")}playDash(){this.setLocomotion("dash")}setLocomotion(e){this.locomotion!==e&&(this.locomotion=e,this.applyLocomotion())}applyLocomotion(e=!1){if(!this.mixer)return;let t="Casual_Walk",i=.6;this.celebrate?(t="Casual_Walk",i=1.25):this.locomotion==="move"?(t="Walking",i=1.2):this.locomotion==="dash"&&(t="Running",i=1.3);const s=this.fallen?void 0:this.actions.get(t);if(s===this.current){s&&(s.timeScale=i);return}const r=this.current;r&&(e?r.stop():r.fadeOut(.22)),s&&(s.reset(),s.enabled=!0,s.timeScale=i,e?s.setEffectiveWeight(1):s.fadeIn(.22),s.play()),this.current=s??null}setExpression(e){}setFlash(e){this.flash!==e&&(this.flash=e,this.applyFlash())}applyFlash(){for(const e of[...this.mats,...this.attachMats])this.flash?(e.m.emissive.setHex(16722474),e.m.emissiveIntensity=Math.max(.85,e.ei)):(e.m.emissive.copy(e.em),e.m.emissiveIntensity=e.ei)}setTeamTint(e){this.tint=new Ee(e),this.applyTint()}applyTint(){for(const e of this.mats)e.m.color.copy(e.c),this.bodyTint&&e.m.color.multiply(this.bodyTint),this.tint&&e.m.color.multiply(this.tint)}applyConfig(e){this.config={...e},this.bodyTint=new Ee(16777215).lerp(new Ee(e.outfitColor),uA),this.applyTint(),this.mounts&&this.rebuildAttachments()}setupMounts(e,t,i){const s=[];t.traverse(_=>s.push(_));const r=(..._)=>{for(const m of _){const p=s.find(v=>m.test(v.name));if(p)return p}return null},a=r(/Head$/),o=r(/Spine2$/,/Spine1$/,/Spine$/),l=r(/RightHand$/),c=r(/LeftHand$/);this.inner.updateWorldMatrix(!0,!0);const u=new ze().copy(this.inner.matrixWorld).invert(),h=_=>new N().setFromMatrixPosition(_.matrixWorld).applyMatrix4(u);let d=ip.get(e);d||(d=dA(fA(t,u),a?h(a):null,o?h(o):null),ip.set(e,d));const f=_=>{if(!_)return null;const m=new N,p=new wn,v=new N;new ze().multiplyMatrices(u,_.matrixWorld).decompose(m,p,v);const w=new ct;return w.quaternion.copy(p).invert(),w.scale.setScalar(1/Math.max(1e-6,(Math.abs(v.x)+Math.abs(v.y)+Math.abs(v.z))/3)),_.add(w),w},g=(_,m)=>{if(!_||!m)return new N;const p=h(m).sub(h(_)).multiplyScalar(.55);return p.length()>.12?p.setLength(.12):p};return{head:f(a),chest:f(o),hand:f(l),handL:f(c),grip:g(l,r(/RightHandMiddle1$/)),gripL:g(c,r(/LeftHandMiddle1$/)),tipHome:i,metrics:d}}clearAttachments(){this.mounts&&this.weaponTip.parent!==this.mounts.tipHome&&(this.weaponTip.position.set(0,0,0),this.mounts.tipHome.add(this.weaponTip));for(const e of this.partGroups)e.removeFromParent(),e.traverse(t=>{const i=t;i.isMesh&&(i.geometry.dispose(),i.material.dispose())});this.partGroups=[],this.attachMats=[],this.coreMat=null}rebuildAttachments(){if(this.clearAttachments(),!(!this.config||!this.mounts)){try{this.buildAttachments(this.config,this.mounts)}catch(e){console.warn("ModelDoll: アタッチメントの生成に失敗",e),this.clearAttachments()}this.applyFlash()}}parts(e,t){const i=new ct;return t&&i.position.copy(t),e.add(i),this.partGroups.push(i),i}part(e,t,i,s,r=[0,0,0]){const a=new re(t,i);return a.position.set(s[0],s[1],s[2]),a.rotation.set(r[0],r[1],r[2]),a.castShadow=!0,e.add(a),this.attachMats.push({m:i,em:i.emissive.clone(),ei:i.emissiveIntensity,c:i.color.clone()}),a}rod(e,t,i,s,r,a){const o=i.clone().normalize(),l=this.part(e,Xt(r,r,s,8),a,[0,0,0]);return l.position.copy(t).addScaledVector(o,s/2),l.quaternion.setFromUnitVectors(tp,o),t.clone().addScaledVector(o,s)}metal(e,t=.7,i=.42){return new as({color:e,metalness:t,roughness:i})}lit(e,t=1.4,i){const s=new as({color:e,emissive:e,emissiveIntensity:t,metalness:.2,roughness:.3});return i!==void 0&&(s.transparent=!0,s.opacity=i,s.depthWrite=!1),s}accent(e,t,i,s,r,a=[0,0,0]){if(t.outfitPattern==="stripe")this.part(e,He(s,.012,.006),this.lit(i,1.3),r,a);else if(t.outfitPattern==="dot"){const o=new ct;o.position.set(r[0],r[1],r[2]),o.rotation.set(a[0],a[1],a[2]),e.add(o);for(const l of[-1,0,1])this.part(o,ri(.011),this.lit(i,1.6),[l*s*.35,0,0])}}buildAttachments(e,t){const i=e.outfitPattern==="check",s=new Ee(e.hairColor),r=i?xo(s,.55):sp(s,.55),a=new Ee(e.outfitColor),o=i?xo(a,.55):sp(a,.55),l=xo(e.eyeColor,.3),c=xo(a,.35);if(t.head&&this.buildHead(e,t.head,t.metrics,s,r,l),t.chest&&this.buildChest(e,t.chest,t.metrics,a,o,l,c),t.hand){const u=this.parts(t.hand,t.grip);this.buildWeapon(e,u,a,o,l,!0)}e.weapon==="dagger"&&t.handL&&this.buildWeapon(e,this.parts(t.handL,t.gripL),a,o,l,!1)}buildHead(e,t,i,s,r,a){const o=this.parts(t),l=qi(i.headTop/.3,.7,1.3),c=i.headTop,u=i.eyeY,h=i.headHalfW,d=(i.faceZ+i.headBackZ)/2,f=(_,m,p)=>new N(_,m,p),g=qi(h*1.3,.07,.18);switch(this.part(o,He(g,.022*l,.01),this.lit(a,1.6),[0,u,i.faceZ+.004]),e.hairStyle){case"bob":{this.part(o,He(.05*l,.02*l,.14*l),this.metal(r),[0,c-.004,d]);const _=this.part(o,He(.018*l,.08*l,.16*l),this.metal(s),[0,c+.035*l,d-.01],[.12,0,0]);this.part(_,He(.02*l,.01,.13*l),this.lit(a,1.4),[0,.042*l,0]),this.accent(_,e,a,.1*l,[.0105*l,0,0],[0,Math.PI/2,0]);break}case"twin":{for(const _ of[-1,1]){const m=f(_*h*.72,c-.03*l,d);this.part(o,Xt(.022*l,.026*l,.03*l),this.metal(r),[m.x,m.y,m.z],[0,0,-.5*_]);const p=this.rod(o,m,f(.45*_,1,-.15),.2*l,.008*l,this.metal(s));this.part(o,ri(.017*l),this.lit(a,1.6),[p.x,p.y,p.z])}break}case"long":{const _=f(h*.45,c-.015,d-.02);this.part(o,He(.04*l,.03*l,.05*l),this.metal(r),[_.x,_.y,_.z]);const m=this.rod(o,_,f(.2,1,-.5),.34*l,.008*l,this.metal(s));this.part(o,ri(.02*l),this.lit(a,1.6),[m.x,m.y,m.z]);break}case"ponytail":{const _=this.part(o,He(.018*l,.06*l,.26*l),this.metal(s),[0,c-.035*l,i.headBackZ-.05*l],[.4,0,0]);this.part(_,He(.02*l,.01,.22*l),this.lit(a,1.4),[0,.032*l,0]),this.accent(_,e,a,.14*l,[.0105*l,0,0],[0,Math.PI/2,0]);break}case"braid":{const _=u+.02,m=i.headBackZ-.005;this.part(o,He(.1*l,.03*l,.035*l),this.metal(r),[0,_,m]);for(const p of[-1,0,1]){const v=this.rod(o,f(p*.028*l,_,m-.01),f(p*.08,-1,-.3),.2*l,.011*l,this.metal(p===0?r:s));this.part(o,ri(.014*l),this.lit(a,1.5),[v.x,v.y,v.z])}break}case"short":{for(const _ of[-1,1])this.part(o,He(.014*l,.045*l,.1*l),this.metal(s),[_*(h+.004),u+.045*l,d-.015],[.25,0,-.3*_]),this.part(o,ri(.01*l),this.lit(a,1.6),[_*(h+.012),u+.045*l,d+.03*l]);break}}switch(e.ear){case"cat":{for(const _ of[-1,1]){const m=_*h*.5;this.part(o,Nr(.032*l,.075*l),this.metal(r),[m,c+.02*l,d],[0,0,-.3*_]),this.part(o,Nr(.016*l,.045*l),this.lit(a,1.3),[m,c+.015*l,d+.016*l],[0,0,-.3*_])}break}case"antenna":{const _=-(h+.008);this.part(o,He(.025,.05*l,.05*l),this.metal(Sn),[_,u,d]);const m=this.rod(o,f(_-.004,u+.02*l,d),f(-.15,1,-.1),.22*l,.006*l,this.metal(Sn));this.part(o,ri(.018*l),this.lit(a,1.6),[m.x,m.y,m.z]);break}case"rabbit":{for(const _ of[-1,1]){const m=this.part(o,He(.03*l,.2*l,.045*l),this.metal(s),[_*h*.42,c+.085*l,d-.01],[0,0,-.15*_]);this.part(m,He(.012*l,.15*l,.006),this.lit(a,1.4),[0,0,.0225*l+.003])}break}case"headgear":{const _=this.part(o,new Dt(h+.012,.012*l,6,20,Math.PI),this.metal(xs),[0,u+.01,d]);_.scale.y=Math.max(1,(c-u+.005)/(h+.012));for(const m of[-1,1])this.part(o,Xt(.04*l,.04*l,.03*l,12),this.metal(Sn),[m*(h+.012),u+.01,d],np),this.part(o,Xt(.025*l,.025*l,.006,12),this.lit(a,1.4),[m*(h+.012+.018*l),u+.01,d],np);this.part(o,He(g+.02,.036*l,.008),this.metal(xs),[0,u,i.faceZ]);break}}}buildChest(e,t,i,s,r,a,o){const l=this.parts(t),c=i.chestFrontZ,u=i.chestBackZ;this.part(l,Xt(.042,.042,.012,6),this.metal(xs),[0,0,c+.002],Fn);const h=this.part(l,Xt(.028,.028,.012,6),this.lit(o,1.5),[0,0,c+.007],Fn);if(this.coreMat=h.material,e.back!=="none")switch(this.part(l,He(.16,.18,.05),this.metal(Sn),[0,.02,u-.02]),e.back){case"wing":{for(const d of[-1,1]){this.part(l,He(.14,.03,.03),this.metal(Qf),[d*.1,.06,u-.05]);const f=this.part(l,He(.42,.09,.02),this.metal(s),[d*.32,.17,u-.07],[0,-.25*d,.5*d]);this.part(f,He(.38,.012,.024),this.lit(a,1.4),[0,.045,0]),this.accent(f,e,a,.24,[0,-.01,-.012]),this.part(l,He(.3,.07,.02),this.metal(r),[d*.26,.02,u-.07],[0,-.25*d,.18*d])}break}case"pack":{this.part(l,He(.28,.3,.13),this.metal(s),[0,0,u-.09]),this.part(l,He(.24,.05,.14),this.metal(r),[0,.16,u-.09]),this.accent(l,e,a,.2,[0,-.04,u-.157]);const d=this.rod(l,new N(.1,.18,u-.09),tp,.26,.007,this.metal(Sn));this.part(l,ri(.02),this.lit(a,1.6),[d.x,d.y,d.z]);for(const f of[-1,1])this.part(l,Xt(.03,.038,.06),this.metal(xs),[f*.08,-.18,u-.09]);break}case"jet":{this.part(l,He(.26,.3,.12),this.metal(Sn),[0,.02,u-.08]),this.part(l,He(.28,.06,.13),this.metal(s),[0,.17,u-.08]),this.part(l,He(.18,.012,.006),this.lit(a,1.3),[0,.06,u-.143]),this.accent(l,e,a,.18,[0,-.04,u-.143]);for(const d of[-1,1])this.part(l,Xt(.045,.06,.12,12),this.metal(xs),[d*.075,-.18,u-.08]),this.part(l,Xt(.04,.04,.012,12),this.lit(ep,1.2),[d*.075,-.245,u-.08]),this.part(l,Nr(.03,.1,10),this.lit(a,1.6,.55),[d*.075,-.3,u-.08],[Math.PI,0,0]);break}case"ribbon":{this.part(l,Xt(.05,.05,.04,8),this.metal(Sn),[0,.04,u-.06],Fn),this.part(l,ri(.022),this.lit(a,1.6),[0,.04,u-.082]);for(const d of[-1,1]){const f=this.part(l,He(.22,.08,.02),this.metal(s),[d*.15,.07,u-.06],[0,0,.45*d]);this.accent(f,e,a,.16,[0,0,-.012]);for(const g of[0,1]){const _=this.rod(l,new N(d*(.03+g*.03),0,u-.06),new N(d*.15,-1,-.12),.26-g*.05,.008,this.metal(r));this.part(l,ri(.012),this.lit(a,1.5),[_.x,_.y,_.z])}}break}}}buildWeapon(e,t,i,s,r,a){let o=[0,0,0];switch(e.weapon){case"blade":{this.part(t,Xt(.022,.022,.16,8),this.metal(Sn),[0,0,0],Fn),this.part(t,He(.04,.13,.035),this.metal(i),[0,0,.095]),this.accent(t,e,r,.08,[.021,0,.095],[0,0,Math.PI/2]),this.part(t,He(.016,.055,.58),this.lit(r,1.6),[0,0,.405]),this.part(t,He(.008,.025,.58),this.lit(16777215,1.2),[0,0,.405]);const l=this.part(t,Nr(.04,.12),this.lit(r,1.6),[0,0,.755],Fn);l.scale.x=.4,o=[0,0,.8];break}case"blaster":{this.part(t,He(.085,.12,.32),this.metal(Sn),[0,0,.08]),this.part(t,He(.06,.04,.26),this.metal(i),[0,.08,.07]),this.part(t,He(.1,.09,.12),this.metal(s),[0,0,.24]);for(const l of[-1,1])this.part(t,He(.006,.03,.16),this.lit(r,1.4),[l*.045,.02,.07]);this.accent(t,e,r,.14,[.0435,-.03,.07],[0,Math.PI/2,0]),this.part(t,Xt(.03,.03,.2),this.metal(Qf),[0,0,.38],Fn),this.part(t,new Dt(.04,.012,8,16),this.lit(r,1.6),[0,0,.48]),o=[0,0,.5];break}case"wand":{this.part(t,Xt(.018,.018,.8,8),this.metal(Sn),[0,0,.2],Fn),this.part(t,Xt(.032,.032,.08,8),this.metal(i),[0,0,.52],Fn),this.part(t,ri(.065),this.lit(r,1.6),[0,0,.66]),this.part(t,new Dt(.1,.014,8,20),this.metal(s),[0,0,.66]);for(let l=0;l<3;l++){const c=l/3*Math.PI*2;this.part(t,He(.022,.07,.16),this.metal(i),[Math.cos(c)*.06,Math.sin(c)*.06,.58],[0,0,c-Math.PI/2])}this.accent(t,e,r,.12,[0,.02,.3],[0,Math.PI/2,0]),o=[0,0,.66];break}case"hammer":{this.part(t,Xt(.025,.025,.7,8),this.metal(Sn),[0,0,.25],Fn),this.part(t,He(.16,.3,.16),this.metal(i),[0,0,.66]),this.part(t,He(.18,.05,.18),this.metal(s),[0,.165,.66]),this.part(t,He(.165,.015,.165),this.lit(r,1.4),[0,.05,.66]),this.accent(t,e,r,.12,[.082,-.04,.66],[0,Math.PI/2,0]),this.part(t,Xt(.05,.065,.08,12),this.metal(xs),[0,-.19,.66]),this.part(t,He(.06,.012,.06),this.lit(ep,1),[0,-.232,.66]),o=[0,.1,.66];break}case"missile":{this.part(t,He(.16,.14,.3),this.metal(Sn),[0,0,.1]),this.part(t,He(.17,.03,.26),this.metal(i),[0,.085,.09]);for(const l of[-1,1])for(const c of[-1,1])this.part(t,Xt(.028,.028,.04),this.metal(xs),[l*.04,c*.035,.27],Fn),this.part(t,He(.025,.025,.012),this.lit(r,1.4),[l*.04,c*.035,.29]);this.part(t,He(.03,.03,.05),this.lit(r,1.6),[.095,.06,.2]),this.accent(t,e,r,.12,[.081,-.03,.1],[0,Math.PI/2,0]),o=[0,0,.3];break}case"dagger":{this.part(t,Xt(.018,.018,.11,8),this.metal(Sn),[0,0,0],Fn),this.part(t,He(.03,.09,.03),this.metal(i),[0,0,.065]),this.accent(t,e,r,.05,[.016,0,.065],[0,0,Math.PI/2]),this.part(t,He(.012,.045,.28),this.lit(r,1.6),[0,0,.22]);const l=this.part(t,Nr(.03,.08),this.lit(r,1.6),[0,0,.4],Fn);l.scale.x=.4,o=[0,0,.42];break}}a&&(this.weaponTip.position.set(o[0],o[1],o[2]),t.add(this.weaponTip))}setBank(e){}setLean(e){}setThruster(e){}triggerSwing(e){this.swingAt=e}setFallen(e){this.fallen!==e&&(this.fallen=e,this.applyLocomotion())}setCelebrate(e){this.celebrate!==e&&(this.celebrate=e,e&&(this.celebrateAt=this.lastNow>0?this.lastNow:0),this.applyLocomotion())}get isFallen(){return this.fallen}update(e){const t=this.lastNow<0?0:Math.min(.05,Math.max(0,(e-this.lastNow)/1e3));this.lastNow=e,this.mixer&&t>0&&this.mixer.update(t);const i=this.fallen?1:0;this.fallT+=(i-this.fallT)*.12;let s=0,r=0;if(this.swingAt>0){const o=(e-this.swingAt)/260;if(o>=1)this.swingAt=-1;else{const l=Math.sin(o*Math.PI);s=l*.38,r=l*.16}}let a=0;if(this.celebrate&&!this.fallen){const o=(e-this.celebrateAt)/1e3;a=Math.abs(Math.sin(o*7))*.22,this.inner.rotation.y=Math.sin(o*3.5)*.5}else this.inner.rotation.y=0;this.inner.rotation.x=-this.fallT*Math.PI*.48+r*(1-this.fallT),this.inner.position.y=-this.fallT*.4+a,this.inner.position.z=s*(1-this.fallT),this.coreMat&&!this.flash&&(this.coreMat.emissiveIntensity=1.35+Math.sin(e/1e3*3)*.3)}}const x0="pocket-partner-muted";let jt=null,Ni=null,Jr=null,xl=pA();const rp=new Map;function pA(){try{return typeof localStorage<"u"&&localStorage.getItem(x0)==="1"}catch{return!1}}function mA(){if(typeof window>"u")return null;const n=window;return n.AudioContext??n.webkitAudioContext??null}function v0(){try{if(!jt){const n=mA();if(!n)return;jt=new n;const e=jt.createDynamicsCompressor();e.threshold.value=-12,e.knee.value=6,e.ratio.value=12,e.attack.value=.002,e.release.value=.12,Ni=jt.createGain(),Ni.gain.value=xl?0:.5,Ni.connect(e),e.connect(jt.destination),Jr=jt.createBuffer(1,jt.sampleRate,jt.sampleRate);const t=Jr.getChannelData(0);for(let i=0;i<t.length;i++)t[i]=Math.random()*2-1}jt.state==="suspended"&&jt.resume().catch(()=>{})}catch{jt=null,Ni=null,Jr=null}}function gA(n){xl=n;try{typeof localStorage<"u"&&localStorage.setItem(x0,n?"1":"0")}catch{}try{jt&&Ni&&Ni.gain.setTargetAtTime(n?0:.5,jt.currentTime,.02)}catch{}}function M0(){return xl}function _A(n,e){if(xl||!jt||!Ni||!Jr||jt.state!=="running")return null;const t=jt.currentTime*1e3,i=rp.get(n);return i!==void 0&&t-i<e?null:(rp.set(n,t),jt)}function Ft(n,e,t,i,s,r=Ni){const a=n.createGain();return a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(t,e+i),a.gain.exponentialRampToValueAtTime(1e-4,e+i+s),a.connect(r),a}function vi(n,e,t,i){const s=n.createBufferSource();s.buffer=Jr,s.loop=!0,s.connect(i),s.start(e,Math.random()*.8),s.stop(e+t+.02)}function hr(n,e,t,i,s){const r=n.createBiquadFilter();return r.type=e,r.frequency.value=t,r.Q.value=i,r.connect(s),r}function Mi(n,e,t,i,s,r,a){const o=n.createOscillator();return o.type=e,o.frequency.setValueAtTime(s,t),r!==s&&o.frequency.exponentialRampToValueAtTime(Math.max(1,r),t+i),o.connect(a),o.start(t),o.stop(t+i+.02),o}function bi(n,e,t){try{const i=_A(n,e);i&&t(i,i.currentTime+.005)}catch{}}function xA(n=400){bi("charge",60,(e,t)=>{const i=Math.min(1.2,Math.max(.15,n/1e3)),s=e.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.linearRampToValueAtTime(.12,t+i*.85),s.gain.exponentialRampToValueAtTime(1e-4,t+i+.05),s.connect(Ni),Mi(e,"sine",t,i,220,880,s),Mi(e,"triangle",t,i,223,890,Ft(e,t,.03,i*.8,.1,s));const r=e.createBiquadFilter();r.type="bandpass",r.Q.value=6,r.frequency.setValueAtTime(600,t),r.frequency.exponentialRampToValueAtTime(3200,t+i),r.connect(Ft(e,t,.25,i*.9,.08,s)),vi(e,t,i,r)})}function y0(){bi("shoot",40,(n,e)=>{const t=n.createBiquadFilter();t.type="lowpass",t.Q.value=8,t.frequency.setValueAtTime(6e3,e),t.frequency.exponentialRampToValueAtTime(300,e+.18),t.connect(Ft(n,e,.32,.004,.2)),Mi(n,"sawtooth",e,.2,1800,160,t);const i=hr(n,"highpass",2500,.7,Ft(n,e,.12,.002,.07));vi(n,e,.08,i)})}function vA(){bi("swing",40,(n,e)=>{const t=n.createBiquadFilter();t.type="bandpass",t.Q.value=2.2,t.frequency.setValueAtTime(700,e),t.frequency.exponentialRampToValueAtTime(2600,e+.08),t.frequency.exponentialRampToValueAtTime(900,e+.2),t.connect(Ft(n,e,.4,.05,.17)),vi(n,e,.24,t)})}function bh(n=!1){bi("hit",45,(e,t)=>{const i=hr(e,"lowpass",n?2600:3800,.8,Ft(e,t,n?.55:.4,.002,n?.16:.09));vi(e,t,n?.2:.11,i);const s=hr(e,"bandpass",n?1300:1900,9,Ft(e,t,.18,.002,.12));vi(e,t,.14,s);const r=Ft(e,t,n?.6:.35,.003,n?.32:.13);Mi(e,"sine",t,n?.34:.15,n?150:200,n?42:70,r),n&&Mi(e,"triangle",t,.25,90,35,Ft(e,t,.25,.004,.24))})}function MA(){bi("guard",45,(n,e)=>{for(const[i,s,r]of[[2210,.1,.22],[3370,.07,.16],[5130,.05,.1]])Mi(n,"sine",e,r,i,i*.985,Ft(n,e,s,.001,r));const t=hr(n,"highpass",3e3,.7,Ft(n,e,.2,.001,.035));vi(n,e,.05,t)})}function yA(){bi("dash",120,(n,e)=>{const t=n.createBiquadFilter();t.type="bandpass",t.Q.value=1.4,t.frequency.setValueAtTime(500,e),t.frequency.exponentialRampToValueAtTime(1500,e+.14),t.connect(Ft(n,e,.08,.04,.12)),vi(n,e,.17,t)})}function S0(){bi("whiff",40,(n,e)=>{const t=n.createBiquadFilter();t.type="bandpass",t.Q.value=3,t.frequency.setValueAtTime(1200,e),t.frequency.exponentialRampToValueAtTime(3200,e+.1),t.connect(Ft(n,e,.2,.03,.09)),vi(n,e,.13,t)})}function SA(){bi("ko",300,(n,e)=>{const t=n.createBiquadFilter();t.type="lowpass",t.Q.value=6,t.frequency.setValueAtTime(4e3,e),t.frequency.exponentialRampToValueAtTime(200,e+.7),t.connect(Ft(n,e,.22,.01,.7)),Mi(n,"sawtooth",e,.7,900,60,t),Mi(n,"sine",e,.6,120,30,Ft(n,e,.7,.003,.6));const i=hr(n,"lowpass",1800,.7,Ft(n,e,.6,.002,.35));vi(n,e,.4,i)})}function bA(n){bi("result",500,(e,t)=>{const i=n?[523.25,659.25,783.99]:[392,329.63,261.63];i.forEach((s,r)=>{const a=t+r*.14,l=r===i.length-1?.5:.16,c=Ft(e,a,.16,.008,l);Mi(e,"triangle",a,l,s,s,c),Mi(e,"sine",a,l,s*2,s*2,Ft(e,a,.04,.008,l*.6))})})}function b0(){bi("click",30,(n,e)=>{const t=hr(n,"bandpass",2400,4,Ft(n,e,.15,.001,.025));vi(n,e,.03,t)})}const EA="modulepreload",TA=function(n,e){return new URL(n,e).href},ap={},AA=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let a=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(t.map(u=>{if(u=TA(u,i),u in ap)return;ap[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!i)for(let _=o.length-1;_>=0;_--){const m=o[_];if(m.href===u&&(!h||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":EA,h||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),h)return new Promise((_,m)=>{g.addEventListener("load",_),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};/*! Capacitor: https://capacitorjs.com/ - MIT License */var dr;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(dr||(dr={}));class pc extends Error{constructor(e,t,i){super(e),this.message=e,this.code=t,this.data=i}}const wA=n=>{var e,t;return n!=null&&n.androidBridge?"android":!((t=(e=n==null?void 0:n.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},RA=n=>{const e=n.CapacitorCustomPlatform||null,t=n.Capacitor||{},i=t.Plugins=t.Plugins||{},s=()=>e!==null?e.name:wA(n),r=()=>s()!=="web",a=h=>{const d=c.get(h);return!!(d!=null&&d.platforms.has(s())||o(h))},o=h=>{var d;return(d=t.PluginHeaders)===null||d===void 0?void 0:d.find(f=>f.name===h)},l=h=>n.console.error(h),c=new Map,u=(h,d={})=>{const f=c.get(h);if(f)return console.warn(`Capacitor plugin "${h}" already registered. Cannot register plugins twice.`),f.proxy;const g=s(),_=o(h);let m;const p=async()=>(!m&&g in d?m=typeof d[g]=="function"?m=await d[g]():m=d[g]:e!==null&&!m&&"web"in d&&(m=typeof d.web=="function"?m=await d.web():m=d.web),m),v=(b,S)=>{var M,C;if(_){const I=_==null?void 0:_.methods.find(F=>S===F.name);if(I)return I.rtype==="promise"?F=>t.nativePromise(h,S.toString(),F):(F,P)=>t.nativeCallback(h,S.toString(),F,P);if(b)return(M=b[S])===null||M===void 0?void 0:M.bind(b)}else{if(b)return(C=b[S])===null||C===void 0?void 0:C.bind(b);throw new pc(`"${h}" plugin is not implemented on ${g}`,dr.Unimplemented)}},w=b=>{let S;const M=(...C)=>{const I=p().then(F=>{const P=v(F,b);if(P){const O=P(...C);return S=O==null?void 0:O.remove,O}else throw new pc(`"${h}.${b}()" is not implemented on ${g}`,dr.Unimplemented)});return b==="addListener"&&(I.remove=async()=>S()),I};return M.toString=()=>`${b.toString()}() { [capacitor code] }`,Object.defineProperty(M,"name",{value:b,writable:!1,configurable:!1}),M},y=w("addListener"),R=w("removeListener"),T=(b,S)=>{const M=y({eventName:b},S),C=async()=>{const F=await M;R({eventName:b,callbackId:F},S)},I=new Promise(F=>M.then(()=>F({remove:C})));return I.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await C()},I},x=new Proxy({},{get(b,S){switch(S){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return _?T:y;case"removeListener":return R;default:return w(S)}}});return i[h]=x,c.set(h,{name:h,proxy:x,platforms:new Set([...Object.keys(d),..._?[g]:[]])}),x};return t.convertFileSrc||(t.convertFileSrc=h=>h),t.getPlatform=s,t.handleError=l,t.isNativePlatform=r,t.isPluginAvailable=a,t.registerPlugin=u,t.Exception=pc,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},CA=n=>n.Capacitor=RA(n),pu=CA(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),vl=pu.registerPlugin;class Eh{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let i=!1;this.listeners[e]||(this.listeners[e]=[],i=!0),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r),i&&this.sendRetainedArgumentsForEvent(e);const a=async()=>this.removeListener(e,t);return Promise.resolve({remove:a})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,i){const s=this.listeners[e];if(!s){if(i){let r=this.retainedEventArguments[e];r||(r=[]),r.push(t),this.retainedEventArguments[e]=r}return}s.forEach(r=>r(t))}hasListeners(e){var t;return!!(!((t=this.listeners[e])===null||t===void 0)&&t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:i=>{this.notifyListeners(t,i)}}}unimplemented(e="not implemented"){return new pu.Exception(e,dr.Unimplemented)}unavailable(e="not available"){return new pu.Exception(e,dr.Unavailable)}async removeListener(e,t){const i=this.listeners[e];if(!i)return;const s=i.indexOf(t);s!==-1&&this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(i=>{this.notifyListeners(e,i)}))}}const op=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),lp=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class LA extends Eh{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[s,r]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=lp(s).trim(),r=lp(r).trim(),t[s]=r}),t}async setCookie(e){try{const t=op(e.key),i=op(e.value),s=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",r=(e.path||"/").replace("path=",""),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${i||""}${s}; path=${r}; ${a};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}vl("CapacitorCookies",{web:()=>new LA});const IA=async n=>new Promise((e,t)=>{const i=new FileReader;i.onload=()=>{const s=i.result;e(s.indexOf(",")>=0?s.split(",")[1]:s)},i.onerror=s=>t(s),i.readAsDataURL(n)}),PA=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(s=>s.toLocaleLowerCase()).reduce((s,r,a)=>(s[r]=n[e[a]],s),{})},NA=(n,e=!0)=>n?Object.entries(n).reduce((i,s)=>{const[r,a]=s;let o,l;return Array.isArray(a)?(l="",a.forEach(c=>{o=e?encodeURIComponent(c):c,l+=`${r}=${o}&`}),l.slice(0,-1)):(o=e?encodeURIComponent(a):a,l=`${r}=${o}`),`${i}&${l}`},"").substr(1):null,DA=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),s=PA(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(s.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[a,o]of Object.entries(n.data||{}))r.set(a,o);t.body=r.toString()}else if(s.includes("multipart/form-data")||n.data instanceof FormData){const r=new FormData;if(n.data instanceof FormData)n.data.forEach((o,l)=>{r.append(l,o)});else for(const o of Object.keys(n.data))r.append(o,n.data[o]);t.body=r;const a=new Headers(t.headers);a.delete("content-type"),t.headers=a}else(s.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class UA extends Eh{async request(e){const t=DA(e,e.webFetchExtra),i=NA(e.params,e.shouldEncodeUrlParams),s=i?`${e.url}?${i}`:e.url,r=await fetch(s,t),a=r.headers.get("content-type")||"";let{responseType:o="text"}=r.ok?e:{};a.includes("application/json")&&(o="json");let l,c;switch(o){case"arraybuffer":case"blob":c=await r.blob(),l=await IA(c);break;case"json":l=await r.json();break;case"document":case"text":default:l=await r.text()}const u={};return r.headers.forEach((h,d)=>{u[d]=h}),{data:l,headers:u,status:r.status,url:r.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}vl("CapacitorHttp",{web:()=>new UA});var cp;(function(n){n.Dark="DARK",n.Light="LIGHT",n.Default="DEFAULT"})(cp||(cp={}));var up;(function(n){n.StatusBar="StatusBar",n.NavigationBar="NavigationBar"})(up||(up={}));class FA extends Eh{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}vl("SystemBars",{web:()=>new FA});var Zo;(function(n){n.Heavy="HEAVY",n.Medium="MEDIUM",n.Light="LIGHT"})(Zo||(Zo={}));var hp;(function(n){n.Success="SUCCESS",n.Warning="WARNING",n.Error="ERROR"})(hp||(hp={}));const OA=vl("Haptics",{web:()=>AA(()=>import("./web-Bh3gN9uF.js"),[],import.meta.url).then(n=>new n.HapticsWeb)});let dp=0;function E0(n){const e=performance.now();if(!(e<dp)){dp=e+300;try{OA.impact({style:n?Zo.Heavy:Zo.Medium}).catch(()=>{})}catch{}}}const Th="pocket-partner-save-v1",BA=["totalExp","level","training","trainingPool","energy","lastEnergyAt"],T0=10;function mc(n){const e=rh(null);return{config:e,coins:100,bond:0,noLevelMigrated:!0,owned:[],wins:0,streak:0,bestStreak:0,lastVisit:n,lastReview:null,battleHistory:[],gambits:uu(),gambitOff:[],rangeBand:Qm(e.weapon)}}function kA(){const n=Date.now(),e=localStorage.getItem(Th);if(!e)return{save:mc(n),welcomeText:null};try{const t=JSON.parse(e),i={...mc(n),...t,config:rh(t.config)};for(const o of BA)delete i[o];let s=t;t.noLevelMigrated!==!0&&(s=WT(t,i.config.weapon),i.noLevelMigrated=!0),i.lastReview=ZE(t.lastReview),i.battleHistory=Array.isArray(t.battleHistory)?t.battleHistory.slice(-T0):[],i.gambits=aT(s.gambits),i.gambitOff=r1(t.gambitOff,i.gambits),i.rangeBand=e0(s.rangeBand,i.config.weapon);const r=BE(n-i.lastVisit);let a=null;return r.coins>0&&(i.coins+=r.coins,a=`おかえり！ 留守の ${r.minutes} 分のあいだ、${i.config.name} は待機していた。
コイン +${r.coins}${r.capped?"（上限8時間分まで）":""}`),i.lastVisit=n,{save:i,welcomeText:a}}catch{return{save:mc(n),welcomeText:null}}}const{save:ee,welcomeText:fp}=kA();function Ls(){ee.lastVisit=Date.now(),localStorage.setItem(Th,JSON.stringify(ee))}function ve(n){const e=document.getElementById(n);if(!e)throw new Error(`要素 #${n} がありません`);return e}const zA=()=>Vm(ee.config.personality),jr=()=>zr(ee.wins),ws=()=>OE(ee.bond);function A0(n){ve("speech").textContent=Fa(ee.config.personality,n,ws(),Math.random())}const w0=ve("preview"),Oa=new Nm({canvas:w0,antialias:!0});Oa.setPixelRatio(Math.min(window.devicePixelRatio,2));Oa.setSize(340,360,!1);Oa.shadowMap.enabled=!0;Oa.shadowMap.type=Iu;const{scene:Ks}=d0(856608);Ks.add(b1());const Ah=new pn(38,340/360,.1,60);Ah.position.set(0,2,4.9);Ah.lookAt(0,1.2,0);let Bn=null;function Ml(){Bn&&Ks.remove(Bn.group);const n=new _0;n.applyConfig(ee.config),n.group.position.y=.02,Ks.add(n.group),Bn=n,n.onFail=()=>{if(Bn!==n)return;Ks.remove(n.group);const e=new h0(ee.config);e.group.position.y=.02,Ks.add(e.group),e.setExpression(ws()>=2?"smile":"normal"),Bn=e},n.setExpression(ws()>=2?"smile":"normal")}Ml();function GA(){Bn!=null&&Bn.applyConfig?Bn.applyConfig(ee.config):Ml()}let xa=!1,wh=0,mu=0,gu=.5;w0.addEventListener("pointerdown",n=>{xa=!0,wh=0,mu=n.clientX});window.addEventListener("pointermove",n=>{if(!xa)return;const e=n.clientX-mu;mu=n.clientX,wh+=Math.abs(e),gu+=e*.012});window.addEventListener("pointerup",()=>{xa&&wh<6&&A0("home"),xa=!1});let Jo="home";function HA(n,e){const t=st[e],i=(r,a)=>`<span><small>${r}</small><b>${a}</b></span>`,s=Math.round((n.aim+t.aim)*100);return i("機動",`×${(n.move*t.move).toFixed(2)}`)+i("反応",`${Math.round(n.dodge*100)}%`)+i("命中",`${s>=0?"+":""}${s}%`)}function Ba(){const n=zA(),e=jr();ve("st-level").innerHTML=`<span>${Ts(ee.config.name)}</span>`,ve("st-coins").innerHTML=`🪙 <b>${ee.coins}</b>`,ve("st-bond").textContent=`💗 絆 ${ee.bond}`,ve("st-rank").innerHTML=`🏅 <b>${e.rank.name}</b> <small>${e.next?`次まで${e.winsToNext}勝`:"MAX"}</small>`;const t=HA(n,ee.config.weapon)+`<span>武器 <em>${st[ee.config.weapon].label}</em></span><span>通算 <em>${ee.wins}</em>勝 / 連勝 <em>${ee.streak}</em>（最高 ${ee.bestStreak}）</span>`;ve("stats-view").innerHTML=t,ve("grow-stats").innerHTML=t,ve("personality-desc").innerHTML=`性格 <b>${jn[ee.config.personality].label}</b> ― ${jn[ee.config.personality].description}`,ve("weapon-profile").textContent=st[ee.config.weapon].profile,Ru()}const VA=[{selectId:"in-ear",value:"rabbit",partId:"ear:rabbit"},{selectId:"in-ear",value:"headgear",partId:"ear:headgear"},{selectId:"in-back",value:"jet",partId:"back:jet"},{selectId:"in-back",value:"ribbon",partId:"back:ribbon"},{selectId:"in-weapon",value:"hammer",partId:"weapon:hammer"},{selectId:"in-weapon",value:"dagger",partId:"weapon:dagger"}];function _u(){for(const n of VA){const e=ve(n.selectId);for(const t of Array.from(e.options))t.value===n.value&&(t.disabled=!ee.owned.includes(n.partId))}}function WA(){const n=ve("in-personality");for(const s of Yo){const r=document.createElement("option");r.value=s,r.textContent=jn[s].label,n.appendChild(r)}const e=(s,r)=>{ve(s).value=r};e("in-name",ee.config.name),e("in-personality",ee.config.personality),e("in-hair-style",ee.config.hairStyle),e("in-hair-color",ee.config.hairColor),e("in-eye-color",ee.config.eyeColor),e("in-outfit-color",ee.config.outfitColor),e("in-outfit-pattern",ee.config.outfitPattern),e("in-ear",ee.config.ear),e("in-weapon",ee.config.weapon),e("in-back",ee.config.back),_u();const t=(s,r)=>{const a=o=>{r(o.target.value),Ls(),Ba(),_u(),GA()};ve(s).addEventListener("input",a),ve(s).addEventListener("change",a)};t("in-name",s=>{ee.config.name=s||"ルミ"}),t("in-personality",s=>{ee.config.personality=s}),t("in-hair-style",s=>{ee.config.hairStyle=s}),t("in-hair-color",s=>{ee.config.hairColor=s}),t("in-eye-color",s=>{ee.config.eyeColor=s}),t("in-outfit-color",s=>{ee.config.outfitColor=s}),t("in-outfit-pattern",s=>{ee.config.outfitPattern=s}),t("in-ear",s=>{ee.config.ear=s}),t("in-weapon",s=>{ee.config.weapon=s}),t("in-back",s=>{ee.config.back=s});const i={"in-hair-color":["#e5639a","#5aa7e5","#57b96a","#e5a83c","#9a6ff0","#e56363","#3cb8a6","#666f7a"],"in-eye-color":["#4455cc","#2e8b57","#b3543f","#7a3ea8","#c9930a","#3c2b33"],"in-outfit-color":["#7a6ff0","#e5639a","#3cb8a6","#e5a83c","#5aa7e5","#e56363","#57b96a"]};for(const s of Array.from(document.querySelectorAll(".swatches"))){const r=s.dataset.for??"";for(const a of i[r]??[]){const o=document.createElement("button");o.style.background=a,o.title=a,o.addEventListener("click",()=>{const l=ve(r);l.value=a,l.dispatchEvent(new Event("input"))}),s.appendChild(o)}}ve("btn-reset").addEventListener("click",()=>{confirm("セーブを消して、はじめからやり直しますか？")&&(localStorage.removeItem(Th),location.reload())})}const XA={"ear:rabbit":"ロングセンサー","ear:headgear":"バイザーバンド","back:ribbon":"ケーブルユニット","back:jet":"スラスター"},$A=n=>XA[n.id]??n.label;for(const n of Array.from(document.querySelectorAll(".tab")))n.addEventListener("click",()=>{for(const e of Array.from(document.querySelectorAll(".tab")))e.classList.remove("active");n.classList.add("active"),Jo=n.dataset.tab??"home",Tl(!1),Cs();for(const e of["home","battle"])ve(`tab-${e}`).classList.toggle("hidden",e!==Jo)});ve("btn-pet").addEventListener("click",()=>{ee.bond+=3,ve("talk-line").textContent=`${Fa(ee.config.personality,"pet",ws(),Math.random())}（絆 +3）`,Ls(),Ba(),Ml()});ve("btn-talk").addEventListener("click",()=>{ee.bond+=2,ve("talk-line").textContent=`${Fa(ee.config.personality,"home",ws(),Math.random())}（絆 +2）`,Ls(),Ba(),Ml()});const yl=ah,qA=600;let xn=null;const R0=n=>n.destroyed?0:1,C0=n=>n.isPlayer?"player":"rival",Qr=1,YA=2.4,xu=Math.round((Qr-.62)*yl),L0=n=>n.range+26+xu,gc=Qr/2,I0=.1,Rh=1.6,Xn=1.5*1.4*Rh,vu=1.6*1.5*Rh,vo=1.4*Rh,pp=2.6,KA=35,di=1.35,ZA=850,JA=2,Mo=.35,jA=6,QA=.12,ew=.0025,mp=600,Ch=3.4*Xn,ea=n=>zn.clamp(n*2.1,3.2,6.4)*vu,va=n=>st[n.cfg.weapon].move*n.perf.move,tw=2.5,P0=3,nw=10;let Ye=null,sn=!1,Ot=0,Lh=!1,nr=null,ir=null,It=0,Ih=0,gp=0,Ph=0;const _c=900,iw=.3,jo=1200;let Ji=!1,N0=0,mi=0,Sl=0;const sw=150,Mu=ve("arena"),vr=new Nm({canvas:Mu,antialias:!0});vr.setPixelRatio(Math.min(window.devicePixelRatio,2));vr.setSize(640,360,!1);vr.shadowMap.enabled=!0;vr.shadowMap.type=Iu;const{scene:Ne}=d0(659228,An+4),D0=E1();Ne.add(D0);const yu=new Wu(659228,60,300);Ne.fog=yu;const U0=T1(An);Ne.add(U0);const rw=U0.children.filter(n=>n.name==="crystal"),bt=new pn(44,640/360,.1,900),F0=new N(105,90,140);let ta=0;const Yt=F0.clone(),Tn=new N(0,1.1,0);bt.position.copy(Yt);bt.lookAt(Tn);let Ma="immersive",_n=o0(0);const $t={meYaw:0,mePitch:0,foeYaw:0,foePitch:0};let Po=0,yo=ti.fovBase,Gr=0,Zs="",Js=null,_p=0,xp=0,Su=0;const Dr=new N;function bl(n){_n=u1(_n,n,It)}function O0(){if(!Ye)return;const[n,e]=Ye,t=Zr(hi(n.pos),hi(e.pos)),i=Zr(hi(e.pos),hi(n.pos));$t.meYaw=t.yaw,$t.mePitch=t.pitch,$t.foeYaw=i.yaw,$t.foePitch=i.pitch,Po=ka(n,e),Gr=0}const bu=ve("fx-layer"),na=ve("vs-hud"),Eu=ve("ko-hud"),aw=1400,ow=900;let Tu=0,vs=null;function B0(n,e){return n.isPlayer?`ルール${e}`:"相手のルール"}function vp(n,e,t,i,s){if(It<Tu)return!1;Tu=It+ow,vs==null||vs.remove();const r=document.createElement("div");r.className=`react-callout ${n.isPlayer?"me":"foe"}${s?" gambit":""}`;const a=document.createElement("div");a.className="rc-trigger",a.textContent=s?`⚙ ${B0(n,s.ruleNo)}：${ml(s.rule)}`:`⚔ ${e.cfg.name}：${t?fl[t]:""}`;const o=document.createElement("div");o.className="rc-answer",o.textContent=s?`→ ${n.cfg.name}：${fh(s.rule)}`:`→ ${n.cfg.name}：${i}`;const l=document.createElement("span");if(l.className="rc-tag",l.textContent=s?"戦術":jn[n.cfg.personality].label,o.appendChild(l),r.append(a,o),document.body.classList.contains("battle-full")){const c=ve("battle-hp").getBoundingClientRect().bottom-bu.getBoundingClientRect().top;r.style.top=`${Math.max(8,c+8)}px`}return bu.appendChild(r),vs=r,window.setTimeout(()=>{r.remove(),vs===r&&(vs=null)},aw),!0}const bs=ve("gambit-live"),lw=1200,cw=100,uw=64,hw=880;let ya=[],Nh={},Qo=0;function dw(n,e){bs.innerHTML="",ya=[],Nh={},Qo=0,n.forEach((t,i)=>{const s=document.createElement("div");s.className="gl-row";const r=Object.assign(document.createElement("span"),{className:"gl-no",textContent:String(e[t.id]??i+1)}),a=Object.assign(document.createElement("span"),{className:"gl-text",textContent:`${ml(t,!0)} → ${fh(t)}`}),o=Object.assign(document.createElement("span"),{className:"gl-cd"});s.title=ph(t),s.append(r,a,o),bs.appendChild(s),ya.push({rule:t,row:s,cd:o,state:"",cdText:"",flashAt:-1})}),bs.classList.toggle("hidden",n.length===0)}function k0(){bs.classList.add("hidden"),bs.innerHTML="",ya=[]}function fw(n){Nh[n]=It,Qo=0}function pw(n,e){if(ya.length===0||It<Qo)return;Qo=It+cw;const t=ve("battle-hp").getBoundingClientRect().bottom,i=`${Math.round(t+8+(window.innerWidth>=hw?0:uw))}px`;bs.style.top!==i&&(bs.style.top=i);for(const s of ya){const r=Nh[s.rule.id],a=r!==void 0&&It-r<lw?r:-1,o=n.gambitLastFired[s.rule.id],l=o===void 0?0:ga(s.rule)-(e-o),c=a>=0?"fired":l>0?"cd":"",u=l>0?`${(Math.ceil(l/100)/10).toFixed(1)}s`:"",h=c==="fired"&&s.state==="fired"&&a!==s.flashAt;(c!==s.state||h)&&(s.row.className="gl-row",h&&s.row.offsetWidth,c&&s.row.classList.add(c),s.state=c),s.flashAt=a,u!==s.cdText&&(s.cd.textContent=u,s.cdText=u)}}let Sa=[],Rs=[],ba=[],Ea=[],Ta=[],Aa=[];const mw=new Qu(.075),gw=new nn(.12,8,6);function Tt(n,e,t,i,s,r,a=!1){for(let o=0;o<t;o++){const l=new re(a?gw:mw,new pt({color:e,transparent:!0,opacity:.95}));l.position.copy(n);const c=Math.random()*Math.PI*2,u=Math.random(),h=i*(.35+Math.random()*.75),d=new N(Math.cos(c)*h*Math.sqrt(1-u*u),u*h*(a?.5:1),Math.sin(c)*h*Math.sqrt(1-u*u));Ne.add(l),Aa.push({mesh:l,vel:d,born:Ot,life:s*(.7+Math.random()*.6),gravity:r})}}let wa=[],Ra=[],el=[];const _w=10,xw=14,vw=2600,Au=new nn(1,16,12),Mw=new Na(.85,1,48),yw=new Lt(.22,.12,.3),Mp=new nn(.24,12,10);function No(n,e,t,i,s){n.scale.setScalar(t),Ne.add(n),wa.push({mesh:n,born:Ot,life:e,from:t,to:i,opacity:s})}function Sw(n){n.brokenUp=!0,n.doll.group.visible=!1,n.flameRig.visible=!1,n.boostGlow.visible=!1,n.guardMesh.visible=!1,n.teamRing.visible=!1,fr(n);const e=n.pos.clone();e.y+=1.2;const t={transparent:!0,blending:ns,depthWrite:!1},i=new re(Au,new pt({color:16774358,opacity:1,...t}));i.position.copy(e),No(i,380,.4,3.2,1);const s=new re(Au,new pt({color:16742954,opacity:.85,...t}));s.position.copy(e),No(s,700,.8,4.6,.85);const r=new re(Mw,new pt({color:16769712,opacity:.9,side:un,...t}));r.position.copy(e),r.lookAt(Yt),No(r,650,.5,9,.9);const a=new Ee(n.cfg.outfitColor);for(let c=0;c<_w;c++){const u=c%4===3?new Ee(10134445):a.clone().multiplyScalar(.55+Math.random()*.6),h=new re(yw,new pt({color:u,transparent:!0,opacity:1}));h.position.copy(e),h.scale.set(.6+Math.random()*1.2,.6+Math.random()*1,.6+Math.random()*1.2);const d=Math.random()*Math.PI*2,f=4+Math.random()*6,g=new N(Math.cos(d)*f+n.vx*.3,2+Math.random()*6+n.vy*.3,Math.sin(d)*f+n.vz*.3),_=new N((Math.random()-.5)*18,(Math.random()-.5)*18,(Math.random()-.5)*18);Ne.add(h),Ra.push({mesh:h,vel:g,spin:_,born:Ot,life:vw*(.8+Math.random()*.4)})}Tt(e,16765562,22,7,650,6),Tt(e,5918792,10,2.5,1100,-1.2,!0);const o=new re(Mp,new pt({color:16747066})),l=new re(Mp,new pt({color:16756832,opacity:.5,...t}));l.scale.setScalar(2.2),o.add(l),o.position.copy(e),Ne.add(o),el.push({mesh:o,f:n,nextSparkAt:Ot,landed:!1}),mi=Math.max(mi,.32),Sl=It,bh(!0)}function bw(n,e){wa=wa.filter(t=>{const i=(n-t.born)/t.life;if(i>=1)return Ne.remove(t.mesh),t.mesh.material.dispose(),!1;const s=1-(1-i)*(1-i);return t.mesh.scale.setScalar(t.from+(t.to-t.from)*s),t.mesh.material.opacity=t.opacity*(1-i),!0}),Ra=Ra.filter(t=>{const i=n-t.born;return i>=t.life?(Ne.remove(t.mesh),t.mesh.material.dispose(),!1):(t.mesh.position.y<=.06||(t.vel.y-=xw*e,t.mesh.position.addScaledVector(t.vel,e),t.mesh.rotation.x+=t.spin.x*e,t.mesh.rotation.y+=t.spin.y*e,t.mesh.rotation.z+=t.spin.z*e,t.mesh.position.y<=.06&&(t.mesh.position.y=.06)),t.mesh.material.opacity=Math.min(1,(t.life-i)/500),!0)});for(const t of el){if(t.mesh.position.set(t.f.pos.x,t.f.pos.y+.3,t.f.pos.z),!t.landed&&t.f.altitude<=0){t.landed=!0;const s=t.mesh.position.clone();Tt(s,16751164,14,3.2,520,6),Tt(s,5918792,8,1.6,1200,-.8,!0)}n>=t.nextSparkAt&&(t.nextSparkAt=n+(t.landed?220:45),Tt(t.mesh.position,16752704,t.landed?1:2,.8,420,-1.5),t.landed||Tt(t.mesh.position,4867136,1,.4,700,-1,!0));const i=.85+Math.sin(n*.05)*.15;t.mesh.scale.setScalar((t.landed?.75:1)*i)}}const ia=(n,e)=>Math.hypot(n.pos.x-e.pos.x,n.pos.z-e.pos.z),ka=(n,e)=>Math.hypot(n.pos.x-e.pos.x,n.altitude-e.altitude,n.pos.z-e.pos.z),Ew=(n,e)=>ka(n,e)*yl,tl=(n,e,t)=>TE(ia(n,e)*yl,t,n.altitude,e.altitude);function Es(n,e){const t=new N(e.pos.x-n.pos.x,0,e.pos.z-n.pos.z);return t.lengthSq()<1e-4?new N(1,0,0):t.normalize()}function At(n,e){var s;const t=document.createElement("li");t.innerHTML=n,e&&(t.className=e);const i=ve("battle-log");for(i.prepend(t);i.children.length>40;)(s=i.lastChild)==null||s.remove()}function z0(){if(!Ye){ve("battle-hp").innerHTML="";return}ve("battle-hp").innerHTML=Ye.map(n=>`<div>${n.isPlayer?"あなた":"ライバル"}: ${Ts(n.cfg.name)}（${jn[n.cfg.personality].label}） <b class="${n.destroyed?"down":"alive"}">${n.destroyed?"撃破":"健在"}</b></div>`).join("")}function Hr(n,e,t){const i=Math.max(.7,t*.3),s=new re(new Lt(.55,1.6,i),new pt({color:16777215,transparent:!0,opacity:.32}));s.position.copy(n.pos).addScaledVector(e,-i*.45),s.position.y+=1.15,s.rotation.y=Math.atan2(e.x,e.z),Ne.add(s),Ea.push({mesh:s,until:Ot+230,fadeMs:230})}function Ca(n){n.destroyed||(n.destroyed=!0,n.doll.setFlash(!0),window.setTimeout(()=>n.doll.setFlash(!1),170),bh(!0),E0(!0),It>=gp&&(Ih=It+90,gp=It+450),mi=Math.max(mi,.32),Sl=It,z0())}function El(n,e){return n.brokenUp||e<n.tumbleUntil}function G0(n,e){return n.evading?"evade":n.guarding?"guard":e<n.jumpUntil?"jump":null}const Tw={evade:"横っ跳びでかわした",guard:"姿勢を低くしてやり過ごした",jump:"跳んでかわした",none:"身をひねってかわした"};function Dh(n,e,t,i,s=0){if(!sn||e.destroyed)return!1;const r=s>0?{...n.perf,aim:n.perf.aim-s}:n.perf,a=El(e,Ot)?0:UE(e.perf,t,r,n.cfg.weapon),o=e.pos.clone();o.y+=1.35;const l=Es(n,e);if(FE(a,Math.random())==="dodged"){if(t!=="guard"){const u=Math.random()<.5?1:-1;e.vx+=-l.z*u*3,e.vz+=l.x*u*3,e.vy=Math.max(e.vy,1.6)}return Tt(o,10482175,4,1.2,300,3),t==="guard"?MA():S0(),i(`${e.cfg.name} は${Tw[t??"none"]}（反応成功）`),!1}const c=2.8*JA;if(e.vx+=l.x*c,e.vz+=l.z*c,e.vy=Math.max(e.vy,2.4),Tt(o,6285567,12,2.6,480,6),Tt(o,16757575,8,1.7,380,5),xn){const u=e.lastDecision;xn.hits.push({tMs:Math.round(Ot),attacker:C0(n),missedReaction:!!u&&u.trigger!==null&&!u.reacted&&Ot-u.atMs<=qA})}return i(`${e.cfg.name} に命中 → <span class="dmg">撃破</span>`),Ca(e),!0}function H0(n,e){n.nextActAt=Math.max(n.nextActAt,e)+LE(n.cfg.weapon)+xT(n.cfg.weapon,n.volley)}function V0(n,e,t){n.doll.triggerSwing(t);const i=Es(n,e),s=n.pos.clone().addScaledVector(i,.72);s.y+=1.35;const r=new re(new Dt(.82,.05,6,16,Math.PI*.95),new pt({color:10482175,transparent:!0,opacity:.95}));r.position.copy(s),r.rotation.y=n.facing,r.rotation.z=-.7,Ne.add(r),ba.push({mesh:r,until:t+210,fadeMs:210})}function wu(n,e,t,i,s){var u;const r=st[n.cfg.weapon];H0(n,t),((u=n.engage)==null?void 0:u.kind)==="shoot"&&(n.engage=null);const a=s?"空中から":"",o=r.kind==="melee"?`${a}${r.label}の一撃`:`${a}${r.label}の射撃`,l=G0(e,t),c=h=>At(`${n.cfg.name} の${o} → ${h} ${i}`);n.cfg.weapon==="missile"?Lw(n,e,i):r.kind==="ranged"?(W0(n,e,0,l,i,s),n.burst=n.volley>1?{foe:e,next:1,nextAt:t+r.volleyIntervalMs,stance:l,reasonHtml:i,airborne:s}:null):(vA(),V0(n,e,t),Dh(n,e,l,c)),e.guarding=!1,e.evading=!1}const Aw=new Lt(.06,.06,pp).translate(0,0,-pp/2),ww=new nn(.1,10,8),Rw=new qt(.07,.1,.55,8).rotateX(Math.PI/2);function W0(n,e,t,i,s,r){const a=st[n.cfg.weapon];y0(),n.isPlayer&&bl("playerFire");const o=new N;n.doll.weaponTip.parent?n.doll.weaponTip.getWorldPosition(o):o.set(n.pos.x,n.altitude+di,n.pos.z);const l=e.pos.clone();l.y=e.altitude+di;const c=n.isPlayer?10482175:16761466,u=new re(ww,new pt({color:c}));u.position.copy(o),Ne.add(u);const h=new re(Aw,new pt({color:c,transparent:!0,opacity:.85,blending:ns,depthWrite:!1}));h.position.copy(o),h.lookAt(l),Ne.add(h);const d=n.volley>1?`（${t+1}/${n.volley}発目）`:"",f=`${r?"空中から":""}${a.label}の射撃${d}`,g=p=>At(`${n.cfg.name} の${f} → ${p} ${s}`),_=MT(t,n.skill),m=Math.max(40,o.distanceTo(l)/a.projectileSpeed*1e3);Sa.push({mesh:u,trail:h,from:o,to:l,start:Ot,dur:m,onHit:()=>{Dh(n,e,i,g,_)},onBlocked:()=>At(`${n.cfg.name} の${f}は障害物に阻まれた`)})}function Cw(n,e){const t=n.burst;if(!t)return;if(!sn||n.destroyed||El(n,e)){n.burst=null;return}const i=st[n.cfg.weapon].volleyIntervalMs;for(;n.burst&&e>=t.nextAt;)W0(n,t.foe,t.next,t.stance,t.reasonHtml,t.airborne),t.next+=1,t.nextAt+=i,t.next>=n.volley&&(n.burst=null)}function Lw(n,e,t){y0();const i=new N;n.doll.weaponTip.parent?n.doll.weaponTip.getWorldPosition(i):i.set(n.pos.x,n.altitude+di,n.pos.z);const s={x:e.pos.x,y:e.altitude+di,z:e.pos.z};for(const r of CT(n.volley)){const a=new re(Rw,new pt({color:n.isPlayer?14678271:16769216}));a.position.copy(i),Ne.add(a),Rs.push({mesh:a,state:LT({x:i.x,y:i.y,z:i.z},s,r.yaw,r.pitch),owner:n,target:e,nextSmokeAt:Ot,lostLogged:!1,reasonHtml:t})}At(`🚀 ${n.cfg.name} はミサイル${n.volley}発を一斉発射！ ${t}`),bl(n.isPlayer?"playerFire":"foeSalvo")}function Iw(n){No(new re(Au,new pt({color:16757575,transparent:!0,opacity:.9,blending:ns,depthWrite:!1})),260,.3,1.8,.9),Tt(n,16757575,8,3.2,360,6),Tt(n,10133158,4,1.2,600,-.8,!0)}function Pw(n,e){Rs=Rs.filter(t=>{const i=t.target,s={x:i.pos.x,y:i.altitude+di,z:i.pos.z},r=t.state.pos;t.state=PT(t.state,s,e);const a=t.state.pos;!t.state.locked&&!t.lostLogged&&(t.lostLogged=!0,sn&&!i.destroyed&&At(`${i.cfg.name} はミサイルを振り切った`));const o=DT(r,a,s,t.state.ageMs);if(o){const l=new N(a.x,Math.max(.2,a.y),a.z);return Ne.remove(t.mesh),t.mesh.material.dispose(),Iw(l),o==="hit"?Dh(t.owner,i,G0(i,n),c=>At(`${t.owner.cfg.name} のミサイル → ${c} ${t.reasonHtml}`)):o==="tower"&&sn&&At(`${t.owner.cfg.name} のミサイルは塔に当たって爆発した`),!1}return t.mesh.position.set(a.x,a.y,a.z),t.mesh.lookAt(a.x+t.state.vel.x,a.y+t.state.vel.y,a.z+t.state.vel.z),n>=t.nextSmokeAt&&(t.nextSmokeAt=n+KA,Tt(new N(a.x,a.y,a.z),12106948,1,.25,650,-.6,!0)),!0})}function Vr(){Math.random()<.55&&yA()}function Nw(n,e,t){const i=st[e.cfg.weapon].kind,s=Rs.some(a=>a.owner===e&&a.target===n&&a.state.locked),r=e.pendingAttack!==null&&e.windupUntil>t||s;return{hpRatio:R0(e),weaponKind:i,windingUp:r,windupKind:r?i:null,dashingToward:e.dashUntil>t&&e.rushUntil<=t&&e.vel.dot(Es(e,n))>1,airborne:qo(e.altitude),guarding:e.guarding,tumbling:El(e,t)}}function Dw(n,e,t){var P;const i=st[n.cfg.weapon],s=t>=n.nextActAt&&n.pendingAttack===null;n.nextActAt=t+Ub(n.cfg.weapon);const r=Ew(n,e),a=Nw(n,e,t),o=R0(n),l=sT(n.gambits,{snap:a,distance:ka(n,e),selfPos:{x:n.pos.x,z:n.pos.z},foePos:{x:e.pos.x,z:e.pos.z},selfAlt:n.altitude+di,foeAlt:e.altitude+di},n.gambitLastFired,t),c=l?n.gambitNo[l.rule.id]??n.gambits.indexOf(l.rule)+1:0;l&&(n.gambitLastFired[l.rule.id]=t,n.isPlayer&&fw(l.rule.id));const u=l?_a(l.rule):null;n.engage&&t>=n.engage.until&&(n.engage=null),l&&n.engage&&n.engage.kind!=="shoot"&&(n.engage=null),l&&l.action==="shoot"&&u!==null&&(n.engage={kind:"shoot",range:u,until:t+oc});const h=((P=n.engage)==null?void 0:P.kind)==="shoot"?n.engage.range:null,d=qE({distance:r,selfHpRatio:o,weapon:n.cfg.weapon,personality:n.cfg.personality,foe:a,rangeBand:n.rangeBand,engageRange:h,skillScale:n.skill},Math.random(),Math.random(),l?{gambit:l}:void 0),f=r/yl,g=_T(d,{weapon:n.cfg.weapon,distWorld:f,band:n.rangeBand,engageRange:h}),_=t<n.rushUntil;n.rushUntil=0;const m=dT(n.cfg.weapon,{inEnvelope:hT(n.cfg.weapon,f,n.rangeBand,h),losClear:hl(n.pos.x,n.altitude+di,n.pos.z,e.pos.x,e.altitude+di,e.pos.z,I0)===null,cooldownReady:s}),p=pT(g.decision,{weapon:n.cfg.weapon,fireReady:m,nowMs:t,counterUntil:n.counterUntil});n.counterUntil=p.counterUntil;const v=p.decision,{action:w,reason:y}=v;n.lastDecision={trigger:v.trigger,reacted:v.reacted,atMs:t},xn==null||xn.decisions.push({tMs:Math.round(t),actor:C0(n),trigger:v.trigger,reacted:v.reacted,action:w,...v.reasonParts.reaction?{reactionLine:v.reasonParts.reaction}:{},...v.gambitLabel?{gambitLabel:v.gambitLabel}:{}});const R=`<span class="reason">― ${y}</span>`,T=Es(n,e),x=l&&(w==="strafe"||w==="evade")?l.rule.side:void 0;x&&(n.strafeDir=x==="right"?1:-1);const b=()=>new N(-T.z,0,T.x).multiplyScalar(n.strafeDir),S=v.gambitLabel??null,M=!S&&v.reacted?v.trigger:null;S&&l?vp(n,e,null,S,{rule:l.rule,ruleNo:c}):M&&vp(n,e,M,v.reasonParts.reaction??"");const C=O=>S?At(`<span class="trig">⚙ ${B0(n,c)}「${Ts(S)}」発動 →</span> ${O}`,"gambit"):M?At(`<span class="trig">${e.cfg.name}：${fl[M]} →</span> ${O}`,"reaction"):At(O),I=ia(n,e);w!=="guard"&&w!=="shoot"&&(n.retreatUntil=0);const F=va(n);if(w==="approach"&&g.rush)n.rushUntil=n.nextActAt+150,n.dashUntil=n.rushUntil,n.dashStop=kr(n.cfg.weapon,n.rangeBand,h,I),n.vel.copy(T).multiplyScalar(cu()*F),_||(Hr(n,T,cu()*F),Vr(),C(`${n.cfg.name} はブーストで一気に詰める ${R}`));else if(w==="approach"){const O=ea(I)*F;n.vel.copy(T).multiplyScalar(O),n.dashUntil=t+260,n.dashStop=u??kr(n.cfg.weapon,n.rangeBand,h,I),Hr(n,T,O),Vr(),C(`${n.cfg.name} はダッシュで近づいた ${R}`)}else if(w==="strafe"){!x&&Math.random()<.3&&(n.strafeDir=n.strafeDir*-1);const O=u===null?.8:zn.clamp((I-u)*1.6,-3.1,3.1);n.vel.copy(b().multiplyScalar(3.1*vo*F).addScaledVector(T,O*vo*F)),n.dashUntil=t+200,n.dashStop=u??kr(n.cfg.weapon,n.rangeBand,h),Vr(),C(`${n.cfg.name} は横に回り込んだ ${R}`)}else if(w==="jump"){if(n.jumpUntil=t+ZA,n.vel.addScaledVector(T,(i.kind==="melee"?3.1:1.1)*vu*F),n.jumpAttackPending=!0,n.dashUntil=t+200,n.dashStop=kr(n.cfg.weapon,n.rangeBand,h),n.altitude<.3){const O=n.pos.clone();O.y=.12,Tt(O,15261394,6,1.2,380,-.6,!0)}C(`${n.cfg.name} は高く跳んだ！ ${R}`)}else if(w==="retreat")u!==null&&I>=u?n.vel.copy(b().multiplyScalar(.9*Xn*F)):(n.vel.copy(T).multiplyScalar(-3.4*Xn*F).addScaledVector(b(),.9*Xn*F),u!==null&&(n.retreatTo=u,n.retreatUntil=t+mp)),C(`${n.cfg.name} は後方へステップした ${R}`);else if(w==="cover"){const O=u??wE,V=CE(n.pos,e.pos,O);V?(n.engage={kind:"cover",range:O,until:t+oc,point:V},yp(n,V,t,0),C(`${n.cfg.name} は壁陰に隠れた ${R}`)):(n.vel.copy(T).multiplyScalar(-3.4*Xn*F).addScaledVector(b(),.9*Xn*F),C(`${n.cfg.name} は隠れる壁が無く、後方へステップした ${R}`))}else if(w==="corner"){const O=gl(n.rangeBand,n.cfg.weapon),V=u??(O.min+O.max)/2;n.engage={kind:"corner",range:V,until:t+oc},yp(n,Hm(e.pos,V),t,V),C(`${n.cfg.name} は${e.cfg.name}を壁際に追い込む ${R}`)}else if(w==="evade")n.vel.copy(b().multiplyScalar(4.3*Xn*F)),Math.random()<.5&&(n.vy=Math.max(n.vy,1.9)),n.evading=!0,C(`${n.cfg.name} は横っ跳びで身をかわす構え ${R}`);else if(w==="guard")n.guarding=!0,C(`${n.cfg.name} は防御態勢 ${R}`);else{const O=h!==null?_l(n.cfg.weapon,h):null,V=O!==null?xh(n.cfg.weapon,n.rangeBand,h):null;if(i.kind==="melee"&&!tl(n,e,L0(i))){n.retreatUntil=0;const H=ea(I)*F;n.vel.copy(T).multiplyScalar(H).addScaledVector(b(),.7*vu*F),n.dashUntil=t+260,n.dashStop=O!==null?Math.min(O,ma("melee")):ma("melee"),Hr(n,T,H),C(`${n.cfg.name} は間合いを詰めた ${R}`)}else if(i.kind==="ranged"&&O!==null&&V&&f>V.max){n.retreatUntil=0;const H=ea(I)*F;n.vel.copy(T).multiplyScalar(H),n.dashUntil=t+260,n.dashStop=O,Hr(n,T,H),Vr(),C(`${n.cfg.name} は間合い${O.toFixed(1)}mまで詰める ${R}`)}else if(i.kind==="ranged"&&O!==null&&V&&f<V.min)n.vel.copy(T).multiplyScalar(-3.4*Xn*F),n.retreatTo=O,n.retreatUntil=t+mp,C(`${n.cfg.name} は間合い${O.toFixed(1)}mまで下がる ${R}`);else{if(p.moveAlong==="evade"?n.vel.copy(b().multiplyScalar(4.3*Xn*F)):p.moveAlong==="strafe"?n.vel.copy(b().multiplyScalar(3.1*vo*F).addScaledVector(T,.8*vo*F)):p.moveAlong==="retreat"&&n.vel.copy(T).multiplyScalar(-3.4*Xn*F).addScaledVector(b(),.9*Xn*F),M||S||p.override){const H=p.moveAlong==="retreat"?"下がりながら狙いを定めた":p.moveAlong?"動きながら狙いを定めた":"狙いを定めた";C(`${n.cfg.name} は${i.kind==="melee"?"踏み込んで構えた":H} ${R}`)}zw(n,e,t,R,qo(n.altitude))}}}function yp(n,e,t,i){const s=new N(e.x-n.pos.x,0,e.z-n.pos.z),r=s.length();if(r<1e-6)return;s.divideScalar(r);const a=va(n);if(r>tw){const o=ea(r)*a;n.vel.copy(s).multiplyScalar(o),n.dashUntil=t+260,n.dashStop=i,Hr(n,s,o),Vr()}else n.vel.copy(s).multiplyScalar(Math.min(Ch*a,r*P0))}function Uw(n,e,t,i){const s=n.engage;if(!s||s.kind==="shoot")return;const r=s.kind==="cover"&&s.point?s.point:Hm(e.pos,s.range),a=r.x-n.pos.x,o=r.z-n.pos.z,l=Math.hypot(a,o),c=(t<n.dashUntil?ea(l):Ch)*va(n),u=Math.min(c,l*P0),h=l>1e-6?a/l*u:0,d=l>1e-6?o/l*u:0,f=Math.min(1,i*nw);n.vel.x+=(h-n.vel.x)*f,n.vel.z+=(d-n.vel.z)*f}const Fw=new nn(.1,12,10),Ow=new nn(.6,14,10),Bw=new oi(.12,1,12,1,!0).rotateX(Math.PI).translate(0,-.5,0),kw=new Na(.45,.7,40),Sp=450;function X0(n){const e=new re(kw,new pt({color:15261394,transparent:!0,opacity:.7,side:un,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.position.set(n.pos.x,.05,n.pos.z),Ne.add(e),Ta.push({mesh:e,until:Ot+Sp,fadeMs:Sp})}function zw(n,e,t,i,s){n.pendingAttack={target:e,reasonHtml:i,airborne:s,start:t},n.windupUntil=t+Sf(n.cfg.weapon),xA(Sf(n.cfg.weapon)),!n.isPlayer&&st[n.cfg.weapon].kind==="ranged"&&bl("foeWindup"),n.chargeMesh||(n.chargeMesh=new re(Fw,new pt({color:n.isPlayer?3531007:16751164,transparent:!0,opacity:0,blending:ns,depthWrite:!1})),Ne.add(n.chargeMesh)),$0(n,t)}function fr(n){n.pendingAttack=null,n.chargeMesh&&(Ne.remove(n.chargeMesh),n.chargeMesh.material.dispose(),n.chargeMesh=null)}function $0(n,e){const t=n.pendingAttack;if(!t||!n.chargeMesh)return;const i=zn.clamp((e-t.start)/Math.max(1,n.windupUntil-t.start),0,1);n.doll.weaponTip.parent?n.doll.weaponTip.getWorldPosition(n.chargeMesh.position):n.chargeMesh.position.set(n.pos.x,n.pos.y+1.3,n.pos.z),n.chargeMesh.scale.setScalar(.6+i*2.4),n.chargeMesh.material.opacity=.25+i*.7}function Gw(n,e){const t=n.pendingAttack;if(fr(n),!t||!sn||n.destroyed)return;const i=t.target,s=st[n.cfg.weapon];if(s.kind==="melee"&&!tl(n,i,L0(s))){S0(),V0(n,i,e),H0(n,e),At(`${n.cfg.name} の${s.label}は空を切った ${t.reasonHtml}`);return}wu(n,i,e,t.reasonHtml,t.airborne)}function Hw(n){const e=n==="win",t=n==="draw";sn=!1;const i=ve("btn-battle");if(!Ye){i.disabled=!1,i.textContent="もう一度バトル";return}const[s,r]=Ye,a=e?s:r,o=e?r:s;Lh=!0,nr=a,ir=o,Su=Math.atan2(a.pos.x-o.pos.x,a.pos.z-o.pos.z)+.9,bl("ko"),fr(s),fr(r),k0(),Ph=It+_c,Eu.classList.add("show"),SA(),E0(!0),a.guarding=!1,a.evading=!1,o.guarding=!1,o.evading=!1,t||(a.doll.setCelebrate(!0),a.doll.setExpression("smile"));for(const d of t?[s,r]:[o])if(EE(d.altitude))At(`💥 ${d.cfg.name} は高度 ${d.altitude.toFixed(1)} で空中分解した！`,"impact"),Sw(d);else{d.tumbleUntil=0,d.doll.setFallen(!0),d.doll.setExpression("serious");const f=d.pos.clone();f.y+=.9,Tt(f,16757575,8,2.2,450,6)}const l=BT(e,jr().index);ee.coins+=l.coins;let c="";if(e){const d=jr();ee.wins+=1,ee.streak+=1,ee.bestStreak=Math.max(ee.bestStreak,ee.streak);const f=jr();f.index>d.index&&(c+=` 🏅 ランクアップ！ ${f.rank.name} に昇格！`),ee.streak>=3&&(c+=` 🔥 ${ee.streak}連勝中！`);const g=OT(ee.owned,Math.random());if(g.droppedId){ee.owned.push(g.droppedId);const _=i0.find(m=>m.id===g.droppedId);c+=` パーツ「${_?$A(_):g.droppedId}」を入手！ エディットで付け替えられる。`}else g.bonusCoins>0&&(ee.coins+=g.bonusCoins,c+=` パーツは全種所持済みだったので、代わりにコイン +${g.bonusCoins}。`)}else ee.streak=0;const u=Fa(ee.config.personality,e?"win":"lose",ws(),Math.random()),h=e?`勝利！ ${u} コイン +${l.coins}。${c}`:t?`引き分け… 相打ちで両機とも撃破。コイン +${l.coins}。`:`敗北… ${u} コイン +${l.coins}。装備や戦術を見直して再挑戦しよう。`;if(At(e?"🏆 バトル終了: 勝利！":t?"バトル終了: 相打ちで引き分け":"バトル終了: 敗北"),xn){xn.result=n,xn.durationMs=Math.round(Ot);const d=qm(xn);ee.lastReview=xn,ee.battleHistory=[...ee.battleHistory??[],{rivalName:xn.rivalName,result:xn.result,at:Date.now(),reactionsHit:d.reactionsHit,reactionsTotal:d.reactionsTotal}].slice(-T0),xn=null}Ls(),Ba(),_u(),Fh(),window.setTimeout(()=>{Eu.classList.remove("show"),ve("battle-result").textContent=h,bA(e),i.disabled=!1,i.textContent="もう一度バトル",Uh()},Ma==="immersive"?_c+ti.killcamHoldMs:_c)}const bp=["#ff5a5a","#3fd0ff","#ffcf3a","#7cff6b","#c77dff","#ff8ad8"],Ep=["plain","stripe","dot","check"];function Vw(n){let e=0;for(const t of n)e=e*31+t.charCodeAt(0)>>>0;return{eyeColor:bp[e%bp.length],outfitPattern:Ep[(e>>>3)%Ep.length]}}function Tp(n,e,t,i){var _;const s=e?1:zE(zr(ee.wins).index),r=Vm(n.personality,s),a=new _0;a.applyConfig(n),a.group.position.copy(t),a.group.rotation.y=i,Ne.add(a.group);const o=new re(new Dt(.95,.035,8,28),new pt({color:5934335,transparent:!0,opacity:.75}));o.visible=!1,Ne.add(o);const l=new re(new Na(.62,.8,40),new pt({color:e?3531007:16751164,transparent:!0,opacity:.6,side:un,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.set(t.x,.02,t.z),Ne.add(l);const c=new re(Ow,new pt({color:e?3531007:16751164,transparent:!0,opacity:0,blending:ns,depthWrite:!1}));c.position.set(t.x,t.y+1.2,t.z),Ne.add(c);const u=new ct,h=new pt({color:e?3531007:16751164,transparent:!0,opacity:.8,blending:ns,depthWrite:!1,side:un});for(const m of[-.17,.17]){const p=new re(Bw,h);p.position.set(m,1.15,-.32),p.rotation.x=.3,u.add(p)}u.visible=!1,Ne.add(u),e||(_=a.setTeamTint)==null||_.call(a,16763304);const d=e?{...ee.rangeBand}:FT(zr(ee.wins).index,n.weapon),f=e?a1(ee.gambits,ee.gambitOff).map(({rule:m,no:p})=>({rule:{...m},no:p})):rT(zr(ee.wins).index).map((m,p)=>({rule:m,no:p+1})),g={cfg:n,perf:r,skill:s,destroyed:!1,isPlayer:e,guarding:!1,evading:!1,nextActAt:Ot+(e?400:650),doll:a,guardMesh:o,pos:t.clone(),vel:new N,vx:0,vz:0,altitude:t.y,vy:0,thrust:0,tiltPitch:0,tiltRoll:0,flameRig:u,flameLen:0,facing:i,strafeDir:e?1:-1,jumpAttackPending:!1,jumpUntil:0,dashUntil:0,boostGlow:c,teamRing:l,windupUntil:0,pendingAttack:null,chargeMesh:null,lastDecision:null,gambits:f.map(m=>m.rule),gambitNo:Object.fromEntries(f.map(m=>[m.rule.id,m.no])),gambitLastFired:{},rangeBand:d,engage:null,dashStop:kr(n.weapon,d),retreatTo:0,retreatUntil:0,counterUntil:0,rushUntil:0,volley:e?Pf(n.weapon):Pf(n.weapon,zr(ee.wins).index),burst:null,tumbleUntil:0,tumbleSpin:0,brokenUp:!1};return a.onFail=()=>{if(g.doll!==a)return;Ne.remove(a.group);const m=new h0(n);m.group.visible=!g.brokenUp,m.group.position.copy(g.pos),m.group.rotation.y=g.facing,Ne.add(m.group),g.doll=m},g}function Ww(){if(Ye)for(const n of Ye)Ne.remove(n.doll.group),Ne.remove(n.guardMesh),Ne.remove(n.teamRing),Ne.remove(n.boostGlow),n.boostGlow.material.dispose(),Ne.remove(n.flameRig),n.flameRig.children[0].material.dispose(),fr(n);for(const n of Sa)Ne.remove(n.mesh),Ne.remove(n.trail);for(const n of Rs)Ne.remove(n.mesh),n.mesh.material.dispose();Rs=[];for(const n of ba)Ne.remove(n.mesh);for(const n of Ea)Ne.remove(n.mesh);for(const n of Ta)Ne.remove(n.mesh),n.mesh.material.dispose();for(const n of Aa)Ne.remove(n.mesh);for(const n of wa)Ne.remove(n.mesh),n.mesh.material.dispose();for(const n of Ra)Ne.remove(n.mesh),n.mesh.material.dispose();for(const n of el)Ne.remove(n.mesh),n.mesh.material.dispose(),n.mesh.children[0].material.dispose();Sa=[],ba=[],Ea=[],Ta=[],Aa=[],wa=[],Ra=[],el=[],Ye=null,Lh=!1,nr=null,ir=null,bu.innerHTML="",vs=null,Tu=0,k0(),Eu.classList.remove("show"),na.classList.remove("show"),Ih=0,Ph=0,mi=0,Ji=!1}function q0(){let n=640,e=360;document.body.classList.contains("battle-full")&&(n=Mu.clientWidth,e=Mu.clientHeight,n<2||e<2)||(vr.setSize(n,e,!1),bt.aspect=n/e,bt.updateProjectionMatrix())}new ResizeObserver(q0).observe(ve("tab-battle").querySelector(".arena-wrap"));function Tl(n){document.body.classList.toggle("battle-full",n),q0()}ve("btn-battle-exit").addEventListener("click",()=>Tl(!1));const Do=ve("btn-cam-mode");function Y0(){const n=Ma==="immersive";Do.textContent=n?"臨場感":"俯瞰",Do.setAttribute("aria-pressed",String(n)),Do.setAttribute("aria-label",n?"カメラ: 臨場感（タップで俯瞰に切替）":"カメラ: 俯瞰（タップで臨場感に切替）")}Do.addEventListener("click",()=>{b0(),Ma=Ma==="immersive"?"overview":"immersive",O0(),Zs="",Js=null,Ye&&(ta=(Ye[0].pos.y+Ye[1].pos.y)/2),Y0()});Y0();let La=!1;const Ts=n=>n.replace(/[&<>"']/g,e=>`&#${e.charCodeAt(0)};`),K0=n=>`${(n/1e3).toFixed(1)}s`;function Uh(){ve("btn-review").classList.toggle("hidden",!ee.lastReview||sn)}function Z0(){ve("review-panel").classList.add("hidden")}function J0(n){const e=n.playerName||ee.config.name,t=La?n.decisions:n.decisions.filter(s=>s.reacted||s.gambitLabel),i=ve("review-timeline");i.innerHTML=t.length===0?'<li class="empty">反応判断はなかった。「全部見る」で全判断を表示できる。</li>':t.map(s=>{const r=s.actor==="player",a=Ts(r?e:n.rivalName),o=s.trigger?`${fl[s.trigger]} → `:"",l=s.trigger&&!s.reacted?'<span class="miss">（反応できず）</span>':"",c=s.gambitLabel?`<span class="gambit-tag">⚙ ${Ts(s.gambitLabel)}</span>`:"",u=`<span class="t">${K0(s.tMs)}</span> <span class="who">${a}：</span>${o}<b>${os[s.action]}</b>${l}${c}`,h=`${r?"me":"foe"}${s.reacted?" reacted":""}${s.gambitLabel?" gambit":""}`;return s.reactionLine?`<li class="${h}"><details><summary>${u}</summary><p class="why">${Ts(s.reactionLine)}</p></details></li>`:`<li class="${h}">${u}</li>`}).join(""),ve("review-filter").textContent=La?"反応だけ見る":`全部見る（${n.decisions.length}件）`}function Xw(n){const e=qm(n),t=n.result==="win"?["rv-win","勝利"]:n.result==="draw"?["rv-draw","引き分け（相打ち）"]:["rv-lose","敗北"];ve("review-head").innerHTML=`<b class="${t[0]}">${t[1]}</b> <span>vs ${Ts(n.rivalName)}（${jn[n.rivalPersonality].label}）・${(n.durationMs/1e3).toFixed(0)}秒</span>`,ve("review-summary").textContent=e.summaryText;const i=ve("review-counts");i.innerHTML="";for(const[o,l]of Object.entries(os)){const c=document.createElement("span");c.textContent=`${l} ${e.actionCounts[o]}`,i.appendChild(c)}const s=document.createElement("span");s.className="react",s.textContent=`反応成功 ${e.reactionsHit}/${e.reactionsTotal}`,i.appendChild(s);const r=ve("review-highlights");r.innerHTML="";const a=JE(n);for(const o of a){const l=document.createElement("li");l.className=`hl-${o.kind}`;const c=document.createElement("span");c.className="t",c.textContent=K0(o.tMs),l.append(c,` ${o.text}`),r.appendChild(l)}a.length===0&&(r.innerHTML='<li class="empty">見どころになる場面はなかった。</li>'),J0(n)}ve("btn-review").addEventListener("click",()=>{const n=ee.lastReview;if(!n||sn)return;Tl(!1),La=!1,Xw(n);const e=ve("review-panel");e.classList.remove("hidden"),e.scrollIntoView({behavior:"smooth",block:"start"})});ve("review-filter").addEventListener("click",()=>{ee.lastReview&&(La=!La,J0(ee.lastReview))});ve("review-close").addEventListener("click",Z0);Uh();function $w(){let n=`g${Date.now().toString(36)}`;for(let e=1;ee.gambits.some(t=>t.id===n);e++)n=`g${Date.now().toString(36)}${e}`;return n}function sa(){Ls(),Fh()}function qw(n,e){const t=document.createElement("div");t.className=`gambit-num ${n.className}`;const i=document.createElement("input");i.type="number",i.inputMode="decimal",i.min=String(n.min),i.max=String(n.max),i.step=String(n.step);const s=o=>{i.value=o===null?"":String(+o.toFixed(2))};s(n.value),n.placeholder&&(i.placeholder=n.placeholder),i.title=`${n.label}（${n.min}〜${n.max}${n.unit}${n.optional?"、空欄は既定":""}）`,i.setAttribute("aria-label",i.title);const r=()=>{if(n.optional&&i.value==="")return!1;const o=i.valueAsNumber;return Number.isNaN(o)||o<n.min||o>n.max};i.addEventListener("input",()=>i.classList.toggle("out",r())),i.addEventListener("change",()=>{s(e(i.valueAsNumber)),i.classList.remove("out")});const a=document.createElement("span");if(a.className="gambit-unit",a.textContent=n.unit,n.prefix){const o=document.createElement("span");o.className="gambit-prefix",o.textContent=n.prefix,t.append(o)}return t.append(i,a),t}function Fi(n,e,t,i){const s=document.createElement("button");return s.type="button",s.className=t,s.textContent=n,s.setAttribute("aria-label",e),s.addEventListener("click",i),s}const en=(n,e)=>Object.assign(document.createElement("span"),{className:n,textContent:e});function Fh(){const n=ee.gambits,e=mh(ee.wins);ve("gambit-slots").innerHTML=`<b>${n.length}</b><span>/ 最大 ${e} 枠</span>`,ve("btn-gambit-add").disabled=n.length>=e;const t=ve("gambit-list");if(t.innerHTML="",n.length===0){t.innerHTML='<p class="desc gambit-empty">ルールなし（性格どおりに動く）</p>';return}n.forEach((i,s)=>{const r=!ee.gambitOff.includes(i.id),a=document.createElement("div");a.className=`gcard${r?"":" off"}`;const o=s===0?" rank-1":s<3?" rank-high":"",l=en(`gambit-no${o}`,String(s+1));l.setAttribute("aria-label",`優先${s+1}`);const c=document.createElement("button");c.type="button",c.className="gcard-body",c.setAttribute("aria-label",`ルール${s+1}を編集：${ph(i)}${r?"":"（OFF）"}`),c.append(en("gcard-title",Mh(i)),en("gcard-sub",r0(i))),c.addEventListener("click",()=>Yw(i.id));const u=document.createElement("div");u.className="gcard-ops";const h=Fi("▲","優先度を上げる","gcard-move",()=>{Uf(n,s,s-1)&&sa()}),d=Fi("▼","優先度を下げる","gcard-move",()=>{Uf(n,s,s+1)&&sa()});h.disabled=s===0,d.disabled=s===n.length-1,u.append(h,d);const f=Fi("",`ルール${s+1}を${r?"OFF":"ON"}にする`,"gswitch",()=>{ee.gambitOff=o1(ee.gambitOff,i.id,!r),sa()});f.setAttribute("role","switch"),f.setAttribute("aria-checked",String(r)),f.append(en("gswitch-knob",""),en("gswitch-text",r?"ON":"OFF")),a.append(l,c,u,f),t.appendChild(a)})}const ji=ve("gambit-sheet"),j0=ve("gambit-sheet-title"),vn=ve("gambit-sheet-body"),Uo=ve("gambit-sheet-foot");let Qi=null,es=null;function Q0(){ji.classList.add("open"),ji.inert=!1,ji.setAttribute("aria-hidden","false"),document.body.classList.add("gsheet-lock"),ve("gambit-sheet-close").focus({preventScroll:!0})}function Cs(){ji.classList.remove("open"),ji.inert=!0,ji.setAttribute("aria-hidden","true"),document.body.classList.remove("gsheet-lock"),Qi=null,es=null}function Yw(n){const e=ee.gambits.find(t=>t.id===n);e&&(Qi={id:n,draft:{...e}},Oh(),vn.scrollTop=0,Q0())}function Kw(){if(ee.gambits.length>=mh(ee.wins))return;Qi=null,es=null,j0.textContent="ルールを追加",vn.innerHTML="",Uo.innerHTML="",vn.append(Object.assign(document.createElement("p"),{className:"gs-lead",textContent:"どの型から始める？ あとで条件・行動・数値を変えられます。"}));const n=document.createElement("div");n.className="gs-templates";for(const e of s1){const t=document.createElement("button");t.type="button",t.className=`gs-template${e.key==="custom"?" custom":""}`,t.dataset.template=e.key,t.append(en("gs-template-name",e.title),en("gs-template-hint",e.hint)),e.key!=="custom"&&t.append(en("gs-template-rule",Mh(Of(e,"")))),t.addEventListener("click",()=>{Qi={id:null,draft:Of(e,$w())},Oh(),vn.scrollTop=0}),n.appendChild(t)}vn.appendChild(n),vn.scrollTop=0,Q0()}function eg(){!Qi||!es||(es.title.textContent=Mh(Qi.draft),es.sub.textContent=r0(Qi.draft))}function So(n,e,...t){const i=document.createElement("section");i.className="gs-section";const s=document.createElement("h4");return s.append(en("gs-step",n),e),i.append(s,...t),i}function Ap(n,e,t,i,s,r){const a=document.createElement("div");a.className="gs-choices",a.setAttribute("role","radiogroup"),a.setAttribute("aria-label",n);for(const o of e){a.append(en("gs-group",o.title));const l=document.createElement("div");l.className="gs-grid";for(const c of o.items){const u=document.createElement("button");u.type="button",u.className=`gs-choice${c===t?" on":""}`,u.dataset.value=c,u.setAttribute("role","radio"),u.setAttribute("aria-checked",String(c===t)),u.append(en("gs-choice-name",i(c))),s&&u.append(en("gs-choice-hint",s(c))),u.addEventListener("click",()=>{c!==t&&r(c)}),l.appendChild(u)}a.appendChild(l)}return a}function xc(n,e){var g;const t=document.createElement("div");t.className="gs-stepper";const i=document.createElement("div");i.className="gs-stepper-head",i.append(en("gs-stepper-label",n.label));const s=document.createElement("div");s.className="gs-stepper-row";const r=document.createElement("output");r.className="gs-stepper-val";const a=document.createElement("input");a.type="range",a.className="gs-slider",a.min=String(n.min),a.max=String(n.max),a.step=String(n.step),a.setAttribute("aria-label",`${n.label}（${n.min}〜${n.max}${n.unit}）`);let o=n.value;const l=_=>{o=e(_),f(),eg()},c=n.optional?Fi("既定に戻す",`${n.label}を既定に戻す`,"gs-reset",()=>l(null)):null;c&&i.append(c);const u=((g=n.optional)==null?void 0:g.seed)??n.min,h=Fi("−",`${n.label}を減らす`,"gs-step-btn",()=>l(o===null?u:Ff(o,-1,n))),d=Fi("＋",`${n.label}を増やす`,"gs-step-btn",()=>l(o===null?u:Ff(o,1,n)));function f(){var _;r.innerHTML="",o===null?r.append(Object.assign(document.createElement("b"),{textContent:((_=n.optional)==null?void 0:_.text)??""})):r.append(Object.assign(document.createElement("b"),{textContent:String(+o.toFixed(2))}),en("gs-stepper-unit",`${n.unit}${n.suffix??""}`)),a.value=String(o??u),t.classList.toggle("is-default",o===null),h.disabled=o!==null&&o<=n.min,d.disabled=o!==null&&o>=n.max,c&&(c.disabled=o===null)}return a.addEventListener("input",()=>l(s0(a.valueAsNumber,n))),s.append(h,r,d),t.append(i,s,a),f(),t}function Oh(){const n=Qi;if(!n)return;const e=n.draft,t=n.id===null?-1:ee.gambits.findIndex(c=>c.id===n.id),i=vn.scrollTop;j0.textContent=t<0?"ルールを追加":`ルール${t+1}を編集`,vn.innerHTML="";const s=()=>Oh(),r=document.createElement("div");r.className="gs-preview",es={title:en("gcard-title",""),sub:en("gcard-sub","")},r.append(es.title,es.sub),vn.append(r),eg(),vn.append(So("1","こんなとき（条件）",Ap("条件",e1,e.cond,i1,c=>n1[c],c=>{XT(e,c),s()})));const a=pl[e.cond];a&&vn.append(So("2","しきい値",xc({...a,label:dh[e.cond],value:Ko(e),suffix:QT(e.cond)},c=>(c!==null&&qT(e,c),Ko(e))))),vn.append(So(a?"3":"2","こうする（行動）",Ap("行動",t1,e.action,c=>os[c],null,c=>{$T(e,c),s()})));const o=[];if(vh(e.action)){const c=document.createElement("div");c.className="gs-stepper";const u=document.createElement("div");u.className="gs-stepper-head",u.append(en("gs-stepper-label","向き"));const h=document.createElement("div");h.className="gs-seg",h.setAttribute("role","radiogroup"),h.setAttribute("aria-label","向き");for(const[d,f]of[["left","← 左へ"],["right","右へ →"]]){const g=(e.side??"right")===d,_=Fi(f,`向き：${d==="left"?"左":"右"}`,`gs-seg-btn${g?" on":""}`,()=>{e.side=d,s()});_.setAttribute("role","radio"),_.setAttribute("aria-checked",String(g)),h.appendChild(_)}c.append(u,h),o.push(c)}const l=Ua[e.action];l&&o.push(xc({...l,label:`${os[e.action]}の${l.label}`,value:_a(e),optional:{text:"既定の動き",seed:JT(e.action)??l.min}},c=>(KT(e,c),_a(e)))),o.push(xc({label:"再発動まで（クールダウン）",...ZT,unit:"秒",value:ga(e)/1e3},c=>(c!==null&&YT(e,c),ga(e)/1e3))),vn.append(So(a?"4":"3","細かい調整",...o)),vn.scrollTop=i,Uo.innerHTML="",t>=0&&Uo.append(Fi("削除","このルールを削除","gs-delete",()=>{const c=ee.gambits.findIndex(u=>u.id===n.id);c>=0&&ee.gambits.splice(c,1),ee.gambitOff=ee.gambitOff.filter(u=>u!==n.id),Cs(),sa()})),Uo.append(Fi(t<0?"この内容で追加":"決定",t<0?"ルールを追加":"変更を決定","gs-commit",()=>{if(t<0)ee.gambits.length<mh(ee.wins)&&ee.gambits.push(e);else{const c=ee.gambits.findIndex(u=>u.id===n.id);c>=0&&(ee.gambits[c]=e)}Cs(),sa()}))}ve("gambit-sheet-close").addEventListener("click",Cs);var Pp;(Pp=ji.querySelector(".gsheet-backdrop"))==null||Pp.addEventListener("click",Cs);document.addEventListener("keydown",n=>{n.key==="Escape"&&ji.classList.contains("open")&&Cs()});ve("btn-gambit-add").addEventListener("click",Kw);Cs();Fh();function Ru(){const n=gl(ee.rangeBand,ee.config.weapon),e=n.min!==ee.rangeBand.min||n.max!==ee.rangeBand.max;ve("range-band-note").textContent=e?`${st[ee.config.weapon].label}では ${n.min.toFixed(1)}〜${n.max.toFixed(1)}m`:""}function Zw(){const n={},e=(r,a)=>qw({min:ys.min,max:ys.max,step:ys.step,value:ee.rangeBand[r],unit:"m",label:`基本間合いの${a}`,className:"range-band-num",prefix:a},o=>{Number.isNaN(o)||(ee.rangeBand=e0({...ee.rangeBand,[r]:o},ee.config.weapon,r)),Ls();const l=r==="min"?"max":"min",c=n[l];return c&&(c.value=String(+ee.rangeBand[l].toFixed(2)),c.classList.remove("out")),Ru(),ee.rangeBand[r]}),t=e("min","下限"),i=e("max","上限");n.min=t.querySelector("input")??void 0,n.max=i.querySelector("input")??void 0;const s=Object.assign(document.createElement("span"),{className:"range-band-sep",textContent:"〜"});ve("range-band-inputs").append(t,s,i),Ru()}Zw();const tg=ve("btn-mute"),ng=()=>{tg.textContent=M0()?"🔇":"🔊"};ng();tg.addEventListener("click",()=>{v0(),gA(!M0()),ng(),b0()});ve("btn-battle").addEventListener("click",()=>{v0(),Ww(),Tl(!0),Ot=0,Cu=-1/0;const n=jr(),{spec:e}=kT(Math.random()),t=rh({name:e.name,personality:e.personality,weapon:e.weapon,hairStyle:e.hairStyle,hairColor:e.hairColor,outfitColor:e.outfitColor,ear:e.ear,back:e.back,...Vw(e.name)});ta=0;const i=new N(-55,0,Kr.z),s=new N(Kr.x,0,-0),r=Tp(ee.config,!0,i,Math.atan2(s.x-i.x,s.z-i.z)),a=Tp(t,!1,s,Math.atan2(i.x-s.x,i.z-s.z));Ye=[r,a],xn={version:1,playerName:r.cfg.name,rivalName:a.cfg.name,rivalPersonality:a.cfg.personality,playerPersonality:r.cfg.personality,result:"lose",durationMs:0,decisions:[],hits:[]},Z0(),Ji=!0,r.nextActAt=jo+400,a.nextActAt=jo+650,na.innerHTML="";for(const[o,l]of[["vs-name me",r.cfg.name],["vs-sep","― 対峙 ―"],["vs-name foe",a.cfg.name]]){const c=document.createElement(o==="vs-sep"?"em":"span");o!=="vs-sep"&&(c.className=o),c.textContent=l,na.appendChild(c)}na.classList.add("show"),Yt.copy(sg(0)),Tn.set(0,1.05,0),_n=o0(It),O0(),Zs="",Js=null,ve("battle-log").innerHTML="",ve("battle-result").textContent="",ve("battle-meta").textContent=`あなたのランク: ${n.rank.name}（通算 ${ee.wins} 勝 / 現在 ${ee.streak} 連勝）`,ve("rival-info").textContent=`ライバル: ${a.cfg.name}（性格: ${jn[a.cfg.personality].label} / 武器: ${st[a.cfg.weapon].label}） ― ${ee.config.name}: ${Fa(ee.config.personality,"pre",ws(),Math.random())}`,ve("btn-battle").disabled=!0,ve("btn-battle").textContent="バトル中…",sn=!0,Uh(),z0(),dw(r.gambits,r.gambitNo),At("バトル開始！ フルオートで戦います。判断ログで相棒の考えが分かります。")});function wp(n,e,t,i){const s=Math.max(1,Math.ceil(i/.025)),r=i/s,a=n.vx,o=n.vz;for(let C=0;C<s;C++){if(El(n,t)){n.thrust=0;const J=SE(n.altitude,n.vy,r);n.altitude=J.alt,n.vy=J.vy,n.pos.y=n.altitude,J.landedVy!==null&&Rp(n,J.landedVy,!0),n.altitude<=0&&([n.vx,n.vz]=xf(n.vx,n.vz,0,0,km,r)),n.pos.x+=n.vx*r,n.pos.z+=n.vz*r,nl(n),Ia(n.pos),n.brokenUp||Lp(n,e,r);continue}const I=Math.exp(-(t<n.dashUntil?2.2:5.2)*r);n.vel.multiplyScalar(I),n.engage&&n.engage.kind!=="shoot"&&(t>=n.engage.until?n.engage=null:Uw(n,e,t,r));const F=!sn||n.destroyed?0:qb(ia(n,e),e.altitude,t<n.jumpUntil);if(t<n.rushUntil&&n.vel.copy(Es(n,e)).multiplyScalar(cu()*va(n)),t<n.dashUntil){const J=Es(n,e),X=n.vel.dot(J),Q=n.vx*J.x+n.vz*J.z,te=-(e.vx*J.x+e.vz*J.z),Te=Math.min(rc(n.altitude),rc(F));X>0&&ia(n,e)-nE(Q,te,Te)<=n.dashStop&&(n.vel.addScaledVector(J,-X),n.rushUntil=0)}if(t<n.retreatUntil){const J=Es(e,n),X=n.vel.dot(J),Q=Ch*va(n);ia(n,e)>=n.retreatTo?(X>0&&n.vel.addScaledVector(J,-X),n.retreatUntil=0):X<Q&&n.vel.addScaledVector(J,Q-X)}const P=n.altitude,O=n.vy;n.thrust=Gm(n.altitude,n.vy,F);const V=n.vy+(n.thrust-dl)*r;if([n.altitude,n.vy]=Qb(n.altitude,n.vy,F,r),n.pos.y=n.altitude,eE(P,O,n.altitude)){const J=n.pos.clone();J.y=.12,Tt(J,15261394,7,1.3,420,-.6,!0),X0(n)}P>0&&n.altitude<=0&&Rp(n,V,!1);const H=vf(n.altitude);if([n.vx,n.vz]=xf(n.vx,n.vz,n.vel.x*H,n.vel.z*H,rc(n.altitude),r),n.pos.x+=n.vx*r,n.pos.z+=n.vz*r,nl(n),n.jumpAttackPending&&sn){const J=st[n.cfg.weapon];qo(n.altitude)&&(J.kind==="ranged"||tl(n,e,J.range+46+xu))?(n.jumpAttackPending=!1,wu(n,e,t,'<span class="reason">― 空中からの攻撃</span>',!0)):t>=n.jumpUntil&&(n.jumpAttackPending=!1,J.kind==="ranged"||tl(n,e,J.range+70+xu)?wu(n,e,t,'<span class="reason">― 上昇の終わり際のジャンプ攻撃</span>',qo(n.altitude)):At(`${n.cfg.name} のジャンプ攻撃は届かなかった`))}Ia(n.pos),Lp(n,e,r)}if(n.brokenUp){n.flameRig.visible=!1,n.boostGlow.visible=!1,n.guardMesh.visible=!1;return}const l=t<n.tumbleUntil,c=zn.clamp(n.altitude/1.5,0,1),u=n.pos.y+Math.sin(t*ew+(n.isPlayer?0:1.9))*QA*c;n.doll.group.position.set(n.pos.x,u,n.pos.z);let d=Math.atan2(e.pos.x-n.pos.x,e.pos.z-n.pos.z)-n.facing;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;n.facing+=d*Math.min(1,i*10);const f=new N(Math.cos(n.facing),0,-Math.sin(n.facing)),g=new N(Math.sin(n.facing),0,Math.cos(n.facing)),_=i>0?(n.vx-a)/i:0,m=i>0?(n.vz-o)/i:0,p=zn.clamp((_*g.x+m*g.z)*.006+(n.vx*g.x+n.vz*g.z)*.008-n.vy*.02,-Mo,Mo),v=zn.clamp(-((_*f.x+m*f.z)*.006+(n.vx*f.x+n.vz*f.z)*.008),-Mo,Mo),w=n.doll.isFallen?1:Math.min(1,i*jA);n.tiltPitch+=((n.doll.isFallen?0:p)-n.tiltPitch)*w,n.tiltRoll+=((n.doll.isFallen?0:v)-n.tiltRoll)*w,l?n.tumbleSpin+=i*Jw:n.tumbleSpin!==0&&(n.tumbleSpin=Math.atan2(Math.sin(n.tumbleSpin),Math.cos(n.tumbleSpin)),n.tumbleSpin*=1-Math.min(1,i*8),Math.abs(n.tumbleSpin)<.01&&(n.tumbleSpin=0)),n.doll.group.rotation.set(n.tiltPitch+n.tumbleSpin,n.facing,n.tiltRoll+n.tumbleSpin*.6,"YXZ"),n.doll.setBank(0),n.doll.setLean(0);const y=!n.doll.isFallen&&!l&&vf(n.altitude)>1,R=(n.thrust/Om)**2,T=y?Math.min(1,Math.hypot(n.vx,n.vz)*.02+Math.hypot(_,m)/zm):0,x=n.doll.isFallen?0:1.5*Math.max(R,T);if(n.flameLen+=(x-n.flameLen)*Math.min(1,i*12),n.flameRig.visible=n.flameLen>.03,n.flameRig.visible){n.flameRig.position.copy(n.doll.group.position),n.flameRig.rotation.copy(n.doll.group.rotation);const C=n.flameLen*(.9+Math.sin(t*.06+(n.isPlayer?0:2))*.1);for(const I of n.flameRig.children)I.scale.set(.8+n.flameLen*.3,C,.8+n.flameLen*.3)}n.doll.setThruster(!n.doll.isFallen&&!l&&(t<n.dashUntil||n.altitude>.05));const b=n.boostGlow.material,S=y?zn.clamp(.35+Math.hypot(n.vel.x,n.vel.z)*.03,.35,.75):0;b.opacity+=(S-b.opacity)*Math.min(1,i*6),n.boostGlow.visible=b.opacity>.01,n.boostGlow.scale.setScalar(1+b.opacity*2.2),n.boostGlow.position.set(n.pos.x,u+1.2,n.pos.z);const M=Math.hypot(n.vel.x,n.vel.z);n.doll.setLocomotion(n.doll.isFallen?"idle":t<n.dashUntil?"dash":M>.7?"move":"idle"),n.doll.update(t),n.guardMesh.visible=n.guarding,n.guardMesh.position.set(n.pos.x,u+1.35,n.pos.z),n.guardMesh.rotation.y=n.facing,n.teamRing.position.set(n.pos.x,.02,n.pos.z)}function Ia(n){const e=Math.hypot(n.x,n.z);e>An&&(n.x*=An/e,n.z*=An/e)}function nl(n){const e=n.altitude>0?Jn.filter(u=>u.h>n.altitude):Jn,{x:t,z:i}=Dm(n.pos.x,n.pos.z,gc,e),s=t-n.pos.x,r=i-n.pos.z,a=Math.hypot(s,r);if(a<1e-9)return;n.pos.x=t,n.pos.z=i;const o=(n.vel.x*s+n.vel.z*r)/a;o<0&&(n.vel.x-=s/a*o,n.vel.z-=r/a*o);const l=ME(n.vx,n.vz,s,r);if(l){if(n.vx=l.vx,n.vz=l.vz,sn&&!n.brokenUp&&!n.destroyed){const u=new N(n.pos.x-s/a*gc,n.altitude+1.2,n.pos.z-r/a*gc);Tt(u,16769696,12,4,450,8),l.destroys?(At(`🗼 ${n.cfg.name} が塔に激突！ 速度 ${Math.round(l.speed)} → <span class="dmg">撃破</span>`,"impact"),Ca(n)):(At(`🗼 ${n.cfg.name} が塔に激突！ 速度 ${Math.round(l.speed)}`,"impact"),Bh(n),ig(n))}return}const c=(n.vx*s+n.vz*r)/a;c<0&&(n.vx-=s/a*c,n.vz-=r/a*c)}let Cu=-1/0;const Jw=11;function Bh(n){n.doll.setFlash(!0),window.setTimeout(()=>n.doll.setFlash(!1),170),bh(!1),mi=Math.max(mi,.14),Sl=It}function ig(n){n.tumbleUntil=Ot+uE,n.nextActAt=Math.max(n.nextActAt,n.tumbleUntil),fr(n),n.jumpAttackPending=!1,n.jumpUntil=0,n.dashUntil=0,n.retreatUntil=0,n.rushUntil=0,n.burst=null,n.engage=null,n.guarding=!1,n.evading=!1,n.vel.set(0,0,0),At(`🌀 ${n.cfg.name} は制御を失った！`,"impact")}function Rp(n,e,t){if(n.brokenUp)return;const i=n.pos.clone();i.y=.12,t&&e<Bm&&(Tt(i,15261394,7,1.3,420,-.6,!0),X0(n));const s=yE(e);!s||!sn||n.destroyed||(Tt(i,15261394,12,2.6,600,-.6,!0),Tt(i,16757575,8,3,380,8),s==="destroyed"?(At(`🪨 ${n.cfg.name} が地面に激突！ 落下速度 ${Math.round(-e)} → <span class="dmg">撃破</span>`,"impact"),Ca(n)):(At(`🪨 ${n.cfg.name} が地面に激突！ 落下速度 ${Math.round(-e)}`,"impact"),Bh(n)))}const il=n=>({x:n.pos.x,y:n.altitude,z:n.pos.z});function jw(n,e,t,i){if(!sn||Ji||n.brokenUp||e.brokenUp)return;const s=il(n),r=il(e),{dist:a,t:o,closing:l}=_E(t,s,i,r),c={x:n.vx,y:n.vy,z:n.vz},u={x:e.vx,y:e.vy,z:e.vz},h=Math.hypot(c.x-u.x,c.y-u.y,c.z-u.z);if(!mE(a,h,l,Ot,Cu))return;Cu=Ot;const d=xE(t,s,i,r,ch)??o,f=(v,w)=>({x:v.x+(w.x-v.x)*d,y:v.y+(w.y-v.y)*d,z:v.z+(w.z-v.z)*d}),g=f(t,s),_=f(i,r),m=vE(g,c,_,u);for(const[v,w,y]of[[n,m.pa,m.va],[e,m.pb,m.vb]])v.pos.x=w.x,v.pos.z=w.z,v.altitude=Math.max(0,w.y),v.pos.y=v.altitude,v.vx=y.x,v.vy=y.y,v.vz=y.z,Ia(v.pos);const p=new N((g.x+_.x)/2,(g.y+_.y)/2+1.2,(g.z+_.z)/2);if(Tt(p,16769696,18,5,520,8),Tt(p,6285567,10,3.5,420,6),gE(h))At(`💥 高速衝突！ 相対速度 ${Math.round(h)} → <span class="dmg">両機撃破</span>`,"impact"),Ca(n),Ca(e);else{At(`💥 衝突！ 相対速度 ${Math.round(h)} → 両機とも制御を失った`,"impact");for(const v of[n,e])Bh(v),ig(v)}}function Cp(n){if(!sn||!Ye)return;const e=bE(Ye[0].destroyed,Ye[1].destroyed);e&&(N0=n,Hw(e))}function Lp(n,e,t){let i=n.pos.x-e.pos.x,s=n.pos.z-e.pos.z,r=Math.hypot(i,s);if(r>=Qr)return;r<1e-4?(i=Math.cos(n.facing),s=-Math.sin(n.facing),r=0):(i/=r,s/=r);const a=Math.min((Qr-r)/2,YA*t);if(n.pos.x+=i*a,n.pos.z+=s*a,e.pos.x-=i*a,e.pos.z-=s*a,n.pos.y<=.3&&e.pos.y<=.3){const o=n.vel.x*i+n.vel.z*s;o<0&&(n.vel.x-=i*o,n.vel.z-=s*o);const l=e.vel.x*i+e.vel.z*s;l>0&&(e.vel.x-=i*l,e.vel.z-=s*l);const c=n.vx*i+n.vz*s;c<0&&(n.vx-=i*c,n.vz-=s*c);const u=e.vx*i+e.vz*s;u>0&&(e.vx-=i*u,e.vz-=s*u);const h=Math.max(0,(Qr-(r+a*2))/2);n.pos.x+=i*h,n.pos.z+=s*h,e.pos.x-=i*h,e.pos.z-=s*h}Ia(n.pos),Ia(e.pos),nl(n),nl(e)}function sg(n){const e=n*n*(3-2*n),t=-.55+e*1.25,i=80-e*11,s=18+e*17;return new N(Math.sin(t)*i,s,Math.cos(t)*i)}function Ms(n){const e=[];for(const t of[.3,1.3,2.35]){const i=n.pos.clone();i.y+=t,e.push(i)}if(n.doll.isFallen){const t=new N(-Math.sin(n.facing),0,-Math.cos(n.facing));for(const i of[.8,1.5,2]){const s=n.pos.clone().addScaledVector(t,i);s.y+=.35,e.push(s)}}return e}function rg(n,e){yo+=(n-yo)*(1-Math.exp(-4*e)),Math.abs(bt.fov-yo)>.01&&(bt.fov=yo,bt.updateProjectionMatrix())}function Qw(n){if(!Ye)return;const[e,t]=Ye,i=It,s=ti,r=bt.aspect;let a=null,o=1/0;for(const b of Rs){if(b.owner!==t||b.target!==e||!b.state.locked)continue;const S=Math.hypot(b.state.pos.x-e.pos.x,b.state.pos.y-e.altitude-di,b.state.pos.z-e.pos.z);S<o&&(o=S,a=b)}_n=h1(_n,i,a!==null);const l=ka(e,t);Po+=(l-Po)*(1-Math.exp(-1.5*n));const c=hi(e.pos),u=hi(t.pos),h=m1(l,n),d=Zr(c,u),f=Zr(u,c);$t.meYaw=Gf($t.meYaw,d.yaw,h),$t.mePitch+=(d.pitch-$t.mePitch)*h,$t.foeYaw=Gf($t.foeYaw,f.yaw,h),$t.foePitch+=(f.pitch-$t.foePitch)*h;let g=_n.shot,_,m=s.fovBase,p=[...Ms(e),...Ms(t)],v=[c,u];const w=nr,y=ir;if(_n.shot==="killcam"&&w&&y)if(w.destroyed&&y.destroyed){g="killcam-draw";const b={x:(e.pos.x+t.pos.x)/2,y:(e.pos.y+t.pos.y)/2,z:(e.pos.z+t.pos.z)/2},S=zn.clamp(6+l*.9,7,120);_=Hf(b,Su+(i-_n.since)/5200,S,2+l*.15),p=[c,u],v=void 0}else{const b=hi(w.pos),S=hi(y.pos),M=d1(_n,i,y.brokenUp);if(g=`killcam-${M}`,M==="follow"){const C=Zr(b,S);v=[b,S],_=go(w.pos,y.pos,C.yaw,C.pitch,Io(l1,r),v),p=[...Ms(w),...y.brokenUp?[S]:Ms(y)]}else _=Hf(w.pos,Su+(i-_n.since)/5200,5.2,1.5),p=Ms(w),v=void 0}else if(_n.shot==="missileCut"&&a)Zs!==g?Dr.set(a.state.pos.x,a.state.pos.y,a.state.pos.z):Dr.lerp(new N(a.state.pos.x,a.state.pos.y,a.state.pos.z),1-Math.exp(-10*n)),v=[{x:Dr.x,y:Dr.y,z:Dr.z},c],_=go(t.pos,e.pos,$t.foeYaw,$t.foePitch,Io(Bf,r),v),p=[v[0],...Ms(e)];else if(_n.shot==="foeCut"||_n.shot==="missileCut")g="foeCut",v=[u,c],_=go(t.pos,e.pos,$t.foeYaw,$t.foePitch,Io(Bf,r),v);else{g="base";const b=p1(f1(Po),c1(_n,i),r);m=b.fov,_=go(e.pos,t.pos,$t.meYaw,$t.mePitch,b.params,v)}const R=y1(_,p,m,r,v);Gr+=(R-Gr)*(1-Math.exp(-(R>Gr?10:1.2)*n));const T=u0(_,Gr,v);if(g!==Zs){const b={pos:{x:Yt.x,y:Yt.y,z:Yt.z},look:{x:Tn.x,y:Tn.y,z:Tn.z}};Js=Zs&&!x1(b,T)?b:null,_p=i,xp=g.startsWith("killcam")?s.killcamBlendMs:s.blendMs,Zs=g}let x=T;if(Js){const b=_1(i,_p,xp);b>=1?Js=null:x=v1(Js,T,b)}Yt.set(x.pos.x,x.pos.y,x.pos.z),Tn.set(x.look.x,x.look.y,x.look.z),rg(m,n),bt.position.copy(Yt),bt.lookAt(Tn),bt.updateMatrixWorld()}function eR(n,e){const t=Ma==="immersive"&&Ye!==null;t?Qw(e):tR(n,e);let i=Yt.distanceTo(Tn);if(t&&Ye)for(const s of Ye)i=Math.max(i,Yt.distanceTo(s.pos));if(yu.near=i+25,yu.far=i+260,D0.position.copy(Yt),mi>0){const s=1-(It-Sl)/sw;if(s<=0)mi=0;else{const r=mi*s,a=new N().setFromMatrixColumn(bt.matrixWorld,0),o=new N().setFromMatrixColumn(bt.matrixWorld,1),l=a.multiplyScalar(Math.sin(It*.09)*r).addScaledVector(o,Math.cos(It*.13)*r*.7);bt.position.copy(Yt).add(l),bt.lookAt(Tn.clone().add(l))}}}function tR(n,e){rg(ti.fovBase,e);let t,i,s=2.4;if(Ye){const[r,a]=Ye,o=r.pos.clone().add(a.pos).multiplyScalar(.5);ta+=(o.y-ta)*(1-Math.exp(-1.5*e)),o.y=ta;const l=ka(r,a);if(Lh&&nr){const u=(ir?Math.atan2(nr.pos.x-ir.pos.x,nr.pos.z-ir.pos.z):0)+.9+n/5200,h=Math.min(1,Math.max(0,(n-N0)/6e3)),d=zn.clamp(8+l*.9-h*.8,7,120);t=o.clone().add(new N(Math.sin(u)*d,3+l*.15,Math.cos(u)*d)),i=o.clone(),i.y+=.95}else if(Ji)t=sg(Math.min(1,n/jo)).add(o),i=o.clone(),i.y+=1.05,s=7;else{const c=Math.sin(n/11e3)*.75+Math.sin(n/4700)*.18+.65,u=zn.clamp(18+l*.55,24,120),h=u*.88,d=u*.45;t=o.clone().add(new N(Math.sin(c)*h,d,Math.cos(c)*h)),t.y+=Math.sin(n/1900)*.06,i=o.clone(),i.y+=1.05}}else t=F0.clone(),i=new N(0,1.1,0);if(Yt.lerp(t,1-Math.exp(-s*e)),Tn.lerp(i,1-Math.exp(-3.2*e)),bt.position.copy(Yt),bt.lookAt(Tn),Ye){bt.updateMatrixWorld();for(let r=0;r<6;r++){let a=!1;for(const l of Ye){for(const c of Ms(l)){const u=c.clone().project(bt);if(Math.abs(u.x)>.82||u.y>.82||u.y<-.88||u.z>1){a=!0;break}}if(a)break}if(!a)break;const o=Yt.clone().sub(Tn).normalize();Yt.addScaledVector(o,1.6),Yt.y+=.2,bt.position.copy(Yt),bt.lookAt(Tn),bt.updateMatrixWorld()}}}function Ip(n){Ne.remove(n.mesh),Ne.remove(n.trail),n.mesh.material.dispose(),n.trail.material.dispose()}function nR(n,e){Pw(n,e),Sa=Sa.filter(t=>{const i=(n-t.start)/t.dur,s=t.mesh.position,r=i>=1?t.to:new N().lerpVectors(t.from,t.to,i),a=hl(s.x,s.y,s.z,r.x,r.y,r.z,I0);if(a){const o=Math.hypot(s.x-a.x,s.z-a.z)||1,l=new N(a.x+(s.x-a.x)/o*a.r,s.y,a.z+(s.z-a.z)/o*a.r);return Tt(l,10482175,6,1.8,300,4),Ip(t),t.onBlocked(),!1}return i>=1?(Ip(t),t.onHit(),!1):(t.mesh.position.lerpVectors(t.from,t.to,i),t.trail.position.copy(t.mesh.position),t.trail.lookAt(t.to),!0)}),ba=ba.filter(t=>t.until<=n?(Ne.remove(t.mesh),!1):(t.mesh.material.opacity=Math.max(0,(t.until-n)/t.fadeMs)*.95,t.mesh.rotation.z-=e*7,!0)),Ea=Ea.filter(t=>t.until<=n?(Ne.remove(t.mesh),!1):(t.mesh.material.opacity=Math.max(0,(t.until-n)/t.fadeMs)*.32,!0)),Ta=Ta.filter(t=>{if(t.until<=n)return Ne.remove(t.mesh),t.mesh.material.dispose(),!1;const i=1-Math.max(0,(t.until-n)/t.fadeMs);return t.mesh.scale.setScalar(1+i*2.6),t.mesh.material.opacity=.7*(1-i),!0}),Aa=Aa.filter(t=>{const i=n-t.born;return i>=t.life?(Ne.remove(t.mesh),t.mesh.material.dispose(),!1):(t.vel.y-=t.gravity*e,t.mesh.position.addScaledVector(t.vel,e),t.mesh.position.y<.04&&(t.mesh.position.y=.04),t.mesh.material.opacity=.95*(1-i/t.life),t.mesh.scale.setScalar(.6+.8*(i/t.life)),!0)});for(const t of rw){t.rotation.y+=e*.9;const i=typeof t.userData.baseY=="number"?t.userData.baseY:1.35;t.position.y=i+Math.sin(n/700+t.position.x)*.12}}let vc=0;function ag(n){requestAnimationFrame(ag);const e=Math.min(.1,vc>0?(n-vc)/1e3:.016);if(vc=n,Jo==="home"&&Bn&&(xa||(gu+=.0035),Bn.group.rotation.y=gu,Bn.update(n),Oa.render(Ks,Ah)),Jo==="battle"){It=n;const t=n<Ih?0:n<Ph?iw:1,i=e*t;Ot+=i*1e3;const s=Ot;if(Ji&&s>=jo&&(Ji=!1,na.classList.remove("show")),sn&&Ye&&!Ji){for(const[r,a]of Ye.entries()){if(Cw(a,s),a.pendingAttack){s>=a.windupUntil&&Gw(a,s);continue}s>=a.nextActAt&&!a.destroyed&&Dw(a,Ye[1-r],s)}Cp(s)}if(sn&&Ye&&pw(Ye[0],s),nR(s,i),Ye){const r=il(Ye[0]),a=il(Ye[1]);wp(Ye[0],Ye[1],s,i),wp(Ye[1],Ye[0],s,i),jw(Ye[0],Ye[1],r,a),Ji||Cp(s);for(const o of Ye)$0(o,s)}bw(s,i),eR(s,e),vr.render(Ne,bt)}}requestAnimationFrame(ag);if(fp){const n=ve("welcome");n.textContent=fp,n.classList.remove("hidden")}WA();Ba();A0("home");Ls();export{Zo as I,hp as N,Eh as W};
