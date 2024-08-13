import { Router } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/:city', (req, res) => {
  // TODO: GET weather data from city name
  router.get('/api/weather/', async (_req, res) => {
    try {
      const cityName = req.params.city;
      
      (cityName);
      const cities = await WeatherService.getWeatherForCity(cityName);
      
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });
  // TODO: save city to search history

});

// TODO: GET search history
router.get('/history', async (req, res) => {
  try {
    const historyResults = req.params;

  } catch (error) {
    res.status(500).json(error);
  }
});

// * BONUS TODO: DELETE city from search history
router.delete('history/:id', async (req, res) => {
  try {
    if (!req.params.id) {
      res.status(400).json({msg: 'Search History City ID required'});
    }
    await HistoryService.removeCity(req.params.id);
    res.json({success: 'City successfully removed from search history'});

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default router;


// app.get('/api/contacts/:id', async (req, res) => {
//   try {
//     const requestedId: string = req.params.id;

//     // Read contacts from the file, parse the JSON, and find the contact with the requested ID
//     const contacts: string = await fs.readFile('src/db/contacts.json', 'utf8');
//     const parsedContacts: Contact[] = JSON.parse(contacts);
//     const result = parsedContacts.find(
//       (contact: Contact) => contact.id === requestedId
//     );

//     if (result) {
//       return res.status(200).json(result);
//     } else {
//       return res.status(404).json('No match found');
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json('Error getting contacts');
//   }
// });