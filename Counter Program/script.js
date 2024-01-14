const decreasebtn = document.getElementById("decreaseBtn")
const resetbtn = document.getElementById('resetbtn')
const increasebtn = document.getElementById('increasebtn')


const countLabel = document.getElementById("countLabel")


let number = 0;


/// create the three function for the three button separately


increasebtn.onclick = function () {
    number++;
    countLabel.textContent = number;
}

decreasebtn.onclick = function () {
    number--;
    countLabel.textContent = number;

}

resetbtn.onclick = function () {
    number = 0;
    countLabel.textContent = number;
}