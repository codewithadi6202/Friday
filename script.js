function listen_display(){
    document.getElementById('header').innerHTML = "Say, Something...";
    document.getElementById('main').style.display = 'none';
    document.getElementById('li_animate').style.display = 'block';
    document.getElementById('stop_listen').style.display = 'block';
    document.getElementById('info_said').style.display = 'none'
}

function reback_display(){
    document.getElementById('header').innerHTML = "Hello, I am Friday !";
    document.getElementById('main').style.display = 'block';
    document.getElementById('li_animate').style.display = 'none';
    document.getElementById('stop_listen').style.display = 'none';
    document.getElementById('textarea').style.display = 'block'
    document.getElementById('info_said').style.display = 'block'
}