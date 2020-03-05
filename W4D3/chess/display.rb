require_relative "cursor"
require_relative "board"
require 'colorize'

class Display
  attr_reader :cursor

  def initialize(board)
    @board = board
    @cursor = Cursor.new([0, 0], board)
  end

  def render
    puts "   #{(0..7).to_a.join("  ")}"
    @board.rows.each_with_index do |row, i|
      print "#{i}  "
      row.each_with_index do |ele, j|
        if [i,j] == @cursor.cursor_pos
          if @cursor.selected
            print "#{ele.symbol.colorize(:background => :green)}  "
          else
            print "#{ele.symbol.colorize(:background => :blue)}  "
          end
        else
          print "#{ele.symbol}  "
        end
      end
      print "\n"
    end
  end

end

