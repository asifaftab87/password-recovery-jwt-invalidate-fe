import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSlideToggleModule, MatCard, MatCardModule, MatGridListModule, MatTableModule, MatPaginatorModule, MatButtonToggleModule, MatDialogModule, MatSnackBarModule } from '@angular/material';

const material = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatCardModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatSnackBarModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
