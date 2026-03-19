# 🎩The Magic Name Hat

*Created by Ms. Liu for Computer Science.*

Welcome to the Magic Name Hat project! In this project, we are moving beyond simple variables and learning how to store, search, and manipulate entire lists of data using JavaScript Arrays. 

## 🎯 Concepts Practiced

This project introduces foundational Computer Science concepts by turning a simple web page into an interactive, digital drawing hat:

* **Data Structures (Arrays):** Using the `namesList = []` array to store multiple names in a single variable, introducing the concept of Zero-Based Indexing.
* **Array Methods:** * Using `.push()` to add new data to the end of the list.
  * Using `.indexOf()` to search the array for a specific name and find its mathematical position (and learning why computers return `-1` if it's missing!).
  * Using `.splice()` to delete specific items, creating a true "draw without replacement" system.
* **Algorithms & Probability:** Combining `Math.random()` and `Math.floor()` with `namesList.length` to calculate a perfectly scaled random integer that matches our array indexes.
* **State Synchronization:** Updating the HTML DOM (`innerHTML`) immediately after altering the JavaScript array so the user's screen perfectly matches the computer's hidden memory.
* **Error Trapping:** Writing `if` statements to intercept bad user actions, such as trying to draw from an empty hat, deleting a name that doesn't exist, or submitting a blank input.
* **Separation of Concerns:** Moving our visual design out of the HTML and into a dedicated `style.css` file, using the ID selector (`#drawButton`) to style specific elements.

## 🚀 How to Run the Code

1. Download or clone this project folder to your local computer.
2. Ensure that `index.html`, `script.js`, and `style.css` are all saved in the exact same folder so they can link together properly.
3. Double-click the `index.html` file to open the application in your web browser.
4. Type a few names, add them to the hat, and click the golden button to draw a winner!

## 🧑‍💻 Student Exploration Challenges

Ready to take this project further? Open up the code and try adding these features:

* **The "No Duplicates" Trap:** Can you write an `if` statement inside the `addName()` function that uses `.indexOf()` to check if a name is *already* in the hat? If it is, print an error and stop them from adding it twice!
* **Hat Shake Animation:** Open `style.css` and try looking up how to add a CSS `:hover` transition to make the golden draw button change color or grow slightly when your mouse touches it.
