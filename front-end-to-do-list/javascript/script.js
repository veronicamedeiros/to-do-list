var taskName = document.getElementById("taskName");
var taskDescription = document.getElementById("taskDescription");
var taskEndDate = document.getElementById("taskEndDate");

var selectPriority = document.getElementById("selectPriority");
var selectedPriorityIndex = selectPriority.options.selectedIndex;
var selectedPriorityValue = selectPriority.options[selectedPriorityIndex].innerHTML;


var taskCategory = document.getElementById("taskCategory");

var selectStatus = document.getElementById("selectStatus");
var selectedStatus = selectStatus.options.selectedIndex;
var selectedStatusValue = selectStatus.options[selectedStatus].innerHTML;


var submitButton = document.getElementById("submitButton")

var msg = document.getElementById("msg");

var showTasks = document.getElementById("showTasks")

var showingSelectedTask = document.getElementById('showingSelectedTask');


var allTasks = [{names: "Criar classe mãe Pessoa", description: "criar propriedades: Bairro, Cidade, Estado, Telefone, E-mail", endDate: "2024-03-30", category: "classe", priority: "1 - Baixíssima", status: "To Do (A fazer)" },
{names: "Criar classe Candidato", description: "criar propriedades: cpf, idade", endDate: "2024-03-30", category: "classe", priority: "4 - Alta", status: "To Do (A fazer)" }, 
{ names: "Criar classe Empresa", description: "Incluir atributos CNPJ e Razão Social.", endDate: "2024-03-22", category: "classe", priority: "1 - Baixíssima", status: "To Do (A fazer)"}]; //lista de todas as tarefas


var hiddenForm = document.getElementById("hiddenForm");
var nameTasks = document.getElementsByClassName("nameTasks");
var hiddenTasks = document.getElementById("hiddenTasks");

var forButtons = document.getElementById("forButtons");

var formList = [taskName, taskDescription, taskEndDate, taskCategory, selectPriority, selectStatus];


function waitingSeconds(sentence){
    msg.innerHTML = sentence;
    window.setTimeout(function(){
        msg.innerHTML = " ";
        showingSelectedTask.innerHTML = " ";
        hiddenForm.style.display = "none";
    },1000)
}

function addTasks(objectx, listx){  //função para adicionar um objeto à lista
    listx.push(objectx);
}


function showTasksByName(){
    
    showTasks.innerHTML = " ";
    showTasks.innerHTML = "<option selected hidden>Selecione uma tarefa</option>";
    for (task in allTasks){
        showTasks.innerHTML += "<option>" + allTasks[task].names + "</option>";
    }
}


for (var index = 0; index < nameTasks.length; index ++){
   
    nameTasks[index].onclick = function(){


        if (this.innerHTML == "Criar Tarefas"){
            for(var pos in formList){
                formList[pos].value = " "
            }
        }
        
        hiddenForm.style.display = "block";
        hiddenTasks.style.display = "none";

        if (this.innerHTML != "Criar Tarefas"){
            
            hiddenTasks.style.display = "block";
            hiddenForm.style.display = "none";
        }
    }
}   

showTasks.innerHTML = showTasksByName(); 

showTasks.onchange = function(){   //show selected task


    showingSelectedTask.innerHTML = " ";
    
    var selectedTask = showTasks.options.selectedIndex;
    selectedTask -= 1;
    
    showingSelectedTask.innerHTML = "<br><b>Nome da Tarefa:</b> " + allTasks[selectedTask].names +
    "<br><b>Descrição</b>: " + allTasks[selectedTask].description +
    "<br><b>Data para finalização:</b> " + allTasks[selectedTask].endDate +
    "<br><b>Categoria : </b>" + allTasks[selectedTask].category +
    "<br><b>Prioridade: </b>" + allTasks[selectedTask].priority +
    "<br><b>Status: </b>" + allTasks[selectedTask].status +
    "<br> <button id = 'deleteButton'>Deletar esta tarefa</button>" +
    "<button id = 'editButton'>Editar esta tarefa</button>"

    var deleteButton = document.getElementById("deleteButton")    //delete task

    deleteButton.onclick = function(){

        allTasks.splice(selectedTask, 1);
        showTasksByName()
        waitingSeconds("<p style = 'color: red' >Tarefa deletada com sucesso</p>")    
    }

    showTasksByName();

    var editButton = document.getElementById("editButton");


    editButton.onclick = function(){   //edit task

        selectedStatus = selectStatus.options.selectedIndex;

        formList = [taskName, taskDescription, taskEndDate, taskCategory, selectPriority.options[selectedPriorityIndex], selectStatus.options[selectedStatus]];

        var pos = 0;

        for(var key in allTasks[selectedTask]){
            formList[pos].value = allTasks[selectedTask][key]
            pos++;  
        }
 

        submitButton.style.display = "none";

        forButtons.innerHTML = "<br> <button id = 'saveEditionButton'>Salvar Alterações</button></br>";
     
        hiddenForm.style.display = "block";
        showTasksByName()

        var saveEditionButton = document.getElementById("saveEditionButton");

        saveEditionButton.onclick = function(){
            
            allTasks[selectedTask] = submitButton.onclick();
            deleteButton.onclick();
            showTasksByName()
            waitingSeconds("<p style = 'color: green'>Tarefa alterada com sucesso</p>")
        }
    }
}

    showTasksByName();

    submitButton.onclick = function(){
        
        try{
            var task = {
                "names" : taskName.value,
                "description" : taskDescription.value,
                "endDate" : taskEndDate.value,
                "category" : taskCategory.value,
                "priority" : selectPriority.value,
                "status" : selectStatus.value
            }
            
            addTasks(task, allTasks)

            waitingSeconds("Tarefa incluída com sucesso.")
            
        }
        catch{
            window.alert("Ocorreu um erro.")
        }

        showTasksByName();
    }













