from flask import Flask, jsonify, logging, render_template, request
from flask_cors import CORS
import pandas as pd
import os
from portfolio_analytics.classes.market_data import MarketData
from portfolio_analytics.classes.portfolio_decomposer import PortfolioDecomposer

app = Flask(__name__)
CORS(app)

# Paths for portfolio_analytics data

DB_PATH = os.path.abspath("portfolio_analytics/data/stocks.db")
META_PATH = os.path.abspath("portfolio_analytics/data/etf_metadata.json")

# Initialize MarketData
market_data = MarketData(db_name=DB_PATH, meta_file=META_PATH)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

'''@app.route("/")
def index():
    return render_template("index.html")
    '''

@app.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400
    
    '''logging.info(f"Received file: {file.filename}")
    logging.info(f"Content type: {file.content_type}")
    logging.info(f"Content length: {request.content_length} bytes")'''

    filepath = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(filepath)

    try:
        df = pd.read_csv(filepath) if file.filename.endswith(".csv") else pd.read_excel(filepath)

        portfolio_analyzer = PortfolioDecomposer(port=df, market_data=market_data)
        decomposed_stocks = portfolio_analyzer.decompose_stocks()
        decomposed_sectors = portfolio_analyzer.decompose_sectors()

        decomposed_stocks.index += 1
        decomposed_sectors.index += 1

        print("📊 Stocks:\n", decomposed_stocks)
        print("🏭 Sectors:\n", decomposed_sectors)

        print("✅ Returning JSON with tables...")

        # Early exit if everything is empty
        if decomposed_stocks.empty and decomposed_sectors.empty:
            return jsonify({"error": "No valid data found in your portfolio (holdings or sectors missing)."}), 200


        return jsonify({
        "stocks": decomposed_stocks.to_html(classes="table w-full text-sm text-left text-gray-500"),
        "sectors": decomposed_sectors.to_html(classes="table w-full text-sm text-left text-gray-500")
    })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)