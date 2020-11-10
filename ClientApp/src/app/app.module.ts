import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { ShowBookComponent } from './components/show-book/show-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { BookService } from './services/book.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    BooksComponent,
    DeleteBookComponent,
    NewBookComponent,
    ShowBookComponent,
    UpdateBookComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'books', component: BooksComponent, canActivate: [AuthGuard] },
      { path: 'new-book', component: NewBookComponent, canActivate: [AuthGuard] },
      { path: 'update-book/:id', component: UpdateBookComponent, canActivate: [AuthGuard] },
      { path: 'delete-book/:id', component: DeleteBookComponent, canActivate: [AuthGuard] },
      { path: 'book/:id', component: ShowBookComponent, canActivate: [AuthGuard] },
    ])
  ],
  providers: [BookService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
