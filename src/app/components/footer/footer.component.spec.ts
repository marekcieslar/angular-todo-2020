import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMaterialModule } from './../../add-material/add-material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { DebugElement } from '@angular/core';

describe('FoterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let compiled: HTMLElement;
  let span: HTMLElement;
  let a: any;

  const prefixText = 'Super TODO app created by:';
  const url = 'https://marekcieslar.pl/';
  const urlText = 'Marek';
  const postfixText = '. Thanks for visiting!';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [AddMaterialModule, FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    span = compiled.querySelector('footer span');
    a = compiled.querySelector('footer span a');
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should contain prefixText: "${prefixText}"`, () => {
    expect(span.textContent).toContain(prefixText);
  });

  it(`should contain postfixText: "${postfixText}"`, () => {
    expect(span.textContent).toContain(postfixText);
  });

  it(`should have proper link in <a>: "${url}"`, () => {
    expect(a.href).toEqual(url);
  });

  it(`should have "${urlText}" in <a>`, () => {
    expect(a.innerText).toEqual(urlText);
  });
});
