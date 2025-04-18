import Trip from '../models/Trip.js';

export const createTrip = async (req, res) => {
  const { title, cities, itinerary, activities } = req.body;

  try {
    const newTrip = new Trip({
      userId: req.user.id,
      title,
      cities,
      itinerary,
      activities,
    });

    await newTrip.save();
    res.status(201).json(newTrip);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ userId: req.user.id });
    res.json(trips);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
