import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-banklist',
  templateUrl: './banklist.component.html',
  styleUrls: ['./banklist.component.css']
})
export class BanklistComponent extends BaseListCtl {

  public form = {
    error: false, //error
    message: null, //error or success message
    preload: [], // preload data
    data: { id: null }, //form data
    inputerror: {}, // form input error messages
    searchParams: {}, //search form
    searchMessage: null, //search result message
    list: [], // search list
    pageNo: 0,
  };

  constructor(
    public locator: ServiceLocatorService,
    public route: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    super(locator.endpoints.BANK, locator, route);
  }




}
