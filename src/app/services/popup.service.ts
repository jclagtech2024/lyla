import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PopupService {
    private showPopup: BehaviorSubject<string>;
    constructor() {
        this.showPopup = new BehaviorSubject('');
    }
    getShowPopupObs() {
        return this.showPopup.asObservable();
    }
    setShowPopupValue(value: string) {
        this.showPopup.next(value);
    }
}
