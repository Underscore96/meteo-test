import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MeteoChartComponent } from './components/meteo-chart/meteo-chart.component';
import { MeteoTableComponent } from './components/meteo-table/meteo-table.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [RouterTestingModule, HttpClientModule],
    declarations: [AppComponent, MeteoChartComponent, MeteoTableComponent]
=======
    imports: [
      RouterTestingModule,
      HttpClientModule
    ],
    declarations: [
      AppComponent,
      MeteoChartComponent,
      MeteoTableComponent
    ]
>>>>>>> adcf55854059527e461402a4ea8ff564880a9a6b
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'meteo-test'`, () => {
    const component = TestBed.createComponent(AppComponent);
    const app = component.componentInstance;
    expect(app.title).toEqual('Meteo Test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Meteo Test');
  });
});
