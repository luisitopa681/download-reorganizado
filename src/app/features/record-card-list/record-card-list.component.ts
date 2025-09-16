import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-card-list',
  templateUrl: './record-card-list.component.html',
  styleUrls: ['./record-card-list.component.scss']
})
export class RecordCardListComponent implements OnInit {
  cards: any[] = [];
  loading = false;

  constructor() { }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.loading = true;
    // Simulación de carga de datos
    setTimeout(() => {
      this.cards = [
        { id: 1, title: 'Tarjeta 1', description: 'Descripción de la tarjeta 1', type: 'Audio' },
        { id: 2, title: 'Tarjeta 2', description: 'Descripción de la tarjeta 2', type: 'Video' },
        { id: 3, title: 'Tarjeta 3', description: 'Descripción de la tarjeta 3', type: 'Audio' }
      ];
      this.loading = false;
    }, 1000);
  }
}