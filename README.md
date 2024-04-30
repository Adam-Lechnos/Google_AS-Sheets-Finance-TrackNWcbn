# Google_AS-Sheets-Finance-TrackNWcbn
Google Sheets automation for tracking net worth - combined version when tracking multiple people

## Google Apps Script Configuration

### Triggers

| Function | Event Source | Time Based Trigger ( - nn)* | Time of Day | Failure Notifications |
| -------- | ------------ | ------------------ | ----------- | --------------------- |
| freezeNWdata | Time-driven | Month Timer - 28th | 7pm to 8pm | Weekly |
| errorCheck | Time-driven | Day timer | 7pm to 8pm | Weekly |
| populateHistoricRecord | Time-driven | Month timer - 15th | 11pm to midnight | weekly |
| populateHistoricRecord | Time-driven | Month timer - 1st | 11pm to midnight | weekly |

*\*Day of the month if `Month timer` is selected*

<sup><sub>Spreadsheet Name: `COMBINED Net Worth Tracking & Forecast Worksheet - Quarterly Log`</sup></sub>
