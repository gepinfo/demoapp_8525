import { Component, OnInit } from '@angular/core';
import { UpdateService } from './update.service';
// @ts-ignore
import grapesjs from 'grapesjs';
// @ts-ignore
import faker from 'faker';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})

export class UpdateComponent implements OnInit {
        columnDefs: any = [];
        public User = {
            created_date: '',
            created_by: '',
            last_modified_by: '',
            last_modified_date: '',
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            signintype: '',
            fbId: '',
            githubId: '',
            phonenumber: '',
            avatar: '',
            Idtoken: '',
            loggedinDate: '',
            loggedoutDate: '',
            role: '',
            org: '',
            org_country: '',
            org_sub1: '',
            org_sub2: '',
            org_sub3: '',
        }
        gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];
 	rowIndex: Number = 0;

        public url: any = '';
        public firstName = '';
        public lastName = '';
        public Id: any;
        public Image: any;
        public changeName: any;
        public open: any;
        public close: any;

    constructor (
            private updateService: UpdateService,
    ) { }

    ngOnInit() {
            this.User.created_by = sessionStorage.getItem('email') || ''; 
            this.User.email = sessionStorage.getItem('email') || '';
            this.Id = sessionStorage.getItem('Id');
            this.Image = sessionStorage.getItem('Image');

            this.GpSEFAllValues();
    }
    public GpSEFAllValues(){
    }
        onGridReady(params) {
            this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
        }
}