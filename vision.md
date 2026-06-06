# Optimiser le prompt Codex pour le site Sanaa Services

## Synthèse exécutive

Le prompt initial était utile comme **document de cadrage**, mais pas encore comme **brief d’exécution pour Codex**. Il décrivait beaucoup d’idées, mais hiérarchisait mal les priorités, multipliait les CTA concurrents, laissait trop d’ambiguïtés techniques, et ne définissait ni **critères d’acceptation**, ni **budget de performance**, ni **plan de tracking**, ni **stratégie de test**. Or, pour un site vitrine à fort enjeu de conversion, la clarté de la homepage, la spécificité des CTA et la réduction de la compétition entre actions sont des facteurs déterminants. Nielsen Norman Group déconseille les CTA vagues du type “Get Started”, et Baymard souligne que des CTA concurrents peuvent distraire et ralentir la progression vers l’action principale. citeturn5search5turn5search1turn5search0

La bonne direction consiste à transformer ce brief en **prompt court, prescriptif, testable et modulaire**. Pour Sanaa Services, cela veut dire : un seul stack principal, des routes exactes, des composants nommés, trois tunnels de lead explicites, une stratégie SEO locale, des formulaires progressifs, des signaux de confiance visibles très tôt, et des garde-fous qualité sur l’accessibilité, la performance, la sécurité et la confidentialité. Les docs officielles de Next.js recommandent l’App Router pour les nouvelles applications, Next.js intègre nativement TypeScript, Tailwind facilite le responsive design, et Vercel fournit un chemin de déploiement naturel pour un projet Next.js. citeturn18search0turn0search20turn0search1turn7search1turn18search2

Pour un service business visant des communautés immigrées à NYC, les patterns qui méritent d’être prioritaires sont très nets : **mobile-first**, **WhatsApp/call visibles en permanence**, **langues et accessibilité linguistique**, **preuves de confiance locales**, **formulaires progressifs**, **disclaimers clairs** pour l’immigration et le legal support, et **SEO local** fort. Ce n’est pas seulement un choix marketing : NYC opère elle-même avec une logique forte de language access, et le WhatsApp Business Platform est conçu pour les échanges clients structurés. citeturn10search1turn10search2turn10search5turn2search0turn2search4

## Diagnostic du prompt initial

Le principal mérite du prompt d’origine est d’avoir correctement identifié la **proposition de valeur multi-services** de Sanaa Services, ainsi que la nécessité d’un site **premium, intuitif et orienté leads**. Il a aussi eu l’intuition juste sur des éléments importants : page d’accueil pensée comme landing page, pages service dédiées, formulaire rapide, WhatsApp, call-to-action permanents, avis clients, FAQ, pages de confiance et base SEO. Sur le fond, le cadrage produit était donc largement pertinent.

Là où le prompt faiblit, c’est dans son **usage opérationnel par un agent de code**. Il est trop long, mélange stratégie, copywriting, design, navigation et idées de features sans ordre de priorité explicite, et ne dit pas très clairement à Codex ce qui est **obligatoire au MVP**, ce qui est **prévu plus tard**, et ce qui n’est qu’optionnel. Or, les homepages performantes doivent guider les utilisateurs “avec clarté et précision”, pas par accumulation de blocs et de demandes concurrentes. citeturn5search5

Le prompt original souffre aussi d’un problème de **priorité conversion**. Il propose partout des boutons de type “Call / WhatsApp / Book”, mais sans définir quelle action est primaire sur chaque template. En pratique, cela peut créer de la friction : NNGroup a montré qu’un CTA générique comme “Get Started” attire des clics mais peut aussi bloquer la compréhension, et Baymard rappelle que des CTA concurrents brouillent la lecture de l’interface. Pour un site brochure local, il faut au contraire un système plus strict : **un CTA primaire par contexte**, les autres en secondaires. citeturn5search1turn5search0

