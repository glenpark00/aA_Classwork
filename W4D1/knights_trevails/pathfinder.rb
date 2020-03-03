require_relative 'tree_node'

class KnightPathFinder
    attr_reader :root_node

    

    def initialize(starting_pos)
        @root_node = PolyTreeNode.new(starting_pos)
        @considered_positions = [starting_pos]
    end

    def self.valid_moves(pos)
        possible_moves = [[2, 1],[2, -1],[-2, 1],[-2, -1],[1, 2],[1, -2],[-1, 2],[-1, -2]]
        valid_moves = []
        possible_moves.each do |move|
            new_pos = [move[0] + pos[0], move[1] + pos[1]]
            valid_moves << new_pos if new_pos.all? { |idx| idx <= 7 && idx >= 0 }
        end
        valid_moves
    end

    def new_move_positions(pos)
        # Call ::valid_moves; filter out positions in @considered_positions; add remaining pos to considered; return new pos
        valid_pos = KnightPathFinder.valid_moves(pos)
        valid_pos.reject! {|pos| @considered_positions.include?(pos)}
        @considered_positions += valid_pos
        valid_pos
    end

    def build_move_tree
        queue = [@root_node]
        until queue.empty?
            node = queue.shift
            children_pos = self.new_move_positions(node.value)
            children_pos.each do |child_pos|
                child = PolyTreeNode.new(child_pos)
                child.parent = node
                queue << child
            end
        end
    end

    def find_path(end_pos)
        # BFS
        if end_pos.sum < 5
            end_node = nil
            q = [@root_node]
            
            until q.empty?
                node = q.shift
                end_node = node if node.value == end_pos
                q += node.children
            end
            trace_path_back(end_node)
        else
        # DFS
            node = @root_node.dfs(end_pos)
            trace_path_back(node)
        end
    end

    def trace_path_back(node)
        return nil if node.nil? 
        path = [node.value]
        until node.parent.nil?
            node = node.parent
            path.unshift(node.value)
        end

        path
    end

    

end

starting = Time.now
x = KnightPathFinder.new([0,0])
x.build_move_tree
x.find_path([3,6])

p x.find_path([1, 2]) # => [[0, 0], [1, 2], [2, 4], [3, 6], [5, 5], [7, 6]]
p x.find_path([3, 0]) # => [[0, 0], [1, 2], [2, 0], [4, 1], [6, 2]]
p x.find_path([2, 1])
p x.find_path([5, 7])
p x.find_path([6, 6])
p x.find_path([7, 6])
ending = Time.now
elapsed = ending - starting
p elapsed