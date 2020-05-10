// const journalEntry = {
//     date:"04/17/2020",
//     conceptsCovered: "lab day",
//     entry: "work on journals during lab day",
//     mood: "Happy",
// }

// const diary = []
// console.log(diary)
// diary.push(journalEntry)



    const journalEntry1 = {
    date: "04/06/2020",
    conceptsCovered: "School policies",
    entry: "We learned that you have to show up to class, and you can't be a jerk.",
    mood: "Happy",
};
const journalEntry2 = 
{
    date: "04/07/2020",
    conceptsCovered: "html refresh",
    entry: "We went over html tags and how to make html more reader friendly.",
    mood: "Happy",
};
const journalEntry3 = 
{
    date: "04/08/2020",
    conceptsCovered: "html and css refresh",
    entry: "We went through some CSS tricks such as bootstrap and how to steal other code. ",
    mood: "Happy",
};
const journalEntry4 = 
{
    date: "04/09/2020",
    conceptsCovered: "Group Project",
    entry: "We split into groups and started working on a celebrity tribute page",
    mood: "Happy",
};
const journalEntry5 = 
{
    date: "04/10/2020",
    conceptsCovered: "github and branches",
    entry: "We learned how to protect the master by making branches, peer reviewing, and merging",
    mood: "tired",
};

const journalEntryArray = [];
console.log(journalEntryArray);

journalEntryArray.push(journalEntry1);
journalEntryArray.push(journalEntry2);
journalEntryArray.push(journalEntry3);
journalEntryArray.push(journalEntry4);
journalEntryArray.push(journalEntry5);



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
    const moodValue = document.getElementById("mood");
    // console.log(dateEntry, conceptsCovered, journalEntryField, moodValue.value);
    })









