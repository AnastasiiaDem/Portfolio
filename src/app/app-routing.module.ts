import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskeryComponent} from './taskery/taskery.component';
import {MainComponent} from './main/main.component';
import {YulianaComponent} from './yuliana/yuliana.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'taskery', component: TaskeryComponent},
  {path: 'yulianadementyeva', component: YulianaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
