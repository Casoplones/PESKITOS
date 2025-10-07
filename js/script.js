// Datos de ejemplo para la plantilla
const jugadores = [
    { nombre: "Tomás", dorsal: 0, posicion: "Entrenador", foto: "/img/jugadores/tomas.webp" },
    { nombre: "Nacho", dorsal: 88, posicion: "Portero", foto: "/img/jugadores/nacho.webp" },
    { nombre: "Casas", dorsal: 18, posicion: "Defensa", foto: "/img/jugadores/casas.webp" },
    { nombre: "Lukas", dorsal: 7, posicion: "Defensa", foto: "/img/jugadores/lukas.webp" },
    { nombre: "Beltrán", dorsal: 23, posicion: "Defensa", foto: "/img/jugadores/beltran.webp" },
    { nombre: "Kaloun", dorsal: 67, posicion: "Defensa", foto: "/img/jugadores/kaloun.webp" },
    { nombre: "Gurry", dorsal: 6, posicion: "Centrocampista", foto: "/img/jugadores/gurry.webp" },
    { nombre: "Hugo", dorsal: 92, posicion: "Centrocampista", foto: "/img/jugadores/hugo.webp" },
    { nombre: "Hermoso", dorsal: 5, posicion: "Centrocampista", foto: "/img/jugadores/hermoso.webp" },
    { nombre: "Mateo", dorsal: 14, posicion: "Centrocampista", foto: "/img/jugadores/mateo.webp" },
    { nombre: "Miguel", dorsal: 98, posicion: "Centrocampista", foto: "/img/jugadores/miguel.webp" },
    { nombre: "Herrera", dorsal: 10, posicion: "Delantero", foto: "/img/jugadores/herrera.webp" },
    { nombre: "Diego", dorsal: 69, posicion: "Delantero", foto: "/img/jugadores/soon.webp" },
    { nombre: "Salas", dorsal: 9, posicion: "Delantero", foto: "/img/jugadores/salas.webp" },
    { nombre: "Nico", dorsal: 80, posicion: "Delantero", foto: "/img/jugadores/nico.webp" },
    { nombre: "Gastaca", dorsal: 1, posicion: "Delantero", foto: "/img/jugadores/gastaca.webp" }
];

// Datos de ejemplo para el calendario
const partidos = [
    { 
        rival: "Los Tigres", 
        local: false, 
        fecha: "2025-09-15", 
        hora: "18:00", 
        lugar: "SMP Retiro",
        equipacion: "blanca",
        escudo: "/img/equipos/inter.png"
    },
    { 
        rival: "Águilas FC", 
        local: true, 
        fecha: "2024-01-22", 
        hora: "17:30", 
        lugar: "SMP Retiro",
        equipacion: "blanca",
        escudo: "/img/equipos/inter.png"
    },
    { 
        rival: "Dragones Rojos", 
        local: false, 
        fecha: "2024-01-29", 
        hora: "19:00", 
        lugar: "SMP Retiro",
        equipacion: "blanca",
        escudo: "/img/equipos/inter.png"
    },
    { 
        rival: "Leones del Norte", 
        local: true, 
        fecha: "2024-02-05", 
        hora: "16:00", 
        lugar: "SMP Retiro",
        equipacion: "blanca",
        escudo: "/img/equipos/inter.png"
    }
];

