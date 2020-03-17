import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-user-story-details',
  templateUrl: './version-user-story-details.component.html',
  styleUrls: ['./version-user-story-details.component.css']
})
export class VersionUserStoryDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // updateUserStory(id, userStoryName, transactionTypeId, transactionCount, currentFp) {

  //   const userStory: IUserStory  = {
  //     userStoryId: id,
  //     userStoryName,
  //     FP: this.calculateTheFp(transactionTypeId, transactionCount),
  //     fkProcessId: this.version.fkProcessId,
  //     fkVersionId: this.version.versionId,
  //     process: null,
  //     version: null
  //   };

  //   this.userStoriesService
  //   .putItem(id, userStory)
  //   .then(() => {
  //    this.version.totalFp -= currentFp;
  //    this.version.totalFp += userStory.FP;

  //    // update the version.
  //    this.versionsService
  //    .putItem(this.version.versionId, this.version)
  //    .catch(err => console.log(err))
  //    .finally(() => {

  //     // update the form.
  //      this.updateVersionFormGroup.reset();
  //      this.versionsService
  //      .getItem(this.version.versionId)
  //      .then((version: IVersion) => {
  //        this.version = version;
  //        this.versionName.setValue(version.versionName);
  //        this.totalFp.setValue(version.totalFp);
  //      });
  //    });

  //   });
  // }

  // private calculateTheFp(transactionTypeId, transactionCount): number {
  //   let result = transactionCount;

  //   this.transactionTypeValues.forEach(element => {
  //     // tslint:disable-next-line: triple-equals
  //     if (element.transactionTypeDTO.transactionTypeId == transactionTypeId) {
  //       result *= element.value;
  //     }
  //   });

  //   return result;
  // }

}
