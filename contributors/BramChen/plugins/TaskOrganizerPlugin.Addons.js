//{{{
config.macros.taskOrganizer.options.nC = {
		categoryTag: "Category",
		newCategoryPrompt: "Enter the new category name:",
		newTaskTagPrompt: "Enter the new tag of task:",
		newCategoryTagPrompt: "Enter the new tag of category:"
};
config.macros.taskOrganizer.newCategory = function() {
	var nC = config.macros.taskOrganizer.options.nC;
	var newCategory = prompt(nC.newCategoryPrompt,"");
	var taskTag = prompt(nC.newTaskTagPrompt,nC.taskTag);
	var categoryTag = prompt(nC.newCategoryTagPrompt,nC.categoryTag);
	var tiddler = new Tiddler();
	tiddler.title = newCategory;
	tiddler.tags[0] = categoryTag;
	tiddler.modifier = config.options.txtUserName;
	tiddler.text = "<<taskOrganizer "+ taskTag + ">>"
	if (tiddler.title) {
		store.addTiddler(tiddler);
		story.displayTiddler(null,tiddler.title,DEFAULT_VIEW_TEMPLATE);
	}
};
//}}}