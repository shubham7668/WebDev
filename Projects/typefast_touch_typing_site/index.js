
const arr = ["Learning the meaning of the many words that make up the English language can seem overwhelming.", 
"Simply type the word into the sentence generator and we'll do the rest.", "Scroll through the sentence list to see the sentence",
"When you've discovered just the right sentence, you can copy it to your clipboard", 
"There are many types of sentences, all with different structures and complexities.", 
"Understand how words are used within the sentence"];
 


const button = document.querySelector("#start");

let startTime, endTime; 

// let msg = text.innerHTML;

function random_gen() {
    
let mywords = document.querySelector("#ip"); 
  let text = document.querySelector("#insert");

   if(button.innerHTML == 'Start') 
   { 
    //  let go =  document.getElementsByName('para')[0];
    //   go.value = '';
    //  go.placeholder = "Start Typing Here!";
    // mywords.setAttribute('placeholder', 'click Start to start typing');
     mywords.disabled = false;
    // //  if(mywords.value != ' ')
    //    let holder =  mywords.getAttribute('placeholder');
    //    holder.value = 'click Start to Start typing';
       

        button.innerHTML = "Done";
        text.innerHTML =
        arr[Math.floor(Math.random() * arr.length)];

        let date = new Date();
        startTime = date.getTime();
   }
   else
   {   
       text = document.querySelector("#insert");
       mywords.disabled = true;
       button.innerHTML = 'Start';
       let date = new Date();
       endTime = date.getTime();
       let totalTime = (endTime - startTime)/1000;
       
       let str = mywords.value;
       let counter = 0;

       const count_words = (str)=>{
        //   for(let i in str)
        //   {
        //       if(str[i] == ' ')
        //       counter++;
        //   }
        let count_word = str.split(" ").length;
          return count_word;
       }

       let words = count_words(str);

       let speed =  Math.round((words/totalTime)*60); 

      const  compareStr = (str1 , str2)=> {
        
          let arr1 = str1.split(" ");
          let arr2 = str2.split(" ");

          arr1.forEach(function(item, index){
              if(item == arr2[index])
                counter++;
                console.log(counter);
        
          });
        }
        
        compareStr(text.innerText , str);

  text.innerHTML = `You typed at ${speed} words per minute and total words typed are ${words} in ${totalTime} seconds. You typed ${counter} correct words and ${text.innerText.split(" ").length - counter} incorrect words `;



  mywords.value = ' ';



   }
}

button.addEventListener('click', random_gen);
