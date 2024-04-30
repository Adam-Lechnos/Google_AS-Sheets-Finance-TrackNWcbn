function freezeNWdata() {

  var sheetNWdata = SpreadsheetApp.getActive().getSheetByName('Current Networth')

  var dateRecord = Utilities.formatDate(new Date(), "GMT-5", "MM/dd/yyyy")
  var month = Number(dateRecord.split("/")[0])

  var netWorth = sheetNWdata.getRange('B1').getValue()
  var netWorthExHV = sheetNWdata.getRange('F1').getValue()
  var percHomVeh = sheetNWdata.getRange('D2').getValue()

  var setCellNetworth = sheetNWdata.getRange(3,7)
  var setCellNetworthExHV = sheetNWdata.getRange(3,8)
  var setCellPerHomVeh = sheetNWdata.getRange(3,9)
  var setCellLastUpdated = sheetNWdata.getRange(3,4)

  if (month === 3 || month === 6 || month === 9 || month === 12){
      setCellNetworth.setValue(netWorth)
      setCellNetworthExHV.setValue(netWorthExHV)
      setCellPerHomVeh.setValue(percHomVeh)
      setCellLastUpdated.setValue(dateRecord)
  }
  
}
