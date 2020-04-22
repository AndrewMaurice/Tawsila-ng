import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';


export class HttpService {
  private serverPart = environment.apiUrl;
  constructor(private url: string, private http: HttpClient) { }

  getAllData() {
    return this.http.get(this.serverPart + this.url, {
      headers: {
        'Access-Control-Allow-Origin' : '*'
      }
    }).toPromise();
  }

  getItem(id: number) {
    return this.http.get(this.serverPart + this.url + '/' + id, {
      headers: {
        'Access-Control-Allow-Origin' : '*'
      }
    }).toPromise();
  }

  postItem(item: any) {
    return this.http.post(this.serverPart + this.url, JSON.stringify(item), {
      headers : {
        'content-type' : 'application/json',
        'Access-Control-Allow-Origin' : '*'
      }
    }).toPromise();
  }

  putItem(id: number, item: any) {
    return this.http.put(this.serverPart + this.url + '/' + id, item, {
      headers : {
        'content-type' : 'application/json'
      }
    }).toPromise();
  }

  deleteItem(id: number) {
    return this.http.delete(this.serverPart + this.url + '/' + id).toPromise();
  }

  postFile(id, item) {
    return this.http.post(this.serverPart + this.url + '/' + id, item).toPromise();
  }

  getFile(path) {

    // this.http.get(this.url + '/' + path, {
    //   responseType: 'blob'
    // }).toPromise();
    this.http.jsonp(this.serverPart + this.url + '/' + path, 'callBack').toPromise();
  }
}
