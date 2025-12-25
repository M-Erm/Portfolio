//  ==================================================
// Contém dados, carrega os cards de projetos e modelos no HTML e atualiza os links localmente.
// ==================================================

const projectsData = 
[
    {
        id: "project-01",
        title: "Portfolio",
        stats: ["Finished"],
        techs: ["Html, CSS, JavaScript"],
        images:
        {
            card: "/img/portfolio-card.png",
            img1: "/img/portfolio-1.png",
            img2: "/img/portfolio-2.png",
            img3: "/img/portfolio-3.png",
            img4: "/img/portfolio-4.png"
        },
        desc: "My Portfolio.",
        link: "https://github.com/M-Erm/Portfolio"
    },
    {
        id: "project-02",
        title: "Project Manager",
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
        id: "project-03",
        title: "HoloParty",
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
        link: ""
    },   
    {
        id: "project-04",
        title: "Minecraft Fabric Mod",
        stats: ["Archived"],
        techs: ["Java, Fabric API"],
        images: 
        {
            card: "/img/fabric-mod-card.png",
            img1: "/img/fabric-mod-1.png",
            img2: "/img/fabric-mod-2.png",
            img3: "/img/fabric-mod-3.png",
            img4: "/img/fabric-mod-4.png"
        },
        desc: "A Minecraft 1.21.1 Fabric Mod.",
        link: "https://github.com/M-Erm/Fabric-Minecraft-Mod"
    },
    {
        id: "project-05",
        title: "Minecraft Forge Mod",
        stats: ["Archived"],
        techs: ["Java, Forge API"],
        images: 
        {
            card: "/img/forge-mod-card.png",
            img1: "/img/forge-mod-1.png",
            img2: "/img/forge-mod-2.png",
            img3: "/img/forge-mod-3.png",
            img4: "/img/forge-mod-4.png"
        },
        desc: "A Minecraft 1.21.1 Forge Mod.",
        link: "https://github.com/M-Erm/Forge-MDK-Mod"
    },
    {
        id: "project-06",
        title: "Risk of Rain 2 Mod",
        stats: ["In Development"],
        techs: ["Unity, C#"],
        images:
        {
            card: "/img/ror2-mod-card.png",
            img1: "/img/ror2-mod-1.png",
            img2: "/img/ror2-mod-2.png",
            img3: "/img/ror2-mod-3.png",
            img4: "/img/ror2-mod-4.png"
        },
        desc: "A Risk of Rain 2 Mod.",
        link: ""
    }
]

const modelsData = 
[
    {
        id: "model-01",
        name: "Fuwawa Abyssgard [HoloParty]",
        desc: "Unofficial Fuwawa Abyssgard - from Hololive. HoloParty 3D Model.",
        sketchfab: "https://sketchfab.com/M-erm",
        images: 
        {
            posed: "/img/fuwawa-posed.png",
        }
    },
    {
        id: "model-02",
        name: "Mococo Abyssgard [HoloParty]",
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

// Cria um card de projeto no html para cada projeto
function Load_Projects()
{
    const projectGrid = document.getElementById('projects-grid');
    projectGrid.innerHTML = ""; // Só pra ter certeza de que não tem nada dentro, sei lá html é esquisito

    projectsData.forEach(project => 
    {
        const cardProject = `
            <a href="/projects/${project.id}" class="card-project" data-route>
                <img src="${project.images.card}" alt="${project.title} Preview">
                <h3>${project.title} </h3>
            </a>
        `;
        projectGrid.innerHTML += cardProject;
    });
}

// Cria um card de modelo no html para cada modelo
function Load_Models()
{
    const modelGrid = document.getElementById('models-grid');
    modelGrid.innerHTML = "";

    modelsData.forEach(model =>  //Card como seria no HTML
    {
        const cardModel = ` 
            <a href="/models/${model.id}" class="card-model" data-route> 
                <img src="${model.images.posed}" alt="${model.name} Preview">
                <h3>${model.name}</h3>
            </a>
        `;
        modelGrid.innerHTML += cardModel;  
    });
}

function Load_Details_Project(id)
{
    const projectInfo = document.getElementById("project-detailed");
    projectInfo.innerHTML = "";

    const project = projectsData.find((project) => project.id === id);

    if (!project)
    {
        projectInfo.innerHTML = "<p>Projeto não existe?</p>";
        return;
    }

    const project_view = `
        <div class="background-view-bar">
            <div id= project-panel>
                <div id="project-info">
                    <div class="desc">About: ${project.desc} </div>
                    <div>Techs: ${project.techs} </div>
                    <a href="${project.link}" class="contacts">Github</a>
                </div>
                <div class= right-project-info>
                    <div class="project-title">${project.title}</div>
                    <div class= image-display></div>
                    <section id="project-images">
                        <img src="${project.images.img1}" alt="${project.title} Preview">
                        <img src="${project.images.img2}" alt="${project.title} Preview">
                        <img src="${project.images.img3}" alt="${project.title} Preview">
                        <img src="${project.images.img4}" alt="${project.title} Preview">
                    </section>
                </div>
            </div>
        </div>
    ` ;

    projectInfo.innerHTML = project_view;
}

function Load_Details_Models(id)
{
    const modelInfo = document.getElementById("model-detailed");
    modelInfo.innerHTML = "";

    const model = modelsData.find((model) => model.id === id)

    if (!model)
    {
        modelInfo.innerHTML = "<p>Modelo não existe?</p>";
        return;
    }

    const model_view = `
        <div class="background-view-bar">
            <div class="showcase-model"> <img src=${model.images.posed} alt=${model.name}> </div>
            <section id="model-info">
                <div class="model-info-name">${model.name}</div>
                <div class="model-info-desc">About: ${model.desc}</div>
                <a href="${model.sketchfab}" class="sketchfab">SketchFab</a>
            </section>
        </div>
    `;

    modelInfo.innerHTML = model_view;
}