# @param {Integer} x
# @return {Integer}
def my_sqrt(x)
    return x if x < 2  # Quick return for small values
    
    left, right = 1, x / 2
    while left <= right
        mid = (left + right) / 2
        squared = mid * mid
        
        if squared == x
            return mid
        elsif squared < x
            left = mid + 1
        else
            right = mid - 1
        end
    end
    
    # When the loop exits, 'right' is the largest integer whose square is <= x
    return right
end