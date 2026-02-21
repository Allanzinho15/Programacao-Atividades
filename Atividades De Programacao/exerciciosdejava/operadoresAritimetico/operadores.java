package operadoresAritimetico;
import java.util.Scanner;

public class operadores {

    public static void SomaDosNumeros (Scanner NumerosRecebido){
      
        if (NumerosRecebido.hasNextInt()) {

            int N1 = NumerosRecebido.nextInt();
            int N2 = NumerosRecebido.nextInt();
            int resultado = (int) N1 + N2;

           System.out.print("A Sua Soma é:" + resultado);
        }
        else {

            float N1 = NumerosRecebido.nextFloat();
            float N2 = NumerosRecebido.nextFloat();
            float resultado = (float) N1 + N2;
            
            System.out.print("A Sua Soma é:" + resultado);
        }
        
    }

    public static void MltiplicadorDosNumeros (Scanner NumerosRecebido){

        if (NumerosRecebido.hasNextInt()) {

            int N1 = NumerosRecebido.nextInt();
            int N2 = NumerosRecebido.nextInt();
            int resultado = (int) N1 * N2;

           System.out.print("A Sua Multipliação é:" + resultado);
        }
        else {

            float N1 = NumerosRecebido.nextFloat();
            float N2 = NumerosRecebido.nextFloat();
            float resultado = (float) N1 * N2;
            
            System.out.print("A Sua Multipliação é:" + resultado);
        }
    }

    public static void DivisordosNumeros (Scanner NumerosRecebido){

        if (NumerosRecebido.hasNextInt()) {

            int N1 = NumerosRecebido.nextInt();
            int N2 = NumerosRecebido.nextInt();
            int resultado = (int) N1 / N2;

           System.out.print("A Sua Divisão é:" + resultado);
        }
        else {

            float N1 = NumerosRecebido.nextFloat();
            float N2 = NumerosRecebido.nextFloat();
            float resultado = (float) N1 / N2;
            
            System.out.print("A Sua Divisão é:" + resultado);
        }
    }

    public static void RestoDaDivisaoDosNumeros (Scanner NumerosRecebido){

        if (NumerosRecebido.hasNextInt()) {

            int N1 = NumerosRecebido.nextInt();
            int N2 = NumerosRecebido.nextInt();
            int resultado = (int) N1 % N2;

           System.out.print("O Resto da Sua Divisão é:" + resultado);
        }
        else {

            float N1 = NumerosRecebido.nextFloat();
            float N2 = NumerosRecebido.nextFloat();
            float resultado = (float) N1 % N2;
            
            System.out.print("O Resto da Sua Divisão é:" + resultado);
        }
    }

     public static void SubtraçãoDosNumeros (Scanner NumerosRecebido){

        if (NumerosRecebido.hasNextInt()) {

            int N1 = NumerosRecebido.nextInt();
            int N2 = NumerosRecebido.nextInt();
            int resultado = (int) N1 - N2;

           System.out.print("A Sua Subtração é:" + resultado);
        }
        else {

            float N1 = NumerosRecebido.nextFloat();
            float N2 = NumerosRecebido.nextFloat();
            float resultado = (float) N1 - N2;
            
            System.out.print("A Sua Subtração é:" + resultado);
        }
    }

    

    public static void main(String[] args) {
         
        
        System.out.print("##Olá, Seja bem vindo a Calculadora## \n");
        System.out.print("Escolha Uma Das Opções a Baixo \n");
        System.out.print("Opção 1. Somar \n");
        System.out.print("Opção 2. Multiplicar \n");
        System.out.print("Opção 3. Dividir \n");
        System.out.print("Opção 4. Resto da Divisão \n");
        System.out.print("Opção 5. Subtração \n");
        Scanner NumerosRecebido = new Scanner(System.in);
        int ComparadorDeSinalDosOperadores = NumerosRecebido.nextInt();

        NumerosRecebido.nextLine();
        
        System.out.println("Digite os Dois Números:");
        
       switch (ComparadorDeSinalDosOperadores) {
        case 1:  
            
            SomaDosNumeros(NumerosRecebido);
            break;
        
        case 2:  
            MltiplicadorDosNumeros(NumerosRecebido);
            break;
            
        case 3:  
            DivisordosNumeros(NumerosRecebido);
            break;
            
        case 4:  
            RestoDaDivisaoDosNumeros(NumerosRecebido);
            break;

        case 5:  
            SubtraçãoDosNumeros(NumerosRecebido);
            break;
       
        default:
            break;
       }
       
        

    }
    
}
