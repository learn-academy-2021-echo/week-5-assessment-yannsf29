// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.


describe("codedmessage"), () => {
  it("takes in a string and returns a coded message"), () => {
    const secretCodeWord1 = "Lackadaisical"
    // // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // // Expected output: "3cc3ntr1c"
expect(codedmessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l"),
expect(codedmessage(secretCodeWord2)).toEqual("G0bbl3dyg00k"),
expect(codedmessage(secretCodeWord3)).toEqual("3cc3ntr1c");
  });
});


// b) Create the function that makes the test pass.

const hackerSpeak = (statement) => {
  // I am creating a function that will take a string and convert each letters selected with a number
    const leet = {'a': 4, 'b': 3, 'i': 1, 'o': 0}
    const speak = letter => leet.hasOwnProperty(letter) ? leet[letter] : letter

    return statement.split('').map(speak).join('')
// the .split will convert a string into an array, .map will do something to each elelmet of the array and the .join will bring it back into a string
}




// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.


describe("particularletter", () => {
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter"), () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    // const letterA = "a"
    // // Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    // const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    expect(particularletter(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"]),
      expect(particularletter(arrayOfWords2)).toEqual(["Cherry", "Blueberry", "Peach"]);
  });
});


// b) Create the function that makes the test pass.

def arrayOfWords1(array, thing_to_find)
  array.select { |word| word.include? thing_to_find }
// .select will go through the array and select the matching input.   
end







// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullhouse", () => {
  it("takes in an array of 5 numbers and determines whether or not the array is a full house"), () => {
    const hand1 = [5, 5, 5, 3, 3]
    // // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    expect(fullhouse(hand1)).toEqual(true),
    expect(fullhouse(hand2)).toEqual(false),
    expect(fullhouse(hand3)).toEqual(false);
  });
});


// b) Create the function that makes the test pass.



const fullHouseOrNot = (arrayOfNums) => {
  let occurances = 0;
  if ([...new Set(arrayOfNums)].length == 2 && arrayOfNums.length === 5) {
    arrayOfNums.forEach((num) =>
      arrayOfNums[0] === num ? (occurances += 1) : occurances
    );
    return occurances == 2 || occurances == 3;
  } else {
    return false;
  }
};
