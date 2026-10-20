// Lit l'état d'avancement (tableau du README) et le journal de conception au
// moment de la construction du site : la page d'accueil se met à jour dès que
// ces deux fichiers changent, sans rien recopier à la main.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const read = (f: string) => readFileSync(join(process.cwd(), f), 'utf8');
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

// Liens Markdown du README → routes du site (voir scripts/sync-content.mjs)
const routes: Record<string, string> = {
	'conception/fiche-de-conception.md': 'conception/fiche-de-conception/',
	'conception/macro-scenario.md': 'conception/macro-scenario/',
	'conception/scenario-detaille.md': 'conception/scenario-detaille/',
	'journal/journal-de-conception.md': 'journal/',
};

export type Etape = { phase: string; livrable: string; href?: string; etat: string; fait: boolean };

export function avancement(): Etape[] {
	const lines = read('README.md').split('\n');
	const start = lines.findIndex((l) => l.startsWith("## État d'avancement"));
	const rows: Etape[] = [];
	for (const l of lines.slice(start + 1)) {
		if (l.startsWith('## ')) break;
		if (!l.startsWith('|') || /^\|\s*-/.test(l) || l.includes('Étape (ADDIE)')) continue;
		const [phase, livrable, etat] = l.split('|').slice(1, -1).map((c) => c.trim());
		const link = livrable.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
		const route = link && routes[link[2]];
		rows.push({
			phase,
			livrable: link ? link[1] : livrable,
			href: route ? `${base}/${route}` : undefined,
			etat,
			fait: !/à venir|à faire/i.test(etat),
		});
	}
	return rows;
}

export type Entree = { date: string; titre: string; texte: string };

export function journal(): Entree[] {
	const entries: Entree[] = [];
	for (const block of read('journal/journal-de-conception.md').split(/^## /m).slice(1)) {
		const [head, ...rest] = block.split('\n');
		const [date, titre] = head.split(' · ').map((s) => s.trim());
		const para = rest.join('\n').trim().split(/\n\n/)[0];
		const texte = para
			.replace(/^- /gm, '')
			.replace(/\*\*([^*]+)\*\*/g, '$1')
			.replace(/\s+/g, ' ')
			.trim();
		entries.push({ date, titre, texte });
	}
	return entries;
}
