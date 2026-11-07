# DriveNow — Car Rental Demo

Site vitrine React + Vite conçu comme démonstration commerciale pour Webora Studio.

## Démarrer en local

```bash
npm install
npm run dev
```

Puis ouvrir l'adresse indiquée par Vite (généralement http://localhost:5173).

## Construire pour la production

```bash
npm run build
npm run preview
```

## Personnalisation indispensable avant publication

1. Dans `src/main.jsx`, remplacer `WHATSAPP_NUMBER` par le vrai numéro de l'agence, au format international sans `+` ni espaces.
2. Remplacer le nom DriveNow, la ville, les prix, les véhicules et les coordonnées par les informations du vrai client.
3. Les véhicules, tarifs et disponibilités affichés sont fictifs : cette version est un prototype marketing, pas un système de réservation confirmé.
4. Les photos sont chargées depuis Unsplash. Pour une publication commerciale, vérifier les droits/conditions des images choisies ou utiliser les photos fournies par le client.
5. Ajouter les mentions légales, politique de confidentialité et les conditions de location du client avant mise en production.

## Fonctionnalités

- Design responsive mobile / desktop
- Navigation mobile
- Catalogue de véhicules avec filtres et recherche
- Fiche véhicule en fenêtre modale
- Formulaire de demande de réservation
- Liens WhatsApp préremplis

Le formulaire transmet une demande via WhatsApp. Il ne vérifie pas les disponibilités et ne confirme pas automatiquement une réservation.
