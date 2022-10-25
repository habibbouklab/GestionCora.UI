import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Assiette } from 'src/app/models/assiette';
import { Ingridient } from 'src/app/models/ingridient';
import { AssietteService } from '../services/assiette.service';

@Component({
  selector: 'app-page-pricipal',
  templateUrl: './page-pricipal.component.html',
  styleUrls: ['./page-pricipal.component.css'],
})
export class PagePricipalComponent implements OnInit {
  calculeCaloriesForm!: FormGroup;
  listeIngridientComplete: Ingridient[] = [];
  listeIngridientSelectionnees: Ingridient[] = [];
  tauxCalories: number = 0;
  assiette: Assiette = new Assiette();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private assietteService: AssietteService
  ) {}

  ngOnInit(): void {
    this.CreateCalculerIngridientsForm();
    this.assietteService.obtenirListIngridients().subscribe((data) => {
      this.listeIngridientComplete = data;
    });
  }

  CreateCalculerIngridientsForm() {
    this.calculeCaloriesForm = this.fb.group({
      ingridientsCheckBoxes: this.fb.array([]),
    });
  }

  onCheckboxChange(e: any) {
    if (e.target.checked) {
      let ingrid = new Ingridient();
      ingrid = this.chercherIngridientParId(e.target.value);
      ingrid.isSelected = true;
      if (ingrid.nom == 'Farine') {
        this.listeIngridientComplete.forEach((ingridient) => {
          if (ingridient.nom == 'Lait') {
            ingridient.isSelected = true;
            this.listeIngridientSelectionnees.push(ingridient);
          }
        });
      } else if (ingrid.nom == 'Lait') {
        this.listeIngridientComplete.forEach((ingridient) => {
          if (ingridient.nom == 'Farine') {
            ingridient.isSelected = true;
            this.listeIngridientSelectionnees.push(ingridient);
          }
        });
      }
      this.listeIngridientSelectionnees.push(ingrid);
    } else {
      let ingrid = new Ingridient();
      ingrid = this.chercherIngridientParId(e.target.value);
      ingrid.isSelected = false;

      if (ingrid.nom == 'Farine') {
        this.listeIngridientComplete.forEach((ingridient) => {
          if (ingridient.nom == 'Lait') {
            ingridient.isSelected = false;
            this.deleteIngridient(ingridient);
          }
        });
        ingrid.isSelected = false;
        this.deleteIngridient(ingrid);
      } else if (ingrid.nom == 'Lait') {
        this.listeIngridientComplete.forEach((ingridient) => {
          if (ingridient.nom == 'Farine') {
            ingridient.isSelected = false;
            this.deleteIngridient(ingridient);
          }
        });
        ingrid.isSelected = false;
        this.deleteIngridient(ingrid);
      } else {
        ingrid.isSelected = false;
        this.deleteIngridient(ingrid);
      }
    }
    this.assiette.ingridients = this.listeIngridientSelectionnees;
    this.assietteService
      .calculerCaloriesIngridients(this.assiette)
      .subscribe((data) => {
        this.tauxCalories = data;
      });
  }

  deleteIngridient(ingridient: Ingridient) {
    const index: number = this.listeIngridientSelectionnees.indexOf(ingridient);
    if (index !== -1) {
      this.listeIngridientSelectionnees.splice(index, 1);
    }
  }

  chercherIngridientParId(id: number): Ingridient {
    let ing = new Ingridient();
    this.listeIngridientComplete.forEach((ingridient) => {
      if (ingridient.id == id) {
        ing = ingridient;
      }
    });
    return ing;
  }

  caculerCalorie(assiette: Assiette) {
    this.assietteService
      .calculerCaloriesIngridients(assiette)
      .subscribe((data) => {
        this.tauxCalories = data;
      });
  }

  submitForm() {
    console.log(
      'Le nombre de calories dans l,assiette est : ' +
        this.tauxCalories +
        ' calorie(s)'
    );
  }
}
