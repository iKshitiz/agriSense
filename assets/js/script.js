// @ts-check


var s11 = document.querySelector('s1');
var s12 = document.querySelector('s2');
var s13 = document.querySelector('s3');

var s14 = document.querySelector('s4');
var s15 = document.querySelector('s5');
var s16 = document.querySelector('s6');
var s17 = document.querySelector('s7');


var c = document.querySelector('clock');
var stats = document.querySelector('st')


var pad = function (x) {
    return x < 10 ? '0' + x : x;
}

var ShowClock = function () {
    var d = new Date();
    var h = pad(d.getHours());
    var m = pad(d.getMinutes());
    var s = pad(d.getSeconds());

    c.innerHTML = [h, m, s].join(':');
}

setInterval(ShowClock, 1000);

var myRef = new Firebase('https://agrisense1.firebaseio.com/');

myRef.on('child_changed', function(snapshot){
    data = snapshot.val();
    s11.innerHTML = data.SensorA;
    s12.innerHTML = data.SensorB;
    s13.innerHTML = data.SensorC;
    s14.innerHTML = data.SensorD;
	
    s15.innerHTML = data.SoilStats;
    s16.innerHTML = data.LastIrrig;
	var mstats = data.MotorOn;
	if (mstats == 1){
		s17.innerHTML = "Motor is Running";
	}
	else{
		s17.innerHTML = "Not running";
	}
	
	stats.innerHTML = data.Status;
    
});


