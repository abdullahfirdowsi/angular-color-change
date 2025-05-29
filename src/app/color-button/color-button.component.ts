import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-button',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.css']
})
export class ColorButtonComponent {
  // Properties for simple version
  simpleColor: string = '';
  currentSimpleColor: string = '#0d6efd'; // Store current button color
  
  // Properties for complex version
  complexColor: string = '';
  
  // List of valid CSS colors (you can expand this list)
  private validColors: string[] = [
    'red', 'blue', 'green', 'yellow', 'purple', 'orange', 
    'black', 'white', 'pink', 'brown', 'gray', 'cyan',
    'magenta', 'lime', 'teal', 'indigo', 'violet', 'maroon'
  ];

  // Method for simple version
  changeButtonColor(): void {
    if (this.isValidColor(this.simpleColor)) {
      this.currentSimpleColor = this.simpleColor;
    }
  }

  // Method for complex version
  onColorInput(event: any): void {
    const inputColor = event.target.value.toLowerCase();
    if (this.isValidColor(inputColor)) {
      this.complexColor = inputColor;
    } else {
      this.complexColor = inputColor; // Still update to show invalid state
    }
  }

  // Helper method to validate colors - now public for template access
  isValidColor(color: string): boolean {
    if (!color) return false;
    color = color.toLowerCase();
    // Check if color exists in our list or is a valid CSS color
    return this.validColors.includes(color) || 
           CSS.supports('color', color);
  }
}