/***
|''Name:''|UploadPlugin.zh-Hans|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Requires:''|[[UploadPlugin|http://tiddlywiki.bidix.info/#UploadPlugin]]|
***/
//{{{
if (typeof config.macros.upload != "undefined"){
	merge(config.macros.upload.messages, {
		noStoreUrl: "未指定 store URL 参数或设置选项",
		usernameOrPasswordMissing: "帐号或密码不正确"
	});

	merge(config.macros.upload.label, {
		promptOption: " 依据 UploadOptions 的设定，保存并上传此 TiddlyWiki",
		promptParamMacro: "储存并上传此 TiddlyWiki 文件于 %0",
		saveLabel: "远端保存", 
		saveToDisk: "本机保存",
		uploadLabel: "上传"
	});

	merge(config.macros.uploadOptions, {
		wizardTitle: "设置上传之选项",
		step1Title: "这些设置将保存于浏览器的 cookies",
		step1Html: "<input type='hidden' name='markList'></input><br>",
		cancelButton: "取消",
		cancelButtonPrompt: "取消设置",
		listViewTemplate: {
			columns: [
				{name: 'Description', field: 'description', title: "帮助", type: 'WikiText'},
				{name: 'Option', field: 'option', title: "选项", type: 'String'},
				{name: 'Name', field: 'name', title: "名称", type: 'String'}
				],
			rowClasses: [
				{className: 'lowlight', field: 'lowlight'} 
				]}
		});

	bidix.upload.messages = {
		//from saving
		invalidFileError: "原始文件 '%0' 非 TiddlyWiki 文件",
		backupSaved: "备份文件已上传至主机",
		backupFailed: "备份文件上传至主机失败",
		rssSaved: "已上传Rss 文件",
		rssFailed: "Rss 文件上传失败",
		emptySaved: "已上传空白范本",
		emptyFailed: "上传空白范本失败",
		mainSaved: "已上传 TiddlyWiki",
		mainFailed: "上传 TiddlyWiki 失败，所作变更未完成保存",
		//specific upload
		loadOriginalHttpPostError: "无法载入原始文件",
		aboutToSaveOnHttpPost: '正在上传 TiddlyWiki 至 %0 ...',
		storePhpNotFound: "无服务端 store script '%0'。"
	};

	merge(config.optionsDesc,{
		txtUploadStoreUrl: "上传服务程式之 Url (预设：store.php)",
		txtUploadFilename: "上传文件 (预设：index.html)",
		txtUploadDir: "保存文件之相对路径 (预设：. (downloadService directory))",
		txtUploadBackupDir: "保存备份文件之相对路径，若为空白则不作备份. (预设：''(空白))",
		txtUploadUserName: "帐号",
		pasUploadPassword: "密码",
		chkUploadLog: "是否纪录于 UploadLog (预设：true)",
		txtUploadLogMaxLine: "UploadLog 纪录上限(预设：10)"
	});
	
	merge(config.tasks,{
		uploadOptions: {text: "上传", tooltip: "修改上传设置", content: '<<uploadOptions>>'}
	});

	config.macros.saveChanges.label = (document.location.toString().substr(0,4) == "http")?"远端保存":"本机保存";
	config.macros.option.passwordCheckboxLabel = "存放此密码于本机";

}
//}}}