import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { CommentsComponent } from './components/comments/comments.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { CategoryComponent } from './components/category/category.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      { path: 'add-user', component: UserListComponent },
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'comments', component: CommentsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'product-categories', component: ProductCategoriesComponent },
      { path: 'categories/:category', component: CategoryComponent },
    ];
