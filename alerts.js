
function configurarAlerta(formID, alertID) {
    const form = document.getElementById(formID);
    const alert = document.getElementById(alertID);

    if (form && alert) {
        form.addEventListener('submit', function(e){
            e.preventDefault();

            alert.classList.remove('d-none');
            alert.classList.add('show');
            setTimeout(() => {
                alert.classList.remove("show");
                alert.classList.add("d-none");
            }, 3000);
            form.reset();
        });
    }
}

configurarAlerta("contact-form", "alerta-contato");
configurarAlerta("palestras-form", "alerta-palestras");
configurarAlerta("inscricao-form", "alerta-inscricao");
configurarAlerta("voluntariado-form", "alerta-voluntariado");

/*const contactForm = document.getElementById("contact-form");
const aContactForm = document.getElementById("alerta-contato");

if (contactForm && aContactForm) {
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();

    aContactForm.classList.remove('d-none');
    aContactForm.classList.add('show');
    setTimeout(() => {
      aContactForm.classList.remove("show");
      aContactForm.classList.add("d-none");
    }, 3000);
    contactForm.reset();
  });
}


const palestrasForm = document.getElementById("palestras-form");
const aPalestrasForm = document.getElementById("alerta-palestras");

if (palestrasForm && aPalestrasForm){
    palestrasForm.addEventListener('submit', function(e){
        e.preventDefault();

        aPalestrasForm.classList.remove('d-none');
        aPalestrasForm.classList.add('show');
        setTimeout(() => {
            aPalestrasForm.classList.remove('show');
            aPalestrasForm.classList.add('d-none');
        }, 3000);
        palestrasForm.reset();
    });
}*/

const doacaoBtn = document.getElementById("pix-btn");
const alertDoacao = document.getElementById("alerta-chavePix");

if(doacaoBtn && alertDoacao){
    doacaoBtn.addEventListener('click', () => {
        const pix = document.getElementById("pixKey");
        pix.select();
        pix.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alertDoacao.classList.remove('d-none');
        alertDoacao.classList.add('show');
        setTimeout(() => {
            alertDoacao.classList.remove('show');
            alertDoacao.classList.add('d-none');
        }, 2000);
    })
}