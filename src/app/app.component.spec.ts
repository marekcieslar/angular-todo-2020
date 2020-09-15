import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMaterialModule } from './add-material/add-material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: 'mocked footer component'
})
class FooterMockComponent {}

@Component({
  selector: 'app-header',
  template: 'mocked header component'
})
class HeaderMockComponent {}

@Component({
  selector: 'app-navbar',
  template: 'mocked navbar component'
})
class NavbarMockComponent {}

@Component({
  selector: 'app-tooltip',
  template: 'mocked tooltip component'
})
class TooltipMockComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AddMaterialModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        AppComponent,
        NavbarMockComponent,
        FooterMockComponent,
        HeaderMockComponent,
        TooltipMockComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
