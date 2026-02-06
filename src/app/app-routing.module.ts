import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrypdashComponent } from './components/crypdash/crypdash.component';
import { MainComponent } from './components/main/main.component';
import { QiqiComponent } from './components/qiqi/qiqi.component';
import { TaskeryComponent } from './components/taskery/taskery.component';
import { VidlikComponent } from './components/vidlik/vidlik.component';
import { YulianaComponent } from './components/yuliana/yuliana.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'taskery', component: TaskeryComponent },
  { path: 'yulianadementyeva', component: YulianaComponent },
  { path: 'vidlik', component: VidlikComponent },
  { path: 'crypdash', component: CrypdashComponent },
  { path: 'qiqi', component: QiqiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
