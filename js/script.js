// Datos de ejemplo para la plantilla
const jugadores = [
    { nombre: "Nacho", dorsal: 88, posicion: "Portero", foto: "/img/jugadores/cr7.jpg" },
    { nombre: "Casas", dorsal: 18, posicion: "Defensa", foto: "/img/jugadores/cr7.jpg" },
    { nombre: "Lukas", dorsal: 7, posicion: "Defensa", foto: "/img/jugadores/cr7.jpg" },
    { nombre: "Beltrán", dorsal: 23, posicion: "Defensa", foto: "/img/jugadores/cr7.jpg" },
    { nombre: "Kaloun", dorsal: 67, posicion: "Defensa", foto: "/img/jugadores/cr7.jpg" },
    { nombre: "Gurry", dorsal: 6, posicion: "Centrocampista", foto: "/img/jugadores/cr7.jpg" },
    { nombre: "Hugo", dorsal: 92, posicion: "Centrocampista", foto: "/img/jugadores/cr7.jpg" },
    { nombre: "Hermoso", dorsal: 5, posicion: "Centrocampista", foto: "/img/jugadores/cr7.jpg" },
    { nombre: "Mateo", dorsal: 14, posicion: "Centrocampista", foto: "/img/jugadores/cr7.jpg" },
    { nombre: "Miguel", dorsal: 98, posicion: "Centrocampista", foto: "/img/jugadores/cr7.jpg" },
    { nombre: "Herrera", dorsal: 10, posicion: "Delantero", foto: "/img/jugadores/cr7.jpg" },
    { nombre: "Diego", dorsal: 69, posicion: "Delantero", foto: "/img/jugadores/cr7.jpg" },
    { nombre: "Salas", dorsal: 9, posicion: "Delantero", foto: "/img/jugadores/cr7.jpg" },
    { nombre: "Nico", dorsal: 80, posicion: "Delantero", foto: "/img/jugadores/cr7.jpg" },
    { nombre: "Gastaca", dorsal: 1, posicion: "Delantero", foto: "/img/jugadores/cr7.jpg" }
];

// Datos de ejemplo para el calendario
const partidos = [
    { 
        rival: "Los Tigres", 
        local: false, 
        fecha: "15/10/2023", 
        hora: "18:00", 
        lugar: "SMP Retiro",
        equipacion: "blanca",
        escudo: "/img/equipos/inter.png"
    },
    { 
        rival: "Águilas FC", 
        local: true, 
        fecha: "22/10/2023", 
        hora: "17:30", 
        lugar: "SMP Retiro",
        equipacion: "blanca",
        escudo: "/img/equipos/inter.png"
    },
    { 
        rival: "Dragones Rojos", 
        local: false, 
        fecha: "29/10/2023", 
        hora: "19:00", 
        lugar: "SMP Retiro",
        equipacion: "blanca",
        escudo: "/img/equipos/inter.png"
    },
    { 
        rival: "Leones del Norte", 
        local: true, 
        fecha: "05/11/2023", 
        hora: "16:00", 
        lugar: "SMP Retiro",
        equipacion: "blanca",
        escudo: "/img/equipos/inter.png"
    }
];

// Datos para los Starboys
const starboys = [
    { 
        nombre: "Carlos Torres", 
        dorsal: 9, 
        estadistica: 15, 
        tipo: "Goles",
        foto: "/img/jugadores/cr7.jpg"
    },
    { 
        nombre: "Javier López", 
        dorsal: 10, 
        estadistica: 12, 
        tipo: "Asistencias",
        foto: "/img/jugadores/cr7.jpg"
    },
    { 
        nombre: "Miguel Ángel", 
        dorsal: 7, 
        estadistica: 24, 
        tipo: "Goles + Asistencias",
        foto: "/img/jugadores/cr7.jpg"
    }
];

