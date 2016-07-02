import {Page, ActionSheet, NavController, Platform, NavParams, Alert} from 'ionic-angular';
import {StudentPage} from '../student/student';



@Page({
    templateUrl: 'build/pages/AddClass/addclass.html'
})
export class addPage {

    otherSub
    subjects;
    students;
    other;
    subjArr: any[] = [];
    studArr: any[] = [];
    show: boolean = false;
    showSubBtn: boolean = false;
    showStudBtn: boolean = false;

    subbool: boolean = false;
    constructor(public nav: NavController, public platform: Platform, public params: NavParams) {
        this.show = false;
        this.subbool = false;
        this.showSubBtn = false;
        this.showStudBtn = false;


    }


    // AddSubject(subjects: HTMLSelectElement) {
        // console.log(`value is ${this.subjects == others.value}`);
        // alert(`Selected Subjects is : ${subjects}  `)
        // console.log(`Other subject is ${others.value}`)

        // for (var i = 0; i < subjects.length; i++) {
            // console.log(subjects[i]);

            // this.subjArr.push(subjects[i])

            // let alert = Alert.create({
            //       title: 'Congratulations!',
            //       subTitle: `Your data is added to Database`,
            //       buttons: ['OK']
            //     });
            //     this.nav.present(alert);

    //     }

    // }


    selectSub(value, subjects: HTMLSelectElement) {
        console.log(value);
        
        for (var i = 0; i < subjects.length; i++) {
            console.log(subjects[i]);


            if (subjects[i] == 'Others') {
                console.log('Others');

                this.show = true;
                this.subbool = true;

            }
            else {
                this.show = false;
                this.subbool = false;

            }


 console.log("Array",subjects[i]);

 this.subjArr.push(subjects[i])
 this.subjects = [];
            let alert = Alert.create({
                  title: 'Selected Subjects',
                  subTitle: `You have selected ${value}`,
                  buttons: ['OK']
                });
                this.nav.present(alert);


        }

        this.showSubBtn = true;
    }


    subObj = [];
    
    ShowSubject(subjects: HTMLSelectElement, otherSub: HTMLInputElement) {
        // alert('SHow');
        console.log(this.subjects);
        if (this.subjArr && this.subjArr.length  - 1 > 0) {
            for (var i = 0; i < this.subjArr.length; i++) {
                // if (this.subjArr[i] === 'Others') {
                //     this.subjArr.splice(i, 0);
                // console.log('Other Subjects', this.subjArr);
                    
                // }
                // else {
                    this.subObj.push({


                        text: this.subjArr[i],
                        icon: !this.platform.is('ios') ? 'md-book' : null,
                        handler: () => {
                            console.log('subjects + otherSub+', this.subjArr[i], otherSub.value);
                        }
                    });
                // }   
            }
            
        }
                this.subjArr = [];
        
        // this.subObj.push({
        //     text:this.otherSub,
        //     icon: !this.platform.is('ios') ? 'md-book' : null,
        //     handler: () => {
        //         console.log('aaaaaaaaaaaaaaa',otherSub.value);
        //     }
        // });

        this.subObj.push({
            text: 'Cancel',
            role: 'cancel', // will always sort to be on the bottom
            icon: !this.platform.is('ios') ? 'close' : null,
            handler: () => {
                console.log('Cancel clicked');
            }
        });

        let actionSheet = ActionSheet.create({
            title: 'Your Selected Subjects are :',
            cssClass: 'action-sheets-basic-page',
            buttons: this.subObj


        });

        this.nav.present(actionSheet);
        this.showSubBtn = false;

    }


AddOtherSub(otherSub: HTMLInputElement) {

        this.subjArr.push(otherSub.value)
        // this.subObj.push(otherSub.value)
        console.log(otherSub.value)

        console.log('subarray', this.subjArr)
        console.log('textbox', otherSub.value)
        this.showSubBtn = true;
        

    }    


    selectTeach(value) {
        let alert = Alert.create({
            title: 'Congratulations!',
            subTitle: `You have selected ${value}`,
            buttons: ['OK']
        });
        this.nav.present(alert);
    }


/*
    AddStudent(stud) {

        console.log(stud)
        this.studArr.push(stud);
        console.log(this.studArr)
        let alert = Alert.create({
            title: 'Congratulations!',
            subTitle: `Your data is added to Database`,
            buttons: ['OK']
        });
        this.nav.present(alert);

    }
    ShowStudent() {
        console.log(this.params);
        this.nav.push(StudentPage, { ShowStud: this.studArr })
        this.showStudBtn = false;


    }

    selectStud(value) {
        let alert = Alert.create({
            title: 'Selected Students',
            subTitle: `You have selected ${value}`,
            buttons: ['OK']
        });
        this.nav.present(alert);
        this.showStudBtn = true;


    }
*/

}

