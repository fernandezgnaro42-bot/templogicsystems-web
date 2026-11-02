import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
const root = process.cwd();
const pages = ['index.html','products.html','praecura.html','pilot-program.html','es/index.html','es/products.html','es/praecura.html','es/pilot-program.html'];
let links = 0;
for (const page of pages) {
  const text = await readFile(page, 'utf8');
  assert.equal((text.match(/<h1(?:\s|>)/g) ?? []).length, 1, `${page}: one h1`);
  assert(text.includes('aria-controls="main-navigation"'), `${page}: menu control`);
  assert(text.includes('type="module"'), `${page}: module loaded`);
  assert(!/CONCEPT VIEW|Preocura|Procura/.test(text), `${page}: obsolete labels`);
  if (page.endsWith('index.html')) {
    const heading = text.match(/<h1[^>]*>(.*?)<\/h1>/s)[1].replace(/<[^>]*>/g, ' ').replace(/\s+/g,' ').trim();
    assert.equal(heading, 'Better Diagnostics. Better Decisions. Better Lives.');
  }
  for (const match of text.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const href = match[1];
    if (/^(?:https?:|mailto:|data:|#)/.test(href)) continue;
    const [path, anchor] = href.split('#');
    let target = resolve(path.startsWith('/') ? root : dirname(resolve(page)), path.replace(/^\//,''));
    if ((await stat(target)).isDirectory()) target = resolve(target, 'index.html');
    assert((await stat(target)).isFile(), `${page}: missing ${href}`);
    if (anchor) assert((await readFile(target,'utf8')).includes(`id="${anchor}"`), `${page}: missing anchor ${href}`);
    links++;
  }
}
const fonts = await readFile('assets/fonts.css','utf8');
assert(fonts.includes('Space Grotesk') && fonts.includes('JetBrains Mono'));
assert(fonts.includes('data:font/woff2;base64,'));
console.log(`Passed: eight corporate pages; ${links} local links/assets; exact bilingual hero slogan; navigation, anchor and self-hosted font checks.`);
