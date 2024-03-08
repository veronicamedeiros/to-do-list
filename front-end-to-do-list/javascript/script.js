var allTasks = [];

var taskName = document.getElementById("taskName");

var taskDescription = document.getElementById("taskDescription");

var taskEndDate = document.getElementById("taskEndDate");

var selectPriority = document.getElementById("selectPriority");
var selectedPriorityIndex = selectPriority.options.selectedIndex;

var taskCategory = document.getElementById("taskCategory");

var selectStatus = document.getElementById("selectStatus");
var selectedStatus = selectStatus.options.selectedIndex;

var msg = document.getElementById("msg");

var showTasks = document.getElementById("showTasks")

var showingSelectedTask = document.getElementById('showingSelectedTask');

var hiddenForm = document.getElementById("hiddenForm");
var hiddenTasks = document.getElementById("hiddenTasks");

var mainButtons = document.getElementsByClassName("mainButtons");
var forInternalButtons = document.getElementById("forInternalButtons");
var submitButton = document.getElementById("submitButton");
var saveEditionButton = document.getElementById("saveEditionButton");


var formList = [taskName, taskDescription, taskEndDate, taskCategory, selectPriority, selectStatus];


function waitingSeconds(sentence){
    msg.innerHTML = sentence;
    window.setTimeout(function(){
        msg.innerHTML = " ";
        showingSelectedTask.innerHTML = " ";
        hiddenForm.style.display = "none";
    }, 800)
}


function addTasks(objectx, listx){  //adiciona um objeto à lista
    
    listx.push(objectx);
    var auxList = [];
    
    for (var pri = 0; pri <= 5; pri ++){  //ordena por prioridade

        for (var key in listx){

            if(listx[key].priority == pri){
                auxList.push(listx[key]);   
            }

            if (pri == 5){
                allTasks = auxList 
            }
        }
    }
}


function listTasks(){ //list tasks
    
    var radio = document.getElementsByName("filterType");
    var radioSelected;

    if(radioSelected = "undefined"){
        showTasks.innerHTML = "<option selected hidden>Selecione uma tarefa</option>";
        for (var task in allTasks){     
            showTasks.innerHTML += "<option>" + allTasks[task].names + "</option>"; 
        }
    }
    document.getElementById("labelRadio").onchange = function(){  //exibe por tipo escolhido
        
        for (var pos = 0;  pos < radio.length; pos++) {
            if (radio[pos].checked) {
                radioSelected = radio[pos].value;
            }
        }
            
        showTasks.innerHTML = " ";
        showTasks.innerHTML = "<option selected hidden>Selecione uma tarefa</option>";

        for (var task in allTasks){

            if(radioSelected == "names"){
                showTasks.innerHTML += "<option>" + allTasks[task][radioSelected] + "</option>";
            }
            else{
                
                showTasks.innerHTML += "<option>" + allTasks[task][radioSelected] + " -> " + allTasks[task].names + "</option>";
            }         
        }
    }
}


for (var index = 0; index < mainButtons.length; index ++){ 
   
    mainButtons[index].onclick = function(){

        if (this.innerHTML == "Criar Tarefas"){

            saveEditionButton.style.display = "none";
            submitButton.style.display = "block";

            for(var pos in formList){
                formList[pos].value = " ";
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

showTasks.innerHTML = listTasks(); 

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
        listTasks()
        waitingSeconds("<p style = 'color: red' >Tarefa deletada com sucesso</p>")    
    }

    listTasks();

    var editButton = document.getElementById("editButton");


    editButton.onclick = function(){   //edit task
        
        showingSelectedTask.innerHTML = " ";
        listTasks();

        formList = [taskName, taskDescription, taskEndDate, taskCategory, selectPriority.options[selectedPriorityIndex], selectStatus.options[selectedStatus]];

        var pos = 0;

        for(var key in allTasks[selectedTask]){
            formList[pos].value = allTasks[selectedTask][key]
            pos++;  
        }
 

        hiddenForm.style.display = "block";
        listTasks()

        
        saveEditionButton.style.display = "block"
        submitButton.style.display = "none";
        
        saveEditionButton.onclick = function(){
            listTasks()
            allTasks[selectedTask] = submitButton.onclick();
            deleteButton.onclick();
            listTasks()
            
            waitingSeconds("<p style = 'color: green'>Tarefa alterada com sucesso</p>")
        }
    }
}

    listTasks();

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

        listTasks();
    }













