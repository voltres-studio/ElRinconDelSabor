// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const header = document.getElementById('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const currentYearSpan = document.getElementById('current-year');
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Establecer el año actual en el footer
    currentYearSpan.textContent = new Date().getFullYear();
    
    // Cambiar estilo del header al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Alternar menú móvil
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        
        // Cambiar el icono del botón
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Cerrar menú móvil al hacer clic en un enlace
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Manejar envío del formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener valores del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simulación de envío (en un caso real, aquí iría el código para enviar los datos a un servidor)
            const submitBtn = contactForm.querySelector('.btn-submit');
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Simulamos una respuesta después de 1.5 segundos
            setTimeout(function() {
                // Mostrar mensaje de éxito
                formStatus.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.';
                formStatus.classList.add('success');
                formStatus.classList.remove('error');
                formStatus.style.display = 'block';
                
                // Resetear el formulario
                contactForm.reset();
                
                // Restaurar el botón
                submitBtn.textContent = 'Enviar Mensaje';
                submitBtn.disabled = false;
                
                // Ocultar el mensaje después de 3 segundos
                setTimeout(function() {
                    formStatus.style.display = 'none';
                }, 3000);
            }, 1500);
        });
    }
    
    // Implementación simple de animación al scroll
    // Detectar cuando los elementos están en el viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Función para animar elementos cuando son visibles
    function handleScrollAnimations() {
        menuItems.forEach(item => {
            if (isElementInViewport(item) && !item.classList.contains('aos-animate')) {
                item.classList.add('aos-animate');
            }
        });
    }
    
    // Ejecutar al cargar la página y al hacer scroll
    window.addEventListener('scroll', handleScrollAnimations);
    window.addEventListener('load', handleScrollAnimations);
});