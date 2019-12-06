function doDate() {
    var dt = new Date();
    document.getElementById("hour").innerHTML = dt.toLocaleTimeString().split(':')[0];
    document.getElementById("minute").innerHTML = dt.toLocaleTimeString().split(':')[1];
    var hours = dt.getHours();
    if (hours >= 12) {
        document.getElementById("second").innerHTML = dt.toLocaleTimeString().split(':')[2].split('P')[0];
        document.getElementById("ampm").innerHTML = 'PM';
    } else {
        document.getElementById("second").innerHTML = dt.toLocaleTimeString().split(':')[2].split('A')[0];
        document.getElementById("ampm").innerHTML = 'AM';
    }

}
setInterval(doDate, 1000);


function nameChange() {
    var contents = document.getElementById('user-name');
    localStorage.setItem('user-name', contents);
    document.getElementById('user-name') = localStorage.getItem('user-name');
}


// function getName() {
//     document.getElementById('user-name').innerHTML = localStorage['user-name'] || 'User';
//     localStorage['user-name'] = document.getElementById('user-name').innerHTML;
// }   
// setInterval(getName, 20000)
