const {chromium}=require('playwright');
const fs=require('node:fs');
(async()=>{
  const browser=await chromium.launch({executablePath:'/usr/bin/google-chrome',headless:true});
  const css=fs.readFileSync('assets/css/site-polish.css','utf8');
  fs.mkdirSync('readability-results',{recursive:true});
  const results=[];
  const cases=[{name:'before-390',width:390,after:false},{name:'after-360',width:360,after:true},{name:'after-390',width:390,after:true},{name:'after-1366',width:1366,after:true}];
  for(const config of cases){
    const mobile=config.width<768;
    const context=await browser.newContext({viewport:{width:config.width,height:mobile?844:900},deviceScaleFactor:1,isMobile:mobile,hasTouch:mobile,reducedMotion:'reduce'});
    if(config.after) await context.route('**/assets/css/site-polish.css*',route=>route.fulfill({status:200,contentType:'text/css',body:css}));
    const page=await context.newPage();
    await page.goto('https://home.hyunseo.kr/',{waitUntil:'networkidle',timeout:60000});
    await page.evaluate(()=>document.fonts.ready);
    for(const section of ['about','publications','projects','cv']){
      if(section!=='about'){
        if(mobile) await page.getByRole('button',{name:'Toggle navigation',exact:true}).click();
        await page.locator(`[data-section-link="${section}"]`).click();
        await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
      }
      await page.screenshot({path:`readability-results/${config.name}-${section}.png`});
      const data=await page.evaluate((section)=>{
        const main=document.getElementById(section), st=e=>({font:getComputedStyle(e).fontSize,line:getComputedStyle(e).lineHeight,color:getComputedStyle(e).color,width:Math.round(e.getBoundingClientRect().width)});
        return {section,viewport:innerWidth,scrollWidth:document.documentElement.scrollWidth,active:document.querySelector('[data-section-link][aria-current]')?.textContent.trim(),sectionTop:Math.round(main.getBoundingClientRect().top),navExpanded:document.querySelector('[data-nav-toggle]').getAttribute('aria-expanded'),introTop:Math.round(document.querySelector('.home-intro').getBoundingClientRect().top+scrollY),profileHeight:Math.round(document.querySelector('.profile').getBoundingClientRect().height),lede:st(document.querySelector('.home-lede')),project:st(document.querySelector('.card-text')),search:st(document.getElementById('bibsearch')),buttonHeight:Math.round(document.querySelector('.publications .links a').getBoundingClientRect().height),overflowElements:[...main.querySelectorAll('*')].filter(e=>e.getBoundingClientRect().width>0 && e.getBoundingClientRect().right>innerWidth+1).slice(0,5).map(e=>({tag:e.tagName,cls:e.className,right:Math.round(e.getBoundingClientRect().right)}))};
      },section);
      results.push({case:config.name,...data});
      fs.writeFileSync('readability-results/metrics.json',JSON.stringify(results,null,2));
      if(config.after && data.scrollWidth>data.viewport+1) throw new Error(`${config.name} ${section}: horizontal overflow`);
      if(config.after && mobile && data.navExpanded!=='false') throw new Error('Mobile menu did not close');
      if(section==='publications' && config.after && config.width===390){
        await page.locator('#bibsearch').fill('KALO');
        await page.locator('.bibliography > li.unloaded').first().waitFor({state:'attached'});
        if(await page.locator('.bibliography > li:not(.unloaded)').count()!==1) throw new Error('KALO filter failed');
        await page.locator('#bibsearch').fill('');
        await page.locator('.bibliography > li.unloaded').first().waitFor({state:'detached'});
        if(await page.locator('.bibliography > li:not(.unloaded)').count()!==6) throw new Error('Filter reset failed');
      }
    }
    if(config.name==='after-390'){
      await page.emulateMedia({colorScheme:'dark'});
      await page.reload({waitUntil:'networkidle'});
      await page.screenshot({path:'readability-results/after-390-dark.png'});
    }
    await context.close();
  }
  fs.writeFileSync('readability-results/metrics.json',JSON.stringify(results,null,2));
  console.log(JSON.stringify(results));
  await browser.close();
})().catch(error=>{console.error(error);process.exit(1)});
