# Fiche de conception · « Copie conforme ? »

*Serious game d'autoformation pour les enseignants de Centrale Lille. Version 0.1 du 1er octobre 2026, document de travail.*

| Rubrique              | Contenu                                                                                |
| --------------------- | -------------------------------------------------------------------------------------- |
| Titre de travail      | Copie conforme ? Enquête sur une réponse d'IA                                          |
| Conception            | Jean Debaecker, ingénieur pédagogique, Centrale Lille                                  |
| Public                | Enseignants et enseignants-chercheurs de Centrale Lille                                |
| Modalité              | Autoformation individuelle, à distance, asynchrone                                     |
| Durée                 | Environ 1 h 45, en capsules de 15 minutes, plus deux hors-pistes facultatifs           |
| Support               | Moodle de Centrale Lille : activités natives, H5P, badges                              |
| Matière première      | Huit billets publiés du carnet JEDI-OpenLab (Hypothèses), texte sous licence CC BY 4.0 |
| Méthode de conception | ADDIE pour le cadre d'ingénierie, D.I.C.E. pour la conception du jeu                   |


---

## 1. Le besoin des enseignants

*ADDIE : Analyse. D.I.C.E. : Définir.*

### 1.1 Constat

- L'IA générative est devenue une couche ordinaire des environnements numériques : la question « faut-il l'interdire ? » ne suffit plus pour décider d'une règle d'usage, d'une consigne ou d'une évaluation.
- Les décisions pédagogiques s'appuient souvent sur une image de l'IA comme outil isolé, alors que ses effets passent par une chaîne technique, économique, écologique, juridique et cognitive.
- Le service dispose d'une analyse validée et publiée sur ces questions : les six billets de la série IA représentent environ 22 000 mots, soit 1 h 30 à 2 h de lecture à raison de 200 à 250 mots par minute. Deux billets connexes s'y ajoutent. Les enseignants n'ont pas ce temps.

### 1.2 Besoins exprimés

| Point de vue                          | Besoin                                                                                                                                                                                                                 |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bénéficiaire : l'enseignant           | Comprendre ce qu'engage un usage d'IA, dans son cours et chez ses étudiants, pour décider en connaissance de cause : quoi autoriser, quoi protéger, comment évaluer. Le faire en peu de temps, chez soi, à son rythme. |
| Prescripteur : le pôle accompagnement pédagogique | Diffuser une veille sous une forme accessible ; faire connaître l'offre d'accompagnement (rendez-vous, ateliers) ; disposer d'un baromètre anonyme des représentations des enseignants sur l'IA.                       |

### 1.3 Problématique

Comment permettre à des enseignants pressés de s'approprier, en autoformation, une analyse critique de l'IA générative assez solide pour fonder leurs décisions pédagogiques, puis de passer de la compréhension à l'action avec l'appui du service ?

### 1.4 Proposition

Un serious game narratif d'autoformation : une enquête en six séquences sur une réponse d'IA arrivée dans une copie. Chaque séquence condense un billet publié en 15 minutes et se termine sur le cours du participant.

### 1.5 Profil du public

- Experts de leur discipline, pas nécessairement formés aux sciences de l'éducation.
- Disponibilité faible et fragmentée : il faut des capsules courtes, que l'on peut reprendre à tout moment.
- Rapports à l'IA très variés, de l'enthousiasme au rejet : le jeu ne présuppose aucune position.
- Adultes autonomes, sensibles à la valeur pratique d'une formation : chaque séquence ramène à leur propre enseignement.

### 1.6 Moyens et contraintes

| Moyens           | Disponible                                                                                              | Contrainte                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Humains          | Ingénierie pédagogique et auteur des billets ; pôle accompagnement pédagogique pour les rendez-vous et les ateliers | Pas de tutorat synchrone permanent                                                    |
| Techniques       | Moodle de Centrale Lille : activités natives, H5P, badges                                               | Types H5P et extensions disponibles à vérifier avec l'administration                  |
| Organisationnels | Catégorie Moodle déjà réservée aux enseignants                                                          | Formation volontaire : l'engagement doit être gagné, pas imposé                       |
| Éditoriaux       | Contenus déjà validés, publiés et sous licence ouverte                                                  | Ne rien affirmer qui ne figure dans un billet publié ; dater les contenus périssables |


---

## 2. Les compétences travaillées

