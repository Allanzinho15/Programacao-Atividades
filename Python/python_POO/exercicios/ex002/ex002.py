#Declaração da classe
class MinhaClasse:
    #docstring
    """
    Essa classe cria um Gafanhoto, que é uma pessoa que tem nome e idade.
    Para criar uam nova pessoa, use
    variavel = Gafanhoto(nome, idade)

    """
    def __init__(self, nome = "vazio", idade = 0):#Método Construtor
        #Atributo de Instância
        self.nome = nome
        self.idade = idade

    #Método de Intancia
    def aniversario(self):
        self.idade = self.idade + 1

    def __str__(self): #Duder Method
        return f"{self.nome} é Gafanhoto(a) e tem {self.idade} anos de idade."

    def __getstate__(self):
        return f"Estado: nome = {self.nome}; idade = {self.idade}"

#
g1 = MinhaClasse("Maria", 17) #Declaração de Objetos
#---------------------------------------------------------------------
g1.aniversario() #Método da minha Classe => "MinhaClasse"
print(g1.__dict__)#Attribute

print(g1.__getstate__()) #Method, ele é Editavel

print(g1.__class__)#Attribute, Permite ver de qual classe pertence o obje to


print(g1)# print(g1.__doc__) #Dunder Attribute
#---------------------------------------------------------------------



#criaçao de outro objeto
g2 = MinhaClasse("Mauro", 53) #Declaração de objto
#---------------------------------------------------------------------
print(g2.mensagem()) #Método da minha Classe => "MinhaClasse"
#---------------------------------------------------------------------

#criação de objeto
g3 = MinhaClasse()
print(g3.mensagem())