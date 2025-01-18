let sucess = (position) => console.log(position);
let error = (errors) => console.error(errors);



navigator.geolocation.getCurrentPosition(sucess, error);