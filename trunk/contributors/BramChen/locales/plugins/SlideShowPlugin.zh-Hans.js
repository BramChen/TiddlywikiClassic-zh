/***
|''Name:''|SlideShowPlugin.zh-Hant|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Require:''|[[SlideShowPlugin]]|
***/
//{{{
if (config.macros.slideShow != undefined){
	config.macros.slideShow.label = "简报";
	config.macros.slideShow.messages.gotoLabel = "跳至：";
	config.views.wikified.slideShow.text = "简报模式";
	config.views.wikified.slideShow.tooltip = "开始/ 结束 简报模式";
	config.views.wikified.slideShow.quit.text = "结束";
	config.views.wikified.slideShow.quit.tooltip = "结束简报模式";
	config.views.wikified.slideShow.firstSlide.text = "<<";
	config.views.wikified.slideShow.firstSlide.tooltip = "第一张";
	config.views.wikified.slideShow.previousSlide.text = "<",
	config.views.wikified.slideShow.previousSlide.tooltip = "上一张";
	config.views.wikified.slideShow.nextSlide.text = ">";
	config.views.wikified.slideShow.nextSlide.tooltip = "下一张";
	config.views.wikified.slideShow.lastSlide.text = ">>";
	config.views.wikified.slideShow.lastSlide.tooltip = "最后一张";
}

//}}}