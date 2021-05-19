import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs/internal/observable/of";

import { HerosComponent } from "./heros.component";
import { HeroService } from "../hero.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("HerosComponent", () => {
  let component: HerosComponent;
  let HEROS;
  let mockHeroService;

  let fixture: ComponentFixture<HerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HerosComponent],
      imports: [HttpClientTestingModule],
      providers: [HeroService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    HEROS = [
      { id: 1, name: "munna", strength: 10 },
      { id: 2, name: "tunna", strength: 5 },
      { id: 3, name: "kumar", strength: 21 },
    ];
    mockHeroService = jasmine.createSpyObj(["getHeros", "deleteHero"]);
    component = new HerosComponent(mockHeroService);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should Remove the dedicated heros from list", () => {
    mockHeroService.deleteHero.and.returnValue(of(true));
    component.heros = HEROS;
    component.delete(HEROS[2]);
    expect(component.heros.length).toBe(2);
  });
});
