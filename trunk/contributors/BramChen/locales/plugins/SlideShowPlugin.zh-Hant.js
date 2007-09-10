/***
|''Name:''|SlideShowPlugin.zh-Hant|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Require:''|[[SlideShowPlugin]]|
***/
//{{{
if (config.macros.slideShow != undefined){
	config.macros.slideShow.label = "簡報";
	config.macros.slideShow.messages.gotoLabel = "跳至：";
	config.views.wikified.slideShow.text = "簡報模式";
	config.views.wikified.slideShow.tooltip = "開始/ 結束 簡報模式";
	config.views.wikified.slideShow.quit.text = "結束";
	config.views.wikified.slideShow.quit.tooltip = "結束簡報模式";
	config.views.wikified.slideShow.firstSlide.text = "<<";
	config.views.wikified.slideShow.firstSlide.tooltip = "第一張";
	config.views.wikified.slideShow.previousSlide.text = "<",
	config.views.wikified.slideShow.previousSlide.tooltip = "上一張";
	config.views.wikified.slideShow.nextSlide.text = ">";
	config.views.wikified.slideShow.nextSlide.tooltip = "下一張";
	config.views.wikified.slideShow.lastSlide.text = ">>";
	config.views.wikified.slideShow.lastSlide.tooltip = "最後一張";
}

//}}}