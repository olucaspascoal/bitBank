import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number | undefined;
  destino: number | undefined;

  transferir(){
    console.log("Solicitado nova transferencia");
    // console.log('Valor:   ', this.valor); 
    // console.log('Destino: ', this.destino);
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir)
    this.limparCampos();
  }

  limparCampos(){
    this.valor   = 0;
    this.destino = 0;
  }
}
