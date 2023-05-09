const JsI = [
    {
        Question: "1. What is JavaScript?",
        Answer: "JavaScript is a client-side as well as server side scripting language that can be inserted into HTMLpages and is understood by web browsers. JavaScript is also an Object based Programming language"
    },
{
    Question: "2. Enumerate the differences between Java and JavaScript?", 
    Answer: "Java is a complete programming language.In contrast, JavaScript is a coded program that can be introduced to HTML pages.These two languages are not at all inter - dependent and are designed for the different intent.Java is an object - oriented programming(OOPS) or structuredprogramming language like C++ or C whereas JavaScript is a client - side scripting language.",
}, 
{
    Question: "3. What are JavaScript Data Types?",
 Answer:"Following are the JavaScript Data types:• Number • String• Boolean • Function• Object• Undefined"
}, 
{
    Question: "4. What is the use of isNaN function?",
     Answer: "isNan function returns true if the argument is not a number otherwise it is false.5. Between JavaScript and an ASP script, which is faster ? JavaScript is faster.JavaScript is a client - side language and thus it does not need the assistance of the web server to execute.On the other hand, ASP is a server - side language and hence is alwaysslower than JavaScript.Javascript now is also a server side language(nodejs).",
}, 
{
    Question: "6. What is negative infinity?", 
    Answer: "Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero."
}, 
{
    Question: "7. Is it possible to break JavaScript Code into several lines?",
    Answer: "Breaking within a string statement can be done by the use of a backslash, ‘\’, at the end of the firstlineExample: document.write(This is \a program);And if you change to a new line when not within a string statement, then javaScript ignores breakin line.Example: var x = 1, y = 2, z = x + y;"
}, 
{
    Question: "8. Which company developed JavaScript?", 
    Answer: "Netscape is the software company who developed JavaScript.",
},
 {
    Question: "9. What are undeclared and undefined variables?", 
    Answer: "Undeclared variables are those that do not exist in a program and are not declared.If the programtries to read the value of an undeclared variable, then a runtime error is encountered.Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned."
}, 

{
    Question:"11. What are global variables?",
    Answer:" How are these variable declared and what are the problems associated with using them? Global variables are those that are available throughout the length of the code, that is, these haveno scope. The var keyword is used to declare a local variable or object. If the var keyword is omitted, a global variable is declared.",

},
{
    Question:"12. What is a prompt box?",
    Answer:"A prompt box is a box which allows the user to enter input by providing a text box. Label and box will be provided to enter the text or number.",
},

{
    Question:"13. What is ‘this keyword in JavaScript?",
    Answer:"This keyword refers to the object from where it was called.",
},
{ 
    Question:"14. Explain the working of timers in JavaScript?",Answer:" Also elucidate the drawbacks of using the timer,if any?",
Answer:"Timers are used to execute a piece of code at a set time or also to repeat the code in a given interval of time. This is done by using the functions setTimeout, setInterval and clearInterval. The setTimeout(function, delay) function is used to start a timer that calls a particular function after the mentioned delay. The setInterval(function, delay) function is used to repeatedly executethe given function in the mentioned delay and only halts when cancelled. The clearInterval(id) function instructs the timer to stop.Timers are operated within a single thread, and thus events might queue up, waiting to beexecuted.",
},
{
    Question:"15. Which symbol is used for comments in Javascript?",
    Answer:"// for Single line comments and /* Multi Line Comment */ ",
},
{
    Question:"16. What is the difference between ViewState and SessionState?",
Answer:"‘ViewState’ is specific to a page in a session.‘SessionState’ is specific to user specific data that can be accessed across all pages in the web application.",
},
{
    Question:"17. What is === operator?",
    Answer:"=== is called as strict equality operator which returns true when the two operands are having the same value without any type conversion.",
},
{
    Question:"18. Explain how can you submit a form using JavaScript?",
    Answer:"To submit a form using JavaScript use document.form[0].submit(); document.form[0].submit();",
},
{
    Question:"19. Does JavaScript support automatic type conversion?",
    Answer:"Yes JavaScript does support automatic type conversion, it is the common way of type conversion used by JavaScript developers",
},
{Question:"20. How can the style/class of an element be changed?",
Answer:"It can be done in the following way:document.getElementById(“myText”).style.fontSize = “20?or document.getElementById(“myText”).className = “anyclass”;",
},
{Question:"21. Explain how to read and write a file using JavaScript?",
Answer:"There are two ways to read and write a file using JavaScript • Using JavaScript extensions • Using a web page and Active X objects",
},
{
    Question:"22. What are all the looping structures in JavaScript?",
    Answer:"Following are looping structures in Javascript: • For • While• do-while loops"
},
{
    Question:"23. What is called Variable typing in Javascript?",
    Answer:"Variable typing is used to assign a number to a variable and the same variable can be assigned to astring."
},
{
    Question:"24. How can you convert the string of any base to integer in JavaScript?",
Answer:"The parseInt() function is used to convert numbers between different bases. parseInt() takes thestring to be converted as its first parameter, and the second parameter is the base of the givestring.In order to convert 4F (of base 16) to integer, the code used will be -parseInt (4F), 16);"
},
{
    Question:"25. Explain the difference between “==” and “===”?",
Answer:"“==” checks only for equality in value whereas “===” is a stricter equality test and returns false ifeither the value or the type of the two variables are different."
},
{
    Question:"26. What would be the result of 3+2+?",
Answer:"Since 3 and 2 are integers, they will be added numerically. And  is a string, its concatenationwill be done. So the result would be 5",
},
{Question:"27. Explain how to detect the operating system on the client machine?"
,Answer:"In order to detect the operating system on the client machine, the navigator.platform string(property) should be used."
},
{
    Question:"28. What do mean by NULL in Javascript?",
    Answer:"The NULL value is used to represent no value or no object. It implies no object or null string, novalid boolean value, no number and no array object.",
 },
 {
    Question:"29. What is the function of delete operator?",
    Answer:"The delete keyword is used to delete the property as well as its value.",

},
{
    Question:"30. What is an undefined value in JavaScript?",
    Answer:" Undefined value means the • Variable used in the code doesn’t exist • Variable is not assigned to any value• Property doesn’t exist"
},
{
    Question:"31. What are all the types of Pop up boxes available in JavaScript?"
    ,Answer:" • Alert • Confirm and • Prompt",
},
{
    Question:"32. What is the use of Void(0)?",
    Answer:"Void(0) is used to prevent the page from refreshing and parameter zero is passed while calling. Void(0) is used to call another method without refreshing the page.",
 },
 {
    Question:"34. What is the data type of variables of in JavaScript?",
    Answer:" All variables in the JavaScript are object data types."
},
{
    Question:"35. What is the difference between an alert box and a confirmation box?",
    Answer:"An alert box displays only one button which is the OK button.But a Confirmation box displays two buttons namely OK and cancel."
},
{
    Question:"36. What are escape characters?",
Answer:"Escape characters (Backslash) is used when working with special characters like single quotes,double quotes, apostrophes and ampersands. Place backslash before the characters to make it display.",

},
{
    Question:"37. What are JavaScript Cookies?",
    Answer:"Cookies are the small test files stored in a computer and it gets created when the user visits the websites to store information that they need. Example could be User Name details and shopping cart information from the previous visits.",
 },
 {
    Question:"38. Explain what is pop()method in JavaScript?",
    Answer:"The pop() method is similar as the shift() method but the difference is that the Shift method works at the start of the array. Also the pop() method take the last element off of the given array and returns it. The array on which is called is then altered.",
 },
{
    Question:"39. Whether JavaScript has concept level scope?",
Answer:"No. JavaScript does not have concept level scope. The variable declared inside the function has scope inside the function.",
},
{
    Question:"40. Mention what is the disadvantage of using innerHTML in JavaScript?",
Answer:"If you use innerHTML in JavaScript the disadvantage is• Content is replaced everywhere • We cannot use like “appending to innerHTML” • Even if you use +=like “innerHTML = innerHTML + ‘html’” still the old content is replaced by html • The entire innerHTML content is re-parsed and build into elements, therefore its much slower • The innerHTML does not provide validation and therefore we can potentially insert valid and broken HTML in the document and break it",
},
{
    Question:"41. What is break and continue statements?",
    Answer:"Break statement exits from the current loop.Continue statement continues with next statement of the loop.",
},
{
    Question: "42.What are the two basic groups of dataypes in JavaScript?",
    Answer: "They are as –\n• Primitive\n• Reference types.\nPrimitive types are number and Boolean data types. Reference types are more complex types like strings and dates."
    },
    {
    Question: "43.How generic objects can be created?",
    Answer: "Generic objects can be created as:\nvar I = new object();"
    },
     {
    Question: "44.What is the use of type of operator?",
    Answer: "‘Typeof’ is an operator which is used to return a string description of the type of a variable."
    },
     {
    Question: "45.Which keywords are used to handle exceptions?",
    Answer: "Try… Catch---finally is used to handle exceptions in the JavaScript\nTry{\nCode\n}\nCatch(exp){\nCode to throw an exception\n}\nFinally{\nCode runs either it finishes successfully or after catch\n}"
    },
    {
    Question: "46.Which keyword is used to print the text in the screen?",
    Answer: "document.write(“Welcome”) is used to print the text – Welcome in the screen."
    },
     {
    Question: "47.What is the use of blur function?",
    Answer: "Blur function is used to remove the focus from the specified object."
    },
    {
    Question: "48.What is variable typing?",
    Answer: "Variable typing is used to assign a number to a variable and then assign string to the same variable. Example is as follows:\ni= 8;\ni=”john”;"
    },
    {
    Question: "49.How to find operating system in the client machine using JavaScript?",
    Answer: "The ‘Navigator.appversion’ is used to find the name of the operating system in the client machine."
    },
    {
    Question: "50.What are the different types of errors in JavaScript?",
    Answer: "There are three types of errors:\n• Load time errors: Errors which come up when loading a web page like improper syntax errors are known as Load time errors and it generates the errors dynamically.\n• Run time errors: Errors that come due to misuse of the command inside the HTML language.\n• Logical Errors: These are the errors that occur due to the bad logic performed on a function which is having different operation."
    },
     {
        Question: "51.What is the use of Push method in JavaScript?",
        Answer: "The push method is used to add or append one or more elements to the end of an Array. Using this method, we can append multiple elements by passing multiple arguments"
        },
        {
        Question: "52.What is unshift method in JavaScript?",
        Answer: "Unshift method is like push method which works at the beginning of the array. This method is used to prepend one or more elements to the beginning of the array."
        },
        {
        Question: "53.What is the difference between JavaScript and Jscript?",
        Answer: "Both are almost similar. JavaScript is developed by Netscape and Jscript was developed by Microsoft."
        },
        {
        Question: "54.How are object properties assigned?",
        Answer: "Properties are assigned to objects in the following way - obj[class] = 12; or obj.class = 12;"
        },
         {
        Question: "55.What is the ‘Strict’ mode in JavaScript and how can it be enabled?",
        Answer: "Strict Mode adds certain compulsions to JavaScript. Under the strict mode, JavaScript shows errors for a piece of codes, which did not show an error before, but might be problematic and potentially unsafe. Strict mode also solves some mistakes that hamper the JavaScript engines to work efficiently. Strict mode can be enabled by adding the string literal “use strict” above the file. This can be illustrated by the given example: function myfunction() { use strict; var v = This is a strict mode function; }"
        },
        {
        Question: "56.What is the way to get the status of a CheckBox?",
        Answer: "The status can be acquired as follows - alert(document.getElementById('checkbox1').checked); If the CheckBox will be checked, this alert will return TRUE."
        },
        {
        Question: "57.How can the OS of the client machine be detected?",
        Answer: "The navigator.appVersion string can be used to detect the operating system on the client machine."
        },
         {
        Question: "58.Explain window.onload and onDocumentReady?",
        Answer: "The onload function is not run until all the information on the page is loaded. This leads to a substantial delay before any code is executed. onDocumentReady loads the code just after the DOM is loaded. This allows early manipulation of the code."
        },
        {
        Question: "59.How will you explain closures in JavaScript? When are they used?",
        Answer: "Closure is a locally declared variable related to a function which stays in memory when the function has returned."
        },
        
        
        
        
        
{
    Question:"78. Explain the unshift() method ?",
    Answer:"This method is functional at the starting of the array, unlike the push(). It adds the desired numberof elements to the top of an array.",
    },
{
Question:"79. Define unescape() and escape() functions?",
Answer:"The escape () function is responsible for coding a string so as to make the transfer of the information from one computer to the other, across a network.",
},
{
Question:"80. What are the decodeURI() and encodeURI()?",
Answer:"EncodeURl() is used to convert URL into their hex coding. And DecodeURI() is used to convert theencoded URL back to normal.",
},
{
Question:"81. Why it is not advised to use innerHTML in JavaScript?",
Answer:"innerHTML content is refreshed every time and thus is slower. There is no scope for validation ininnerHTML and, therefore, it is easier to insert rouge code in the document and, thus, make theweb page unstable."
},
{
Question:"82. What does the following statement declares?",
Answer:"Var myArray = [[[]]]; It declares a three dimensional array.",
},
{
Question:"83. How are JavaScript and ECMA Script related?",
Answer:"ECMA Script are like rules and guideline while Javascript is a scripting language used for webdevelopment."
},
{
Question:"84. What is namespacing in JavaScript and how is it used?",
Answer:"Namespacing is used for grouping the desired functions, variables etc. under a unique name. It is aname that has been attached to the desired functions, objects and properties. This improvesmodularity in the coding and enables code reuse."
},
{
Question:"85. How can JavaScript codes be hidden from old browsers that don’t support JavaScript?",
Answer:"For hiding JavaScript codes from old browsers:Add “<!--” without the quotes in the code just after the <script> tag.Add “//-->” without the quotes in the code just before the <script> tag.Old browsers will now treat this JavaScript code as a long HTML comment. While, a browser thatsupports JavaScript, will take the “<!--” and “//-->” as one-line comments."
}
]
export default JsI;
