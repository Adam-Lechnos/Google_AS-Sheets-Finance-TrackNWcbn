function errorCheck() {

   var sheetReturnData = SpreadsheetApp.getActive().getSheetByName('Return Data')


   var sheetReturnDataError = sheetReturnData.getRange('B1').getValue()

   if (sheetReturnDataError == true){
    var emailAddress = 'adam.lechnos@gmail.com'
    var subject = 'Spreadsheet error - Combined Networth Tracking'
    var message = "Check the 'Return Data' tab within the Combined Networth Tracking sheet - https://docs.google.com/spreadsheets/d/1_0DuY_JUxn-9AE0U6aUwyqLULfLUusUoq45oaz2oA6I/edit#gid=529980336"
    MailApp.sendEmail(emailAddress, subject, message);
   }
  
}