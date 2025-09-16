import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

export interface ModalConfig {
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  width?: string;
  height?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomModalService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(config: ModalConfig): Observable<boolean> {
    // Implementación básica - se puede expandir con un componente personalizado
    return new Observable(observer => {
      const result = confirm(config.message || '¿Está seguro?');
      observer.next(result);
      observer.complete();
    });
  }

  openDialog(component: any, data?: any, config?: ModalConfig): MatDialogRef<any> {
    return this.dialog.open(component, {
      data: data,
      width: config?.width || '400px',
      height: config?.height,
      disableClose: true
    });
  }
}