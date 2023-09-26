//Write your pseduo code first! 
//c to f

/*
need the value in c.
convert to c to f and show the value 
*/


    document.querySelector('h1').addEventListener('clic', cTof)

    function cTof(){
        let temp = (document.querySelector('inpue').value)
        temp = temp * 1.8 +32
        document.querySelector('h2').innerText = temp
    }

 



