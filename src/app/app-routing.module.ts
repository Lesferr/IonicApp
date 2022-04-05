import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'toc', loadChildren: './toc/toc.module#TocPageModule' },
  { path: 'chapter', loadChildren: './chapter/chapter.module#ChapterPageModule' },
  { path: 'chapter1', loadChildren: './chapter1/chapter1.module#Chapter1PageModule' },
  { path: 'cover', loadChildren: './cover/cover.module#CoverPageModule' },
  { path: 'content', loadChildren: './content/content.module#ContentPageModule' }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
