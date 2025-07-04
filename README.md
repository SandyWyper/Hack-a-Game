# Hack-a-Game

Our first hack-a-thon for the Code Institute

<a href="https://sandywyper.github.io/Hack-a-Game/" target="_blank">Visit Cat-Dog Quiz Game</a>

![responsiveness](assets/images/responsive.png)

## Collaborators

Working together on this project was a highly rewarding experience for all of us. We enjoyed collaborating, sharing ideas, and learning from each other. One of the biggest lessons we learned was the challenge of coordinating Git across a team. Ensuring that everyone was on the same page and managing merge conflicts required effective communication and organization. This experience has significantly improved our teamwork and version control skills.

- [Sandy](https://github.com/SandyWyper) - Lead
- [Beth](https://github.com/bethneyanderson) 
- [Marijonas](https://github.com/Marso22)
- [Dallow](https://github.com/SandyWyper)

## Technologies Used

## Wireframes

Before beginning the project, initial wireframes were designed to map out the final product. These included both mobile and desktop versions.

![wireframe for phone](assets/images/phone-wireframe.png)
![wireframe for desktop](assets/images/desktop-wireframe.png)

## Design and User Experience (UX)

The Cat Quiz website was designed with a playful yet intuitive user experience in mind, aimed at engaging users of all ages—especially cat lovers! The layout is clean and responsive, ensuring accessibility across devices from mobile to desktop.

## Visual Design

Color Palette: The design embraces a vibrant and cheerful aesthetic, featuring warm yellows and oranges that echo the playful energy of cats. These are paired with black fonts for strong contrast and easy readability across devices.

Typography: Clear, legible fonts support easy reading, with distinct styles used to separate headings, body text, and buttons.

Imagery: Real cat images were used throughout the quiz to boost engagement and provide visual delight.

## User Flow

Home Page: Welcomes users and provides a clear call-to-action to start the quiz.

Quiz Navigation: Users move through a series of questions with immediate visual feedback on their selections.

Results Page: Provides a summary of the user’s performance, along with a fun message to keep the tone light and encouraging.

## UX Principles

Accessibility: Buttons are large and color contrast meets basic accessibility guidelines.

Responsiveness: The site adapts seamlessly to various screen sizes using modern CSS techniques.

Simplicity: Navigation is minimal and intuitive, so users can enjoy the quiz without distraction.

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript ES6](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

- [Google Fonts:] (https://fonts.google.com/) was used to import the ... fonts into the style.css file which are used on all pages of the project.
- [Font Awesome:](https://fontawesome.com/) was used to add icons for aesthetic and UX purposes.
- [Git:](https://git-scm.com/) was used for version control by utilising the Gitpod terminal to commit to Git and Push to GitHub.
- [GitHub:](https://github.com/) is used as the respository for the projects code after being pushed from Git.
- [favicon:](https://favicon.io/) was used for creating website logo icons.

### JavaScript Summary

This is a modular vanilla JavaScript quiz game about cat and dog breeds. The main game logic in `index.js` orchestrates a 10-question quiz where users can toggle between cats and dogs, with each question displaying breed images and multiple choice answers. The game tracks scores, provides immediate feedback on answers, and shows a final score page with confetti effects for celebration.

The project uses ES6 modules to organise functionality across multiple JavaScript files. Core modules include question generation `generateQuestion.js`, UI population `populateQuestion.js`, layout management `toggleStartPageContent.js`, `showScorePage.js`, fetching an image from an API `getImage.js`, DOM element references `elementRefs.js`, and game data `catsndogs.js` containing arrays of cat and dog breed names. The game flow progresses from start screen → quiz questions → score display with retry functionality.

**External Dependencies:** The project uses one external library - @tsparticles/confetti (v3.0.3) loaded via CDN for the confetti celebration effects. All other functionality is implemented with vanilla JavaScript and DOM manipulation. The cat and dog images are fetched from [API Ninjas](https://api-ninjas.com/) for every question. We have around 70 cat breeds, and 100 dog breeds. Each breed returns a different image from the API.

## AI Augmented FullStack Bootcamp

### JavaScript Group Project

### Learning Outcomes and Expected Performance

---

### **LO1: Design and implement a one-page interactive Front-End web application using HTML, CSS, and JavaScript focusing on UX, accessibility, and responsive DOM manipulation.**

| Criterion                              | Assessment Criteria                                                                                                                                                                                                                                                | Expected Performance                                                                                                                                                                                                                   |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.1 Front-End Design                   | Design a single-page application that meets accessibility guidelines and follows UX design principles. Create a responsive front-end using custom HTML and CSS/CSS frameworks. Ensure a clear structured layout with intuitive navigation and consistent graphics. | Semantic use of HTML. No WCAG errors. User-friendly interface with consistent styles, clear navigation, and adherence to mockups. Layout adapts to screen sizes using media queries, Flexbox, Grid, or Bootstrap without major errors. |
| 1.2 Interactivity and DOM Manipulation | Implement interactive features with JavaScript allowing user control and feedback. Use JavaScript for effective DOM manipulation to dynamically update the single-page interface.                                                                                  | JavaScript functionality enables dynamic updates and user interaction. Effective DOM manipulation of at least two elements based on user actions.                                                                                      |

---

### **LO2: Test and validate a one-page web application through development, implementation, and deployment stages.**

| Criterion                            | Assessment Criteria                                                                                                           | Expected Performance                                                                               |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 2.1 Code Validation                  | Ensure JavaScript code passes a linter with no significant issues. Validate custom HTML using W3C. Validate CSS using Jigsaw. | JavaScript passes linter. HTML and CSS validate successfully using W3C and Jigsaw validators.      |
| 2.2 Responsive Design and Navigation | Use media queries to maintain layout across screen sizes. Use semantic markup for structure. Ensure intuitive navigation.     | Media queries adjust layout correctly. Semantic HTML used. Navigation is intuitive and functional. |

---

### **LO3: Deploy a one-page web application to a Cloud platform ensuring functionality and security.**

| Criterion            | Assessment Criteria                                                                                                                            | Expected Performance                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 3.1 Cloud Deployment | Deploy the application to a cloud platform. Use Git and GitHub for version control. Remove commented code. Ensure all links and elements work. | Successful deployment with no discrepancies. Effective Git use with clear history. No commented-out code. All links and interactive elements work correctly. |

---

### **LO4: Maximize future maintainability through documentation, clear code structure, and organization.**

| Criterion                             | Assessment Criteria                                                                                                                                                            | Expected Performance                                                                                                                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.1 Documentation                     | Write a README explaining the app's purpose, user value, and deployment. Include screenshots and attribute external code.                                                      | Concise documentation with wireframes, mockups, and reasoning for changes. Screenshots and descriptions show features and benefits. External code is properly attributed.                   |
| 4.2 Code Organization and Readability | Separate custom from external code. Organize HTML, CSS, JS with comments. Use external files. Ensure readable, well-indented code with consistent naming and folder structure. | Clear separation of code. Well-commented, organized HTML/CSS/JS. External CSS and JS linked properly. Code is readable, indented, with minimal blank lines. Good file naming and structure. |

---

### **LO5: Implement and document front-end interactivity using core JavaScript, libraries, or frameworks focusing on DOM manipulation.**

| Criterion                                       | Assessment Criteria                                                                                                | Expected Performance                                                                                                                     |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 5.1 JavaScript Functionality and Error Handling | Write JS functions with conditionals and loops. Handle invalid input gracefully. Ensure no page or console errors. | JavaScript uses ifs and loops as expected. Invalid inputs handled gracefully. Interactive elements work smoothly without console errors. |

---

### **LO6: Leverage AI tools to orchestrate the software development process.**

| Criterion                               | Assessment Criteria                                               | Expected Performance                                                                                                             |
| --------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 6.1 Code Creation with AI               | Use AI strategically to generate code aligned with project goals. | Brief reflection in README on key AI-generated code decisions and outcomes.                                                      |
| 6.2 Debugging with AI                   | Use AI to identify and resolve code issues.                       | Reflection in README summarizing AI’s role in resolving bugs.                                                                    |
| 6.3 Performance/UX Optimisation with AI | Use AI to improve performance and UX.                             | Short reflection on AI’s contribution to performance and UX improvements. Minimal documentation required.                        |
| 6.4 Workflow Reflection                 | Reflect on AI's impact on development workflow and outcomes.      | README includes concise insights into AI’s workflow impact with focus on efficiency and outcomes, not prompts or detailed steps. |
