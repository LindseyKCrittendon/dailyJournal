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

const diary = [];
console.log(diary);

diary.push(journalEntry1);
diary.push(journalEntry2);
diary.push(journalEntry3);
diary.push(journalEntry4);
diary.push(journalEntry5);

const makeJournalEntryComponent = (journalEntry) => {
    //create your own html structure for a journal entry
    return `
    <section class ="single-entry">
    <h1>${journalEntry.date}</h1>
    <br>
    <h3>${journalEntry.concept}</h3>
    <p>${journalEntry.entry}</p>
    <h4>${journalEntry.mood}</h4>
    </section>
    `
};

// for(singleEntry) {
//     let domEnter = makeJournalEntryComponent(singleEntry)
//     document.querySelector(".entryLog").innerHTML += domEnter
// };

// renderJournalEntries(diary)

