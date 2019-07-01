import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro/livro.model';
import { LivroService } from '../livro/livroService.Service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  livro: Livro;

  registerForm: FormGroup;

  constructor(private livroService: LivroService, private formBuilder: FormBuilder){}

  livroCadastrar(liv: Livro){
    this.livroService.salvarLivro(liv).subscribe(liv => this.livro = liv);
    location.reload();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      editora:[''],
      ano: ['', [Validators.required, Validators.maxLength(4)]],
      status_livro: ['', Validators.required]
     });
  }

}
