/* 
  INFO
  https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-10.php
*/

//Convert USD to EUR
function calculate(){
        tc_usd = (document.getElementById("tc_usd").value);
        tv_usd = (document.getElementById("tv_usd").value);
        dif_eur =  (document.getElementById("dif_eur").value);
        document.getElementById("tc_eur").innerHTML = (tc_usd * dif_eur);
        document.getElementById("tv_eur").innerHTML = (tv_usd * dif_eur);
        /* function diference{
                tv_usd = (document.getElementById("tv_usd").value);
                tv_eur = (document.getElementById("tv_eur").value);
                return document.getElementById("dif_usd").innerHTML = (tv_usd / tv_eur);
        }
        return diference; */

}

/* function divideBy()
{ 
        num1 = (document.getElementById("firstNumber").value);
        num2 = (document.getElementById("secondNumber").value);
        document.getElementById("result").innerHTML = (num1 * num2);
        console.log(num1 * num2);
} */