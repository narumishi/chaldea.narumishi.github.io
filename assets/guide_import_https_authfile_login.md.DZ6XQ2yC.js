import{_ as e,c as t,o as a,a4 as i}from"./chunks/framework.C3k1klfB.js";const g=JSON.parse('{"title":"Login via Transfer File(JP/NA)","description":"","frontmatter":{},"headers":[],"relativePath":"guide/import_https/authfile_login.md","filePath":"guide/import_https/authfile_login.md","lastUpdated":1708359343000}'),o={name:"guide/import_https/authfile_login.md"},n=i('<h1 id="login-via-transfer-file-jp-na" tabindex="-1">Login via Transfer File(JP/NA) <a class="header-anchor" href="#login-via-transfer-file-jp-na" aria-label="Permalink to &quot;Login via Transfer File(JP/NA)&quot;">​</a></h1><p>Read your account auth file to create login request to FGO server. Then import the response data to chaldea app.</p><div class="danger custom-block"><p class="custom-block-title">IMPORTANT</p><p>JP 2.87.0 (updated on 2024.2.14) has changed the verification method, and the in-app authfile login will not return error.</p><p><strong>For account security, please do not continue using in-app auth file login!!!</strong></p><p><a href="./transfer_data">Transfer Data</a> and Official fgo client + mitmproxy/Charles sniffing is still valid.</p></div><div class="warning custom-block"><p class="custom-block-title">Declaimer</p><p>It reads your account auth file! Breaking Term of Service (ToS). Use in RISK! I take no responsibility for anything.</p></div><p>Auth file is <code>54cc(Android)</code> or <code>authsave2.dat(iOS)</code> referred in <a href="./transfer_data">Transfer Data</a></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Keep your account file in a safe place! if you are not sure the UserAgent and deviceinfo are the same with your real device which fgo is running, DO NOT contact FGO official support to restore account or reset Transfer Code. They will verify your login device.</p><p>Auth file is not &quot;Transfer/Bind Code&quot;, you can login with the auth multiple times. Only when you login at another device by consuming the transfer code, the auth file is expired, you have to read new auth file again.</p></div><p>The app will:</p><ol><li>read 54cc/authsave2</li><li>select <code>ZSv/....</code> string from above file</li><li>simulate login</li></ol><p>You can import file to chaldea app or just copy the text to app.</p><p>Additionally, you can set User-Agent, deviceInfo and Country(for NA). They are mainly device related params, you can leave them default if you don&#39;t know much about it.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>On <strong>Android/iOS</strong>, <code>UserAgent</code> and <code>deviceInfo</code> can be detected via &quot;Read this Device&#39;s info&quot; button.</p><p>Remember to use on the same device with FGO.</p></div><p>Ref: <a href="https://github.com/hexstr/FGODailyBonus" target="_blank" rel="noreferrer">hexstr/FGODailyBonus</a>。</p><p><a href="./deep">.</a></p>',13),r=[n];function s(l,c,d,p,u,h){return a(),t("div",null,r)}const m=e(o,[["render",s]]);export{g as __pageData,m as default};
