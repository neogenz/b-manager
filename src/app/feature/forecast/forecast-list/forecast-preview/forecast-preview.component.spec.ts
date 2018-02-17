import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ForecastPreviewComponent } from '@app/feature/forecast/forecast-list/forecast-preview/forecast-preview.component';


describe('ForecastPreviewComponent', () => {
  let component: ForecastPreviewComponent;
  let fixture: ComponentFixture<ForecastPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
