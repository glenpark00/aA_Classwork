require_relative '../piece'

class Pawn < Piece

  def at_start_row?
    start_row = (color == :black ? 1 : 6)
    pos[0] == start_row
  end

  def forward_dir
    color == :black ? 1 : -1 
  end

  def forward_steps
    at_start_row? ? [[forward_dir, 0], [2 * forward_dir, 0]] : [[forward_dir, 0]]
  end

  def side_attacks
    diagonal_moves = [[forward_dir, 1], [forward_dir, -1]]
    temp = diagonal_moves.map { |move| [self.pos[0] + move[0], self.pos[1] + move[1]] }
    result = temp.select { |pos| blocked(pos) && (self.color != self.board[pos].color)} 
  end

  def move_dirs
    forward_moves = forward_steps.map { |move| [self.pos[0] + move[0], self.pos[1] + move[1]] }
    forward_moves.reject! { |pos| blocked(pos) }
    forward_moves + side_attacks
  end

  def moves
    move_dirs
  end

  def symbol
    color == :black ? '♟' : '♙'
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