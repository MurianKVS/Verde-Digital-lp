# Verde-Digital-lp

# 🌱 Verde Digital - Landing Page

## 📋 Sobre o Projeto

Projeto acadêmico de landing page para a **ONG Verde Digital** (fictícia), desenvolvido como trabalho de faculdade para praticar desenvolvimento web front-end.

O site simula uma organização dedicada à coleta, reciclagem e educação sobre o descarte correto de lixo eletrônico, apresentando projetos, impactos ambientais e formas de contribuição.

## 🎯 Objetivo do Projeto

Desenvolver uma landing page completa e responsiva para praticar:
- Estruturação semântica com HTML5
- Estilização e design responsivo com CSS3
- Interatividade com JavaScript
- Integração de bibliotecas externas (Bootstrap, Chart.js)
- Organização de arquivos e estrutura de projeto
- Boas práticas de desenvolvimento front-end

## ✨ Funcionalidades

### Página Principal (index.html)
- **Home**: Apresentação da ONG com call-to-action
- **Quem Somos**: Missão, visão, valores e história da organização
- **Projetos**: Cards com os três principais programas
- **Impactos**: Gráficos interativos (Chart.js) mostrando resultados
- **Como Ajudar**: Opções de doação, voluntariado e parceria
- **Galeria**: Carrossel de imagens das ações realizadas
- **Contato**: Formulário e links para redes sociais

### Páginas de Projetos
- **Doação de Equipamentos** (`equipamentos.html`): Agenda de campanhas de coleta
- **Palestras** (`palestras.html`): Formulário de solicitação para eventos educativos
- **Oficinas** (`oficinas.html`): Programação de workshops práticos
- **Inscrição em Oficinas** (`inscricao-oficina.html`): Formulário de pré-inscrição

### Páginas de Ajuda
- **Doações Financeiras** (`doacao.html`): QR Code PIX e dados bancários
- **Voluntariado** (`voluntariado.html`): Formulário de candidatura
- **Parcerias** (`parceiros.html`): Informações sobre parcerias corporativas

## 🛠️ Tecnologias Utilizadas

### Front-end
- **HTML5**: Estrutura semântica
- **CSS3**: Estilização customizada e responsiva
- **JavaScript**: Interatividade e funcionalidades
- **Bootstrap 4.1.3**: Framework CSS para layout responsivo

### Bibliotecas
- **Chart.js**: Gráficos interativos de impacto
- **jQuery 3.3.1**: Manipulação DOM (via Bootstrap)
- **Popper.js**: Tooltips e popovers
- **Google Fonts**: Fonte Roboto

### Recursos Externos
- **Icons8**: Ícones de redes sociais
- **CDNJS**: CDN para bibliotecas JavaScript

## 📁 Estrutura de Arquivos

```
Verde-Digital-lp/
│
├── index.html              # Página principal
├── style.css               # Estilos globais
├── scripts.js              # Lógica dos gráficos e carrossel
├── alerts.js               # Sistema de alertas para formulários
├── README.md               # Documentação do projeto
│
├── assets/                 # Recursos visuais
│   ├── logo0.png
│   ├── logo2.png
│   ├── home-bg.png
│   ├── historia-img.jpg
│   ├── equipamentos.png
│   ├── palestras.jpg
│   ├── eletronicos.jpg
│   ├── pixQrcode.png
│   └── galery/            # Imagens do carrossel
│       ├── img1.jpg
│       ├── img2.jpg
│       └── ...
│
├── projects/              # Páginas dos projetos
│   ├── equipamentos.html
│   ├── palestras.html
│   ├── oficinas.html
│   ├── inscricao-oficina.html
│   └── projects.css
│
└── helps/                 # Páginas de apoio
    ├── doacao.html
    ├── voluntariado.html
    ├── parceiros.html
    └── helps.css
```

## 📊 Gráficos de Impacto

O site utiliza **Chart.js** para exibir dados visuais dos impactos da ONG:

- **Palestras Realizadas**: Gráfico de rosca (doughnut) mostrando distribuição por tipo de local
- **Oficinas Realizadas**: Gráfico de barras horizontal por cidade
- **Cidades Auxiliadas**: Gráfico de barras vertical
- **Campanhas**: Gráfico de linha temporal mostrando evolução mensal

## 🎨 Paleta de Cores

```css
--bg: #f5fff9;                    /* Fundo claro */
--dark-green-color: #012b0d;      /* Verde escuro */
--main-green: #025c1c;            /* Verde médio principal */
--light-green-color: #e8f8ef;     /* Verde claro */
--vibrant-green: #22c55e;         /* Verde vibrante */
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints para:
- **Desktop**: > 950px
- **Tablet**: 768px - 950px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 📝 Formulários

Todos os formulários incluem:
- Validação HTML5 (campos required)
- Alertas de sucesso animados (apenas visual)
- Reset automático após envio
- Design consistente e acessível

> ⚠️ **Nota**: Os formulários são apenas para fins demonstrativos e não enviam dados para nenhum servidor.

## 🎓 Aprendizados

Este projeto permitiu praticar e consolidar conhecimentos em:
- HTML semântico e acessibilidade
- CSS Grid e Flexbox para layouts responsivos
- Manipulação do DOM com JavaScript
- Integração de bibliotecas externas
- Organização de código e arquivos

## 📄 Licença

Projeto desenvolvido para fins educacionais.

---

💚 **Projeto Acadêmico - Verde Digital**