import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: ()=>import('../pages/account/account.module').then(m=>m.AccountPageModule)
          }
        ]
      },
      {
        path: 'main',
        children: [
          {
            path: '',
            loadChildren: ()=>import('../pages/main/main.module').then(m=>m.MainPageModule)
          }
        ]
      },
      {
        path: 'vocabulary',
        children: [
          {
            path: '',
            loadChildren: ()=>import('../pages/vocabulary/vocabulary.module').then(m=>m.VocabularyPageModule)
          }
        ]
      },
      {
      path:'',
      redirectTo:'/tabs/account',
      pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'tabs/account',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
