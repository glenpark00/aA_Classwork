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

# List the films in which 'Chuck Norris' has appeared; order by movie
# title.
def bearded_films
  MovieDatabase.execute(<<-SQL)
    SELECT
      title
    FROM
      movies
      JOIN castings
        ON movies.id = castings.movie_id
      JOIN actors
        ON castings.actor_id = actors.id
    WHERE
      name = 'Chuck Norris'
  SQL
end

# Obtain the cast list for the movie "Zombies of the Stratosphere";
# order by the actor's name.
def zombie_cast
  MovieDatabase.execute(<<-SQL)
    SELECT
      name
    FROM
      actors
      JOIN castings
        ON actors.id = castings.actor_id
      JOIN movies
        ON castings.movie_id = movies.id
    WHERE
      title = 'Zombies of the Stratosphere'
    ORDER BY
      name
  SQL
end

# Which were the busiest years for 'Danny DeVito'? Show the year and
# the number of movies he acted in for any year in which he was part of
# >2 movies. Order by year. Note the 'V' is capitalized.
def biggest_years_for_little_danny
  MovieDatabase.execute(<<-SQL)
    SELECT 
      yr, COUNT(*) AS count
    FROM
      actors
      JOIN castings
        ON actors.id = castings.actor_id
      JOIN movies
        ON castings.movie_id = movies.id
    WHERE
      name = 'Danny DeVito'
    GROUP BY
      yr
    HAVING
      COUNT(*) > 2
    ORDER BY
      yr
  SQL
end

# List the films where 'Nicolas Cage' has appeared, but not in the
# star role. Order by movie title.
def more_cage_please
  MovieDatabase.execute(<<-SQL)
    SELECT
      title
    FROM
      movies
      JOIN castings
        ON movies.id = castings.movie_id
      JOIN actors
        ON castings.actor_id = actors.id
    WHERE 
      ord != 1 AND name = 'Nicolas Cage'
    ORDER BY
      title
  SQL
end

# List the films together with the leading star for all 1908
# films. Order by movie title.
def who_is_florence_lawrence
  MovieDatabase.execute(<<-SQL)
    SELECT
      title, name
    FROM
      movies
      JOIN castings
        ON movies.id = castings.movie_id
      JOIN actors
        ON castings.actor_id = actors.id
    WHERE
      yr = 1908 AND ord = 1
    ORDER BY
      title
  SQL
end

# Some actors listed in our database are not associated with any actual
# movie role(s). How many such actors are there? Alias this number as
# 'num_bad_actors'.
def count_bad_actors
  MovieDatabase.execute(<<-SQL)
    SELECT
      COUNT(*) AS num_bad_actors
    FROM
      actors
      LEFT JOIN castings
        ON actors.id = castings.actor_id
    WHERE
      castings.movie_id IS NULL
SQL
end

# Obtain a list in alphabetical order of actors who've had exactly 20
# starring roles. Order by actor name.
def twenty_roles
  MovieDatabase.execute(<<-SQL)
    SELECT
      name
    FROM
      actors
      JOIN castings
        ON actors.id = castings.actor_id
    WHERE
      ord = 1
    GROUP BY
      name
    HAVING
      COUNT(*) = 20
    ORDER BY
      name
  SQL
end

# List the film title and the leading actor for all of the films
# 'Chris Farley' played in.
def chris_is_missed
  MovieDatabase.execute(<<-SQL)
    /*SELECT
      title, actors_b.name
    FROM
      movies
      JOIN castings castings_a
        ON movies.id = castings_a.movie_id
      JOIN actors actors_a
        ON castings_a.actor_id = actors_a.id
      JOIN castings castings_b
        ON movies.id = castings_b.movie_id
      JOIN actors actors_b
        ON castings_b.actor_id = actors_b.id
    WHERE
      actors_a.name = 'Chris Farley' AND castings_b.ord = 1*/
    
    SELECT
      title, name
    FROM
      movies
      JOIN castings
        ON movies.id = castings.movie_id
      JOIN actors
        ON castings.actor_id = actors.id
    WHERE
      ord = 1 AND movies.id IN (
        SELECT
          movies.id
        FROM
          movies
          JOIN castings
            ON movies.id = castings.movie_id
          JOIN actors
            ON castings.actor_id = actors.id
        WHERE
          name = 'Chris Farley'
      )
  SQL
end
