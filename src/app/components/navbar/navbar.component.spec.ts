import { AddMaterialModule } from './../../add-material/add-material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Link, NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let compiled: HTMLElement;

  const title = 'menu';
  const links: Link[] = [
    {
      path: '/about',
      text: 'About',
    },
    {
      path: '/todo',
      text: 'Todo'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule, AddMaterialModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title "${title}"`, () => {
    expect(compiled.querySelector('h2').textContent).toEqual(title);
  });

  it(`should have first link with text "${links[0].text}"`, () => {
    const a = compiled.querySelector('a');
    expect(a.textContent).toEqual(links[0].text);
  });

  it(`should have first link to "${links[0].path}"`, () => {
    const a = compiled.querySelector('a');
    expect(a.href).toContain(links[0].path);
  });
});
