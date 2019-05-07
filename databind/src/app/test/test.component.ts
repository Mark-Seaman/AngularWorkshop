import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

    name = "Basic Test";
    
    report = "Test has not run yet.";
    
    date = "";
    
    getReport () {
        return this.report;
    }
    
    onRunTest() {
        setTimeout(() => {
            this.date = new Date().toString();
            this.report = "Test is Successful";
        }, 4000);
        this.report = "Running ...";
        this.date = "";
    }
    
    onName(event) {
        this.name = event.target.value;
    }
    /*
    
    */
    
    constructor() { 
    }

    ngOnInit() {
    }

}
