/***
|''Name:''|SearchOptionsPlugin.zh-Hant|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Author:''|BramChen (bram.chen (at) gmail (dot) com)|
|''License:''|[[Creative Commons Attribution-ShareAlike 2.5 License|http://creativecommons.org/licenses/by-sa/2.5/]]|
|''Require:''|[[SearchOptionsPlugin|http://www.tiddlytools.com/#SearchOptionsPlugin]]|
***/
//{{{
config.shadowTiddlers.AdvancedOptions += "\n設定搜尋選項：\n<<<";
config.shadowTiddlers.AdvancedOptions += "\n<<option chkSearchTitles>> 搜尋文章標題";
config.shadowTiddlers.AdvancedOptions += "\n<<option chkSearchText>> 搜尋文章標題";
config.shadowTiddlers.AdvancedOptions += "\n<<option chkSearchTags>> 搜尋文章標籤";
config.shadowTiddlers.AdvancedOptions += "\n<<option chkSearchFields>> 搜尋文章資料欄";
config.shadowTiddlers.AdvancedOptions += "\n<<option chkSearchShadows>> 搜尋預設文章";
config.shadowTiddlers.AdvancedOptions += "\n<<option chkSearchTitlesFirst>> 結果顯示第一個符合條件者";
config.shadowTiddlers.AdvancedOptions += "\n<<option chkSearchList>> 結果顯示符合條件的文章列表";
config.shadowTiddlers.AdvancedOptions += "\n<<option chkSearchByDate>> 結果顯示依修改日期排序";
config.shadowTiddlers.AdvancedOptions += "\n<<option chkSearchIncremental>> 遞增式搜尋";
config.shadowTiddlers.AdvancedOptions += "\n<<<";
config.macros.search.reportTitle="搜尋結果";

window.reportSearchResults=function(text,matches){
	var title=config.macros.search.reportTitle
	var q = config.options.chkRegExpSearch ? "/" : "'";
	var body="\n";

	// summary: nn tiddlers found matching '...', options used
	body+="''"+config.macros.search.successMsg.format([matches.length,q+"{{{"+text+"}}}"+q])+"''\n";
	body+="^^//搜尋範圍：// ";
	body+=(config.options.chkSearchTitles?"''標題'' ":"");
	body+=(config.options.chkSearchText?"''內容'' ":"");
	body+=(config.options.chkSearchTags?"''標籤'' ":"");
	body+=(config.options.chkSearchFields?"''擴充欄位'' ":"");
	body+=(config.options.chkSearchShadows?"''預設文章'' ":"");
	if (config.options.chkCaseSensitiveSearch||config.options.chkRegExpSearch) {
		body+=" //選項:// ";
		body+=(config.options.chkCaseSensitiveSearch?"''區別大小寫'' ":"");
		body+=(config.options.chkRegExpSearch?"''正規表示式'' ":"");
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
	body+="value=\"開啟所有符合條件的文章\"></html> ";

	// discard search results button
	body+="<html><input type=\"button\" href=\"javascript:;\" ";
	body+="onclick=\"story.closeTiddler('"+title+"'); store.deleteTiddler('"+title+"'); store.notify('"+title+"',true);\" ";
	body+="value=\"關閉 "+title+"\"></html>";

	// search again
	body+="\n\n----\n";
	body+="<<search \""+text+"\">>\n";
	body+="<<option chkSearchTitles>>標題 ";
	body+="<<option chkSearchText>>內容 ";
	body+="<<option chkSearchTags>>標籤";
	body+="<<option chkSearchFields>>擴充欄位";
	body+="<<option chkSearchShadows>>預設文章";
	body+="<<option chkCaseSensitiveSearch>>區別大小寫 ";
	body+="<<option chkRegExpSearch>>正規表示式";
	body+="<<option chkSearchByDate>>依修改日期排序";

	// create/update the tiddler
	var tiddler=store.getTiddler(title); if (!tiddler) tiddler=new Tiddler();
	tiddler.set(title,body,config.options.txtUserName,(new Date()),"excludeLists excludeSearch temporary");
	store.addTiddler(tiddler); story.closeTiddler(title);

	// use alternate "search again" label in <<search>> macro
	var oldprompt=config.macros.search.label;
	config.macros.search.label="重新查詢";

	// render/refresh tiddler
	story.displayTiddler(null,title,1);
	store.notify(title,true);

	// restore standard search label
	config.macros.search.label=oldprompt;
}
//}}}