Les lacunes techniques sont également importantes. Le prompt original ne précise pas clairement : la structure de projet, la stratégie d’i18n, l’architecture des métadonnées, l’usage du JSON-LD local business, la stratégie anti-spam, les conventions de code, le découpage des composants, les tests E2E, l’observabilité, le monitoring des erreurs, la politique de consentement, les événements analytics, ni les contraintes de performance. Pourtant, Next.js fournit des primitives explicites pour l’App Router, les route groups, le metadata API et l’optimisation des polices; Google fournit des recommandations pour les structured data LocalBusiness et Organization; et les outils comme Sentry, Lighthouse et Playwright existent précisément pour rendre ce type de brief mesurable. citeturn18search0turn18search16turn14search2turn8search0turn8search1turn6search0turn6search1turn6search6

Enfin, le prompt initial parle d’accessibilité et de responsive, mais sans exigences testables. Il manque un objectif WCAG 2.2 AA, une politique `prefers-reduced-motion`, des critères Core Web Vitals, et une vraie approche sécurisée pour l’upload de documents — pourtant critique pour des services de traduction et d’immigration. W3C formalise WCAG 2.2, web.dev insiste sur la gestion du mouvement réduit, et OWASP considère l’upload de fichiers comme une surface de risque majeure qui doit être contrôlée. citeturn1search2turn1search9turn4search2turn4search13turn1search3turn1search7

## Tendances et patterns à adopter

Les tendances visuelles récentes vont dans le sens d’un **bold minimalism**, d’une **typographie plus expressive**, de **microinteractions utiles**, de **cartes visuelles enrichies**, de **gradients subtils**, et d’un usage plus fréquent des overlays, ombres et effets “glass” légers. Mais il faut les utiliser comme des outils au service de la compréhension, pas comme des gimmicks : Webflow rappelle explicitement que suivre les tendances n’a de valeur que si elles servent un objectif, et Figma met en avant des patterns plus “user-friendly”, dont la nurturing progressive des leads. Adobe, de son côté, signale la montée du bold minimalism et d’une direction visuelle plus forte. citeturn4search0turn17search6turn17search1turn4search8

Pour Sanaa Services, les tendances à retenir ne sont donc pas les plus démonstratives, mais les plus **conversion-friendly** :

### Mobile-first et contact permanent

Le trafic venant d’Instagram et Facebook sera majoritairement mobile. Il faut donc un design pensé d’abord pour le smartphone, avec header sticky ou semi-sticky, CTA de contact persistants, tap targets confortables et hiérarchie de lecture verticale. Les sticky headers sont un pattern établi, et la logique de CTA persistant est cohérente avec des contextes mobiles où l’utilisateur agit vite, souvent par microsessions. citeturn19search3turn19search11turn0search1

### Capture conversationnelle et divulgation progressive

Pour ce type d’offre, la meilleure alternative à un long formulaire n’est pas un chatbot lourd, mais une **capture conversationnelle légère** : WhatsApp, quick form court, puis formulaire spécifique conditionnel. NNGroup recommande la progressive disclosure pour réduire la complexité, et ses recommandations plus récentes sur la charge cognitive en formulaires vont dans le même sens. Les messages d’erreur doivent être près des champs et formulés de façon actionnable. citeturn1search0turn1search5turn1search1

### Signaux de confiance proches des CTA

Sur un site de notary, immigration, insurance ou travel, la confiance ne doit pas être reléguée à la fin du site. Elle doit entourer les moments de conversion : adresse, téléphone, horaires, langues parlées, avis, badges de confidentialité, disclaimers sur la nature du service, carte, présence locale, profils sociaux et cohérence NAP. NNGroup identifie la qualité du design, la transparence upfront, la fraîcheur du contenu et les connexions externes comme facteurs de crédibilité, et Google Business Profile insiste sur la complétude des informations locales et des photos/reviews. citeturn5search2turn5search3turn5search7

### Localisation et language access

Pour un business visant des communautés immigrées, la localisation n’est pas un “plus”, c’est un multiplicateur de conversion. Next.js documente la prise en charge des routes localisées, Google recommande des URLs distinctes et le `hreflang` pour les versions linguistiques, et NYC elle-même publie des contenus traduits dans plusieurs langues et formalise des plans de language access. Pour Sanaa Services, le bon compromis MVP est : contenu initial en anglais, mais architecture prête pour EN/FR/AR, avec microcopy critique facilement traduisible. citeturn3search0turn3search3turn3search11turn10search1turn10search2

