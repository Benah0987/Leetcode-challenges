class TreeNode
  attr_accessor :val, :left, :right
  def initialize(val = 0, left = nil, right = nil)
    @val = val
    @left = left
    @right = right
  end
end

def has_path_sum(root, target_sum)
  return false if root.nil?

  # Check if it's a leaf node
  if root.left.nil? && root.right.nil?
    return target_sum == root.val
  end

  # Recursively check left and right subtrees
  left_has_path = has_path_sum(root.left, target_sum - root.val)
  right_has_path = has_path_sum(root.right, target_sum - root.val)

  return left_has_path || right_has_path
end