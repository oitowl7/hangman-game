# Hangman/Chopman Game
## Save Ned...or Don't

This little game is basically hangman. There is an array of House Names inside the game and one is randomly selected and you, the user, must try to guess what it is before you run out of guesses.

### Technologies Used
This project used vanilla JavaScript, CSS, and HTML only. This was my first foray into the world of JavaScript and logic and I only messup up almost everything. The other stuff was only slightly messed up.

### Lessons Learned
This was the first time I worked with variables and, while the scoping on this is horrific (99% of the variables are GLOBAL!), the lessons learned from how to declare, use, or change variables as I needed to.

I also learned quite a bit about arrays and how they work and can be manipulated. It may be easy for me now, but back then....my mind was absolutely **blown**.

I also learned how to make function calls. Again, this seems obvi now, but at the time, function calls and especially function calls with recursion were very abstract ideas for me. While I still didn't know how to properly pass values along with those functions, it was a breakthrough just to figure out how to make functions go.

Finally, I learned I am **not** an artist. If you visit the page, you will see why. The images are almost all custom, and all terrible. Charming perhaps...but still terrible.

### Issues
I had a lot of issues with array scoping and resetting. Obviously I had to do a lot of array "resetting to nothing" in this little game due to the fact that all my variables were global. This led to issues with arrays having no actual values being stored but still several indexes being used and messing with the `array.length`. This caused a lot of bugginess that I never fully solved before having to move on to the next task.

### Images of the Page
This is the top page with the rules and description and poorly shown text. Black or dark grey...what was I thinking?
![Top of Page](https://i.imgur.com/84axmqI.jpg)

This is an image of the game. Like I said, not an artist. 
![Game](https://i.imgur.com/0jeKT1J.jpg)