### Motion, gradients et glassmorphism avec retenue

Un hero premium avec cartes de services, gradient discret, plaques vitrées légères et micro-animations peut très bien fonctionner en 2026, à condition de préserver la lisibilité et la vitesse. Les animations doivent rester non essentielles à la compréhension et respecter `prefers-reduced-motion`. citeturn17search1turn17search6turn4search2turn4search4

## Exigences techniques et stack recommandé

Le meilleur choix pour ce projet reste **Next.js 14 App Router + Tailwind CSS + TypeScript + Vercel**. C’est le compromis le plus solide entre qualité visuelle, maintien dans le temps, SEO local, performance, modularité et compatibilité avec des formulaires évolutifs. Next.js 14 recommande l’App Router pour les nouvelles apps, fournit une expérience TypeScript intégrée, permet des routes propres, des metadata par page, des route groups pour organiser le code, et `next/font` pour optimiser les Google Fonts sans requêtes externes inutiles ni layout shift. Vercel offre un chemin de déploiement naturel pour Next.js et gère proprement les environnements. citeturn18search0turn18search3turn0search20turn18search16turn14search2turn18search2turn7search1turn7search2turn7search14

Le tableau ci-dessous synthétise les docs officielles de Next.js, React, Vite et Vercel, puis les traduit en décision produit pour Sanaa Services. citeturn13search0turn13search6turn13search1turn7search1turn7search7

| Option | Avantages | Limites | Verdict pour Sanaa Services |
|---|---|---|---|
| **Next.js 14 + TypeScript + Tailwind + Vercel** | Excellent pour SEO local, pages multiples, metadata, structured data, composants réutilisables, évolutivité vers backend/headless | Plus structuré donc un peu plus exigeant qu’un simple static site | **Choix final recommandé** |
| **React SPA + Vite + Tailwind** | Très rapide à lancer, DX simple, bundle statique optimisé | React seul ne prescrit ni routing ni data fetching; SEO local et metadata demandent plus d’assemblage | Bon plan B si l’objectif était seulement une landing page |
| **Static HTML/CSS/JS** | Ultra simple, faible coût, très rapide à servir | Moins maintenable, moins modulaire, plus pénible pour 12+ pages, forms évolutifs et i18n | Acceptable uniquement pour un MVP très limité |

Sur les analytics et l’observabilité, la stratégie la plus raisonnable est : **GA4 dès le départ**, via Google Tag Manager et une architecture `dataLayer` propre, puis **server-side tagging** en phase suivante si les campagnes payantes, la qualité de donnée ou les exigences privacy l’imposent. Google explique que le server-side tagging peut améliorer la performance, le contrôle privacy et la qualité de donnée, mais cela ajoute aussi de l’infrastructure; il ne faut donc pas l’imposer au tout premier sprint si le site démarre simplement. citeturn0search3turn0search7turn9search1turn16search0

### Exigences techniques concrètes

Le socle technique à exiger dans le prompt Codex devrait être le suivant :

- **Routing** : App Router, pages dédiées par service, route groups pour organiser `(marketing)` et `(services)`, et metadata page par page. citeturn18search16turn14search22turn14search2
- **i18n** : arborescence prête pour des locales distinctes et intégration future du `hreflang`. citeturn3search0turn3search3turn3search11
- **Fonts** : `next/font/google` avec auto-optimisation et self-hosting. citeturn14search0turn14search11
- **SEO local** : `Organization` + `LocalBusiness` JSON-LD, Open Graph/Twitter images, sitemap, robots, canonical, NAP cohérent. citeturn8search0turn8search1turn8search3turn3search2turn3search6
- **Forms** : validation client, messages inline, provider abstraction, quick form + service forms. Les uploads doivent être strictement cadrés. citeturn1search1turn12search0turn12search1turn1search3
- **Error monitoring et QA** : Sentry, Lighthouse, Playwright. citeturn6search0turn6search1turn6search6turn6search9turn6search10

Le tableau suivant compare les intégrations de capture/gestion de leads les plus utiles ici. Il synthétise les documentations officielles des fournisseurs. citeturn2search5turn12search1turn12search3turn2search6turn12search10turn2search0

