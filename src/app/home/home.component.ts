import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tabs = [
    {
      tabName: 'Content 1',
      id: 1,
      listCount: 20,
      showFilter: false,
      title: 'Using reusable component with dynamic number, 20 user records without search',
    },
    {
      tabName: 'Content 2',
      id: 2,
      listCount: 50,
      showFilter: true,
      title: 'Using reusable component with dynamic number, 50 user records with search',
    }
  ]
  currentTabIndex = 0;
  currentTab = { tabName: "None" };

  constructor() {
    // this.currentTab = { tabName: "Content 2" };
    this.currentTabIndex = 0;
    this.currentTab = this.tabs[0];
  }
  
  selectionChange(event:any) {
    console.log(event.index);
    this.currentTabIndex = event.index;
    this.currentTab = this.tabs[event.index];
    console.log("Current tab set", this.currentTab, event.index)
  }

  setCurrentTab(tab: any) {
    console.log("Set current tab to", tab, this.currentTab)
    this.currentTab = tab;
  }

  trackByFunction(index: any, item: any) {
    return item ? item.id : undefined;
  }
}
