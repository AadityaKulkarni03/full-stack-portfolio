
"""
CORS middleware for Flask to allow cross-origin requests from your React frontend.
You need to add this to your Flask app.py file.

Add this to your Flask app as follows:

from flask_cors import CORS
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
"""

# To implement this, you'll need to install flask-cors:
# pip install flask-cors

"""
IMPORTANT: To enable CORS in your Flask app, add these lines to your app.py:

from flask_cors import CORS
app = Flask(__name__)
CORS(app)  # This enables CORS for all routes

If you need more specific CORS settings:
CORS(app, resources={r"/upload": {"origins": "https://your-frontend-domain.com"}})
"""
