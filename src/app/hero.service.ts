import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Hero } from "./hero";
import { catchError, tap } from "rxjs/operators";
import { of } from "rxjs";

export class HeroService {
  baseUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) {}

  // get heros from server
  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.baseUrl + "heros").pipe(
      tap((heros) => this.log("fetch heros")),
      catchError(this.handleError("getHeros", []))
    );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === "number" ? hero : hero.id;
    const url = `${this.baseUrl}${id}`;
    return this.http.delete<Hero>(url).pipe(
      tap((_) => this.log(`deleted heros id=${id}`)),
      catchError(this.handleError<Hero>("deleted"))
    );
  }
  log(arg0: string): void {
    console.log("fetch heros");
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
