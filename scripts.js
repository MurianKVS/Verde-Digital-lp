
const defaultOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#22c55e',
                borderWidth: 1,
                cornerRadius: 8
            }
        },
        animation: {
            duration: 1500,
            easing: 'easeInOutQuart'
        }
    };

// Grafico redondo (Palestras realizadas)
new Chart(document.getElementById("chartPalestras"), {
    type: "doughnut",
    data: {
        labels: ["Escolas", "Empresas", "Faculdades", "Locais Públicos"],
        datasets: [{
            data: [25,15,30,20],
            backgroundColor: ["#86efac", "#4aa8deff", "#22c55e", "#163865ff"],
            borderWidth: 0,
            hoverOffset: 8
        }]
    },
    options: {
        ...defaultOptions,
        cutout: '60%',
        plugins: {
            ...defaultOptions.plugins,
            legend: { 
                position: "bottom",
                labels: {
                    padding: 15,
                    usePointStyle: true,
                    font: {
                        size: 11
                    }
                }
            }
        }
    }
});

// Grafico de barras horizontal (Oficinas realizadas)
new Chart(document.getElementById("chartOficinas"), {
    type: "bar",
    data: {
        labels: ["Campinas", "Hortolândia", "Valinhos", "Sumaré", "Vinhedo", "Limeira"],
        datasets: [{
            label: "Oficinas",
            data: [18, 13, 12, 10, 9, 6],
            backgroundColor: "#22c55e",
            borderRadius: 6
        }]
    },
    options: {
        ...defaultOptions,
        indexAxis: "y",
        plugins: {
            ...defaultOptions.plugins,
            legend: {display: false}
        },
        scales: {
            x: {beginAtZero: true, ticks: { color: "#166534"}, grid: {color: "#e5e7eb"}},
            y: {ticks: { color: "#166534"}, grid: {display: false}}
        }
    }
});

// Grafico de barras vertical (Cidades Auxiliadas)
new Chart(document.getElementById("chartCidades"), {
    type: "bar",
    data: {
        labels: ["Campinas", "Valinhos", "Sumaré", "Hortolândia", "Vinhedo", "Limeira"],
        datasets: [{
            label: "Cidades",
            data: [61, 47, 45, 44, 39, 33],
            backgroundColor: "#163865ff",
            borderRadius: 6,
        }]
    },
    options: {
        ...defaultOptions,
        plugins: { 
            ...defaultOptions.plugins,
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true, ticks: { color: "#166534" }, grid: { color: "#e5e7eb" } },
            x: { ticks: { color: "#166534" }, grid: { display: false } }
        }
    }
});

// Grafico de linha (Campanhas reaizadas)
new Chart(document.getElementById("chartCampanhas"), {
    type: "line",
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
            label: "Campanhas",
            data: [2, 3, 4, 6, 4, 5, 4, 3, 5, 2, 6],
            borderColor: "#22c55e",
            backgroundColor: "rgba(34,197,94,0.15)",
            fill: true,
            tension: 0.3,
            pointRadius: 5,
            pointBackgroundColor: "#22c55e"
        }]
    },
    options: {
        plugins: {
            legend: { display: false}
        },
        scales: {
            y: {beginAtZero: true, ticks: {color: "#166534"}, grid: {color: "#e5e7eb"}},
            x: {ticks: { color: "#166534"}, grid: {display: false}}
        }
    }
});

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function ShowSlide(index){
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    ShowSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  ShowSlide(currentIndex);
});


function copyPix() {
      const pix = document.getElementById("pixKey");
      pix.select();
      pix.setSelectionRange(0, 99999);
      document.execCommand("copy");
      alert("Chave Pix copiada com sucesso!");
}