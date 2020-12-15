import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WwTableComponent } from './ww-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [WwTableComponent],
})
export class WwTableModule {}
