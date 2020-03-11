require_relative 'pieces/rook'
require_relative 'pieces/bishop'
require_relative 'pieces/queen'
require_relative 'pieces/nullpiece'
require_relative 'pieces/king'
require_relative 'pieces/knight'
require_relative 'pieces/pawn'

class Board
  attr_reader :sentinel, :rows

  def initialize
    @sentinel = NullPiece.instance
    @rows = Array.new(8) { Array.new(8, @sentinel) }
    populate
  end

  def populate
    pos_hash = {
      Rook => [[0, 0], [0, 7]],
      Knight => [[0, 1], [0, 6]],
      Bishop => [[0, 2], [0, 5]],
      Queen => [[0, 3]],
      King => [[0, 4]],
      Pawn => (0..7).map { |i| [1, i] }
    }

    pos_hash.each do |k, v|
      v.each do |pos|
        white_pos = (k == Pawn ? [pos[0] + 5, pos[1]] : [pos[0] + 7, pos[1]])

        black_piece = k.new(:black, self, pos)
        self[black_piece.pos] = black_piece

        white_piece = k.new(:white, self, white_pos)
        self[white_piece.pos] = white_piece
      end
    end
  end

  def [](pos)
    @rows[pos[0]][pos[1]]
  end

  def []=(pos, val)
    @rows[pos[0]][pos[1]] = val
  end

  def move_piece(start_pos, end_pos)
    raise ArgumentError.new("No piece at #{start_pos}") if self[start_pos].nil?
    raise ArgumentError.new("Cannot move to #{end_pos}") unless valid_pos?(end_pos)

    curr_piece = self[start_pos]
    poss_moves = curr_piece.moves
    if poss_moves.include?(end_pos)
      self[start_pos] = sentinel
      self.add_piece(curr_piece, end_pos)
    end
  end

  def valid_pos?(pos)
    row = pos[0]
    col = pos[1]
    if row > 7 || row < 0 || col > 7 || col < 0
      return false
    end
    true
  end

  def add_piece(piece, pos)
    piece.pos = pos
    self[pos] = piece
  end

#   def in_check?(color)
#     white_pieces_moves = []
#     king_pos = nil
#     self.rows.each do |row|
#       row.each do |ele|
#         king_pos = ele.pos if ele.is_a?(King) && ele.color == color
#         white_pieces_moves += ele.moves if ele.color == (color == :black ? :white : :black)
#       end
#     end
#     white_pieces_moves.include?(king_pos)
#   end
end

# load 'board.rb'
# b = Board.new

expect { two_sum('str') }.to raise_error
