class Solution(object):
    def combinationSum2(self, candidates, target):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        def backtrack(start, target, path):
            if target == 0:
                result.append(path[:])
                return
            for i in range(start, len(candidates)):
                if i > start and candidates[i] == candidates[i-1]:
                    continue  # Skip duplicates to avoid duplicate combinations
                if candidates[i] > target:
                    continue  # Skip if the current candidate is too large
                path.append(candidates[i])
                backtrack(i + 1, target - candidates[i], path)
                path.pop()
        
        candidates.sort()  # Sort the candidates to handle duplicates
        result = []
        backtrack(0, target, [])
        return result