import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(value: Vehicle[], searchText: string): Vehicle[] {
    if (!searchText) return value || [];
  
    searchText = searchText.toLowerCase();
  
    return (value || []).filter(vehicle =>
      vehicle.brand.toLowerCase().includes(searchText) || 
      vehicle.model.toLowerCase().includes(searchText)
    );
  }
}  