const {chromium}=require('playwright');
const fs=require('node:fs');
(async()=>{
  const browser=await chromium.launch({executablePath:'/usr/bin/google-chrome',headless:true});
  const page=await browser.newPage({viewport:{width:360,height:900},isMobile:true,hasTouch:true,reducedMotion:'reduce'});
  await page.goto('https://home.hyunseo.kr/#projects',{waitUntil:'networkidle'});
  await page.evaluate(()=>document.fonts.ready);
  fs.mkdirSync('readability-results',{recursive:true});
  await page.screenshot({path:'readability-results/projects-mobile.png'});
  const data=await page.evaluate(()=>{
    const projects=document.querySelector('.projects');
    const cards=[...projects.querySelectorAll('.row .col')];
    return {viewport:innerWidth,scrollWidth:document.documentElement.scrollWidth,featured:projects.querySelector('.project-feature')?.textContent.trim(),headings:[...projects.querySelectorAll(':scope > h3')].map(e=>e.textContent),cards:cards.map(e=>({title:e.querySelector('h3').textContent,summary:e.querySelector('.card-text').textContent,width:Math.round(e.getBoundingClientRect().width),left:Math.round(e.getBoundingClientRect().left),titleWeight:getComputedStyle(e.querySelector('h3')).fontWeight}))};
  });
  fs.writeFileSync('readability-results/metrics.json',JSON.stringify(data,null,2));
  console.log(JSON.stringify(data));
  if(data.scrollWidth>data.viewport) throw new Error('Horizontal overflow');
  await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
