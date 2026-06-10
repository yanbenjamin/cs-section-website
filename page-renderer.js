/**
 * CS198 Section Website Renderer (Ben Yan)
 * ------------------------------------
 * Renders the section website (welcome paragraph, colorful grid schedule
 * with links, footnote), all from the data provided in section-info.js!
 */

let TITLEBUTTON_CLASSES = ["chip", "~neutral", "!normal", "bg-neutral-100", "mb-2", "mr-2"];
let TITLEBUTTON_STYLES = "background-color: lavender; box-shadow: 3px 3px #a78bfa; font-size: 14px"

let SCHEDULE_CLASSES = ["grid", "grid-flow-row-dense", "gap-5", "grid-cols-4", "md:grid-cols-7"];
let ENTRY_CLASSES = ["chip", "~neutral", "!low", "bg-neutral-50"];
let INFO_CLASSES = ["col-span-3", "md:col-span-6"];
let SPAN_CLASSES = ["chip", "~neutral", "!low", "bg-neutral-50"];

function create_button(link, buttonName, buttonColor){
    // buttonType out of slides (purple), handout (blue), resources (green)
	let buttonLink = document.createElement("a");
	buttonLink.setAttribute("href", link);
	for (let classType of ["chip", "m-2", "ml-0"]){
		buttonLink.classList.add(classType);
	}
	let colorToButtonType = {"purple": "~urge", "green": "~positive", "blue": "~info"};
	buttonLink.classList.add(colorToButtonType[buttonColor]);

	buttonLink.setAttribute("target", "_blank");
	buttonLink.setAttribute("rel", "noopener noreferrer");
	buttonLink.style.cssText = `box-shadow: 3px 3px ${buttonColor}; text-decoration: none; font-size: 14px`;
	buttonLink.innerHTML = buttonName;
	return buttonLink;
}
/* i.e. use case: create_button("https://www.google.com, "Slides", "purple"); */

function add_week(section_number, section_info, faded){
	let schedule = document.getElementById("my-schedule");
    
    let scheduleDualBox = document.createElement("div");
    for (let class_info of SCHEDULE_CLASSES){
		scheduleDualBox.classList.add(class_info);
	}
	if (faded) scheduleDualBox.style.cssText = "opacity: 0.4";
        
	let scheduleEntry = document.createElement("div");
    
	let scheduleSpan = document.createElement("span");
	for (let class_info of SPAN_CLASSES){
		scheduleSpan.classList.add(class_info);
	}
	scheduleSpan.style.cssText = "background-color: lavender; box-shadow: 3px 3px #a78bfa";

	scheduleSpan.innerHTML = "Section  " + section_number;

	scheduleEntry.appendChild(scheduleSpan);

	let scheduleInfo = document.createElement("div");
    for (let class_info of INFO_CLASSES){
		scheduleInfo.classList.add(class_info);
	}

	let sectionTitle = document.createElement("p");
	sectionTitle.innerHTML = "<strong>" + section_info["title"] + "</strong>";
    sectionTitle.innerHTML += " — " + stringify_date(section_info["date"]); // " — " + section_info["date"];
	scheduleInfo.appendChild(sectionTitle);
    
    let sectionMainLinks = document.createElement("p");

	let slidesButton = create_button(("slides" in section_info) ? section_info["slides"] : "", "Slides", "purple");
	if (faded) slidesButton.removeAttribute("href");
	sectionMainLinks.appendChild(slidesButton);

	let handoutButton = create_button(("handout" in section_info) ? section_info["handout"] : "", "Handout", "blue");
	if (faded) handoutButton.removeAttribute("href");
	sectionMainLinks.appendChild(handoutButton);

	for (const [resourceName, resourceLink] of Object.entries(section_info["resources"])) {
		let resourceButton = create_button(resourceLink, resourceName, "green");
		if (faded) resourceButton.removeAttribute("href");
		sectionMainLinks.appendChild(resourceButton);
	}

    scheduleInfo.appendChild(sectionMainLinks);

	scheduleDualBox.appendChild(scheduleEntry);
	scheduleDualBox.appendChild(scheduleInfo);
    schedule.appendChild(scheduleDualBox);
}

function stringify_date(date){
    return `${date.getMonth()}/${date.getDate()}`;
}

function add_schedule(){
	let schedule = document.getElementById("my-schedule");
	let p = document.createElement("p");
	p.innerHTML = "Hello";

	let week_num = 1;
	for (let week_info of ACTIVE_SECTIONS){
		add_week(week_num, week_info, false);
		week_num++;
	}

	for (let week_info of FUTURE_SECTIONS){
		add_week(week_num, week_info, true);
		week_num++;
	}
}


function add_images(){
	console.log("adding images");
	let website_img = document.getElementById("website-image");
	let webicon_img = document.getElementById("webicon-image");

	website_img.setAttribute("src", WEBSITE_IMAGE);
	webicon_img.setAttribute("href", WEBSITE_ICON);
}

function add_title(){
	console.log("adding title card");
	document.getElementById("meta-title").innerHTML = BROWSER_TITLE;
	document.getElementById("course-title").innerHTML = WEBPAGE_TITLE;
	document.getElementById("sl-name").innerHTML = SL_NAME + " " + " (" +  SL_SUNET + "@stanford.edu)";

	let title_cards = document.getElementById("title-cards");

	for (let top_button of TOP_BUTTONS){
		let button = document.createElement("span");
		button.innerHTML = top_button;

		for (let button_class of TITLEBUTTON_CLASSES){
			button.classList.add(button_class);
		}
		button.style.cssText = TITLEBUTTON_STYLES;

		title_cards.appendChild(button);
	}

	document.getElementById("opening-paragraph").innerHTML = WELCOME_MESSAGE;
}

function add_section_info(){
	let schedule = document.getElementById("my-schedule");

	let sectionMechanics = document.createElement("h2");
    sectionMechanics.setAttribute("id","mechanics");
	sectionMechanics.innerHTML = "Section Mechanics";
	sectionMechanics.style.cssText = "margin-top: 20px";

	let sectionMechanicsParagraph = document.createElement("p");
	sectionMechanicsParagraph.innerHTML = SECTION_MECHANICS;

	schedule.appendChild(sectionMechanics);
	schedule.appendChild(sectionMechanicsParagraph);
}


function add_footer(){
	document.getElementById("footer").innerHTML = WEBSITE_FOOTNOTE;
}

document.addEventListener("DOMContentLoaded", function() {
	add_title();
	add_images();
	add_schedule();
	add_section_info();
	add_footer();
});
