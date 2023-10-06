// Sample project data (you can replace this with your own data)
const projects = [
    {
        title: "Project 1",
        image: "images/project1.jpg",
        description: "This is the description of Project 1.",
    },
    {
        title: "Project 2",
        image: "images/project2.jpg",
        description: "This is the description of Project 2.",
    },
    {
        title: "Project 3",
        image: "images/project3.jpg",
        description: "This is the description of Project 3.",
    },
];

// Function to create a project card
function createProjectCard(project, index) {
    const card = document.createElement("div");
    card.classList.add("project-card");

    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.title;

    const title = document.createElement("h2");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    // Add a click event listener to open the project detail page
    card.addEventListener("click", () => {
        // Use window.location to navigate to the project detail page
        window.location.href = `project_detail.html?project=${index}`;
    });

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);

    return card;
}

// Function to display projects on the main page
function displayProjects() {
    const projectList = document.getElementById("project-list");

    projects.forEach((project, index) => {
        const card = createProjectCard(project, index);
        projectList.appendChild(card);
    });
}

// Call the displayProjects function to populate the main page
displayProjects();
