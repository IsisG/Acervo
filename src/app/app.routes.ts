import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LivroComponent } from './livro/livro.component';


export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'livro', component: LivroComponent}
]