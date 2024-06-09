import { Component } from '@angular/core';
import { ContactoService } from '../../service/contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {
  contact = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  constructor(private contactoService: ContactoService) {}

  onSubmit() {
    this.contactoService.saveContact(this.contact);
    Swal.fire({
      title: 'Mensaje enviado',
      text: 'Mensaje enviado exitosamente',
      icon: 'success',
      confirmButtonText: 'OK',
    });
    this.contact = { name: '', email: '', phone: '', message: '' };
  }
}
