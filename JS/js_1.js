//alert('fefkjvhwhe');
console.log('hey tehre !!');


//only ask ok or cancel return boolean values
//confirm('are u okay ?');

// by default 21 will be shown to the client

//let temp = prompt('how old r u ?','21');

//document.write('user have entered .. : '+temp);


function fun(){
	document.write('user have entered .. : '+temp);
}

function question1(){
	let sen = prompt('enter 10 words !!');
	document.getElementById('test').innerHTML+="before sorting: "+sen;

	let sen_arr =  sen.split(" ");
	document.getElementById('test').innerHTML+="<br><br>after sorting..."
	document.getElementById('test').innerHTML+="<br><br>" +sen_arr.sort();
}


function question2(){
	//let rad = prompt('enter radius of cylinder !!');
	//let height = prompt('enter height of cylinder !!');

	let rad = new Number(prompt('enter radius of cylinder !!'));
	let height = new Number(prompt('enter height of cylinder !!'));

	if((rad || height) == 0 ){document.getElementById('test2').innerHTML+="entered null values..";return;}
	

	let vol = Math.PI*rad*rad*height;

	document.getElementById('test2').innerHTML+="vol of cylinder is : "+vol.toExponential(4);
	document.getElementById("test2").innerHTML+="<br>vol of cylinder is : "+vol.toFixed(4);
}



function question3(){
	
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('test3').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(question3, 1000);

}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}



function question4(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] == "function";
    });
}


function question5() {
	//let totalBill = prompt('enter the total bil amount');
	//let check = confirm('u have entered : '+totalBill);
  	
  	const arr1 = [];
  	const arr2 = [];

  	const n = prompt('enter the no of restaurants : ');

  	/* Note : that n>10 will exit from the program!! */
  	if(n==0||n==NaN||n==""||n>10){return;}

  for(let i=0;i<n;i++){
  		let totalBill;
	  	let check = false;
	  	while(!check){
	  		totalBill = prompt('enter the total bil amount');
			check = confirm('u have entered : '+totalBill);

	  	}
		//total bill test cases : 124 , 48 and 268 

		let tip;
		if(totalBill<50){
			tip = totalBill*0.20;
		}
		else if(totalBill<200 && totalBill>50){
			tip = totalBill*0.15;
		}
		else{
			tip = totalBill*0.10;
		}

		arr1[i] = tip;
		arr2[i] = Number(tip)+Number(totalBill);

		//console.log(arr1+ ' '+arr2);
  }
  	document.getElementById('test5').innerHTML += " tip only  : " + arr1.toString() + " <br> with tip : "+ arr2.toString();

}


function question6() {

	const mark = {

		fullname1:"mark",
		mass1:39,
		height1:45,
		bmi:function(){return document.getElementById('test6').innerHTML+="bmi : "+ this.mass1/(this.height1*this.height1) +"<br>";}

	};

	const john = {

		fullname2:"john",
		mass2:55,
		height2:50,
		bmi:function(){return document.getElementById('test6').innerHTML+="bmi : "+this.mass2/(this.height2*this.height2) +"<br>";}

	};

	do{
	mark.bmi();
	john.bmi();
	}while(1>3);


	if (mark.bmi() > john.bmi()) {
		console.log(mark.fullname1+' '+mark.bmi());
	}else if(mark.bmi() == john.bmi()){
		console.log(mark.fullname1+' '+mark.bmi());
		console.log(john.fullname2+' '+john.bmi());
	} 
	else {
		console.log(john.fullname2+' '+john.bmi());
	}



	
}



function question10() {
	document.getElementById('test10').innerHTML='number : '+32243;
	let number = 32243;
	let temp=0;
	while(number>0){
		let r = parseInt(number%10);
		temp = parseInt(temp*10+r);
		number=parseInt(number/10);
		console.log(r + " "+ temp+" "+number);
	}

	document.getElementById('test10').innerHTML+='  number : '+temp;


	
}



function question11() {
	let string = prompt('enter a word : ');
	let len = string.length;
	let result="";
	for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            result= 'It is not a palindrome';
        }
    }
    result= 'It is a palindrome';

document.getElementById('test11').innerHTML='word : '+string+" "+result;
	
}


function question13() {

	let str = prompt('enter a word !!').trim();

	 let combinations = []
    for(let i = 0 ;i < str.length; i++) {
        for( let j = i + 1; j < str.length + 1; j++) {
            combinations.push(str.slice(i , j))
        }
    }

	document.getElementById('test13').innerHTML='word is : '+str+" <br>combination are :  "+combinations.toString();
}


function question14() {
	let string = prompt('enter a word : ');
	
	let result= string.split('').sort().join('');
	document.getElementById('test14').innerHTML='word is : '+string+" : "+result;
}


function question15() {
	
let string = prompt('enter a sentence : ');
let array1 = string.split(' ');
let newarray1 = [];
let result="";

  for(let x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  result= newarray1.join(' ');

  document.getElementById('test15').innerHTML='orginal was : '+string +'  After : '+result;



}

function question16() {
	
let string = prompt('enter a sentence : ');

let result="";
let arr = string.split(' ');
for(let i =0 ;i<arr.length;i++){
	if(result.length<arr[i].length){
			result=arr[i];
	}

}

document.getElementById('test16').innerHTML='original was : '+string+' <br> largest was : '+result;
 

}

function question17() {
	
let string = prompt('enter a sentence : ');

let result="";

 let vowel_list = 'aeiouAEIOU';
 let vcount = 0;
  
  for(let x = 0; x < string.length ; x++)
  {
    if (vowel_list.indexOf(string[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  document.getElementById('test17').innerHTML='count is :'+vcount;
 

}




function question18() {
	
let number = parseInt(prompt('enter a number : '));
let result=false;
if(number==0 || number==1){result=false;}
else if(number==2||number==3){result=true;}
else{
	for (let i = 3; i < number; i++) {
		if(number%i===0){result = false;break;}
		result=true;
		
	}
}
document.getElementById('test18').innerHTML=result;


}


function addmore(){

let x = document.createElement('p');
x.innerHTML = 'this is test para 2';
document.getElementById('id1').appendChild(x);
document.getElementsByClassName('id1')[0].style.color = 'red';

}

function add(){

let row = document.createElement("tr");

let column1 = document.createElement("td");

const column1text = document.createTextNode(`Row Column 1`);
column1.appendChild(column1text);

let column2 = document.createElement("td");
const column2text = document.createTextNode(`Row Column 2`);
column2.appendChild(column2text);

let column3 = document.createElement("td");
const column3text = document.createTextNode(`Row Column 3`);
column3.appendChild(column3text);


row.appendChild(column1);

row.appendChild(column2);
row.appendChild(column3);
document.querySelector("table").appendChild(row);




}







