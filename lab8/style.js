var count = 0;
window.addEventListener("keyup", function(e){
    containerContent = document.getElementById('container').innerHTML;
    firstChar = containerContent.charAt(0);
    if(e.key){
        console.log(e.key);
        console.log(firstChar);
        if(e.key == firstChar){
            count = 0;
            containerContent = containerContent.substring(1);
            document.getElementById('container').innerHTML = containerContent;
            let random = add_new_chars(0);
            document.getElementById('container').innerHTML += random;
        }
        else {
            let random = add_new_chars(0);
            document.getElementById('container').innerHTML += random;
            count ++;
            if(count === 3){
                let random = add_new_chars(1);
                document.getElementById('container').innerHTML += random;
                count = 0;
            }
        }
    }
    
    add_new_chars(0);
});


function add_new_chars(repeat) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    let random = 6;
    if(!repeat) {
        random = Math.floor(Math.random() * 3) + 1;
    }
    
    // 生成三個隨機字元
    for (let i = 0; i < random; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
}


window.onload = function() {
    let random = add_new_chars(0);
    document.getElementById('container').innerHTML = random;
}