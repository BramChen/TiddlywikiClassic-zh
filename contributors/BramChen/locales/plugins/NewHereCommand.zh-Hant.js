/***
|''Name:''|NewHerePlugin.zh-Hant|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Require:''|NewHereCommand|
***/
//{{{
if (typeof config.commands.newHere != "undefined"){
	config.commands.newHere.text = "新增文章";
	config.commands.newHere.tooltip = "新增以本文章標題為標籤的文章";
}
if (typeof config.commands.newJournalHere != "undefined"){
	config.commands.newJournalHere.text = "新增日誌";
	config.commands.newJournalHere.dataFormat = "YYYY年0MM月0DD日";
	config.commands.newJournalHere.tooltip= "新增以本文章標題為標籤的日誌";
}
//}}}