require_relative 'tree_node'

class KnightPathFinder

    def initialize(starting_pos)
        @root_node = PolyTreeNode.new(starting_pos)
        @considered_positions = [starting_pos]
    end

    def self.valid_moves(pos)
        return false if pos.sum > 3 || pos.sum < -3
        # count = pos.count { |ele| [-2,-1,1,2].include?(ele) }
        # count == 2
        possible_moves = [[2, 1],[2, -1],[-2, 1],[-2, -1],[1, 2],[1, -2],[-1, 2],[-1, -2]]
        valid_moves = []
        possible_moves.each do |move|
            new_pos = [move[0] + pos[0], move[1] + pos[1]]
            valid_moves << new_pos if new_pos.all? { |idx| idx < 7 && idx > 0 }
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
        until queue.empty
            node = queue.shift
            children_pos = node.new_move_positions
            children_pos.each do |child_pos|
                child = PolyTreeNode.new(child_pos)
                node.parent = child
                queue << child
            end
        end
    end

end