// Función para generar las tarjetas de jugadores MEJORADA
function generarPlantilla() {
    const container = document.getElementById('plantilla-container');
    
    jugadores.forEach((jugador, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-lg-3';
        
        // Determinar clase de posición para el estilo de color
        const posicionClass = jugador.posicion.toLowerCase().replace(' ', '-');
        
        const imagenHTML = jugador.foto 
            ? `<img src="${jugador.foto}" alt="${jugador.nombre}" class="player-image">`
            : `<div class="player-image placeholder-image">${jugador.nombre}</div>`;
        
        col.innerHTML = `
            <div class="player-card" style="animation-delay: ${index * 0.1}s">
                <div class="player-image-container">
                    <div class="dorsal">${jugador.dorsal}</div>
                    ${imagenHTML}
                </div>
                <div class="player-info">
                    <h4>${jugador.nombre}</h4>
                    <span class="player-position ${posicionClass}">${jugador.posicion}</span>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
}

// Función para generar los partidos del calendario MEJORADA
function generarCalendario() {
    const container = document.getElementById('calendario-container');
    
    partidos.forEach((partido, index) => {
        const matchCard = document.createElement('div');
        const esProximo = index === 0; // El primer partido como "próximo"
        const cardClass = `match-card ${partido.local ? 'local' : 'visitante'} ${esProximo ? 'proximo' : ''}`;
        
        matchCard.className = cardClass;
        matchCard.style.animationDelay = `${index * 0.2}s`;
        
        const escudoHTML = partido.escudo 
            ? `<img src="${partido.escudo}" alt="${partido.rival}" class="team-logo-img">`
            : `<div class="team-logo-placeholder">${partido.rival.charAt(0)}</div>`;
        
        matchCard.innerHTML = `
            <div class="match-header">
                <div class="team-logo">
                    ${escudoHTML}
                </div>
                <div class="vs-container">
                    <div class="team-name ${partido.local ? 'rival' : 'peskitos'}">
                        ${partido.local ? partido.rival : 'PESKITOS'}
                    </div>
                    <div class="vs-badge">VS</div>
                    <div class="team-name ${partido.local ? 'peskitos' : 'rival'}">
                        ${partido.local ? 'PESKITOS' : partido.rival}
                    </div>
                </div>
            </div>
            
            <div class="match-info">
                <div class="match-status">${partido.local ? '🏠 Local' : '✈️ Visitante'}</div>
                <div class="match-details">
                    <div class="detail-item">
                        <i class="far fa-calendar"></i>
                        <span class="detail-text">${partido.fecha}</span>
                    </div>
                    <div class="detail-item">
                        <i class="far fa-clock"></i>
                        <span class="detail-text">${partido.hora}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span class="detail-text">${partido.lugar}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-shirt"></i>
                        <span class="detail-text">${partido.equipacion}</span>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(matchCard);
    });
}

// Función para generar los Starboys - VERSIÓN MÓVIL SEGURA
function generarStarboy() {
    const container = document.getElementById('starboy-container');
    
    // Detectar si es móvil
    const isMobile = window.innerWidth <= 768;
    
    const row = document.createElement('div');
    row.className = 'row justify-content-center';
    
    starboys.forEach((starboy, index) => {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-4';
        
        // Añadir clase específica para móvil
        const mobileClass = isMobile ? 'starboy-mobile' : '';
        
        const imagenHTML = starboy.foto 
            ? `<img src="${starboy.foto}" alt="${starboy.nombre}" class="player-image">`
            : `<div class="player-image placeholder-image">${starboy.nombre}</div>`;
        
        col.innerHTML = `
            <div class="starboy-card ${mobileClass}" style="animation-delay: ${index * 0.1}s">
                <div class="player-image-container">
                    <div class="dorsal">${starboy.dorsal}</div>
                    ${imagenHTML}
                </div>
                <div class="player-info">
                    <h4>${starboy.nombre}</h4>
                    <p class="stat-number">${starboy.estadistica}</p>
                    <p class="stat-label">${starboy.tipo}</p>
                </div>
            </div>
        `;
        
        row.appendChild(col);
    });
    
    container.appendChild(row);
}

