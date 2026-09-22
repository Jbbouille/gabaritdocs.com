# Site GabaritDoc

Site statique (HTML, CSS, un peu de JS), sans build : publier le dossier tel quel.

## Remplacer les visuels

- **Logo** : `assets/logo.svg` (en-tête, pied de page, favicon), `assets/logo.png` (icône mobile) et
  `favicon.ico`, copiés depuis les icônes de l'application (`resources/app-icon.*`).
- **Capture de l'application** : `assets/capture.png` (document de démonstration, barre d'état coupée
  car elle affiche le chemin local du fichier). Si le fichier est absent, une maquette HTML s'affiche
  à la place. Utiliser uniquement des données fictives. Largeur conseillée : 2000 px.

## E-mail

L'adresse est protégée contre les robots (`assets/email.js`, techniques « link interaction » et
« text interaction » de Spencer Mortensen) : elle n'apparaît en clair ni dans le HTML ni dans le JS.

## Formulaire de contact (Google Forms)

Intégré en iframe dans la section `#contact` de `index.html`. Si des champs sont ajoutés au
formulaire, reprendre la hauteur (`height`) donnée par Google dans le code d'intégration.
