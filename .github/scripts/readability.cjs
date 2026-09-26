const {chromium}=require('playwright');
const fs=require('node:fs');
(async()=>{
  const browser=await chromium.launch({executablePath:'/usr/bin/google-chrome',headless:true});
  const css=fs.readFileSync('assets/css/site-polish.css','utf8');
  fs.mkdirSync('readability-results',{recursive:true});
  const results=[];
  for(const width of [360,1366]){
    const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
    await page.route('**/assets/css/site-polish.css*',route=>route.fulfill({status:200,contentType:'text/css',body:css}));
    await page.goto('https://home.hyunseo.kr/#projects',{waitUntil:'networkidle'});
    await page.evaluate(()=>document.fonts.ready);
    const frames=await page.locator('.projects .project-card-media').evaluateAll(elements=>elements.map(e=>{
      const img=e.querySelector('img'), frame=e.getBoundingClientRect(), image=img.getBoundingClientRect();
      return {name:img.alt,frame:[frame.width,frame.height],image:[image.width,image.height],fit:getComputedStyle(img).objectFit,padding:getComputedStyle(e).padding};
    }));
    for(const frame of frames){
      if(Math.abs(frame.frame[0]-frame.image[0])>1 || Math.abs(frame.frame[1]-frame.image[1])>1.5 || frame.fit!=='cover') throw new Error(JSON.stringify({width,...frame}));
    }
    results.push({width,frames});
    if(width===360) await page.locator('.projects .project-card-media').first().scrollIntoViewIfNeeded();
    await page.screenshot({path:`readability-results/projects-${width}.png`});
    await page.close();
  }
  fs.writeFileSync('readability-results/metrics.json',JSON.stringify(results,null,2));
  console.log(JSON.stringify(results));
  await browser.close();
})().catch(error=>{console.error(error);process.exit(1)});
