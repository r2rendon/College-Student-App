import { Directive, OnInit, Inject, ElementRef, Input } from "@angular/core";
import { JQ_TOKEN } from "./jQuery.service";

@Directive({
  selector: "[ux-modal-trigger]"
})
export class ModalTiggerDirective implements OnInit {
  private elem: HTMLElement;
  @Input("ux-modal-trigger") modalId: string;

  constructor(@Inject(JQ_TOKEN) private $: any, ref: ElementRef) {
    this.elem = ref.nativeElement;
  }

  ngOnInit() {
    this.elem.addEventListener("click", e => {
      this.$("#" + this.modalId).modal({});
    });
  }
}
