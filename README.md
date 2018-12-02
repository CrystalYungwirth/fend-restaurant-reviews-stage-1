# Restaurant Reviews Stage 1

## Table of Contents
* [Overview](#overview)
* [View Page](#view-page)
* [Dependencies](#dependencies)
* [Resources](#resources)
* [Browsers Support](#browsers-support)
* [Contributions](#contributions)
* [License](#license)

## Overview
This Restaurant Reviews app is a requirement for the 2018 Udacity Front-End Nanodegree. I was provided [starter code](https://github.com/udacity/mws-restaurant-stage-1) and converted the project to meet the Responsive Design, Accessibility, and Offline Availability requirements of the [rubric](img/Rubric.png).

The responsive design was achieved with Flexbox. The overall design could use improvement, but it is responsive. The images look okay to me, but I think they could be better too. My goal is to have a smoother layout, and refactor the code to be `<picture>` elements.

Descriptive `alt=""` attributes have been added to image, along with various `aria` attributes which were recommended by the Lighthouse Accessibility audit in Google Dev Tools. The report files are included in this repository, and can be viewed at [Lighthouse Report Viewer](https://googlechrome.github.io/lighthouse/viewer/). Both reports scored 92 for accessibility, and have flags on image alts. I'm not sure why that is, when I inspect elements, the `alt` attribute seems to be correct.

A basic service worker with caching was added to the project to provide offline availability.

## View Page
### Online
[Restaurant Reviews App - Stage 1](https://crystalyungwirth.github.io/udacity-fend-p5-restaurant-reviews-stage-1/)

### localhost
  1) [Download repository](https://github.com/CrystalYungwirth/udacity-fend-p5-restaurant-reviews-stage-1.git) and unzip
  2)
  >If you have Python 2.x, spin up the server with python -m SimpleHTTPServer 8000
   For Python 3.x, you can use python3 -m http.server 8000.
   If you don't have Python installed, navigate to Python's website to [download and install the software](https://www.python.org/downloads/).

   3) Navigate web browser to [localhost:8000/File-Location](localhost:8000/)

## Dependencies
 * [leafletjs](https://leafletjs.com/)
 * [Google Fonts](https://fonts.google.com/)
 * [Google Cloud](https://cloud.google.com/)

## Resources
 * I used Traverse Media's [Intro to Service Workers and Caching](https://youtu.be/ksXwaWHCW6k) to help with making sure I had the right ES6 format.

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| Edge| last 10 versions| last 10 versions| last 10 versions| last 10 versions


## Contributions
I would be interested in reviewing any recommendations, especially related to the areas mentioned in the [Overview](#overview). However, I won't be able to merge requests until after October when I finish the nanodegree program.

## License
[MIT License](LICENSE)
