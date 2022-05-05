    function startTimer(duration, display){

        var timer = duration,minutes,seconds;

            setInterval(function(){
            minutes = parseInt(timer /60,10);
            seconds = parseInt(timer %60,10);

            minutes = minutes <10 ? "0" + minutes : minutes;
            seconds = seconds <10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if(--timer < 10){
                document.getElementById('butao').disabled=true;
            }if(--timer < 0){
                timer = duration;
                alert("Tempo esgotado!, \nRecarregue a página!");
                location.reload();
            }
        },1000);
        
        if(duration > 0){
            clearInterval(startTimer);
        }
    }

    window.onload = function(){
            var duration = 60*1;
            var display = document.querySelector("#timer");
            startTimer(duration,display);    
    }
    

    class Produto {
        constructor(){
            this.id = 1;
            this.arrayProdutos = [];
        }

        salvar(){
           let produto = this.lerDados();
            if(this.validaCampos(produto)){
                this.adicionar(produto);
            }
           this.listaTabela();
            
        }
        listaTabela(){
            let tbody = document.getElementById('tbody');
            tbody.innerText = '';

            for(let i =0; i< this.arrayProdutos.length; i++){
                let tr = tbody.insertRow();

                let td_id =tr.insertCell();
                let td_vinculo =tr.insertCell();
                let td_autor =tr.insertCell();
                let td_issn =tr.insertCell();
                let td_editora =tr.insertCell();
                let td_titulo =tr.insertCell();
                let td_edicao =tr.insertCell();
                let td_ano =tr.insertCell();
                let td_acoes =tr.insertCell();

                td_id.innerText = this.arrayProdutos[i].id;
                td_vinculo.innerText = this.arrayProdutos[i].vinculo;   
                td_autor.innerText = this.arrayProdutos[i].autor;   
                td_issn.innerText = this.arrayProdutos[i].issn;   
                td_editora.innerText = this.arrayProdutos[i].editora;   
                td_titulo.innerText = this.arrayProdutos[i].titulo;   
                td_edicao.innerText = this.arrayProdutos[i].edicao;   
                td_ano.innerText = this.arrayProdutos[i].ano;

                let imgDelete = document.createElement("img");
                imgDelete.src='assets/img/lixeira-de-reciclagem.png';
                imgDelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")");

                td_acoes.appendChild(imgDelete);
                

            }
        }
        adicionar(produto){
            this.arrayProdutos.push(produto);
            this.id++;
        }

        lerDados(){
        let produto = {}

           produto.id = this.id;
           produto.vinculo = document.getElementById('vinculo').value;
           produto.autor = document.getElementById('autor').value;
           produto.issn = document.getElementById('issn').value;
           produto.editora = document.getElementById('editora').value;
           produto.titulo = document.getElementById('titulo').value;
           produto.edicao = document.getElementById('edicao').value;
           produto.ano = document.getElementById('ano').value;

           return produto;
        }
        validaCampos(produto){
            let msg = '';

            if(produto.vinculo == 0){
                msg += ' -Informe o vínculo \n';
            }
            if(produto.autor == ''){
                msg += ' -Informe o nome do autor \n';
            }
            if(produto.issn == ''){
                msg += ' -Informe o numero issn \n';
            }
            if(produto.editora == ''){
                msg += ' -Informe o nome da editora \n';
            }
            if(produto.titulo == ''){
                msg += ' -Informe o nome do titulo \n';
            }
            if(produto.edicao == ''){
                msg += ' -Informe o numero da edicao \n';
            }if(produto.ano == ''){
                msg += ' -Informe o ano \n';
            }if(msg != ''){
                alert(msg);
                return false
            }
            return true;
        }
        deletar(id){

            let tbody = document.getElementById('tbody');

            for(let i =0; i < this.arrayProdutos.length; i++){
                if(this.arrayProdutos[i].id == id){
                    this.arrayProdutos.splice(i,1);
                    tbody.deleteRow(i);
                 }
            }
        }
        
    }
var produto = new Produto();