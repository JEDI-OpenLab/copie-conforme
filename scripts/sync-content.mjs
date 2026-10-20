// Copie les documents du dépôt (fichiers Markdown) vers src/content/docs/
// pour le site Starlight. Les fichiers du dépôt restent la seule source :
// ils sont lisibles tels quels sur GitHub, et ce script les adapte au site.
//
// Adaptations : titre H1 → frontmatter (raccourci du suffixe « · « Copie
// conforme ? » »), liens .md → routes du site.

import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, posix } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'src/content/docs');
const BASE = '/copie-conforme';

// Fichier source → route du site, et titre imposé le cas échéant
const pages = {
	'README.md': { route: 'presentation', title: 'Le projet' },
	'conception/fiche-de-conception.md': { route: 'conception/fiche-de-conception' },
	'conception/macro-scenario.md': { route: 'conception/macro-scenario' },
	'conception/scenario-detaille.md': { route: 'conception/scenario-detaille' },
	'journal/journal-de-conception.md': { route: 'journal' },
	'LICENSE.md': { route: 'licence' },
};

function resolveTarget(fromFile, href) {
	if (/^(https?:|mailto:|#)/.test(href)) return null;
	const [path, hash] = href.split('#');
	const target = posix.normalize(posix.join(posix.dirname(fromFile), path));
	const key = target === '.' ? 'README.md' : target;
	const page = pages[key];
	if (page) return `${BASE}/${page.route}/${hash ? '#' + hash : ''}`;
	return null;
}

function transform(file, src, forcedTitle) {
	const lines = src.split('\n');

	// Titre H1 → frontmatter
	const h1 = lines.findIndex((l) => l.startsWith('# '));
	const title = forcedTitle ?? lines[h1].slice(2).replace(/\s*·\s*«.*»\s*$/, '').trim();
	lines.splice(h1, 1);

	let body = lines.join('\n').replace(/^\n+/, '');

	// Liens vers les autres documents du dépôt
	body = body.replace(/\]\(([^)\s]+)\)/g, (m, href) => {
		const url = resolveTarget(file, href);
		return url ? `](${url})` : m;
	});

	return [`---`, `title: ${JSON.stringify(title)}`, `---`, ``].join('\n') + body;
}

rmSync(outDir, { recursive: true, force: true });
for (const [file, { route, title }] of Object.entries(pages)) {
	const src = readFileSync(join(root, file), 'utf8');
	const dest = join(outDir, route + '.md');
	mkdirSync(dirname(dest), { recursive: true });
	writeFileSync(dest, transform(file, src, title));
}

console.log(`sync-content : ${Object.keys(pages).length} pages copiées dans src/content/docs/`);
