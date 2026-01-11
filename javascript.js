//  ==================================================
// Contém referências para todos os projetos, modelos, traduções;
// Carrega os cards de projetos e modelos no HTML automaticamente;
// Atualiza o URL localmente;
// Atualiza linguagem;
// ==================================================

let currentLanguage = "en";

const translations = {

    "en": {
        models: "MODELS",
        projects: "PROJECTS",
        animations: "ANIMATIONS",
        contact: "CONTACT",
        featured_projects: "FEATURED PROJECTS",
        featured_animations: "FEATURED ANIMATIONS",
        newest_animation: "NEWEST ANIMATION",
        whoami: "Who Am I",
        officialsns: "Official SNS",
        disclaimer: "HoloParty Models Disclaimer All rights to the original characters and intellectual property belong to COVER Corp. These models are not officially affiliated with  Hololive Production or COVER Corp. The models are created for use in HoloParty, an independent fan-made game project. This projects are not an official Hololive product.",
        miscellaneous: "Miscellaneous",
        games: "Games",
        gamemodding: "Game Modding",
        college: "College",
        video_animations: "VIDEO ANIMATIONS",
        holoparty_animations: "HOLOPARTY ANIMATIONS",
        model_animations: "MODEL ANIMATIONS",
        about: "ABOUT",
        about_me: "I am a Software Engineering Student who likes Game Development, 3D Modeling and Animation.\n In 2025 I decided I wanted to develop projects. Be part of something and understand how it was made.",
        q:"Q: Do you Have A Job Preference?",
        Q2:"Q: Since When do you program?",
        Q3:"Q: What Languages do you speak?",
        A1:"A: Yes. Programming, but I would totally work with 3D!",
        A2:"A: Made my first program using python when I was 15 years old. But it was very simple, 200 lines",
        A3:"A: Portuguese, English, Japanese and Spanish.",
    },

    "pt-br": {
        models: "MODELOS",
        projects: "PROJETOS",
        animations: "ANIMAÇÕES",
        contact: "CONTATO",
        featured_projects: "PROJETOS EM DESTAQUE",
        featured_animations: "ANIMAÇÕES EM DESTAQUE",
        newest_animation: "ANIMAÇÃO MAIS RECENTE",
        whoami: "Quem sou eu?",
        officialsns: "Redes Oficiais",
        disclaimer: "Aviso Legal sobre modelos Holoparty",
        miscellaneous: "Variados",
        games: "Jogos",
        gamemodding: "Modificação de Jogos",
        college: "Faculdade",
        video_animations: "VIDEOS DE ANIMAÇÕES",
        holoparty_animations: "ANIMAÇÕES HOLOPARTY",
        model_animations: "ANIMAÇÕES DESTE MODELO",
        about: "SOBRE MIM",
        about_me: "Eu sou um estudante de Engenharia de Software que gosta de Desenvolvimento de Jogos, Modelagem 3D e Animação.\n Em 2025 decidi que queria desenvolver projetos, ser parte de algo e entender como as coisas são feitas.",
        q:"Q: Você tem uma preferência de trabalho?",
        Q2:"Q: Desde quando você programa?",
        Q3:"Q: Quais linguages você fala?",
        A1:"A: Sim. Programação, mas eu totalmente trabalharia com 3D!",
        A2:"A: Fiz meu primeiro programa usando python quando eu tinha 15 anos. Mas era bem simples, 200 linhas.",
        A3:"Português, Inglês, Japonês e Espanhol.",
    }
};

