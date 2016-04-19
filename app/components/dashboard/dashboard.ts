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
    this.splineOptions = {
            series: {
                lines: { show: true },
                points: {
                    radius: 3,
                    show: true
                }
            }
    };
    this.dataset = [{label: 'line1',color:'blue',data:null}];
    this.emitter = EmitterService.get('channel_1');
  }//end of constructor
  getEntries() {
    this._flotService.getFlotEntries().subscribe(entries => {
                         this.dataset[0].data = entries;
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
