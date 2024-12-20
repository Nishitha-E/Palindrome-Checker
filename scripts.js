document.getElementById("checkButton").addEventListener("click",palindromeChecker);
function isPalindrome(str){
    const cleanstr= str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanstr);
    const revstr= cleanstr.split('').reverse().join('');
    console.log(revstr);
    return cleanstr===revstr;

}
function palindromeChecker(){
    const inputText=document.getElementById("inputText");
    const result=document.getElementById("result");
    if (isPalindrome(inputText.value)){
        result.textContent = `${inputText.value} is a Palindrome`;

    }else{
        result.textContent = `${inputText.value} is not a Palindrome`;
    }
    result.classList.add('fadeIn');
    inputText.value="";

}

