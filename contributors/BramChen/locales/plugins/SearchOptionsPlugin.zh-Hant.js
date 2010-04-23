/***
|''Name:''|SearchOptionsPlugin.zh-Hant|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Require:''|[[SearchOptionsPlugin|http://www.tiddlytools.com/#SearchOptionsPlugin]]|
***/
//{{{

config.macros.search.reportTitle="查詢結果";

window.formatSearchResults_again=function(text,matches)
{
	var title=config.macros.search.reportTitle;
	var body='';
	// search again
	body+='{{span{<<search "'+text.replace(/"/g,'&#x22;')+'">> /%\n';
//'
	body+='%/<html><input type="button" value="重新查詢"';
	body+=' onclick="var t=this.parentNode.parentNode.getElementsByTagName(\'input\')[0];';
	body+=' config.macros.search.doSearch(t); return false;">';
	body+=' <a href="javascript:;" onclick="';
	body+=' var e=this.parentNode.nextSibling;';
	body+=' var show=e.style.display!=\'block\';';
	body+=' if(!config.options.chkAnimate) e.style.display=show?\'block\':\'none\';';
	body+=' else anim.startAnimating(new Slider(e,show,false,\'none\'));';
	body+=' return false;"> 選項 ...</a>';
	body+='</html>@@display:none;border-left:1px dotted;margin-left:1em;padding:0;padding-left:.5em;font-size:90%;/%\n';
	body+='	%/<<option chkSearchTitles>>標題 /%\n';
	body+='	%/<<option chkSearchText>>內文 /%\n';
	body+='	%/<<option chkSearchTags>>標籤 /%\n';
	body+='	%/<<option chkSearchFields>>擴充欄位 /%\n';
	body+='	%/<<option chkSearchShadows>>預設文章\n';
	body+='	<<option chkCaseSensitiveSearch>>區分大小寫 /%\n';
	body+='	%/<<option chkRegExpSearch>>正規表示式 /%\n';
	body+='	%/<<option chkSearchByDate>>依修改日期排序（最近更新的優先）\n';
	body+='	<<option chkSearchHighlight>> 在顯示的文章中標示查詢的關鍵字\n';
	body+='	<<option chkSearchList>> 顯示符合查詢之清單\n';
	body+='	<<option chkSearchListTiddler>> 將清單寫至 [[查詢結果]] \n';
	body+=' <<option chkSearchTitlesFirst>>優先顯示標題符合條件者\n';
	body+='	<<option chkIncrementalSearch>> 遞增式查詢，/%\n';
	body+='	%/最少匹配之字元數：<<option txtIncrementalSearchMin>>，延遲秒數：<<option txtIncrementalSearchDelay>>\n';
	body+='	<<option chkSearchOpenTiddlers>> 僅於目前已開啟的文章中查詢\n';
	body+='	<<option chkSearchExcludeTags>>排除查詢的文章標籤為：\n';
	body+='	{{editor{<<option txtSearchExcludeTags>>}}}/%\n';
	body+='%/@@}}}\n\n';
	return body;
}

window.formatSearchResults_summary=function(text,matches)
{
	// summary: nn tiddlers found matching '...', options used
	var body='';
	var co=config.options; // abbrev
	var title=config.macros.search.reportTitle
	var q = co.chkRegExpSearch ? "/" : "'";
	body+="''"+config.macros.search.successMsg.format([matches.length,q+"{{{"+text+"}}}"+q])+"''\n";
	var opts=[];
	if (co.chkSearchTitles) opts.push("titles");
	if (co.chkSearchText) opts.push("text");
	if (co.chkSearchTags) opts.push("tags");
	if (co.chkSearchFields) opts.push("fields");
	if (co.chkSearchShadows) opts.push("shadows");
	if (co.chkSearchOpenTiddlers) body+="^^//search limited to displayed tiddlers only//^^\n";
	body+="~~&nbsp; 查詢範圍： "+opts.join(" + ")+"~~\n";
	body+=(co.chkCaseSensitiveSearch||co.chkRegExpSearch?"^^&nbsp; using ":"")
		+(co.chkCaseSensitiveSearch?"case-sensitive ":"")
		+(co.chkRegExpSearch?"pattern ":"")
		+(co.chkCaseSensitiveSearch||co.chkRegExpSearch?"matching^^\n":"");
	return body;
}

window.formatSearchResults_buttons=function(text,matches)
{
	// embed buttons only if writing SearchResults to tiddler
	if (!config.options.chkSearchListTiddler) return "";
	// "open all" button
	var title=config.macros.search.reportTitle;
	var body="";
	body+="@@diplay:block;<html><input type=\"button\" href=\"javascript:;\" "
		+"onclick=\"story.displayTiddlers(null,[";
	for(var t=0;t<matches.length;t++)
		body+="'"+matches[t].title.replace(/\'/mg,"\\'")+"'"+((t<matches.length-1)?", ":"");
	body+="],1);\" accesskey=\"O\" value=\"開啟所有符合條件的文章\"></html> ";
	// "discard SearchResults" button
	body+="<html><input type=\"button\" href=\"javascript:;\" "
		+"onclick=\"discardSearchResults()\" value=\"關閉 "+title+"\"></html>";
	body+="@@\n";
	return body;
}
//}}}