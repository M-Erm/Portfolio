//  ==================================================
// Contém dados, carrega os cards de projetos e modelos no HTML e atualiza os links localmente.
// ==================================================

const projectsData = 
[
    {
        id: "project-01",
        title: "HoloParty",
        category: "game",
        stats: ["In Development"],
        techs: ["Unity, Blender, C#"],
        images:
        {
            card: "/img/holoparty-card.png",
            img1: "/img/holoparty-1.png",
            img2: "/img/holoparty-2.png",
            img3: "/img/holoparty-3.png",
            img4: "/img/holoparty-4.png"
        },
        desc: "HoloParty is A Co-op Multiplayer Hololive game.",
        link: "https://github.com/M-Erm/"
    },
    {
        id: "project-02",
        title: "Evil: Neuro’s Betrayal",
        category: "game",
        stats: ["In Development"],
        techs: ["Unity, Blender, C#"],
        images: 
        {
            card: "/img/Neuro-fight-card.png",
            img1: "/img/Neuro-fight-1.png",
            img2: "/img/Neuro-fight-2.png",
            img3: "/img/Neuro-fight-3.png",
            img4: "/img/Neuro-fight-4.png"
        },
        desc: "",
        link: "https://github.com/M-Erm/"
    },
    {
        id: "project-03",
        title: "Project Manager",
        category: "miscellaneous",
        stats: ["In Development"],
        techs: ["Electron, SQLite, Html, CSS, JavaScript"],
        images: 
        {
            card: "/img/project-manager-card.png",
            img1: "/img/project-manager-1.png",
            img2: "/img/project-manager-2.png",
            img3: "/img/project-manager-3.png",
            img4: "/img/project-manager-4.png"
        },
        desc: "A Project Manager.",
        link: "https://github.com/M-Erm/Project-Manager"
    },
    {
        id: "project-04",
        title: "Minecraft Fabric Mod",
        category: "modding",
        stats: ["Archived"],
        techs: ["Java, Fabric API"],
        images: 
        {
            card: "/img/fabric-card.png",
            img1: "/img/fabric-1.png",
            img2: "/img/fabric-2.png",
            img3: "/img/fabric-3.png",
            img4: "/img/fabric-4.png"
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
            card: "/img/forge-card.png",
            img1: "/img/forge-1.png",
            img2: "/img/forge-2.png",
            img3: "/img/forge-3.png",
            img4: "/img/forge-4.png"
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
            card: "/img/ror2-card.png",
            img1: "/img/ror2-1.png",
            img2: "/img/ror2-2.png",
            img3: "/img/ror2-3.png",
            img4: "/img/ror2-4.png"
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
            card: "/img/terraria-card.png",
            img1: "/img/terraria-1.png",
            img2: "/img/terraria-2.png",
            img3: "/img/terraria-3.png",
            img4: "/img/terraria-4.png"
        },
        desc: "A Terraria Mod.",
        link: "https://github.com/M-Erm/"
    },
    {
        id: "project-08",
        title: "C Calculator",
        category: "college",
        stats: ["Finished"],
        techs: ["C"],
        images:
        {
            card: "/img/CC-card.png",
            img1: "/img/CC-1.png",
            img2: "/img/CC-2.png",
            img3: "/img/CC-3.png",
            img4: "/img/CC-4.png"
        },
        desc: "A C Calculator.",
        link: "https://github.com/M-Erm/"
    },
    {
        id: "project-09",
        title: "Java Calculator",
        category: "college",
        stats: ["Finished"],
        techs: ["Java"],
        images:
        {
            card: "/img/JC-card.png",
            img1: "/img/JC-1.png",
            img2: "/img/JC-2.png",
            img3: "/img/JC-3.png",
            img4: "/img/JC-4.png"
        },
        desc: "A Java Calculator.",
        link: ""
    },
]

const modelsData = 
[
    {
        id: "model-01",
        name: "Fuwawa Abyssgard",
        category: "HoloParty",
        desc: "Unofficial Fuwawa Abyssgard - from Hololive. HoloParty 3D Model.",
        sketchfab: "https://sketchfab.com/M-erm",
        images: 
        {
            posed: "/img/fuwawa-posed.png",
            img1: "/img/fuwawa-1.png",
            img2: "/img/fuwawa-2.png",
            img3: "/img/fuwawa-3.png",
            img4: "/img/fuwawa-4.png",
        }
    },
    {
        id: "model-02",
        name: "Mococo Abyssgard",
        category: "HoloParty",
        desc: "Unofficial Mococo Abyssgard - from Hololive. HoloParty 3D Model.",
        sketchfab: "https://sketchfab.com/M-erm",
        images: 
        {
            posed: "/img/mococo-posed.png",
            img1: "/img/mococo-1.png",
            img2: "/img/mococo-2.png",
            img3: "/img/mococo-3.png",
            img4: "/img/mococo-4.png",
        }
    },
    {
        id: "model-03",
        name: "Evil Neuro",
        category: "Miscellaneous",
        desc: "Unofficial Evil Neuro. Evil: Neuro's Betrayal 3D Model.",
        sketchfab: "https://sketchfab.com/M-erm",
        images: 
        {
            posed: "/img/evil-posed.png",
            img1: "/img/evil-1.png",
            img2: "/img/evil-2.png",
            img3: "/img/evil-3.png",
            img4: "/img/evil-4.png",
        }
    }
]

