import { Component, OnInit, ViewChild } from '@angular/core';
import { Service } from './.service';





@Component({
  selector: 'app-',
  templateUrl: './.component.html',
  styleUrls: ['./.component.scss'],
})

export class Component implements OnInit {
    public test:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        user_name: '',
        first_name: '',
    }




    constructor (
        private Service: Service,
    ) { }

    ngOnInit() {
        this.test.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }


}