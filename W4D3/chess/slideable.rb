# still needs to implement same color block and diff color eat.

module Slideable
  HORIZONTAL_DIRS = [[1, 0], [0, 1], [-1, 0], [0, -1]].freeze
  DIAGONAL_DIRS = [[1, 1], [1, -1], [-1, 1], [-1, -1]].freeze

  def horizontal_dirs
    horizontal_moves = []
    HORIZONTAL_DIRS.each do |dir|
      horizontal_moves += grow_unblocked_moves_in(dir)
    end
    horizontal_moves
  end

  def diagonal_dirs
    diagonal_moves = []
    DIAGONAL_DIRS.each do |dir|
      diagonal_moves += grow_unblocked_moves_in(dir)
    end
    diagonal_moves
  end

  def grow_unblocked_moves_in(dir)
    possible_moves = []
    start_pos = self.pos
    curr_pos = [start_pos[0] + dir[0], start_pos[1] + dir[1]]
    while self.board.valid_pos?(curr_pos)
      if blocked(curr_pos)
        if self.color == self.board[curr_pos].color
          break
        else
          possible_moves << curr_pos
          break
        end
      else
        possible_moves << curr_pos
        curr_pos = [curr_pos[0] + dir[0], curr_pos[1] + dir[1]]
      end
    end
    possible_moves
  end

  def blocked(check_pos)
    piece = self.board[check_pos]
    if piece.is_a?(NullPiece)
      return false
    else
      return true
    end
  end

  def moves
    move_dirs
  end

  def move_dirs
    raise NoMethodError.new("Must implement move_dirs")
  end
end