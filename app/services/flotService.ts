import {Injectable} from 'angular2/core';

export var FlotEntries: Array<number>[] = [
    [1, 130],
    [2, 40],
    [3, 80],
    [4, 160],
    [5, 159],
    [6, 370],
    [7, 330],
    [8, 350],
    [9, 370],
    [10, 400],
    [11, 330],
    [12, 350]
];



//@Injectable()
export class FlotService {
  getFlotEntries() {
    return FlotEntries;//Promise.resolve(FlotEntries);
  }
}
