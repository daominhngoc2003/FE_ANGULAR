import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ViewLayoutComponent } from './layouts/view-layout/view-layout.component';
import { HomePageComponent } from './pages/views/home-page/home-page.component';
import { ProductPageComponent } from './pages/views/product-page/product-page.component';
import { ProductDetailComponent } from './pages/views/product-detail/product-detail.component';
import { ProductUpdateComponent } from './modules/products/product-update/product-update.component';
import { ProductListComponent } from './modules/products/product-list/product-list.component';
import { CategoryUpdateComponent } from './modules/categories/category-update/category-update.component';
import { CategoryAddComponent } from './modules/categories/category-add/category-add.component';
import { CategoryListComponent } from './modules/categories/category-list/category-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HeaderAdminComponent } from './components/admin/header-admin/header-admin.component';
import { NavAdminComponent } from './components/admin/nav-admin/nav-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ViewLayoutComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductDetailComponent,
    ProductUpdateComponent,
    ProductListComponent,
    CategoryUpdateComponent,
    CategoryAddComponent,
    CategoryListComponent,
    DashboardComponent,
    NotFoundPageComponent,
    HeaderAdminComponent,
    NavAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
