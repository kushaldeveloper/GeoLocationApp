document.addEventListener("deviceready",onDeviceReady,false);
	function onDeviceReady(){
		alert("device is starting");
		document.getElementById("getPosition").addEventListener("click", getPosition);
		document.getElementById("watchPosition").addEventListener("click", watchPosition);
	};

	function getPosition() {
   		var options = {
       	enableHighAccuracy: true,
      	maximumAge: 3600000,
   		}
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

   function onSuccess(position) {
   		alert(".....");
      	alert('Latitude: '     + position.coords.latitude          + '\n' +
         'Longitude: '         + position.coords.longitude         + '\n' +
        }

   function onError(error) {
   	  alert(".....");
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
}

function watchPosition() {
   var options = {
      maximumAge: 3600000,
      timeout: 3000,
      enableHighAccuracy: true,
   }
   var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

   function onSuccess(position) {
   	  alert(".....");
      alert('Latitude: '       + position.coords.latitude          + '\n' +
         'Longitude: '         + position.coords.longitude         + '\n' +
   }

   function onError(error) {
   	  alert(".....");
      alert('code: '    + error.code    + '\n' +'message: ' + error.message + '\n');
   }
}
 