
// 1) colocar o span e input type dentro de uma div para preencher toda a linha
// 2) recuperar o elemento pai da opção pai e aplicar a devida cor
//3) depois de solecionadoa resposta deixar o botão desabilitado



var elementos = document.querySelectorAll('[type=radio]');

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('change',function(e){
            let marcado = e.target.value;
            if(marcado == "correta"){
                
            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = 'green';

            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            for(var n = 0; n < els.length; n++){
                els[n].disabled = true;
            }



            }else if(marcado == "incorreta"){
                let parentNode = e.target.parentNode;
                parentNode.style.backgroundColor = 'red';
    
                let els = parentNode.parentNode.querySelectorAll('[type=radio]');
    
                for(var n = 0; n < els.length; n++){
                    els[n].disabled = true;
                }
                
                let corretta = parentNode.parentNode.querySelector('[value=correta]');
                corretta.parentNode.style.backgroundColor = 'green'; 
    
            }

        
    })
}


        