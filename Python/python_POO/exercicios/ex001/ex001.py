#Declaração da classe
class MinhaClasse:
    def __init__(self):#Método Construtor
        #Atributo de Instância
        self.nome = ""
        self.idade = 0

    #Método de Intancia
    def aniversario(self):
        self.idade = self.idade + 1


    def mensagem(self):
        return f"{self.nome} é Gafanhoto(a) e tem {self.idade} anos de idade."


g1 = MinhaClasse() #Declaração de Objetos
#---------------------------------------------------------------------
g1.nome = "Maria" #Atributo da Minha Classe "MinhaClasse"
g1.idade = 17
#---------------------------------------------------------------------
g1.aniversario() #Método da minha Classe "MinhaClasse"
print(g1.mensagem())
#---------------------------------------------------------------------

#criaçao de outro objeto
g2 = MinhaClasse() #Declaração de objto
#---------------------------------------------------------------------
g2.nome = "Mauro" #Atributo da Minha Classe "MinhaClasse"
g2.idade = 53
#---------------------------------------------------------------------

print(g2.mensagem()) #Método da minha Classe "MinhaClasse