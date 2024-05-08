import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent extends BaseCtl {

  constructor(
    public locator: ServiceLocatorService,
    public route: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    super(locator.endpoints.BANK, locator, route);
  }

  submit() {
    var _self = this;

    this.serviceLocator.httpService.post(
      this.api.save,
      this.form.data,
      function (res) {
        _self.form.message = "";
        _self.form.data.id = res.result.data;
        if (res.success) {
          _self.form.message = "Data is saved";
          _self.form.data.id = res.result.data;
        } else {
          _self.form.error = true;
          if (res.result.inputerror) {
            _self.form.inputerror = res.result.inputerror;
          }
          _self.form.message = res.result.message;
        }
        _self.form.data.id = res.result.data;
      }
    );
  }

  onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + "---- after submit");
  }

  populateForm(form, data) {
    form.id = data.id;
    console.log(form.id + "populate form in usercomponent");
    form.bankName = data.bankName;
    form.customerName = data.customerName;
    form.accountNo = data.accountNo;
    form.accountType = data.accountType;

    console.log(form.status + "status---");
  }

}
