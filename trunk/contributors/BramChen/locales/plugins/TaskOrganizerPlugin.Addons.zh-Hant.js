/***
|''Name:''|TaskOrganizerPlugin.Addons.zh-Hant|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Require:''|[[TaskOrganizerPlugin.Addons|http://sourceforge.net/project/showfiles.php?group_id=150646]]|
***/
//{{{
if (typeof config.macros.taskOrganizer.options.nC != "undefined"){
	merge(config.macros.taskOrganizer.options.nC, {
		categoryTag: "类别",
		taskTag: "专案",
		newCategoryPrompt: "请输入类别名称：",
		newTaskTagPrompt: "请输入专案分类标签：",
		newCategoryTagPrompt: "请输入类别分类标签："
	});
}
//}}}
//{{{
if (typeof config.macros.taskOrganizer.options.nC != "undefined"){
	merge(config.macros.taskOrganizer.options.nC, {
		categoryTag: "類別",
		taskTag: "專案",
		newCategoryPrompt: "請輸入類別名稱：",
		newTaskTagPrompt: "請輸入專案分類標籤：",
		newCategoryTagPrompt: "請輸入類別分類標籤："
	});
}
//}}}