
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