import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  sendinblueApi = environment.sendinblueApi;
  apiUrl = environment.apiUrl;
  listId = 11;
  apiKey = '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'
  constructor(
    private http: HttpClient
  ) { }

  addContactToList(contactData) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'api-key': this.apiKey
      })
    };
    return this.http.post(this.sendinblueApi + `/contacts`, contactData, httpOptions)
  }

  getUserData(email) {
    const userData = { "email": email };
    return this.http.post(this.apiUrl + 'getEmail', userData);
  }

  updateContact(identifier, toUpdateCOntactData) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'api-key': this.apiKey
      })
    };
    return this.http.put(this.sendinblueApi + `/contacts/${identifier}`, toUpdateCOntactData, httpOptions);
  }

  deleteContact() {

  }

  sendMessageToSupport(messageData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'api-key': this.apiKey
      })
    };
    const emailTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"> <head> <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <meta name="viewport" content="width=device-width"> <!--[if !mso]><!--> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!--<![endif]--> <title></title> <!--[if !mso]><!--> <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css"> <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css"> <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css"> <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" type="text/css"> <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css"> <!--<![endif]--> <style type="text/css"> body { margin: 0; padding: 0; } table, td, tr { vertical-align: top; border-collapse: collapse; } * { line-height: inherit; } a[x-apple-data-detectors=true] { color: inherit !important; text-decoration: none !important; } </style> <style type="text/css" id="media-query"> @media (max-width: 920px) { .block-grid, .col { min-width: 320px !important; max-width: 100% !important; display: block !important; } .block-grid { width: 100% !important; } .col { width: 100% !important; } .col>div { margin: 0 auto; } img.fullwidth, img.fullwidthOnMobile { max-width: 100% !important; } .no-stack .col { min-width: 0 !important; display: table-cell !important; } .no-stack.two-up .col { width: 50% !important; } .no-stack .col.num4 { width: 33% !important; } .no-stack .col.num8 { width: 66% !important; } .no-stack .col.num4 { width: 33% !important; } .no-stack .col.num3 { width: 25% !important; } .no-stack .col.num6 { width: 50% !important; } .no-stack .col.num9 { width: 75% !important; } .video-block { max-width: none !important; } .mobile_hide { min-height: 0px; max-height: 0px; max-width: 0px; display: none; overflow: hidden; font-size: 0px; } .desktop_hide { display: block !important; max-height: none !important; } } </style> </head> <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;"> <!--[if IE]><div class="ie-browser"><![endif]--> <table class="nl-container" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#FFFFFF" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td style="word-break: break-word; vertical-align: top;" valign="top"> <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]--> <div style="background-color:transparent;"> <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;"> <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"> <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:900px"><tr class="layout-full-width" style="background-color:transparent"><![endif]--> <!--[if (mso)|(IE)]><td align="center" width="900" style="background-color:transparent;width:900px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]--> <div class="col num12" style="min-width: 320px; max-width: 900px; display: table-cell; vertical-align: top; width: 900px;"> <div style="width:100% !important;"> <!--[if (!mso)&(!IE)]><!--> <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"> <!--<![endif]--> <div class="img-container center autowidth" align="center" style="padding-right: 0px;padding-left: 0px;"> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--> <a href="https://shadowintelligence.io" target="_blank" style="outline:none" tabindex="-1"> <img class="center autowidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/582549_564138/unnamed.png" alt="I'm an image" title="I'm an image" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 781px; display: block;" width="781"></a> <!--[if mso]></td></tr></table><![endif]--> </div> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]--> <div style="color:#555555;font-family:'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;"> <div style="line-height: 1.2; font-size: 12px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #555555; mso-line-height-alt: 14px;"> <p style="font-size: 18px; line-height: 1.2; text-align: left; word-break: break-word; font-family: Nunito, Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 22px; margin: 0;"> <span style="font-size: 18px;"><strong>Hi ShadowIntelligence Team,</strong></span></p> </div> </div> <!--[if mso]></td></tr></table><![endif]--> <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top"> <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #BBBBBB; width: 100%;" align="center" role="presentation" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]--> <div style="color:#555555;font-family:'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;"> <div style="line-height: 1.2; font-size: 12px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #555555; mso-line-height-alt: 14px;"> <p style="font-size: 14px; line-height: 1.2; text-align: left; word-break: break-word; font-family: Nunito, Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;"> <strong><span style="font-size: 18px;">User Infor</span></strong></p> <p style="font-size: 18px; line-height: 1.2; text-align: left; word-break: break-word; font-family: Nunito, Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 22px; margin: 0;"> <span style="font-size: 18px;">email: `
      + messageData["email"] +
      `</span> </p> <p style="font-size: 18px; line-height: 1.2; text-align: left; word-break: break-word; font-family: Nunito, Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 22px; margin: 0;"> <span style="font-size: 18px;">name: `
      + messageData["name"] +
      `</span></p> </div> </div> <!--[if mso]></td></tr></table><![endif]--> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]--> <div style="color:#555555;font-family:'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;"> <div style="line-height: 1.2; font-size: 12px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #555555; mso-line-height-alt: 14px;"> <p style="font-size: 14px; line-height: 1.2; text-align: left; word-break: break-word; font-family: Nunito, Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;"> <strong><span style="font-size: 18px;">Message</span></strong> </p> <p style="font-size: 18px; line-height: 1.2; text-align: left; word-break: break-word; font-family: Nunito, Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 22px; margin: 0;"> <span style="font-size: 18px;">`
      + messageData["message"] +
      `</span></p> </div> </div> <!--[if mso]></td></tr></table><![endif]--> <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top"> <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #BBBBBB; width: 100%;" align="center" role="presentation" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <!--[if (!mso)&(!IE)]><!--> </div> <!--<![endif]--> </div> </div> <!--[if (mso)|(IE)]></td></tr></table><![endif]--> <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]--> </div> </div> </div> <div style="background-color:transparent;"> <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;"> <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"> <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:900px"><tr class="layout-full-width" style="background-color:transparent"><![endif]--> <!--[if (mso)|(IE)]><td align="center" width="900" style="background-color:transparent;width:900px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]--> <div class="col num12" style="min-width: 320px; max-width: 900px; display: table-cell; vertical-align: top; width: 900px;"> <div style="width:100% !important;"> <!--[if (!mso)&(!IE)]><!--> <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"> <!--<![endif]--> <div style="font-size:16px;text-align:center;font-family:Arial, Helvetica Neue, Helvetica, sans-serif"> <div style="height-top: 20px;"> </div> </div> <!--[if (!mso)&(!IE)]><!--> </div> <!--<![endif]--> </div> </div> <!--[if (mso)|(IE)]></td></tr></table><![endif]--> <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]--> </div> </div> </div> <!--[if (mso)|(IE)]></td></tr></table><![endif]--> </td> </tr> </tbody> </table> <!--[if (IE)]></div><![endif]--> </body> </html>`
    // "email": "support@shadowintelligence.io",
    // "email": "pavlovichbasil9@gmail.com",

    const payload = {
      "sender": {
        "name": messageData["name"],
        "email": messageData["email"]
      },
      "to": [
        {
          "email": "support@shadowintelligence.io",
          "name": "admin"
        }
      ],
      "subject": messageData["subject"],
      "htmlContent": emailTemplate
    };
    return this.http.post(this.sendinblueApi + `/smtp/email`, payload, httpOptions)
  }
}
