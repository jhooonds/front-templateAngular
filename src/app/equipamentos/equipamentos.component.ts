import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-equipamentos",
  templateUrl: "./equipamentos.component.html",
  styleUrls: ["./equipamentos.component.scss"]
})
export class EquipamentosComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  newEquip() {
    this.router.navigate(["/equipamentos-add"]);
  }

  ngOnInit() {}
}
