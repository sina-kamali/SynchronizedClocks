import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  // This function will get a deep copy from the the passed object
  // We could improve this by using lodash and has one function that
  // will support all types

  getObjectDeepCopy<T>(objInput: T): T {
    return {... objInput}
  }

}
