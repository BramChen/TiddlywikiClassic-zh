/***
!ReminderPlugin.zh-Hant
***/
//{{{
if (typeof config.macros.reminders != "undefined"){
	merge(config.macros.reminders, {
		defaultLeadTime: [0,365],
		defaultReminderMessage: "DIFF，事由：「TITLE」於 DATE ANNIVERSARY",
		defaultShowReminderMessage: "DIFF，事由：「TITLE」 於 DATE ANNIVERSARY -- TIDDLER",
		defaultAnniversaryMessage: "(DIFF)",
		untitledReminder: "無標題的事件",
		noReminderFound: "在往後的 LEADTIMEUPPER 天，無「TITLE」事件",
		todayString: "今天",
		tomorrowString: "明天",
		ndaysString: "DIFF天",
		emtpyShowRemindersString: "未發現任何需要提醒到期日的事項",
		dateFormat: "YYYY年0MM月0DD日 星期DDD"
	});

	config.macros.newReminder.handler = function newReminder(place,macroName,params){
		var today=new Date().getMidnight();
		var formstring = '<html><form>年：<select name="year"><option value="">每年</option>';
		for (var i = 0; i < 5; i++)
		{
			formstring += '<option' + ((i == 0) ? ' selected' : '') + ' value="' + (today.getFullYear() +i) + '">' + (today.getFullYear() + i) + '</option>';
		}
		formstring += '</select>&nbsp;&nbsp;月：<select name="month"><option value="">每月</option>';
		for (i = 0; i < 12; i++){
			formstring += '<option' + ((i == today.getMonth()) ? ' selected' : '') + ' value="' + (i+1) + '">' + config.messages.dates.months[i] + '</option>';
		}
		formstring += '</select>&nbsp;&nbsp;日：<select name="day"><option value="">每日</option>';
		for (i = 1; i < 32; i++)
		{
			formstring += '<option' + ((i == (today.getDate() )) ? ' selected' : '') + ' value="' + i + '">' + i + '</option>';
		}
	
		formstring += '</select>&nbsp;&nbsp;事件標題：<input type="text" size="40" name="title" value="請輸入事件標題" onfocus="this.select();"><input type="button" value="確定" onclick="addReminderToTiddler(this.form)"></form></html>';
	
		var panel = config.macros.slider.createSlider(place,null,"建立事件","新增工作項目的所屬事件");
		wikify(formstring ,panel,null,store.getTiddler(params[1]));
	};
}
//}}}