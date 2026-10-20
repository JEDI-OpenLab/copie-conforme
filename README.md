# Copie conforme ? Enquête sur une réponse d'IA

Un serious game d'autoformation pour les enseignants du supérieur, jouable dans le navigateur puis sur Moodle, conçu et documenté en ressource éducative libre.

Le dépôt publie le jeu au fur et à mesure de sa construction : la démarche de conception, les contenus des séquences, puis les activités et le cours exportables. Il suit le projet de l'analyse du besoin jusqu'au test, pour que d'autres équipes puissent le réutiliser, l'adapter ou s'en inspirer.

Site du projet : <https://jedi-openlab.github.io/copie-conforme/>

## Synopsis

Dimanche, 23 h 58. Deux minutes avant la fermeture du dépôt, la copie n° 17 arrive sur Moodle : un rapport de projet impeccable, douze références, pas une faute. Puis elle prend la parole. Elle connaît son texte mot pour mot, mais elle ne sait pas d'où elle vient. Et l'une de ses références n'existe pas.

L'enseignant joue son propre rôle et mène l'enquête avec elle. À chaque séquence, ils remontent d'un cran : la question « une IA a-t-elle été utilisée ? » est mal posée (La Grille) ; l'outil appartient à une chaîne de puces, de serveurs, de contrats et de travail invisible (La Chaîne) ; chaque réponse a un coût en énergie, en eau et en sol (Le Poids) ; la copie est faite de phrases qui ont eu des auteurs, dont elle a perdu la trace (La Matière) ; ces quatre constats dessinent un même mécanisme (Le Motif). À chaque étape, la copie apprend quelque chose sur elle-même, et l'enseignant gagne une carte pour son dossier d'enquête.

À la sixième séquence (L'Effort), l'enquête se retourne : la question n'était pas de savoir s'il y avait eu triche, mais ce qu'avait appris la personne qui a rendu la copie. La copie ne peut pas répondre à sa place : il faut un entretien. Selon la façon dont l'enseignant le mène, il découvre que la même copie contient à la fois des parties comprises, des parties produites sans être comprises et des références jamais vérifiées.

Le dossier se referme sur la seule question qui reste : qu'est-ce qui, dans ma consigne, rendait ces efforts facultatifs ?

## En bref

| | |
| --- | --- |
| Public | Enseignants et enseignants-chercheurs |
| Modalité | Autoformation individuelle, à distance, asynchrone |
| Durée | Environ 1 h 45 : un prologue, six séquences de 15 minutes, un épilogue ; deux hors-pistes facultatifs |
| Plateforme | Jeu web (navigateur), puis paquet SCORM pour Moodle 4.5. Mise en œuvre Moodle : activités natives, H5P, badges |
| Contenu | Une série de billets publiés sur le carnet [JEDI-OpenLab](https://jediopenlab.hypotheses.org/) (Hypothèses), une séquence par billet |
| Méthode | ADDIE pour l'ingénierie, D.I.C.E. pour la conception du jeu |
| Contexte | Conçu à Centrale Lille ; les appels à l'action renvoient au Pôle Accompagnement pédagogique de l'école |

## Pour qui ?

- Enseignants qui veulent comprendre ce qu'engage l'IA générative avant de décider d'une règle, d'une consigne ou d'une évaluation.
- Ingénieurs pédagogiques et services d'appui qui cherchent un parcours d'autoformation à adapter dans leur établissement.
- Concepteurs de jeux pédagogiques qui veulent un cas documenté de bout en bout.

## État d'avancement

| Étape (ADDIE) | Livrable | État |
| --- | --- | --- |
| Analyse | [Fiche de conception](conception/fiche-de-conception.md) | Version 0.1 |
| Design | [Macro-scénario](conception/macro-scenario.md) | Version 0.1 |
| Design | [Scénario détaillé](conception/scenario-detaille.md) | Version 0.1 |
| Développement | Pilote : prologue et séquence 1 | À venir |
| Implémentation | Test avec des enseignants volontaires | À venir |
| Évaluation | Bilan et version suivante | À venir |

Le [journal de conception](journal/journal-de-conception.md) date chaque étape.

## Structure

```text
copie-conforme/
  README.md          présentation, synopsis, état d'avancement
  LICENSE.md         licence
  journal/           journal de conception daté
  conception/        fiche de conception, macro-scénario, scénario détaillé
  sequences/         textes, diapositives, scripts audio, questions GIFT (à venir)
  moodle/            paquet SCORM pour Moodle 4.5 (à venir)
  src/, scripts/     site du projet (Astro Starlight), construit à partir des fichiers Markdown
```

## Le site

Le site reprend les documents du dépôt sans les recopier : `scripts/sync-content.mjs` les adapte à chaque construction, et la page d'accueil lit l'état d'avancement ci-dessus et le journal de conception. Il est publié sur GitHub Pages à chaque push sur `main` (Settings → Pages → Source : « GitHub Actions »).

```bash
npm install
npm run dev
```

## Adapter le jeu

Les appels à l'action renvoient au service d'accompagnement de Centrale Lille : remplacez-le par le vôtre. Les contenus datés (chiffres, contentieux, produits cités) correspondent à l'état des billets à leur date de publication ; ils sont à revoir avant chaque réutilisation.

## Sources

Le contenu des séquences provient exclusivement des billets publiés du carnet JEDI-OpenLab, dont le texte est sous licence CC BY 4.0 :

- [Peut-on encore interdire l'IA ?](https://jediopenlab.hypotheses.org/197)
- [À qui appartient l'IA qu'on utilise ?](https://jediopenlab.hypotheses.org/253)
- [Combien pèse une réponse d'IA ?](https://jediopenlab.hypotheses.org/383)
- [Avec quoi l'IA est-elle entraînée ?](https://jediopenlab.hypotheses.org/411)
- [L'IA, dernier avatar du capitalocène ?](https://jediopenlab.hypotheses.org/421)
- [Que devient l'apprendre quand la machine sait répondre ?](https://jediopenlab.hypotheses.org/438)
- [Le présentiel deviendra-t-il un privilège ?](https://jediopenlab.hypotheses.org/379)
- [Itinéraire d'une IA pédagogique souveraine](https://jediopenlab.hypotheses.org/209)

La méthode s'appuie sur le dépôt `game-design-pedagogique` de JEDI-OpenLab.

## Licence

Ce projet est une ressource éducative libre (REL) au sens de la Recommandation UNESCO de 2019.

Sauf mention contraire, les contenus originaux sont placés sous licence Creative Commons Attribution 4.0 International (CC BY 4.0). Voir [LICENSE.md](LICENSE.md).

Les contenus tiers conservent leurs droits et licences propres.
