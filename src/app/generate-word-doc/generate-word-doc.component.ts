import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-word-doc',
  templateUrl: './generate-word-doc.component.html',
  styleUrls: ['./generate-word-doc.component.css']
})
export class GenerateWordDocComponent implements OnInit {
  sqlServers: string[];
  sqlConnections: string[];
  reportConnections: string[];
  report2Connections: string[];
  webServers: string[];
  utilityServers: string[];
  internalToolsServers: string[];
  internalToolsSites: string[];
  internalReportsServers: string[];
  pptToScormServers: string[];
  DE: number;
  UK: number;
  CN: number;
  US: number;
  generateDE: boolean;
  generateUK: boolean;
  generateCN: boolean;
  generateUS: boolean;

  releaseName: string;
  releaseOwner: string;
  releaseOwnerContactInfo: string;
  chmTicket: string;

  legacyReleaseNumber: string;
  angularReleaseNumber: string;
  apiReleaseNumber: string;
  internalToolsReleaseNumber: string;
  enrollmentsServiceReleaseNumber: string;
  reportingServiceReleaseNumber: string;
  learningServiceReleaseNumber: string;

  lmsMigrationScript: string;
  lmsProcChangesScript: string;
  lmsLogMigrationScript: string;
  lmsLogProcChangesScript: string;
  lmsReportSchemaScript: string;
  lmsReportProcChangesScript: string;
  lmsAuditChangesScript: string;
  lmsTriggersChangesScript: string;

  newUtilityName: string;
  newUtilityScheduledTime: string;

  constructor() { }

  ngOnInit() {
    this.generateDE = false;
    this.generateCN = true;
    this.generateUK = true;
    this.generateUS = true;
    this.webServers = ['wapwebde1.reliasgermany.int', 'wapwebuk1.reliaseurope.int',
      'wapwebhk1.reliaschina.int', 'ordrlmsvm23.reliasord.int'];
    this.sqlServers = ['wdbsqlde1.reliasgermany.int', 'wdbsql1.reliaseurope.int', 'wdbsqlhk1.reliaschina.int', 'sql.reliasord.int'];
    this.sqlConnections = ['wdbsqlde_lstnr.reliasgermany.int', 'wdbsql-ag-listener.reliaseurope.int',
      'wdbsqlhk-ag-lsnr.reliaschina.int', 'sql.reliasord.int'];
    this.reportConnections = ['wdbsqlde1.reliasgermany.int', 'wdbsql1.reliaseurope.int',
      'wdbsqlhk1.reliaschina.int', 'sqldw.reliasord.int'];
    this.report2Connections = ['wdbsqlde2.reliasgermany.int', 'wdbsql2.reliaseurope.int', 'wdbsqlhk2.reliaschina.int', ''];
    this.utilityServers = ['waputilityde1.reliasgermany.int', 'waputility1.reliaseurope.int',
      'waputilityhk1.reliaschina.int', 'web3.reliasord.int'];
    this.internalToolsServers = ['waputilityde1', 'waputility1', 'waputilityhk1', '476355-WEB3'];
    this.internalToolsSites = ['internaltools.reliaslearning.de', 'internaltools.relias.co.uk',
      'internaltools', 'internaltools.reliaslearning.com'];
    this.internalReportsServers = ['', 'waputility1.reliaseurope.int', '', 'web3.reliasord.int'];
    this.pptToScormServers = ['', '', '', 'web3.reliasord.int'];
    this.DE = 0;
    this.UK = 1;
    this.CN = 2;
    this.US = 3;

    // Test Values
    this.releaseName = '2018.04.03';
    this.releaseOwner = 'Karch McCoy';
    this.releaseOwnerContactInfo = '(314)620-4774, kmccoy@relias.com';
    this.chmTicket = 'CHM-273';

    this.legacyReleaseNumber = 'release-266';
    this.apiReleaseNumber = 'release-40';
    this.angularReleaseNumber = 'release-29';
    this.internalToolsReleaseNumber = 'release-50';
    this.enrollmentsServiceReleaseNumber = 'release-5';
    this.reportingServiceReleaseNumber = 'release-11';
    this.learningServiceReleaseNumber = 'release-4';

    this.lmsMigrationScript = 'LMS Migrations.sql';
    this.lmsLogMigrationScript = 'LMSLog Migrations.sql';
    this.lmsAuditChangesScript = 'LMSAudit Changes.sql';
    this.lmsTriggersChangesScript = 'LMSTriggers Changes.sql';
    this.lmsProcChangesScript = 'LMS Schema Compare.sql';
    this.lmsLogProcChangesScript = 'LMSLog Schema Compare.sql';
    this.lmsReportSchemaScript = 'LMSReport Schema.sql';
    this.lmsReportProcChangesScript = 'LMSReport Schema Compare.sql';

    this.newUtilityName = 'New Utility Test';
    this.newUtilityScheduledTime = '3:30pm - Tuesdays';
  }

  getServers(servers: string[]): string {
    let ret = '';
    if (this.generateDE) {
      ret += servers[this.DE] + ', ';
    }

    if (this.generateUK) {
      ret += servers[this.UK] + ', ';
    }

    if (this.generateCN) {
      ret += servers[this.CN] + ', ';
    }

    if (this.generateUS) {
      ret += servers[this.US] + ', ';
    }

    return ret.substr(0, ret.length - 2);
  }
}
