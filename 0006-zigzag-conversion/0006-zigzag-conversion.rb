# @param {String} s
# @param {Integer} num_rows
# @return {String}
def convert(s, num_rows)
#     if the num of rows is one or the length is less than 
  return s if num_rows == 1 || s.length <= num_rows

  result = Array.new(num_rows) { '' }
#     introduce a variable to store the rows
  current_row = 0
  direction = 1 # 1 for down, -1 for up

  s.each_char do |char|
    result[current_row] += char
    current_row += direction

    if current_row == 0 || current_row == num_rows - 1
      direction *= -1
    end
  end

  result.join('')
end

