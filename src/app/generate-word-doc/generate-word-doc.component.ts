import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReleaseService } from '../shared/services/release.service';
import { Release } from '../shared/models/release';

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

  releaseKey: string;
  release: Release;

  constructor(private route: ActivatedRoute, private router: Router, private releaseService: ReleaseService) {
    this.router = router;
    this.route.params.subscribe( params => this.releaseKey = params['id']);
    this.releaseService = releaseService;
  }

  ngOnInit() {
    this.release = new Release();
    this.releaseService.getRelease(this.releaseKey).subscribe(release => {
      this.release = <Release>release;
    });

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

  backClick = function() {
    this.router.navigate(['start/']);
  };
}
