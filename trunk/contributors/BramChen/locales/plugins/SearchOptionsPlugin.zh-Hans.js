/***
|''Name:''|SearchOptionsPlugin.zh-Hans|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Author:''|BramChen (bram.chen (at) gmail (dot) com)|
|''License:''|[[Creative Commons Attribution-ShareAlike 2.5 License|http://creativecommons.org/licenses/by-sa/2.5/]]|
|''Require:''|[[SearchOptionsPlugin|http://www.tiddlytools.com/#SearchOptionsPlugin]]|
***/
//{{{
config.shadowTiddlers.AdvancedOptions += "\n设定查找选项：\n<<<";
config.shadowTiddlers.AdvancedOptions += "\n<<option chkSearchTitles>> 查找文章标题";
config.shadowTiddlers.AdvancedOptions += "\n<<option chkSearchText>> 查找文章标题";
config.shadowTiddlers.AdvancedOptions += "\n<<option chkSearchTags>> 查找文章标签";
config.shadowTiddlers.AdvancedOptions += "\n<<option chkSearchFields>> 查找文章资料栏";
config.shadowTiddlers.AdvancedOptions += "\n<<option chkSearchShadows>> 查找预设文章";
config.shadowTiddlers.AdvancedOptions += "\n<<option chkSearchTitlesFirst>> 结果显示第一个匹配条件者";
config.shadowTiddlers.AdvancedOptions += "\n<<option chkSearchList>> 结果显示匹配条件的文章列表";
config.shadowTiddlers.AdvancedOptions += "\n<<option chkSearchByDate>> 结果显示依修改日期排序";
config.shadowTiddlers.AdvancedOptions += "\n<<option chkSearchIncremental>> 递增式查找";
config.shadowTiddlers.AdvancedOptions += "\n<<<";
config.macros.search.reportTitle="查找结果";

window.reportSearchResults=function(text,matches){
	var title=config.macros.search.reportTitle
	var q = config.options.chkRegExpSearch ? "/" : "'";
	var body="\n";

	// summary: nn tiddlers found matching '...', options used
	body+="''"+config.macros.search.successMsg.format([matches.length,q+"{{{"+text+"}}}"+q])+"''\n";
	body+="^^//查找范围：// ";
	body+=(config.options.chkSearchTitles?"''标题'' ":"");
	body+=(config.options.chkSearchText?"''内容'' ":"");
	body+=(config.options.chkSearchTags?"''标签'' ":"");
	body+=(config.options.chkSearchFields?"''扩充栏位'' ":"");
	body+=(config.options.chkSearchShadows?"''预设文章'' ":"");
	if (config.options.chkCaseSensitiveSearch||config.options.chkRegExpSearch) {
		body+=" //选项:// ";
		body+=(config.options.chkCaseSensitiveSearch?"''区别大小写'' ":"");
		body+=(config.options.chkRegExpSearch?"''正规表示式'' ":"");
	}
	body+="^^";

	// numbered list of links to matching tiddlers
	body+="\n<<<";
	for(var t=0;t<matches.length;t++) {
		var date=config.options.chkSearchByDate?(matches[t].modified.formatString('YYYY年0MM月0DD 0hh:0mm')+" "):"";
		body+="\n# "+date+"[["+matches[t].title+"]]";
	}
	body+="\n<<<\n";

	// open all matches button
	body+="<html><input type=\"button\" href=\"javascript:;\" ";
	body+="onclick=\"story.displayTiddlers(null,["
	for(var t=0;t<matches.length;t++)
		body+="'"+matches[t].title.replace(/\'/mg,"\\'")+"'"+((t<matches.length-1)?", ":"");
	body+="],1);\" ";
	body+="accesskey=\"O\" ";
	body+="value=\"开启所有匹配条件的文章\"></html> ";

	// discard search results button
	body+="<html><input type=\"button\" href=\"javascript:;\" ";
	body+="onclick=\"story.closeTiddler('"+title+"'); store.deleteTiddler('"+title+"'); store.notify('"+title+"',true);\" ";
	body+="value=\"关闭 "+title+"\"></html>";

	// search again
	body+="\n\n----\n";
	body+="<<search \""+text+"\">>\n";
	body+="<<option chkSearchTitles>>标题 ";
	body+="<<option chkSearchText>>内容 ";
	body+="<<option chkSearchTags>>标签";
	body+="<<option chkSearchFields>>扩充栏位";
	body+="<<option chkSearchShadows>>预设文章";
	body+="<<option chkCaseSensitiveSearch>>区别大小写 ";
	body+="<<option chkRegExpSearch>>正规表示式";
	body+="<<option chkSearchByDate>>依修改日期排序";

	// create/update the tiddler
	var tiddler=store.getTiddler(title); if (!tiddler) tiddler=new Tiddler();
	tiddler.set(title,body,config.options.txtUserName,(new Date()),"excludeLists excludeSearch temporary");
	store.addTiddler(tiddler); story.closeTiddler(title);

	// use alternate "search again" label in <<search>> macro
	var oldprompt=config.macros.search.label;
	config.macros.search.label="重新查找";

	// render/refresh tiddler
	story.displayTiddler(null,title,1);
	store.notify(title,true);

	// restore standard search label
	config.macros.search.label=oldprompt;
}
//}}}