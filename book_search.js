/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };

    result.SearchTerm = searchTerm;
    
    var leftSearch = " " + searchTerm;
    var rightSearch = searchTerm + " ";



    for (var i = 0; i < scannedTextObj[0].Content.length; i++){

        // Split into words, then compare
        words = scannedTextObj[0].Content[i].Text.split(" ");

        // Loop for each word in the line (also allows for multiple search terms in one line)
        for (var j = 0; j < words.length; j++){
            
            // Compare to word striped of punctuation and whitespace
            if(words[j].replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').trim().localeCompare(searchTerm) == 0) {

                //builds result to add and pushes to Result
                var toAdd = {
                                "ISBN": scannedTextObj[0].ISBN,
                                "Page": scannedTextObj[0].Content[i].Page,
                                "Line": scannedTextObj[0].Content[i].Line
                            };
                result.Results.push(toAdd);
            }
        }


        /** This code was used until my testing showed that substrings within words
         * allowed for undesired multiple occurences. This included the "the" inside
         * of "then". I found this during testing by originally thinking this was 
         * wanted, testing with "e", but then realized the included test1 would
         * have reached the "the" inside of "then". I then refacored.
         */
        // if(scannedTextObj[0].Content[i].Text.includes(searchTerm)){

        //     console.log(scannedTextObj[0].Content[i].Text.split(searchTerm).length-1);
        //     for (var j = 0; j < scannedTextObj[0].Content[i].Text.split(searchTerm).length-1; j++){
        //         var toAdd = {
        //             "ISBN": scannedTextObj[0].ISBN,
        //             "Page": scannedTextObj[0].Content[i].Page,
        //             "Line": scannedTextObj[0].Content[i].Line
        //         };

        //         result.Results.push(toAdd);
        //     }

            
        // }
    }
    
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

//PERSONAL OUTPUT
const twentyLeaguesZebra = {
    "SearchTerm": "the",
    "Results": []
}

const twentyLeaguesProfound = {
    "SearchTerm": "profound",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const twentyLeaguesI = {
    "SearchTerm": "I",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}


// const twentyLeaguesE = {
//     "SearchTerm": "I",
//     "Results": [
//         {
//             "ISBN": "9780000528531",
//             "Page": 31,
//             "Line": 8
//         },
//         {
//             "ISBN": "9780000528531",
//             "Page": 31,
//             "Line": 8
//         },
//         {
//             "ISBN": "9780000528531",
//             "Page": 31,
//             "Line": 8
//         },
//         {
//             "ISBN": "9780000528531",
//             "Page": 31,
//             "Line": 8
//         },
//         {
//             "ISBN": "9780000528531",
//             "Page": 31,
//             "Line": 9
//         },
//         {
//             "ISBN": "9780000528531",
//             "Page": 31,
//             "Line": 9
//         },
//         {
//             "ISBN": "9780000528531",
//             "Page": 31,
//             "Line": 9
//         },
//         {
//             "ISBN": "9780000528531",
//             "Page": 31,
//             "Line": 9
//         },
//         {
//             "ISBN": "9780000528531",
//             "Page": 31,
//             "Line": 9
//         },
//         {
//             "ISBN": "9780000528531",
//             "Page": 31,
//             "Line": 10
//         },
//         {
//             "ISBN": "9780000528531",
//             "Page": 31,
//             "Line": 10
//         },
//         {
//             "ISBN": "9780000528531",
//             "Page": 31,
//             "Line": 10
//         },
//         {
//             "ISBN": "9780000528531",
//             "Page": 31,
//             "Line": 10
//         },
//         {
//             "ISBN": "9780000528531",
//             "Page": 31,
//             "Line": 10
//         },
//         {
//             "ISBN": "9780000528531",
//             "Page": 31,
//             "Line": 10
//         },
//         {
//             "ISBN": "9780000528531",
//             "Page": 31,
//             "Line": 10
//         },
//         {
//             "ISBN": "9780000528531",
//             "Page": 31,
//             "Line": 10
//         },
//         {
//             "ISBN": "9780000528531",
//             "Page": 31,
//             "Line": 10
//         },
//         {
//             "ISBN": "9780000528531",
//             "Page": 31,
//             "Line": 10
//         }
//     ]
// }

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}


/**PERSONAL TESTS */

// Test no return
const test3result = findSearchTermInBooks("zebra", twentyLeaguesIn); 
if (test3result.Results.length == 0) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesZebra.Results.length);
    console.log("Received:", test3result.Results.length);
}

//Test one return
const test4result = findSearchTermInBooks("profound", twentyLeaguesIn); 
if (test4result.Results.length == 1) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", twentyLeaguesProfound.Results.length);
    console.log("Received:", test4result.Results.length);
}

//Case Sensative
const test5result = findSearchTermInBooks("I", twentyLeaguesIn); 
if (test5result.Results.length == 1) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", twentyLeaguesI.Results.length);
    console.log("Received:", test5result.Results.length);
}

//Duplicates on each line

//NOT NECESSARY, REALIZED MUST BE FULL WORD
// console.log("Hello");
// const test6result = findSearchTermInBooks("e", twentyLeaguesIn); 
// console.log("hello");
// if (test6result.Results.length == 19) {
//     console.log("PASS: Test 6");
// } else {
//     console.log("FAIL: Test 6");
//     console.log("Expected:", twentyLeaguesE.Results.length);
//     console.log("Received:", test6result.Results.length);
// }