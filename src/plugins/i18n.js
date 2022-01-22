import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        HOME: 'HOME',
        FEATURES: 'About',
        ABOUT: 'Getting Started',
        // MARKETPLACE: 'MARKETPLACE',
        CONTACT: 'CONTACT US',
        Immortalise: 'Easily create NFTs',
        Connect:'Engage with your fan communities',
        Digitalize:'Monetize & grow securely',
        Pro:'Apply now!',
        // Watch:'Watch Video for More Details'
    },
    'es': {
        HOME: 'Beranda',
        FEATURES: 'Tentang',
        ABOUT: 'Mulai',
        // MARKETPLACE: 'Marketplace',
        CONTACT: 'Hubungi kami',
        Immortalise: 'Buat NFTs dengan mudah',
        Connect:'Terhubung dengan komunitas fan anda',
        Digitalize:'Monetisasi dengan aman',
        Pro:'Daftar sekarang',
        // Watch:'Tonton Video untuk Lebih Jelasnya',
        Language:'Pilih bahasa'
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;
