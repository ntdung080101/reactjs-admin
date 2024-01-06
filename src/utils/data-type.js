export function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return true;
  }
    return false;
}

export function ValidatePhoneNumber(phonenumber) 
{
 if (/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(phonenumber))
  {
    return true;
  }
    return false;
}