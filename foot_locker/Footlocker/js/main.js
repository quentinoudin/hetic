/* ========================================
   FOOT LOCKER - TRIPLE SHOOT
   JavaScript Main
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Éléments du DOM
    const playBtn = document.getElementById('playBtn');
    const rulesBtn = document.getElementById('rulesBtn');
    const legalLink = document.getElementById('legalLink');
    const rulesModal = document.getElementById('rulesModal');
    const legalModal = document.getElementById('legalModal');
    const closeRulesModal = document.getElementById('closeRulesModal');
    const closeLegalModal = document.getElementById('closeLegalModal');
    const boxes = document.querySelectorAll('.box');

    // ========================================
    // GESTION DES MODALS
    // ========================================

    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Ouvrir modal règles du jeu
    rulesBtn.addEventListener('click', function() {
        openModal(rulesModal);
    });

    // Ouvrir modal mentions légales
    legalLink.addEventListener('click', function(e) {
        e.preventDefault();
        openModal(legalModal);
    });

    // Fermer les modals
    closeRulesModal.addEventListener('click', function() {
        closeModal(rulesModal);
    });

    closeLegalModal.addEventListener('click', function() {
        closeModal(legalModal);
    });

    // Fermer modal en cliquant à l'extérieur
    rulesModal.addEventListener('click', function(e) {
        if (e.target === rulesModal) {
            closeModal(rulesModal);
        }
    });

    legalModal.addEventListener('click', function(e) {
        if (e.target === legalModal) {
            closeModal(legalModal);
        }
    });

    // Fermer modal avec Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal(rulesModal);
            closeModal(legalModal);
        }
    });

    // ========================================
    // BOUTON JOUER
    // ========================================

    playBtn.addEventListener('click', function() {
        // Animation du bouton
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);

        // TODO: Implémenter la logique du jeu
        // Pour l'instant, affiche une alerte
        alert('Le jeu va commencer ! (À implémenter)');
    });

    // ========================================
    // ANIMATION DES BOÎTES
    // ========================================

    boxes.forEach((box, index) => {
        // Animation au survol
        box.addEventListener('mouseenter', function() {
            this.style.transform = `scale(1.1) rotate(${(index % 2 === 0 ? -1 : 1) * 5}deg)`;
            this.style.zIndex = '10';
        });

        box.addEventListener('mouseleave', function() {
            // Restaurer la position originale
            const rotations = [-5, 5, -3, 8];
            this.style.transform = `rotate(${rotations[index]}deg)`;
            this.style.zIndex = '';
        });

        // Animation de clic
        box.addEventListener('click', function() {
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                const rotations = [-5, 5, -3, 8];
                this.style.transform = `rotate(${rotations[index]}deg)`;
            }, 150);
        });
    });

    // ========================================
    // ANIMATION D'ENTRÉE
    // ========================================

    function animateOnLoad() {
        // Animation des boîtes à l'entrée
        boxes.forEach((box, index) => {
            box.style.opacity = '0';
            box.style.transform = 'translateY(50px)';

            setTimeout(() => {
                box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                box.style.opacity = '1';
                const rotations = [-5, 5, -3, 8];
                box.style.transform = `rotate(${rotations[index]}deg)`;
            }, 100 * index);
        });

        // Animation du texte et des boutons
        const description = document.querySelector('.description-text');
        const buttons = document.querySelectorAll('.btn');

        if (description) {
            description.style.opacity = '0';
            description.style.transform = 'translateY(20px)';

            setTimeout(() => {
                description.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                description.style.opacity = '1';
                description.style.transform = 'translateY(0)';
            }, 400);
        }

        buttons.forEach((btn, index) => {
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(20px)';

            setTimeout(() => {
                btn.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }, 500 + (100 * index));
        });
    }

    // Lancer l'animation au chargement
    animateOnLoad();
});
