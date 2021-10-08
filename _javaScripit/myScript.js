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

        


        return alert("Você precisa de um ar com capacidade de "+ resultado + " BTUh")
    }








    //tratamento e-mail

    


