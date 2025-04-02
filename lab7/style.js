var container = document.getElementById('container');
window.addEventListener("keyup", function(e){
    containerContent = document.getElementById('container').innerHTML;
    firstChar = containerContent.charAt(0);
    if(e.key){
        console.log(e.key);
        console.log(firstChar);
        if(e.key == firstChar){
            containerContent = containerContent.substring(1);
            document.getElementById('container').innerHTML = containerContent;
            let random = add_new_chars();
            document.getElementById('container').innerHTML += random;
        }
    }
    add_new_chars();
});


function add_new_chars() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    let random = Math.floor(Math.random() * 3) + 1;
    
    // 生成三個隨機字元
    for (let i = 0; i < random; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
}


window.onload = function() {
    let random = add_new_chars();
    document.getElementById('container').innerHTML = random;
}