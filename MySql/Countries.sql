-- SELECT countries.name,languages.language,languages.percentage 
-- FROM countries
-- JOIN languages ON countries.id = languages.country_id
-- WHERE languages.language LIKE "Slovene"
-- ORDER BY languages.percentage DESC;

-- What query would you run to get all the countries that speak Slovene? Your query should return the name of the country, language and language percentage. Your query should arrange the result by language percentage in descending order. (1)

-- SELECT countries.name AS country_name, COUNT(cities.country_id) AS Num_city
-- FROM countries
-- JOIN cities ON countries.id = cities.country_id GROUP BY cities.country_id
-- ORDER BY Num_city DESC

-- SELECT cities.name, cities.population
-- FROM countries
-- JOIN cities ON countries.id = cities.country_id
-- WHERE countries.name like "Mexico" AND cities.population > 500000
-- ORDER BY cities.population DESC

-- SELECT countries.name, languages.language, languages.percentage
-- FROM countries
-- JOIN languages ON countries.id = languages.country_id
-- WHERE languages.percentage > 89.0
-- ORDER BY languages.percentage DESC

-- SELECT countries.name, countries.surface_area, countries.population
-- FROM countries
-- WHERE countries.surface_area < 501 AND countries.population > 100000

-- SELECT distinct countries.name, countries.government_form, countries.capital, countries.life_expectancy
-- FROM countries
-- WHERE countries.government_form LIKE "Constitutional Monarchy" AND countries.capital > 200 AND countries.life_expectancy > 75 

-- SELECT countries.name, cities.name, cities.district, cities.population
-- FROM countries
-- JOIN cities ON countries.id = cities.country_id
-- WHERE countries.name LIKE "Argentina" AND cities.district LIKE "Buenos Aires" AND cities.population > 500000

SELECT countries.region AS Regions, COUNT(countries.id)
FROM countries
GROUP BY region
ORDER BY COUNT(countries.id) DESC




