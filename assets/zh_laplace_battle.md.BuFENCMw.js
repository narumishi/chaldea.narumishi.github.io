import{_ as l,c as a,o as i,a4 as e}from"./chunks/framework.C3k1klfB.js";const f=JSON.parse('{"title":"战斗模拟","description":"","frontmatter":{},"headers":[],"relativePath":"zh/laplace/battle.md","filePath":"zh/laplace/battle.md","lastUpdated":1688338812000}'),t={name:"zh/laplace/battle.md"},r=e('<h1 id="战斗模拟" tabindex="-1">战斗模拟 <a class="header-anchor" href="#战斗模拟" aria-label="Permalink to &quot;战斗模拟&quot;">​</a></h1><p><img src="https://data-cn.chaldea.center/public/battle.png" alt="战斗模拟示例" loading="lazy"></p><figcaption style="text-align:center;">战斗模拟示例</figcaption><p>总体操作方式和 <a href="https://www.fgo-teamup.com" target="_blank" rel="noreferrer">FGO Teamup</a> 一致，后端和 <a href="https://github.com/SharpnelXu/FGOSimulator" target="_blank" rel="noreferrer">FGO Simulator</a> 差不多，但使用了 Atlas Academy DB 的数据结构</p><h3 id="常规操作" tabindex="-1">常规操作 <a class="header-anchor" href="#常规操作" aria-label="Permalink to &quot;常规操作&quot;">​</a></h3><ul><li>选择敌方/我方目标、点击从者技能或御主技能图标发动技能，选择指令卡出卡即可</li><li>点击敌方或我方在场从者可查看当前状态、如当前所有 buff、当前技能和宝具（如宇宙凛宝具卡切换、泳装杀生院技能阶级提升）</li><li>场地特性: 显示当前关卡的场地特性，包括从者技能赋予的场地特性</li><li>操作记录: 显示战斗全程的用户操作记录以及&quot;即死&quot;和&quot;指令卡&quot;的伤害等详情。 <ul><li>点击 Tt 按钮切换详情模式/精简模式。</li><li>点击拍照按钮保存操作记录为图片。</li><li>点击技能或攻击的发动者/目标/技能均可查看当时各单位的详情</li></ul></li></ul><h3 id="底部栏" tabindex="-1">底部栏 <a class="header-anchor" href="#底部栏" aria-label="Permalink to &quot;底部栏&quot;">​</a></h3><ul><li>御主技能</li><li>概率阈值: 同编队配置中的概率阈值设置，随时可调</li><li>暴击星: 当前回合的暴击星总数(期望值)，如全体宝具每个敌方平均掉落 1.6 个，则总期望为 4.8 个。由于每个敌方单独判定星掉落，实际掉落可能为 3-6 个。</li><li><code>&gt;&gt;</code> 跳过当前场地: 清除当前场地(wave)的敌人并进入下一回合，不触发退场效果</li><li>撤销: 撤销上一个用户操作，如技能、出卡等操作</li><li>手动随机数模式(骰子按钮): 一切伤害随机数、buff 付与成功与否均可在执行到时手动选择</li><li>攻击: 选择指令卡</li></ul><h3 id="选择指令卡" tabindex="-1">选择指令卡 <a class="header-anchor" href="#选择指令卡" aria-label="Permalink to &quot;选择指令卡&quot;">​</a></h3><ul><li>未满 100NP 的宝具点击时可选择强制充能至 100</li><li>单次选择指令卡为普通攻击（蓝色框）、再次选择该指令卡为暴击攻击（红色框）</li><li>随机数：控制指令卡伤害计算的随机数值, 取值范围 0.900-1.099</li><li>七周年后: <ul><li>七周年后: Mighty Chain 即 QAB 连携同时获得三种首卡加成，且 QQQ 连携获得 20 星，首卡无效时仍可提供首卡加成</li><li>七周年前: QQQ 连携获得 10 星，首卡无效时不提供首卡加成</li></ul></li></ul><h3 id="右上角弹出菜单" tabindex="-1">右上角弹出菜单 <a class="header-anchor" href="#右上角弹出菜单" aria-label="Permalink to &quot;右上角弹出菜单&quot;">​</a></h3><ul><li>关卡: 跳转到当前关卡详情页</li><li>战斗日志: 提供比上述操作日志更详细的日志查询，包含每个 function 的执行情况和错误信息等</li><li>令咒: 宝具解放（单体充能 100%）</li><li>令咒: 灵基修复（单体 HP 回复 100%）</li><li>重置技能CD: 将目标的所有技能CD重置为0</li><li>发动自定义技能: 包含了快速即死(送拐)等操作，同时可以指定主动、被动和发动者用于模拟高难的技能。关于技能具体参加具体参见<a href="./faq#自定义技能">自定义技能</a></li></ul>',12),o=[r];function n(c,h,u,s,d,p){return i(),a("div",null,o)}const m=l(t,[["render",n]]);export{f as __pageData,m as default};
