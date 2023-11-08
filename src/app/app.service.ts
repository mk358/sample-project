import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  createNewUser(id: number) {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  
    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
    };
  }

  generateRandomUser(total: number) {
    const users: any = [];
    for (let i = 1; i <= total; i++) { users.push(this.createNewUser(i)); }
    return users;
  }
}


const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
