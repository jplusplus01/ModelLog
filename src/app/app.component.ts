import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  template: `
             <project-list [PojectRecords]="PojectRecords"> </project-list>
            `,
  styles: []
})
export class AppComponent {
  title = 'app';
  PojectRecords: any[] = [
                          {
                            Name: "Proj 1",
                            Sections: [
                               {
                                 SectionName: "Im a section",
                                 Description:"I'm a description"
                               }
                            ]
                          },
                          {Name: "Proj 2"},
                          {Name: "Proj 3"}
                         ];
}
