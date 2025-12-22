//  ==================================================
// Carrega a lógica e os dados do Portfólio (:
// ==================================================

const projectsData = 
[
    {
        id: "project-01",
        title: "Portfolio",
        stats: ["Finished"],
        techs: ["Html, CSS, JavaScript"],
        image:"img/portfolio.png",
        desc: "My Portfolio.",
        link: "https://github.com/M-Erm/Portfolio"
    },
    {
        id: "project-02",
        title: "Project Manager",
        stats: ["In Development"],
        techs: ["Electron, SQLite, Html, CSS, JavaScript"],
        image: "img/project-manager.png" ,
        desc: "A Project Manager.",
        link: "https://github.com/M-Erm/Project-Manager"
    },
    {
        id: "project-03",
        title: "HoloParty",
        stats: ["In Development"],
        techs: ["Unity, Blender, C#"],
        image: "img/holoparty.png",
        desc: "A game.",
        link: ""
    },   
    {
        id: "project-04",
        title: "Minecraft Fabric Mod",
        stats: ["Archived"],
        techs: ["Java, Fabric API"],
        image: "img/fabric-mod.png",
        desc: "A Minecraft 1.21.1 Fabric Mod.",
        link: "https://github.com/M-Erm/Fabric-Minecraft-Mod"
    },
    {
        id: "project-05",
        title: "Minecraft Forge Mod",
        stats: ["Archived"],
        techs: ["Java, Forge API"],
        image: "img/forge-mod.png",
        desc: "A Minecraft 1.21.1 Forge Mod.",
        link: "https://github.com/M-Erm/Forge-MDK-Mod"
    }
]

const modelsData = 
[
    {
        id: "model-01",
        name: "Fuwawa Abyssgard",
        desc: "Fuwawa Abyssgard from Hololive. HoloParty 3D Model",
        images: 
        {
            posed: "img/fuwawa-posed.png",
        }
    },
    {
        id: "model-02",
        name: "Mococo Abyssgard",
        desc: "Mococo Abyssgard from Hololive. HoloParty 3D Model",
        images: 
        {
            posed: "img/mococo-posed.png",
        }
    }
]

const routes = {
    "/": "main",
    "/projects": "projects",
    "/models": "models",
    "/contact": "contact",
}

const redirect = sessionStorage.redirect;
if (redirect)
{
    sessionStorage.removeItem("redirect");
    history.replaceState({}, "", redirect);
}

const pages = document.querySelectorAll("main > section");
const main_text = document.getElementById('main');

window.addEventListener("popstate", () =>
{
    Navigate(window.location.pathname);
});

document.addEventListener('click', (e) =>
{
    const link = e.target.closest("a[data-route]");
    if (!link) return;

    e.preventDefault();

    const path = new URL(link.href).pathname;
    Navigate(path);
})

function Navigate(path) // Remove página atual, cria nova 
{
    if (!path) path = "/";
    if (!routes[path]) path = "/";

    if (window.location.pathname !== path)
        history.pushState({},"", path);

    const pageId = routes[path];

    pages.forEach(page => 
    {
        page.classList.remove('page-active');
        page.classList.add('page-hidden');
    });

    const target = document.getElementById(pageId);

    if (target)
    {
        target.classList.remove('page-hidden');
        target.classList.add('page-active');
    }

    if (pageId === "projects")
    {
        main_text.classList.add('page-hidden');
        Load_Projects();
    }
    else if (pageId === "models")
    {
        main_text.classList.add('page-hidden');
        Load_Models();
    }
    else if (pageId === "contact")
    {
        main_text.classList.add('page-hidden');
        Load_Contact();
    }
}

// Cria um card de projeto no html para cada projeto
function Load_Projects()
{
    const projectGrid = document.getElementById('projects-grid');
    projectGrid.innerHTML = ''; // Só pra ter certeza de que não tem nada dentro, sei lá html é esquisito

    projectsData.forEach(project => 
    {
        const cardProject = `
            <div class="card-project">
                <img src="${project.image}" alt="${project.title} Preview">
                <h3>${project.title} </h3>

        `;
        projectGrid.innerHTML += cardProject;
    });
}

// Cria um card de modelo no html para cada modelo
function Load_Models()
{
    const modelGrid = document.getElementById('models-grid');
    modelGrid.innerHTML = '';

    modelsData.forEach(model => 
    {
        const cardModel = `
            <div class="card-model"> 
                <img src="${model.images.posed}" alt="${model.name} Preview">
                <h3>${model.name}</h3>
        `;
        modelGrid.innerHTML += cardModel;  
    });
}

function Load_Details_Project()
{
    const urlHash = window.location.hash;
    const projectId = urlHash.split(`?id=`)[1];

    const projectFounded = projectsData.find(p => p.id === projectId);

    if (projectFounded)
    {
        const container = document.getElementById('project-detailed');
        container.innerHTML = `
        <h1>${projectFounded} </h1>
        
        `;
    }
}

function Load_Details_Models()
{
    const urlHash = window.location.hash;
    const modelId = urlHash.split(`?id=`)[1];

    const modelFounded = modelsData.find(p => p.id === modelId);

    if (modelFounded)
    {
        const container = document.getElementById('model-detailed');
        container.innerHTML = `
        <h1>${modelFounded} </h1>
        
        `;
    }
}