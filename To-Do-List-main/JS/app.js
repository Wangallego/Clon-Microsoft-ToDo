const inputTask = document.getElementById("task");
const addButton = document.getElementById("action");
const taskList = document.getElementById("taskList");


function addTask() {
    const box = document.createElement("div");
    const i = document.createElement("i");
    const tarea = document.createElement("p");
    const star = document.createElement('i')

    box.classList.add("shadow-top", "flex", "flex-row", "md:flex-row", "justify", "items-center", "bg-gray-100", "hover:bg-gray-100", "mt-2", "shadow-lg", "py-2", "rounded", "mx-4", "lg:ml-72", "w-auto","hover:bg-gray-200");

    if (inputTask.value === "") { 
        alert("Ingresa una tarea");
        return;
    }
    
    star.classList.add("bi","bi-star","flex","ml-auto","mr-2")
    i.classList.add("bi", "bi-circle", "mx-3", "flex","cursor-pointer");
    tarea.textContent = inputTask.value; // Change p.textContent to tarea.textContent
    box.append(i);
    box.appendChild(tarea);
    box.appendChild(star)

    taskList.appendChild(box); 
    inputTask.value = ''
    //Delete tarea
    i.addEventListener('click', () => {
        const circle = document.createElement("i") 
        circle.classList.add("bi", "bi-circle-fill", "mx-3", "flex", "justify-star", "cursor-pointer");
        
        box.insertBefore(circle, tarea);  // Insert the circle before the tarea element
        
        tarea.classList.add("line-through");
        i.remove();
        
        setTimeout(() => {
            box.remove();  
        }, 1000);
    });
}

inputTask.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

addButton.addEventListener("click", addTask);





