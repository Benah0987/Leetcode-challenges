# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode[]} lists
# @return {ListNode}
class ListNode
  attr_accessor :val, :next
  def initialize(val = 0, _next = nil)
    @val = val
    @next = _next
  end
end

def merge_k_lists(lists)
  return nil if lists.nil? || lists.empty?

  # Initialize a min heap
  min_heap = PriorityQueue.new

  # Push the first element of each list into the min heap
  lists.each do |list|
    min_heap.push(list) unless list.nil?
  end

  # Dummy node to simplify code
  dummy = ListNode.new(0)
  current = dummy

  # Continue until the min heap is empty
  while !min_heap.empty?
    # Pop the smallest element from the min heap
    smallest = min_heap.pop
    current.next = smallest
    current = current.next

    # Move to the next node in the popped list
    min_heap.push(smallest.next) unless smallest.next.nil?
  end

  return dummy.next
end

# Priority Queue class for min heap
class PriorityQueue
  def initialize
    @queue = []
  end

  def push(node)
    @queue.push(node)
    heapify_up
  end

  def pop
    return nil if empty?

    # Swap the first and last elements
    @queue[0], @queue[-1] = @queue[-1], @queue[0]
    # Pop the last element (smallest) and heapify down
    smallest = @queue.pop
    heapify_down

    return smallest
  end

  def empty?
    @queue.empty?
  end

  private

  def heapify_up
    current_index = @queue.length - 1

    while current_index.positive?
      parent_index = (current_index - 1) / 2
      break if @queue[parent_index].val <= @queue[current_index].val

      # Swap with the parent if the current node is smaller
      @queue[parent_index], @queue[current_index] = @queue[current_index], @queue[parent_index]
      current_index = parent_index
    end
  end

  def heapify_down
    current_index = 0

    while (left_child_index = 2 * current_index + 1) < @queue.length
      right_child_index = left_child_index + 1
      min_child_index = right_child_index < @queue.length && @queue[right_child_index].val < @queue[left_child_index].val ? right_child_index : left_child_index

      break if @queue[current_index].val <= @queue[min_child_index].val

      # Swap with the smallest child if the current node is larger
      @queue[current_index], @queue[min_child_index] = @queue[min_child_index], @queue[current_index]
      current_index = min_child_index
    end
  end
end

# Example usage:
lists = [
  ListNode.new(1, ListNode.new(4, ListNode.new(5))),
  ListNode.new(1, ListNode.new(3, ListNode.new(4))),
  ListNode.new(2, ListNode.new(6))
]

result = merge_k_lists(lists)

# Print the result
while result
  print "#{result.val} -> "
  result = result.next
end
