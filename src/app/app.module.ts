import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent1 } from "./app.component";
import { AppComponent2 } from "./app.component2";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports:        [ BrowserModule, FormsModule, HttpClientModule],
    declarations:   [ AppComponent1,  AppComponent2],
    bootstrap:      [ AppComponent1, AppComponent2 ],
})

export class AppModule { }
