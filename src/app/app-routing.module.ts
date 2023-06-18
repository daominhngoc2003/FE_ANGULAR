import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLayoutComponent } from './layouts/view-layout/view-layout.component';
import { HomePageComponent } from './pages/views/home-page/home-page.component';
import { ProductDetailComponent } from './pages/views/product-detail/product-detail.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductListComponent } from './modules/products/product-list/product-list.component';
import { ProductAddComponent } from './modules/products/product-add/product-add.component';
import { ProductUpdateComponent } from './modules/products/product-update/product-update.component';
import { CategoryListComponent } from './modules/categories/category-list/category-list.component';
import { CategoryAddComponent } from './modules/categories/category-add/category-add.component';
import { CategoryUpdateComponent } from './modules/categories/category-update/category-update.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: "", component: ViewLayoutComponent, children: [
      {
        path: "", component: HomePageComponent
      },
      {
        path: "products", component: HomePageComponent
      },
      {
        path: "products/:id", component: ProductDetailComponent
      },
    ],
  },
  {
    path: "admin", component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {
        path: "dashboard", component: DashboardComponent
      },
      {
        path: "products", children: [
          {
            path: "", component: ProductListComponent
          },
          {
            path: "add", component: ProductAddComponent
          },
          {
            path: ":id/update", component: ProductUpdateComponent
          },
        ]
      },
      {
        path: "categories", children: [
          {
            path: "", component: CategoryListComponent
          },
          {
            path: "add", component: CategoryAddComponent
          },
          {
            path: ":id/update", component: CategoryUpdateComponent
          },
        ]
      },
    ]
  },
  {
    path: "**", component: NotFoundPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
