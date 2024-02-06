export function getCurrentDate() {
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    };
    
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('fr-FR', options);
    
    return formattedDate;
  }
