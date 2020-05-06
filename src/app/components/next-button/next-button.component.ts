import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngtw-next-button",
  templateUrl: "./next-button.component.html",
  styleUrls: ["./next-button.component.scss"]
})
export class NextButtonComponent implements OnInit {
  text = "Next";

  constructor() {}

  ngOnInit(): void {}
}
