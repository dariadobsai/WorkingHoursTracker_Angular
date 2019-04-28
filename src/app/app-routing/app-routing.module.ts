import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {ProjectListComponent} from '../components/project-list/project-list.component';
import {TaskListComponent} from '../components/task-list/task-list.component';
import {DaySettingComponent} from '../components/day-setting/day-setting.component';

const routs: Routes = [
  {path: 'projects', component: ProjectListComponent},
  {path: 'tasks', component: TaskListComponent},
  {path: 'myday', component: DaySettingComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routs)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProjectListComponent, TaskListComponent, DaySettingComponent];
