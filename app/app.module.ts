import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule} from '@angular/forms';

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
import { PhamthihaComponent } from './phamthiha/phamthiha.component';
import { HCNComponent } from './hcn/hcn.component';
import { ThuongComponent } from './thuong/thuong.component';
import { XeploaiComponent } from './xeploai/xeploai.component';



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
    PhamthihaComponent,
    HCNComponent,
    ThuongComponent,
    XeploaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    NgxPaginationModule,
    FormsModule,
    RouterModule.forRoot([ 
      { path: '', 	component: PhamthihaComponent},
      { path: 'index', 	component: IndexComponent},
      { path: 'introduce', component: IntroduceComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'question', component: QuestionComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forgotpass', component: ForgotpassComponent },
      { path: 'regis', component: RegisComponent },
      { path: 'update', component: UpdateComponent },
      { path: 'object', component: ObjectComponent },
      { path: 'test', component: TestComponent },
      { path: 'hcn', component: HCNComponent },
      { path: 'thuong', component: ThuongComponent },
      { path: 'xeploai', component: XeploaiComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }, 
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }