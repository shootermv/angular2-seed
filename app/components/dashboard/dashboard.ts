import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {NowCmp} from '../common/now/now';
import {FlotCmp} from '../common/flot/flot';
import {CollapseCmp} from '../common/my-collapse/my-collapse';
import {FlotService} from '../../services/flotService';
import {EmitterService} from '../../services/emitterService';
import { HTTP_PROVIDERS} from 'angular2/http';
@Component({
  selector: 'dashboard',
  templateUrl: './components/dashboard/dashboard.html',
  styleUrls: ['./components/dashboard/dashboard.css'],
  directives: [CORE_DIRECTIVES, NowCmp, FlotCmp, CollapseCmp],
  providers: [FlotService, HTTP_PROVIDERS]
})
export class DashboardCmp implements OnInit {
  private splineOptions:any;
  private dataset:any;
  private errorMessage:string;
  private emitter:any;
  constructor(private _flotService: FlotService) {
    this.splineOptions ={
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
                  position: 'right',
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
                         this.emitter.emit('Broadcast');
                       },
                       error => { this.errorMessage = <any>error;});
  }
  onChartRefresh() {
    this.getEntries();
  }
  ngOnInit() {
    this.getEntries();
  }
}
