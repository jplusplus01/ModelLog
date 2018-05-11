import { Component,Input } from '@angular/core';

@Component({
  selector: 'project-list-item',
  template: `
                
                <div class="ListItem" (click)="TestClick()">
                    {{PojectRecord.Name}}
                </div>
            `,
  styles: [
            ".ListItem{min-height: 52px; width: calc(100% - 8px); background: #ddd; border-bottom: 1px solid black; padding: 4px; display:flex; align-items : center;}",
           
          ]
})
export class ProjectListItem {
    @Input() PojectRecord: any;
    

    public TestClick() {
        alert("hi");
    }
}
