import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app;
  let fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  beforeEach( () =>{
     fixture = TestBed.createComponent(AppComponent);
     app = fixture.componentInstance;
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'demo-testing'`, () => {
    expect(app.title).toEqual('demo-testing');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to demo-testing!');
  });

  it('should render title content', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('demo-testing app is running!');
  });
});
