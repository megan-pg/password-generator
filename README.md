# password-generator
This assignment's purpose was to create a password generator that
pulled several characters from an array or arrays.

I chose to have the javascript concat the 4 established arrays into one larger array. 
  

This only worked in commit 58966d3b8a4cae94f84c0bee6ff4ef035624fcc6, which was by far 
the most funcational of the scripts developed, despite not being organized.
This commit received the number of characters desired but could not define the
strings to pull from the array. 

It did push characters with the selected attributes the user
designated into the password field, but only one character at a time. An example of this would be
if the user chose Uppercase Letters and Numbers, only a single Uppercase Letter or Number would 
appear in the password field. The Console in the Insepect element of the website showed that if 
a user enter 5 for desired characters, the password would have 5 undefined indexes in the 
password console log.  


Upon cleaning the code and reorganizing it, thinking that was the issue (and also because it just neededed
to be clean), the script no longer pushes any characters to the password field. It also doesn't recognize
the password array.

 Additional issues that arose from reorganizing:

    -the return (password) became illegal
    
    -the for loop could only go in its current location, otherwise the entire script document want to delete
      itself
      example: it wanted every ending } ; ) deleted for syntax errors which werent true. *I believe the for loop
      doesn't work in its current location, but then couldn't get the javascript to work at all.
      
    -the console logs to try and figure out what the disconnect is aren't working either. 
      
There are 5 javescript files because code I looked up online corrupted my orginal file and consequently all script
files that weren't retyped by hand (no copying at all) became corrupt. That completely from scratch file is script3.js.
Please see amazing screenshot of corruption messing with the colors of the document - again, no syntax errors, it's just 
glitching.

I still do not know how to connect the pieces. I have the peices of code to make things work - I do not 
know how they assemble together correctly to make a working javascript file. I was told to put several peices of code
inside a specific function, and that's when the document stopped producing any results. What confuses me the most is, I
  only changed the location of the content, and I am frustrated that my crappy ugly content worked better than the organized 
  version does. I spent every day on this and I failed. Despite reading the javascript cheatsheets and MDN, I know code
  to use, but don't understand the exact location pieces of code need to be in order to make the code talk to one another. 
  My for loop seemed to work better outside of a function... and yet that sounds wrong. I feel like I was close with 
  script.js commit 58966d3b8a4cae94f84c0bee6ff4ef035624fcc6.

So if you want to see javacript that understand it needs to produce a designated amount of characters, but doesn't know where
from, and yet does produce characters from the if statements you tell it to, go to script.js commit
58966d3b8a4cae94f84c0bee6ff4ef035624fcc6 and relink it to the html file - it was SOOOOOO CLOSE - just ugly as sin and missing
something.
If you want to see clean and organized javascript that should be logical that doesn't work except for the prompt, alert, and 
confirms, see script3.js that is appart of the latest commit (obviously something is definitely missing but the debugger 
thinks the for loop screws up thew syntax.

*****EDIT*****
script6.js reverts back to the commit of 58966d3b8a4cae94f84c0bee6ff4ef035624fcc6 to mirror the placement of the code, with 
the addition of calling the generatePassword. I thought I was doing this as well as defining it, but it seems it needed it in 
the for loop. I still can't get the passwords to appear on the website in the password field, but they are being generated, 
which can be seen in the Inspect feature. It's a start.

****EDIT 2****
I have uploaded a corrections after working with my tutor.
My prompts and confirms feed my arrays better and there are is an additional array to collect the concated string arrays, 
which then feed into the passwordArray.
I am calling the generatePassword function better and call writePassword fucntion this time. 
There are now error messages if the parameters of the password are not met, such as minimum and maximum number limits,
no letters or special characters allowed.
If nothing is selected for charactersparameters for the password, an error message will alert the user they must pick 
something.
