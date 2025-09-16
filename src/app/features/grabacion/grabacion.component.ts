import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grabacion',
  templateUrl: './grabacion.component.html',
  styleUrls: ['./grabacion.component.scss']
})
export class GrabacionComponent implements OnInit {
  grabaciones: any[] = [];
  loading = false;

  constructor() { }

  ngOnInit(): void {
    this.loadGrabaciones();
  }

  loadGrabaciones(): void {
    this.loading = true;
    // Simulación de carga de datos
    setTimeout(() => {
      this.grabaciones = [
        { id: 1, name: 'Grabación 001', duration: '00:15:30', date: new Date(), size: '15.2 MB' },
        { id: 2, name: 'Grabación 002', duration: '00:08:45', date: new Date(), size: '8.5 MB' },
        { id: 3, name: 'Grabación 003', duration: '00:22:15', date: new Date(), size: '22.1 MB' }
      ];
      this.loading = false;
    }, 1000);
  }

  downloadGrabacion(grabacion: any): void {
    console.log('Descargando grabación:', grabacion.name);
    // Implementar lógica de descarga
  }

  playGrabacion(grabacion: any): void {
    console.log('Reproduciendo grabación:', grabacion.name);
    // Implementar lógica de reproducción
  }
}