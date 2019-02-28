import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CookiesInfoComponent } from "./cookies-info/cookies-info.component";

@NgModule({
  declarations: [AppComponent, CookiesInfoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
