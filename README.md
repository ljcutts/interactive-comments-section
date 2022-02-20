# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview
This is my 6th Frontend Mentor Project

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
I first mapped out the data in the json file that contained the initial replies and comments. Then I styled them. I then went on to make the 'add a comment' box at the bottom and styled this. Once I built the initial setup of the app, I started to work on the functionality more. I made it so that the user can add, update, edit, and delete comments/replies using useState and localStorage. I made different components that were dedicated to editing comments/replies and for the delete message modal.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

I learned a lot from this project because it was much much harder than I expected. I learned how to display data from a json file. I have a much better understanding of how CRUD apps work on the frontend side. I have more knowledge as to what useState React hooks are capable of and understand a more as to how to manipulate arrays with React Hooks and Vanilla Javascript. I wrote some code for manipulating the date of comments and replies, but didn't really get to it.

```js
const timePassed = () => {
    var time1 = new Date().getHours(); //"now"
    var time2 = new Date(2022, 1, 19, 9, 23).getHours(); // some date
    const timeDifference = Math.abs(time2 - time1);
    console.log(timeDifference);
  };

  useEffect(() => {
    setInterval(timePassed, 3000);
  })
```

### Continued development

I want to continue getting better at making CRUD apps, using map and other Javascript methods to render data from json files, and I want to learn how to make my code less redundant.


### Useful resources

- [w3schools](https://www.w3schools.com) - Dictionary and reference for HTML, CSS, and Javascript.
- [Reactgo](https://reactgo.com/javascript-remove-html-element/) - Helped to learn how to remove an HTML element
- [Limit Items In Map](https://stackoverflow.com/questions/42374873/limit-items-in-a-map-loop/42374933) - Helped to learn how to render specific indexed in a map
- [Multi-dimensional Array](https://www.pluralsight.com/guides/display-multidimensional-array-data-in-react) - Helped to better understand how to access different parts of an array in a json file
- [Active Input Focus On Render In React](https://stackoverflow.com/questions/53314857/how-to-focus-something-on-next-render-with-react-hooks) - Helped to learn how to use useRef and useEffect to activate focus on an input/textarea.



## Author

- Frontend Mentor - [@ljcutts](https://www.frontendmentor.io/profile/ljcutts)


## Acknowledgments

Coding Addict & Brian Codex

