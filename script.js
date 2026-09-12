function sendWhatsApp(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const destination=document.getElementById('destination').value.trim();
  const message=document.getElementById('message').value.trim();
  const text=`Hi Go Sky!%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ADestination: ${encodeURIComponent(destination || 'Not specified')}%0ARequirements: ${encodeURIComponent(message || 'Not specified')}`;
  window.open(`https://wa.me/918318994438?text=${text}`,'_blank');
}