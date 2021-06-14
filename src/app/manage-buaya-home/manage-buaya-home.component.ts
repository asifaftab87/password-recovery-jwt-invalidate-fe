import { Component, OnInit, ViewChild, Input } from '@angular/core';


export interface PeriodicElement {
  name: string;
  edit: string;
  membership: number;
  type: string;
}

/*const ELEMENT_DATA: PeriodicElement[] = [
  { name: "hydra", edit: 'Hydrogen', membership: 1.0079, type: 'H' },
  { name: "Hel", edit: 'Helium', membership: 4.0026, type: 'He' },
  { name: "lit", edit: 'Lithium', membership: 6.941, type: 'Li' }
  // { name: 4, edit: 'Beryllium', membership: 9.0122, type: 'Be' },
  // { name: 5, edit: 'Boron', membership: 10.811, type: 'B' },
  // { name: 6, edit: 'Carbon', membership: 12.0107, type: 'C' },
  // { name: 7, edit: 'Nitrogen', membership: 14.0067, type: 'N' },
  // { name: 8, edit: 'Oxygen', membership: 15.9994, type: 'O' },
  // { name: 9, edit: 'Fluorine', membership: 18.9984, type: 'F' },
  // { name: 10, edit: 'Neon', membership: 20.1797, type: 'Ne' },
];*/

@Component({
  selector: 'app-manage-buaya-home',
  templateUrl: './manage-buaya-home.component.html',
  styleUrls: ['./manage-buaya-home.component.css']
})
export class ManageBuayaHomeComponent implements OnInit {
  ngOnInit(): void {
    
  }

}
