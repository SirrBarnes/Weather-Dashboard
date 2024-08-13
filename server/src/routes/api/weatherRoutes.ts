import { Router } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/:city', (req, res) => {
  if (req.params.city) {
    res.status(400).json({msg: 'Please input city'})
  }
  // TODO: GET weather data from city name
  router.get('/api/weather/', async (_req, res) => {
    try {
      if (!req.params.city) {
        res.status(400).json({msg: 'Please input city'})
      }
      const cityName = req.params.city;
      
      (cityName);
      const cities = await WeatherService.getWeatherForCity(cityName);
      console.log(cities);
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
    
    console.log(historyResults);
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