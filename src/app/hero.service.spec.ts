import { of } from "rxjs";
import { HeroService } from "./hero.service";

describe("StrengthPipe", () => {
  let mockHttpClient;
  let heroService: HeroService;

  beforeEach(() => {
    heroService = new HeroService(mockHttpClient);
  });

  it("should return heros data123", () => {
    let mockResponse = [
      { id: 1, name: "munna", strength: 10 },
      { id: 2, name: "tunna", strength: 5 },
    ];
    spyOn(heroService, "getHeros").and.returnValue(of(mockResponse));
    let response;
    heroService.getHeros().subscribe((res) => (response = res));
    expect(response).toEqual(mockResponse);
  });
});
