<%@ Page Language="C#" AutoEventWireup="true" %>
<%@ Import Namespace="System.Net" %>
<%@ Import Namespace="System.Net.Mail" %>
<%
    string name        = Request["name"];
    string companyName = Request["companyName"];
    string email       = Request["email"];
    string phone       = Request["phone"];
    string requestInfo = Request["requestInfo"];
    string message     = Request["message"];

    if (string.IsNullOrWhiteSpace(name) ||
        string.IsNullOrWhiteSpace(companyName) ||
        string.IsNullOrWhiteSpace(email) ||
        string.IsNullOrWhiteSpace(phone) ||
        string.IsNullOrWhiteSpace(requestInfo) ||
        string.IsNullOrWhiteSpace(message))
    {
        Response.Write("Missing parameters");
        return;
    }

    try
    {
        string _date      = DateTime.Now.ToString("dddd, MMMM dd");
        string _host      = "smtp.office365.com";
        int    _port      = 587;
        string _from      = "devmail@axen.pro"; //contact@axen.pro
        string _user      = "devmail@axen.pro";
        string _pass      = "Pugo3485";
        bool   _enableSsl = true;
        bool   _isBodyHtml= true;
        string _to        = "contact@axen.pro";
        string _subjt     = "Mail from Axen contact form";
        string _subject   = string.Concat(_subjt," - ",_date);
        string _body =
            string.Concat("Name: ", name,"<br/>",
            "Company: ", companyName,"<br/>",
            "Email: ", email,"<br/>",
            "Phone: ", phone,"<br/>",
            "Requested Info: ", requestInfo,"<br/>",
            "Message: ", message);

        using (MailMessage mail = new MailMessage())
        {
            mail.IsBodyHtml = _isBodyHtml;
            mail.From = new MailAddress(_from);
            var arrTo = _to.Split(';');
            foreach (var item in arrTo)
                if (!string.IsNullOrWhiteSpace(item))
                    mail.To.Add(item);
            mail.Subject = _subject;
            mail.Body = _body;

            using (SmtpClient client = new SmtpClient
            {
                Host = _host,
                Port = _port,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                EnableSsl = _enableSsl,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(_user, _pass)
            })

                client.Send(mail);
        }
    }
    catch (Exception ex)
    {
        Response.Write("Error: " + ex.Message + ". Inner Exception: " + ex.InnerException != null ? ex.InnerException.ToString() : string.Empty);
    }

%>
