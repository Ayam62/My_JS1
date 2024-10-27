const accountId=9863718782
let accountName="AyamKattel"
var accountCode="9863"
accountCity="Lalitpur"//prefer not to use
let accountState;//client told us to add this too

//Since we are learing JS in a project based manner. Think of an online platform of delivery like amazon, flipcart or daraz which we are about to create
//  we need to register a new user to our website. therefore we take thier id ,accountName, account password and thier city.
//to do so we made three variables. Now we are going to analyse each of their functionality.


//accountId=2.........reinitialization of variable with const keyword is not allowed because it is constant.
accountCode="97045"// possible
accountCity="Damak"// possible

/*console.log(accountName)..........this is a hectic process to display anything because it takes too many lines of code 
 for each varible to be displayed and hence we use another method to display our vairavles i.e tables*/


console.table([accountId,accountName,accountCode,accountCity,accountState])

//.............Diff between var and let.........................

/* Note many programmers used to use var in older days but they did not know that the var keyword had a wide scope and this was creating a problem
like if you have declared var id in one file and again you declared the same thing in another file the first file was reinitialized.
So to remove this problem a let keyword was introduced and almost all the programmers in modern days use this let keyword instead of 
var keyword to remove the aforementioned ambiguity. */

