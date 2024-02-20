package utilities;

public class Menu {

    static public void menu(){
        System.out.println("\n-------------------MENU-----------------------");
        System.out.println("1 para CRIAR TAREFA: ");
        System.out.println("2 para VISUALIZAR uma TAREFA");
        System.out.println("3 para LISTAR TAREFAS");
        System.out.println("4 para DELETAR UMA TAREFA");
        System.out.println("0 para SAIR: ");
        System.out.println("----------------------------------------------\n");
        System.out.print("Informe a opção desejada: ");

    }

    static public void submenuList(){
        System.out.println("\n---------SUBMENU-Listagem de Tarefas----------");
        System.out.println("1 para LISTAR todas as TAREFAS");
        System.out.println("2 para LISTAR TAREFAS por CATEGORIA");
        System.out.println("3 para LISTAR TAREFAS por PRIORIDADE");
        System.out.println("4 para LISTAR TAREFAS por STATUS");
        System.out.println("----------------------------------------------\n");
        System.out.print("\nInforme a opção desejada: ");
    }

}
