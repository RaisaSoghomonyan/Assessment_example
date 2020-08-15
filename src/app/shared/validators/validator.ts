import {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';
import {Project} from '../models/project';

export class MyValidators {
  static restrictedUserNames( control: FormControl): {[key: string]: boolean} {
    if (control.value.search('test') > -1){
      return {restrictedUserName: true};
    }
    return null;
  }
  static uniqueProjectName( arr: Project[], existValue?: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if (existValue !== control.value) {
        if (arr.find(proj => proj.name === control.value)) {
          return {uniqueProjectName: true};
        }
      }
      return null;
        };
  }
  }

