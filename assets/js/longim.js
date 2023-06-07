function BTNentrar()
{
    let Email = document.getElementById("Nome").value;
    let Senha = document.getElementById("Senha").value;
    let existe = false;
    let nome = "";
    let lista_usuarios = JSON.parse(localStorage.getItem("usuarios"));
    if(Email != "" && Senha != "")
    {
        if(lista_usuarios != "")
        {
            for(i = 0; i < lista_usuarios.length; i++)
            {
                if(lista_usuarios[i].email == Email)
                {
                    if(lista_usuarios[i].senha == Senha)
                    {
                        nome = lista_usuarios[i].nome;
                        lista_usuarios[i].logado = true;
                        localStorage.setItem("usuarios",JSON.stringify(lista_usuarios));
                        existe = true;
                    }                    
                }
            }
        }
    }
       
    if(existe)
    {
        document.innerHTML = alert("Seja bem vindo " +  nome);
        window.location.href = "#";
    }
    else
    {
        document.innerHTML =  alert("Usuário não encontrado");
        
    }  
}

function LiparLocalStorage(){
    localStorage.clear();
}