// Animación de contador para las estadísticas de "Sobre Nosotros"
function initStatsCounter() {
    const statItems = document.querySelectorAll('.stat-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                const target = parseInt(statNumber.getAttribute('data-count'));
                animateCounter(statNumber, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statItems.forEach(item => {
        observer.observe(item);
    });
    
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 30);
    }
}

// Animaciones para las tarjetas de "Sobre Nosotros"
function initAboutCardsAnimation() {
    const aboutCards = document.querySelectorAll('.about-card');
    const statItems = document.querySelectorAll('.stat-item');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar tarjetas de sobre nosotros
    aboutCards.forEach(card => {
        observer.observe(card);
    });
    
    // Observar items de estadísticas
    statItems.forEach(item => {
        observer.observe(item);
    });
}

// Observador de intersección para animaciones al hacer scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar secciones principales
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observar elementos individuales
    document.querySelectorAll('.player-card, .match-card, .starboy-card').forEach(el => {
        observer.observe(el);
    });
}

// Smooth scroll mejorado
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Efecto parallax para el hero section
function initParallax() {
    const hero = document.getElementById('hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Efecto de scroll en el header
function initHeaderEffects() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Resaltar enlace activo en el navbar
function initActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const headerHeight = document.querySelector('header').offsetHeight;
            
            if (window.scrollY >= (sectionTop - headerHeight - 50)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Preloader opcional
function initPreloader() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 500);
    });
}

// Función para expandir/plegar la plantilla
function initTogglePlantilla() {
    const toggleBtn = document.getElementById('toggle-plantilla');
    const plantillaContainer = document.getElementById('plantilla-container');
    const icon = toggleBtn.querySelector('i');
    
    let isExpanded = true;
    
    toggleBtn.addEventListener('click', function() {
        isExpanded = !isExpanded;
        
        // Cambiar icono
        if (isExpanded) {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
            plantillaContainer.classList.remove('collapsed');
        } else {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
            plantillaContainer.classList.add('collapsed');
        }
        
        // Añadir efecto de transición suave
        plantillaContainer.style.transition = 'all 0.4s ease';
    });
}

// Efectos de hover para las tarjetas de "Sobre Nosotros"
function initAboutCardsHover() {
    const aboutCards = document.querySelectorAll('.about-card');
    
    aboutCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Efecto de imagen en "Sobre Nosotros"
function initAboutImageEffect() {
    const aboutImage = document.querySelector('.about-image');
    if (!aboutImage) return;
    
    aboutImage.addEventListener('mouseenter', function() {
        this.style.transform = 'perspective(1000px) rotateY(0deg)';
        const img = this.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1.05)';
        }
    });
    
    aboutImage.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateY(-5deg)';
        const img = this.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1)';
        }
    });
}

// Funcionalidades para el footer mejorado
function initFooterFunctionalities() {
    // Botón volver arriba
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Efectos hover para enlaces del footer
    const footerLinks = document.querySelectorAll('.footer-links a, .social-link');
    
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Botón de unirse al equipo
    const joinButton = document.querySelector('.btn-join');
    if (joinButton) {
        joinButton.addEventListener('click', function() {
            // Scroll a la sección de contacto o abrir formulario
            const contactSection = document.querySelector('.contact-info');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// Inicializar todo cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    generarPlantilla();
    generarCalendario();
    generarStarboy();
    
    initSmoothScroll();
    initScrollAnimations();
    initParallax();
    initHeaderEffects();
    initActiveNav();
    initPreloader();
    initTogglePlantilla();
    initStatsCounter();
    initAboutCardsAnimation();
    initAboutCardsHover();
    initAboutImageEffect();
    initFooterFunctionalities();

});
