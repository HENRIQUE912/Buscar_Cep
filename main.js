function pesquisacep(valor) {


    function PesquisarCep(){
        let dado = document.getElementById("cep").value
        replace("-","");
        ColetarCep(dados);
     }

     //Buscar pelo cep na API da VIACEP e retornar no formato obejeto json.
     async function ColetarCep(dados){
    
        //Biblioteca fetch é usada para buscar a API ou WebService e amazena como objeto.
     const cep =await fetch('URL: viacep.com.br/ws/${dados}/json/')
     .then(

        Response => Response.json()
     );
      }
      DadosTela(cep)
    }

//Enviar os dados retornando para o html

function DadosTela(cep){

    console.log(cep)
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
}

     
        

  
