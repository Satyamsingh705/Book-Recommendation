# Book Recommendation System

A Book Recommendation System that provides personalized book suggestions to users based on collaborative filtering and cosine similarity. The system integrates a machine learning model with a user-friendly frontend to deliver accurate recommendations.

## Features
- Frontend: Built with HTML, CSS, JavaScript, and Bootstrap for an intuitive and responsive user interface.
- Backend: Powered by Flask, connecting the frontend with the recommendation engine.
- Recommendation Engine: Uses collaborative filtering and cosine similarity to compute book recommendations based on user preferences.

---

Dataset : https://www.kaggle.com/datasets/arashnic/book-recommendation-dataset

## Project Structure
```plaintext
├── templates/
│   ├── index.html       # Main page of the application
│   ├── recommendations.html # Page to display book suggestions
├── static/
│   ├── css/             # Custom CSS files
│   ├── js/              # JavaScript files
│   ├── images/          # Images used in the frontend
├── app.py               # Flask application (backend logic)
├── recommendation_model.py # Collaborative filtering ML model
├── requirements.txt     # Python dependencies
├── README.md            # Project documentation