const projectsData = 
[
    {
        id: "HoloParty",
        title: "HoloParty",
        category: "game",
        stats: ["In Development"],
        techs: ["Unity, Blender, C#"],
        images:
        {
            card: "/Portfolio/img/holoparty/holoparty-card.jpg",
            img1: "/Portfolio/img/holoparty/holoparty-1.jpg",
            img2: "/Portfolio/img/holoparty/holoparty-2.jpg",
            img3: "/Portfolio/img/holoparty/holoparty-3.jpg",
            img4: "/Portfolio/img/holoparty/holoparty-4.jpg"
        },
        desc: "HoloParty is A Co-op Multiplayer Unofficial Hololive game with fun minigames!",
        link: "Not Open Source"
    },
    {
        id: "Evil_Neuros_Betrayal",
        title: "Evil: Neuro’s Betrayal",
        category: "game",
        stats: ["In Development"],
        techs: ["Unity, Blender, C#"],
        images: 
        {
            card: "/Portfolio/img/evilgame/evilgame-card.png",
            img1: "/Portfolio/img/evilgame/evilgame-1.png",
            img2: "/Portfolio/img/evilgame/evilgame-2.png",
            img3: "/Portfolio/img/evilgame/evilgame-3.png",
            img4: "/Portfolio/img/evilgame/evilgame-4.png"
        },
        desc: "Evil: Neuro's Betrayal is an Unofficial Evil-Neuro's game.",
        link: "Not Open Source"
    },
    {
        id: "Project_Manager",
        title: "Project Manager",
        category: "miscellaneous",
        stats: ["In Development"],
        techs: ["Electron, SQLite, Html, CSS, JavaScript"],
        images: 
        {
            card: "/Portfolio/img/projectmanager/project-manager-card.png",
            img1: "/Portfolio/img/projectmanager/project-manager-1.png",
            img2: "/Portfolio/img/projectmanager/project-manager-2.png",
            img3: "/Portfolio/img/projectmanager/project-manager-3.png",
            img4: "/Portfolio/img/projectmanager/project-manager-4.png"
        },
        desc: "A Project Manager.",
        link: "https://github.com/M-Erm/Project-Manager"
    },
    {
        id: "Vtuber_Ultimate_Weapon_Pack",
        title: "Vtuber Ultimate Weapon Pack",
        category: "modding",
        stats: ["Archived"],
        techs: ["Java, Fabric API"],
        images: 
        {
            card: "/Portfolio/img/fabricmod/fabric-mod-card.png",
            img1: "/Portfolio/img/fabricmod/fabric-1.png",
            img2: "/Portfolio/img/fabricmod/fabric-2.png",
            img3: "/Portfolio/img/fabricmod/fabric-3.png",
            img4: "/Portfolio/img/fabricmod/fabric-4.png"
        },
        desc: "A Minecraft 1.21.1 Fabric Mod.",
        link: "https://github.com/M-Erm/Fabric-Minecraft-Mod"
    },
    {
        id: "project-05",
        title: "Minecraft Forge Mod",
        category: "modding",
        stats: ["Archived"],
        techs: ["Java, Forge API"],
        images: 
        {
            card: "/Portfolio/img/forgemod/forge-mod-card.png", //Teste por que sou acéfalo
            img1: "/Portfolio/img/forgemod/forge-1.png",
            img2: "/Portfolio/img/forgemod/forge-2.png",
            img3: "/Portfolio/img/forgemod/forge-3.png",
            img4: "/Portfolio/img/forgemod/forge-4.png"
        },
        desc: "A Minecraft 1.21.1 Forge Mod.",
        link: "https://github.com/M-Erm/Forge-MDK-Mod"
    },
    {
        id: "project-06",
        title: "Risk of Rain 2 Mod",
        category: "modding",
        stats: ["In Development"],
        techs: ["Unity, C#"],
        images:
        {
            card: "/Portfolio/img/ror2/ror2-card.png",
            img1: "/Portfolio/img/ror2/ror2-1.png",
            img2: "/Portfolio/img/ror2/ror2-2.png",
            img3: "/Portfolio/img/ror2/ror2-3.png",
            img4: "/Portfolio/img/ror2/ror2-4.png"
        },
        desc: "A Risk of Rain 2 Mod.",
        link: "https://github.com/M-Erm/"
    },
    {
        id: "project-07",
        title: "Terraria Mod",
        category: "modding",
        stats: ["In Development"],
        techs: ["Unity, C#"],
        images:
        {
            card: "/Portfolio/img/terraria/terraria-card.png",
            img1: "/Portfolio/img/terraria/terraria-1.png",
            img2: "/Portfolio/img/terraria/terraria-2.png",
            img3: "/Portfolio/img/terraria/terraria-3.png",
            img4: "/Portfolio/img/terraria/terraria-4.png"
        },
        desc: "A Terraria Mod.",
        link: "https://github.com/M-Erm/"
    },
    {
        id: "C_Calculator",
        title: "C Calculator",
        category: "college",
        stats: ["Finished"],
        techs: ["C"],
        images:
        {
            card: "/Portfolio/img/cc/cc-card.png",
            img1: "/Portfolio/img/cc/cc-1.png",
            img2: "/Portfolio/img/cc/cc-2.png",
            img3: "/Portfolio/img/cc/c-3.png",
            img4: "/Portfolio/img/cc/cc-4.png"
        },
        desc: "A C Calculator.",
        link: "https://github.com/M-Erm/Calculadora-C"
    },
    {
        id: "Python_Statistics",
        title: "Python Statistics",
        category: "college",
        stats: ["Finished"],
        techs: ["Python, pandas, matplotlb"],
        images:
        {
            card: "/Portfolio/img/statistics/statistics-card.png",
            img1: "/Portfolio/img/statistics/statistics-1.png",
            img2: "/Portfolio/img/statistics/statistics-2.png",
            img3: "/Portfolio/img/statistics/statistics-3.png",
            img4: "/Portfolio/img/statistics/statistics-4.png"
        },
        desc: "College Statistics Project developed in Python (silly one)",
        link: "https://github.com/M-Erm/1P-Estatistica"
    },
]

