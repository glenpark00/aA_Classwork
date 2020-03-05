require_relative '../piece'
require_relative '../stepable'

class Knight < Piece
  DIRS = [[2, 1], [2, -1], [1, 2], [1, -2], [-2, 1], [-2, -1], [-1, 2], [-1, -2]]

  include Stepable
  def move_diffs
    start_pos = self.pos
    possible_moves = []
    DIRS.each do |dir|
      curr_pos = [start_pos[0] + dir[0], start_pos[1] + dir[1]]
      if self.board.valid_pos?(curr_pos)
        unless blocked(curr_pos)
          possible_moves << curr_pos
        else
          possible_moves << curr_pos unless self.color == self.board[curr_pos].color
        end
      end
    end
    possible_moves
  end
  
  def symbol
    color == :black ? '♞' : '♘'
  end

end