/***
|''Name:''|SearchOptionsPlugin.zh-Hans|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Require:''|[[SearchOptionsPlugin|http://www.tiddlytools.com/#SearchOptionsPlugin]]|
***/
//{{{

config.macros.search.reportTitle="查找结果";

window.formatSearchResults_again=function(text,matches)
{
	var title=config.macros.search.reportTitle;
	var body='';
	// search again
	body+='{{span{<<search "'+text.replace(/"/g,'&#x22;')+'">> /%\n';
//'
	body+='%/<html><input type="button" value="重新查找"';
	body+=' onclick="var t=this.parentNode.parentNode.getElementsByTagName(\'input\')[0];';
	body+=' config.macros.search.doSearch(t); return false;">';
	body+=' <a href="javascript:;" onclick="';
	body+=' var e=this.parentNode.nextSibling;';
	body+=' var show=e.style.display!=\'block\';';
	body+=' if(!config.options.chkAnimate) e.style.display=show?\'block\':\'none\';';
	body+=' else anim.startAnimating(new Slider(e,show,false,\'none\'));';
	body+=' return false;"> 选项 ...</a>';
	body+='</html>@@display:none;border-left:1px dotted;margin-left:1em;padding:0;padding-left:.5em;font-size:90%;/%\n';
	body+='	%/<<option chkSearchTitles>>标题 /%\n';
	body+='	%/<<option chkSearchText>>内文 /%\n';
	body+='	%/<<option chkSearchTags>>标签 /%\n';
	body+='	%/<<option chkSearchFields>>扩充栏位 /%\n';
	body+='	%/<<option chkSearchShadows>>默认文章\n';
	body+='	<<option chkCaseSensitiveSearch>>区分大小写 /%\n';
	body+='	%/<<option chkRegExpSearch>>正规表示式 /%\n';
	body+='	%/<<option chkSearchByDate>>依修改日期排序（最近更新的优先）\n';
	body+='	<<option chkSearchHighlight>> 在显示的文章中标示查询的关键字\n';
	body+='	<<option chkSearchList>> 显示符合查询之清单\n';
	body+='	<<option chkSearchListTiddler>> 将清单写至 [[查找结果]] \n';
	body+=' <<option chkSearchTitlesFirst>>优先显示标题符合条件者\n';
	body+='	<<option chkIncrementalSearch>> 递增式查找，/%\n';
	body+='	%/最少匹配之字元数：<<option txtIncrementalSearchMin>>，延迟秒数：<<option txtIncrementalSearchDelay>>\n';
	body+='	<<option chkSearchOpenTiddlers>> 仅于目前已开启的文章中查找\n';
	body+='	<<option chkSearchExcludeTags>>排除查找的文章标签为：\n';
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
	body+="~~&nbsp; 查找范围： "+opts.join(" + ")+"~~\n";
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
	body+="],1);\" accesskey=\"O\" value=\"开启所有符合条件的文章\"></html> ";
	// "discard SearchResults" button
	body+="<html><input type=\"button\" href=\"javascript:;\" "
		+"onclick=\"discardSearchResults()\" value=\"关闭 "+title+"\"></html>";
	body+="@@\n";
	return body;
}
//}}}