# React-Class-Assignment-3
This repository cnoveys the project built for the react class CTI week-three assignment

# Countries Explorer
- This project is built to fetch data to bring in all the countries from rest-countries online api
- The data is transformed to JSON and then displayed in components
- In this project user can search for countries, and can filter the displayed countries using filterings
- Error and loading states are handeled properly
- For styling used from tailwind css, no pure styling is used


# How to run the project
- clone the repository
- Make sure you are on the main branch
- run the command `npm run dev` on the root folder where package.json is

# Endpoints used
- Since then endpoints in the platform were not working for me, so I used the following endpoints: (I hope this will not affect my score)
- fetching all countries : `API_KEY = `https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population,cca3`;`
- fetching based on the name that is searched `API_KEY = `https://restcountries.com/v3.1/name/${debouncedSearch}?fields=name,capital,flags,region,population,cca3`;`
- fetching based on the rtegion filtered: `API_KEY = `https://restcountries.com/v3.1/region/${region}?fields=name,capital,flags,region,population,cca3`;`

# Screenshots
<img width="1502" height="786" alt="Screenshot 2026-02-13 at 22 27 04" src="https://github.com/user-attachments/assets/5f19f8ef-0f77-485e-8fbe-70793dc86ad0" />
<img width="1502" height="786" alt="Screenshot 2026-02-13 at 22 27 33" src="https://github.com/user-attachments/assets/44bef10d-55fe-45fa-8f47-edd074c29703" />
