import { Component,} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-format-output',
  templateUrl: './format-output.component.html',
  styleUrls: ['./format-output.component.css'],


})
export class FormatOutputComponent {
  rawData: any;
  formattedData: string | undefined;

  formatInput(data: any) {
    this.rawData = data;
    // Implement logic to format data based on data type
    if (typeof data === 'number') {
      this.formattedData = data.toFixed(2); // Format as currency with 2 decimals
    } else if (typeof data === 'string') {
      this.formattedData = data.toUpperCase(); // Convert to uppercase
    } else {
      this.formattedData = 'Input not supported for formatting';
    }
  }
}
