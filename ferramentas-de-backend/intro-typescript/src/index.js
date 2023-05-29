
function reverseString(str) {
  if (str === "")
    // Este é o caso terminal que encerrará a recursão
    return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
  /* 
Primeira parte do método de recursão
Lembre-se de que não fará apenas uma chamada, mas diversas chamadas aninhadas

Cada chamada: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
1ª chamada – reverseString("Hello")   retornará   reverseString("ello")           + "h"
2ª chamada – reverseString("ello")    retornará   reverseString("llo")            + "e"
3ª chamada – reverseString("llo")     retornará   reverseString("lo")             + "l"
4ª chamada – reverseString("lo")      retornará   reverseString("o")              + "l"
5ª chamada – reverseString("o")       retornará   reverseString("")               + "o"

Segunda parte do método de recursão
O método chega na condição expressa pelo if e a chamada aninhada mais acima é retornada imediatamente

A 5ª chamada retornará reverseString("") + "o" = "o"
A 4ª chamada retornará reverseString("o") + "l" = "o" + "l"
A 3ª chamada retornará reverseString("lo") + "l" = "o" + "l" + "l"
A 2ª chamada retornará reverserString("llo") + "e" = "o" + "l" + "l" + "e"
A 1ª chamada retornará reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
*/
}
reverseString("hello");
