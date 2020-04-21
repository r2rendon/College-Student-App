import { Component, Input, Inject, ElementRef, ViewChild } from "@angular/core";
import { JQ_TOKEN } from "./jQuery.service";

@Component({
  selector: "ux-modal",
  template: `
    <div
      class="modal fade"
      id="ux-modal"
      id="{{ elementId }}"
      #modalContainer
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" (click)="closeModal()">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .modal-body {
        height: 250px;
        overflow-y: scroll;
      }
    `
  ]
})
export class UXModalComponent {
  @Input() title: string;
  @Input() elementId: string;
  @ViewChild("modalContainer") containerElem: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) {}

  closeModal() {
    this.$(this.containerElem.nativeElement).modal("hide");
    this.$("#" + this.elementId).modal("hide");
  }
}
