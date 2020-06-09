import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'node_modules/chart.js';
import { getLocaleDirection } from '@angular/common';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  data: any = [];
  // finance/dep
  fin75: number = 0;
  fin77: number = 0;
  fin78: number = 0;
  fin91: number = 0;
  fin92: number = 0;
  fin93: number = 0;
  fin94: number = 0;
  fin95: number = 0;
  // finance/année
  fin2011: number = 0;
  fin2012: number = 0;
  fin2013: number = 0;
  fin2014: number = 0;
  // proportion/finance
  under: number = 0;
  between: number = 0;
  upper: number = 0;
  year: any;
  index: string;
  selectedYear;
  selectYear = [2011, 2012, 2013, 2014];
  repData: any = [];

  // 2011
  fin7511: number = 0;
  fin7711: number = 0;
  fin7811: number = 0;
  fin9111: number = 0;
  fin9211: number = 0;
  fin9311: number = 0;
  fin9411: number = 0;
  fin9511: number = 0;
  // 2012
  fin7512: number = 0;
  fin7712: number = 0;
  fin7812: number = 0;
  fin9112: number = 0;
  fin9212: number = 0;
  fin9312: number = 0;
  fin9412: number = 0;
  fin9512: number = 0;
  // 2013
  fin7513: number = 0;
  fin7713: number = 0;
  fin7813: number = 0;
  fin9113: number = 0;
  fin9213: number = 0;
  fin9313: number = 0;
  fin9413: number = 0;
  fin9513: number = 0;
  // 2014
  fin7514: number = 0;
  fin7714: number = 0;
  fin7814: number = 0;
  fin9114: number = 0;
  fin9214: number = 0;
  fin9314: number = 0;
  fin9414: number = 0;
  fin9514: number = 0;
  myChart4: any;



  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getChart();
    this.getDatayear();
  }

  getData() {
    return this.httpClient.get("assets/data.json");
  }

  getDatayear() {
    this.getData().subscribe(repApi => {
      this.repData = [];
      this.repData = repApi;
      for (let i = 0; i < this.repData.length; i++) {

        // 2011
        if (repApi[i].fields.exercice_de_la_premiere_decision == 2011 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 77) {
          this.fin7711 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2011 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 78) {
          this.fin7811 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2011 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 75) {
          this.fin7511 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2011 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 91) {
          this.fin9111 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2011 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 92) {
          this.fin9211 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2011 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 93) {
          this.fin9311 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2011 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 94) {
          this.fin9411 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2011 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 95) {
          this.fin9511 += repApi[i].fields.montant_vote;
        }

        // 2012
        if (repApi[i].fields.exercice_de_la_premiere_decision == 2012 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 77) {
          this.fin7712 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2012 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 78) {
          this.fin7812 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2012 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 75) {
          this.fin7512 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2012 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 91) {
          this.fin9112 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2012 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 92) {
          this.fin9212 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2012 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 93) {
          this.fin9312 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2012 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 94) {
          this.fin9412 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2012 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 95) {
          this.fin9512 += repApi[i].fields.montant_vote;
        }

        // 2013
        if (repApi[i].fields.exercice_de_la_premiere_decision == 2013 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 77) {
          this.fin7713 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2013 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 78) {
          this.fin7813 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2013 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 75) {
          this.fin7513 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2013 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 91) {
          this.fin9113 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2013 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 92) {
          this.fin9213 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2013 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 93) {
          this.fin9313 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2013 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 94) {
          this.fin9413 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2013 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 95) {
          this.fin9513 += repApi[i].fields.montant_vote;
        }

        // 2014
        if (repApi[i].fields.exercice_de_la_premiere_decision == 2014 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 77) {
          this.fin7714 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2014 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 78) {
          this.fin7814 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2014 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 75) {
          this.fin7514 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2014 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 91) {
          this.fin9114 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2014 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 92) {
          this.fin9214 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2014 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 93) {
          this.fin9314 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2014 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 94) {
          this.fin9414 += repApi[i].fields.montant_vote;

        } else if (repApi[i].fields.exercice_de_la_premiere_decision == 2014 && repApi[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 95) {
          this.fin9514 += repApi[i].fields.montant_vote;
        }
      }
    })
  }

  selected() {
    console.log(this.selectedYear);
    var ctx4 = document.getElementById('myChart4');
    if (this.selectedYear == 2011) {
      this.myChart4 = new Chart(ctx4, {
        type: 'bar',
        data: {
          labels: [75, 77, 78, 91, 92, 93, 94, 95],
          datasets: [{
            label: 'Supports financier par département par année',
            data: [this.fin7511, this.fin7711, this.fin7811, this.fin9111, this.fin9211, this.fin9311, this.fin9411, this.fin9511],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(250, 128, 114, 0.2)',
              'rgba(255, 0, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(250, 128, 114, 1)',
              'rgba(255, 0, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }

    if (this.selectedYear == 2012) {
      this.myChart4 = new Chart(ctx4, {
        type: 'bar',
        data: {
          labels: [75, 77, 78, 91, 92, 93, 94, 95],
          datasets: [{
            label: 'Supports financier par département par année',
            data: [this.fin7512, this.fin7712, this.fin7812, this.fin9112, this.fin9212, this.fin9312, this.fin9412, this.fin9512],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(250, 128, 114, 0.2)',
              'rgba(255, 0, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(250, 128, 114, 1)',
              'rgba(255, 0, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }

    if (this.selectedYear == 2013) {
      this.myChart4 = new Chart(ctx4, {
        type: 'bar',
        data: {
          labels: [75, 77, 78, 91, 92, 93, 94, 95],
          datasets: [{
            label: 'Supports financier par département par année',
            data: [this.fin7513, this.fin7713, this.fin7813, this.fin9113, this.fin9213, this.fin9313, this.fin9413, this.fin9513],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(250, 128, 114, 0.2)',
              'rgba(255, 0, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(250, 128, 114, 1)',
              'rgba(255, 0, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }

    if (this.selectedYear == 2014) {
      this.myChart4 = new Chart(ctx4, {
        type: 'bar',
        data: {
          labels: [75, 77, 78, 91, 92, 93, 94, 95],
          datasets: [{
            label: 'Supports financier par département par année',
            data: [this.fin7514, this.fin7714, this.fin7814, this.fin9114, this.fin9214, this.fin9314, this.fin9414, this.fin9514],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(250, 128, 114, 0.2)',
              'rgba(255, 0, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(250, 128, 114, 1)',
              'rgba(255, 0, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
  }




  getChart() {
    this.getData().subscribe(data => {
      this.data = [];
      this.data = data;
      this.data.forEach(element => {
        /* console.log(element)*/
      })

      // Finance/dep
      for (let i = 0; i < this.data.length; i++) {
        if (data[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 77) {
          this.fin77 += data[i].fields.montant_vote;

        } else if (data[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 75) {
          this.fin75 += data[i].fields.montant_vote;

        } else if (data[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 78) {
          this.fin78 += data[i].fields.montant_vote;

        } else if (data[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 91) {
          this.fin91 += data[i].fields.montant_vote;

        } else if (data[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 92) {
          this.fin92 += data[i].fields.montant_vote;

        } else if (data[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 93) {
          this.fin93 += data[i].fields.montant_vote;

        } else if (data[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 94) {
          this.fin94 += data[i].fields.montant_vote;

        } else if (data[i].fields.adresse_administrative_code_departement_du_tiers_beneficiaire == 95) {
          this.fin95 += data[i].fields.montant_vote;
        }
      }


      // Chart N°1
      var ctx1 = document.getElementById('myChart1');
      var myChart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
          labels: [75, 77, 78, 91, 92, 93, 94, 95],
          datasets: [{
            label: 'Supports financier par département',
            data: [this.fin75, this.fin77, this.fin78, this.fin91, this.fin92, this.fin93, this.fin94, this.fin95],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(250, 128, 114, 0.2)',
              'rgba(255, 0, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(250, 128, 114, 1)',
              'rgba(255, 0, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
      // Finance/Année
      for (let i = 0; i < this.data.length; i++) {
        if (data[i].fields.exercice_de_la_premiere_decision == 2011) {
          this.fin2011 += data[i].fields.montant_vote;

        } else if (data[i].fields.exercice_de_la_premiere_decision == 2012) {
          this.fin2012 += data[i].fields.montant_vote;

        } else if (data[i].fields.exercice_de_la_premiere_decision == 2013) {
          this.fin2013 += data[i].fields.montant_vote;

        } else if (data[i].fields.exercice_de_la_premiere_decision == 2014) {
          this.fin2014 += data[i].fields.montant_vote;
        }
      }

      // Chart N°2
      var ctx2 = document.getElementById('myChart2');
      var myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
          labels: [2011, 2012, 2013, 2014],
          datasets: [{
            label: 'Supports financier par année',
            data: [this.fin2011, this.fin2012, this.fin2013, this.fin2014],
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(250, 128, 114, 1)',
              'rgba(255, 0, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });

      // proportion/finance
      for (let i = 0; i < this.data.length; i++) {
        if (data[i].fields.montant_vote < 10000) {
          this.under += data[i].fields.montant_vote;

        } else if (data[i].fields.montant_vote >= 10000 && data[i].fields.montant_vote <= 50000) {
          this.between += data[i].fields.montant_vote;

        } else if (data[i].fields.montant_vote > 50000) {
          this.upper += data[i].fields.montant_vote;
        }
      }

      //Chart N°3
      var ctx3 = document.getElementById('myChart3');
      var myChart3 = new Chart(ctx3, {
        type: 'pie',
        data: {
          labels: ["10000 to 50000", "under 10000", 'upper 50000'],
          datasets: [{
            label: 'Supports financier par année',
            data: [this.between, this.under, this.upper],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });

    })
  }
}