const clasificacion = [
    { 
        posicion: 1, 
        equipo: "Peskitos FC", 
        escudo: "/img/equipos/escudo-peskitos.png",
        puntos: 0, 
        partidosJugados: 0, 
        golesFavor: 0, 
        golesContra: 0, 
        diferenciaGoles: 0 
    },
    { 
        posicion: 2, 
        equipo: "Proximamente", 
        escudo: "/img/equipos/icono.png",
        puntos: 0, 
        partidosJugados: 0, 
        golesFavor: 0, 
        golesContra: 0, 
        diferenciaGoles: 0 
    },
    { 
        posicion: 3, 
        equipo: "Proximamente", 
        escudo: "/img/equipos/icono.png",
        puntos: 0, 
        partidosJugados: 0, 
        golesFavor: 0, 
        golesContra: 0, 
        diferenciaGoles: 0 
    },
    { 
        posicion: 4, 
        equipo: "Proximamente", 
        escudo: "/img/equipos/icono.png",
        puntos: 0, 
        partidosJugados: 0, 
        golesFavor: 0, 
        golesContra: 0, 
        diferenciaGoles: 0 
    },
    { 
        posicion: 5, 
        equipo: "Proximamente", 
        escudo: "/img/equipos/icono.png",
        puntos: 0, 
        partidosJugados: 0, 
        golesFavor: 0, 
        golesContra: 0, 
        diferenciaGoles: 0 
    },
    { 
        posicion: 6, 
        equipo: "Proximamente", 
        escudo: "/img/equipos/icono.png",
        puntos: 0, 
        partidosJugados: 0, 
        golesFavor: 0, 
        golesContra: 0, 
        diferenciaGoles: 0 
    },
    { 
        posicion: 7, 
        equipo: "Proximamente", 
        escudo: "/img/equipos/icono.png",
        puntos: 0, 
        partidosJugados: 0, 
        golesFavor: 0, 
        golesContra: 0, 
        diferenciaGoles: 0 
    },
    { 
        posicion: 8, 
        equipo: "Proximamente", 
        escudo: "/img/equipos/icono.png",
        puntos: 0, 
        partidosJugados: 0, 
        golesFavor: 0, 
        golesContra: 0, 
        diferenciaGoles: 0 
    },
    { 
        posicion: 9, 
        equipo: "Proximamente", 
        escudo: "/img/equipos/icono.png",
        puntos: 0, 
        partidosJugados: 0, 
        golesFavor: 0, 
        golesContra: 0, 
        diferenciaGoles: 0 
    },
    { 
        posicion: 10, 
        equipo: "Proximamente", 
        escudo: "/img/equipos/icono.png",
        puntos: 0, 
        partidosJugados: 0, 
        golesFavor: 0, 
        golesContra: 0, 
        diferenciaGoles: 0 
    },
    { 
        posicion: 11, 
        equipo: "Proximamente", 
        escudo: "/img/equipos/icono.png",
        puntos: 0, 
        partidosJugados: 0, 
        golesFavor: 0, 
        golesContra: 0, 
        diferenciaGoles: 0 
    },
    { 
        posicion: 12, 
        equipo: "Proximamente", 
        escudo: "/img/equipos/icono.png",
        puntos: 0, 
        partidosJugados: 0, 
        golesFavor: 0, 
        golesContra: 0, 
        diferenciaGoles: 0 
    }
];

// Datos para los Starboys
const starboys = [
    { 
        nombre: "Sin datos", 
        dorsal: 0, 
        estadistica: 0, 
        tipo: "Goles",
        foto: "/img/jugadores/soon.png"
    },
    { 
        nombre: "Sin datos", 
        dorsal: 0, 
        estadistica: 0, 
        tipo: "Tarjetas Amarillas",
        foto: "/img/jugadores/soon.png"
    },
    { 
        nombre: "Sin datos", 
        dorsal: 0, 
        estadistica: 0, 
        tipo: "Tarjetas Rojas",
        foto: "/img/jugadores/soon.png"
    }
];

// Prevenir gestos de zoom y desplazamiento no deseado - FUNCIÓN FALTANTE
function preventUnwantedScroll() {
    // Prevenir zoom con dos dedos
    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    });
    
    document.addEventListener('gesturechange', function(e) {
        e.preventDefault();
    });
    
    document.addEventListener('gestureend', function(e) {
        e.preventDefault();
    });
    
    // Prevenir desplazamiento con dos dedos en algunos navegadores
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