| Intégration | Quand l’utiliser | Points forts | Limites |
|---|---|---|---|
| **EmailJS** | MVP sans backend | Très rapide, client-side, peut gérer des attachments et CAPTCHA | Moins robuste qu’un CRM si le volume monte |
| **Formspree** | MVP solide avec formulaires statiques/JS | Backend de formulaires, uploads natifs, anti-spam simple | Dépendance SaaS et contraintes de plan |
| **Google Sheets API** | Back-office très léger | Facile pour pilotage interne des leads | Pas un vrai CRM, maintenance rapide mais artisanale |
| **Airtable** | Pipeline léger structuré | Base low-code, webhooks temps réel | Coût/complexité augmentent vite |
| **HubSpot Forms/API** | Scalabilité commerciale | CRM, qualification, reporting, anti-spam plus mature | Plus lourd au démarrage |
| **WhatsApp Business Platform** | Conversation-first | Très fort pour leads chauds, relance et suivi | Nécessite gouvernance messaging et setup Meta |

Pour Sanaa Services, la meilleure séquence est généralement : **Formspree ou EmailJS + Sheets/Airtable au départ**, puis **HubSpot** si le volume de leads justifie un CRM plus formalisé. WhatsApp doit être traité comme un **canal principal**, pas juste un bouton décoratif. citeturn2search0turn2search4turn12search0turn12search1turn12search3turn12search10

## Architecture UX et stratégie de capture

L’architecture UX doit partir d’un principe simple : la plupart des visiteurs n’arrivent pas pour “explorer une marque”, mais pour résoudre un problème concret — notariser un document, demander un devis d’assurance, faire traduire un papier, obtenir de l’aide pour un visa, préparer un voyage. Une homepage efficace doit donc **réduire le temps de compréhension**, puis **proposer une action immédiate**. C’est cohérent avec les principes de homepage clarity, avec la progressive disclosure, et avec les facteurs de confiance nécessaires avant de demander des données personnelles. citeturn5search5turn1search0turn5search14

### Arborescence recommandée

La sitemap utile au MVP est la suivante :

- `/`
- `/services`
- `/services/notary`
- `/services/legal-consultancy`
- `/services/insurance`
- `/services/translation`
- `/services/driving-school`
- `/services/visa-immigration`
- `/services/travel`
- `/about`
- `/reviews`
- `/faq`
- `/contact`
- `/privacy`

J’ajouterais aussi une capacité future pour `/fr` et `/ar`, mais sans forcer la livraison immédiate des versions traduites au premier sprint. Cette structure sert à la fois le SEO local et la conversion par intention.

### Templates de page

Le site a besoin de trois grands templates.

Le premier est le **template homepage**, avec hero, trust ribbon, cartes de services, quick actions, preuve sociale, formulaire court et contact final.

Le deuxième est le **template page service**, qui doit toujours suivre à peu près la même logique : hero spécifique, problèmes couverts, documents à prévoir, FAQ du service, disclaimer si nécessaire, formulaire dédié, CTA téléphone/WhatsApp.

Le troisième est le **template page de confiance**, pour About, Reviews, FAQ et Contact, avec davantage de preuves, pas seulement du branding.

### Liste de composants

Codex doit être forcé à construire des composants réutilisables. Les plus importants sont : `Header`, `StickyMobileCTA`, `HeroQuickActionCard`, `ServiceCard`, `TrustBadgeRow`, `QuickLeadForm`, `ServiceLeadForm`, `UploadField`, `ReviewCard`, `FAQAccordion`, `ContactStrip`, `MapPlaceholder`, `Footer`, plus des helpers de metadata et de structured data.

Cette modularité rend le projet **headless-ready** : si plus tard Sanaa Services veut brancher Sanity, Strapi ou Airtable CMS, les composants et les données seront déjà séparés.

### Stratégie CTA

La logique de CTA ne doit pas être “trois boutons partout”. Il faut une hiérarchie.