const modelsData = 
[
    {
        id: "model-01",
        name: "Fuwawa Abyssgard",
        category: "HoloParty",
        desc: "Unofficial Fuwawa Abyssgard - from Hololive.",
        about: "This model was created as a Holoparty 3D asset.",
        model3d: "/Portfolio/models/mococo_abyssgard.glb",
        sketchfab: "https://sketchfab.com/M-erm",
        images: 
        {
            posed: "img/fuwawa/fuwawa-posed.png",
            img1: "img/fuwawa/fuwawa-1.png",
            img2: "img/fuwawa/fuwawa-2.png",
            img3: "img/fuwawa/fuwawa-3.png",
            img4: "img/fuwawa/fuwawa-4.png",
        }
    },
    {
        id: "model-02",
        name: "Mococo Abyssgard",
        category: "HoloParty",
        desc: "Unofficial Mococo Abyssgard - from Hololive. HoloParty 3D Model.",
        about: "This model was created as a Holoparty 3D asset.",
        model3d: "/Portfolio/models/mococo_abyssgard.glb",
        sketchfab: "https://sketchfab.com/M-erm",
        images: 
        {
            posed: "/Portfolio/img/mococo/mococo-posed.png",
            img1: "/Portfolio/img/mococo/mococo-1.png",
            img2: "/Portfolio/img/mococo/mococo-2.png",
            img3: "/Portfolio/img/mococo/mococo-3.png",
            img4: "/Portfolio/img/mococo/mococo-4.png",
        }
    },
    {
        id: "model-03",
        name: "Shiori Novella",
        category: "HoloParty",
        desc: "Unofficial Shiori Novella - from Hololive. HoloParty 3D Model.",
        about: "This model was created as a Holoparty 3D asset.",
        model3d: "/Portfolio/models/mococo_abyssgard.glb",
        sketchfab: "https://sketchfab.com/M-erm",
        images: 
        {
            posed: "/Portfolio/img/shiori/shiori-posed.png",
            img1: "/Portfolio/img/shiori/shiori-1.png",
            img2: "/Portfolio/img/shiori/shiori-2.png",
            img3: "/Portfolio/img/shiori/shiori-3.png",
            img4: "/Portfolio/img/shiori/shiori-4.png",
        }
    },
    {
        id: "model-04",
        name: "Koseki Bijou",
        category: "HoloParty",
        desc: "Unofficial Koseki Bijou - from Hololive. HoloParty 3D Model.",
        about: "This model was created as a Holoparty 3D asset.",
        model3d: "/Portfolio/models/mococo_abyssgard.glb",
        sketchfab: "https://sketchfab.com/M-erm",
        images: 
        {
            posed: "/Portfolio/img/biboo/biboo-posed.png",
            img1: "/Portfolio/img/biboo/biboo-1.png",
            img2: "/Portfolio/img/biboo/biboo-2.png",
            img3: "/Portfolio/img/biboo/biboo-3.png",
            img4: "/Portfolio/img/biboo/biboo-4.png",
        }
    },
    {
        id: "model-05",
        name: "Evil Neuro",
        category: "Miscellaneous",
        desc: "Unofficial Evil Neuro. Evil: Neuro's Betrayal 3D Model.",
        about: "This model was created as a Evil: blablabla 3D asset.",
        model3d: "/Portfolio/models/mococo_abyssgard.glb",
        sketchfab: "https://sketchfab.com/M-erm",
        images: 
        {
            posed: "/Portfolio/img/evil/evil-posed.png",
            img1: "/Portfolio/img/evil/evil-1.png",
            img2: "/Portfolio/img/evil/evil-2.png",
            img3: "/Portfolio/img/evil/evil-3.png",
            img4: "/Portfolio/img/evil/evil-4.png",
        }
    }
]