// FUNCIÓN FALTANTE: Generar las tarjetas de jugadores
function generarPlantilla() {
    const container = document.getElementById('plantilla-container');
    if (!container) {
        console.error('No se encontró el contenedor de plantilla');
        return;
    }
    
    container.innerHTML = ''; // Limpiar contenedor
    
    jugadores.forEach((jugador, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-lg-3 player-col';
        
        // Determinar clase de posición para el estilo de color y filtrado
        const posicionClass = jugador.posicion.toLowerCase().replace(' ', '-');
        
        const imagenHTML = jugador.foto 
            ? `<img src="${jugador.foto}" alt="${jugador.nombre}" class="player-image">`
            : `<div class="player-image placeholder-image">${jugador.nombre}</div>`;
        
        col.innerHTML = `
            <div class="player-card" style="animation-delay: ${index * 0.1}s" data-position="${posicionClass}">
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
    
    // Inicializar funcionalidad de filtrado
    initFiltrosPlantilla();
}

// Función para expandir/plegar la plantilla (MEJORADA PARA MÓVIL)
function initTogglePlantilla() {
    const toggleBtn = document.getElementById('toggle-plantilla');
    const plantillaContainer = document.getElementById('plantilla-container');
    const filtrosContainer = document.getElementById('filtros-container');
    const plantillaSection = document.getElementById('plantilla');
    const icon = toggleBtn.querySelector('i');
    
    if (!toggleBtn || !plantillaContainer || !filtrosContainer || !plantillaSection) {
        console.error('Elementos necesarios para toggle no encontrados');
        return;
    }
    
    let isExpanded = true;
    
    toggleBtn.addEventListener('click', function() {
        isExpanded = !isExpanded;
        
        // Cambiar icono
        if (isExpanded) {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
            plantillaContainer.classList.remove('collapsed');
            filtrosContainer.classList.remove('collapsed');
            plantillaSection.classList.remove('container-collapsed', 'container-collapsed-mobile');
        } else {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
            plantillaContainer.classList.add('collapsed');
            filtrosContainer.classList.add('collapsed');
            
            // Añadir clases específicas para móvil
            if (window.innerWidth <= 768) {
                plantillaSection.classList.add('container-collapsed');
                if (window.innerWidth <= 576) {
                    plantillaSection.classList.add('container-collapsed-mobile');
                }
            }
        }
        
        // Añadir efecto de transición suave
        plantillaContainer.style.transition = 'all 0.3s ease';
        filtrosContainer.style.transition = 'all 0.3s ease';
        plantillaSection.style.transition = 'padding 0.3s ease';
        
        // Forzar reflow para mejor animación
        void plantillaSection.offsetWidth;
    });
    
    // Ajustar dinámicamente según el tamaño de pantalla
    window.addEventListener('resize', function() {
        if (!isExpanded) {
            if (window.innerWidth <= 768) {
                plantillaSection.classList.add('container-collapsed');
                if (window.innerWidth <= 576) {
                    plantillaSection.classList.add('container-collapsed-mobile');
                }
            } else {
                plantillaSection.classList.remove('container-collapsed', 'container-collapsed-mobile');
            }
        }
    });
}
// Función de filtrado (MEJORADA CON VALIDACIONES)
function initFiltrosPlantilla() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const playerCards = document.querySelectorAll('.player-card');
    const playerCols = document.querySelectorAll('.player-col');
    
    if (filterButtons.length === 0) {
        console.warn('No se encontraron botones de filtro');
        return;
    }

    // Cache de elementos críticos
    const plantillaContainer = document.getElementById('plantilla-container');
    const counter = document.querySelector('.filter-counter');

    // Pre-calcular filtros para mejor rendimiento
    const filterCache = new Map();
    
    // Función optimizada para filtrar jugadores
    function filtrarJugadores(filter) {
        // Usar requestAnimationFrame para mejor rendimiento visual
        requestAnimationFrame(() => {
            let visibleCount = 0;
            
            // Optimización: procesar en lotes para móvil
            const processBatch = (startIndex, batchSize = 5) => {
                const endIndex = Math.min(startIndex + batchSize, playerCards.length);
                
                for (let i = startIndex; i < endIndex; i++) {
                    const card = playerCards[i];
                    const col = playerCols[i];
                    const position = card.getAttribute('data-position');
                    
                    const shouldShow = filter === 'todos' || position === filter;
                    
                    if (shouldShow) {
                        card.classList.remove('hidden', 'filtered-out');
                        card.classList.add('filtered-in');
                        if (col) {
                            col.style.display = 'block';
                            col.style.willChange = 'transform'; // Optimización GPU
                        }
                        visibleCount++;
                    } else {
                        card.classList.remove('filtered-in');
                        card.classList.add('hidden', 'filtered-out');
                        if (col) {
                            col.style.display = 'none';
                        }
                    }
                }
                
                // Procesar siguiente lote si es necesario
                if (endIndex < playerCards.length) {
                    setTimeout(() => processBatch(endIndex, batchSize), 0);
                } else {
                    // Actualizar contador una vez al final
                    if (counter) {
                        counter.textContent = `${visibleCount} jugador${visibleCount !== 1 ? 'es' : ''} encontrado${visibleCount !== 1 ? 's' : ''}`;
                    }
                    
                    // Forzar composición layer para mejor rendimiento
                    playerCols.forEach(col => {
                        if (col.style.display === 'block') {
                            col.style.transform = 'translateZ(0)';
                        }
                    });
                }
            };
            
            // Iniciar procesamiento por lotes
            processBatch(0, window.innerWidth <= 768 ? 3 : 5); // Lotes más pequeños en móvil
        });
    }

    // Debounce para evitar múltiples ejecuciones rápidas
    let filterTimeout;
    function debouncedFilter(filter) {
        clearTimeout(filterTimeout);
        filterTimeout = setTimeout(() => filtrarJugadores(filter), 50);
    }

    // Event listeners optimizados
    filterButtons.forEach(button => {
        // Usar event delegation más eficiente
        button.addEventListener('click', function() {
            // Verificación rápida de estado colapsado
            if (plantillaContainer && plantillaContainer.classList.contains('collapsed')) {
                return;
            }
            
            const filter = this.getAttribute('data-filter');
            
            // Optimización: evitar re-render si ya está activo
            if (this.classList.contains('active')) return;
            
            // Cambiar estado de botones de forma eficiente
            filterButtons.forEach(btn => {
                btn.classList.toggle('active', btn === this);
            });
            
            // Aplicar filtro con debounce
            debouncedFilter(filter);
        });
        
        // Mejorar respuesta táctil en móvil
        if ('ontouchstart' in window) {
            button.addEventListener('touchstart', function(e) {
                this.style.transform = 'scale(0.95)';
            }, { passive: true });
            
            button.addEventListener('touchend', function(e) {
                this.style.transform = '';
            }, { passive: true });
        }
    });

    // Inicialización optimizada
    function initializeFilters() {
        // Usar MutationObserver para detectar cambios en la plantilla
        if (plantillaContainer) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && 
                        mutation.attributeName === 'class' &&
                        !plantillaContainer.classList.contains('collapsed')) {
                        // Re-aplicar filtro actual cuando se expande
                        const activeFilter = document.querySelector('.filter-btn.active');
                        if (activeFilter) {
                            const filter = activeFilter.getAttribute('data-filter');
                            debouncedFilter(filter);
                        }
                    }
                });
            });
            
            observer.observe(plantillaContainer, { 
                attributes: true, 
                attributeFilter: ['class'] 
            });
        }
        
        // Aplicar filtro inicial
        setTimeout(() => filtrarJugadores('todos'), 100);
        
        // Actualizar contadores después de la renderización inicial
        setTimeout(actualizarContadoresFiltros, 200);
    }

    // Inicializar cuando el contenido esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeFilters);
    } else {
        initializeFilters();
    }
}

// Función auxiliar para mejorar el rendimiento en filtros complejos
function optimizeFilterPerformance() {
    // Aplicar optimizaciones CSS para mejor rendimiento
    const style = document.createElement('style');
    style.textContent = `
        .player-col {
            contain: layout style paint;
            transform: translateZ(0);
        }
        .player-card {
            will-change: transform, opacity;
        }
        @media (max-width: 768px) {
            .player-card {
                transition: opacity 0.2s ease;
            }
            .filter-btn.active {
                transition: all 0.15s ease;
            }
        }
    `;
    document.head.appendChild(style);
}

// Llamar a la optimización al inicializar
optimizeFilterPerformance();

// Función para actualizar los contadores de jugadores por posición
function actualizarContadoresFiltros() {
    const counts = {
        'todos': jugadores.length,
        'entrenador': jugadores.filter(j => j.posicion.toLowerCase() === 'entrenador').length,
        'portero': jugadores.filter(j => j.posicion.toLowerCase() === 'portero').length,
        'defensa': jugadores.filter(j => j.posicion.toLowerCase() === 'defensa').length,
        'centrocampista': jugadores.filter(j => j.posicion.toLowerCase() === 'centrocampista').length,
        'delantero': jugadores.filter(j => j.posicion.toLowerCase() === 'delantero').length
    };
    
    // Actualizar los números en los botones
    document.querySelectorAll('.filter-btn').forEach(button => {
        const filter = button.getAttribute('data-filter');
        const countSpan = button.querySelector('.filter-count');
        if (countSpan && counts[filter] !== undefined) {
            countSpan.textContent = `(${counts[filter]})`;
        }
    });
}


// Función para generar los partidos del calendario MEJORADA
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Función para generar el calendario
function generarCalendario() {
    updateCalendar();
    
    // Event listeners para los controles del calendario
    document.getElementById('prev-month').addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    });
    
    document.getElementById('next-month').addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    });
    
    document.getElementById('today').addEventListener('click', () => {
        currentDate = new Date();
        currentMonth = currentDate.getMonth();
        currentYear = currentDate.getFullYear();
        updateCalendar();
    });
}

// Función para actualizar el calendario
function updateCalendar() {
    const monthYearElement = document.getElementById('calendar-month-year');
    const daysContainer = document.getElementById('calendar-days');
    
    if (!monthYearElement || !daysContainer) return;
    
    // Actualizar el título del mes y año
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    monthYearElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    // Limpiar el contenedor de días
    daysContainer.innerHTML = '';
    
    // Obtener el primer día del mes y el número de días
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay(); // 0 = Domingo, 1 = Lunes, etc.
    
    // Añadir días vacíos al principio si es necesario
    for (let i = 0; i < startingDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day empty';
        daysContainer.appendChild(emptyDay);
    }
    
    // Añadir los días del mes
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        // Formatear la fecha para comparar
        const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        // Verificar si hay partido en este día
        const partidoDelDia = partidos.find(partido => partido.fecha === dateString);
        
        if (partidoDelDia) {
            dayElement.classList.add('has-match');
            dayElement.innerHTML = `
                <div class="day-number">${day}</div>
                <div class="match-indicator">
                    <img src="${partidoDelDia.escudo}" alt="${partidoDelDia.rival}" class="team-logo-small">
                    <span class="match-time">${partidoDelDia.hora}</span>
                </div>
            `;
            
            // Añadir evento click para abrir el modal
            dayElement.addEventListener('click', () => openMatchModal(partidoDelDia));
        } else {
            dayElement.innerHTML = `<div class="day-number">${day}</div>`;
        }
        
        // Marcar el día actual
        const today = new Date();
        if (currentYear === today.getFullYear() && 
            currentMonth === today.getMonth() && 
            day === today.getDate()) {
            dayElement.classList.add('today');
        }
        
        daysContainer.appendChild(dayElement);
    }
}

// Función para abrir el modal con los detalles del partido
function openMatchModal(partido) {
    const modalBody = document.getElementById('matchModalBody');
    if (!modalBody) return;
    
    const escudoHTML = partido.escudo 
        ? `<img src="${partido.escudo}" alt="${partido.rival}" class="team-logo-modal">`
        : `<div class="team-logo-placeholder">${partido.rival.charAt(0)}</div>`;
    
    modalBody.innerHTML = `
        <div class="match-modal-content">
            <div class="match-header-modal">
                <div class="team-info ${partido.local ? 'rival' : 'peskitos'}">
                    ${partido.local ? partido.rival : 'PESKITOS'}
                </div>
                <div class="vs-badge-modal">VS</div>
                <div class="team-info ${partido.local ? 'peskitos' : 'rival'}">
                    ${partido.local ? 'PESKITOS' : partido.rival}
                </div>
            </div>
            
            <div class="team-logo-modal-container">
                ${escudoHTML}
            </div>
            
            <div class="match-details-modal">
                <div class="detail-item-modal">
                    <i class="far fa-calendar"></i>
                    <span>${partido.fecha}</span>
                </div>
                <div class="detail-item-modal">
                    <i class="far fa-clock"></i>
                    <span>${partido.hora}</span>
                </div>
                <div class="detail-item-modal">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${partido.lugar}</span>
                </div>
                <div class="detail-item-modal">
                    <i class="fas fa-shirt"></i>
                    <span>Equipación: ${partido.equipacion}</span>
                </div>
                <div class="detail-item-modal">
                    <i class="fas fa-home"></i>
                    <span>${partido.local ? 'Partido como local' : 'Partido como visitante'}</span>
                </div>
            </div>
        </div>
    `;
    
    // Mostrar el modal
    const matchModal = new bootstrap.Modal(document.getElementById('matchModal'));
    matchModal.show();
}

// Función para generar la tabla de clasificación - VERSIÓN CORREGIDA
function generarClasificacion() {
    const tbody = document.getElementById('tabla-clasificacion-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    clasificacion.forEach((equipo, index) => {
        const tr = document.createElement('tr');
        
        // Determinar clase especial para Peskitos FC
        const isPeskitos = equipo.equipo === 'Peskitos FC';
        const peskitosClass = isPeskitos ? 'team-peskitos' : '';
        
        // Determinar clase de posición para los primeros puestos
        let positionClass = '';
        if (equipo.posicion === 1) positionClass = 'position-1';
        else if (equipo.posicion === 2) positionClass = 'position-2';
        else if (equipo.posicion === 3) positionClass = 'position-3';
        
        // Determinar clases para estadísticas
        const dgClass = equipo.diferenciaGoles > 0 ? 'stats-positive' : 
                       equipo.diferenciaGoles < 0 ? 'stats-negative' : 'stats-neutral';
        
        const escudoHTML = equipo.escudo 
            ? `<img src="${equipo.escudo}" alt="${equipo.equipo}" class="team-logo-table">`
            : `<div class="team-logo-table placeholder-logo" style="background: linear-gradient(45deg, #333, #555); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.8rem;">${equipo.equipo.charAt(0)}</div>`;
        
        tr.className = `${peskitosClass} ${positionClass}`;
        tr.style.animationDelay = `${index * 0.1}s`;
        
        // CORREGIDO: Orden correcto de las columnas según los encabezados
        tr.innerHTML = `
            <td class="text-center">${equipo.posicion}</td>
            <td>
                <div class="team-info">
                    ${escudoHTML}
                    <span class="team-name">${equipo.equipo}</span>
                </div>
            </td>
            <td class="text-center">${equipo.partidosJugados}</td>
            <td class="text-center">${equipo.puntos}</td>
            <td class="text-center">${equipo.golesFavor}</td>
            <td class="text-center">${equipo.golesContra}</td>
            <td class="text-center ${dgClass}">${equipo.diferenciaGoles > 0 ? '+' : ''}${equipo.diferenciaGoles}</td>
        `;
        
        tbody.appendChild(tr);
    });
}

// Función para inicializar el toggle de la clasificación
function initToggleClasificacion() {
    const toggleBtn = document.getElementById('toggle-clasificacion');
    const clasificacionContainer = document.getElementById('clasificacion-container');
    const clasificacionSection = document.getElementById('clasificacion');
    const icon = toggleBtn.querySelector('i');
    
    if (!toggleBtn || !clasificacionContainer || !clasificacionSection) {
        console.error('Elementos necesarios para toggle de clasificación no encontrados');
        return;
    }
    
    let isExpanded = true;
    
    toggleBtn.addEventListener('click', function() {
        isExpanded = !isExpanded;
        
        // Cambiar icono
        if (isExpanded) {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
            clasificacionContainer.classList.remove('collapsed');
            clasificacionSection.classList.remove('container-collapsed', 'container-collapsed-mobile');
        } else {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
            clasificacionContainer.classList.add('collapsed');
            
            // Añadir clases específicas para móvil
            if (window.innerWidth <= 768) {
                clasificacionSection.classList.add('container-collapsed');
                if (window.innerWidth <= 576) {
                    clasificacionSection.classList.add('container-collapsed-mobile');
                }
            }
        }
        
        // Añadir efecto de transición suave
        clasificacionContainer.style.transition = 'all 0.4s ease';
        clasificacionSection.style.transition = 'padding 0.4s ease';
        
        // Forzar reflow para mejor animación
        void clasificacionSection.offsetWidth;
    });
    
    // Ajustar dinámicamente según el tamaño de pantalla
    window.addEventListener('resize', function() {
        if (!isExpanded) {
            if (window.innerWidth <= 768) {
                clasificacionSection.classList.add('container-collapsed');
                if (window.innerWidth <= 576) {
                    clasificacionSection.classList.add('container-collapsed-mobile');
                }
            } else {
                clasificacionSection.classList.remove('container-collapsed', 'container-collapsed-mobile');
            }
        }
    });
    
    // Inicializar estado según el tamaño de pantalla
    if (window.innerWidth <= 768 && !isExpanded) {
        clasificacionSection.classList.add('container-collapsed');
        if (window.innerWidth <= 576) {
            clasificacionSection.classList.add('container-collapsed-mobile');
        }
    }
}

// Función para generar los Starboys - VERSIÓN MÓVIL SEGURA
function generarStarboy() {
    const container = document.getElementById('starboy-container');
    if (!container) return;
    
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

// ... [el resto de las funciones permanecen igual] ...

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

// Función completa para header sticky y menú móvil
function initHeaderAndMenu() {
    // HEADER STICKY
    const header = document.querySelector('header');
    
    // Forzar posición sticky
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.left = '0';
    header.style.width = '100%';
    header.style.zIndex = '1000';
    
    // Ajustar padding del body
    document.body.style.paddingTop = header.offsetHeight + 'px';
    
    // MENÚ MÓVIL - Cerrar al hacer click
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Solo en móvil
            if (window.innerWidth <= 992) {
                // Cerrar el menú
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
            
            // Smooth scroll para el enlace clickeado
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Recalcular en resize
    window.addEventListener('resize', function() {
        document.body.style.paddingTop = header.offsetHeight + 'px';
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

// Variables globales para el carrusel
let currentGalleryIndex = 0;
let galleryInterval;



// Inicializar todo cuando se carga la página (ESTA PARTE DEBE IR AL FINAL)
document.addEventListener('DOMContentLoaded', function() {
    initHeaderAndMenu();
    preventUnwantedScroll();
    generarPlantilla();
    generarCalendario();
    generarClasificacion();
    generarStarboy();
    initSmoothScroll();
    initScrollAnimations();
    initParallax();
    initHeaderEffects();
    initActiveNav();
    initPreloader();
    initTogglePlantilla();
    initToggleClasificacion(); // <-- Añadir esta línea
    initStatsCounter();
    initAboutCardsAnimation();
    initAboutCardsHover();
    initAboutImageEffect();
    initFooterFunctionalities();
});