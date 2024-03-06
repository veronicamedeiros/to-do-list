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

var showAllTasks = document.getElementById("showAllTasks")


var allTasks = [{name: "Criar classe mãe Pessoa", description: "criar propriedades:Bairro,Cidade,Estado,Telefone,E-mail", endDate: "2024-03-30", priority: "1 - Baixíssima", status: "Backlog" },
{name: "Criar classe mãe Candidato", description: "criar propriedades: cpf, idade", endDate: "2024-03-30", priority: "1 - Baixíssima", status: "Done" }]; //lista de todas as tarefas

function addTasks(objectx, listx){  //função para adicionar um objeto à lista
    listx.push(objectx);
}



submitButton.onclick = function(){
    taskName.value
    
    try{
        var task = {
            "name" : taskName.value,
            "description" : taskDescription.value,
            "endDate" : taskEndDate.value,
            "priority" : selectedPriorityValue,
            "category" : taskCategory,
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
}



