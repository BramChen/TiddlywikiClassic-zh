/***
|''Name:''|NewHerePlugin.zh-Hant|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Require:''|[[NewHerePlugin|http://mptw.tiddlyspot.com/#NewHerePlugin]]|
***/
//{{{
merge(config.commands,{
	newHere: {
		text: "新增文章",
		tooltip: "新增以本文章標題為標籤的文章"},
	newJournalHere: {
		text: "新增日誌",
		dataFormat: "YYYY年0MM月0DD日",
		tooltip: "新增以本文章標題為標籤的日誌"}
});
//}}}