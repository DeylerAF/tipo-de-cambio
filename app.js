/* 
  INFO
  https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-10.php
*/

//Convert USD to EUR
function multiplyBy()
{
        num1 = (document.getElementById("firstNumber").value);
        num2 = (document.getElementById("secondNumber").value);
        document.getElementById("result").innerHTML = (num1 * num2);

        console.log(num1 * num2);

}

function divideBy()
{ 
        num1 = (document.getElementById("firstNumber").value);
        num2 = (document.getElementById("secondNumber").value);
        document.getElementById("result").innerHTML = (num1 / num2);
        console.log(num1 * num2);
}
