 sheet = sheets.getSheetByName("書籍")
  const bookNum = sheet.getLastRow()+1 
   var range=sheet.getRange(`B${bookNum}:E${bookNum}`)
   var values = range.setValues([['書籍名', '分野', '写真','出版日']]);
}
function registrationAPI() {
 const sheets = SpreadsheetApp.getActive()
  const