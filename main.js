function random(min, max) {
  return Math.random() * (max - min) + min;
}
list_of = [
	"Northern lights",
	"Sam Rubin",
	"Happy mothers day",
	"Ferry",
	"Sean Burroughs",
	"Google Classroom",
	"The Chi",
	"I had some help",
	"Tornadoes",
	"Earthquakes",
	"ERR_PG_NOT_LOADED",
	"Google dcs",
	"234*3",
	"3x+123=3x+2 calculator",
	"math help page",
	"khan academy",
	"sqrt(123)",
	"sqrt(sqrt(123)^2)",
	"qwertyuiopasdfghjklzxcvbnm",
	"mathissoboring",
	"thisisaplace",
	"iwonderwhythesearehere",
	"what",
	"imsoconfused",
	"thisissostupid",
	"allofthethingshere",
	"wesgtrtdhtg",
	"nhjgkfghjnk",
	"234657",
	"43rfd",
	"qwedrftgyhuiopasdfghjklzxcvbnm",
	"clocktab.com",
	"rnadomthinsfoirngrsogn",
	"hytghygrbhyt",
	"rtg.rgt",
	"a",
	"b",
	"c",
	"d",
	"e",
	"desmos calculator",
	"graphing calcualtor",
	"Google docs",
	"funnithingdsfefewfwefef",
	"eroigerwugiersgiurehegiuerhureigheruigrehgiuerhguierhgeruigrehiugdjvgfuibjsv",
	"funnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithingfunnithing",
	"What is slope intercept?",
	"soconfusing",
	"American history summarised",
	"Westward expansion",
	"imagine if there are warcrimes here lol",
	"I hope not",
	"Trail of tears",
	"JESUS CHRIST",
	"Wall-E",
	"Google slides",
	"Google ch",
	"What is the time",
	"Google forms",
	"Google classes",
	"Google docs",
	"sdf",
	"sdsdfdf",
	"sdfdfsdfdsfdsfdff",
	"irgitjbdkslf;kn hj",
	"y6gutjrijmrjhturkmf",
	"Google translate",
	"Goole translate english to spanish",
	"ugh pos computer"
]
const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
console.log(alphabet[Math.floor(random(1, 25))])
function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}
let gsearch_str = "https://www.google.com/search?q="
function lagproof_crash() {
for (i = 0; i < list_of.length; i++) {
	let x = open(gsearch_str+list_of[i])
	pausecomp(300) // we dont like crashing	
	console.log(list_of[i])
}
}
function crash() {
	let Lag_f = prompt("Lag factor?")
	let Lag_f_N = Number(Lag_f)

	if (isNaN(Lag_f_N)) {
		alert("Please enter a number");
		return;
	}
	for (i = 0; i < list_of.length*25*Lag_f_N; i++) {
	let rand_al = Math.floor(random(1, 25))
	let x = open(gsearch_str+list_of[i]+alphabet[rand_al])
	console.log(list_of[i])
}
}