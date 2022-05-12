import { Injectable } from '@angular/core';
import { ModalConfig } from 'src/app/shared/components/modal/interfaces/modal-config';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public open(config: ModalConfig): ModalRef {
    console.log('open called');
    return new ModalRef();
  }
}

export class ModalRef {
  public close(): void {
    console.log('close called');
  }
}
