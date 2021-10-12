import { Component, OnInit } from '@angular/core';
import { SliderWorker } from '../../interfaces/sliderWorker';
import { WorkerService } from '../../services/worker.service';

@Component({
  selector: 'app-worker-carousel',
  templateUrl: './worker-carousel.component.html',
  styleUrls: ['./worker-carousel.component.css']
})
export class WorkerCarouselComponent implements OnInit {

  constructor(private workerService: WorkerService) { }

  ngOnInit(): void {
    this.workerService.loadWorkers().subscribe(data => {
      for (let w of data) {
        this.carouselContentCreator(w);
      }
    })
  }

  private carouselContentCreator(worker: SliderWorker) {
    let activeClass = worker.wid == 0;
    const carouselContent = document.getElementById("carousel-content") as HTMLElement;

    // Carousel item div
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("carousel-item");
    if (activeClass) {
      mainDiv.classList.add("active");
    }

    // Img
    const img = document.createElement("img");
    img.className = "d-block w-100";
    img.src = worker.img_url;
    img.alt = "Worker " + worker.wid;

    // Info div
    const infoDiv = document.createElement("div");
    infoDiv.className = "carousel-caption d-none d-md-block";

    // Info
    const titleh5 = document.createElement("h5");
    titleh5.style.color = "#818181";
    titleh5.innerHTML = worker.name;
    const descP = document.createElement("p");
    descP.style.color = "#818181";
    descP.innerHTML = worker.job;

    infoDiv.appendChild(titleh5);
    infoDiv.appendChild(descP);

    mainDiv.appendChild(img);
    mainDiv.appendChild(infoDiv);

    carouselContent.appendChild(mainDiv);
  }

}
