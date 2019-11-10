import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { QuestionComponent } from './question/question.component';
import { LoginComponent } from './login/login.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { RegisComponent } from './regis/regis.component';
import { UpdateComponent } from './update/update.component';
import { ObjectComponent } from './object/object.component';
import { TestComponent } from './test/test.component';
import { ChangepassComponent } from './changepass/changepass.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    IntroduceComponent,
    ContactComponent,
    FeedbackComponent,
    QuestionComponent,
    LoginComponent,
    ForgotpassComponent,
    RegisComponent,
    UpdateComponent,
    ObjectComponent,
    TestComponent,
    ChangepassComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([ 
      { path: '', 	component: IndexComponent},
      { path: 'introduce', component: IntroduceComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'question', component: QuestionComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forgotpass', component: ForgotpassComponent },
      { path: 'changepass', component: ChangepassComponent },
      { path: 'regis', component: RegisComponent },
      { path: 'update', component: UpdateComponent },
      { path: 'object', component: ObjectComponent },
      { path: 'object/:Id', component: TestComponent },
      { path: '**', redirectTo: 'index', pathMatch: 'full' }, 
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }