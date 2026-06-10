/**
 * CS198 Section Website Metadata (Ben Yan)
 * ------------------------------------
 * Information to put here so that anyone can readily create and publish their 
 * own section website with their template. Feel free to change anything around! :)
 */ 

/* information on the SL and what course they're teaching for! */
let WEBPAGE_TITLE = "CS106AX Section"; // what shows up on webpage
let BROWSER_TITLE = "Ben's CS106AX Section"; // what shows up on browser tab
let SL_NAME = "Ben Yan"
let SL_SUNET = "bbymonster"

/* logistical information on the section: when and where? */
let QUARTER = '🍁 Autumn 2026'
let LOCATION = "🏛️ CoDa B45"
let TIME = "⏱️ Monday, 4:30 - 5:20 PM"
let TOP_BUTTONS = [QUARTER, LOCATION, TIME, "🎡 Welcome to Jerryland!"] // what to display beneath the title 

/* for the aesthetic images to greet the student: one on webpage, the other as the tab icon.
   current choices are "snorlax.jpg", "pikachu-and-ash.png", "your-name.png", feel free to add more! */
let WEBSITE_IMAGE = "res/pikachu-and-ash.png"
let WEBSITE_ICON = WEBSITE_IMAGE // by default, same as the website image

/* materials for each week, e.g., "slides", "handout", "resources" */ 
/* less relevant to CS106A/B, but also supports check-off form, lab recording for CS107!*/

let SECTION_1 = {"title": "Intro to JavaScript",
			  "date": new Date(2026, 7, 2), /* year, month, date for the Javascript Date class! */ 
			  "slides": "",
			  "handout": "https://web.stanford.edu/class/cs106ax/res/handouts/04-Section-1.pdf",
			  "resources": {
			  		"✏️ Section Syllabus": "https://web.stanford.edu/class/cs106ax/res/handouts/01-General-Information.pdf",
                    "🐣 Ben + Jerry Easter Egg": "res/jerry-photo.png"
			  }}

let SECTION_2 = {"title": "JSGraphics, Strings",
			  "date": new Date(2026, 7, 9),
			  "slides": "",
			  "handout": "https://web.stanford.edu/class/cs106ax/res/handouts/06-Section-2.pdf",
			  "resources": {
			  		"🎨 JSGraphics Documentation": "https://jdkula.github.io/jsgraphics-docs/"
			  }}

let SECTION_3 = {"title": "Complex JavaScript Data Structures",
			  "date": new Date(2026, 7, 16),
			  "slides": "",
			  "handout": "https://web.stanford.edu/class/cs106ax/res/handouts/09-Section-3.pdf",
			  "resources": {
			  		
			  }};

let SECTION_4 = {"title": "More Data Structures, Intro to Python",
			  "date": new Date(2026, 7, 23),
			  "slides": "",
			  "handout": "https://web.stanford.edu/class/cs106ax/res/handouts/14-Section-4.pdf",
			  "resources": {
			  		
			  }};

let SECTION_5 = {"title": "Python Arrays",
			  "date": new Date(2026, 7, 30),
			  "slides": "",
			  "handout": "https://web.stanford.edu/class/cs106ax/res/handouts/16-Section-5.pdf",
			  "resources": {
			  		
			  }};

let SECTION_6 = {"title": "Python Classes",
			  "date": new Date(2026, 8, 6),
			  "slides": "",
			  "handout": "https://web.stanford.edu/class/cs106ax/res/handouts/18-Section-6.pdf",
			  "resources": {
			  		
			  }};

let SECTION_7 = {"title": "Hello World",
			  "date": new Date(2026, 8, 13),
			  "slides": "",
			  "handout": "https://web.stanford.edu/class/cs106ax/res/handouts/21-Section-7.pdf",
			  "resources": {
			     
			  }};

/* change this to show which sections are fully visible, and which ones are faded / semi-translucent */
let ACTIVE_SECTIONS = [SECTION_1, SECTION_2];
let FUTURE_SECTIONS = [SECTION_3, SECTION_4, SECTION_5, SECTION_6, SECTION_7];

/* the first paragraph or welcome mat students see when they visit the page! 
   you can embed HTML within this, e.g., links, bolding, your choice!*/
let WELCOME_MESSAGE = [
`
<p>Hello and welcome! I'm Ben, and is my homepage for CS106AX section slides,
links to handouts, and general resources. If you have any questions, 
please reach out! So excited to meet you all, and for a
beautiful quarter & journey of learning in CS106AX.</p>
<p>Not to mention, this is my favorite course in all of Stanford, so can't wait!♥️</p>
`];

/* the paragraph students see after the schedule, with section logistics / LaIR times */
let SECTION_MECHANICS = [
`
<p>Section is evaluated on attendance, participation, and making a sincere effort
(as opposed to getting everything right), and is worth 10 percent of your course grade!</p>
<br>
<p>For getting help in CS106AX, please see the course website on the office hours mosaic
each week and the EdStem forum. <b>My 🌃 office hours are generally Wednesdays & Fridays, 3-5 PM,</b> and
would love to see you there! I'm also generally happy to stay 
after section if I can help with anything, e.g., all things AX, CS generally, campus life, etc.</p>
`];
 
/* a footnote to put down your name, as well as any fun messages for students or others :D */
let WEBSITE_FOOTNOTE = 
`
© Ben Yan. Oh look, I'm twinning with Kevin Wang's stunning
<a href="https://stanford.edu/~kevjwang/cs106a" target="_blank" rel="noopener noreferrer" 
style = "text-decoration: none; color: darkblue;"> section website here 💫.</a>
`