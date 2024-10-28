import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TaskComponent } from "./tasks/task/task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
  declarations:[AppComponent],
  bootstrap: [AppComponent],
  imports: [
    HeaderComponent,
    TaskComponent,
    TasksComponent,
    UserComponent,
    BrowserModule
  ]
})
export class AppModule{

}
