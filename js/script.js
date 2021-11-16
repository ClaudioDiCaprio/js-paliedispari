// Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindrom


// function to check str is palindrome or not
function check_palindrome( string )
{
  let c = string.length -1;
  for( let i = 0 ; i < c/2 ;i++)
  {
    let x = string[i] ;//forward character
    let y = string[c-i];//backward character
    if( x != y)
    {
      // if all character forward and backword won't match then string is not a palindrome.
      return false;
    }
  }
  /// if all character forward and backword will match then string is a palindrome.
  return true;
   }

let ask = prompt('insert a palindrome word');
let check = check_palindrome(ask);
console.log(check);

document.querySelector('.here').innerHTML = 'The palindromicity value  for : '+ ask +', is';

document.querySelector('.bum').innerHTML =  check +'.';