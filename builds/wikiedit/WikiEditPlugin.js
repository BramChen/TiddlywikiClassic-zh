/***
!Metadata:
|''Name:''|WikiEditPlugin|
|''Description:''| |
|''Version:''|1.0.0|
|''Date:''|Nov 13, 2006|
|''Source:''|http://sourceforge.net/project/showfiles.php?group_id=150646|
|''Author:''|BramChen (bram.chen (at) gmail (dot) com)|
|''License:''|[[Creative Commons Attribution-ShareAlike 2.5 License]]|
|''~CoreVersion:''|2.1.0|
|''Browser:''|Firefox 1.5+; InternetExplorer 6.0|

!Required:
* TiddlyWiki 2.1.0+
* WikiEdit
!Reference:
!Installation: 
	1. Add below statement to MarkupPostHead
{{{<script type="text/javascript" src="../wikiedit/WikiEditPlugin.js"></script>}}}

	2. Add below statements to MarkupPreHead
{{{<!-- wikiedit -->}}}
{{{<link rel="stylesheet" type="text/css" href="./wikiedit/wikiedit.css" />}}}
{{{<script type="text/javascript" src="./wikiedit/protoedit.js"></script>}}}
{{{<script type="text/javascript" src="./wikiedit/twedit.js"></script>}}}

	3. Save changes and reload page.

!Note:
* for IE user, please change to the directory of wikiedit and execute "copy protoedit.js+twedit.js wikiedit.js" in command shell, then install the new wikiedit.js, Add below statements to MarkupPreHead
{{{<!-- wikiedit -->}}}
{{{<link rel="stylesheet" type="text/css" href="wikiedit/wikiedit.css" />}}}
{{{<script type="text/javascript" src="./wikiedit/wikiedit.js"></script>}}}
	
* You can also install all of these external scripts as normal TW plugins.

!Revision history:
* Nov 13 2006
** Initial release
! Codes
***/
//{{{
version.extensions.HTMLAreaPlugin = {major: 1, minor: 0, revision: 0,
	date: new Date("Nov 13, 2006"),
	name: "WikiEditPlugin",
	type: "Plugin",
	author: "BramChen",
	source: "http://sourceforge.net/project/showfiles.php?group_id=150646"
};

if (!config.macros.edit.handler_WE)
	config.macros.edit.handler_WE = config.macros.edit.handler;
config.macros.edit.handler = function(place,macroName,params,wikifier,paramString,tiddler){
	var field = params[0];
	if (field == "text"){
		if((tiddler instanceof Tiddler) && field){
			story.setDirty(tiddler.title,true);
			var wrapper1 = createTiddlyElement(place,"fieldset",null,"fieldsetFix");
			var wrapper2 = createTiddlyElement(wrapper1,"div");
			var e = createTiddlyElement(wrapper2,"textarea");
			if(tiddler.isReadOnly())
					e.setAttribute("readOnly","readOnly");
			var v = store.getValue(tiddler,field);
			e.value = (v)?v:"";
			var rows = 20;
			var lines = v.match(/\n/mg);
			var maxLines = Math.max(parseInt(config.options.txtMaxEditRows),5);
			if(lines != null && lines.length > rows)
				rows = lines.length + 5;
			rows = Math.min(rows,maxLines);
			e.setAttribute("rows",rows);
			e.setAttribute("edit","text");
			e.setAttribute("id","we_"+tiddler.title);
			var wE = new WikiEdit();
			wE.init(e.id,'WikiEdit','edname','./wikiedit/images/');
		}
	}
	else {
		config.macros.edit.handler_WE(place,macroName,params,wikifier,paramString,tiddler);
	}
};
//}}}