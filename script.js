window.addEventListener('keydown',e => handleKey(e.keyCode));
    function handleKey(keyCode){
    switch (keyCode) {
        case 75:  //k 
        case 76:  //l
            if (document.querySelector("#camera-animation").getAttribute("to")==="0 180 0"){                
                document.querySelector("#camera-animation").setAttribute('to', '0 0 0');
                document.querySelector("#camera-animation").setAttribute('from', '0 180 0');
            }else{
                document.querySelector("#camera-animation").setAttribute('to', '0 180 0');
                document.querySelector("#camera-animation").setAttribute('from', '0 0 0');
            }            
            document.querySelector("#camera-animation").emit('fade');
        break;
    }
}