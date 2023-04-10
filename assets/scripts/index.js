// Functions for each pop-up window
function showPopUpGroup() {
  document.getElementById("group-popup").classList.toggle("active");
}
function showPopUpList() {
  document.getElementById("list-popup").classList.toggle("active");
}
function showPopUpMessage() {
  document.getElementById("message-popup").classList.toggle("active");
}
function showPopUpAddItem() {
  document.getElementById("item-popup").classList.toggle("active");
}

function createNewElement() {
  var inputValue = document.getElementById("myInput").value;
  var textNode = document.createTextNode(inputValue);
  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var li = document.createElement("li");
  var input1 = document.createElement("input");
  var input2 = document.createElement("input");
  var button1 = document.createElement("button");
  var i1 = document.createElement("i");
  var button2 = document.createElement("button");
  var i2 = document.createElement("i");
  var div3 = document.createElement("div");
  var select = document.createElement("select");
  var option1 = document.createElement("option");
  var option2 = document.createElement("option");
  var option3 = document.createElement("option");
  var option4 = document.createElement("option");
  var option5 = document.createElement("option");
  var i3 = document.createElement("img");
  
  if (inputValue === '') {
    alert("Please insert name of item.");
  } else {
    document.getElementById("myUL").appendChild(li);
    alert("Your item has been added to the list!");
  }
  document.getElementById("myInput").value = "";

  li.appendChild(div1);
  div1.appendChild(div2);
  div1.appendChild(div3);
  div2.appendChild(input1);
  div2.appendChild(input2);
  div2.appendChild(button1);
  div2.appendChild(button2);
  button1.appendChild(i1);
  button2.appendChild(i2);
  div3.appendChild(select);
  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);
  select.appendChild(option4);
  select.appendChild(option5);
  div3.appendChild(i3);

  div1.setAttribute('id','item');
  div1.setAttribute('class','flex items-center justify-between border-b border-gray-400 p-2');
  div2.setAttribute('class','flex items-center gap-4');
  input1.setAttribute('type','checkbox');
  input2.setAttribute('type','text');
  input2.setAttribute('class','max-w-min bg-transparent text-xl outline-none');
  input2.setAttribute('value',inputValue);
  button1.setAttribute('onclick', document.getElementById('editWindow').classList.toggle('hidden'));
  i1.setAttribute('class','fa-solid fa-pen-to-square');
  i2.setAttribute('class','fa-solid fa-trash-can text-red-700');
  div3.setAttribute('class','flex items-center gap-4');
  i3.setAttribute('src','./assets/img/man-2.png')
  i3.setAttribute('class','h-10');
  i3.setAttribute('alt',' ');
  select.setAttribute('id','store');
  option1.setAttribute('selected');
  option2.setAttribute('value','');
  option3.setAttribute('value','');
  option4.setAttribute('value','');
  option5.setAttribute('value','');

  



}
function editWindow() {

}