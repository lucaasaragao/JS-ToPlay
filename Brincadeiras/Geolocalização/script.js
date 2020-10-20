if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
    }, function(error){
        console.log(error);
    });
}else{
    alert('ops, não foi possivel pegar sua localização, talvez seu navegador esteja desatualizado');
}
