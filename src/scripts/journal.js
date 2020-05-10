// const journalEntry = {
//     date:"04/17/2020",
//     conceptsCovered: "lab day",
//     entry: "work on journals during lab day",
//     mood: "Happy",
// }

// const diary = []
// console.log(diary)
// diary.push(journalEntry)



//     const journalEntry1 = {
    
// };
// const journalEntry2 = 
// ;
// const journalEntry3 = 
// ;
// const journalEntry4 = 
// ;
// const journalEntry5 = 
// ;

// const journalEntryArray = [];
// console.log(journalEntryArray);

// journalEntryArray.push(journalEntry1);
// journalEntryArray.push(journalEntry2);
// journalEntryArray.push(journalEntry3);
// journalEntryArray.push(journalEntry4);
// journalEntryArray.push(journalEntry5);



const makeJournalEntryComponent = (journalEntry) => {
    //create your own html structure for a journal entry
    return `
    <section class ="single-entry">
    <h2>${journalEntry.date}</h2>
    <p>${journalEntry.conceptsCovered}</p>
    <p>${journalEntry.entry}</p>
    <p>${journalEntry.mood}</p>
    </section>
    `
};
// console.log(makeJournalEntryComponent(journalEntryArray[0]))
//This prints all journal entries to the dom
for(i = 0; i <journalEntryArray.length; i++) {
    let domEnter = makeJournalEntryComponent(journalEntryArray[i]);
    document.querySelector(".entryLog").innerHTML += domEnter
};

// renderJournalEntries(journalEntryArray)

document.querySelector("#submit-btn").addEventListener("click", function(){
    // console.log("you clicked this button");
    const dateEntry = document.querySelector("#journalDate").value;
    const conceptsCovered = document.querySelector("#conceptsCovered").value;
    const journalEntryField = document.querySelector("#journalEntry").value;
    const moodValue = document.getElementById("mood").value;
    // console.log(dateEntry, conceptsCovered, journalEntryField, moodValue);

    //build into an object
    let newJournalEntryObject = {
        date: dateEntry,
        conceptsCovered: conceptsCovered,
        entry: journalEntryField,
        mood: moodValue
    };
    console.log(newJournalEntryObject);
    journalEntryArray.push(newJournalEntryObject);
    console.log(journalEntryArray)
    // makeJournalEntryComponent()

    //use loop again to print new journal entry to dom. works but is it the best way?
    for(i = 0; i <journalEntryArray.length; i++) {
        let domEnter = makeJournalEntryComponent(journalEntryArray[i]);
        document.querySelector(".entryLog").innerHTML += domEnter
    };
    });
    
    









