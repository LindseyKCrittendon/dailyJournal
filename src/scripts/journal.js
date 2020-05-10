fetch("http://localhost:3000/entries")
  .then((entries) => entries.json())
  .then((parsedEntries) => {
    console.log(parsedEntries);
   parsedEntries.forEach((entryObject) => {
       console.log(entryObject);
       const htmlString = `<section class ="single-entry">
       <h2>${entryObject.date}</h2>
       <p>${entryObject.conceptsCovered}</p>
       <p>${entryObject.entry}</p>
       <p>${entryObject.mood}</p>
       </section>`;
       document.querySelector(".entryLog").innerHTML += htmlString;
   }) 
})



// renderJournalEntries(journalEntryArray)

// document.querySelector("#submit-btn").addEventListener("click", function(){
    // console.log("you clicked this button");
    // const dateEntry = document.querySelector("#journalDate").value;
    // const conceptsCovered = document.querySelector("#conceptsCovered").value;
    // const journalEntryField = document.querySelector("#journalEntry").value;
    // const moodValue = document.getElementById("mood").value;
    // console.log(dateEntry, conceptsCovered, journalEntryField, moodValue);

    //build into an object
    // let newJournalEntryObject = {
    //     date: dateEntry,
    //     conceptsCovered: conceptsCovered,
    //     entry: journalEntryField,
    //     mood: moodValue
    // };
    // console.log(newJournalEntryObject);
    // journalEntryArray.push(newJournalEntryObject);
    // console.log(journalEntryArray)
    // makeJournalEntryComponent()

    //use loop again to print new journal entry to dom. works but is it the best way?
    // for(i = 0; i <journalEntryArray.length; i++) {
    //     let domEnter = makeJournalEntryComponent(journalEntryArray[i]);
    //     document.querySelector(".entryLog").innerHTML += domEnter
    // };
    // });
    
    









