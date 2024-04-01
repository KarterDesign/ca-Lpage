import pandas as pd
import os

# Função para criar o HTML de uma linha
def create_html(row, index, html_template):
    return html_template.format(
        title=f"Linha {index + 1}",
        numero=row['numero'],
        local=row['local'],
        pais1=row['pais1'],
        pais2=row['pais2'],
        dia=row['dia'],
        data=row['data'],
        hora=row['hora'],
        img1=row['img1'],
        img2=row['img2']

    )

# Carregar dados do Excel
file_path = r'F:\Projetos\ca-Lpage\cards.xls'  # Substitua com o caminho do seu arquivo Excel
excel_data = pd.read_excel(file_path)

# Colunas a serem incluídas
columns_to_include = ['numero', 'local', 'pais1', 'pais2', 'dia', 'data', 'hora', 'img1', 'img2']
subset_data = excel_data[columns_to_include]

# Template HTML
html_template = """
                 <card class="{pais1} {pais2}">
                <div class="col">
                    <div class="card shadow">
                        <div class="d-flex row row-cols-2 row-cols-md-2 px-4">
                            <div class="card-body">
                                <h4 class="card-title strong azul-asb">{numero}</h4>
                                <h6 class="card-title text-secondary">{local}</h6>
                                <div class="row gy-2">


                                    <div class="d-flex justify-content-start align-items-center">
                                        <div class="rounded-circle align-items-center d-flex justify-content-center"
                                            style="width: 40px; height: 40px;">
                                            <img src="{img1}" class="rounded-circle img-fluid"
                                                alt="...">
                                        </div>
                                        <span class="strong azul-asb mx-2">{pais1}</span>
                                    </div>


                                    <div class="d-flex justify-content-start align-items-center">
                                        <div class="border rounded-circle justify-content-center d-flex"
                                            style="width: 40px; height: 40px;">
                                            <img src="{img2}"
                                                class="img-fluid rounded-circle object-fit-cover w-100 img-pais"
                                                alt="...">
                                        </div>
                                        <span class="strong azul-asb mx-2">{pais2}</span>
                                    </div>
                                </div>


                            </div>
                            <div class="row align-items-center text-center rounded"
                                style="background-color: hsl(0, 0%, 97%)">
                                <div class="container">
                                    <h4>{dia}<span class="strong"><strong>{data}<br> {hora}</strong></span></h4>
                                    <div class="d-md-block">
                                        <a class="btn btn-primary px-2 strong" href="#" role="button">COMPRAR</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </card>
    """

html_content = """
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Completo</title>
    <link rel="stylesheet"
        href="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/03/bootstrap-asb.css">
    <link rel="stylesheet" href="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/03/style.css">

</head>


<body>


    <!--begin card group-->
    <div class="container py-5">
        <div class="row row-cols-1 row-cols-md-2 g-4">
"""

# Acumular o conteúdo HTML de todas as linhas
for index, row in subset_data.iterrows():
    html_content += create_html(row, index, html_template)

# Fechar as tags HTML
html_content += """
</div>
</div>
<!--/end card group-->
</body>
</html>
"""

# Criar e salvar um único arquivo HTML
output_file = 'Generated_Cards.html'
with open(output_file, 'w', encoding='utf-8') as file:
    file.write(html_content)

print(f"Arquivo HTML criado com sucesso: {output_file}")