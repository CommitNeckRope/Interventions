import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule], //ajouté
      declarations: [ ProblemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
     expect(component).toBeTruthy();
   });

   //test1
   it('Zone PRÉNOM invalide avec 2 caractères ', () => {
     let zone = component.problemeForm.controls['prenomProbleme'];
     zone.setValue('a'.repeat(2));
     expect(zone.valid).toBeFalsy();
   });

   //test2
   it('Zone PRÉNOM valide avec 3 caractères', () => {
    let errors = {};
    let zone = component.problemeForm.get('prenomProbleme');
    zone.setValue('a'.repeat(3));
    expect(zone.valid).toBeTruthy();
  });

  //test3
  it('Zone PRÉNOM valide avec 200 caractères', () => {   
    let zone = component.problemeForm.get('prenomProbleme');
    zone.setValue('a'.repeat(200));
    expect(zone.valid).toBeTruthy();
  });

  //test4
  it('Zone PRÉNOM invalide avec aucune valeur', () => {
    let errors = {};
    let zone = component.problemeForm.get('prenomProbleme');
    zone.setValue('');
    errors = zone.errors || {};
    expect(errors['']).toBeFalsy();
  });

  //test5
  it('Zone PRÉNOM valide avec 10 espaces', () => {
    let zone = component.problemeForm.get('prenomProbleme');
    zone.setValue(' '.repeat(10));
    expect(zone.valid).toBeTruthy();
  });

  //test6
  it('Zone PRÉNOM valide avec 2 espaces et 1 caractère', () => {
    let zone = component.problemeForm.get('prenomProbleme');
    zone.setValue(' '.repeat(2) + 'a');
    expect(zone.valid).toBeTruthy();
  });


});
