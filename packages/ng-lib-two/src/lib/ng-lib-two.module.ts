import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { CmpComponent } from './cmp/cmp.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule],
  declarations: [CmpComponent],
  exports: [CmpComponent]
})
export class NgLibTwoModule {}
