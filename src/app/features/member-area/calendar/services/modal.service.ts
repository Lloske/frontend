import { Injectable } from '@angular/core';
import { inject, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private _modalService : NgbModal) { }

	open(content: TemplateRef<any>) {
		this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}
}