const animationsData =
[
    {
        id: "animation-01",
        name: "",
        category: "video",
        link: ""
    },
    {
        id: "animation-02",
        name: "Mococo Walk",
        category: "ingame",
        link: ""
    },
    {
        id: "animation-03",
        name: "Fuwawa Walk",
        category: "ingame",
        link: ""
    },
]


const BASE_PATH ="/Portfolio";

const pages = document.querySelectorAll("main > section");
const main_page = document.getElementById('homepage');


window.addEventListener("popstate", () => // Setas do browser
{
    Navigate(window.location.pathname.replace(BASE_PATH, "")); //Pega o path da URL atual, remove a primeira parte e chama navigate
});

document.addEventListener("click", (click) =>
{
    const link = click.target.closest("a[data-route]"); // obs: Retorna um link completo
    if (!link) return;

    click.preventDefault();

    const path = link.getAttribute("href");
    Navigate(path);

    console.warn("Href do atributo:", path);
    console.warn("URL completa seria:", link.href);
})

function Navigate(path)
{
    path = path || ""; // Outra forma de dizer: If null = ""
    path = path.replace(/^\/+/, ""); // Regex escroto (Se achar / -> (,) limpa -> "" )

    const parts = path.split("/");

    if (parts[0] === "en" || parts[0] === "pt-br")
    {
        currentLanguage = parts[0];
        parts.shift();
        path = parts.join("/");
    }

    const pathWithLang = currentLanguage + "/" + path  || "";
    const fullUrl = `${BASE_PATH}/${pathWithLang}`;
    
    if (window.location.pathname !== fullUrl) // <-- Só muda URL real se for diferente da URL do código
    {
        history.pushState({},"", fullUrl);
    }
    
    const pathparts = path.split("/"); // Divide o path em base e id 
    const base = pathparts[0] || "";
    const id = pathparts[1] || null;

    if (base ==="")  // Dá valor ao pageId de acordo com o valor recebido. Útil para ativar página
        pageId = "homepage";
    else if (base ==="projects")
        pageId = id ? "project-view" : "projects"; 
    else if (base ==="models")
        pageId = id ? "model-view" : "models";
    else if (base ==="contact")
        pageId = "contact";
    else if (base ==="animations")
        pageId = "animations";

    pages.forEach(page => // Esconde todas as páginas 
    {
        page.classList.remove('page-active');
        page.classList.add('page-hidden');
    });

    document.getElementById("project-view").innerHTML = "";
    document.getElementById("model-view").innerHTML = "";

    const target = document.getElementById(pageId);

    if (target) // Ativa página target
    {
        target.classList.remove('page-hidden');
        target.classList.add('page-active');
    }

    if (base === "projects")
    {
        if (id)
            Load_Details_Project(id);
        else
            Load_Projects();
    }
    if (base === "models")
    {
        if (id)
            Load_Details_Models(id);
        else
            Load_Models();
    }

    ChangeLanguageHTML();
}

