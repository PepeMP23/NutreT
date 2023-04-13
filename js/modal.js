// Obtener los botones y los pasos
const nextBtn = document.querySelector('.next-step');
const prevBtn = document.querySelector('.prev-step');
const finalBtn = document.querySelector('.final-step');
const steps = document.querySelectorAll('div.modalClase');

// Contador de pasos
let currentStep = 0;

// Ocultar todos los pasos excepto el primero
steps.forEach((step, index) => {
  if (index !== currentStep) {
    step.classList.add('d-none');
  }
});

// Agregar evento al botón de "Siguiente"
nextBtn.addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    steps[currentStep].classList.add('d-none');
    steps[currentStep + 1].classList.remove('d-none');
    currentStep++;
    
    // Mostrar botón de "Anterior" si no es el primer paso
    if (currentStep > 0) {
      prevBtn.classList.remove('d-none');
    }
    
    // Mostrar botón de "Enviar" si es el último paso
    if (currentStep === steps.length - 1) {
      nextBtn.classList.add('d-none');
      finalBtn.classList.remove('d-none');
    }
  }
});

// Agregar evento al botón de "Anterior"
prevBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    steps[currentStep].classList.add('d-none');
    steps[currentStep - 1].classList.remove('d-none');
    currentStep--;
    
    // Mostrar botón de "Enviar" si es el último paso
    if (currentStep < steps.length - 1) {
      nextBtn.classList.remove('d-none');
      finalBtn.classList.add('d-none');
    }
    
    // Ocultar botón de "Anterior" si es el primer paso
    if (currentStep === 0) {
      prevBtn.classList.add('d-none');
    }
  }
});

// Agregar evento al botón de "Enviar"
finalBtn.addEventListener('click', () => {
    // Aquí puedes agregar tu código para enviar el formulario
    
    // Cerrar el modal
    const modal = document.querySelector('#exampleModalLabel');
    const modalInstance = bootstrap.Modal.getInstance(modal);

    // Reiniciar el modal
    currentStep = 0;
    steps.forEach((step, index) => {
      if (index !== currentStep) {
        step.classList.add('d-none');
      } else {
        step.classList.remove('d-none');
      }
    });
    prevBtn.classList.add('d-none');
    nextBtn.classList.remove('d-none');
    finalBtn.classList.add('d-none');
  });
