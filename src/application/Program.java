package application;

import entities.Task;
import utilities.Menu;

import java.util.*;

public class Program {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Task> tasksList = new ArrayList<>();
        Set<String> categoriesSet = new HashSet<>();
        Set<Integer> prioritySet = new TreeSet<>(Comparator.reverseOrder());
        Set<String> statusSet = new HashSet<>();
        int answer = -1;

        while (answer != 0){

            Menu.menu();
            answer = scanner.nextInt();

            switch (answer){

                case 1: //Criar tarefa
                    Task task = new Task();
                    tasksList.add(task);
                    Collections.sort(tasksList);
                    System.out.println();
                    for (Task itens : tasksList){
                        categoriesSet.add(itens.getCategory());
                        prioritySet.add(itens.getPriority());
                        statusSet.add(itens.getStatus());
                    }
                    break;
                case 2: //Visualizar tarefa
                    int pos = 0;
                    if (!tasksList.isEmpty()){
                        for (Task names : tasksList){
                            System.out.println(pos + " para " + names.getName());
                            pos++;
                        }
                        while (true){
                            try {
                                System.out.print("\nInsira o número da tarefa que deseja ver: ");
                                int answerName = scanner.nextInt();
                                System.out.println(tasksList.get(answerName));
                                break;
                            }
                            catch (RuntimeException e){
                                System.out.println("Opção inválida.");
                            }
                        }

                    }else{
                        System.out.println("Ainda não foi criada nenhuma tarefa.");
                    }
                    break;

                case 3:
                    if (!tasksList.isEmpty()){
                        Menu.submenuList();
                        int resp = scanner.nextInt();
                        switch (resp) {
                            case 1:
                                System.out.println("\nTODAS TAREFAS");
                                for (Task tsk : tasksList) {
                                    System.out.println(tsk);
                                }
                                break;

                            case 2:
                                System.out.println("\nCATEGORIAS");
                                for (String cat : categoriesSet) {
                                    System.out.println(cat);
                                }
                                String x = scanner.nextLine();
                                System.out.print("\nDeseja visualizar as tarefas de qual categoria: ");

                                String answerCat = scanner.nextLine();

                                for (Task tsk : tasksList) {
                                    if (tsk.getCategory().equals(answerCat)) {
                                        System.out.println(tsk);
                                    }
                                }
                                break;

                            case 3:
                                System.out.println("\nPRIORIDADES");
                                for (Integer priority : prioritySet) {
                                    System.out.println(priority);;
                                }
                                System.out.print("Deseja ver as tarefas de qual prioridade: ");
                                int answerPri = scanner.nextInt();

                                for (Task tsk : tasksList) {
                                    if (tsk.getPriority() == answerPri) {
                                        System.out.println(tsk);
                                    }
                                }
                                break;

                            case 4:
                                System.out.println("\nSTATUS: ");
                                for (String status : statusSet) {
                                    System.out.println(status);
                                }
                                System.out.print("\nDeseja ver as tarefas de qual status: ");
                                String y = scanner.nextLine();
                                String answerStatus = scanner.nextLine();

                                for (Task tsk : tasksList) {
                                    if (tsk.getStatus().equals(answerStatus)) {
                                        System.out.println(tsk);
                                    }
                                }
                                break;
                        }
                    }
                    else{
                        System.out.println("Ainda não há tarefa criada.");
                    }
                    break;

                case 4:
                    if (!tasksList.isEmpty()){
                        int position = 0;
                        for (Task names : tasksList){
                            System.out.println(position + " para " + names.getName());
                            position++;
                        }
                        System.out.print("\nInforme a tarefa deseja excluir: ");
                        int answerRemove = scanner.nextInt();
                        while (true){   //deletar tarefa
                            try {
                                tasksList.remove(answerRemove);
                                break;
                            }
                            catch (RuntimeException e){
                                System.out.println("Opção inválida! Escolha uma opção válida.");
                            }
                        }
                    }else{
                        System.out.println("Não há tarefas criadas.");
                    }
                    break;

                case 0:
                    System.out.println("Saindo...");
                    scanner.close();
                    break;
            }
        }
    }
}

