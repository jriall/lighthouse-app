import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

const GAPI_LIBRARY_URL = 'https://apis.google.com/js/api.js';
const API_KEY = 'AIzaSyBnZ_Xz0n1fMZf1Yd6g0CNz_OJCAPe7Kn8';
const CLIENT_ID =
    '530230374647-bibcqu8ahqskao23brrar9ph75q2lvmb.apps.googleusercontent.com';
const ACCESS_SCOPES = 'https://www.googleapis.com/auth/userinfo.profile';
const DISCOVERY_DOCS =
    ['https://www.googleapis.com/discovery/v1/apis/oauth2/v2/rest'];

@Injectable({providedIn: 'root'})
export class AuthService {
  private googleAuth?: gapi.auth2.GoogleAuth;

  constructor(
      @Inject(DOCUMENT) private readonly document: Document,
      private readonly store: Store<{}>) {}

  loadLibrary(): Promise<void> {
    return new Promise(async (resolve) => {
      const isLibraryLoaded = this.findGoogleAuthScript();
      if (isLibraryLoaded && this.googleAuth) {
        resolve();
      } else if (isLibraryLoaded && !this.googleAuth) {
        await this.initClient();
        resolve();
      } else {
        const libraryScript = this.document.createElement('script');
        libraryScript.setAttribute('type', 'text/javascript');
        libraryScript.setAttribute('charset', 'utf-8');
        libraryScript.src = GAPI_LIBRARY_URL;
        libraryScript.onload = () => {
          this.initClient().then(() => {
            resolve();
          });
        };
        libraryScript.onerror = () => {
          resolve();
          // TODO(jriall): Handle errors.
        };
        this.document.head.appendChild(libraryScript);
      }
    });
  }

  private findGoogleAuthScript(): boolean {
    const domScripts = Array.from(this.document.querySelectorAll('script')) as
        HTMLScriptElement[];
    return !!domScripts.find((script) => script.src === GAPI_LIBRARY_URL);
  }

  private async initClient() {
    await new Promise((resolve) => gapi.load('client:auth2', resolve));
    await gapi.client.init({
      'apiKey': API_KEY,
      'clientId': CLIENT_ID,
      'scope': ACCESS_SCOPES,
      'discoveryDocs': DISCOVERY_DOCS,
    });
    this.googleAuth = gapi.auth2.getAuthInstance();
  }

  async getUser(): Promise<gapi.auth2.GoogleUser> {
    const isSignedIn = this.googleAuth.isSignedIn.get();
    if (!isSignedIn) {
      await this.googleAuth.signIn();
    }
    return this.googleAuth.currentUser.get();
  }

  logout() {
    this.googleAuth.signOut();
  }
}
