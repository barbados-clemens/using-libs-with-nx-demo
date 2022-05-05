import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgLibTwoModule} from "@using-libs-with-jest/ng-lib-two";
import { CmpComponent } from './cmp/cmp.component';

@NgModule({
  imports: [CommonModule, NgLibTwoModule],
  declarations: [CmpComponent],
})
export class NgLibOneModule {}
