const data = {
    val1: 0,
    val2: 0,
    val3: 100
}
function updateAnswer(obj){
    data[obj.id] = obj.value;
    document.querySelector("#answer").value = (data.val3/data.val1)*data.val2;
}