Référentiel retenu : *Repères pour l'exercice du métier d'enseignant-chercheur* (ministère de l'Enseignement supérieur, 2019). Le ministère précise qu'il s'agit de repères partagés, et non d'un cadre réglementaire. Il distingue onze compétences : quatre communes à toutes les activités, deux transverses à la recherche et à la formation, trois spécifiques à la formation, deux spécifiques à la recherche.

| Compétence du référentiel | Descripteur mobilisé (extrait) | Où le jeu la travaille |
| --- | --- | --- |
| Concevoir des enseignements qui favorisent l'apprentissage de chacun | Prendre en compte dans son enseignement une pluralité d'approches et d'outils pédagogiques, et les espaces physiques et virtuels d'apprentissage | Séquences 1 à 4 : comprendre ce qu'un outil d'IA engage avant de l'intégrer ; hors-piste B |
| | Imaginer et planifier les activités et séquences d'apprentissage en respectant la cohérence entre objectifs, méthodes pédagogiques et évaluations | Séquence 6 et épilogue : repérer l'effort que l'IA rend facultatif et revoir une consigne |
| Évaluer les acquis d'apprentissage | Diversifier les méthodes d'évaluation et privilégier des évaluations formatives régulières ; prendre en compte les limites et biais possibles des méthodes d'évaluation | Séquence 6 (performance et apprentissage, fiabilité des détecteurs) ; épilogue (oral bref) |
| Encadrer les activités d'apprentissage | Accompagner les apprentissages et permettre un positionnement régulier par rapport aux attendus | Séquence 1 (une règle d'usage explicite) ; séquence 4 (ce qu'un étudiant peut confier à un outil) |
| Adopter une posture réflexive | Adopter une attitude critique et distanciée sur ses pratiques ; mobiliser les résultats de la recherche pour analyser ses manières d'agir ; partager ses réflexions avec ses pairs | Tout le parcours : carnet d'enquête, sondages comparés aux collègues, forum de la séquence 5 |
| Agir de manière éthique et responsable | Intitulé de la compétence | Séquences 2, 4 et 5 : données, droits, conditions de production de l'IA |
| S'adapter à son environnement | Intitulé de la compétence | Tout le parcours : un environnement numérique transformé par l'IA |

Le parcours relève aussi de l'activité « actualisation régulière des pratiques pédagogiques » que le référentiel rattache à la mission de formation.

---

## 3. Les objectifs pédagogiques

### 3.1 Objectif général

À l'issue du parcours, l'enseignant sera capable d'**analyser** un usage de l'IA générative dans son enseignement, le sien ou celui de ses étudiants, selon ses dimensions technique, économique, écologique, juridique et cognitive, afin de **justifier** une décision pédagogique : règle d'usage, consigne ou évaluation.

Niveaux de Bloom visés : Analyser et Évaluer, avec une ouverture vers Créer à l'épilogue.

### 3.2 Objectifs spécifiques

À l'issue de la séquence indiquée, l'enseignant sera capable de :

| N°   | Objectif                                                                                                                                                                                                                               | Niveau de Bloom | Séquence                  | Conditions                                                          | Critère de réussite                                                                    | Trace                          |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------ |
| OP1  | Utiliser la grille des huit dimensions (visibilité, intentionnalité, localisation, générativité, personnalisation, contrôle, responsabilité, traçabilité) pour qualifier un usage d'IA, à la place de l'opposition « avec ou sans IA » | Appliquer       | Séquence 1                   | Question d'appariement ; situation tirée de son cours               | Au moins 6 associations correctes sur 8 ; une règle de syllabus réécrite               | Quiz ; carnet                  |
| OP2  | Décomposer la chaîne qui produit une réponse d'IA (interface, modèle, cloud, puces, travail humain et matières) et identifier les questions de souveraineté qu'elle pose pour un outil donné                                           | Analyser        | Séquence 2                   | Glisser-déposer ; test de souveraineté appliqué à un outil réel     | Au moins 7 étiquettes sur 8 au bon étage ; au moins 3 questions du test renseignées    | H5P ; carnet                   |
| OP3  | Classer des usages selon leur ordre de grandeur énergétique et justifier le choix du format le plus sobre qui remplit la fonction visée                                                                                                | Évaluer         | Séquence 3                   | Estimation, tri des cinq usages du billet ; un usage de son cours   | Les cinq usages dans le bon ordre ; un usage repositionné et justifié                  | H5P ; carnet                   |
| OP4  | Appliquer les quatre questions de la provenance (d'où cela vient, qui a consenti, qui est crédité, qui est payé) à une sortie d'IA, après avoir distingué les intrants d'un modèle                                                     | Appliquer       | Séquence 4                   | Phrase extraite du cas ; cartes de provenance                       | Les quatre questions appliquées, avec ce qu'on peut savoir et ce qu'on ne peut pas     | H5P ; carnet                   |
| OP5  | Argumenter sur la portée et les limites de la grille du capitalocène pour relier les constats des séquences 2 à 4                                                                                                                         | Évaluer         | Séquence 5                   | Tri « exploité ou approprié » ; appariement ; choix d'une objection | Au moins 4 tris corrects sur 5 ; une objection retenue                                 | Quiz ; vote ; forum facultatif |
| OP6  | Différencier performance et apprentissage, et identifier dans l'une de ses évaluations l'effort (formulation, vérification, appropriation, réflexivité) que l'IA rend facultatif                                                       | Analyser        | Séquence 6                   | Quiz à degré de certitude ; rangement de huit gestes                | Au moins 6 gestes sur 8 sous le bon effort ; un effort facultatif nommé pour son cours | Quiz CBM ; H5P ; carnet        |
| OP7  | Proposer une modification d'une consigne ou d'une évaluation de son cours qui protège l'un des quatre efforts                                                                                                                          | Créer           | Épilogue                  | Scénario de l'entretien ; notes du carnet                           | Une modification écrite, rattachée à un effort nommé                                   | Carnet ; rendez-vous éventuel  |
| OP-A | Expliquer la notion d'inégalité modale et ce que son cours perdrait en basculant à distance                                                                                                                                            | Comprendre      | Hors-piste A (facultatif) | Tri « étudiant A, étudiant B »                                      | Tri correct ; une perte nommée                                                         | H5P ; carnet                   |
| OP-B | Expliquer les choix de conception qui rendent un assistant documentaire sobre : corpus restreint, refus hors corpus                                                                                                                    | Comprendre      | Hors-piste B (facultatif) | Série « répondre ou expliquer son silence »                         | Au moins 3 bonnes décisions sur 4                                                      | H5P                            |

Objectif transversal, du domaine des attitudes : **s'engager dans une posture réflexive** sur ses pratiques, observable par la régularité des notes du carnet d'enquête.

---

## 4. La méthode : ADDIE et D.I.C.E.

Les deux repères se complètent. ADDIE (Analyse, Design, Développement, Implémentation, Évaluation) garde le cap de l'ingénierie pédagogique. D.I.C.E. (Définir, Imaginer, Créer, Évaluer) accompagne le passage au prototype jouable. Le point de départ n'est pas « quel jeu allons-nous faire ? » mais « quel apprentissage voulons-nous provoquer, auprès de quel public, dans quelles conditions, et comment saurons-nous que cela fonctionne ? ».

| ADDIE          | D.I.C.E.          | Pour « Copie conforme ? »                                                                                                                                                          | Livrable                  | État    |
| -------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------- |
| Analyse        | Définir           | Besoin, public, contraintes, compétences, objectifs                                                                                                                                | La présente fiche         | v0.1    |
| Design         | Définir, Imaginer | Choix pédagogiques, objectifs ludiques, matrice objectifs-mécaniques-feedbacks-traces, structure du jeu                                                                            | Macro-scénario            | v0.1    |
| Design (suite) | Imaginer          | Une fiche par scène, arbre de l'entretien, textes des feedbacks                                                                                                                    | Scénario détaillé         | À faire |
| Développement  | Créer             | Pilote : prologue et séquence 1 (diapositives, audio, H5P, questions au format GIFT), puis les autres séquences                                                                    | Prototype jouable         | À faire |
| Implémentation | Créer, Évaluer    | Test du pilote avec trois à cinq collègues, puis ouverture dans la catégorie enseignants                                                                                           | Cours ouvert              | À faire |
| Évaluation     | Évaluer           | Réaction (questionnaire final), apprentissage (quiz, calibration), transfert (notes du carnet, rendez-vous pris), sur le modèle des niveaux de Kirkpatrick ; décisions d'itération | Bilan et version suivante | À faire |

Vigilances de la méthode, à garder à chaque étape :

- ne pas partir d'un jeu préféré ;
- éviter les mécaniques décoratives ;
- ne pas surproduire avant d'avoir testé ;
- ne pas confondre plaisir de jeu (objectif ludique) et apprentissage réel (objectif pédagogique)

---

## 5. Les modèles théoriques d'apprentissage

Le parcours combine plusieurs modèles ; chacun justifie une partie précise du dispositif.

| Modèle | Principe retenu | Dans le jeu |
| --- | --- | --- |
| Behaviorisme (Skinner) | Renforcement, essai-erreur, exercice répété | Feedback immédiat des quiz, déverrouillage progressif, cartes et badges. Garde-fou : la récompense ne devient jamais la finalité, d'où l'absence de classement. |
| Cognitivisme | Traitement actif de l'information, métacognition | L'accroche fait répondre avant de lire (effet de génération, l'une des « difficultés désirables » de Bjork) ; le quiz à degré de certitude fait calibrer sa confiance. Le parcours pratique ce que la séquence 6 enseigne. |
| Apprentissage expérientiel (Kolb) | Cycle : expérience concrète, observation réfléchie, conceptualisation, expérimentation active | La scène et l'accroche (expérience vécue par procuration) ; la comparaison avec les collègues (observation) ; « L'essentiel » (conceptualisation) ; « Et dans mon cours ? » et l'appel à l'action (expérimentation dans sa pratique) |
| Socio-constructivisme (Vygotsky) | Le savoir se construit dans l'interaction ; l'accompagnement permet d'aller plus loin que seul | Limité par l'autoformation, il passe par les résultats agrégés des sondages, le forum facultatif de la séquence 5 et le relais du service, qui prend le participant là où le jeu s'arrête |
| Andragogie (Knowles) | L'adulte veut savoir pourquoi il apprend, s'appuie sur son expérience et apprend à partir de problèmes | Chaque séquence part d'une situation de cours et se termine sur le cours du participant ; aucune obligation, un rythme choisi |

La motivation est travaillée à partir des quatre facteurs de la fiche « La motivation des apprenant·e·s » (d'après HEC Montréal) :

- **sentiment de compétence** : défis courts, consignes claires, feedback à chaque étape ;
- **perception de la valeur** : chaque séquence se termine sur son propre cours, avec une aide concrète proposée ;
- **sentiment de contrôle** : rythme au choix, trois niveaux de lecture, hors-pistes facultatifs ;
- **sentiment de plaisir** : un récit d'enquête, une collection de cartes, un retournement final.

---

## 6. L'objectif du serious game

### 6.1 Phrase de cadrage

> Les enseignants jouent pour réussir à boucler le dossier de la copie n° 17, et pour réussir ils doivent apprendre à analyser ce qu'engage une réponse d'IA, de l'outil jusqu'à l'apprentissage de l'étudiant.

### 6.2 Finalités

1. **Pédagogique** : atteindre l'objectif général (§ 3.1).
2. **Institutionnelle** : transformer une lecture en demande d'accompagnement, grâce aux appels à l'action de chaque séquence.
3. **Diffusion** : faire connaître la veille validée du carnet, chaque séquence renvoyant au billet complet.
4. **Observation** : disposer d'un baromètre anonyme des représentations des enseignants sur l'IA, annoncé dès le prologue.

### 6.3 Classification

Selon la grille de choix du service :

| Niveau de choix | Choix retenu | Justification |
| --- | --- | --- |
| Modalité pédagogique | Autoformation individuelle, à distance, asynchrone | Public autonome, temps fragmenté, pas de tutorat permanent |
| Méthode pédagogique | Active | Le participant décide, estime, classe avant de lire |
| Type de pédagogie active | Jeu d'apprentissage | Engager un public volontaire mais pressé |
| Type de jeu d'apprentissage | Serious game numérique | Diffusion dans la catégorie Moodle existante |
| Type de serious game | Jeu d'enquête à trame narrative, avec épreuves courtes, collection et fin à embranchements | Fil rouge de la copie ; entretien final |

Selon le modèle G/P/S de Djaouti, Alvarez et Jessel : *Gameplay*, jeu à objectif ; *Purpose*, diffusion d'un message éducatif, entraînement par les épreuves et collecte de données par le baromètre ; *Scope*, formation professionnelle des enseignants du supérieur.

### 6.4 Ce que le jeu n'est pas

- Un module de détection de la fraude : le retournement de la séquence 6 l'écarte explicitement.
- Un tutoriel d'outils : aucun outil n'est enseigné, on apprend à lire ce qu'un outil engage.
- Un plaidoyer : la séquence 5, la plus engagée, présente sa grille avec les objections que le billet lui oppose.

---

## 7. Les moyens pédagogiques

| Moyen | Usage dans le parcours | Remarque |
| --- | --- | --- |
| Cours Moodle | Une section par séquence ; achèvement d'activité et restrictions d'accès | Catégorie réservée aux enseignants |
| Choix (sondage) | Accroches et baromètre anonyme, résultats affichés après réponse | Natif |
| Test (quiz) | Appariements, vrai-faux, estimation ; degré de certitude (CBM) à la séquence 6 | Natif ; banques de questions au format GIFT |
| Glossaire | Concepts des billets, cliquables partout grâce au filtre de liens automatiques | Natif, filtre à activer |
| Wiki individuel | Carnet d'enquête : une note « Et dans mon cours ? » par séquence | Natif ; visible des gestionnaires, à annoncer |
| Feedback | Questionnaire final ; formulaire de demande d'accompagnement | Natif |
| Forum | Débat facultatif de la séquence 5 ; défi de la semaine | Natif |
| Badges | Une carte par séquence, un badge « Hors-piste », un badge final | Natif, à activer |
| H5P | Course Presentation, Drag and Drop, Sort the Paragraphs, Single Choice Set, Timeline, Dialog Cards, Image Hotspots, Branching Scenario | Types activés à vérifier |
| Médias | Audio de 5 minutes par séquence ; cartes illustrées ; fiche récapitulative PDF | À produire |
| Ressources humaines | Conception et voix ; service pour les rendez-vous et ateliers ; trois à cinq collègues testeurs | |
| Licence | Contenus exportables (paquets H5P, questions GIFT) pour une diffusion en ressource éducative libre sur le GitHub JEDI-OpenLab | Texte des billets sous CC BY 4.0 |

---

## 8. Points à valider

- [ ] Les types H5P et extensions réellement disponibles sur le Moodle de Centrale Lille.
- [ ] Le nom exact du service et le canal de prise de rendez-vous.
- [ ] Les seuils de réussite, après le test du pilote.

---

## Sources

**Référentiel**

- Ministère de l'Enseignement supérieur et de la Recherche (2019). *Repères pour l'exercice du métier d'enseignant-chercheur*. [Page de présentation](https://www.enseignementsup-recherche.gouv.fr/fr/reperes-pour-l-exercice-du-metier-d-enseignant-chercheur-47766) · [Brochure PDF](https://www.enseignementsup-recherche.gouv.fr/sites/default/files/imported_files/documents/reperes_exercice_metier_enseignant_chercheur_1145863.pdf)

**Ressources méthodologiques de l'auteur**

- Dépôt `game-design-pedagogique` : `docs/02_concevoir/methode-addie-dice.md`
- Dépôt `game-design-pedagogique` : `docs/02_concevoir/aligner-objectifs-mecaniques-evaluations.md`
- Dépôt `game-design-pedagogique` : `docs/01_comprendre/qu-est-ce-qu-un-serious-game-pedagogique.md`
- Notes de travail non publiées : document de conception ADDIE d'un précédent serious game (2022), grille de classification des serious games, notes sur les théories d'apprentissage (projet de livre-jeu « L'odyssée de l'enseignement »), principes de cohérence pédagogique, taxonomie de Bloom révisée (d'après l'Université de Genève), fiche sur la motivation des apprenants (d'après HEC Montréal).

**Billets du carnet JEDI-OpenLab**

| Billet | Date | Séquence |
| --- | --- | --- |
| [Peut-on encore interdire l'IA ?](https://jediopenlab.hypotheses.org/197) | 4 juillet 2026 | Séquence 1 |
| [À qui appartient l'IA qu'on utilise ?](https://jediopenlab.hypotheses.org/253) | 13 juillet 2026 | Séquence 2 |
| [Combien pèse une réponse d'IA ?](https://jediopenlab.hypotheses.org/383) | 18 août 2026 | Séquence 3 |
| [Avec quoi l'IA est-elle entraînée ?](https://jediopenlab.hypotheses.org/411) | 20 août 2026 | Séquence 4 |
| [L'IA, dernier avatar du capitalocène ?](https://jediopenlab.hypotheses.org/421) | 24 août 2026 | Séquence 5 |
| [Que devient l'apprendre quand la machine sait répondre ?](https://jediopenlab.hypotheses.org/438) | 1er septembre 2026 | Séquence 6 et épilogue |
| [Le présentiel deviendra-t-il un privilège ?](https://jediopenlab.hypotheses.org/379) | 18 août 2026 | Hors-piste A |
| [Itinéraire d'une IA pédagogique souveraine](https://jediopenlab.hypotheses.org/209) | 6 juillet 2026 | Hors-piste B |
