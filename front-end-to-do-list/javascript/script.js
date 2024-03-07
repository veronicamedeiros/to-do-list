var hiddenTasks = document.getElementsByClassName("hiddenTasks");
var nameTasks = document.getElementsByClassName("nameTasks");


for (var index = 0; index < nameTasks.length; index ++){
        
    nameTasks[index].onclick = function(){
        for (var index = 0; index < hiddenTasks.length; index ++){
  
            hiddenTasks[index].style.display = "none"
            if(this.innerHTML == nameTasks[index].innerHTML)
                hiddenTasks[index].style.display = "block"


        }   
    }   
}


var taskName = document.getElementById("taskName");
var taskDescription = document.getElementById("taskDescription");
var taskEndDate = document.getElementById("taskEndDate");

var selectPriority = document.getElementById("selectPriority");
var selectedIndex = selectPriority.options.selectedIndex;
var selectedPriorityValue = selectPriority.options[selectedIndex].innerHTML;

var taskCategory = document.getElementById("taskCategory");

var selectStatus = document.getElementById("selectStatus");
var selectedStatus = selectStatus.options.selectedIndex;
var selectedStatusValue = selectStatus.options[selectedIndex].innerHTML;

var submitButton = document.getElementById("submitButton")

var msg = document.getElementById("msg");

var viewTask = document.getElementById("viewTask");

var showTasks = document.getElementById("showTasks")

var showingSelectedTask = document.getElementById('showingSelectedTask');


var allTasks = [{name: "Criar classe mãe Pessoa", description: "criar propriedades: Bairro, Cidade, Estado, Telefone, E-mail", endDate: "2024-03-30", priority: "1 - Baixíssima", status: "Backlog" },
{name: "Criar classe Candidato", description: "criar propriedades: cpf, idade", endDate: "2024-03-30", category: "classe", priority: "1 - Baixíssima", status: "Done" }, 
{ name: "Criar classe Empresa", description: "Incluir atributos CNPJ e Razão Social.", endDate: "2024-03-22", category: "classe", priority: "1 - Baixíssima", status: "Done"}]; //lista de todas as tarefas


function addTasks(objectx, listx){  //função para adicionar um objeto à lista
    listx.push(objectx);
}


function showTasksByName(){
    
    showTasks.innerHTML = "<option selected hidden>Selecione uma tarefa</option>";
    for (task in allTasks){
        showTasks.innerHTML += "<option>" + allTasks[task].name + "</option>";
    }
    console.log(allTasks)
}


showTasksByName();


submitButton.onclick = function(){
    
    try{
        var task = {
            "name" : taskName.value,
            "description" : taskDescription.value,
            "endDate" : taskEndDate.value,
            "priority" : selectedPriorityValue,
            "category" : taskCategory.value,
            "status" : selectedStatusValue
        }
        
        addTasks(task, allTasks)

        msg.innerHTML = "Tarefa incluída com sucesso."
        console.log(allTasks)
        window.setTimeout(function(){
            msg.innerHTML = " "
        },3000)
        
    }
    catch{
        window.alert("Ocorreu um erro.")
    }

    showTasks.innerHTML = " "
    showTasksByName();
}


showTasks.onchange = function(){   //exibir tarefa selecionada

    showingSelectedTask.innerHTML = " ";
    
    var selectedTask = showTasks.options.selectedIndex;
    selectedTask -= 1;
    

    showingSelectedTask.innerHTML = "<br><b>Nome da Tarefa:</b> " + allTasks[selectedTask].name +
    "<br><b>Descrição</b>: " + allTasks[selectedTask].description +
    "<br><b>Data para finalização:</b> " + allTasks[selectedTask].endDate +
    "<br><b>Prioridade: </b>" + allTasks[selectedTask].priority +
    "<br><b>Categoria : </b>" + allTasks[selectedTask].category +
    "<br><b>Status: </b>" + allTasks[selectedTask].status +
    "<br> <button id = 'deleteButton'>Deletar esta tarefa</button>"

    var deleteButton = document.getElementById("deleteButton")    //delete task

    deleteButton.onclick = function(){
        allTasks.splice(selectedTask, 1);
        console.log(selectedTask);
        console.log(allTasks);
        showingSelectedTask.innerHTML = "<p style = 'color: red' >Tarefa deletada com sucesso</p>";
        
        showTasks.innerHTML = " ";
        
        showTasksByName();
    }
    

}














