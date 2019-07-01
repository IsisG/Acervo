import { Component, OnInit, ɵConsole } from '@angular/core';
import { Livro } from '../livro/livro.model';
import { LivroService } from '../livro/livroService.Service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  livro: Livro[] = [];

  codigo: Livro;

  constructor(private livroService: LivroService){}
    
  pesquisarLivro(codigo: string){
    this.livroService.getLivros(codigo).subscribe(codigo => {
      
      this.livro.push(codigo[0]);
    });

  }
    
  ngOnInit(){
   
  }


}
