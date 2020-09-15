import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMaterialModule } from './add-material/add-material.module';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: 'mocked footer component',
})
class FooterMockComponent {}

@Component({
  selector: 'app-header',
  template: 'mocked header component',
})
class HeaderMockComponent {}

@Component({
  selector: 'app-navbar',
  template: 'mocked navbar component',
})
class NavbarMockComponent {}

@Component({
  selector: 'app-tooltip',
  template: 'mocked tooltip component',
})
class TooltipMockComponent {}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: Component;

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

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render tooltip', () => {
    expect(fixture.nativeElement.textContent).toContain('mocked tooltip component');
  });

  it('should render header', () => {
    expect(fixture.nativeElement.textContent).toContain('mocked header component');
  });

  it('should render footer', () => {
    expect(fixture.nativeElement.textContent).toContain('mocked footer component');
  });
});
