import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-word-doc',
  templateUrl: './generate-word-doc.component.html',
  styleUrls: ['./generate-word-doc.component.css']
})
export class GenerateWordDocComponent implements OnInit {
  sqlServers: ['wdbsqlde1.reliasgermany.int', 'wdbsql1.reliaseurope.int', 'wdbsqlhk1.reliaschina.int', 'sql.reliasord.int'];
  sqlConnections: ['wdbsqlde_lstnr.reliasgermany.int', 'wdbsql-ag-listener.reliaseurope.int',
    'wdbsqlhk-ag-lsnr.reliaschina.int', 'sql.reliasord.int'];
  reportConnections: ['wdbsqlde1.reliasgermany.int', 'wdbsql1.reliaseurope.int', 'wdbsqlhk1.reliaschina.int', 'sqldw.reliasord.int'];
  report2Connections: ['wdbsqlde2.reliasgermany.int', 'wdbsql2.reliaseurope.int', 'wdbsqlhk2.reliaschina.int', ''];
  webServers: ['wapwebde1.reliasgermany.int', 'wapwebuk1.reliaseurope.int', 'wapwebhk1.reliaschina.int', 'ordrlmsvm23.reliasord.int'];
  utilityServers: ['waputilityde1.reliasgermany.int', 'waputility1.reliaseurope.int',
    'waputilityhk1.reliaschina.int', 'web3.reliasord.int'];
  internalToolsServers: ['waputilityde1', 'waputility1', 'waputilityhk1', '476355-WEB3'];
  internalToolsAppPools: ['internaltools.reliaslearning.de', 'internaltools.relias.co.uk',
    'internaltools', 'internaltools.reliaslearning.com'];
  internalReportsServers: ['', 'waputility1.reliaseurope.int', '', 'web3.reliasord.int'];
  pptToScormServers: ['', '', '', 'web3.reliasord.int'];
  DE: 0;
  UK: 1;
  CN: 2;
  US: 3;
  environment: string;
  ChangeEnvironmentMessage: string;
  constructor() { }

  ngOnInit() {
    this.environment = 'Other';
    this.ChangeEnvironmentMessage = 'Change to Germany Document';
  }

  changeEnvironment() {
    if (this.environment === 'DE') {
      this.environment = 'Other';
      this.ChangeEnvironmentMessage = 'Change to Germany Document';
    } else {
      this.environment = 'DE';
      this.ChangeEnvironmentMessage = 'Change to US/CN/UK Document';
    }
  }
}
