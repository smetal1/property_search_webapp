import { SearchResultsService } from './../search-results/search-results.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {

  searchModel: any;

  searchForm = this.fb.group({
    destination: '',
    checkIn: this.calendar.getToday(),
    checkOut: this.calendar.getToday(),
    adults: 1,
    children: 0,
    rooms: 1,
    ratePreference: '',
  });

  displayMonths = 1;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';
  hoveredDate: NgbDate;

  checkResultsStatus = -1;

  constructor(
    private fb: FormBuilder,
    private searchResultsService: SearchResultsService,
    private calendar: NgbCalendar) { }

  ngOnInit() {
    $('.ratePreference').selectric(
      {
        inheritOriginalWidth: false,
        width: '100%',
        multiple:
        {
          maxLabelEntries: 1
        }
      });
  }

  get destination() {
    return this.searchForm.get('destination');
  }

  get checkIn() {
    return this.searchForm.get('checkIn');
  }

  get checkOut() {
    return this.searchForm.get('checkOut');
  }

  get adults() {
    return this.searchForm.get('adults');
  }

  get children() {
    return this.searchForm.get('children');
  }

  get rooms() {
    return this.searchForm.get('rooms');
  }

  get ratePreference() {
    return this.searchForm.get('ratePreference');
  }

  decrementAdults() {
    this.adults.setValue(this.adults.value - 1);
  }

  incrementAdults() {
    this.adults.setValue(this.adults.value + 1);
  }

  decrementChildren() {
    this.children.setValue(this.children.value - 1);
  }

  incrementChildren() {
    this.children.setValue(this.children.value + 1);
  }
  decrementRooms() {
    this.rooms.setValue(this.rooms.value - 1);
  }

  incrementRooms() {
    this.rooms.setValue(this.rooms.value + 1);
  }

  onSubmit() {
    this.checkResultsStatus = 0;
    this.checkSearchResults();
  }

  dateDiff(cdate1, cdate2) {
    return moment(`${cdate1.value.year}-${cdate1.value.month}-${cdate1.value.day}`).diff(
      moment(`${cdate2.value.year}-${cdate2.value.month}-${cdate2.value.day}`)
    );
  }


  checkSearchResults() {
    const cIDate = moment(
      `${this.checkIn.value.year}-${this.checkIn.value.month}-${this.checkIn.value.day}`,
      'YYYY-MM-DD')
      .format('YYYY-MM-DD');
    const CODate = moment(
      `${this.checkOut.value.year}-${this.checkOut.value.month}-${this.checkOut.value.day}`,
      'YYYY-MM-DD').format('YYYY-MM-DD');

    this.searchResultsService
      .getSearchResults(
        this.destination.value,
        cIDate,
        CODate,
        this.adults.value,
        this.children.value,
        this.rooms.value,
        this.ratePreference.value).subscribe(
          data => {
            if (data.length) {
              this.searchModel = data;
              this.checkResultsStatus = 1;
            } else {
              this.checkResultsStatus = 2;
            }
          },
          error => {
            console.log(error);
          }
        );
  }

  checkDates() {
    return this.dateDiff(this.checkIn, this.checkOut);
  }
}
