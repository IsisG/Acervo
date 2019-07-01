import {Livro } from './livro.model';
import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { API } from 'src/app/app.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LivroService{
    livro : Livro[];

    constructor(private http: HttpClient){

    }

    getAllAcervo(): Observable<Livro[]>{
        return this.http.get<Livro[]>(`${API}/livros`);
    }

    getLivros(codigo: string): Observable<Livro>{
        return this.http.get<Livro>(`${API}/livro?codigo=${codigo}`);
    }
    
    salvarLivro(livro: Livro): Observable<Livro>{
        return this.http.post<Livro>(`${API}/livro/salvar`, livro)
            .pipe(map(livro =>livro));
    }

    removerLivro(codigo: string): Observable<Livro>{
        return this.http.delete<Livro>(`${API}/apagarLivros?codigo=${codigo}`);
    }

    editarLivro(livro : Livro): Observable<Livro>{
        return this.http.put<Livro>(`${API}/editarLivros`, livro);
    }
   

}