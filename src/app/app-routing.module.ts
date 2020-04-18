import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent} from './aboutme/aboutme.component';
import { ProjectsComponent} from './projects/projects.component';


const routes: Routes = [
    { path:'aboutme', component:AboutmeComponent },
    { path:'', redirectTo: 'aboutme', pathMatch: 'full'},
    { path:'projects', component:ProjectsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
