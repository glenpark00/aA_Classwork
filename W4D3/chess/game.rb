require_relative "board"
require_relative "display"

class Game
  attr_reader :display, :board

  def initialize
    @board = Board.new
    @display = Display.new(@board)
  end

  def play
    system("clear")
    display.render
    while true
      input = display.cursor.get_input

      if !input.nil? 
        if display.cursor.selected
          start_pos = input
        else
          end_pos = input
          board.move_piece(start_pos, end_pos)
        end
      end
      system("clear")
      display.render
      # p "black is in check" if board.in_check?(:black)
    end
  end

end

g = Game.new
g.play