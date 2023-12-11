# To-do List

Ceci est une To-do List avec possibilité de faire le CRUD fait avec la stack MERN

## Architecture

L'application TodoList utilise la stack MERN :

- **MongoDB:** Base de données NoSQL pour la flexibilité.
  
- **Express.js:** Backend minimaliste avec routes RESTful.

- **React.js:** Frontend réactif.

- **Node.js:** Exécution du serveur backend.

## Choix Techniques

- **Base de Données:** MongoDB.

- **Backend:** Node.js, Express.js avec Mongoose pour la gestion des données.

- **Frontend:** React.js.

## Développement Local

- **Nodemon:** Redémarrage automatique du serveur backend.

Cette architecture favorise la simplicité et la rapidité de développement pour une TodoList efficace avec la stack MERN.

## Configuration

Avant de commencer, assurez-vous d'avoir [Node.js](https://nodejs.org/) et [Yarn](https://yarnpkg.com/) installés sur votre machine.

### Installation des dépendances

Accédez au répertoire du backend et installez les dépendances du backend :

**yarn install**

Puis, accédez au répertoire du frontend et installez les dépendances du frontend :

**cd front**
**yarn install**

### Configuration de la base de données

Créez un fichier .env à la racine du projet.
Ajoutez votre chaîne de connexion MongoDB dans le fichier .env avec la clé CONNECTION_STRING :

**CONNECTION_STRING=VOTRE_CHAINE_DE_CONNEXION_MONGODB**

# Backend
Accédez au répertoire du backend et lancez le serveur backend avec la commande suivante :

**npx nodemon**

# Frontend

Accédez au répertoire du frontend et démarrez l'application frontend avec la commande suivante :

**yarn dev**

L'application sera accessible à l'adresse **http://localhost:3000**.


