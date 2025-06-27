const paymentform= document.getElementById('payment-form');
const paybutton=document.getElementById('pay-button');
const paymentStatusDiv=document.getElementById('payment-status');
paybutton.addEventListener('click',(event)=>{
event.preventDefault();
const amount= document.getElementById('amount').value;
const cardnumber=document.getElementById('card-number').value;
const expirationdate=document.getElementById('expiration-date').value;
const cvv=document.getElementById('cvv').value;
const paymentrequest={
amount,
cardnumber,
expirationdate,
cvv                          
};
const paymentresponse={
status:'success',
message:'payment successful!'                          
};
paymentStatusDiv.innerHTML=`<p>status: ${paymentresponse.status}</p>
<p>Message: ${paymentresponse.message} </p>`;                        
});