function Load_Projects()
{
    const projects = // Array 
    {
        Game: document.querySelector('#projects-games .projects-grid'),
        Modding: document.querySelector('#projects-modding .projects-grid'),
        Miscellaneous: document.querySelector('#projects-misc .projects-grid'),
        College: document.querySelector('#projects-college .projects-grid')
    }

    const cards = document.querySelectorAll(".card-project");

    cards.forEach(card => 
    {
        card.remove();
    });

    function createProjectCard(project) {
        return `
            <a href="projects/${project.id}" class="card-project" data-route>
                <img src="${project.images.card}" alt="${project.title} Preview">
                <h3>${project.title} </h3>
            </a>
        `;
    }

    Object.keys(projects).forEach(category => {  //Object.keys pega as Chaves (game, modding, etc) e foreach percorre elas e filtra 
        const filteredProjects = projectsData.filter(project => project.category === category.toLowerCase()); //Compara o valor da CHAVE de um array com o nome do outro

        filteredProjects.forEach(project => {
            projects[category].innerHTML += createProjectCard(project);
        });
    });
}

function Load_Models() // Filtra: Valor de Model.category comparado com nome da Chave Category e chama func
{
    const models = //Array
    {
        HoloParty: document.querySelector('#models-holoparty .models-grid'),
        Miscellaneous: document.querySelector("#models-misc .models-grid")
    }
    
    const cards = document.querySelectorAll(".card-model");

    cards.forEach(card => {
        card.remove();
    });

    function createModelCard(model) { 
        return ` 
            <li class="card-model" data-route>
                <a href="models/${model.id}"> 
                    <div class="img-box">
                        <figure>
                            <img src="${model.images.posed}" alt="${model.name} Preview">
                        </figure>
                        <div class="model-name">${model.name}</div>
                    </div>
                </a>
            </li>
        `;
    }

    Object.keys(models).forEach(category =>{ //Faz 2 coisas diferentes: Object.keys retorna array de chaves, foreach filtra cada chave e filteredModels tem algo tipo Games = games
        const filteredModels = modelsData.filter(model => model.category.toLowerCase() === category.toLowerCase());

        filteredModels.forEach(model => {
            models[category].innerHTML += createModelCard(model);
        });
    });
}

function Load_Details_Project(id)
{
    const projectInfo = document.getElementById("project-view");

    const project = projectsData.find((project) => project.id === id);

    if (!project)
    {
        projectInfo.innerHTML = "<p>Projeto não existe?</p>";
        return;
    }

    const project_view = `
        <div id="project-view-container">
            <div id="project-panel">
                <section id="project-info">
                    <div>Stats: ${project.stats} </div>
                    <div id="desc">${project.desc}</div>
                    <div id="techs">Techs: ${project.techs} </div>
                    <a href="${project.link}" id="github"><h1>Github</h1></a>
                </section>
                <section id="right-project-info">
                    <div class="project-title"> ${project.title} </div>
                    <div id="project-image-display"> <img id="image-display" src="${project.images.img1}" alt="${project.title} Preview"> </div>
                    <section id="project-images">
                        <img src="${project.images.img1}" onclick="ChangeProjectImage('${project.images.img1}')" alt="${project.title} Preview">
                        <img src="${project.images.img2}" onclick="ChangeProjectImage('${project.images.img2}')" alt="${project.title} Preview">
                        <img src="${project.images.img3}" onclick="ChangeProjectImage('${project.images.img3}')" alt="${project.title} Preview">
                        <img src="${project.images.img4}" onclick="ChangeProjectImage('${project.images.img4}')" alt="${project.title} Preview">
                    </section>
                </section>
            </div>
        </div>
    ` ;

    projectInfo.innerHTML = project_view;
}

