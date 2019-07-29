import { Component, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  public href: string;
  public showcaseId:string;
  public path: string = window.location.href
  public sctn: number = this.path.lastIndexOf("/");
  public appPath: string = this.path.substring(0, this.sctn);

  public iframe;
  public height;


  public url = {
    News : {
      url: 'https://www.inxero.com/social_widgets/4VDMMsBPKP2926?frame_loader_id=inxero-xapp-loader-4VDMMsBPKP2926&amp;layout=tech-story&amp;width=1100&amp;header=true&amp;show_filter=true&amp;show_side_cta=true&amp;hubspotutk=&amp;page_title=AXEN.com%20%7C%20Digital%20Transformation%3A%20SharePoint%2C%20Office365%2C%20Azure&amp;parent='+this.appPath,
      height : 2100,
      showcaseId:'inxero-xapp-4VDMMsBPKP2926'
    },
    Office365:{
      url: 'https://www.inxero.com/social_widgets/ymOsmCNVkF3960?frame_loader_id=inxero-xapp-loader-ymOsmCNVkF3960&amp;layout=media-wall&amp;thumbnail=medium&amp;visible_content=4&amp;border=1&amp;&amp;hubspotutk=&amp;page_title=AXEN.com%20%7C%20Digital%20Transformation%3A%20SharePoint%2C%20Office365%2C%20Azure&amp;parent='+this.appPath,
      height : 950,
      showcaseId:'inxero-xapp-ymOsmCNVkF3960'
    },
    SharepointOnline:{
      url: 'https://www.inxero.com/social_widgets/Vgn5UcyoX82960?frame_loader_id=inxero-xapp-loader-Vgn5UcyoX82960&amp;layout=content-playbook&amp;thumbnail=medium&amp;visible_content=4&amp;border=true&amp;filter_type=standard&amp;hubspotutk=&amp;page_title=AXEN.com%20%7C%20Digital%20Transformation%3A%20SharePoint%2C%20Office365%2C%20Azure&amp;parent='+this.appPath,
      height : 800,
      showcaseId:'inxero-xapp-Vgn5UcyoX82960'
    },
    ApplicationModernization:{
      url: 'https://www.inxero.com/social_widgets/ZHqz5WEvAU2823?frame_loader_id=inxero-xapp-loader-ZHqz5WEvAU2823&amp;layout=content-playbook&amp;thumbnail=medium&amp;visible_content=4&amp;border=true&amp;width=500&amp;filter_type=standard&amp;hubspotutk=&amp;page_title=AXEN.com%20%7C%20Digital%20Transformation%3A%20SharePoint%2C%20Office365%2C%20Azure&amp;parent='+this.appPath,
      height : 800,
      showcaseId:'inxero-xapp-ZHqz5WEvAU2823'
    }
  }

  constructor(
    private sanitizer : DomSanitizer,
    private router : Router
  ) {}

  ngOnInit() {
    this.href = this.router.url.split('/')[1];
    this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url[this.href].url);
    this.height = this.url[this.href].height;
    this.showcaseId = this.url[this.href].showcaseId;
  }

}
