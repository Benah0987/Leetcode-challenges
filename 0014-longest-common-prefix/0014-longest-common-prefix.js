/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < prefix.length; j++) {
            if (strs[i][j] !== prefix[j]) {
                prefix = prefix.slice(0, j);
                break;
            }
        }
    }

    return prefix;
};
