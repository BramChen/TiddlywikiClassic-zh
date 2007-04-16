/***
|''Name:''|SimpleToDoList.zh-Hans|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Requires:''|[[SimpleToDoList]]|
***/
//{{{
if (typeof config.macros.stlManager != "undefined"){
	merge(config.macros.stlManager,{
		wizardTitle: "",
		step1Title: "",
		step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
		listViewTemplate: {
			columns: [
				{name: 'Completed', field: 'completed', title: "完成？", tag: 'completed', type: 'TagCheckbox'},
				{name: 'Title', field: 'title', tiddlerLink: 'title', title: "项目", type: 'TiddlerLink'},
				{name: 'Text', field: 'text', title: '说明', type: 'WikiText'}
				],
			rowClasses: [
				]}
	});
}
//}}}