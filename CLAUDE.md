# Consignes pour Claude Code · dépôt `copie-conforme`

Ce dépôt publie « Copie conforme ? Enquête sur une réponse d'IA », un serious game d'autoformation pour les enseignants du supérieur, conçu en ressource éducative libre (REL) pour l'organisation GitHub JEDI-OpenLab.

## Répartition du travail

- **La conception** (objectifs, scénarios, textes du jeu, feedbacks, contenus des séquences) se fait en dehors de Claude Code, avec l'auteur. Elle arrive dans ce dépôt sous forme de fichiers Markdown.
- **Claude Code développe** : le site, le jeu web, l'intégration des contenus, la publication.
- Les fichiers de `conception/`, `sequences/` et `journal/` sont des **sources de conception** : ne pas les réécrire, les résumer ni les « améliorer » sans demande explicite. Signaler une incohérence plutôt que la corriger seul.
- Les textes du jeu (voix de la copie, consignes, feedbacks) sont repris **mot pour mot** depuis les fichiers de conception.

## Ce qui ne doit jamais être publié

- Le dossier `_prive/` (brouillons de conception) est exclu par `.gitignore`. Ne jamais l'ajouter au dépôt, ne jamais utiliser `git add -f` dessus, ne jamais copier son contenu dans `src/`, `public/` ou `dist/`.
- Aucun nom de collègue, de testeur ou d'étudiant, aucune donnée de sondage, aucune information interne à l'établissement (tickets, outils internes, échanges de service).
- En cas de doute sur un fichier, demander avant de le committer.

## Le site et le jeu

- Site : Astro Starlight, publié sur GitHub Pages (`https://jedi-openlab.github.io/copie-conforme/`). `src/content/docs/` est généré par `scripts/sync-content.mjs` à partir des Markdown du dépôt : modifier les sources, pas les fichiers générés.
- Jeu web : statique, sans serveur, sans compte, sans dépendance réseau à l'exécution (polices et bibliothèques embarquées). La progression du joueur reste dans son navigateur.
- Le jeu doit pouvoir être empaqueté plus tard en **paquet SCORM** pour Moodle 4.5 (avancement et score transmis à Moodle). Prévoir une couche de suivi isolée, sans en dépendre pour jouer.
- Accessibilité : navigation complète au clavier, lecteurs d'écran (rôles et libellés ARIA), contrastes suffisants, aucune information portée par la seule couleur, textes alternatifs.

## Conventions éditoriales

- Vocabulaire : le parcours est fait de **séquences** (pédagogiques), jamais de « pièces ». Chaque séquence a sa fiche « scène » dans le scénario détaillé.
- Personnage : la **copie n° 17** est narratrice ; elle vouvoie le joueur. L'étudiant·e qui l'a rendue reste anonyme, sans prénom ni genre. Aucun prénom d'étudiant.
- Le joueur est l'enseignant, en adresse directe, sans accord de genre sur « vous ».
- Le service cité dans les appels à l'action est le **Pôle Accompagnement pédagogique** de Centrale Lille.
- Typographie française : **aucun tiret cadratin** (—) ; espace insécable avant « ; : ? ! » et à l'intérieur des guillemets français.
- Le contenu ne doit rien affirmer qui ne figure dans un billet publié du carnet JEDI-OpenLab ; chaque séquence porte la date de son billet.

## Licences

- Contenus originaux : CC BY 4.0 (voir `LICENSE.md`).
- Code éventuel : MIT, à indiquer dans un fichier dédié si du code applicatif est ajouté.
- Les contenus tiers conservent leurs droits ; ne rien recopier de tiers sans licence compatible.

## Compte GitHub

Ce dépôt relève du compte professionnel (organisation JEDI-OpenLab). Ne jamais utiliser le compte personnel de l'auteur pour ce dépôt.
