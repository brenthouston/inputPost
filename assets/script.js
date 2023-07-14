// make input field 
// eventlistener for key down
// create button with text from input field
// erase input field

var inputEl = document.getElementById('name');
var mybutton = document.getElementById('buttons')
addEventListener('keydown',checkKey, false);

function checkKey(key){
    
    if(key.keyCode == 13){

        var btn= document.createElement("button");
        btn.setAttribute("id","btn")
        btn.textContent = inputEl.value;
        mybutton.appendChild(btn);
        inputEl.value = "";
        
    }
}
var clear = document.querySelector('#clear');
clear.addEventListener('click', function(ev){

  var removeBtn = document.getElementById('buttons');
  removeBtn.lastChild.remove();

}
);



    

