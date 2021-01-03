import { Component, OnInit } from '@angular/core';
import {FooterService} from "./footer.service";
import {NgForm} from "@angular/forms";
import { NotifierService } from "angular-notifier";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [FooterService]
})
export class FooterComponent implements OnInit {
  private readonly notifier: NotifierService;

  isSend = false;

  constructor(
    private footerService : FooterService,
    notifierService: NotifierService,
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.footerService.storeNotification(form.value).subscribe(
      data => {
        // notification visuelle
        this.notifier.notify("success", "Vous avez été ajouté dans la base de données des emails");
        form.resetForm();
      },
      error => {
        this.notifier.notify("error", "Erreur dans l'ajout. Essayez à nouveau plus tard.");
      }
    );
    this.isSend = true;
  }

}
