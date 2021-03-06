import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {NowCmp} from '../common/now/now';
import {FlotCmp} from '../common/flot/flot';
import {CollapseCmp} from '../common/my-collapse/my-collapse';
import {FlotService} from '../shared/services/flotService';
import {EmitterService} from '../shared/services/emitterService';
import {HTTP_PROVIDERS} from 'angular2/http';
@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard/dashboard.html',
  styleUrls: ['app/dashboard/dashboard.css'],
  directives: [CORE_DIRECTIVES, NowCmp, FlotCmp, CollapseCmp],
  providers: [FlotService, HTTP_PROVIDERS]
})
export class DashboardCmp implements OnInit {
  private splineOptions:any;
  private dataset:any;
  private errorMessage:string;
  private emitter:any;
  constructor(private _flotService: FlotService) {
    this.splineOptions = {
              series: {
                  lines: {
                      show: false
                  },
                  points: {
                      show: true,
                      radius: 4
                  },
                  splines: {
                      show: true,
                      tension: 0.4,
                      lineWidth: 1,
                      fill: 0.5
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  max: 150, // optional: use it for a clear represetation
                  tickColor: '#eee',
                  position: 'left',
                  tickFormatter: function (v) {
                      return v/* + ' visitors'*/;
                  }
              },
              shadowSize: 0
          };
    this.dataset = [];
    this.emitter = EmitterService.get('channel_1');
  }//end of constructor
  getEntries() {
    this._flotService.getFlotEntries().subscribe(entries => {
                         this.dataset = entries;
                         document.querySelector('flot').className = document.querySelector('flot').className.replace('whirl' + ' ' + 'traditional', ''); 
                         this.emitter.emit('Broadcast');
                       },
                       error => { this.errorMessage = <any>error;});
  }
  chartRefresh() {
    document.querySelector('flot').className = document.querySelector('flot').className +'whirl' + ' ' + 'traditional';
    this.getEntries();
  }
  ngOnInit() {
    this.getEntries();
  }
}
