import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class snackBar{
    constructor(private _snackBar: MatSnackBar) { }
    openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
        return this._snackBar.open(message, action, {
          duration: 4000,
        });
      }
}