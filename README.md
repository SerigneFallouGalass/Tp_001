# Projet 001 : mon CV avec Vite et React

## 1. Création du projet

1. Dans l'explorateur de fichiers, créer un dossier de travail nommé `001`.
2. Ouvrir ce dossier directement dans VS Code : dans la barre d'adresse de l'explorateur, effacer le chemin, taper `code .` puis valider avec Entrée.
3. Ouvrir le terminal de VS Code : `Terminal > Nouveau terminal`.
4. Vérifier que Node.js est installé : `node -v`
5. Créer le projet : `npm create vite@latest 001`
   (framework : React, variante : JavaScript, linter : ESLint, ne pas installer ni lancer tout de suite).
6. Entrer dans le projet : `cd 001`
7. Installer les dépendances : `npm install`
8. Lancer le serveur : `npm run dev` (adresse : http://localhost:5173).

## 2. Nettoyage du projet

1. Vider le contenu de `README.md` et de `src/index.css`.
2. Supprimer `src/App.css`.
3. Remplacer le contenu de `src/App.jsx` par :

```jsx
function App() {
  return (
    <div>
      <h1>Mon CV</h1>
    </div>
  );
}

export default App;
```

**Syntaxe utilisée :**
- `function App() {...}` : déclare un composant, c'est une fonction.
- `return (...)` : renvoie ce qui sera affiché (du JSX, du HTML écrit dans du JavaScript).
- `export default App;` : exporte le composant par défaut, ce qui permet à `main.jsx` de l'importer.

## 3. Création des composants

Chaque composant est un fichier `.jsx` créé dans le dossier `src`.

**`InfoPerso.jsx`**
```jsx
export function InfoPerso() {
  return (
    <section>
      <h2>Informations personnelles</h2>
      <p>Nom : Serigne Fallou SECK</p>
      <p>Email : Sserignefallou61@gmail.com</p>
      <p>Téléphone : 78 235 94 58</p>
      <p>Ville : Dakar</p>
    </section>
  );
}
```

**`Competences.jsx`**
```jsx
export function Competences() {
  return (
    <section>
      <h2>Compétences</h2>
      <ul>
        <li>HTML / CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>C</li>
        <li>PHP</li>
        <li>Java</li>
        <li>Travail en équipe</li>
      </ul>
    </section>
  );
}
```

**`Experiences.jsx`**
```jsx
export function Experiences() {
  return (
    <section>
      <h2>Expériences</h2>
      <ul>
        <li>
          <strong>Président de la commission sociale de REB'B</strong> (UADB)
          <p>Pilotage de la commission et organisation d'actions sociales
          pour les étudiants.</p>
        </li>
        <li>
          <strong>3ème lauréat, Hult Prize 2026</strong> (UADB)
          <p>Conception et présentation d'un projet d'application AgriTech
          devant un jury.</p>
        </li>
        <li>
          <strong>Projet universitaire : serveur LAMP</strong>
          <p>Installation et configuration d'un serveur Linux, Apache,
          MySQL et PHP.</p>
        </li>
      </ul>
    </section>
  );
}
```

**Syntaxe utilisée :**
- Le nom du composant et du fichier commencent par une majuscule.
- `export function Nom() {...}` : export nommé, le composant devient utilisable dans d'autres fichiers.
- `<section>` : regroupe un bloc du CV.
- `<h2>` : titre de section.
- `<p>` : paragraphe.
- `<ul>` et `<li>` : liste et éléments de liste.
- `<strong>` : texte en gras.
- Le `return` ne contient qu'un seul élément parent (ici `<section>`).
- Chaque balise ouverte doit être refermée.

## 4. Assemblage dans App.jsx

```jsx
import { InfoPerso } from "./InfoPerso";
import { Competences } from "./Competences";
import { Experiences } from "./Experiences";

function App() {
  return (
    <div className="cv">
      <h1>Mon CV</h1>
      <InfoPerso />
      <Competences />
      <Experiences />
    </div>
  );
}

export default App;
```

**Syntaxe utilisée :**
- `import { InfoPerso } from "./InfoPerso";` : importe un composant (accolades obligatoires avec un export nommé, `./` désigne le même dossier).
- `<InfoPerso />` : affiche le composant avec une balise auto-fermante.
- `className="cv"` : en JSX, on écrit `className` à la place de `class` pour appliquer un style CSS.

## 5. Mise en forme (index.css)

Le style est écrit dans `src/index.css` :
- `@import url(...)` : charge la police Google Poppins.
- `body` : fond dégradé, police, centrage avec `display: flex` et `justify-content: center`.
- `.cv` : carte blanche (`background`, `padding`, `border-radius`, `box-shadow`).
- `h1`, `h2` : couleurs et bordure sous les titres.
- `ul`, `li`, `p`, `strong` : espacements et couleurs du texte.

**Syntaxe utilisée :**
- `selecteur { propriete: valeur; }` : structure d'une règle CSS.
- `.cv` : sélecteur de classe (il correspond à `className="cv"`).
- `body`, `h1`, `h2` : sélecteurs de balises.

## 6. Rôle des dossiers et fichiers
 
`src/` : Contient le code de l'application 
`src/main.jsx` : Point d'entrée : affiche `<App />` dans la page 
`src/App.jsx` : Composant principal qui assemble le CV 
`src/index.css` : Styles globaux (couleurs, police, centrage) 
`README.md` : Documentation du projet 

## 7. Les trois composants du CV

- `InfoPerso` : informations personnelles
- `Competences` : liste des compétences
- `Experiences` : parcours et réalisations