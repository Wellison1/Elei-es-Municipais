function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    //console.log(section); // Loga o elemento HTML no console para verificação
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa  for uma string sem nada
    if (campoPesquisa == "    "){
      section.innerHTML= "<p> VOCÊ PRECISA DIGITAR ALGO</p>"
      return
    }
    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let candidato = "";
    let partido ="";
    let numero =""
    let tags = "";
    let situacao ="";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      candidato = dado.candidato.toLowerCase()
      partido= dado.partido.toLowerCase()
      numero= dado.numero.toLowerCase()
      situacao= dado.situacao.toLowerCase()
      tags = dado.tags.toLocaleLowerCase()
      //se titulo includes campoPesquisa
      if(candidato.includes(campoPesquisa) || partido.includes(campoPesquisa) || numero.includes(campoPesquisa) || situacao.includes(campoPesquisa)|| tags. includes(campoPesquisa)) { 
        // Cria um novo elemento
        resultados += `
        <div class="item-resultado"> 
          <h2>
            <a href="#" >${dado.candidato}</a>
          </h2>
          <p class="descrição-meta">Partido: ${dado.partido}</p>
          <p class="descrição-meta">Número: ${dado.numero}</p>
          <p class="descrição-meta">Situação: ${dado.situacao}</p>
          
        </div>
      `;

      }
      
      
     
    }

    if (!resultados){
      resultados = "<p>NADA FOI ENCONTRADO</p>"

    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }
  
  


