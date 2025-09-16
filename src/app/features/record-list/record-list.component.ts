import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.scss']
})
export class RecordListComponent implements OnInit {
  records: any[] = [];
  loading = false;

  constructor() { }

  ngOnInit(): void {
    this.loadRecords();
  }

  loadRecords(): void {
    this.loading = true;
    // Simulación de carga de datos
    setTimeout(() => {
      this.records = [
        { id: 1, name: 'Registro 1', date: new Date(), status: 'Activo' },
        { id: 2, name: 'Registro 2', date: new Date(), status: 'Inactivo' },
        { id: 3, name: 'Registro 3', date: new Date(), status: 'Activo' }
      ];
      this.loading = false;
    }, 1000);
  }
}