Sur mobile, le CTA primaire devrait être **Call Now** ou **WhatsApp Us** selon le contexte de page. Sur desktop, le CTA primaire peut être **Request Help** ou **Book Appointment** si la page présente déjà assez de contexte. Le quick form agit comme alternative silencieuse pour les visiteurs moins prêts à appeler.

Le vocabulaire doit être ultra spécifique. Voici de meilleurs exemples de microcopy :

- **Call Now**
- **Message on WhatsApp**
- **Send Your Documents**
- **Request a Quote**
- **Book a Consultation**
- **Check Required Documents**
- **Get Immigration Help**
- **Plan My Trip**

Il vaut mieux éviter les formulations vagues. NNGroup a montré que “Get Started” est souvent trop flou pour aider un utilisateur à comprendre la suite. citeturn19search0

### Les trois funnels principaux

Le site doit expliciter trois tunnels de lead :

Le premier tunnel est le **Call / WhatsApp funnel**. C’est le canal des leads chauds. Il doit être visible dans le header, dans une barre sticky mobile et à la fin de chaque page service. Le message WhatsApp prérempli doit réduire l’effort, par exemple : *“Hello Sanaa Services, I need help with [service]. Please contact me.”*

Le deuxième tunnel est le **Quick Lead Form**. Il doit demander seulement l’essentiel : nom, téléphone, service, méthode de contact préférée, message. Les détails viennent ensuite. Cela réduit la charge cognitive. citeturn1search5turn1search1

Le troisième tunnel est le **Service-specific form with upload + booking request**. Ici, l’utilisateur a déjà une intention plus mûre. On peut donc demander des informations plus précises, et autoriser l’upload de documents sur les pages Translation ou Visa & Immigration. Il faut néanmoins traiter l’upload comme une surface sensible et limiter types, tailles et stockage. citeturn12search0turn1search3turn1search7

### Placement des éléments de confiance

Les trust elements ne doivent pas être relégués au footer.

Dans le **hero** : localisation NYC, langues, fast response, confidentialité.

Sous le hero : avis, photos réelles de bureau/équipe si disponibles, preuve locale, éventuellement Google Maps/Address, notations et canaux sociaux.

Sur les **pages Legal Consultancy** et **Visa & Immigration** : disclaimer clair que l’entreprise fournit un accompagnement administratif et documentaire et que cela ne remplace pas l’avis d’un avocat agréé.

Dans le **footer** : adresse, téléphone, horaires, réseaux sociaux, privacy page, NAP complet.

## Checklist qualité

### Accessibilité

Le projet doit viser **WCAG 2.2 niveau AA**. Cela implique contraste correct, focus visibles, navigation clavier, labels explicites, structure sémantique, taille de cible tactile confortable, alternatives textuelles aux visuels et comportements réduits pour les animations lorsque `prefers-reduced-motion` est activé. citeturn1search2turn1search9turn4search2turn4search13

### SEO et local SEO

Chaque page doit avoir un `title`, une `meta description`, un `H1` unique, du contenu lisible, des URLs propres, et des métadonnées sociales. Pour la visibilité locale, il faut ajouter `Organization` et `LocalBusiness` JSON-LD, un NAP cohérent, des `sameAs` vers les profils sociaux, et prévoir le `hreflang` si les versions FR/AR sont lancées. Google Search Central recommande des titles clairs, des descriptions uniques et des versions localisées avec `hreflang`. citeturn3search2turn3search6turn3search3turn8search0turn8search1turn8search4

### Performance

La cible réaliste pour un site premium devrait être : **LCP ≤ 2,5 s**, **INP ≤ 200 ms**, **CLS ≤ 0,1** au 75e percentile, ce qui correspond aux seuils “good” des Core Web Vitals. Il faut aussi surveiller fonts, tags, cookie notices, images et embeds, car ce sont des causes fréquentes de dégradation. Next.js `Image` et `next/font` aident directement à limiter le layout shift et à accélérer le rendu. citeturn15view0turn16search8turn16search2turn16search0turn16search4turn6search7turn18search2

### Sécurité

