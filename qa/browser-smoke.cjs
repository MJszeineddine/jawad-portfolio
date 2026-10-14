const { chromium } = require('playwright-core');
const fs = require('fs');
(async () => {
  const browser = await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',args:['--no-first-run','--disable-default-apps']});
  const checks = [];
  const errors = [];
  function ok(name, condition, details='') { checks.push({name,pass:!!condition,details}); if(!condition) throw new Error(name+': '+details); }
  for (const mode of [{name:'desktop',width:1440,height:900},{name:'tablet',width:768,height:1024},{name:'mobile',width:390,height:844},{name:'small-phone',width:320,height:720}]) {
    const page=await browser.newPage({viewport:{width:mode.width,height:mode.height},deviceScaleFactor:1,permissions:['clipboard-read','clipboard-write']});
    page.on('pageerror',e=>errors.push(mode.name+': '+e.message));
    await page.goto('http://127.0.0.1:4187/',{waitUntil:'networkidle',timeout:30000});
    ok(mode.name+' hero',await page.locator('h1').textContent().then(x=>x.includes('Engineering the systems')));
    ok(mode.name+' expertise',await page.locator('.expertise-card').count()===4);
    ok(mode.name+' four buyer-intent service links',await page.locator('a.expertise-more').count()===4);
    ok(mode.name+' case studies',await page.locator('.project-card').count()===6);
    ok(mode.name+' solution tabs',await page.getByRole('tab').count()===4);
    ok(mode.name+' 20 solution examples',await page.locator('.solution-card').count()===20);
    ok(mode.name+' honest solution label',await page.getByText('service examples, not claims of 80 past client deliveries.',{exact:false}).count()===1);
    await page.getByRole('tab',{name:/AI systems & integrations/}).click();
    ok(mode.name+' solutions switch tabs',await page.locator('.solution-card').count()===20 && await page.getByRole('tabpanel').getAttribute('aria-labelledby')==='tab-ai');
    await page.getByRole('tab',{name:/Full-stack, SaaS & mobile/}).click();
    ok(mode.name+' no horizontal overflow',await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),String(await page.evaluate(()=>({sw:document.documentElement.scrollWidth,width:innerWidth}))));
    ok(mode.name+' contact CTA',await page.locator('a[href="#contact"]').count()>=1);
    if(mode.name==='mobile' || mode.name==='small-phone'){
      const menu=page.getByRole('button',{name:'Open navigation'});
      ok('mobile menu initially collapsed',await menu.getAttribute('aria-expanded')==='false');
      await menu.click();
      ok('mobile menu opens',await page.getByRole('button',{name:'Close navigation'}).getAttribute('aria-expanded')==='true');
      await page.locator('.navigation a[href="#work"]').click();
      ok('mobile menu closes after navigation',await page.getByRole('button',{name:'Open navigation'}).getAttribute('aria-expanded')==='false');
    }
    const form=page.locator('.inquiry-form');
    ok(mode.name+' invalid disabled',await form.getByRole('button',{name:/Open email draft/}).isDisabled());
    await form.locator('input[name="client"]').fill('Sample Client');
    await form.locator('input[name="replyTo"]').fill('buyer@example.com');
    await form.locator('textarea[name="summary"]').fill('I need a production-ready SaaS with existing APIs.');
    ok(mode.name+' valid enabled',await form.getByRole('button',{name:/Open email draft/}).isEnabled());
    await form.getByRole('button',{name:/Copy brief instead/}).click();
    await form.getByRole('button',{name:/Copied/}).waitFor({timeout:4000});
    ok(mode.name+' copy button feedback',await form.getByRole('button',{name:/Copied/}).isVisible());
    await page.evaluate(() => {if(document.activeElement instanceof HTMLElement) document.activeElement.blur(); window.scrollTo(0,0)});
    await page.screenshot({path:'qa/'+mode.name+'.png',fullPage:true});
    await page.close();
  }
  for (const slug of ['full-stack-saas-engineering','ai-integration-engineering','business-automation-data','production-rescue-reliability']) {
    const url='http://127.0.0.1:4187/services/'+slug+'.html';
    const response=await browser.newPage();
    await response.goto(url,{waitUntil:'domcontentloaded',timeout:10000});
    ok('SEO landing page '+slug,await response.locator('h1').count()===1 && await response.locator('link[rel="canonical"]').count()===1 && await response.locator('a[href^="mailto:"]').count()>=1);
    await response.close();
  }
  ok('No client-side exceptions',errors.length===0,errors.join(' | '));
  fs.writeFileSync('qa/results.json',JSON.stringify({timestamp:new Date().toISOString(),checks,errors},null,2)+'\n');
  console.log(JSON.stringify({pass:checks.filter(x=>x.pass).length,total:checks.length,errors,screenshots:['qa/desktop.png','qa/tablet.png','qa/mobile.png','qa/small-phone.png']}));
  await browser.close();
})().catch(e=>{console.error('SMOKE FAILED:',e.stack);process.exit(1)});
