function populateHistoricRecord() {
  
  var sheetHistoricData = SpreadsheetApp.getActive().getSheetByName('Historic Data')
  var sheetSummary = SpreadsheetApp.getActive().getSheetByName('Summary')
  var sheetProjections = SpreadsheetApp.getActive().getSheetByName('Projections')
  var sheetRecordWorkSheet = SpreadsheetApp.getActive().getSheetByName('Record - Worksheet')

  var dateRecord = Utilities.formatDate(new Date(), "GMT-5", "MM/dd/yyyy")
  var numNetworth = sheetProjections.getRange('C2').getValue();
  var numNetworhExHV = sheetRecordWorkSheet.getRange('D8').getValue();
  var numFIRE = sheetProjections.getRange('C8').getValue();
  var numFIREIncome = sheetProjections.getRange('C20').getValue();
  var numCurrComExp = sheetProjections.getRange('C26').getValue();
  var numCurrComSurv = sheetSummary.getRange('E29').getValue();
  var numAvgReturns = sheetProjections.getRange('C5').getValue();
  var numYearsFIRE = sheetProjections.getRange('C17').getValue();
  var numAnnSavRate = sheetProjections.getRange('C4').getValue();
  var numSavRateMean = sheetSummary.getRange('D22').getValue();
  var numSavRateGross = sheetSummary.getRange('D20').getValue();
  var numSavRateNet = sheetSummary.getRange('D21').getValue();
  var numSWR = sheetProjections.getRange('C18').getValue();
  var numHVPerc = sheetProjections.getRange('C22').getValue();
  var numQtrPerChg = sheetSummary.getRange('D8').getValue();
  var recQuarter = sheetSummary.getRange('E6').getValue();
  
  sheetHistoricData.appendRow([dateRecord,numNetworth,numNetworhExHV,numFIRE,numFIREIncome,numCurrComExp,numCurrComSurv,numAvgReturns,numYearsFIRE,numAnnSavRate,numSavRateMean,numSavRateGross,numSavRateNet,numSWR,numHVPerc,numQtrPerChg,recQuarter]);

  var range = sheetHistoricData;
  range.sort(1, false);

}