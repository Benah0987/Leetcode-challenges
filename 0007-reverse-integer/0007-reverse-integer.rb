def reverse(x)
    int_max = 2**31 - 1
    int_min = -2**31

    # Handle negative numbers
    if x < 0
        sign = -1
        x = x.abs
    else
        sign = 1
    end

    reversed_x = 0

    while x != 0
        # Pop the last digit
        pop = x % 10
        x = x / 10

        # Check for overflow
        if reversed_x > (int_max - pop) / 10
            return 0
        end

        reversed_x = reversed_x * 10 + pop
    end

    return sign * reversed_x
end