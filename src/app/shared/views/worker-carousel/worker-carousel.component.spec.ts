import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerCarouselComponent } from './worker-carousel.component';

describe('WorkerCarouselComponent', () => {
  let component: WorkerCarouselComponent;
  let fixture: ComponentFixture<WorkerCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
