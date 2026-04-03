import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      appTitle: 'JAAYMA',
      tabs: {
        products: 'Produits',
        wishlist: 'Favoris',
        cart: 'Panier',
        orders: 'Commandes',
        profile: 'Profil',
        dashboard: 'Dashboard'
      },
      common: {
        call: 'Appeler',
        email: 'Mail',
        link: 'Lien',
        loading: 'Chargement...',
        retry: 'Réessayer'
      },
      home: {
        title: 'Bienvenue sur JAAYMA',
        subtitle: 'Centre de vente collaboratif entre vendeurs, clients et influenceurs.',
        bannerTitle: 'Promotions du moment',
        bannerTag: 'Livraison Dakar 24–48h, paiement sécurisé.',
        empty: 'Aucun produit pour le moment.',
        error: 'Erreur de chargement'
      },
      wishlist: {
        title: 'Vos favoris',
        empty: 'Aucun favori pour l’instant.'
      },
      cart: {
        title: 'Votre panier',
        delivery: 'Livraison',
        total: 'Total',
        checkout: 'Payer'
      },
      orders: {
        title: 'Commandes'
      },
      profile: {
        title: 'Profil',
        theme: 'Thème',
        theme_light: 'Clair',
        theme_dark: 'Sombre',
        theme_system: 'Système',
        language: 'Langue',
        sign_in: 'Se connecter',
        sign_out: 'Se déconnecter',
        go_admin: 'Aller au Dashboard Admin',
        go_seller: 'Aller au Dashboard Vendeur',
        go_amb: 'Aller au Dashboard Ambassadeur',
        role: 'Rôle',
        buyer: 'Client',
        seller: 'Vendeur',
        ambassador: 'Ambassadeur',
        admin: 'Admin'
      },
      dashboard: {
        admin: 'Dashboard Admin',
        seller: 'Dashboard Vendeur',
        ambassador: 'Dashboard Ambassadeur',
        no_access: 'Accès réservé aux vendeurs / ambassadeurs / admins.'
      }
    }
  },
  en: {
    translation: {
      appTitle: 'JAAYMA',
      tabs: {
        products: 'Products',
        wishlist: 'Wishlist',
        cart: 'Cart',
        orders: 'Orders',
        profile: 'Profile',
        dashboard: 'Dashboard'
      },
      common: {
        call: 'Call',
        email: 'Email',
        link: 'Link',
        loading: 'Loading...',
        retry: 'Retry'
      },
      home: {
        title: 'Welcome to JAAYMA',
        subtitle: 'Collaborative marketplace between sellers, customers and influencers.',
        bannerTitle: 'Hot deals',
        bannerTag: 'Dakar delivery 24–48h, secure payment.',
        empty: 'No product yet.',
        error: 'Loading error'
      },
      wishlist: {
        title: 'Your favourites',
        empty: 'No favourite yet.'
      },
      cart: {
        title: 'Your cart',
        delivery: 'Delivery',
        total: 'Total',
        checkout: 'Checkout'
      },
      orders: {
        title: 'Orders'
      },
      profile: {
        title: 'Profile',
        theme: 'Theme',
        theme_light: 'Light',
        theme_dark: 'Dark',
        theme_system: 'System',
        language: 'Language',
        sign_in: 'Sign in',
        sign_out: 'Sign out',
        go_admin: 'Go to Admin dashboard',
        go_seller: 'Go to Seller dashboard',
        go_amb: 'Go to Ambassador dashboard',
        role: 'Role',
        buyer: 'Buyer',
        seller: 'Seller',
        ambassador: 'Ambassador',
        admin: 'Admin'
      },
      dashboard: {
        admin: 'Admin dashboard',
        seller: 'Seller dashboard',
        ambassador: 'Ambassador dashboard',
        no_access: 'Restricted area (non customer).'
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'fr',
  compatibilityJSON: 'v3',
  interpolation: { escapeValue: false }
});

export default i18n;
