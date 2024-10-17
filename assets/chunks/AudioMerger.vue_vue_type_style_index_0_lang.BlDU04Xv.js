import{d as A,s as D,y as x,o as O,c as R,ai as _,ak as S,j as w}from"./framework.C3k1klfB.js";const M={class:"audio-merge"},F=w("span",null," Audio Files ",-1),I=A({__name:"AudioMerger",setup(N){const m=D("");x(async()=>{const e=new URL(window.location.href).searchParams.get("audioData");if(e)try{const n=atob(e);n&&(m.value=n,f())}catch(n){console.log(n)}});const g=(a,e,n)=>{if(n===0)return e;const o=Math.floor(n*e.sampleRate),l=a.createBuffer(e.numberOfChannels,e.length+o,e.sampleRate);for(let t=0;t<e.numberOfChannels;t+=1)l.getChannelData(t).set(e.getChannelData(t),o);return l},v=(a,e)=>{const n=Math.max(...e.map(r=>r.numberOfChannels));let o=0;for(let r=0;r<e.length;r++)o+=e[r].length;const l=a.createBuffer(n,o,e[0].sampleRate);let t=0;for(let r=0;r<e.length;r++){const u=e[r];for(let i=0;i<u.numberOfChannels;i+=1)l.getChannelData(i).set(u.getChannelData(i),t);t+=u.length}return l},C=a=>{const e=a.length*a.numberOfChannels;let n=new Float32Array(e);for(let o=0;o<a.length;o++)for(let l=0;l<a.numberOfChannels;l+=1){const t=o*a.numberOfChannels+l;n[t]=a.getChannelData(l)[o]}return n},p=(a,e,n)=>{for(var o=0;o<n.length;o++)a.setUint8(e+o,n.charCodeAt(o))},B=a=>{const e=C(a),n=1,o=a.numberOfChannels,l=a.sampleRate,t=16,r=l*(t/8)*o,u=t/8*o,i=e.length*(t/8);let d=new ArrayBuffer(44+i),s=new DataView(d);p(s,0,"RIFF"),s.setUint32(4,i+44-8,!0),p(s,8,"WAVE"),p(s,12,"fmt "),s.setUint32(16,16,!0),s.setUint16(20,n,!0),s.setUint16(22,o,!0),s.setUint32(24,l,!0),s.setUint32(28,r,!0),s.setUint32(32,u,!0),s.setUint16(34,t,!0),p(s,36,"data"),s.setUint32(40,i,!0);for(let c=0;c<e.length;c++){let h=Math.max(-1,Math.min(1,e[c]));s.setInt16(44+c*2,h<0?h*32768:h*32767,!0)}return s},f=async()=>{let a=window.AudioContext||window.webkitAudioContext||!1;if(!a){alert("Please use the latest Chrome or Firefox version.");return}const e=new a({sampleRate:44100});try{const n=[],o=m.value.split(`
`),l=[];let t=null;for(const s of o){if(!s)continue;const c=parseFloat(s);if(isNaN(c)){n.push(new URL(s).pathname.split("/").slice(-1)[0].split(".")[0]),t!=null&&(l.push(t),t=null);const h=await(await fetch(s.trim())).arrayBuffer();t=await new Promise(y=>{e.decodeAudioData(h,U=>y(U))})}else{if(c<=0||!t)continue;t=g(e,t,c)}}t!=null&&(l.push(t),t=null);const r=v(e,l),u=B(r),i=new Blob([u],{type:"audio/wav"}),d=document.createElement("a");d.href=URL.createObjectURL(i),d.download=`merged - ${n.join("-")}.wav`,d.click()}catch{alert("Failed to download some voice line parts.")}await e.close()};return(a,e)=>(O(),R("div",M,[F,_(w("textarea",{"onUpdate:modelValue":e[0]||(e[0]=n=>m.value=n),rows:"10",placeholder:"urls or delays"},null,512),[[S,m.value]]),w("span",null,[w("button",{onClick:f},"Merge")])]))}});export{I as _};
