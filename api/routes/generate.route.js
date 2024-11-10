import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const geminiEndpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
const apiKey = process.env.API_KEY;  // Use the API key from your .env file

router.post('/generate-content', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ success: false, message: "Prompt is required" });
  }

  try {
    const requestBody = {
      contents: [
        {
          parts: [
            { text: prompt }
          ]
        }
      ]
    };

    // Make the call to Gemini API to generate content
    const response = await axios.post(`${geminiEndpoint}?key=${apiKey}`, requestBody);

    if (response.data && response.data.candidates && response.data.candidates.length > 0) {
      const generatedContent = response.data.candidates[0].content;
      res.status(200).json({ success: true, content: generatedContent });
    } else {
      res.status(500).json({ success: false, message: "No content generated" });
    }
  } catch (error) {
    console.error("Error generating content:", error.message);
    res.status(500).json({ success: false, message: "Error generating content", error: error.message });
  }
});

export default router;
