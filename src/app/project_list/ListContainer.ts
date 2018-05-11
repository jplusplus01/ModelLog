import { Component,Input } from '@angular/core';

@Component({
  selector: 'project-list',
  template: `
                
                <section class="ListSection">
                    <div class="ProjectListHeader">
                        Model Log
                        <input type="text" placeholder="Filter..." />            
                    </div>
                    <project-list-item *ngFor="let rec of PojectRecords" [PojectRecord]="rec"  ></project-list-item>
                </section>
            `,
  styles: [".ListSection{height: 100%; width: 200px; background: #ddd; border-right: 1px solid black; }",
           ".ProjectListHeader{padding: 4px; width: calc(100% - 8px);  text-align:center; border-bottom: 1px solid black;}",
           "input{width: 90%; margin:auto; border-radius: 5px; }"]
})


export class ProjectListContainer {
    @Input() PojectRecords: any[];
    

    
}
