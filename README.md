# Slidles

![Mock-Up]()

Welcome to Slidles, a vibrant puzzle game designed to keep your brain engaged with quick, stausfying challenges. Slidles combines the classic sliding tile puzzle with a fresh, minimalist design, allowing for clean and easy navigation to solve our simple puzzles. Escape the complexity of modern life for a few minutes with our bright, eye-catching graphics and clean, intuitive interface. Slidles offers a refreshing experience for players of all ages. Each puzzle is engaging and rewarding, ensuring fun for both novice and seasoned puzzlers. Happy Sliding!

[View Slidles Live Here](https://sarahmclo.github.io/slidles-puzzle/)

Shields.io badges
![GitHub last commit](https://img.shields.io/github/last-commit/sarahmclo/slidles-puzzle)
![GitHub language count](https://img.shields.io/github/languages/count/sarahmclo/slidles-puzzle)
![GitHub top language](https://img.shields.io/github/languages/top/sarahmclo/slidles-puzzle)
![W3C Validation]()

## Table of Contents
1. [User Experience (UX)](#user-experience)
    - [Project Goals](#project-goals)
    - [User stories](#user-stories)
    - [Target Audience Goals](#target-audience-goals)
    - [Site Owner Goals](#site-owner-goals)
    - [First Time User Goals](#first-time-user-goals)
    - [Return User Goals](#return-user-goals)
2. [Design](#design)
    - [Design Philosophy](#design-philosophy)
    - [Design Choices](#design-choices)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Imagery](#imagery)
    - [Wireframes](#wireframes)
    - [Structure](#structure)
    - [The 5 Elements](#the-5-elements)
3. [Features](#features)
    - [Logo](#logo)
    - [Favicon](#favicon)
    - [Header](#header)
    - [Main Content](#main-content)
    - [Footer](footer)
    - [Technologies Utilised](#technologies-utilised)
    - [Languages](#languages)
    - [Frameworks and Programs](#frameworks-and-programs)
5. [Deployment](#deployment)
    - [Remote Deployment](#remote-deployment)
    - [Local Deployment](#local-deployment)
6. [Testing](#testing)
    - [Validation Testing](#validation-testing)
    - [Manual Testing](#manual-testing)
7. [Bugs and Fixes](#bugs-and-fixes)
8. [Finished Product](#finished-product)
9. [Future Features](#future-features)
10. [Credits](#credits)
    - [Content and Code](#content-and-code)
    - [Media](#media)
11. [Conclusion](#conclusion)
12. [Acknowledgements](#acknowledgements)

## User Experience (UX)<a name="user-experience"></a>
Our primary focus is on creating a seamless, enjoyable user experience. Slidles is designed with simplicity in mind, ensuring that users can navigate and play without any hassle. The vibrant design elements enhance engagement, making the puzzle-solving experience delightful and satisfying.

## Project Goals
The main goals of the Slidles project are to:
- Provide an accessible, engaging puzzle game for all ages.
- Combine classic gameplay with a modern, visually appealing interface.
- Ensure a smooth, intuitive user experience across all devices.

## User Stories
- As a user, I want to easily understand how to play the game without needing extensive instructions.
- As a user, I want the game to be challenging yet solvable, providing a sense of accomplishment.
- As a user, I want the design to be visually appealing and not overwhelming.

## Target Audience Goals
- Enjoy a quick, engaging mental challenge during short breaks.
- Experience a visually pleasing game that is easy to navigate.
- Feel a sense of achievement after solving puzzles.

## Site Owner Goals
- Attract and retain a broad audience with an engaging and well-designed puzzle game.
- Create a community of users who return to the game regularly.
- Ensure the site is easy to maintain and update with new features and puzzles.

## First Time User Goals
- Quickly understand how to play the game.
- Find the interface intuitive and the design appealing.
- Enjoy the initial experience and feel motivated to return.

## Return User Goals
- Experience new puzzles and challenges to keep the game engaging.
- Find improvements and updates that enhance the gameplay.
- Feel a sense of progression and increasing skill.

## Design <a name="design"></a>

### Design Philosophy
Our design philosophy centres on simplicity, vibrancy and user engagement. We believe that a clean aesthetically pleasing design enhances the user's focus on the puzzle itself.

### Design Choices
- **Minimalist Layout**: Ensures the focus remains on the puzzle.
- **Responsive Design**: Provides a seamless experience across all devices.
- **Interactive Elements**: Engages users through dynamic feedback.

- **References**
For my sliding puzzle project, I've drawn inspiration from a blend of traditional sliding puzzles and the minimalist elegance of Pantone Colour swatches. The clean lines and abstract forms of Picasso's line drawings contribute to the aesthetic. The puzzle itselp is like a polaroid snapshot, while the engaging interactivity of New York Times games inspire and shape the user experience. This fusion of artistic and functional elements create a uniquely captivating and visually appealing puzzle game.

![ref-pic](docs/references.webp)

- ### Colour Scheme
A bright and vibrant colour scheme is used to make the game visually stimulating. Colours are carefully chosen to create a balance between aesthetics and functionality.

- **Colour Palette**
The colour palette fir this site was devised in keeping with the original SLIDLES logo and created in [Adobe Color](https://color.adobe.com/).

<img src="docs/colour-palette.webp" alt="colour palette" width="500">

- **Logo**
The Slidles logo is an original creation using Adobe Illustrator and a starting point for the clean appearance of the puzzle and website.

<img src="docs/slidles_logo.webp" alt="logo" width="500">

- ### Typography
Clear, easy-to-read fonts complement the vibrant design without distracting from gameplay.

- **Fonts**
The font Montserrat was carefully chosen and imported from [Google Fonts](https://fonts.google.com/).
Neue-Helvetica was used in keeping with design inspiration.
Monospace was employed so the timer and moves section were not moving around page whilst incrementing

<img src="docs/fonts/montserrat.webp" alt="montserrat font" width="400">
<img src="docs/fonts/neue-helvetica.webp" alt="neue helvetica font" width="400">
<img src="docs/fonts/monospace.webp" alt="monospace font" width="400">

- ### Imagery
Minimal imagery is used, focusing on the tiles and the puzzle interface to keep the design clean and straightforward.

- **Content Hero Images**
All images were orignially created, optimised and converted to webp with [Convertio](https://convertio.co/).

### Wireframes
Wireframes serve as the blueprint for the website, outlining the layout and functionality of each page. They help us visualise the user experience and iterate on design concepts and scope before implementation.

Wireframes for this site were created with [Figma](https://figma.com/).

- **Sketch Wireframes**

<img src="docs/wireframes/wireframe-sketch-mobile.webp" width="500">

<img src="docs/wireframes/wireframe-sketch-desktop.webp" width="500">

- **Mobile, Tablet, Desktop Wireframes**

![wireframes](docs/wireframes/slidles-wireframes.webp)

### Structure
The structure of Slidles is designed for a seamless and intuitive user experience, with clear content hierarchy, consistent navigation and responsive design principle.

### Content Hierarchy
1. **Puzzle Area**: Central focus for gameplay.
2. **Timer and Moves Counter**: Visible to track progress.
3. **Navigation**: Easy access to new games, instructions, and settings.
4. **Footer**: Essential links and information.

### Navigation
- **Main Menu**: Links to start a game, instructions, and settings.
- **Footer Links**: Additional resources and contact info.

### Page Structure
- **Header**: Logo and main navigation.
- **Main Content**: Central puzzle area.
- **Sidebar (if applicable)**: Game options and settings.
- **Footer**: Secondary navigation and contact details.

### Grid System/Flexbox
- **Flexbox**: Ensures responsive, adaptive layout.
- **Dynamic Resizing**: Elements adjust based on screen size.

### Consistency
- **Design Elements**: Uniform colors, typography, and imagery.
- **Interaction**: Predictable behavior for interactive elements.
- **Layout**: Consistent across pages and devices.

### Whitespace
- **Enhances Readability**: Avoids clutter and improves focus.
- **Improves Navigation**: Clearly separates sections.

### Responsive Design
- **Mobile-Friendly**: Consistent experience on all devices.
- **Touch-Friendly**: Effective touch inputs.

### Accessibility
- **Keyboard Navigation**: Fully functional via keyboard.
- **Screen Reader Support**: Descriptive alt text and ARIA labels.
- **Color Contrast**: High contrast for visual impairments.

### User Flow
1. **Landing Page**: Brief introduction to the game.
2. **Game Start**: Immediate access to gameplay.
3. **Gameplay**: Smooth interaction with visible progress.
4. **Completion**: Clear feedback with options to start a new game or share.

By focusing on these structural elements, Slidles provides an engaging, enjoyable, and accessible experience for all users.

### The 5 Elements
1. **Strategy**: Offering a classic puzzle game with a modern twist.
2. **Scope**: Focusing on a single, well-designed puzzle game.
3. **Structure**: Clear navigation and intuitive gameplay.
4. **Skeleton**: Wireframes ensure a user-friendly layout.
5. **Surface**: Bright, vibrant design elements create an engaging experience.

## Features
![slidles-features](docs/slidles-features.webp)

### Header
- **Logo**
A simple, recognisable logo that reflects the game's playful and modern aesthetic, logo is an original creation in Adobe Illustrator.

<img src="docs/slidles_logo.webp" alt="logo" width="500">

- **Favicon**
Original creation designed in Adobe Illustrator this custom favicon stems from the designed logo which enhances recognition and improves user experience by providing a visual marker for the puzzle.

<img src="docs/slidles_icon.webp" alt="favicon" width="100">

### Main Content
- **Timer**
Tracks the time taken to solve each puzzle, adding an element of challenge.

- **Moves**
Counts the number of moves made, encouraging strategic thinking.

- **Audio**
Subtle sound effects enhance the interactive experience without being distracting.
Calming audio available with off/on toggle, muted initially.

- **Puzzle**
The core feature, designed to be engaging and rewarding, with varying levels of difficulty.

- **Buttons**
A clear play button and hint Button allow for clear UX for navigating game.

- **Modals**
Info modal is discreet but obvious and contains relevant info on how to pplay the game.
Hint modal gives the user an extra boost on how to solve the puzzle.

### Footer
- **Social Networks**
Contains essential social media links for further engagement.

- **Contact Information**
Displaying important info on how to contact creator, with links.

## Technologies Utilised <a name="technologies-utilised"></a>

### Languages

- [**HTML5**](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [**CSS**](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [**Javascript**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)

### Frameworks and Programs

- [**Gitpod**](https://www.gitpod.io/) Gitpod used for writing code, committing, and pushing to GitHub. 
- [**GitHub**](https://github.com/) GitHub utilised for hosting, viewing and some readme amendments.
- [**Google Fonts**](https://fonts.google.com/) Google Fonts used to import Inter and Roboto into stylesheet.
- [**Font Awesome**](https://fontawesome.com/) Font Awesome used throughout to add icons in order to create a better visual experience for the user.
- [**Figma**](https://figma.com/) Balsamiq utilised to create wireframes during the design phase.
- [**Responsive Design Checker**](https://responsivedesignchecker.com/) Responsive Design Checker used in the testing process to check responsiveness on various devices.
- [**Am I Responsive**](https://ui.dev/amiresponsive) Am I Responsive utilised to generate Mock Up Image of site in a responsive manner.
- [**Chrome DevTools**](https://developer.chrome.com/docs/devtools) Chrome DevTools utilised frequently during development process for code review and responsiveness tests.
- [**Browserstack**](https://www.browserstack.com/) Browserstack employed to test browser compatility across multiple devices.
- [**Shields.io**](https://shields.io/) Shields.io used to generate dynamic badges for Readme.
- [**Coolers Contrast Checker**](https://coolors.co/) Coolers Contrast Checker used to make sure colours contrasted well correctly for optimum accessibility.
- [**Adobe Colors**](https://color.adobe.com/) Adobe Colors helped to generate a pleasing colour palette in keeping with logo and overall design.
- [**Convertio**](https://convertio.co/) Convertio utilised to optimise images to webp for fast loading.

## Deployment <a name="deployment"></a>

Git was used for version control. Version control was done locally and remotely. For remote version control, GitHub was used. Regular commits were made after each file change.

### Remote Deployment

GitHub Pages was used to deploy the site remotely.

1. Login to [Git Hub](https://github.com/) Repository account
2. Navigate to my project repository slidles-puzzle
3. Click the Settings near the top of the page
4. In the left-hand menu, find and click on the Pages
5. In the Source section, choose 'main' from the drop-down, select branch menu
6. Select 'root' from the drop-down folder menu
7. Click 'Save'
8. Project now live and a link is visible at the top of the page "Your site is published at https://github.com/sarahmclo/slidles-puzzle/“ 

### Local Deployment

To contribute or check the code, you can:
- Fork the repository
- Clone the repository

### How to Fork
1. To fork, go the repository
2. Click on the Fork button in the top left corner of the page
3. Fill in the form with either keep the name or create a new name for the repository

### How to Clone
1. To clone, go to repository
2. Click on the Code button above the repository files
3. A drop-down will appear and choose either
4. Go to your terminal and decide where you want to clone the files
5. Use the copy/paste button and copy it into your terminal
6. You also have the option to download a ZIP file of the code

## Testing <a name="testing"></a>

### Validation Testing
## HTML
![markup-validation](docs/bugs/html-markup-validation.webp)

## CSS
![css-validation](docs/bugs/css.validation.webp)

## Javascript
![javascript-testing](docs/bugs/jshint.webp)

## Accessibility

### Lighthouse Testing
![lighthouse-testing](docs/bugs/lighthouse-test-desktop.webp)

### Semantic HTML

Semantic HTML tags were used to provide a clear and meaningful structure to the website content. This helps screen readers and other assistive technologies interpret and convey information accurately.

### ARIA (Accessible Rich Internet Applications)

ARIA attributes were utilised on links to enhance the accessibility of the site allowing for screen readers to accurately pick up information.

### Contrast and Readability

Coolers Contrast Checker was used to ensure sufficient contrast in colors chosen to make the content readable for users with visual impairments.

### Alt Text for Images

All images on the website include descriptive alternative text (alt text). This helps users with visual impairments understand the content and context of images even if they cannot see them.

### Responsive Design

The website is responsive, providing a seamless experience across various devices and screen sizes. This benefits users with different abilities and ensures a consistent and accessible user experience. Tested via Chrome DevTools and Responsive Design Checker as project progressed.

### Manual Testing

Manual testing for the site involves hands-on evaluation by human testers to ensure functionality, usability, and compatibility across various devices and browsers. By conducting the manual testing procedures below, we ensure the website functions smoothly, provides an optimal user experience, and meets desired standards.

- **Navigation Testing:** Manually testing the navigation menu ensured all links are working correctly and directing users to the intended pages.
The navigation menu is responsive and displays properly on different devices and screen sizes.
- **Subscribe Form Testing:** Testing the subscribe form ensured it functions correctly, allowing users to submit their information successfully. Validation messages were checked and ensured they appear when required fields are left blank or invalid data is entered.
- **Responsive Design Testing:** Testing the website on various devices (desktop, mobile, tablet) has ensured responsiveness and proper layout adaptation.
It is verified that all content remains accessible and readable across different screen sizes.
- **Content Hierarchy Testing:** Verified that the content hierarchy is maintained throughout the website, with clear headings, subheadings, and sections.
Content is logically organized and easy to navigate for users.
- **Cross-browser Compatibility Testing:** The website has been tested on different web browsers in Browserstack (Chrome, Firefox) to ensure compatibility and consistent performance. Layout and functionality issues specific to certain browsers have been addressed accordingly.
- **Form Submission Testing:** Subscribe form has been submitted with valid data and ensures successful submission and confirmation.
- **Page Structure Testing:** The ayout and structure of individual pages are consistent and aligned with the design specifications.
There are no formatting issues or discrepancies in the placement of content elements.
- **Accessibility Testing:** The website has been tested using accessibility tools to ensure compatibility and adherence to accessibility standards.
Proper labeling, alt text for images, and other accessibility features have been included.
- **Performance Testing:** The website's performance has been evaluated using tools like DevTools, WC3 Validator and Lighthouse to assess factors such as page load speed, performance metrics, and optimization opportunities.

## Bugs and Fixes <a name="bugs-and-fixes"></a>

Throughout the development process, we encountered and resolved various bugs to ensure a smooth and seamless user experience. Our rigorous testing procedures helped identify and address these issues promptly.

- ### Mark-up Validation Testing Bugs ###
|Bug / Errors | Where / Location site | Browser | Device | Fixed | Solution |
|-------------|-----------------------|---------|--------|:-----:|----------|
| Timer-moves-audio-info-container: get all on one line| Main content index.html | Chrome | MacBook | Yes | Use flexbox to and gap to space correctly  |
| Audio - sound effect bug - not playing fast enough | Main content index.html | Chrome | Various | Yes | update to new trimmed audio and add preload:auto; to html |
| Audio - stops after one play | Main content index.html | Chrome | MacBook | Yes | Use loop |
| Audio - stops after one play | Main content index.html | Chrome | MacBook | Yes | Use loop |
| Audio - stops after one play | Main content index.html | Chrome | MacBook | Yes | Use loop |
| Audio - stops after one play | Main content index.html | Chrome | MacBook | Yes | Use loop |
| Audio - stops after one play | Main content index.html | Chrome | MacBook | Yes | Use loop |
| Audio - stops after one play | Main content index.html | Chrome | MacBook | Yes | Use loop |

- ### CSS Validation Testing Bugs ###

|Bug / Errors | Where / Location site | Browser | Device | Fixed | Solution |
|-------------|-----------------------|---------|--------|:-----:|----------|
| Moves & timer move around whilst incrementing| css/js.script | Chrome | Various | Yes | use monospace font |

- ### Javascript Validation Testing Bugs ###
|Bug / Errors | Where / Location site | Browser | Device | Fixed | Solution |
|-------------|-----------------------|---------|--------|:-----:|----------|
| audio on-click| js.script | Chrome | Various | Yes | use on-click toggle |
| js hint says variable togglePlay not in use| js.script | Chrome |Various | Yes | assign togglePlay in javascript not html - adapted from: https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link |
| Puzzle grid | html/js.script | Chrome | Various | Yes | use background url and css grid https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout|
| Puzzle-container make gaps in grid to section tiles| css | Chrome | Various | Yes | usee css display: grid and style grid-gap |
| puzzle image not showing| css | Chrome | Various | Yes | change cell ids to represent columns 1,2,3 and row1,2,3 |
| Puzzle image not lining up| css | Chrome | MacBook | Yes | Update tile dimensions true to size of image, essential that width and height exact for image to display in correct aspect ratio and image shown completely |
| tile borders | css | Chrome | Various | Yes | amend border to surrounding container rather than each individual tile |
| Shuffle tiles when playButton clicked | js.script | Chrome | Various | Yes | use tile direction array, shuffle() function and math.floor https://stackoverflow.com/questions/57907979/javascript-shuffle-table-rows //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random |
| playButton and tiles not working| js.script | Chrome | Various | Yes | document.getElementByquerySelector("playButton")
    const tiles = document.getElementByquerySelectorAll - incorrect id remove getElementBy and declare gameStarted variable|
| Shuffle function incorrect| js.script | Chrome | Various | Yes | add parentheses |
| playButton not working| js.script | Chrome | Various | Yes | Event Listener incorrect|
| playButton not shuffling| html/js.script | Chrome | Various | Yes | add onClick="shuffle"() in html |
| playButton not shuffling| html/js.script | Chrome | Various | Yes | remove stray comma that was within code |
| After game has commenced playButton effects timer and moves - timer is speeding up and extra moves added when clicked - should just shuffle tiles only | js.script | Chrome | Various | Yes |  |
| Close hint modal bug | html/css/js.script | Chrome | Various | Yes | no "." in event.target |


## Finished Product <a name="finished-product"></a>
Our Slidles puzzle combines the classic challenge of traditional sliding puzzles with the modern simplicity of Pantone colour swatches and the artistic touch of Picasso line drawings. The engaging gameplay, inspired by New York Times games, offers a visually striking and mentally stimulating experience. Perfect for both casual gamers and puzzle enthusiasts, Slidles is a beautiful blend of art and play.

<details>
<summary>Mobile<a name="mobile"></a></summary>

![mobile-index](docs/mobile.png)
</details>

<details>
<summary>Desktop<a name="desktop"></a></summary>

![mobile-index](docs/desktop.png)
</details>

<details>
<summary>iPad<a name="iPad"></a></summary>

![ipad-index](docs/iPad.png)
</details>

## Future Features <a name="future-features"></a>
- New puzzle levels and challenges.
- Additional themes and color schemes.
- Social sharing features to engage with friends.

## Credits <a name="credits"></a>

### Content and Code

* Puzzle, text and imagery all original creations.
* [Code-Institute](https://codeinstitute.net/ie/?nab=0) Walkthrough projects content.
* [MDN](https://developer.mozilla.org/en-US/) Web docs and tutorials.
* [StackOverflow](https://stackoverflow.com/) Troubleshooting code.
* [W3Schools](https://www.w3schools.com/) Javascript intro tutorials for audio and sound effects.
* [CSS Tricks - HTML Picture](https://css-tricks.com) Further CSS tutorials.
* [Web Dev](https://web.dev.com) Tutorials in javascript and responsivity.
* [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) Flexbox tutorials.
* [Codu](https://www.codu.co/) Inspiration.
* [Gitpod](https://www.gitpod.io/) Write, commit and push code to GitHub. 
* [GitHub](https://github.com/) Utilise for hosting, amending and viewing.
* [Figma](https://figma.com/) Create the detailed low-fidelity wireframes in the design phase.
* [Codepen](https://codepen.io/) Practice adn troubleshoot code ideas/bugs.
* [JShint](https://jshint.com/) Javascript code validation and troubleshooting.
* [Responsive Design Checker](https://responsivedesignchecker.com/) Test responsiveness on various devices.
* [Am I Responsive](https://ui.dev/amiresponsive) Generate Mock Up Image of site in a responsive manner.
* [Chrome DevTools](https://developer.chrome.com/docs/devtools) Utilised regularly in development for code review and to test responsiveness.
* [Browserstack](https://www.browserstack.com/) Browserstack was utilised to test browser compatility across multiple devices.
* [Shields.io](https://shields.io/) Shields.io used to create dynamic badges for Readme.
* [Google Fonts](https://fonts.google.com/) Import carefully selected fonts.
* [Coolers Contrast Checker](https://coolors.co/) Ensure colour contrast inline with guidelines.
* [Adobe Colors](https://color.adobe.com/) Generate pleasing colour palette in keeping with logo and overall design.

### Media
* [Adobe Illustrator](https://www.adobe.com/) All original imagery created in Adobe Illustrator.
* [FontAwesome](https://fontawesome.com/) Icons for social networks.
* [Favicon](https://favicon.io/) Created my own favicon from logo.
* [Convertio](https://convertio.co/document-converter/) Images converted to webp for optimal loading.
* [Pixabay](https://www.pixabay.com) Audio (carl-orff-gassenhauer-hans-neusiedler-180891.mp3)and tile slide sound effect.
* [The Noun Project](https://www.google.com/maps) Icons for info modal and volume on/off.

## Conclusion <a name="conclusion"></a>
In conclusion, Slidles merges the timeless appeal of sliding puzzles with contemporary design elements, creating a visually captivating and intellectually engaging experience. Our aim is to offer a puzzle site that not only challenges the mind but also delights the senses, making it an ideal destination for both casual players and avid puzzle enthusiasts. Through Slidles, we strive to bring the joy of puzzles to a wider audience, blending art and entertainment in perfect harmony.

## Acknowledgements <a name="acknowledgements"></a>
- Amy Richardson, my course facillitator.
- Rahul Lakahanpal, my mentor.
- CI Tutor Support and Student Care.
- Slack community for resources and daily motivation.
- Fellow course students for sharing.
- My own childhood tile-sliding puzzle.
- Ozzy the dog.
