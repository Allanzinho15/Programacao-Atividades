package terceiraaula;
import java.util.Scanner;
public class TerceiraAula {
    public static void main(String[] args) {
        //Tipos de Declaração
        //  int idade = 3;
        //  float sal = 1825.54f;
        //  char letra = 'G';
        //  boolean casado = false;

        //  //typecast
        //  int idade1 = (int) 3;
        //  float sal1 = (float) 1825.54;
        //  char letras1 = (char) 'G';
        //  boolean casado1 = (boolean) false;

        //  //wrapper class
        //  Integer idade2 = 3;
        //  Float sal2 = 1825.54f;
        //  Character letra3 = 'G';
        //  Boolean casado3 = false;


        //  //Tipos de saida de dados
        //   String Nome = "Allan Dellon";
        //   float nota = 8.5f;

        //   System.out.print("Sua nota é" + nota);

        //   System.out.println("Sua nota é" + nota);

        //   System.out.printf("a nota de %s é %.2f", Nome, nota);

        //   System.out.format("a nota de %s é %.2f \n", Nome, nota);

        //   //Tipos de entrada de dados
        //   Scanner teclado = new Scanner(System.in);
        //   System.out.print("Digite o nome do aluno: ");
        //   String Nome1 = teclado.nextLine();
        //   System.out.print("Digite a nota do aluno");
        //   float Nota = teclado.nextFloat();

        //   System.out.printf("a nota de %s e %.2f", Nome1, Nota);

        //Resolvendo incompatibilidade de tipos
         int idade = 30;
         String valor = Integer.toString(idade);
         System.out.println("a idade que era do tipo Inteiro ele passou pro tipo String:" + valor);

         String valor1 = "30";
         int idade1 = Integer.parseInt(valor1);
         System.out.println("o valor que era do tipo string ele passou para  tipo inteiro" + idade1);

    }
}
