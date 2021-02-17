import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HttpHelperService {
  getCurrentUserAccessToken() {
    const token = JSON.parse(localStorage.getItem('token') || '{}');
    return token;
  }

  resolveUserRequestHeader() {
    const accessToken = this.getCurrentUserAccessToken();
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + accessToken });
    return headers;
  }
}