const BASE_PATH ="/Portfolio";

const pages = document.querySelectorAll("main > section");
const main_page = document.getElementById('main');

window.addEventListener("popstate", () =>
{
    Navigate(window.location.pathname.replace(BASE_PATH, "") || "/");
});

document.addEventListener("click", (e) =>
{
    const link = e.target.closest("a[data-route]");
    if (!link) return;

    e.preventDefault();

    const fullpath = new URL(link.href).pathname;
    const path = fullpath.replace(BASE_PATH, "") || "/";
    Navigate(path);
})

function Navigate(path) // Remove página atual, cria nova 
{
    if (!path) path = "/"; //Se não existir ele vai pra home

    const newUrl = BASE_PATH + path; // path é o /projects, fullpath é o /Portfolio/projects
    if (window.location.pathname !== newUrl){ //
        history.pushState({},"", newUrl);
    }

    const parts = path.replace(/^\/+/, "").split("/"); //Divide o pageId em base e id, SE tiver ID, vai pro -view.
    //const lang = parts[0]; //Linguagem
    const base = parts[0] || ""; //sections
    const id = parts[1] || null; //id específico

    let pageId =  "main";

    if (base ==="")  // Decide mostrar os projetos OU não. Esses if's sozinhos (se der id) não fazem nada. Se não tiver ID, vai mostrar os projetos.
        pageId = "main"; // Esses if's são bons pra evitar mostrar o grid de projetos E os detalhes dos projetos.
    else if (base ==="projects")
        pageId = id ? "project-view" : "projects"; 
    else if (base ==="models")
        pageId = id ? "model-view" : "models";
    else if (base ==="contact")
        pageId = "contact";


    pages.forEach(page =>  //Limpeza visual
    {
        page.classList.remove('page-active');
        page.classList.add('page-hidden');
    });

    document.getElementById("project-view").innerHTML = ""; //Limpeza de dentro :thumbsup:
    document.getElementById("model-view").innerHTML = "";

    const target = document.getElementById(pageId);
    if (target)
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
    if (base === "contact")
    {
        Load_Contact();
    }
}

function Load_Projects() // Cria um card de projeto no html para cada projeto
{
    const projects = // Array 
    {
        Game: document.querySelector('#projects-games .projects-grid'),
        Modding: document.querySelector('#projects-modding .projects-grid'),
        Miscellaneous: document.querySelector('#projects-misc .projects-grid'),
        College: document.querySelector('#projects-college .projects-grid')
    }

    const cards = document.querySelectorAll(".card-project");

    cards.forEach(card => {
        card.remove();
    });

    function createProjectCard(project) {
        return `
            <a href="/projects/${project.id}" class="card-project" data-route>
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

function Load_Models() // Pega os grids do HTML; cria uma função molde pra evitar repetição; Filtra: Valor de Model.category comparado com nome da Chave Category e chama func.
{
    const models = //Array
    {
        HoloParty: document.querySelector('#models-holoparty .models-grid'),
        Miscellaneous: document.querySelector("#models-misc .misc-models-grid")
    }

    
    const cards = document.querySelectorAll(".card-model");

    cards.forEach(card => {
        card.remove();
    });

    function createModelCard(model) { 
        return ` 
            <a href="/models/${model.id}" class="card-model" data-route> 
                <img src="${model.images.posed}" alt="${model.name} Preview">
                <h3>${model.name}</h3>
            </a>
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
    projectInfo.innerHTML = "";

    const project = projectsData.find((project) => project.id === id);

    if (!project)
    {
        projectInfo.innerHTML = "<p>Projeto não existe?</p>";
        return;
    }

    const project_view = `
        <div id="project-panel">
            <div id="project-info">
                <div class="desc">About: ${project.desc} </div>
                <div>Techs: ${project.techs} </div>
                <a href="${project.link}" class="contacts">Github</a>
            </div>
            <div class="right-project-info>
                <div class="project-title"> ${project.title} </div>
                <div class="image-display"></div>
                <section id="project-images">
                    <img src="${project.images.img1}" alt="${project.title} Preview">
                    <img src="${project.images.img2}" alt="${project.title} Preview">
                    <img src="${project.images.img3}" alt="${project.title} Preview">
                    <img src="${project.images.img4}" alt="${project.title} Preview">
                </section>
            </div>
        </div>
    ` ;

    projectInfo.innerHTML = project_view;
}

function Load_Details_Models(id)
{
    const modelInfo = document.getElementById("model-view");
    modelInfo.innerHTML = "";

    const model = modelsData.find((model) => model.id === id)

    if (!model)
    {
        modelInfo.innerHTML = "<p>Modelo não existe?</p>";
        return;
    }

    const model_view = `
        <div class="showcase-model"> <img src=${model.images.posed} alt=${model.name}> </div>
        <section id="model-info">
            <div class="model-info-name">${model.name}</div>
            <div class="model-info-desc">About: ${model.desc}</div>
            <a href="${model.sketchfab}" class="sketchfab">SketchFab</a>
        </section>
    `;

    modelInfo.innerHTML = model_view;
}