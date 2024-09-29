function doGet() {
  return HtmlService.createTemplateFromFile("dt").evaluate();
  //return HtmlService.createHtmlOutputFromFile("datatables").evaluate();
}

function getSpreadsheetData() {
  const ss = SpreadsheetApp.openById("sheetid"); //ss = spreadsheet
  const ws = ss.getSheetByName("database_edited"); //ws = working sheet
  //const firstCell = ws.getRange("A1");
  //const dataRange = firstCell.getDataRegion();
  const dataRange = ws.getRange("A:F")
  const data = dataRange.getDisplayValues();
  const headersArray = data.shift();
  const headersObject = headersArray.map(header => { return { title: header } });
  //console.log(data);
  //console.log(headersObject);
  return { data: data, headers: headersObject };
}