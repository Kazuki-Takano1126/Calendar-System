const recordReminder = (userId, remind_kind, count) => {
  const sheetName = "ユーザ管理";
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let userSheet = spreadsheet.getSheetByName(sheetName);
  const lastRow = userSheet.getLastRow(); //データのある最終行を取得
  const values = userSheet.getRange(1, 1, lastRow, 1).getValues(); //(開始行, 開始列, 行数, 列数)

  for(let i=0;i < values.length;i++){
    if(userId === values[i][0]){
        if(remind_kind === 1) { //今日のリマインダー
          userSheet.getRange(i + 1, 4).setValue(count);
        } else if(remind_kind === 2) { //今週のリマインダー
          userSheet.getRange(i + 1, 5).setValue(count);
        }
      break;
    }
  }
}