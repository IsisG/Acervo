import { Component, OnInit } from '@angular/core';
import { LivroService } from './livroService.Service';
import { Livro } from './livro.model';
import { puts } from 'util';
import{ Location } from '@angular/common';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
  
  livro: Livro[];
  
  codigo: Livro;

  private location: Location;

  constructor(private livroService: LivroService) { }

  
 
  editarLivro(codigo: Livro){
    console.log("chamei o componente", codigo.codigo);
    this.livroService.editarLivro(codigo).subscribe((codigo)=>{console.log("atualizando");});
     //=> this.codigo = codigo);
    location.reload();
  } 
   habilitar(item: Livro){
    if(item.status_livro == 'Disponível'){
       item.status_livro = 'Emprestado';
                  
    }else {
       item.status_livro = 'Disponível';
             
    }
    this.editarLivro(item);
  }

  removerLivro(codigo: Livro){
    this.livroService.removerLivro(codigo.codigo).subscribe(codigo => this.codigo = codigo);
    location.reload();
  }
  
  ngOnInit(){
    this.livroService.getAllAcervo().subscribe(livro => this.livro = livro);
  }

}