Les formulaires doivent utiliser HTTPS, un anti-spam minimal de type honeypot ou CAPTCHA selon le provider, et une gestion prudente des uploads. OWASP recommande des contrôles stricts sur les types de fichiers, les tailles, les noms et le stockage, et ses guides sur les headers HTTP et HSTS rappellent l’importance d’un socle de sécurité de base. Une CSP bien réglée aide aussi à limiter XSS et ressources non autorisées. citeturn9search10turn20search0turn20search3turn1search3turn9search2turn9search18turn9search11

### Privacy et consentement

Dès qu’on déploie GA4, GTM ou scripts marketing, il faut penser **consentement** et **minimisation des données**. Google propose Consent Mode, et web.dev rappelle qu’un cookie notice mal conçu peut dégrader UX et performance. Pour Sanaa Services, il faut aussi une politique de confidentialité simple, un message explicite sur l’usage des documents uploadés, et une suppression/rétention maîtrisée des pièces envoyées. citeturn9search0turn9search4turn16search4turn16search18

## Livrables, conventions et mise en production

Le prompt amélioré doit exiger des livrables clairs, pas seulement “le site”. Le minimum utile est :

### Structure de projet attendue

- `app/` avec route groups pour organiser les pages sans salir les URLs. citeturn14search22turn18search16
- `components/` pour les briques UI.
- `data/` ou `content/` pour services, FAQ, testimonials, SEO copy.
- `lib/` pour analytics, forms, helpers metadata/schema.
- `public/` pour les assets et placeholders.
- `tests/` pour Playwright.
- fichiers de config pour ESLint, TypeScript, Tailwind et déploiement.

### Conventions de code

Je recommande des conventions simples mais strictes : TypeScript partout, composants nommés clairement, props typées, constantes centralisées, copy en anglais isolée dans des fichiers de données, aucun texte critique hardcodé dans 15 composants différents, et nommage centré sur l’intention métier (`QuickLeadForm`, `ServiceLeadForm`, `TrustBadgeRow`, etc.).

### Checklist de test

Le prompt devrait exiger au minimum :

- smoke test de chaque route;
- test des CTAs principaux;
- validation d’erreurs de formulaire;
- test d’upload UI sur Translation et Visa & Immigration;
- test du menu mobile et de la barre sticky CTA;
- vérification metadata/structured data;
- audit Lighthouse;
- test clavier et focus;
- test de responsive sur mobile, tablette, desktop.

Playwright est adapté aux tests E2E modernes et Lighthouse peut être intégré en CI pour surveiller la qualité dans la durée. citeturn6search6turn6search10turn6search1turn6search9

### Template README minimal

Le README demandé à Codex devrait contenir :

- aperçu du projet;
- stack;
- installation;
- commandes `dev`, `build`, `start`;
- variables d’environnement;
- comment modifier les contenus;
- comment brancher un provider de forms;
- comment brancher GA4/GTM/Sentry;
- comment déployer sur Vercel;
- checklist post-déploiement.

### Étapes de déploiement

La mise en prod idéale est : repo Git, preview deployments, variables d’environnement séparées, déploiement Vercel, domaine custom, puis QA post-déploiement. Vercel documente les environnements Local/Preview/Production et la gestion des variables d’environnement. citeturn7search4turn7search2turn7search8turn7search14

### Sources prioritaires à garder ouvertes

Pour exécuter ou vérifier le travail, voici les sources les plus utiles à garder sous la main :

- Next.js App Router, metadata, fonts, route groups et déploiement. citeturn18search0turn14search2turn18search2turn18search16turn7search1
- Tailwind responsive design et utility-first styling. citeturn0search1turn0search21
- Core Web Vitals, seuils, optimisations prioritaires et bonnes pratiques perf. citeturn15view0turn16search8turn16search1
- GA4, GTM, server-side tagging et consent mode. citeturn0search3turn0search7turn9search1turn9search0
- WhatsApp Business Platform. citeturn2search0turn2search4
- Sentry, Lighthouse, Playwright. citeturn6search0turn6search1turn6search6

## Prompt final prêt à coller dans Codex

Le prompt ci-dessous corrige les faiblesses du premier brief : il réduit l’ambiguïté, fixe un stack unique, impose des routes et composants exacts, clarifie les funnels de lead, prévoit i18n/SEO/perf/accessibilité, et donne des critères d’acceptation testables. Il reste volontairement concis pour être mieux exécuté par Codex. citeturn18search0turn5search1turn1search0turn8search0turn15view0

