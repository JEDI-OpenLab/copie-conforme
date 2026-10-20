// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://jedi-openlab.github.io',
	base: '/copie-conforme',
	integrations: [
		starlight({
			title: 'Copie conforme ?',
			description:
				"Serious game d'autoformation pour les enseignants du supérieur : une enquête sur une réponse d'IA, conçue et documentée en ressource éducative libre.",
			defaultLocale: 'root',
			locales: { root: { label: 'Français', lang: 'fr' } },
			logo: { src: './src/assets/jedi-openlab.png', alt: 'JEDI-OpenLab' },
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/JEDI-OpenLab/copie-conforme' },
			],
			customCss: ['./src/styles/custom.css'],
			components: {
				SiteTitle: './src/components/SiteTitle.astro',
				SocialIcons: './src/components/SocialIcons.astro',
			},
			lastUpdated: false,
			sidebar: [
				{ label: 'Accueil', link: '/' },
				{ label: 'Jouer', link: '/jouer/' },
				{ label: 'Le projet', link: '/presentation/' },
				{
					label: 'La conception',
					items: [
						{ label: 'Fiche de conception', link: '/conception/fiche-de-conception/' },
						{ label: 'Macro-scénario', link: '/conception/macro-scenario/' },
						{ label: 'Scénario détaillé', link: '/conception/scenario-detaille/' },
					],
				},
				{ label: 'Journal de conception', link: '/journal/' },
				{ label: 'Licence', link: '/licence/' },
			],
		}),
	],
});
