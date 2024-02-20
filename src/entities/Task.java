package entities;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class Task implements Comparable <Task>{

    private String name;
    private String description;
    private Date endDate;
    private Integer priority; //1-5
    private String category;
    private String status; //to do, doing, done

    public Task() {
        Scanner scanner = new Scanner(System.in);
        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");

        try {
            System.out.print("Informe o nome da Tarefa: ");
            String taskName = scanner.nextLine().trim().toUpperCase();
            System.out.print("Descrição da Tarefa: ");
            String taskDescription = scanner.nextLine().trim();
            System.out.print("Data de finalização da Tarefa (dd/mm/aaaa): ");
            Date finish = format.parse(scanner.next());
            System.out.print("Informe a prioridade (1 - Baixíssima, 2 - Baixa, 3 - Média, 4 - Alta, 5 - Urgente): ");
            Integer taskPriority = scanner.nextInt();
            String pedente = scanner.nextLine();
            System.out.print("Informe a categoria: ");
            String taskCategory = scanner.nextLine();
            System.out.print("Informe o status (to do, doing, done): ");
            String status = scanner.nextLine();

            setName(taskName);
            setDescription(taskDescription);
            setEndDate(finish);
            setPriority(taskPriority);
            setCategory(taskCategory);
            setStatus(status);

        }catch (RuntimeException | ParseException e){
            e.getMessage();
        }
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(Integer priority) {
        this.priority = priority;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString(){
        return "\nTarefa: " + getName() +
                "\nDescrição: " + getDescription() +
                "\nData final: " + getEndDate() +
                "\nPrioridade: " + getPriority() +
                "\nCategoria: " + getCategory() +
                "\nStatus: " + getStatus();

    }
    @Override
    public int compareTo(Task other) {
        return -priority.compareTo(other.getPriority()); //mostra tarefa a partir da maior prioridade até a de menor prioridade.
    }


}

