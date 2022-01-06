    // calculo de btus por m2
    
    function calcular (){
        
        var tamanho = document.getElementById("tamanho").value 
        var nPessoas = document.getElementById("nPessoas").value
        var eletronico = document.getElementById("eletronicos").value
        var iSolar = document.getElementById("sol");
        if(iSolar.value == "sim"){
            iSolar = 3000
        }else{
            iSolar = 0
        }
        
        
            
            
        
        var resultado = (tamanho * 750) + (nPessoas * 600) + (eletronico * 600) + iSolar

        var arredondado = resultado.toFixed(2)

        return alert("Você precisa de um ar com capacidade de "+ arredondado + " BTUh")
    }

    // modal Avisos

    function iniciarModal (modalID){
        var modal = document.getElementById(modalID);
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if(e.target.className == 'fechar'){
                modal.classList.remove('mostrar')
            }
        })
    }

   

    //modal promoção
    function oferta (modalOf){
        var oferta = document.getElementById(modalOf);
        oferta.classList.add('mostrar');
        oferta.addEventListener('click', (e) => {
            if(e.target.className == 'fechar'){
                oferta.classList.remove('mostrar')
            }
        })
    }

    var catalogo = document.querySelector('.btnOferta');
    catalogo.addEventListener('click', function(){
        oferta('modalOferta'); 
    })

    
    

    


