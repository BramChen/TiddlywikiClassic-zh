/***
|''Name:''|UploadPlugin.zh-Hant|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Require:''|[[UploadPlugin|http://tiddlywiki.bidix.info/#UploadPlugin]]|
***/
//{{{
if (typeof config.macros.upload != "undefined"){
	merge(config.macros.upload.messages, {
		noStoreUrl: "未指定 store URL 參數或設定選項",
		usernameOrPasswordMissing: "帳號或密碼不正確"
	});

	merge(config.macros.upload.label, {
		promptOption: " 依據 UploadOptions 的設定，儲存並上傳此 TiddlyWiki",
		promptParamMacro: "儲存並上傳此 TiddlyWiki 文件於 %0",
		saveLabel: "遠端存檔", 
		saveToDisk: "本機存檔",
		uploadLabel: "上傳"	
	});

	merge(config.macros.uploadOptions, {
		wizardTitle: "設定上傳之選項",
		step1Title: "這些設定將儲存於瀏覽器的 cookies",
		step1Html: "<input type='hidden' name='markList'></input><br>",
		cancelButton: "取消",
		cancelButtonPrompt: "取消設定",
		listViewTemplate: {
			columns: [
				{name: 'Description', field: 'description', title: "說明", type: 'WikiText'},
				{name: 'Option', field: 'option', title: "選項", type: 'String'},
				{name: 'Name', field: 'name', title: "名稱", type: 'String'}
				],
			rowClasses: [
				{className: 'lowlight', field: 'lowlight'} 
				]}
		});

	bidix.upload.messages = {
		//from saving
		invalidFileError: "原始文件 '%0' 非 TiddlyWiki 文件",
		backupSaved: "備份檔已上傳至主機",
		backupFailed: "備份檔上傳至主機失敗",
		rssSaved: "已上傳Rss 檔案",
		rssFailed: "Rss 檔案上傳失敗",
		emptySaved: "已上傳空白範本",
		emptyFailed: "上傳空白範本失敗",
		mainSaved: "已上傳 TiddlyWiki",
		mainFailed: "上傳 TiddlyWiki 失敗，所作變更未完成儲存",
		//specific upload
		loadOriginalHttpPostError: "無法載入原始檔案",
		aboutToSaveOnHttpPost: '正在上傳 TiddlyWiki 至 %0 ...',
		storePhpNotFound: "無伺服端 store script '%0'。"
	};

	merge(config.optionsDesc,{
		txtUploadStoreUrl: "上傳伺服程式之 Url (預設：store.php)",
		txtUploadFilename: "上傳檔案 (預設：index.html)",
		txtUploadDir: "儲存檔案之相對路徑 (預設：. (downloadService directory))",
		txtUploadBackupDir: "儲存備份檔案之相對路徑，若為空白則不作備份. (預設：''(空白))",
		txtUploadUserName: "帳號",
		pasUploadPassword: "密碼",
		chkUploadLog: "是否紀錄於 UploadLog (預設：true)",
		txtUploadLogMaxLine: "UploadLog 紀錄上限(預設：10)"
	});
	
	merge(config.tasks,{
		uploadOptions: {text: "上傳", tooltip: "修改上傳設定", content: '<<uploadOptions>>'}
	});

	config.macros.saveChanges.label = (document.location.toString().substr(0,4) == "http")?"遠端存檔":"本機存檔";
	config.macros.option.passwordCheckboxLabel = "存放此密碼於本機";

}
//}}}