import { Component } from '@angular/core'

@Component({
  selector: 'header',
  template:
  `
    <div class="col-6 pull-left app-header">
      <div>
        <span class="fa fa-2x fa-pencil-square-o" style="vertical-align: middle;"></span>
        <span style="font-weight: 700">Self-Reported Study</span>
      </div>
    </div>
    <div class="col-6 pull-right app-menu">
      <i class="fa fa-2x fa-bars" aria-hidden="true"></i>
    </div>
    <div class="clearfix"></div>
  `
})
export class HeaderComponent { }
