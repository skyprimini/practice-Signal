import { Injectable,singal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServices {
  private data: string[] = [
    'Angular',
    'React',
    'Vue',
    'Svelte',
    'Solid',
    'Bootstrap',
    'Tailwind CSS',
    'Material',
    'Chakra',
    'Ant',
  ];

  searchTerm = singal<string>('');

  getData(): string[] {
    return this.data;
  }
}
