import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {CreateSiteService} from './create_site_service';

describe('CoursesService', () => {
  let httpTestingController: HttpTestingController;
  let service: CreateSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CreateSiteService],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(CreateSiteService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('sends a POST request to the correct endpoint and with the correct ' +
         +'payload when the createSite method is called',
     () => {
       service.createSite({name: 'Test site', url: 'https://example.com'})
           .subscribe();

       const req = httpTestingController.expectOne('/api/v1/sites/');

       expect(req.request.method).toEqual('POST');
       expect(req.request.body)
           .toEqual({name: 'Test site', url: 'https://example.com'})

       req.flush({});
     });
});
