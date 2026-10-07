document.addEventListener('DOMContentLoaded', () => {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleBtn = document.getElementById('theme-toggle');

    if (document.documentElement.classList.contains('dark')) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }

    themeToggleBtn.addEventListener('click', function() {
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    });

    const translations = {
        id: {
            nav_sales: "Hubungi Sales",
            hero_title: "AI dan Implementasi AI <br>di Industri Contact Center",
            hero_desc: "Pendekatan minimalis dan cerdas untuk melayani pelanggan. Tingkatkan efisiensi agen, kurangi waktu tunggu, dan hadirkan pengalaman efisiensi teknologi AI dari kami.",
            hero_btn: "Pelajari Implementasi AI",
            features_title: "Penerapan",
            features_desc: "Tiga pilar utama operasional contact center melalui kecerdasan buatan.",
            card1_title: "Chatbot Cerdas 24/7",
            card1_desc: "Interaksi berbasis Natural Language Processing (NLP) yang mampu menangani keluhan dasar secara instan, tanpa intervensi agen manusia, kapan pun pelanggan membutuhkannya.",
            card2_title: "Analisis Sentimen Otomatis",
            card2_desc: "Sistem secara otomatis membaca nada dan emosi dari pesan teks atau suara pelanggan, memberikan wawasan real-time kepada agen untuk merespons dengan tingkat empati yang tepat.",
            card3_title: "Smart Ticket Routing",
            card3_desc: "Algoritma cerdas yang mendistribusikan tiket atau panggilan masuk secara otomatis ke agen spesifik berdasarkan keahlian, beban kerja, dan sejarah interaksi pelanggan sebelumnya.",
            cta_title: "Mulai Tingkatkan Layanan Anda",
            cta_desc: "Jadwalkan konsultasi dengan tim ahli kami untuk melihat bagaimana AI dapat disesuaikan dengan alur kerja contact center spesifik Anda.",
            footer_privacy: "Privasi",
            footer_terms: "Ketentuan"
        },
        en: {
            nav_sales: "Contact Sales",
            hero_title: "AI and AI Implementation <br>in the Contact Center Industry",
            hero_desc: "A minimalist and intelligent approach to customer service. Boost agent efficiency, reduce wait times, and deliver seamless AI-powered efficiency experiences from us.",
            hero_btn: "Explore AI Implementation",
            features_title: "Implementation",
            features_desc: "Three core pillars of contact center operational  through artificial intelligence.",
            card1_title: "24/7 Intelligent Chatbot",
            card1_desc: "Natural Language Processing (NLP)-based interactions capable of instantly handling basic inquiries without human agent intervention, whenever customers need them.",
            card2_title: "Automatic Sentiment Analysis",
            card2_desc: "The system automatically reads tone and emotion from text messages or customer voice inputs, providing real-time insights for agents to respond with the right level of empathy.",
            card3_title: "Smart Ticket Routing",
            card3_desc: "Intelligent algorithms that automatically distribute incoming tickets or calls to specific agents based on expertise, workload, and past interaction history.",
            cta_title: "Start Elevating Your Service",
            cta_desc: "Schedule a consultation with our expert team to see how AI can be tailored to your specific contact center workflow.",
            footer_privacy: "Privacy",
            footer_terms: "Terms"
        }
    };

    const langToggleBtn = document.getElementById('lang-toggle');
    const langLabel = document.getElementById('lang-label');

    let currentLang = localStorage.getItem('language') || 'id';
    
    function applyLanguage(lang) {
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        langLabel.textContent = lang === 'id' ? 'EN' : 'ID';
        localStorage.setItem('language', lang);
        document.documentElement.setAttribute('lang', lang);
    }

    applyLanguage(currentLang);

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        applyLanguage(currentLang);
    });
});