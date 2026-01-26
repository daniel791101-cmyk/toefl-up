import os
import json
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

def get_client():
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise ValueError("OPENAI_API_KEY not found in environment variables")
    return OpenAI(api_key=api_key)

def generate_toefl_content(type: str, topic: str, subtype: str = None):
    client = get_client()
    """
    Generates TOEFL practice content using GPT.
    type: 'reading' or 'listening'
    topic: 'history', 'science', 'art', etc.
    subtype: 'lecture' or 'conversation' (only for listening)
    """
    
    prompt = f"""
    Generate a professional TOEFL {type} practice set.
    Topic: {topic}
    {f"Subtype: {subtype}" if type == 'listening' and subtype else ""}
    
    The content should be authentic to the TOEFL iBT format.
    - If reading: Provide a high-level academic passage (approx 400-500 words).
    - If listening: Provide a transcript for a {subtype or 'lecture/conversation'} (approx 400-500 words).
    
    Provide exactly 3 questions.
    
    Return ONLY a JSON object in this format:
    {{
        "type": "{type}",
        "title": "A title for the practice",
        "content": "The passage or transcript content here",
        "questions": {{
            "1": {{
                "desc": "Question description",
                "type": "单选",
                "options": ["A", "B", "C", "D"],
                "answer": 0  // index of correct option
            }},
            "2": {{
                "desc": "Question description",
                "type": "单选",
                "options": ["A", "B", "C", "D"],
                "answer": 1
            }},
            "3": {{
                "desc": "Question description",
                "type": "多选",
                "options": ["A", "B", "C", "D"],
                "answer": [0, 2] // indices of correct options
            }}
        }}
    }}
    """

    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {{"role": "system", "content": "You are an expert TOEFL test developer."}},
            {{"role": "user", "content": prompt}}
        ],
        response_format={{ "type": "json_object" }}
    )

    return json.loads(response.choices[0].message.content)
