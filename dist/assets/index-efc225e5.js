import sh from"https://unpkg.com/three@0.122.0/examples/jsm/libs/stats.module.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Io="149",ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rh=0,ea=1,oh=2,lc=1,cc=2,ls=3,Sn=0,Nt=1,Mn=2,Nn=0,Ci=1,ta=2,na=3,ia=4,ah=5,Ti=100,lh=101,ch=102,sa=103,ra=104,hh=200,uh=201,dh=202,fh=203,hc=204,uc=205,ph=206,mh=207,gh=208,_h=209,xh=210,vh=0,yh=1,Mh=2,go=3,bh=4,wh=5,Sh=6,Th=7,lr=0,Eh=1,Ah=2,wn=0,Ch=1,Lh=2,Rh=3,Ph=4,Ih=5,dc=300,Ii=301,Di=302,_o=303,xo=304,cr=306,Ni=1e3,Vt=1001,rr=1002,dt=1003,vo=1004,tr=1005,Ct=1006,fc=1007,Qn=1008,ei=1009,Dh=1010,Nh=1011,pc=1012,Fh=1013,Xn=1014,Dn=1015,ds=1016,zh=1017,Oh=1018,Li=1020,Bh=1021,Ht=1023,Uh=1024,kh=1025,$n=1026,Fi=1027,Gh=1028,Vh=1029,Hh=1030,Wh=1031,qh=1033,br=33776,wr=33777,Sr=33778,Tr=33779,oa=35840,aa=35841,la=35842,ca=35843,jh=36196,ha=37492,ua=37496,da=37808,fa=37809,pa=37810,ma=37811,ga=37812,_a=37813,xa=37814,va=37815,ya=37816,Ma=37817,ba=37818,wa=37819,Sa=37820,Ta=37821,Er=36492,Xh=36283,Ea=36284,Aa=36285,Ca=36286,fs=2300,zi=2301,Ar=2302,La=2400,Ra=2401,Pa=2402,Yh=2500,Kh=0,mc=1,yo=2,ti=3e3,ke=3001,Zh=3200,$h=3201,hr=0,Jh=1,sn="srgb",ps="srgb-linear",Cr=7680,Qh=519,Mo=35044,Ia="300 es",bo=1035;class ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Da=1234567;const Ri=Math.PI/180,ms=180/Math.PI;function Jt(){const c=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[c&255]+gt[c>>8&255]+gt[c>>16&255]+gt[c>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function _t(c,e,t){return Math.max(e,Math.min(t,c))}function Do(c,e){return(c%e+e)%e}function eu(c,e,t,n,i){return n+(c-e)*(i-n)/(t-e)}function tu(c,e,t){return c!==e?(t-c)/(e-c):0}function hs(c,e,t){return(1-t)*c+t*e}function nu(c,e,t,n){return hs(c,e,1-Math.exp(-t*n))}function iu(c,e=1){return e-Math.abs(Do(c,e*2)-e)}function su(c,e,t){return c<=e?0:c>=t?1:(c=(c-e)/(t-e),c*c*(3-2*c))}function ru(c,e,t){return c<=e?0:c>=t?1:(c=(c-e)/(t-e),c*c*c*(c*(c*6-15)+10))}function ou(c,e){return c+Math.floor(Math.random()*(e-c+1))}function au(c,e){return c+Math.random()*(e-c)}function lu(c){return c*(.5-Math.random())}function cu(c){c!==void 0&&(Da=c);let e=Da+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hu(c){return c*Ri}function uu(c){return c*ms}function wo(c){return(c&c-1)===0&&c!==0}function gc(c){return Math.pow(2,Math.ceil(Math.log(c)/Math.LN2))}function or(c){return Math.pow(2,Math.floor(Math.log(c)/Math.LN2))}function du(c,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),a=r(t/2),l=s((e+n)/2),u=r((e+n)/2),d=s((e-n)/2),h=r((e-n)/2),p=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":c.set(o*u,a*d,a*h,o*l);break;case"YZY":c.set(a*h,o*u,a*d,o*l);break;case"ZXZ":c.set(a*d,a*h,o*u,o*l);break;case"XZX":c.set(o*u,a*g,a*p,o*l);break;case"YXY":c.set(a*p,o*u,a*g,o*l);break;case"ZYZ":c.set(a*g,a*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bn(c,e){switch(e.constructor){case Float32Array:return c;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function je(c,e){switch(e.constructor){case Float32Array:return c;case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}var fu=Object.freeze({__proto__:null,DEG2RAD:Ri,RAD2DEG:ms,ceilPowerOfTwo:gc,clamp:_t,damp:nu,degToRad:hu,denormalize:bn,euclideanModulo:Do,floorPowerOfTwo:or,generateUUID:Jt,inverseLerp:tu,isPowerOfTwo:wo,lerp:hs,mapLinear:eu,normalize:je,pingpong:iu,radToDeg:uu,randFloat:au,randFloatSpread:lu,randInt:ou,seededRandom:cu,setQuaternionFromProperEuler:du,smootherstep:ru,smoothstep:su});class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,o,a,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=a,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],a=n[6],l=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],m=i[0],f=i[3],_=i[6],x=i[1],v=i[4],y=i[7],b=i[2],T=i[5],R=i[8];return s[0]=r*m+o*x+a*b,s[3]=r*f+o*v+a*T,s[6]=r*_+o*y+a*R,s[1]=l*m+u*x+d*b,s[4]=l*f+u*v+d*T,s[7]=l*_+u*y+d*R,s[2]=h*m+p*x+g*b,s[5]=h*f+p*v+g*T,s[8]=h*_+p*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],l=e[7],u=e[8];return t*r*u-t*o*l-n*s*u+n*o*a+i*s*l-i*r*a}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],l=e[7],u=e[8],d=u*r-o*l,h=o*a-u*s,p=l*s-r*a,g=t*d+n*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=d*m,e[1]=(i*l-u*n)*m,e[2]=(o*n-i*r)*m,e[3]=h*m,e[4]=(u*t-i*a)*m,e[5]=(i*s-o*t)*m,e[6]=p*m,e[7]=(n*a-l*t)*m,e[8]=(r*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const a=Math.cos(s),l=Math.sin(s);return this.set(n*a,n*l,-n*(a*r+l*o)+r+e,-i*l,i*a,-i*(-l*r+a*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Lr.makeScale(e,t)),this}rotate(e){return this.premultiply(Lr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lr=new Dt;function _c(c){for(let e=c.length-1;e>=0;--e)if(c[e]>=65535)return!0;return!1}function gs(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function Jn(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function nr(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}const Rr={[sn]:{[ps]:Jn},[ps]:{[sn]:nr}},Mt={legacyMode:!0,get workingColorSpace(){return ps},set workingColorSpace(c){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(c,e,t){if(this.legacyMode||e===t||!e||!t)return c;if(Rr[e]&&Rr[e][t]!==void 0){const n=Rr[e][t];return c.r=n(c.r),c.g=n(c.g),c.b=n(c.b),c}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(c,e){return this.convert(c,this.workingColorSpace,e)},toWorkingColorSpace:function(c,e){return this.convert(c,e,this.workingColorSpace)}},xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},st={r:0,g:0,b:0},jt={h:0,s:0,l:0},ws={h:0,s:0,l:0};function Pr(c,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?c+(e-c)*6*t:t<1/2?e:t<2/3?c+(e-c)*6*(2/3-t):c}function Ss(c,e){return e.r=c.r,e.g=c.g,e.b=c.b,e}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Mt.workingColorSpace){if(e=Do(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Pr(r,s,e+1/3),this.g=Pr(r,s,e),this.b=Pr(r,s,e-1/3)}return Mt.toWorkingColorSpace(this,i),this}setStyle(e,t=sn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Mt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Mt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(a,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Mt.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Mt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=sn){const n=xc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return Mt.fromWorkingColorSpace(Ss(this,st),e),_t(st.r*255,0,255)<<16^_t(st.g*255,0,255)<<8^_t(st.b*255,0,255)<<0}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(Ss(this,st),t);const n=st.r,i=st.g,s=st.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let a,l;const u=(o+r)/2;if(o===r)a=0,l=0;else{const d=r-o;switch(l=u<=.5?d/(r+o):d/(2-r-o),r){case n:a=(i-s)/d+(i<s?6:0);break;case i:a=(s-n)/d+2;break;case s:a=(n-i)/d+4;break}a/=6}return e.h=a,e.s=l,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(Ss(this,st),t),e.r=st.r,e.g=st.g,e.b=st.b,e}getStyle(e=sn){return Mt.fromWorkingColorSpace(Ss(this,st),e),e!==sn?`color(${e} ${st.r} ${st.g} ${st.b})`:`rgb(${st.r*255|0},${st.g*255|0},${st.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(jt),jt.h+=e,jt.s+=t,jt.l+=n,this.setHSL(jt.h,jt.s,jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jt),e.getHSL(ws);const n=hs(jt.h,ws.h,t),i=hs(jt.s,ws.s,t),s=hs(jt.l,ws.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Te.NAMES=xc;let ci;class vc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ci===void 0&&(ci=gs("canvas")),ci.width=e.width,ci.height=e.height;const n=ci.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Jn(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jn(t[n]/255)*255):t[n]=Jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class yc{constructor(e=null){this.isSource=!0,this.uuid=Jt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Ir(i[r].image)):s.push(Ir(i[r]))}else s=Ir(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ir(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?vc.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pu=0;class ft extends ri{constructor(e=ft.DEFAULT_IMAGE,t=ft.DEFAULT_MAPPING,n=Vt,i=Vt,s=Ct,r=Qn,o=Ht,a=ei,l=ft.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Jt(),this.name="",this.source=new yc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ni:e.x=e.x-Math.floor(e.x);break;case Vt:e.x=e.x<0?0:1;break;case rr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ni:e.y=e.y-Math.floor(e.y);break;case Vt:e.y=e.y<0?0:1;break;case rr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ft.DEFAULT_IMAGE=null;ft.DEFAULT_MAPPING=dc;ft.DEFAULT_ANISOTROPY=1;class Xe{constructor(e=0,t=0,n=0,i=1){Xe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const a=e.elements,l=a[0],u=a[4],d=a[8],h=a[1],p=a[5],g=a[9],m=a[2],f=a[6],_=a[10];if(Math.abs(u-h)<.01&&Math.abs(d-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+m)<.1&&Math.abs(g+f)<.1&&Math.abs(l+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,y=(p+1)/2,b=(_+1)/2,T=(u+h)/4,R=(d+m)/4,w=(g+f)/4;return v>y&&v>b?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=T/n,s=R/n):y>b?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=w/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=R/s,i=w/s),this.set(n,i,s,t),this}let x=Math.sqrt((f-g)*(f-g)+(d-m)*(d-m)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(d-m)/x,this.z=(h-u)/x,this.w=Math.acos((l+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ni extends ri{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new ft(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ct,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mc extends ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mu extends ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let an=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let a=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3];const h=s[r+0],p=s[r+1],g=s[r+2],m=s[r+3];if(o===0){e[t+0]=a,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(d!==m||a!==h||l!==p||u!==g){let f=1-o;const _=a*h+l*p+u*g+d*m,x=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const b=Math.sqrt(v),T=Math.atan2(b,_*x);f=Math.sin(f*T)/b,o=Math.sin(o*T)/b}const y=o*x;if(a=a*f+h*y,l=l*f+p*y,u=u*f+g*y,d=d*f+m*y,f===1-o){const b=1/Math.sqrt(a*a+l*l+u*u+d*d);a*=b,l*=b,u*=b,d*=b}}e[t]=a,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],a=n[i+1],l=n[i+2],u=n[i+3],d=s[r],h=s[r+1],p=s[r+2],g=s[r+3];return e[t]=o*g+u*d+a*p-l*h,e[t+1]=a*g+u*h+l*d-o*p,e[t+2]=l*g+u*p+o*h-a*d,e[t+3]=u*g-o*d-a*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,a=Math.sin,l=o(n/2),u=o(i/2),d=o(s/2),h=a(n/2),p=a(i/2),g=a(s/2);switch(r){case"XYZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"YZX":this._x=h*u*d+l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d-h*p*g;break;case"XZY":this._x=h*u*d-l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-a)*p,this._y=(s-l)*p,this._z=(r-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(u-a)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(s+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-l)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(a+u)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(r-i)/p,this._x=(s+l)/p,this._y=(a+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,a=t._y,l=t._z,u=t._w;return this._x=n*u+r*o+i*l-s*a,this._y=i*u+r*a+s*o-n*l,this._z=s*u+r*l+n*a-i*o,this._w=r*u-n*o-i*a-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const a=1-o*o;if(a<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(a),u=Math.atan2(l,o),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=r*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Na.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Na.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,a=e.w,l=a*t+r*i-o*n,u=a*n+o*t-s*i,d=a*i+s*n-r*t,h=-s*t-r*n-o*i;return this.x=l*a+h*-s+u*-o-d*-r,this.y=u*a+h*-r+d*-s-l*-o,this.z=d*a+h*-o+l*-r-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,a=t.z;return this.x=i*a-s*o,this.y=s*r-n*a,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dr.copy(this).projectOnVector(e),this.sub(Dr)}reflect(e){return this.sub(Dr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new O,Na=new an;class Ui{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let a=0,l=e.length;a<l;a+=3){const u=e[a],d=e[a+1],h=e[a+2];u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>s&&(s=u),d>r&&(r=d),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let a=0,l=e.count;a<l;a++){const u=e.getX(a),d=e.getY(a),h=e.getZ(a);u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>s&&(s=u),d>r&&(r=d),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)Un.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(Un)}else n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox),Nr.applyMatrix4(e.matrixWorld),this.union(Nr);const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),Ts.subVectors(this.max,ji),hi.subVectors(e.a,ji),ui.subVectors(e.b,ji),di.subVectors(e.c,ji),Tn.subVectors(ui,hi),En.subVectors(di,ui),kn.subVectors(hi,di);let t=[0,-Tn.z,Tn.y,0,-En.z,En.y,0,-kn.z,kn.y,Tn.z,0,-Tn.x,En.z,0,-En.x,kn.z,0,-kn.x,-Tn.y,Tn.x,0,-En.y,En.x,0,-kn.y,kn.x,0];return!Fr(t,hi,ui,di,Ts)||(t=[1,0,0,0,1,0,0,0,1],!Fr(t,hi,ui,di,Ts))?!1:(Es.crossVectors(Tn,En),t=[Es.x,Es.y,Es.z],Fr(t,hi,ui,di,Ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Un.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const un=[new O,new O,new O,new O,new O,new O,new O,new O],Un=new O,Nr=new Ui,hi=new O,ui=new O,di=new O,Tn=new O,En=new O,kn=new O,ji=new O,Ts=new O,Es=new O,Gn=new O;function Fr(c,e,t,n,i){for(let s=0,r=c.length-3;s<=r;s+=3){Gn.fromArray(c,s);const o=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),a=e.dot(Gn),l=t.dot(Gn),u=n.dot(Gn);if(Math.max(-Math.max(a,l,u),Math.min(a,l,u))>o)return!1}return!0}const gu=new Ui,Xi=new O,zr=new O;let ki=class{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);const t=Xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(zr)),this.expandByPoint(Xi.copy(e.center).sub(zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const dn=new O,Or=new O,As=new O,An=new O,Br=new O,Cs=new O,Ur=new O;let ur=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.direction).multiplyScalar(t).add(this.origin),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Or.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),An.copy(this.origin).sub(Or);const s=e.distanceTo(t)*.5,r=-this.direction.dot(As),o=An.dot(this.direction),a=-An.dot(As),l=An.lengthSq(),u=Math.abs(1-r*r);let d,h,p,g;if(u>0)if(d=r*a-o,h=r*o-a,g=s*u,d>=0)if(h>=-g)if(h<=g){const m=1/u;d*=m,h*=m,p=d*(d+r*h+2*o)+h*(r*d+h+2*a)+l}else h=s,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*a)+l;else h=-s,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*a)+l;else h<=-g?(d=Math.max(0,-(-r*s+o)),h=d>0?-s:Math.min(Math.max(-s,-a),s),p=-d*d+h*(h+2*a)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-a),s),p=h*(h+2*a)+l):(d=Math.max(0,-(r*s+o)),h=d>0?s:Math.min(Math.max(-s,-a),s),p=-d*d+h*(h+2*a)+l);else h=r>0?-s:s,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*a)+l;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(As).multiplyScalar(h).add(Or),p}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,a=n+r;return o<0&&a<0?null:o<0?this.at(a,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,a;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,r=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,r=(e.min.y-h.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),d>=0?(o=(e.min.z-h.z)*d,a=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,a=(e.min.z-h.z)*d),n>a||o>i)||((o>n||n!==n)&&(n=o),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,i,s){Br.subVectors(t,e),Cs.subVectors(n,e),Ur.crossVectors(Br,Cs);let r=this.direction.dot(Ur),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;An.subVectors(this.origin,e);const a=o*this.direction.dot(Cs.crossVectors(An,Cs));if(a<0)return null;const l=o*this.direction.dot(Br.cross(An));if(l<0||a+l>r)return null;const u=-o*An.dot(Ur);return u<0?null:this.at(u/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Pe{constructor(){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,o,a,l,u,d,h,p,g,m,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=r,_[9]=o,_[13]=a,_[2]=l,_[6]=u,_[10]=d,_[14]=h,_[3]=p,_[7]=g,_[11]=m,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fi.setFromMatrixColumn(e,0).length(),s=1/fi.setFromMatrixColumn(e,1).length(),r=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),a=Math.cos(i),l=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=r*u,p=r*d,g=o*u,m=o*d;t[0]=a*u,t[4]=-a*d,t[8]=l,t[1]=p+g*l,t[5]=h-m*l,t[9]=-o*a,t[2]=m-h*l,t[6]=g+p*l,t[10]=r*a}else if(e.order==="YXZ"){const h=a*u,p=a*d,g=l*u,m=l*d;t[0]=h+m*o,t[4]=g*o-p,t[8]=r*l,t[1]=r*d,t[5]=r*u,t[9]=-o,t[2]=p*o-g,t[6]=m+h*o,t[10]=r*a}else if(e.order==="ZXY"){const h=a*u,p=a*d,g=l*u,m=l*d;t[0]=h-m*o,t[4]=-r*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*u,t[9]=m-h*o,t[2]=-r*l,t[6]=o,t[10]=r*a}else if(e.order==="ZYX"){const h=r*u,p=r*d,g=o*u,m=o*d;t[0]=a*u,t[4]=g*l-p,t[8]=h*l+m,t[1]=a*d,t[5]=m*l+h,t[9]=p*l-g,t[2]=-l,t[6]=o*a,t[10]=r*a}else if(e.order==="YZX"){const h=r*a,p=r*l,g=o*a,m=o*l;t[0]=a*u,t[4]=m-h*d,t[8]=g*d+p,t[1]=d,t[5]=r*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*d+g,t[10]=h-m*d}else if(e.order==="XZY"){const h=r*a,p=r*l,g=o*a,m=o*l;t[0]=a*u,t[4]=-d,t[8]=l*u,t[1]=h*d+m,t[5]=r*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*u,t[10]=m*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_u,e,xu)}lookAt(e,t,n){const i=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),Cn.crossVectors(n,Pt),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),Cn.crossVectors(n,Pt)),Cn.normalize(),Ls.crossVectors(Pt,Cn),i[0]=Cn.x,i[4]=Ls.x,i[8]=Pt.x,i[1]=Cn.y,i[5]=Ls.y,i[9]=Pt.y,i[2]=Cn.z,i[6]=Ls.z,i[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],a=n[8],l=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],m=n[6],f=n[10],_=n[14],x=n[3],v=n[7],y=n[11],b=n[15],T=i[0],R=i[4],w=i[8],E=i[12],D=i[1],H=i[5],W=i[9],L=i[13],P=i[2],N=i[6],z=i[10],$=i[14],G=i[3],X=i[7],J=i[11],oe=i[15];return s[0]=r*T+o*D+a*P+l*G,s[4]=r*R+o*H+a*N+l*X,s[8]=r*w+o*W+a*z+l*J,s[12]=r*E+o*L+a*$+l*oe,s[1]=u*T+d*D+h*P+p*G,s[5]=u*R+d*H+h*N+p*X,s[9]=u*w+d*W+h*z+p*J,s[13]=u*E+d*L+h*$+p*oe,s[2]=g*T+m*D+f*P+_*G,s[6]=g*R+m*H+f*N+_*X,s[10]=g*w+m*W+f*z+_*J,s[14]=g*E+m*L+f*$+_*oe,s[3]=x*T+v*D+y*P+b*G,s[7]=x*R+v*H+y*N+b*X,s[11]=x*w+v*W+y*z+b*J,s[15]=x*E+v*L+y*$+b*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],a=e[9],l=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],m=e[7],f=e[11],_=e[15];return g*(+s*a*d-i*l*d-s*o*h+n*l*h+i*o*p-n*a*p)+m*(+t*a*p-t*l*h+s*r*h-i*r*p+i*l*u-s*a*u)+f*(+t*l*d-t*o*p-s*r*d+n*r*p+s*o*u-n*l*u)+_*(-i*o*u-t*a*d+t*o*h+i*r*d-n*r*h+n*a*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],l=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],m=e[13],f=e[14],_=e[15],x=d*f*l-m*h*l+m*a*p-o*f*p-d*a*_+o*h*_,v=g*h*l-u*f*l-g*a*p+r*f*p+u*a*_-r*h*_,y=u*m*l-g*d*l+g*o*p-r*m*p-u*o*_+r*d*_,b=g*d*a-u*m*a-g*o*h+r*m*h+u*o*f-r*d*f,T=t*x+n*v+i*y+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=x*R,e[1]=(m*h*s-d*f*s-m*i*p+n*f*p+d*i*_-n*h*_)*R,e[2]=(o*f*s-m*a*s+m*i*l-n*f*l-o*i*_+n*a*_)*R,e[3]=(d*a*s-o*h*s-d*i*l+n*h*l+o*i*p-n*a*p)*R,e[4]=v*R,e[5]=(u*f*s-g*h*s+g*i*p-t*f*p-u*i*_+t*h*_)*R,e[6]=(g*a*s-r*f*s-g*i*l+t*f*l+r*i*_-t*a*_)*R,e[7]=(r*h*s-u*a*s+u*i*l-t*h*l-r*i*p+t*a*p)*R,e[8]=y*R,e[9]=(g*d*s-u*m*s-g*n*p+t*m*p+u*n*_-t*d*_)*R,e[10]=(r*m*s-g*o*s+g*n*l-t*m*l-r*n*_+t*o*_)*R,e[11]=(u*o*s-r*d*s-u*n*l+t*d*l+r*n*p-t*o*p)*R,e[12]=b*R,e[13]=(u*m*i-g*d*i+g*n*h-t*m*h-u*n*f+t*d*f)*R,e[14]=(g*o*i-r*m*i-g*n*a+t*m*a+r*n*f-t*o*f)*R,e[15]=(r*d*i-u*o*i+u*n*a-t*d*a-r*n*h+t*o*h)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,a=e.z,l=s*r,u=s*o;return this.set(l*r+n,l*o-i*a,l*a+i*o,0,l*o+i*a,u*o+n,u*a-i*r,0,l*a-i*o,u*a+i*r,s*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,a=t._w,l=s+s,u=r+r,d=o+o,h=s*l,p=s*u,g=s*d,m=r*u,f=r*d,_=o*d,x=a*l,v=a*u,y=a*d,b=n.x,T=n.y,R=n.z;return i[0]=(1-(m+_))*b,i[1]=(p+y)*b,i[2]=(g-v)*b,i[3]=0,i[4]=(p-y)*T,i[5]=(1-(h+_))*T,i[6]=(f+x)*T,i[7]=0,i[8]=(g+v)*R,i[9]=(f-x)*R,i[10]=(1-(h+m))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=fi.set(i[0],i[1],i[2]).length();const r=fi.set(i[4],i[5],i[6]).length(),o=fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Xt.copy(this);const l=1/s,u=1/r,d=1/o;return Xt.elements[0]*=l,Xt.elements[1]*=l,Xt.elements[2]*=l,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=d,Xt.elements[9]*=d,Xt.elements[10]*=d,t.setFromRotationMatrix(Xt),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r){const o=this.elements,a=2*s/(t-e),l=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),h=-(r+s)/(r-s),p=-2*r*s/(r-s);return o[0]=a,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r){const o=this.elements,a=1/(t-e),l=1/(n-i),u=1/(r-s),d=(t+e)*a,h=(n+i)*l,p=(r+s)*u;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fi=new O,Xt=new Pe,_u=new O(0,0,0),xu=new O(1,1,1),Cn=new O,Ls=new O,Pt=new O,Fa=new Pe,za=new an;class dr{constructor(e=0,t=0,n=0,i=dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],a=i[1],l=i[5],u=i[9],d=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-_t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return za.setFromEuler(this),this.setFromQuaternion(za,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dr.DEFAULT_ORDER="XYZ";class No{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vu=0;const Oa=new O,pi=new an,fn=new Pe,Rs=new O,Yi=new O,yu=new O,Mu=new an,Ba=new O(1,0,0),Ua=new O(0,1,0),ka=new O(0,0,1),bu={type:"added"},Ga={type:"removed"};class Ze extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Jt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DEFAULT_UP.clone();const e=new O,t=new dr,n=new an,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Dt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=Ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new No,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(Ba,e)}rotateY(e){return this.rotateOnAxis(Ua,e)}rotateZ(e){return this.rotateOnAxis(ka,e)}translateOnAxis(e,t){return Oa.copy(e).applyQuaternion(this.quaternion),this.position.add(Oa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ba,e)}translateY(e){return this.translateOnAxis(Ua,e)}translateZ(e){return this.translateOnAxis(ka,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rs.copy(e):Rs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Yi,Rs,this.up):fn.lookAt(Rs,Yi,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),pi.setFromRotationMatrix(fn),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ga)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ga)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(e,t);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,yu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,Mu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let l=0,u=a.length;l<u;l++){const d=a[l];s(e.shapes,d)}else s(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(s(e.materials,this.material[a]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(s(e.animations,a))}}if(t){const o=r(e.geometries),a=r(e.materials),l=r(e.textures),u=r(e.images),d=r(e.shapes),h=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const a=[];for(const l in o){const u=o[l];delete u.metadata,a.push(u)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ze.DEFAULT_UP=new O(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new O,pn=new O,kr=new O,mn=new O,mi=new O,gi=new O,Va=new O,Gr=new O,Vr=new O,Hr=new O;class on{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yt.subVectors(e,t),i.cross(Yt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Yt.subVectors(i,t),pn.subVectors(n,t),kr.subVectors(e,t);const r=Yt.dot(Yt),o=Yt.dot(pn),a=Yt.dot(kr),l=pn.dot(pn),u=pn.dot(kr),d=r*l-o*o;if(d===0)return s.set(-2,-1,-1);const h=1/d,p=(l*a-o*u)*h,g=(r*u-o*a)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mn),mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getUV(e,t,n,i,s,r,o,a){return this.getBarycoord(e,t,n,i,mn),a.set(0,0),a.addScaledVector(s,mn.x),a.addScaledVector(r,mn.y),a.addScaledVector(o,mn.z),a}static isFrontFacing(e,t,n,i){return Yt.subVectors(n,t),pn.subVectors(e,t),Yt.cross(pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Yt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return on.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;mi.subVectors(i,n),gi.subVectors(s,n),Gr.subVectors(e,n);const a=mi.dot(Gr),l=gi.dot(Gr);if(a<=0&&l<=0)return t.copy(n);Vr.subVectors(e,i);const u=mi.dot(Vr),d=gi.dot(Vr);if(u>=0&&d<=u)return t.copy(i);const h=a*d-u*l;if(h<=0&&a>=0&&u<=0)return r=a/(a-u),t.copy(n).addScaledVector(mi,r);Hr.subVectors(e,s);const p=mi.dot(Hr),g=gi.dot(Hr);if(g>=0&&p<=g)return t.copy(s);const m=p*l-a*g;if(m<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(gi,o);const f=u*g-p*d;if(f<=0&&d-u>=0&&p-g>=0)return Va.subVectors(s,i),o=(d-u)/(d-u+(p-g)),t.copy(i).addScaledVector(Va,o);const _=1/(f+m+h);return r=m*_,o=h*_,t.copy(n).addScaledVector(mi,r).addScaledVector(gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let wu=0,Wt=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Jt(),this.name="",this.type="Material",this.blending=Ci,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=hc,this.blendDst=uc,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const a=s[o];delete a.metadata,r.push(a)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class Yn extends Wt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new O,Ps=new Se;class Tt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),s=je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class bc extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wc extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ft extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Su=0;const Ut=new Pe,Wr=new Ze,_i=new O,It=new Ui,Ki=new Ui,ut=new O;class qt extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Jt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_c(e)?wc:bc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Dt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return Wr.lookAt(e),Wr.updateMatrix(),this.applyMatrix4(Wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];It.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(It.min,Ki.min),It.expandByPoint(ut),ut.addVectors(It.max,Ki.max),It.expandByPoint(ut)):(It.expandByPoint(Ki.min),It.expandByPoint(Ki.max))}It.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)ut.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ut));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],a=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ut.fromBufferAttribute(o,l),a&&(_i.fromBufferAttribute(e,l),ut.add(_i)),i=Math.max(i,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*o),4));const a=this.getAttribute("tangent").array,l=[],u=[];for(let D=0;D<o;D++)l[D]=new O,u[D]=new O;const d=new O,h=new O,p=new O,g=new Se,m=new Se,f=new Se,_=new O,x=new O;function v(D,H,W){d.fromArray(i,D*3),h.fromArray(i,H*3),p.fromArray(i,W*3),g.fromArray(r,D*2),m.fromArray(r,H*2),f.fromArray(r,W*2),h.sub(d),p.sub(d),m.sub(g),f.sub(g);const L=1/(m.x*f.y-f.x*m.y);isFinite(L)&&(_.copy(h).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(L),x.copy(p).multiplyScalar(m.x).addScaledVector(h,-f.x).multiplyScalar(L),l[D].add(_),l[H].add(_),l[W].add(_),u[D].add(x),u[H].add(x),u[W].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let D=0,H=y.length;D<H;++D){const W=y[D],L=W.start,P=W.count;for(let N=L,z=L+P;N<z;N+=3)v(n[N+0],n[N+1],n[N+2])}const b=new O,T=new O,R=new O,w=new O;function E(D){R.fromArray(s,D*3),w.copy(R);const H=l[D];b.copy(H),b.sub(R.multiplyScalar(R.dot(H))).normalize(),T.crossVectors(w,H);const L=T.dot(u[D])<0?-1:1;a[D*4]=b.x,a[D*4+1]=b.y,a[D*4+2]=b.z,a[D*4+3]=L}for(let D=0,H=y.length;D<H;++D){const W=y[D],L=W.start,P=W.count;for(let N=L,z=L+P;N<z;N+=3)E(n[N+0]),E(n[N+1]),E(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new O,s=new O,r=new O,o=new O,a=new O,l=new O,u=new O,d=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),m=e.getX(h+1),f=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,f),u.subVectors(r,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,g),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,f),o.add(u),a.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),u.subVectors(r,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,a){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(a.length*u);let p=0,g=0;for(let m=0,f=a.length;m<f;m++){o.isInterleavedBufferAttribute?p=a[m]*o.data.stride+o.offset:p=a[m]*u;for(let _=0;_<u;_++)h[g++]=l[p++]}return new Tt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],l=e(a,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const a=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=e(h,n);a.push(p)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,a=r.length;o<a;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const l in a)a[l]!==void 0&&(e[l]=a[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const l=n[a];e.data.attributes[a]=l.toJSON(e.data)}const i={};let s=!1;for(const a in this.morphAttributes){const l=this.morphAttributes[a],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(i[a]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,u=r.length;l<u;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ha=new Pe,xi=new ur,qr=new ki,Zi=new O,$i=new O,Ji=new O,jr=new O,Is=new O,Ds=new Se,Ns=new Se,Fs=new Se,Xr=new O,zs=new O;class xt extends Ze{constructor(e=new qt,t=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Is.set(0,0,0);for(let a=0,l=s.length;a<l;a++){const u=o[a],d=s[a];u!==0&&(jr.fromBufferAttribute(d,e),r?Is.addScaledVector(jr,u):Is.addScaledVector(jr.sub(t),u))}t.add(Is)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),e.ray.intersectsSphere(qr)===!1)||(Ha.copy(s).invert(),xi.copy(e.ray).applyMatrix4(Ha),n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,a=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,d=n.groups,h=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,g=d.length;p<g;p++){const m=d[p],f=i[m.materialIndex],_=Math.max(m.start,h.start),x=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let v=_,y=x;v<y;v+=3){const b=o.getX(v),T=o.getX(v+1),R=o.getX(v+2);r=Os(this,f,e,xi,l,u,b,T,R),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const p=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let m=p,f=g;m<f;m+=3){const _=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);r=Os(this,i,e,xi,l,u,_,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(a!==void 0)if(Array.isArray(i))for(let p=0,g=d.length;p<g;p++){const m=d[p],f=i[m.materialIndex],_=Math.max(m.start,h.start),x=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let v=_,y=x;v<y;v+=3){const b=v,T=v+1,R=v+2;r=Os(this,f,e,xi,l,u,b,T,R),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const p=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let m=p,f=g;m<f;m+=3){const _=m,x=m+1,v=m+2;r=Os(this,i,e,xi,l,u,_,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Tu(c,e,t,n,i,s,r,o){let a;if(e.side===Nt?a=n.intersectTriangle(r,s,i,!0,o):a=n.intersectTriangle(i,s,r,e.side===Sn,o),a===null)return null;zs.copy(o),zs.applyMatrix4(c.matrixWorld);const l=t.ray.origin.distanceTo(zs);return l<t.near||l>t.far?null:{distance:l,point:zs.clone(),object:c}}function Os(c,e,t,n,i,s,r,o,a){c.getVertexPosition(r,Zi),c.getVertexPosition(o,$i),c.getVertexPosition(a,Ji);const l=Tu(c,e,t,n,Zi,$i,Ji,Xr);if(l){i&&(Ds.fromBufferAttribute(i,r),Ns.fromBufferAttribute(i,o),Fs.fromBufferAttribute(i,a),l.uv=on.getUV(Xr,Zi,$i,Ji,Ds,Ns,Fs,new Se)),s&&(Ds.fromBufferAttribute(s,r),Ns.fromBufferAttribute(s,o),Fs.fromBufferAttribute(s,a),l.uv2=on.getUV(Xr,Zi,$i,Ji,Ds,Ns,Fs,new Se));const u={a:r,b:o,c:a,normal:new O,materialIndex:0};on.getNormal(Zi,$i,Ji,u.normal),l.face=u}return l}class Gi extends qt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const a=[],l=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(d,2));function g(m,f,_,x,v,y,b,T,R,w,E){const D=y/R,H=b/w,W=y/2,L=b/2,P=T/2,N=R+1,z=w+1;let $=0,G=0;const X=new O;for(let J=0;J<z;J++){const oe=J*H-L;for(let F=0;F<N;F++){const Q=F*D-W;X[m]=Q*x,X[f]=oe*v,X[_]=P,l.push(X.x,X.y,X.z),X[m]=0,X[f]=0,X[_]=T>0?1:-1,u.push(X.x,X.y,X.z),d.push(F/R),d.push(1-J/w),$+=1}}for(let J=0;J<w;J++)for(let oe=0;oe<R;oe++){const F=h+oe+N*J,Q=h+oe+N*(J+1),ne=h+(oe+1)+N*(J+1),se=h+(oe+1)+N*J;a.push(F,Q,se),a.push(Q,ne,se),G+=6}o.addGroup(p,G,E),p+=G,h+=$}}static fromJSON(e){return new Gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oi(c){const e={};for(const t in c){e[t]={};for(const n in c[t]){const i=c[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wt(c){const e={};for(let t=0;t<c.length;t++){const n=Oi(c[t]);for(const i in n)e[i]=n[i]}return e}function Eu(c){const e=[];for(let t=0;t<c.length;t++)e.push(c[t].clone());return e}function Sc(c){return c.getRenderTarget()===null&&c.outputEncoding===ke?sn:ps}const Au={clone:Oi,merge:wt};var Cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Wt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cu,this.fragmentShader=Lu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=Eu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Tc extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class St extends Tc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ri*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Ri*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ri*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const a=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/a,t-=r.offsetY*n/l,i*=r.width/a,n*=r.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,yi=1;class Ru extends Ze{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new St(vi,yi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new St(vi,yi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new St(vi,yi,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new St(vi,yi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const a=new St(vi,yi,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(0,0,1),this.add(a);const l=new St(vi,yi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,a,l]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=wn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,a),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Ec extends ft{constructor(e,t,n,i,s,r,o,a,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ii,super(e,t,n,i,s,r,o,a,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pu extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ec(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Gi(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Nn});s.uniforms.tEquirect.value=t;const r=new xt(i,s),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=Ct),new Ru(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const Yr=new O,Iu=new O,Du=new Dt;class Hn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Yr.subVectors(n,t).cross(Iu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Yr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Du.getNormalMatrix(e),i=this.coplanarPoint(Yr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new ki,Bs=new O;class Fo{constructor(e=new Hn,t=new Hn,n=new Hn,i=new Hn,s=new Hn,r=new Hn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],l=n[5],u=n[6],d=n[7],h=n[8],p=n[9],g=n[10],m=n[11],f=n[12],_=n[13],x=n[14],v=n[15];return t[0].setComponents(o-i,d-a,m-h,v-f).normalize(),t[1].setComponents(o+i,d+a,m+h,v+f).normalize(),t[2].setComponents(o+s,d+l,m+p,v+_).normalize(),t[3].setComponents(o-s,d-l,m-p,v-_).normalize(),t[4].setComponents(o-r,d-u,m-g,v-x).normalize(),t[5].setComponents(o+r,d+u,m+g,v+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSprite(e){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Bs.x=i.normal.x>0?e.max.x:e.min.x,Bs.y=i.normal.y>0?e.max.y:e.min.y,Bs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ac(){let c=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=c.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=c.requestAnimationFrame(i),e=!0)},stop:function(){c.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){c=s}}}function Nu(c,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const d=l.array,h=l.usage,p=c.createBuffer();c.bindBuffer(u,p),c.bufferData(u,d,h),l.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,d){const h=u.array,p=u.updateRange;c.bindBuffer(d,l),p.count===-1?c.bufferSubData(d,0,h):(t?c.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):c.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(c.deleteBuffer(u.buffer),n.delete(l))}function a(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,i(l,u)):d.version<l.version&&(s(d.buffer,l,u),d.version=l.version)}return{get:r,remove:o,update:a}}class fr extends qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),a=Math.floor(i),l=o+1,u=a+1,d=e/o,h=t/a,p=[],g=[],m=[],f=[];for(let _=0;_<u;_++){const x=_*h-r;for(let v=0;v<l;v++){const y=v*d-s;g.push(y,-x,0),m.push(0,0,1),f.push(v/o),f.push(1-_/a)}}for(let _=0;_<a;_++)for(let x=0;x<o;x++){const v=x+l*_,y=x+l*(_+1),b=x+1+l*(_+1),T=x+1+l*_;p.push(v,y,T),p.push(y,b,T)}this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(m,3)),this.setAttribute("uv",new Ft(f,2))}static fromJSON(e){return new fr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ou=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gu="vec3 transformed = vec3( position );",Vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Wu=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,qu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ed=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,td=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",ld=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xd=`#ifdef USE_GRADIENTMAP
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
}`,vd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Md=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Sd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ed=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ld=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Rd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Nd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Od=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Yd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Kd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,nf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,of=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,af=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,df=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ff=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,gf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_f=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yf=`#ifdef USE_SKINNING
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
#endif`,Mf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Ef=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Af=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Cf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Lf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Rf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Pf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,If=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Df=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ff=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Gf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Vf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Hf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Kf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,$f=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Qf=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,np=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ip=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,rp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ap=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,dp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:Fu,alphamap_pars_fragment:zu,alphatest_fragment:Ou,alphatest_pars_fragment:Bu,aomap_fragment:Uu,aomap_pars_fragment:ku,begin_vertex:Gu,beginnormal_vertex:Vu,bsdfs:Hu,iridescence_fragment:Wu,bumpmap_pars_fragment:qu,clipping_planes_fragment:ju,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:Yu,clipping_planes_vertex:Ku,color_fragment:Zu,color_pars_fragment:$u,color_pars_vertex:Ju,color_vertex:Qu,common:ed,cube_uv_reflection_fragment:td,defaultnormal_vertex:nd,displacementmap_pars_vertex:id,displacementmap_vertex:sd,emissivemap_fragment:rd,emissivemap_pars_fragment:od,encodings_fragment:ad,encodings_pars_fragment:ld,envmap_fragment:cd,envmap_common_pars_fragment:hd,envmap_pars_fragment:ud,envmap_pars_vertex:dd,envmap_physical_pars_fragment:Sd,envmap_vertex:fd,fog_vertex:pd,fog_pars_vertex:md,fog_fragment:gd,fog_pars_fragment:_d,gradientmap_pars_fragment:xd,lightmap_fragment:vd,lightmap_pars_fragment:yd,lights_lambert_fragment:Md,lights_lambert_pars_fragment:bd,lights_pars_begin:wd,lights_toon_fragment:Td,lights_toon_pars_fragment:Ed,lights_phong_fragment:Ad,lights_phong_pars_fragment:Cd,lights_physical_fragment:Ld,lights_physical_pars_fragment:Rd,lights_fragment_begin:Pd,lights_fragment_maps:Id,lights_fragment_end:Dd,logdepthbuf_fragment:Nd,logdepthbuf_pars_fragment:Fd,logdepthbuf_pars_vertex:zd,logdepthbuf_vertex:Od,map_fragment:Bd,map_pars_fragment:Ud,map_particle_fragment:kd,map_particle_pars_fragment:Gd,metalnessmap_fragment:Vd,metalnessmap_pars_fragment:Hd,morphcolor_vertex:Wd,morphnormal_vertex:qd,morphtarget_pars_vertex:jd,morphtarget_vertex:Xd,normal_fragment_begin:Yd,normal_fragment_maps:Kd,normal_pars_fragment:Zd,normal_pars_vertex:$d,normal_vertex:Jd,normalmap_pars_fragment:Qd,clearcoat_normal_fragment_begin:ef,clearcoat_normal_fragment_maps:tf,clearcoat_pars_fragment:nf,iridescence_pars_fragment:sf,output_fragment:rf,packing:of,premultiplied_alpha_fragment:af,project_vertex:lf,dithering_fragment:cf,dithering_pars_fragment:hf,roughnessmap_fragment:uf,roughnessmap_pars_fragment:df,shadowmap_pars_fragment:ff,shadowmap_pars_vertex:pf,shadowmap_vertex:mf,shadowmask_pars_fragment:gf,skinbase_vertex:_f,skinning_pars_vertex:xf,skinning_vertex:vf,skinnormal_vertex:yf,specularmap_fragment:Mf,specularmap_pars_fragment:bf,tonemapping_fragment:wf,tonemapping_pars_fragment:Sf,transmission_fragment:Tf,transmission_pars_fragment:Ef,uv_pars_fragment:Af,uv_pars_vertex:Cf,uv_vertex:Lf,uv2_pars_fragment:Rf,uv2_pars_vertex:Pf,uv2_vertex:If,worldpos_vertex:Df,background_vert:Nf,background_frag:Ff,backgroundCube_vert:zf,backgroundCube_frag:Of,cube_vert:Bf,cube_frag:Uf,depth_vert:kf,depth_frag:Gf,distanceRGBA_vert:Vf,distanceRGBA_frag:Hf,equirect_vert:Wf,equirect_frag:qf,linedashed_vert:jf,linedashed_frag:Xf,meshbasic_vert:Yf,meshbasic_frag:Kf,meshlambert_vert:Zf,meshlambert_frag:$f,meshmatcap_vert:Jf,meshmatcap_frag:Qf,meshnormal_vert:ep,meshnormal_frag:tp,meshphong_vert:np,meshphong_frag:ip,meshphysical_vert:sp,meshphysical_frag:rp,meshtoon_vert:op,meshtoon_frag:ap,points_vert:lp,points_frag:cp,shadow_vert:hp,shadow_frag:up,sprite_vert:dp,sprite_frag:fp},re={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Dt},uv2Transform:{value:new Dt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}}},rn={basic:{uniforms:wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:wt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:wt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:wt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:wt([re.points,re.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:wt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:wt([re.common,re.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:wt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:wt([re.sprite,re.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:wt([re.common,re.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:wt([re.lights,re.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};rn.physical={uniforms:wt([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Se(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const Us={r:0,b:0,g:0};function pp(c,e,t,n,i,s,r){const o=new Te(0);let a=s===!0?0:1,l,u,d=null,h=0,p=null;function g(f,_){let x=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const y=c.xr,b=y.getSession&&y.getSession();b&&b.environmentBlendMode==="additive"&&(v=null),v===null?m(o,a):v&&v.isColor&&(m(v,1),x=!0),(c.autoClear||x)&&c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil),v&&(v.isCubeTexture||v.mapping===cr)?(u===void 0&&(u=new xt(new Gi(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Oi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=v.encoding!==ke,(d!==v||h!==v.version||p!==c.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,p=c.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new xt(new fr(2,2),new ii({name:"BackgroundMaterial",uniforms:Oi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=v.encoding!==ke,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||p!==c.toneMapping)&&(l.material.needsUpdate=!0,d=v,h=v.version,p=c.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function m(f,_){f.getRGB(Us,Sc(c)),n.buffers.color.setClear(Us.r,Us.g,Us.b,_,r)}return{getClearColor:function(){return o},setClearColor:function(f,_=1){o.set(f),a=_,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(f){a=f,m(o,a)},render:g}}function mp(c,e,t,n){const i=c.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},a=f(null);let l=a,u=!1;function d(P,N,z,$,G){let X=!1;if(r){const J=m($,z,N);l!==J&&(l=J,p(l.object)),X=_(P,$,z,G),X&&x(P,$,z,G)}else{const J=N.wireframe===!0;(l.geometry!==$.id||l.program!==z.id||l.wireframe!==J)&&(l.geometry=$.id,l.program=z.id,l.wireframe=J,X=!0)}G!==null&&t.update(G,34963),(X||u)&&(u=!1,w(P,N,z,$),G!==null&&c.bindBuffer(34963,t.get(G).buffer))}function h(){return n.isWebGL2?c.createVertexArray():s.createVertexArrayOES()}function p(P){return n.isWebGL2?c.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?c.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function m(P,N,z){const $=z.wireframe===!0;let G=o[P.id];G===void 0&&(G={},o[P.id]=G);let X=G[N.id];X===void 0&&(X={},G[N.id]=X);let J=X[$];return J===void 0&&(J=f(h()),X[$]=J),J}function f(P){const N=[],z=[],$=[];for(let G=0;G<i;G++)N[G]=0,z[G]=0,$[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:$,object:P,attributes:{},index:null}}function _(P,N,z,$){const G=l.attributes,X=N.attributes;let J=0;const oe=z.getAttributes();for(const F in oe)if(oe[F].location>=0){const ne=G[F];let se=X[F];if(se===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),ne===void 0||ne.attribute!==se||se&&ne.data!==se.data)return!0;J++}return l.attributesNum!==J||l.index!==$}function x(P,N,z,$){const G={},X=N.attributes;let J=0;const oe=z.getAttributes();for(const F in oe)if(oe[F].location>=0){let ne=X[F];ne===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));const se={};se.attribute=ne,ne&&ne.data&&(se.data=ne.data),G[F]=se,J++}l.attributes=G,l.attributesNum=J,l.index=$}function v(){const P=l.newAttributes;for(let N=0,z=P.length;N<z;N++)P[N]=0}function y(P){b(P,0)}function b(P,N){const z=l.newAttributes,$=l.enabledAttributes,G=l.attributeDivisors;z[P]=1,$[P]===0&&(c.enableVertexAttribArray(P),$[P]=1),G[P]!==N&&((n.isWebGL2?c:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),G[P]=N)}function T(){const P=l.newAttributes,N=l.enabledAttributes;for(let z=0,$=N.length;z<$;z++)N[z]!==P[z]&&(c.disableVertexAttribArray(z),N[z]=0)}function R(P,N,z,$,G,X){n.isWebGL2===!0&&(z===5124||z===5125)?c.vertexAttribIPointer(P,N,z,G,X):c.vertexAttribPointer(P,N,z,$,G,X)}function w(P,N,z,$){if(n.isWebGL2===!1&&(P.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const G=$.attributes,X=z.getAttributes(),J=N.defaultAttributeValues;for(const oe in X){const F=X[oe];if(F.location>=0){let Q=G[oe];if(Q===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){const ne=Q.normalized,se=Q.itemSize,q=t.get(Q);if(q===void 0)continue;const be=q.buffer,xe=q.type,ge=q.bytesPerElement;if(Q.isInterleavedBufferAttribute){const he=Q.data,He=he.stride,Ae=Q.offset;if(he.isInstancedInterleavedBuffer){for(let Me=0;Me<F.locationSize;Me++)b(F.location+Me,he.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Me=0;Me<F.locationSize;Me++)y(F.location+Me);c.bindBuffer(34962,be);for(let Me=0;Me<F.locationSize;Me++)R(F.location+Me,se/F.locationSize,xe,ne,He*ge,(Ae+se/F.locationSize*Me)*ge)}else{if(Q.isInstancedBufferAttribute){for(let he=0;he<F.locationSize;he++)b(F.location+he,Q.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let he=0;he<F.locationSize;he++)y(F.location+he);c.bindBuffer(34962,be);for(let he=0;he<F.locationSize;he++)R(F.location+he,se/F.locationSize,xe,ne,se*ge,se/F.locationSize*he*ge)}}else if(J!==void 0){const ne=J[oe];if(ne!==void 0)switch(ne.length){case 2:c.vertexAttrib2fv(F.location,ne);break;case 3:c.vertexAttrib3fv(F.location,ne);break;case 4:c.vertexAttrib4fv(F.location,ne);break;default:c.vertexAttrib1fv(F.location,ne)}}}}T()}function E(){W();for(const P in o){const N=o[P];for(const z in N){const $=N[z];for(const G in $)g($[G].object),delete $[G];delete N[z]}delete o[P]}}function D(P){if(o[P.id]===void 0)return;const N=o[P.id];for(const z in N){const $=N[z];for(const G in $)g($[G].object),delete $[G];delete N[z]}delete o[P.id]}function H(P){for(const N in o){const z=o[N];if(z[P.id]===void 0)continue;const $=z[P.id];for(const G in $)g($[G].object),delete $[G];delete z[P.id]}}function W(){L(),u=!0,l!==a&&(l=a,p(l.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:W,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:D,releaseStatesOfProgram:H,initAttributes:v,enableAttribute:y,disableUnusedAttributes:T}}function gp(c,e,t,n){const i=n.isWebGL2;let s;function r(l){s=l}function o(l,u){c.drawArrays(s,l,u),t.update(u,s,1)}function a(l,u,d){if(d===0)return;let h,p;if(i)h=c,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,l,u,d),t.update(u,s,d)}this.setMode=r,this.render=o,this.renderInstances=a}function _p(c,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=c.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(c.getShaderPrecisionFormat(35633,36338).precision>0&&c.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&c.getShaderPrecisionFormat(35633,36337).precision>0&&c.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&c instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=r||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=c.getParameter(34930),h=c.getParameter(35660),p=c.getParameter(3379),g=c.getParameter(34076),m=c.getParameter(34921),f=c.getParameter(36347),_=c.getParameter(36348),x=c.getParameter(36349),v=h>0,y=r||e.has("OES_texture_float"),b=v&&y,T=r?c.getParameter(36183):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:T}}function xp(c){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Hn,o=new Dt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||i;return i=h,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,m=d.clipIntersection,f=d.clipShadows,_=c.get(d);if(!i||g===null||g.length===0||s&&!f)s?u(null):l();else{const x=s?0:n,v=x*4;let y=_.clippingState||null;a.value=y,y=u(g,h,v,p);for(let b=0;b!==v;++b)y[b]=t[b];_.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function l(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,g){const m=d!==null?d.length:0;let f=null;if(m!==0){if(f=a.value,g!==!0||f===null){const _=p+m*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(f===null||f.length<_)&&(f=new Float32Array(_));for(let v=0,y=p;v!==m;++v,y+=4)r.copy(d[v]).applyMatrix4(x,o),r.normal.toArray(f,y),f[y+3]=r.constant}a.value=f,a.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,f}}function vp(c){let e=new WeakMap;function t(r,o){return o===_o?r.mapping=Ii:o===xo&&(r.mapping=Di),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===_o||o===xo)if(e.has(r)){const a=e.get(r).texture;return t(a,r.mapping)}else{const a=r.image;if(a&&a.height>0){const l=new Pu(a.height/2);return l.fromEquirectangularTexture(c,r),e.set(r,l),r.addEventListener("dispose",i),t(l.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const a=e.get(o);a!==void 0&&(e.delete(o),a.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class zo extends Tc{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=u*this.view.offsetY,a=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ai=4,Wa=[.125,.215,.35,.446,.526,.582],qn=20,Kr=new zo,qa=new Te;let Zr=null;const Wn=(1+Math.sqrt(5))/2,bi=1/Wn,ja=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Wn,bi),new O(0,Wn,-bi),new O(bi,0,Wn),new O(-bi,0,Wn),new O(Wn,bi,0),new O(-Wn,bi,0)];class Xa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Zr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ka(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zr),e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:ds,format:Ht,encoding:ti,depthBuffer:!1},i=Ya(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ya(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yp(s)),this._blurMaterial=Mp(s,e,t)}return i}_compileMaterial(e){const t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,Kr)}_sceneToCubeUV(e,t,n,i){const o=new St(90,1,t,n),a=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(qa),u.toneMapping=wn,u.autoClear=!1;const p=new Yn({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new xt(new Gi,p);let m=!1;const f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,m=!0):(p.color.copy(qa),m=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(o.up.set(0,a[_],0),o.lookAt(l[_],0,0)):x===1?(o.up.set(0,0,a[_]),o.lookAt(0,l[_],0)):(o.up.set(0,a[_],0),o.lookAt(0,0,l[_]));const v=this._cubeSize;ks(i,x*v,_>2?v:0,v,v),u.setRenderTarget(i),m&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ii||e.mapping===Di;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Za()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ka());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new xt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const a=this._cubeSize;ks(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(r,Kr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=ja[(i-1)%ja.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const a=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new xt(this._lodPlanes[i],l),h=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*qn-1),m=s/g,f=isFinite(s)?1+Math.floor(u*m):qn;f>qn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${qn}`);const _=[];let x=0;for(let R=0;R<qn;++R){const w=R/m,E=Math.exp(-w*w/2);_.push(E),R===0?x+=E:R<f&&(x+=2*E)}for(let R=0;R<_.length;R++)_[R]=_[R]/x;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=_,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const y=this._sizeLods[i],b=3*y*(i>v-Ai?i-v+Ai:0),T=4*(this._cubeSize-y);ks(t,b,T,3*y,2*y),a.setRenderTarget(t),a.render(d,Kr)}}function yp(c){const e=[],t=[],n=[];let i=c;const s=c-Ai+1+Wa.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);let a=1/o;r>c-Ai?a=Wa[r-c+Ai-1]:r===0&&(a=0),n.push(a);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,m=3,f=2,_=1,x=new Float32Array(m*g*p),v=new Float32Array(f*g*p),y=new Float32Array(_*g*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,w=T>2?0:-1,E=[R,w,0,R+2/3,w,0,R+2/3,w+1,0,R,w,0,R+2/3,w+1,0,R,w+1,0];x.set(E,m*g*T),v.set(h,f*g*T);const D=[T,T,T,T,T,T];y.set(D,_*g*T)}const b=new qt;b.setAttribute("position",new Tt(x,m)),b.setAttribute("uv",new Tt(v,f)),b.setAttribute("faceIndex",new Tt(y,_)),e.push(b),i>Ai&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ya(c,e,t){const n=new ni(c,e,t);return n.texture.mapping=cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ks(c,e,t,n,i){c.viewport.set(e,t,n,i),c.scissor.set(e,t,n,i)}function Mp(c,e,t){const n=new Float32Array(qn),i=new O(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ka(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Za(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Oo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bp(c){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const a=o.mapping,l=a===_o||a===xo,u=a===Ii||a===Di;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Xa(c)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new Xa(c));const h=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let a=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&a++;return a===l}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function wp(c){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=c.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Sp(c,e,t,n){const i={},s=new WeakMap;function r(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete i[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",r),i[h.id]=!0,t.memory.geometries++),h}function a(d){const h=d.attributes;for(const g in h)e.update(h[g],34962);const p=d.morphAttributes;for(const g in p){const m=p[g];for(let f=0,_=m.length;f<_;f++)e.update(m[f],34962)}}function l(d){const h=[],p=d.index,g=d.attributes.position;let m=0;if(p!==null){const x=p.array;m=p.version;for(let v=0,y=x.length;v<y;v+=3){const b=x[v+0],T=x[v+1],R=x[v+2];h.push(b,T,T,R,R,b)}}else{const x=g.array;m=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const b=v+0,T=v+1,R=v+2;h.push(b,T,T,R,R,b)}}const f=new(_c(h)?wc:bc)(h,1);f.version=m;const _=s.get(d);_&&e.remove(_),s.set(d,f)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:a,getWireframeAttribute:u}}function Tp(c,e,t,n){const i=n.isWebGL2;let s;function r(h){s=h}let o,a;function l(h){o=h.type,a=h.bytesPerElement}function u(h,p){c.drawElements(s,p,o,h*a),t.update(p,s,1)}function d(h,p,g){if(g===0)return;let m,f;if(i)m=c,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,p,o,h*a,g),t.update(p,s,g)}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=d}function Ep(c){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ap(c,e){return c[0]-e[0]}function Cp(c,e){return Math.abs(e[1])-Math.abs(c[1])}function Lp(c,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new Xe,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function a(l,u,d,h){const p=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let f=s.get(u);if(f===void 0||f.count!==m){let N=function(){L.dispose(),s.delete(u),u.removeEventListener("dispose",N)};f!==void 0&&f.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let E=0;v===!0&&(E=1),y===!0&&(E=2),b===!0&&(E=3);let D=u.attributes.position.count*E,H=1;D>e.maxTextureSize&&(H=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const W=new Float32Array(D*H*4*m),L=new Mc(W,D,H,m);L.type=Dn,L.needsUpdate=!0;const P=E*4;for(let z=0;z<m;z++){const $=T[z],G=R[z],X=w[z],J=D*H*4*z;for(let oe=0;oe<$.count;oe++){const F=oe*P;v===!0&&(r.fromBufferAttribute($,oe),W[J+F+0]=r.x,W[J+F+1]=r.y,W[J+F+2]=r.z,W[J+F+3]=0),y===!0&&(r.fromBufferAttribute(G,oe),W[J+F+4]=r.x,W[J+F+5]=r.y,W[J+F+6]=r.z,W[J+F+7]=0),b===!0&&(r.fromBufferAttribute(X,oe),W[J+F+8]=r.x,W[J+F+9]=r.y,W[J+F+10]=r.z,W[J+F+11]=X.itemSize===4?r.w:1)}}f={count:m,texture:L,size:new Se(D,H)},s.set(u,f),u.addEventListener("dispose",N)}let _=0;for(let v=0;v<p.length;v++)_+=p[v];const x=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(c,"morphTargetBaseInfluence",x),h.getUniforms().setValue(c,"morphTargetInfluences",p),h.getUniforms().setValue(c,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(c,"morphTargetsTextureSize",f.size)}else{const g=p===void 0?0:p.length;let m=n[u.id];if(m===void 0||m.length!==g){m=[];for(let y=0;y<g;y++)m[y]=[y,0];n[u.id]=m}for(let y=0;y<g;y++){const b=m[y];b[0]=y,b[1]=p[y]}m.sort(Cp);for(let y=0;y<8;y++)y<g&&m[y][1]?(o[y][0]=m[y][0],o[y][1]=m[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Ap);const f=u.morphAttributes.position,_=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const b=o[y],T=b[0],R=b[1];T!==Number.MAX_SAFE_INTEGER&&R?(f&&u.getAttribute("morphTarget"+y)!==f[T]&&u.setAttribute("morphTarget"+y,f[T]),_&&u.getAttribute("morphNormal"+y)!==_[T]&&u.setAttribute("morphNormal"+y,_[T]),i[y]=R,x+=R):(f&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),_&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const v=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(c,"morphTargetBaseInfluence",v),h.getUniforms().setValue(c,"morphTargetInfluences",i)}}return{update:a}}function Rp(c,e,t,n){let i=new WeakMap;function s(a){const l=n.render.frame,u=a.geometry,d=e.get(a,u);return i.get(d)!==l&&(e.update(d),i.set(d,l)),a.isInstancedMesh&&(a.hasEventListener("dispose",o)===!1&&a.addEventListener("dispose",o),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),d}function r(){i=new WeakMap}function o(a){const l=a.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:r}}const Cc=new ft,Lc=new Mc,Rc=new mu,Pc=new Ec,$a=[],Ja=[],Qa=new Float32Array(16),el=new Float32Array(9),tl=new Float32Array(4);function Vi(c,e,t){const n=c[0];if(n<=0||n>0)return c;const i=e*t;let s=$a[i];if(s===void 0&&(s=new Float32Array(i),$a[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,c[r].toArray(s,o)}return s}function ot(c,e){if(c.length!==e.length)return!1;for(let t=0,n=c.length;t<n;t++)if(c[t]!==e[t])return!1;return!0}function at(c,e){for(let t=0,n=e.length;t<n;t++)c[t]=e[t]}function pr(c,e){let t=Ja[e];t===void 0&&(t=new Int32Array(e),Ja[e]=t);for(let n=0;n!==e;++n)t[n]=c.allocateTextureUnit();return t}function Pp(c,e){const t=this.cache;t[0]!==e&&(c.uniform1f(this.addr,e),t[0]=e)}function Ip(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;c.uniform2fv(this.addr,e),at(t,e)}}function Dp(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(c.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;c.uniform3fv(this.addr,e),at(t,e)}}function Np(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;c.uniform4fv(this.addr,e),at(t,e)}}function Fp(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;c.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(ot(t,n))return;tl.set(n),c.uniformMatrix2fv(this.addr,!1,tl),at(t,n)}}function zp(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;c.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(ot(t,n))return;el.set(n),c.uniformMatrix3fv(this.addr,!1,el),at(t,n)}}function Op(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;c.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(ot(t,n))return;Qa.set(n),c.uniformMatrix4fv(this.addr,!1,Qa),at(t,n)}}function Bp(c,e){const t=this.cache;t[0]!==e&&(c.uniform1i(this.addr,e),t[0]=e)}function Up(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;c.uniform2iv(this.addr,e),at(t,e)}}function kp(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;c.uniform3iv(this.addr,e),at(t,e)}}function Gp(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;c.uniform4iv(this.addr,e),at(t,e)}}function Vp(c,e){const t=this.cache;t[0]!==e&&(c.uniform1ui(this.addr,e),t[0]=e)}function Hp(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;c.uniform2uiv(this.addr,e),at(t,e)}}function Wp(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;c.uniform3uiv(this.addr,e),at(t,e)}}function qp(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;c.uniform4uiv(this.addr,e),at(t,e)}}function jp(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Cc,i)}function Xp(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rc,i)}function Yp(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Pc,i)}function Kp(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Lc,i)}function Zp(c){switch(c){case 5126:return Pp;case 35664:return Ip;case 35665:return Dp;case 35666:return Np;case 35674:return Fp;case 35675:return zp;case 35676:return Op;case 5124:case 35670:return Bp;case 35667:case 35671:return Up;case 35668:case 35672:return kp;case 35669:case 35673:return Gp;case 5125:return Vp;case 36294:return Hp;case 36295:return Wp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return Kp}}function $p(c,e){c.uniform1fv(this.addr,e)}function Jp(c,e){const t=Vi(e,this.size,2);c.uniform2fv(this.addr,t)}function Qp(c,e){const t=Vi(e,this.size,3);c.uniform3fv(this.addr,t)}function em(c,e){const t=Vi(e,this.size,4);c.uniform4fv(this.addr,t)}function tm(c,e){const t=Vi(e,this.size,4);c.uniformMatrix2fv(this.addr,!1,t)}function nm(c,e){const t=Vi(e,this.size,9);c.uniformMatrix3fv(this.addr,!1,t)}function im(c,e){const t=Vi(e,this.size,16);c.uniformMatrix4fv(this.addr,!1,t)}function sm(c,e){c.uniform1iv(this.addr,e)}function rm(c,e){c.uniform2iv(this.addr,e)}function om(c,e){c.uniform3iv(this.addr,e)}function am(c,e){c.uniform4iv(this.addr,e)}function lm(c,e){c.uniform1uiv(this.addr,e)}function cm(c,e){c.uniform2uiv(this.addr,e)}function hm(c,e){c.uniform3uiv(this.addr,e)}function um(c,e){c.uniform4uiv(this.addr,e)}function dm(c,e,t){const n=this.cache,i=e.length,s=pr(t,i);ot(n,s)||(c.uniform1iv(this.addr,s),at(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Cc,s[r])}function fm(c,e,t){const n=this.cache,i=e.length,s=pr(t,i);ot(n,s)||(c.uniform1iv(this.addr,s),at(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Rc,s[r])}function pm(c,e,t){const n=this.cache,i=e.length,s=pr(t,i);ot(n,s)||(c.uniform1iv(this.addr,s),at(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Pc,s[r])}function mm(c,e,t){const n=this.cache,i=e.length,s=pr(t,i);ot(n,s)||(c.uniform1iv(this.addr,s),at(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Lc,s[r])}function gm(c){switch(c){case 5126:return $p;case 35664:return Jp;case 35665:return Qp;case 35666:return em;case 35674:return tm;case 35675:return nm;case 35676:return im;case 5124:case 35670:return sm;case 35667:case 35671:return rm;case 35668:case 35672:return om;case 35669:case 35673:return am;case 5125:return lm;case 36294:return cm;case 36295:return hm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}class _m{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Zp(t.type)}}class xm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=gm(t.type)}}class vm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const $r=/(\w+)(\])?(\[|\.)?/g;function nl(c,e){c.seq.push(e),c.map[e.id]=e}function ym(c,e,t){const n=c.name,i=n.length;for($r.lastIndex=0;;){const s=$r.exec(n),r=$r.lastIndex;let o=s[1];const a=s[2]==="]",l=s[3];if(a&&(o=o|0),l===void 0||l==="["&&r+2===i){nl(t,l===void 0?new _m(o,c,e):new xm(o,c,e));break}else{let d=t.map[o];d===void 0&&(d=new vm(o),nl(t,d)),t=d}}}class ir{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);ym(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],a=n[o.id];a.needsUpdate!==!1&&o.setValue(e,a.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function il(c,e,t){const n=c.createShader(e);return c.shaderSource(n,t),c.compileShader(n),n}let Mm=0;function bm(c,e){const t=c.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function wm(c){switch(c){case ti:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",c),["Linear","( value )"]}}function sl(c,e,t){const n=c.getShaderParameter(e,35713),i=c.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+bm(c.getShaderSource(e),r)}else return i}function Sm(c,e){const t=wm(e);return"vec4 "+c+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Tm(c,e){let t;switch(e){case Ch:t="Linear";break;case Lh:t="Reinhard";break;case Rh:t="OptimizedCineon";break;case Ph:t="ACESFilmic";break;case Ih:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+c+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Em(c){return[c.extensionDerivatives||c.envMapCubeUVHeight||c.bumpMap||c.tangentSpaceNormalMap||c.clearcoatNormalMap||c.flatShading||c.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap||c.transmission)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cs).join(`
`)}function Am(c){const e=[];for(const t in c){const n=c[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cm(c,e){const t={},n=c.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=c.getActiveAttrib(e,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[r]={type:s.type,location:c.getAttribLocation(e,r),locationSize:o}}return t}function cs(c){return c!==""}function rl(c,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ol(c,e){return c.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(c){return c.replace(Lm,Rm)}function Rm(c,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return So(t)}const Pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(c){return c.replace(Pm,Im)}function Im(c,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ll(c){let e="precision "+c.precision+` float;
precision `+c.precision+" int;";return c.precision==="highp"?e+=`
#define HIGH_PRECISION`:c.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Dm(c){let e="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===lc?e="SHADOWMAP_TYPE_PCF":c.shadowMapType===cc?e="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===ls&&(e="SHADOWMAP_TYPE_VSM"),e}function Nm(c){let e="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case Ii:case Di:e="ENVMAP_TYPE_CUBE";break;case cr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fm(c){let e="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case Di:e="ENVMAP_MODE_REFRACTION";break}return e}function zm(c){let e="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case lr:e="ENVMAP_BLENDING_MULTIPLY";break;case Eh:e="ENVMAP_BLENDING_MIX";break;case Ah:e="ENVMAP_BLENDING_ADD";break}return e}function Om(c){const e=c.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Bm(c,e,t,n){const i=c.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const a=Dm(t),l=Nm(t),u=Fm(t),d=zm(t),h=Om(t),p=t.isWebGL2?"":Em(t),g=Am(s),m=i.createProgram();let f,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(cs).join(`
`),f.length>0&&(f+=`
`),_=[p,g].filter(cs).join(`
`),_.length>0&&(_+=`
`)):(f=[ll(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),_=[p,ll(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Ce.tonemapping_pars_fragment:"",t.toneMapping!==wn?Tm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,Sm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cs).join(`
`)),r=So(r),r=rl(r,t),r=ol(r,t),o=So(o),o=rl(o,t),o=ol(o,t),r=al(r),o=al(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===Ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=x+f+r,y=x+_+o,b=il(i,35633,v),T=il(i,35632,y);if(i.attachShader(m,b),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),c.debug.checkShaderErrors){const E=i.getProgramInfoLog(m).trim(),D=i.getShaderInfoLog(b).trim(),H=i.getShaderInfoLog(T).trim();let W=!0,L=!0;if(i.getProgramParameter(m,35714)===!1){W=!1;const P=sl(i,b,"vertex"),N=sl(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+E+`
`+P+`
`+N)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(D===""||H==="")&&(L=!1);L&&(this.diagnostics={runnable:W,programLog:E,vertexShader:{log:D,prefix:f},fragmentShader:{log:H,prefix:_}})}i.deleteShader(b),i.deleteShader(T);let R;this.getUniforms=function(){return R===void 0&&(R=new ir(i,m)),R};let w;return this.getAttributes=function(){return w===void 0&&(w=Cm(i,m)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Mm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=T,this}let Um=0;class km{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gm(e),t.set(e,n)),n}}class Gm{constructor(e){this.id=Um++,this.code=e,this.usedTimes=0}}function Vm(c,e,t,n,i,s,r){const o=new No,a=new km,l=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(w,E,D,H,W){const L=H.fog,P=W.geometry,N=w.isMeshStandardMaterial?H.environment:null,z=(w.isMeshStandardMaterial?t:e).get(w.envMap||N),$=z&&z.mapping===cr?z.image.height:null,G=g[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const X=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,J=X!==void 0?X.length:0;let oe=0;P.morphAttributes.position!==void 0&&(oe=1),P.morphAttributes.normal!==void 0&&(oe=2),P.morphAttributes.color!==void 0&&(oe=3);let F,Q,ne,se;if(G){const He=rn[G];F=He.vertexShader,Q=He.fragmentShader}else F=w.vertexShader,Q=w.fragmentShader,a.update(w),ne=a.getVertexShaderID(w),se=a.getFragmentShaderID(w);const q=c.getRenderTarget(),be=w.alphaTest>0,xe=w.clearcoat>0,ge=w.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:w.type,vertexShader:F,fragmentShader:Q,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:se,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:h,outputEncoding:q===null?c.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:ti,map:!!w.map,matcap:!!w.matcap,envMap:!!z,envMapMode:z&&z.mapping,envMapCubeUVHeight:$,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===Jh,tangentSpaceNormalMap:w.normalMapType===hr,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===ke,clearcoat:xe,clearcoatMap:xe&&!!w.clearcoatMap,clearcoatRoughnessMap:xe&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:xe&&!!w.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!w.iridescenceMap,iridescenceThicknessMap:ge&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===Ci,alphaMap:!!w.alphaMap,alphaTest:be,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!P.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.iridescenceMap||w.iridescenceThicknessMap||w.transmission>0||w.transmissionMap||w.thicknessMap||w.specularIntensityMap||w.specularColorMap||w.sheen>0||w.sheenColorMap||w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!L,useFog:w.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:oe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:c.shadowMap.enabled&&D.length>0,shadowMapType:c.shadowMap.type,toneMapping:w.toneMapped?c.toneMapping:wn,physicallyCorrectLights:c.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Mn,flipSided:w.side===Nt,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function f(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)E.push(D),E.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(_(E,w),x(E,w),E.push(c.outputEncoding)),E.push(w.customProgramCacheKey),E.join()}function _(w,E){w.push(E.precision),w.push(E.outputEncoding),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.combine),w.push(E.vertexUvs),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function x(w,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),w.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.physicallyCorrectLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.specularIntensityMap&&o.enable(15),E.specularColorMap&&o.enable(16),E.transmission&&o.enable(17),E.transmissionMap&&o.enable(18),E.thicknessMap&&o.enable(19),E.sheen&&o.enable(20),E.sheenColorMap&&o.enable(21),E.sheenRoughnessMap&&o.enable(22),E.decodeVideoTexture&&o.enable(23),E.opaque&&o.enable(24),w.push(o.mask)}function v(w){const E=g[w.type];let D;if(E){const H=rn[E];D=Au.clone(H.uniforms)}else D=w.uniforms;return D}function y(w,E){let D;for(let H=0,W=l.length;H<W;H++){const L=l[H];if(L.cacheKey===E){D=L,++D.usedTimes;break}}return D===void 0&&(D=new Bm(c,E,w,s),l.push(D)),D}function b(w){if(--w.usedTimes===0){const E=l.indexOf(w);l[E]=l[l.length-1],l.pop(),w.destroy()}}function T(w){a.remove(w)}function R(){a.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:T,programs:l,dispose:R}}function Hm(){let c=new WeakMap;function e(s){let r=c.get(s);return r===void 0&&(r={},c.set(s,r)),r}function t(s){c.delete(s)}function n(s,r,o){c.get(s)[r]=o}function i(){c=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Wm(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.material.id!==e.material.id?c.material.id-e.material.id:c.z!==e.z?c.z-e.z:c.id-e.id}function cl(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.z!==e.z?e.z-c.z:c.id-e.id}function hl(){const c=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(d,h,p,g,m,f){let _=c[e];return _===void 0?(_={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:m,group:f},c[e]=_):(_.id=d.id,_.object=d,_.geometry=h,_.material=p,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=m,_.group=f),e++,_}function o(d,h,p,g,m,f){const _=r(d,h,p,g,m,f);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function a(d,h,p,g,m,f){const _=r(d,h,p,g,m,f);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function l(d,h){t.length>1&&t.sort(d||Wm),n.length>1&&n.sort(h||cl),i.length>1&&i.sort(h||cl)}function u(){for(let d=e,h=c.length;d<h;d++){const p=c[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:a,finish:u,sort:l}}function qm(){let c=new WeakMap;function e(n,i){const s=c.get(n);let r;return s===void 0?(r=new hl,c.set(n,[r])):i>=s.length?(r=new hl,s.push(r)):r=s[i],r}function t(){c=new WeakMap}return{get:e,dispose:t}}function jm(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Te};break;case"SpotLight":t={position:new O,direction:new O,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new O,halfWidth:new O,halfHeight:new O};break}return c[e.id]=t,t}}}function Xm(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[e.id]=t,t}}}let Ym=0;function Km(c,e){return(e.castShadow?2:0)-(c.castShadow?2:0)+(e.map?1:0)-(c.map?1:0)}function Zm(c,e){const t=new jm,n=Xm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new O);const s=new O,r=new Pe,o=new Pe;function a(u,d){let h=0,p=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let m=0,f=0,_=0,x=0,v=0,y=0,b=0,T=0,R=0,w=0;u.sort(Km);const E=d!==!0?Math.PI:1;for(let H=0,W=u.length;H<W;H++){const L=u[H],P=L.color,N=L.intensity,z=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=P.r*N*E,p+=P.g*N*E,g+=P.b*N*E;else if(L.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],N);else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const X=L.shadow,J=n.get(L);J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=L.shadow.matrix,y++}i.directional[m]=G,m++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(P).multiplyScalar(N*E),G.distance=z,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[_]=G;const X=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,X.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[_]=X.matrix,L.castShadow){const J=n.get(L);J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,i.spotShadow[_]=J,i.spotShadowMap[_]=$,T++}_++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(P).multiplyScalar(N),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[x]=G,x++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*E),G.distance=L.distance,G.decay=L.decay,L.castShadow){const X=L.shadow,J=n.get(L);J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,J.shadowCameraNear=X.camera.near,J.shadowCameraFar=X.camera.far,i.pointShadow[f]=J,i.pointShadowMap[f]=$,i.pointShadowMatrix[f]=L.shadow.matrix,b++}i.point[f]=G,f++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(N*E),G.groundColor.copy(L.groundColor).multiplyScalar(N*E),i.hemi[v]=G,v++}}x>0&&(e.isWebGL2||c.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):c.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==m||D.pointLength!==f||D.spotLength!==_||D.rectAreaLength!==x||D.hemiLength!==v||D.numDirectionalShadows!==y||D.numPointShadows!==b||D.numSpotShadows!==T||D.numSpotMaps!==R)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=x,i.point.length=f,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=T+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,D.directionalLength=m,D.pointLength=f,D.spotLength=_,D.rectAreaLength=x,D.hemiLength=v,D.numDirectionalShadows=y,D.numPointShadows=b,D.numSpotShadows=T,D.numSpotMaps=R,i.version=Ym++)}function l(u,d){let h=0,p=0,g=0,m=0,f=0;const _=d.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),h++}else if(y.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const b=i.rectArea[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),o.identity(),r.copy(y.matrixWorld),r.premultiply(_),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),p++}else if(y.isHemisphereLight){const b=i.hemi[f];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(_),f++}}}return{setup:a,setupView:l,state:i}}function ul(c,e){const t=new Zm(c,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(d){n.push(d)}function o(d){i.push(d)}function a(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function $m(c,e){let t=new WeakMap;function n(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ul(c,e),t.set(s,[a])):r>=o.length?(a=new ul(c,e),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class Jm extends Wt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qm extends Wt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ng(c,e,t){let n=new Fo;const i=new Se,s=new Se,r=new Xe,o=new Jm({depthPacking:$h}),a=new Qm,l={},u=t.maxTextureSize,d={[Sn]:Nt,[Nt]:Sn,[Mn]:Mn},h=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:eg,fragmentShader:tg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new qt;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new xt(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lc,this.render=function(y,b,T){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;const R=c.getRenderTarget(),w=c.getActiveCubeFace(),E=c.getActiveMipmapLevel(),D=c.state;D.setBlending(Nn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let H=0,W=y.length;H<W;H++){const L=y[H],P=L.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const N=P.getFrameExtents();if(i.multiply(N),s.copy(P.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/N.x),i.x=s.x*N.x,P.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/N.y),i.y=s.y*N.y,P.mapSize.y=s.y)),P.map===null){const $=this.type!==ls?{minFilter:dt,magFilter:dt}:{};P.map=new ni(i.x,i.y,$),P.map.texture.name=L.name+".shadowMap",P.camera.updateProjectionMatrix()}c.setRenderTarget(P.map),c.clear();const z=P.getViewportCount();for(let $=0;$<z;$++){const G=P.getViewport($);r.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),D.viewport(r),P.updateMatrices(L,$),n=P.getFrustum(),v(b,T,P.camera,L,this.type)}P.isPointLightShadow!==!0&&this.type===ls&&_(P,T),P.needsUpdate=!1}f.needsUpdate=!1,c.setRenderTarget(R,w,E)};function _(y,b){const T=e.update(m);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new ni(i.x,i.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,c.setRenderTarget(y.mapPass),c.clear(),c.renderBufferDirect(b,null,T,h,m,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,c.setRenderTarget(y.map),c.clear(),c.renderBufferDirect(b,null,T,p,m,null)}function x(y,b,T,R,w,E){let D=null;const H=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(H!==void 0)D=H;else if(D=T.isPointLight===!0?a:o,c.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const W=D.uuid,L=b.uuid;let P=l[W];P===void 0&&(P={},l[W]=P);let N=P[L];N===void 0&&(N=D.clone(),P[L]=N),D=N}return D.visible=b.visible,D.wireframe=b.wireframe,E===ls?D.side=b.shadowSide!==null?b.shadowSide:b.side:D.side=b.shadowSide!==null?b.shadowSide:d[b.side],D.alphaMap=b.alphaMap,D.alphaTest=b.alphaTest,D.map=b.map,D.clipShadows=b.clipShadows,D.clippingPlanes=b.clippingPlanes,D.clipIntersection=b.clipIntersection,D.displacementMap=b.displacementMap,D.displacementScale=b.displacementScale,D.displacementBias=b.displacementBias,D.wireframeLinewidth=b.wireframeLinewidth,D.linewidth=b.linewidth,T.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(T.matrixWorld),D.nearDistance=R,D.farDistance=w),D}function v(y,b,T,R,w){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&w===ls)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const H=e.update(y),W=y.material;if(Array.isArray(W)){const L=H.groups;for(let P=0,N=L.length;P<N;P++){const z=L[P],$=W[z.materialIndex];if($&&$.visible){const G=x(y,$,R,T.near,T.far,w);c.renderBufferDirect(T,null,H,G,y,z)}}}else if(W.visible){const L=x(y,W,R,T.near,T.far,w);c.renderBufferDirect(T,null,H,L,y,null)}}const D=y.children;for(let H=0,W=D.length;H<W;H++)v(D[H],b,T,R,w)}}function ig(c,e,t){const n=t.isWebGL2;function i(){let B=!1;const Y=new Xe;let ee=null;const de=new Xe(0,0,0,0);return{setMask:function(ve){ee!==ve&&!B&&(c.colorMask(ve,ve,ve,ve),ee=ve)},setLocked:function(ve){B=ve},setClear:function(ve,Ve,ct,mt,Fn){Fn===!0&&(ve*=mt,Ve*=mt,ct*=mt),Y.set(ve,Ve,ct,mt),de.equals(Y)===!1&&(c.clearColor(ve,Ve,ct,mt),de.copy(Y))},reset:function(){B=!1,ee=null,de.set(-1,0,0,0)}}}function s(){let B=!1,Y=null,ee=null,de=null;return{setTest:function(ve){ve?be(2929):xe(2929)},setMask:function(ve){Y!==ve&&!B&&(c.depthMask(ve),Y=ve)},setFunc:function(ve){if(ee!==ve){switch(ve){case vh:c.depthFunc(512);break;case yh:c.depthFunc(519);break;case Mh:c.depthFunc(513);break;case go:c.depthFunc(515);break;case bh:c.depthFunc(514);break;case wh:c.depthFunc(518);break;case Sh:c.depthFunc(516);break;case Th:c.depthFunc(517);break;default:c.depthFunc(515)}ee=ve}},setLocked:function(ve){B=ve},setClear:function(ve){de!==ve&&(c.clearDepth(ve),de=ve)},reset:function(){B=!1,Y=null,ee=null,de=null}}}function r(){let B=!1,Y=null,ee=null,de=null,ve=null,Ve=null,ct=null,mt=null,Fn=null;return{setTest:function(Ke){B||(Ke?be(2960):xe(2960))},setMask:function(Ke){Y!==Ke&&!B&&(c.stencilMask(Ke),Y=Ke)},setFunc:function(Ke,cn,Bt){(ee!==Ke||de!==cn||ve!==Bt)&&(c.stencilFunc(Ke,cn,Bt),ee=Ke,de=cn,ve=Bt)},setOp:function(Ke,cn,Bt){(Ve!==Ke||ct!==cn||mt!==Bt)&&(c.stencilOp(Ke,cn,Bt),Ve=Ke,ct=cn,mt=Bt)},setLocked:function(Ke){B=Ke},setClear:function(Ke){Fn!==Ke&&(c.clearStencil(Ke),Fn=Ke)},reset:function(){B=!1,Y=null,ee=null,de=null,ve=null,Ve=null,ct=null,mt=null,Fn=null}}}const o=new i,a=new s,l=new r,u=new WeakMap,d=new WeakMap;let h={},p={},g=new WeakMap,m=[],f=null,_=!1,x=null,v=null,y=null,b=null,T=null,R=null,w=null,E=!1,D=null,H=null,W=null,L=null,P=null;const N=c.getParameter(35661);let z=!1,$=0;const G=c.getParameter(7938);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=$>=2);let X=null,J={};const oe=c.getParameter(3088),F=c.getParameter(2978),Q=new Xe().fromArray(oe),ne=new Xe().fromArray(F);function se(B,Y,ee){const de=new Uint8Array(4),ve=c.createTexture();c.bindTexture(B,ve),c.texParameteri(B,10241,9728),c.texParameteri(B,10240,9728);for(let Ve=0;Ve<ee;Ve++)c.texImage2D(Y+Ve,0,6408,1,1,0,6408,5121,de);return ve}const q={};q[3553]=se(3553,3553,1),q[34067]=se(34067,34069,6),o.setClear(0,0,0,1),a.setClear(1),l.setClear(0),be(2929),a.setFunc(go),Je(!1),vt(ea),be(2884),lt(Nn);function be(B){h[B]!==!0&&(c.enable(B),h[B]=!0)}function xe(B){h[B]!==!1&&(c.disable(B),h[B]=!1)}function ge(B,Y){return p[B]!==Y?(c.bindFramebuffer(B,Y),p[B]=Y,n&&(B===36009&&(p[36160]=Y),B===36160&&(p[36009]=Y)),!0):!1}function he(B,Y){let ee=m,de=!1;if(B)if(ee=g.get(Y),ee===void 0&&(ee=[],g.set(Y,ee)),B.isWebGLMultipleRenderTargets){const ve=B.texture;if(ee.length!==ve.length||ee[0]!==36064){for(let Ve=0,ct=ve.length;Ve<ct;Ve++)ee[Ve]=36064+Ve;ee.length=ve.length,de=!0}}else ee[0]!==36064&&(ee[0]=36064,de=!0);else ee[0]!==1029&&(ee[0]=1029,de=!0);de&&(t.isWebGL2?c.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function He(B){return f!==B?(c.useProgram(B),f=B,!0):!1}const Ae={[Ti]:32774,[lh]:32778,[ch]:32779};if(n)Ae[sa]=32775,Ae[ra]=32776;else{const B=e.get("EXT_blend_minmax");B!==null&&(Ae[sa]=B.MIN_EXT,Ae[ra]=B.MAX_EXT)}const Me={[hh]:0,[uh]:1,[dh]:768,[hc]:770,[xh]:776,[gh]:774,[ph]:772,[fh]:769,[uc]:771,[_h]:775,[mh]:773};function lt(B,Y,ee,de,ve,Ve,ct,mt){if(B===Nn){_===!0&&(xe(3042),_=!1);return}if(_===!1&&(be(3042),_=!0),B!==ah){if(B!==x||mt!==E){if((v!==Ti||T!==Ti)&&(c.blendEquation(32774),v=Ti,T=Ti),mt)switch(B){case Ci:c.blendFuncSeparate(1,771,1,771);break;case ta:c.blendFunc(1,1);break;case na:c.blendFuncSeparate(0,769,0,1);break;case ia:c.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ci:c.blendFuncSeparate(770,771,1,771);break;case ta:c.blendFunc(770,1);break;case na:c.blendFuncSeparate(0,769,0,1);break;case ia:c.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,b=null,R=null,w=null,x=B,E=mt}return}ve=ve||Y,Ve=Ve||ee,ct=ct||de,(Y!==v||ve!==T)&&(c.blendEquationSeparate(Ae[Y],Ae[ve]),v=Y,T=ve),(ee!==y||de!==b||Ve!==R||ct!==w)&&(c.blendFuncSeparate(Me[ee],Me[de],Me[Ve],Me[ct]),y=ee,b=de,R=Ve,w=ct),x=B,E=!1}function pt(B,Y){B.side===Mn?xe(2884):be(2884);let ee=B.side===Nt;Y&&(ee=!ee),Je(ee),B.blending===Ci&&B.transparent===!1?lt(Nn):lt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),o.setMask(B.colorWrite);const de=B.stencilWrite;l.setTest(de),de&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ue(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?be(32926):xe(32926)}function Je(B){D!==B&&(B?c.frontFace(2304):c.frontFace(2305),D=B)}function vt(B){B!==rh?(be(2884),B!==H&&(B===ea?c.cullFace(1029):B===oh?c.cullFace(1028):c.cullFace(1032))):xe(2884),H=B}function $e(B){B!==W&&(z&&c.lineWidth(B),W=B)}function Ue(B,Y,ee){B?(be(32823),(L!==Y||P!==ee)&&(c.polygonOffset(Y,ee),L=Y,P=ee)):xe(32823)}function Ot(B){B?be(3089):xe(3089)}function Et(B){B===void 0&&(B=33984+N-1),X!==B&&(c.activeTexture(B),X=B)}function C(B,Y,ee){ee===void 0&&(X===null?ee=33984+N-1:ee=X);let de=J[ee];de===void 0&&(de={type:void 0,texture:void 0},J[ee]=de),(de.type!==B||de.texture!==Y)&&(X!==ee&&(c.activeTexture(ee),X=ee),c.bindTexture(B,Y||q[B]),de.type=B,de.texture=Y)}function S(){const B=J[X];B!==void 0&&B.type!==void 0&&(c.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function j(){try{c.compressedTexImage2D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{c.compressedTexImage3D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ie(){try{c.texSubImage2D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{c.texSubImage3D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function I(){try{c.compressedTexSubImage3D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function U(){try{c.texStorage2D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{c.texStorage3D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{c.texImage2D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{c.texImage3D.apply(c,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(B){Q.equals(B)===!1&&(c.scissor(B.x,B.y,B.z,B.w),Q.copy(B))}function me(B){ne.equals(B)===!1&&(c.viewport(B.x,B.y,B.z,B.w),ne.copy(B))}function Ie(B,Y){let ee=d.get(Y);ee===void 0&&(ee=new WeakMap,d.set(Y,ee));let de=ee.get(B);de===void 0&&(de=c.getUniformBlockIndex(Y,B.name),ee.set(B,de))}function De(B,Y){const de=d.get(Y).get(B);u.get(Y)!==de&&(c.uniformBlockBinding(Y,de,B.__bindingPointIndex),u.set(Y,de))}function qe(){c.disable(3042),c.disable(2884),c.disable(2929),c.disable(32823),c.disable(3089),c.disable(2960),c.disable(32926),c.blendEquation(32774),c.blendFunc(1,0),c.blendFuncSeparate(1,0,1,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(513),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(519,0,4294967295),c.stencilOp(7680,7680,7680),c.clearStencil(0),c.cullFace(1029),c.frontFace(2305),c.polygonOffset(0,0),c.activeTexture(33984),c.bindFramebuffer(36160,null),n===!0&&(c.bindFramebuffer(36009,null),c.bindFramebuffer(36008,null)),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),h={},X=null,J={},p={},g=new WeakMap,m=[],f=null,_=!1,x=null,v=null,y=null,b=null,T=null,R=null,w=null,E=!1,D=null,H=null,W=null,L=null,P=null,Q.set(0,0,c.canvas.width,c.canvas.height),ne.set(0,0,c.canvas.width,c.canvas.height),o.reset(),a.reset(),l.reset()}return{buffers:{color:o,depth:a,stencil:l},enable:be,disable:xe,bindFramebuffer:ge,drawBuffers:he,useProgram:He,setBlending:lt,setMaterial:pt,setFlipSided:Je,setCullFace:vt,setLineWidth:$e,setPolygonOffset:Ue,setScissorTest:Ot,activeTexture:Et,bindTexture:C,unbindTexture:S,compressedTexImage2D:j,compressedTexImage3D:te,texImage2D:fe,texImage3D:le,updateUBOMapping:Ie,uniformBlockBinding:De,texStorage2D:U,texStorage3D:ce,texSubImage2D:ie,texSubImage3D:ae,compressedTexSubImage2D:we,compressedTexSubImage3D:I,scissor:_e,viewport:me,reset:qe}}function sg(c,e,t,n,i,s,r){const o=i.isWebGL2,a=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,S){return _?new OffscreenCanvas(C,S):gs("canvas")}function v(C,S,j,te){let ie=1;if((C.width>te||C.height>te)&&(ie=te/Math.max(C.width,C.height)),ie<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ae=S?or:Math.floor,we=ae(ie*C.width),I=ae(ie*C.height);m===void 0&&(m=x(we,I));const U=j?x(we,I):m;return U.width=we,U.height=I,U.getContext("2d").drawImage(C,0,0,we,I),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+we+"x"+I+")."),U}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return wo(C.width)&&wo(C.height)}function b(C){return o?!1:C.wrapS!==Vt||C.wrapT!==Vt||C.minFilter!==dt&&C.minFilter!==Ct}function T(C,S){return C.generateMipmaps&&S&&C.minFilter!==dt&&C.minFilter!==Ct}function R(C){c.generateMipmap(C)}function w(C,S,j,te,ie=!1){if(o===!1)return S;if(C!==null){if(c[C]!==void 0)return c[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae=S;return S===6403&&(j===5126&&(ae=33326),j===5131&&(ae=33325),j===5121&&(ae=33321)),S===33319&&(j===5126&&(ae=33328),j===5131&&(ae=33327),j===5121&&(ae=33323)),S===6408&&(j===5126&&(ae=34836),j===5131&&(ae=34842),j===5121&&(ae=te===ke&&ie===!1?35907:32856),j===32819&&(ae=32854),j===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function E(C,S,j){return T(C,j)===!0||C.isFramebufferTexture&&C.minFilter!==dt&&C.minFilter!==Ct?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function D(C){return C===dt||C===vo||C===tr?9728:9729}function H(C){const S=C.target;S.removeEventListener("dispose",H),L(S),S.isVideoTexture&&g.delete(S)}function W(C){const S=C.target;S.removeEventListener("dispose",W),N(S)}function L(C){const S=n.get(C);if(S.__webglInit===void 0)return;const j=C.source,te=f.get(j);if(te){const ie=te[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(C),Object.keys(te).length===0&&f.delete(j)}n.remove(C)}function P(C){const S=n.get(C);c.deleteTexture(S.__webglTexture);const j=C.source,te=f.get(j);delete te[S.__cacheKey],r.memory.textures--}function N(C){const S=C.texture,j=n.get(C),te=n.get(S);if(te.__webglTexture!==void 0&&(c.deleteTexture(te.__webglTexture),r.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)c.deleteFramebuffer(j.__webglFramebuffer[ie]),j.__webglDepthbuffer&&c.deleteRenderbuffer(j.__webglDepthbuffer[ie]);else{if(c.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&c.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&c.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ie=0;ie<j.__webglColorRenderbuffer.length;ie++)j.__webglColorRenderbuffer[ie]&&c.deleteRenderbuffer(j.__webglColorRenderbuffer[ie]);j.__webglDepthRenderbuffer&&c.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ie=0,ae=S.length;ie<ae;ie++){const we=n.get(S[ie]);we.__webglTexture&&(c.deleteTexture(we.__webglTexture),r.memory.textures--),n.remove(S[ie])}n.remove(S),n.remove(C)}let z=0;function $(){z=0}function G(){const C=z;return C>=a&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a),z+=1,C}function X(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.encoding),S.join()}function J(C,S){const j=n.get(C);if(C.isVideoTexture&&Ot(C),C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(j,C,S);return}}t.bindTexture(3553,j.__webglTexture,33984+S)}function oe(C,S){const j=n.get(C);if(C.version>0&&j.__version!==C.version){xe(j,C,S);return}t.bindTexture(35866,j.__webglTexture,33984+S)}function F(C,S){const j=n.get(C);if(C.version>0&&j.__version!==C.version){xe(j,C,S);return}t.bindTexture(32879,j.__webglTexture,33984+S)}function Q(C,S){const j=n.get(C);if(C.version>0&&j.__version!==C.version){ge(j,C,S);return}t.bindTexture(34067,j.__webglTexture,33984+S)}const ne={[Ni]:10497,[Vt]:33071,[rr]:33648},se={[dt]:9728,[vo]:9984,[tr]:9986,[Ct]:9729,[fc]:9985,[Qn]:9987};function q(C,S,j){if(j?(c.texParameteri(C,10242,ne[S.wrapS]),c.texParameteri(C,10243,ne[S.wrapT]),(C===32879||C===35866)&&c.texParameteri(C,32882,ne[S.wrapR]),c.texParameteri(C,10240,se[S.magFilter]),c.texParameteri(C,10241,se[S.minFilter])):(c.texParameteri(C,10242,33071),c.texParameteri(C,10243,33071),(C===32879||C===35866)&&c.texParameteri(C,32882,33071),(S.wrapS!==Vt||S.wrapT!==Vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),c.texParameteri(C,10240,D(S.magFilter)),c.texParameteri(C,10241,D(S.minFilter)),S.minFilter!==dt&&S.minFilter!==Ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===dt||S.minFilter!==tr&&S.minFilter!==Qn||S.type===Dn&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===ds&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(c.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function be(C,S){let j=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",H));const te=S.source;let ie=f.get(te);ie===void 0&&(ie={},f.set(te,ie));const ae=X(S);if(ae!==C.__cacheKey){ie[ae]===void 0&&(ie[ae]={texture:c.createTexture(),usedTimes:0},r.memory.textures++,j=!0),ie[ae].usedTimes++;const we=ie[C.__cacheKey];we!==void 0&&(ie[C.__cacheKey].usedTimes--,we.usedTimes===0&&P(S)),C.__cacheKey=ae,C.__webglTexture=ie[ae].texture}return j}function xe(C,S,j){let te=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=35866),S.isData3DTexture&&(te=32879);const ie=be(C,S),ae=S.source;t.bindTexture(te,C.__webglTexture,33984+j);const we=n.get(ae);if(ae.version!==we.__version||ie===!0){t.activeTexture(33984+j),c.pixelStorei(37440,S.flipY),c.pixelStorei(37441,S.premultiplyAlpha),c.pixelStorei(3317,S.unpackAlignment),c.pixelStorei(37443,0);const I=b(S)&&y(S.image)===!1;let U=v(S.image,I,!1,u);U=Et(S,U);const ce=y(U)||o,fe=s.convert(S.format,S.encoding);let le=s.convert(S.type),_e=w(S.internalFormat,fe,le,S.encoding,S.isVideoTexture);q(te,S,ce);let me;const Ie=S.mipmaps,De=o&&S.isVideoTexture!==!0,qe=we.__version===void 0||ie===!0,B=E(S,U,ce);if(S.isDepthTexture)_e=6402,o?S.type===Dn?_e=36012:S.type===Xn?_e=33190:S.type===Li?_e=35056:_e=33189:S.type===Dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===$n&&_e===6402&&S.type!==pc&&S.type!==Xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Xn,le=s.convert(S.type)),S.format===Fi&&_e===6402&&(_e=34041,S.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Li,le=s.convert(S.type))),qe&&(De?t.texStorage2D(3553,1,_e,U.width,U.height):t.texImage2D(3553,0,_e,U.width,U.height,0,fe,le,null));else if(S.isDataTexture)if(Ie.length>0&&ce){De&&qe&&t.texStorage2D(3553,B,_e,Ie[0].width,Ie[0].height);for(let Y=0,ee=Ie.length;Y<ee;Y++)me=Ie[Y],De?t.texSubImage2D(3553,Y,0,0,me.width,me.height,fe,le,me.data):t.texImage2D(3553,Y,_e,me.width,me.height,0,fe,le,me.data);S.generateMipmaps=!1}else De?(qe&&t.texStorage2D(3553,B,_e,U.width,U.height),t.texSubImage2D(3553,0,0,0,U.width,U.height,fe,le,U.data)):t.texImage2D(3553,0,_e,U.width,U.height,0,fe,le,U.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){De&&qe&&t.texStorage3D(35866,B,_e,Ie[0].width,Ie[0].height,U.depth);for(let Y=0,ee=Ie.length;Y<ee;Y++)me=Ie[Y],S.format!==Ht?fe!==null?De?t.compressedTexSubImage3D(35866,Y,0,0,0,me.width,me.height,U.depth,fe,me.data,0,0):t.compressedTexImage3D(35866,Y,_e,me.width,me.height,U.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(35866,Y,0,0,0,me.width,me.height,U.depth,fe,le,me.data):t.texImage3D(35866,Y,_e,me.width,me.height,U.depth,0,fe,le,me.data)}else{De&&qe&&t.texStorage2D(3553,B,_e,Ie[0].width,Ie[0].height);for(let Y=0,ee=Ie.length;Y<ee;Y++)me=Ie[Y],S.format!==Ht?fe!==null?De?t.compressedTexSubImage2D(3553,Y,0,0,me.width,me.height,fe,me.data):t.compressedTexImage2D(3553,Y,_e,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(3553,Y,0,0,me.width,me.height,fe,le,me.data):t.texImage2D(3553,Y,_e,me.width,me.height,0,fe,le,me.data)}else if(S.isDataArrayTexture)De?(qe&&t.texStorage3D(35866,B,_e,U.width,U.height,U.depth),t.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,fe,le,U.data)):t.texImage3D(35866,0,_e,U.width,U.height,U.depth,0,fe,le,U.data);else if(S.isData3DTexture)De?(qe&&t.texStorage3D(32879,B,_e,U.width,U.height,U.depth),t.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,fe,le,U.data)):t.texImage3D(32879,0,_e,U.width,U.height,U.depth,0,fe,le,U.data);else if(S.isFramebufferTexture){if(qe)if(De)t.texStorage2D(3553,B,_e,U.width,U.height);else{let Y=U.width,ee=U.height;for(let de=0;de<B;de++)t.texImage2D(3553,de,_e,Y,ee,0,fe,le,null),Y>>=1,ee>>=1}}else if(Ie.length>0&&ce){De&&qe&&t.texStorage2D(3553,B,_e,Ie[0].width,Ie[0].height);for(let Y=0,ee=Ie.length;Y<ee;Y++)me=Ie[Y],De?t.texSubImage2D(3553,Y,0,0,fe,le,me):t.texImage2D(3553,Y,_e,fe,le,me);S.generateMipmaps=!1}else De?(qe&&t.texStorage2D(3553,B,_e,U.width,U.height),t.texSubImage2D(3553,0,0,0,fe,le,U)):t.texImage2D(3553,0,_e,fe,le,U);T(S,ce)&&R(te),we.__version=ae.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ge(C,S,j){if(S.image.length!==6)return;const te=be(C,S),ie=S.source;t.bindTexture(34067,C.__webglTexture,33984+j);const ae=n.get(ie);if(ie.version!==ae.__version||te===!0){t.activeTexture(33984+j),c.pixelStorei(37440,S.flipY),c.pixelStorei(37441,S.premultiplyAlpha),c.pixelStorei(3317,S.unpackAlignment),c.pixelStorei(37443,0);const we=S.isCompressedTexture||S.image[0].isCompressedTexture,I=S.image[0]&&S.image[0].isDataTexture,U=[];for(let Y=0;Y<6;Y++)!we&&!I?U[Y]=v(S.image[Y],!1,!0,l):U[Y]=I?S.image[Y].image:S.image[Y],U[Y]=Et(S,U[Y]);const ce=U[0],fe=y(ce)||o,le=s.convert(S.format,S.encoding),_e=s.convert(S.type),me=w(S.internalFormat,le,_e,S.encoding),Ie=o&&S.isVideoTexture!==!0,De=ae.__version===void 0||te===!0;let qe=E(S,ce,fe);q(34067,S,fe);let B;if(we){Ie&&De&&t.texStorage2D(34067,qe,me,ce.width,ce.height);for(let Y=0;Y<6;Y++){B=U[Y].mipmaps;for(let ee=0;ee<B.length;ee++){const de=B[ee];S.format!==Ht?le!==null?Ie?t.compressedTexSubImage2D(34069+Y,ee,0,0,de.width,de.height,le,de.data):t.compressedTexImage2D(34069+Y,ee,me,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+Y,ee,0,0,de.width,de.height,le,_e,de.data):t.texImage2D(34069+Y,ee,me,de.width,de.height,0,le,_e,de.data)}}}else{B=S.mipmaps,Ie&&De&&(B.length>0&&qe++,t.texStorage2D(34067,qe,me,U[0].width,U[0].height));for(let Y=0;Y<6;Y++)if(I){Ie?t.texSubImage2D(34069+Y,0,0,0,U[Y].width,U[Y].height,le,_e,U[Y].data):t.texImage2D(34069+Y,0,me,U[Y].width,U[Y].height,0,le,_e,U[Y].data);for(let ee=0;ee<B.length;ee++){const ve=B[ee].image[Y].image;Ie?t.texSubImage2D(34069+Y,ee+1,0,0,ve.width,ve.height,le,_e,ve.data):t.texImage2D(34069+Y,ee+1,me,ve.width,ve.height,0,le,_e,ve.data)}}else{Ie?t.texSubImage2D(34069+Y,0,0,0,le,_e,U[Y]):t.texImage2D(34069+Y,0,me,le,_e,U[Y]);for(let ee=0;ee<B.length;ee++){const de=B[ee];Ie?t.texSubImage2D(34069+Y,ee+1,0,0,le,_e,de.image[Y]):t.texImage2D(34069+Y,ee+1,me,le,_e,de.image[Y])}}}T(S,fe)&&R(34067),ae.__version=ie.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function he(C,S,j,te,ie){const ae=s.convert(j.format,j.encoding),we=s.convert(j.type),I=w(j.internalFormat,ae,we,j.encoding);n.get(S).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,I,S.width,S.height,S.depth,0,ae,we,null):t.texImage2D(ie,0,I,S.width,S.height,0,ae,we,null)),t.bindFramebuffer(36160,C),Ue(S)?h.framebufferTexture2DMultisampleEXT(36160,te,ie,n.get(j).__webglTexture,0,$e(S)):(ie===3553||ie>=34069&&ie<=34074)&&c.framebufferTexture2D(36160,te,ie,n.get(j).__webglTexture,0),t.bindFramebuffer(36160,null)}function He(C,S,j){if(c.bindRenderbuffer(36161,C),S.depthBuffer&&!S.stencilBuffer){let te=33189;if(j||Ue(S)){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Dn?te=36012:ie.type===Xn&&(te=33190));const ae=$e(S);Ue(S)?h.renderbufferStorageMultisampleEXT(36161,ae,te,S.width,S.height):c.renderbufferStorageMultisample(36161,ae,te,S.width,S.height)}else c.renderbufferStorage(36161,te,S.width,S.height);c.framebufferRenderbuffer(36160,36096,36161,C)}else if(S.depthBuffer&&S.stencilBuffer){const te=$e(S);j&&Ue(S)===!1?c.renderbufferStorageMultisample(36161,te,35056,S.width,S.height):Ue(S)?h.renderbufferStorageMultisampleEXT(36161,te,35056,S.width,S.height):c.renderbufferStorage(36161,34041,S.width,S.height),c.framebufferRenderbuffer(36160,33306,36161,C)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0;ie<te.length;ie++){const ae=te[ie],we=s.convert(ae.format,ae.encoding),I=s.convert(ae.type),U=w(ae.internalFormat,we,I,ae.encoding),ce=$e(S);j&&Ue(S)===!1?c.renderbufferStorageMultisample(36161,ce,U,S.width,S.height):Ue(S)?h.renderbufferStorageMultisampleEXT(36161,ce,U,S.width,S.height):c.renderbufferStorage(36161,U,S.width,S.height)}}c.bindRenderbuffer(36161,null)}function Ae(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);const te=n.get(S.depthTexture).__webglTexture,ie=$e(S);if(S.depthTexture.format===$n)Ue(S)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ie):c.framebufferTexture2D(36160,36096,3553,te,0);else if(S.depthTexture.format===Fi)Ue(S)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ie):c.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function Me(C){const S=n.get(C),j=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Ae(S.__webglFramebuffer,C)}else if(j){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=c.createRenderbuffer(),He(S.__webglDepthbuffer[te],C,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=c.createRenderbuffer(),He(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function lt(C,S,j){const te=n.get(C);S!==void 0&&he(te.__webglFramebuffer,C,C.texture,36064,3553),j!==void 0&&Me(C)}function pt(C){const S=C.texture,j=n.get(C),te=n.get(S);C.addEventListener("dispose",W),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=c.createTexture()),te.__version=S.version,r.memory.textures++);const ie=C.isWebGLCubeRenderTarget===!0,ae=C.isWebGLMultipleRenderTargets===!0,we=y(C)||o;if(ie){j.__webglFramebuffer=[];for(let I=0;I<6;I++)j.__webglFramebuffer[I]=c.createFramebuffer()}else{if(j.__webglFramebuffer=c.createFramebuffer(),ae)if(i.drawBuffers){const I=C.texture;for(let U=0,ce=I.length;U<ce;U++){const fe=n.get(I[U]);fe.__webglTexture===void 0&&(fe.__webglTexture=c.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Ue(C)===!1){const I=ae?S:[S];j.__webglMultisampledFramebuffer=c.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let U=0;U<I.length;U++){const ce=I[U];j.__webglColorRenderbuffer[U]=c.createRenderbuffer(),c.bindRenderbuffer(36161,j.__webglColorRenderbuffer[U]);const fe=s.convert(ce.format,ce.encoding),le=s.convert(ce.type),_e=w(ce.internalFormat,fe,le,ce.encoding,C.isXRRenderTarget===!0),me=$e(C);c.renderbufferStorageMultisample(36161,me,_e,C.width,C.height),c.framebufferRenderbuffer(36160,36064+U,36161,j.__webglColorRenderbuffer[U])}c.bindRenderbuffer(36161,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=c.createRenderbuffer(),He(j.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,te.__webglTexture),q(34067,S,we);for(let I=0;I<6;I++)he(j.__webglFramebuffer[I],C,S,36064,34069+I);T(S,we)&&R(34067),t.unbindTexture()}else if(ae){const I=C.texture;for(let U=0,ce=I.length;U<ce;U++){const fe=I[U],le=n.get(fe);t.bindTexture(3553,le.__webglTexture),q(3553,fe,we),he(j.__webglFramebuffer,C,fe,36064+U,3553),T(fe,we)&&R(3553)}t.unbindTexture()}else{let I=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?I=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(I,te.__webglTexture),q(I,S,we),he(j.__webglFramebuffer,C,S,36064,I),T(S,we)&&R(I),t.unbindTexture()}C.depthBuffer&&Me(C)}function Je(C){const S=y(C)||o,j=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,ie=j.length;te<ie;te++){const ae=j[te];if(T(ae,S)){const we=C.isWebGLCubeRenderTarget?34067:3553,I=n.get(ae).__webglTexture;t.bindTexture(we,I),R(we),t.unbindTexture()}}}function vt(C){if(o&&C.samples>0&&Ue(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],j=C.width,te=C.height;let ie=16384;const ae=[],we=C.stencilBuffer?33306:36096,I=n.get(C),U=C.isWebGLMultipleRenderTargets===!0;if(U)for(let ce=0;ce<S.length;ce++)t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+ce,36161,null),t.bindFramebuffer(36160,I.__webglFramebuffer),c.framebufferTexture2D(36009,36064+ce,3553,null,0);t.bindFramebuffer(36008,I.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,I.__webglFramebuffer);for(let ce=0;ce<S.length;ce++){ae.push(36064+ce),C.depthBuffer&&ae.push(we);const fe=I.__ignoreDepthValues!==void 0?I.__ignoreDepthValues:!1;if(fe===!1&&(C.depthBuffer&&(ie|=256),C.stencilBuffer&&(ie|=1024)),U&&c.framebufferRenderbuffer(36008,36064,36161,I.__webglColorRenderbuffer[ce]),fe===!0&&(c.invalidateFramebuffer(36008,[we]),c.invalidateFramebuffer(36009,[we])),U){const le=n.get(S[ce]).__webglTexture;c.framebufferTexture2D(36009,36064,3553,le,0)}c.blitFramebuffer(0,0,j,te,0,0,j,te,ie,9728),p&&c.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),U)for(let ce=0;ce<S.length;ce++){t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+ce,36161,I.__webglColorRenderbuffer[ce]);const fe=n.get(S[ce]).__webglTexture;t.bindFramebuffer(36160,I.__webglFramebuffer),c.framebufferTexture2D(36009,36064+ce,3553,fe,0)}t.bindFramebuffer(36009,I.__webglMultisampledFramebuffer)}}function $e(C){return Math.min(d,C.samples)}function Ue(C){const S=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ot(C){const S=r.render.frame;g.get(C)!==S&&(g.set(C,S),C.update())}function Et(C,S){const j=C.encoding,te=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===bo||j!==ti&&(j===ke?o===!1?e.has("EXT_sRGB")===!0&&te===Ht?(C.format=bo,C.minFilter=Ct,C.generateMipmaps=!1):S=vc.sRGBToLinear(S):(te!==Ht||ie!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),S}this.allocateTextureUnit=G,this.resetTextureUnits=$,this.setTexture2D=J,this.setTexture2DArray=oe,this.setTexture3D=F,this.setTextureCube=Q,this.rebindTextures=lt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ue}function rg(c,e,t){const n=t.isWebGL2;function i(s,r=null){let o;if(s===ei)return 5121;if(s===zh)return 32819;if(s===Oh)return 32820;if(s===Dh)return 5120;if(s===Nh)return 5122;if(s===pc)return 5123;if(s===Fh)return 5124;if(s===Xn)return 5125;if(s===Dn)return 5126;if(s===ds)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Bh)return 6406;if(s===Ht)return 6408;if(s===Uh)return 6409;if(s===kh)return 6410;if(s===$n)return 6402;if(s===Fi)return 34041;if(s===bo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Gh)return 6403;if(s===Vh)return 36244;if(s===Hh)return 33319;if(s===Wh)return 33320;if(s===qh)return 36249;if(s===br||s===wr||s===Sr||s===Tr)if(r===ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===br)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===wr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Sr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===br)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===wr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Sr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===oa||s===aa||s===la||s===ca)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===oa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===aa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===la)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ca)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ha||s===ua)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ha)return r===ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ua)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===da||s===fa||s===pa||s===ma||s===ga||s===_a||s===xa||s===va||s===ya||s===Ma||s===ba||s===wa||s===Sa||s===Ta)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===da)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fa)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===pa)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ma)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ga)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_a)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===xa)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===va)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ya)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ma)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ba)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wa)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sa)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ta)return r===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Er)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Er)return r===ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Xh||s===Ea||s===Aa||s===Ca)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Er)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Ea)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Aa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ca)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Li?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):c[s]!==void 0?c[s]:null}return{convert:i}}class og extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kn extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ag={type:"move"};class Jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const m of e.hand.values()){const f=t.getJointPose(m,n),_=this._getHandJoint(l,m);f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ag)))}return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class lg extends ft{constructor(e,t,n,i,s,r,o,a,l,u){if(u=u!==void 0?u:$n,u!==$n&&u!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===$n&&(n=Xn),n===void 0&&u===Fi&&(n=Li),super(null,i,s,r,o,a,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:dt,this.minFilter=a!==void 0?a:dt,this.flipY=!1,this.generateMipmaps=!1}}class cg extends ri{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",a=1,l=null,u=null,d=null,h=null,p=null,g=null;const m=t.getContextAttributes();let f=null,_=null;const x=[],v=[],y=new Set,b=new Map,T=new St;T.layers.enable(1),T.viewport=new Xe;const R=new St;R.layers.enable(2),R.viewport=new Xe;const w=[T,R],E=new og;E.layers.enable(1),E.layers.enable(2);let D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let Q=x[F];return Q===void 0&&(Q=new Jr,x[F]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(F){let Q=x[F];return Q===void 0&&(Q=new Jr,x[F]=Q),Q.getGripSpace()},this.getHand=function(F){let Q=x[F];return Q===void 0&&(Q=new Jr,x[F]=Q),Q.getHandSpace()};function W(F){const Q=v.indexOf(F.inputSource);if(Q===-1)return;const ne=x[Q];ne!==void 0&&ne.dispatchEvent({type:F.type,data:F.inputSource})}function L(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",P);for(let F=0;F<x.length;F++){const Q=v[F];Q!==null&&(v[F]=null,x[F].disconnect(Q))}D=null,H=null,e.setRenderTarget(f),p=null,h=null,d=null,i=null,_=null,oe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",L),i.addEventListener("inputsourceschange",P),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:p}),_=new ni(p.framebufferWidth,p.framebufferHeight,{format:Ht,type:ei,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let Q=null,ne=null,se=null;m.depth&&(se=m.stencil?35056:33190,Q=m.stencil?Fi:$n,ne=m.stencil?Li:Xn);const q={colorFormat:32856,depthFormat:se,scaleFactor:s};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(q),i.updateRenderState({layers:[h]}),_=new ni(h.textureWidth,h.textureHeight,{format:Ht,type:ei,depthTexture:new lg(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});const be=e.properties.get(_);be.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(a),l=null,r=await i.requestReferenceSpace(o),oe.setContext(i),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function P(F){for(let Q=0;Q<F.removed.length;Q++){const ne=F.removed[Q],se=v.indexOf(ne);se>=0&&(v[se]=null,x[se].disconnect(ne))}for(let Q=0;Q<F.added.length;Q++){const ne=F.added[Q];let se=v.indexOf(ne);if(se===-1){for(let be=0;be<x.length;be++)if(be>=v.length){v.push(ne),se=be;break}else if(v[be]===null){v[be]=ne,se=be;break}if(se===-1)break}const q=x[se];q&&q.connect(ne)}}const N=new O,z=new O;function $(F,Q,ne){N.setFromMatrixPosition(Q.matrixWorld),z.setFromMatrixPosition(ne.matrixWorld);const se=N.distanceTo(z),q=Q.projectionMatrix.elements,be=ne.projectionMatrix.elements,xe=q[14]/(q[10]-1),ge=q[14]/(q[10]+1),he=(q[9]+1)/q[5],He=(q[9]-1)/q[5],Ae=(q[8]-1)/q[0],Me=(be[8]+1)/be[0],lt=xe*Ae,pt=xe*Me,Je=se/(-Ae+Me),vt=Je*-Ae;Q.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(vt),F.translateZ(Je),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const $e=xe+Je,Ue=ge+Je,Ot=lt-vt,Et=pt+(se-vt),C=he*ge/Ue*$e,S=He*ge/Ue*$e;F.projectionMatrix.makePerspective(Ot,Et,C,S,$e,Ue)}function G(F,Q){Q===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(Q.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;E.near=R.near=T.near=F.near,E.far=R.far=T.far=F.far,(D!==E.near||H!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,H=E.far);const Q=F.parent,ne=E.cameras;G(E,Q);for(let q=0;q<ne.length;q++)G(ne[q],Q);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),F.matrix.copy(E.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const se=F.children;for(let q=0,be=se.length;q<be;q++)se[q].updateMatrixWorld(!0);ne.length===2?$(E,T,R):E.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return a},this.setFoveation=function(F){a=F,h!==null&&(h.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)},this.getPlanes=function(){return y};let X=null;function J(F,Q){if(u=Q.getViewerPose(l||r),g=Q,u!==null){const ne=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let se=!1;ne.length!==E.cameras.length&&(E.cameras.length=0,se=!0);for(let q=0;q<ne.length;q++){const be=ne[q];let xe=null;if(p!==null)xe=p.getViewport(be);else{const he=d.getViewSubImage(h,be);xe=he.viewport,q===0&&(e.setRenderTargetTextures(_,he.colorTexture,h.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(_))}let ge=w[q];ge===void 0&&(ge=new St,ge.layers.enable(q),ge.viewport=new Xe,w[q]=ge),ge.matrix.fromArray(be.transform.matrix),ge.projectionMatrix.fromArray(be.projectionMatrix),ge.viewport.set(xe.x,xe.y,xe.width,xe.height),q===0&&E.matrix.copy(ge.matrix),se===!0&&E.cameras.push(ge)}}for(let ne=0;ne<x.length;ne++){const se=v[ne],q=x[ne];se!==null&&q!==void 0&&q.update(se,Q,l||r)}if(X&&X(F,Q),Q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let ne=null;for(const se of y)Q.detectedPlanes.has(se)||(ne===null&&(ne=[]),ne.push(se));if(ne!==null)for(const se of ne)y.delete(se),b.delete(se),n.dispatchEvent({type:"planeremoved",data:se});for(const se of Q.detectedPlanes)if(!y.has(se))y.add(se),b.set(se,Q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:se});else{const q=b.get(se);se.lastChangedTime>q&&(b.set(se,se.lastChangedTime),n.dispatchEvent({type:"planechanged",data:se}))}}g=null}const oe=new Ac;oe.setAnimationLoop(J),this.setAnimationLoop=function(F){X=F},this.dispose=function(){}}}function hg(c,e){function t(m,f){f.color.getRGB(m.fogColor.value,Sc(c)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,_,x,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(m,f):f.isMeshToonMaterial?(i(m,f),u(m,f)):f.isMeshPhongMaterial?(i(m,f),l(m,f)):f.isMeshStandardMaterial?(i(m,f),d(m,f),f.isMeshPhysicalMaterial&&h(m,f,v)):f.isMeshMatcapMaterial?(i(m,f),p(m,f)):f.isMeshDepthMaterial?i(m,f):f.isMeshDistanceMaterial?(i(m,f),g(m,f)):f.isMeshNormalMaterial?i(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&r(m,f)):f.isPointsMaterial?o(m,f,_,x):f.isSpriteMaterial?a(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===Nt&&(m.bumpScale.value*=-1)),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===Nt&&m.normalScale.value.negate()),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const y=c.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let x;f.map?x=f.map:f.specularMap?x=f.specularMap:f.displacementMap?x=f.displacementMap:f.normalMap?x=f.normalMap:f.bumpMap?x=f.bumpMap:f.roughnessMap?x=f.roughnessMap:f.metalnessMap?x=f.metalnessMap:f.alphaMap?x=f.alphaMap:f.emissiveMap?x=f.emissiveMap:f.clearcoatMap?x=f.clearcoatMap:f.clearcoatNormalMap?x=f.clearcoatNormalMap:f.clearcoatRoughnessMap?x=f.clearcoatRoughnessMap:f.iridescenceMap?x=f.iridescenceMap:f.iridescenceThicknessMap?x=f.iridescenceThicknessMap:f.specularIntensityMap?x=f.specularIntensityMap:f.specularColorMap?x=f.specularColorMap:f.transmissionMap?x=f.transmissionMap:f.thicknessMap?x=f.thicknessMap:f.sheenColorMap?x=f.sheenColorMap:f.sheenRoughnessMap&&(x=f.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let v;f.aoMap?v=f.aoMap:f.lightMap&&(v=f.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uv2Transform.value.copy(v.matrix))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function r(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function o(m,f,_,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=x*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function l(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function h(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Nt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function ug(c,e,t,n){let i={},s={},r=[];const o=t.isWebGL2?c.getParameter(35375):0;function a(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function l(x,v){let y=i[x.id];y===void 0&&(g(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",f));const b=v.program;n.updateUBOMapping(x,b);const T=e.render.frame;s[x.id]!==T&&(h(x),s[x.id]=T)}function u(x){const v=d();x.__bindingPointIndex=v;const y=c.createBuffer(),b=x.__size,T=x.usage;return c.bindBuffer(35345,y),c.bufferData(35345,b,T),c.bindBuffer(35345,null),c.bindBufferBase(35345,v,y),y}function d(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=i[x.id],y=x.uniforms,b=x.__cache;c.bindBuffer(35345,v);for(let T=0,R=y.length;T<R;T++){const w=y[T];if(p(w,T,b)===!0){const E=w.__offset,D=Array.isArray(w.value)?w.value:[w.value];let H=0;for(let W=0;W<D.length;W++){const L=D[W],P=m(L);typeof L=="number"?(w.__data[0]=L,c.bufferSubData(35345,E+H,w.__data)):L.isMatrix3?(w.__data[0]=L.elements[0],w.__data[1]=L.elements[1],w.__data[2]=L.elements[2],w.__data[3]=L.elements[0],w.__data[4]=L.elements[3],w.__data[5]=L.elements[4],w.__data[6]=L.elements[5],w.__data[7]=L.elements[0],w.__data[8]=L.elements[6],w.__data[9]=L.elements[7],w.__data[10]=L.elements[8],w.__data[11]=L.elements[0]):(L.toArray(w.__data,H),H+=P.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(35345,E,w.__data)}}c.bindBuffer(35345,null)}function p(x,v,y){const b=x.value;if(y[v]===void 0){if(typeof b=="number")y[v]=b;else{const T=Array.isArray(b)?b:[b],R=[];for(let w=0;w<T.length;w++)R.push(T[w].clone());y[v]=R}return!0}else if(typeof b=="number"){if(y[v]!==b)return y[v]=b,!0}else{const T=Array.isArray(y[v])?y[v]:[y[v]],R=Array.isArray(b)?b:[b];for(let w=0;w<T.length;w++){const E=T[w];if(E.equals(R[w])===!1)return E.copy(R[w]),!0}}return!1}function g(x){const v=x.uniforms;let y=0;const b=16;let T=0;for(let R=0,w=v.length;R<w;R++){const E=v[R],D={boundary:0,storage:0},H=Array.isArray(E.value)?E.value:[E.value];for(let W=0,L=H.length;W<L;W++){const P=H[W],N=m(P);D.boundary+=N.boundary,D.storage+=N.storage}if(E.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,R>0){T=y%b;const W=b-T;T!==0&&W-D.boundary<0&&(y+=b-T,E.__offset=y)}y+=D.storage}return T=y%b,T>0&&(y+=b-T),x.__size=y,x.__cache={},this}function m(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function f(x){const v=x.target;v.removeEventListener("dispose",f);const y=r.indexOf(v.__bindingPointIndex);r.splice(y,1),c.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function _(){for(const x in i)c.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:a,update:l,dispose:_}}function dg(){const c=gs("canvas");return c.style.display="block",c}function Ic(c={}){this.isWebGLRenderer=!0;const e=c.canvas!==void 0?c.canvas:dg(),t=c.context!==void 0?c.context:null,n=c.depth!==void 0?c.depth:!0,i=c.stencil!==void 0?c.stencil:!0,s=c.antialias!==void 0?c.antialias:!1,r=c.premultipliedAlpha!==void 0?c.premultipliedAlpha:!0,o=c.preserveDrawingBuffer!==void 0?c.preserveDrawingBuffer:!1,a=c.powerPreference!==void 0?c.powerPreference:"default",l=c.failIfMajorPerformanceCaveat!==void 0?c.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=c.alpha!==void 0?c.alpha:!1;let d=null,h=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ti,this.physicallyCorrectLights=!1,this.toneMapping=wn,this.toneMappingExposure=1;const m=this;let f=!1,_=0,x=0,v=null,y=-1,b=null;const T=new Xe,R=new Xe;let w=null,E=e.width,D=e.height,H=1,W=null,L=null;const P=new Xe(0,0,E,D),N=new Xe(0,0,E,D);let z=!1;const $=new Fo;let G=!1,X=!1,J=null;const oe=new Pe,F=new Se,Q=new O,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return v===null?H:1}let q=t;function be(A,V){for(let K=0;K<A.length;K++){const k=A[K],Z=e.getContext(k,V);if(Z!==null)return Z}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:a,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Io}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",Ie,!1),q===null){const V=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&V.shift(),q=be(V,A),q===null)throw be(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let xe,ge,he,He,Ae,Me,lt,pt,Je,vt,$e,Ue,Ot,Et,C,S,j,te,ie,ae,we,I,U,ce;function fe(){xe=new wp(q),ge=new _p(q,xe,c),xe.init(ge),I=new rg(q,xe,ge),he=new ig(q,xe,ge),He=new Ep,Ae=new Hm,Me=new sg(q,xe,he,Ae,ge,I,He),lt=new vp(m),pt=new bp(m),Je=new Nu(q,ge),U=new mp(q,xe,Je,ge),vt=new Sp(q,Je,He,U),$e=new Rp(q,vt,Je,He),ie=new Lp(q,ge,Me),S=new xp(Ae),Ue=new Vm(m,lt,pt,xe,ge,U,S),Ot=new hg(m,Ae),Et=new qm,C=new $m(xe,ge),te=new pp(m,lt,pt,he,$e,u,r),j=new ng(m,$e,ge),ce=new ug(q,He,ge,he),ae=new gp(q,xe,He,ge),we=new Tp(q,xe,He,ge),He.programs=Ue.programs,m.capabilities=ge,m.extensions=xe,m.properties=Ae,m.renderLists=Et,m.shadowMap=j,m.state=he,m.info=He}fe();const le=new cg(m,q);this.xr=le,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(E,D,!1))},this.getSize=function(A){return A.set(E,D)},this.setSize=function(A,V,K){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=A,D=V,e.width=Math.floor(A*H),e.height=Math.floor(V*H),K!==!1&&(e.style.width=A+"px",e.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(E*H,D*H).floor()},this.setDrawingBufferSize=function(A,V,K){E=A,D=V,H=K,e.width=Math.floor(A*K),e.height=Math.floor(V*K),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(P)},this.setViewport=function(A,V,K,k){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,V,K,k),he.viewport(T.copy(P).multiplyScalar(H).floor())},this.getScissor=function(A){return A.copy(N)},this.setScissor=function(A,V,K,k){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,V,K,k),he.scissor(R.copy(N).multiplyScalar(H).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(A){he.setScissorTest(z=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){L=A},this.getClearColor=function(A){return A.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(A=!0,V=!0,K=!0){let k=0;A&&(k|=16384),V&&(k|=256),K&&(k|=1024),q.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Ie,!1),Et.dispose(),C.dispose(),Ae.dispose(),lt.dispose(),pt.dispose(),$e.dispose(),U.dispose(),ce.dispose(),Ue.dispose(),le.dispose(),le.removeEventListener("sessionstart",de),le.removeEventListener("sessionend",ve),J&&(J.dispose(),J=null),Ve.stop()};function _e(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const A=He.autoReset,V=j.enabled,K=j.autoUpdate,k=j.needsUpdate,Z=j.type;fe(),He.autoReset=A,j.enabled=V,j.autoUpdate=K,j.needsUpdate=k,j.type=Z}function Ie(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function De(A){const V=A.target;V.removeEventListener("dispose",De),qe(V)}function qe(A){B(A),Ae.remove(A)}function B(A){const V=Ae.get(A).programs;V!==void 0&&(V.forEach(function(K){Ue.releaseProgram(K)}),A.isShaderMaterial&&Ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,K,k,Z,ye){V===null&&(V=ne);const Ee=Z.isMesh&&Z.matrixWorld.determinant()<0,Le=eh(A,V,K,k,Z);he.setMaterial(k,Ee);let Re=K.index,Be=1;k.wireframe===!0&&(Re=vt.getWireframeAttribute(K),Be=2);const Ne=K.drawRange,Fe=K.attributes.position;let Qe=Ne.start*Be,Lt=(Ne.start+Ne.count)*Be;ye!==null&&(Qe=Math.max(Qe,ye.start*Be),Lt=Math.min(Lt,(ye.start+ye.count)*Be)),Re!==null?(Qe=Math.max(Qe,0),Lt=Math.min(Lt,Re.count)):Fe!=null&&(Qe=Math.max(Qe,0),Lt=Math.min(Lt,Fe.count));const hn=Lt-Qe;if(hn<0||hn===1/0)return;U.setup(Z,k,Le,K,Re);let zn,et=ae;if(Re!==null&&(zn=Je.get(Re),et=we,et.setIndex(zn)),Z.isMesh)k.wireframe===!0?(he.setLineWidth(k.wireframeLinewidth*se()),et.setMode(1)):et.setMode(4);else if(Z.isLine){let ze=k.linewidth;ze===void 0&&(ze=1),he.setLineWidth(ze*se()),Z.isLineSegments?et.setMode(1):Z.isLineLoop?et.setMode(2):et.setMode(3)}else Z.isPoints?et.setMode(0):Z.isSprite&&et.setMode(4);if(Z.isInstancedMesh)et.renderInstances(Qe,hn,Z.count);else if(K.isInstancedBufferGeometry){const ze=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,xr=Math.min(K.instanceCount,ze);et.renderInstances(Qe,hn,xr)}else et.render(Qe,hn)},this.compile=function(A,V){function K(k,Z,ye){k.transparent===!0&&k.side===Mn&&k.forceSinglePass===!1?(k.side=Nt,k.needsUpdate=!0,Bt(k,Z,ye),k.side=Sn,k.needsUpdate=!0,Bt(k,Z,ye),k.side=Mn):Bt(k,Z,ye)}h=C.get(A),h.init(),g.push(h),A.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),h.setupLights(m.physicallyCorrectLights),A.traverse(function(k){const Z=k.material;if(Z)if(Array.isArray(Z))for(let ye=0;ye<Z.length;ye++){const Ee=Z[ye];K(Ee,A,k)}else K(Z,A,k)}),g.pop(),h=null};let Y=null;function ee(A){Y&&Y(A)}function de(){Ve.stop()}function ve(){Ve.start()}const Ve=new Ac;Ve.setAnimationLoop(ee),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(A){Y=A,le.setAnimationLoop(A),A===null?Ve.stop():Ve.start()},le.addEventListener("sessionstart",de),le.addEventListener("sessionend",ve),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(V),V=le.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,V,v),h=C.get(A,g.length),h.init(),g.push(h),oe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),$.setFromProjectionMatrix(oe),X=this.localClippingEnabled,G=S.init(this.clippingPlanes,X),d=Et.get(A,p.length),d.init(),p.push(d),ct(A,V,0,m.sortObjects),d.finish(),m.sortObjects===!0&&d.sort(W,L),G===!0&&S.beginShadows();const K=h.state.shadowsArray;if(j.render(K,A,V),G===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(d,A),h.setupLights(m.physicallyCorrectLights),V.isArrayCamera){const k=V.cameras;for(let Z=0,ye=k.length;Z<ye;Z++){const Ee=k[Z];mt(d,A,Ee,Ee.viewport)}}else mt(d,A,V);v!==null&&(Me.updateMultisampleRenderTarget(v),Me.updateRenderTargetMipmap(v)),A.isScene===!0&&A.onAfterRender(m,A,V),U.resetDefaultState(),y=-1,b=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?d=p[p.length-1]:d=null};function ct(A,V,K,k){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$.intersectsSprite(A)){k&&Q.setFromMatrixPosition(A.matrixWorld).applyMatrix4(oe);const Ee=$e.update(A),Le=A.material;Le.visible&&d.push(A,Ee,Le,K,Q.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==He.render.frame&&(A.skeleton.update(),A.skeleton.frame=He.render.frame),!A.frustumCulled||$.intersectsObject(A))){k&&Q.setFromMatrixPosition(A.matrixWorld).applyMatrix4(oe);const Ee=$e.update(A),Le=A.material;if(Array.isArray(Le)){const Re=Ee.groups;for(let Be=0,Ne=Re.length;Be<Ne;Be++){const Fe=Re[Be],Qe=Le[Fe.materialIndex];Qe&&Qe.visible&&d.push(A,Ee,Qe,K,Q.z,Fe)}}else Le.visible&&d.push(A,Ee,Le,K,Q.z,null)}}const ye=A.children;for(let Ee=0,Le=ye.length;Ee<Le;Ee++)ct(ye[Ee],V,K,k)}function mt(A,V,K,k){const Z=A.opaque,ye=A.transmissive,Ee=A.transparent;h.setupLightsView(K),G===!0&&S.setGlobalState(m.clippingPlanes,K),ye.length>0&&Fn(Z,V,K),k&&he.viewport(T.copy(k)),Z.length>0&&Ke(Z,V,K),ye.length>0&&Ke(ye,V,K),Ee.length>0&&Ke(Ee,V,K),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Fn(A,V,K){const k=ge.isWebGL2;J===null&&(J=new ni(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?ds:ei,minFilter:Qn,samples:k&&s===!0?4:0})),m.getDrawingBufferSize(F),k?J.setSize(F.x,F.y):J.setSize(or(F.x),or(F.y));const Z=m.getRenderTarget();m.setRenderTarget(J),m.clear();const ye=m.toneMapping;m.toneMapping=wn,Ke(A,V,K),m.toneMapping=ye,Me.updateMultisampleRenderTarget(J),Me.updateRenderTargetMipmap(J),m.setRenderTarget(Z)}function Ke(A,V,K){const k=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,ye=A.length;Z<ye;Z++){const Ee=A[Z],Le=Ee.object,Re=Ee.geometry,Be=k===null?Ee.material:k,Ne=Ee.group;Le.layers.test(K.layers)&&cn(Le,V,K,Re,Be,Ne)}}function cn(A,V,K,k,Z,ye){A.onBeforeRender(m,V,K,k,Z,ye),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(m,V,K,k,A,ye),Z.transparent===!0&&Z.side===Mn&&Z.forceSinglePass===!1?(Z.side=Nt,Z.needsUpdate=!0,m.renderBufferDirect(K,V,k,Z,A,ye),Z.side=Sn,Z.needsUpdate=!0,m.renderBufferDirect(K,V,k,Z,A,ye),Z.side=Mn):m.renderBufferDirect(K,V,k,Z,A,ye),A.onAfterRender(m,V,K,k,Z,ye)}function Bt(A,V,K){V.isScene!==!0&&(V=ne);const k=Ae.get(A),Z=h.state.lights,ye=h.state.shadowsArray,Ee=Z.state.version,Le=Ue.getParameters(A,Z.state,ye,V,K),Re=Ue.getProgramCacheKey(Le);let Be=k.programs;k.environment=A.isMeshStandardMaterial?V.environment:null,k.fog=V.fog,k.envMap=(A.isMeshStandardMaterial?pt:lt).get(A.envMap||k.environment),Be===void 0&&(A.addEventListener("dispose",De),Be=new Map,k.programs=Be);let Ne=Be.get(Re);if(Ne!==void 0){if(k.currentProgram===Ne&&k.lightsStateVersion===Ee)return $o(A,Le),Ne}else Le.uniforms=Ue.getUniforms(A),A.onBuild(K,Le,m),A.onBeforeCompile(Le,m),Ne=Ue.acquireProgram(Le,Re),Be.set(Re,Ne),k.uniforms=Le.uniforms;const Fe=k.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=S.uniform),$o(A,Le),k.needsLights=nh(A),k.lightsStateVersion=Ee,k.needsLights&&(Fe.ambientLightColor.value=Z.state.ambient,Fe.lightProbe.value=Z.state.probe,Fe.directionalLights.value=Z.state.directional,Fe.directionalLightShadows.value=Z.state.directionalShadow,Fe.spotLights.value=Z.state.spot,Fe.spotLightShadows.value=Z.state.spotShadow,Fe.rectAreaLights.value=Z.state.rectArea,Fe.ltc_1.value=Z.state.rectAreaLTC1,Fe.ltc_2.value=Z.state.rectAreaLTC2,Fe.pointLights.value=Z.state.point,Fe.pointLightShadows.value=Z.state.pointShadow,Fe.hemisphereLights.value=Z.state.hemi,Fe.directionalShadowMap.value=Z.state.directionalShadowMap,Fe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Fe.spotShadowMap.value=Z.state.spotShadowMap,Fe.spotLightMatrix.value=Z.state.spotLightMatrix,Fe.spotLightMap.value=Z.state.spotLightMap,Fe.pointShadowMap.value=Z.state.pointShadowMap,Fe.pointShadowMatrix.value=Z.state.pointShadowMatrix);const Qe=Ne.getUniforms(),Lt=ir.seqWithValue(Qe.seq,Fe);return k.currentProgram=Ne,k.uniformsList=Lt,Ne}function $o(A,V){const K=Ae.get(A);K.outputEncoding=V.outputEncoding,K.instancing=V.instancing,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function eh(A,V,K,k,Z){V.isScene!==!0&&(V=ne),Me.resetTextureUnits();const ye=V.fog,Ee=k.isMeshStandardMaterial?V.environment:null,Le=v===null?m.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:ti,Re=(k.isMeshStandardMaterial?pt:lt).get(k.envMap||Ee),Be=k.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ne=!!k.normalMap&&!!K.attributes.tangent,Fe=!!K.morphAttributes.position,Qe=!!K.morphAttributes.normal,Lt=!!K.morphAttributes.color,hn=k.toneMapped?m.toneMapping:wn,zn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,et=zn!==void 0?zn.length:0,ze=Ae.get(k),xr=h.state.lights;if(G===!0&&(X===!0||A!==b)){const Rt=A===b&&k.id===y;S.setState(k,A,Rt)}let ht=!1;k.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==xr.state.version||ze.outputEncoding!==Le||Z.isInstancedMesh&&ze.instancing===!1||!Z.isInstancedMesh&&ze.instancing===!0||Z.isSkinnedMesh&&ze.skinning===!1||!Z.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==Re||k.fog===!0&&ze.fog!==ye||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==S.numPlanes||ze.numIntersection!==S.numIntersection)||ze.vertexAlphas!==Be||ze.vertexTangents!==Ne||ze.morphTargets!==Fe||ze.morphNormals!==Qe||ze.morphColors!==Lt||ze.toneMapping!==hn||ge.isWebGL2===!0&&ze.morphTargetsCount!==et)&&(ht=!0):(ht=!0,ze.__version=k.version);let On=ze.currentProgram;ht===!0&&(On=Bt(k,V,Z));let Jo=!1,qi=!1,vr=!1;const yt=On.getUniforms(),Bn=ze.uniforms;if(he.useProgram(On.program)&&(Jo=!0,qi=!0,vr=!0),k.id!==y&&(y=k.id,qi=!0),Jo||b!==A){if(yt.setValue(q,"projectionMatrix",A.projectionMatrix),ge.logarithmicDepthBuffer&&yt.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),b!==A&&(b=A,qi=!0,vr=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Rt=yt.map.cameraPosition;Rt!==void 0&&Rt.setValue(q,Q.setFromMatrixPosition(A.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&yt.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||Z.isSkinnedMesh)&&yt.setValue(q,"viewMatrix",A.matrixWorldInverse)}if(Z.isSkinnedMesh){yt.setOptional(q,Z,"bindMatrix"),yt.setOptional(q,Z,"bindMatrixInverse");const Rt=Z.skeleton;Rt&&(ge.floatVertexTextures?(Rt.boneTexture===null&&Rt.computeBoneTexture(),yt.setValue(q,"boneTexture",Rt.boneTexture,Me),yt.setValue(q,"boneTextureSize",Rt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const yr=K.morphAttributes;if((yr.position!==void 0||yr.normal!==void 0||yr.color!==void 0&&ge.isWebGL2===!0)&&ie.update(Z,K,k,On),(qi||ze.receiveShadow!==Z.receiveShadow)&&(ze.receiveShadow=Z.receiveShadow,yt.setValue(q,"receiveShadow",Z.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Bn.envMap.value=Re,Bn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),qi&&(yt.setValue(q,"toneMappingExposure",m.toneMappingExposure),ze.needsLights&&th(Bn,vr),ye&&k.fog===!0&&Ot.refreshFogUniforms(Bn,ye),Ot.refreshMaterialUniforms(Bn,k,H,D,J),ir.upload(q,ze.uniformsList,Bn,Me)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ir.upload(q,ze.uniformsList,Bn,Me),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&yt.setValue(q,"center",Z.center),yt.setValue(q,"modelViewMatrix",Z.modelViewMatrix),yt.setValue(q,"normalMatrix",Z.normalMatrix),yt.setValue(q,"modelMatrix",Z.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Rt=k.uniformsGroups;for(let Mr=0,ih=Rt.length;Mr<ih;Mr++)if(ge.isWebGL2){const Qo=Rt[Mr];ce.update(Qo,On),ce.bind(Qo,On)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return On}function th(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function nh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(A,V,K){Ae.get(A.texture).__webglTexture=V,Ae.get(A.depthTexture).__webglTexture=K;const k=Ae.get(A);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=K===void 0,k.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,V){const K=Ae.get(A);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,K=0){v=A,_=V,x=K;let k=!0,Z=null,ye=!1,Ee=!1;if(A){const Re=Ae.get(A);Re.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),k=!1):Re.__webglFramebuffer===void 0?Me.setupRenderTarget(A):Re.__hasExternalTextures&&Me.rebindTextures(A,Ae.get(A.texture).__webglTexture,Ae.get(A.depthTexture).__webglTexture);const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ee=!0);const Ne=Ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Z=Ne[V],ye=!0):ge.isWebGL2&&A.samples>0&&Me.useMultisampledRTT(A)===!1?Z=Ae.get(A).__webglMultisampledFramebuffer:Z=Ne,T.copy(A.viewport),R.copy(A.scissor),w=A.scissorTest}else T.copy(P).multiplyScalar(H).floor(),R.copy(N).multiplyScalar(H).floor(),w=z;if(he.bindFramebuffer(36160,Z)&&ge.drawBuffers&&k&&he.drawBuffers(A,Z),he.viewport(T),he.scissor(R),he.setScissorTest(w),ye){const Re=Ae.get(A.texture);q.framebufferTexture2D(36160,36064,34069+V,Re.__webglTexture,K)}else if(Ee){const Re=Ae.get(A.texture),Be=V||0;q.framebufferTextureLayer(36160,36064,Re.__webglTexture,K||0,Be)}y=-1},this.readRenderTargetPixels=function(A,V,K,k,Z,ye,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le){he.bindFramebuffer(36160,Le);try{const Re=A.texture,Be=Re.format,Ne=Re.type;if(Be!==Ht&&I.convert(Be)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ne===ds&&(xe.has("EXT_color_buffer_half_float")||ge.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Ne!==ei&&I.convert(Ne)!==q.getParameter(35738)&&!(Ne===Dn&&(ge.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-k&&K>=0&&K<=A.height-Z&&q.readPixels(V,K,k,Z,I.convert(Be),I.convert(Ne),ye)}finally{const Re=v!==null?Ae.get(v).__webglFramebuffer:null;he.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(A,V,K=0){const k=Math.pow(2,-K),Z=Math.floor(V.image.width*k),ye=Math.floor(V.image.height*k);Me.setTexture2D(V,0),q.copyTexSubImage2D(3553,K,0,0,A.x,A.y,Z,ye),he.unbindTexture()},this.copyTextureToTexture=function(A,V,K,k=0){const Z=V.image.width,ye=V.image.height,Ee=I.convert(K.format),Le=I.convert(K.type);Me.setTexture2D(K,0),q.pixelStorei(37440,K.flipY),q.pixelStorei(37441,K.premultiplyAlpha),q.pixelStorei(3317,K.unpackAlignment),V.isDataTexture?q.texSubImage2D(3553,k,A.x,A.y,Z,ye,Ee,Le,V.image.data):V.isCompressedTexture?q.compressedTexSubImage2D(3553,k,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,Ee,V.mipmaps[0].data):q.texSubImage2D(3553,k,A.x,A.y,Ee,Le,V.image),k===0&&K.generateMipmaps&&q.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(A,V,K,k,Z=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=A.max.x-A.min.x+1,Ee=A.max.y-A.min.y+1,Le=A.max.z-A.min.z+1,Re=I.convert(k.format),Be=I.convert(k.type);let Ne;if(k.isData3DTexture)Me.setTexture3D(k,0),Ne=32879;else if(k.isDataArrayTexture)Me.setTexture2DArray(k,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,k.flipY),q.pixelStorei(37441,k.premultiplyAlpha),q.pixelStorei(3317,k.unpackAlignment);const Fe=q.getParameter(3314),Qe=q.getParameter(32878),Lt=q.getParameter(3316),hn=q.getParameter(3315),zn=q.getParameter(32877),et=K.isCompressedTexture?K.mipmaps[0]:K.image;q.pixelStorei(3314,et.width),q.pixelStorei(32878,et.height),q.pixelStorei(3316,A.min.x),q.pixelStorei(3315,A.min.y),q.pixelStorei(32877,A.min.z),K.isDataTexture||K.isData3DTexture?q.texSubImage3D(Ne,Z,V.x,V.y,V.z,ye,Ee,Le,Re,Be,et.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Ne,Z,V.x,V.y,V.z,ye,Ee,Le,Re,et.data)):q.texSubImage3D(Ne,Z,V.x,V.y,V.z,ye,Ee,Le,Re,Be,et),q.pixelStorei(3314,Fe),q.pixelStorei(32878,Qe),q.pixelStorei(3316,Lt),q.pixelStorei(3315,hn),q.pixelStorei(32877,zn),Z===0&&k.generateMipmaps&&q.generateMipmap(Ne),he.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Me.setTextureCube(A,0):A.isData3DTexture?Me.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Me.setTexture2DArray(A,0):Me.setTexture2D(A,0),he.unbindTexture()},this.resetState=function(){_=0,x=0,v=null,he.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class fg extends Ic{}fg.prototype.isWebGL1Renderer=!0;class Bo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new Bo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class pg extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class mg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Jt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bt=new O;class Uo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),s=je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Uo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const dl=new O,fl=new Xe,pl=new Xe,gg=new O,ml=new Pe;class _g extends xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Xe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;fl.fromBufferAttribute(i.attributes.skinIndex,e),pl.fromBufferAttribute(i.attributes.skinWeight,e),dl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=pl.getComponent(s);if(r!==0){const o=fl.getComponent(s);ml.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(gg.copy(dl).applyMatrix4(ml),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Dc extends Ze{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xg extends ft{constructor(e=null,t=1,n=1,i,s,r,o,a,l=dt,u=dt,d,h){super(null,r,o,a,l,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gl=new Pe,vg=new Pe;class ko{constructor(e=[],t=[]){this.uuid=Jt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:vg;gl.multiplyMatrices(o,t[s]),gl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ko(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=gc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new xg(t,e,e,Ht,Dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Dc),this.bones.push(r),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class _l extends Tt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xl=new Pe,vl=new Pe,Gs=[],yg=new Pe,Qi=new xt;class Mg extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _l(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,yg)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Qi.geometry=this.geometry,Qi.material=this.material,Qi.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,xl),vl.multiplyMatrices(n,xl),Qi.matrixWorld=vl,Qi.raycast(e,Gs);for(let r=0,o=Gs.length;r<o;r++){const a=Gs[r];a.instanceId=s,a.object=this,t.push(a)}Gs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _l(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Go extends Wt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yl=new O,Ml=new O,bl=new Pe,Qr=new ur,Vs=new ki;class Vo extends Ze{constructor(e=new qt,t=new Go){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)yl.fromBufferAttribute(t,i-1),Ml.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=yl.distanceTo(Ml);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(i),Vs.radius+=s,e.ray.intersectsSphere(Vs)===!1)return;bl.copy(i).invert(),Qr.copy(e.ray).applyMatrix4(bl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=new O,u=new O,d=new O,h=new O,p=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const _=Math.max(0,r.start),x=Math.min(g.count,r.start+r.count);for(let v=_,y=x-1;v<y;v+=p){const b=g.getX(v),T=g.getX(v+1);if(l.fromBufferAttribute(f,b),u.fromBufferAttribute(f,T),Qr.distanceSqToSegment(l,u,h,d)>a)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||t.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,r.start),x=Math.min(f.count,r.start+r.count);for(let v=_,y=x-1;v<y;v+=p){if(l.fromBufferAttribute(f,v),u.fromBufferAttribute(f,v+1),Qr.distanceSqToSegment(l,u,h,d)>a)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const wl=new O,Sl=new O;class Nc extends Vo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)wl.fromBufferAttribute(t,i),Sl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wl.distanceTo(Sl);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bg extends Vo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Fc extends Wt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tl=new Pe,To=new ur,Hs=new ki,Ws=new O;class wg extends Ze{constructor(e=new qt,t=new Fc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(i),Hs.radius+=s,e.ray.intersectsSphere(Hs)===!1)return;Tl.copy(i).invert(),To.copy(e.ray).applyMatrix4(Tl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let g=h,m=p;g<m;g++){const f=l.getX(g);Ws.fromBufferAttribute(d,f),El(Ws,f,a,i,e,t,this)}}else{const h=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=h,m=p;g<m;g++)Ws.fromBufferAttribute(d,g),El(Ws,g,a,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function El(c,e,t,n,i,s,r){const o=To.distanceSqToPoint(c);if(o<t){const a=new O;To.closestPointToPoint(c,a),a.applyMatrix4(n);const l=i.ray.origin.distanceTo(a);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:a,index:e,face:null,object:r})}}const qs=new O,js=new O,eo=new O,Xs=new on;class Sg extends qt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Ri*t),r=e.getIndex(),o=e.getAttribute("position"),a=r?r.count:o.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},p=[];for(let g=0;g<a;g+=3){r?(l[0]=r.getX(g),l[1]=r.getX(g+1),l[2]=r.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:m,b:f,c:_}=Xs;if(m.fromBufferAttribute(o,l[0]),f.fromBufferAttribute(o,l[1]),_.fromBufferAttribute(o,l[2]),Xs.getNormal(eo),d[0]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,d[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let x=0;x<3;x++){const v=(x+1)%3,y=d[x],b=d[v],T=Xs[u[x]],R=Xs[u[v]],w=`${y}_${b}`,E=`${b}_${y}`;E in h&&h[E]?(eo.dot(h[E].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(R.x,R.y,R.z)),h[E]=null):w in h||(h[w]={index0:l[x],index1:l[v],normal:eo.clone()})}}for(const g in h)if(h[g]){const{index0:m,index1:f}=h[g];qs.fromBufferAttribute(o,m),js.fromBufferAttribute(o,f),p.push(qs.x,qs.y,qs.z),p.push(js.x,js.y,js.z)}this.setAttribute("position",new Ft(p,3))}}}class Ho extends qt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const a=Math.min(r+o,Math.PI);let l=0;const u=[],d=new O,h=new O,p=[],g=[],m=[],f=[];for(let _=0;_<=n;_++){const x=[],v=_/n;let y=0;_==0&&r==0?y=.5/t:_==n&&a==Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){const T=b/t;d.x=-e*Math.cos(i+T*s)*Math.sin(r+v*o),d.y=e*Math.cos(r+v*o),d.z=e*Math.sin(i+T*s)*Math.sin(r+v*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),m.push(h.x,h.y,h.z),f.push(T+y,1-v),x.push(l++)}u.push(x)}for(let _=0;_<n;_++)for(let x=0;x<t;x++){const v=u[_][x+1],y=u[_][x],b=u[_+1][x],T=u[_+1][x+1];(_!==0||r>0)&&p.push(v,y,T),(_!==n-1||a<Math.PI)&&p.push(y,b,T)}this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(m,3)),this.setAttribute("uv",new Ft(f,2))}static fromJSON(e){return new Ho(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wo extends Wt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oi extends Wo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tg extends Wt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Te(16777215),this.specular=new Te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class to extends Wt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Ln(c,e,t){return zc(c)?new c.constructor(c.subarray(e,t!==void 0?t:c.length)):c.slice(e,t)}function Ys(c,e,t){return!c||!t&&c.constructor===e?c:typeof e.BYTES_PER_ELEMENT=="number"?new e(c):Array.prototype.slice.call(c)}function zc(c){return ArrayBuffer.isView(c)&&!(c instanceof DataView)}function Eg(c){function e(i,s){return c[i]-c[s]}const t=c.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Al(c,e,t){const n=c.length,i=new c.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let a=0;a!==e;++a)i[r++]=c[o+a]}return i}function Oc(c,e,t,n){let i=1,s=c[0];for(;s!==void 0&&s[n]===void 0;)s=c[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=c[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=c[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=c[i++];while(s!==void 0)}class ys{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let a=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ag extends ys{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:La,endingEnd:La}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],a=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Ra:s=e,o=2*t-n;break;case Pa:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Ra:r=e,a=2*n-t;break;case Pa:r=1,a=n+i[1]-i[0];break;default:r=e-1,a=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),m=g*g,f=m*g,_=-h*f+2*h*m-h*g,x=(1+h)*f+(-1.5-2*h)*m+(-.5+h)*g+1,v=(-1-p)*f+(1.5+p)*m+.5*g,y=p*f-p*m;for(let b=0;b!==o;++b)s[b]=_*r[u+b]+x*r[l+b]+v*r[a+b]+y*r[d+b];return s}}class Cg extends ys{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==o;++h)s[h]=r[l+h]*d+r[a+h]*u;return s}}class Lg extends ys{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ln{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ys(t,this.TimeBufferType),this.values=Ys(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ys(e.times,Array),values:Ys(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ag(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fs:t=this.InterpolantFactoryMethodDiscrete;break;case zi:t=this.InterpolantFactoryMethodLinear;break;case Ar:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fs;case this.InterpolantFactoryMethodLinear:return zi;case this.InterpolantFactoryMethodSmooth:return Ar}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=Ln(n,s,r),this.values=Ln(this.values,s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(r!==null&&r>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,r),e=!1;break}r=a}if(i!==void 0&&zc(i))for(let o=0,a=i.length;o!==a;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=Ln(this.times),t=Ln(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ar,s=e.length-1;let r=1;for(let o=1;o<s;++o){let a=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)a=!0;else{const d=o*n,h=d-n,p=d+n;for(let g=0;g!==n;++g){const m=t[d+g];if(m!==t[h+g]||m!==t[p+g]){a=!0;break}}}if(a){if(o!==r){e[r]=e[o];const d=o*n,h=r*n;for(let p=0;p!==n;++p)t[h+p]=t[d+p]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,a=r*n,l=0;l!==n;++l)t[a+l]=t[o+l];++r}return r!==e.length?(this.times=Ln(e,0,r),this.values=Ln(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=Ln(this.times,0),t=Ln(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=zi;class Hi extends ln{}Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=fs;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;class Bc extends ln{}Bc.prototype.ValueTypeName="color";class _s extends ln{}_s.prototype.ValueTypeName="number";class Rg extends ys{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)an.slerpFlat(s,0,r,l-o,r,l,a);return s}}class si extends ln{InterpolantFactoryMethodLinear(e){return new Rg(this.times,this.values,this.getValueSize(),e)}}si.prototype.ValueTypeName="quaternion";si.prototype.DefaultInterpolation=zi;si.prototype.InterpolantFactoryMethodSmooth=void 0;class Wi extends ln{}Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=fs;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends ln{}xs.prototype.ValueTypeName="vector";class Pg{constructor(e,t=-1,n,i=Yh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Jt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Dg(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(ln.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let a=[],l=[];a.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const u=Eg(a);a=Al(a,1,u),l=Al(l,1,u),!i&&a[0]===0&&(a.push(s),l.push(l[0])),r.push(new _s(".morphTargetInfluences["+t[o].name+"]",a,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){const l=e[o],u=l.name.match(s);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(l)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,p,g,m){if(p.length!==0){const f=[],_=[];Oc(p,f,_,g),f.length!==0&&m.push(new d(h,f,_))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let a=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const h=l[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let m=0;m<h[g].morphTargets.length;m++)p[h[g].morphTargets[m]]=-1;for(const m in p){const f=[],_=[];for(let x=0;x!==h[g].morphTargets.length;++x){const v=h[g];f.push(v.time),_.push(v.morphTarget===m?1:0)}i.push(new _s(".morphTargetInfluence["+m+"]",f,_))}a=p.length*r}else{const p=".bones["+t[d].name+"]";n(xs,p+".position",h,"pos",i),n(si,p+".quaternion",h,"rot",i),n(xs,p+".scale",h,"scl",i)}}return i.length===0?null:new this(s,a,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ig(c){switch(c.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _s;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return Bc;case"quaternion":return si;case"bool":case"boolean":return Hi;case"string":return Wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+c)}function Dg(c){if(c.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ig(c.type);if(c.times===void 0){const t=[],n=[];Oc(c.keys,t,n,"value"),c.times=t,c.values=n}return e.parse!==void 0?e.parse(c):new e(c.name,c.times,c.values,c.interpolation)}const Bi={enabled:!1,files:{},add:function(c,e){this.enabled!==!1&&(this.files[c]=e)},get:function(c){if(this.enabled!==!1)return this.files[c]},remove:function(c){delete this.files[c]},clear:function(){this.files={}}};class Ng{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,a;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,o),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return a?a(u):u},this.setURLModifier=function(u){return a=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Fg=new Ng;class Ms{constructor(e){this.manager=e!==void 0?e:Fg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const gn={};class zg extends Error{constructor(e,t){super(e),this.response=t}}class Uc extends Ms{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Bi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(gn[e]!==void 0){gn[e].push({onLoad:t,onProgress:n,onError:i});return}gn[e]=[],gn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,a=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=gn[e],d=l.body.getReader(),h=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=h?parseInt(h):0,g=p!==0;let m=0;const f=new ReadableStream({start(_){x();function x(){d.read().then(({done:v,value:y})=>{if(v)_.close();else{m+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let T=0,R=u.length;T<R;T++){const w=u[T];w.onProgress&&w.onProgress(b)}_.enqueue(y),x()}})}}});return new Response(f)}else throw new zg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(a){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Bi.add(e,l);const u=gn[e];delete gn[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=gn[e];if(u===void 0)throw this.manager.itemError(e),l;delete gn[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Og extends Ms{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Bi.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=gs("img");function a(){u(),Bi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){u(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",a,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class kc extends Ms{constructor(e){super(e)}load(e,t,n,i){const s=new ft,r=new Og(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class mr extends Ze{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const no=new Pe,Cl=new O,Ll=new O;class qo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fo,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Cl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cl),Ll.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ll),t.updateMatrixWorld(),no.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(no),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(no)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bg extends qo{constructor(){super(new St(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ms*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ug extends mr{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Bg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Rl=new Pe,es=new O,io=new O;class kg extends qo{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),es.setFromMatrixPosition(e.matrixWorld),n.position.copy(es),io.copy(n.position),io.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(io),n.updateMatrixWorld(),i.makeTranslation(-es.x,-es.y,-es.z),Rl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl)}}class Gg extends mr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new kg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Vg extends qo{constructor(){super(new zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gc extends mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new Vg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hg extends mr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Eo{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Wg extends Ms{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Bi.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(a){Bi.add(e,a),t&&t(a),s.manager.itemEnd(e)}).catch(function(a){i&&i(a),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const jo="\\[\\]\\.:\\/",qg=new RegExp("["+jo+"]","g"),Xo="[^"+jo+"]",jg="[^"+jo.replace("\\.","")+"]",Xg=/((?:WC+[\/:])*)/.source.replace("WC",Xo),Yg=/(WCOD+)?/.source.replace("WCOD",jg),Kg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xo),Zg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xo),$g=new RegExp("^"+Xg+Yg+Kg+Zg+"$"),Jg=["material","materials","bones","map"];class Qg{constructor(e,t,n){const i=n||We.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class We{constructor(e,t,n){this.path=t,this.parsedPath=n||We.parseTrackName(t),this.node=We.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new We.Composite(e,t,n):new We(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qg,"")}static parseTrackName(e){const t=$g.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Jg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const a=n(o.children);if(a)return a}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=We.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[i];if(r===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}a=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(a=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}We.Composite=Qg;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class e0{constructor(e,t,n=0,i=1/0){this.ray=new ur(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new No,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ao(e,this,n,t),n.sort(Pl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ao(e[i],this,n,t);return n.sort(Pl),n}}function Pl(c,e){return c.distance-e.distance}function Ao(c,e,t,n){if(c.layers.test(e.layers)&&c.raycast(e,t),n===!0){const i=c.children;for(let s=0,r=i.length;s<r;s++)Ao(i[s],e,t,!0)}}class Il{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class t0 extends Gi{constructor(e,t,n,i,s,r){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(e,t,n,i,s,r)}}class n0 extends fr{constructor(e,t,n,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(e,t,n,i)}}class Dl extends Ho{constructor(e,t,n,i,s,r,o){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(e,t,n,i,s,r,o)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Io);class $t{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new M);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new M);const n=this.elements,i=e.x,s=e.y,r=e.z;return t.x=n[0]*i+n[1]*s+n[2]*r,t.y=n[3]*i+n[4]*s+n[5]*r,t.z=n[6]*i+n[7]*s+n[8]*r,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new $t);const n=this.elements,i=e.elements,s=t.elements,r=n[0],o=n[1],a=n[2],l=n[3],u=n[4],d=n[5],h=n[6],p=n[7],g=n[8],m=i[0],f=i[1],_=i[2],x=i[3],v=i[4],y=i[5],b=i[6],T=i[7],R=i[8];return s[0]=r*m+o*x+a*b,s[1]=r*f+o*v+a*T,s[2]=r*_+o*y+a*R,s[3]=l*m+u*x+d*b,s[4]=l*f+u*v+d*T,s[5]=l*_+u*y+d*R,s[6]=h*m+p*x+g*b,s[7]=h*f+p*v+g*T,s[8]=h*_+p*y+g*R,t}scale(e,t){t===void 0&&(t=new $t);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new M);const n=3,i=4,s=[];let r,o;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let a=3;const l=a;let u;const d=4;let h;do{if(r=l-a,s[r+i*r]===0){for(o=r+1;o<l;o++)if(s[r+i*o]!==0){u=d;do h=d-u,s[h+i*r]+=s[h+i*o];while(--u);break}}if(s[r+i*r]!==0)for(o=r+1;o<l;o++){const p=s[r+i*o]/s[r+i*r];u=d;do h=d-u,s[h+i*o]=h<=r?0:s[h+i*o]-s[h+i*r]*p;while(--u)}}while(--a);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new $t);const t=3,n=6,i=i0;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let o=3;const a=o;let l;const u=n;let d;do{if(s=a-o,i[s+n*s]===0){for(r=s+1;r<a;r++)if(i[s+n*r]!==0){l=u;do d=u-l,i[d+n*s]+=i[d+n*r];while(--l);break}}if(i[s+n*s]!==0)for(r=s+1;r<a;r++){const h=i[s+n*r]/i[s+n*s];l=u;do d=u-l,i[d+n*r]=d<=s?0:i[d+n*r]-i[d+n*s]*h;while(--l)}}while(--o);s=2;do{r=s-1;do{const h=i[s+n*r]/i[s+n*s];l=n;do d=n-l,i[d+n*r]=i[d+n*r]-i[d+n*s]*h;while(--l)}while(r--)}while(--s);s=2;do{const h=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*h;while(--l)}while(s--);s=2;do{r=2;do{if(d=i[t+r+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,r,d)}while(r--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,r=t+t,o=n+n,a=i+i,l=t*r,u=t*o,d=t*a,h=n*o,p=n*a,g=i*a,m=s*r,f=s*o,_=s*a,x=this.elements;return x[3*0+0]=1-(h+g),x[3*0+1]=u-_,x[3*0+2]=d+f,x[3*1+0]=u+_,x[3*1+1]=1-(l+g),x[3*1+2]=p-m,x[3*2+0]=d-f,x[3*2+1]=p+m,x[3*2+2]=1-(l+h),this}transpose(e){e===void 0&&(e=new $t);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const i0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new M);const n=e.x,i=e.y,s=e.z,r=this.x,o=this.y,a=this.z;return t.x=o*s-a*i,t.y=a*n-r*s,t.z=r*i-o*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new M(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new M(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new $t([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new M);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z;return Math.sqrt((s-t)*(s-t)+(r-n)*(r-n)+(o-i)*(o-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z;return(s-t)*(s-t)+(r-n)*(r-n)+(o-i)*(o-i)}scale(e,t){t===void 0&&(t=new M);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new M),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new M),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new M),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=s0,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=r0;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,e)):(r.set(0,1,0),i.cross(r,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,r=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=r+(e.z-r)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Nl),Nl.almostEquals(e,t)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const s0=new M,r0=new M,Nl=new M;class zt{constructor(e){e===void 0&&(e={}),this.lowerBound=new M,this.upperBound=new M,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,r=this.upperBound,o=n;s.copy(e[0]),o&&o.vmult(s,s),r.copy(s);for(let a=1;a<e.length;a++){let l=e[a];o&&(o.vmult(l,Fl),l=Fl),l.x>r.x&&(r.x=l.x),l.x<s.x&&(s.x=l.x),l.y>r.y&&(r.y=l.y),l.y<s.y&&(s.y=l.y),l.z>r.z&&(r.z=l.z),l.z<s.z&&(s.z=l.z)}return t&&(t.vadd(s,s),t.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new zt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,r=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,o=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,a=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return r&&o&&a}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,r,o,a){const l=this.lowerBound,u=this.upperBound;e.copy(l),t.set(u.x,l.y,l.z),n.set(u.x,u.y,l.z),i.set(l.x,u.y,u.z),s.set(u.x,l.y,u.z),r.set(l.x,u.y,l.z),o.set(l.x,l.y,u.z),a.copy(u)}toLocalFrame(e,t){const n=zl,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],l=n[5],u=n[6],d=n[7];this.getCorners(i,s,r,o,a,l,u,d);for(let h=0;h!==8;h++){const p=n[h];e.pointToLocal(p,p)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=zl,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],l=n[5],u=n[6],d=n[7];this.getCorners(i,s,r,o,a,l,u,d);for(let h=0;h!==8;h++){const p=n[h];e.pointToWorld(p,p)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,r=1/t.z,o=(this.lowerBound.x-n.x)*i,a=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,u=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*r,h=(this.upperBound.z-n.z)*r,p=Math.max(Math.max(Math.min(o,a),Math.min(l,u)),Math.min(d,h)),g=Math.min(Math.min(Math.max(o,a),Math.max(l,u)),Math.max(d,h));return!(g<0||p>g)}}const Fl=new M,zl=[new M,new M,new M,new M,new M,new M,new M,new M];class Ol{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Vc{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class it{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new M),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=o0,i=a0;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new it);const n=this.x,i=this.y,s=this.z,r=this.w,o=e.x,a=e.y,l=e.z,u=e.w;return t.x=n*u+r*o+i*l-s*a,t.y=i*u+r*a+s*o-n*l,t.z=s*u+r*l+n*a-i*o,t.w=r*u-n*o-i*a-s*l,t}inverse(e){e===void 0&&(e=new it);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const r=1/(t*t+n*n+i*i+s*s);return e.x*=r,e.y*=r,e.z*=r,e.w*=r,e}conjugate(e){return e===void 0&&(e=new it),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new M);const n=e.x,i=e.y,s=e.z,r=this.x,o=this.y,a=this.z,l=this.w,u=l*n+o*s-a*i,d=l*i+a*n-r*s,h=l*s+r*i-o*n,p=-r*n-o*i-a*s;return t.x=u*l+p*-r+d*-a-h*-o,t.y=d*l+p*-o+h*-r-u*-a,t.z=h*l+p*-a+u*-o-d*-r,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const r=this.x,o=this.y,a=this.z,l=this.w;switch(t){case"YZX":const u=r*o+a*l;if(u>.499&&(n=2*Math.atan2(r,l),i=Math.PI/2,s=0),u<-.499&&(n=-2*Math.atan2(r,l),i=-Math.PI/2,s=0),n===void 0){const d=r*r,h=o*o,p=a*a;n=Math.atan2(2*o*l-2*r*a,1-2*h-2*p),i=Math.asin(2*u),s=Math.atan2(2*r*l-2*o*a,1-2*d-2*p)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),r=Math.cos(t/2),o=Math.cos(n/2),a=Math.sin(e/2),l=Math.sin(t/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=a*r*o+s*l*u,this.y=s*l*o-a*r*u,this.z=s*r*u+a*l*o,this.w=s*r*o-a*l*u):i==="YXZ"?(this.x=a*r*o+s*l*u,this.y=s*l*o-a*r*u,this.z=s*r*u-a*l*o,this.w=s*r*o+a*l*u):i==="ZXY"?(this.x=a*r*o-s*l*u,this.y=s*l*o+a*r*u,this.z=s*r*u+a*l*o,this.w=s*r*o-a*l*u):i==="ZYX"?(this.x=a*r*o-s*l*u,this.y=s*l*o+a*r*u,this.z=s*r*u-a*l*o,this.w=s*r*o+a*l*u):i==="YZX"?(this.x=a*r*o+s*l*u,this.y=s*l*o+a*r*u,this.z=s*r*u-a*l*o,this.w=s*r*o-a*l*u):i==="XZY"&&(this.x=a*r*o-s*l*u,this.y=s*l*o-a*r*u,this.z=s*r*u+a*l*o,this.w=s*r*o+a*l*u),this}clone(){return new it(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new it);const i=this.x,s=this.y,r=this.z,o=this.w;let a=e.x,l=e.y,u=e.z,d=e.w,h,p,g,m,f;return p=i*a+s*l+r*u+o*d,p<0&&(p=-p,a=-a,l=-l,u=-u,d=-d),1-p>1e-6?(h=Math.acos(p),g=Math.sin(h),m=Math.sin((1-t)*h)/g,f=Math.sin(t*h)/g):(m=1-t,f=t),n.x=m*i+f*a,n.y=m*s+f*l,n.z=m*r+f*u,n.w=m*o+f*d,n}integrate(e,t,n,i){i===void 0&&(i=new it);const s=e.x*n.x,r=e.y*n.y,o=e.z*n.z,a=this.x,l=this.y,u=this.z,d=this.w,h=t*.5;return i.x+=h*(s*d+r*u-o*l),i.y+=h*(r*d+o*a-s*u),i.z+=h*(o*d+s*l-r*a),i.w+=h*(-s*a-r*l-o*u),i}}const o0=new M,a0=new M,l0={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class pe{constructor(e){e===void 0&&(e={}),this.id=pe.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}pe.idCounter=0;pe.types=l0;class Ge{constructor(e){e===void 0&&(e={}),this.position=new M,this.quaternion=new it,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Ge.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Ge.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),n.vsub(e,i),t.conjugate(Bl),Bl.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new M),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new M),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const Bl=new it;class us extends pe{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=e;super({type:pe.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let s=0;s!==e.length;s++){const r=e[s],o=r.length;for(let a=0;a!==o;a++){const l=(a+1)%o;t[r[a]].vsub(t[r[l]],i),i.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new M;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];us.computeNormal(i,s,r,t)}static computeNormal(e,t,n,i){const s=new M,r=new M;t.vsub(e,r),n.vsub(t,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,r,o,a,l){const u=new M;let d=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),s.vmult(u,u);const m=u.dot(r);m>h&&(h=m,d=g)}const p=[];for(let g=0;g<n.faces[d].length;g++){const m=n.vertices[n.faces[d][g]],f=new M;f.copy(m),s.vmult(f,f),i.vadd(f,f),p.push(f)}d>=0&&this.clipFaceAgainstHull(r,e,t,p,o,a,l)}findSeparatingAxis(e,t,n,i,s,r,o,a){const l=new M,u=new M,d=new M,h=new M,p=new M,g=new M;let m=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let _=0;_!==f.uniqueAxes.length;_++){n.vmult(f.uniqueAxes[_],l);const x=f.testSepAxis(l,e,t,n,i,s);if(x===!1)return!1;x<m&&(m=x,r.copy(l))}else{const _=o?o.length:f.faces.length;for(let x=0;x<_;x++){const v=o?o[x]:x;l.copy(f.faceNormals[v]),n.vmult(l,l);const y=f.testSepAxis(l,e,t,n,i,s);if(y===!1)return!1;y<m&&(m=y,r.copy(l))}}if(e.uniqueAxes)for(let _=0;_!==e.uniqueAxes.length;_++){s.vmult(e.uniqueAxes[_],u);const x=f.testSepAxis(u,e,t,n,i,s);if(x===!1)return!1;x<m&&(m=x,r.copy(u))}else{const _=a?a.length:e.faces.length;for(let x=0;x<_;x++){const v=a?a[x]:x;u.copy(e.faceNormals[v]),s.vmult(u,u);const y=f.testSepAxis(u,e,t,n,i,s);if(y===!1)return!1;y<m&&(m=y,r.copy(u))}}for(let _=0;_!==f.uniqueEdges.length;_++){n.vmult(f.uniqueEdges[_],h);for(let x=0;x!==e.uniqueEdges.length;x++)if(s.vmult(e.uniqueEdges[x],p),h.cross(p,g),!g.almostZero()){g.normalize();const v=f.testSepAxis(g,e,t,n,i,s);if(v===!1)return!1;v<m&&(m=v,r.copy(g))}}return i.vsub(t,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(e,t,n,i,s,r){const o=this;us.project(o,e,n,i,so),us.project(t,e,s,r,ro);const a=so[0],l=so[1],u=ro[0],d=ro[1];if(a<d||u<l)return!1;const h=a-d,p=u-l;return h<p?h:p}calculateLocalInertia(e,t){const n=new M,i=new M;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,o=n.z-i.z;t.x=1/12*e*(2*r*2*r+2*o*2*o),t.y=1/12*e*(2*s*2*s+2*o*2*o),t.z=1/12*e*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,r,o){const a=new M,l=new M,u=new M,d=new M,h=new M,p=new M,g=new M,m=new M,f=this,_=[],x=i,v=_;let y=-1,b=Number.MAX_VALUE;for(let D=0;D<f.faces.length;D++){a.copy(f.faceNormals[D]),n.vmult(a,a);const H=a.dot(e);H<b&&(b=H,y=D)}if(y<0)return;const T=f.faces[y];T.connectedFaces=[];for(let D=0;D<f.faces.length;D++)for(let H=0;H<f.faces[D].length;H++)T.indexOf(f.faces[D][H])!==-1&&D!==y&&T.connectedFaces.indexOf(D)===-1&&T.connectedFaces.push(D);const R=T.length;for(let D=0;D<R;D++){const H=f.vertices[T[D]],W=f.vertices[T[(D+1)%R]];H.vsub(W,l),u.copy(l),n.vmult(u,u),t.vadd(u,u),d.copy(this.faceNormals[y]),n.vmult(d,d),t.vadd(d,d),u.cross(d,h),h.negate(h),p.copy(H),n.vmult(p,p),t.vadd(p,p);const L=T.connectedFaces[D];g.copy(this.faceNormals[L]);const P=this.getPlaneConstantOfFace(L);m.copy(g),n.vmult(m,m);const N=P-m.dot(t);for(this.clipFaceAgainstPlane(x,v,m,N);x.length;)x.shift();for(;v.length;)x.push(v.shift())}g.copy(this.faceNormals[y]);const w=this.getPlaneConstantOfFace(y);m.copy(g),n.vmult(m,m);const E=w-m.dot(t);for(let D=0;D<x.length;D++){let H=m.dot(x[D])+E;if(H<=s&&(console.log(`clamped: depth=${H} to minDist=${s}`),H=s),H<=r){const W=x[D];if(H<=1e-6){const L={point:W,normal:m,depth:H};o.push(L)}}}}clipFaceAgainstPlane(e,t,n,i){let s,r;const o=e.length;if(o<2)return t;let a=e[e.length-1],l=e[0];s=n.dot(a)+i;for(let u=0;u<o;u++){if(l=e[u],r=n.dot(l)+i,s<0)if(r<0){const d=new M;d.copy(l),t.push(d)}else{const d=new M;a.lerp(l,s/(s-r),d),t.push(d)}else if(r<0){const d=new M;a.lerp(l,s/(s-r),d),t.push(d),t.push(l)}a=l,s=r}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let r,o,a,l,u,d,h=new M;for(let p=0;p<s.length;p++){h.copy(s[p]),t.vmult(h,h),e.vadd(h,h);const g=h;(r===void 0||g.x<r)&&(r=g.x),(l===void 0||g.x>l)&&(l=g.x),(o===void 0||g.y<o)&&(o=g.y),(u===void 0||g.y>u)&&(u=g.y),(a===void 0||g.z<a)&&(a=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(r,o,a),i.set(l,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new M);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const r=i[s];t.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];t.vmult(r,r)}}if(e)for(let s=0;s<n;s++){const r=i[s];r.vadd(e,r)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=null,r=new M;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=t[n[o][0]],u=new M;e.vsub(l,u);const d=a.dot(u),h=new M;r.vsub(l,h);const p=a.dot(h);if(d<0&&p>0||d>0&&p<0)return!1}return s?1:-1}static project(e,t,n,i,s){const r=e.vertices.length,o=c0;let a=0,l=0;const u=h0,d=e.vertices;u.setZero(),Ge.vectorToLocalFrame(n,i,t,o),Ge.pointToLocalFrame(n,i,u,u);const h=u.dot(o);l=a=d[0].dot(o);for(let p=1;p<r;p++){const g=d[p].dot(o);g>a&&(a=g),g<l&&(l=g)}if(l-=h,a-=h,l>a){const p=l;l=a,a=p}s[0]=a,s[1]=l}}const so=[],ro=[];new M;const c0=new M,h0=new M;class vs extends pe{constructor(e){super({type:pe.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=M,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],a=new us({vertices:s,faces:r,axes:o});this.convexPolyhedronRepresentation=a,a.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new M),vs.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)Rn.set(s[r][0],s[r][1],s[r][2]),t.vmult(Rn,Rn),e.vadd(Rn,Rn),n(Rn.x,Rn.y,Rn.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;Qt[0].set(s.x,s.y,s.z),Qt[1].set(-s.x,s.y,s.z),Qt[2].set(-s.x,-s.y,s.z),Qt[3].set(-s.x,-s.y,-s.z),Qt[4].set(s.x,-s.y,-s.z),Qt[5].set(s.x,s.y,-s.z),Qt[6].set(-s.x,s.y,-s.z),Qt[7].set(s.x,-s.y,s.z);const r=Qt[0];t.vmult(r,r),e.vadd(r,r),i.copy(r),n.copy(r);for(let o=1;o<8;o++){const a=Qt[o];t.vmult(a,a),e.vadd(a,a);const l=a.x,u=a.y,d=a.z;l>i.x&&(i.x=l),u>i.y&&(i.y=u),d>i.z&&(i.z=d),l<n.x&&(n.x=l),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}}const Rn=new M,Qt=[new M,new M,new M,new M,new M,new M,new M,new M],Yo={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ko={AWAKE:0,SLEEPY:1,SLEEPING:2};class ue extends Vc{constructor(e){e===void 0&&(e={}),super(),this.id=ue.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new M,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new M,this.force=new M;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?ue.STATIC:ue.DYNAMIC,typeof e.type==typeof ue.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ue.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new it,this.initQuaternion=new it,this.previousQuaternion=new it,this.interpolatedQuaternion=new it,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new M,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new $t,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new $t,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new M(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new M(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new zt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=Boolean(e.isTrigger),e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=ue.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ue.SLEEPING&&this.dispatchEvent(ue.wakeupEvent)}sleep(){this.sleepState=ue.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===ue.AWAKE&&n<i?(this.sleepState=ue.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ue.sleepyEvent)):t===ue.SLEEPY&&n>i?this.wakeUp():t===ue.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ue.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ue.SLEEPING||this.type===ue.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new M),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new M),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new M,s=new it;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const r=e[s];r.updateBoundingSphereRadius();const o=t[s].length(),a=r.boundingSphereRadius;o+a>i&&(i=o+a)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=u0,r=d0,o=this.quaternion,a=this.aabb,l=f0;for(let u=0;u!==i;u++){const d=e[u];o.vmult(t[u],s),s.vadd(this.position,s),o.mult(n[u],r),d.calculateWorldAABB(s,r,l.lowerBound,l.upperBound),u===0?a.copy(l):a.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=p0,i=m0;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new M),this.type!==ue.DYNAMIC)return;this.sleepState===ue.SLEEPING&&this.wakeUp();const n=_0;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new M),this.type!==ue.DYNAMIC)return;const n=x0,i=v0;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===ue.DYNAMIC&&(this.sleepState===ue.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new M),this.type!==ue.DYNAMIC)return;this.sleepState===ue.SLEEPING&&this.wakeUp();const n=t,i=y0;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=M0;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new M),this.type!==ue.DYNAMIC)return;const n=b0,i=w0;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=S0;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),vs.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new M;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ue.DYNAMIC||this.type===ue.KINEMATIC)||this.sleepState===ue.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,o=this.force,a=this.torque,l=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,p=u*e;i.x+=o.x*p*h.x,i.y+=o.y*p*h.y,i.z+=o.z*p*h.z;const g=d.elements,m=this.angularFactor,f=a.x*m.x,_=a.y*m.y,x=a.z*m.z;s.x+=e*(g[0]*f+g[1]*_+g[2]*x),s.y+=e*(g[3]*f+g[4]*_+g[5]*x),s.z+=e*(g[6]*f+g[7]*_+g[8]*x),r.x+=i.x*e,r.y+=i.y*e,r.z+=i.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ue.idCounter=0;ue.COLLIDE_EVENT_NAME="collide";ue.DYNAMIC=Yo.DYNAMIC;ue.STATIC=Yo.STATIC;ue.KINEMATIC=Yo.KINEMATIC;ue.AWAKE=Ko.AWAKE;ue.SLEEPY=Ko.SLEEPY;ue.SLEEPING=Ko.SLEEPING;ue.wakeupEvent={type:"wakeup"};ue.sleepyEvent={type:"sleepy"};ue.sleepEvent={type:"sleep"};const u0=new M,d0=new it,f0=new zt,p0=new $t,m0=new $t,g0=new $t,_0=new M,x0=new M,v0=new M,y0=new M,M0=new M,b0=new M,w0=new M,S0=new M;class T0{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&ue.STATIC||e.sleepState===ue.SLEEPING)&&(t.type&ue.STATIC||t.sleepState===ue.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=E0;t.position.vsub(e.position,s);const r=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<r&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=A0,i=C0,s=L0,r=e.length;for(let o=0;o!==r;o++)i[o]=e[o],s[o]=t[o];e.length=0,t.length=0;for(let o=0;o!==r;o++){const a=i[o].id,l=s[o].id,u=a<l?`${a},${l}`:`${l},${a}`;n[u]=o,n.keys.push(u)}for(let o=0;o!==n.keys.length;o++){const a=n.keys.pop(),l=n[a];e.push(i[l]),t.push(s[l]),delete n[a]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new M;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const E0=new M;new M;new it;new M;const A0={keys:[]},C0=[],L0=[];new M;new M;new M;class R0 extends T0{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let r,o;for(let a=0;a!==s;a++)for(let l=0;l!==a;l++)r=i[a],o=i[l],this.needBroadphaseCollision(r,o)&&this.intersectionTest(r,o,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class ar{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,r,o){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=o}}let Hc,Wc,qc,jc,Xc,Yc,Kc;const Zo={CLOSEST:1,ANY:2,ALL:4};Hc=pe.types.SPHERE;Wc=pe.types.PLANE;qc=pe.types.BOX;jc=pe.types.CYLINDER;Xc=pe.types.CONVEXPOLYHEDRON;Yc=pe.types.HEIGHTFIELD;Kc=pe.types.TRIMESH;class nt{get[Hc](){return this._intersectSphere}get[Wc](){return this._intersectPlane}get[qc](){return this._intersectBox}get[jc](){return this._intersectConvex}get[Xc](){return this._intersectConvex}get[Yc](){return this._intersectHeightfield}get[Kc](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new M),t===void 0&&(t=new M),this.from=e.clone(),this.to=t.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=nt.ANY,this.result=new ar,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||nt.ANY,this.result=t.result||new ar,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Ul),oo.length=0,e.broadphase.aabbQuery(e,Ul,oo),this.intersectBodies(oo),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=P0,s=I0;for(let r=0,o=e.shapes.length;r<o;r++){const a=e.shapes[r];if(!(n&&!a.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[r],s),e.quaternion.vmult(e.shapeOffsets[r],i),i.vadd(e.position,i),this.intersectShape(a,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(j0(s,this.direction,n)>e.boundingSphereRadius)return;const o=this[e.type];o&&o.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const r=this.from,o=this.to,a=this.direction,l=new M(0,0,1);t.vmult(l,l);const u=new M;r.vsub(n,u);const d=u.dot(l);o.vsub(n,u);const h=u.dot(l);if(d*h>0||r.distanceTo(o)<d)return;const p=l.dot(a);if(Math.abs(p)<this.precision)return;const g=new M,m=new M,f=new M;r.vsub(n,g);const _=-l.dot(g)/p;a.scale(_,m),r.vadd(m,f),this.reportIntersection(l,f,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const r=D0;r.from.copy(this.from),r.to.copy(this.to),Ge.pointToLocalFrame(n,t,r.from,r.from),Ge.pointToLocalFrame(n,t,r.to,r.to),r.updateDirection();const o=N0;let a,l,u,d;a=l=0,u=d=e.data.length-1;const h=new zt;r.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,o,!0),a=Math.max(a,o[0]),l=Math.max(l,o[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,o,!0),u=Math.min(u,o[0]+1),d=Math.min(d,o[1]+1);for(let p=a;p<u;p++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(p,g,h),!!h.overlapsRay(r)){if(e.getConvexTrianglePillar(p,g,!1),Ge.pointToWorldFrame(n,t,e.pillarOffset,Ks),this._intersectConvex(e.pillarConvex,t,Ks,i,s,kl),this.result.shouldStop)return;e.getConvexTrianglePillar(p,g,!0),Ge.pointToWorldFrame(n,t,e.pillarOffset,Ks),this._intersectConvex(e.pillarConvex,t,Ks,i,s,kl)}}}_intersectSphere(e,t,n,i,s){const r=this.from,o=this.to,a=e.radius,l=(o.x-r.x)**2+(o.y-r.y)**2+(o.z-r.z)**2,u=2*((o.x-r.x)*(r.x-n.x)+(o.y-r.y)*(r.y-n.y)+(o.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-a**2,h=u**2-4*l*d,p=F0,g=z0;if(!(h<0))if(h===0)r.lerp(o,h,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1);else{const m=(-u-Math.sqrt(h))/(2*l),f=(-u+Math.sqrt(h))/(2*l);if(m>=0&&m<=1&&(r.lerp(o,m,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(r.lerp(o,f,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1))}}_intersectConvex(e,t,n,i,s,r){const o=O0,a=Gl,l=r&&r.faceList||null,u=e.faces,d=e.vertices,h=e.faceNormals,p=this.direction,g=this.from,m=this.to,f=g.distanceTo(m),_=l?l.length:u.length,x=this.result;for(let v=0;!x.shouldStop&&v<_;v++){const y=l?l[v]:v,b=u[y],T=h[y],R=t,w=n;a.copy(d[b[0]]),R.vmult(a,a),a.vadd(w,a),a.vsub(g,a),R.vmult(T,o);const E=p.dot(o);if(Math.abs(E)<this.precision)continue;const D=o.dot(a)/E;if(!(D<0)){p.scale(D,At),At.vadd(g,At),Kt.copy(d[b[0]]),R.vmult(Kt,Kt),w.vadd(Kt,Kt);for(let H=1;!x.shouldStop&&H<b.length-1;H++){en.copy(d[b[H]]),tn.copy(d[b[H+1]]),R.vmult(en,en),R.vmult(tn,tn),w.vadd(en,en),w.vadd(tn,tn);const W=At.distanceTo(g);!(nt.pointInTriangle(At,Kt,en,tn)||nt.pointInTriangle(At,en,Kt,tn))||W>f||this.reportIntersection(o,At,s,i,y)}}}}_intersectTrimesh(e,t,n,i,s,r){const o=B0,a=W0,l=q0,u=Gl,d=U0,h=k0,p=G0,g=H0,m=V0,f=e.indices;e.vertices;const _=this.from,x=this.to,v=this.direction;l.position.copy(n),l.quaternion.copy(t),Ge.vectorToLocalFrame(n,t,v,d),Ge.pointToLocalFrame(n,t,_,h),Ge.pointToLocalFrame(n,t,x,p),p.x*=e.scale.x,p.y*=e.scale.y,p.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,p.vsub(h,d),d.normalize();const y=h.distanceSquared(p);e.tree.rayQuery(this,l,a);for(let b=0,T=a.length;!this.result.shouldStop&&b!==T;b++){const R=a[b];e.getNormal(R,o),e.getVertex(f[R*3],Kt),Kt.vsub(h,u);const w=d.dot(o),E=o.dot(u)/w;if(E<0)continue;d.scale(E,At),At.vadd(h,At),e.getVertex(f[R*3+1],en),e.getVertex(f[R*3+2],tn);const D=At.distanceSquared(h);!(nt.pointInTriangle(At,en,Kt,tn)||nt.pointInTriangle(At,Kt,en,tn))||D>y||(Ge.vectorToWorldFrame(t,o,m),Ge.pointToWorldFrame(n,t,At,g),this.reportIntersection(m,g,s,i,R))}a.length=0}reportIntersection(e,t,n,i,s){const r=this.from,o=this.to,a=r.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case nt.ALL:this.hasHit=!0,l.set(r,o,e,t,n,i,a),l.hasHit=!0,this.callback(l);break;case nt.CLOSEST:(a<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(r,o,e,t,n,i,a));break;case nt.ANY:this.hasHit=!0,l.hasHit=!0,l.set(r,o,e,t,n,i,a),l.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,jn),n.vsub(t,ts),e.vsub(t,ao);const s=jn.dot(jn),r=jn.dot(ts),o=jn.dot(ao),a=ts.dot(ts),l=ts.dot(ao);let u,d;return(u=a*o-r*l)>=0&&(d=s*l-r*o)>=0&&u+d<s*a-r*r}}nt.CLOSEST=Zo.CLOSEST;nt.ANY=Zo.ANY;nt.ALL=Zo.ALL;const Ul=new zt,oo=[],ts=new M,ao=new M,P0=new M,I0=new it,At=new M,Kt=new M,en=new M,tn=new M;new M;new ar;const kl={faceList:[0]},Ks=new M,D0=new nt,N0=[],F0=new M,z0=new M,O0=new M;new M;new M;const Gl=new M,B0=new M,U0=new M,k0=new M,G0=new M,V0=new M,H0=new M;new zt;const W0=[],q0=new Ge,jn=new M,Zs=new M;function j0(c,e,t){t.vsub(c,jn);const n=jn.dot(e);return e.scale(n,Zs),Zs.vadd(c,Zs),t.distanceTo(Zs)}class X0{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Vl{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class bs{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=bs.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Vl,this.jacobianElementB=new Vl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*e-i*t-r*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return e.spatial.dot(s)+t.spatial.dot(r)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,o=n.angularVelocity,a=i.angularVelocity;return e.multiplyVectors(s,o)+t.multiplyVectors(r,a)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,o=n.wlambda,a=i.wlambda;return e.multiplyVectors(s,o)+t.multiplyVectors(r,a)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,o=i.force,a=i.torque,l=n.invMassSolve,u=i.invMassSolve;return s.scale(l,Hl),o.scale(u,Wl),n.invInertiaWorldSolve.vmult(r,ql),i.invInertiaWorldSolve.vmult(a,jl),e.multiplyVectors(Hl,ql)+t.multiplyVectors(Wl,jl)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,o=n.invInertiaWorldSolve,a=i.invInertiaWorldSolve;let l=s+r;return o.vmult(e.rotational,$s),l+=$s.dot(e.rotational),a.vmult(t.rotational,$s),l+=$s.dot(t.rotational),l}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=Y0;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,r),i.wlambda.addScaledVector(e,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(e,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}bs.idCounter=0;const Hl=new M,Wl=new M,ql=new M,jl=new M,$s=new M,Y0=new M;class K0 extends bs{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,o=this.rj,a=Z0,l=$0,u=i.velocity,d=i.angularVelocity;i.force,i.torque;const h=s.velocity,p=s.angularVelocity;s.force,s.torque;const g=J0,m=this.jacobianElementA,f=this.jacobianElementB,_=this.ni;r.cross(_,a),o.cross(_,l),_.negate(m.spatial),a.negate(m.rotational),f.spatial.copy(_),f.rotational.copy(l),g.copy(s.position),g.vadd(o,g),g.vsub(i.position,g),g.vsub(r,g);const x=_.dot(g),v=this.restitution+1,y=v*h.dot(_)-v*u.dot(_)+p.dot(l)-d.dot(a),b=this.computeGiMf();return-x*t-y*n-e*b}getImpactVelocityAlongNormal(){const e=Q0,t=e_,n=t_,i=n_,s=i_;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const Z0=new M,$0=new M,J0=new M,Q0=new M,e_=new M,t_=new M,n_=new M,i_=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Xl extends bs{constructor(e,t,n){super(e,t,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=s_,r=r_,o=this.t;n.cross(o,s),i.cross(o,r);const a=this.jacobianElementA,l=this.jacobianElementB;o.negate(a.spatial),s.negate(a.rotational),l.spatial.copy(o),l.rotational.copy(r);const u=this.computeGW(),d=this.computeGiMf();return-u*t-e*d}}const s_=new M,r_=new M;class gr{constructor(e,t,n){n=X0.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=gr.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}gr.idCounter=0;class _r{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=_r.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}_r.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new nt;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Yl extends pe{constructor(e){if(super({type:pe.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new M);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const s=this.radius,r=["x","y","z"];for(let o=0;o<r.length;o++){const a=r[o];n[a]=e[a]-s,i[a]=e[a]+s}}}new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new zt;new M;new zt;new M;new M;new M;new M;new M;new M;new M;new zt;new M;new Ge;new zt;class o_{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class a_ extends o_{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,o=r.length,a=t.bodies,l=a.length,u=e;let d,h,p,g,m,f;if(o!==0)for(let y=0;y!==l;y++)a[y].updateSolveMassProperties();const _=c_,x=h_,v=l_;_.length=o,x.length=o,v.length=o;for(let y=0;y!==o;y++){const b=r[y];v[y]=0,x[y]=b.computeB(u),_[y]=1/b.computeC()}if(o!==0){for(let T=0;T!==l;T++){const R=a[T],w=R.vlambda,E=R.wlambda;w.set(0,0,0),E.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let T=0;T!==o;T++){const R=r[T];d=x[T],h=_[T],f=v[T],m=R.computeGWlambda(),p=h*(d-m-R.eps*f),f+p<R.minForce?p=R.minForce-f:f+p>R.maxForce&&(p=R.maxForce-f),v[T]+=p,g+=p>0?p:-p,R.addToWlambda(p)}if(g*g<s)break}for(let T=0;T!==l;T++){const R=a[T],w=R.velocity,E=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),w.vadd(R.vlambda,w),R.wlambda.vmul(R.angularFactor,R.wlambda),E.vadd(R.wlambda,E)}let y=r.length;const b=1/u;for(;y--;)r[y].multiplier=v[y]*b}return n}}const l_=[],c_=[],h_=[];ue.STATIC;class u_{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class d_ extends u_{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const Ye={sphereSphere:pe.types.SPHERE,spherePlane:pe.types.SPHERE|pe.types.PLANE,boxBox:pe.types.BOX|pe.types.BOX,sphereBox:pe.types.SPHERE|pe.types.BOX,planeBox:pe.types.PLANE|pe.types.BOX,convexConvex:pe.types.CONVEXPOLYHEDRON,sphereConvex:pe.types.SPHERE|pe.types.CONVEXPOLYHEDRON,planeConvex:pe.types.PLANE|pe.types.CONVEXPOLYHEDRON,boxConvex:pe.types.BOX|pe.types.CONVEXPOLYHEDRON,sphereHeightfield:pe.types.SPHERE|pe.types.HEIGHTFIELD,boxHeightfield:pe.types.BOX|pe.types.HEIGHTFIELD,convexHeightfield:pe.types.CONVEXPOLYHEDRON|pe.types.HEIGHTFIELD,sphereParticle:pe.types.PARTICLE|pe.types.SPHERE,planeParticle:pe.types.PLANE|pe.types.PARTICLE,boxParticle:pe.types.BOX|pe.types.PARTICLE,convexParticle:pe.types.PARTICLE|pe.types.CONVEXPOLYHEDRON,cylinderCylinder:pe.types.CYLINDER,sphereCylinder:pe.types.SPHERE|pe.types.CYLINDER,planeCylinder:pe.types.PLANE|pe.types.CYLINDER,boxCylinder:pe.types.BOX|pe.types.CYLINDER,convexCylinder:pe.types.CONVEXPOLYHEDRON|pe.types.CYLINDER,heightfieldCylinder:pe.types.HEIGHTFIELD|pe.types.CYLINDER,particleCylinder:pe.types.PARTICLE|pe.types.CYLINDER,sphereTrimesh:pe.types.SPHERE|pe.types.TRIMESH,planeTrimesh:pe.types.PLANE|pe.types.TRIMESH};class f_{get[Ye.sphereSphere](){return this.sphereSphere}get[Ye.spherePlane](){return this.spherePlane}get[Ye.boxBox](){return this.boxBox}get[Ye.sphereBox](){return this.sphereBox}get[Ye.planeBox](){return this.planeBox}get[Ye.convexConvex](){return this.convexConvex}get[Ye.sphereConvex](){return this.sphereConvex}get[Ye.planeConvex](){return this.planeConvex}get[Ye.boxConvex](){return this.boxConvex}get[Ye.sphereHeightfield](){return this.sphereHeightfield}get[Ye.boxHeightfield](){return this.boxHeightfield}get[Ye.convexHeightfield](){return this.convexHeightfield}get[Ye.sphereParticle](){return this.sphereParticle}get[Ye.planeParticle](){return this.planeParticle}get[Ye.boxParticle](){return this.boxParticle}get[Ye.convexParticle](){return this.convexParticle}get[Ye.cylinderCylinder](){return this.convexConvex}get[Ye.sphereCylinder](){return this.sphereConvex}get[Ye.planeCylinder](){return this.planeConvex}get[Ye.boxCylinder](){return this.boxConvex}get[Ye.convexCylinder](){return this.convexConvex}get[Ye.heightfieldCylinder](){return this.heightfieldCylinder}get[Ye.particleCylinder](){return this.particleCylinder}get[Ye.sphereTrimesh](){return this.sphereTrimesh}get[Ye.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new d_,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,r){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=e,o.bj=t):o=new K0(e,t),o.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const a=this.currentContactMaterial;o.restitution=a.restitution,o.setSpookParams(a.contactEquationStiffness,a.contactEquationRelaxation,this.world.dt);const l=n.material||e.material,u=i.material||t.material;return l&&u&&l.restitution>=0&&u.restitution>=0&&(o.restitution=l.restitution*u.restitution),o.si=s||n,o.sj=r||i,o}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,r=e.sj,o=this.world,a=this.currentContactMaterial;let l=a.friction;const u=s.material||n.material,d=r.material||i.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(l=u.friction*d.friction),l>0){const h=l*(o.frictionGravity||o.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,m=g.length?g.pop():new Xl(n,i,h*p),f=g.length?g.pop():new Xl(n,i,h*p);return m.bi=f.bi=n,m.bj=f.bj=i,m.minForce=f.minForce=-h*p,m.maxForce=f.maxForce=h*p,m.ri.copy(e.ri),m.rj.copy(e.rj),f.ri.copy(e.ri),f.rj.copy(e.rj),e.ni.tangents(m.t,f.t),m.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,o.dt),f.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,o.dt),m.enabled=f.enabled=e.enabled,t.push(m,f),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Vn.setZero(),wi.setZero(),Si.setZero();const s=t.bi;t.bj;for(let o=0;o!==e;o++)t=this.result[this.result.length-1-o],t.bi!==s?(Vn.vadd(t.ni,Vn),wi.vadd(t.ri,wi),Si.vadd(t.rj,Si)):(Vn.vsub(t.ni,Vn),wi.vadd(t.rj,wi),Si.vadd(t.ri,Si));const r=1/e;wi.scale(r,n.ri),Si.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Vn.normalize(),Vn.tangents(n.t,i.t)}getContacts(e,t,n,i,s,r,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=i,this.frictionResult=r;const a=g_,l=__,u=p_,d=m_;for(let h=0,p=e.length;h!==p;h++){const g=e[h],m=t[h];let f=null;g.material&&m.material&&(f=n.getContactMaterial(g.material,m.material)||null);const _=g.type&ue.KINEMATIC&&m.type&ue.STATIC||g.type&ue.STATIC&&m.type&ue.KINEMATIC||g.type&ue.KINEMATIC&&m.type&ue.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],a),g.quaternion.vmult(g.shapeOffsets[x],u),u.vadd(g.position,u);const v=g.shapes[x];for(let y=0;y<m.shapes.length;y++){m.quaternion.mult(m.shapeOrientations[y],l),m.quaternion.vmult(m.shapeOffsets[y],d),d.vadd(m.position,d);const b=m.shapes[y];if(!(v.collisionFilterMask&b.collisionFilterGroup&&b.collisionFilterMask&v.collisionFilterGroup)||u.distanceTo(d)>v.boundingSphereRadius+b.boundingSphereRadius)continue;let T=null;v.material&&b.material&&(T=n.getContactMaterial(v.material,b.material)||null),this.currentContactMaterial=T||f||n.defaultContactMaterial;const R=v.type|b.type,w=this[R];if(w){let E=!1;v.type<b.type?E=w.call(this,v,b,u,d,a,l,g,m,v,b,_):E=w.call(this,b,v,d,u,l,a,m,g,v,b,_),E&&_&&(n.shapeOverlapKeeper.set(v.id,b.id),n.bodyOverlapKeeper.set(g.id,m.id))}}}}}sphereSphere(e,t,n,i,s,r,o,a,l,u,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const h=this.createContactEquation(o,a,e,t,l,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(o.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(a.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,n,i,s,r,o,a,l,u,d){const h=this.createContactEquation(o,a,e,t,l,u);if(h.ni.set(0,0,1),r.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),n.vsub(i,Js),h.ni.scale(h.ni.dot(Js),Kl),Js.vsub(Kl,h.rj),-Js.dot(h.ni)<=e.radius){if(d)return!0;const p=h.ri,g=h.rj;p.vadd(n,p),p.vsub(o.position,p),g.vadd(i,g),g.vsub(a.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,n,i,s,r,o,a,l,u,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,r,o,a,e,t,d)}sphereBox(e,t,n,i,s,r,o,a,l,u,d){const h=this.v3pool,p=H_;n.vsub(i,Qs),t.getSideNormals(p,r);const g=e.radius;let m=!1;const f=q_,_=j_,x=X_;let v=null,y=0,b=0,T=0,R=null;for(let z=0,$=p.length;z!==$&&m===!1;z++){const G=k_;G.copy(p[z]);const X=G.length();G.normalize();const J=Qs.dot(G);if(J<X+g&&J>0){const oe=G_,F=V_;oe.copy(p[(z+1)%3]),F.copy(p[(z+2)%3]);const Q=oe.length(),ne=F.length();oe.normalize(),F.normalize();const se=Qs.dot(oe),q=Qs.dot(F);if(se<Q&&se>-Q&&q<ne&&q>-ne){const be=Math.abs(J-X-g);if((R===null||be<R)&&(R=be,b=se,T=q,v=X,f.copy(G),_.copy(oe),x.copy(F),y++,d))return!0}}}if(y){m=!0;const z=this.createContactEquation(o,a,e,t,l,u);f.scale(-g,z.ri),z.ni.copy(f),z.ni.negate(z.ni),f.scale(v,f),_.scale(b,_),f.vadd(_,f),x.scale(T,x),f.vadd(x,z.rj),z.ri.vadd(n,z.ri),z.ri.vsub(o.position,z.ri),z.rj.vadd(i,z.rj),z.rj.vsub(a.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}let w=h.get();const E=W_;for(let z=0;z!==2&&!m;z++)for(let $=0;$!==2&&!m;$++)for(let G=0;G!==2&&!m;G++)if(w.set(0,0,0),z?w.vadd(p[0],w):w.vsub(p[0],w),$?w.vadd(p[1],w):w.vsub(p[1],w),G?w.vadd(p[2],w):w.vsub(p[2],w),i.vadd(w,E),E.vsub(n,E),E.lengthSquared()<g*g){if(d)return!0;m=!0;const X=this.createContactEquation(o,a,e,t,l,u);X.ri.copy(E),X.ri.normalize(),X.ni.copy(X.ri),X.ri.scale(g,X.ri),X.rj.copy(w),X.ri.vadd(n,X.ri),X.ri.vsub(o.position,X.ri),X.rj.vadd(i,X.rj),X.rj.vsub(a.position,X.rj),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}h.release(w),w=null;const D=h.get(),H=h.get(),W=h.get(),L=h.get(),P=h.get(),N=p.length;for(let z=0;z!==N&&!m;z++)for(let $=0;$!==N&&!m;$++)if(z%3!==$%3){p[$].cross(p[z],D),D.normalize(),p[z].vadd(p[$],H),W.copy(n),W.vsub(H,W),W.vsub(i,W);const G=W.dot(D);D.scale(G,L);let X=0;for(;X===z%3||X===$%3;)X++;P.copy(n),P.vsub(L,P),P.vsub(H,P),P.vsub(i,P);const J=Math.abs(G),oe=P.length();if(J<p[X].length()&&oe<g){if(d)return!0;m=!0;const F=this.createContactEquation(o,a,e,t,l,u);H.vadd(L,F.rj),F.rj.copy(F.rj),P.negate(F.ni),F.ni.normalize(),F.ri.copy(F.rj),F.ri.vadd(i,F.ri),F.ri.vsub(n,F.ri),F.ri.normalize(),F.ri.scale(g,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(o.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(a.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}h.release(D,H,W,L,P)}planeBox(e,t,n,i,s,r,o,a,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,r,o,a,e,t,d)}convexConvex(e,t,n,i,s,r,o,a,l,u,d,h,p){const g=lx;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,r,g,h,p)){const m=[],f=cx;e.clipAgainstHull(n,s,t,i,r,g,-100,100,m);let _=0;for(let x=0;x!==m.length;x++){if(d)return!0;const v=this.createContactEquation(o,a,e,t,l,u),y=v.ri,b=v.rj;g.negate(v.ni),m[x].normal.negate(f),f.scale(m[x].depth,f),m[x].point.vadd(f,y),b.copy(m[x].point),y.vsub(n,y),b.vsub(i,b),y.vadd(n,y),y.vsub(o.position,y),b.vadd(i,b),b.vsub(a.position,b),this.result.push(v),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}}sphereConvex(e,t,n,i,s,r,o,a,l,u,d){const h=this.v3pool;n.vsub(i,Y_);const p=t.faceNormals,g=t.faces,m=t.vertices,f=e.radius;let _=!1;for(let x=0;x!==m.length;x++){const v=m[x],y=J_;r.vmult(v,y),i.vadd(y,y);const b=$_;if(y.vsub(n,b),b.lengthSquared()<f*f){if(d)return!0;_=!0;const T=this.createContactEquation(o,a,e,t,l,u);T.ri.copy(b),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(f,T.ri),y.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(o.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(a.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let x=0,v=g.length;x!==v&&_===!1;x++){const y=p[x],b=g[x],T=Q_;r.vmult(y,T);const R=ex;r.vmult(m[b[0]],R),R.vadd(i,R);const w=tx;T.scale(-f,w),n.vadd(w,w);const E=nx;w.vsub(R,E);const D=E.dot(T),H=ix;if(n.vsub(R,H),D<0&&H.dot(T)>0){const W=[];for(let L=0,P=b.length;L!==P;L++){const N=h.get();r.vmult(m[b[L]],N),i.vadd(N,N),W.push(N)}if(U_(W,T,n)){if(d)return!0;_=!0;const L=this.createContactEquation(o,a,e,t,l,u);T.scale(-f,L.ri),T.negate(L.ni);const P=h.get();T.scale(-D,P);const N=h.get();T.scale(-f,N),n.vsub(i,L.rj),L.rj.vadd(N,L.rj),L.rj.vadd(P,L.rj),L.rj.vadd(i,L.rj),L.rj.vsub(a.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(o.position,L.ri),h.release(P),h.release(N),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let z=0,$=W.length;z!==$;z++)h.release(W[z]);return}else for(let L=0;L!==b.length;L++){const P=h.get(),N=h.get();r.vmult(m[b[(L+1)%b.length]],P),r.vmult(m[b[(L+2)%b.length]],N),i.vadd(P,P),i.vadd(N,N);const z=K_;N.vsub(P,z);const $=Z_;z.unit($);const G=h.get(),X=h.get();n.vsub(P,X);const J=X.dot($);$.scale(J,G),G.vadd(P,G);const oe=h.get();if(G.vsub(n,oe),J>0&&J*J<z.lengthSquared()&&oe.lengthSquared()<f*f){if(d)return!0;const F=this.createContactEquation(o,a,e,t,l,u);G.vsub(i,F.rj),G.vsub(n,F.ni),F.ni.normalize(),F.ni.scale(f,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(a.position,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(o.position,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult);for(let Q=0,ne=W.length;Q!==ne;Q++)h.release(W[Q]);h.release(P),h.release(N),h.release(G),h.release(oe),h.release(X);return}h.release(P),h.release(N),h.release(G),h.release(oe),h.release(X)}for(let L=0,P=W.length;L!==P;L++)h.release(W[L])}}}planeConvex(e,t,n,i,s,r,o,a,l,u,d){const h=sx,p=rx;p.set(0,0,1),s.vmult(p,p);let g=0;const m=ox;for(let f=0;f!==t.vertices.length;f++)if(h.copy(t.vertices[f]),r.vmult(h,h),i.vadd(h,h),h.vsub(n,m),p.dot(m)<=0){if(d)return!0;const x=this.createContactEquation(o,a,e,t,l,u),v=ax;p.scale(p.dot(m),v),h.vsub(v,v),v.vsub(n,x.ri),x.ni.copy(p),h.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(o.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(a.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,s,r,o,a,l,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,r,o,a,e,t,d)}sphereHeightfield(e,t,n,i,s,r,o,a,l,u,d){const h=t.data,p=e.radius,g=t.elementSize,m=Mx,f=yx;Ge.pointToLocalFrame(i,r,n,f);let _=Math.floor((f.x-p)/g)-1,x=Math.ceil((f.x+p)/g)+1,v=Math.floor((f.y-p)/g)-1,y=Math.ceil((f.y+p)/g)+1;if(x<0||y<0||_>h.length||v>h[0].length)return;_<0&&(_=0),x<0&&(x=0),v<0&&(v=0),y<0&&(y=0),_>=h.length&&(_=h.length-1),x>=h.length&&(x=h.length-1),y>=h[0].length&&(y=h[0].length-1),v>=h[0].length&&(v=h[0].length-1);const b=[];t.getRectMinMax(_,v,x,y,b);const T=b[0],R=b[1];if(f.z-p>R||f.z+p<T)return;const w=this.result;for(let E=_;E<x;E++)for(let D=v;D<y;D++){const H=w.length;let W=!1;if(t.getConvexTrianglePillar(E,D,!1),Ge.pointToWorldFrame(i,r,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(W=this.sphereConvex(e,t.pillarConvex,n,m,s,r,o,a,e,t,d)),d&&W||(t.getConvexTrianglePillar(E,D,!0),Ge.pointToWorldFrame(i,r,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(W=this.sphereConvex(e,t.pillarConvex,n,m,s,r,o,a,e,t,d)),d&&W))return!0;if(w.length-H>2)return}}boxHeightfield(e,t,n,i,s,r,o,a,l,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,r,o,a,e,t,d)}convexHeightfield(e,t,n,i,s,r,o,a,l,u,d){const h=t.data,p=t.elementSize,g=e.boundingSphereRadius,m=xx,f=vx,_=_x;Ge.pointToLocalFrame(i,r,n,_);let x=Math.floor((_.x-g)/p)-1,v=Math.ceil((_.x+g)/p)+1,y=Math.floor((_.y-g)/p)-1,b=Math.ceil((_.y+g)/p)+1;if(v<0||b<0||x>h.length||y>h[0].length)return;x<0&&(x=0),v<0&&(v=0),y<0&&(y=0),b<0&&(b=0),x>=h.length&&(x=h.length-1),v>=h.length&&(v=h.length-1),b>=h[0].length&&(b=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const T=[];t.getRectMinMax(x,y,v,b,T);const R=T[0],w=T[1];if(!(_.z-g>w||_.z+g<R))for(let E=x;E<v;E++)for(let D=y;D<b;D++){let H=!1;if(t.getConvexTrianglePillar(E,D,!1),Ge.pointToWorldFrame(i,r,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(H=this.convexConvex(e,t.pillarConvex,n,m,s,r,o,a,null,null,d,f,null)),d&&H||(t.getConvexTrianglePillar(E,D,!0),Ge.pointToWorldFrame(i,r,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(H=this.convexConvex(e,t.pillarConvex,n,m,s,r,o,a,null,null,d,f,null)),d&&H))return!0}}sphereParticle(e,t,n,i,s,r,o,a,l,u,d){const h=fx;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=e.radius*e.radius){if(d)return!0;const g=this.createContactEquation(a,o,t,e,l,u);h.normalize(),g.rj.copy(h),g.rj.scale(e.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,s,r,o,a,l,u,d){const h=hx;h.set(0,0,1),o.quaternion.vmult(h,h);const p=ux;if(i.vsub(o.position,p),h.dot(p)<=0){if(d)return!0;const m=this.createContactEquation(a,o,t,e,l,u);m.ni.copy(h),m.ni.negate(m.ni),m.ri.set(0,0,0);const f=dx;h.scale(h.dot(i),f),i.vsub(f,f),m.rj.copy(f),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}boxParticle(e,t,n,i,s,r,o,a,l,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,r,o,a,e,t,d)}convexParticle(e,t,n,i,s,r,o,a,l,u,d){let h=-1;const p=mx,g=gx;let m=null;const f=px;if(f.copy(i),f.vsub(n,f),s.conjugate(Zl),Zl.vmult(f,f),e.pointIsInside(f)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let _=0,x=e.faces.length;_!==x;_++){const v=[e.worldVertices[e.faces[_][0]]],y=e.worldFaceNormals[_];i.vsub(v[0],$l);const b=-y.dot($l);if(m===null||Math.abs(b)<Math.abs(m)){if(d)return!0;m=b,h=_,p.copy(y)}}if(h!==-1){const _=this.createContactEquation(a,o,t,e,l,u);p.scale(m,g),g.vadd(i,g),g.vsub(n,g),_.rj.copy(g),p.negate(_.ni),_.ri.set(0,0,0);const x=_.ri,v=_.rj;x.vadd(i,x),x.vsub(a.position,x),v.vadd(n,v),v.vsub(o.position,v),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,r,o,a,l,u,d){return this.convexHeightfield(t,e,i,n,r,s,a,o,l,u,d)}particleCylinder(e,t,n,i,s,r,o,a,l,u,d){return this.convexParticle(t,e,i,n,r,s,a,o,l,u,d)}sphereTrimesh(e,t,n,i,s,r,o,a,l,u,d){const h=T_,p=E_,g=A_,m=C_,f=L_,_=R_,x=N_,v=S_,y=b_,b=F_;Ge.pointToLocalFrame(i,r,n,f);const T=e.radius;x.lowerBound.set(f.x-T,f.y-T,f.z-T),x.upperBound.set(f.x+T,f.y+T,f.z+T),t.getTrianglesInAABB(x,b);const R=w_,w=e.radius*e.radius;for(let L=0;L<b.length;L++)for(let P=0;P<3;P++)if(t.getVertex(t.indices[b[L]*3+P],R),R.vsub(f,y),y.lengthSquared()<=w){if(v.copy(R),Ge.pointToWorldFrame(i,r,v,R),R.vsub(n,y),d)return!0;let N=this.createContactEquation(o,a,e,t,l,u);N.ni.copy(y),N.ni.normalize(),N.ri.copy(N.ni),N.ri.scale(e.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(o.position,N.ri),N.rj.copy(R),N.rj.vsub(a.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}for(let L=0;L<b.length;L++)for(let P=0;P<3;P++){t.getVertex(t.indices[b[L]*3+P],h),t.getVertex(t.indices[b[L]*3+(P+1)%3],p),p.vsub(h,g),f.vsub(p,_);const N=_.dot(g);f.vsub(h,_);let z=_.dot(g);if(z>0&&N<0&&(f.vsub(h,_),m.copy(g),m.normalize(),z=_.dot(m),m.scale(z,_),_.vadd(h,_),_.distanceTo(f)<e.radius)){if(d)return!0;const G=this.createContactEquation(o,a,e,t,l,u);_.vsub(f,G.ni),G.ni.normalize(),G.ni.scale(e.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(o.position,G.ri),Ge.pointToWorldFrame(i,r,_,_),_.vsub(a.position,G.rj),Ge.vectorToWorldFrame(r,G.ni,G.ni),Ge.vectorToWorldFrame(r,G.ri,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}const E=P_,D=I_,H=D_,W=M_;for(let L=0,P=b.length;L!==P;L++){t.getTriangleVertices(b[L],E,D,H),t.getNormal(b[L],W),f.vsub(E,_);let N=_.dot(W);if(W.scale(N,_),f.vsub(_,_),N=_.distanceTo(f),nt.pointInTriangle(_,E,D,H)&&N<e.radius){if(d)return!0;let z=this.createContactEquation(o,a,e,t,l,u);_.vsub(f,z.ni),z.ni.normalize(),z.ni.scale(e.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(o.position,z.ri),Ge.pointToWorldFrame(i,r,_,_),_.vsub(a.position,z.rj),Ge.vectorToWorldFrame(r,z.ni,z.ni),Ge.vectorToWorldFrame(r,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}b.length=0}planeTrimesh(e,t,n,i,s,r,o,a,l,u,d){const h=new M,p=x_;p.set(0,0,1),s.vmult(p,p);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,h);const m=new M;m.copy(h),Ge.pointToWorldFrame(i,r,m,h);const f=v_;if(h.vsub(n,f),p.dot(f)<=0){if(d)return!0;const x=this.createContactEquation(o,a,e,t,l,u);x.ni.copy(p);const v=y_;p.scale(f.dot(p),v),h.vsub(v,v),x.ri.copy(v),x.ri.vsub(o.position,x.ri),x.rj.copy(h),x.rj.vsub(a.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const Vn=new M,wi=new M,Si=new M,p_=new M,m_=new M,g_=new it,__=new it,x_=new M,v_=new M,y_=new M,M_=new M,b_=new M;new M;const w_=new M,S_=new M,T_=new M,E_=new M,A_=new M,C_=new M,L_=new M,R_=new M,P_=new M,I_=new M,D_=new M,N_=new zt,F_=[],Js=new M,Kl=new M,z_=new M,O_=new M,B_=new M;function U_(c,e,t){let n=null;const i=c.length;for(let s=0;s!==i;s++){const r=c[s],o=z_;c[(s+1)%i].vsub(r,o);const a=O_;o.cross(e,a);const l=B_;t.vsub(r,l);const u=a.dot(l);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const Qs=new M,k_=new M,G_=new M,V_=new M,H_=[new M,new M,new M,new M,new M,new M],W_=new M,q_=new M,j_=new M,X_=new M,Y_=new M,K_=new M,Z_=new M,$_=new M,J_=new M,Q_=new M,ex=new M,tx=new M,nx=new M,ix=new M;new M;new M;const sx=new M,rx=new M,ox=new M,ax=new M,lx=new M,cx=new M,hx=new M,ux=new M,dx=new M,fx=new M,Zl=new it,px=new M;new M;const mx=new M,$l=new M,gx=new M,_x=new M,xx=new M,vx=[0],yx=new M,Mx=new M;class Jl{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,r=i.length;let o=0;for(let a=0;a<s;a++){let l=!1;const u=n[a];for(;u>i[o];)o++;l=u===i[o],l||Ql(e,u)}o=0;for(let a=0;a<r;a++){let l=!1;const u=i[a];for(;u>n[o];)o++;l=n[o]===u,l||Ql(t,u)}}}function Ql(c,e){c.push((e&4294901760)>>16,e&65535)}const lo=(c,e)=>c<e?`${c}-${e}`:`${e}-${c}`;class bx{constructor(){this.data={keys:[]}}get(e,t){const n=lo(e,t);return this.data[n]}set(e,t,n){const i=lo(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=lo(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class wx extends Vc{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new R0,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new a_,this.constraints=[],this.narrowphase=new f_(this),this.collisionMatrix=new Ol,this.collisionMatrixPrevious=new Ol,this.bodyOverlapKeeper=new Jl,this.shapeOverlapKeeper=new Jl,this.contactmaterials=[],this.contactMaterialTable=new bx,this.defaultMaterial=new _r("default"),this.defaultContactMaterial=new gr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof ar?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=nt.ALL,n.from=e,n.to=t,n.callback=i,co.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=nt.ANY,n.from=e,n.to=t,n.result=i,co.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=nt.CLOSEST,n.from=e,n.to=t,n.result=i,co.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ue&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===e)return r}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=rt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=rt.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(rt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const r=this.accumulator/e;for(let o=0;o!==this.bodies.length;o++){const a=this.bodies[o];a.previousPosition.lerp(a.position,r,a.interpolatedPosition),a.previousQuaternion.slerp(a.quaternion,r,a.interpolatedQuaternion),a.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=Cx,i=Lx,s=this.bodies.length,r=this.bodies,o=this.solver,a=this.gravity,l=this.doProfiling,u=this.profile,d=ue.DYNAMIC;let h=-1/0;const p=this.constraints,g=Ax;a.length();const m=a.x,f=a.y,_=a.z;let x=0;for(l&&(h=rt.now()),x=0;x!==s;x++){const L=r[x];if(L.type===d){const P=L.force,N=L.mass;P.x+=N*m,P.y+=N*f,P.z+=N*_}}for(let L=0,P=this.subsystems.length;L!==P;L++)this.subsystems[L].update();l&&(h=rt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(u.broadphase=rt.now()-h);let v=p.length;for(x=0;x!==v;x++){const L=p[x];if(!L.collideConnected)for(let P=n.length-1;P>=0;P-=1)(L.bodyA===n[P]&&L.bodyB===i[P]||L.bodyB===n[P]&&L.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),l&&(h=rt.now());const y=Ex,b=t.length;for(x=0;x!==b;x++)y.push(t[x]);t.length=0;const T=this.frictionEquations.length;for(x=0;x!==T;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,y,this.frictionEquations,g),l&&(u.narrowphase=rt.now()-h),l&&(h=rt.now()),x=0;x<this.frictionEquations.length;x++)o.addEquation(this.frictionEquations[x]);const R=t.length;for(let L=0;L!==R;L++){const P=t[L],N=P.bi,z=P.bj,$=P.si,G=P.sj;let X;if(N.material&&z.material?X=this.getContactMaterial(N.material,z.material)||this.defaultContactMaterial:X=this.defaultContactMaterial,X.friction,N.material&&z.material&&(N.material.friction>=0&&z.material.friction>=0&&N.material.friction*z.material.friction,N.material.restitution>=0&&z.material.restitution>=0&&(P.restitution=N.material.restitution*z.material.restitution)),o.addEquation(P),N.allowSleep&&N.type===ue.DYNAMIC&&N.sleepState===ue.SLEEPING&&z.sleepState===ue.AWAKE&&z.type!==ue.STATIC){const J=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),oe=z.sleepSpeedLimit**2;J>=oe*2&&(N.wakeUpAfterNarrowphase=!0)}if(z.allowSleep&&z.type===ue.DYNAMIC&&z.sleepState===ue.SLEEPING&&N.sleepState===ue.AWAKE&&N.type!==ue.STATIC){const J=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),oe=N.sleepSpeedLimit**2;J>=oe*2&&(z.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(N,z,!0),this.collisionMatrixPrevious.get(N,z)||(ns.body=z,ns.contact=P,N.dispatchEvent(ns),ns.body=N,z.dispatchEvent(ns)),this.bodyOverlapKeeper.set(N.id,z.id),this.shapeOverlapKeeper.set($.id,G.id)}for(this.emitContactEvents(),l&&(u.makeContactConstraints=rt.now()-h,h=rt.now()),x=0;x!==s;x++){const L=r[x];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(v=p.length,x=0;x!==v;x++){const L=p[x];L.update();for(let P=0,N=L.equations.length;P!==N;P++){const z=L.equations[P];o.addEquation(z)}}o.solve(e,this),l&&(u.solve=rt.now()-h),o.removeAllEquations();const w=Math.pow;for(x=0;x!==s;x++){const L=r[x];if(L.type&d){const P=w(1-L.linearDamping,e),N=L.velocity;N.scale(P,N);const z=L.angularVelocity;if(z){const $=w(1-L.angularDamping,e);z.scale($,z)}}}this.dispatchEvent(Tx),l&&(h=rt.now());const D=this.stepnumber%(this.quatNormalizeSkip+1)===0,H=this.quatNormalizeFast;for(x=0;x!==s;x++)r[x].integrate(e,D,H);this.clearForces(),this.broadphase.dirty=!0,l&&(u.integrate=rt.now()-h),this.stepnumber+=1,this.dispatchEvent(Sx);let W=!0;if(this.allowSleep)for(W=!1,x=0;x!==s;x++){const L=r[x];L.sleepTick(this.time),L.sleepState!==ue.SLEEPING&&(W=!0)}this.hasActiveBodies=W}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(_n,xn),e){for(let s=0,r=_n.length;s<r;s+=2)is.bodyA=this.getBodyById(_n[s]),is.bodyB=this.getBodyById(_n[s+1]),this.dispatchEvent(is);is.bodyA=is.bodyB=null}if(t){for(let s=0,r=xn.length;s<r;s+=2)ss.bodyA=this.getBodyById(xn[s]),ss.bodyB=this.getBodyById(xn[s+1]),this.dispatchEvent(ss);ss.bodyA=ss.bodyB=null}_n.length=xn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(_n,xn),n){for(let s=0,r=_n.length;s<r;s+=2){const o=this.getShapeById(_n[s]),a=this.getShapeById(_n[s+1]);vn.shapeA=o,vn.shapeB=a,o&&(vn.bodyA=o.body),a&&(vn.bodyB=a.body),this.dispatchEvent(vn)}vn.bodyA=vn.bodyB=vn.shapeA=vn.shapeB=null}if(i){for(let s=0,r=xn.length;s<r;s+=2){const o=this.getShapeById(xn[s]),a=this.getShapeById(xn[s+1]);yn.shapeA=o,yn.shapeB=a,o&&(yn.bodyA=o.body),a&&(yn.bodyB=a.body),this.dispatchEvent(yn)}yn.bodyA=yn.bodyB=yn.shapeA=yn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new zt;const co=new nt,rt=globalThis.performance||{};if(!rt.now){let c=Date.now();rt.timing&&rt.timing.navigationStart&&(c=rt.timing.navigationStart),rt.now=()=>Date.now()-c}new M;const Sx={type:"postStep"},Tx={type:"preStep"},ns={type:ue.COLLIDE_EVENT_NAME,body:null,contact:null},Ex=[],Ax=[],Cx=[],Lx=[],_n=[],xn=[],is={type:"beginContact",bodyA:null,bodyB:null},ss={type:"endContact",bodyA:null,bodyB:null},vn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},yn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ec={type:"change"},ho={type:"start"},tc={type:"end"};class Rx extends ri{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ai.ROTATE,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},this.touches={ONE:li.ROTATE,TWO:li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",Et),this._domElementKeyEvents=I},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ec),n.update(),s=i.NONE},this.update=function(){const I=new O,U=new an().setFromUnitVectors(e.up,new O(0,1,0)),ce=U.clone().invert(),fe=new O,le=new an,_e=2*Math.PI;return function(){const Ie=n.object.position;I.copy(Ie).sub(n.target),I.applyQuaternion(U),o.setFromVector3(I),n.autoRotate&&s===i.NONE&&E(R()),n.enableDamping?(o.theta+=a.theta*n.dampingFactor,o.phi+=a.phi*n.dampingFactor):(o.theta+=a.theta,o.phi+=a.phi);let De=n.minAzimuthAngle,qe=n.maxAzimuthAngle;return isFinite(De)&&isFinite(qe)&&(De<-Math.PI?De+=_e:De>Math.PI&&(De-=_e),qe<-Math.PI?qe+=_e:qe>Math.PI&&(qe-=_e),De<=qe?o.theta=Math.max(De,Math.min(qe,o.theta)):o.theta=o.theta>(De+qe)/2?Math.max(De,o.theta):Math.min(qe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),I.setFromSpherical(o),I.applyQuaternion(ce),Ie.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(a.theta*=1-n.dampingFactor,a.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(a.set(0,0,0),u.set(0,0,0)),l=1,d||fe.distanceToSquared(n.object.position)>r||8*(1-le.dot(n.object.quaternion))>r?(n.dispatchEvent(ec),fe.copy(n.object.position),le.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",j),n.domElement.removeEventListener("pointerdown",lt),n.domElement.removeEventListener("pointercancel",vt),n.domElement.removeEventListener("wheel",Ot),n.domElement.removeEventListener("pointermove",pt),n.domElement.removeEventListener("pointerup",Je),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Et)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,o=new Il,a=new Il;let l=1;const u=new O;let d=!1;const h=new Se,p=new Se,g=new Se,m=new Se,f=new Se,_=new Se,x=new Se,v=new Se,y=new Se,b=[],T={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function w(){return Math.pow(.95,n.zoomSpeed)}function E(I){a.theta-=I}function D(I){a.phi-=I}const H=function(){const I=new O;return function(ce,fe){I.setFromMatrixColumn(fe,0),I.multiplyScalar(-ce),u.add(I)}}(),W=function(){const I=new O;return function(ce,fe){n.screenSpacePanning===!0?I.setFromMatrixColumn(fe,1):(I.setFromMatrixColumn(fe,0),I.crossVectors(n.object.up,I)),I.multiplyScalar(ce),u.add(I)}}(),L=function(){const I=new O;return function(ce,fe){const le=n.domElement;if(n.object.isPerspectiveCamera){const _e=n.object.position;I.copy(_e).sub(n.target);let me=I.length();me*=Math.tan(n.object.fov/2*Math.PI/180),H(2*ce*me/le.clientHeight,n.object.matrix),W(2*fe*me/le.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(H(ce*(n.object.right-n.object.left)/n.object.zoom/le.clientWidth,n.object.matrix),W(fe*(n.object.top-n.object.bottom)/n.object.zoom/le.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(I){n.object.isPerspectiveCamera?l/=I:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*I)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(I){n.object.isPerspectiveCamera?l*=I:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/I)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(I){h.set(I.clientX,I.clientY)}function $(I){x.set(I.clientX,I.clientY)}function G(I){m.set(I.clientX,I.clientY)}function X(I){p.set(I.clientX,I.clientY),g.subVectors(p,h).multiplyScalar(n.rotateSpeed);const U=n.domElement;E(2*Math.PI*g.x/U.clientHeight),D(2*Math.PI*g.y/U.clientHeight),h.copy(p),n.update()}function J(I){v.set(I.clientX,I.clientY),y.subVectors(v,x),y.y>0?P(w()):y.y<0&&N(w()),x.copy(v),n.update()}function oe(I){f.set(I.clientX,I.clientY),_.subVectors(f,m).multiplyScalar(n.panSpeed),L(_.x,_.y),m.copy(f),n.update()}function F(I){I.deltaY<0?N(w()):I.deltaY>0&&P(w()),n.update()}function Q(I){let U=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(0,n.keyPanSpeed),U=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(0,-n.keyPanSpeed),U=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(n.keyPanSpeed,0),U=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(-n.keyPanSpeed,0),U=!0;break}U&&(I.preventDefault(),n.update())}function ne(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const I=.5*(b[0].pageX+b[1].pageX),U=.5*(b[0].pageY+b[1].pageY);h.set(I,U)}}function se(){if(b.length===1)m.set(b[0].pageX,b[0].pageY);else{const I=.5*(b[0].pageX+b[1].pageX),U=.5*(b[0].pageY+b[1].pageY);m.set(I,U)}}function q(){const I=b[0].pageX-b[1].pageX,U=b[0].pageY-b[1].pageY,ce=Math.sqrt(I*I+U*U);x.set(0,ce)}function be(){n.enableZoom&&q(),n.enablePan&&se()}function xe(){n.enableZoom&&q(),n.enableRotate&&ne()}function ge(I){if(b.length==1)p.set(I.pageX,I.pageY);else{const ce=we(I),fe=.5*(I.pageX+ce.x),le=.5*(I.pageY+ce.y);p.set(fe,le)}g.subVectors(p,h).multiplyScalar(n.rotateSpeed);const U=n.domElement;E(2*Math.PI*g.x/U.clientHeight),D(2*Math.PI*g.y/U.clientHeight),h.copy(p)}function he(I){if(b.length===1)f.set(I.pageX,I.pageY);else{const U=we(I),ce=.5*(I.pageX+U.x),fe=.5*(I.pageY+U.y);f.set(ce,fe)}_.subVectors(f,m).multiplyScalar(n.panSpeed),L(_.x,_.y),m.copy(f)}function He(I){const U=we(I),ce=I.pageX-U.x,fe=I.pageY-U.y,le=Math.sqrt(ce*ce+fe*fe);v.set(0,le),y.set(0,Math.pow(v.y/x.y,n.zoomSpeed)),P(y.y),x.copy(v)}function Ae(I){n.enableZoom&&He(I),n.enablePan&&he(I)}function Me(I){n.enableZoom&&He(I),n.enableRotate&&ge(I)}function lt(I){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",pt),n.domElement.addEventListener("pointerup",Je)),te(I),I.pointerType==="touch"?C(I):$e(I))}function pt(I){n.enabled!==!1&&(I.pointerType==="touch"?S(I):Ue(I))}function Je(I){ie(I),b.length===0&&(n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",pt),n.domElement.removeEventListener("pointerup",Je)),n.dispatchEvent(tc),s=i.NONE}function vt(I){ie(I)}function $e(I){let U;switch(I.button){case 0:U=n.mouseButtons.LEFT;break;case 1:U=n.mouseButtons.MIDDLE;break;case 2:U=n.mouseButtons.RIGHT;break;default:U=-1}switch(U){case ai.DOLLY:if(n.enableZoom===!1)return;$(I),s=i.DOLLY;break;case ai.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;G(I),s=i.PAN}else{if(n.enableRotate===!1)return;z(I),s=i.ROTATE}break;case ai.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;z(I),s=i.ROTATE}else{if(n.enablePan===!1)return;G(I),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ho)}function Ue(I){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;X(I);break;case i.DOLLY:if(n.enableZoom===!1)return;J(I);break;case i.PAN:if(n.enablePan===!1)return;oe(I);break}}function Ot(I){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(I.preventDefault(),n.dispatchEvent(ho),F(I),n.dispatchEvent(tc))}function Et(I){n.enabled===!1||n.enablePan===!1||Q(I)}function C(I){switch(ae(I),b.length){case 1:switch(n.touches.ONE){case li.ROTATE:if(n.enableRotate===!1)return;ne(),s=i.TOUCH_ROTATE;break;case li.PAN:if(n.enablePan===!1)return;se(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case li.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;be(),s=i.TOUCH_DOLLY_PAN;break;case li.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ho)}function S(I){switch(ae(I),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ge(I),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;he(I),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ae(I),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Me(I),n.update();break;default:s=i.NONE}}function j(I){n.enabled!==!1&&I.preventDefault()}function te(I){b.push(I)}function ie(I){delete T[I.pointerId];for(let U=0;U<b.length;U++)if(b[U].pointerId==I.pointerId){b.splice(U,1);return}}function ae(I){let U=T[I.pointerId];U===void 0&&(U=new Se,T[I.pointerId]=U),U.set(I.pageX,I.pageY)}function we(I){const U=I.pointerId===b[0].pointerId?b[1]:b[0];return T[U.pointerId]}n.domElement.addEventListener("contextmenu",j),n.domElement.addEventListener("pointerdown",lt),n.domElement.addEventListener("pointercancel",vt),n.domElement.addEventListener("wheel",Ot,{passive:!1}),this.update()}}function nc(c,e){if(e===Kh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),c;if(e===yo||e===mc){let t=c.getIndex();if(t===null){const r=[],o=c.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);c.setIndex(r),t=c.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),c}const n=t.count-2,i=[];if(e===yo)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=c.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),c}class Zc extends Ms{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Fx(t)}),this.register(function(t){return new Vx(t)}),this.register(function(t){return new Hx(t)}),this.register(function(t){return new Ox(t)}),this.register(function(t){return new Bx(t)}),this.register(function(t){return new Ux(t)}),this.register(function(t){return new kx(t)}),this.register(function(t){return new Nx(t)}),this.register(function(t){return new Gx(t)}),this.register(function(t){return new zx(t)}),this.register(function(t){return new Ix(t)}),this.register(function(t){return new Wx(t)}),this.register(function(t){return new qx(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=Eo.extractUrlBase(e),this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},a=new Uc(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{s.parse(l,r,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={},a=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===$c){try{r[Oe.KHR_BINARY_GLTF]=new jx(e)}catch(d){i&&i(d);return}s=JSON.parse(r[Oe.KHR_BINARY_GLTF].content)}else s=JSON.parse(a.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new rv(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](l);o[d.name]=d,r[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case Oe.KHR_MATERIALS_UNLIT:r[d]=new Dx;break;case Oe.KHR_DRACO_MESH_COMPRESSION:r[d]=new Xx(s,this.dracoLoader);break;case Oe.KHR_TEXTURE_TRANSFORM:r[d]=new Yx;break;case Oe.KHR_MESH_QUANTIZATION:r[d]=new Kx;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Px(){let c={};return{get:function(e){return c[e]},add:function(e,t){c[e]=t},remove:function(e){delete c[e]},removeAll:function(){c={}}}}const Oe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ix{constructor(e){this.parser=e,this.name=Oe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,a=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Te(16777215);a.color!==void 0&&u.fromArray(a.color);const d=a.range!==void 0?a.range:0;switch(a.type){case"directional":l=new Gc(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Gg(u),l.distance=d;break;case"spot":l=new Ug(u),l.distance=d,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,l.angle=a.spot.outerConeAngle,l.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return l.position.set(0,0,0),l.decay=2,In(l,a),a.intensity!==void 0&&(l.intensity=a.intensity),l.name=t.createUniqueName(a.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(a){return n._getNodeRef(t.cache,o,a)})}}class Dx{constructor(){this.name=Oe.KHR_MATERIALS_UNLIT}getMaterialType(){return Yn}extendParams(e,t,n){const i=[];e.color=new Te(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,ke))}return Promise.all(i)}}class Nx{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Fx{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Se(o,o)}return Promise.all(s)}}class zx{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class Ox{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,ke)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class Bx{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Ux{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Te(o[0],o[1],o[2]),Promise.all(s)}}class kx{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Gx{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new Te(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,ke)),Promise.all(s)}}class Vx{constructor(e){this.parser=e,this.name=Oe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class Hx{constructor(e){this.parser=e,this.name=Oe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let a=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(a=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,a);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Wx{constructor(e){this.name=Oe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const a=i.byteOffset||0,l=i.byteLength||0,u=i.count,d=i.byteStride,h=new Uint8Array(o,a,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,d,h,i.mode,i.filter).then(function(p){return p.buffer}):r.ready.then(function(){const p=new ArrayBuffer(u*d);return r.decodeGltfBuffer(new Uint8Array(p),u,d,h,i.mode,i.filter),p})})}else return null}}class qx{constructor(e){this.name=Oe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Gt.TRIANGLES&&l.mode!==Gt.TRIANGLE_STRIP&&l.mode!==Gt.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],a={};for(const l in r)o.push(this.parser.getDependency("accessor",r[l]).then(u=>(a[l]=u,a[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),d=u.isGroup?u.children:[u],h=l[0].count,p=[];for(const g of d){const m=new Pe,f=new O,_=new an,x=new O(1,1,1),v=new Mg(g.geometry,g.material,h);for(let y=0;y<h;y++)a.TRANSLATION&&f.fromBufferAttribute(a.TRANSLATION,y),a.ROTATION&&_.fromBufferAttribute(a.ROTATION,y),a.SCALE&&x.fromBufferAttribute(a.SCALE,y),v.setMatrixAt(y,m.compose(f,_,x));for(const y in a)y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,a[y]);Ze.prototype.copy.call(v,g),v.frustumCulled=!1,this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const $c="glTF",rs=12,ic={JSON:1313821514,BIN:5130562};class jx{constructor(e){this.name=Oe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,rs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$c)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-rs,s=new DataView(e,rs);let r=0;for(;r<i;){const o=s.getUint32(r,!0);r+=4;const a=s.getUint32(r,!0);if(r+=4,a===ic.JSON){const l=new Uint8Array(e,rs+r,o);this.content=n.decode(l)}else if(a===ic.BIN){const l=rs+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Xx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Oe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},a={},l={};for(const u in r){const d=Co[u]||u.toLowerCase();o[d]=r[u]}for(const u in e.attributes){const d=Co[u]||u.toLowerCase();if(r[u]!==void 0){const h=n.accessors[e.attributes[u]],p=Pi[h.componentType];l[d]=p.name,a[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d){i.decodeDracoFile(u,function(h){for(const p in h.attributes){const g=h.attributes[p],m=a[p];m!==void 0&&(g.normalized=m)}d(h)},o,l)})})}}class Yx{constructor(){this.name=Oe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Kx{constructor(){this.name=Oe.KHR_MESH_QUANTIZATION}}class Jc extends ys{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=o*2,l=o*3,u=i-t,d=(n-t)/u,h=d*d,p=h*d,g=e*l,m=g-l,f=-2*p+3*h,_=p-h,x=1-f,v=_-h+d;for(let y=0;y!==o;y++){const b=r[m+y+o],T=r[m+y+a]*u,R=r[g+y+o],w=r[g+y]*u;s[y]=x*b+v*T+f*R+_*w}return s}}const Zx=new an;class $x extends Jc{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Zx.fromArray(s).normalize().toArray(s),s}}const Gt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Pi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sc={9728:dt,9729:Ct,9984:vo,9985:fc,9986:tr,9987:Qn},rc={33071:Vt,33648:rr,10497:Ni},uo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Co={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Jx={CUBICSPLINE:void 0,LINEAR:zi,STEP:fs},fo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Qx(c){return c.DefaultMaterial===void 0&&(c.DefaultMaterial=new Wo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Sn})),c.DefaultMaterial}function os(c,e,t){for(const n in t.extensions)c[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function In(c,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(c.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ev(c,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(c);const r=[],o=[],a=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):c.attributes.position;r.push(h)}if(i){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):c.attributes.normal;o.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):c.attributes.color;a.push(h)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(a)]).then(function(l){const u=l[0],d=l[1],h=l[2];return n&&(c.morphAttributes.position=u),i&&(c.morphAttributes.normal=d),s&&(c.morphAttributes.color=h),c.morphTargetsRelative=!0,c})}function tv(c,e){if(c.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)c.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(c.morphTargetInfluences.length===t.length){c.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)c.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function nv(c){const e=c.extensions&&c.extensions[Oe.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+oc(e.attributes):t=c.indices+":"+oc(c.attributes)+":"+c.mode,t}function oc(c){let e="";const t=Object.keys(c).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+c[t[n]]+";";return e}function Lo(c){switch(c){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function iv(c){return c.search(/\.jpe?g($|\?)/i)>0||c.search(/^data\:image\/jpeg/)===0?"image/jpeg":c.search(/\.webp($|\?)/i)>0||c.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const sv=new Pe;class rv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Px,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new kc(this.options.manager):this.textureLoader=new Wg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Uc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};os(s,o,i),In(o,i),Promise.all(n._invokeAll(function(a){return a.afterRoot&&a.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,a=r.length;o<a;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const a=this.associations.get(r);a!=null&&this.associations.set(o,a);for(const[l,u]of r.children.entries())s(u,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Oe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Eo.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=uo[i.type],o=Pi[i.componentType],a=i.normalized===!0,l=new o(i.count*r);return Promise.resolve(new Tt(l,r,a))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],a=uo[i.type],l=Pi[i.componentType],u=l.BYTES_PER_ELEMENT,d=u*a,h=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let m,f;if(p&&p!==d){const _=Math.floor(h/p),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let v=t.cache.get(x);v||(m=new l(o,_*p,i.count*p/u),v=new mg(m,p/u),t.cache.add(x,v)),f=new Uo(v,a,h%p/u,g)}else o===null?m=new l(i.count*a):m=new l(o,h,i.count*a),f=new Tt(m,a,g);if(i.sparse!==void 0){const _=uo.SCALAR,x=Pi[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,b=new x(r[1],v,i.sparse.count*_),T=new l(r[2],y,i.sparse.count*a);o!==null&&(f=new Tt(f.array.slice(),f.itemSize,f.normalized));for(let R=0,w=b.length;R<w;R++){const E=b[R];if(f.setX(E,T[R*a]),a>=2&&f.setY(E,T[R*a+1]),a>=3&&f.setZ(E,T[R*a+2]),a>=4&&f.setW(E,T[R*a+3]),a>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const a=n.manager.getHandler(r.uri);a!==null&&(o=a)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],a=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[a])return this.textureCache[a];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=r.name||o.name||"";const h=(s.samplers||{})[r.sampler]||{};return u.magFilter=sc[h.magFilter]||Ct,u.minFilter=sc[h.minFilter]||Qn,u.wrapS=rc[h.wrapS]||Ni,u.wrapT=rc[h.wrapT]||Ni,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[a]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const r=i.images[e],o=self.URL||self.webkitURL;let a=r.uri||"",l=!1;if(r.bufferView!==void 0)a=n.getDependency("bufferView",r.bufferView).then(function(d){l=!0;const h=new Blob([d],{type:r.mimeType});return a=o.createObjectURL(h),a});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(a).then(function(d){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(m){const f=new ft(m);f.needsUpdate=!0,h(f)}),t.load(Eo.resolveURL(d,s.path),g,void 0,p)})}).then(function(d){return l===!0&&o.revokeObjectURL(a),d.userData.mimeType=r.mimeType||iv(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Oe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Oe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const a=s.associations.get(r);r=s.extensions[Oe.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,a)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let a=this.cache.get(o);a||(a=new Fc,Wt.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,a.sizeAttenuation=!1,this.cache.add(o,a)),n=a}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let a=this.cache.get(o);a||(a=new Go,Wt.prototype.copy.call(a,n),a.color.copy(n.color),this.cache.add(o,a)),n=a}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let a=this.cache.get(o);a||(a=n.clone(),s&&(a.vertexColors=!0),r&&(a.flatShading=!0),i&&(a.normalScale&&(a.normalScale.y*=-1),a.clearcoatNormalScale&&(a.clearcoatNormalScale.y*=-1)),this.cache.add(o,a),this.associations.set(a,this.associations.get(n))),n=a}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Wo}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},a=s.extensions||{},l=[];if(a[Oe.KHR_MATERIALS_UNLIT]){const d=i[Oe.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),l.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new Te(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;o.color.fromArray(h),o.opacity=h[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,ke)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Mn);const u=s.alphaMode||fo.OPAQUE;if(u===fo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===fo.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Yn&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Se(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}return s.occlusionTexture!==void 0&&r!==Yn&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Yn&&(o.emissive=new Te().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==Yn&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,ke)),Promise.all(l).then(function(){const d=new r(o);return s.name&&(d.name=s.name),In(d,s),t.associations.set(d,{materials:e}),s.extensions&&os(i,d,s),d})}createUniqueName(e){const t=We.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(a){return ac(a,o,t)})}const r=[];for(let o=0,a=e.length;o<a;o++){const l=e[o],u=nv(l),d=i[u];if(d)r.push(d.promise);else{let h;l.extensions&&l.extensions[Oe.KHR_DRACO_MESH_COMPRESSION]?h=s(l):h=ac(new qt,l,t),i[u]={primitive:l,promise:h},r.push(h)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let a=0,l=r.length;a<l;a++){const u=r[a].material===void 0?Qx(this.cache):this.getDependency("material",r[a].material);o.push(u)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(a){const l=a.slice(0,a.length-1),u=a[a.length-1],d=[];for(let p=0,g=u.length;p<g;p++){const m=u[p],f=r[p];let _;const x=l[p];if(f.mode===Gt.TRIANGLES||f.mode===Gt.TRIANGLE_STRIP||f.mode===Gt.TRIANGLE_FAN||f.mode===void 0)_=s.isSkinnedMesh===!0?new _g(m,x):new xt(m,x),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),f.mode===Gt.TRIANGLE_STRIP?_.geometry=nc(_.geometry,mc):f.mode===Gt.TRIANGLE_FAN&&(_.geometry=nc(_.geometry,yo));else if(f.mode===Gt.LINES)_=new Nc(m,x);else if(f.mode===Gt.LINE_STRIP)_=new Vo(m,x);else if(f.mode===Gt.LINE_LOOP)_=new bg(m,x);else if(f.mode===Gt.POINTS)_=new wg(m,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(_.geometry.morphAttributes).length>0&&tv(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),In(_,s),f.extensions&&os(i,_,f),t.assignFinalMaterial(_),d.push(_)}for(let p=0,g=d.length;p<g;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return d[0];const h=new Kn;t.associations.set(h,{meshes:e});for(let p=0,g=d.length;p<g;p++)h.add(d[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new St(fu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new zo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),In(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,o=[],a=[];for(let l=0,u=r.length;l<u;l++){const d=r[l];if(d){o.push(d);const h=new Pe;s!==null&&h.fromArray(s.array,l*16),a.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ko(o,a)})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],r=[],o=[],a=[];for(let l=0,u=n.channels.length;l<u;l++){const d=n.channels[l],h=n.samplers[d.sampler],p=d.target,g=p.node,m=n.parameters!==void 0?n.parameters[h.input]:h.input,f=n.parameters!==void 0?n.parameters[h.output]:h.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),r.push(this.getDependency("accessor",f)),o.push(h),a.push(p)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a)]).then(function(l){const u=l[0],d=l[1],h=l[2],p=l[3],g=l[4],m=[];for(let _=0,x=u.length;_<x;_++){const v=u[_],y=d[_],b=h[_],T=p[_],R=g[_];if(v===void 0)continue;v.updateMatrix();let w;switch(Pn[R.path]){case Pn.weights:w=_s;break;case Pn.rotation:w=si;break;case Pn.position:case Pn.scale:default:w=xs;break}const E=v.name?v.name:v.uuid,D=T.interpolation!==void 0?Jx[T.interpolation]:zi,H=[];Pn[R.path]===Pn.weights?v.traverse(function(L){L.morphTargetInfluences&&H.push(L.name?L.name:L.uuid)}):H.push(E);let W=b.array;if(b.normalized){const L=Lo(W.constructor),P=new Float32Array(W.length);for(let N=0,z=W.length;N<z;N++)P[N]=W[N]*L;W=P}for(let L=0,P=H.length;L<P;L++){const N=new w(H[L]+"."+Pn[R.path],y.array,W,D);T.interpolation==="CUBICSPLINE"&&(N.createInterpolant=function($){const G=this instanceof si?$x:Jc;return new G(this.times,this.values,this.getValueSize()/3,$)},N.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(N)}}const f=n.name?n.name:"animation_"+e;return new Pg(f,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let a=0,l=i.weights.length;a<l;a++)o.morphTargetInfluences[a]=i.weights[a]}),r})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"";return function(){const o=[],a=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});a&&o.push(a),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(h){return i._getNodeRef(i.cameraCache,s.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){o.push(h)});const l=[],u=s.children||[];for(let h=0,p=u.length;h<p;h++)l.push(i.getDependency("node",u[h]));const d=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([Promise.all(o),Promise.all(l),d])}().then(function(o){const a=o[0],l=o[1],u=o[2];let d;if(s.isBone===!0?d=new Dc:a.length>1?d=new Kn:a.length===1?d=a[0]:d=new Ze,d!==a[0])for(let h=0,p=a.length;h<p;h++)d.add(a[h]);if(s.name&&(d.userData.name=s.name,d.name=r),In(d,s),s.extensions&&os(n,d,s),s.matrix!==void 0){const h=new Pe;h.fromArray(s.matrix),d.applyMatrix4(h)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,u!==null&&d.traverse(function(h){h.isSkinnedMesh&&h.bind(u,sv)});for(let h=0,p=l.length;h<p;h++)d.add(l[h]);return d})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Kn;n.name&&(s.name=i.createUniqueName(n.name)),In(s,n),n.extensions&&os(t,s,n);const r=n.nodes||[],o=[];for(let a=0,l=r.length;a<l;a++)o.push(i.getDependency("node",r[a]));return Promise.all(o).then(function(a){for(let u=0,d=a.length;u<d;u++)s.add(a[u]);const l=u=>{const d=new Map;for(const[h,p]of i.associations)(h instanceof Wt||h instanceof ft)&&d.set(h,p);return u.traverse(h=>{const p=i.associations.get(h);p!=null&&d.set(h,p)}),d};return i.associations=l(s),s})}}function ov(c,e,t){const n=e.attributes,i=new Ui;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],a=o.min,l=o.max;if(a!==void 0&&l!==void 0){if(i.set(new O(a[0],a[1],a[2]),new O(l[0],l[1],l[2])),o.normalized){const u=Lo(Pi[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new O,a=new O;for(let l=0,u=s.length;l<u;l++){const d=s[l];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(a.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),a.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),a.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const m=Lo(Pi[h.componentType]);a.multiplyScalar(m)}o.max(a)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}c.boundingBox=i;const r=new ki;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,c.boundingSphere=r}function ac(c,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(a){c.setAttribute(o,a)})}for(const r in n){const o=Co[r]||r.toLowerCase();o in c.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!c.index){const r=t.getDependency("accessor",e.indices).then(function(o){c.setIndex(o)});i.push(r)}return In(c,e),ov(c,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ev(c,e.targets,t):c})}let Zn,kt,nn,Ro,po,mo,er,Ei,as,Zt;new Zc;const sr=[],Po=[];av();cv();Qc();function av(){Zn=new St(30,window.innerWidth/window.innerHeight,.5,1e3),Zn.position.set(-80,70,-80),Zn.lookAt(0,0,0),kt=new pg,kt.fog=new Bo(0,500,1e3),nn=new Ic({antialias:!0}),nn.setSize(window.innerWidth,window.innerHeight),nn.setClearColor(kt.fog.color),nn.outputEncoding=ke,nn.shadowMap.enabled=!0,nn.shadowMap.type=cc,document.body.appendChild(nn.domElement),new Rx(Zn,nn.domElement).listenToKeyEvents(window),Ro=new sh,document.body.appendChild(Ro.dom);const e=new Hg(6710886);kt.add(e);const t=new Gc(16777215,1.2),n=20;t.position.set(-n,n,n),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.left=-n,t.shadow.camera.right=n,t.shadow.camera.top=n,t.shadow.camera.bottom=-n,t.shadow.camera.far=3*n,t.shadow.camera.near=n,kt.add(t),new e0;const i=new kc,s=new to({map:i.load("assets/terrain.jpg")}),r=new t0(50,50,1);r.rotateX(-Math.PI/2);const o=new to({color:7829367}),a=new xt(r,s);a.receiveShadow=!0,kt.add(a),a.position.set(0,-.5,0);const l=new Sg(r),u=new Nc(l,new Go({color:11210511}));kt.add(u),u.position.set(0,-.5,0);const d=new Dl(.2,8,8),h=new to({color:16711680});mo=new xt(d,h),mo.visible=!1,kt.add(mo);const p=new Dl(1,20,20,10,10),g=new Tg({color:10561036});er=new xt(p,g),er.castShadow=!0,sr.push(er),kt.add(er);function m(){new Zc().setPath("assets/models/").load("scene.glb",f)}function f(x){let v=null;v=x.scene,v!=null?(console.log("Model loaded:  "+v),x.scene.rotateY(Math.PI/2),x.scene.translateZ(20),x.scene.translateX(-2.5),kt.add(x.scene)):console.log("Load FAILED.  ")}m();const _=new n0(100,100);po=new xt(_,o),po.visible=!1,kt.add(po),window.addEventListener("resize",lv)}function lv(){Zn.aspect=window.innerWidth/window.innerHeight,Zn.updateProjectionMatrix(),nn.setSize(window.innerWidth,window.innerHeight)}function cv(){Ei=new wx,Ei.gravity.set(0,-10,0);const c=new vs(new M(24.5,24.5,1)),e=new ue({mass:0});e.addShape(c),e.quaternion.setFromEuler(-Math.PI/2,0,0),Ei.addBody(e),e.position.set(0,-1,0);const t=new vs(new M(2,2,5)),n=new ue({isTrigger:!0});n.addShape(t),n.position.set(5,1,0);const i=new Yl(1);Zt=new ue({mass:5}),Zt.addShape(i),Zt.position.set(0,5,0),Po.push(Zt),Ei.addBody(Zt);const s=new Yl(.1);as=new ue({mass:0}),as.addShape(s),as.collisionFilterGroup=0,as.collisionFilterMask=0,Ei.addBody(as)}window.addEventListener("keydown",c=>{console.log(c),c.key=="p"&&(Zt.velocity.y=15,Zt.velocity.x=15),c.key=="q"&&(Zt.velocity.z=-4),c.key=="d"&&(Zt.velocity.z=4),c.key=="z"&&(Zt.velocity.x=4),c.key=="s"&&(Zt.velocity.x=-4)});function Qc(){requestAnimationFrame(Qc),Ei.fixedStep();for(let c=0;c!==sr.length;c++)sr[c].position.copy(Po[c].position),sr[c].quaternion.copy(Po[c].quaternion);nn.render(kt,Zn),Ro.update()}
//# sourceMappingURL=index-efc225e5.js.map
