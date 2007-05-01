/***
|''Name:''|NewHerePlugin.zh-Hans|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Require:''|NewHereCommand|
***/
//{{{
if (typeof config.commands.newHere != "undefined"){
	config.commands.newHere.text = "创建文章";
	config.commands.newHere.tooltip = "创建以本文章标题为标签的文章";
}
if (typeof config.commands.newJournalHere != "undefined"){
	config.commands.newJournalHere.text = "创建日志";
	config.commands.newJournalHere.dataFormat = "YYYY年0MM月0DD日";
	config.commands.newJournalHere.tooltip= "创建以本文章标题为标签的日志";
}
//}}}