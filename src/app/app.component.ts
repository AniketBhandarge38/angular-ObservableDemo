import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  observale_var = new Observable(subs => {
    console.log("Observable initiated");
    subs.next("1");
    subs.next("2");
    subs.next("3");

    setTimeout(() => {
      subs.next("4");
      subs.complete();
    }, 3000);
  });

  ngOnInit() {
    this.observale_var.subscribe(
      val => {
        console.log(val);
      },
      error => {
        console.error(error);
      },
      () => {
        console.log("done");
      }
    );
  }
}
