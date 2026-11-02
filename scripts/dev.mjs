import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { parseArgs } from 'node:util';
const { values } = parseArgs({ options: {
  host: { type: 'string', default: '0.0.0.0' },
  port: { type: 'string', default: '4173' },
  strictPort: { type: 'boolean', default: false }
} });
const root = process.cwd();
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.json': 'application/json', '.txt': 'text/plain; charset=utf-8' };
const server = createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405).end(); return; }
  try {
    const path = decodeURIComponent(new URL(req.url, 'http://preview.invalid').pathname);
    if (path.split('/').some(part => part.startsWith('.'))) { res.writeHead(404).end(); return; }
    let file = resolve(root, '.' + path);
    if (file !== root && !file.startsWith(root + sep)) { res.writeHead(403).end(); return; }
    if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
    const data = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
    res.end(req.method === 'HEAD' ? undefined : data);
  } catch { res.writeHead(404, { 'Content-Type': 'text/plain' }).end('Not found'); }
});
server.on('error', error => { console.error(error.message); process.exit(1); });
server.listen(Number(values.port), values.host, () => console.log('TempLogic preview ready.'));
