import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormArray, Validators } from '@angular/forms';
import { AdnServicio } from '@core/servicios/AdnServicio';

@Component({
  selector: 'app-mutacion-vista',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './mutacion-vista.html',
  styleUrl: './mutacion-vista.css'
})
export class MutacionVista {
  private fb = inject(FormBuilder);
  private adnServicio = inject(AdnServicio);

  
  dnaForm = this.fb.group({
    secuencias: this.fb.array([
      this.fb.control('', [Validators.required, Validators.pattern(/^[ATGC]+$/i)])
    ])
  });

  
  get secuencias() {
    return this.dnaForm.get('secuencias') as FormArray;
  }

  
  agregarFila() {
    this.secuencias.push(this.fb.control('', [Validators.required, Validators.pattern(/^[ATGC]+$/i)]));
  }

  
  eliminarFila(index: number) {
    if (this.secuencias.length > 1) {
      this.secuencias.removeAt(index);
    }
  }

  toUppercase(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();
  }
  
  enviar() {
    if (this.dnaForm.valid) {
      const dnaArray: string[] = this.dnaForm.value.secuencias as string[];

      this.adnServicio.verificarAdn(dnaArray).subscribe({
        next: (res) => {
          // NEXT handles 200 OK
          alert('¡Hay mutación!');
          this.reestablecerFormulario();
        },
        error: (err) => {
          // ERROR handles everything else
          if (err.status === 403) {
            alert('No hay mutación');
            this.reestablecerFormulario();
          } else {
            alert('Error técnico al procesar el ADN: ' + err.status);
          }
        }
      });
    }
  }
  
  reestablecerFormulario() {
     this.dnaForm.reset({
    secuencias: ['']
  });
  }

}
