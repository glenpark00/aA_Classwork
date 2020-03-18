# == Schema Information
#
# Table name: countries
#
#  name        :string       not null, primary key
#  continent   :string
#  area        :integer
#  population  :integer
#  gdp         :integer

require_relative './sqlzoo.rb'

def highest_gdp
  # Which countries have a GDP greater than every country in Europe? (Give the
  # name only. Some countries may have NULL gdp values)
  execute(<<-SQL)
    SELECT
      name
    FROM
      countries
    WHERE
      gdp > (
        SELECT
          MAX(gdp)
        FROM
          countries
        WHERE
          continent = 'Europe'
      )
  SQL
end

def largest_in_continent
  # Find the largest country (by area) in each continent. Show the continent,
  # name, and area.
  execute(<<-SQL)
    /* SELECT
      continent, ordered_by_area[1], largest_area
    FROM
      (
        SELECT 
          continent, 
          ARRAY_AGG(name ORDER BY area DESC) AS ordered_by_area,
          MAX(area) as largest_area
        FROM
          countries
        GROUP BY
          continent
      ) AS countries_ordered_by_area_by_cont */

    SELECT
      countries.continent, name, area
    FROM
      countries
    JOIN
      (
        SELECT
          continent, MAX(area) AS highest_area_in_cont
        FROM
          countries
        GROUP BY 
          continent
      ) AS max_area_by_cont
    ON
      countries.continent = max_area_by_cont.continent
    WHERE
      countries.area = max_area_by_cont.highest_area_in_cont
  SQL
end

def large_neighbors
  # Some countries have populations more than three times that of any of their
  # neighbors (in the same continent). Give the countries and continents.
  execute(<<-SQL)
    SELECT
      name, countries.continent
    FROM
      countries
    JOIN
      (SELECT
        countries.continent, MAX(population) AS second_biggest_pop
      FROM
        countries
      JOIN
        (
          SELECT
            continent, MAX(population) AS max_pop
          FROM
            countries
          GROUP BY
            continent
        ) AS max_pop_by_cont
      ON
        countries.continent = max_pop_by_cont.continent
      WHERE NOT
        countries.population = max_pop_by_cont.max_pop
      GROUP BY
        countries.continent
        ) AS second_biggest_pop_by_cont
    ON
      countries.continent = second_biggest_pop_by_cont.continent
    WHERE
      countries.population > 3 * second_biggest_pop_by_cont.second_biggest_pop
  SQL
end
