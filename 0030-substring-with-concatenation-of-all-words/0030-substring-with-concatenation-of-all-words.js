/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (words.length === 0 || s.length === 0) {
        return [];
    }
// initialized the variables
    const wordLen = words[0].length;
    const wordCount = words.length;
    const wordMap = {}; 

    // Create a map to store the count of each word in words
    for (const word of words) {
        if (wordMap[word] === undefined) {
            wordMap[word] = 1;
        } else {
            wordMap[word]++;
        }
    }

    const result = [];

    // Iterate through all possible starting indices of substring
    for (let i = 0; i < wordLen; i++) {
        let left = i, right = i;
        let currentMap = {};

        while (right + wordLen <= s.length) {
            const currentWord = s.substring(right, right + wordLen);
            right += wordLen;

            // If the current word is not in the wordMap, reset the window
            if (wordMap[currentWord] === undefined) {
                currentMap = {};
                left = right;
            } else {
                // Update the currentMap
                if (currentMap[currentWord] === undefined) {
                    currentMap[currentWord] = 1;
                } else {
                    currentMap[currentWord]++;
                }

                // Remove words from the left of the window if there are too many
                while (currentMap[currentWord] > wordMap[currentWord]) {
                    const leftWord = s.substring(left, left + wordLen);
                    currentMap[leftWord]--;
                    left += wordLen;
                }

                // If the window size equals the total length of words, add the index to the result
                if (right - left === wordLen * wordCount) {
                    result.push(left);
                }
            }
        }
    }

    return result;
};