from rich import print
from rich.table import Table

tabela = Table(title="Tabela de Preço")

tabela.add_column("nome", justify="right", style="red")

tabela.add_column("preço", justify="center", style="blue")

tabela.add_row("Lápis", "R$1,50")
tabela.add_row("Borracha", "[green]R$5,00[/]")
print(tabela)