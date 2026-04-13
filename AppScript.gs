function onEditInstallable(e) {
  if (!e || !e.source) return;

  var sheet = e.source.getActiveSheet();
  var range = e.range;

  if (range.getColumn() !== 3) return;
  if (range.getValue() !== "Done") return;
  if (range.getRow() === 1) return;

  var row = range.getRow();
  var name = sheet.getRange(row, 1).getValue();
  var email = sheet.getRange(row, 2).getValue();

  Logger.log("Row: " + row);
  Logger.log("Name: " + name);
  Logger.log("Email: " + email);

  if (!email) return;

  var subject = " Task Marked as Done!";
  var body = "Hi " + name + ",\n\n"
           + "Your task has been marked as Done.\n\n"
           + "Thank you!\n"
           + "The Team";

  try {
    MailApp.sendEmail(email, subject, body);
    Logger.log("SUCCESS: Email sent to " + email);
  } catch (error) {
    Logger.log("ERROR: " + error.message);
  }
}

function createTrigger() {
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    ScriptApp.deleteTrigger(triggers[i]);
  }

  ScriptApp.newTrigger("onEditInstallable")
    .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
    .onEdit()
    .create();

  Logger.log("Trigger created successfully!");
}