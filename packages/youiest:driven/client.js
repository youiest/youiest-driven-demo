Language.defaultLanguage = navigator.language;
var startupLang = navigator.language.split("-")[0];
Session.set("language",startupLang);
Tracker.autorun(function(){
	Meteor.subscribe("language",Session.get("language")); 
});

Language.localStorage = function(){
	try{
		console.log(JSON.parse(localStorage.setItem("language")))
		return JSON.parse(localStorage.setItem("language"))
	}
	catch(err){
		return false;
	}
}

UI.registerHelper("lang", function () {
	// Language.lang = Language.findOne({"_id":Session.get("language")});
	// localStorage.setItem("language", JSON.stringify(Language.lang));
	return Language.findOne({"_id":Session.get("language")});
});

