//{{{
config.macros.taskOrganizer.options.nC = {
		categoryTag: "Category",
		taskTag: "Task",
		newCategoryPrompt: "Enter the new category name:",
		newCategoryTagPrompt: "Enter the new tag of category name:"
};
config.macros.taskOrganizer.newCategory = function(taskTag) {
	taskTag = (TaskTag)?taskTag:"Task";
	var nC = config.macros.taskOrganizer.options.nC;
	var newCategory = prompt(nC.newCategoryPrompt,"");
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