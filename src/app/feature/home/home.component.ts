import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public sections: any = [
        {
            name: 'Actuel',
            amount: 8903
        },
        {
            name: 'Prévu',
            amount: 5675
        },
        {
            name: 'Montant de départ',
            amount: 10000
        },
        {
            name: 'Dépenses actuel',
            amount: 213
        },
        {
            name: 'Gains actuel',
            amount: 3257
        }
    ];

    public devise: string = '.-';

    constructor() {
    }

    ngOnInit() {
    }

}
