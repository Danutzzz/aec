// Sidebar

const sidebar = document.querySelector('#sidebar');
const sidebarToggler = document.querySelector('.sidebar_toggler');

// Toggling the Sidebar
sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

// Closing the Sidebar on clicking Outside and on the Sidebar-Links
window.addEventListener('click', (e) => {
    if (e.target.id !== 'sidebar' && !e.target.classList.contains('sidebar_toggler')) {
        sidebar.classList.remove('show');
    }
});
window.addEventListener('scroll', () => {
    // Obținem poziția de scroll actuală
    let scrollPosition = window.scrollY;

    // Verificăm dacă poziția de scroll este mai mare decât 200px
    if (scrollPosition > 10) {
        // Secțiunea a fost mutată mai jos cu 200px, adăugăm clasa pentru modificarea fundalului
        document.querySelector('.background-change').classList.add('background-black');
    } else {
        // Secțiunea nu este mutată suficient de jos, eliminăm clasa pentru a reveni la fundalul original
        document.querySelector('.background-change').classList.remove('background-black');
    }
});

window.addEventListener('scroll', () => {
    // Obținem poziția de scroll actuală
    let scrollPosition = window.scrollY;

    // Verificăm dacă poziția de scroll este mai mare decât o anumită valoare (de exemplu, 400px)
    if (scrollPosition > 400) {
        // Elementul sau secțiunea dorită se află la o poziție suficient de jos, adăugăm clasa pentru schimbarea culorii textului
        document.querySelector('.sidebar_toggler').classList.add('text-black');
    } else {
        // Elementul sau secțiunea nu este suficient de jos, eliminăm clasa pentru a reveni la culoarea textului originală
        document.querySelector('.sidebar_toggler').classList.remove('text-black');
    }
});
