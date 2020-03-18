require 'singleton'
require 'sqlite3'

class MovieDatabase < SQLite3::Database
  include Singleton

  def initialize
    super(File.dirname(__FILE__) + '/../movie.db')

    self.results_as_hash = true
    self.type_translation = true
  end

  def self.execute(*args)
    self.instance.execute(*args)
  end
end

# 1. Obtain the cast list for the movie "Days of Being Wild"; order by the
# actors' name.
def days_of_being_wild_cast
  MovieDatabase.execute(<<-SQL)
    SELECT 
      name
    FROM
      actors
      JOIN castings
        ON actors.id = actor_id
      JOIN movies
        ON movies.id = movie_id
    WHERE
      title = 'Days of Being Wild'
    ORDER BY
      name
  SQL
end

# 2. List the films 'Tsui Hark' has directed; order by
# movie title.
def tsui_hark_films
  MovieDatabase.execute(<<-SQL)
    SELECT
      title
    FROM
      movies
      JOIN actors
        ON movies.director = actors.id
    WHERE
      name = 'Tsui Hark'
    ORDER BY 
      title
  SQL
end

# 3. List the films where actors with a last name
# of 'Kent' have appeared, but not in the star role.
# List the movie title and the actor name. Order by movie title.
# Note: The last name must exactly be 'Kent'. Hyphenated lasted names
# (e.g. 'Mary-Kent') should not count.
def kent_supporting_actor_films
  MovieDatabase.execute(<<-SQL)
    SELECT
      title, name
    FROM
      movies
      JOIN castings
        ON movies.id = movie_id
      JOIN actors
        ON actor_id = actors.id
    WHERE 
      ord > 1 AND name LIKE '% Kent'
    ORDER BY
      title
  SQL
end

# 4. List the films together with the leading star for all 1943
# films. Order by the actor's name.
def leading_star_for_1943_films
  MovieDatabase.execute(<<-SQL)
    SELECT
      title, name
    FROM
      movies
      JOIN castings
        ON movies.id = movie_id
      JOIN actors
        ON actor_id = actors.id
    WHERE
      yr = 1943 AND ord = 1
    ORDER BY
      name
  SQL
end

# 5. There is a movie from 1920 in our database for which there is no
#    associated casting information. Give the title of this movie.
def no_casting_info
  MovieDatabase.execute(<<-SQL)
    SELECT
      title
    FROM
      movies
      LEFT JOIN castings
        ON movies.id = movie_id
    WHERE
      movie_id IS NULL AND yr = 1920
  SQL
end

# 6. Obtain a list in alphabetical order of actors who've had >=26
# starring roles. Order by actor name.
def biggest_stars
  MovieDatabase.execute(<<-SQL)
    SELECT
      name, COUNT(*) AS count
    FROM
      actors
      JOIN castings
        ON actor_id = actors.id
    WHERE
      ord = 1
    GROUP BY
      name
    HAVING
      COUNT(*) >= 26
    ORDER BY
      name
  SQL
end

# 7. List the movie year, movie title, and supporting actor (ord = 2)
# for all of the films in which Will Smith played the star role
# (ord = 1). Order by the name of the supporting actors.
def will_smith_supporting_actors
  MovieDatabase.execute(<<-SQL)
    SELECT
      yr, title, name
    FROM
      movies
      JOIN castings
        ON movies.id = movie_id
      JOIN actors
        ON actors.id = actor_id
    WHERE
      ord = 2 AND movies.id IN (
        SELECT
          movies.id
        FROM
          movies
          JOIN castings
            ON movies.id = movie_id
          JOIN actors
            ON actors.id = actor_id
        WHERE
          name = 'Will Smith' AND ord = 1
      )
    ORDER BY
      name
  SQL
end

# 8. There is a movie in which 'Barrie Ingham' plays two roles. Write a
# query that returns the title of this movie.
def barrie_ingham_multiple_roles
  MovieDatabase.execute(<<-SQL)
    SELECT
      title
    FROM
      movies
      JOIN castings
        ON movies.id = movie_id
      JOIN actors
        ON actors.id = actor_id
    WHERE
      name = 'Barrie Ingham'
    GROUP BY
      title
    HAVING
      COUNT(*) = 2
  SQL
end
