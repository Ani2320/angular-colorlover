import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ColorsComponent } from "./pages/colors/colors.component";
import { ContactComponent } from "./pages/contact/contact.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'colors', component: ColorsComponent },
    { path: 'contact', component: ContactComponent }
]

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)

export class AppRoutesModule { }