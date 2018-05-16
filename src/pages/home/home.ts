import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Livro } from '../../model/livro';
import { DestinoPage } from '../destino/destino';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public livros : Livro[];

  constructor(public navCtrl: NavController) {

  

    var l1 = {nome:'1984', autor:'George Orwell',img:'assets/imgs/gs.jpg'};
    var l2 = {nome:'Harry Potter e a Pedra Filosofal', autor:'J. K. Rowling',img:'assets/imgs/hob.jpg'};
    var l3 = {nome:'O Senhor dos Anéis', autor:'J. R. R. Tolkien',img:'assets/imgs/j1.png'};
    var l4 = {nome:'Fundação', autor:'Isaac Asimov',img:'assets/imgs/sw.jpg'};
    var l5 = {nome:'Neuromancer', autor:'William Gibson',img:'assets/imgs/sw.jpg'};
    var l6 = {nome:'O Homem do Castelo do Alto', autor:'Philip K. Dick',img:'assets/imgs/sw.jpg'};
    var l7 = {nome:'Snow Crash', autor:'Neal Stephenson',img:'assets/imgs/sw.jpg'};
    var l8 = {nome:'2001: Uma Odisséia no Espaço', autor:'Arthur Clarke',img:'assets/imgs/sw.jpg'};
    var l9 = {nome:'Coraline', autor:'Neal Gaiman',img:'assets/imgs/sw.jpg'};
    this.livros = [l1, l2, l3, l4, l5, l6, l7, l8, l9];

  }


  irParaDestino(livro:Livro):void{
    this.navCtrl.push(DestinoPage, {livro})
  }
}