function ChangeProjectImage(newImage)
{
    const displayImage = document.getElementById("image-display");
    displayImage.src = newImage;
}


function Load_Details_Models(id)
{
    console.log("ID recebido:", id);

    const modelInfo = document.getElementById("model-view");
    const model = modelsData.find((model) => model.id === id)

    console.log("Modelo encontrado?", model ? "SIM" : "NÃO");

    if (!model)
    {
        console.error("Modelo Não encontrado");
        return;
    }

    const model_view = `
        <div id="model-view-container">
            <div id="twod-view">
                <section id="model-images">
                    <img src="${model.images.posed}" onclick="ChangeDisplayImage('${model.images.posed}')" alt="${model.name} Preview">
                    <img src="${model.images.img1}" onclick="ChangeDisplayImage('${model.images.img1}')" alt="${model.name} Preview">
                    <img src="${model.images.img2}" onclick="ChangeDisplayImage('${model.images.img2}')" alt="${model.name} Preview">
                    <img src="${model.images.img3}" onclick="ChangeDisplayImage('${model.images.img3}')" alt="${model.name} Preview">
                    <img src="${model.images.img4}" onclick="ChangeDisplayImage('${model.images.img4}')" alt="${model.name} Preview">
                </section>
                <div id="twod-model">
                    <img id="display-image" src="${model.images.posed}" alt="${model.name} Preview">
                    <button class="view-3d-model" onclick="Toggle3D()">3D</button>
                </div>
            </div>

            <section id="model-info">
                <div class="model-info-name">${model.name}</div>
                <div class="model-info-desc">${model.desc}</div>
                <div class="model-info-about">${model.about}</div>
                <a href="${model.sketchfab}" class="sketchfab"> SketchFab </a>
            </section>
        </div>

        <div class="contrast-text" data-i18n="model_animations"> ${model.name} In-Game Animations </div>
        <div style="width: 100vw; min-height: 40vh; background-color: gray;">
            <div class="display-animation"></div>
            <div class="display-animation"></div>
            <div class="display-animation"></div>
        </div>
    `;

    modelInfo.innerHTML = model_view;
}

function ChangeDisplayImage(newimage)
{
    const displayImage = document.getElementById("display-image");
    displayImage.src = newimage;
}

function ChangeLanguage(targetLanguage)
{
    currentLanguage = targetLanguage;
    
    const fullPath = window.location.pathname;
    let currentPath = fullPath.replace(BASE_PATH + "/", "");    

    if (currentPath.startsWith("en/") || currentPath.startsWith("pt-br/"))
    {
        currentPath = currentPath.split("/").slice(1).join("/");
    }

    const newPath = targetLanguage + "/" + currentPath;

    Navigate(newPath);
 }

function ChangeLanguageHTML() 
{
    const words = document.querySelectorAll("[data-i18n]"); 

    words.forEach(word =>
    {
        const value = word.getAttribute("data-i18n");
        if (translations[currentLanguage] && translations[currentLanguage][value])
        {
            word.textContent = translations[currentLanguage][value]
        }
    });
 }

// Aparentemente só funciona localmente
window.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.replace(BASE_PATH, "");
    Navigate(currentPath);
});