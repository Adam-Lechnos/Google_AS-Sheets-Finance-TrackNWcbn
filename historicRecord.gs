function populateHistoricRecord() {
  
  var sheetHistoricData = SpreadsheetApp.getActive().getSheetByName('Historic Data')
  var sheetSummary = SpreadsheetApp.getActive().getSheetByName('Summary')
  var sheetProjections = SpreadsheetApp.getActive().getSheetByName('Projections')
  var sheetCurrNetworth = SpreadsheetApp.getActive().getSheetByName('Current Networth')
  var sheetRecordWorkSheet = SpreadsheetApp.getActive().getSheetByName('Record - Worksheet')

  var dateRecord = Utilities.formatDate(new Date(), "GMT-5", "MM/dd/yyyy")
  var numNetworth = sheetProjections.getRange('C2').getValue();
  var numNetworhExHV = sheetCurrNetworth.getRange('E2').getValue();
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
  //var recQuarter = sheetSummary.getRange('E6').getValue();

  var year = dateRecord.split("/")[2]
  function genQuar(){

    var month = Number(dateRecord.split("/")[0])
    console.log(month)

    switch(month){
        case 1:
        case 2:
        case 3:
            return "Q1"
        case 4:
        case 5:
        case 6:
            return "Q2"
        case 7:
        case 8:
        case 9:
            return "Q3"
        case 10:
        case 11:
        case 12:
            return "Q4"
        default:
            return "Q?"
    }

}

var recQuarterGen = (`${year} - ${genQuar()}`)

  sheetHistoricData.appendRow([dateRecord,numNetworth,numNetworhExHV,numFIRE,numFIREIncome,numCurrComExp,numCurrComSurv,numAvgReturns,numYearsFIRE,numAnnSavRate,numSavRateMean,numSavRateGross,numSavRateNet,numSWR,numHVPerc,numQtrPerChg,recQuarterGen]);

  var range = sheetHistoricData;
  range.sort(1, false);

}
