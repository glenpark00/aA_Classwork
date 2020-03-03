require_relative 'tic_tac_toe'


class TicTacToeNode

  attr_reader :board, :next_mover_mark
  attr_accessor :prev_move_pos

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
    if board.over? 
      if board.winner != evaluator
        true
      else
        false
      end
    end
    if evaluator == next_mover_mark 
      self.children.all? do |child|
        child.losing_node?(evaluator)
      end
    else
      self.children.any? do |child|
        child.losing_node?(evaluator)
      end
    end
  end

  def winning_node?(evaluator)
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    possible_moves = []
    
    @board.rows.each_with_index do |row, row_i|
      row.each_with_index do |box, col_i|
        if @board.empty?([row_i, col_i])
          board_copy = @board.dup
          board_copy[[row_i, col_i]] = next_mover_mark
          possible_moves << TicTacToeNode.new(board_copy, (@next_mover_mark == :x ? :o : :x), [row_i, col_i])
        end
      end
    end
    possible_moves 
  end
  
end
