import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskeryComponent} from './taskery/taskery.component';
import {MainComponent} from './main/main.component';
import {YulianaComponent} from './yuliana/yuliana.component';
import {VidlikComponent} from './vidlik/vidlik.component';
import {QiqiComponent} from './qiqi/qiqi.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'taskery', component: TaskeryComponent},
  {path: 'yulianadementyeva', component: YulianaComponent},
  {path: 'vidlik', component: VidlikComponent},
  {path: 'qiqi', component: QiqiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
