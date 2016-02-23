import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {NowCmp} from '../common/now/now';
import {FlotCmp} from '../common/flot/flot';
import {CollapseCmp} from '../common/my-collapse/my-collapse';
import {FlotService} from '../../services/flotService';

@Component({
  selector: 'dashboard',
  templateUrl: './components/dashboard/dashboard.html',
  styleUrls: ['./components/dashboard/dashboard.css'],
  directives: [CORE_DIRECTIVES, NowCmp, FlotCmp, CollapseCmp],
  providers: [FlotService]
})
export class DashboardCmp implements OnInit {
  private splineOptions:any;
  private dataset:any; 
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
    this.dataset = [{label: 'line1',color:'blue',data:this._flotService.getFlotEntries()}];
  }//end of constructor
  ngOnInit() {
   // this._flotService.getFlotEntries().then(entries => this.dataset[0].data = entries);
  } 
}
