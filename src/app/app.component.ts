import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import cloudinary from 'cloudinary-video-player';
import 'cloudinary-video-player/cld-video-player.min.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  @ViewChild('player', { static: true }) video!: ElementRef;
  player!: cloudinary.VideoPlayer;
  ngOnInit() {
    this.initializePlayer();
  }

  initializePlayer(): void {
    const options = {
      controls: true,
      cloudName: 'tamas-demo',
    };

    this.player = cloudinary.videoPlayer(this.video.nativeElement, options);
    this.player.source('harry-potter-trailer');
  }
}
