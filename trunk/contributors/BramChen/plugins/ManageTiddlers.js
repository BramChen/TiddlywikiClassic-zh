/***
!Metadata:
|''Name:''|ManageTiddlersPlugin|
|''Description:''|List tiddlers with specific tag and let you manage the multiple selected tiddlers.|
|''Version:''|1.0.0|
|''Date:''|Nov 23, 2006|
|''Source:''|http://www.sourceforge.net/projects/ptw/|
|''Author:''|BramChen (bram.chen (at) gmail (dot) com)|
|''License:''|[[Creative Commons Attribution-ShareAlike 2.5 License]]|
|''~CoreVersion:''|2.1.0|
|''Browser:''|Firefox 1.5+; InternetExplorer 6.0|
!Usage:
{{{
<<manageTiddlers
	[tags:TagName]
	[listOnly:yes|no]
	[sortField:TiddlerField]
	[sortReverse: yes|no]
>>
}}}
!Revision History:
|''Version''|''Date''|''Note''|
|1.0.0|Nov 23, 2006|Initial release|
!Code section:
***/
//{{{
version.extensions.manageTiddlers = {major: 1, minor: 0, revision: 0,
 date: new Date("Nov 23, 2006"),
 name: "manageTiddlers",
 type: "Plugin",
 author: "BramChen",
 source: "http://sourceforge.net/project/showfiles.php?group_id=150646"
};
config.options.txtManageTiddlersTag = "";
config.macros.manageTiddlers = {
	confirmDeleteText: "確認是否刪除此文章:\n\n%0",
	listViewTemplate: {
		columns: [
			{name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector'},
			{name: 'Title', field: 'title', tiddlerLink: 'title', title: "標題", type: 'TiddlerLink'},
			{name: 'Author', field: 'modifier', title: '作者', type: 'String'},
//			{name: 'Created', field: 'created', title: '建立日期', type: 'Date', dateFormat: 'YYYY年0MM月0DD日,0hh:0mm'},
			{name: 'Snippet', field: 'text', title: '文章摘要', type: 'Snippet'},
			{name: 'Modified', field: 'modified', title: '修改日期', type: 'Date', dateFormat: 'YYYY年0MM月0DD日,0hh:0mm'},
			{name: 'Tags', field: 'tags', title: "標籤", type: 'Tags'}
			],
		rowClasses: [
			],
		actions: [
			{caption: "執行選項....", name: ''},
			{caption: "檢視文章", name: 'view'},
			{caption: "編輯文章", name: 'edit'},
			{caption: "刪除文章", name: 'delete'},
			{caption: "QuickEdit", name: 'QuickEdit'}
			]}
}
	
config.macros.manageTiddlers.handler = function(place,macroName,params,wikifier,paramString,tiddler){
	var e = createTiddlyElement(place,"div");
	e.setAttribute("refresh","macro");
	e.setAttribute("macroName","manageTiddlers");
	e.setAttribute("params",paramString);
	this.refresh(e,paramString);
}

config.macros.manageTiddlers.refresh = function(place,params){
	removeChildren(place);
	params = params.parseParams("anon",null,true,false,true);
	var tagged = (typeof params[0] == "undefined")?" ":params[0]["tags"];
	var sortField = params[0]["sortField"];
	var sortReverse = params[0]["sortReverse"];
	var tiddlers = (tagged == " ")?store.getNoTaggedTiddlers():store.getTaggedTiddlers(tagged,sortField);
	if (sortReverse == "yes") {
			tiddlers.sort(function(a,b) {return a[sortField] > b[sortField] ? -1 : (a[sortField] == b[sortField] ? 0 : +1);});
	}
	ListView.create(place,tiddlers,config.macros.manageTiddlers.listViewTemplate,config.macros.manageTiddlers.onSelectCommand);
	if ((params[0]["listOnly"]=="yes"))
		place.getElementsByTagName("select")[0].style.display='none';
}

config.macros.manageTiddlers.onSelectCommand = function(listView,command,rowNames){
	var lists = findRelated(listView,"manageTiddlers","className","parentNode");
	switch(command)
		{
		case "view":
			story.displayTiddlers(null,rowNames);
			break;
		case "edit":
			story.displayTiddlers(null,rowNames,DEFAULT_EDIT_TEMPLATE);
			break;
		case "delete":
			if(rowNames.length > 0 && confirm(config.macros.manageTiddlers.confirmDeleteText.format([rowNames.join(", ")])))
				{
				for(t=0; t<rowNames.length; t++)
					{
					store.removeTiddler(rowNames[t]);
					story.closeTiddler(rowNames[t],true,false);
					}
				}
			break;
		case "quickEdit":
			//Waiting ...
			break;
		}
}

// Add columnTypes, "Snipper", of ListView 
ListView.columnTypes.Snippet = {
	createHeader: function(place,columnTemplate,col)
		{
			createTiddlyText(place,columnTemplate.title);
		},
	createItem: function(place,listObject,field,columnTemplate,col,row)
		{
			var v = listObject[field];
			if(v != undefined)
				createTiddlyText(place,v.substr(0,40));
		}
};
// Add a method getNoTaggedTiddlers to "TiddlyWiki"
TiddlyWiki.prototype.getNoTaggedTiddlers = function()
{
	var results = [];
	this.forEachTiddler(function (title,tiddler) {
		if(tiddler.tags.length==0)
			results.push(tiddler);
		});
	results.sort();
	return results;
}
//}}}