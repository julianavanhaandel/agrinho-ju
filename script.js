document.addEventListener('DOMContentLoaded', () => {
    // Adiciona uma classe para animar o cabeçalho ao carregar a página
    const header = document.querySelector('header');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            header.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 100); // Pequeno atraso para o CSS inicial renderizar
    }

    // Animação para as seções principais
    const sections = document.querySelectorAll('main section');
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% da seção visível para acionar
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 200);
                observer.unobserve(entry.target); // Para animar apenas uma vez
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
