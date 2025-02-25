// ==============================
// SCROLL SUAVE AL BOTÓN "¿CÓMO?"
// ==============================
document.querySelectorAll('.boton').forEach(boton => {
    boton.addEventListener('click', (e) => {
        const targetId = boton.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ==============================
// SCROLL AL BOTÓN DE "VER"
// ==============================
document.getElementById("scroll-btn")?.addEventListener("click", function() {
    document.getElementById("yo")?.scrollIntoView({
        behavior: "smooth"
    });
});

// ==============================
// PREGUNTAS FRECUENTES (FAQs)
// ==============================
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        answer.style.display = (answer.style.display === "none" || answer.style.display === "") ? "block" : "none";
    });
});

// ==============================
// ENVÍO DE FORMULARIO CON FORMSPREE
// ==============================
document.addEventListener("DOMContentLoaded", () => {
    const emailForm = document.getElementById("emailForm");
    if (emailForm) {
        emailForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    const confirmationMessage = document.getElementById("confirmationMessage");
                    if (confirmationMessage) {
                        confirmationMessage.style.display = "block";
                    }
                    form.reset();
                } else {
                    alert("Hubo un error al enviar el formulario. Inténtalo nuevamente.");
                }
            }).catch(() => {
                alert("Error de conexión. Inténtalo de nuevo.");
            });
        });
    }
});


// ==============================
// EFECTO HOVER EN GALERÍA DE PROYECTOS
// ==============================
document.querySelectorAll('.galeria a').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

// ==============================
// CONTROL DE VIDEO ÚNICO
// ==============================
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('play', () => {
        document.querySelectorAll('video').forEach(v => {
            if (v !== video) v.pause();
        });
    });
});

// Ampliar imágenes de los highlights
document.addEventListener('DOMContentLoaded', () => {
    const highlightImages = document.querySelectorAll('.highlight-img');

    if (highlightImages.length === 0) {
        console.error('No se encontraron imágenes con la clase highlight-img.');
        return;
    }

    highlightImages.forEach(img => {
        img.addEventListener('click', () => {
            console.log(`Imagen clickeada: ${img.src}`);

            // Crear modal
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = '1000';

            // Imagen dentro del modal
            const modalImg = document.createElement('img');
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modalImg.style.maxWidth = '90%';
            modalImg.style.maxHeight = '90%';
            modalImg.style.borderRadius = '10px';
            modalImg.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';

            // Botón de cierre
            const closeButton = document.createElement('span');
            closeButton.innerHTML = '&times;';
            closeButton.style.position = 'absolute';
            closeButton.style.top = '20px';
            closeButton.style.right = '30px';
            closeButton.style.fontSize = '40px';
            closeButton.style.color = 'white';
            closeButton.style.cursor = 'pointer';

            // Cerrar al hacer clic en la "X"
            closeButton.addEventListener('click', () => {
                document.body.removeChild(modal);
            });

            // Cerrar al hacer clic fuera de la imagen
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            });

            // Agregar contenido al modal
            modal.appendChild(modalImg);
            modal.appendChild(closeButton);
            document.body.appendChild(modal);
        });
    });

    console.log(`Se asignaron ${highlightImages.length} eventos de clic a las imágenes.`);
});


// ==============================
// BOTÓN "OTROS LINKS"
// ==============================
document.querySelector(".otros-links")?.addEventListener("click", () => {
    window.open("https://linktr.ee/celinetion", "_blank");
});