```text
Tu es un lead frontend engineer + conversion designer senior. Construis un site vitrine premium, mobile-first et très orienté leads pour Sanaa Services, NYC. Le code, les commentaires, les textes UI, les métadonnées et le contenu du site doivent être en anglais. Crée du code exécutable complet, pas une maquette.

Stack obligatoire : Next.js 14 App Router, TypeScript, Tailwind CSS, deploy-ready for Vercel.

Objectif : faire comprendre en moins de 5 secondes que Sanaa Services aide à NYC pour Notary, Legal Consultancy, Insurance, Translation, Driving School, Visa & Immigration, Travel; pousser 3 funnels : 1) Call/WhatsApp, 2) Quick lead form, 3) Service-specific form with file upload + booking request.

Routes à créer : /, /services, /services/notary, /services/legal-consultancy, /services/insurance, /services/translation, /services/driving-school, /services/visa-immigration, /services/travel, /about, /reviews, /faq, /contact, /privacy. Prévoir une architecture i18n-ready pour /en /fr /ar plus tard, mais livrer uniquement l’anglais.

Design : premium local-service brand, pas un SaaS générique. Palette : navy #0F172A, ivory #F8F5EF, champagne #D6B87C, slate #475569, WhatsApp green #25D366. Typography via Google Fonts with next/font : Inter for body, Playfair Display for headings. Hero avec headline forte, subtle gradient, light glass cards, service quick cards, elegant shadows, rounded 2xl radii, tasteful micro-animations, sticky header, sticky mobile CTA bar. Respect prefers-reduced-motion. Utilise des placeholders réalistes, pas de lorem ipsum.

Homepage obligatoire : hero; trust ribbon; service cards; why choose us; who we help; 3-step process; quick lead form; testimonials; short FAQ; final contact CTA. Ajoute floating WhatsApp button + visible Call Now + Book Appointment CTA. N’utilise jamais “Get Started” comme CTA principal.

Composants réutilisables requis : Header, Footer, ServiceCard, HeroQuickActionCard, TrustBadgeRow, ReviewCard, FAQAccordion, ContactStrip, StickyMobileCTA, QuickLeadForm, ServiceLeadForm, UploadField, MapPlaceholder, LanguageSwitchPlaceholder, metadata/schema helpers.

Forms : validation required fields + inline errors + success/error states + honeypot + provider abstraction. Quick form fields : full name, phone, email, service needed, preferred contact method, message. Service forms : Translation and Immigration support file upload; Travel includes destination/dates/travelers/budget; Insurance includes insurance type; Driving includes level/schedule; all service forms include preferred date/time for booking request. WhatsApp prefilled message : “Hello Sanaa Services, I need help with [service]. Please contact me.” Legal Consultancy and Visa & Immigration pages must show clear disclaimers that the business provides administrative guidance/support and does not replace advice from a licensed attorney.

SEO/local SEO : unique metadata per page; sample title/description for home = “Sanaa Services | Notary, Insurance, Immigration & Travel in NYC” / “Trusted notary, translation, insurance, immigration and travel assistance in New York City.” Add Open Graph/Twitter images, sitemap, robots, canonical tags, JSON-LD for Organization and LocalBusiness, NAP in footer, sameAs social links, service-area copy.

Analytics/ops : GA4 event hooks (cta_click, call_click, whatsapp_click, form_start, form_submit, form_error, upload_start, upload_success, faq_open, service_card_click), GTM-ready dataLayer, Sentry placeholders, Lighthouse-friendly implementation.

Output attendu : clean folder structure, typed data/config for services/faq/testimonials/seo, reusable constants, README with setup/run/deploy/customization notes, Vercel-ready config.

Acceptance criteria : visually premium and coherent on mobile/tablet/desktop; all routes work; forms validate; upload UI works; CTA paths are obvious; no hero layout shift; keyboard accessible; WCAG 2.2 AA-minded; Lighthouse targets on production build = Performance >=85 mobile and >=95 desktop, Accessibility >=95, SEO >=95, Best Practices >=95.
```