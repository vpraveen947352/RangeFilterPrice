import { Injectable } from '@angular/core';9100

@Injectable({
  providedIn: 'root'
})
export class PriceService {

 itemRef : any;
 constructor(private db: AngularFireDatabase){}

 getPrice(){
   this.itemRef = this.db.list('/price').snapshotChange().pipe
   (map(changes => { return changes.map(c => ({key: c.payload.key,...c.payload.val()
  }));
}));
return this.itemRef;
 }
}
