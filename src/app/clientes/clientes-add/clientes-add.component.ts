import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AmostraService } from "app/services/amostra.service";

@Component({
  selector: "app-clientes-add",
  templateUrl: "./clientes-add.component.html",
  styleUrls: ["./clientes-add.component.scss"]
})
export class ClientesAddComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _api: AmostraService
  ) {}

  backList() {
    this.router.navigate(["/user-profile"]);
  }

  ngOnInit() {}
}
