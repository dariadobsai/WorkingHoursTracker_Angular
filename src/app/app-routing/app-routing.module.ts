import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {ProjectListComponent} from '../components/project-list/project-list.component';
import {TaskListComponent} from '../components/task-list/task-list.component';
import {HomeComponent} from '../components/main/home.component';
import {AboutComponent} from '../components/about/about.component';

const routs: Routes = [
  {path: 'projects', component: ProjectListComponent},
  {path: 'tasks', component: TaskListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routs)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProjectListComponent, TaskListComponent, HomeComponent, AboutComponent];
