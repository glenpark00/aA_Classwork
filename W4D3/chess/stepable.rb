module Stepable
  def moves
    move_diffs
  end

  def move_diffs
    raise NoMethodError.new("Must implement move_diffs")
  end

  def blocked(check_pos)
    piece = self.board[check_pos]
    if piece.is_a?(NullPiece)
      return false
    else
      return true
    end
  end
end