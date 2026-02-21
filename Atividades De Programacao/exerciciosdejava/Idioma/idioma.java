package Idioma;

import  java.util.Locale;

public class idioma {
    
    public static void main(String[] args) {

        Locale Idioma =  Locale.getDefault();

        System.out.println("O Idioma do Sistema é ?");
        System.out.println( Idioma.getDisplayLanguage());

    }
}
